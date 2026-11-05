// ============================================================================
// Layer 1: Deep Global & Rural Medical / Safe-Haven Discovery
// Combines:
//   1. Humanitarian OpenStreetMap Team (HOTOSM / Healthsites.io) Overpass API
//      covering urban hospitals, OB/GYN clinics, rural health posts, village
//      dispensaries, birthing centers, midwives, community health posts,
//      and women's safe shelters / NGO safe spaces.
//   2. Multi-mirror Overpass failover so rural scans never fail.
//   3. OpenStreetMap Nominatim parallel rural search fallback for remote areas.
// ============================================================================

const overpassCache = new Map();

const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://lz4.overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter'
];

const SAFE_HAVEN_REGEX =
  /shelter|safe haven|safe house|refugio|refuge|women's center|women center|woman center|maison des femmes|casa da mulher|casa de la mujer|casa abrigo|dar-ul-aman|dar ul aman|dar el-diafa|دار الأمان|دارالامان|پناہ|دستک|مركز إيواء|مركز استماع|خانه امن|بهزیستی|اورژانس اجتماعی|خانه خورشید|wassila|ciddef|crisis|sanctuary|sakhi|one stop|bharosa|aparajita|snehitha|swadhar|garima greh|wfs|frauenhaus|kvinnojour|krisesenter|centro de emergencia mujer|hifazot|gbv|domestic violence|violences femmes|baahi-koob|mirabel|panah|dastak|mahila|reabilitatsiya|реабилитац|himoya|rahmdillik|反家暴|庇护|庇護|妇女维权|婦女維權|妇联|和諧之家|風雨蘭/i;

const OBGYN_RURAL_REGEX =
  /gynaec|gynec|obstet|matern|midwife|partera|parteira|sage-femme|hebamme|dhatri|women|woman|femme|mujer|mulher|frauen|birth|natal|perinatal|перинатал|tug'ruq|tug‘ruq|tugruq|туғруқ|тугрук|роддом|родильн|таваллудхона|zayeshgah|زایشگاه|بیمارستان زنان|جامع بانوان|زنان و زایمان|مامایی|زیږنتون|نسایی ولادی|ملالی|رابعه بلخی|آشیانه صحی|زچگی|زنانہ ہسپتال|لیڈی ڈفرن|لیڈی ولنگڈن|لیڈی ریڈنگ|کوہی گوٹھ|аёллар|ayollar|женск|mère-enfant|mere-enfant|مستشفى الولادة|مستشفى النساء|نساء وتوليد|الأم والطفل|fistula|mother|mère|madre|mãe|onalik|оналик|maichin|mahila|chikitsalaya|zanana|prasuti|matru|cloudnine|motherhood|apollo cradle|la femme|fernandez|dufferin|willingdon|aitchison|kasturba|妇幼保健|妇产|妇女儿童|妇婴|产科|妇科|婦幼|婦產|lady|zan|meye/i;

const RURAL_CLINIC_REGEX =
  /health post|posto de saúde|puesto de salud|centro de salud|centre de santé|dispensaire|dispensary|puskesmas|polindes|posyandu|bhu|basic health unit|rhc|rural health|chc|community health|sub-centre|sub center|subcentre|anm|asha|hwc|arogya mandir|primary health|phc|uphc|aphc|prathmik|samudayik|प्राथमिक|सामुदायिक|sadar hospital|taluka hospital|tehsil hospital|block hospital|aushadhalaya|upazila health|feldsher|фельдшер|фап|fap|qvp|қвп|ttb|ттб|tibbiyot|тиббиёт|shifoxona|шифохона|poliklinika|поликлиника|ambulatorio|амбулатор|eph|ehs|chu|polyclinique|مستوصف|وحدة صحية|خانه بهداشت|درمانگاه|مرکز بهداشت|بهداشت|卫生院|卫生室|社区卫生|klinik|clinic/i;

function classifyFacility(rawName, tags = {}) {
  const combined = `${rawName} ${tags['healthcare:speciality'] || ''} ${tags.description || ''} ${tags.operator || ''}`;
  const isSafeHaven =
    tags.social_facility === 'shelter' ||
    tags.social_facility === 'women' ||
    (tags['social_facility:for'] && /woman|women|girl|victim|abuse|gbv|refugee|mother/i.test(tags['social_facility:for'])) ||
    (tags['community_centre:for'] && /woman|women|girl|victim|refugee/i.test(tags['community_centre:for'])) ||
    SAFE_HAVEN_REGEX.test(combined);

  if (isSafeHaven) return 'safe-haven';

  const isObgyn =
    tags.healthcare === 'midwife' ||
    tags.healthcare === 'birthing_center' ||
    OBGYN_RURAL_REGEX.test(combined);

  if (isObgyn) return 'obgyn';
  return 'hospital';
}

function cleanWardSuffix(str) {
  if (!str) return '';
  return String(str).replace(/\s+Ward\s+\d+$/i, '').trim();
}

function extractEmbeddedPhoneAndCleanName(rawName) {
  let cleanedName = String(rawName || '').trim();
  let extractedPhone = '';
  const match = cleanedName.match(
    /(?:[-–—•|,/(\s]*(?:tél\.?|tel\.?|téléphone|teléfono|telefono|phone|ph\.?|cel\.?|whatsapp|línea azul|teléfono verde)?\s*[:.]?\s*)((?:\+|00)?\d[\d\s\-().]{6,}\d)\)?\s*$/i
  );
  if (match && match[1]) {
    const digits = match[1].replace(/\D/g, '');
    if (digits.length >= 7) {
      extractedPhone = match[1].trim();
      const prefix = cleanedName.slice(0, match.index).replace(/[-–—•|,/\s(&]+$/, '').trim();
      if (prefix.length >= 3) {
        cleanedName = prefix;
      }
    }
  }
  return { cleanedName, extractedPhone };
}

function buildFacilityObject(id, cLat, cLng, rawName, tags = {}, regionLabel = 'Local Area') {
  const { cleanedName, extractedPhone } = extractEmbeddedPhoneAndCleanName(rawName);
  const facilityType = classifyFacility(cleanedName, tags);
  const isSafeHaven = facilityType === 'safe-haven';
  const isObgyn = facilityType === 'obgyn';
  const isRuralPost =
    tags.amenity === 'health_post' ||
    tags.healthcare === 'health_post' ||
    tags.healthcare === 'community_health_worker' ||
    tags.healthcare === 'nurse' ||
    RURAL_CLINIC_REGEX.test(cleanedName);

  const directPhone =
    tags.phone ||
    tags['contact:phone'] ||
    tags.telephone ||
    tags['phone:1'] ||
    tags['contact:mobile'] ||
    tags['phone:mobile'] ||
    tags.emergency_phone ||
    extractedPhone ||
    '';

  const phone = directPhone || '';
  const email = tags.email || tags['contact:email'] || '';
  const website = tags.website || tags['contact:website'] || tags.url || '';
  const openHours =
    tags.opening_hours === '24/7'
      ? 'Open 24 hours'
      : tags.opening_hours
      ? tags.opening_hours
      : '';

  const houseAndStreet = [tags['addr:housenumber'], tags['addr:street']].filter(Boolean).join(' ').trim();
  const suburbPart = cleanWardSuffix(
    tags['addr:suburb'] || tags['addr:neighbourhood'] || tags['addr:quarter'] || tags['addr:village'] || tags['addr:hamlet'] || tags['addr:place'] || ''
  );
  const cityPart = cleanWardSuffix(tags['addr:city'] || tags['addr:town'] || tags['addr:municipality'] || tags['addr:district'] || '');
  const postcodePart = (tags['addr:postcode'] || '').trim();
  const countryPart = (tags['addr:country'] === 'ZA' ? 'South Africa' : tags['addr:country'] || '').trim();

  const rawParts = [houseAndStreet, suburbPart, cityPart, postcodePart, countryPart].filter(Boolean);
  const dedupedParts = [];
  for (const p of rawParts) {
    if (!dedupedParts.some((existing) => existing.toLowerCase() === p.toLowerCase())) {
      dedupedParts.push(p);
    }
  }

  const locality = cityPart || suburbPart || cleanWardSuffix(regionLabel);
  const addressText = dedupedParts.length > 0 ? dedupedParts.join(', ') : locality;

  const badgeEn = isSafeHaven
    ? 'Women’s Safe Haven, Shelter & Protection Center'
    : isObgyn
    ? 'OBGYN, Midwifery & Maternity Center'
    : isRuralPost
    ? 'Rural Health Post, Midwife & Primary Clinic'
    : '24/7 Hospital, Clinic & Emergency Care';

  return {
    id,
    regionDistrict: locality,
    type: facilityType,
    lat: cLat,
    lng: cLng,
    name: {
      en: cleanedName
    },
    categoryBadge: {
      en: badgeEn
    },
    phone,
    email,
    website,
    openHours,
    emergencyHotline: phone || '',
    address: {
      en: addressText
    },
    services: {
      en: isSafeHaven
        ? [
            'Women’s Safe Haven, Shelter & Crisis Support',
            'Confidential Protection, Outreach & Social Assistance',
            'Direct Maternal & Hospital Referral'
          ]
        : isObgyn
        ? [
            'Obstetrics, Gynecology, Midwifery & Safe Childbirth',
            'Prenatal, Postpartum & Abnormal Bleeding Care',
            'Reproductive & Menopause Health Services'
          ]
        : isRuralPost
        ? [
            'Rural Health Post, Midwife & Primary Maternal Triage',
            'Essential Medications, Prenatal Checks & Safe Delivery Referral',
            'Community Health Worker & Emergency Transport Link'
          ]
        : [
            '24/7 Emergency Medical, Hospital & Clinic Care',
            'Maternal, Obstetric & Acute Gynecological Triage',
            'Inpatient & Outpatient Health Services'
          ]
    },
    directionsText: {
      en: `Located at ${addressText}. Tap Get Directions for live route & distance.`
    }
  };
}

async function queryOverpassWithFailover(query) {
  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 11000);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: 'data=' + encodeURIComponent(query),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.elements)) {
          return data.elements;
        }
      }
    } catch (err) {
      // Try next mirror
    }
  }
  return [];
}

// Parallel Nominatim rural fallback for remote districts where Overpass tags may be sparse
async function fetchNominatimRuralFallback(lat, lng, radiusKm = 45, regionLabel = 'Rural District') {
  const degLat = radiusKm / 111.0;
  const degLng = radiusKm / Math.max(25.0, 111.0 * Math.cos((lat * Math.PI) / 180));
  const left = (lng - degLng).toFixed(4);
  const top = (lat + degLat).toFixed(4);
  const right = (lng + degLng).toFixed(4);
  const bottom = (lat - degLat).toFixed(4);

  const searchTerms = ['hospital', 'clinic', 'maternity', 'health center', 'women shelter'];
  if (lat >= 25.0 && lat <= 41.0 && lng >= 44.0 && lng <= 75.0) {
    searchTerms.push('بیمارستان', 'زایشگاه', 'درمانگاه', 'شفاخانه');
  }
  const gathered = [];

  await Promise.all(
    searchTerms.map(async (term) => {
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&extratags=1&q=${encodeURIComponent(
          term
        )}&viewbox=${left},${top},${right},${bottom}&bounded=1&limit=20`;
        const res = await fetch(url);
        if (!res.ok) return;
        const items = await res.json();
        if (!Array.isArray(items)) return;
        for (const item of items) {
          const cLat = parseFloat(item.lat);
          const cLng = parseFloat(item.lon);
          if (isNaN(cLat) || isNaN(cLng)) continue;
          const title = (item.display_name || '').split(',')[0].trim() || `${regionLabel} ${term}`;
          const district = (item.display_name || '').split(',').slice(1, 3).join(',').trim() || regionLabel;
          gathered.push(
            buildFacilityObject(
              `nom-${item.osm_type || 'n'}-${item.osm_id}`,
              cLat,
              cLng,
              title,
              item.extratags || {},
              district
            )
          );
        }
      } catch (e) {}
    })
  );

  return gathered;
}

export async function fetchLiveCentersNearPoint(lat, lng, radiusMeters = 45000, regionLabel = 'Local Area') {
  const cacheKey = `${lat.toFixed(2)},${lng.toFixed(2)},${radiusMeters}`;
  if (overpassCache.has(cacheKey)) {
    return overpassCache.get(cacheKey);
  }

  // Comprehensive HOTOSM / Healthsites.io + Safe Haven query covering urban AND rural health posts
  const query = `
    [out:json][timeout:12];
    (
      nwr["amenity"~"hospital|clinic|doctors|health_post"](around:${radiusMeters},${lat},${lng});
      nwr["healthcare"~"hospital|clinic|centre|center|health_post|birthing_center|midwife|nurse|doctor|community_health_worker"](around:${radiusMeters},${lat},${lng});
      nwr["healthcare:speciality"~"gynaecology|obstetrics|maternity|women"](around:${radiusMeters},${lat},${lng});
      nwr["social_facility"~"shelter|women|outreach|group_home"](around:${radiusMeters},${lat},${lng});
      nwr["social_facility:for"~"woman|women|girl|victim|refugee|mother"](around:${radiusMeters},${lat},${lng});
      nwr["community_centre:for"~"woman|women|girl|victim|refugee"](around:${radiusMeters},${lat},${lng});
      nwr["women"="yes"](around:${radiusMeters},${lat},${lng});
    );
    out center 160;
  `;

  try {
    const [elements, nominatimFallback] = await Promise.all([
      queryOverpassWithFailover(query),
      fetchNominatimRuralFallback(lat, lng, Math.max(30, radiusMeters / 1000), regionLabel)
    ]);

    const results = [];
    const seenKeys = new Set();

    for (const el of elements) {
      const cLat = el.lat ?? el.center?.lat;
      const cLng = el.lon ?? el.center?.lon;
      if (typeof cLat !== 'number' || typeof cLng !== 'number') continue;

      const tags = el.tags || {};
      const rawName =
        tags['name:en'] ||
        tags.name ||
        tags.official_name ||
        tags.operator ||
        (tags.social_facility
          ? `${regionLabel} Women & Community Safe Shelter`
          : tags.amenity === 'health_post' || tags.healthcare === 'health_post'
          ? `${regionLabel} Rural Health Post & Midwife Clinic`
          : `${regionLabel} Hospital & Health Center`);

      const normKey = `${rawName.toLowerCase().slice(0, 24)}-${cLat.toFixed(2)}-${cLng.toFixed(2)}`;
      if (seenKeys.has(normKey)) continue;
      seenKeys.add(normKey);

      results.push(buildFacilityObject(`osm-${el.type}-${el.id}`, cLat, cLng, rawName, tags, regionLabel));
    }

    for (const fb of nominatimFallback) {
      const normKey = `${fb.name.en.toLowerCase().slice(0, 24)}-${fb.lat.toFixed(2)}-${fb.lng.toFixed(2)}`;
      if (seenKeys.has(normKey)) continue;
      seenKeys.add(normKey);
      results.push(fb);
    }

    // If a remote rural desert/mountain area had very few mapped clinics within radiusMeters,
    // automatically expand the search radius to 130 km so the user ALWAYS finds the nearest rural clinic!
    if (results.length < 3 && radiusMeters < 120000) {
      const widerResults = await fetchLiveCentersNearPoint(lat, lng, 130000, regionLabel);
      overpassCache.set(cacheKey, widerResults);
      return widerResults;
    }

    overpassCache.set(cacheKey, results);
    return results;
  } catch (err) {
    return [];
  }
}
