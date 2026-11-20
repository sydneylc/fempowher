// ============================================================================
// Being A Woman In [userNationVariable1] & Traditional [userNationVariable2] Female Health
// Provides:
//   - userNationVariable1: The nation/region noun (e.g., "Somalia", "Nigeria", "Colombia")
//   - userNationVariable2: The nation/region adjectival demonym (e.g., "Somali", "Nigerian", "Colombian")
//   - Pillar 1: Gender Outlook (Laws, Marriage/Divorce/Child Custody Realities + Non-Legal-Advice Disclaimer)
//   - Pillar 2: Traditional [userNationVariable2] Female Health (Cultural Practices, Postpartum Traditions, Community Norms)
//   - Pillar 3: Female Role Models From Where You Are (Dedicated Role Model Map Coordinates + Full Biographies)
// ============================================================================

export const NATION_TO_DEMONYM_MAP = {
  afghanistan: { nation: 'Afghanistan', demonym: 'Afghan', center: [33.9391, 67.71], zoom: 6 },
  albania: { nation: 'Albania', demonym: 'Albanian', center: [41.1533, 20.1683], zoom: 7 },
  algeria: { nation: 'Algeria', demonym: 'Algerian', center: [28.0339, 1.6596], zoom: 5 },
  angola: { nation: 'Angola', demonym: 'Angolan', center: [-11.2027, 17.8739], zoom: 5 },
  argentina: { nation: 'Argentina', demonym: 'Argentine', center: [-34.6037, -58.3816], zoom: 5 },
  armenia: { nation: 'Armenia', demonym: 'Armenian', center: [40.0691, 45.0382], zoom: 7 },
  australia: { nation: 'Australia', demonym: 'Australian', center: [-25.2744, 133.7751], zoom: 4 },
  austria: { nation: 'Austria', demonym: 'Austrian', center: [47.5162, 14.5501], zoom: 7 },
  azerbaijan: { nation: 'Azerbaijan', demonym: 'Azerbaijani', center: [40.1431, 47.5769], zoom: 7 },
  balochistan: { nation: 'Balochistan', demonym: 'Baloch', center: [28.4907, 65.0958], zoom: 6 },
  bangladesh: { nation: 'Bangladesh', demonym: 'Bangladeshi', center: [23.685, 90.3563], zoom: 7 },
  'coxs bazar': { nation: 'Cox’s Bazar & Rohingya Camps', demonym: 'Rohingya & Bangladeshi', center: [21.25, 92.12], zoom: 9 },
  belgium: { nation: 'Belgium', demonym: 'Belgian', center: [50.5039, 4.4699], zoom: 7 },
  benin: { nation: 'Benin', demonym: 'Beninese', center: [9.3077, 2.3158], zoom: 7 },
  bolivia: { nation: 'Bolivia', demonym: 'Bolivian', center: [-16.2902, -63.5887], zoom: 6 },
  bosnia: { nation: 'Bosnia and Herzegovina', demonym: 'Bosnian', center: [43.9159, 17.6791], zoom: 7 },
  botswana: { nation: 'Botswana', demonym: 'Motswana', center: [-22.3285, 24.6849], zoom: 6 },
  brazil: { nation: 'Brazil', demonym: 'Brazilian', center: [-14.235, -51.9253], zoom: 4 },
  bulgaria: { nation: 'Bulgaria', demonym: 'Bulgarian', center: [42.7339, 25.4858], zoom: 7 },
  'burkina faso': { nation: 'Burkina Faso', demonym: 'Burkinabé', center: [12.2383, -1.5616], zoom: 6 },
  burundi: { nation: 'Burundi', demonym: 'Burundian', center: [-3.3731, 29.9189], zoom: 8 },
  'cabo verde': { nation: 'Cabo Verde', demonym: 'Cape Verdean', center: [16.0021, -24.0132], zoom: 8 },
  'cape verde': { nation: 'Cabo Verde', demonym: 'Cape Verdean', center: [16.0021, -24.0132], zoom: 8 },
  cambodia: { nation: 'Cambodia', demonym: 'Cambodian', center: [12.5657, 104.991], zoom: 7 },
  cameroon: { nation: 'Cameroon', demonym: 'Cameroonian', center: [7.3697, 12.3547], zoom: 6 },
  canada: { nation: 'Canada', demonym: 'Canadian', center: [56.1304, -106.3468], zoom: 4 },
  'central african republic': { nation: 'Central African Republic', demonym: 'Central African', center: [6.6111, 20.9394], zoom: 6 },
  chad: { nation: 'Chad', demonym: 'Chadian', center: [15.4542, 18.7322], zoom: 5 },
  chile: { nation: 'Chile', demonym: 'Chilean', center: [-33.4489, -70.6693], zoom: 5 },
  china: { nation: 'China', demonym: 'Chinese', center: [35.8617, 104.1954], zoom: 4 },
  colombia: { nation: 'Colombia', demonym: 'Colombian', center: [4.5709, -74.2973], zoom: 6 },
  'costa rica': { nation: 'Costa Rica', demonym: 'Costa Rican', center: [9.7489, -83.7534], zoom: 7 },
  'cote divoire': { nation: 'Côte d’Ivoire', demonym: 'Ivorian', center: [7.54, -5.5471], zoom: 6 },
  croatia: { nation: 'Croatia', demonym: 'Croatian', center: [45.1, 15.2], zoom: 7 },
  cuba: { nation: 'Cuba', demonym: 'Cuban', center: [21.5218, -77.7812], zoom: 6 },
  'czech republic': { nation: 'Czech Republic', demonym: 'Czech', center: [49.8175, 15.473], zoom: 7 },
  'democratic republic of the congo': { nation: 'Democratic Republic of the Congo', demonym: 'Congolese', center: [-4.0383, 21.7587], zoom: 5 },
  drc: { nation: 'Democratic Republic of the Congo', demonym: 'Congolese', center: [-4.0383, 21.7587], zoom: 5 },
  denmark: { nation: 'Denmark', demonym: 'Danish', center: [56.2639, 9.5018], zoom: 7 },
  'dominican republic': { nation: 'Dominican Republic', demonym: 'Dominican', center: [18.7357, -70.1627], zoom: 7 },
  ecuador: { nation: 'Ecuador', demonym: 'Ecuadorian', center: [-1.8312, -78.1834], zoom: 6 },
  egypt: { nation: 'Egypt', demonym: 'Egyptian', center: [26.8206, 30.8025], zoom: 6 },
  'el salvador': { nation: 'El Salvador', demonym: 'Salvadoran', center: [13.7942, -88.8965], zoom: 8 },
  eritrea: { nation: 'Eritrea', demonym: 'Eritrean', center: [15.1794, 39.7823], zoom: 7 },
  ethiopia: { nation: 'Ethiopia', demonym: 'Ethiopian', center: [9.145, 40.4897], zoom: 6 },
  finland: { nation: 'Finland', demonym: 'Finnish', center: [61.9241, 25.7482], zoom: 5 },
  france: { nation: 'France', demonym: 'French', center: [46.2276, 2.2137], zoom: 6 },
  germany: { nation: 'Germany', demonym: 'German', center: [51.1657, 10.4515], zoom: 6 },
  ghana: { nation: 'Ghana', demonym: 'Ghanaian', center: [7.9465, -1.0232], zoom: 6 },
  greece: { nation: 'Greece', demonym: 'Greek', center: [39.0742, 21.8243], zoom: 6 },
  guatemala: { nation: 'Guatemala', demonym: 'Guatemalan', center: [15.7835, -90.2308], zoom: 7 },
  guinea: { nation: 'Guinea', demonym: 'Guinean', center: [9.9456, -9.6966], zoom: 7 },
  haiti: { nation: 'Haiti', demonym: 'Haitian', center: [18.9712, -72.2852], zoom: 7 },
  honduras: { nation: 'Honduras', demonym: 'Honduran', center: [15.2, -86.2419], zoom: 7 },
  hungary: { nation: 'Hungary', demonym: 'Hungarian', center: [47.1625, 19.5033], zoom: 7 },
  india: { nation: 'India', demonym: 'Indian', center: [20.5937, 78.9629], zoom: 5 },
  indonesia: { nation: 'Indonesia', demonym: 'Indonesian', center: [-0.7893, 113.9213], zoom: 5 },
  iran: { nation: 'Iran', demonym: 'Iranian', center: [32.4279, 53.688], zoom: 5 },
  iraq: { nation: 'Iraq', demonym: 'Iraqi', center: [33.2232, 43.6793], zoom: 6 },
  ireland: { nation: 'Ireland', demonym: 'Irish', center: [53.1424, -7.6921], zoom: 7 },
  italy: { nation: 'Italy', demonym: 'Italian', center: [41.8719, 12.5674], zoom: 6 },
  jamaica: { nation: 'Jamaica', demonym: 'Jamaican', center: [18.1096, -77.2975], zoom: 8 },
  japan: { nation: 'Japan', demonym: 'Japanese', center: [36.2048, 138.2529], zoom: 5 },
  jordan: { nation: 'Jordan', demonym: 'Jordanian', center: [30.5852, 36.2384], zoom: 7 },
  kenya: { nation: 'Kenya', demonym: 'Kenyan', center: [-0.0236, 37.9062], zoom: 6 },
  kazakhstan: { nation: 'Kazakhstan', demonym: 'Kazakh', center: [48.0196, 66.9237], zoom: 5 },
  kurdistan: { nation: 'Kurdistan', demonym: 'Kurdish', center: [36.1911, 44.0092], zoom: 7 },
  kyrgyzstan: { nation: 'Kyrgyzstan', demonym: 'Kyrgyz', center: [41.2044, 74.7661], zoom: 6 },
  lebanon: { nation: 'Lebanon', demonym: 'Lebanese', center: [33.8547, 35.8623], zoom: 8 },
  liberia: { nation: 'Liberia', demonym: 'Liberian', center: [6.4281, -9.4295], zoom: 7 },
  libya: { nation: 'Libya', demonym: 'Libyan', center: [26.3351, 17.2283], zoom: 5 },
  madagascar: { nation: 'Madagascar', demonym: 'Malagasy', center: [-18.7669, 46.8691], zoom: 5 },
  malawi: { nation: 'Malawi', demonym: 'Malawian', center: [-13.2543, 34.3015], zoom: 6 },
  malaysia: { nation: 'Malaysia', demonym: 'Malaysian', center: [4.2105, 101.9758], zoom: 6 },
  mali: { nation: 'Mali', demonym: 'Malian', center: [17.5707, -3.9962], zoom: 5 },
  mexico: { nation: 'Mexico', demonym: 'Mexican', center: [23.6345, -102.5528], zoom: 5 },
  mongolia: { nation: 'Mongolia', demonym: 'Mongolian', center: [46.8625, 103.8467], zoom: 5 },
  morocco: { nation: 'Morocco', demonym: 'Moroccan', center: [31.7917, -7.0926], zoom: 6 },
  mozambique: { nation: 'Mozambique', demonym: 'Mozambican', center: [-18.6657, 35.5296], zoom: 5 },
  myanmar: { nation: 'Myanmar', demonym: 'Burmese & Rohingya', center: [21.9162, 95.956], zoom: 5 },
  namibia: { nation: 'Namibia', demonym: 'Namibian', center: [-22.9576, 18.4904], zoom: 5 },
  nepal: { nation: 'Nepal', demonym: 'Nepali', center: [28.3949, 84.124], zoom: 7 },
  netherlands: { nation: 'Netherlands', demonym: 'Dutch', center: [52.1326, 5.2913], zoom: 7 },
  'new zealand': { nation: 'New Zealand', demonym: 'New Zealand', center: [-40.9006, 174.886], zoom: 5 },
  nicaragua: { nation: 'Nicaragua', demonym: 'Nicaraguan', center: [12.8654, -85.2072], zoom: 7 },
  niger: { nation: 'Niger', demonym: 'Nigerien', center: [17.6078, 8.0817], zoom: 5 },
  nigeria: { nation: 'Nigeria', demonym: 'Nigerian', center: [9.082, 8.6753], zoom: 6 },
  norway: { nation: 'Norway', demonym: 'Norwegian', center: [60.472, 8.4689], zoom: 5 },
  pakistan: { nation: 'Pakistan', demonym: 'Pakistani', center: [30.3753, 69.3451], zoom: 5 },
  palestine: { nation: 'Palestine', demonym: 'Palestinian', center: [31.9522, 35.2332], zoom: 8 },
  panama: { nation: 'Panama', demonym: 'Panamanian', center: [8.538, -80.7821], zoom: 7 },
  paraguay: { nation: 'Paraguay', demonym: 'Paraguayan', center: [-23.4425, -58.4438], zoom: 6 },
  peru: { nation: 'Peru', demonym: 'Peruvian', center: [-9.19, -75.0152], zoom: 5 },
  philippines: { nation: 'Philippines', demonym: 'Filipina', center: [12.8797, 121.774], zoom: 5 },
  poland: { nation: 'Poland', demonym: 'Polish', center: [51.9194, 19.1451], zoom: 6 },
  portugal: { nation: 'Portugal', demonym: 'Portuguese', center: [39.3999, -8.2245], zoom: 6 },
  romania: { nation: 'Romania', demonym: 'Romanian', center: [45.9432, 24.9668], zoom: 6 },
  russia: { nation: 'Russia', demonym: 'Russian', center: [55.7558, 37.6173], zoom: 4 },
  rwanda: { nation: 'Rwanda', demonym: 'Rwandan', center: [-1.9403, 29.8739], zoom: 8 },
  senegal: { nation: 'Senegal', demonym: 'Senegalese', center: [14.4974, -14.4524], zoom: 7 },
  'sierra leone': { nation: 'Sierra Leone', demonym: 'Sierra Leonean', center: [8.4606, -11.7799], zoom: 7 },
  singapore: { nation: 'Singapore', demonym: 'Singaporean', center: [1.3521, 103.8198], zoom: 11 },
  somalia: { nation: 'Somalia', demonym: 'Somali', center: [5.1521, 46.1996], zoom: 6 },
  'south africa': { nation: 'South Africa', demonym: 'South African', center: [-30.5595, 22.9375], zoom: 5 },
  'south korea': { nation: 'South Korea', demonym: 'Korean', center: [35.9078, 127.7669], zoom: 7 },
  'south sudan': { nation: 'South Sudan', demonym: 'South Sudanese', center: [6.877, 31.307], zoom: 6 },
  spain: { nation: 'Spain', demonym: 'Spanish', center: [40.4637, -3.7492], zoom: 6 },
  'sri lanka': { nation: 'Sri Lanka', demonym: 'Sri Lankan', center: [7.8731, 80.7718], zoom: 7 },
  sudan: { nation: 'Sudan', demonym: 'Sudanese', center: [15.5007, 32.5599], zoom: 5 },
  sweden: { nation: 'Sweden', demonym: 'Swedish', center: [60.1282, 18.6435], zoom: 5 },
  switzerland: { nation: 'Switzerland', demonym: 'Swiss', center: [46.8182, 8.2275], zoom: 7 },
  syria: { nation: 'Syria', demonym: 'Syrian', center: [34.8021, 38.9968], zoom: 6 },
  taiwan: { nation: 'Taiwan', demonym: 'Taiwanese', center: [23.6978, 120.9605], zoom: 7 },
  tanzania: { nation: 'Tanzania', demonym: 'Tanzanian', center: [-6.369, 34.8888], zoom: 6 },
  thailand: { nation: 'Thailand', demonym: 'Thai', center: [15.87, 100.9925], zoom: 6 },
  tunisia: { nation: 'Tunisia', demonym: 'Tunisian', center: [33.8869, 9.5375], zoom: 6 },
  turkey: { nation: 'Turkey', demonym: 'Turkish', center: [38.9637, 35.2433], zoom: 6 },
  uganda: { nation: 'Uganda', demonym: 'Ugandan', center: [1.3733, 32.2903], zoom: 7 },
  ukraine: { nation: 'Ukraine', demonym: 'Ukrainian', center: [48.3794, 31.1656], zoom: 6 },
  'united kingdom': { nation: 'United Kingdom', demonym: 'British', center: [55.3781, -3.436], zoom: 5 },
  uk: { nation: 'United Kingdom', demonym: 'British', center: [55.3781, -3.436], zoom: 5 },
  'united states': { nation: 'United States', demonym: 'American', center: [39.8283, -98.5795], zoom: 4 },
  usa: { nation: 'United States', demonym: 'American', center: [39.8283, -98.5795], zoom: 4 },
  uruguay: { nation: 'Uruguay', demonym: 'Uruguayan', center: [-32.5228, -55.7658], zoom: 7 },
  uzbekistan: { nation: 'Uzbekistan', demonym: 'Uzbek', center: [41.3775, 64.5853], zoom: 6 },
  venezuela: { nation: 'Venezuela', demonym: 'Venezuelan', center: [6.4238, -66.5897], zoom: 6 },
  vietnam: { nation: 'Vietnam', demonym: 'Vietnamese', center: [14.0583, 108.2772], zoom: 5 },
  yemen: { nation: 'Yemen', demonym: 'Yemeni', center: [15.5527, 48.5164], zoom: 6 },
  zambia: { nation: 'Zambia', demonym: 'Zambian', center: [-13.1339, 27.8493], zoom: 6 },
  zimbabwe: { nation: 'Zimbabwe', demonym: 'Zimbabwean', center: [-19.0154, 29.1549], zoom: 6 }
};

// Resolves userNationVariable1 (the Nation/Region noun, e.g. "Somalia", "Nigeria")
// and userNationVariable2 (the adjectival demonym, e.g. "Somali", "Nigerian")
export function resolveUserNationVariables(currentRegion, closestHospitals = [], closestShelters = []) {
  const nearestFacility = closestHospitals[0] || closestShelters[0] || null;
  const rawCountry = String(currentRegion?.country || '').trim();
  const rawNameEn = String(currentRegion?.nameEn || '').trim();
  const facilityRegion = String(nearestFacility?.regionDistrict || '').trim();

  // Check special sub-regions first (Balochistan, Cox's Bazar, Kurdistan)
  const combinedPool = `${rawNameEn} ${rawCountry} ${facilityRegion}`.toLowerCase();
  if (combinedPool.includes('balochistan') || combinedPool.includes('baluchistan')) {
    return {
      userNationVariable1: 'Balochistan',
      userNationVariable2: 'Baloch',
      countryCenter: [28.4907, 65.0958],
      countryZoom: 6
    };
  }
  if (combinedPool.includes('cox') || combinedPool.includes('ukhiya') || combinedPool.includes('rohingya')) {
    return {
      userNationVariable1: 'Bangladesh (Cox’s Bazar)',
      userNationVariable2: 'Rohingya & Bangladeshi',
      countryCenter: [21.25, 92.12],
      countryZoom: 9
    };
  }

  for (const [key, entry] of Object.entries(NATION_TO_DEMONYM_MAP)) {
    if (combinedPool.includes(key)) {
      return {
        userNationVariable1: entry.nation,
        userNationVariable2: entry.demonym,
        countryCenter: entry.center,
        countryZoom: entry.zoom
      };
    }
  }

  // Fallback if user is in Global Anonymous view or a custom region not yet in the dictionary
  if (rawCountry && rawCountry !== 'Global') {
    const cleanCountry = rawCountry.replace(/\(.*\)/g, '').trim();
    const fallbackDemonym = cleanCountry.endsWith('ia') || cleanCountry.endsWith('a')
      ? `${cleanCountry}n`
      : `${cleanCountry}`;
    return {
      userNationVariable1: cleanCountry,
      userNationVariable2: fallbackDemonym,
      countryCenter: currentRegion?.center || [5.1521, 46.1996],
      countryZoom: currentRegion?.zoom || 5
    };
  }

  if (rawNameEn && !rawNameEn.includes('Planet Earth')) {
    const parts = rawNameEn.split(',').map((s) => s.trim()).filter(Boolean);
    const lastPart = parts[parts.length - 1] || rawNameEn;
    return {
      userNationVariable1: lastPart,
      userNationVariable2: lastPart,
      countryCenter: currentRegion?.center || [5.1521, 46.1996],
      countryZoom: currentRegion?.zoom || 6
    };
  }

  // Default fallback when on Planet Earth (Total Anon) before selecting a country
  return {
    userNationVariable1: 'Somalia',
    userNationVariable2: 'Somali',
    countryCenter: [5.1521, 46.1996],
    countryZoom: 6
  };
}

// ============================================================================
// Curated Country Profiles for:
//   1. Gender Outlook (Domestic Violence, Divorce & Child Custody, Bodily Rights)
//   2. Traditional [userNationVariable2] Female Health
//   3. Female Role Models From [userNationVariable1] (with exact Map Coordinates & Bios)
// ============================================================================

export const COUNTRY_WOMANHOOD_PROFILES = {
  Somalia: {
    genderOutlook: [
      {
        id: 'somalia-dv-leaving',
        title: 'Leaving an Abusive Marriage & Domestic Violence Realities in Somalia',
        summary:
          'Somalia operates under a plural legal system combining formal statutory law, Islamic Sharia, and customary clan law (Xeer). In practice, domestic violence within marriage is often treated by elders and police as a private family or clan matter rather than a criminal offense.',
        keyRealities: [
          'How the Legal System Works in Practice: While the Provisional Constitution states that all citizens have the right to personal security, formal police stations frequently refer domestic violence complaints back to male clan elders (Odayaal) under Xeer customary mediation.',
          'Leaving Safely: When a woman leaves an abusive husband, her own birth family or maternal clan relatives (Tol) are traditionally her primary physical and financial shield. However, elders sometimes pressure women to return to preserve peace between families unless severe physical harm is documented.',
          'Sharia Judicial Divorce (Fasaakh): Under Islamic family principles recognized in Somalia, a woman being beaten or harmed has the right to petition a Sharia judge (Qadi) for Fasaakh (annulment/dissolution for harm/Cruelty — Darar) without forfeiting her dowry (Mahar), especially if medical records or witnesses document the abuse.'
        ]
      },
      {
        id: 'somalia-divorce-custody',
        title: 'Divorce & Who Gets the Children (Custody Realities in Somalia)',
        summary:
          'One of the biggest fears for a Somali mother considering leaving an abusive marriage is whether her husband will automatically take the children. Understanding how custody (Xanaanada Carruurta) works in Somali Sharia and family courts is critical.',
        keyRealities: [
          'Young Children (Hadanah): Under both the 1975 Somali Family Law framework and Shafi’i Islamic jurisprudence widely practiced in Somalia, the mother generally has the primary right to physical custody (Hadanah) of young children (historically until age 7 for boys and puberty/marriage for girls, or higher if the court finds the father unfit).',
          'When Fathers Claim the Children: A husband or his patrilineal clan often claims legal guardianship (Wilayah) and may try to take older children or claim custody if the mother remarries outside the family. However, if the father is violent or unable to care for the children, a mother supported by legal aid (such as SWDC in Mogadishu or FIDA/legal clinics in Hargeisa and Garowe) can contest this.',
          'Financial Maintenance (Nafaqo): Even when children remain with their mother after divorce, the father remains legally and religiously obligated to pay child maintenance (Nafaqo), though enforcement outside major towns can be difficult.'
        ]
      },
      {
        id: 'somalia-bodily-autonomy',
        title: 'Reproductive Health, FGM/C & Bodily Autonomy Laws in Somalia',
        summary:
          'Article 15(4) of the Somali Provisional Constitution explicitly prohibits Female Genital Mutilation (FGM/C), described as a cruel and degrading customary practice, though national criminal enforcement remains limited.',
        keyRealities: [
          'Maternal & Obstetric Decisions: In many hospitals, doctors or staff may ask for a husband’s or male relative’s signature before performing a C-section or emergency obstetric surgery, even though emergency life-saving care for a mother does not legally require spousal delay.',
          'Confidential Support Networks: Women-led organizations such as the Somali Women Development Center (SWDC — Hotline 5555) and Edna Adan Maternity Hospital provide confidential medical documentation, shelter referrals, and paralegal support.'
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'somali-postpartum-afartanbah',
        title: 'Afartanbah: The 40-Day Traditional Somali Postpartum Rest & Care Circle',
        body:
          'In traditional Somali female health, the 40 days following childbirth (Afartanbah or Ummul) are treated as a sacred window of maternal recovery. Neighboring women, aunties, and female relatives gather to cook nutrient-dense broths (such as Maraq, liver, and spiced bone soup with Xawaash and fenugreek/Xulbad), care for older children, and allow the new mother to rest and bond with her newborn.',
        healthNote:
          'Medical Perspective: Communal postpartum rest, warm iron-rich broths, fenugreek (Xulbad) for lactation, and emotional solidarity strongly protect against postpartum exhaustion and depression.'
      },
      {
        id: 'somali-qasil-remedies',
        title: 'Qasil, Malmal (Myrrh) & Traditional Somali Botanical Care',
        body:
          'For generations, Somali women have harvested Qasil (finely ground leaves of the Gob / Ziziphus mauritiana tree) as a natural, antibacterial skin and body cleanser, alongside Xulbad (fenugreek seeds) for menstrual cramping and lactation, and Malmal (Commiphora myrrh) for wound healing.',
        healthNote:
          'Medical Perspective: External Qasil is gentle and beneficial, and dietary fenugreek supports iron and milk supply. However, placing raw herbs or smoke internally inside the birth canal after delivery can cause severe postpartum infection (sepsis) and should be avoided.'
      },
      {
        id: 'somali-gudnin-fgm-navigation',
        title: 'Gudnin (FGM/C / Infibulation) & Healing Complications Safely',
        body:
          'Traditional pharaonic circumcision (Fircooni / Type III infibulation) has historically been practiced across Somali communities under social pressure around marriageability. It causes lifelong pain with menstruation (hematocolpos), painful intercourse, and obstructed labor.',
        healthNote:
          'Medical Perspective: Trained Somali midwives and OB/GYN doctors perform safe de-infibulation (opening the scar tissue under local anesthesia) before marriage or childbirth to prevent life-threatening tearing and obstetric fistula.'
      }
    ],
    roleModels: [
      {
        id: 'rm-somalia-ayaan',
        name: 'Ayaan Hirsi Ali',
        years: 'Born 1969 — Mogadishu, Somalia',
        birthplace: 'Mogadishu, Banaadir, Somalia',
        ethnicity: 'Somali (Darod / Majeerteen heritage)',
        lat: 2.0469,
        lng: 45.3182,
        headline: 'Somali-Born Author, Women’s Rights Campaigner & Former Parliamentarian',
        bio:
          'Born in Mogadishu, Somalia in 1969, Ayaan Hirsi Ali survived female genital mutilation as a young girl and later fled an arranged marriage in 1992, seeking asylum in the Netherlands where she worked as a translator at abortion clinics and women’s shelters for immigrant women escaping domestic abuse. She earned a master’s degree in political science from Leiden University, was elected to the Dutch Parliament, founded the AHA Foundation to protect women and girls from forced marriage, honor violence, and FGM/C, and authored internationally influential books including "Infidel" and "Nomad".'
      },
      {
        id: 'rm-somalia-edna',
        name: 'Edna Adan Ismail',
        years: 'Born 1937 — Hargeisa',
        birthplace: 'Hargeisa, Woqooyi Galbeed',
        ethnicity: 'Somali (Isaaq heritage)',
        lat: 9.56,
        lng: 44.065,
        headline: 'First Qualified Nurse-Midwife, Founder of Edna Adan Maternity Hospital & Pioneer Against FGM',
        bio:
          'Born in Hargeisa in 1937, Edna Adan Ismail trained in London as a nurse and midwife at a time when Somali girls were rarely permitted formal schooling. She returned to build and open the Edna Adan Maternity Hospital in Hargeisa using her own life savings, training over 1,000 midwives across the region, slashing maternal and infant mortality, and becoming one of the fiercest medical voices speaking publicly against female genital mutilation.'
      },
      {
        id: 'rm-somalia-hawa',
        name: 'Dr. Hawa Abdi',
        years: '1947–2020 — Mogadishu & Afgooye Corridor, Somalia',
        birthplace: 'Mogadishu / Lafoole (Lower Shabelle), Somalia',
        ethnicity: 'Somali',
        lat: 2.1426,
        lng: 45.1567,
        headline: 'Somali OB/GYN Physician, Lawyer & Founder of the Dr. Hawa Abdi Hope Village for Displaced Women',
        bio:
          'After losing her own mother to childbirth complications at age 12, Hawa Abdi earned a medical degree in obstetrics and gynecology as well as a law degree from the Somali National University. On her family land in the Lower Shabelle corridor outside Mogadishu, she opened a free rural maternity clinic that grew into a 400-bed hospital and sanctuary sheltering 90,000 displaced women and children during Somalia’s civil war, famously standing down armed militias at her hospital gates.'
      },
      {
        id: 'rm-somalia-ilwad',
        name: 'Ilwad Elman',
        years: 'Born 1989 — Mogadishu, Somalia',
        birthplace: 'Mogadishu, Somalia',
        ethnicity: 'Somali',
        lat: 2.0371,
        lng: 45.3438,
        headline: 'Co-Founder of Sister Somalia (First Rape Crisis Center in Mogadishu) & Human Rights Activist',
        bio:
          'Born in Mogadishu, Ilwad Elman returned to Somalia at age 19 during peak conflict to lead the Elman Peace and Human Rights Centre alongside her mother Fartuun Adan. Together they founded "Sister Somalia", the very first rape crisis and domestic violence safe house program in Mogadishu, providing emergency medical care, trauma counseling, safe shelter, and economic independence for survivors of gender-based violence.'
      }
    ]
  },

  Nigeria: {
    genderOutlook: [
      {
        id: 'nigeria-dv-leaving',
        title: 'Leaving an Abusive Marriage & Domestic Violence Laws in Nigeria',
        summary:
          'Nigeria has a tripartite legal system: Statutory/Civil Law, Customary Law (varying by ethnic group across southern and central states), and Islamic Sharia Law (in 12 northern states). Protection depends heavily on which state you live in and what type of marriage you have.',
        keyRealities: [
          'Violence Against Persons Prohibition (VAPP) Act: Passed in 2015 and domesticated in Abuja (FCT), Lagos, and over 34 states, the VAPP Act criminalizes physical, emotional, sexual, and economic spousal abuse, forced isolation, and harmful widowhood practices, allowing women to apply for protection orders.',
          'Police & Customary Barriers: Despite the VAPP Act, Section 55 of the northern Penal Code historically permitted "chastisement" by a husband, and local police often dismiss domestic abuse as a "family affair" unless a Domestic and Sexual Violence Agency (like Lagos DSVA or state FIDA lawyers) intervenes.'
        ]
      },
      {
        id: 'nigeria-divorce-custody',
        title: 'Divorce & Child Custody Realities in Nigeria',
        summary:
          'How divorce and child custody work in Nigeria depends on whether a woman was married under the Statutory Marriage Act (registry/church) or under Customary / Islamic law.',
        keyRealities: [
          'Statutory Marriages (Matrimonial Causes Act): High Courts must legally place the "best interests and welfare of the child" first, giving mothers equal standing to win custody, especially of young children and where the father is violent.',
          'Customary Marriages: Under many traditional patrilineal customs where bride price (dowry) was paid, the husband’s family often claims automatic ownership of the children upon divorce unless the bride price is repaid or a higher court overrides the custom under the Child Rights Act.',
          'Islamic Law in Northern States: Under Maliki Sharia principles applied in northern Sharia courts, the mother (or maternal grandmother) generally holds primary physical custody (Hadanah) of young boys until puberty and girls until marriage, unless a court rules otherwise.'
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'nigeria-omugwo',
        title: 'Omugwo (Igbo), Ojoomo (Yoruba) & Traditional Nigerian Postpartum Care',
        body:
          'Across Nigerian cultures — notably Omugwo among the Igbo and traditional postpartum care among the Yoruba, Hausa, and Edo — a new mother’s mother or elder female relative moves in for 1 to 3 months after childbirth to bathe the baby, prepare warming pepper soups (with Uziza, Uda/negro pepper, and Ehuru) to help the uterus contract, and let the mother rest.',
        healthNote:
          'Medical Perspective: Warm spiced soups (Uziza and Uda) and family support aid uterine recovery and lactation. However, traditional hot-water abdominal pressing with boiling cloths (particularly practiced in parts of northern Nigeria as Wankan Jego) can cause severe burns and peripartum heart strain and should be replaced with gentle warm baths.'
      }
    ],
    roleModels: [
      {
        id: 'rm-nigeria-funmilayo',
        name: 'Chief Funmilayo Ransome-Kuti',
        years: '1900–1978 — Abeokuta, Ogun State, Nigeria',
        birthplace: 'Abeokuta, Ogun State, Nigeria',
        ethnicity: 'Yoruba / Nigerian',
        lat: 7.1475,
        lng: 3.3619,
        headline: 'Leader of the Abeokuta Women’s Union & Pioneer of Nigerian Women’s Rights',
        bio:
          'Born in Abeokuta, Ogun State, Funmilayo Ransome-Kuti organized over 20,000 market and rural women in the Abeokuta Women’s Union to abolish unfair colonial taxation on women, forced the abdication of the traditional king (Alake) in 1949, fought for women’s suffrage across Nigeria, and founded schools and clinics for girls.'
      },
      {
        id: 'rm-nigeria-stella',
        name: 'Dr. Ameyo Stella Adadevoh',
        years: '1956–2014 — Lagos, Nigeria',
        birthplace: 'Lagos, Nigeria',
        ethnicity: 'Nigerian',
        lat: 6.4541,
        lng: 3.3947,
        headline: 'Nigerian Endocrinologist & Physician Who Stopped the 2014 Ebola Outbreak in Nigeria',
        bio:
          'Born and raised in Lagos, Dr. Stella Adadevoh served as Lead Consultant Physician at First Consultants Medical Centre in Obalende, Lagos. In July 2014, she diagnosed Nigeria’s index Ebola case and courageously refused diplomatic pressure to discharge the patient, quarantining him at the cost of her own life and saving millions of Nigerians from a nationwide epidemic.'
      },
      {
        id: 'rm-nigeria-chimamanda',
        name: 'Chimamanda Ngozi Adichie',
        years: 'Born 1977 — Enugu & Abba (Anambra State), Nigeria',
        birthplace: 'Enugu / Abba, Anambra State, Nigeria',
        ethnicity: 'Igbo / Nigerian',
        lat: 6.4584,
        lng: 7.5464,
        headline: 'Globally Acclaimed Nigerian Novelist & Author of "We Should All Be Feminists"',
        bio:
          'Raised in the university town of Nsukka in Enugu State with ancestral roots in Abba, Anambra State, Chimamanda Ngozi Adichie studied medicine at the University of Nigeria before becoming one of the world’s defining literary voices on Nigerian history, womanhood, marriage, and gender equality.'
      },
      {
        id: 'rm-nigeria-amina',
        name: 'Hajia Gambo Sawaba',
        years: '1933–2001 — Zaria, Kaduna State, Nigeria',
        birthplace: 'Zaria, Kaduna State, Northern Nigeria',
        ethnicity: 'Hausa-Nupe / Northern Nigerian',
        lat: 11.0855,
        lng: 7.7199,
        headline: 'Northern Nigerian Campaigner Against Child Marriage & Champion of Women’s Voting Rights',
        bio:
          'Born in Zaria in Northern Nigeria and married off at age 13, Hajia Gambo Sawaba became a fearless political activist who campaigned across northern Nigeria against child marriage, forced labor, and the exclusion of northern women from voting and education, enduring 16 prison sentences for her advocacy and mentoring generations of northern girls.'
      }
    ]
  },

  Colombia: {
    genderOutlook: [
      {
        id: 'colombia-dv-leaving',
        title: 'Leaving an Abusive Partner & Domestic Violence Protections in Colombia',
        summary:
          'Colombia has some of Latin America’s strongest statutory laws against domestic violence and femicide (Law 1257 of 2008 and Law 1761 "Rosa Elvira Cely"), though rural enforcement and court backlogs remain real challenges.',
        keyRealities: [
          'Immediate Protection Measures (Comisarías de Familia): Under Law 1257 of 2008, a woman experiencing physical, psychological, sexual, or economic violence can go to any Comisaría de Familia or Fiscalía (Línea 122 / Línea 155) to request an immediate eviction order removing the abuser from the home and admission to a confidential Casa Refugio.',
          'No Requirement to Mediate with Your Abuser: Law 1257 explicitly gives women the legal right NOT to be forced into face-to-face mediation or conciliation with an abusive partner.'
        ]
      },
      {
        id: 'colombia-divorce-custody',
        title: 'Divorce & Child Custody Realities in Colombia (Custodia y Cuidado Personal)',
        summary:
          'Under Colombian family law (ICBF — Instituto Colombiano de Bienestar Familiar and Family Courts), domestic violence is direct legal grounds for divorce (Causal 3 of Article 154 of the Civil Code) and heavily weighs in child custody decisions.',
        keyRealities: [
          'Who Gets Custody of the Children: Colombian Family Judges and Defensores de Familia prioritize the best interests of the child (Interés Superior del Niño). Mothers are very frequently granted primary physical care (Custodia y Cuidado Personal), especially when the father has a history of domestic violence, and the abusive spouse can be ordered to pay monthly child support (Cuota Alimentaria) and damages.'
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'colombia-la-dieta',
        title: 'La Dieta / Cuarentena & Traditional Colombian Partería (Midwifery)',
        body:
          'Across Colombia — especially among Afro-Colombian Pacific Coast parteras (traditional midwives recognized by UNESCO as Cultural Heritage) and Andean and Indigenous communities — the 40-day postpartum "La Dieta" centers on warm herbal baths (baños de plantas dulces y amargas like calendula, chamomile, rue, and rosemary), abdominal binding (fajada), and chicken sancocho or caldo.',
        healthNote:
          'Medical Perspective: Traditional Afro-Colombian and Indigenous parteras provide vital culturally respectful birth companionship, and warm external herbal washes soothe recovery when kept external and hygienic.'
      }
    ],
    roleModels: [
      {
        id: 'rm-colombia-policarpa',
        name: 'Policarpa Salavarrieta ("La Pola")',
        years: '1795–1817 — Guaduas & Bogotá, Colombia',
        birthplace: 'Guaduas, Cundinamarca, Colombia',
        ethnicity: 'Colombian',
        lat: 5.0672,
        lng: -74.595,
        headline: 'Heroine of Colombian Independence Whose Birthday Is Celebrated as Day of the Colombian Woman',
        bio:
          'Born in Guaduas, Cundinamarca and active in Bogotá, Policarpa Salavarrieta worked as a seamstress while organizing intelligence networks for Colombia’s independence movement. Her courage before her execution in Bogotá’s main plaza made her the enduring symbol of Colombian women’s bravery.'
      },
      {
        id: 'rm-colombia-angela',
        name: 'Dr. Ángela Restrepo Moreno',
        years: '1931–2022 — Medellín, Antioquia, Colombia',
        birthplace: 'Medellín, Antioquia, Colombia',
        ethnicity: 'Colombian (Antioqueña)',
        lat: 6.2442,
        lng: -75.5812,
        headline: 'Pioneering Colombian Microbiologist, Medical Researcher & Mentor to Generations of Women in Science',
        bio:
          'Born in Medellín at a time when Colombian women could not yet vote or easily enter medical research, Dr. Ángela Restrepo Moreno earned her doctorate in microbiology, founded the Corporación para Investigaciones Biológicas (CIB) in Medellín, and discovered breakthrough treatments for endemic tropical fungal diseases.'
      },
      {
        id: 'rm-colombia-francia',
        name: 'Francia Márquez Mina',
        years: 'Born 1981 — Suárez, Cauca, Colombia',
        birthplace: 'Yolombó, Suárez, Cauca, Colombia',
        ethnicity: 'Afro-Colombian',
        lat: 2.9539,
        lng: -76.6964,
        headline: 'Afro-Colombian Environmental Defender, Lawyer & First Black Female Vice President of Colombia',
        bio:
          'Born in the village of Yolombó in Suárez, Cauca, Francia Márquez became a single mother at age 16 and worked as a domestic worker and artisanal gold miner while organizing Afro-Colombian women to protect the Ovejas River from illegal mining, winning the Goldman Environmental Prize, earning a law degree, and becoming Colombia’s first Afro-Colombian Vice President.'
      }
    ]
  },

  Brazil: {
    genderOutlook: [
      {
        id: 'brazil-dv-leaving',
        title: 'Lei Maria da Penha & Domestic Violence Protections in Brazil',
        summary:
          'Brazil’s Law 11.340/2006 (Lei Maria da Penha) and Law 13.104/2015 (Feminicídio) create specialized Women’s Police Stations (DEAMs) and urgent protective orders (Medidas Protetivas de Urgência) that a judge must rule on within 48 hours.',
        keyRealities: [
          'Urgent Protective Orders: Under the Maria da Penha Law, a woman facing physical, psychological, sexual, patrimonial, or moral abuse can request immediate removal of the aggressor from the home, a restraining order, and placement in a Casa-Abrigo via Ligue 180 or any Casa da Mulher Brasileira.',
          'Divorce & Child Custody (Lei 14.713/2023): In October 2023, Brazil enacted Law 14.713/2023 amending the Civil Code to prohibit shared custody (Guarda Compartilhada) whenever there is evidence or risk of domestic or family violence, ensuring violent partners cannot use shared custody to control mothers.'
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'brazil-resguardo',
        title: 'O Resguardo (Quarentena) & Traditional Parteiras of the Amazon and Northeast',
        body:
          'In traditional Brazilian female health, "O Resguardo" is the 40-day postpartum recovery period guided by family elders and traditional midwives (Parteiras Tradicionais across the Amazon, Quilombola, and Sertão communities), featuring warm canja de galinha (chicken and rice broth), chamomile and calendula sitz baths, and community support.',
        healthNote:
          'Medical Perspective: Brazil’s SUS public health system works alongside traditional Parteiras in rural Amazonian and Quilombola territories to combine respectful traditional birthing postures with emergency obstetric referral.'
      }
    ],
    roleModels: [
      {
        id: 'rm-brazil-mariadapenha',
        name: 'Maria da Penha Maia Fernandes',
        years: 'Born 1945 — Fortaleza, Ceará, Brazil',
        birthplace: 'Fortaleza, Ceará, Brazil',
        ethnicity: 'Brazilian',
        lat: -3.7319,
        lng: -38.5267,
        headline: 'Biopharmacist & Survivor Whose 20-Year Legal Battle Created Brazil’s Landmark Domestic Violence Law',
        bio:
          'Born in Fortaleza, Ceará, biopharmacist Maria da Penha survived two murder attempts by her husband in 1983 that left her paraplegic. When Brazilian courts delayed justice for 19 years, she took her case to the Inter-American Commission on Human Rights, resulting in the 2006 enactment of the "Lei Maria da Penha" (Law 11.340), which has protected millions of Brazilian women.'
      },
      {
        id: 'rm-brazil-nise',
        name: 'Dr. Nise da Silveira',
        years: '1905–1999 — Maceió (Alagoas) & Rio de Janeiro, Brazil',
        birthplace: 'Maceió, Alagoas, Brazil',
        ethnicity: 'Brazilian',
        lat: -9.6658,
        lng: -35.7353,
        headline: 'Pioneering Brazilian Physician Who Revolutionized Humane Mental Health Care',
        bio:
          'Born in Maceió, Alagoas, Nise da Silveira was the only woman among 157 students in her 1926 medical school class in Bahia. She refused to perform lobotomies or electroshock on patients in Rio de Janeiro, instead founding humane occupational and art therapy programs that transformed psychiatric medicine across Latin America.'
      }
    ]
  },

  Peru: {
    genderOutlook: [
      {
        id: 'peru-dv-leaving',
        title: 'Law 30364 & Leaving an Abusive Partner in Peru',
        summary:
          'Peru’s Law 30364 (Law to Prevent, Punish, and Eradicate Violence Against Women and Family Group Members) empowers Centros Emergencia Mujer (CEM — Programa Nacional Aurora) and Family Courts to issue protective measures within 24 to 48 hours in severe risk cases.',
        keyRealities: [
          'Divorce & Custody (Tenencia de los Hijos): Under Peru’s Código de los Niños y Adolescentes, children under age 3 generally remain with the mother upon separation, and documented domestic violence disqualifies an abusive parent from holding primary custody while still obligating them to pay Pensión de Alimentos.'
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'peru-parto-vertical',
        title: 'Andean Parto Vertical (Vertical Birth) & Postpartum Muña / Chuño Broths',
        body:
          'Among Quechua and Aymara women in the Peruvian Andes as well as Amazonian Shipibo-Konibo communities, traditional childbirth is practiced upright or squatting (Parto Vertical) with a warm woven chumpi belt and herbal infusions of Muña (Andean mint) and chamomile, officially integrated into Peru’s MINSA intercultural maternal health norms.',
        healthNote:
          'Medical Perspective: Peru’s Ministry of Health (MINSA) officially recognizes culturally adapted vertical birth (Parto Vertical con Adecuación Intercultural) in public health centers because upright delivery uses gravity and reduces perineal trauma.'
      }
    ],
    roleModels: [
      {
        id: 'rm-peru-laura',
        name: 'Dr. Laura Esther Rodríguez Dulanto',
        years: '1872–1919 — Supe & Lima, Peru',
        birthplace: 'Supe, Barranca (Lima Region), Peru',
        ethnicity: 'Peruvian',
        lat: -10.7969,
        lng: -77.7131,
        headline: 'First Female Physician & Surgeon in Peru who Pioneered Women’s Nursing & Gynecology',
        bio:
          'Born in Supe, Peru in 1872 when girls were barred from secondary education, Laura Rodríguez Dulanto studied using her brother’s notebooks, petitioned the Peruvian Congress to enter the Universidad Nacional Mayor de San Marcos, and in 1900 became the first woman in Peru to earn a medical degree, dedicating her career to gynecology and training Peru’s first nursing schools.'
      },
      {
        id: 'rm-peru-mariaelena',
        name: 'María Elena Moyano ("Madre Coraje")',
        years: '1958–1992 — Villa El Salvador, Lima, Peru',
        birthplace: 'Barranco / Villa El Salvador, Lima, Peru',
        ethnicity: 'Afro-Peruvian',
        lat: -12.2131,
        lng: -76.9372,
        headline: 'Afro-Peruvian Community Organizer & Leader of the Vaso de Leche Women’s Federation',
        bio:
          'Raised in the shantytowns of Villa El Salvador in southern Lima, María Elena Moyano organized tens of thousands of mothers in the Federación Popular de Mujeres de Villa El Salvador (FEPOMUVES), running community soup kitchens (comedores populares), maternal nutrition programs, and women’s rights committees.'
      }
    ],
    healthAlerts: [
      {
        id: 'peru-alert-1',
        title: 'Maternal & Reproductive Health Services in Peru (MINSA & CEM Aurora)',
        severity: 'Active Maternal & Protection Notice',
        body:
          'Public hospitals and maternal health centers (Establecimientos de Salud MINSA) provide 24/7 emergency obstetric care, vertical birth support, and free emergency kits for survivors of sexual violence (Kit de Emergencia). Call Línea 100 or 106 (SAMU) for immediate assistance.'
      }
    ]
  },

  Sudan: {
    genderOutlook: [
      {
        id: 'sudan-dv-leaving',
        title: 'Leaving an Abusive Marriage & Family Law Realities in Sudan',
        summary:
          'Sudan’s Personal Status Law for Muslims of 1991 (alongside customary laws across regions) governs marriage, obedience (Ta’ah), divorce, and guardianship. Understanding how courts and community mediation work in practice helps women plan safely.',
        keyRealities: [
          'Divorce for Harm (Talaq al-Darar): Under Sudan’s Personal Status Law, a wife experiencing physical beating, severe mistreatment, or abandonment can petition a Personal Status Judge for judicial divorce based on harm (Darar). Medical reports (Form 8 / hospital documentation) and witness testimony from neighbors or relatives are critical evidence.',
          'Domestic Violence & Legal Reforms: While Sudan criminalized Female Genital Mutilation (Article 141 of the Criminal Act, amended in 2020) and abolished the Public Order Law in 2019, there is still no comprehensive standalone domestic violence statute, so women’s legal aid networks (like SEEMA and the Combating Violence Against Women Unit — CVAW) assist women in filing harm petitions.'
        ]
      },
      {
        id: 'sudan-divorce-custody',
        title: 'Divorce & Child Custody Realities in Sudan (Hadanah)',
        summary:
          'In Sudan, mothers often fear losing their children if they seek a divorce. Knowing the legal rules on physical custody (Hadanah) versus paternal guardianship (Wilayah) is essential.',
        keyRealities: [
          'Mother’s Right to Custody (Hadanah): Under the 1991 Personal Status Law, the mother has first priority for physical custody of her son until age 7 and her daughter until age 9, and a Personal Status Court judge can extend the mother’s custody until the boy reaches puberty and the girl marries if the judge finds it is in the child’s best interest (Aslah lil-Mahdoon).',
          'Child Support & Housing (Nafaqah): The father remains legally obligated to pay child maintenance, housing, medical care, and schooling expenses even while the children live in their mother’s custody.'
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'sudan-postpartum-jirtig-nifaas',
        title: 'Al-Nifaas (40-Day Postpartum Care), Madiyda Helba & Traditional Sudanese Midwifery (Dayat)',
        body:
          'In traditional Sudanese female health, the 40-day postpartum recovery period (Al-Nifaas) is supported by female relatives, neighbors, and community midwives (Dayat). Mothers are nourished with warm Madiyda Helba (fenugreek porridge), Madiyda Balah (date porridge), and Karkadeh (hibiscus) to restore iron levels, energy, and breastmilk supply.',
        healthNote:
          'Medical Perspective: Fenugreek (Helba) and date porridges are rich in iron and calories after childbirth. However, traditional smoke baths (Dukhan) immediately after delivery or re-infibulation (Adal) after birth pose severe risks of infection, dehydration, and hemorrhage and should be avoided.'
      }
    ],
    roleModels: [
      {
        id: 'rm-sudan-khalida',
        name: 'Dr. Khalida Zahir',
        years: '1927–2015 — Omdurman & Khartoum, Sudan',
        birthplace: 'Omdurman, Khartoum State, Sudan',
        ethnicity: 'Sudanese',
        lat: 15.6445,
        lng: 32.4777,
        headline: 'First Sudanese Woman Medical Doctor & Co-Founder of the Sudanese Women’s Union',
        bio:
          'Born in Omdurman in 1927, Khalida Zahir graduated from the Kitchener School of Medicine (University of Khartoum) in 1952 as Sudan’s very first female physician. She treated women and children free of charge in her clinics, co-founded the Young Cultured Women’s Society and the Sudanese Women’s Union (SWU) in 1952, and led the struggle for Sudanese women’s rights and healthcare.'
      },
      {
        id: 'rm-sudan-fatima',
        name: 'Fatima Ahmed Ibrahim',
        years: '1930–2017 — Khartoum & Omdurman, Sudan',
        birthplace: 'Khartoum / Omdurman, Sudan',
        ethnicity: 'Sudanese',
        lat: 15.5007,
        lng: 32.5599,
        headline: 'First Female Member of Parliament in Sudan & Founder of "Sawt al-Mar’a" (Voice of Women)',
        bio:
          'Born in Khartoum, Fatima Ahmed Ibrahim founded the pioneering journal "Sawt al-Mar’a" (The Woman’s Voice) and in 1965 became the first woman elected to the Sudanese Parliament — and the first female parliamentarian in the Arab and East African region — campaigning tirelessly for equal pay, maternity leave, family law reform, and girls’ literacy.'
      },
      {
        id: 'rm-sudan-nahid',
        name: 'Dr. Nahid Toubia',
        years: 'Born 1951 — Khartoum, Sudan',
        birthplace: 'Khartoum, Sudan',
        ethnicity: 'Sudanese',
        lat: 15.5881,
        lng: 32.5342,
        headline: 'First Female Surgeon in Sudan & Global Medical Pioneer Against FGM/C',
        bio:
          'Born in Khartoum in 1951, Dr. Nahid Toubia became the first woman surgeon in Sudan and head of pediatric surgery at Khartoum Teaching Hospital. She co-founded RAINBO (Research, Action and Information Network for the Bodily Integrity of Women) and helped lead the medical and legal campaign that culminated in Sudan outlawing FGM/C.'
      }
    ],
    healthAlerts: [
      {
        id: 'sudan-alert-1',
        title: 'Emergency Maternal & Reproductive Health Clinics Across Sudan',
        severity: 'Urgent Maternal Health Notice',
        body:
          'Community midwives (Dayat), UNFPA-supported mobile reproductive health teams, and functioning maternity hospitals in Omdurman, Port Sudan, Wad Madani, Kassala, and El Fasher continue providing emergency obstetric delivery, clean birth kits, and clinical management of gender-based violence.'
      }
    ]
  },

  'Democratic Republic of the Congo': {
    genderOutlook: [
      {
        id: 'drc-sgbv-holistic-protection',
        title: 'Protection Against Sexual & Domestic Violence, Maisons d’Écoute & One-Stop Centers in DRC',
        summary:
          'The DRC enacted landmark 2006 Sexual Violence Laws (Laws 06/018 and 06/019), the 2016 Family Code reform (abolishing the requirement for a wife to obtain her husband’s authorization for legal/economic acts), and established FONAREV (National Reparations Fund for Survivors of Conflict-Related Sexual Violence). In practice, grassroots women’s networks and One-Stop Centers bridge the gap where state courts and rural infrastructure face severe strain.',
        keyRealities: [
          'The 4-Pillar Holistic Model (Fondation Panzi, Maison Dorcas & City of Joy in Bukavu): Pioneered at Panzi Hospital in South Kivu, survivors receive integrated (1) emergency medical & fistula care (including 72-hour PEP kits), (2) trauma-informed psychosocial therapy, (3) free legal aid via Cliniques Juridiques (Mulamba, Bulenga, Bunyakiri, Kavumu, Kamituga, Uvira, Kinshasa), and (4) residential transitional housing & socio-economic reintegration at Maison Dorcas and the City of Joy.',
          'Maisons d’Écoute, Cellules d’Écoute & Espaces Sûrs (UNHCR, ICRC & Grassroots Networks): Across Tanganyika (Kalemie, Nyemba, Kabalo, Kiambi, Ankoro, Manono, Nyunzu), North Kivu (Goma, Karisimbi, Nyiragongo, Mweso, Kirotshe/Saké, Katoyi, Lubero/Kayna/Masereka/Biena, Walikale/Pinga/Kibua, Beni), South Kivu, and Ituri, free confidential Listening Houses (Maisons d’Écoute supported by ICRC/Red Cross, UNHCR, SAFDF/Fondation RAJA, SOFEPADI, DFJ, HEAL Africa, and MSF Cliniques Tumaini) provide zero-cost psychological first aid and 72-hour medical referral.',
          'Protective Learning Spaces for Girls (Education Cannot Wait): In displacement zones across Ituri, North Kivu, South Kivu, and Tanganyika, Education Cannot Wait (ECW) and local women-led NGOs run protective learning spaces and psychosocial support to shield displaced adolescent girls from gender-based violence and forced recruitment.'
        ]
      },
      {
        id: 'drc-divorce-custody',
        title: 'Marriage, Divorce & Child Custody Realities in the DRC (Code de la Famille)',
        summary:
          'Under the revised Congolese Family Code (Law N° 16/008 of 2016 amending the 1987 Code de la Famille), statutory law recognizes civilly registered marriages (including monogamous or customary marriages recorded with the civil registry) and requires Courts of Peace (Tribunaux de Paix) to decide child custody according to the best interests of the child (Intérêt Supérieur de l’Enfant).',
        keyRealities: [
          'Leaving an Abusive Marriage & Free Legal Clinics: Physical abuse, marital rape, and severe mistreatment constitute legal grounds for divorce (destruction irrémédiable de l’union conjugale). Women’s legal clinics — including Dynamique des Femmes Juristes (DFJ in Goma & Mweso), SOFEPADI (Beni, Bunia & Goma), SAFDF (Biena/Lubero), and Panzi Cliniques Juridiques — represent women free of charge in court and help obtain birth certificates and custody orders.'
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'drc-maternal-solidarity',
        title: 'Congolese Women’s Solidarity Circles (Wamama Tuende Mbele, Umoja Ni Nguvu) & Postpartum Care',
        body:
          'Across Congolese communities from Swahili-speaking Eastern DRC (Kivu and Tanganyika) to Lingala, Kikongo, and Tshiluba regions, mothers rely on women’s mutual-aid associations (such as Umoja wa Mama, Tupendane Wa Mama, and Mama Ni Mama) and elder female relatives during the postpartum recovery period, preparing iron-rich cassava leaf stews (Pondu / Sombe), amaranth greens (Lengalenga), and warm herbal washes.',
        healthNote:
          'Medical Perspective: Nutrient-dense greens like Pondu/Sombe and Lengalenga help rebuild maternal iron stores after childbirth, and community Conseillères Communautaires (female peer counselors) are a vital bridge for 72-hour emergency medical care and safe facility delivery at Reference Hospitals (HGR).'
      }
    ],
    roleModels: [
      {
        id: 'rm-drc-christine',
        name: 'Christine Schuler Deschryver',
        years: 'Bukavu, Sud-Kivu, Democratic Republic of the Congo',
        birthplace: 'Lubumbashi & Bukavu, DRC',
        ethnicity: 'Congolese',
        lat: -2.5412,
        lng: 28.8635,
        headline: 'Co-Founder & Director of City of Joy (Bukavu) & Champion of Congolese Survivors of Violence',
        bio:
          'Co-founder and Director of V-Day Congo and the City of Joy in Bukavu alongside Dr. Denis Mukwege and V (Eve Ensler), Christine Schuler Deschryver has dedicated her life to building a transformational residential sanctuary in South Kivu where thousands of Congolese women survivors of conflict-related sexual violence heal from trauma and train as community leaders.'
      },
      {
        id: 'rm-drc-julienne',
        name: 'Julienne Lusenge',
        years: 'Beni, Nord-Kivu & Bunia, Ituri, Democratic Republic of the Congo',
        birthplace: 'Haut-Uélé / Nord-Kivu, DRC',
        ethnicity: 'Congolese',
        lat: 0.4912,
        lng: 29.4731,
        headline: 'Co-Founder of SOFEPADI & Fonds pour les Femmes Congolaises (UN Human Rights Prize Laureate)',
        bio:
          'When armed conflict devastated Eastern DRC in 1998, Julienne Lusenge co-founded SOFEPADI (Solidarité Féminine pour la Paix et le Développement Intégral) in Beni, opening the Karibuni Wa Mama safe transit house, medical clinics for fistula and rape survivors, and legal clinics across North Kivu and Ituri, as well as the Fund for Congolese Women (FFC).'
      },
      {
        id: 'rm-drc-chantal',
        name: 'Chantal Yelu Mulop & Grassroots Conseillères of Tanganyika and Kivu',
        years: 'Kinshasa, Kalemie & Goma, Democratic Republic of the Congo',
        birthplace: 'Democratic Republic of the Congo',
        ethnicity: 'Congolese',
        lat: -5.9475,
        lng: 29.1947,
        headline: 'Leaders of the Maisons de la Femme, Cellules d’Écoute & National VBG Reform in DRC',
        bio:
          'From the Maisons de la Femme in Kalemie and Goma to rural Conseillères Communautaires in Nyunzu, Manono, Masisi, and Lubero, Congolese women advocates and legal reformers have built frontline listening cells and national mechanisms to break the silence around gender-based violence and bring free medical, psychological, and legal care to every province.'
      }
    ],
    healthAlerts: [
      {
        id: 'drc-alert-72h',
        title: 'Urgent 72-Hour Free Medical Care & Psychosocial Support for Survivors (UNHCR / Panzi / MSF / ICRC)',
        severity: 'Critical 72-Hour Medical & Protection Notice',
        body:
          'If you have experienced sexual violence, seek medical care within 72 hours at any Hôpital Général de Référence (HGR), Clinique Tumaini (MSF), HEAL Africa, or Panzi Hospital for free HIV post-exposure prophylaxis (PEP), emergency contraception, STI treatment, and confidential psychosocial listening at any Maison d’Écoute or Espace Sûr. All UNHCR and partner GBV services are 100% free of charge.'
      }
    ]
  }
};

export function getBeingAWomanContent(userNationVariable1, userNationVariable2, currentRegion) {
  const exactMatch =
    COUNTRY_WOMANHOOD_PROFILES[userNationVariable1] ||
    Object.entries(COUNTRY_WOMANHOOD_PROFILES).find(
      ([k]) =>
        userNationVariable1.toLowerCase().includes(k.toLowerCase()) ||
        k.toLowerCase().includes(userNationVariable1.toLowerCase())
    )?.[1];

  const defaultHealthAlerts = [
    {
      id: `health-alert-1-${userNationVariable1}`,
      title: `Maternal, OB/GYN & Women’s Safe Haven Alerts in ${userNationVariable1}`,
      severity: 'Active Women’s Health Notice',
      body: `24/7 emergency obstetric care, prenatal anemia & blood-pressure screening, cervical/breast health clinics, and confidential domestic violence safe havens are active across ${userNationVariable1}. Check the "Emergency contacts near you!" tab for immediate regional dispatch and crisis lines.`
    },
    {
      id: `health-alert-2-${userNationVariable1}`,
      title: `Safe Water, Postpartum Infection Prevention & Clean Delivery in ${userNationVariable1}`,
      severity: 'Maternal Prevention Guidance',
      body: `Expectant and postpartum mothers in ${userNationVariable1} are advised to seek immediate hospital care for any postpartum fever, heavy bleeding, severe headache, or blurred vision, and to use boiled or treated drinking water.`
    }
  ];

  if (exactMatch) {
    return {
      ...exactMatch,
      healthAlerts: exactMatch.healthAlerts || defaultHealthAlerts
    };
  }

  const baseCenter = currentRegion?.center || [9.082, 8.6753];
  return {
    healthAlerts: defaultHealthAlerts,
    genderOutlook: [
      {
        id: 'generic-dv-leaving',
        title: `Leaving an Abusive Relationship & Domestic Violence Laws in ${userNationVariable1}`,
        summary: `In ${userNationVariable1}, how domestic violence and spousal abuse laws work in practice often depends on the gap between written national laws and local police, family, or customary/religious courts.`,
        keyRealities: [
          `Statutory Protection vs. Local Custom in ${userNationVariable1}: Even where national legislation criminalizes domestic violence and allows women to seek restraining or protection orders, local authorities or elders may pressure women to reconcile privately unless supported by a women’s legal aid clinic or shelter advocate.`,
          `Documenting Harm Safely: Keeping confidential medical records from a hospital visit, photographs of injuries, or witness accounts from trusted female relatives or shelter workers strengthens your position if you seek a judicial protection order or divorce in ${userNationVariable1}.`
        ]
      },
      {
        id: 'generic-divorce-custody',
        title: `Divorce & Child Custody Realities in ${userNationVariable1}`,
        summary: `When a mother in ${userNationVariable1} wants to leave an abusive marriage, one of the most urgent questions is whether the legal or customary system will protect her right to stay with her children.`,
        keyRealities: [
          `Primary Custody of Young Children: In most civil and religious family courts in ${userNationVariable1}, maternal care for infants and young children is prioritized, especially when documented domestic violence shows that the father poses a safety risk.`,
          `Customary vs. Civil Courts: Where customary or patrilineal traditions favor the father’s family, women’s legal aid organizations and family court advocates in ${userNationVariable1} can often petition statutory family courts under national child-welfare standards ("the best interests of the child") to keep children with their mother.`
        ]
      },
      {
        id: 'generic-bodily-rights',
        title: `Reproductive Healthcare & Bodily Autonomy in ${userNationVariable1}`,
        summary: `Understanding your right to confidential prenatal care, emergency obstetric treatment, and contraception in ${userNationVariable1}.`,
        keyRealities: [
          `Emergency Maternal Care: Public and maternity hospitals in ${userNationVariable1} are obligated to treat life-threatening obstetric emergencies (such as severe bleeding, pre-eclampsia, or sepsis) immediately.`,
          `Connecting With Local Advocates: Use the "Emergency contacts near you!" tab or the Safe Haven map pins to connect directly with verified women’s shelters and legal-aid advocates in ${userNationVariable1}.`
        ]
      }
    ],
    traditionalHealth: [
      {
        id: 'generic-trad-postpartum',
        title: `Traditional ${userNationVariable2} Postpartum Recovery & Maternal Rest`,
        body: `In traditional ${userNationVariable2} female health, the weeks immediately following childbirth are recognized as a vital period of physical and emotional restoration, where female relatives and neighbors prepare warm, iron-rich broths, herbal teas, and nutritious meals so the mother can rest and recover.`,
        healthNote:
          'Medical Perspective: Community support, warm nutrient-dense foods, and rest strongly protect maternal recovery and breastfeeding, while any internal herbal insertions or unsterile instruments should always be avoided to prevent infection.'
      },
      {
        id: 'generic-trad-menstrual',
        title: `Traditional ${userNationVariable2} Herbal Comforts & Women’s Solidarity Circles`,
        body: `Across ${userNationVariable2} communities, elder women pass down knowledge of soothing external herbal washes, warm compresses for menstrual cramps, and women’s mutual-aid circles that support girls and mothers through puberty, pregnancy, and menopause.`,
        healthNote:
          'Medical Perspective: Combining culturally familiar comfort measures with modern OB/GYN screening (blood pressure checks, anemia testing, and cervical screening) gives women the best of both worlds.'
      }
    ],
    roleModels: [
      {
        id: `rm-generic-1-${userNationVariable1}`,
        name: `Pioneering ${userNationVariable2} Women Physicians & Midwives`,
        years: `${userNationVariable1}`,
        birthplace: `Capital & Regional Centers of ${userNationVariable1}`,
        ethnicity: `${userNationVariable2}`,
        lat: baseCenter[0] + 0.08,
        lng: baseCenter[1] - 0.08,
        headline: `First Generation of ${userNationVariable2} Women Doctors, Midwives & Maternal Health Advocates`,
        bio: `Across ${userNationVariable1}, pioneering ${userNationVariable2} women broke barriers to enter medicine, midwifery, and nursing, establishing maternity wards, training rural birth attendants, and fighting to lower maternal mortality for women and girls of every background.`
      },
      {
        id: `rm-generic-2-${userNationVariable1}`,
        name: `${userNationVariable2} Women’s Rights & Legal Reform Leaders`,
        years: `${userNationVariable1}`,
        birthplace: `${userNationVariable1}`,
        ethnicity: `${userNationVariable2}`,
        lat: baseCenter[0] - 0.08,
        lng: baseCenter[1] + 0.08,
        headline: `Champions of Domestic Violence Protection, Girls’ Education & Family Law Reform in ${userNationVariable1}`,
        bio: `From grassroots community organizers to constitutional lawyers and shelter founders in ${userNationVariable1}, ${userNationVariable2} female leaders have fought to pass domestic violence laws, open safe houses, and defend mothers’ rights to education, safety, and child custody.`
      }
    ]
  };
}
