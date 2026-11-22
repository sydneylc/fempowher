import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=291';

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

  // Expandable 12-stop Forest Green -> Emerald -> Teal -> Azure Blue button palette
  // Each button uses a distinct solid tone + crisp bottom divider so every button is clearly its own button
  // and new buttons can be added seamlessly along the Forest Green to Azure Blue spectrum.
  const DISEASES_FOREST_TO_AZURE_PALETTE = [
    '#14532D', // 1. Deep Forest Green
    '#15803D', // 2. Rich Forest Emerald Green
    '#0F766E', // 3. Deep Jade Teal-Green
    '#0E7490', // 4. Deep Cyan-Azure Teal
    '#0284C7', // 5. Vibrant Azure Blue
    '#166534', // 6. Woodland Pine Green (for future buttons)
    '#047857', // 7. Rich Emerald (for future buttons)
    '#0D9488', // 8. Seafoam Teal (for future buttons)
    '#0369A1', // 9. Ocean Azure Blue (for future buttons)
    '#2563EB', // 10. Royal Azure Blue (for future buttons)
    '#1D4ED8', // 11. Cobalt Azure Blue (for future buttons)
    '#1E40AF'  // 12. Deep Sapphire Azure (for future buttons)
  ];

  // Alphabetical order: FGM, Fibroids, Fistulas, Prolapse, STDs
  // Preserving the exact Forest Green -> Emerald -> Teal -> Azure Blue color scheme top-to-bottom!
  const diseasesBannerButtons = [
    {
      id: 'fgm-diseases-banner-btn',
      label: tr('eduBtnFGM', 'FGM'),
      subLabel: tr('eduBtnFGMSub', 'Female genital mutilation'),
      targetPage: 'FGMHomePage1',
      gifSrc: './assets/diseases-fgm.gif?v=291',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-[54vw] sm:max-w-[360px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-24px',
        marginRight: '-16px'
      },
      // Tone 1: Deep Forest Green (#14532D)
      backgroundStyle: {
        backgroundColor: DISEASES_FOREST_TO_AZURE_PALETTE[0],
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 8px rgba(6, 32, 16, 0.7)'
      },
      subTextStyle: {
        color: '#DCFCE7',
        textShadow: '0 1px 6px rgba(6, 32, 16, 0.65)'
      }
    },
    {
      id: 'fibroids-diseases-banner-btn',
      label: tr('eduBtnFibroids', 'Fibroids'),
      targetPage: 'FibroidsHomePage1',
      gifSrc: './assets/diseases-fibroids.gif?v=291',
      imgClassName:
        'h-[154%] sm:h-[164%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-88px',
        marginRight: '-68px'
      },
      // Tone 2: Rich Forest Emerald Green (#15803D)
      backgroundStyle: {
        backgroundColor: DISEASES_FOREST_TO_AZURE_PALETTE[1],
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 8px rgba(6, 40, 20, 0.68)'
      }
    },
    {
      id: 'fistulas-diseases-banner-btn',
      label: tr('eduBtnFistulas', 'Fistulas'),
      targetPage: 'FistulasHomePage1',
      gifSrc: './assets/diseases-fistulas.gif?v=291',
      imgClassName:
        'h-[126%] sm:h-[134%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-86px',
        marginRight: '-86px'
      },
      // Tone 3: Deep Jade Teal-Green (#0F766E)
      backgroundStyle: {
        backgroundColor: DISEASES_FOREST_TO_AZURE_PALETTE[2],
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 8px rgba(6, 42, 40, 0.68)'
      }
    },
    {
      id: 'prolapse-diseases-banner-btn',
      label: tr('eduBtnProlapse', 'Prolapse'),
      targetPage: 'ProlapseHomePage1',
      gifSrc: './assets/diseases-prolapse.gif?v=291',
      imgClassName:
        'h-[148%] sm:h-[158%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-86px',
        marginRight: '-86px'
      },
      // Tone 4: Deep Cyan-Azure Teal (#0E7490)
      backgroundStyle: {
        backgroundColor: DISEASES_FOREST_TO_AZURE_PALETTE[3],
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 8px rgba(7, 42, 74, 0.68)'
      }
    },
    {
      id: 'stds-diseases-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=291',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[56vw] sm:max-w-[390px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-20px',
        marginRight: '-16px'
      },
      // Tone 5: Vibrant Azure Blue (#0284C7)
      backgroundStyle: {
        backgroundColor: DISEASES_FOREST_TO_AZURE_PALETTE[4],
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 8px rgba(7, 42, 74, 0.7)'
      },
      subTextStyle: {
        color: '#E0F2FE',
        textShadow: '0 1px 6px rgba(7, 42, 74, 0.65)'
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

    // Full-Width Ombré Banner Buttons (MakingGifButtons1): STDs, Fistulas, Fibroids, Prolapse
    h(MakingGifButtons1, {
      sections: diseasesBannerButtons,
      containerClassName: 'w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${diseasesBannerButtons.length}, 220px)` },
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    })
  );
}
