import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=252';

const h = React.createElement;

// Maps every nation in NATION_TO_DEMONYM_MAP / userNationVariable1 to its cultural
// outfit family slug so all 4 buttons on BeingAWomanInHomePage display women dressed in
// distinct traditional/national outfits of that nation doing a different activity per button!
export function resolveBeingAWomanNationOutfitSlug(
  nationName = '',
  demonymName = '',
  countryCenter = null
) {
  const hay = `${nationName} ${demonymName}`.toLowerCase();

  if (hay.includes('worldview') || hay.includes('planet earth')) {
    return 'worldview';
  }

  // 1. Horn of Africa & Nile Valley (Somalia, Sudan, South Sudan, Ethiopia, Eritrea, Djibouti)
  if (
    hay.includes('somal') ||
    hay.includes('sudan') ||
    hay.includes('ethiop') ||
    hay.includes('eritr') ||
    hay.includes('djibout')
  ) {
    return 'horn_africa';
  }

  // 2A. Bhutan & Himalayan Asia (Tibetan-Mongolian Ngalop/Drukpa & South/Southeast Asian Sharchop heritage in woven Kira!)
  if (
    hay.includes('bhutan') ||
    hay.includes('tibet') ||
    hay.includes('dzongkha') ||
    hay.includes('thimphu') ||
    hay.includes('paro') ||
    hay.includes('punakha') ||
    hay.includes('sikkim') ||
    hay.includes('ladakh') ||
    hay.includes('druk') ||
    hay.includes('འབྲུག')
  ) {
    return 'bhutan_himalaya';
  }

  // 2B. Pakistan, Balochistan & Cox's Bazar / Rohingya (mostly hijabi or niqabed Muslim women + Malala-style headscarf & modern bob)
  if (
    hay.includes('pakistan') ||
    hay.includes('cox') ||
    hay.includes('rohingya') ||
    hay.includes('baloch')
  ) {
    return 'pakistan_bangladesh';
  }

  // 2C. Bangladesh (distinct from Pakistan: includes Bangladeshi Hindu women in Bengali sari & red bindi alongside Bangladeshi Muslim women)
  if (
    hay.includes('bangladesh') ||
    hay.includes('dhaka') ||
    hay.includes('chittagong') ||
    hay.includes('sylhet')
  ) {
    return 'bangladesh';
  }

  // 2D. India, Nepal, Sri Lanka & Maldives (mostly Hindu / South Asian women including our Indian menopause elder lady + 1 Muslim woman)
  if (
    hay.includes('india') ||
    hay.includes('nepal') ||
    hay.includes('sri lanka') ||
    hay.includes('maldiv')
  ) {
    return 'india';
  }

  // 3A. Uzbekistan (distinct from Afghanistan: Y2K outfit with long black hair & makeup, fur hat & fur-collared coat, traditional Uzbek braids & doppi)
  if (hay.includes('uzbek')) {
    return 'uzbekistan';
  }

  // 3B. Kyrgyzstan, Kazakhstan, Mongolia, Turkmenistan & Tajikistan (steppe fur hats & fur coats on older grandmothers + young lady with brunette braids & fur hat on top)
  if (
    hay.includes('kyrgyz') ||
    hay.includes('kazakh') ||
    hay.includes('mongol') ||
    hay.includes('turkmen') ||
    hay.includes('tajik')
  ) {
    return 'kyrgyz_kazakh';
  }

  // 3C. Afghanistan, Kurdistan & Caucasus (Afghanistan incorporates 1 azure-blue Sitara/Lithma button alongside its 3 curated Afghan women!)
  if (hay.includes('afghan')) {
    return 'afghanistan';
  }
  if (
    hay.includes('kurd') ||
    hay.includes('armenia') ||
    hay.includes('azerbaijan') ||
    hay.includes('georgia')
  ) {
    return 'central_asia';
  }

  // 4. Middle East & North Africa (Yemen, Oman, Iran, Bahrain, Saudi Arabia, and UAE each incorporate 1 Sitara/Lithma button in their colorway alongside 3 curated MENA women!)
  if (hay.includes('yemen')) {
    return 'yemen';
  }
  if (hay.includes('oman')) {
    return 'oman';
  }
  if (hay.includes('iran') || hay.includes('persian')) {
    return 'iran';
  }
  if (hay.includes('bahrain')) {
    return 'bahrain';
  }
  if (hay.includes('saudi')) {
    return 'saudi_arabia';
  }
  if (hay.includes('emirat') || hay.includes('uae') || hay.includes('dubai')) {
    return 'united_arab_emirates';
  }
  if (
    hay.includes('palestin') ||
    hay.includes('egypt') ||
    hay.includes('morocc') ||
    hay.includes('algeri') ||
    hay.includes('tunis') ||
    hay.includes('liby') ||
    hay.includes('syri') ||
    hay.includes('iraq') ||
    hay.includes('jordan') ||
    hay.includes('leban') ||
    hay.includes('turk') ||
    hay.includes('qatar') ||
    hay.includes('kuwait') ||
    hay.includes('israel') ||
    hay.includes('mauritani')
  ) {
    return 'mena_arab';
  }

  // 5. Southeast Asia (Vietnam, Philippines, Indonesia, Thailand, Cambodia, Myanmar/Burma, Malaysia, Singapore, Laos, Brunei, Timor-Leste)
  if (
    hay.includes('vietnam') ||
    hay.includes('philippin') ||
    hay.includes('filipin') ||
    hay.includes('indonesi') ||
    hay.includes('thai') ||
    hay.includes('cambod') ||
    hay.includes('myanmar') ||
    hay.includes('burm') ||
    hay.includes('malaysi') ||
    hay.includes('singapor') ||
    hay.includes('laos') ||
    hay.includes('lao') ||
    hay.includes('brunei') ||
    hay.includes('timor')
  ) {
    return 'southeast_asia';
  }

  // 6. East Asia (Japan, South Korea, North Korea, China, Taiwan, Hong Kong, Macau)
  if (
    hay.includes('japan') ||
    hay.includes('korea') ||
    hay.includes('chin') ||
    hay.includes('taiwan') ||
    hay.includes('hong kong') ||
    hay.includes('macau') ||
    hay.includes('macao')
  ) {
    return 'east_asia';
  }

  // 7. Andean & Mesoamerican Indigenous Latin America (Peru, Bolivia, Ecuador, Guatemala)
  if (
    hay.includes('peru') ||
    hay.includes('bolivi') ||
    hay.includes('ecuador') ||
    hay.includes('guatemal')
  ) {
    return 'andean_latam';
  }

  // 8. Tropical Latin America & Caribbean (Colombia, Brazil, Mexico, Argentina, Chile, Venezuela, Cuba, Haiti, Jamaica, Dominican Republic, etc.)
  if (
    hay.includes('colombi') ||
    hay.includes('brazil') ||
    hay.includes('mexic') ||
    hay.includes('argentin') ||
    hay.includes('chile') ||
    hay.includes('venezuel') ||
    hay.includes('cuba') ||
    hay.includes('haiti') ||
    hay.includes('jamaic') ||
    hay.includes('dominican') ||
    hay.includes('costa rica') ||
    hay.includes('el salvador') ||
    hay.includes('hondur') ||
    hay.includes('nicaragu') ||
    hay.includes('panam') ||
    hay.includes('paragu') ||
    hay.includes('urugu') ||
    hay.includes('beliz') ||
    hay.includes('guyan') ||
    hay.includes('surinam') ||
    hay.includes('trinidad') ||
    hay.includes('tobago') ||
    hay.includes('barbad') ||
    hay.includes('baham') ||
    hay.includes('puerto rico') ||
    hay.includes('grenad') ||
    hay.includes('saint lucia') ||
    hay.includes('antigua') ||
    hay.includes('dominica')
  ) {
    return 'tropical_latam';
  }

  // 9. Oceania & Pacific (Australia, New Zealand, Papua New Guinea, Fiji, Samoa, Tonga, Vanuatu, Solomon Islands, etc.)
  if (
    hay.includes('australia') ||
    hay.includes('new zealand') ||
    hay.includes('pacific') ||
    hay.includes('samoa') ||
    hay.includes('fiji') ||
    hay.includes('papua') ||
    hay.includes('tonga') ||
    hay.includes('vanuatu') ||
    hay.includes('solomon') ||
    hay.includes('kiribati') ||
    hay.includes('micronesia') ||
    hay.includes('palau') ||
    hay.includes('marshall') ||
    hay.includes('tuvalu') ||
    hay.includes('nauru') ||
    hay.includes('polynesi')
  ) {
    return 'oceania';
  }

  // 10. Eastern & Southern Europe (Spain gets its distinct 4-button set; others use east_south_eu)
  if (hay.includes('spain') || hay.includes('spanish')) {
    return 'spain';
  }
  if (
    hay.includes('ukrain') ||
    hay.includes('poland') ||
    hay.includes('polish') ||
    hay.includes('romani') ||
    hay.includes('russi') ||
    hay.includes('bosni') ||
    hay.includes('albani') ||
    hay.includes('bulgari') ||
    hay.includes('croati') ||
    hay.includes('czech') ||
    hay.includes('hungar') ||
    hay.includes('greec') ||
    hay.includes('greek') ||
    hay.includes('ital') ||
    hay.includes('portug') ||
    hay.includes('belarus') ||
    hay.includes('serbi') ||
    hay.includes('montenegr') ||
    hay.includes('macedoni') ||
    hay.includes('kosov') ||
    hay.includes('moldov') ||
    hay.includes('slovak') ||
    hay.includes('sloven') ||
    hay.includes('estoni') ||
    hay.includes('latvi') ||
    hay.includes('lithuani') ||
    hay.includes('cypr') ||
    hay.includes('malt')
  ) {
    return 'east_south_eu';
  }

  // 11A. United States & Canada (Blonde lady, African American lady, Latina lady, Brunette Muslim lady with loose headscarf)
  if (
    hay.includes('united states') ||
    hay.includes('american') ||
    hay.includes('usa') ||
    hay.includes('canad')
  ) {
    return 'usa_canada';
  }

  // 11B. Nordic & Western Europe (Ireland, Finland, Norway, and UK each have their own distinct 4-button diverse set; others use nordic_west_eu)
  if (hay.includes('ireland') || hay.includes('irish')) {
    return 'ireland';
  }
  if (hay.includes('finland') || hay.includes('finnish')) {
    return 'finland';
  }
  if (hay.includes('norw')) {
    return 'norway';
  }
  if (
    hay.includes('united kingdom') ||
    hay.includes('british') ||
    hay.includes('england') ||
    hay.includes('scotland') ||
    hay.includes('wales')
  ) {
    return 'united_kingdom';
  }
  if (
    hay.includes('swed') ||
    hay.includes('denmark') ||
    hay.includes('danish') ||
    hay.includes('franc') ||
    hay.includes('french') ||
    hay.includes('german') ||
    hay.includes('netherland') ||
    hay.includes('dutch') ||
    hay.includes('belgi') ||
    hay.includes('austri') ||
    hay.includes('swiss') ||
    hay.includes('switzerland') ||
    hay.includes('iceland') ||
    hay.includes('luxembourg') ||
    hay.includes('monaco') ||
    hay.includes('andorra') ||
    hay.includes('liechtenstein') ||
    hay.includes('greenland')
  ) {
    return 'nordic_west_eu';
  }

  // 11C. South Africa & Namibia (each incorporates 1 woman of White European descent alongside 3 curated Southern African women!)
  if (hay.includes('south africa')) {
    return 'south_africa';
  }
  if (hay.includes('namibi')) {
    return 'namibia';
  }

  // 12. Continent-Aware Coordinate Fallback (if an unrecognized town, island, or country name is passed):
  //     Ensures any location in Asia shows Asian women, any location in Europe shows European women,
  //     any location in the Americas shows American/Latin American women, and only locations in Africa show African women!
  if (Array.isArray(countryCenter) && countryCenter.length >= 2) {
    const lat = Number(countryCenter[0]);
    const lng = Number(countryCenter[1]);
    if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
      // Asia bounding checks
      if (lng >= 60 && lng <= 150 && lat >= -11 && lat <= 56) {
        if (lat >= 26 && lat <= 36 && lng >= 76 && lng <= 96) {
          return 'bhutan_himalaya';
        }
        if (lat >= 5 && lat <= 34 && lng >= 66 && lng < 92.5) {
          return 'india';
        }
        if (lat >= -11 && lat < 24 && lng >= 92 && lng <= 141) {
          return 'southeast_asia';
        }
        if (lat >= 35 && lat <= 55 && lng >= 50 && lng < 106) {
          return 'kyrgyz_kazakh';
        }
        return 'east_asia';
      }
      // Middle East & North Africa bounding check
      if (
        (lat >= 12 && lat <= 42 && lng >= 25 && lng < 60) ||
        (lat >= 18 && lat <= 37.5 && lng >= -18 && lng < 25)
      ) {
        return 'mena_arab';
      }
      // Europe bounding check
      if (lat >= 35 && lat <= 72 && lng >= -25 && lng < 60) {
        return lng >= 16 ? 'east_south_eu' : 'nordic_west_eu';
      }
      // North America bounding check
      if (lat >= 24 && lat <= 75 && lng >= -170 && lng <= -50) {
        return 'usa_canada';
      }
      // Latin America & Caribbean bounding check
      if (lat >= -56 && lat < 24 && lng >= -120 && lng <= -30) {
        return 'tropical_latam';
      }
      // Oceania & Pacific bounding check
      if ((lat >= -50 && lat <= 0 && lng >= 110 && lng <= 180) || lng > 150 || lng < -150) {
        return 'oceania';
      }
    }
  }

  // 13. West, Central, East & Southern Africa (Nigeria, DRC/Congo, Ghana, Senegal, Kenya, Tanzania, Uganda, Rwanda, Burundi, South Africa, Zimbabwe, Zambia, Malawi, Mozambique, Angola, Cameroon, Mali, Niger, Burkina Faso, Chad, etc.)
  return 'west_central_africa';
}

export default function BeingAWomanInHomePage({
  onBack,
  userNationVariable1 = 'Somalia',
  userNationVariable2 = 'Somali',
  UserLanguageChoice1 = null,
  beingAWomanContent = {},
  roleModelCountryCenter = [5.1521, 46.1996],
  roleModelCountryZoom = 6,
  customTopLabel = 'Being A Woman In',
  customMainTitle = null,
  lang = 'en',
  t = {}
}) {
  // Starts at null on the main 4-button MakingGifButtons1 menu; clicking a button opens its subpage
  const [beingWomanSubTab, setBeingWomanSubTab] = useState(null);
  const [selectedRoleModel, setSelectedRoleModel] = useState(null);

  const roleModelMapContainerRef = useRef(null);
  const roleModelLeafletMapRef = useRef(null);

  useEffect(() => {
    if (beingWomanSubTab !== 'role-models') {
      if (roleModelLeafletMapRef.current) {
        roleModelLeafletMapRef.current.remove();
        roleModelLeafletMapRef.current = null;
      }
      return;
    }
    const L = window.L;
    if (!L || !roleModelMapContainerRef.current) return;

    if (roleModelLeafletMapRef.current) {
      roleModelLeafletMapRef.current.remove();
      roleModelLeafletMapRef.current = null;
    }

    const rmMap = L.map(roleModelMapContainerRef.current, {
      center: roleModelCountryCenter || [5.1521, 46.1996],
      zoom: roleModelCountryZoom || 6,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors • FemPowHer Role Models Map',
      maxZoom: 18
    }).addTo(rmMap);

    const roleModelsList = beingAWomanContent?.roleModels || [];
    roleModelsList.forEach((rm) => {
      if (typeof rm.lat !== 'number' || typeof rm.lng !== 'number') return;
      const isSelected = selectedRoleModel && selectedRoleModel.id === rm.id;
      const pinHtml = `<div style="
        background:${isSelected ? '#6E0926' : '#E30B52'};
        color:#FFFFFF;
        border:2.5px solid #FEACEC;
        border-radius:9999px;
        padding:3px 9px;
        font-family:'Kefa',serif;
        font-size:11px;
        font-weight:800;
        white-space:nowrap;
        box-shadow:0 3px 10px rgba(159,19,58,0.45);
        cursor:pointer;
      ">${rm.name}</div>`;
      const icon = L.divIcon({
        className: 'fempowher-rolemodel-pin',
        html: pinHtml,
        iconSize: [120, 28],
        iconAnchor: [60, 14]
      });
      const marker = L.marker([rm.lat, rm.lng], { icon }).addTo(rmMap);
      marker.on('click', () => {
        setSelectedRoleModel(rm);
      });
    });

    setTimeout(() => {
      try {
        rmMap.invalidateSize();
      } catch (e) {}
    }, 120);

    roleModelLeafletMapRef.current = rmMap;

    return () => {
      if (roleModelLeafletMapRef.current) {
        roleModelLeafletMapRef.current.remove();
        roleModelLeafletMapRef.current = null;
      }
    };
  }, [
    beingWomanSubTab,
    userNationVariable1,
    selectedRoleModel,
    roleModelCountryCenter,
    roleModelCountryZoom
  ]);

  // 4 Full-Width PregHomePageButtons (MakingGifButtons1) for Being A Woman In [userNationVariable1] / Worldview
  // Dynamically selects the nation's 4 distinct traditional/cultural outfits & 4 distinct activities!
  const nationOutfitSlug = resolveBeingAWomanNationOutfitSlug(
    userNationVariable1,
    userNationVariable2,
    roleModelCountryCenter
  );
  const isWorldview =
    nationOutfitSlug === 'worldview' ||
    String(userNationVariable1 || '').toLowerCase() === 'worldview';

  const beingAWomanButtons = [
    {
      id: 'gender-outlook',
      label: isWorldview ? 'Gender Outlook in Worldview' : 'Gender Outlook',
      gifSrc: `./assets/bw-${nationOutfitSlug}-outlook.gif?v=252`,
      imgClassName: isWorldview
        ? 'h-[106%] sm:h-[116%] w-auto max-w-none object-contain select-none pointer-events-none'
        : 'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: isWorldview
        ? { marginLeft: '-16px', marginRight: '-12px' }
        : { marginLeft: '-48px', marginRight: '-48px' },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFEBF4 0%, #FFC4E0 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'traditional-health',
      label: `Female Health in ${userNationVariable1}`,
      gifSrc: `./assets/bw-${nationOutfitSlug}-health.gif?v=252`,
      imgClassName: isWorldview
        ? 'h-[106%] sm:h-[116%] w-auto max-w-none object-contain select-none pointer-events-none'
        : 'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: isWorldview
        ? { marginLeft: '-16px', marginRight: '-12px' }
        : { marginLeft: '-52px', marginRight: '-52px' },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFB5D6 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'role-models',
      label: `Female Role Models from ${userNationVariable1}`,
      gifSrc: `./assets/bw-${nationOutfitSlug}-rolemodels.gif?v=252`,
      imgClassName: isWorldview
        ? 'h-[106%] sm:h-[116%] w-auto max-w-none object-contain select-none pointer-events-none'
        : 'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: isWorldview
        ? { marginLeft: '-16px', marginRight: '-12px' }
        : { marginLeft: '-50px', marginRight: '-50px' },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #EC4899 0%, #BE185D 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(88, 8, 42, 0.7)'
      }
    },
    {
      id: 'health-alerts',
      label: `Women’s Health Alerts in ${userNationVariable1}`,
      gifSrc: `./assets/bw-${nationOutfitSlug}-alerts.gif?v=252`,
      imgClassName: isWorldview
        ? 'h-[106%] sm:h-[116%] w-auto max-w-none object-contain select-none pointer-events-none'
        : 'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: isWorldview
        ? { marginLeft: '-16px', marginRight: '-12px' }
        : { marginLeft: '-44px', marginRight: '-44px' },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #9F133A 0%, #6E0926 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(42, 2, 16, 0.78)'
      }
    }
  ];

  // MAIN MENU VIEW: 4 Full-Width MakingGifButtons1 Buttons (Zero info cards dumped below)
  if (!beingWomanSubTab) {
    return h(
      'div',
      {
        id: 'BeingAWomanInHomePage',
        className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden'
      },
      h(
        'div',
        { className: 'w-full px-4 sm:px-6 pt-3 pb-3 shrink-0 bg-white' },
        h(
          'div',
          { className: 'max-w-5xl w-full mx-auto' },
          renderSubpageBackButton(onBack, t, lang),
          h(
            'div',
            { className: 'text-center mt-1' },
            h(
              'div',
              { className: 'text-xs font-bold uppercase tracking-widest', style: { color: '#CF366C' } },
              customTopLabel
            ),
            h(
              'h1',
              { className: 'text-2xl sm:text-3xl font-extrabold mt-0.5', style: { color: '#9F133A' } },
              customMainTitle || userNationVariable1
            )
          )
        )
      ),
      h(MakingGifButtons1, {
        sections: beingAWomanButtons,
        onSelectSection: (sec) => {
          if (sec && sec.id) {
            setBeingWomanSubTab(sec.id);
          }
        }
      })
    );
  }

  // SUBPAGE VIEW: Opened when clicking one of the 4 MakingGifButtons1 buttons
  const activeSubTitle =
    beingWomanSubTab === 'gender-outlook'
      ? isWorldview
        ? 'Gender Outlook in Worldview'
        : `Gender Outlook • ${userNationVariable1}`
      : beingWomanSubTab === 'traditional-health'
      ? `Female Health in ${userNationVariable1}`
      : beingWomanSubTab === 'role-models'
      ? `Female Role Models from ${userNationVariable1}`
      : `Women’s Health Alerts in ${userNationVariable1}`;

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6' },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto space-y-5' },
      renderSubpageBackButton(() => setBeingWomanSubTab(null), t, lang),

      // Subpage Header
      h(
        'div',
        { className: 'text-center border-b-2 pb-3', style: { borderColor: '#FEACEC' } },
        h(
          'div',
          { className: 'text-xs font-bold uppercase tracking-widest', style: { color: '#CF366C' } },
          `${customTopLabel} ${customMainTitle || userNationVariable1}`
        ),
        h(
          'h1',
          { className: 'text-2xl sm:text-3xl font-extrabold mt-0.5', style: { color: '#9F133A' } },
          activeSubTitle
        )
      ),

      // SUBPAGE 1: GENDER OUTLOOK HOMEPAGE (All country gender outlook info lives inside here)
      beingWomanSubTab === 'gender-outlook' &&
        h(
          'div',
          { className: 'space-y-4' },
          h(
            'div',
            {
              className: 'p-4 rounded-2xl border-2',
              style: { backgroundColor: '#FFF5F8', borderColor: '#E30B52' }
            },
            h(
              'div',
              { className: 'text-xs font-extrabold uppercase tracking-wider mb-1', style: { color: '#E30B52' } },
              'Important Notice — Educational Context Only (Not Legal Advice)'
            ),
            h(
              'p',
              { className: 'text-xs sm:text-sm font-bold leading-relaxed', style: { color: '#9F133A' } },
              `This section does not offer legal advice. How laws, family courts, police, and customary or religious rules operate in ${userNationVariable1} is subjective, varies significantly by local community, judge, or region, and can change over time.`
            )
          ),

          (beingAWomanContent?.genderOutlook || []).map((item) =>
            h(
              'div',
              {
                key: item.id,
                className: 'p-4 sm:p-5 rounded-2xl border-2 space-y-3',
                style: { backgroundColor: '#FFFFFF', borderColor: '#FEACEC' }
              },
              h(
                'h4',
                { className: 'text-base sm:text-lg font-extrabold', style: { color: '#9F133A' } },
                item.title
              ),
              h(
                'p',
                { className: 'text-xs sm:text-sm font-bold leading-relaxed', style: { color: '#CF366C' } },
                item.summary
              ),
              h(
                'ul',
                { className: 'space-y-2 pt-1' },
                (item.keyRealities || []).map((pt, i) =>
                  h(
                    'li',
                    {
                      key: i,
                      className: 'text-xs sm:text-sm font-bold leading-relaxed p-3 rounded-xl',
                      style: { backgroundColor: '#FFF5FC', color: '#9F133A' }
                    },
                    pt
                  )
                )
              )
            )
          ),

          h(
            'div',
            {
              className: 'p-4 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-3',
              style: { backgroundColor: '#9F133A', borderColor: '#FEACEC' }
            },
            h(
              'div',
              { className: 'text-center sm:text-left' },
              h(
                'div',
                { className: 'text-xs font-bold uppercase tracking-wider', style: { color: '#FEACEC' } },
                `Connected Section • ${userNationVariable2} Role Models`
              ),
              h(
                'div',
                { className: 'text-sm sm:text-base font-extrabold text-white mt-0.5' },
                `Discover Female Role Models from ${userNationVariable1} on the Role Models Map`
              )
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => setBeingWomanSubTab('role-models'),
                className: 'px-5 py-2.5 rounded-full font-extrabold text-xs sm:text-sm shrink-0 shadow-md transition hover:opacity-95 cursor-pointer',
                style: { backgroundColor: '#FEACEC', color: '#9F133A' }
              },
              `Female Role Models from ${userNationVariable1} →`
            )
          )
        ),

      // SUBPAGE 2: FEMALE HEALTH IN [userNationVariable1] (Emptied info — ready for custom content)
      beingWomanSubTab === 'traditional-health' &&
        h('div', { className: 'py-6' }),

      // SUBPAGE 3: FEMALE ROLE MODELS FROM [userNationVariable1] (Dedicated Map + Bios)
      beingWomanSubTab === 'role-models' &&
        h(
          'div',
          { className: 'space-y-4' },
          h(
            'div',
            {
              className: 'p-4 rounded-2xl border',
              style: { backgroundColor: '#FFF5FC', borderColor: '#FEACEC' }
            },
            h(
              'h4',
              { className: 'text-base sm:text-lg font-extrabold', style: { color: '#9F133A' } },
              `Female Role Models from ${userNationVariable1} (${userNationVariable2} Heritage)`
            ),
            h(
              'p',
              { className: 'text-xs sm:text-sm font-bold mt-1 leading-relaxed', style: { color: '#CF366C' } },
              `Tap any woman’s name pin on this dedicated ${userNationVariable1} Role Model Map — or select her card below — to open her full biography and see where she is from.`
            )
          ),

          h(
            'div',
            {
              className: 'w-full rounded-2xl overflow-hidden border-2 shadow-inner',
              style: { height: '290px', borderColor: '#9F133A' }
            },
            h('div', {
              ref: roleModelMapContainerRef,
              style: { width: '100%', height: '100%' }
            })
          ),

          selectedRoleModel &&
            h(
              'div',
              {
                className: 'p-5 rounded-2xl border-2 space-y-2.5 shadow-md',
                style: { backgroundColor: '#FFF0FA', borderColor: '#9F133A' }
              },
              h(
                'div',
                { className: 'flex items-start justify-between gap-2' },
                h(
                  'div',
                  null,
                  h(
                    'div',
                    { className: 'text-xs font-extrabold uppercase tracking-wider', style: { color: '#CF366C' } },
                    `${selectedRoleModel.birthplace} • ${selectedRoleModel.ethnicity}`
                  ),
                  h(
                    'h5',
                    { className: 'text-lg sm:text-xl font-extrabold mt-0.5', style: { color: '#9F133A' } },
                    selectedRoleModel.name
                  ),
                  h(
                    'div',
                    { className: 'text-xs sm:text-sm font-bold', style: { color: '#6E0926' } },
                    selectedRoleModel.headline
                  )
                ),
                h(
                  'button',
                  {
                    type: 'button',
                    onClick: () => setSelectedRoleModel(null),
                    className: 'px-3 py-1 rounded-full text-xs font-bold text-white cursor-pointer',
                    style: { backgroundColor: '#9F133A' }
                  },
                  'Close Bio'
                )
              ),
              h(
                'p',
                { className: 'text-xs sm:text-sm font-bold leading-relaxed pt-1', style: { color: '#9F133A' } },
                selectedRoleModel.bio
              )
            ),

          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
            (beingAWomanContent?.roleModels || []).map((rm) => {
              const isPicked = selectedRoleModel && selectedRoleModel.id === rm.id;
              return h(
                'button',
                {
                  key: rm.id,
                  type: 'button',
                  onClick: () => setSelectedRoleModel(rm),
                  className: 'text-left p-4 rounded-2xl border-2 transition shadow-sm hover:opacity-95 cursor-pointer',
                  style: isPicked
                    ? { backgroundColor: '#9F133A', color: '#FFFFFF', borderColor: '#FEACEC' }
                    : { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC' }
                },
                h(
                  'div',
                  {
                    className: 'text-[11px] font-bold uppercase tracking-wider',
                    style: { color: isPicked ? '#FEACEC' : '#CF366C' }
                  },
                  rm.birthplace
                ),
                h('div', { className: 'text-base font-extrabold mt-0.5' }, rm.name),
                h(
                  'div',
                  {
                    className: 'text-xs font-bold mt-1 leading-snug',
                    style: { color: isPicked ? '#FFFFFF' : '#9F133A' }
                  },
                  rm.headline
                ),
                h(
                  'div',
                  {
                    className: 'text-[11px] font-extrabold underline mt-2',
                    style: { color: isPicked ? '#FEACEC' : '#E30B52' }
                  },
                  'Open Full Biography & Pin on Map →'
                )
              );
            })
          )
        ),

      // SUBPAGE 4: WOMEN'S HEALTH ALERTS IN [userNationVariable1]
      beingWomanSubTab === 'health-alerts' &&
        h(
          'div',
          { className: 'space-y-4' },
          h(
            'div',
            {
              className: 'p-4 rounded-2xl border',
              style: { backgroundColor: '#FFF5FC', borderColor: '#FEACEC' }
            },
            h(
              'h4',
              { className: 'text-base sm:text-lg font-extrabold', style: { color: '#9F133A' } },
              `Women’s Health Alerts in ${userNationVariable1}`
            ),
            h(
              'p',
              { className: 'text-xs sm:text-sm font-bold mt-1 leading-relaxed', style: { color: '#CF366C' } },
              `Maternal, reproductive, and women’s public health notices for ${userNationVariable1}.`
            )
          ),
          (beingAWomanContent?.healthAlerts || []).map((alertItem) =>
            h(
              'div',
              {
                key: alertItem.id,
                className: 'p-4 sm:p-5 rounded-2xl border-2 space-y-2.5',
                style: { backgroundColor: '#FFFFFF', borderColor: '#FEACEC' }
              },
              alertItem.severity &&
                h(
                  'span',
                  {
                    className: 'inline-block text-[11px] font-extrabold uppercase px-3 py-1 rounded-full text-white',
                    style: { backgroundColor: '#E30B52' }
                  },
                  alertItem.severity
                ),
              h(
                'h5',
                { className: 'text-base sm:text-lg font-extrabold', style: { color: '#9F133A' } },
                alertItem.title
              ),
              h(
                'p',
                { className: 'text-xs sm:text-sm font-bold leading-relaxed', style: { color: '#9F133A' } },
                alertItem.body
              )
            )
          )
        )
    )
  );
}
