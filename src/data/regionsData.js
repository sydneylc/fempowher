// Regions, Upazila District Polygons (matching the Cox's Bazar sketch), Women's Safe Havens, OB/GYN Clinics, Emergency Contacts & Public Health News
import { WORLD_CENTERS_DIRECTORY } from './worldCentersDirectory.js?v=287';

export const FEATURED_REGIONS = [
  {
    id: 'total-anon-earth',
    nameEn: 'Planet Earth (Global Anonymous View)',
    nameLocal: 'Planet Earth',
    country: 'Global',
    defaultLang: 'en',
    secondaryLang: 'en',
    center: [20.0, 15.0],
    zoom: 2,
    userLocation: [20.0, 15.0],
    userLocationLabel: {
      en: 'Global Anonymous View',
      rhg: 'Global View',
      bn: 'বিশ্ব ম্যাপ',
      so: 'Adduunka'}
  },
  {
    id: 'coxs-bazar',
    nameEn: "Cox's Bazar & Rohingya Camps (Ukhiya / Kutupalong)",
    nameLocal: "কক্সবাজার ও উখিয়া ক্যাম্প • 𐴑𐴡𐴑𐴏𐴁𐴝𐴎𐴝𐴌 / 𐴀𐴟𐴈𐴞𐴘𐴝",
    country: 'Bangladesh',
    defaultLang: 'rhg',
    secondaryLang: 'bn',
    center: [21.48, 92.03],
    zoom: 10,
    userLocation: [21.212, 92.163], // Ukhiya / Kutupalong Camp center
    userLocationLabel: {
      en: 'Ukhiya / Kutupalong Rohingya Camp',
      rhg: 'Ukhiya / Kutupalong Camp (𐴀𐴟𐴈𐴞𐴘𐴝 𐴑𐴠𐴔𐴢)',
      bn: 'উখিয়া / কুতুপালং রোহিঙ্গা ক্যাম্প',
      so: 'Xerada Ukhiya / Kutupalong'}
  },
  {
    id: 'balochistan-pakistan',
    nameEn: 'Balochistan (Quetta, Kalat, Makran & Gwadar)',
    nameLocal: 'بلوچستان • Quetta & Makran',
    country: 'Pakistan',
    defaultLang: 'bal',
    secondaryLang: 'ur',
    center: [28.95, 65.50],
    zoom: 7,
    userLocation: [30.1798, 66.9750],
    userLocationLabel: {
      en: 'Quetta / Balochistan Region',
      rhg: 'Balochistan, Pakistan',
      bn: 'বেলুচিস্তান, পাকিস্তান',
      so: 'Balochistan, Pakistan'}
  },
  {
    id: 'somalia-mogadishu',
    nameEn: 'Mogadishu & Banadir Region, Somalia',
    nameLocal: 'Muqdisho & Gobolka Banaadir (Soomaaliya)',
    country: 'Somalia',
    defaultLang: 'so',
    secondaryLang: 'en',
    center: [2.0469, 45.3182],
    zoom: 12,
    userLocation: [2.039, 45.305],
    userLocationLabel: {
      en: 'Hodan / Medina District, Mogadishu',
      rhg: 'Mogadishu, Somalia',
      bn: 'মোগাদিশু, সোমালিয়া',
      so: 'Degmada Hodan / Madiina, Muqdisho'}
  },
  {
    id: 'dhaka-bangladesh',
    nameEn: 'Dhaka & Korail Community, Bangladesh',
    nameLocal: 'ঢাকা, বাংলাদেশ (Dhaka)',
    country: 'Bangladesh',
    defaultLang: 'bn',
    secondaryLang: 'en',
    center: [23.7806, 90.407],
    zoom: 12,
    userLocation: [23.785, 90.412],
    userLocationLabel: {
      en: 'Dhaka Central',
      rhg: 'Dhaka',
      bn: 'ঢাকা সদর',
      so: 'Dhaka'}
  },
  {
    id: 'us-massachusetts',
    nameEn: 'Massachusetts, United States',
    nameLocal: 'Massachusetts, USA',
    country: 'United States',
    defaultLang: 'en',
    secondaryLang: 'es',
    center: [42.3601, -71.0589],
    zoom: 9,
    userLocation: [42.3601, -71.0589],
    userLocationLabel: {
      en: 'Massachusetts, United States',
      rhg: 'Massachusetts, USA',
      bn: 'ম্যাসাচুসেটস, যুক্তরাষ্ট্র',
      so: 'Massachusetts, Maraykanka'}
  }
];

// Colored Sub-Region Polygons for Cox's Bazar matching the exact sub-districts in the user's sketch:
// Kutubdia (blue-purple), Pekua (sage green), Chakaria (tan/brown), Maheshkhali (green), Cox's Bazar Sadar (purple), Ramu (olive), Ukhiya (rose/pink)
export const COXS_BAZAR_SUBREGIONS = [
  {
    id: 'kutubdia',
    nameEn: 'Kutubdia',
    nameRhg: 'Kutubdia • 𐴑𐴟𐴃𐴟𐴁𐴊𐴞𐴘𐴝',
    nameBn: 'কুতুবদিয়া',
    color: '#7986CB',
    labelPos: [21.83, 91.855],
    coords: [
      [21.93, 91.84], [21.92, 91.88], [21.74, 91.87], [21.73, 91.83], [21.84, 91.82]
    ]
  },
  {
    id: 'pekua',
    nameEn: 'Pekua',
    nameRhg: 'Pekua • 𐴉𐴠𐴑𐴟𐴖𐴝',
    nameBn: 'পেকুয়া',
    color: '#81C784',
    labelPos: [21.81, 91.96],
    coords: [
      [21.90, 91.91], [21.89, 92.02], [21.73, 92.01], [21.72, 91.92], [21.80, 91.90]
    ]
  },
  {
    id: 'chakaria',
    nameEn: 'Chakaria',
    nameRhg: 'Chakaria • 𐴆𐴡𐴑𐴡𐴌𐴞𐴘𐴝',
    nameBn: 'চকরিয়া',
    color: '#BCAAA4',
    labelPos: [21.74, 92.09],
    coords: [
      [21.91, 92.02], [21.92, 92.20], [21.78, 92.23], [21.62, 92.18], [21.61, 92.02], [21.73, 92.01]
    ]
  },
  {
    id: 'maheshkhali',
    nameEn: 'Maheshkhali',
    nameRhg: 'Maheshkhali • 𐴔𐴡𐴇𐴠𐴐𐴈𐴝𐴓𐴞',
    nameBn: 'মহেশখালী',
    color: '#66BB6A',
    labelPos: [21.58, 91.94],
    coords: [
      [21.72, 91.89], [21.72, 92.01], [21.48, 92.00], [21.47, 91.88], [21.58, 91.86]
    ]
  },
  {
    id: 'coxs-bazar-sadar',
    nameEn: "Cox's Bazar Sadar",
    nameRhg: 'Daktor meyeá (bemarior) • 𐴑𐴡𐴑𐴏𐴁𐴝𐴎𐴝𐴌 𐴏𐴡𐴊𐴡𐴌',
    nameBn: 'কক্সবাজার সদর',
    color: '#9575CD',
    labelPos: [21.45, 92.02],
    coords: [
      [21.61, 91.99], [21.61, 92.10], [21.37, 92.07], [21.38, 91.96], [21.48, 91.97]
    ]
  },
  {
    id: 'ramu',
    nameEn: 'Ramu',
    nameRhg: 'Ramu • 𐴌𐴝𐴔𐴟 (Daktor meyeá)',
    nameBn: 'রামু',
    color: '#AED581',
    labelPos: [21.37, 92.15],
    coords: [
      [21.62, 92.10], [21.61, 92.24], [21.32, 92.25], [21.25, 92.12], [21.37, 92.07]
    ]
  },
  {
    id: 'ukhia',
    nameEn: 'Ukhia (Rohingya Camps)',
    nameRhg: 'Ukhia • 𐴀𐴟𐴈𐴞𐴘𐴝 (Daktor meyeá bemarior)',
    nameBn: 'উখিয়া (রোহিঙ্গা ক্যাম্প)',
    color: '#CE93D8',
    labelPos: [21.18, 92.15],
    coords: [
      [21.32, 92.07], [21.32, 92.23], [21.08, 92.22], [21.08, 92.06], [21.22, 92.05]
    ]
  }
];

// Red Pin Safe Havens, Hospitals & Specialized OB/GYN Clinics (matching red pins in user's sketch)
export const CLINICS_BY_REGION = {
  'total-anon-earth': [
    ...WORLD_CENTERS_DIRECTORY,
    {
      id: 'global-coxs-bazar',
      regionDistrict: "Cox's Bazar, Bangladesh",
      type: 'safe-haven',
      lat: 21.198,
      lng: 92.158,
      name: {
        en: 'Ukhia Kutupalong Women Safe Haven & Midwife Clinic (UNFPA / BRAC)',
        rhg: 'Ukhia Kutupalong Daktor Meyeá & Hifazot Ghor',
        bn: 'উখিয়া কুতুপালং নারী নিরাপদ কেন্দ্র',
        so: 'Xarunta Badbaadada Haweenka ee Ukhia'},
      categoryBadge: {
        en: 'Women Safe Haven & 24/7 Maternity',
        rhg: 'Daktor meyeá • 24/7 Safe Haven',
        bn: 'নারী নিরাপদ আশ্রয়',
        so: 'Goobta Badbaadada Haweenka'},
      phone: '+880-1713-377450',
      emergencyHotline: '109',
      address: {
        en: 'Camp 4 Extension, Ukhia, Cox’s Bazar, Bangladesh',
        rhg: 'Camp 4, Ukhia',
        bn: 'ক্যাম্প ৪, উখিয়া, কক্সবাজার',
        so: 'Camp 4, Ukhia'},
      services: {
        en: ['Female-only doctors & interpreters', 'Safe childbirth & prenatal care', 'Abnormal bleeding care'],
        rhg: ['Meyeá Daktor', 'Safe Delivery'],
        bn: ['মহিলা ডাক্তার', 'নিরাপদ প্রসব'],
        so: ['Dhakhaatiir dumar ah']
      },
      directionsText: {
        en: 'Camp 4 Main Water Tank, Ukhia, Bangladesh.',
        rhg: 'Camp 4, Ukhia.',
        bn: 'ক্যাম্প ৪, উখিয়া।',
        so: 'Camp 4, Ukhia.'}
    },
    {
      id: 'global-mogadishu',
      regionDistrict: 'Mogadishu, Somalia',
      type: 'hospital',
      lat: 2.032,
      lng: 45.298,
      name: {
        en: 'Banadir Maternity & Women’s Hospital (Mogadishu, Somalia)',
        rhg: 'Banadir Ma o Baicchar Haspatal',
        bn: 'বানাদির মাতৃ ও শিশু হাসপাতাল',
        so: 'Isbitaalka Hooyada & Dhallaanka ee Banaadir'},
      categoryBadge: {
        en: '24/7 Free OB/GYN & Elder Women’s Ward',
        rhg: '24/7 Meyeá Haspatal',
        bn: '২৪ ঘণ্টা গাইনি হাসপাতাল',
        so: 'Isbitaalka Haweenka 24/7'},
      phone: '+252-61-5501122',
      emergencyHotline: '888',
      address: {
        en: 'Via Medina Road, Wadajir District, Mogadishu, Somalia',
        rhg: 'Via Medina Road, Mogadishu',
        bn: 'ভিয়া মদিনা রোড, মোগাদিশু',
        so: 'Jidka Madiina, Muqdisho'},
      services: {
        en: ['Abnormal Uterine Bleeding & Post-Menopause Care', '24/7 Emergency Obstetrics'],
        rhg: ['Besi Lou porar ilaj'],
        bn: ['অস্বাভাবিক রক্তক্ষরণ চিকিৎসা'],
        so: ['Daaweynta dhiig-baxa aan caadiga ahayn']
      },
      directionsText: {
        en: 'Via Medina Road, 1.5 km from KM4 Junction, Mogadishu.',
        rhg: 'Via Medina Road, Mogadishu.',
        bn: 'মদিনা রোড, মোগাদিশু।',
        so: 'Jidka Madiina, Muqdisho.'}
    },
    {
      id: 'global-quetta-balochistan',
      regionDistrict: 'Quetta, Balochistan, Pakistan',
      type: 'obgyn',
      lat: 30.199,
      lng: 67.009,
      name: {
        en: 'Bolan Maternal & Women’s Safe Haven Complex (Quetta, Balochistan)',
        rhg: 'Bolan Meyeá Haspatal, Balochistan',
        bn: 'বোলান মাতৃ হাসপাতাল, বেলুচিস্তান',
        so: 'Isbitaalka Haweenka ee Bolan, Balochistan'},
      categoryBadge: {
        en: 'OB/GYN & Women Safe Haven (Balochi / Pashto / Urdu)',
        rhg: 'OB/GYN & Safe Haven',
        bn: 'গাইনি ও নিরাপদ কেন্দ্র',
        so: 'OB/GYN & Badbaadada Haweenka'},
      phone: '+92-81-9201122',
      emergencyHotline: '115 / 1122',
      address: {
        en: 'Brewery Road, Quetta, Balochistan, Pakistan',
        rhg: 'Quetta, Balochistan',
        bn: 'কোয়েটা, বেলুচিস্তান',
        so: 'Quetta, Balochistan'},
      services: {
        en: ['Female Balochi & Pashto-speaking OB/GYN Specialists', '24/7 Maternal Emergency & Fistula Care'],
        rhg: ['Meyeá Daktor'],
        bn: ['মহিলা গাইনি বিশেষজ্ঞ'],
        so: ['Dhakhaatiir dumar ah']
      },
      directionsText: {
        en: 'Main Brewery Road medical corridor, Quetta.',
        rhg: 'Quetta.',
        bn: 'কোয়েটা।',
        so: 'Quetta.'}
    },
    {
      id: 'global-mexico-city-safe',
      regionDistrict: 'Mexico City, Mexico',
      type: 'safe-haven',
      lat: 19.4326,
      lng: -99.1332,
      name: {
        en: 'Red Nacional de Refugios & LUNAS Women’s Safe Haven (Mexico City)'
      },
      categoryBadge: {
        en: 'Women Safe Haven & GBV Protection Shelter'
      },
      phone: '+52-800-822-4460',
      emergencyHotline: '911 / 800-822-4460',
      address: {
        en: 'Centro Histórico, Ciudad de México, Mexico'
      },
      services: {
        en: [
          '24/7 Confidential Domestic Abuse Shelter for Women & Children',
          'Emergency Medical, Psychological & Reproductive Care',
          'Indigenous & Spanish Language Support'
        ]
      },
      directionsText: {
        en: 'Central Mexico City LUNAS network; call 800-822-4460 for free safe transport.'
      }
    },
    {
      id: 'global-bogota-hospital',
      regionDistrict: 'Bogotá, Colombia',
      type: 'hospital',
      lat: 4.589,
      lng: -74.083,
      name: {
        en: 'Instituto Materno Infantil — Women & Maternity Hospital (Bogotá)'
      },
      categoryBadge: {
        en: '24/7 Public Maternity & OB/GYN Hospital'
      },
      phone: '+57-601-443-1790',
      emergencyHotline: '123 / Línea Púrpura 018000112137',
      address: {
        en: 'Cra. 10 #1-66 Sur, Bogotá, Colombia'
      },
      services: {
        en: [
          '24/7 High-Risk Obstetrics & Emergency Gynecology',
          'Línea Púrpura Women’s Crisis Referral',
          'Free Refugee & Migrant Maternal Care'
        ]
      },
      directionsText: {
        en: 'Carrera 10 #1-66 Sur, Hospital San Juan de Dios Complex, Bogotá.'
      }
    },
    {
      id: 'global-saopaulo-casa',
      regionDistrict: 'São Paulo, Brazil',
      type: 'safe-haven',
      lat: -23.541,
      lng: -46.631,
      name: {
        en: 'Casa da Mulher Brasileira — 24/7 Women’s Safe Haven (São Paulo)'
      },
      categoryBadge: {
        en: 'Women Safe Haven & Domestic Abuse Sanctuary'
      },
      phone: '+55-11-3275-8000',
      emergencyHotline: 'Ligue 180 / 190',
      address: {
        en: 'Rua Vieira Ravasco, 26, Cambuci, São Paulo, Brazil'
      },
      services: {
        en: [
          '24/7 Emergency Shelter for Domestic Violence Survivors',
          'On-Site Medical Triage, Psychosocial Care & Women’s Delegation',
          'Immediate Safe Transport'
        ]
      },
      directionsText: {
        en: 'Cambuci District, central São Paulo; open 24 hours a day.'
      }
    },
    {
      id: 'global-london-uclh',
      regionDistrict: 'London, United Kingdom',
      type: 'hospital',
      lat: 51.5246,
      lng: -0.1366,
      name: {
        en: 'Elizabeth Garrett Anderson Wing — Women’s Hospital (UCLH, London)'
      },
      categoryBadge: {
        en: '24/7 NHS Maternity & Emergency Gynaecology Hospital'
      },
      phone: '+44-20-3456-7890',
      emergencyHotline: '999 / National DV Helpline 0808-2000-247',
      address: {
        en: '25 Grafton Way, London WC1E 6DB, UK'
      },
      services: {
        en: [
          '24/7 Emergency Gynaecology & Maternity Assessment',
          'Specialist FGM / African Well Woman Clinic',
          'Confidential Domestic Abuse Midwife Support'
        ]
      },
      directionsText: {
        en: '25 Grafton Way, near Euston Square & Warren Street stations, London.'
      }
    },
    {
      id: 'global-paris-ghu',
      regionDistrict: 'Paris, France',
      type: 'safe-haven',
      lat: 48.869,
      lng: 2.389,
      name: {
        en: 'La Maison des Femmes — Safe Haven & Reproductive Care (Paris / Saint-Denis)'
      },
      categoryBadge: {
        en: 'Women Safe Haven, Shelter & OB/GYN Care'
      },
      phone: '+33-1-42-35-61-28',
      emergencyHotline: '3919 (Violences Femmes Info) / 15',
      address: {
        en: '2 Rue du Dr Delafontaine, Saint-Denis / Paris, France'
      },
      services: {
        en: [
          'Comprehensive Care for Women Facing Violence or Displacement',
          'Family Planning, Prenatal & Gynecological Care',
          'Multilingual Social & Shelter Protection'
        ]
      },
      directionsText: {
        en: 'Delafontaine Hospital campus, Line 13 Basilique de Saint-Denis, Paris.'
      }
    },
    {
      id: 'global-tigray-mekelle',
      regionDistrict: 'Mekelle, Tigray, Ethiopia',
      type: 'hospital',
      lat: 13.506,
      lng: 39.462,
      name: {
        en: 'Ayder Comprehensive Specialized Hospital — Maternity & Fistula Ward (Mekelle, Tigray)'
      },
      categoryBadge: {
        en: '24/7 OB/GYN Hospital (Tigrinya / Amharic / Afar)'
      },
      phone: '+251-34-441-6690',
      emergencyHotline: '907 / 7711',
      address: {
        en: 'Ayder Sub-City, Mekelle, Tigray, Ethiopia'
      },
      services: {
        en: [
          '24/7 Emergency Obstetrics, C-Section & Fistula Repair',
          'One-Stop GBV & Trauma Recovery Center for Women',
          'Tigrinya-Speaking Female Midwives & OB/GYNs'
        ]
      },
      directionsText: {
        en: 'Ayder Hospital Campus, northern Mekelle, Tigray.'
      }
    },
    {
      id: 'global-asmara-eritrea',
      regionDistrict: 'Asmara, Eritrea',
      type: 'hospital',
      lat: 15.341,
      lng: 38.932,
      name: {
        en: 'Orotta National Referral Maternity Hospital (Asmara, Eritrea)'
      },
      categoryBadge: {
        en: '24/7 National Maternity & Gynecology Hospital (Tigrinya / Tigre / Arabic)'
      },
      phone: '+291-1-127766',
      emergencyHotline: '114',
      address: {
        en: 'Orotta Medical Complex, Asmara, Eritrea'
      },
      services: {
        en: [
          '24/7 Emergency Childbirth & Postpartum Hemorrhage Care',
          'Gynecology & Fistula Treatment',
          'Tigrinya, Tigre & Arabic Speaking Staff'
        ]
      },
      directionsText: {
        en: 'Orotta Hospital grounds, central Asmara.'
      }
    },
    {
      id: 'global-nairobi-gvrc',
      regionDistrict: 'Nairobi, Kenya',
      type: 'safe-haven',
      lat: -1.295,
      lng: 36.784,
      name: {
        en: 'Nairobi Women’s Hospital — Gender Violence Recovery Centre & Safe Haven (Nairobi)'
      },
      categoryBadge: {
        en: '24/7 Free Women Safe Haven & Trauma Center'
      },
      phone: '+254-800-720-565',
      emergencyHotline: '1195 (National GBV Helpline) / 0800-720-565',
      address: {
        en: 'Argwings Kodhek Rd, Hurlingham, Nairobi, Kenya'
      },
      services: {
        en: [
          '100% Free 24/7 Medical & Psychosocial Care for Survivors of Abuse',
          'Emergency Shelter Referral & Safe House Placement',
          'Swahili, Somali, Oromo & English Support'
        ]
      },
      directionsText: {
        en: 'Hurlingham, along Argwings Kodhek Road, Nairobi.'
      }
    },
    {
      id: 'global-goma-panzi',
      regionDistrict: 'Bukavu / Goma, DR Congo',
      type: 'hospital',
      lat: -2.528,
      lng: 28.861,
      name: {
        en: 'Panzi Hospital & Foundation — Women’s Healing & Safe Haven (Bukavu / East DRC)'
      },
      categoryBadge: {
        en: 'World-Renowned OB/GYN, Fistula & Survivor Hospital'
      },
      phone: '+243-997-712-566',
      emergencyHotline: '112 / +243-997-712-566',
      address: {
        en: 'Avenue de Panzi, Bukavu, South Kivu, DR Congo'
      },
      services: {
        en: [
          'Holistic OB/GYN, Complex Fistula & Prolapse Surgery',
          'Maison Dorcas Transitional Safe Haven & Shelter',
          'Swahili, Lingala, Mashi & French Care'
        ]
      },
      directionsText: {
        en: 'Panzi Quarter, 6 km south of Bukavu center.'
      }
    },
    {
      id: 'global-lagos-mirabel',
      regionDistrict: 'Lagos, Nigeria',
      type: 'safe-haven',
      lat: 6.591,
      lng: 3.342,
      name: {
        en: 'The Mirabel Centre — Women’s Sexual Assault & Domestic Crisis Safe Haven (Lagos)'
      },
      categoryBadge: {
        en: 'Women Safe Haven & Medical Crisis Center'
      },
      phone: '+234-815-577-0000',
      emergencyHotline: '112 / 0800-033-3333',
      address: {
        en: 'LASUTH Teaching Hospital Compound, Ikeja, Lagos, Nigeria'
      },
      services: {
        en: [
          'Free Confidential Medical Examination, Emergency Contraception & Care',
          'Safe Shelter Referral & Counseling',
          'Yoruba, Igbo, Hausa, Pidgin & English Support'
        ]
      },
      directionsText: {
        en: 'Inside Lagos State University Teaching Hospital (LASUTH), Ikeja.'
      }
    },
    {
      id: 'global-johannesburg-powa',
      regionDistrict: 'Johannesburg, South Africa',
      type: 'safe-haven',
      lat: -26.183,
      lng: 28.065,
      name: {
        en: 'POWA (People Opposing Women Abuse) Safe House & Clinic Referral (Johannesburg)'
      },
      categoryBadge: {
        en: 'Women Safe Haven & Domestic Violence Shelter'
      },
      phone: '+27-11-642-4345',
      emergencyHotline: '0800-428-428 (GBV Command Centre)',
      address: {
        en: 'Berea / Greater Johannesburg Safe Shelters, South Africa'
      },
      services: {
        en: [
          'Confidential Safe Houses for Women & Children',
          '24/7 GBV Command Centre & Maternal Hospital Referral',
          'Zulu, Xhosa, Sotho & English Support'
        ]
      },
      directionsText: {
        en: 'Call 0800-428-428 (or *120*7867#) for immediate safe transport to shelter.'
      }
    },
    {
      id: 'global-garhwal-dehradun',
      regionDistrict: 'Garhwal, Uttarakhand, India',
      type: 'hospital',
      lat: 30.318,
      lng: 78.031,
      name: {
        en: 'Doon Government Women’s Hospital & Sakhi One-Stop Safe Haven (Garhwal, Uttarakhand)'
      },
      categoryBadge: {
        en: '24/7 Women’s Hospital & Sakhi Safe Haven (Garhwali / Hindi)'
      },
      phone: '+91-135-265-9355',
      emergencyHotline: '181 (Women Helpline) / 108 (Ambulance)',
      address: {
        en: 'New Road, Dehradun, Garhwal Division, Uttarakhand, India'
      },
      services: {
        en: [
          '24/7 Free Maternity, C-Section & Gynecology Ward',
          'On-Site Sakhi One-Stop Domestic Abuse Shelter & Legal Aid',
          'Garhwali, Kumaoni & Hindi Speaking Female Doctors'
        ]
      },
      directionsText: {
        en: 'Near Parade Ground / Tehsil Chowk, Dehradun, Garhwal.'
      }
    },
    {
      id: 'global-quetta-safe-haven',
      regionDistrict: 'Quetta, Balochistan, Pakistan',
      type: 'safe-haven',
      lat: 30.184,
      lng: 67.018,
      name: {
        en: 'Dar-ul-Aman &WPC Women’s Safe Haven Shelter (Quetta, Balochistan)'
      },
      categoryBadge: {
        en: 'Women Safe Haven & Domestic Abuse Shelter (Balochi / Pashto / Brahui)'
      },
      phone: '+92-81-9202344',
      emergencyHotline: '1099 / 15 / 1122',
      address: {
        en: 'Satellite Town / Civil Lines, Quetta, Balochistan, Pakistan'
      },
      services: {
        en: [
          '24/7 Safe Sanctuary & Residential Protection for Women',
          'Female Medical Officer & OB/GYN Hospital Escort',
          'Balochi, Pashto, Brahui & Hazaragi Spoken'
        ]
      },
      directionsText: {
        en: 'Quetta Civil Lines; call 1099 or 1122 for confidential women’s rescue.'
      }
    },
    {
      id: 'global-amman-jordan',
      regionDistrict: 'Amman, Jordan',
      type: 'safe-haven',
      lat: 31.963,
      lng: 35.910,
      name: {
        en: 'Jordanian Women’s Union (JWU) Safe Haven Shelter & SRH Clinic (Amman)'
      },
      categoryBadge: {
        en: '24/7 Women Safe Haven & OB/GYN Clinic (Arabic / Kurdish)'
      },
      phone: '+962-6-568-7037',
      emergencyHotline: '962-6-567-2864 (24/7 Hotline) / 911',
      address: {
        en: 'Jabal Al-Hussein, Amman, Jordan'
      },
      services: {
        en: [
          '24/7 Emergency Domestic Violence Shelter for Women & Refugees',
          'On-Site Female OB/GYN & Reproductive Health Clinic',
          'Arabic, Kurdish & English Support'
        ]
      },
      directionsText: {
        en: 'Jabal Al-Hussein near Firas Circle, Amman.'
      }
    },
    {
      id: 'global-manila-pgh',
      regionDistrict: 'Manila, Philippines',
      type: 'hospital',
      lat: 14.578,
      lng: 120.985,
      name: {
        en: 'Philippine General Hospital — OB/GYN & Women’s Desk Protection Unit (Manila)'
      },
      categoryBadge: {
        en: '24/7 National OB/GYN Hospital & Pink Room Safe Haven'
      },
      phone: '+63-2-8554-8400',
      emergencyHotline: '911 / PNP Women’s Desk 117',
      address: {
        en: 'Taft Ave, Ermita, Manila, 1000 Metro Manila, Philippines'
      },
      services: {
        en: [
          '24/7 Obstetrics, Gynecology & High-Risk Pregnancy Ward',
          'PGH Women & Children Protection Unit (Pink Room Safe Haven)',
          'Tagalog, Cebuano, Ilocano & English Spoken'
        ]
      },
      directionsText: {
        en: 'Along Taft Avenue right beside Pedro Gil LRT-1 Station, Manila.'
      }
    },
    {
      id: 'global-sydney-rwh',
      regionDistrict: 'Sydney, Australia',
      type: 'hospital',
      lat: -33.918,
      lng: 151.239,
      name: {
        en: 'Royal Hospital for Women (Randwick, Sydney, Australia)'
      },
      categoryBadge: {
        en: '24/7 Specialist Women’s & Maternity Hospital'
      },
      phone: '+61-2-9382-6111',
      emergencyHotline: '000 / 1800RESPECT (1800-737-732)',
      address: {
        en: 'Barker St, Randwick NSW 2031, Australia'
      },
      services: {
        en: [
          '24/7 Specialized Gynaecology, Maternity & Menopause Care',
          '1800RESPECT Domestic & Family Violence Safe Haven Referral',
          'Free Multicultural Health Interpreters'
        ]
      },
      directionsText: {
        en: 'Randwick Hospital Campus, Light Rail L2 to Randwick.'
      }
    }
  ],
  'coxs-bazar': [
    {
      id: 'ukhia-unfpa-wfs',
      regionDistrict: 'Ukhia',
      type: 'safe-haven',
      lat: 21.198,
      lng: 92.158,
      name: {
        en: 'Ukhia Kutupalong Women Safe Haven & Midwife Clinic (UNFPA / BRAC)',
        rhg: 'Ukhia Kutupalong Daktor Meyeá & Hifazot Ghor (𐴀𐴟𐴈𐴞𐴘𐴝 𐴔𐴠𐴘𐴠𐴀𐴝 𐴇𐴠𐴉𐴝𐴅𐴡𐴃𐴢)',
        bn: 'উখিয়া কুতুপালং নারী নিরাপদ কেন্দ্র ও ধাত্রী ক্লিনিক (UNFPA / BRAC)',
        so: 'Xarunta Badbaadada Haweenka & Umulisada ee Ukhia Kutupalong'},
      categoryBadge: {
        en: 'Women Safe Haven & 24/7 Maternity',
        rhg: 'Daktor meyeá (bemarior) • 24/7 Safe Haven',
        bn: 'নারী নিরাপদ আশ্রয় ও ২৪ ঘণ্টা মাতৃসদন',
        so: 'Goobta Badbaadada Haweenka & Dhalmada'},
      phone: '+880-1713-377450',
      emergencyHotline: '109 / +880-341-64674',
      address: {
        en: 'Camp 4 Extension, Kutupalong-Balukhali Mega Camp, Ukhia, Cox’s Bazar',
        rhg: 'Camp 4, Kutupalong-Balukhali, Ukhia (CIC Office-or kache)',
        bn: 'ক্যাম্প ৪ এক্সটেনশন, কুতুপালং-বালুখালী, উখিয়া, কক্সবাজার',
        so: 'Xerada 4, Kutupalong, Ukhia'},
      services: {
        en: ['Female-only doctors & Rohingya interpreters', 'Safe childbirth & prenatal care', 'Abnormal bleeding & uterine care', 'Private GBV protection & counseling'],
        rhg: ['Sirf Meyeá Daktor ar Ruáingga দোভাষী (Interpreter)', 'Baiccha khaibar (Delivery) hifazot', 'Besi Lou (Bleeding) porile daktorir ilaj', 'Meyeá-fuaindor Gopon Hifazot Ghor'],
        bn: ['শুধুমাত্র মহিলা ডাক্তার ও রোহিঙ্গা দোভাষী', 'নিরাপদ প্রসব ও গর্ভকালীন সেবা', 'অস্বাভাবিক রক্তক্ষরণ ও জরায়ু চিকিৎসা', 'নারী সুরক্ষা ও গোপনীয় পরামর্শ'],
        so: ['Dhakhaatiir dumar oo keliya', 'Dhalmada badbaadada leh', 'Daaweynta dhiig-baxa aan caadiga ahayn', 'Badbaadada haweenka']
      },
      directionsText: {
        en: 'Walk 400m east from Camp 4 Main Water Tank toward the pink UNFPA sign. Free tom-tom / ambulance pickup available by calling.',
        rhg: 'Camp 4 Boro Fanir Tanki-tún 400 mitar pube (East) Gulaabi (Pink) sign-or dike hañtó. Fon gorile Ambulance aibo.',
        bn: 'ক্যাম্প ৪ প্রধান পানির ট্যাংক থেকে ৪০০ মিটার পূর্বে গোলাপি সাইনবোর্ডের দিকে হাঁটুন। কল করলে ফ্রি অ্যাম্বুলেন্স পাওয়া যাবে।',
        so: '400 mitir bari u soco laga bilaabo haanta biyaha ee Xerada 4.'}
    },
    {
      id: 'ramu-hope-hospital',
      regionDistrict: 'Ramu',
      type: 'obgyn',
      lat: 21.345,
      lng: 92.132,
      name: {
        en: 'HOPE Foundation Field Hospital for Women & Fistula Center (Ramu)',
        rhg: 'HOPE Meyeá Haspatal — Ramu (Daktor meyeá bemarior)',
        bn: 'হোপ ফাউন্ডেশন নারী ও ফিস্টুলা হাসপাতাল (রামু)',
        so: 'Isbitaalka Haweenka ee HOPE Foundation (Ramu)'},
      categoryBadge: {
        en: 'Specialized OB/GYN Surgery & Fistula Hospital',
        rhg: 'Boro Meyeá Daktor & Operation Haspatal',
        bn: 'বিশেষায়িত গাইনি সার্জারি ও ফিস্টুলা হাসপাতাল',
        so: 'Isbitaalka Qalliinka Haweenka & OB/GYN'},
      phone: '+880-1819-382910',
      emergencyHotline: '+880-1847-091234',
      address: {
        en: 'Chainda, Ramu-Ukhia Highway (South of Cox’s Bazar Link Road), Ramu',
        rhg: 'Chainda, Ramu-Ukhia Boro Rasta, Cox’s Bazar',
        bn: 'চাইন্দা, রামু-উখিয়া মহাসড়ক, রামু, কক্সবাজার',
        so: 'Waddada Ramu-Ukhia, Cox’s Bazar'},
      services: {
        en: ['24/7 Emergency C-Section & Obstructed Labor', 'Post-Menopause Abnormal Bleeding & Fibroid Care', 'Obstetric Fistula Repair (100% Free for Refugees)', 'Postpartum Depression & Pelvic Floor Recovery'],
        rhg: ['24 ghonta Baiccha Operation (C-Section)', 'Bura Omer-ot (Menopause) Besi Lou porar ilaj', 'Fistula bemarir Free Operation', 'Baiccha hoibar pore ma-or ilaj'],
        bn: ['২৪ ঘণ্টা জরুরি সিজারিয়ান ও প্রসব সেবা', 'মেনোপজ পরবর্তী অতিরিক্ত রক্তক্ষরণ ও টিউমার চিকিৎসা', 'বিনামূল্যে ফিস্টুলা অপারেশন', 'প্রসব পরবর্তী সেবা ও মানসিক স্বাস্থ্য'],
        so: ['Qalliinka dhalmada degdegga ah 24/7', 'Daaweynta dhiig-baxa haweenka waaweyn', 'Qalliinka Fistula oo bilaash ah', 'Daryeelka dhalmada kadib']
      },
      directionsText: {
        en: 'Take the Arakan Highway (N1) north toward Ramu Chainda junction. Look for the large blue & white HOPE Women Hospital gate on the left.',
        rhg: 'Arakan Boro Rasta (N1) dhori Ramu Chainda mor-ot jao. Baañ (Left) pashe HOPE Meyeá Haspatal-or গেট deikbá.',
        bn: 'আরাকান মহাসড়ক (N1) ধরে রামু চাইন্দা মোড়ে যান। বাম পাশে হোপ হাসপাতালের বড় গেট দেখতে পাবেন।',
        so: 'Raac waddada weyn ee Arakan Highway dhanka Ramu Chainda.'}
    },
    {
      id: 'coxs-sadar-hospital',
      regionDistrict: "Cox's Bazar Sadar",
      type: 'hospital',
      lat: 21.442,
      lng: 91.976,
      name: {
        en: "Cox's Bazar 250-Bed District Sadar Hospital — OB/GYN & One-Stop Crisis Center",
        rhg: "Cox's Bazar Boro Sadar Haspatal — Daktor meyeá (𐴑𐴡𐴑𐴏𐴁𐴝𐴎𐴝𐴌 𐴏𐴡𐴊𐴡𐴌 𐴇𐴝𐴏𐴉𐴝𐴃𐴝𐴓)",
        bn: 'কক্সবাজার ২৫০ শয্যা জেলা সদর হাসপাতাল (গাইনি ও ওয়ান-স্টপ ক্রাইসিস সেন্টার)',
        so: "Isbitaalka Guud ee Degmada Cox's Bazar (Qaybta Haweenka)"},
      categoryBadge: {
        en: '24/7 Referral Hospital & Women Crisis Haven',
        rhg: '24/7 Boro Haspatal & Meyeá Crisis Kendra',
        bn: '২৪ ঘণ্টা সরকারি রেফারেল হাসপাতাল ও নারী সহায়তা কেন্দ্র',
        so: 'Isbitaalka Guud & Xarunta Gurmadka Haweenka'},
      phone: '+880-341-64066',
      emergencyHotline: '999 / 16263',
      address: {
        en: 'Hospital Road, Cox’s Bazar Sadar, Cox’s Bazar 4700',
        rhg: 'Haspatal Rasta, Cox’s Bazar Sadar',
        bn: 'হাসপাতাল সড়ক, কক্সবাজার সদর, কক্সবাজার ৪৭০০',
        so: 'Waddada Isbitaalka, Cox’s Bazar Sadar'},
      services: {
        en: ['High-Risk Pregnancy ICU & Blood Bank', 'One-Stop Crisis Center (OCC) for Women in Danger', 'Cervical & Uterine Cancer Screening', 'Neonatal Intensive Care (NICU)'],
        rhg: ['Bipod-wala Gorvoboti Ma-or ICU & Lou (Blood) Bank', 'Meyeá-fuaindor Bipod-ot 24 ghonta Hifazot (OCC)', 'জরায়ু (Uterus) পরীক্ষা ও ক্যান্সার স্ক্রিনিং', 'Noya Baicchar ICU'],
        bn: ['ঝুঁকিপূর্ণ গর্ভবতী মায়েদের আইসিইউ ও ব্লাড ব্যাংক', 'নির্যাতিত বা বিপদগ্রস্ত নারীদের ওয়ান-স্টপ ক্রাইসিস সেন্টার', 'জরায়ুমুখ ক্যান্সার পরীক্ষা ও চিকিৎসা', 'নবজাতকের নিবিড় পরিচর্যা (NICU)'],
        so: ['Daryeelka uurka khatarta ah & Bangiga Dhiigga', 'Xarunta Badbaadada Haweenka', 'Baaritaanka ilmo-galeenka', 'Daryeelka dhallaanka']
      },
      directionsText: {
        en: 'From Link Road bus terminal, take a CNG auto-rickshaw 15 minutes west along Hospital Road directly to the Emergency Maternal Gate.',
        rhg: 'Link Road-tún CNG অটোরিকশা lói 15 minit paschime (West) Haspatal Rasta dhori Maternal Gate-ot নামো।',
        bn: 'লিংক রোড থেকে সিএনজি অটোরিকশায় ১৫ মিনিট পশ্চিমে হাসপাতাল সড়ক ধরে সরাসরি জরুরি প্রসূতি গেটে যান।',
        so: 'Ka raac bajaaj Link Road ilaa iridda hooyada ee Isbitaalka.'}
    },
    {
      id: 'maheshkhali-clinic',
      regionDistrict: 'Maheshkhali',
      type: 'obgyn',
      lat: 21.552,
      lng: 91.952,
      name: {
        en: 'Maheshkhali Island Women’s Health & Safe Delivery Center',
        rhg: 'Maheshkhali Meyeá Haspatal & Dhatri Kendra',
        bn: 'মহেশখালী উপজেলা নারী স্বাস্থ্য ও নিরাপদ প্রসব কেন্দ্র',
        so: 'Xarunta Caafimaadka Haweenka ee Maheshkhali'},
      categoryBadge: {
        en: 'OB/GYN & Island Midwife Hub',
        rhg: 'Daktor meyeá & Dhatri',
        bn: 'গাইনি ও মিডওয়াইফ কেন্দ্র',
        so: 'Rugta Umulisada & Haweenka'},
      phone: '+880-1730-324501',
      emergencyHotline: '16263',
      address: {
        en: 'Gorakghata Jetty Road, Maheshkhali Upazila, Cox’s Bazar',
        rhg: 'Gorakghata Jetty Rasta, Maheshkhali',
        bn: 'গোরকঘাটা জেটি রোড, মহেশখালী, কক্সবাজার',
        so: 'Gorakghata, Maheshkhali'},
      services: {
        en: ['24/7 Female Midwives', 'Menstrual & PCOS/Endometriosis Consultation', 'Emergency Speedboat Referral to Sadar Hospital'],
        rhg: ['24 ghonta Meyeá Dhatri', 'Masik (Period) ar Pet-bisha ilaj', 'Emarjensi Speedboat Ambulance'],
        bn: ['২৪ ঘণ্টা মহিলা মিডওয়াইফ', 'মাসিকের সমস্যা ও পেট ব্যথার চিকিৎসা', 'জরুরি স্পিডবোট অ্যাম্বুলেন্স সেবা'],
        so: ['Umulisooyin 24/7', 'Daaweynta xanuunka caadada', 'Ambalaasta doonta degdegga ah']
      },
      directionsText: {
        en: '500 meters north of Gorakghata Main Boat Jetty.',
        rhg: 'Gorakghata Boro Boat ঘাট-tún 500 mitar uttore.',
        bn: 'গোরকঘাটা প্রধান জেটি ঘাট থেকে ৫০০ মিটার উত্তরে।',
        so: '500m waqooyi ka xigta dekedda Gorakghata.'}
    },
    {
      id: 'chakaria-maternal',
      regionDistrict: 'Chakaria',
      type: 'hospital',
      lat: 21.762,
      lng: 92.078,
      name: {
        en: 'Chakaria Maternal & Child Welfare Center (MCWC)',
        rhg: 'Chakaria Ma o Baicchar Haspatal (Daktor meyeá)',
        bn: 'চকরিয়া মা ও শিশু কল্যাণ কেন্দ্র (MCWC)',
        so: 'Xarunta Daryeelka Hooyada & Dhallaanka ee Chakaria'},
      categoryBadge: {
        en: 'Maternal Hospital & Safe Haven',
        rhg: 'Ma o Meyeá Haspatal',
        bn: 'মা ও শিশু হাসপাতাল',
        so: 'Isbitaalka Hooyada'},
      phone: '+880-1730-324505',
      emergencyHotline: '999',
      address: {
        en: 'Chiringa Highway Crossing, Chakaria, Cox’s Bazar',
        rhg: 'Chiringa Boro Rasta, Chakaria',
        bn: 'চিরিঙ্গা মহাসড়ক মোড়, চকরিয়া, কক্সবাজার',
        so: 'Chiringa, Chakaria'},
      services: {
        en: ['Prenatal & Postpartum Checkups', 'Safe Delivery & Post-Menopause Care', 'Free Iron, Folate & Clean Delivery Kits'],
        rhg: ['Baiccha hoibar age ar pore daktor দেখানো', 'Bura ma-boindor (Menopause) bemarir ilaj', 'Free oshud ar Clean Delivery Kit'],
        bn: ['গর্ভকালীন ও প্রসব পরবর্তী চেকআপ', 'নিরাপদ প্রসব ও বয়স্ক নারীদের চিকিৎসা', 'বিনামূল্যে আয়রন ও ডেলিভারি কিট'],
        so: ['Baaritaanka uurka & dhalmada kadib', 'Daryeelka haweenka waaweyn', 'Daawooyinka birta oo bilaash ah']
      },
      directionsText: {
        en: 'Located at Chiringa Bus Stand along the Chittagong-Cox’s Bazar Highway.',
        rhg: 'Chiringa Bus Stand-or kache, Chittagong-Cox’s Bazar Rasta.',
        bn: 'চট্টগ্রাম-কক্সবাজার মহাসড়কের চিরিঙ্গা বাস স্ট্যান্ডের পাশে।',
        so: 'Waxay ku taallaa boosteejada Chiringa.'}
    },
    {
      id: 'pekua-safe-haven',
      regionDistrict: 'Pekua',
      type: 'safe-haven',
      lat: 21.815,
      lng: 91.958,
      name: {
        en: 'Pekua Women’s Safe Haven & Reproductive Health Clinic',
        rhg: 'Pekua Meyeá Hifazot & Daktor Kendra',
        bn: 'পেকুয়া নারী নিরাপদ কেন্দ্র ও প্রজনন স্বাস্থ্য ক্লিনিক',
        so: 'Rugta Badbaadada Haweenka ee Pekua'},
      categoryBadge: {
        en: 'Women Safe Haven & Clinic',
        rhg: 'Meyeá Hifazot Ghor',
        bn: 'নারী নিরাপদ আশ্রয় ও ক্লিনিক',
        so: 'Goobta Badbaadada Haweenka'},
      phone: '+880-1730-324508',
      emergencyHotline: '109',
      address: {
        en: 'Pekua Bazar Main Road, Pekua, Cox’s Bazar',
        rhg: 'Pekua Bazar Rasta, Pekua',
        bn: 'পেকুয়া বাজার মেইন রোড, পেকুয়া, কক্সবাজার',
        so: 'Waddada Pekua Bazar'},
      services: {
        en: ['Female Health Workers', 'Infection & Abnormal Bleeding Treatment', 'Confidential Safe Space for Women & Girls'],
        rhg: ['Meyeá Daktor', 'Infection ar Besi Lou porar oshud', 'Meyeá-fuaindor Gopon Hifazot'],
        bn: ['মহিলা স্বাস্থ্যকর্মী', 'সংক্রমণ ও অতিরিক্ত রক্তক্ষরণের চিকিৎসা', 'নারী ও কিশোরীদের নিরাপদ আশ্রয়'],
        so: ['Shaqaale caafimaad oo dumar ah', 'Daaweynta caabuqa & dhiig-baxa', 'Goob qarsoodi ah oo ammaan ah']
      },
      directionsText: {
        en: '200 meters west of Pekua Central Market.',
        rhg: 'Pekua Bazar-tún 200 mitar paschime.',
        bn: 'পেকুয়া কেন্দ্রীয় বাজার থেকে ২০০ মিটার পশ্চিমে।',
        so: '200m galbeed ka xigta suuqa Pekua.'}
    },
    {
      id: 'kutubdia-island-clinic',
      regionDistrict: 'Kutubdia',
      type: 'obgyn',
      lat: 21.825,
      lng: 91.855,
      name: {
        en: 'Kutubdia Island Upazila Women & Boat-Ambulance Health Complex',
        rhg: 'Kutubdia Dwip Meyeá Haspatal & Boat Ambulance',
        bn: 'কুতুবদিয়া দ্বীপ নারী স্বাস্থ্য কমপ্লেক্স ও বোট-অ্যাম্বুলেন্স',
        so: 'Xarunta Caafimaadka Jasiiradda Kutubdia'},
      categoryBadge: {
        en: 'Island OB/GYN & Sea Ambulance',
        rhg: 'Dwip Daktor meyeá',
        bn: 'দ্বীপ গাইনি সেবা ও সি-অ্যাম্বুলেন্স',
        so: 'Rugta Caafimaadka & Ambalaasta Badda'},
      phone: '+880-1730-324512',
      emergencyHotline: '16263',
      address: {
        en: 'Baraghop Bazar, Kutubdia Island, Cox’s Bazar',
        rhg: 'Baraghop Bazar, Kutubdia',
        bn: 'বড়ঘোপ বাজার, কুতুবদিয়া, কক্সবাজার',
        so: 'Baraghop, Kutubdia'},
      services: {
        en: ['24/7 Emergency Sea-Ambulance Transfer', 'Maternal & Post-Menopause Care', 'Midwife Home Visit Dispatch'],
        rhg: ['24 ghonta Doriya Boat-Ambulance', 'Gorvoboti ar Bura Ma-boindor ilaj', 'Ghor-ot Dhatri Pathano'],
        bn: ['২৪ ঘণ্টা জরুরি নৌ-অ্যাম্বুলেন্স', 'মাতৃস্বাস্থ্য ও বয়স্ক নারীদের সেবা', 'বাড়িতে ধাত্রী পাঠানোর ব্যবস্থা'],
        so: ['Ambalaasta doonta 24/7', 'Daryeelka hooyada & ayeeyooyinka', 'Umulisooyin guriga kuugu imaanaya']
      },
      directionsText: {
        en: 'Walk 300m east from Baraghop Steamer Ghat toward Upazila Parishad.',
        rhg: 'Baraghop Ghat-tún 300 mitar pube.',
        bn: 'বড়ঘোপ স্টিমার ঘাট থেকে ৩০০ মিটার পূর্বে।',
        so: '300m bari uga soco dekedda Baraghop.'}
    }
  ],

  'somalia-mogadishu': [
    {
      id: 'banadir-maternity-hospital',
      regionDistrict: 'Wadajir / Medina',
      type: 'hospital',
      lat: 2.032,
      lng: 45.298,
      name: {
        en: 'Banadir Maternity & Children Hospital (Isbitaalka Hooyada & Dhallaanka Banaadir)',
        rhg: 'Banadir Ma o Baicchar Haspatal, Mogadishu',
        bn: 'বানাদির মাতৃ ও শিশু হাসপাতাল, মোগাদিশু',
        so: 'Isbitaalka Hooyada & Dhallaanka ee Banaadir (Muqdisho)'},
      categoryBadge: {
        en: '24/7 Free OB/GYN & Elder Women’s Ward',
        rhg: '24/7 Meyeá Haspatal',
        bn: '২৪ ঘণ্টা গাইনি হাসপাতাল',
        so: 'Isbitaalka Haweenka, Umulisooyinka & Ayeeyooyinka (24/7)'},
      phone: '+252-61-5501122',
      emergencyHotline: '888 / +252-61-9991111',
      address: {
        en: 'Via Medina Road, Wadajir District, Mogadishu, Somalia',
        rhg: 'Via Medina Road, Mogadishu',
        bn: 'ভিয়া মদিনা রোড, মোগাদিশু',
        so: 'Jidka Madiina, Degmada Wadajir (Agagaarka KM4), Muqdisho'},
      services: {
        en: [
          'Abnormal Uterine Bleeding & Post-Menopause Care for Older Women',
          '24/7 Emergency Obstetrics, C-Section & Blood Transfusion',
          'Fistula & Pelvic Organ Prolapse Treatment',
          'Female Somali Doctors & Oral/Audio Consultations'],
        rhg: ['Bura Ma-boindor Besi Lou porar ilaj', '24 ghonta Delivery Operation', 'Meyeá Daktor'],
        bn: ['বয়স্ক নারীদের অস্বাভাবিক রক্তক্ষরণ চিকিৎসা', '২৪ ঘণ্টা জরুরি প্রসব সেবা', 'মহিলা ডাক্তার'],
        so: [
          'Daaweynta Dhiig-baxa aan caadiga ahayn ee Ayeeyooyinka & Haweenka dhalmo-deyska ah',
          'Qalliinka dhalmada degdegga ah & ku-shubista dhiigga 24/7',
          'Daaweynta Fistula & hoos-u-dhaca ilmo-galeenka',
          'Dhakhaatiir dumar Soomaaliyeed oo afkaaga kula hadlaya']
      },
      directionsText: {
        en: 'Take Via Medina road south-west from KM4 Junction for 1.5 km; the main white hospital gate is opposite Medina Police Station.',
        rhg: 'KM4 mor-tún 1.5 km Via Medina Rasta dhori jao.',
        bn: 'কেএম৪ মোড় থেকে ১.৫ কিমি ভিয়া মদিনা রোড ধরে এগিয়ে যান।',
        so: 'Ka soo raac bajaaj isgoyska KM4 dhanka Jidka Madiina 1.5 km; iridda weyn ee cad waxay ka soo horjeeddaa Saldhigga Madiina.'}
    },
    {
      id: 'elmaan-safe-haven',
      regionDistrict: 'Hodan',
      type: 'safe-haven',
      lat: 2.045,
      lng: 45.312,
      name: {
        en: 'Hodan Women’s Safe Haven & Somali Midwife Clinic',
        rhg: 'Hodan Meyeá Hifazot Ghor',
        bn: 'হোদান নারী নিরাপদ আশ্রয় ও ক্লিনিক',
        so: 'Xarunta Badbaadada Haweenka & Rugta Umulisada ee Hodan'},
      categoryBadge: {
        en: 'Women Safe Haven & OB/GYN',
        rhg: 'Meyeá Hifazot Kendra',
        bn: 'নারী নিরাপদ আশ্রয়',
        so: 'Goobta Badbaadada Haweenka & OB/GYN'},
      phone: '+252-61-5884400',
      emergencyHotline: '5555',
      address: {
        en: 'Taleex Street, Hodan District, Mogadishu',
        rhg: 'Taleex Street, Hodan, Mogadishu',
        bn: 'তালেহ স্ট্রিট, হোদান, মোগাদিশু',
        so: 'Waddada Taleex, Degmada Hodan, Muqdisho'},
      services: {
        en: ['Free Gynecological Exams', 'Safe Haven & Support for Displaced Women', 'Mobile Midwife Dispatch'],
        rhg: ['Free Meyeá Daktor', 'Meyeá Hifazot Ghor', 'Mobile Dhatri'],
        bn: ['বিনামূল্যে গাইনি পরীক্ষা', 'নারী আশ্রয়কেন্দ্র', 'ভ্রাম্যমাণ ধাত্রী সেবা'],
        so: ['Baaritaanka haweenka oo bilaash ah', 'Hoyga badbaadada haweenka barakacayaasha', 'Umulisooyin wareega']
      },
      directionsText: {
        en: 'Off Maka Al Mukarama Road at Taleex junction, 300m north.',
        rhg: 'Maka Al Mukarama Rasta-tún 300m uttore.',
        bn: 'মক্কা আল মুকাররমা রোড থেকে ৩০০ মিটার উত্তরে।',
        so: 'Ka leexo waddada Maka Al-Mukarama dhanka isgoyska Taleex, 300 mitir waqooyi.'}
    }
  ],

  'dhaka-bangladesh': [
    {
      id: 'dhaka-medical-occ',
      regionDistrict: 'Dhaka',
      type: 'hospital',
      lat: 23.726,
      lng: 90.397,
      name: {
        en: 'Dhaka Medical College OB/GYN & One-Stop Crisis Center',
        rhg: 'Dhaka Boro Medical Haspatal (Daktor meyeá)',
        bn: 'ঢাকা মেডিকেল কলেজ হাসপাতাল — গাইনি ও ওয়ান-স্টপ ক্রাইসিস সেন্টার',
        so: 'Isbitaalka Caafimaadka ee Dhaka (OB/GYN)'},
      categoryBadge: {
        en: '24/7 National OB/GYN & Safe Haven',
        rhg: '24/7 Boro Meyeá Haspatal',
        bn: '২৪ ঘণ্টা জাতীয় গাইনি ও নারী সহায়তা কেন্দ্র',
        so: 'Isbitaalka Haweenka 24/7'},
      phone: '+880-2-55165088',
      emergencyHotline: '109 / 999',
      address: {
        en: 'Secretariat Road, Shahbagh, Dhaka 1000',
        rhg: 'Shahbagh, Dhaka',
        bn: 'সচিবালয় রোড, শাহবাগ, ঢাকা ১০০০',
        so: 'Shahbagh, Dhaka'},
      services: {
        en: ['24/7 Emergency Gynecology & Obstetrics', 'National Women’s Safe Haven (OCC)', 'Menopause & Uterine Oncology Clinic'],
        rhg: ['24 ghonta Meyeá Daktor', 'Meyeá Hifazot Kendra', 'Uterus o Menopause ilaj'],
        bn: ['২৪ ঘণ্টা জরুরি গাইনি ও প্রসূতি সেবা', 'জাতীয় ওয়ান-স্টপ ক্রাইসিস সেন্টার', 'মেনোপজ ও জরায়ু ক্যান্সার ক্লিনিক'],
        so: ['Daryeelka haweenka 24/7', 'Goobta badbaadada haweenka', 'Daaweynta ilmo-galeenka']
      },
      directionsText: {
        en: 'South of Shahbagh Metro Station along Secretariat Road.',
        rhg: 'Shahbagh Metro Station-or dokkhine.',
        bn: 'শাহবাগ মেট্রো স্টেশনের দক্ষিণে সচিবালয় রোডে অবস্থিত।',
        so: 'Koonfurta Shahbagh Metro.'}
    }
  ],

  'us-massachusetts': []
};

// Public Health News Near You (Tab 3 in user's sketch: e.g. "Stay safe from cholera")
export const PUBLIC_HEALTH_NEWS = {
  'coxs-bazar': [
    {
      id: 'cholera-alert-cx',
      urgency: 'high',
      date: 'Active Local Alert • Today',
      icon: '',
      title: {
        en: 'Stay Safe from Cholera (Acute Watery Diarrhea) in Ukhia, Ramu & Cox’s Bazar',
        rhg: 'Olai-Bibi (Cholera / পাতলা পায়খানা) হতুন হিফাজত থাকো — Ukhia ও Cox’s Bazar',
        bn: 'কলেরা ও ডায়রিয়া থেকে নিরাপদ থাকুন — উখিয়া, রামু ও কক্সবাজার সতর্কতা',
        so: 'Ka digtoonow Daacuunka (Cholera) — Biyaha karkari'},
      summary: {
        en: 'Heavy rains have affected tube-wells in Ukhia & Ramu. Always boil drinking water or use Aquatabs. Free Oral Rehydration Salts (ORS) and safe maternal hydration stations are open 24/7 at all red-pin Women Safe Havens on your map.',
        rhg: 'বর্ষার পানিত টিউবওয়েল নষ্ট অইয়ে। সবসময় ফানি ফুডাই (Boil গরি) খাইবা অথবা Aquatabs দিবা। পেট নামিলে বা গর্ভবতী মা-বইনদের পাতলা পায়খানা অইলে সাথে সাথে ORS খাইবা আর ম্যাপের লাল ফোঁটা (Red Pin) হাসপাতালে যাইবা।',
        bn: 'বৃষ্টির কারণে কিছু টিউবওয়েলের পানি দূষিত হয়েছে। সর্বদা পানি ফুটিয়ে বা বিশুদ্ধকরণ ট্যাবলেট দিয়ে পান করুন। গর্ভবতী মা বা নারীদের ডায়রিয়া হলে দেরি না করে ওআরএস (ORS) খান এবং ম্যাপের লাল চিহ্নিত ক্লিনিকে যান।',
        so: 'Mar walba karkari biyaha cabitaanka ama isticmaal kiniinka biyaha sifeeya. Xarumaha cas ee khariidadda waxaa laga helaa ORS bilaash ah.'},
      actionTip: {
        en: 'Pregnant women with watery diarrhea need IV/ORS fluids within 2 hours to protect the baby.',
        rhg: 'গর্ভবতী মা-র পাতলা পায়খানা অইলে ২ ঘণ্টার ভিতরে দাক্তরের কাছে লই যাও।',
        bn: 'গর্ভবতী মায়ের ডায়রিয়া হলে সন্তানকে সুরক্ষিত রাখতে ২ ঘণ্টার মধ্যে ক্লিনিকে নিন।',
        so: 'Hooyada uurka leh haddii uu shuban ku dhaco waa in 2 saac gudahood lagu geeyaa isbitaal.'}
    },
    {
      id: 'mobile-midwife-cx',
      urgency: 'medium',
      date: 'This Week • Free Service',
      icon: '',
      title: {
        en: 'Free Mobile Female Doctors & Abnormal Bleeding Screening in Camps 1–18 & Chakaria',
        rhg: 'ফ্রি মেইয়্যা দাক্তর (Daktor meyeá) ও বেশি লউ (Bleeding) পরার পরীক্ষা — Camp 1–18',
        bn: 'ক্যাম্প ১–১৮ ও চকরিয়ায় বিনামূল্যে মহিলা ডাক্তার ও জরায়ু পরীক্ষা',
        so: 'Dhakhaatiir dumar oo wareega oo bilaash ah'},
      summary: {
        en: 'UNFPA & HOPE female midwives are providing private anemia checks, clean menstrual kits, and ultrasound screenings for women of all ages (including elders 50+ experiencing post-menopausal bleeding).',
        rhg: 'UNFPA আর HOPE-অর মেইয়্যা দাক্তররা ফ্রি লউ পরীক্ষা, মাসিকের কাপড় (Kit), আর বুড়া মা-বইনদের (৫০+ ওমর) লউ ভাঙ্গার আল্ট্রাসাউন্ড করের।',
        bn: 'সকল বয়সের নারী (বিশেষ করে ৫০+ বয়স্ক মায়েদের অস্বাভাবিক রক্তক্ষরণ) এবং কিশোরীদের জন্য বিনামূল্যে আল্ট্রাসাউন্ড ও রক্তস্বল্পতা পরীক্ষা চলছে।',
        so: 'Baaritaan bilaash ah oo loogu talagalay haweenka da’ walba leh.'},
      actionTip: {
        en: 'No ID card required. Female Rohingya and Bangla translators are on site.',
        rhg: 'কোনো কার্ড ন লাগিবো। Ruáingga আর বাংলা কথা কইবার মানুষ আছে।',
        bn: 'কোনো পরিচয়পত্র লাগবে না। রোহিঙ্গা ও বাংলা দোভাষী উপস্থিত আছেন।',
        so: 'Aqoonsi looma baahna.'}
    }
  ],
  'somalia-mogadishu': [
    {
      id: 'cholera-somalia',
      urgency: 'high',
      date: 'Active Health Notice • Banadir & Baidoa',
      icon: '',
      title: {
        en: 'Stay Safe from Cholera (Daacuun) & Safe Water Distribution in Mogadishu',
        rhg: 'Cholera Hifazot — Mogadishu',
        bn: 'মোগাদিশুতে কলেরা সতর্কতা ও নিরাপদ পানি বিতরণ',
        so: 'Ka Badbaad Daacuunka (Cholera) — Biyo Nadiif ah & ORS Bilaash ah Gudaha Muqdisho'},
      summary: {
        en: 'Clean chlorinated water points and maternal Oral Rehydration corners are open at Banadir Hospital and Hodan Safe Haven. Boil all water before drinking.',
        rhg: 'Banadir Haspatal-ot saaf fani ar ORS paiba.',
        bn: 'বানাদির হাসপাতালে বিশুদ্ধ পানি ও ওআরএস পাওয়া যাচ্ছে।',
        so: 'Biyaha ceelasha karkari ka hor inta aadan cabbin. Xarumaha hooyada ee Isbitaalka Banaadir iyo Hodan waxay bixinayaan ORS iyo daaweyn bilaash ah 24-ka saac.'},
      actionTip: {
        en: 'Tap Listen Aloud above to hear this alert in Somali.',
        rhg: 'Awaz Huñnó টিপ দো।',
        bn: 'অডিও শুনতে বাটনে চাপ দিন।',
        so: 'Taabo badhanka codka si aad u dhageysato digniintan.'}
    }
  ]
};
