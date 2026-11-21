import React from 'https://esm.sh/react@18.3.1';
import { PregHomePageButtons, renderSubpageBackButton } from './PregnancyHomePage.js?v=282';

const h = React.createElement;

export default function MenopauseHomePage({
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
      id: 'what-is-menopause',
      label: tr('menoBtnWhatIs', 'What is menopause?'),
      targetPage: 'WhatIsMenopauseHomePage',
      gifSrc: './assets/menopause-what-is.gif?v=282',
      // Tone 1: Lightest Sunshine Yellow (#FFF27A) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#FFF27A',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.85)'
      }
    },
    {
      id: 'starting-menopause',
      label: tr('menoBtnStarting', "I think I'm starting menopause!"),
      targetPage: 'StartingMenopauseHomePage',
      gifSrc: './assets/menopause-starting.gif?v=282',
      // Tone 2: Warm Buttercup Yellow (#FCE052) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#FCE052',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.9)'
      }
    },
    {
      id: 'hard-time-menopause',
      label: tr('menoBtnHardTime', 'Menopause is giving me a hard time!'),
      targetPage: 'HardTimeMenopauseHomePage',
      gifSrc: './assets/menopause-hard-time.gif?v=282',
      // Tone 3: Deep Marigold Gold (#F6BC28) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#F6BC28',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.85)'
      }
    },
    {
      id: 'after-menopause',
      label: tr('menoBtnAfter', 'My body after menopause!'),
      targetPage: 'AfterMenopauseHomePage',
      gifSrc: './assets/menopause-after.gif?v=282',
      // Tone 4: Darkest Ochre Gold (#D6A124) — zero outline, matches GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#D6A124',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.92)'
      }
    }
  ];

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden' },
    // Top Header Bar: Back Button + Menopause Title (UserLanguageChoice1)
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
          tr('eduBtnMenopause', 'Menopause')
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
