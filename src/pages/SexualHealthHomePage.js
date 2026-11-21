import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=258';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=258';
import {
  renderCervixPapScreenCartoonSvg,
  renderCleanWaterHydrationCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPrepPepShieldCartoonSvg,
  renderSwabAndNoAlcoholCartoonSvg,
  renderUterusFallopianPidCartoonSvg
} from './FlyerCartoonIllustrations.js?v=258';

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
  const [activeSubPage, setActiveSubPage] = useState(null);

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // 5 First-Person MakingGifButtons1 Sexual Health Buttons
  // 1. What is sex?
  // 2. I just had sex for the first time! (includes cultural destigmatization of virginity & the hymen)
  // 3. I don't want to have sex.
  // 4. Sex hurts!
  // 5. STDs (Sexually Transmitted Diseases) -> with animated sexual-health-stds.gif leading to STDMenuHomePage
  const sexualHealthBannerButtons = [
    {
      id: 'sh-what-is-sex',
      label: tr('shBtnWhatIsSex', 'What is sex?'),
      gifSrc: './assets/sh-what-is-sex.gif?v=258',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFEBF4 0%, #FFC8E2 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'sh-first-time-sex',
      label: tr('shBtnFirstTimeSex', 'I just had sex for the first time!'),
      gifSrc: './assets/sh-first-time-sex.gif?v=258',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-52px',
        marginRight: '-52px'
      },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFB8D9 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'sh-dont-want-sex',
      label: tr('shBtnDontWantSex', 'I don’t want to have sex.'),
      gifSrc: './assets/sh-dont-want-sex.gif?v=258',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-50px',
        marginRight: '-50px'
      },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #EC4899 0%, #D42C73 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(96, 8, 44, 0.65)'
      }
    },
    {
      id: 'sh-pain-during-sex',
      label: tr('shBtnPainDuringSex', 'Sex hurts!'),
      gifSrc: './assets/sh-pain-during-sex.gif?v=258',
      imgClassName:
        'h-[118%] sm:h-[126%] w-auto max-w-none object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-48px',
        marginRight: '-48px'
      },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #C82368 0%, #A62655 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(72, 6, 32, 0.72)'
      }
    },
    {
      id: 'stds-sexual-health-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=258',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[56vw] sm:max-w-[390px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-20px',
        marginRight: '-16px'
      },
      backgroundStyle: {
        background: 'linear-gradient(180deg, #A62655 0%, #7C1040 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 6px rgba(48, 4, 22, 0.65)'
      },
      subTextStyle: {
        color: '#FFFFFF',
        textShadow: '0 1px 6px rgba(48, 4, 22, 0.65)'
      }
    }
  ];

  const subPageConfigs = {
    'sh-what-is-sex': {
      pageId: 'WhatIsSexHomePage1',
      title: tr('shBtnWhatIsSex', 'What is sex?'),
      gifSrc: './assets/sh-what-is-sex.gif?v=258',
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
    'sh-first-time-sex': {
      pageId: 'FirstTimeSexHomePage1',
      title: tr('shBtnFirstTimeSex', 'I just had sex for the first time!'),
      gifSrc: './assets/sh-first-time-sex.gif?v=258',
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
      gifSrc: './assets/sh-dont-want-sex.gif?v=258',
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
      gifSrc: './assets/sh-pain-during-sex.gif?v=258',
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
      containerClassName: 'flex-1 w-full grid',
      containerStyle: { gridTemplateRows: 'repeat(4, minmax(160px, 1fr)) 220px' },
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
