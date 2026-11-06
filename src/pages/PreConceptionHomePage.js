import React from 'https://esm.sh/react@18.3.1';
import { PregHomePageButtons, renderSubpageBackButton } from './PregnancyHomePage.js?v=133';

const h = React.createElement;

export default function PreConceptionHomePage({
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
      id: 'thinking-about-baby',
      label: tr('preConBtnThinking', "I'm thinking about having a baby!"),
      targetPage: 'ThinkingAboutBabyHomePage',
      gifSrc: '/assets/preconception-thinking.gif?v=133',
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
      id: 'trying-to-have-baby',
      label: tr('preConBtnTrying', "I'm trying to have a baby!"),
      targetPage: 'TryingToHaveBabyHomePage',
      gifSrc: null, // Ready for GIF when uploaded later
      // Tone 2: Warm Rose Blossom Pink (#F8CBE6) — zero outline
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
      id: 'hard-time-getting-pregnant',
      label: tr('preConBtnHardTime', "I'm having a hard time getting pregnant!"),
      targetPage: 'HardTimeGettingPregnantHomePage',
      gifSrc: null, // Ready for GIF when uploaded later
      // Tone 3: Mauve-Rose Pink (#EDA4C6) — zero outline
      backgroundStyle: {
        backgroundColor: '#EDA4C6',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.9)'
      }
    }
  ];

  return h(
    'div',
    { className: 'h-full min-h-full w-full bg-white flex flex-col overflow-hidden' },
    // Top Header Bar: Back Button + Pre-Conception Title (UserLanguageChoice1)
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
          tr('eduBtnPreConception', 'Pre-Conception')
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
