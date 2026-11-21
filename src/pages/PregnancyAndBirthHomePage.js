import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=247';

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

  // 5 Full-Width MakingGifButtons1 Ombré Buttons for Pregnancy & Birth (gifSrc: null ready for GIFs later)
  const pregnancyAndBirthButtons = [
    {
      id: 'pb-pre-conception',
      label: tr('eduBtnPreConception', 'Pre-Conception'),
      targetPage: 'PreConceptionHomePage',
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFEBF4 0%, #FFC2DE 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'pb-pregnancy',
      label: tr('eduBtnPregnancy', 'Pregnancy'),
      targetPage: 'PregnancyHomePage',
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFB8D8 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'pb-childbirth',
      label: tr('eduBtnChildbirth', 'Childbirth'),
      targetPage: 'ChildbirthHomePage',
      gifSrc: null,
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
      id: 'pb-pregnancy-loss',
      label: tr('eduBtnMiscarriage', 'Pregnancy Loss'),
      targetPage: 'MiscarriageHomePage',
      gifSrc: null,
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
      id: 'pb-pregnancy-after-loss',
      label: tr('eduBtnPregnancyAfterLoss', 'Pregnancy After a Loss'),
      targetPage: 'PregnancyAfterLossHomePage',
      gifSrc: null,
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
      id: 'PregnancyAndBirthHomePage',
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
          'h1',
          {
            className: 'text-2xl sm:text-3xl font-extrabold text-center mt-1',
            style: { color: '#9F133A' }
          },
          tr('eduBtnPregnancyAndBirth', 'Pregnancy & Birth')
        )
      )
    ),
    h(MakingGifButtons1, {
      sections: pregnancyAndBirthButtons,
      containerClassName: 'flex-1 w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${pregnancyAndBirthButtons.length}, minmax(165px, 1fr))` },
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    })
  );
}
