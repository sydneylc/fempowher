import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=219';

const h = React.createElement;

export default function SexualHealthHomePage({
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

  // Exact copy of the STDs MakingGifButtons1 button from DiseasesAndInjuriesHomePage,
  // leading to the shared STDMenuHomePage
  const sexualHealthBannerButtons = [
    {
      id: 'stds-sexual-health-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=219',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[56vw] sm:max-w-[390px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-20px',
        marginRight: '-16px'
      },
      // Deep Mulberry-Berry -> Rich Mulberry-Rose (#A62655 -> #C43E6E) matching DiseasesAndInjuriesHomePage STDs button
      backgroundStyle: {
        background: 'linear-gradient(180deg, #A62655 0%, #C43E6E 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 6px rgba(72, 10, 34, 0.5)'
      },
      subTextStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 6px rgba(72, 10, 34, 0.5)'
      }
    }
  ];

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden' },
    // Top Header Bar: Back Button + Sexual Health Title (UserLanguageChoice1)
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
          tr('eduBtnSexualHealth', t.eduBtnSexualHealth || 'Sexual Health')
        )
      )
    ),

    // Full-Width STDs Button (MakingGifButtons1) -> opens shared STDMenuHomePage
    h(MakingGifButtons1, {
      sections: sexualHealthBannerButtons,
      containerClassName: 'w-full grid',
      containerStyle: { gridTemplateRows: '220px' },
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    })
  );
}
