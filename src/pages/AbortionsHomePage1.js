import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=248';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=248';
import {
  renderCervixPapScreenCartoonSvg,
  renderCleanWaterHydrationCartoonSvg,
  renderIronRichCareCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderThreeMonthRetestCalendarSvg
} from './FlyerCartoonIllustrations.js?v=248';

const h = React.createElement;

export default function AbortionsHomePage1({
  onBack,
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

  // 4 Full-Width MakingGifButtons1 First-Person Abortions Buttons (gifSrc: null ready for GIFs later)
  const abortionButtons = [
    {
      id: 'abortion-options',
      label: tr('abortionBtnOptions', 'What are my options? (Medication Pills vs. In-Clinic Care)'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFEBF4 0%, #FFC4E0 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'abortion-recovery',
      label: tr('abortionBtnRecovery', 'I just had an abortion! What is happening to my body?'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFB5D6 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'abortion-emergency-care',
      label: tr('abortionBtnEmergencyCare', 'Emergency Post-Abortion Care & Danger Signs'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #EC4899 0%, #BE185D 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(88, 8, 42, 0.7)'
      }
    },
    {
      id: 'abortion-emotions-and-fertility',
      label: tr('abortionBtnEmotionsFertility', 'Emotional Care, Privacy & My Future Fertility'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #9F133A 0%, #6E0926 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(42, 2, 16, 0.78)'
      }
    }
  ];

  const subPageConfigs = {
    'abortion-options': {
      pageId: 'AbortionOptionsHomePage1',
      title: tr('abortionBtnOptions', 'What are my options? (Medication Pills vs. In-Clinic Care)'),
      bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1D4ED8 100%)',
      bgColor: '#2057E0',
      titleTintColor: '#CFE2FF',
      sections: [
        {
          id: 'medication-abortion',
          heading: 'Medication Abortion (Mifepristone and Misoprostol Pills)',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'A medication abortion uses World Health Organization-recommended prescription tablets (most effectively mifepristone followed 24 to 48 hours later by misoprostol, or a misoprostol-only regimen where mifepristone is unavailable) during the first 10 to 12 weeks of pregnancy. Mifepristone blocks the hormone progesterone that sustains the uterine lining, and misoprostol causes the uterus to cramp and empty naturally, very much like an early miscarriage.'
        },
        {
          id: 'in-clinic-procedure',
          heading: 'In-Clinic Procedural Abortion (Vacuum Aspiration)',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'An in-clinic abortion (such as manual or electric vacuum aspiration in the first trimester) is a gentle, 5-to-10-minute medical procedure performed by a trained doctor, midwife, or clinician using local numbing medicine on the cervix. Both medication abortion and in-clinic vacuum aspiration are over 98% to 99% effective and among the safest medical procedures in modern healthcare when provided with clean, evidence-based medical care.'
        }
      ]
    },
    'abortion-recovery': {
      pageId: 'AbortionRecoveryHomePage1',
      title: tr('abortionBtnRecovery', 'I just had an abortion! What is happening to my body?'),
      bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
      bgColor: '#0E857B',
      titleTintColor: '#CCFBF1',
      sections: [
        {
          id: 'normal-bleeding-and-cramps',
          heading: 'What Is Normal Bleeding and Cramping After an Abortion?',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'During a medication abortion, strong cramping and heavy bleeding with blood clots are normal for 4 to 6 hours after taking misoprostol as the uterus empties, followed by lighter period-like bleeding or spotting that can come and go for 1 to 3 weeks. After an in-clinic procedure, bleeding is often lighter and may stop and start for up to 2 weeks. Ibuprofen and a warm heating pad or hot water bottle on your lower belly help relieve uterine cramps.'
        },
        {
          id: 'protecting-from-infection',
          heading: 'Caring for Your Body While Your Cervix Closes',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'Use clean sanitary pads so you can monitor how much you are bleeding, drink plenty of clean water, eat iron-rich foods, and avoid douching. You can resume normal daily activities as soon as you feel ready, and wait until you feel comfortable and any heavy bleeding has subsided before having vaginal intercourse.'
        }
      ]
    },
    'abortion-emergency-care': {
      pageId: 'AbortionEmergencyCareHomePage1',
      title: tr('abortionBtnEmergencyCare', 'Emergency Post-Abortion Care & Danger Signs'),
      bgGradient: 'linear-gradient(180deg, #E11D48 0%, #BE123C 100%)',
      bgColor: '#D41742',
      titleTintColor: '#FFC9D6',
      sections: [
        {
          id: 'when-to-go-to-hospital',
          heading: 'Emergency Warning Signs That Need Immediate Hospital Care',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'Go to an emergency hospital or OB/GYN clinic on your FemPowHer map immediately if you soak through two full-sized pads per hour for two hours in a row, if you develop a fever over 38°C (100.4°F) lasting more than 24 hours after taking misoprostol, if you notice foul-smelling vaginal discharge, or if you have severe abdominal pain that does not improve with pain medication.'
        },
        {
          id: 'post-abortion-care-everywhere',
          heading: 'Confidential Emergency Post-Abortion Care (Looks Identical to Miscarriage)',
          body:
            'Every hospital and emergency clinic in the world has a medical duty to provide life-saving Post-Abortion Care (treating heavy bleeding or infection). Medically, a medication abortion looks 100% identical to a natural spontaneous miscarriage on every physical exam, ultrasound, and blood test: there is no blood or urine test that can detect mifepristone or misoprostol taken orally or sublingually.'
        }
      ]
    },
    'abortion-emotions-and-fertility': {
      pageId: 'AbortionEmotionsFertilityHomePage1',
      title: tr('abortionBtnEmotionsFertility', 'Emotional Care, Privacy & My Future Fertility'),
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'future-fertility-and-ovulation',
          heading: 'Does a Safe Abortion Affect My Future Fertility?',
          stickerLabel: 'RE-TEST IN 3 MONTHS',
          stickerInnerTop: '2 WKS',
          stickerInnerBottom: 'OVULATION',
          graphicRenderer: (sticker, topTxt, botTxt) =>
            renderThreeMonthRetestCalendarSvg(sticker, topTxt, botTxt),
          body:
            'No. A safe, uncomplicated medication or in-clinic abortion does not cause infertility or harm future pregnancies. In fact, your ovaries can release a new egg (ovulate) as early as 8 to 14 days after an abortion, before your next normal menstrual period even arrives in 4 to 6 weeks, so you can start your chosen birth control method right away if you want to prevent another pregnancy.'
        },
        {
          id: 'emotional-wellbeing',
          heading: 'Honoring Your Feelings Without Shame',
          body:
            'Women experience many different emotions after an abortion, including relief, sadness, grief, strength, or a combination of all of them as pregnancy hormones shift. Whatever you feel is valid, and your FemPowHer app remains 100% private on your device.'
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
      id: 'AbortionsHomePage1',
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
          tr('eduBtnAbortions', t.eduBtnAbortions || 'Abortions')
        )
      )
    ),
    h(MakingGifButtons1, {
      sections: abortionButtons,
      containerClassName: 'flex-1 w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${abortionButtons.length}, minmax(175px, 1fr))` },
      onSelectSection: (sec) => {
        if (sec && sec.id) {
          setActiveSubPage(sec.id);
        }
      }
    })
  );
}
