import React from 'https://esm.sh/react@18.3.1';
import { PregHomePageButtons, renderSubpageBackButton } from './PregnancyHomePage.js?v=136';

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
      gifSrc: '/assets/preconception-thinking.gif?v=136',
      // Tone 1: Original Soft Petal Pink (#FCE4F4) — zero outline, matches GIF background seamlessly
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
      gifSrc: '/assets/preconception-trying.gif?v=136',
      // Positioned slightly lower so the South Asian woman's head fits comfortably across all screen sizes
      imgClassName: 'h-[98%] sm:h-[102%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: { transform: 'translateY(4%)' },
      // Tone 2: Original Warm Reddish-Orange (#EC6A4B) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#EC6A4B',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 245, 240, 0.92)'
      }
    },
    {
      id: 'hard-time-getting-pregnant',
      label: tr('preConBtnHardTime', "I'm having a hard time getting pregnant!"),
      targetPage: 'HardTimeGettingPregnantHomePage',
      gifSrc: '/assets/preconception-hard-time.gif?v=136',
      // Tone 3: Original Warm Rose-Red (#D76070) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#D76070',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 245, 248, 0.92)'
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
