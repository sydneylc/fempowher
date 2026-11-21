import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=263';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=263';
import { consumePendingEducationSubPage } from './SmartSearchBtn1.js?v=263';
import {
  renderCervixPapScreenCartoonSvg,
  renderCleanWaterHydrationCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPrepPepShieldCartoonSvg,
  renderSwabAndNoAlcoholCartoonSvg,
  renderUterusFallopianPidCartoonSvg
} from './FlyerCartoonIllustrations.js?v=263';

const h = React.createElement;

export default function SexualHealthHomePage({
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

  // 6 First-Person MakingGifButtons1 Sexual Health Buttons
  // 1. What is sex?
  // 2. Contraception
  // 3. I just had sex for the first time! (includes cultural destigmatization of virginity & the hymen)
  // 4. I don't want to have sex.
  // 5. Sex hurts!
  // 6. STDs (Sexually Transmitted Diseases) -> with animated sexual-health-stds.gif leading to STDMenuHomePage
  const sexualHealthBannerButtons = [
    {
      id: 'sh-what-is-sex',
      label: tr('shBtnWhatIsSex', 'What is sex?'),
      gifSrc: './assets/sh-what-is-sex.gif?v=263',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      // Tone 1: Soft Rose-Blush Red (#F78CA7) — flat solid color so each button band is clearly distinct!
      backgroundStyle: {
        backgroundColor: '#F78CA7',
        border: 'none'
      },
      textStyle: {
        color: '#6E0926',
        textShadow: '0 1px 10px rgba(255, 245, 248, 0.95)'
      }
    },
    {
      id: 'sh-contraception',
      label: tr('shBtnContraception', 'Contraception'),
      gifSrc: './assets/sh-contraception.gif?v=263',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      // Tone 2: Warm Raspberry-Rose Red (#E45278) — flat solid color
      backgroundStyle: {
        backgroundColor: '#E45278',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(96, 8, 36, 0.72)'
      }
    },
    {
      id: 'sh-first-time-sex',
      label: tr('shBtnFirstTimeSex', 'I had sex for the first time!'),
      gifSrc: './assets/sh-first-time-sex.gif?v=263',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-52px',
        marginRight: '-52px'
      },
      // Tone 3: Rich Crimson-Berry Red (#C92452) — flat solid color
      backgroundStyle: {
        backgroundColor: '#C92452',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(84, 6, 30, 0.75)'
      }
    },
    {
      id: 'sh-dont-want-sex',
      label: tr('shBtnDontWantSex', 'I don’t want to have sex.'),
      gifSrc: './assets/sh-dont-want-sex.gif?v=263',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-50px',
        marginRight: '-50px'
      },
      // Tone 4: Deep Ruby-Garnet Red (#A4133C) — flat solid color
      backgroundStyle: {
        backgroundColor: '#A4133C',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(68, 4, 24, 0.78)'
      }
    },
    {
      id: 'sh-pain-during-sex',
      label: tr('shBtnPainDuringSex', 'Sex hurts!'),
      gifSrc: './assets/sh-pain-during-sex.gif?v=263',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      // Tone 5: Dark Burgundy-Maroon (#7F0B2C) — flat solid color
      backgroundStyle: {
        backgroundColor: '#7F0B2C',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(52, 2, 18, 0.80)'
      }
    },
    {
      id: 'stds-sexual-health-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=263',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[56vw] sm:max-w-[390px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-20px',
        marginRight: '-16px'
      },
      // Tone 6: Deepest Wine-Maroon (#58051D) — flat solid color
      backgroundStyle: {
        backgroundColor: '#58051D',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 6px rgba(36, 2, 12, 0.75)'
      },
      subTextStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 6px rgba(36, 2, 12, 0.75)'
      }
    }
  ];

  const subPageConfigs = {
    'sh-what-is-sex': {
      pageId: 'WhatIsSexHomePage1',
      title: tr('shBtnWhatIsSex', 'What is sex?'),
      gifSrc: './assets/sh-what-is-sex.gif?v=263',
      bgGradient: 'linear-gradient(180deg, #E11D48 0%, #BE123C 100%)',
      bgColor: '#D41742',
      titleTintColor: '#FFC9D6',
      sections: [
        {
          id: 'what-is-sexual-intimacy',
          heading: 'What Is Sex? Understanding Intimacy, Anatomy, and Connection',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Sex is physical intimacy shared between consenting people that can include touching, kissing, oral contact, manual stimulation, or vaginal or anal intercourse. Biologically, when a woman feels safe, relaxed, and aroused, blood flows to the clitoris (the sensitive nerve center at the top of the vulva) and the vaginal walls naturally release moisture (lubrication) while the pelvic muscles relax and lengthen.'
        },
        {
          id: 'how-pregnancy-and-stds-happen',
          heading: 'When Sex Can Lead to Pregnancy or STDs (And How to Stay Protected)',
          stickerLabel: 'PROTECT FALLOPIAN TUBES',
          graphicRenderer: (sticker) => renderUterusFallopianPidCartoonSvg(sticker),
          body:
            'Pregnancy can occur whenever semen or pre-ejaculate fluid from a penis enters or comes near the vaginal opening and sperm travel up through the cervix and uterus to meet an egg in the Fallopian tube. Sexually transmitted infections (STDs) can spread through vaginal, anal, or oral sex or skin-to-skin genital contact. Using condoms and reliable birth control lets you protect both your health and your future timeline.'
        }
      ]
    },
    'sh-contraception': {
      pageId: 'SexualHealthContraceptionHomePage1',
      title: tr('shBtnContraception', 'Contraception'),
      gifSrc: './assets/sh-contraception.gif?v=263',
      bgGradient: 'linear-gradient(180deg, #9F133A 0%, #7C1040 100%)',
      bgColor: '#8E1138',
      titleTintColor: '#FFD6EA',
      sections: [
        {
          id: 'barrier-methods-and-dual-protection',
          heading: 'Barrier Contraception (External & Internal Condoms for Pregnancy + STD Protection)',
          stickerLabel: 'PrEP & PEP PREVENTION',
          graphicRenderer: (sticker) => renderPrepPepShieldCartoonSvg(sticker),
          body:
            'External (male) condoms and internal (female) condoms are the only contraceptive methods that protect against both unintended pregnancy and sexually transmitted infections (STDs), including HIV, chlamydia, gonorrhea, and trichomoniasis. Many women use "dual protection," pairing a condom with a highly effective hormonal method or IUD.'
        },
        {
          id: 'hormonal-and-long-acting-contraception',
          heading: 'Hormonal Methods & Long-Acting Reversible Contraception (IUDs & Implants)',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Long-Acting Reversible Contraception (LARC), including the small flexible arm implant and hormonal or copper intrauterine devices (IUDs), are over 99% effective for 3 to 10 years and your fertility returns quickly as soon as they are removed. Short-acting hormonal options include daily birth control pills, the 3-month contraceptive injection, the weekly skin patch, and the monthly vaginal ring.'
        },
        {
          id: 'emergency-contraception-overview',
          heading: 'Emergency Contraception (After Unprotected Sex or a Broken Condom)',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'If a condom breaks, you miss birth control pills, or you have unprotected sex, emergency contraceptive pills (morning-after pills) can prevent pregnancy by delaying ovulation when taken within 3 to 5 days (the sooner the better), or a Copper or hormonal IUD can be placed at a clinic within 5 days for over 99% emergency protection.'
        }
      ]
    },
    'sh-first-time-sex': {
      pageId: 'FirstTimeSexHomePage1',
      title: tr('shBtnFirstTimeSex', 'I had sex for the first time!'),
      gifSrc: './assets/sh-first-time-sex.gif?v=263',
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'virginity-across-cultures',
          heading: 'Destigmatizing "Virginity" Across All Cultures: Your Worth Never Changes',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'In many cultures and traditions around the world, "virginity" is treated as a measure of a girl’s or woman’s purity, honor, or value. Medically and humanly, virginity is not a physical object you "lose" and it never changes your dignity, cleanliness, or worth as a human being. Having sex for the first time is simply a personal life experience, and no medical exam on earth can tell whether a woman has had sex.'
        },
        {
          id: 'the-truth-about-the-hymen-and-bleeding',
          heading: 'The Medical Truth About the Hymen (Why Over Half of Women Do Not Bleed the First Time)',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'Many people are taught the myth that the hymen is a sealed barrier that "breaks" and must bleed on the wedding night or first time having sex. In anatomical reality, the hymen is just a thin, stretchy rim of soft pink tissue around the lower edge of the vaginal opening (with a natural opening in the middle so menstrual blood can flow out every month). It naturally stretches from sports, walking, riding a bike, or using tampons, and some girls are born with almost no visible hymenal tissue at all. Over 50% of women do not bleed at all the first time they have vaginal intercourse, especially when they are relaxed, aroused, and treated gently. The World Health Organization has officially declared that "virginity testing" (two-finger exams or checking bedsheets for blood) has zero scientific validity and is a violation of women’s human rights.'
        },
        {
          id: 'caring-for-your-body-after-first-time',
          heading: 'What to Do for Your Body Right After Having Sex (Preventing UTIs)',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Always urinate (pee) within 15 to 30 minutes after having vaginal sex and drink a glass of clean water: peeing flushes out any bacteria that were pushed near the urethra opening during intercourse and prevents a painful Urinary Tract Infection (UTI). Wash the outside of your vulva gently with warm water (never douche or put soap inside the vagina).'
        },
        {
          id: 'if-unprotected',
          heading: 'If You Did Not Use a Condom or Birth Control',
          stickerLabel: 'PrEP & PEP PREVENTION',
          graphicRenderer: (sticker) => renderPrepPepShieldCartoonSvg(sticker),
          body:
            'Yes, you can get pregnant or catch an STD the very first time you have sex. If the sex was unprotected and you do not want to get pregnant, you can take an Emergency Contraception pill (morning-after pill) within 3 to 5 days, and if there was any risk of HIV exposure, a clinic can provide emergency PEP within 72 hours.'
        }
      ]
    },
    'sh-dont-want-sex': {
      pageId: 'DontWantSexHomePage1',
      title: tr('shBtnDontWantSex', 'I don’t want to have sex.'),
      gifSrc: './assets/sh-dont-want-sex.gif?v=263',
      bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
      bgColor: '#0E857B',
      titleTintColor: '#CCFBF1',
      sections: [
        {
          id: 'saying-no-is-always-okay',
          heading: 'It Is 100% Okay Not to Want Sex (At Any Age or Relationship Stage)',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Your body belongs only to you. You never owe anyone sex, whether you have never had sex before, have had sex in the past, are dating, or are married. Saying "no" or "I want to wait" is a complete sentence. It is also completely normal to have periods of low sexual desire (due to stress, exhaustion, postpartum recovery, breastfeeding, hormonal birth control, menopause, or depression) or to identify on the asexual spectrum where you feel little or no sexual attraction.'
        },
        {
          id: 'if-you-feel-pressured-or-unsafe',
          heading: 'What to Do If Someone Is Pressuring, Threatening, or Forcing You',
          stickerLabel: 'SWAB TEST & NO ALCOHOL',
          graphicRenderer: (sticker) => renderSwabAndNoAlcoholCartoonSvg(sticker),
          body:
            'If a partner, spouse, or anyone else pressures you through guilt, threats, withholding money, sabotaging your birth control, or physical force, that is sexual coercion and abuse, never love. Tap the Map or Emergency Contacts tab at the bottom of your FemPowHer screen anytime to find the closest confidential 24/7 Women’s Safe Haven, domestic violence shelter, or hospital.'
        }
      ]
    },
    'sh-pain-during-sex': {
      pageId: 'PainDuringSexHomePage1',
      title: tr('shBtnPainDuringSex', 'Sex hurts!'),
      gifSrc: './assets/sh-pain-during-sex.gif?v=263',
      bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1D4ED8 100%)',
      bgColor: '#2057E0',
      titleTintColor: '#CFE2FF',
      sections: [
        {
          id: 'causes-of-painful-sex',
          heading: 'Sex Should Never Hurt: Common Medical Causes of Pain or Bleeding',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'Pain during sexual intercourse (dyspareunia) or bleeding after sex is a very common medical symptom that deserves gentle care. Burning or tightness right at the vaginal entrance is often caused by not enough foreplay or lubrication, hormonal dryness (while breastfeeding, on certain contraceptives, or after menopause), a yeast or herpes infection, or involuntary tightening of the pelvic floor muscles (vaginismus). Deep pain inside the pelvis during penetration can point to uterine fibroids, endometriosis, an ovarian cyst, or cervical/pelvic inflammation (PID).'
        },
        {
          id: 'what-to-do',
          heading: 'How to Find Relief and Where to Get Checked',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Pause immediately anytime sex hurts (never "push through" sharp pain, which trains the pelvic floor muscles to tense up even more). Use a clean, unscented water-based or silicone-based lubricant, and visit an OB/GYN clinic on your FemPowHer map for a gentle exam.'
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
      id: 'SexualHealthHomePage',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden'
    },
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
    h(MakingGifButtons1, {
      sections: sexualHealthBannerButtons,
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
