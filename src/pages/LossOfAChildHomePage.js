import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=281';
import { IamPregALHomePageStyle } from './PregnancyAfterLossHomePage.js?v=281';
import { consumePendingEducationSubPage } from './SmartSearchBtn1.js?v=281';

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
  const [activeSubPage, setActiveSubPage] = useState(() => consumePendingEducationSubPage());

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
      gifSrc: './assets/loss-hub-miscarriage.gif?v=281',
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
      gifSrc: './assets/loss-hub-stillbirth.gif?v=281',
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
      gifSrc: './assets/loss-hub-infant.gif?v=281',
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
      gifSrc: './assets/loss-hub-child.gif?v=281',
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
      gifSrc: './assets/loss-hub-pregnant-after-loss.gif?v=281',
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
          heading: 'Understanding Stillbirth, Antepartum vs. Intrapartum Loss, and Causes',
          gifSrc: null,
          cartoonRenderer: () => renderFootprintsMemorialCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'A stillbirth is when a baby dies in the womb in the later half of pregnancy or during labor and birth. In global health reporting, stillbirth is often defined as the loss of a baby at or after 28 weeks of pregnancy, while many national medical systems define it starting at 20, 22, or 24 weeks of pregnancy. Around the world, nearly 2 million stillbirths happen every year, which is about 1 baby every 16 seconds. You are never alone in this heartbreak.',
            'Doctors and midwives group stillbirth into two main times: an antepartum stillbirth happens inside the womb before labor starts, while an intrapartum stillbirth happens during labor and delivery. Globally, more than 40% of all stillbirths happen during labor and birth, often in full-term pregnancies that seemed healthy until complications arose during delivery. Before a stillbirth is diagnosed on an ultrasound or heartbeat check, the most common sign a mother notices is that her baby’s kicks and movements slow down or stop, sometimes along with cramping, vaginal bleeding, or leaking fluid.',
            'Common medical causes of stillbirth include complications during prolonged or obstructed labor, placenta and umbilical cord problems (such as placental abruption or a cord accident cutting off oxygen), maternal infections during pregnancy (such as malaria, syphilis, or bacterial infections), severe high blood pressure (preeclampsia and eclampsia), diabetes, slow fetal growth in the womb, and pregnancies continuing past 42 weeks. Less than 10% of stillbirths are caused by congenital anomalies, and in about 1 out of 3 cases no single cause can be found. A stillbirth is never a curse and never your fault.'
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
          heading: 'Seeing, Holding, Making Memories, and Finding Medical Answers',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'When your baby is born, there is no single "right" way to say goodbye. Your midwife or doctor should follow your wishes gently and never rush you. Many mothers and fathers find deep comfort in seeing and holding their baby wrapped in a soft blanket, naming their baby, taking handprints or footprints, keeping a lock of hair, or using a special cooled cot if the hospital has one so the family can spend quiet time together.',
            'If you feel too scared or overwhelmed to hold your baby right away, you can ask the midwife to describe your baby to you first or wrap your baby gently until you feel ready, and you can also invite a religious leader, chaplain, or family elder to offer prayers or blessings according to your culture and faith.',
            'Your doctor or midwife may also ask if you want an examination of the placenta and umbilical cord, maternal blood tests for infections or blood-clotting conditions, or a gentle post-birth exam of the baby. Checking for treatable conditions like hidden infections, high blood pressure, or placenta issues helps doctors explain what happened and helps protect your health in any future pregnancy.'
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
          keyLabel: 'Breaking Silence & Warning Signs',
          heading: 'Breaking the Silence Around Stillbirth and Watching for Postpartum Warning Signs',
          gifSrc: null,
          cartoonRenderer: () => renderWarningShieldCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'In many communities around the world, stillbirth is still surrounded by silence, social taboo, and stigma, where mothers are told not to talk about their baby or are unfairly blamed for the loss. Keeping grief locked in silence makes mothers much more likely to suffer alone with long-lasting depression, anxiety, and trauma. Talking openly about your baby and receiving respectful bereavement care is a basic human right.',
            'At the same time, your physical safety after delivery is critical. Go to an emergency hospital right away if you have heavy bleeding that soaks through 2 pads an hour, a fever of 100.4°F (38°C) or higher, bad-smelling vaginal discharge, a severe headache that does not go away, blurry vision or seeing spots, sudden swelling in your hands or face, pain or redness in your calf or leg, or chest pain and trouble breathing.',
            'Always tell the emergency nurse or doctor that you recently delivered a baby so they check for postpartum complications immediately, and use your FemPowHer map or Emergency Contacts tab anytime you want a compassionate women’s clinic, counselor, or Women’s Safe Haven near you.'
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
            'Losing a baby in the first 28 days after birth (neonatal loss) or at any point during the first year of life is one of the deepest heartbreaks a mother can ever face. Around the world, the first 28 days of life is the most fragile time for a baby’s survival. An infant loss can happen from premature birth complications, birth complications during labor such as lack of oxygen (birth asphyxia), severe newborn infections (such as sepsis, pneumonia, tetanus, or meningitis), congenital conditions, accidental death, or Sudden Unexpected Death in Infancy (SUDI), which includes Sudden Infant Death Syndrome (SIDS).',
            'When an infant dies suddenly in their sleep or after an illness in the hospital, mothers almost always replay every single moment in their minds and wonder if they missed a sign. In many places, silence and social taboo around newborn loss also leave mothers feeling isolated, as if they are expected to hide their tears. Please hear this clearly: you loved your baby with all your heart, your baby’s life mattered deeply, and you are not to blame.',
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
          heading: 'Everyone Grieves the Loss of a Child Differently',
          gifSrc: null,
          cartoonRenderer: () => renderFootprintsMemorialCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Whether your child was very young or older, and whether the loss happened after an illness or infection (such as pneumonia, malaria, severe fever, or sepsis), a long-term health condition, or a sudden accident, losing your child is a life-changing heartbreak. Around the world, millions of mothers carry this pain, yet social silence often makes a mother feel as if she is carrying it completely alone. There is no single right way to feel, and there is no timeline or checklist for how grief is supposed to look.',
            'Everyone grieves differently. Some mothers need to talk about their child often and cry openly, while others feel quiet, numb, or want privacy. Grief often moves in waves, where ordinary moments, a favorite meal, a song, or a quiet evening can bring deep emotion or loving memories.',
            'Continuing to love your child, speak their name, or hold them quietly in your heart in your own way is part of the lifelong bond between a mother and her child.'
          ]
        },
        {
          id: 'grieving-with-your-other-children',
          keyLabel: 'Grieving With Your Other Children',
          heading: 'Grieving With Your Other Children',
          gifSrc: null,
          cartoonRenderer: () => renderGrievingSiblingSupportCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'If you have other children at home, every child and every family walks through loss in their own way. Children often move in and out of grief differently than adults, sometimes feeling sad or quiet one moment and wanting to play or do normal routines a few minutes later. Simply letting your other children know that they are loved and that you are there with them can bring comfort to all of you.',
            'When children have questions or big feelings, simple and honest words at their age level often feel less confusing to them than indirect phrases like "went to sleep," and letting them share whatever is on their mind without feeling like they have to "be strong" gives everyone room to breathe.',
            'Some children like to talk about what happened, while others express what is in their heart quietly through drawing, writing, crafts, listening to music, or playing. There is no single rule you have to follow with your children; just sharing honest love and patience together is enough.'
          ]
        },
        {
          id: 'how-deep-grief-affects-a-womans-body',
          keyLabel: 'How Grief Affects Your Body',
          heading: 'How Deep Grief Can Feel in Your Physical Body and Cycle',
          gifSrc: null,
          cartoonRenderer: () => renderDoctorPlacentaAnswersCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Deep grief is not only something you feel in your heart; your physical body feels it too. During intense loss, the body naturally releases high levels of stress hormones like cortisol and adrenaline.',
            'Because of those stress hormones, it is very common to notice physical changes such as tightness or aching in your chest, a fast heartbeat, an upset stomach, changes in appetite, headaches, deep tiredness, or changes in how you sleep.',
            'In women who have a monthly menstrual cycle, heavy stress can sometimes cause ovulation to pause for a little while, making a period arrive late, skip a month, or feel heavier or different than usual. Whenever you feel ready, a gentle check-in with a compassionate doctor or women’s clinic on your FemPowHer map is always there to support your physical health.'
          ]
        },
        {
          id: 'grieving-with-partner-and-community',
          keyLabel: 'Partner & Family Grief',
          heading: 'Different Grief Styles in Families and Communities',
          gifSrc: null,
          cartoonRenderer: () => renderGriefCommunitySupportCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Two people who loved the exact same child deeply can grieve in completely opposite ways. One person may find comfort in talking and looking at photos, while another person copes by staying quiet, keeping busy, or spending time alone. Different ways of grieving do not mean one person loved the child less.',
            'In some places or families, mothers sometimes hear unhelpful comments, pressure to "move on," or unfair blame after an illness or accident. No mother can control every illness or event in this world, and you never owe anyone a specific performance of grief.',
            'You are free to lean toward the people and spaces that feel gentle, patient, and safe to you, and to step back from conversations that feel heavy or judgmental.'
          ]
        },
        {
          id: 'caring-for-yourself-one-day-at-a-time',
          keyLabel: 'Moving at Your Own Pace',
          heading: 'Taking Things at Your Own Pace With No Pressure',
          gifSrc: null,
          cartoonRenderer: () => renderPostpartumRestAndMilkCareCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'When a loss feels overwhelming, there is nothing you are "supposed" to accomplish each day. Every person’s rhythm is different. On some days, just resting, taking a breath of fresh air, drinking some water, or eating a little food when you can is plenty.',
            'You also do not have to manage the people around you, entertain visitors, or come up with tasks for friends who ask how to help if you do not have the energy. It is completely okay to want quiet time alone, just as it is okay to want company.',
            'If the weight of your grief ever feels too heavy to carry alone, compassionate support is always available whenever you want it through the Emergency Contacts tab and the local clinics, counselors, and Women’s Safe Havens on your FemPowHer map.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'ChildLossSiblingGriefGuideHomePage1',
          title: 'Grieving With Your Other Children',
          subtitle: 'Gentle, open-ended ways families walk through grief together'
        },
        {
          pageId: 'ChildLossPhysicalHealthCheckHomePage1',
          title: 'How Grief Feels in Your Body, Sleep & Cycle',
          subtitle: 'Understanding physical stress responses during deep grief'
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
