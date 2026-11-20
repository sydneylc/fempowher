import React from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderEducationIssueCards,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=234';

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

  // MakingGifButtons1 full-width buttons with a seamless Apricot-to-Coral-to-Mulberry ombré palette
  // (#9F133A crisp lettering on lighter top bands with zero chalky glow, #FFFFFF on deeper bands)
  const diseasesBannerButtons = [
    {
      id: 'stds-diseases-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=234',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[56vw] sm:max-w-[390px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-20px',
        marginRight: '-16px'
      },
      // Tone 1: Deep Mulberry-Berry -> Rich Mulberry-Rose (#A62655 -> #C43E6E)
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
    },
    {
      id: 'fistulas-diseases-banner-btn',
      label: tr('eduBtnFistulas', 'Fistulas'),
      targetPage: 'FistulasHomePage1',
      gifSrc: './assets/diseases-fistulas.gif?v=234',
      imgClassName:
        'h-[126%] sm:h-[134%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-86px',
        marginRight: '-86px'
      },
      // Tone 2: Rich Mulberry-Rose -> Warm Coral (#C43E6E -> #FA9690)
      backgroundStyle: {
        background: 'linear-gradient(180deg, #C43E6E 0%, #FA9690 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 6px rgba(138, 28, 56, 0.45)'
      }
    },
    {
      id: 'fibroids-diseases-banner-btn',
      label: tr('eduBtnFibroids', 'Fibroids'),
      targetPage: 'FibroidsHomePage1',
      gifSrc: './assets/diseases-fibroids.gif?v=234',
      imgClassName:
        'h-[154%] sm:h-[164%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-88px',
        marginRight: '-68px'
      },
      // Tone 3: Warm Coral -> Soft Peach (#FA9690 -> #FFD3C2)
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FA9690 0%, #FFD3C2 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: 'none'
      }
    },
    {
      id: 'prolapse-diseases-banner-btn',
      label: tr('eduBtnProlapse', 'Prolapse'),
      targetPage: 'ProlapseHomePage1',
      gifSrc: './assets/diseases-prolapse.gif?v=234',
      imgClassName:
        'h-[148%] sm:h-[158%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-86px',
        marginRight: '-86px'
      },
      // Tone 4: Soft Peach -> Creamy Apricot (#FFD3C2 -> #FFF3EB)
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFD3C2 0%, #FFF3EB 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: 'none'
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
