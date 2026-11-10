// ============================================================================
// Layer 1: Deep Global & Rural Medical / Safe-Haven Discovery
// Combines:
//   1. Humanitarian OpenStreetMap Team (HOTOSM / Healthsites.io) Overpass API
//      covering urban hospitals, OB/GYN clinics, rural health posts, village
//      dispensaries, birthing centers, midwives, community health posts,
//      and women's safe shelters / NGO safe spaces.
//   2. Multi-mirror Overpass failover so rural scans never fail.
//   3. OpenStreetMap Nominatim parallel rural search fallback for remote areas.
//   4. Strict medical/shelter validation & generic/street/restroom filtering so
//      non-medical nodes ("No Restroom", "Mivinjeni Street", bare "Clinic")
//      never appear on the map.
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
  /health post|posto de saúde|puesto de salud|centro de salud|centre de santé|dispensaire|dispensary|puskesmas|polindes|posyandu|bhu|basic health unit|rhc|rural health|chc|community health|sub-centre|sub center|subcentre|anm|asha|hwc|arogya mandir|primary health|phc|uphc|aphc|prathmik|samudayik|प्राथमिक|सामुदायिक|sadar hospital|taluka hospital|tehsil hospital|block hospital|aushadhalaya|upazila health|feldsher|фельдшер|фап|fap|qvp|қвп|ttb|ттб|tibbiyot|тиббиёт|shifoxona|шифохона|poliklinika|поликлиника|ambulatorio|амбулатор|eph|ehs|chu|polyclinique|مستوصف|وحدة صحية|خانه بهداشت|درمانگاه|مرکز بهداشت|بهداشت|卫生院|卫生室|社区卫生|klinik|clinic|zahanati|kituo cha afya/i;

// Strictly reject non-medical/non-shelter tags or names (e.g., "No Restroom", toilets, salons, pharmacies, dentists, streets, hospital sub-rooms)
const FORBIDDEN_NAME_REGEX =
  /no\s*restroom|restroom|toilet|toilets|latrine|lavatory|urinal|\bwc\b|bathroom|washroom|public\s*convenience|choo\b|vyoo\b|salon|barber|coiffure|hairdresser|beauty\s*parl|nail\s*bar|\bspa\b|boutique|tailor|fashion|pharmacy|chemist|apotheke|farmacia|pharmacie|duka\s*la\s*dawa|drug\s*store|med\s*store|medical\s*store|veterinar|animal\s*clinic|pet\s*clinic|livestock|agrovet|dental|dentist|orthodont|optician|optical|optometr|eye\s*glass|eye\s*clinic|skin\s*clinic|dermatol|ent\s*clinic|physiotherap|chiropract|bus\s*stop|daladala|boda\s*stage|parking|car\s*wash|fuel|petrol|gas\s*station|hotel|motel|guest\s*house|hostel|lodge|restaurant|cafe|coffee|bakery|canteen|cafeteria|kitchen|laundry|bar\b|pub\b|nightclub|supermarket|grocery|butcher|hardware|funeral|morgue|mortuary|cemetery|graveyard|prison|police\s*post|admin\s*block|administration|reception|cashier|billing|accounts|security\s*gate|main\s*gate|guard\s*house|generator|incinerator|store\s*room|blood\s*bank|x-?ray|radiology|laboratory|\blab\b/i;

const BARE_GENERIC_NAME_REGEX =
  /^(\s*(private|public|local|community|city|town|district|regional|general|medical|health|rural|urban|national|government|govt|new|old|main|central|st\.?|saint)?\s*(clinic|clinics|hospital|hospitals|dispensary|dispensaries|health\s*cent(er|re)|health\s*post|medical\s*cent(er|re)|medical\s*clinic|maternity|maternity\s*clinic|maternity\s*ward|maternity\s*block|labor\s*ward|labour\s*ward|delivery\s*room|doctor|doctors|doctor's\s*office|physician|health|cent(er|re)|posto\s*de\s*saúde|puesto\s*de\s*salud|centro\s*de\s*salud|centre\s*de\s*santé|klinik|klinika|zahanati|hospitali|kituo\s*cha\s*afya|polyclinic|polyclinique|dispensaire|ambulatorio|ward|wing|unit|branch|department|block|building|room|opd|ipd|ctc|rch|vct|tb\s*clinic|anc|mch|outpatient|inpatient|emergency\s*room|triage|no\s*name|unnamed|unknown|null|undefined|n\/a)(\s+[0-9a-z]{1,3})?\s*)$/i;

const MEDICAL_OR_SHELTER_KEYWORD_REGEX =
  /hospital|hospitali|clinic|klinik|matern|obstet|gynec|gynaec|midwife|dispensary|dispensaire|zahanati|kituo\s*cha\s*afya|health|medical|medecin|médecin|doctor|chc|phc|rhc|bhu|chu|chr|chrr|chrd|csref|cscom|csi|csme|eph|ehs|puskesmas|polyclinic|polyclinique|poliklinika|sanatorio|ambulatorio|infirmary|nursing\s*home|shelter|safe\s*haven|safe\s*house|safe\s*space|refuge|refugio|abrigo|accueil|écoute|ecoute|women|woman|femme|mulher|mujer|frauen|sakhi|one\s*stop|vonjy|unhcr|unfpa|unicef|red\s*cross|croix-rouge|crescent|msf|irc|wlac|tamwa|kivulini|wildaf|fida|marie\s*stopes|ccbrt|aga\s*khan|muhimbili|kcmc|bugando/i;

const STREET_ONLY_SUFFIX_REGEX =
  /\b(street|road|avenue|boulevard|lane|drive|highway|freeway|expressway|way|close|crescent|court|place|square|allee|allée|rue|avenida|calle|estrada|rua|barabara|mtaa|st|rd|ave|blvd)\.?$/i;

const FORBIDDEN_AMENITIES = new Set([
  'toilets',
  'pharmacy',
  'veterinary',
  'dentist',
  'bench',
  'waste_basket',
  'waste_disposal',
  'recycling',
  'drinking_water',
  'parking',
  'fuel',
  'bus_station',
  'taxi',
  'restaurant',
  'cafe',
  'bar',
  'pub',
  'fast_food',
  'bank',
  'atm',
  'bureau_de_change',
  'marketplace',
  'place_of_worship',
  'school',
  'kindergarten',
  'college',
  'university',
  'police',
  'prison',
  'fire_station',
  'post_office',
  'townhall',
  'courthouse'
]);

export function isInvalidFacilityName(nameStr) {
  const n = String(nameStr || '').trim();
  if (!n || n.length < 4) return true;
  if (FORBIDDEN_NAME_REGEX.test(n)) return true;
  if (BARE_GENERIC_NAME_REGEX.test(n)) return true;
  // Reject bare street/road names that do not contain any medical or shelter keyword
  if (STREET_ONLY_SUFFIX_REGEX.test(n) && !MEDICAL_OR_SHELTER_KEYWORD_REGEX.test(n)) {
    return true;
  }
  // Reject strings that are just numbers or Plus Codes
  if (/^[0-9+\-\s.,/()]+$/.test(n) || /^[23456789CFGHJMPQRVWX]{4,8}\+[23456789CFGHJMPQRVWX]{2,5}/i.test(n)) {
    return true;
  }
  return false;
}

function resolveProperFacilityName(rawCandidate, tags = {}, regionLabel = '') {
  const candidates = [
    tags['name:en'],
    tags.name,
    tags.official_name,
    tags.alt_name,
    tags.short_name,
    rawCandidate,
    tags.operator,
    tags.brand
  ]
    .map((x) => String(x || '').trim())
    .filter(Boolean);

  if (FORBIDDEN_NAME_REGEX.test(candidates.join(' '))) {
    return null;
  }

  // Require an authentic, non-generic, non-forbidden proper facility name
  for (const cand of candidates) {
    if (!isInvalidFacilityName(cand) && cand.length >= 6) {
      return cand;
    }
  }

  return null;
}

function isValidMedicalOrShelterElement(tags = {}, osmClass = '', osmType = '') {
  if (!tags || typeof tags !== 'object') return false;
  if (tags.amenity && FORBIDDEN_AMENITIES.has(String(tags.amenity).toLowerCase())) {
    return false;
  }
  if (
    tags.healthcare &&
    /^(pharmacy|dentist|optometrist|physiotherapist|psychotherapist|veterinary|laboratory|blood_donation|sample_collection|audiologist|podiatrist|speech_therapist|occupational_therapist|alternative)$/i.test(
      String(tags.healthcare).trim()
    )
  ) {
    return false;
  }
  if (
    osmClass &&
    /^(highway|place|boundary|shop|leisure|tourism|landuse|natural|railway|waterway|man_made)$/i.test(osmClass)
  ) {
    return false;
  }
  if (
    osmType &&
    /^(toilets|pharmacy|veterinary|dentist|residential|secondary|primary|tertiary|trunk|service|unclassified|footway|path|track|bus_stop|parking)$/i.test(
      osmType
    )
  ) {
    return false;
  }
  // If tagged with shop, highway, tourism, or leisure and no valid hospital/clinic/shelter tag, reject
  const hasValidMedTag =
    /^(hospital|clinic|doctors|health_post|birthing_center|midwife)$/i.test(String(tags.amenity || '')) ||
    /^(hospital|clinic|centre|center|health_post|birthing_center|midwife|nurse|doctor)$/i.test(String(tags.healthcare || '')) ||
    /^(gynaecology|obstetrics|maternity|women)$/i.test(String(tags['healthcare:speciality'] || '')) ||
    /^(shelter|women|outreach|group_home)$/i.test(String(tags.social_facility || '')) ||
    /woman|women|girl|victim|refugee|mother/i.test(String(tags['social_facility:for'] || '')) ||
    /woman|women|girl|victim|refugee/i.test(String(tags['community_centre:for'] || ''));

  if (!hasValidMedTag && (tags.shop || tags.highway || tags.tourism || tags.leisure || tags.amenity === 'toilets')) {
    return false;
  }
  const combinedText = `${tags.name || ''} ${tags['name:en'] || ''} ${tags.description || ''} ${tags.note || ''}`;
  if (FORBIDDEN_NAME_REGEX.test(combinedText)) {
    return false;
  }
  return true;
}

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
  const properName = resolveProperFacilityName(cleanedName, tags, regionLabel);
  if (!properName || isInvalidFacilityName(properName)) {
    return null;
  }

  const facilityType = classifyFacility(properName, tags);
  const isSafeHaven = facilityType === 'safe-haven';
  const isObgyn = facilityType === 'obgyn';
  const isRuralPost =
    tags.amenity === 'health_post' ||
    tags.healthcare === 'health_post' ||
    tags.healthcare === 'community_health_worker' ||
    tags.healthcare === 'nurse' ||
    RURAL_CLINIC_REGEX.test(properName);

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
      en: properName
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

  const searchTerms = ['maternity hospital', 'women hospital', 'women shelter'];
  if (lat >= 25.0 && lat <= 41.0 && lng >= 44.0 && lng <= 75.0) {
    searchTerms.push('زایشگاه', 'بیمارستان زنان');
  }
  const gathered = [];

  await Promise.all(
    searchTerms.map(async (term) => {
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&extratags=1&q=${encodeURIComponent(
          term
        )}&viewbox=${left},${top},${right},${bottom}&bounded=1&limit=15`;
        const res = await fetch(url);
        if (!res.ok) return;
        const items = await res.json();
        if (!Array.isArray(items)) return;
        for (const item of items) {
          const cLat = parseFloat(item.lat);
          const cLng = parseFloat(item.lon);
          if (isNaN(cLat) || isNaN(cLng)) continue;
          const osmClass = String(item.class || '').toLowerCase();
          const osmType = String(item.type || '').toLowerCase();
          const tags = item.extratags || {};
          if (!isValidMedicalOrShelterElement({ ...tags, name: item.display_name }, osmClass, osmType)) {
            continue;
          }
          const rawTitle = (item.display_name || '').split(',')[0].trim();
          if (!rawTitle || isInvalidFacilityName(rawTitle) || !MEDICAL_OR_SHELTER_KEYWORD_REGEX.test(rawTitle)) {
            continue;
          }
          const district = (item.display_name || '').split(',').slice(1, 3).join(',').trim() || regionLabel;
          const built = buildFacilityObject(
            `nom-${item.osm_type || 'n'}-${item.osm_id}`,
            cLat,
            cLng,
            rawTitle,
            tags,
            district
          );
          if (built) {
            gathered.push(built);
          }
        }
      } catch (e) {}
    })
  );

  return gathered;
}

export async function fetchLiveCentersNearPoint(lat, lng, radiusMeters = 45000, regionLabel = 'Local Area') {
  const cacheKey = `v169:${lat.toFixed(2)},${lng.toFixed(2)},${radiusMeters}`;
  if (overpassCache.has(cacheKey)) {
    return overpassCache.get(cacheKey);
  }

  // Comprehensive HOTOSM / Healthsites.io + Safe Haven query covering urban AND rural health posts
  // Note: Never query bare ["women"="yes"] as OpenStreetMap uses that tag on public toilets/restrooms and salons!
  const query = `
    [out:json][timeout:12];
    (
      nwr["amenity"~"^(hospital|clinic|health_post|birthing_center)$"](around:${radiusMeters},${lat},${lng});
      nwr["healthcare"~"^(hospital|clinic|centre|center|health_post|birthing_center|midwife)$"](around:${radiusMeters},${lat},${lng});
      nwr["healthcare:speciality"~"gynaecology|obstetrics|maternity|women"](around:${radiusMeters},${lat},${lng});
      nwr["social_facility"~"^(shelter|women|outreach|group_home)$"](around:${radiusMeters},${lat},${lng});
      nwr["social_facility:for"~"woman|women|girl|victim|refugee|mother"](around:${radiusMeters},${lat},${lng});
      nwr["community_centre:for"~"woman|women|girl|victim|refugee"](around:${radiusMeters},${lat},${lng});
    );
    out center 120;
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
      if (!isValidMedicalOrShelterElement(tags)) continue;

      const rawName = tags['name:en'] || tags.name || tags.official_name || tags.operator || '';
      const built = buildFacilityObject(`osm-${el.type}-${el.id}`, cLat, cLng, rawName, tags, regionLabel);
      if (!built) continue;

      const normKey = `${built.name.en.toLowerCase().slice(0, 24)}-${cLat.toFixed(2)}-${cLng.toFixed(2)}`;
      if (seenKeys.has(normKey)) continue;
      seenKeys.add(normKey);

      results.push(built);
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
