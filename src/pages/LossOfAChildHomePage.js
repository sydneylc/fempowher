import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=253';
import { IamPregALHomePageStyle } from './PregnancyAfterLossHomePage.js?v=253';

const h = React.createElement;

// ============================================================================
// Custom Circular Cartoon Illustrations for Stillbirth, Infant Loss & Child Loss
// (Matching the exact circular float style of IamPregALHomePageStyle!)
// ============================================================================

function renderFootprintsMemorialCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // White keepsake card with two baby footprints & heart
    h('rect', {
      x: '46',
      y: '40',
      width: '88',
      height: '100',
      rx: '14',
      fill: '#FFFFFF',
      stroke,
      strokeWidth: '3'
    }),
    // Left footprint
    h('ellipse', { cx: '74', cy: '96', rx: '9', ry: '17', transform: 'rotate(-10 74 96)', fill: accent }),
    h('circle', { cx: '65', cy: '74', r: '3', fill: accent }),
    h('circle', { cx: '71', cy: '72', r: '2.6', fill: accent }),
    h('circle', { cx: '77', cy: '73', r: '2.3', fill: accent }),
    h('circle', { cx: '82', cy: '76', r: '2', fill: accent }),
    // Right footprint
    h('ellipse', { cx: '106', cy: '96', rx: '9', ry: '17', transform: 'rotate(10 106 96)', fill: accent }),
    h('circle', { cx: '115', cy: '74', r: '3', fill: accent }),
    h('circle', { cx: '109', cy: '72', r: '2.6', fill: accent }),
    h('circle', { cx: '103', cy: '73', r: '2.3', fill: accent }),
    h('circle', { cx: '98', cy: '76', r: '2', fill: accent }),
    // Small heart at top of card
    h('path', {
      d: 'M90 54 C87 49, 80 50, 80 55 C80 60, 90 66, 90 68 C90 66, 100 60, 100 55 C100 50, 93 49, 90 54 Z',
      fill: stroke
    })
  );
}

// Gentle Birth & Bereavement Care in Labor Cartoon (Mother supported by partner/midwife during stillbirth labor)
function renderStillbirthLaborCareCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Two gentle hands holding each other in support with a soft memorial candle/heart above
    h('circle', { cx: '90', cy: '52', r: '18', fill: '#FFFFFF', stroke, strokeWidth: '2.5' }),
    h('path', {
      d: 'M90 46 C87 41, 80 42, 80 47 C80 52, 90 58, 90 61 C90 58, 100 52, 100 47 C100 42, 93 41, 90 46 Z',
      fill: accent
    }),
    // Left arm & hand reaching in
    h('path', {
      d: 'M34 118 C52 108, 68 104, 86 108',
      stroke: '#C68B59',
      strokeWidth: '14',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Right arm & hand holding left hand
    h('path', {
      d: 'M146 118 C128 108, 112 104, 90 108',
      stroke: '#8D5524',
      strokeWidth: '14',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Soft comforting blanket wave beneath
    h('path', {
      d: 'M46 138 Q90 124 134 138',
      stroke,
      strokeWidth: '4',
      fill: 'none',
      strokeLinecap: 'round'
    })
  );
}

// Parents Kneeling to Comfort a Grieving Sibling Cartoon
function renderGrievingSiblingSupportCartoonSvg(bg = '#FFEDD5', stroke = '#9A3412', accent = '#EA580C') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Left parent kneeling toward child
    h('circle', { cx: '52', cy: '58', r: '14', fill: '#C68B59' }),
    h('path', { d: 'M34 148 C34 108, 42 86, 56 86 C68 86, 72 108, 72 148 Z', fill: stroke }),
    // Right mother leaning in lovingly toward child
    h('circle', { cx: '128', cy: '58', r: '14', fill: '#8D5524' }),
    h('path', { d: 'M108 148 C108 108, 112 86, 124 86 C138 86, 146 108, 146 148 Z', fill: accent }),
    // Surviving child standing in the middle being comforted
    h('circle', { cx: '90', cy: '78', r: '12', fill: '#B87D55' }),
    h('path', { d: 'M74 152 C74 122, 80 104, 90 104 C100 104, 106 122, 106 152 Z', fill: '#F97316' }),
    // Shared loving heart above the child
    h('path', {
      d: 'M90 42 C87 37, 80 38, 80 43 C80 48, 90 54, 90 57 C90 54, 100 48, 100 43 C100 38, 93 37, 90 42 Z',
      fill: stroke
    })
  );
}

function renderDoctorPlacentaAnswersCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Medical clipboard with heart & magnifying lens
    h('rect', {
      x: '48',
      y: '38',
      width: '84',
      height: '106',
      rx: '12',
      fill: '#FFFFFF',
      stroke,
      strokeWidth: '3.2'
    }),
    h('rect', { x: '70', y: '30', width: '40', height: '14', rx: '6', fill: accent }),
    h('line', { x1: '64', y1: '68', x2: '116', y2: '68', stroke: accent, strokeWidth: '4', strokeLinecap: 'round' }),
    h('line', { x1: '64', y1: '86', x2: '106', y2: '86', stroke: accent, strokeWidth: '4', strokeLinecap: 'round' }),
    h('line', { x1: '64', y1: '104', x2: '98', y2: '104', stroke: accent, strokeWidth: '4', strokeLinecap: 'round' }),
    h('circle', { cx: '112', cy: '112', r: '16', fill: bg, stroke, strokeWidth: '3.2' }),
    h('line', { x1: '124', y1: '124', x2: '136', y2: '136', stroke, strokeWidth: '4.5', strokeLinecap: 'round' })
  );
}

function renderPostpartumRestAndMilkCareCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Warm water pitcher / mug & soothing cool leaf compress icon
    h('path', {
      d: 'M56 70 L108 70 L104 134 C103 142, 95 146, 82 146 C69 146, 61 142, 60 134 Z',
      fill: accent,
      stroke,
      strokeWidth: '3'
    }),
    h('path', {
      d: 'M108 82 C124 82, 124 116, 106 116',
      fill: 'none',
      stroke,
      strokeWidth: '4.5',
      strokeLinecap: 'round'
    }),
    // Gentle cooling green leaf & heart on pitcher
    h('path', {
      d: 'M82 96 C79 91, 71 92, 71 98 C71 104, 82 110, 82 113 C82 110, 93 104, 93 98 C93 92, 85 91, 82 96 Z',
      fill: '#FFFFFF'
    }),
    h('path', {
      d: 'M68 52 C68 38, 96 38, 96 52 C86 58, 76 58, 68 52 Z',
      fill: '#34D399',
      stroke: '#059669',
      strokeWidth: '2.5'
    })
  );
}

function renderWarningShieldCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    h('path', {
      d: 'M90 28 L138 46 L138 92 C138 124, 115 144, 90 154 C65 144, 42 124, 42 92 L42 46 Z',
      fill: stroke,
      stroke: accent,
      strokeWidth: '3.5'
    }),
    h('rect', { x: '82', y: '58', width: '16', height: '54', rx: '4', fill: '#FFFFFF' }),
    h('rect', { x: '63', y: '77', width: '54', height: '16', rx: '4', fill: '#FFFFFF' })
  );
}

function renderGriefCommunitySupportCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Two parents / supporters standing together under a shared heart
    h('circle', { cx: '66', cy: '64', r: '16', fill: '#8D5524' }),
    h('path', { d: 'M44 152 C44 110, 52 92, 68 92 C82 92, 88 110, 88 152 Z', fill: stroke }),
    h('circle', { cx: '114', cy: '64', r: '16', fill: '#D99B78' }),
    h('path', { d: 'M92 152 C92 110, 98 92, 112 92 C128 92, 136 110, 136 152 Z', fill: accent }),
    h('path', {
      d: 'M90 36 C87 30, 78 31, 78 38 C78 44, 90 51, 90 54 C90 51, 102 44, 102 38 C102 31, 93 30, 90 36 Z',
      fill: accent
    })
  );
}

export default function LossOfAChildHomePage({
  onBack,
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
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
      gifSrc: './assets/loss-hub-miscarriage.gif?v=253',
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
      gifSrc: './assets/loss-hub-stillbirth.gif?v=253',
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
      gifSrc: './assets/loss-hub-infant.gif?v=253',
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
      gifSrc: './assets/loss-hub-child.gif?v=253',
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
      gifSrc: './assets/loss-hub-pregnant-after-loss.gif?v=253',
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

  // ============================================================================
  // Global IamPregALHomePageStyle Configurations (Different Color Palettes!)
  //   1. Stillbirth: Royal Indigo / Periwinkle Blue (#1E3A8A / #2563EB / #DBEAFE)
  //   2. Infant Loss: Soothing Deep Teal / Seafoam Emerald (#0F766E / #0D9488 / #CCFBF1)
  //   3. Child Loss: Warm Terracotta / Amber-Rosewood (#9A3412 / #EA580C / #FFEDD5)
  // ============================================================================
  const subPageConfigs = {
    'loss-stillbirth': {
      pageId: 'StillbirthLossHomePage1',
      title: tr('lossBtnStillbirth', 'I’ve Had a Stillbirth'),
      palette: {
        pageBg: '#F8FAFF',
        headerDark: '#1E3A8A',
        accentMedium: '#2563EB',
        tintLight: '#DBEAFE',
        inkColor: '#172554',
        timelineLine: '#93C5FD'
      },
      sections: [
        {
          id: 'what-is-stillbirth',
          keyLabel: 'What Is Stillbirth',
          heading: 'Understanding Stillbirth and Why You Are Not to Blame',
          gifSrc: null,
          cartoonRenderer: () => renderFootprintsMemorialCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'A stillbirth is the loss of a baby in the womb after 20 to 24 weeks of pregnancy or during labor and birth. Doctors and midwives group stillbirth by when it happens: an early stillbirth happens between 20 and 27 weeks of pregnancy, a late stillbirth happens between 28 and 36 weeks, and a term stillbirth happens at 37 weeks or later.',
            'In about 1 out of every 3 stillbirths, no exact medical cause can be found even after testing, and many stillbirths happen in pregnancies that seemed completely healthy. When a cause is found, it usually involves the placenta or umbilical cord (such as placental abruption or a cord accident blocking blood and oxygen), a silent maternal or fetal infection, genetic or structural differences in the baby, or medical conditions like severe high blood pressure (preeclampsia) or diabetes.',
            'Losing a baby so far along in pregnancy is a heartbreaking tragedy. Please know that a stillbirth is never a curse and never punishment for anything you thought, said, or did.'
          ]
        },
        {
          id: 'giving-birth-with-a-stillbirth',
          keyLabel: 'Giving Birth in Stillbirth',
          heading: 'Going Through Labor and Giving Birth When Your Baby Has Died',
          gifSrc: null,
          cartoonRenderer: () => renderStillbirthLaborCareCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Hearing the words that your baby no longer has a heartbeat is a devastating shock. For many mothers, one of the hardest and saddest truths to take in right after that news is learning that you still have to go through labor and give birth to your baby. Going through physical contractions and birth while knowing your baby will be born quiet instead of crying is a uniquely painful experience, and it is normal to feel scared, numb, or overwhelmed.',
            'If your own body is in danger from severe high blood pressure (preeclampsia), sepsis (infection), heavy bleeding from the placenta, or blood-clotting problems, doctors will deliver the baby right away to protect your life. Otherwise, your midwife or doctor can talk with you gently about planning your delivery and starting labor with medicine (induction of labor).',
            'Even when mothers understandably wish they could go to sleep and have a C-section right away, doctors and midwives usually recommend a vaginal birth whenever it is safe for the mother. A vaginal delivery has a much shorter physical recovery time, avoids major belly surgery while you are grieving, and keeps your womb safer for any future pregnancy. During labor, you deserve a quiet, private birth room, strong pain relief, a loving birth companion by your side, and compassionate bereavement care where every nurse and midwife treats you and your baby with deep respect.'
          ]
        },
        {
          id: 'seeing-holding-and-memories',
          keyLabel: 'Holding Your Baby & Answers',
          heading: 'Seeing, Holding, and Making Memories With Your Baby After Birth',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'When your baby is born, there is no single "right" way to say goodbye. Your midwife or doctor should follow your wishes gently and never rush you. Many mothers and fathers find deep comfort in seeing and holding their baby wrapped in a soft blanket, naming their baby, taking handprints or footprints, keeping a lock of hair, or using a special cooled cot if the hospital has one so the family can spend quiet time together.',
            'If you feel too scared or overwhelmed to hold your baby right away, you can ask the midwife to describe your baby to you first or wrap your baby gently until you feel ready, and you can also invite a religious leader, chaplain, or family elder to offer prayers or blessings according to your culture and faith.',
            'Your doctor or midwife may also ask if you want an examination of the placenta, blood tests, or a gentle post-birth exam of the baby. Looking at the placenta and cord often helps doctors find answers about why the stillbirth happened and helps them create a care plan to protect you in the future.'
          ]
        },
        {
          id: 'postpartum-body-and-milk',
          keyLabel: 'Postpartum & Milk Care',
          heading: 'Caring for Your Postpartum Body and Gently Stopping Breast Milk',
          gifSrc: null,
          cartoonRenderer: () => renderPostpartumRestAndMilkCareCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Because you went through labor and delivery or a C-section, your body goes through full physical postpartum healing at the same time your heart is grieving. You will have vaginal bleeding called lochia for 4 to 6 weeks while your womb shrinks back down. Use clean period pads, wash any vaginal stitches gently with warm clean water, keep a C-section scar clean and dry, and eat iron-rich foods like beans, leafy greens, eggs, or meat.',
            'About 3 to 5 days after giving birth, your hormones signal your breasts to fill with milk. Feeling your milk come in when your baby is not in your arms can hurt deeply both physically and emotionally. To tell your body gently to stop making milk, wear a snug, supportive bra without underwires day and night, place cool cloths or cold packs on your breasts for 15 minutes at a time, and keep hot shower water off your breasts.',
            'Do not pump your breasts fully, because emptying the breasts tells your body to make more milk. If your breasts feel very tight and painful, express just a few drops by hand to soften them, or ask your doctor or midwife before leaving the hospital if a medicine tablet that stops breast milk is available.'
          ]
        },
        {
          id: 'urgent-postpartum-signs-and-support',
          keyLabel: 'Warning Signs & Support',
          heading: 'Urgent Postpartum Danger Signs and Supporting Your Heart',
          gifSrc: null,
          cartoonRenderer: () => renderWarningShieldCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Serious postpartum complications can happen any time in the weeks and months after delivering a baby. Go to an emergency hospital right away if you have heavy bleeding that soaks through 2 pads an hour, a fever of 100.4°F (38°C) or higher, bad-smelling vaginal discharge, a severe headache that does not go away, blurry vision or seeing spots, sudden swelling in your hands or face, pain or redness in your calf or leg, or chest pain and trouble breathing.',
            'Always tell the emergency nurse or doctor that you recently delivered a baby so they check for postpartum complications immediately.',
            'Your emotional survival matters just as much as your physical recovery. Lean on loved ones who let you speak your baby’s name and cry freely, and use your FemPowHer map or Emergency Contacts tab anytime you need a compassionate women’s clinic, counselor, or Women’s Safe Haven near you.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'StillbirthFollowUpChecklistHomePage1',
          title: 'Postpartum Checkup & Placenta Questions',
          subtitle: 'Questions to bring to your OB/GYN or midwife after a stillbirth'
        },
        {
          pageId: 'StillbirthMemoryAndPartnerSupportHomePage1',
          title: 'Honoring Your Baby & Supporting Your Partner',
          subtitle: 'Gentle ways to remember your baby and walk through grief together'
        }
      ]
    },

    'loss-infant': {
      pageId: 'LostAnInfantHomePage1',
      title: tr('lossBtnLostInfant', 'I’ve Lost an Infant'),
      palette: {
        pageBg: '#F7FEFD',
        headerDark: '#0F766E',
        accentMedium: '#0D9488',
        tintLight: '#CCFBF1',
        inkColor: '#134E4A',
        timelineLine: '#5EEAD4'
      },
      sections: [
        {
          id: 'losing-a-newborn-or-infant',
          keyLabel: 'Understanding Infant Loss',
          heading: 'Losing a Newborn or Baby in the First Year of Life',
          gifSrc: null,
          cartoonRenderer: () => renderFootprintsMemorialCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Losing a baby in the first 28 days after birth (neonatal loss) or at any point during the first year of life is one of the deepest heartbreaks a mother can ever face. An infant loss can happen from premature birth, birth complications, congenital conditions, severe infections, accidental death, or Sudden Unexpected Death in Infancy (SUDI), which includes Sudden Infant Death Syndrome (SIDS).',
            'When an infant dies suddenly in their sleep or after an illness in the hospital, mothers almost always replay every single moment in their minds and wonder if they missed a sign. Please hear this clearly: you loved your baby with all your heart, and you are not to blame.',
            'Your arms may physically ache to hold your baby, and you may wake up at night thinking you hear your baby crying in a quiet room. Bereavement midwives and counselors note that aching arms and hearing your baby are normal physical and emotional responses when your body and brain spent months caring for a newborn.'
          ]
        },
        {
          id: 'breast-care-after-infant-loss',
          keyLabel: 'Breast & Milk Care',
          heading: 'Caring for Your Breasts If You Were Breastfeeding Your Baby',
          gifSrc: null,
          cartoonRenderer: () => renderPostpartumRestAndMilkCareCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'If you were breastfeeding or expressing milk for your infant when your baby passed away, stopping nursing all at once can cause your breasts to become painfully full (engorged) and can lead to blocked milk ducts or a painful breast infection called mastitis.',
            'To help your milk supply slow down safely without hurting your body, wear a comfortable, snug bra without underwires, place cold packs or cool clean cloths on your breasts for 15 minutes at a time, and keep drinking plenty of clean water. Never stop drinking water to try to dry up breast milk, because your body needs water to heal.',
            'If your breasts feel rock-hard and painful, gently express just enough milk by hand for 1 to 2 minutes only until the tightness softens. Emptying the breasts completely tells your body to make more milk. Some mothers also choose to donate stored breast milk in their baby’s memory if a local milk bank is available. If you notice a hot, red, painful wedge on your breast along with a fever or body chills, visit a clinic right away for safe antibiotic medicine.'
          ]
        },
        {
          id: 'postpartum-hormones-and-body',
          keyLabel: 'Your Postpartum Body',
          heading: 'How Postpartum Hormones and Deep Grief Affect Your Body',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'When you lose an infant during the first year after giving birth, your body is still healing from pregnancy and childbirth. Sharp drops in breastfeeding and postpartum hormones mix with grief stress hormones, which can cause extreme physical exhaustion, shaking, night sweats, stomach pain, and trouble sleeping.',
            'If your monthly period had not come back yet while you were nursing, your period will usually return 4 to 8 weeks after your milk supply stops. Your first few periods may be heavier or more irregular than usual while your hormones rebalance.',
            'Be very gentle with your physical body. Try to eat small, warm, iron-rich meals even when you do not feel hungry, and let trusted family members or friends help with daily chores so you can rest.'
          ]
        },
        {
          id: 'warning-signs-year-after-birth',
          keyLabel: 'Warning Signs',
          heading: 'Physical and Emotional Warning Signs in the Year After Birth',
          gifSrc: null,
          cartoonRenderer: () => renderWarningShieldCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Serious maternal health problems can appear up to a full year after giving birth. When a mother is grieving an infant, people around her often focus only on the funeral or family grief and forget to check on the mother’s own physical health.',
            'Seek medical care right away at a hospital or clinic on your FemPowHer map if you experience a fever of 100.4°F (38°C) or higher, a severe headache that does not get better, blurry vision, chest pain, trouble breathing, swelling or pain in one leg, heavy vaginal bleeding, or a painful red breast infection.',
            'Your mental health is just as important as your physical health. If grief turns into being unable to drink water or sleep for days, feeling completely trapped in darkness, or having thoughts of harming yourself, please reach out immediately to a local clinic, Women’s Safe Haven, or crisis hotline in your Emergency Contacts tab.'
          ]
        },
        {
          id: 'grieving-with-partner-and-support',
          keyLabel: 'Grief & Support',
          heading: 'Grieving With Your Partner and Honoring Your Baby',
          gifSrc: null,
          cartoonRenderer: () => renderGriefCommunitySupportCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Mothers and fathers often grieve an infant differently. One parent may want to hold the baby’s blanket, look at photos, and talk about the baby every hour, while the other parent feels overwhelmed by seeing baby items or tries to stay busy to survive the pain. Give each other patience and grace, knowing that both of you are hurting.',
            'In some families or communities, mothers are told to pack away every baby item immediately or not to speak of the baby. You have the right to move at your own pace and to keep special reminders of your baby’s life.',
            'Connecting with other bereaved mothers or visiting a compassionate women’s center or Women’s Safe Haven on your FemPowHer map can give you a safe space where your baby is remembered with love.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'InfantLossBreastCareGuideHomePage1',
          title: 'Safe Weaning & Mastitis Prevention Guide',
          subtitle: 'Step-by-step physical care when breastfeeding stops suddenly'
        },
        {
          pageId: 'InfantLossAnniversariesAndFamilyHomePage1',
          title: 'Getting Through Milestones & Holidays',
          subtitle: 'Coping with your baby’s due date, birth date, and family gatherings'
        }
      ]
    },

    'loss-child': {
      pageId: 'LostMyChildHomePage1',
      title: tr('lossBtnLostChild', 'I’ve Lost My Child'),
      palette: {
        pageBg: '#FFFDF9',
        headerDark: '#9A3412',
        accentMedium: '#EA580C',
        tintLight: '#FFEDD5',
        inkColor: '#431407',
        timelineLine: '#FDBA74'
      },
      sections: [
        {
          id: 'grief-for-a-child-at-any-age',
          keyLabel: 'Grieving Your Child',
          heading: 'Carrying the Loss of Your Child at Any Age',
          gifSrc: null,
          cartoonRenderer: () => renderFootprintsMemorialCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Whether your child was a toddler, a young school-age child, a teenager, or an older child, losing your child is a life-changing heartbreak that no mother should ever have to carry alone. Losing a child shakes every part of your identity, your home, and your daily routine.',
            'Grief is not an illness that you "get over" on a calendar schedule. It comes in waves. Some days you may be able to work and care for your household, and then a favorite meal, a birthday, a school uniform, a song, or a quiet evening can bring a wave of tears as strong as the first day.',
            'Continuing to love your child, speak their name, and hold them in your heart is not "being stuck." It is the lifelong bond between a mother and her child.'
          ]
        },
        {
          id: 'helping-your-other-children-grieve',
          keyLabel: 'Helping Surviving Children',
          heading: 'Interacting With Your Other Children When They Lose a Sister or Brother',
          gifSrc: null,
          cartoonRenderer: () => renderGrievingSiblingSupportCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'One of the hardest challenges for a grieving mother is caring for her other surviving children while her own heart is broken. Your surviving children have not only lost their brother or sister; they are also scared because they see their mother and father in deep pain. First, reassure your surviving child often: remind them clearly that they are deeply loved, that they are safe, and that you are still here for them. Recognize that your child is grieving too, even if they step in and out of sadness by crying one moment and asking to go play five minutes later.',
            'Be honest with your child in a simple, direct, and age-appropriate way. Avoid confusing phrases like "your sister went to sleep" or "we lost your brother," which can make young children terrified of going to bed or afraid of getting lost. Instead, use gentle, clear words about what happened, and avoid minimizing or dismissing their feelings with phrases like "you have to be strong now" or "you will be stronger because of it," which can make a child feel they must hide their tears to protect you.',
            'Listen closely when your child wants to share their story or memories about what happened, and ask open-ended questions about what is on their mind instead of guessing how they feel. Because children often cannot put big feelings into grown-up words, give your child creative outlets to express their love and grief for their sibling through drawing pictures, writing a note, making crafts, listening to music, or playing together.'
          ]
        },
        {
          id: 'how-deep-grief-affects-a-womans-body',
          keyLabel: 'How Grief Affects Your Body',
          heading: 'How Deep Grief Affects Your Physical Health, Heart, and Cycle',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Intense grief is not only an emotion in your mind; it is also a powerful physical stress response across your whole body. When you lose a child, your nervous system releases high levels of stress hormones like cortisol and adrenaline for weeks and months.',
            'These stress hormones can cause real physical symptoms, including tightness or aching in your chest, a fast heartbeat, stomach pain, loss of appetite, headaches, extreme tiredness, trouble falling or staying asleep, and catching illnesses more easily because your immune system is worn down.',
            'In women who have a monthly menstrual cycle, severe grief stress can also cause the brain to pause ovulation temporarily, making your period stop for a month or more, come late, or become heavier or irregular. Visiting a compassionate doctor or women’s clinic on your FemPowHer map for a gentle physical checkup helps protect your heart, blood pressure, and iron levels while you grieve.'
          ]
        },
        {
          id: 'grieving-with-partner-and-community',
          keyLabel: 'Partner & Family Grief',
          heading: 'How Mothers and Fathers Grieve Differently and Rejecting Unfair Blame',
          gifSrc: null,
          cartoonRenderer: () => renderGriefCommunitySupportCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Mothers, fathers, and relatives often grieve the exact same child in very different ways. One parent may need to cry openly and talk about the child every day, while the other parent becomes quiet, stays busy with work or repairs, or cries in private so they do not upset the household. Knowing that different grief styles still come from deep love helps keep partners from pulling apart.',
            'In some families or communities, mothers face unfair blame, gossip, or criticism after a child dies from an illness, infection, or accident. Please reject any cruel blame. No mother can control every illness or accident in this world.',
            'Surround yourself and your surviving children with relatives, neighbors, or support groups who treat you with patience, warmth, and respect.'
          ]
        },
        {
          id: 'caring-for-yourself-one-day-at-a-time',
          keyLabel: 'Daily Survival & Support',
          heading: 'Getting Through Unbearable Days One Hour at a Time',
          gifSrc: null,
          cartoonRenderer: () => renderPostpartumRestAndMilkCareCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'When grief feels too heavy to carry for a whole week or month, break time down into tiny steps: focus only on getting through the next hour, or the next ten minutes. Start with basic physical care for your body: drink a glass of clean water, eat a small bowl of warm food, step outside for fresh air, and rest your body on a bed even if you cannot fall asleep right away.',
            'When neighbors or friends ask how they can help, give them one clear, practical task, such as bringing a cooked meal, helping walk your other children to school, or sitting quietly with you without expecting you to talk.',
            'If your grief ever feels too heavy to survive, or if you have thoughts of hurting yourself, please know that your life is deeply needed, especially by your surviving children and loved ones, and help is available right now. Open the Emergency Contacts tab or the FemPowHer map to connect with local crisis hotlines, hospitals, counselors, and Women’s Safe Havens in your region.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'ChildLossSiblingGriefGuideHomePage1',
          title: 'Helping Surviving Brothers & Sisters Grieve',
          subtitle: 'Age-by-age ways to answer children’s questions honestly and gently'
        },
        {
          pageId: 'ChildLossPhysicalHealthCheckHomePage1',
          title: 'Protecting Your Heart, Sleep & Cycle During Grief',
          subtitle: 'When to check in with a doctor for physical symptoms of deep grief'
        }
      ]
    }
  };

  if (activeSubPage && subPageConfigs[activeSubPage]) {
    const cfg = subPageConfigs[activeSubPage];
    return h(IamPregALHomePageStyle, {
      pageId: cfg.pageId,
      title: cfg.title,
      sections: cfg.sections,
      bottomSubPages: cfg.bottomSubPages,
      palette: cfg.palette,
      onBack: () => setActiveSubPage(null),
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
