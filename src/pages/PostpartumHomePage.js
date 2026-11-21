import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=270';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=270';
import {
  renderCleanWaterHydrationCartoonSvg,
  renderIronRichCareCartoonSvg,
  renderKegelExerciseTimerCartoonSvg,
  renderMotherHoldingNewbornSvg,
  renderPartnerPillsCartoonSvg,
  renderPelvicPessaryRingCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=270';

const h = React.createElement;

export default function PostpartumHomePage({
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

  // 5 Full-Width MakingGifButtons1 First-Person Postpartum Buttons
  // (gifSrc: null slots ready for custom GIFs to be added later)
  const postpartumButtons = [
    {
      id: 'postpartum-body-recovery',
      label: tr('postpartumBtnBodyRecovery', 'I just gave birth! What is happening to my body?'),
      gifSrc: null, // Ready for custom GIF (e.g. './assets/postpartum-body-recovery.gif')
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
      id: 'postpartum-csection-vaginal',
      label: tr('postpartumBtnCSectionVaginal', 'Healing After Birth'),
      gifSrc: null, // Ready for custom GIF (e.g. './assets/postpartum-healing.gif')
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
      id: 'postpartum-breastfeeding',
      label: tr('postpartumBtnBreastfeeding', 'Breastfeeding'),
      gifSrc: null, // Ready for custom GIF (e.g. './assets/postpartum-breastfeeding.gif')
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
      id: 'postpartum-mental-health',
      label: tr('postpartumBtnMentalHealth', 'I feel overwhelmed, sad, or anxious'),
      gifSrc: null, // Ready for custom GIF (e.g. './assets/postpartum-mental-health.gif')
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
      id: 'postpartum-after-loss',
      label: tr('postpartumBtnAfterLoss', 'Postpartum after Loss'),
      gifSrc: null, // Ready for custom GIF (e.g. './assets/postpartum-after-loss.gif')
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
    'postpartum-body-recovery': {
      pageId: 'PostpartumBodyRecoveryHomePage1',
      title: tr('postpartumBtnBodyRecovery', 'I just gave birth! What is happening to my body?'),
      bgGradient: 'linear-gradient(180deg, #E11D48 0%, #BE123C 100%)',
      bgColor: '#D41742',
      titleTintColor: '#FFC9D6',
      sections: [
        {
          id: 'what-is-postpartum',
          heading: 'What Is the Postpartum Period (The Fourth Trimester)?',
          body:
            'The postpartum period begins the moment your baby and placenta are delivered and lasts for the first 6 to 12 weeks (and up to a full year) as your uterus, hormones, pelvic floor, and blood volume return to their pre-pregnancy baseline. Over the first 6 weeks, your uterus shrinks from the size of a watermelon back down to the size of a small pear, shedding its inner lining in a natural vaginal discharge called lochia.'
        },
        {
          id: 'normal-vs-danger-signs',
          heading: 'Normal Postpartum Bleeding (Lochia) vs. Emergency Danger Signs',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'Normal lochia starts bright red for the first 3 to 4 days, turns pinkish-brown over the next week, and fades to a yellowish-white discharge before stopping around 4 to 6 weeks. Go to a hospital immediately if you soak through more than one full pad in an hour, pass blood clots larger than a plum, notice foul-smelling vaginal discharge with a fever, or develop a severe headache, blurred vision, chest pain, or swelling in one leg.'
        },
        {
          id: 'afterpains-and-sweats',
          heading: 'Uterine Cramping (Afterpains), Night Sweats, and Hair Changes',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'It is completely normal to feel period-like uterine cramps (especially while breastfeeding, because the hormone oxytocin contracts the uterus to prevent heavy bleeding) and heavy night sweats during the first two weeks as your body flushes out extra pregnancy fluid. Around 3 to 4 months postpartum, temporary hair shedding is also normal and grows back naturally.'
        },
        {
          id: 'what-to-do-today',
          heading: 'What You Can Do Today',
          stickerLabel: 'DAILY KEGEL EXERCISES',
          stickerInnerTop: '5s',
          stickerInnerBottom: 'HOLD & LIFT',
          graphicRenderer: (sticker, topTxt, botTxt) =>
            renderKegelExerciseTimerCartoonSvg(sticker, topTxt, botTxt),
          body:
            'Rest as much as possible, drink plenty of clean water, eat iron-rich and protein-rich foods to rebuild your blood stores, use clean pads (never tampons or menstrual cups during the first 6 weeks while the placental site inside your uterus is healing), and schedule your postpartum checkup at a clinic on your FemPowHer map.'
        }
      ]
    },
    'postpartum-csection-vaginal': {
      pageId: 'PostpartumCSectionVaginalHomePage1',
      title: tr('postpartumBtnCSectionVaginal', 'Healing After Birth'),
      bgGradient: 'linear-gradient(180deg, #F97316 0%, #D9460F 100%)',
      bgColor: '#EA580C',
      titleTintColor: '#FFE2CC',
      sections: [
        {
          id: 'vaginal-perineal-healing',
          heading: 'Healing Your Perineum and Pelvic Floor After a Vaginal Birth',
          stickerLabel: 'PESSARY & PELVIC SUPPORT',
          graphicRenderer: (sticker) => renderPelvicPessaryRingCartoonSvg(sticker),
          body:
            'After a vaginal delivery, the area between your vaginal opening and anus (the perineum) may be stretched, swollen, or have dissolvable stitches from a tear or episiotomy. Rinse your vulva with warm clean water from a squeeze bottle while and after urinating so urine does not sting, pat dry gently from front to back, use cool packs wrapped in clean cloth during the first 24 hours, and drink water and eat fiber so your first bowel movements are soft without straining.'
        },
        {
          id: 'csection-incision-care',
          heading: 'Caring for Your Incision After a Cesarean Section (C-Section)',
          body:
            'A Cesarean section is major abdominal and uterine surgery. Keep your lower-belly incision clean and dry, wash gently with mild soap and water (never scrub the stitches), hold a soft pillow against your incision when coughing, laughing, or standing up from bed, and avoid lifting anything heavier than your newborn baby for the first 6 weeks.'
        },
        {
          id: 'infection-red-flags',
          heading: 'When to Go to a Hospital for Wound or Uterine Infection',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Visit a hospital or OB/GYN clinic immediately if your C-section incision or vaginal stitches become increasingly red, hot, swollen, begin oozing pus or opening up, or if you develop a fever over 38°C (100.4°F) or worsening lower belly pain.'
        },
        {
          id: 'when-to-resume-intimacy',
          heading: 'When It Is Safe to Resume Sex and Physical Activity',
          body:
            'Whether you delivered vaginally or by C-section, doctors recommend waiting at least 6 weeks (and until your postpartum checkup confirms your cervix is closed and any tears or incisions have healed) before putting anything inside the vagina or resuming sexual intercourse, because the raw spot inside the uterus where the placenta was attached is vulnerable to serious infection.'
        }
      ]
    },
    'postpartum-breastfeeding': {
      pageId: 'PostpartumBreastfeedingHomePage1',
      title: tr('postpartumBtnBreastfeeding', 'Breastfeeding'),
      bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
      bgColor: '#0E857B',
      titleTintColor: '#CCFBF1',
      sections: [
        {
          id: 'colostrum-to-milk',
          heading: 'From Golden Colostrum to Mature Breast Milk',
          graphic: renderMotherHoldingNewbornSvg(),
          body:
            'During the first 2 to 4 days after birth, your breasts produce colostrum, a thick, golden-yellow milk packed with concentrated antibodies and nutrients that coat your newborn’s stomach and protect against infection. Around day 3 to 5, your mature milk comes in, which can make your breasts feel full, warm, and heavy (engorgement). Feeding your newborn on demand (8 to 12 times in 24 hours) keeps milk flowing and relieves fullness.'
        },
        {
          id: 'latch-and-sore-nipples',
          heading: 'Fixing a Painful Latch, Blocked Ducts, and Mastitis',
          body:
            'Breastfeeding works best with a deep latch where the baby takes a large mouthful of the darker area around the nipple (the areola), not just the tip of the nipple. If you develop a hard, hot, red, wedge-shaped painful area on one breast accompanied by fever, chills, and flu-like body aches, visit a clinic promptly for mastitis evaluation: mastitis is a breast inflammation/infection treated with pregnancy- and breastfeeding-safe antibiotics while continuing to empty the breast.'
        },
        {
          id: 'nutrition-and-hydration',
          heading: 'Hydration, Nutrition, and Fed Is Best',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Keep a glass of clean water beside you every time you nurse, and eat extra nutrient-dense meals with iron, calcium, and protein. If you cannot breastfeed or choose to use infant formula (or combination feed), always prepare formula with safe, boiled and cooled clean water, and remember that your love and care are what bond you and your baby.'
        }
      ]
    },
    'postpartum-mental-health': {
      pageId: 'PostpartumMentalHealthHomePage1',
      title: tr('postpartumBtnMentalHealth', 'I feel overwhelmed, sad, or anxious'),
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'baby-blues-vs-ppd',
          heading: 'The "Baby Blues" vs. Postpartum Depression and Anxiety',
          body:
            'Up to 80% of new mothers experience the "baby blues" during the first 2 weeks after childbirth as estrogen and progesterone drop sharply and sleep is interrupted, causing sudden crying spells, mood swings, and feeling overwhelmed. However, if deep sadness, numbness, hopeless feelings, severe anxiety, racing thoughts, inability to sleep even when the baby sleeps, or difficulty bonding with your baby last longer than 2 weeks, you may be experiencing Postpartum Depression (PPD) or Postpartum Anxiety.'
        },
        {
          id: 'zero-shame-medical-condition',
          heading: 'Postpartum Depression Is a Medical Condition, Never a Failure as a Mother',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Postpartum depression and anxiety affect 1 in 7 women worldwide. Having these feelings never means you are a bad mother or that you do not love your child. It is a real biological and emotional shift after birth that responds rapidly to compassionate support, rest, counseling, and safe medical treatment.'
        },
        {
          id: 'emergency-postpartum-psychosis',
          heading: 'When to Seek Immediate Emergency Help',
          body:
            'If you ever have thoughts of harming yourself or your baby, or if a new mother experiences sudden confusion, paranoia, hallucinations, or days without any sleep at all (signs of a rare medical emergency called postpartum psychosis), reach out immediately to a hospital, OB/GYN clinic, or the Emergency Contacts tab on your FemPowHer app.'
        }
      ]
    },
    'postpartum-after-loss': {
      pageId: 'PostpartumAfterLossHomePage1',
      title: tr('postpartumBtnAfterLoss', 'Postpartum after Loss'),
      bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1E40AF 100%)',
      bgColor: '#1D4ED8',
      titleTintColor: '#DBEAFE',
      sections: [
        {
          id: 'your-body-is-still-postpartum',
          heading: 'Going Through Physical Postpartum Recovery Without Your Baby in Your Arms',
          body:
            'One of the hardest realities after a second-trimester loss, stillbirth, or newborn loss is that your body still goes through every physical change of postpartum recovery while your heart is grieving. Your uterus still contracts back down, you still bleed lochia for several weeks, your hormones drop rapidly, and you deserve the exact same gentle physical rest, follow-up medical checkups, and protection from heavy labor as any mother who just gave birth.'
        },
        {
          id: 'when-milk-comes-in-after-loss',
          heading: 'What to Do When Your Breast Milk Comes In After a Loss',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'If your loss occurred after 16 to 20 weeks of pregnancy or after birth, your breast milk may still come in 3 to 5 days later, which can be emotionally heartbreaking and physically painful. To help your body gently stop milk production without developing mastitis, wear a snug (but not painful) supportive bra day and night, place cold packs or chilled clean cabbage leaves over your breasts for 15 to 20 minutes at a time, avoid letting hot shower water hit your breasts, and express only a few drops by hand if your breasts feel painfully tight (because fully pumping tells your body to make more milk). Some clinics can also prescribe a safe medication (such as cabergoline) to stop milk from coming in.'
        },
        {
          id: 'physical-warning-signs',
          heading: 'Physical Warning Signs to Watch For While Healing',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'Please seek immediate care at a Women’s Hospital or OB/GYN clinic on your FemPowHer map if you soak through two pads an hour for two hours in a row, develop a fever or chills, notice foul-smelling vaginal discharge, or feel severe lower abdominal pain, as these can be signs of retained placental tissue or uterine infection that need prompt, gentle treatment.'
        },
        {
          id: 'grief-and-zero-blame',
          heading: 'Honoring Your Grief and Rejecting Unfair Blame',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Pregnancy and infant loss are medical tragedies, never a punishment or the fault of the mother. Give yourself permission to cry, rest, and grieve at your own pace, lean on trusted loved ones or Women’s Safe Havens on your map, and wait until both your body and your heart feel ready before thinking about any future pregnancy.'
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
      id: 'PostpartumHomePage',
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
          tr('eduBtnPostpartum', t.eduBtnPostpartum || 'Postpartum')
        )
      )
    ),
    h(MakingGifButtons1, {
      sections: postpartumButtons,
      containerClassName: 'flex-1 w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${postpartumButtons.length}, minmax(165px, 1fr))` },
      onSelectSection: (sec) => {
        if (sec && sec.id) {
          setActiveSubPage(sec.id);
        }
      }
    })
  );
}
