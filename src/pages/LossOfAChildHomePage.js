import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=252';
import { IamPregALHomePageStyle } from './PregnancyAfterLossHomePage.js?v=252';

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

function renderCdcHearHerShieldCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
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
      gifSrc: './assets/loss-hub-miscarriage.gif?v=252',
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
      gifSrc: './assets/loss-hub-stillbirth.gif?v=252',
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
      gifSrc: './assets/loss-hub-infant.gif?v=252',
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
      gifSrc: './assets/loss-hub-child.gif?v=252',
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
      gifSrc: './assets/loss-hub-pregnant-after-loss.gif?v=252',
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
  // CDC-Grounded IamPregALHomePageStyle Configurations (Different Color Palettes!)
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
          heading: 'What the CDC Shares About Stillbirth and Why You Are Not to Blame',
          gifSrc: null,
          cartoonRenderer: () => renderFootprintsMemorialCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'According to the Centers for Disease Control and Prevention (CDC), a stillbirth is the loss of a baby in the womb at or after the 20th week of pregnancy or during birth. Doctors group stillbirth by when it happens: an early stillbirth happens between 20 and 27 weeks of pregnancy, a late stillbirth happens between 28 and 36 weeks, and a term stillbirth happens at 37 weeks or later.',
            'Stillbirth happens to families of every background around the world. In the United States alone, the CDC reports that stillbirth affects about 1 in every 175 births, or about 21,000 babies every year. The CDC also notes that women in communities with less access to quality prenatal hospitals face higher rates because of health system gaps, never because of a fault in the mother.',
            'Losing a baby so far along in pregnancy is a heartbreaking tragedy. Please know that a stillbirth is never a curse and never punishment for anything you thought, said, or did.'
          ]
        },
        {
          id: 'causes-and-finding-answers',
          keyLabel: 'Causes & Answers',
          heading: 'Understanding Why Stillbirth Happens and Asking for Medical Answers',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'CDC research shows that in about 1 out of every 3 stillbirths, no exact medical cause can be found even after careful testing. When doctors do find a cause, it usually comes from one of three areas: problems with the placenta or umbilical cord that blocked blood and oxygen to the baby, genetic or physical differences in how the baby developed, or maternal medical conditions such as high blood pressure (preeclampsia), diabetes, or silent infections.',
            'The CDC encourages families and doctors to talk openly about optional medical checks after a stillbirth. Examining the placenta, reviewing your medical history, or running blood tests can sometimes explain what happened and help your doctor protect you in any future pregnancy.',
            'Even if no clear medical reason is ever found, knowing that the loss happened from an unseen medical event inside the womb can help lift unfair guilt off your shoulders.'
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
            'Do not pump your breasts fully, because emptying the breasts tells your body to make more milk. If your breasts feel very tight and painful, express just a few drops by hand to soften them, or ask your doctor or midwife if a medicine tablet that stops breast milk is available.'
          ]
        },
        {
          id: 'cdc-hear-her-postpartum-signs',
          keyLabel: 'CDC Warning Signs',
          heading: 'CDC Hear Her Urgent Postpartum Warning Signs',
          gifSrc: null,
          cartoonRenderer: () => renderCdcHearHerShieldCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'The CDC Hear Her campaign stresses that life-threatening postpartum complications can happen any time during the first year after delivering a baby, including after a stillbirth. Your physical life and health matter deeply.',
            'Go to an emergency hospital right away if you have heavy bleeding that soaks through 2 pads an hour, a fever of 100.4°F (38°C) or higher, bad-smelling vaginal discharge, a severe headache that does not go away, blurry vision or seeing spots, sudden swelling in your hands or face, pain or redness in your calf or leg, or chest pain and trouble breathing.',
            'Always tell the emergency nurse or doctor that you delivered a baby within the past year. If you feel overwhelming despair or thoughts of hurting yourself, reach out for immediate help at a hospital or call or text 988 or 1-833-TLC-MAMA.'
          ]
        },
        {
          id: 'stillbirth-grief-and-support',
          keyLabel: 'Grief & Support',
          heading: 'Honoring Your Baby and Connecting With CDC Listed Support Networks',
          gifSrc: null,
          cartoonRenderer: () => renderGriefCommunitySupportCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Every mother and father grieves a stillborn baby in their own way. Many parents find comfort in naming their baby, keeping a footprint card or lock of hair, planting a tree, or holding a quiet family remembrance. There is no timeline for your grief.',
            'On its Stillbirth Resources page, the CDC highlights dedicated bereavement organizations that support mothers and families after stillbirth, including the Star Legacy Foundation, Share Pregnancy and Infant Loss Support, First Candle, the MISS Foundation, The Compassionate Friends, and the March of Dimes.',
            'You can also use your FemPowHer map and Emergency Contacts tab anytime to find local women’s clinics, counselors, and safe havens near you.'
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
            'Losing a baby in the first days or weeks after birth (neonatal loss) or at any point during the first year of life is one of the deepest heartbreaks a mother can ever face. According to the Centers for Disease Control and Prevention (CDC), infant loss can happen from premature birth, birth complications, congenital conditions, infections, or Sudden Unexpected Infant Death (SUID), which includes Sudden Infant Death Syndrome (SIDS).',
            'When an infant dies suddenly or after an illness in the nursery, mothers almost always replay every moment in their minds and wonder if they could have prevented it. Please hear this clearly: you loved your baby, and you are not to blame.',
            'Your arms may physically ache to hold your baby, and you may think you hear your baby crying when the house is quiet. Psychologists and bereavement midwives note that these feelings are a normal physical and emotional response to losing a baby you cared for.'
          ]
        },
        {
          id: 'breast-care-after-infant-loss',
          keyLabel: 'Breast & Milk Care',
          heading: 'Caring for Your Breasts If You Were Breastfeeding Your Baby',
          gifSrc: null,
          cartoonRenderer: () => renderPostpartumRestAndMilkCareCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'If you were breastfeeding or pumping milk for your baby when your baby passed away, stopping nursing all at once can cause your breasts to become painfully full (engorged) and can lead to blocked milk ducts or a breast infection called mastitis.',
            'To help your milk supply slow down safely without hurting your body, wear a comfortable, snug bra without underwires, place cold packs or cool clean cloths on your breasts for 15 minutes at a time, and keep drinking plenty of clean water. Never stop drinking water to try to dry up breast milk, because your body needs water to heal.',
            'If your breasts feel rock-hard and painful, gently express just enough milk by hand or pump for 1 to 2 minutes only until the tightness softens. Emptying the breasts completely tells your body to make more milk. If you notice a hot, red, painful lump on your breast along with a fever or body chills, visit a clinic right away for safe antibiotic medicine.'
          ]
        },
        {
          id: 'postpartum-hormones-and-body',
          keyLabel: 'Your Postpartum Body',
          heading: 'How Postpartum Hormones and Deep Grief Affect Your Body',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'When you lose an infant during the first year after giving birth, your body is still in the postpartum window. Sharp drops in breastfeeding and pregnancy hormones mix with grief stress hormones, which can cause extreme physical exhaustion, shaking, night sweats, stomach upset, and trouble sleeping.',
            'If your monthly period had not come back yet while you were nursing, your period will usually return 4 to 8 weeks after your milk supply stops. Your first few periods may be heavier or more irregular than usual while your hormones rebalance.',
            'Be very gentle with your physical body. Try to eat small, warm, iron-rich meals even when you do not feel hungry, and let trusted family members or friends help with daily chores so you can rest.'
          ]
        },
        {
          id: 'cdc-hear-her-year-after-birth',
          keyLabel: 'CDC Warning Signs',
          heading: 'CDC Hear Her Warning Signs in the Year After Birth',
          gifSrc: null,
          cartoonRenderer: () => renderCdcHearHerShieldCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'The CDC Hear Her campaign reminds mothers and families that serious pregnancy-related health problems can appear up to a full year after giving birth. When a mother is grieving an infant, people around her often focus only on the funeral or family grief and forget to check on the mother’s own physical body.',
            'Seek medical care right away if you experience a fever of 100.4°F (38°C) or higher, a severe headache that does not get better, blurry vision, chest pain, trouble breathing, swelling or pain in one leg, heavy vaginal bleeding, or a painful red breast infection.',
            'Your mental health is just as urgent as your physical health. If grief turns into feeling completely numb, being unable to drink water or sleep for days, or having thoughts of harming yourself, please go to a clinic or call or text 988 or 1-833-TLC-MAMA right away.'
          ]
        },
        {
          id: 'cdc-infant-loss-support',
          keyLabel: 'Grief & Support',
          heading: 'CDC Referenced Support Communities for Parents After Infant Loss',
          gifSrc: null,
          cartoonRenderer: () => renderGriefCommunitySupportCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'On its Sudden Unexpected Infant Death (SUID and SIDS) and infant mortality pages, the CDC directs grieving parents to national bereavement organizations where you can talk with other mothers and fathers who have survived the loss of an infant.',
            'These CDC-listed organizations include First Candle (which offers a 24-hour grief helpline and online peer groups for infant loss), The Compassionate Friends, the MISS Foundation, Share Pregnancy and Infant Loss Support, and the Star Legacy Foundation.',
            'You can also open the FemPowHer map or Emergency Contacts tab to connect with local women’s health centers, counseling clinics, and safe havens in your area.'
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
            'Whether your child was a toddler, a young school-age child, a teenager, or an adult, losing your child is a life-changing heartbreak that no mother should ever have to carry alone. The Centers for Disease Control and Prevention (CDC) recognizes in its How Right Now grief guidance that losing a loved one, especially a child, shakes every part of your daily life.',
            'Grief is not an illness that you "get over" on a calendar schedule. It comes in waves. Some days you may be able to work and care for your household, and then a song, a birthday, a piece of clothing, or a quiet evening can bring a wave of tears as strong as the first day.',
            'Continuing to love your child, speak their name, and hold them in your heart is not "being stuck." It is the natural bond between a mother and her child.'
          ]
        },
        {
          id: 'how-deep-grief-affects-a-womans-body',
          keyLabel: 'How Grief Affects Your Body',
          heading: 'How Deep Grief Affects Your Physical Health, Heart, and Cycle',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'CDC public health and trauma resources explain that intense grief is not only an emotion in your mind; it is also a powerful physical stress response across your whole body. When you lose a child, your body releases high levels of stress hormones like cortisol and adrenaline.',
            'These stress hormones can cause real physical symptoms, including tightness or aching in your chest, a fast heartbeat, stomach pain, nausea, headaches, extreme tiredness, trouble falling or staying asleep, and catching colds more easily because your immune system is worn down.',
            'In women who have a monthly menstrual cycle, severe grief stress can also tell the brain to pause ovulation for a month or more, causing your period to stop temporarily, come late, or become irregular. Visiting a compassionate doctor or women’s clinic on your FemPowHer map for a gentle physical checkup helps protect your heart, blood pressure, and iron levels while you grieve.'
          ]
        },
        {
          id: 'grieving-with-partner-and-siblings',
          keyLabel: 'Family & Surviving Children',
          heading: 'Grieving With Your Partner and Supporting Surviving Children',
          gifSrc: null,
          cartoonRenderer: () => renderGriefCommunitySupportCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Mothers, fathers, and relatives often grieve the exact same child in very different ways. One parent may need to cry openly and talk about the child every day, while the other parent becomes quiet, stays busy with tasks, or cries in private so they do not upset the family. Knowing that different grief styles still come from deep love helps keep partners from pulling apart.',
            'If you have other surviving children at home, they are grieving their brother or sister while also worrying about you. Child bereavement guidance recommends using simple, honest words at their age level rather than telling them they must "be strong" and hide their feelings. Letting your surviving children see that it is okay to cry and okay to smile at happy memories helps the whole family heal together.',
            'In some communities, mothers face unfair blame or isolation after a child dies from an illness or accident. Reject any cruel blame, and surround yourself with people who treat you with kindness.'
          ]
        },
        {
          id: 'caring-for-yourself-one-day-at-a-time',
          keyLabel: 'Daily Self-Care',
          heading: 'CDC How Right Now Steps for Getting Through Unbearable Days',
          gifSrc: null,
          cartoonRenderer: () => renderPostpartumRestAndMilkCareCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'When grief feels too heavy to carry for a whole week or month, the CDC How Right Now grief resources recommend breaking time down into tiny steps: focus only on getting through the next hour, or the next ten minutes.',
            'Start with basic physical care for your body: drink a glass of clean water, eat a small bowl of warm food, step outside for fresh air, and rest your body on a bed even if you cannot fall asleep right away.',
            'When neighbors or friends ask how they can help, give them one clear, simple task, such as bringing a cooked meal, watching your other children for an hour so you can rest, or sitting quietly with you without expecting you to talk.'
          ]
        },
        {
          id: 'cdc-child-loss-support-and-crisis',
          keyLabel: 'CDC Support & Crisis Care',
          heading: 'CDC Recommended Child Loss Communities and 24/7 Crisis Support',
          gifSrc: null,
          cartoonRenderer: () => renderCdcHearHerShieldCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Across its bereavement and family support directories, the CDC highlights two national organizations specifically dedicated to parents who have experienced the death of a child at any age: The Compassionate Friends (which runs local chapters and online support communities for parents, grandparents, and siblings after the death of a child) and the MISS Foundation (which provides family crisis support and peer counseling).',
            'If your grief ever feels too heavy to survive, or if you have thoughts of ending your life or hurting yourself, please know that your life is still needed and help is available right now.',
            'In the United States and Canada, you can call or text the 988 Suicide and Crisis Lifeline at 988 for free, confidential support 24 hours a day, 7 days a week. Anywhere in the world, you can open the Emergency Contacts tab or the FemPowHer map to find immediate crisis hotlines, hospitals, and Women’s Safe Havens near you.'
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
