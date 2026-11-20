import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=226';

const h = React.createElement;

export default function STDMenuHomePage({
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

  // 5 Full-Width MakingGifButtons1 First-Person Hub Buttons for STDs
  const stdHubButtons = [
    {
      id: 'std-hub-what-are-stds-btn',
      label: tr('stdMenuBtnWhatAre', 'What are STDs & how do I protect myself?'),
      targetPage: 'WhatAreSTDsHomePage1',
      gifSrc: './assets/std-hub-what-are.gif',
      gifAlt: 'Yemeni woman in traditional embroidered headdress curious about STD protection with a teal shield',
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFE8F5 0%, #FFBDE2 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'std-hub-think-i-have-btn',
      label: tr('stdMenuBtnThinkIHave', 'I think I might have an STD!'),
      targetPage: 'ThinkIHaveSTDHomePage1',
      gifSrc: './assets/std-hub-think-i-have.gif',
      gifAlt: 'Blonde Finnish woman freaking out with worried eyes and an amber-orange alert bubble',
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFB8D9 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'std-hub-just-diagnosed-btn',
      label: tr('stdMenuBtnJustDiagnosed', 'I just got diagnosed with an STD!'),
      targetPage: 'JustDiagnosedSTDHomePage1',
      gifSrc: './assets/std-hub-just-diagnosed.gif',
      gifAlt: 'Polynesian woman with plumeria flower holding a care plan card and treatment bottle with healing hearts',
      backgroundStyle: {
        background: 'linear-gradient(180deg, #EC4899 0%, #C82368 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(108, 10, 50, 0.65)'
      }
    },
    {
      id: 'std-hub-types-of-stds-btn',
      label: tr('stdMenuBtnTypes', 'Types of STDs'),
      targetPage: 'TypesOfSTDsHomePage1',
      gifSrc: './assets/std-hub-types.gif',
      gifAlt: 'Golden magnifying glass lens showcasing all 8 animated STD characters',
      backgroundStyle: {
        background: 'linear-gradient(180deg, #B81D5B 0%, #8E1145 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(64, 5, 28, 0.72)'
      }
    },
    {
      id: 'std-hub-stds-and-pregnancy-btn',
      label: tr('stdMenuBtnPregnancy', 'STDs & Pregnancy'),
      targetPage: 'STDsAndPregnancyHomePage1',
      gifSrc: './assets/std-hub-pregnancy.gif',
      gifAlt: 'Pregnant Central Asian woman in embroidered Doppa cap cradling her belly with a royal-blue prenatal care badge',
      backgroundStyle: {
        background: 'linear-gradient(180deg, #7C1040 0%, #58092B 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(36, 2, 16, 0.78)'
      }
    }
  ];

  return h(
    'div',
    {
      id: 'STDMenuHomePage',
      className: 'h-full min-h-full w-full bg-white flex flex-col overflow-hidden'
    },
    // Top Header Bar: Back Button + STDs Title & Sexually Transmitted Diseases Subtitle
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
          tr('eduBtnSTDs', 'STDs')
        ),
        h(
          'p',
          {
            className: 'text-xs sm:text-sm text-center font-bold mt-0.5',
            style: { color: '#6E0926' }
          },
          tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases')
        )
      )
    ),

    // 5 Full-Width First-Person Hub Buttons (MakingGifButtons1) — exact same full-screen proportional fit as Menopause & Menstrual Cycle
    h(MakingGifButtons1, {
      sections: stdHubButtons,
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    })
  );
}
