import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=215';

const h = React.createElement;

export default function BeingAWomanInHomePage({
  onBack,
  userNationVariable1 = 'Somalia',
  userNationVariable2 = 'Somali',
  beingAWomanContent = {},
  roleModelCountryCenter = [5.1521, 46.1996],
  roleModelCountryZoom = 6,
  customTopLabel = 'Being A Woman In',
  customMainTitle = null,
  lang = 'en',
  t = {}
}) {
  const [beingWomanSubTab, setBeingWomanSubTab] = useState('gender-outlook');
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

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6' },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto space-y-5' },
      renderSubpageBackButton(onBack, t, lang),

      // Header inside BeingAWomanInHomePage
      h(
        'div',
        { className: 'text-center border-b-2 pb-3', style: { borderColor: '#FEACEC' } },
        h(
          'div',
          { className: 'text-xs font-bold uppercase tracking-widest', style: { color: '#CF366C' } },
          customTopLabel
        ),
        h(
          'h1',
          { className: 'text-2xl sm:text-4xl font-extrabold mt-0.5', style: { color: '#9F133A' } },
          customMainTitle || userNationVariable1
        )
      ),

      // 4 Connected Sub-Section Buttons:
      //   1. Gender Outlook
      //   2. Traditional [userNationVariable2] Female Health
      //   3. Female Role Models From Where You Are
      //   4. Women’s Health Alerts in [userNationVariable1]
      h(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5' },
        [
          { id: 'gender-outlook', label: 'Gender Outlook' },
          {
            id: 'traditional-health',
            label: `Traditional ${userNationVariable2} Female Health`
          },
          {
            id: 'role-models',
            label: 'Female Role Models From Where You Are'
          },
          {
            id: 'health-alerts',
            label: `Women’s Health Alerts in ${userNationVariable1}`
          }
        ].map((sub) => {
          const isActiveSub = beingWomanSubTab === sub.id;
          return h(
            'button',
            {
              key: sub.id,
              type: 'button',
              onClick: () => setBeingWomanSubTab(sub.id),
              className: 'px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition shadow-sm text-center',
              style: isActiveSub
                ? {
                    backgroundColor: '#9F133A',
                    color: '#FFFFFF',
                    border: '2px solid #FEACEC'
                  }
                : {
                    backgroundColor: '#FFF0FA',
                    color: '#9F133A',
                    border: '2px solid #CF366C'
                  }
            },
            sub.label
          );
        })
      ),

      // SUB-SECTION 1: GENDER OUTLOOK
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
                `Discover Female Role Models From ${userNationVariable1} on the Role Models Map`
              )
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => setBeingWomanSubTab('role-models'),
                className: 'px-5 py-2.5 rounded-full font-extrabold text-xs sm:text-sm shrink-0 shadow-md transition hover:opacity-95',
                style: { backgroundColor: '#FEACEC', color: '#9F133A' }
              },
              'Female Role Models From Where You Are →'
            )
          )
        ),

      // SUB-SECTION 2: TRADITIONAL [userNationVariable2] FEMALE HEALTH
      beingWomanSubTab === 'traditional-health' &&
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
              `Traditional ${userNationVariable2} Female Health`
            ),
            h(
              'p',
              { className: 'text-xs sm:text-sm font-bold mt-1 leading-relaxed', style: { color: '#CF366C' } },
              `Cultural practices, postpartum recovery traditions, community care circles, and traditional female health customs across ${userNationVariable1}.`
            )
          ),
          (beingAWomanContent?.traditionalHealth || []).map((trad) =>
            h(
              'div',
              {
                key: trad.id,
                className: 'p-4 sm:p-5 rounded-2xl border-2 space-y-3',
                style: { backgroundColor: '#FFFFFF', borderColor: '#FEACEC' }
              },
              h(
                'h5',
                { className: 'text-base sm:text-lg font-extrabold', style: { color: '#9F133A' } },
                trad.title
              ),
              h(
                'p',
                { className: 'text-xs sm:text-sm font-bold leading-relaxed', style: { color: '#9F133A' } },
                trad.body
              ),
              trad.healthNote &&
                h(
                  'div',
                  {
                    className: 'p-3 rounded-xl border text-xs sm:text-sm font-bold leading-relaxed',
                    style: { backgroundColor: '#FFF0FA', borderColor: '#CF366C', color: '#9F133A' }
                  },
                  trad.healthNote
                )
            )
          )
        ),

      // SUB-SECTION 3: FEMALE ROLE MODELS FROM WHERE YOU ARE (Dedicated Map + Bios)
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
              `Female Role Models From ${userNationVariable1} (${userNationVariable2} Heritage)`
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
                    className: 'px-3 py-1 rounded-full text-xs font-bold text-white',
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
                  className: 'text-left p-4 rounded-2xl border-2 transition shadow-sm hover:opacity-95',
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

      // SUB-SECTION 4: WOMEN'S HEALTH ALERTS IN [userNationVariable1]
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
