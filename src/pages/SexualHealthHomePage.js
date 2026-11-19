import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=207';

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

  // Exact copy of the STDs MakingGifButtons1 button from DiseasesAndInjuriesHomePage,
  // leading to the shared STDMenuHomePage
  const sexualHealthBannerButtons = [
    {
      id: 'stds-sexual-health-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=207',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[56vw] sm:max-w-[390px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-20px',
        marginRight: '-16px'
      },
      // Soft Sky-Periwinkle Blue (#AED2FA) matching DiseasesAndInjuriesHomePage STDs button
      backgroundStyle: {
        backgroundColor: '#AED2FA',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.85)'
      },
      subTextStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.85)'
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

    // Top Full-Width STDs Button (MakingGifButtons1) -> opens shared STDMenuHomePage
    h(MakingGifButtons1, {
      sections: sexualHealthBannerButtons,
      containerClassName: 'w-full grid',
      containerStyle: { gridTemplateRows: '220px' },
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    }),

    // Existing AI-made Sexual Health Info Bubble below the banner button
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
