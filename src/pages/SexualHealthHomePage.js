import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=221';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=221';
import {
  renderCervixPapScreenCartoonSvg,
  renderCleanWaterHydrationCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderSwabAndNoAlcoholCartoonSvg
} from './FlyerCartoonIllustrations.js?v=221';

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

  // 4 Full-Width MakingGifButtons1 Sexual Health Buttons
  // (Button 1 has the animated STDs GIF; Buttons 2-4 have gifSrc: null ready for custom GIFs later)
  const sexualHealthBannerButtons = [
    {
      id: 'stds-sexual-health-banner-btn',
      label: tr('eduBtnSTDs', 'STDs'),
      subLabel: tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases'),
      targetPage: 'STDMenuHomePage',
      gifSrc: './assets/sexual-health-stds.gif?v=221',
      imgClassName:
        'h-[116%] sm:h-[124%] w-auto max-w-[56vw] sm:max-w-[390px] object-contain select-none pointer-events-none',
      imgStyle: {
        marginLeft: '-20px',
        marginRight: '-16px'
      },
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
      id: 'sh-yeast-and-bv',
      label: tr('shBtnYeastAndBV', 'Vaginal Itching, Odor, or Discharge (Yeast & BV vs. STDs)'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #E85C90 0%, #D43772 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(84, 8, 38, 0.65)'
      }
    },
    {
      id: 'sh-pain-during-sex',
      label: tr('shBtnPainDuringSex', 'Pain, Dryness, or Bleeding During Sex'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #F890B8 0%, #EA5891 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'sh-consent-and-safety',
      label: tr('shBtnConsentAndSafety', 'Consent, Safety & Healthy Intimacy'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFD4E8 0%, #FFADD2 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    }
  ];

  const subPageConfigs = {
    'sh-yeast-and-bv': {
      pageId: 'VaginalYeastAndBVHomePage1',
      title: tr('shBtnYeastAndBV', 'Vaginal Itching, Odor, or Discharge (Yeast & BV vs. STDs)'),
      bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
      bgColor: '#0E857B',
      titleTintColor: '#CCFBF1',
      sections: [
        {
          id: 'yeast-vs-bv-vs-std',
          heading: 'Not Every Vaginal Change Is an STD: Understanding Yeast Infections and Bacterial Vaginosis (BV)',
          stickerLabel: 'SWAB TEST & NO ALCOHOL',
          graphicRenderer: (sticker) => renderSwabAndNoAlcoholCartoonSvg(sticker),
          body:
            'The healthy vagina naturally maintains a mildly acidic balance protected by good Lactobacillus bacteria. When antibiotics, douching, scented soaps, tight damp clothing, or hormonal shifts disrupt that balance, two very common non-STD conditions can occur: a Vaginal Yeast Infection (which causes thick, white, cottage-cheese-like, odorless discharge with intense vulvar itching and burning) or Bacterial Vaginosis (which causes thin, grayish-white discharge with a strong fishy odor, especially after sex, usually without severe itching).'
        },
        {
          id: 'why-a-clinic-swab-matters',
          heading: 'Why Getting a Quick Clinic Swab Prevents Treating the Wrong Condition',
          body:
            'Because Trichomonas, Chlamydia, and Gonorrhea can look and feel very similar to Bacterial Vaginosis or a yeast infection, using an over-the-counter yeast cream when you actually have BV or Trichomonas will not cure your symptoms. A 2-minute swab at any women’s clinic on your FemPowHer map identifies whether you need a simple antifungal (for yeast) or metronidazole/clindamycin (for BV or Trichomonas).'
        }
      ]
    },
    'sh-pain-during-sex': {
      pageId: 'PainDuringSexHomePage1',
      title: tr('shBtnPainDuringSex', 'Pain, Dryness, or Bleeding During Sex'),
      bgGradient: 'linear-gradient(180deg, #E11D48 0%, #BE123C 100%)',
      bgColor: '#D41742',
      titleTintColor: '#FFC9D6',
      sections: [
        {
          id: 'causes-of-painful-sex',
          heading: 'Sex Should Never Hurt: Common Medical Causes of Pain or Spotting',
          stickerLabel: 'PAP & HPV SCREENING',
          graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
          body:
            'Pain during sexual intercourse (dyspareunia) or bleeding after sex is a common medical symptom that deserves gentle evaluation. Surface burning or stinging at the vaginal entrance is often caused by insufficient lubrication, hormonal dryness (during breastfeeding, on certain contraceptives, or after menopause), a yeast or herpes infection, or involuntary pelvic floor muscle tightening (vaginismus). Deep pelvic pain during penetration can point to uterine fibroids, endometriosis, an ovarian cyst, or cervical/pelvic inflammation.'
        },
        {
          id: 'what-to-do',
          heading: 'How to Find Relief and Where to Get Checked',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Use a clean, unscented water-based or silicone-based lubricant, communicate openly with your partner to pause anytime something hurts, and visit an OB/GYN clinic on your FemPowHer map for a gentle pelvic exam and cervical screening.'
        }
      ]
    },
    'sh-consent-and-safety': {
      pageId: 'ConsentAndSafetyHomePage1',
      title: tr('shBtnConsentAndSafety', 'Consent, Safety & Healthy Intimacy'),
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'your-body-your-choice',
          heading: 'Your Body Belongs to You: Enthusiastic Consent and Safety',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Healthy intimacy requires free, ongoing, pressure-free agreement from both partners, and you have the right to say no, ask to use a condom, or stop at any moment, whether in dating or marriage. If you ever experience sexual coercion, reproductive control (a partner hiding or sabotaging your birth control), or physical or sexual violence, tap the Map or Emergency Contacts tab in FemPowHer to connect with a confidential 24/7 Women’s Safe Haven or hospital.'
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
      containerStyle: { gridTemplateRows: '220px repeat(3, minmax(165px, 1fr))' },
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
