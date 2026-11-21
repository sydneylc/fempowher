import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=287';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=287';
import { consumePendingEducationSubPage } from './SmartSearchBtn1.js?v=287';
import {
  renderCervixPapScreenCartoonSvg,
  renderCleanWaterHydrationCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderPrepPepShieldCartoonSvg,
  renderThreeMonthRetestCalendarSvg
} from './FlyerCartoonIllustrations.js?v=287';

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
  const [activeSubPage, setActiveSubPage] = useState(() => consumePendingEducationSubPage());

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // 6 Full-Width MakingGifButtons1 First-Person Family Planning Buttons with animated GIFs & distinct solid shades!
  const familyPlanningButtons = [
    {
      id: 'fp-my-family-planning',
      label: tr('fpBtnMyFamilyPlanning', 'My Family Planning'),
      gifSrc: './assets/fp-my-family-planning.gif?v=287',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      backgroundStyle: {
        backgroundColor: '#F8A6C2',
        border: 'none'
      },
      textStyle: {
        color: '#880E36',
        textShadow: '0 1px 10px rgba(255, 245, 250, 0.95)'
      }
    },
    {
      id: 'fp-contraception-for-me',
      label: tr('fpBtnContraceptionForMe', 'My Birth Control & Contraception Options'),
      targetPage: 'ForMeHomePage',
      gifSrc: './assets/fp-contraception-for-me.gif?v=287',
      imgClassName:
        'h-[110%] sm:h-[116%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px',
        transform: 'translateY(11%)'
      },
      backgroundStyle: {
        backgroundColor: '#EC769E',
        border: 'none'
      },
      textStyle: {
        color: '#6E0926',
        textShadow: '0 1px 10px rgba(255, 240, 246, 0.95)'
      }
    },
    {
      id: 'fp-emergency-contraception',
      label: tr('fpBtnEmergencyContraception', 'Emergency Contraceptions & Options'),
      gifSrc: './assets/fp-emergency-contraception.gif?v=287',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      backgroundStyle: {
        backgroundColor: '#DC4C7E',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(96, 8, 44, 0.72)'
      }
    },
    {
      id: 'fp-healthy-pregnancy-spacing',
      label: tr('fpBtnPregnancySpacing', 'Healthy Spacing Between Pregnancies'),
      gifSrc: './assets/fp-healthy-pregnancy-spacing.gif?v=287',
      imgClassName:
        'h-[112%] sm:h-[118%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px',
        transform: 'translateY(8%)'
      },
      backgroundStyle: {
        backgroundColor: '#C22458',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(84, 6, 36, 0.75)'
      }
    },
    {
      id: 'fp-preconception',
      label: tr('eduBtnPreConception', 'Pre-Conception (Planning for a Baby)'),
      targetPage: 'PreConceptionHomePage',
      gifSrc: './assets/fp-preconception.gif?v=287',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      backgroundStyle: {
        backgroundColor: '#9E143A',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(56, 4, 22, 0.78)'
      }
    },
    {
      id: 'fp-for-loved-one',
      label: tr('eduBtnForLovedOne', 'For a Loved One (Supporting a Partner, Sister, or Friend)'),
      targetPage: 'ForALovedOneHomePage',
      gifSrc: './assets/fp-for-loved-one-card.gif?v=287',
      fallbackGifSrc: './assets/fp-for-loved-one.gif?v=287',
      imgClassName:
        'h-[112%] sm:h-[118%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px',
        transform: 'translateY(8%)'
      },
      backgroundStyle: {
        backgroundColor: '#6E0926',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(28, 2, 10, 0.82)'
      }
    }
  ];

  const subPageConfigs = {
    'fp-my-family-planning': {
      pageId: 'MyFamilyPlanningHomePage1',
      title: tr('fpBtnMyFamilyPlanning', 'My Family Planning'),
      gifSrc: './assets/fp-my-family-planning.gif?v=287',
      bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1D4ED8 100%)',
      bgColor: '#2057E0',
      titleTintColor: '#CFE2FF',
      sections: [
        {
          id: 'your-body-your-timeline',
          heading: 'What Is Family Planning? Your Body, Your Future, Your Timeline',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Family planning gives you the knowledge and medical tools to decide for yourself whether to have children, when to have them, and how many years to wait between each pregnancy. Whether your goal right now is to prevent pregnancy while you finish school or build your life, space out your next baby so your body can recover, or prepare your body to conceive a healthy baby, you have the right to confidential, stigma-free family planning care.'
        },
        {
          id: 'understanding-fertile-window',
          heading: 'Understanding Your Fertile Window and Cycle Calendar',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'An egg is released from your ovary (ovulation) about 12 to 16 days before your next menstrual period starts and lives for 12 to 24 hours, while sperm can survive inside the female reproductive tract for up to 5 days. That creates a 6-day fertile window each cycle when pregnancy is possible. You can use the FemPowHer Cycle Calendar in the Menstrual Cycle section to track your periods and fertile days.'
        }
      ]
    },
    'fp-contraception-for-me': {
      pageId: 'ForMeHomePage',
      title: tr('fpBtnContraceptionForMe', 'My Birth Control & Contraception Options'),
      gifSrc: './assets/fp-contraception-for-me.gif?v=287',
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'larc-iud-implant',
          heading: 'Long-Acting Reversible Contraception (IUD & Arm Implant — Over 99% Effective)',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'Hormonal and Copper IUDs (Intrauterine Devices placed gently in the uterus at a clinic) and the contraceptive arm implant (a tiny flexible rod under the skin of the upper arm) are over 99% effective for 3 to 10 years, require no daily reminders, and your natural fertility returns immediately as soon as you ask a provider to remove them.'
        },
        {
          id: 'pills-patch-ring-injection',
          heading: 'Birth Control Pills, Vaginal Ring, Patch & 3-Month Injection',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Birth control pills (taken once a day), the contraceptive vaginal ring (placed for 3 weeks), the weekly skin patch, and the 3-month contraceptive injection (Depo-Provera) use safe hormones to prevent ovulation so no egg is released. They can also make periods lighter, more regular, and less painful.'
        },
        {
          id: 'condoms-dual-protection',
          heading: 'External & Internal Condoms: The Only Birth Control That Also Stops STDs',
          stickerLabel: 'PrEP & PEP PREVENTION',
          graphicRenderer: (sticker) => renderPrepPepShieldCartoonSvg(sticker),
          body:
            'While IUDs, implants, pills, and injections are wonderful at preventing pregnancy, only external (male) condoms and internal (female) condoms protect you from both pregnancy and Sexually Transmitted Diseases (STDs) like HIV, Chlamydia, and Gonorrhea.'
        }
      ]
    },
    'fp-emergency-contraception': {
      pageId: 'EmergencyContraceptionHomePage1',
      title: tr('fpBtnEmergencyContraception', 'Emergency Contraceptions & Options'),
      gifSrc: './assets/fp-emergency-contraception.gif?v=287',
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
      gifSrc: './assets/fp-healthy-pregnancy-spacing.gif?v=287',
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
    },
    'fp-for-loved-one': {
      pageId: 'ForALovedOneHomePage',
      title: tr('eduBtnForLovedOne', 'For a Loved One (Supporting a Partner, Sister, or Friend)'),
      gifSrc: './assets/fp-for-loved-one.gif?v=287',
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'supporting-pregnant-loved-one',
          heading: 'Supporting a Pregnant Partner, Daughter, Sister, or Friend (Knowing the Warning Signs)',
          headingIcon: renderPregnantLadyHeadingIcon('#EDE9FE'),
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'When someone you love is pregnant, planning a pregnancy, or recovering after childbirth, your gentle support can save her life. Accompany her to prenatal checkups, help her rest and eat iron-rich foods, and know the urgent maternal red flags: never wait more than 12 hours in active labor before reaching a hospital, and seek emergency care immediately if she experiences vaginal bleeding, severe headache, blurred vision, high fever, or sudden swelling of the face and hands.'
        },
        {
          id: 'supporting-daughters-and-elders',
          heading: 'Caring Across Generations: Daughters (8–20) & Mothers or Grandmothers (50+)',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'For younger daughters and sisters (ages 8–20), reassure her before her first period so she knows menstruation is healthy and normal, and seek care if she has debilitating cramps or heavy bleeding causing dizziness and anemia. For mothers, aunties, and grandmothers (50+ after menopause), remember that even a single drop of vaginal bleeding or spotting after menopause is an urgent medical sign that needs an OB/GYN checkup right away.'
        },
        {
          id: 'listening-without-judgment',
          heading: 'How to Listen Without Judgment and Help Her Reach a Safe Haven or Clinic',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Many women and girls hide reproductive pain, unplanned pregnancy concerns, or domestic coercion out of modesty, stigma, or fear of burdening the family. Ask your loved one gently how she is feeling, press "Listen Aloud" in FemPowHer so she can hear any health guide in her own spoken language, and offer to walk or ride with her to a confidential OB/GYN clinic or 24/7 Women’s Safe Haven on the FemPowHer map.'
        }
      ]
    }
  };

  if (activeSubPage && subPageConfigs[activeSubPage]) {
    const cfg = subPageConfigs[activeSubPage];
    return FlyerSTDstyleCartoonCaller1({
      pageId: cfg.pageId,
      title: cfg.title,
      gifSrc: cfg.gifSrc || null,
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
