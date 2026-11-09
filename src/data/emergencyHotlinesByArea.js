// ============================================================================
// Emergency & Crisis Hotlines by Region and Nation across Earth
// Used at the top of the "Emergency contacts near you!" tab above Hospitals.
// You can freely add or customize regional or local crisis lines here!
// ============================================================================

export const REGIONAL_CRISIS_OVERRIDES = [
  {
    match: ['bogota', 'bogotá', 'cundinamarca', 'soacha'],
    nationalNumber: '123',
    regionalNumber: '01 8000 112 137 (Línea Púrpura Bogotá)',
    emergencyNumber: '123',
    crisisLines: [
      'Línea 155 (SALVIA): Call 155',
      'Línea 106 (Salud para el Alma): Call 106'
    ]
  },
  {
    match: ['medellin', 'medellín', 'antioquia'],
    nationalNumber: '123',
    regionalNumber: '123 (Agencia Mujer Medellín)',
    emergencyNumber: '123',
    crisisLines: [
      'Línea 155 (SALVIA): Call 155'
    ]
  },
  {
    match: ['cali', 'valle del cauca'],
    nationalNumber: '123',
    regionalNumber: '+57 602 668-8250 (Casa Matria Cali)',
    emergencyNumber: '123',
    crisisLines: [
      'Línea 155 (SALVIA): Call 155'
    ]
  },
  {
    match: ['massachusetts', 'boston', 'worcester', 'springfield, ma', 'cambridge, ma'],
    nationalNumber: '911',
    regionalNumber: '1-877-785-2020 (SafeLink MA)',
    emergencyNumber: '911',
    crisisLines: [
      'National Domestic Violence Hotline: Call 1-800-799-7233',
      'Suicide & Crisis Lifeline: Call 988'
    ]
  },
  {
    match: ['lagos', 'ikeja'],
    nationalNumber: '112',
    regionalNumber: '767 (Lagos Emergency)',
    emergencyNumber: '112',
    crisisLines: [
      'Lagos State DSVA Crisis Helpline: Call 0800-033-3333',
      'WARIF 24/7 Crisis Line: Call +234 809 210 0008'
    ]
  },
  {
    match: ['cox', 'coz', 'ukhiya', 'ukhia', 'kutupalong', 'rohingya', 'teknaf'],
    nationalNumber: '999',
    regionalNumber: '+880 1713-377450 (Camp Safe Haven Dispatch)',
    emergencyNumber: '999',
    crisisLines: [
      'Violence Against Women Helpline: Call 109'
    ]
  },
  {
    match: ['balochistan', 'baluchistan', 'quetta', 'gwadar', 'turbat', 'kalat', 'khuzdar'],
    nationalNumber: '15 / 1122',
    regionalNumber: '1089 (Balochistan Protection Line)',
    emergencyNumber: '15 / 1122',
    crisisLines: [
      'National Women & Human Rights Crisis Helpline: Call 1099'
    ]
  },
  {
    match: ['mexico city', 'ciudad de méxico', 'cdmx', 'iztapalapa', 'cuauhtémoc', 'azcapotzalco'],
    nationalNumber: '911',
    regionalNumber: '*765 (SOS Mujeres CDMX)',
    emergencyNumber: '911',
    crisisLines: [
      'Red Nacional de Refugios Crisis Line: Call 800 822 4460'
    ]
  },
  {
    match: ['kalemie', 'tanganyika', 'nyemba', 'kabalo', 'kiambi', 'ankoro', 'manono', 'nyunzu'],
    nationalNumber: '122 (Ligne Verte Nationale VBG RDC)',
    regionalNumber: '+243 811 935 663 / +243 813 268 324 (HGR Kalemie & APEF Cellule d’Écoute)',
    emergencyNumber: '122 / +243 811 935 663',
    crisisLines: [
      'Maison de la Femme / CDJP Kalemie: Call +243 812 797 694',
      'Bureau d’Écoute SAFEKA Kalemie: Call +243 819 722 019',
      'Bureau d’Écoute AIDES Kalemie: Call +243 815 883 669 & Nyunzu Espace Sûr: Call +243 827 532 259',
      'Point d’Écoute AVREO Kalemie: Call +243 811 411 330'
    ]
  },
  {
    match: ['goma', 'karisimbi', 'nyiragongo', 'mweso', 'kitshanga', 'kirotshe', 'sake', 'saké', 'bweremana', 'katoyi', 'lubero', 'kayna', 'masereka', 'biena', 'walikale', 'pinga', 'kibua', 'beni', 'nord-kivu', 'north kivu'],
    nationalNumber: '122 (Ligne Verte Nationale VBG RDC)',
    regionalNumber: '+243 998 844 301 / +243 973 764 620 (Maison de la Femme & SOFEPADI Goma)',
    emergencyNumber: '122 / +243 827 480 200',
    crisisLines: [
      'HEAL Africa Goma SGBV & Fistula Hospital: Call +243 994 275 414 / Karisimbi: +243 978 062 915',
      'MSF-Hollande Clinique Tumaini (Goma / Mugunga / Turunga): Call +243 827 480 200',
      'ActionAid Espace Sûr Goma: Call +243 978 082 552 / +243 991 629 964',
      'DFJ (Dynamique des Femmes Juristes) Goma: Call +243 995 213 320 / Mweso: +243 973 019 741',
      'Maison d’Écoute CCPD Mugunga: Call +243 990 650 774 / Saké: +243 973 118 209'
    ]
  },
  {
    match: ['bukavu', 'panzi', 'sud-kivu', 'south kivu', 'uvira', 'walungu', 'mulamba', 'bulenga', 'bunyakiri', 'kavumu', 'kamituga'],
    nationalNumber: '122 / 495555 (Ligne Verte VBG RDC)',
    regionalNumber: '+243 811 443 123 / +243 894 153 354 (Fondation Panzi, Maison Dorcas & City of Joy Bukavu)',
    emergencyNumber: '122 / +243 894 153 354',
    crisisLines: [
      'Hôpital de Panzi (One-Stop Center VBG Bukavu): Call +243 894 153 354',
      'Maison Dorcas Transitional Care & City of Joy Sanctuary (Fondation Panzi): Call +243 811 443 123'
    ]
  },
  {
    match: ['niamey', 'agadez', 'maradi', 'diffa', 'tahoua', 'tillaberi', 'tillabéri', 'zinder', 'ouallam', 'abala', 'ayorou'],
    nationalNumber: '15 (SAMU Ambulance) / 17 (Police) / 18 (Sapeurs-Pompiers)',
    regionalNumber: '0 800 12 12 (Ligne Verte Gratuite HCR Niger — Orange, Airtel, Moov)',
    emergencyNumber: '0 800 12 12 / 15 / 17',
    crisisLines: [
      'Ligne Verte HCR Niger (Protection, VBG & Guichet Unique — Français, Haoussa, Djerma, Arabe, Anglais): Call 0 800 12 12 (Toll-Free)',
      'Guichet Unique & Représentation HCR Niamey / Agadez: Call +227 20 75 20 64 (NGRNI@UNHCR.ORG)',
      'Association des Femmes Juristes du Niger (AFJN Clinique Juridique Niamey): Call 116 / +227 20 73 56 36'
    ]
  },
  {
    match: ['juba', 'wau', 'kuajok', 'aweil', 'malakal', 'bentiu', 'bor', 'yambio', 'torit', 'south sudan'],
    nationalNumber: '777 (National Police Emergency) / 112',
    regionalNumber: '+211 912 544 114 (Hope Restoration South Sudan) / +211 910 888 800 (Eve Organization)',
    emergencyNumber: '777 / +211 912 544 114',
    crisisLines: [
      'Hope Restoration South Sudan (HRSS Munuki Block C, Juba): Call +211 912 544 114',
      'Safer Women’s Initiative (SWI Block 8, Juba): Call +211 980 945 122 / +211 921 635 934',
      'Women Empowerment for Reconciliation & Development (WERD Tong Ping, Juba): Call +211 920 791 796',
      'Women for Justice and Equality (Gurei Market, Juba): Call +211 929 402 770 & Women Tears (Gudele): +211 928 777 307',
      'Wau (WDG +211 924 883 349 & Mary Help Centre +211 924 489 100), Kuajok (+211 925 644 831) & Aweil (+211 922 205 374)'
    ]
  }
];

export const NATIONAL_CRISIS_DIRECTORY = {
  colombia: {
    emergencyNumber: '123 (National Emergency, Police & Ambulance)',
    crisisLines: [
      'Línea 155 (SALVIA): Call 155 — 24/7 Women’s Crisis & Domestic Violence Support',
      'Línea 122 (Fiscalía General): Call 122 — Gender-Based Violence Protection'
    ]
  },
  'united states': {
    emergencyNumber: '911 (Police, Fire & Medical Emergency)',
    crisisLines: [
      'National Domestic Violence Hotline: Call 1-800-799-7233 (SAFE) or Text START to 88788',
      'Suicide & Crisis Lifeline: Call or Text 988',
      'RAINN National Sexual Assault Hotline: Call 1-800-656-4673'
    ]
  },
  usa: {
    emergencyNumber: '911 (Police, Fire & Medical Emergency)',
    crisisLines: [
      'National Domestic Violence Hotline: Call 1-800-799-7233 (SAFE) or Text START to 88788',
      'Suicide & Crisis Lifeline: Call or Text 988',
      'RAINN National Sexual Assault Hotline: Call 1-800-656-4673'
    ]
  },
  canada: {
    emergencyNumber: '911 (Police, Fire & Medical Emergency)',
    crisisLines: [
      'Assaulted Women’s Helpline: Call 1-866-863-0511',
      'Suicide Crisis Helpline: Call or Text 988',
      'Hope for Wellness Indigenous Crisis Line: Call 1-855-242-3310'
    ]
  },
  'united kingdom': {
    emergencyNumber: '999 or 112 (Police, Ambulance & Fire Emergency)',
    crisisLines: [
      'National Domestic Abuse Helpline (Refuge): Call 0808 2000 247 (24/7 Free Crisis Support)',
      'Rape Crisis National Helpline: Call 0808 500 2222'
    ]
  },
  uk: {
    emergencyNumber: '999 or 112 (Police, Ambulance & Fire Emergency)',
    crisisLines: [
      'National Domestic Abuse Helpline (Refuge): Call 0808 2000 247 (24/7 Free Crisis Support)',
      'Rape Crisis National Helpline: Call 0808 500 2222'
    ]
  },
  ireland: {
    emergencyNumber: '999 or 112 (Emergency Services)',
    crisisLines: [
      'Women’s Aid Ireland 24hr National Freephone Helpline: Call 1800 341 900',
      'Dublin Rape Crisis Centre National 24hr Helpline: Call 1800 77 8888'
    ]
  },
  brazil: {
    emergencyNumber: '190 (Military Police) / 192 (SAMU Medical Emergency)',
    crisisLines: [
      'Ligue 180 (Central de Atendimento à Mulher): Call 180 or WhatsApp +55 61 9610-0180 — 24/7 Crisis Support'
    ]
  },
  peru: {
    emergencyNumber: '105 (National Police) / 106 (SAMU Medical Emergency)',
    crisisLines: [
      'Línea 100 (MIMP Warmi Ñan / Aurora): Call 100 — 24/7 Women’s & Family Violence Crisis Support'
    ]
  },
  chile: {
    emergencyNumber: '133 (Carabineros Police) / 131 (SAMU Ambulance)',
    crisisLines: [
      'Fono Orientación en Violencia contra las Mujeres (SernamEG): Call 1455 — 24/7 Crisis Support',
      'Fono Familia Carabineros: Call 149'
    ]
  },
  argentina: {
    emergencyNumber: '911 (National Emergency) / 107 (SAME Medical Emergency)',
    crisisLines: [
      'Línea 144: Call 144 or WhatsApp +54 9 11 2771-6463 — 24/7 Gender Violence Crisis Support',
      'Línea 137: Call 137 — Emergency Victim Assistance'
    ]
  },
  mexico: {
    emergencyNumber: '911 (National Emergency)',
    crisisLines: [
      'Red Nacional de Refugios Crisis Helpline: Call 800 822 4460 — 24/7 Shelter & Crisis Support',
      'Línea de la Vida / Crisis Support: Call 800 911 2000'
    ]
  },
  uruguay: {
    emergencyNumber: '911 (National Police & Emergency) / 105 (SAME Ambulance)',
    crisisLines: [
      'Inmujeres Violencia Basada en Género: Call 0800 4141 or *4141 (from mobile) — 24/7 Crisis Support'
    ]
  },
  ecuador: {
    emergencyNumber: '911 (ECU 911 National Emergency)',
    crisisLines: [
      'Línea de Apoyo a Mujeres Víctimas de Violencia: Call 911 (Option for Gender Violence Dispatch)'
    ]
  },
  bolivia: {
    emergencyNumber: '110 (Police Emergency) / 165 (Medical Emergency)',
    crisisLines: [
      'Fuerza Especial de Lucha Contra la Violencia (FELCV): Call 800 14 0348 — 24/7 Toll-Free Crisis Line'
    ]
  },
  paraguay: {
    emergencyNumber: '911 (National Emergency) / 141 (SEME Ambulance)',
    crisisLines: [
      'SOS Mujer (Ministerio de la Mujer): Call 137 — 24/7 Free Crisis Support'
    ]
  },
  venezuela: {
    emergencyNumber: '911 (VEN 911 National Emergency)',
    crisisLines: [
      'PsicoApoyo / Tinta Violeta Crisis Line: Call +58 412-6348902 / +58 424-1659742'
    ]
  },
  'costa rica': {
    emergencyNumber: '911 (National Emergency & INAMU Crisis Dispatch)',
    crisisLines: [
      'INAMU Violencia contra las Mujeres: Call 911 or 800-INAMUCR (800-462-6827)'
    ]
  },
  'el salvador': {
    emergencyNumber: '911 (National Emergency) / 132 (Medical Emergency)',
    crisisLines: [
      'ISDEMU Línea de Atención a Mujeres: Call 126 — 24/7 Crisis Support'
    ]
  },
  guatemala: {
    emergencyNumber: '110 (National Police) / 122 or 123 (Ambulance)',
    crisisLines: [
      'Ministerio Público Línea de Atención a la Mujer: Call 1572 — 24/7 Crisis Support'
    ]
  },
  honduras: {
    emergencyNumber: '911 (National Emergency)',
    crisisLines: [
      'Línea 114 (Mujer Vivir Sin Miedo): Call 114 — 24/7 Women’s Crisis Support'
    ]
  },
  panama: {
    emergencyNumber: '911 (SUME Medical Emergency) / 104 (Police)',
    crisisLines: [
      'Ministerio de la Mujer Línea de Orientación: Call 182'
    ]
  },
  'dominican republic': {
    emergencyNumber: '911 (National Emergency)',
    crisisLines: [
      'Línea Mujer *212 (Ministerio de la Mujer): Call *212 — 24/7 Confidential Crisis Support'
    ]
  },
  nigeria: {
    emergencyNumber: '112 (National Emergency Dispatch)',
    crisisLines: []
  },
  'south africa': {
    emergencyNumber: '112 (Mobile Emergency) / 10111 (SAPS Police) / 10177 (Ambulance)',
    crisisLines: [
      'GBV Command Centre (Gender-Based Violence): Call 0800 428 428 or *120*7867# — 24/7 Crisis Line',
      'POWA / Stop Gender Violence Helpline: Call 0800 150 150'
    ]
  },
  namibia: {
    emergencyNumber: '10111 (Namibian Police) / +264 61 211 111 (Emergency)',
    crisisLines: [
      'GBV Protection & Lifeline/Childline Namibia: Call 106 or 116 (Toll-Free Crisis Support)'
    ]
  },
  zimbabwe: {
    emergencyNumber: '999 or 112 (National Emergency) / 995 (Police)',
    crisisLines: [
      'Musasa Project 24/7 Gender-Based Violence Crisis Line: Call 0808 0074'
    ]
  },
  'cabo verde': {
    emergencyNumber: '132 (Police) / 130 (Medical Emergency)',
    crisisLines: [
      'ICIEG Linha Verde Violência Baseada no Género: Call 800 18 18 (Toll-Free Crisis Line)'
    ]
  },
  'cape verde': {
    emergencyNumber: '132 (Police) / 130 (Medical Emergency)',
    crisisLines: [
      'ICIEG Linha Verde Violência Baseada no Género: Call 800 18 18 (Toll-Free Crisis Line)'
    ]
  },
  kenya: {
    emergencyNumber: '999 or 112 (National Emergency)',
    crisisLines: [
      'HAK National GBV Helpline Kenya: Call 1195 (24/7 Toll-Free Crisis Support)'
    ]
  },
  uganda: {
    emergencyNumber: '999 or 112 (National Emergency)',
    crisisLines: [
      'Sauti National GBV Helpline Uganda: Call 116 (Toll-Free Crisis Support)'
    ]
  },
  tanzania: {
    emergencyNumber: '112 or 114 (National Emergency)',
    crisisLines: [
      'National Crisis Helpline: Call 116'
    ]
  },
  ethiopia: {
    emergencyNumber: '911 or 991 (Police) / 907 (Red Cross Ambulance)',
    crisisLines: [
      'AWSAD / Women’s Protection Hotline Addis Ababa: Call 7711 or 6388'
    ]
  },
  somalia: {
    emergencyNumber: '888 (Police) / 999 (Emergency)',
    crisisLines: [
      'Somali Women Development Center (SWDC) Crisis Hotline: Call 5555'
    ]
  },
  rwanda: {
    emergencyNumber: '112 (National Police Emergency) / 912 (SAMU Ambulance)',
    crisisLines: [
      'Isange One Stop Centre GBV Hotline: Call 3512 or 3029 (24/7 Toll-Free)'
    ]
  },
  ghana: {
    emergencyNumber: '112 or 191 (Police) / 193 (Ambulance)',
    crisisLines: [
      'DOVVSU Domestic Violence Helpline: Call 0800 111 222'
    ]
  },
  morocco: {
    emergencyNumber: '19 (Police) / 15 (Ambulance) / 177 (Gendarmerie)',
    crisisLines: [
      'Kolona Maak National Women’s Violence Helpline: Call 8350 (24/7 Crisis Line)'
    ]
  },
  egypt: {
    emergencyNumber: '122 (Police) / 123 (Ambulance)',
    crisisLines: [
      'National Council for Women (NCW) Crisis Hotline: Call 15115'
    ]
  },
  bangladesh: {
    emergencyNumber: '999 (National Emergency Police, Fire & Ambulance)',
    crisisLines: [
      'National Helpline Center for Violence Against Women: Call 109 (24/7 Toll-Free)'
    ]
  },
  pakistan: {
    emergencyNumber: '15 (Police) / 1122 (Rescue & Ambulance)',
    crisisLines: [
      'Ministry of Human Rights Helpline: Call 1099',
      'Rozan / Madadgaar Women Crisis Helpline: Call 1098'
    ]
  },
  india: {
    emergencyNumber: '112 (All-India Emergency Response)',
    crisisLines: [
      'Women Helpline (All-India): Call 181 or 1091 — 24/7 Crisis & Domestic Abuse Support',
      'NCW 24/7 Women’s Distress Helpline: Call 7827-170-170'
    ]
  },
  nepal: {
    emergencyNumber: '100 (Police) / 102 (Ambulance)',
    crisisLines: [
      'Khabar Garau 1145 (National Women Commission Helpline): Call 1145 (24/7 Toll-Free)'
    ]
  },
  afghanistan: {
    emergencyNumber: '119 (Police) / 102 (Ambulance)',
    crisisLines: []
  },
  philippines: {
    emergencyNumber: '911 (National Emergency Hotline)',
    crisisLines: [
      'PNP Women and Children Protection Center Crisis Line: Call +63 2 8532-6690'
    ]
  },
  indonesia: {
    emergencyNumber: '112 (National Emergency) / 110 (Police) / 118 (Ambulance)',
    crisisLines: [
      'SAPA 129 (Ministry of Women Empowerment Crisis Line): Call 129 or WhatsApp +62 8111-129-129'
    ]
  },
  japan: {
    emergencyNumber: '110 (Police) / 119 (Ambulance & Fire)',
    crisisLines: [
      'DV Soudan Plus (24/7 Domestic Violence Crisis Line): Call 0120-279-889',
      'Cure Time / Spousal Violence Counseling: Call 0570-0-55210'
    ]
  },
  'south korea': {
    emergencyNumber: '112 (Police) / 119 (Ambulance & Fire)',
    crisisLines: [
      'Women’s Emergency Hotline Korea: Call 1366 (24/7 Multilingual Crisis Support)'
    ]
  },
  australia: {
    emergencyNumber: '000 (Triple Zero — Police, Fire & Ambulance)',
    crisisLines: [
      '1800RESPECT (National Domestic, Family & Sexual Violence Line): Call 1800 737 732 (24/7)',
      'Lifeline Australia: Call 13 11 14'
    ]
  },
  'new zealand': {
    emergencyNumber: '111 (Police, Fire & Ambulance Emergency)',
    crisisLines: [
      'Women’s Refuge Crisis Line: Call 0800 733 843 (0800 REFUGE — 24/7)',
      'Are You OK Family Violence Line: Call 0800 456 450'
    ]
  },
  france: {
    emergencyNumber: '112 (European Emergency) / 15 (SAMU Ambulance) / 17 (Police)',
    crisisLines: [
      'Violences Femmes Info: Call 3919 (24/7 Free & Anonymous Crisis Line)'
    ]
  },
  spain: {
    emergencyNumber: '112 (General Emergency) / 091 (National Police)',
    crisisLines: [
      'Atención a Víctimas de Violencia de Género: Call 016 or WhatsApp +34 600 000 016 (24/7, Leaves No Bill Trace)'
    ]
  },
  italy: {
    emergencyNumber: '112 (Single Emergency Number) / 118 (Medical Emergency)',
    crisisLines: [
      'Numero Antiviolenza e Stalking: Call 1522 (24/7 Free & Multilingual Crisis Support)'
    ]
  },
  germany: {
    emergencyNumber: '112 (Ambulance & Fire) / 110 (Police)',
    crisisLines: [
      'Hilfetelefon Gewalt gegen Frauen: Call 116 016 (24/7 Free & Confidential in 18 Languages)'
    ]
  },
  portugal: {
    emergencyNumber: '112 (National Emergency)',
    crisisLines: [
      'CIG Informação a Vítimas de Violência Doméstica: Call 800 202 148 or SMS 3060 (24/7 Free)'
    ]
  },
  turkey: {
    emergencyNumber: '112 (Single National Emergency)',
    crisisLines: [
      'ALO 183 (Social Support & Violence Against Women Line): Call 183 (24/7 Free)'
    ]
  },
  ukraine: {
    emergencyNumber: '112 (General Emergency) / 102 (Police) / 103 (Ambulance)',
    crisisLines: [
      'La Strada Ukraine National Domestic Violence Hotline: Call 116 123 or 0 800 500 335 (24/7 Free)'
    ]
  },
  poland: {
    emergencyNumber: '112 (General Emergency) / 997 (Police) / 999 (Ambulance)',
    crisisLines: [
      'Niebieska Linia (Blue Line Domestic Violence Helpline): Call 800 120 002 (24/7 Free)'
    ]
  },
  netherlands: {
    emergencyNumber: '112 (National Emergency)',
    crisisLines: [
      'Veilig Thuis (Domestic Violence & Abuse Advice Line): Call 0800 2000 (24/7 Free)'
    ]
  },
  belgium: {
    emergencyNumber: '112 (Emergency & Ambulance) / 101 (Police)',
    crisisLines: [
      'Écoute Violences Conjugales: Call 0800 30 030 / Veilig Thuis Crisis Line: Call 1712'
    ]
  },
  sweden: {
    emergencyNumber: '112 (National Emergency)',
    crisisLines: [
      'Kvinnofridslinjen (National Women’s Peace Line): Call 020-50 50 50 (24/7 Free)'
    ]
  },
  norway: {
    emergencyNumber: '112 (Police) / 113 (Ambulance)',
    crisisLines: [
      'VO-linjen (Domestic Violence Helpline): Call 116 006 (24/7 Free)'
    ]
  },
  denmark: {
    emergencyNumber: '112 (National Emergency)',
    crisisLines: [
      'Lev Uden Vold (Live Without Violence National Hotline): Call 1888 (24/7 Free)'
    ]
  },
  finland: {
    emergencyNumber: '112 (National Emergency)',
    crisisLines: [
      'Nollalinja (Zero Line Domestic Violence Support): Call 080 005 005 (24/7 Free)'
    ]
  },
  switzerland: {
    emergencyNumber: '112 (General Emergency) / 117 (Police) / 144 (Ambulance)',
    crisisLines: [
      'Die Dargebotene Hand / La Main Tendue Crisis Line: Call 143 (24/7)'
    ]
  },
  austria: {
    emergencyNumber: '112 (General Emergency) / 133 (Police) / 144 (Ambulance)',
    crisisLines: [
      'Frauenhelpline gegen Gewalt (Women’s Helpline Against Violence): Call 0800 222 555 (24/7 Free)'
    ]
  },
  greece: {
    emergencyNumber: '112 (General Emergency) / 100 (Police) / 166 (EKAB Ambulance)',
    crisisLines: [
      'SOS 15900 (General Secretariat for Equality Women’s Crisis Line): Call 15900 (24/7)'
    ]
  },
  romania: {
    emergencyNumber: '112 (Single National Emergency)',
    crisisLines: [
      'ANES National Domestic Violence Helpline: Call 0800 500 333 (24/7 Toll-Free)'
    ]
  },
  'czech republic': {
    emergencyNumber: '112 (General Emergency) / 158 (Police) / 155 (Ambulance)',
    crisisLines: [
      'ROSA / Bílý kruh bezpečí Crisis Line: Call 116 006 (24/7 Toll-Free Victim Support)'
    ]
  },
  hungary: {
    emergencyNumber: '112 (Single National Emergency)',
    crisisLines: [
      'OKIT National Crisis & Domestic Violence Hotline: Call 06-80-20-55-20 (24/7 Free)'
    ]
  },
  china: {
    emergencyNumber: '110 (Police) / 120 (Ambulance)',
    crisisLines: [
      'All-China Women’s Federation Rights & Anti-Domestic Violence Hotline: Call 12338'
    ]
  },
  taiwan: {
    emergencyNumber: '110 (Police) / 119 (Ambulance & Fire)',
    crisisLines: [
      '113 Protection Hotline (Domestic Violence & Sexual Assault): Call 113 (24/7 Toll-Free)'
    ]
  },
  thailand: {
    emergencyNumber: '191 (Police) / 1669 (Medical Emergency)',
    crisisLines: [
      'One Stop Crisis Center (OSCC) Social Assistance Hotline: Call 1300 (24/7)'
    ]
  },
  vietnam: {
    emergencyNumber: '113 (Police) / 115 (Medical Emergency)',
    crisisLines: [
      'Peace House (Ngôi Nhà Bình Yên) Women’s Shelter Hotline: Call 1900 969 680'
    ]
  },
  malaysia: {
    emergencyNumber: '999 (National Emergency)',
    crisisLines: [
      'Talian Kasih 15999 (Ministry of Women Crisis Line): Call 15999 or WhatsApp +60 19-261 5999 (24/7)',
      'Women’s Aid Organisation (WAO) Hotline: Call +60 3 3000 8858'
    ]
  },
  singapore: {
    emergencyNumber: '999 (Police) / 995 (Emergency Ambulance)',
    crisisLines: [
      'National Anti-Violence & Sexual Harassment Helpline (NAVH): Call 1800-777-0000 (24/7)',
      'AWARE Women’s Helpline: Call 1800-777-5555'
    ]
  },
  'sri lanka': {
    emergencyNumber: '119 (Police Emergency) / 1990 (Suwa Seriya Ambulance)',
    crisisLines: [
      'Mithuru Piyasa / National Women’s Helpline: Call 1938 (24/7 Toll-Free)'
    ]
  },
  myanmar: {
    emergencyNumber: '199 (Police) / 192 (Ambulance)',
    crisisLines: []
  },
  lebanon: {
    emergencyNumber: '112 (Internal Security Police) / 140 (Red Cross Ambulance)',
    crisisLines: [
      'ABAAD Safe Line for Women: Call +961 81 78 81 78 (24/7 Crisis Support)',
      'KAFA Violence & Exploitation 24/7 Helpline: Call +961 3 018 019'
    ]
  },
  jordan: {
    emergencyNumber: '911 (Unified National Emergency)',
    crisisLines: [
      'Family Protection Department / Jordanian Women’s Union Hotline: Call +962 6 567 4777'
    ]
  },
  palestine: {
    emergencyNumber: '100 (Police Family & Juvenile Protection Unit) / 101 (Palestine Red Crescent Ambulance)',
    crisisLines: [
      'SAWA 24/7 Toll-Free Anti-Violence & Psychosocial Helpline: Call 121 or 164 (West Bank & Gaza) / 1800-500-121 (Jerusalem) / WhatsApp +972 56-612-1012',
      'Women’s Centre for Legal Aid and Counselling (WCLAC Emergency Protection): Call +970 2 295 6146 / 1800-220-100',
      'Mehwar Center for the Protection of Women & Families (Bethlehem / Beit Sahour Shelter): Call +970 2 277 5626',
      'Family Defense Society (FDS — Nablus Emergency Safe Home): Call +970 9 238 4518',
      'Hayat Center & AISHA Protection Helpline (Gaza Strip): Call 1800-171-171 / +970 8 282 7047'
    ]
  },
  syria: {
    emergencyNumber: '112 (Police) / 110 (Ambulance)',
    crisisLines: []
  },
  iraq: {
    emergencyNumber: '104 (Police) / 122 (Ambulance)',
    crisisLines: [
      'Family & Child Protection Directorate Hotline: Call 139'
    ]
  },
  yemen: {
    emergencyNumber: '199 (Police & Emergency)',
    crisisLines: []
  },
  sudan: {
    emergencyNumber: '999 (National Emergency) / 136 (CVAW National SGBV Helpline)',
    crisisLines: [
      'Combating Violence Against Women Unit (CVAW National SGBV Helpline): Call 136',
      'SEEMA Center for Protection of Women & Child Rights & Mutawinat Legal Aid: Call 136'
    ]
  },
  chad: {
    emergencyNumber: '17 (Police) / 1313 (SAMU Medical Emergency) / 116 (VBG & Child Protection)',
    crisisLines: [
      'Association des Femmes Juristes du Tchad (APLFT — Legal Aid & VBG Listening Cells): Call +235 66 29 09 61',
      'Maison Nationale de la Femme & CELIAF (N’Djamena): Call +235 22 52 21 66 / +235 66 29 09 61',
      'UNHCR, HIAS & CRT Refugee Camp GBV Safe Spaces (Adré, Farchana, Bredjing, Treguine, Iriba, Guéréda, Goz Beïda, Goré, Maro & Baga Sola): Call 116 or +235 68 00 10 10',
      'CHU de la Mère et de l’Enfant (HME N’Djamena — 24/7 Maternity & Fistula Center): Call +235 22 52 30 30'
    ]
  },
  gabon: {
    emergencyNumber: '1300 (SAMU Gabon Medical Emergency) / 1730 (Police) / 1404 (Numéro Vert VBG)',
    crisisLines: [
      'Numéro Vert National VBG (Gabon Égalité — 24/7 Toll-Free Domestic & Gender-Based Violence Helpline): Call 1404',
      'Centre d’Accueil Gabon Égalité (Nzeng-Ayong Safe Shelter & Legal Clinic, Libreville): Call 1404 / +241 011 76 00 00',
      'Observatoire des Droits de la Femme et de la Parité (ODEFPA) & ReFLeT Legal Clinic: Call +241 011 73 57 38 / 1404',
      'CHU Mère-Enfant Fondation Jeanne Ebori (24/7 Obstetrics, Maternity & SGBV Clinical Care, Libreville): Call +241 011 72 20 10 / 1300'
    ]
  },
  'south sudan': {
    emergencyNumber: '777 (National Police Emergency) / 112',
    crisisLines: [
      'Hope Restoration South Sudan (HRSS — Munuki Block C, Plot No. 349, Juba): Call +211 912 544 114',
      'Safer Women’s Initiative (SWI — Block 8, Juba): Call +211 980 945 122 / +211 921 635 934',
      'WERD (Tong Ping, Juba): Call +211 920 791 796 & Eve Organization for Women Devt (Juba): Call +211 910 888 800',
      'Women for Justice & Equality (Gurei, Juba): Call +211 929 402 770, Women Tears (Gudele): +211 928 777 307 & Vision For Humanity (24/7): +211 929 292 979',
      'Wau (WDG South Sudan +211 924 883 349 & Mary Help Centre +211 924 489 100), Kuajok Warrap Women’s Union (+211 925 644 831) & Aweil Women Empowerment Centre (+211 922 205 374)'
    ]
  },
  'democratic republic of the congo': {
    emergencyNumber: '112 / 122 (Ligne Verte Nationale VBG Gratuite)',
    crisisLines: [
      'Ligne Verte Nationale VBG (Toll-Free Gender-Based Violence Helpline): Call 122 or 495555',
      'Fondation Panzi, Hôpital de Panzi, Maison Dorcas & City of Joy (Bukavu / Sud-Kivu): Call +243 811 443 123 / +243 894 153 354',
      'Maison de la Femme Goma (+243 998 844 301), SOFEPADI (+243 973 764 620), ActionAid Espace Sûr (+243 978 082 552) & DFJ (+243 995 213 320)',
      'Cliniques Tumaini MSF-Hollande (Goma / Mugunga / Mweso / Walikale): Call +243 827 480 200 / +243 844 368 366',
      'Kalemie & Tanganyika Listening Cells (APEF +243 813 268 324, Maison de la Femme CDJP +243 812 797 694, SAFEKA +243 819 722 019, AIDES +243 815 883 669, AVREO +243 811 411 330)'
    ]
  },
  cameroon: {
    emergencyNumber: '112 or 117 (Police) / 119 (Medical Emergency)',
    crisisLines: []
  },
  niger: {
    emergencyNumber: '15 (SAMU Medical) / 17 (Police) / 0 800 12 12 (Ligne Verte Gratuite HCR)',
    crisisLines: [
      'Ligne Verte Gratuite HCR Niger (VBG, Protection & Guichet Unique — Orange, Airtel, Moov): Call 0 800 12 12 (French, Hausa, Zarma/Djerma, Arabic, English)',
      'Guichet Unique de Niamey & Sous-Délégations HCR (Agadez, Diffa, Maradi, Tahoua, Tillabéri): Call +227 20 75 20 64 (NGRNI@UNHCR.ORG)',
      'Association des Femmes Juristes du Niger (AFJN) & Ligne 116: Call 116 / +227 20 73 56 36'
    ]
  },
  senegal: {
    emergencyNumber: '17 (Police) / 1515 (SAMU Ambulance)',
    crisisLines: [
      'Ligne Verte Violences Basées sur le Genre (Ministry of Women): Call 116 (Toll-Free)'
    ]
  },
  mauritania: {
    emergencyNumber: '101 (SAMU Mauritanie Ambulance) / 117 (Police) / 118 (Pompiers)',
    crisisLines: [
      'Association des Femmes Chefs de Famille (AFCF — Ligne Verte VBG): Call 800 01 010 / +222 45 25 10 80',
      'Mother and Child Hospital Center (Centre Hospitalier Mère et Enfant — CHME Nouakchott): Call +222 22 07 29 43 / +222 36 34 60 45',
      'Nouakchott National Hospital Center (CHN — Urgences): Call +222 45 25 72 61'
    ]
  },
  algeria: {
    emergencyNumber: '1548 (Police) / 14 (Civil Protection Ambulance)',
    crisisLines: [
      'Ministry of National Solidarity Women’s Distress Line: Call 1026'
    ]
  },
  tunisia: {
    emergencyNumber: '197 (Police) / 190 (SAMU Ambulance)',
    crisisLines: [
      'Ligne Verte contre les Violences faites aux Femmes: Call 1899 (24/7 Toll-Free)'
    ]
  },
  zambia: {
    emergencyNumber: '999 or 991 (Police Emergency)',
    crisisLines: [
      'Lifeline / GBV Crisis Helpline Zambia: Call 933 or 116 (Toll-Free)'
    ]
  },
  malawi: {
    emergencyNumber: '997 (Police) / 998 (Ambulance)',
    crisisLines: [
      'Tithandizane National GBV Helpline: Call 5600 (Toll-Free)'
    ]
  },
  mozambique: {
    emergencyNumber: '112 or 119 (National Emergency) / 116 (Linha Fala Criança & VBG) / 1458 (Linha Verde)',
    crisisLines: [
      'Linha Fala Criança & Violência Baseada no Género (24/7 Toll-Free): Call 116',
      'Linha Verde da Resposta Humanitária (UNHCR / IOM / WFP / UNICEF Protection Helpline): Call 1458 (Toll-Free)',
      'MULEIDE (Associação Mulher, Lei e Desenvolvimento — Maputo, Beira & Pemba Legal/VBG Shelter Support): Call +258 21 325 581 / +258 84 325 5810',
      'UNICEF Mozambique (1440 Av. do Zimbábwe, Maputo — Child & Maternal Protection): Call +258 21 481 100',
      'IOM Mozambique (139 Rua Joseph Kizerbo, Maputo — Counter-Trafficking & Displaced Women): Call +258 21 489 946',
      'Orfanato Melanie Center (Beira Safe Home & Vulnerable Girls Sanctuary): Call +258 84 956 5431'
    ]
  },
  haiti: {
    emergencyNumber: '114 (National Police) / 116 (National Ambulance Center)',
    crisisLines: []
  },
  jamaica: {
    emergencyNumber: '119 (Police Emergency) / 110 (Ambulance)',
    crisisLines: [
      'Woman Inc. 24-Hour Crisis Hotline: Call +1 876-929-2997'
    ]
  },
  'trinidad and tobago': {
    emergencyNumber: '999 (Police) / 811 (Ambulance)',
    crisisLines: [
      'National Domestic Violence Hotline: Call 800-SAVE (800-7283) — 24/7 Toll-Free'
    ]
  },
  cuba: {
    emergencyNumber: '106 (Police) / 104 (Ambulance)',
    crisisLines: [
      'Línea Confiable para las Mujeres (FMC): Call 103'
    ]
  },
  nicaragua: {
    emergencyNumber: '118 (National Police) / 128 (Red Cross Ambulance)',
    crisisLines: []
  },
  israel: {
    emergencyNumber: '100 (Police) / 101 (Magen David Adom Ambulance) / 118 (National DV Hotline)',
    crisisLines: [
      'National Domestic Abuse & Shelter Hotline: Call 118 or 1-800-220-000 (24/7 Toll-Free)',
      'Bat Melech (Specifically for Ultra-Orthodox / Haredi & Orthodox Jewish Women’s Shelters): Call 1-800-292-333 / WhatsApp 058-651-6103',
      'Tahel (Specifically for Ultra-Orthodox / Haredi & Religious Jewish Women’s 24/7 Crisis Line): Call *2511 / WhatsApp 052-836-1202',
      'Women’s 24-Hour Sexual Assault Crisis Hotline (ARCCI): Call 1202',
      'No2Violence 24/7 Emergency Hotline: Call *6724 or 1-800-353-300',
      'WIZO Domestic Violence Helpline: Call +972 3-692-3710 / +972 3-692-3714',
      'Arab Women’s 24-Hour Emergency Hotline: Call 04-656-6813',
      'Al-Nashmiat & Ma’an Negev Protection Network (Specifically for Bedouin Women in the Negev): Call +972 8-627-2462 / Maslan Negev Arabic Crisis Line 1202 (+972 8-642-1313)'
    ]
  }
};

function extractCleanNationalNumber(rawStr = '') {
  // Strip parenthetical explanations so "123 (National Emergency...)" -> "123"
  // and "190 (Military Police) / 192 (SAMU Medical Emergency)" -> "190 / 192"
  const stripped = String(rawStr)
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*\/\s*/g, ' / ')
    .trim();
  return stripped || rawStr;
}

function parseCrisisLineToItem(lineStr = '') {
  if (typeof lineStr === 'object' && lineStr !== null) {
    return lineStr;
  }
  const str = String(lineStr);
  // Pattern: "Name: Call 155 — Description" or "Name: Call 155"
  const parts = str.split(':');
  if (parts.length >= 2) {
    const rawName = parts[0].trim();
    const rest = parts.slice(1).join(':').trim();
    const beforeDash = rest.split('—')[0].trim();
    const cleanNum = beforeDash
      .replace(/^Call\s+or\s+Text\s+/i, '')
      .replace(/^Call\s+/i, '')
      .replace(/\([^)]*\)/g, '')
      .trim();
    const labelText = rawName.toLowerCase().startsWith('crisis') ? rawName : `Crisis (${rawName})`;
    return {
      label: labelText,
      originalName: rawName,
      number: cleanNum || beforeDash
    };
  }
  return {
    label: 'Crisis',
    originalName: '',
    number: str
  };
}

export function getImmediateCrisisInfoForArea(currentRegion, closestHospitals = [], closestShelters = []) {
  const nearestFacility = closestHospitals[0] || closestShelters[0] || null;
  const searchPool = [
    currentRegion?.nameEn || '',
    currentRegion?.nameLocal || '',
    currentRegion?.country || '',
    nearestFacility?.regionDistrict || '',
    nearestFacility?.address?.en || ''
  ]
    .join(' ')
    .toLowerCase();

  // 1. Check specific regional/city overrides first (e.g. Bogotá, Massachusetts, Lagos, Cox's Bazar, Balochistan)
  for (const override of REGIONAL_CRISIS_OVERRIDES) {
    if (override.match.some((kw) => searchPool.includes(kw))) {
      return {
        nationalNumber: override.nationalNumber || extractCleanNationalNumber(override.emergencyNumber),
        regionalNumber: override.regionalNumber || null,
        emergencyNumber: override.emergencyNumber,
        crisisLines: override.crisisLines || [],
        crisisItems: (override.crisisLines || []).map(parseCrisisLineToItem)
      };
    }
  }

  // 2. Check country match against NATIONAL_CRISIS_DIRECTORY
  for (const [countryKey, info] of Object.entries(NATIONAL_CRISIS_DIRECTORY)) {
    if (searchPool.includes(countryKey)) {
      return {
        nationalNumber: info.nationalNumber || extractCleanNationalNumber(info.emergencyNumber),
        regionalNumber: info.regionalNumber || null,
        emergencyNumber: info.emergencyNumber,
        crisisLines: info.crisisLines || [],
        crisisItems: (info.crisisLines || []).map(parseCrisisLineToItem)
      };
    }
  }

  // 3. Fallback: derive from the closest facility's emergencyHotline field if present, else standard 112 / 911 / 999
  const rawFacilityHotline =
    nearestFacility?.emergencyHotline ||
    closestShelters[0]?.emergencyHotline ||
    closestHospitals[0]?.emergencyHotline ||
    '';
  if (rawFacilityHotline && !/112 \/ 911|Local Emergency/i.test(rawFacilityHotline)) {
    const cleaned = extractCleanNationalNumber(rawFacilityHotline);
    return {
      nationalNumber: cleaned,
      regionalNumber: null,
      emergencyNumber: `${rawFacilityHotline}`,
      crisisLines: [],
      crisisItems: []
    };
  }

  return {
    nationalNumber: '112 / 911 / 999',
    regionalNumber: null,
    emergencyNumber: '112 / 911 / 999',
    crisisLines: [],
    crisisItems: []
  };
}
