import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  PregHomePageButtons,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=198';

const h = React.createElement;

export default function DiseasesAndInjuriesHomePage({
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

  // MakingGifButtons1 / PregHomePageButtons stack for Reproductive Health Diseases & Injuries
  const diseasesBannerButtons = [
    {
      id: 'stds-diseases-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: '/assets/sexual-health-stds.gif?v=198',
      imgClassName:
        'h-[102%] sm:h-[106%] w-auto max-w-[54vw] sm:max-w-[380px] object-contain select-none pointer-events-none',
      // Brighter red #F22952 background with zero black lines — blends seamlessly with the animated GIF
      backgroundStyle: {
        backgroundColor: '#F22952',
        border: 'none'
      },
      labelClassName:
        'text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight',
      subLabelClassName:
        'text-xs sm:text-sm md:text-base font-extrabold leading-snug mt-1.5',
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(110, 9, 38, 0.75)'
      },
      subTextStyle: {
        color: '#FFF5FC',
        textShadow: '0 1px 8px rgba(110, 9, 38, 0.75)'
      }
    },
    {
      id: 'fistulas-diseases-banner-btn',
      label: tr('eduBtnFistulas', 'Fistulas'),
      subLabel: tr('eduBtnFistulasSub', 'Obstetric & Pelvic Fistulas'),
      targetPage: 'FistulasHomePage1',
      gifSrc: '/assets/diseases-fistulas.gif?v=198',
      imgClassName:
        'h-full w-auto max-w-[54vw] sm:max-w-[380px] object-contain select-none pointer-events-none',
      // 3-band coral / salmon / brick-red background with zero black lines matching diseases-fistulas.gif
      backgroundStyle: {
        background:
          'linear-gradient(180deg, #E86F5C 0%, #E86F5C 42.4%, #F48B7B 42.4%, #F48B7B 55.4%, #B83B2B 55.4%, #B83B2B 100%)',
        border: 'none'
      },
      labelClassName:
        'text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight',
      subLabelClassName:
        'text-xs sm:text-sm md:text-base font-extrabold leading-snug mt-1.5',
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(90, 15, 10, 0.8)'
      },
      subTextStyle: {
        color: '#FFF5F2',
        textShadow: '0 1px 8px rgba(90, 15, 10, 0.8)'
      }
    },
    {
      id: 'fibroids-diseases-banner-btn',
      label: tr('eduBtnFibroids', 'Fibroids'),
      subLabel: tr('eduBtnFibroidsSub', 'Uterine Fibroids'),
      targetPage: 'FibroidsHomePage1',
      gifSrc: '/assets/diseases-fibroids.gif?v=198',
      imgClassName:
        'h-full w-auto max-w-[54vw] sm:max-w-[380px] object-contain select-none pointer-events-none',
      // 3-band plum / orchid / deep burgundy background with zero black lines matching diseases-fibroids.gif
      backgroundStyle: {
        background:
          'linear-gradient(180deg, #8C2D62 0%, #8C2D62 42.6%, #D46A9E 42.6%, #D46A9E 58.7%, #5E1640 58.7%, #5E1640 100%)',
        border: 'none'
      },
      labelClassName:
        'text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight',
      subLabelClassName:
        'text-xs sm:text-sm md:text-base font-extrabold leading-snug mt-1.5',
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(55, 8, 36, 0.82)'
      },
      subTextStyle: {
        color: '#FFF0FA',
        textShadow: '0 1px 8px rgba(55, 8, 36, 0.82)'
      }
    }
  ];

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden' },
    // Top Header Bar: Back Button + Reproductive Health Diseases & Injuries Title (UserLanguageChoice1)
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
          tr('eduBtnDiseasesInjuries', 'Reproductive Health Diseases & Injuries')
        )
      )
    ),

    // Full-Bleed Banner Buttons (MakingGifButtons1 / PregHomePageButtons): STDs, Fistulas, Fibroids
    h(MakingGifButtons1, {
      sections: diseasesBannerButtons,
      containerClassName: 'w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${diseasesBannerButtons.length}, 230px)` },
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    }),

    // Existing AI-made Reproductive Health Diseases & Injuries Info Bubble below the banner button
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
