import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=222';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=222';
import {
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderThreeMonthRetestCalendarSvg
} from './FlyerCartoonIllustrations.js?v=222';

const h = React.createElement;

export default function FamilyPlanningHomePage1({
  onBack,
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  const [activeSubPage, setActiveSubPage] = useState(null);

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // 5 Full-Width MakingGifButtons1 First-Person Family Planning Buttons (gifSrc: null ready for GIFs later)
  const familyPlanningButtons = [
    {
      id: 'fp-contraception-for-me',
      label: tr('fpBtnContraceptionForMe', 'Birth Control & Contraception Options (For Me)'),
      targetPage: 'ForMeHomePage',
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFEBF4 0%, #FFC2DE 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'fp-emergency-contraception',
      label: tr('fpBtnEmergencyContraception', 'Emergency Contraception (Morning-After Pill & Copper IUD)'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFB8D8 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'fp-healthy-pregnancy-spacing',
      label: tr('fpBtnPregnancySpacing', 'Healthy Spacing Between Pregnancies'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #EC4899 0%, #C82368 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(108, 10, 50, 0.65)'
      }
    },
    {
      id: 'fp-preconception',
      label: tr('eduBtnPreConception', 'Pre-Conception (Planning for a Baby)'),
      targetPage: 'PreConceptionHomePage',
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #B81D5B 0%, #8E1145 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(64, 5, 28, 0.72)'
      }
    },
    {
      id: 'fp-for-loved-one',
      label: tr('eduBtnForLovedOne', 'For a Loved One (Supporting a Partner, Sister, or Friend)'),
      targetPage: 'ForALovedOneHomePage',
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #7C1040 0%, #58092B 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(36, 2, 16, 0.78)'
      }
    }
  ];

  const subPageConfigs = {
    'fp-emergency-contraception': {
      pageId: 'EmergencyContraceptionHomePage1',
      title: tr('fpBtnEmergencyContraception', 'Emergency Contraception (Morning-After Pill & Copper IUD)'),
      bgGradient: 'linear-gradient(180deg, #E11D48 0%, #BE123C 100%)',
      bgColor: '#D41742',
      titleTintColor: '#FFC9D6',
      sections: [
        {
          id: 'what-is-ec',
          heading: 'What Is Emergency Contraception and How Does It Work?',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Emergency contraception prevents pregnancy after unprotected sex, a broken or slipped condom, missed birth control pills, or sexual assault. Emergency contraceptive pills (levonorgestrel or ulipristal acetate) work by temporarily delaying ovulation so an egg is not released to meet sperm. They are not abortion pills and will not harm an existing established pregnancy.'
        },
        {
          id: 'timing-window',
          heading: 'The 72-Hour to 5-Day Window (The Sooner You Take It, the Better)',
          body:
            'Over-the-counter levonorgestrel morning-after pills work best when taken within 72 hours (3 days) of unprotected sex, and prescription ulipristal acetate pills work for up to 120 hours (5 days). The most effective emergency contraception of all (over 99% effective) is having a Copper IUD or hormonal IUD inserted at a clinic within 5 days of unprotected sex, which also gives you years of ongoing birth control.'
        }
      ]
    },
    'fp-healthy-pregnancy-spacing': {
      pageId: 'HealthyPregnancySpacingHomePage1',
      title: tr('fpBtnPregnancySpacing', 'Healthy Spacing Between Pregnancies'),
      bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
      bgColor: '#0E857B',
      titleTintColor: '#CCFBF1',
      sections: [
        {
          id: 'why-spacing-matters',
          heading: 'Why Giving Your Body 18 to 24 Months Between Birth and the Next Pregnancy Matters',
          headingIcon: renderPregnantLadyHeadingIcon('#CCFBF1'),
          stickerLabel: 'RE-TEST IN 3 MONTHS',
          stickerInnerTop: '18-24',
          stickerInnerBottom: 'MONTHS',
          graphicRenderer: (sticker, topTxt, botTxt) =>
            renderThreeMonthRetestCalendarSvg(sticker, topTxt, botTxt),
          body:
            'The World Health Organization and obstetricians recommend waiting at least 18 to 24 months after giving birth before getting pregnant again (and at least 6 months after a Cesarean section for the uterine scar to strengthen). Healthy spacing gives your body time to rebuild iron, folate, and calcium stores, lowers the risk of preterm birth and low birth weight, and protects maternal survival.'
        }
      ]
    }
  };

  if (activeSubPage && subPageConfigs[activeSubPage]) {
    const cfg = subPageConfigs[activeSubPage];
    return FlyerSTDstyleCartoonCaller1({
      pageId: cfg.pageId,
      title: cfg.title,
      gifSrc: null,
      bgGradient: cfg.bgGradient,
      bgColor: cfg.bgColor,
      titleTintColor: cfg.titleTintColor,
      sections: cfg.sections,
      onBack: () => setActiveSubPage(null),
      onShowNearestClinic,
      speakingId,
      speakText,
      UserLanguageChoice1,
      lang,
      t
    });
  }

  return h(
    'div',
    {
      id: 'FamilyPlanningHomePage1',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden'
    },
    h(
      'div',
      { className: 'w-full px-4 sm:px-6 pt-3 pb-2 shrink-0 bg-white' },
      h(
        'div',
        { className: 'max-w-5xl w-full mx-auto' },
        renderSubpageBackButton(onBack, t, lang),
        h(
          'h1',
          {
            className: 'text-2xl sm:text-3xl font-extrabold text-center mt-0.5',
            style: { color: '#9F133A' }
          },
          tr('eduBtnFamilyPlanning', 'Family Planning')
        )
      )
    ),
    h(MakingGifButtons1, {
      sections: familyPlanningButtons,
      containerClassName: 'flex-1 w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${familyPlanningButtons.length}, minmax(165px, 1fr))` },
      onSelectSection: (sec) => {
        if (sec.targetPage && onNavigateEducationPage) {
          onNavigateEducationPage(sec.targetPage);
        } else if (sec.id) {
          setActiveSubPage(sec.id);
        }
      }
    })
  );
}
