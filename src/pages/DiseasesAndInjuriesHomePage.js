import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  PregHomePageButtons,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=204';

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
      gifSrc: './assets/sexual-health-stds.gif?v=204',
      imgClassName:
        'h-full w-auto max-w-[54vw] sm:max-w-[380px] object-contain select-none pointer-events-none',
      // Original #E04668 background matching the STD GIF background with zero black lines
      backgroundStyle: {
        backgroundColor: '#E04668',
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
      gifSrc: './assets/diseases-fistulas.gif?v=204',
      imgClassName:
        'h-full w-auto max-w-[54vw] sm:max-w-[380px] object-contain select-none pointer-events-none',
      // Smooth reddish-orange vertical gradient separated where the fistula occurs, matching diseases-fistulas.gif
      backgroundStyle: {
        background:
          'linear-gradient(180deg, #E86F5C 0%, #E86F5C 36%, #F48B7B 45%, #F48B7B 55%, #C84632 64%, #C84632 100%)',
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
      gifSrc: './assets/diseases-fibroids.gif?v=204',
      imgClassName:
        'h-full w-auto max-w-[54vw] sm:max-w-[380px] object-contain select-none pointer-events-none',
      // 3-band plum / orchid / deep burgundy background with zero black lines matching diseases-fibroids.gif
      backgroundStyle: {
        background:
          'linear-gradient(180deg, #8A2861 0%, #8A2861 43.1%, #DE6AA5 43.1%, #DE6AA5 58.3%, #5E1140 58.3%, #5E1140 100%)',
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

    // Existing AI-made Reproductive Health Diseases & Injuries Info Bubble
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
