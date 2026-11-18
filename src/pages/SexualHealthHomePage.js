import React from 'https://esm.sh/react@18.3.1';
import {
  PregHomePageButtons,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=202';

const h = React.createElement;

export default function SexualHealthHomePage({
  onBack,
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  issues = [],
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

  // First full-bleed Pregnancy-style banner button in Sexual Health (more will be added later)
  const sexualHealthBannerButtons = [
    {
      id: 'stds-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=202',
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

    // Existing AI-made Sexual Health Info Bubble
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
