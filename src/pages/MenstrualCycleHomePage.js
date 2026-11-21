import React from 'https://esm.sh/react@18.3.1';
import { PregHomePageButtons, renderSubpageBackButton } from './PregnancyHomePage.js?v=256';

const h = React.createElement;

export default function MenstrualCycleHomePage({
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

  const fullScreenSections = [
    {
      id: 'first-period',
      label: tr('cycleBtnFirstPeriod', 'I got my first period!'),
      targetPage: 'FirstPeriodHomePage',
      gifSrc: './assets/menstrual-first-period.gif?v=256',
      // Tone 1: Soft Petal Pink (#FCE4F4) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#FCE4F4',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.85)'
      }
    },
    {
      id: 'my-cycle',
      label: tr('cycleBtnMyCycle', 'My cycle!'),
      targetPage: 'MyCycleSubHomePage',
      gifSrc: './assets/menstrual-my-cycle.gif?v=256',
      // Tone 2: Warm Rose Blossom Pink (#F8CBE6) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#F8CBE6',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.9)'
      }
    },
    {
      id: 'periods-worst',
      label: tr('cycleBtnPeriodsWorst', 'My periods are the worst!'),
      targetPage: 'PainfulPeriodsHomePage',
      gifSrc: './assets/menstrual-periods-worst.gif?v=256',
      // Tone 3: Mauve-Rose Pink (#EDA4C6) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#EDA4C6',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.85)'
      }
    },
    {
      id: 'period-stopped',
      label: tr('cycleBtnPeriodStopped', 'My period stopped!'),
      targetPage: 'PeriodStoppedHomePage',
      gifSrc: './assets/menstrual-period-stopped.gif?v=256',
      // Tone 4: Deep Berry Rose Pink (#D96B98) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#D96B98',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'fertility-and-my-cycle',
      label: tr('cycleBtnFertilityAndMyCycle', 'Fertility and My Cycle'),
      targetPage: 'FertilityAndMyCycleHomePage1',
      gifSrc: null,
      // Tone 5: Rich Velvet Berry Rose (#C45182) — MakingGifButtons1 style ready for future GIF
      backgroundStyle: {
        backgroundColor: '#C45182',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 10px rgba(110, 9, 45, 0.55)'
      }
    }
  ];

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden' },
    // Top Header Bar: Back Button + Menstrual Cycle Title (UserLanguageChoice1)
    h(
      'div',
      { className: 'w-full px-4 sm:px-6 pt-3 pb-2 shrink-0 bg-white' },
      h(
        'div',
        { className: 'max-w-5xl w-full mx-auto' },
        renderSubpageBackButton(onBack, t, lang),
        h(
          'h1',
          {
            className: 'text-2xl sm:text-3xl font-extrabold text-center mt-0.5',
            style: { color: '#9F133A' }
          },
          tr('eduBtnMenstrualCycle', 'Menstrual Cycle')
        )
      )
    ),
    h(PregHomePageButtons, {
      sections: fullScreenSections,
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    })
  );
}
