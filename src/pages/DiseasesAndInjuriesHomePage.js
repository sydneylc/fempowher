import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=207';

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

  // MakingGifButtons1 full-width buttons with a bluish-to-purplish ombré palette
  // and PregnancyHomePage lettering structure (#9F133A on lighter top bands, #FFFFFF on deepest bottom band)
  const diseasesBannerButtons = [
    {
      id: 'stds-diseases-banner-btn',
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
      // Tone 1: Soft Sky-Periwinkle Blue (#AED2FA)
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
    },
    {
      id: 'fistulas-diseases-banner-btn',
      label: tr('eduBtnFistulas', 'Fistulas'),
      targetPage: 'FistulasHomePage1',
      gifSrc: './assets/diseases-fistulas.gif?v=207',
      imgClassName:
        'h-[126%] sm:h-[134%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-86px',
        marginRight: '-86px'
      },
      // Tone 2: Cornflower Periwinkle Blue (#8EB3F5)
      backgroundStyle: {
        backgroundColor: '#8EB3F5',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.9)'
      }
    },
    {
      id: 'fibroids-diseases-banner-btn',
      label: tr('eduBtnFibroids', 'Fibroids'),
      targetPage: 'FibroidsHomePage1',
      gifSrc: './assets/diseases-fibroids.gif?v=207',
      imgClassName:
        'h-[154%] sm:h-[164%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-88px',
        marginRight: '-68px'
      },
      // Tone 3: Soft Lavender-Violet (#9E93F0)
      backgroundStyle: {
        backgroundColor: '#9E93F0',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.9)'
      }
    },
    {
      id: 'prolapse-diseases-banner-btn',
      label: tr('eduBtnProlapse', 'Prolapse'),
      targetPage: 'ProlapseHomePage1',
      gifSrc: './assets/diseases-prolapse.gif?v=207',
      imgClassName:
        'h-[148%] sm:h-[158%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-86px',
        marginRight: '-86px'
      },
      // Tone 4: Deep Royal Lavender-Purple (#735DD6) with pure white lettering like bottom of PregnancyHomePage
      backgroundStyle: {
        backgroundColor: '#735DD6',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(45, 22, 105, 0.65)'
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

    // Full-Width Bluish-to-Purplish Ombré Banner Buttons (MakingGifButtons1): STDs, Fistulas, Fibroids, Prolapse
    h(MakingGifButtons1, {
      sections: diseasesBannerButtons,
      containerClassName: 'w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${diseasesBannerButtons.length}, 220px)` },
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    }),

    // Existing AI-made Reproductive Health Diseases & Injuries Info Bubble below the banner buttons
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
