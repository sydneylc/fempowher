import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=270';

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
  // Every button keeps the exact tall PregnancyHomePage height & large GIF character scale, scrolling vertically
  const stdHubButtons = [
    {
      id: 'std-hub-what-are-stds-btn',
      label: tr('stdMenuBtnWhatAre', 'What are STDs & how do I protect myself?'),
      targetPage: 'WhatAreSTDsHomePage1',
      gifSrc: './assets/std-hub-what-are.gif?v=270',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
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
      gifSrc: './assets/std-hub-think-i-have.gif?v=270',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-54px',
        marginRight: '-54px'
      },
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
      gifSrc: './assets/std-hub-just-diagnosed.gif?v=270',
      imgClassName:
        'h-[120%] sm:h-[128%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-58px',
        marginRight: '-58px'
      },
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
      gifSrc: './assets/std-hub-types.gif?v=270',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-36px',
        marginRight: '-36px'
      },
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
      gifSrc: './assets/std-hub-pregnancy.gif?v=270',
      imgClassName:
        'h-[120%] sm:h-[128%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-56px',
        marginRight: '-56px'
      },
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
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden'
    },
    // Top Header Bar: Back Button + STDs Title & Sexually Transmitted Diseases Subtitle
    h(
      'div',
      { className: 'w-full px-4 sm:px-6 pt-3 pb-3 shrink-0 bg-white' },
      h(
        'div',
        { className: 'max-w-5xl w-full mx-auto' },
        renderSubpageBackButton(onBack, t, lang),
        h(
          'h1',
          {
            className: 'text-2xl sm:text-3xl font-extrabold text-center mt-1',
            style: { color: '#9F133A' }
          },
          tr('eduBtnSTDs', 'STDs')
        ),
        h(
          'p',
          {
            className: 'text-xs sm:text-sm text-center font-bold mt-1',
            style: { color: '#6E0926' }
          },
          tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases')
        )
      )
    ),

    // 5 Full-Width First-Person Hub Buttons (MakingGifButtons1) — full PregnancyHomePage height per button
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
