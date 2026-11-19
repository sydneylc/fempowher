import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=214';

const h = React.createElement;

export default function STDMenuHomePage({
  onBack,
  onNavigateEducationPage = null,
  issues = [],
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // MakingGifButtons1 full-width buttons with a seamless neon rainbow ombré palette
  // (just like PregnancyHomePage) for Trichomonas, HPV, Chlamydia, Gonorrhea, and Hepatitis B
  const stdRainbowBannerButtons = [
    {
      id: 'std-trichomonas-btn',
      label: tr('eduBtnTrichomonas', 'Trichomonas'),
      targetPage: 'TrichomonasHomePage1',
      gifSrc: './assets/std-trichomonas.gif?v=214',
      imgClassName:
        'h-[115%] sm:h-[125%] w-auto max-w-[54vw] sm:max-w-[370px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-14px',
        marginRight: '-14px'
      },
      // Neon Rainbow Band 1 (Distinct Hot Pink / Magenta Ombré):
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FF6BB8 0%, #EB2F88 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(125, 10, 62, 0.72)'
      }
    },
    {
      id: 'std-hpv-btn',
      label: tr('eduBtnHPV', 'HPV'),
      targetPage: 'HPVHomePage1',
      gifSrc: './assets/std-hpv.gif?v=214',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[54vw] sm:max-w-[360px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-28px',
        marginRight: '-28px'
      },
      // Neon Rainbow Band 2 (Distinct Neon Tangerine-Orange Ombré — clear step change from Pink):
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFAD4C 0%, #FF7724 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'std-chlamydia-btn',
      label: tr('eduBtnChlamydia', 'Chlamydia'),
      targetPage: 'ChlamydiaHomePage1',
      gifSrc: './assets/std-chlamydia.gif?v=214',
      imgClassName:
        'h-[122%] sm:h-[130%] w-auto max-w-[54vw] sm:max-w-[360px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-34px',
        marginRight: '-34px'
      },
      // Neon Rainbow Band 3 (Distinct Neon Lemon-Yellow Ombré — clear step change from Orange):
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFF463 0%, #F4D21B 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'std-gonorrhea-btn',
      label: tr('eduBtnGonorrhea', 'Gonorrhea'),
      targetPage: 'GonorrheaHomePage1',
      gifSrc: './assets/std-gonorrhea.gif?v=214',
      imgClassName:
        'h-[120%] sm:h-[128%] w-auto max-w-[54vw] sm:max-w-[365px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-26px',
        marginRight: '-26px'
      },
      // Neon Rainbow Band 4 (Distinct Neon Lime-Mint Green Ombré — clear step change from Yellow):
      backgroundStyle: {
        background: 'linear-gradient(180deg, #74F898 0%, #27D866 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'std-hepatitis-b-btn',
      label: tr('eduBtnHepatitisB', 'Hepatitis B'),
      targetPage: 'HepatitisBHomePage1',
      gifSrc: './assets/std-hepatitis-b.gif?v=214',
      imgClassName:
        'h-[126%] sm:h-[134%] w-auto max-w-[54vw] sm:max-w-[360px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-38px',
        marginRight: '-38px'
      },
      // Neon Rainbow Band 5 (Distinct Neon Electric Cyan-to-Indigo Ombré — clear step change from Green):
      backgroundStyle: {
        background: 'linear-gradient(180deg, #3ADAFF 0%, #6E58F8 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(42, 16, 110, 0.72)'
      }
    }
  ];

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden' },
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

    // Full-Width Neon Rainbow Ombré Banner Buttons (MakingGifButtons1)
    h(MakingGifButtons1, {
      sections: stdRainbowBannerButtons,
      containerClassName: 'w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${stdRainbowBannerButtons.length}, 215px)` },
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    }),

    // Existing STD Info Cards below the buttons
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto p-4 sm:p-6' },
      renderEducationIssueCards({
        issues,
        lang,
        t,
        speakingId,
        speakText,
        onShowNearestClinic
      })
    )
  );
}
