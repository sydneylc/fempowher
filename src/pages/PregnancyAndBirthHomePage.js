import React from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=157';

const h = React.createElement;

export default function PregnancyAndBirthHomePage({
  onBack,
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  const hubButtons = [
    {
      id: 'pre-conception',
      page: 'PreConceptionHomePage',
      label: tr('eduBtnPreConception', 'Pre-Conception'),
      shade: 'standard'
    },
    {
      id: 'pregnancy',
      page: 'PregnancyHomePage',
      label: tr('eduBtnPregnancy', 'Pregnancy'),
      shade: 'standard'
    },
    {
      id: 'childbirth',
      page: 'ChildbirthHomePage',
      label: tr('eduBtnChildbirth', 'Childbirth'),
      shade: 'standard'
    },
    {
      id: 'pregnancy-loss',
      page: 'MiscarriageHomePage',
      label: tr('eduBtnMiscarriage', 'Pregnancy Loss'),
      shade: 'lighter'
    },
    {
      id: 'pregnancy-after-loss',
      page: 'PregnancyAfterLossHomePage',
      label: tr('eduBtnPregnancyAfterLoss', 'Pregnancy After a Loss'),
      shade: 'lighter'
    }
  ];

  return h(
    'div',
    { className: 'min-h-full w-full bg-white flex flex-col p-4 sm:p-6' },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto space-y-6' },
      renderSubpageBackButton(onBack, t, lang),
      h(
        'h1',
        {
          className: 'text-2xl sm:text-3xl font-extrabold text-center mt-2',
          style: { color: '#9F133A' }
        },
        tr('eduBtnPregnancyAndBirth', 'Pregnancy & Birth')
      ),
      h(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2' },
        hubButtons.map((btn, idx) => {
          const baseBg =
            btn.shade === 'lighter'
              ? 'linear-gradient(135deg, #CF366C 0%, #EA689A 100%)'
              : 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)';
          const isLastOdd = idx === hubButtons.length - 1 && hubButtons.length % 2 === 1;
          return h(
            'button',
            {
              key: btn.id,
              type: 'button',
              onClick: () => {
                if (onNavigateEducationPage) {
                  onNavigateEducationPage(btn.page);
                }
              },
              className: `${
                isLastOdd ? 'sm:col-span-2 sm:max-w-md sm:mx-auto ' : ''
              }w-full h-16 sm:h-20 px-5 py-3 rounded-2xl text-sm sm:text-base font-bold transition text-center flex items-center justify-center shadow-md cursor-pointer leading-snug hover:opacity-95`,
              style: {
                background: baseBg,
                color: '#FFFFFF',
                border: '2px solid #FEACEC'
              }
            },
            btn.label
          );
        })
      )
    )
  );
}
