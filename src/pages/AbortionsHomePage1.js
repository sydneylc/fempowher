import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=257';
import { IamPregALHomePageStyle } from './PregnancyAfterLossHomePage.js?v=257';

const h = React.createElement;

// ==============================================================================
// Custom Cartoon SVG Illustrations for the 5 IamPregALHomePageStyle Abortion Pages
// ==============================================================================
function renderSafeMedicalCareCartoonSvg(bg = '#FFE4F0', stroke = '#9F133A', accent = '#CF366C') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Medical shield with protective heart and checkmark
    h('path', {
      d: 'M90 28 L138 46 L138 92 C138 124, 115 144, 90 154 C65 144, 42 124, 42 92 L42 46 Z',
      fill: '#FFFFFF',
      stroke,
      strokeWidth: '3.5'
    }),
    h('path', {
      d: 'M90 70 C84 60, 68 62, 68 74 C68 87, 90 100, 90 107 C90 100, 112 87, 112 74 C112 62, 96 60, 90 70 Z',
      fill: accent
    }),
    h('path', {
      d: 'M78 122 L87 131 L105 113',
      fill: 'none',
      stroke,
      strokeWidth: '4.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
}

function renderMedicationTabletsCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Blister pack card with safe tablets and water glass
    h('rect', {
      x: '36',
      y: '46',
      width: '68',
      height: '88',
      rx: '12',
      fill: '#FFFFFF',
      stroke,
      strokeWidth: '3'
    }),
    h('circle', { cx: '70', cy: '68', r: '10', fill: accent }),
    h('circle', { cx: '56', cy: '96', r: '7', fill: stroke }),
    h('circle', { cx: '84', cy: '96', r: '7', fill: stroke }),
    h('circle', { cx: '56', cy: '116', r: '7', fill: stroke }),
    h('circle', { cx: '84', cy: '116', r: '7', fill: stroke }),
    // Glass of clean water beside blister pack
    h('path', {
      d: 'M114 70 L146 70 L142 132 C141 136, 136 138, 130 138 C124 138, 119 136, 118 132 Z',
      fill: '#E0F2FE',
      stroke,
      strokeWidth: '3'
    }),
    h('path', {
      d: 'M116 88 Q130 92 144 88',
      fill: 'none',
      stroke: accent,
      strokeWidth: '2.5'
    })
  );
}

function renderGentleClinicCareCartoonSvg(bg = '#DBEAFE', stroke = '#1E3A8A', accent = '#2563EB') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Midwife / clinician in teal-blue scrubs with stethoscope and reassuring smile
    h('circle', { cx: '90', cy: '62', r: '22', fill: '#C68642' }),
    h('path', {
      d: 'M66 56 C66 36, 114 36, 114 56 C114 48, 66 48, 66 56 Z',
      fill: '#1E293B'
    }),
    h('path', {
      d: 'M50 154 C52 110, 68 92, 90 92 C112 92, 128 110, 130 154 Z',
      fill: stroke
    }),
    // Stethoscope & heart badge
    h('path', {
      d: 'M74 92 C74 114, 106 114, 106 92',
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: '3.5',
      strokeLinecap: 'round'
    }),
    h('circle', { cx: '90', cy: '122', r: '7', fill: accent, stroke: '#FFFFFF', strokeWidth: '2' })
  );
}

function renderWarmComfortRecoveryCartoonSvg(bg = '#CCFBF1', stroke = '#0F766E', accent = '#0D9488') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Warm hot-water bottle with heart on front
    h('rect', {
      x: '54',
      y: '58',
      width: '72',
      height: '86',
      rx: '22',
      fill: accent,
      stroke,
      strokeWidth: '3.5'
    }),
    h('path', {
      d: 'M74 58 L70 38 L110 38 L106 58 Z',
      fill: stroke
    }),
    h('path', {
      d: 'M90 94 C85 86, 73 88, 73 97 C73 106, 90 117, 90 122 C90 117, 107 106, 107 97 C107 88, 95 86, 90 94 Z',
      fill: '#FFFFFF'
    })
  );
}

function renderEmergencyCrossShieldCartoonSvg(bg = '#FFE4E6', stroke = '#9F1239', accent = '#E11D48') {
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

function renderFertilityCycleCalendarCartoonSvg(bg = '#F3E8FF', stroke = '#6B21A8', accent = '#9333EA') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    // Calendar card with blossom and heart
    h('rect', {
      x: '42',
      y: '48',
      width: '96',
      height: '88',
      rx: '14',
      fill: '#FFFFFF',
      stroke,
      strokeWidth: '3.5'
    }),
    h('path', {
      d: 'M42 74 L138 74',
      stroke,
      strokeWidth: '3.5'
    }),
    h('line', { x1: '66', y1: '38', x2: '66', y2: '56', stroke, strokeWidth: '4.5', strokeLinecap: 'round' }),
    h('line', { x1: '114', y1: '38', x2: '114', y2: '56', stroke, strokeWidth: '4.5', strokeLinecap: 'round' }),
    h('path', {
      d: 'M90 98 C85 90, 72 92, 72 101 C72 111, 90 122, 90 127 C90 122, 108 111, 108 101 C108 92, 95 90, 90 98 Z',
      fill: accent
    })
  );
}

export default function AbortionsHomePage1({
  onBack,
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

  // 5 Full-Width MakingGifButtons1 First-Person Abortions Buttons (Globally Respectful Clinical Language)
  const abortionButtons = [
    {
      id: 'abortion-types-and-safety',
      label: tr('abortionBtnTypesAndSafety', 'Types of Abortion & What Makes Care Safe vs. Unsafe'),
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
      id: 'abortion-options',
      label: tr('abortionBtnOptions', 'What Are My Options? (Medication Pills vs. In-Clinic Care)'),
      gifSrc: null,
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
      id: 'abortion-recovery',
      label: tr('abortionBtnRecovery', 'I Just Had an Abortion: What Is Happening to My Body?'),
      gifSrc: null,
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
      id: 'abortion-emergency-care',
      label: tr('abortionBtnEmergencyCare', 'Emergency Post-Abortion Care & Danger Signs'),
      gifSrc: null,
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
      id: 'abortion-emotions-and-fertility',
      label: tr('abortionBtnEmotionsFertility', 'Emotional Care, Privacy & My Future Fertility'),
      gifSrc: null,
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
  // 5 Distinct-Palette IamPregALHomePageStyle Configurations (Global Health Info)
  // ============================================================================
  const subPageConfigs = {
    'abortion-types-and-safety': {
      pageId: 'AbortionTypesAndSafetyHomePage1',
      title: tr('abortionBtnTypesAndSafety', 'Types of Abortion & What Makes Care Safe vs. Unsafe'),
      palette: {
        pageBg: '#FFFAFC',
        headerDark: '#9F133A',
        accentMedium: '#CF366C',
        tintLight: '#FFE4F0',
        inkColor: '#4A0E24',
        timelineLine: '#F4A2C6'
      },
      sections: [
        {
          id: 'understanding-medical-types-of-abortion',
          keyLabel: 'Types of Abortion',
          heading: 'Understanding What Health Workers Mean by Different Types of Abortion',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'In everyday language, people usually use the word abortion to mean ending a pregnancy on purpose (called an induced abortion). In medical care around the world, doctors, nurses, and midwives also use the word abortion for several different situations where a pregnancy ends before the fetus can survive on its own outside the womb.',
            'First, an induced abortion is when a pregnancy is ended intentionally using either safe prescription tablets (medication abortion) or a gentle clinic procedure (procedural abortion). Sometimes an induced abortion is chosen for personal or family reasons, and other times it is recommended by doctors to save a mother’s life or protect her physical health from severe conditions like heart failure, cancer, severe preeclampsia, or a life-threatening infection in the womb.',
            'Second, clinicians refer to a natural miscarriage as a spontaneous abortion, and they use the term incomplete abortion when some pregnancy tissue stays inside the womb after a miscarriage or an abortion and needs gentle medical treatment (called Post-Abortion Care) so the mother does not bleed heavily or get an infection. Globally, induced abortion is very common: about 73 million induced abortions take place around the world every year, which is nearly 3 out of every 10 pregnancies.'
          ]
        },
        {
          id: 'what-makes-an-abortion-safe',
          keyLabel: 'What Makes Care Safe',
          heading: 'What Makes an Abortion Medically Safe',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'When an abortion is carried out using a modern, evidence-based medical method that matches how many weeks pregnant a woman is, and when the woman has accurate information and support from a trained health worker, abortion is one of the simplest and safest procedures in healthcare.',
            'Serious complications from a properly performed early medication abortion or vacuum aspiration procedure are extremely rare. A wide range of trained health professionals can safely provide early abortion care and guidance, including doctors, midwives, nurses, nurse-midwives, and trained clinicians or pharmacists.',
            'Having clear, honest medical information before you begin, knowing what normal bleeding and cramping feel like, and knowing where your nearest emergency clinic or hospital is located on your FemPowHer map are key parts of staying safe.'
          ]
        },
        {
          id: 'what-makes-an-abortion-unsafe',
          keyLabel: 'Safe vs. Unsafe Methods',
          heading: 'Why Unsafe Methods Are So Dangerous to a Woman’s Life',
          gifSrc: null,
          cartoonRenderer: () => renderEmergencyCrossShieldCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'Around the world, nearly half (about 45%) of all abortions happen in unsafe conditions. Global health experts group unsafe abortions into two levels of risk: "less safe" and "least safe." An abortion becomes "less safe" when someone uses real medication tablets without accurate instructions on the right dose for their stage of pregnancy or without access to medical support if they need help.',
            'An abortion is "least safe" and life-threatening when an untrained person uses dangerous methods. Dangerous methods include putting sharp objects, sticks, wires, roots, or herbal pastes inside the vagina or cervix, drinking toxic chemicals, bleach, detergent, or strong herbal brews, taking high doses of the wrong medicines, or pushing and hitting the belly with force.',
            'These dangerous methods often fail to end the pregnancy and can cause deadly blood loss (hemorrhage), severe blood infection (sepsis), poisoning, or a tear in the wall of the womb or bowel. Please never put any sharp object, herb, or chemical inside your body.'
          ]
        },
        {
          id: 'ultrasound-and-early-checks',
          keyLabel: 'Estimating Pregnancy Weeks',
          heading: 'How Health Workers Check How Far Along a Pregnancy Is',
          gifSrc: null,
          cartoonRenderer: () => renderFertilityCycleCalendarCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'Before choosing a method, it is important to estimate how many weeks pregnant you are. Pregnancy weeks are counted starting from the first day of your last normal menstrual period (LMP), not from the day you had sex.',
            'According to international medical guidance, an ultrasound scan is not routinely required before having an early abortion. A trained midwife, nurse, or doctor can usually check how far along the pregnancy is by asking about the first day of your last period, checking your pregnancy symptoms, and doing a gentle physical exam of the belly and pelvis.',
            'An ultrasound is helpful when a woman does not remember when her last period was, when her periods are very irregular, or when she has sharp one-sided belly pain that could be a sign of an ectopic pregnancy growing in a Fallopian tube outside the womb.'
          ]
        },
        {
          id: 'early-self-management-and-support',
          keyLabel: 'Early Home & Clinic Care',
          heading: 'Early Care Within the First 12 Weeks of Pregnancy',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'During the first 12 weeks of pregnancy (the first trimester), global medical guidelines recognize that medication abortion using quality mifepristone and misoprostol tablets can take place safely at home or outside a hospital, as long as the woman has accurate instructions, quality medicine, and a way to reach a clinic or hospital if a complication occurs.',
            'Passing an early pregnancy at home with medication tablets feels very much like having a heavy, crampy menstrual period or a natural early miscarriage. Most women prefer to have a trusted partner, relative, or friend nearby, clean sanitary pads, clean drinking water, and ibuprofen tablets for cramps.',
            'Whether care takes place at home or inside a clinic, every woman deserves to be treated with dignity, privacy, and medical respect.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionWeeksCalculatorGuideHomePage1',
          title: 'How to Count Pregnancy Weeks From Your Last Period',
          subtitle: 'Simple steps to estimate gestational age using your menstrual cycle calendar'
        },
        {
          pageId: 'AbortionUnsafeMythsWarningHomePage1',
          title: 'Dangerous Myths and Methods to Avoid',
          subtitle: 'Why herbal teas, sharp objects, and unverified pills can harm your body'
        }
      ]
    },

    'abortion-options': {
      pageId: 'AbortionOptionsHomePage1',
      title: tr('abortionBtnOptions', 'What Are My Options? (Medication Pills vs. In-Clinic Care)'),
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
          id: 'medication-abortion-tablets',
          keyLabel: 'Medication Tablets',
          heading: 'Medication Abortion With Mifepristone and Misoprostol Tablets',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'A medication abortion uses safe prescription tablets to end a pregnancy without surgery or instruments entering the womb. The most effective method uses two medicines together: mifepristone followed 24 to 48 hours later by misoprostol. In places where mifepristone is not available, a misoprostol-only schedule is also an effective, evidence-based option.',
            'First, mifepristone is swallowed with water. It gently blocks the hormone progesterone, which the womb lining needs to hold the pregnancy. Most women feel no strong symptoms after the first pill. Next, 24 to 48 hours later, misoprostol tablets are held under the tongue, inside the cheek, or placed as directed until they dissolve. Misoprostol causes the cervix to soften and the womb to cramp and empty, usually starting within 1 to 4 hours.',
            'When used in the first 10 to 12 weeks of pregnancy, the two-pill combination of mifepristone and misoprostol is about 95% to 98% effective at emptying the womb completely without needing an in-clinic procedure.'
          ]
        },
        {
          id: 'in-clinic-vacuum-aspiration',
          keyLabel: 'In-Clinic Vacuum Aspiration',
          heading: 'In-Clinic Vacuum Aspiration in the First 12 to 14 Weeks',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'An in-clinic vacuum aspiration (using either a quiet hand-held syringe called Manual Vacuum Aspiration or a gentle electric pump) is the recommended clinical procedure for an abortion in the first 12 to 14 weeks of pregnancy. It is also the exact same gentle procedure used to treat an incomplete miscarriage.',
            'During vacuum aspiration, a trained doctor, midwife, or nurse numbs the cervix with local numbing medicine and gently passes a thin, soft plastic tube through the natural opening of the cervix to empty the womb with gentle suction. The procedure itself usually takes only 5 to 10 minutes, and most women go home after resting in the clinic for an hour.',
            'Global medical guidelines strongly recommend vacuum aspiration or medication tablets instead of an older surgical method called sharp dilation and curettage (sharp D&C, which scrapes the womb walls with a metal tool), because vacuum aspiration is gentler, safer, and causes less bleeding.'
          ]
        },
        {
          id: 'care-after-twelve-to-fourteen-weeks',
          keyLabel: 'Later Pregnancy Care',
          heading: 'How Medical and In-Clinic Care Work After 12 to 14 Weeks',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Most abortions happen in the first 12 weeks of pregnancy, when care is simplest. Sometimes, however, a woman needs an abortion after 12 to 14 weeks because she learned she was pregnant late, faced delays getting to a clinic, developed a serious medical illness during pregnancy, or learned that the fetus has a severe medical condition.',
            'After 12 to 14 weeks, safe care takes place inside a medical facility with trained clinicians. There are two main evidence-based methods: medical induction (where mifepristone and repeated doses of misoprostol are given under a midwife or doctor’s care until the womb contracts and delivers) and Dilation and Evacuation (D&E, where the cervix is gently softened and prepared ahead of time and a skilled clinician empties the womb using suction and medical instruments).',
            'Because the womb is larger later in pregnancy, having skilled clinical care inside a health facility ensures you receive strong pain relief and close monitoring for bleeding.'
          ]
        },
        {
          id: 'pain-management-during-care',
          keyLabel: 'Managing Pain & Cramps',
          heading: 'How Pain and Cramps Are Managed Safely',
          gifSrc: null,
          cartoonRenderer: () => renderWarmComfortRecoveryCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Every woman deserves effective pain relief during an abortion. Because the womb is a strong muscle, cramping is a normal part of how the womb squeezes to empty itself and close off tiny blood vessels.',
            'For both medication tablets and in-clinic procedures, global health guidelines recommend non-steroidal anti-inflammatory pain medicine such as ibuprofen (taken when cramping starts or 30 to 60 minutes before misoprostol or a clinic procedure). Avoid taking aspirin for pain, because aspirin thins the blood and can make bleeding heavier. A warm water bottle, heating pad, or warm cloth held against your lower belly or lower back also helps relax cramping muscles.',
            'During an in-clinic vacuum aspiration or D&E procedure, clinicians should always offer local numbing medicine injected gently around the cervix (called a paracervical block), along with oral pain tablets or light sedation if available and desired.'
          ]
        },
        {
          id: 'antibiotics-and-ekt-considerations',
          keyLabel: 'Infection & Ectopic Checks',
          heading: 'Preventing Infection and Checking for Ectopic Pregnancy',
          gifSrc: null,
          cartoonRenderer: () => renderEmergencyCrossShieldCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Before an in-clinic procedural abortion where instruments pass through the cervix, clinics routinely give a single dose of preventive antibiotic medicine so bacteria from the vagina or cervix cannot cause a womb infection. For an uncomplicated early medication abortion with pills, routine antibiotics are usually not needed unless there is a sign of infection.',
            'It is also important to know that medication abortion pills (mifepristone and misoprostol) only empty a pregnancy that is inside the womb. They cannot treat an ectopic pregnancy, which is a rare pregnancy growing outside the womb in a Fallopian tube.',
            'If you have sharp, stabbing pain on one side of your lower belly, pain in the tip of your shoulder, dizziness, or fainting, or if you take abortion pills and have almost no bleeding at all, see a doctor or hospital right away to make sure the pregnancy is not ectopic.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionPillsVsClinicComparisonHomePage1',
          title: 'Comparing Medication Tablets vs. Vacuum Aspiration',
          subtitle: 'Side-by-side timeline, comfort, privacy, and recovery overview'
        },
        {
          pageId: 'AbortionPainReliefChecklistHomePage1',
          title: 'Comfort Kit for Cramping & Recovery',
          subtitle: 'Safe pain relief tablets, heat therapy, hydration, and rest tips'
        }
      ]
    },

    'abortion-recovery': {
      pageId: 'AbortionRecoveryHomePage1',
      title: tr('abortionBtnRecovery', 'I Just Had an Abortion: What Is Happening to My Body?'),
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
          id: 'normal-bleeding-and-clots',
          keyLabel: 'Normal Bleeding & Clots',
          heading: 'What Normal Bleeding and Blood Clots Look Like',
          gifSrc: null,
          cartoonRenderer: () => renderWarmComfortRecoveryCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'After an abortion, vaginal bleeding is a normal sign that your womb is emptying its thick pregnancy lining and shrinking back to its normal size. How much you bleed depends on whether you used medication tablets or had an in-clinic procedure, and how many weeks pregnant you were.',
            'With a medication abortion, bleeding usually becomes heavier than a normal period within 1 to 4 hours after taking misoprostol. It is normal to see dark red blood and small to medium blood clots for 4 to 6 hours while the pregnancy passes. In the first 8 to 9 weeks of pregnancy, the embryo is very tiny and usually passes hidden inside normal blood clots. Once the womb empties, the heavy bleeding slows down into lighter period-like bleeding or brown spotting that can come and go for 1 to 3 weeks.',
            'After an in-clinic vacuum aspiration, bleeding is often light right from the start because the clinician already emptied most of the lining during the procedure. Some women have light spotting for a few days, stop bleeding for a couple of days, and then notice a few more days of period-like bleeding around day 4 or 5 before it fades completely.'
          ]
        },
        {
          id: 'cramps-and-pill-side-effects',
          keyLabel: 'Cramps & Pill Effects',
          heading: 'Womb Cramps and Temporary Side Effects From Misoprostol',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Cramping in your lower belly and lower back is how the muscle of your womb squeezes shut the tiny blood vessels where the pregnancy was attached. Cramps are strongest during the hours the womb is actively emptying and usually ease into mild aches over the next few days.',
            'If you took misoprostol tablets, the medicine itself can cause temporary body side effects for a few hours on the day you take it. These normal medicine side effects include shivering or chills, a mild fever that lasts only a few hours, nausea, vomiting, diarrhea or loose stools, headache, or tiredness.',
            'These temporary medicine effects should fade away within 24 hours after taking misoprostol. Note that a fever of 100.4°F (38°C) or higher that lasts more than 24 hours, or a fever that starts on the days after your abortion, is not a normal pill side effect and needs a medical checkup for infection.'
          ]
        },
        {
          id: 'protecting-your-womb-as-cervix-closes',
          keyLabel: 'Preventing Infection',
          heading: 'Caring for Your Body While Your Cervix Closes',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'For the first few days after an abortion, the opening of your cervix is slightly relaxed while your womb finishes draining. Practicing simple hygiene helps prevent germs from traveling up into the healing womb.',
            'Use clean sanitary pads or clean, dry folded cloths so you can easily see how much you are bleeding. Wash the outside of your vulva gently with clean warm water when you bathe. Never douche, and never put soaps, perfumes, herbs, or powders inside your vagina, because the vagina cleans itself naturally.',
            'Most women can return to normal daily work or school within 1 to 2 days as soon as they feel physically comfortable. Listen to your body, and wait until heavy bleeding has stopped and you feel ready before having vaginal sex.'
          ]
        },
        {
          id: 'hydration-iron-and-breast-changes',
          keyLabel: 'Water, Iron & Hormones',
          heading: 'Rebuilding Your Energy and How Pregnancy Symptoms Fade',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Because you lost blood and fluids, drink plenty of clean water, warm tea, or broth, and eat nourishing foods rich in iron and protein, such as beans, lentils, dark leafy green vegetables, eggs, fish, or meat.',
            'Once the pregnancy ends, pregnancy hormones drop rapidly. Morning sickness, nausea, and food aversions usually disappear within 24 to 48 hours. Tiredness and bloating fade over the first week.',
            'Breast tenderness takes a little longer to go away, usually 1 to 2 weeks. If your pregnancy was further along (after 12 to 14 weeks), your breasts may feel full or leak a few drops of milk for several days. Wearing a snug, supportive bra without underwires and placing cool cloths on your breasts helps your body stop making milk comfortably.'
          ]
        },
        {
          id: 'when-pregnancy-test-turns-negative',
          keyLabel: 'Follow-Up & Tests',
          heading: 'When to Take a Follow-Up Pregnancy Test',
          gifSrc: null,
          cartoonRenderer: () => renderFertilityCycleCalendarCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Even after a pregnancy has ended completely, the pregnancy hormone hCG takes several weeks to clear out of your bloodstream and urine. Because standard home urine pregnancy tests are very sensitive, taking a urine test 1 or 2 weeks after an abortion will often still show a positive line even when the abortion worked completely.',
            'Unless a clinic checks your blood hormone levels earlier, wait about 3 to 4 weeks after a medication abortion before taking a standard home urine pregnancy test to confirm it has turned negative.',
            'If your urine pregnancy test is still positive 4 weeks after an abortion, or if you still feel pregnant with morning sickness and sore breasts, visit a local clinic or midwife on your FemPowHer map for an evaluation.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionRecoveryDayByDayTimelineHomePage1',
          title: 'Day-by-Day Physical Recovery Guide',
          subtitle: 'What is normal on Day 1, Week 1, and Month 1 after an abortion'
        },
        {
          pageId: 'AbortionIronAndNutritionGuideHomePage1',
          title: 'Rebuilding Iron & Preventing Anemia After Bleeding',
          subtitle: 'Affordable iron-rich foods and hydration tips around the world'
        }
      ]
    },

    'abortion-emergency-care': {
      pageId: 'AbortionEmergencyCareHomePage1',
      title: tr('abortionBtnEmergencyCare', 'Emergency Post-Abortion Care & Danger Signs'),
      palette: {
        pageBg: '#FFF8F9',
        headerDark: '#9F1239',
        accentMedium: '#E11D48',
        tintLight: '#FFE4E6',
        inkColor: '#4C0519',
        timelineLine: '#FDA4AF'
      },
      sections: [
        {
          id: 'urgent-hospital-warning-signs',
          keyLabel: 'Emergency Danger Signs',
          heading: 'Warning Signs That Need Immediate Hospital or Clinic Care',
          gifSrc: null,
          cartoonRenderer: () => renderEmergencyCrossShieldCartoonSvg('#FFE4E6', '#9F1239', '#E11D48'),
          paragraphs: [
            'While safe abortions rarely cause serious problems, complications like heavy bleeding or infection can become life-threatening if they are ignored. Go to an emergency hospital or maternity clinic on your FemPowHer map immediately if you notice any of these danger signs:',
            'Seek emergency care right away for heavy bleeding that completely soaks through 2 full-sized sanitary pads an hour for 2 hours in a row (4 soaked pads in 2 hours), passing blood clots larger than a lemon, or feeling dizzy, faint, pale, or weak with a racing heartbeat.',
            'You should also go to a hospital immediately if you have a fever of 100.4°F (38°C) or higher that lasts more than 24 hours after taking misoprostol (or any fever that starts in the days after your abortion), severe belly pain that does not get better after taking pain medicine, bad-smelling or pus-like discharge from the vagina, or yellowing of your eyes and skin.'
          ]
        },
        {
          id: 'what-is-post-abortion-care',
          keyLabel: 'What Is Post-Abortion Care',
          heading: 'What Emergency Post-Abortion Care (PAC) Does to Save Lives',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#FFE4E6', '#9F1239', '#E11D48'),
          paragraphs: [
            'Post-Abortion Care (PAC) is essential emergency medical care provided by hospitals, doctors, and midwives around the world to treat complications from any miscarriage, incomplete abortion, or unsafe abortion. Every hospital and emergency clinic has a medical duty to provide life-saving Post-Abortion Care.',
            'If a piece of pregnancy tissue is stuck in the womb (an incomplete abortion), the womb cannot squeeze all the way down, which causes heavy bleeding or infection. In Post-Abortion Care, a doctor or midwife gently empties the remaining tissue using either a quick 5-to-10-minute vacuum aspiration or a dose of misoprostol tablets.',
            'If there is an infection in the womb, doctors give antibiotic medicine and IV fluids, and if a woman has lost a lot of blood, the hospital gives fluids, iron, or a blood transfusion to stabilize her safely.'
          ]
        },
        {
          id: 'looks-identical-to-miscarriage',
          keyLabel: 'Medical Privacy Fact',
          heading: 'Medication Abortion Looks Medically Identical to a Natural Miscarriage',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#FFE4E6', '#9F1239', '#E11D48'),
          paragraphs: [
            'If you ever need to go to an emergency room or hospital after taking mifepristone and misoprostol tablets by mouth, under the tongue, or inside the cheek, it is helpful to know how medication abortion appears on medical exams.',
            'Medically, an early medication abortion looks 100% identical to a natural spontaneous miscarriage. The symptoms (cramping and bleeding), the ultrasound findings, the pelvic exam, and the emergency treatment (Post-Abortion Care) are completely identical.',
            'Standard hospital blood tests and urine tests cannot detect mifepristone or misoprostol that was taken by mouth or dissolved under the tongue. The only time pill fragments can be seen during an exam is if undissolved tablets were placed directly inside the vagina shortly before going to the hospital. Whether a pregnancy ended naturally or with tablets, the emergency medical treatment a doctor provides is the exact same.'
          ]
        },
        {
          id: 'incomplete-or-continuing-pregnancy',
          keyLabel: 'Incomplete or Ongoing Signs',
          heading: 'Signs of Remaining Tissue or an Ongoing Pregnancy',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#FFE4E6', '#9F1239', '#E11D48'),
          paragraphs: [
            'Sometimes a complication is not a sudden emergency in the first hour, but develops over several days. If your bleeding stays heavy for more than 2 weeks, or if you have waves of strong cramps and sudden gushes of dark blood days after you thought the abortion was over, a small piece of tissue may still be inside the womb.',
            'On the other hand, if you took abortion pills and had no bleeding at all (or only a few drops of spotting) after 24 to 48 hours, and you still feel pregnant with sore breasts and nausea a week later, the pregnancy may still be continuing in the womb, or it could be an ectopic pregnancy outside the womb.',
            'In either case, visiting a clinic or midwife on your FemPowHer map allows them to check your womb and make sure you are healthy and safe.'
          ]
        },
        {
          id: 'finding-safe-emergency-help',
          keyLabel: 'Finding Local Help',
          heading: 'Using Your FemPowHer Map and Emergency Contacts When You Need Help',
          gifSrc: null,
          cartoonRenderer: () => renderWarmComfortRecoveryCartoonSvg('#FFE4E6', '#9F1239', '#E11D48'),
          paragraphs: [
            'If you experience any emergency warning sign, please do not wait at home hoping a high fever or heavy bleeding will stop on its own. Getting prompt care at a hospital or clinic protects your life and your future health.',
            'Open the FemPowHer map to locate the nearest OB/GYN hospital, maternity clinic, or Women’s Safe Haven in your region, or tap the Emergency Contacts tab for local emergency ambulance and maternal health numbers.',
            'Whenever possible, bring a trusted friend or family member with you to the clinic or hospital so someone is by your side to support you.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionEmergencyRedFlagsCardHomePage1',
          title: 'Quick Emergency Red-Flag Checklist',
          subtitle: 'Clear pad-count, fever, and pain thresholds for going to the hospital'
        },
        {
          pageId: 'AbortionPostAbortionCareExplainedHomePage1',
          title: 'What Happens at the Hospital During Post-Abortion Care',
          subtitle: 'How clinicians stop heavy bleeding and treat uterine infections safely'
        }
      ]
    },

    'abortion-emotions-and-fertility': {
      pageId: 'AbortionEmotionsFertilityHomePage1',
      title: tr('abortionBtnEmotionsFertility', 'Emotional Care, Privacy & My Future Fertility'),
      palette: {
        pageBg: '#FDFBFF',
        headerDark: '#6B21A8',
        accentMedium: '#9333EA',
        tintLight: '#F3E8FF',
        inkColor: '#3B0764',
        timelineLine: '#D8B4FE'
      },
      sections: [
        {
          id: 'does-safe-abortion-affect-fertility',
          keyLabel: 'Future Fertility Facts',
          heading: 'Does a Safe Abortion Affect My Future Fertility or Future Babies?',
          gifSrc: null,
          cartoonRenderer: () => renderFertilityCycleCalendarCartoonSvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'One of the most common fears women around the world hear from rumors is that having an abortion will make them infertile. According to extensive global medical research, a safe, uncomplicated abortion (whether with medication tablets or in-clinic vacuum aspiration) does not cause infertility and does not make it harder to get pregnant in the future.',
            'A safe, uncomplicated abortion also does not increase the risk of miscarriage, ectopic pregnancy, birth defects, preterm birth, or low birth weight in your future pregnancies, and it does not cause breast cancer.',
            'Fertility is only threatened when an unsafe method causes an untreated, severe womb infection or physical injury to the uterus. That is why safe care and prompt treatment for any sign of infection are so important for protecting your future family plans.'
          ]
        },
        {
          id: 'when-ovulation-and-period-return',
          keyLabel: 'Ovulation & Next Period',
          heading: 'How Fast Ovulation and Your Monthly Period Return',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'Your normal menstrual cycle restarts almost immediately after an abortion. In fact, your ovaries can release a new egg (ovulate) as early as 8 to 14 days after an early abortion, weeks before your next normal period even arrives.',
            'Because ovulation happens before your first post-abortion period, you can get pregnant again within 2 weeks after an abortion if you have unprotected sex.',
            'Your first normal menstrual period usually comes back 4 to 6 weeks after the abortion. After a medication abortion, the first period is sometimes slightly heavier than usual as the womb finishes shedding any last bits of lining, and then returns to your normal cycle rhythm.'
          ]
        },
        {
          id: 'starting-contraception-after-abortion',
          keyLabel: 'Contraception Options',
          heading: 'Starting Birth Control Safely If You Want to Prevent Pregnancy',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'If you want to prevent another pregnancy right now, international clinical guidelines confirm that almost all modern birth control methods can be started right away after an abortion.',
            'Hormonal methods, including daily birth control pills, the contraceptive injection, the arm implant, the patch, or the vaginal ring, can be started on the very same day you take the first tablet of a medication abortion or on the same day as an in-clinic procedure. Condoms can be used as soon as you resume sex.',
            'An intrauterine device (IUD) can be placed inside the womb right at the end of an uncomplicated in-clinic vacuum aspiration, or at a follow-up visit as soon as a medication abortion is confirmed complete.'
          ]
        },
        {
          id: 'honoring-your-emotions-without-stigma',
          keyLabel: 'Emotional Wellbeing',
          heading: 'Every Woman’s Feelings Are Different and All of Them Are Valid',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'There is no single way you are "supposed" to feel after an abortion. Many women feel deep relief and peace knowing they made the decision that was right for their life, their health, or their existing children. Other women feel sadness, grief, loss, or a complicated mix of relief and sadness at the same time, especially when an abortion was needed for medical reasons or because of difficult life circumstances.',
            'As pregnancy hormones drop sharply in the days after an abortion, it is also normal to have temporary mood swings or crying spells. Social stigma, secrecy, or judgment from others often causes far more emotional distress than the medical procedure itself.',
            'Be gentle with yourself. You do not owe anyone an explanation of your private medical history, and compassionate counselors and Women’s Safe Havens on your FemPowHer map are always available if you want someone safe and non-judgmental to talk with.'
          ]
        },
        {
          id: 'privacy-and-local-safety',
          keyLabel: 'Privacy & Safe Havens',
          heading: 'Protecting Your Personal and Digital Privacy',
          gifSrc: null,
          cartoonRenderer: () => renderWarmComfortRecoveryCartoonSvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'Your medical choices and your reproductive health history belong to you. When you use FemPowHer, your calendar and health reading stay stored locally on your own device rather than being broadcast to outside servers, and you can use Anonymous Mode anytime you share a phone or computer.',
            'If you are experiencing pressure, reproductive coercion (where a partner or relative tries to force you to become pregnant or force you to end a pregnancy against your will), or domestic violence, you deserve safety and protection.',
            'Use the FemPowHer map to find confidential Women’s Safe Havens, shelters, and women’s clinics near you, or open the Emergency Contacts tab for immediate support lines.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionContraceptionTimingGuideHomePage1',
          title: 'Same-Day Contraception Guide After an Abortion',
          subtitle: 'When and how you can start pills, implants, injections, or an IUD'
        },
        {
          pageId: 'AbortionEmotionalAndPrivacySupportHomePage1',
          title: 'Coping With Stigma & Protecting Your Privacy',
          subtitle: 'Gentle support for your emotional wellbeing and digital safety'
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
      onSelectSection: (sec) => {
        if (sec && sec.id) {
          setActiveSubPage(sec.id);
        }
      }
    })
  );
}
