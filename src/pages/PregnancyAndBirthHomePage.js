import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=290';

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

  // 5 Full-Width MakingGifButtons1 Ombré Buttons for Pregnancy & Birth (Very Light Oranges to Light Yellow Ombré)
  const pregnancyAndBirthButtons = [
    {
      id: 'pb-pre-conception',
      label: tr('eduBtnPreConception', 'Pre-Conception'),
      targetPage: 'PreConceptionHomePage',
      gifSrc: './assets/pb-preconception.gif?v=290',
      imgClassName: 'w-full h-full object-contain',
      imgStyle: { objectPosition: 'center center', transform: 'scale(1.18)' },
      backgroundStyle: {
        backgroundColor: '#FFB07C',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 250, 240, 0.96)'
      }
    },
    {
      id: 'pb-pregnancy',
      label: tr('eduBtnPregnancy', 'Pregnancy'),
      targetPage: 'PregnancyHomePage',
      gifSrc: './assets/pb-pregnancy.gif?v=290',
      imgClassName: 'w-full h-full object-contain',
      imgStyle: { objectPosition: 'center center', transform: 'scale(1.18)' },
      backgroundStyle: {
        backgroundColor: '#FFC48D',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 250, 240, 0.96)'
      }
    },
    {
      id: 'pb-childbirth',
      label: tr('eduBtnChildbirth', 'Childbirth'),
      targetPage: 'ChildbirthHomePage',
      gifSrc: './assets/pb-childbirth.gif?v=290',
      imgClassName: 'w-full h-full object-contain',
      imgStyle: { objectPosition: 'center center', transform: 'scale(1.18)' },
      backgroundStyle: {
        backgroundColor: '#FFD69E',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 252, 242, 0.96)'
      }
    },
    {
      id: 'pb-pregnancy-loss',
      label: tr('eduBtnMiscarriage', 'Pregnancy Loss'),
      targetPage: 'MiscarriageHomePage',
      gifSrc: './assets/pb-pregnancy-loss.gif?v=290',
      imgClassName: 'w-full h-full object-contain',
      imgStyle: { objectPosition: 'center center', transform: 'scale(1.18)' },
      backgroundStyle: {
        backgroundColor: '#FFE6AD',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 253, 245, 0.96)'
      }
    },
    {
      id: 'pb-pregnancy-after-loss',
      label: tr('eduBtnPregnancyAfterLoss', 'Pregnancy After a Loss'),
      targetPage: 'PregnancyAfterLossHomePage',
      gifSrc: './assets/pb-pregnancy-after-loss.gif?v=290',
      imgClassName: 'w-full h-full object-contain',
      imgStyle: { objectPosition: 'center center', transform: 'scale(1.18)' },
      backgroundStyle: {
        backgroundColor: '#FFF4BF',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 248, 0.96)'
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
