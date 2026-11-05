import React, { useState } from 'https://esm.sh/react@18.3.1';

const h = React.createElement;

const NATION_MATCH_ALIASES = {
  'UNITED STATES OF AMERICA': ['usa', 'united states'],
  'UNITED KINGDOM': ['united kingdom', 'uk', 'england', 'scotland', 'wales', 'northern ireland'],
  'UNITED ARAB EMIRATES': ['united arab emirates', 'uae', 'dubai', 'abu dhabi', 'sharjah'],
  'DEMOCRATIC REPUBLIC OF THE CONGO': ['democratic republic of the congo', 'dr congo', 'kinshasa', 'goma', 'bukavu'],
  'CONGO (REPUBLIC OF THE CONGO)': ['republic of the congo', 'brazzaville', 'pointe-noire'],
  'CÔTE D’IVOIRE (IVORY COAST)': ['côte d’ivoire', 'ivory coast', 'abidjan'],
  'TURKEY (TÜRKIYE)': ['turkey', 'türkiye'],
  'MYANMAR (BURMA)': ['myanmar', 'burma'],
  'ESWATINI (SWAZILAND)': ['eswatini', 'swaziland'],
  'CABO VERDE (CAPE VERDE)': ['cabo verde', 'cape verde'],
  'CZECHIA (CZECH REPUBLIC)': ['czechia', 'czech republic']
};

// 16-step bleeding ombré progression from FemPowHer Light Pink (#FEACEC) -> Raspberry (#CF366C) -> Crimson (#9F133A) -> Dark Crimson (#6E0926),
// which restarts every 16 nations.
const OMBRE_16_STOPS = [
  '#FEACEC', // 1 - Lightest FemPowHer Pink
  '#F89CE1', // 2
  '#F28CD6', // 3
  '#EC7CCB', // 4
  '#E56CC0', // 5
  '#DF5CB4', // 6
  '#D84CA8', // 7
  '#CF366C', // 8 - Core FemPowHer Raspberry
  '#C52F62', // 9
  '#BC2858', // 10
  '#B2214E', // 11
  '#A81A44', // 12
  '#9F133A', // 13 - Core FemPowHer Crimson
  '#8F1033', // 14
  '#7F0C2C', // 15
  '#6E0926'  // 16 - Deep Dark Crimson
];

// Complete alphabetical list of all nations on Earth
export const ALL_NATIONS_ON_EARTH = [
  'AFGHANISTAN',
  'ALBANIA',
  'ALGERIA',
  'ANDORRA',
  'ANGOLA',
  'ANTIGUA AND BARBUDA',
  'ARGENTINA',
  'ARMENIA',
  'AUSTRALIA',
  'AUSTRIA',
  'AZERBAIJAN',
  'BAHAMAS',
  'BAHRAIN',
  'BANGLADESH',
  'BARBADOS',
  'BELARUS',
  'BELGIUM',
  'BELIZE',
  'BENIN',
  'BHUTAN',
  'BOLIVIA',
  'BOSNIA AND HERZEGOVINA',
  'BOTSWANA',
  'BRAZIL',
  'BRUNEI',
  'BULGARIA',
  'BURKINA FASO',
  'BURUNDI',
  'CABO VERDE',
  'CAMBODIA',
  'CAMEROON',
  'CANADA',
  'CENTRAL AFRICAN REPUBLIC',
  'CHAD',
  'CHILE',
  'CHINA',
  'COLOMBIA',
  'COMOROS',
  'CONGO (REPUBLIC OF THE CONGO)',
  'COSTA RICA',
  'CÔTE D’IVOIRE (IVORY COAST)',
  'CROATIA',
  'CUBA',
  'CYPRUS',
  'CZECHIA (CZECH REPUBLIC)',
  'DEMOCRATIC REPUBLIC OF THE CONGO',
  'DENMARK',
  'DJIBOUTI',
  'DOMINICA',
  'DOMINICAN REPUBLIC',
  'ECUADOR',
  'EGYPT',
  'EL SALVADOR',
  'EQUATORIAL GUINEA',
  'ERITREA',
  'ESTONIA',
  'ESWATINI',
  'ETHIOPIA',
  'FIJI',
  'FINLAND',
  'FRANCE',
  'GABON',
  'GAMBIA',
  'GEORGIA',
  'GERMANY',
  'GHANA',
  'GREECE',
  'GREENLAND',
  'GRENADA',
  'GUATEMALA',
  'GUINEA',
  'GUINEA-BISSAU',
  'GUYANA',
  'HAITI',
  'HONDURAS',
  'HONG KONG',
  'HUNGARY',
  'ICELAND',
  'INDIA',
  'INDONESIA',
  'IRAN',
  'IRAQ',
  'IRELAND',
  'ISRAEL',
  'ITALY',
  'JAMAICA',
  'JAPAN',
  'JORDAN',
  'KAZAKHSTAN',
  'KENYA',
  'KIRIBATI',
  'KOSOVO',
  'KUWAIT',
  'KYRGYZSTAN',
  'LAOS',
  'LATVIA',
  'LEBANON',
  'LESOTHO',
  'LIBERIA',
  'LIBYA',
  'LIECHTENSTEIN',
  'LITHUANIA',
  'LUXEMBOURG',
  'MADAGASCAR',
  'MALAWI',
  'MALAYSIA',
  'MALDIVES',
  'MALI',
  'MALTA',
  'MARSHALL ISLANDS',
  'MAURITANIA',
  'MAURITIUS',
  'MEXICO',
  'MICRONESIA',
  'MOLDOVA',
  'MONACO',
  'MONGOLIA',
  'MONTENEGRO',
  'MOROCCO',
  'MOZAMBIQUE',
  'MYANMAR (BURMA)',
  'NAMIBIA',
  'NAURU',
  'NEPAL',
  'NETHERLANDS',
  'NEW ZEALAND',
  'NICARAGUA',
  'NIGER',
  'NIGERIA',
  'NORTH KOREA',
  'NORTH MACEDONIA',
  'NORWAY',
  'OMAN',
  'PAKISTAN',
  'PALAU',
  'PALESTINE',
  'PANAMA',
  'PAPUA NEW GUINEA',
  'PARAGUAY',
  'PERU',
  'PHILIPPINES',
  'POLAND',
  'PORTUGAL',
  'QATAR',
  'ROMANIA',
  'RUSSIA',
  'RWANDA',
  'SAINT KITTS AND NEVIS',
  'SAINT LUCIA',
  'SAINT VINCENT AND THE GRENADINES',
  'SAMOA',
  'SAN MARINO',
  'SÃO TOMÉ AND PRÍNCIPE',
  'SAUDI ARABIA',
  'SENEGAL',
  'SERBIA',
  'SEYCHELLES',
  'SIERRA LEONE',
  'SINGAPORE',
  'SLOVAKIA',
  'SLOVENIA',
  'SOLOMON ISLANDS',
  'SOMALIA',
  'SOUTH AFRICA',
  'SOUTH KOREA',
  'SOUTH SUDAN',
  'SPAIN',
  'SRI LANKA',
  'SUDAN',
  'SURINAME',
  'SWEDEN',
  'SWITZERLAND',
  'SYRIA',
  'TAIWAN',
  'TAJIKISTAN',
  'TANZANIA',
  'THAILAND',
  'TIMOR-LESTE',
  'TOGO',
  'TONGA',
  'TRINIDAD AND TOBAGO',
  'TUNISIA',
  'TURKEY (TÜRKIYE)',
  'TURKMENISTAN',
  'TUVALU',
  'UGANDA',
  'UKRAINE',
  'UNITED ARAB EMIRATES',
  'UNITED KINGDOM',
  'UNITED STATES OF AMERICA',
  'URUGUAY',
  'UZBEKISTAN',
  'VANUATU',
  'VATICAN CITY',
  'VENEZUELA',
  'VIETNAM',
  'YEMEN',
  'ZAMBIA',
  'ZIMBABWE'
];

// ============================================================================
// DatabasePage1 — Full Database Directory List Page
// ============================================================================
export default function DatabasePage1({
  titleText,
  allCenters = [],
  enrichedAddressById = {},
  enrichedPhoneById = {},
  extractContactLines,
  extractOpenHours
}) {
  const [openSection, setOpenSection] = useState({});

  const toggleSection = (key) => {
    setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getCentersForNation = (nation, isSafeHaven) => {
    const aliases = NATION_MATCH_ALIASES[nation] || [nation.toLowerCase()];
    return allCenters.filter((c) => {
      if ((c.type === 'safe-haven') !== isSafeHaven) return false;
      const reg = `${c.regionDistrict || ''} ${c.address?.en || ''}`.toLowerCase();
      return aliases.some((al) => reg.includes(al));
    });
  };

  const renderFacilityCard = (clinic) => {
    const contactLines = extractContactLines ? extractContactLines(clinic) : [];
    const openHoursText = extractOpenHours ? extractOpenHours(clinic) : clinic.openHours || '';
    const exactAddr = enrichedAddressById[clinic.id] || clinic.address?.en || clinic.regionDistrict || '';
    return h(
      'div',
      {
        key: clinic.id,
        className: 'w-full bg-white rounded-2xl p-4 sm:p-5 border-2 shadow-sm transition',
        style: { borderColor: '#FEACEC' }
      },
      h(
        'h4',
        {
          className: 'text-base sm:text-lg font-bold text-center',
          style: { color: '#9F133A' }
        },
        clinic.name?.en
      ),
      h(
        'div',
        {
          className: 'grid grid-cols-2 gap-4 items-start mt-3 pt-3 border-t',
          style: { borderColor: '#FEACEC' }
        },
        h(
          'div',
          { className: 'text-left space-y-1 pr-2' },
          h(
            'div',
            {
              className: 'text-xs sm:text-sm font-bold uppercase tracking-wider',
              style: { color: '#9F133A' }
            },
            'Contact'
          ),
          contactLines.map((line, idx) =>
            h(
              'div',
              { key: idx, className: 'text-xs sm:text-sm font-bold break-words', style: { color: '#CF366C' } },
              line.href
                ? h(
                    'a',
                    {
                      href: line.href,
                      target: line.label === 'Website' ? '_blank' : undefined,
                      rel: line.label === 'Website' ? 'noopener noreferrer' : undefined,
                      className: 'underline hover:opacity-80',
                      style: { color: '#CF366C' }
                    },
                    line.value
                  )
                : line.value
            )
          )
        ),
        h(
          'div',
          { className: 'text-right space-y-1 pl-2' },
          h(
            'div',
            {
              className: 'text-xs sm:text-sm font-bold uppercase tracking-wider',
              style: { color: '#9F133A' }
            },
            'Address'
          ),
          h(
            'div',
            { className: 'text-xs sm:text-sm font-bold break-words', style: { color: '#CF366C' } },
            exactAddr
          )
        )
      ),
      openHoursText &&
        h(
          'div',
          {
            className: 'mt-3 pt-2 border-t text-center text-xs sm:text-sm font-bold',
            style: { borderColor: '#FEACEC', color: '#9F133A' }
          },
          openHoursText
        )
    );
  };

  return h(
    'div',
    {
      id: 'DatabasePage1',
      className: 'flex-1 w-full bg-white flex flex-col items-center justify-start pt-10 pb-24 px-6 sm:px-14 overflow-y-auto select-none'
    },
    // Centered Title in Darker Red Color Theme
    h(
      'h1',
      {
        className: 'text-2xl sm:text-4xl font-bold text-center tracking-tight mb-16',
        style: { color: '#6E0926' }
      },
      titleText || 'Full Database Directory List'
    ),

    // Vertical Notion-style list of all nations on Earth with ~1 inch (96px) vertical spacing
    // and 16-nation bleeding ombré color cycle
    h(
      'div',
      {
        className: 'w-full max-w-4xl flex flex-col items-start',
        style: { rowGap: '96px' }
      },
      ALL_NATIONS_ON_EARTH.map((nation, idx) => {
        const stepIdx = idx % 16;
        const nextStepIdx = Math.min(15, stepIdx + 1);
        const startColor = OMBRE_16_STOPS[stepIdx];
        const endColor = OMBRE_16_STOPS[nextStepIdx];

        // Opposite direction of the 16-ombré color cycle for the Hospitals & Safe Havens subheadings
        const revStepIdx = 15 - stepIdx;
        const revNextStepIdx = Math.max(0, revStepIdx - 1);
        const revStartColor = OMBRE_16_STOPS[revStepIdx];
        const revEndColor = OMBRE_16_STOPS[revNextStepIdx];

        const subHeadingStyle = {
          color: revStartColor,
          backgroundImage: `linear-gradient(180deg, ${revStartColor} 0%, ${revEndColor} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'underline',
          textDecorationColor: revStartColor,
          textDecorationThickness: '2.5px',
          textUnderlineOffset: '5px',
          cursor: 'pointer'
        };

        const hospKey = `${nation}-hosp`;
        const safeKey = `${nation}-safe`;
        const isHospOpen = !!openSection[hospKey];
        const isSafeOpen = !!openSection[safeKey];

        return h(
          'div',
          {
            key: nation,
            className: 'w-full flex flex-col items-start space-y-5'
          },
          h(
            'h2',
            {
              className: 'text-2xl sm:text-3xl font-extrabold tracking-wide leading-tight',
              style: {
                color: startColor,
                backgroundImage: `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }
            },
            nation
          ),
          h(
            'div',
            {
              className: 'w-full flex flex-col items-start space-y-4 pl-1 sm:pl-2'
            },
            h(
              'h3',
              {
                onClick: () => toggleSection(hospKey),
                className: 'text-lg sm:text-xl font-bold tracking-wide underline',
                style: subHeadingStyle
              },
              'Hospitals'
            ),
            isHospOpen &&
              h(
                'div',
                { className: 'w-full space-y-3 py-2' },
                getCentersForNation(nation, false).map(renderFacilityCard)
              ),
            h(
              'h3',
              {
                onClick: () => toggleSection(safeKey),
                className: 'text-lg sm:text-xl font-bold tracking-wide underline',
                style: subHeadingStyle
              },
              'Safe Havens'
            ),
            isSafeOpen &&
              h(
                'div',
                { className: 'w-full space-y-3 py-2' },
                getCentersForNation(nation, true).map(renderFacilityCard)
              )
          )
        );
      })
    ),

    // Bottom Section: "Thank You to These Data Bases"
    h(
      'div',
      {
        className: 'w-full max-w-4xl mt-28 pt-12 border-t-2 flex flex-col items-center space-y-8',
        style: { borderColor: '#CF366C' }
      },
      h(
        'h2',
        {
          className: 'text-2xl sm:text-3xl font-bold text-center tracking-tight',
          style: { color: '#6E0926' }
        },
        'Thank You to These Data Bases'
      ),
      h(
        'div',
        { className: 'w-full space-y-6' },
        [
          {
            name: 'Lila.help — Global Directory of Helplines & Women’s Shelters',
            url: 'https://lila.help',
            description:
              'Lila.help is an international directory of verified domestic abuse, sexual violence, and crisis support services created in partnership with the Global Network of Women’s Shelters (GNWS). Their global catalog of trusted local helplines and safe houses helped make FemPowHer’s worldwide Safe Haven directory possible across nearly 200 nations.'
          },
          {
            name: 'Mapa do Acolhimento & Mapa do Aborto Legal — Women’s Protection & Reproductive Health Directories (Brazil)',
            url: 'https://www.mapadoacolhimento.org/en/servicos-publicos/',
            description:
              'Mapa do Acolhimento and Artigo 19’s Mapa do Aborto Legal (https://mapaabortolegal.org) are Brazilian public-service mapping platforms connecting women experiencing gender-based violence with specialized public protection and healthcare. Their public services guides made it possible for FemPowHer to map Centros de Referência da Mulher (CRAMs/CEAMs), Casas da Mulher Brasileira, women’s shelters, and reproductive care referral hospitals across Brazil.'
          },
          {
            name: 'Programa Nacional Aurora / Warmi Ñan (MIMP) — Centros Emergencia Mujer Directory (Peru)',
            url: 'https://www.gob.pe/aurora',
            description:
              'Peru’s Ministry of Women and Vulnerable Populations (MIMP) maintains the national directory of Centros Emergencia Mujer (CEM) and Hogares de Refugio Temporal across all 24 departments and Callao. Their public directory enabled FemPowHer to map 24/7 police-station emergency centers, temporary women’s shelters, and regional maternal protection services throughout Peru.'
          },
          {
            name: 'SernamEG — Directorio de Centros de las Mujeres & Casas de Acogida (Chile)',
            url: 'https://www.sernameg.gob.cl',
            description:
              'Chile’s Servicio Nacional de la Mujer y la Equidad de Género coordinates Centros de las Mujeres and Casas de Acogida across all 16 Chilean regions, providing essential regional shelter and psychosocial support data for FemPowHer.'
          },
          {
            name: 'Línea 144 & Mapa Federal del Cuidado — Centros de Atención & Hogares de Protección (Argentina)',
            url: 'https://www.argentina.gob.ar/generos/linea-144',
            description:
              'Argentina’s national gender-based violence response network and Mapa Federal del Cuidado map Centros Integrales de la Mujer, Hogares de Protección Integral, and public maternity and reproductive health referral hospitals across Argentine provinces.'
          },
          {
            name: 'LegalApp, Casas de Igualdad & Profamilia — Women’s Justice & Reproductive Health Directories (Colombia)',
            url: 'https://profamilia.org.co/ubicaciones/',
            description:
              'Colombia’s Ministry of Justice directory (https://www.legalapp.gov.co), Bogotá’s Secretaría Distrital de la Mujer (https://www.sdmujer.gov.co), and Profamilia’s national clinic network provided verified addresses and contact details for Comisarías de Familia, Casas Refugio, and reproductive health clinics across Colombia.'
          },
          {
            name: 'Centros de Justicia para las Mujeres (CONAVIM) & Red Nacional de Refugios (Mexico)',
            url: 'https://rednacionalderefugios.org.mx',
            description:
              'Mexico’s national registry of Centros de Justicia para las Mujeres (https://www.gob.mx/conavim), the Red Nacional de Refugios, and CDMX’s public reproductive health network (https://ile.salud.cdmx.gob.mx) enabled FemPowHer to map multidisciplinary women’s justice centers, shelters, and maternity clinics across Mexico.'
          },
          {
            name: 'Inmujeres (Uruguay), Centros Violeta (Ecuador), SLIM / Casa de la Mujer (Bolivia), Ciudad Mujer & R4V Latin America',
            url: 'https://www.r4v.info/es/node/382',
            description:
              'National women’s protection directories from Inmujeres Uruguay (https://www.gub.uy/ministerio-desarrollo-social/inmujeres), Ecuador’s Centros Violeta & Red de Casas de Acogida (https://casasdeacogidaecuador.org), Bolivia’s Casa de la Mujer (https://www.casadelamujer.org.bo), Paraguay’s Ciudad Mujer (https://www.mujer.gov.py), Central America’s INAMU / Ciudad Mujer / CAIMUS networks, and the R4V Regional Humanitarian Service Map made comprehensive Latin American shelter and maternal hospital coverage possible.'
          },
          {
            name: 'OpenStreetMap (OSM) — Global Collaborative Map & Humanitarian Data',
            url: 'https://www.openstreetmap.org',
            description:
              'OpenStreetMap is a community-built, open-source map of the world maintained by local mappers and humanitarian contributors across every continent. Their open geographic infrastructure, street-level geocoding, and live medical facility data power FemPowHer’s interactive map and real-time rural clinic and hospital discovery.'
          }
        ].map((db) =>
          h(
            'div',
            {
              key: db.url,
              className: 'w-full rounded-2xl border-2 p-5 sm:p-6 bg-white shadow-sm space-y-2',
              style: { borderColor: '#CF366C' }
            },
            h(
              'a',
              {
                href: db.url,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-lg sm:text-xl font-bold underline block hover:opacity-80',
                style: { color: '#9F133A' }
              },
              db.name
            ),
            h(
              'p',
              {
                className: 'text-xs sm:text-sm leading-relaxed font-semibold',
                style: { color: '#6E0926' }
              },
              db.description
            ),
            h(
              'a',
              {
                href: db.url,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-xs font-bold underline inline-block pt-1 hover:opacity-80',
                style: { color: '#CF366C' }
              },
              db.url
            )
          )
        )
      )
    )
  );
}
