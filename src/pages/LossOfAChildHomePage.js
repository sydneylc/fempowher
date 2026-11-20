import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=240';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=240';
import {
  renderCleanWaterHydrationCartoonSvg,
  renderIronRichCareCartoonSvg,
  renderPartnerPillsCartoonSvg
} from './FlyerCartoonIllustrations.js?v=240';

const h = React.createElement;

export default function LossOfAChildHomePage({
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

  // 5 Short, Emotionally Steady, Globally Translatable First-Person Buttons for Loss of a Child
  const lossButtons = [
    {
      id: 'loss-miscarriage',
      label: tr('lossBtnMiscarriage', 'I’ve Had a Miscarriage'),
      targetPage: 'MiscarriageHomePage',
      gifSrc: './assets/loss-hub-miscarriage.gif?v=240',
      gifAlt: 'Woman in an olive-and-sand military soldier uniform and beret placing one hand over her heart and the other over her womb with a falling tear and memorial blossom',
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
      id: 'loss-stillbirth',
      label: tr('lossBtnStillbirth', 'I’ve Had a Stillbirth'),
      gifSrc: './assets/loss-hub-stillbirth.gif?v=240',
      gifAlt: 'Middle Eastern woman in a plum-indigo hijab and modest gloves holding a white keepsake card with two tiny baby footprints while a white butterfly drifts upward',
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
      id: 'loss-infant',
      label: tr('lossBtnLostInfant', 'I’ve Lost an Infant'),
      gifSrc: './assets/loss-hub-infant.gif?v=240',
      gifAlt: 'Southeast Asian woman with a low side bun and jade hairpin cradling a folded baby blanket and tiny blue infant booties',
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
      id: 'loss-child',
      label: tr('lossBtnLostChild', 'I’ve Lost My Child'),
      gifSrc: './assets/loss-hub-child.gif?v=240',
      gifAlt: 'Afro-Latina / West African mother with textured dark afro puffs and a gold headband hugging her child’s beloved teddy bear',
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
      id: 'loss-pregnant-after-loss',
      label: tr('lossBtnPregnantAfterLoss', 'I Am Pregnant After a Loss'),
      targetPage: 'PregnancyAfterLossHomePage',
      gifSrc: './assets/loss-hub-pregnant-after-loss.gif?v=240',
      gifAlt: 'Visibly pregnant Indigenous Andean woman with twin braids looking anxious and worried with a forehead sweat drop while clutching her belly beside a rainbow and heart badge',
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
    'loss-stillbirth': {
      pageId: 'StillbirthLossHomePage1',
      title: tr('lossBtnStillbirth', 'I’ve Had a Stillbirth'),
      bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1E40AF 100%)',
      bgColor: '#1D4ED8',
      titleTintColor: '#DBEAFE',
      sections: [
        {
          id: 'what-is-stillbirth',
          heading: 'Understanding Stillbirth (Losing a Baby Before or During Delivery)',
          body:
            'A stillbirth is the loss of a baby in the womb after 20 weeks of pregnancy or during labor and childbirth. It is a profound medical and emotional tragedy that happens to millions of mothers around the world every year due to placental complications, umbilical cord accidents, preeclampsia, obstructed labor, or silent infections. A stillbirth is never a curse and never the fault of the mother.'
        },
        {
          id: 'physical-recovery',
          heading: 'Physical Postpartum Healing After Delivering a Baby Who Was Born Still',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'Because you went through labor and delivery (or a Cesarean section), your body goes through full postpartum physical recovery even while your heart is grieving. You will have vaginal bleeding (lochia) for 4 to 6 weeks as your uterus shrinks back down, and any vaginal stitches or surgical incision need gentle daily washing with clean warm water, iron-rich foods, and rest from heavy physical work.'
        },
        {
          id: 'managing-breast-milk',
          heading: 'Gently Stopping Breast Milk When Your Milk Comes In',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Three to five days after delivery, your breasts may fill with milk, which can be deeply painful emotionally and physically. Wear a snug, comfortable bra day and night, place cool packs or chilled clean cabbage leaves on your breasts for 15 minutes at a time, keep hot shower water off your breasts, and hand-express only a few drops if needed to relieve pressure (avoid full pumping, which tells the body to make more milk). Ask your doctor or midwife if a milk-suppressing tablet (such as cabergoline) is available.'
        },
        {
          id: 'danger-signs-and-support',
          heading: 'When to Go to a Hospital and Supporting Your Heart',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Go to a hospital immediately if you soak through two pads in an hour, develop a fever or chills, notice foul-smelling vaginal discharge, or feel a hot, red, painful lump in your breast. Give yourself permission to grieve in your own way and lean on compassionate family, midwives, or a Women’s Safe Haven on your FemPowHer map.'
        }
      ]
    },
    'loss-infant': {
      pageId: 'LostAnInfantHomePage1',
      title: tr('lossBtnLostInfant', 'I’ve Lost an Infant'),
      bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
      bgColor: '#0E857B',
      titleTintColor: '#CCFBF1',
      sections: [
        {
          id: 'losing-a-newborn-or-infant',
          heading: 'Losing a Newborn or Baby in the First Year of Life',
          body:
            'Losing an infant, whether in the first days after birth (neonatal loss) or during the first year of life, is one of the deepest heartbreaks a mother can ever experience. Whether your baby passed away from preterm birth complications, infection, birth asphyxia, congenital conditions, or sudden infant death (SIDS), please know that you are not alone and you deserve gentle medical and emotional care.'
        },
        {
          id: 'caring-for-breasts-when-nursing-stops',
          heading: 'Caring for Your Breasts If You Were Breastfeeding Your Baby',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'If you had been breastfeeding your infant when your baby passed away, stopping nursing suddenly can cause painful breast engorgement, plugged ducts, or mastitis (breast infection). Wear a supportive non-underwire bra, apply cold compresses, drink clean water (never restrict water), and express just enough milk by hand to soften the breast until your milk supply gradually slows down. If you develop a fever, chills, or a red, hot wedge on your breast, visit a clinic promptly for safe antibiotic care.'
        },
        {
          id: 'postpartum-body-and-grief',
          heading: 'How Grief and Postpartum Hormones Affect Your Body',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'In the weeks and months after losing an infant, sharp hormone drops combined with grief can cause exhaustion, chest tightness, aching arms, trouble sleeping, and irregular menstrual periods when your cycle returns. Be gentle with your body, try to eat small nourishing meals, and never hesitate to visit a Women’s Clinic or Safe Haven on your FemPowHer map for physical checkups or grief support.'
        }
      ]
    },
    'loss-child': {
      pageId: 'LostMyChildHomePage1',
      title: tr('lossBtnLostChild', 'I’ve Lost My Child'),
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'grief-at-any-age',
          heading: 'Carrying the Loss of Your Child at Any Age',
          body:
            'Whether your child was a toddler, a young child, a teenager, or an adult, losing your child is a life-altering grief that no mother should have to carry alone. Grief is not something you "get over" on a schedule; it comes in waves, and loving and remembering your child is a natural part of who you are.'
        },
        {
          id: 'how-intense-grief-affects-a-womans-body',
          heading: 'How Deep Grief Affects Your Physical Health, Heart, and Cycle',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Severe grief floods the body with stress hormones (cortisol and adrenaline), which can weaken your immune system, disrupt sleep and digestion, cause chest pain or palpitations, and even cause your menstrual period to stop temporarily or become irregular. Drinking clean water, resting even when you cannot sleep, and checking in with a compassionate healthcare provider help protect your physical health while you grieve.'
        },
        {
          id: 'supporting-each-other',
          heading: 'Grieving With Your Partner, Surviving Children, and Community',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'Mothers and fathers often grieve differently: one person may need to talk and cry openly while the other stays quiet or stays busy with work. Give yourself and your loved ones grace, reject any cultural or family blame, and use the FemPowHer map or Emergency Contacts tab anytime you need a safe place to talk or medical support.'
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
      id: 'LossOfAChildHomePage',
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
          tr('eduBtnLossOfChild', t.eduBtnLossOfChild || 'Loss of a Child')
        )
      )
    ),
    h(MakingGifButtons1, {
      sections: lossButtons,
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
