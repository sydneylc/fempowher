import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=265';
import { IamPregALHomePageStyle } from './PregnancyAfterLossHomePage.js?v=265';
import { consumePendingEducationSubPage } from './SmartSearchBtn1.js?v=265';

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
  const [activeSubPage, setActiveSubPage] = useState(() => consumePendingEducationSubPage());

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // 6 Full-Width MakingGifButtons1 First-Person Abortions Buttons (Globally Respectful Clinical Language)
  const abortionButtons = [
    {
      id: 'abortion-what-is',
      label: tr('abortionBtnWhatIs', 'What Is an Abortion?'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFF0F7 0%, #FFD4EA 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'abortion-safe-and-unsafe',
      label: tr('abortionBtnSafeAndUnsafe', 'Safe and Unsafe Abortion Care'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFD4EA 0%, #FFA8D2 100%)',
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
        background: 'linear-gradient(180deg, #FFA8D2 0%, #F472B6 100%)',
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
  // Big GIF Button List + Dedicated IamPregALHomePageStyle Homepages for Each Type of Abortion
  // (Used both inside the "Types of Abortions" section of "What Is an Abortion?" and on the
  //  dedicated "Types of Abortions" homepage button at the bottom!)
  // ============================================================================
  const abortionTypeHomepages = {
    'type-medication-abortion': {
      pageId: 'TypeMedicationAbortionHomePage1',
      title: 'Medication Abortion (Medical Abortion With Pills)',
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
          id: 'med-type-what-it-is',
          keyLabel: 'What It Is',
          heading: 'What Is a Medication (Medical) Abortion?',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'A medication abortion (also called a medical abortion) uses prescription tablets to end a pregnancy without any surgical instruments entering the womb. The gold-standard regimen uses two medicines: mifepristone (which blocks the hormone progesterone needed to sustain the pregnancy lining) followed 24 to 48 hours later by misoprostol (which softens the cervix and causes the womb muscle to cramp and empty). Where mifepristone is not available, repeated doses of misoprostol alone are used.',
            'Under 12 weeks of pregnancy, 1 tablet of mifepristone (200 mg) is swallowed with water, followed 24 to 48 hours later by 4 tablets of misoprostol (800 micrograms total) held under the tongue, inside the cheek, or in the vagina for 30 minutes. It is 95% to 98% effective and feels like a heavy, crampy period or natural early miscarriage.',
            'At or over 12 weeks of pregnancy, medication abortion is performed inside a clinic or hospital using mifepristone followed 24 to 48 hours later by smaller repeated doses of misoprostol (400 micrograms every 3 hours) until the womb contracts and delivers.'
          ]
        }
      ]
    },
    'type-vacuum-aspiration': {
      pageId: 'TypeVacuumAspirationHomePage1',
      title: 'Vacuum Aspiration (Karman Cannula Suction)',
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
          id: 'va-type-what-it-is',
          keyLabel: 'Karman Vacuum Aspiration',
          heading: 'What Is Vacuum Aspiration With a Karman Cannula?',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Vacuum aspiration is the recommended in-clinic procedural abortion method up to 12 to 14 weeks of pregnancy, and it is also used worldwide to treat an incomplete miscarriage. A trained doctor, midwife, or nurse numbs the cervix with local anesthetic (a paracervical block) and passes a thin, smooth, flexible plastic tube called a Karman cannula through the natural opening of the cervix into the womb.',
            'The Karman cannula is connected either to a quiet hand-held suction syringe (Manual Vacuum Aspiration / MVA) or a gentle electric pump (Electric Vacuum Aspiration / EVA). Gentle suction empties the womb in 5 to 10 minutes with over 98% to 99% effectiveness.',
            'At 12 to 14 weeks of pregnancy, misoprostol tablets are often given 2 to 3 hours beforehand (cervical priming) so the cervix softens and opens easily for the Karman cannula.'
          ]
        }
      ]
    },
    'type-dilation-and-evacuation': {
      pageId: 'TypeDilationAndEvacuationHomePage1',
      title: 'Dilation and Evacuation (D&E)',
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
          id: 'de-type-what-it-is',
          keyLabel: 'What Is D&E',
          heading: 'What Is Dilation and Evacuation (D&E)?',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'Dilation and Evacuation (D&E) is the recommended in-clinic procedural abortion method when a pregnancy is past 12 to 14 weeks (in the second trimester). It is performed inside a clinic or hospital in two steps.',
            'First, the cervix is slowly and gently softened and dilated over several hours or overnight using medicines (mifepristone or misoprostol) or tiny moisture-absorbing sticks called osmotic dilators (such as laminaria) placed in the cervical opening so the cervix is protected from tearing.',
            'Second, after local cervical numbing, pain medicine, and sedation if available, the clinician empties the womb in 15 to 30 minutes using vacuum suction with a wider cannula together with smooth medical forceps.'
          ]
        }
      ]
    },
    'type-dilation-and-curettage': {
      pageId: 'TypeDilationAndCurettageHomePage1',
      title: 'Dilation and Curettage (D&C)',
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
          id: 'dc-type-what-it-is',
          keyLabel: 'What Is D&C',
          heading: 'What Is Dilation and Curettage (D&C) and How Does It Differ From Vacuum Aspiration?',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Dilation and Curettage (D&C) is an older surgical procedure in which the cervix is dilated and a spoon-shaped metal instrument called a curette is used to scrape the pregnancy lining from the walls of the womb.',
            'Many hospitals and patients still use the phrase "D&C" as a general name for any procedure that empties the womb, even when the doctor actually uses gentle suction. However, global medical guidelines recommend replacing traditional sharp metal scraping (sharp D&C) with gentle plastic Karman cannula vacuum aspiration or medication tablets whenever possible.',
            'Vacuum aspiration with a soft Karman cannula causes less pain, less bleeding, and carries a much lower risk of uterine perforation or internal scar tissue (Asherman syndrome) than sharp metal curettage.'
          ]
        }
      ]
    },
    'type-induced-and-therapeutic': {
      pageId: 'TypeInducedAndTherapeuticHomePage1',
      title: 'Induced, Elective & Therapeutic (Medically Indicated) Abortion',
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
          id: 'induced-therapeutic-what-it-is',
          keyLabel: 'Induced vs. Therapeutic',
          heading: 'Induced (Elective / Voluntary) Abortion and Therapeutic (Life-Saving) Abortion',
          gifSrc: null,
          cartoonRenderer: () => renderEmergencyCrossShieldCartoonSvg('#FFE4E6', '#9F1239', '#E11D48'),
          paragraphs: [
            'An induced abortion is any abortion where medication tablets or a clinic procedure is used intentionally to end a pregnancy. When a woman chooses an induced abortion for personal, family, financial, or life-timing reasons, it is often called an elective or voluntary abortion.',
            'When an induced abortion is performed to save the pregnant woman’s life, protect her physical or mental health from severe harm (such as severe preeclampsia or eclampsia, heart failure, kidney failure, cancer requiring urgent treatment, or severe womb infection after membranes rupture early), or because the fetus has a severe or fatal anomaly, it is called a therapeutic or medically indicated abortion.',
            'Medically, both elective and therapeutic abortions use the exact same safe, evidence-based methods matched to how many weeks pregnant the woman is.'
          ]
        }
      ]
    },
    'type-spontaneous-miscarriage': {
      pageId: 'TypeSpontaneousAbortionHomePage1',
      title: 'Spontaneous Abortion (Natural Miscarriage & Medical Sub-Types)',
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
          id: 'spontaneous-subtypes-explained',
          keyLabel: 'Spontaneous Abortion Types',
          heading: 'Why Doctors Call Miscarriage a Spontaneous Abortion and What Each Sub-Type Means',
          gifSrc: null,
          cartoonRenderer: () => renderFertilityCycleCalendarCartoonSvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'On hospital charts and ultrasound reports around the world, the medical word for a natural miscarriage is spontaneous abortion. Seeing the word "abortion" on a hospital chart after a miscarriage simply means the pregnancy ended before 20 weeks.',
            'Clinicians group spontaneous abortion into specific sub-types based on what is happening in the womb: a threatened abortion means there is vaginal bleeding in early pregnancy while the cervix is still closed and the baby still has a heartbeat; an inevitable abortion means bleeding and cramping have opened the cervix so the miscarriage cannot be stopped; an incomplete abortion means some pregnancy tissue has passed but some remains inside the womb; a complete abortion means all pregnancy tissue has passed naturally and the womb is empty; and a missed abortion (silent miscarriage) means the embryo stopped growing inside the womb before bleeding or cramping started.',
            'When an incomplete or missed miscarriage needs medical help to finish emptying safely so infection or heavy bleeding does not occur, doctors use the exact same gentle care: misoprostol tablets or vacuum aspiration with a soft Karman cannula.'
          ]
        }
      ]
    }
  };

  const abortionTypesBigGifButtons = [
    {
      id: 'type-medication-abortion',
      label: tr('abortionTypeBtnMedication', 'Medication Abortion (Medical Abortion With Pills)'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFF0F7 0%, #FFD4EA 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'type-vacuum-aspiration',
      label: tr('abortionTypeBtnVacuum', 'Vacuum Aspiration (Karman Cannula Suction)'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFD4EA 0%, #FFA8D2 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'type-dilation-and-evacuation',
      label: tr('abortionTypeBtnDE', 'Dilation and Evacuation (D&E)'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFA8D2 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'type-dilation-and-curettage',
      label: tr('abortionTypeBtnDC', 'Dilation and Curettage (D&C)'),
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
      id: 'type-induced-and-therapeutic',
      label: tr('abortionTypeBtnInducedTherapeutic', 'Induced, Elective & Therapeutic (Life-Saving) Abortion'),
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
      id: 'type-spontaneous-miscarriage',
      label: tr('abortionTypeBtnSpontaneous', 'Spontaneous Abortion (Natural Miscarriage & Sub-Types)'),
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
  // 6 Distinct-Palette IamPregALHomePageStyle Configurations (WHO Abortion Care Guideline)
  // ============================================================================
  const subPageConfigs = {
    'abortion-what-is': {
      pageId: 'WhatIsAnAbortionHomePage1',
      title: tr('abortionBtnWhatIs', 'What Is an Abortion?'),
      hidePageTimeline: true,
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
          id: 'what-is-an-abortion-definition',
          keyLabel: 'What Is an Abortion',
          heading: 'What Is an Abortion?',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'An abortion is a medical process or procedure that ends a pregnancy by emptying the embryo or fetus, placenta, and pregnancy lining from the womb (uterus) so that the pregnancy does not result in a birth.',
            'Every year, about 73 million induced abortions take place around the world. About 6 out of every 10 unintended pregnancies (61%), and nearly 3 out of every 10 of all pregnancies worldwide (29%), end in an induced abortion.',
            'Comprehensive abortion care is an essential healthcare service that includes three parts: accurate medical information, safe medical or procedural care to end a pregnancy or treat a pregnancy loss at any stage, and post-abortion care and contraception.'
          ]
        },
        {
          id: 'stigma-and-barriers',
          keyLabel: 'Stigma & Health Complications',
          heading: 'Stigma Around Abortion and Why Safe Care Matters',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'When an abortion is done using a modern medical method matched to how many weeks pregnant a woman is and supported by a trained health worker, it is one of the safest procedures in medicine. However, in many parts of the world, abortion is heavily stigmatized, shamed, or restricted.',
            'Stigma, social judgment, high costs, mandatory waiting periods, and legal or clinic barriers do not reduce the number of women who need abortions. Instead, those barriers delay women past 12 weeks or force women to turn to dangerous, unsafe methods. Because of these barriers, about 45% of all abortions worldwide are unsafe, which can lead to serious but preventable medical complications.'
          ],
          subCategoryTitle: 'Health Complications:',
          detailedBullets: [
            {
              title: 'Retained Products of Conception (Incomplete Abortion):',
              description:
                'Parts of the fetus, placenta, or reproductive tissue that are not fully evacuated from the womb, which prevent the uterus from contracting shut and can lead to prolonged heavy bleeding or infection.'
            },
            {
              title: 'Hemorrhage (Severe Heavy Bleeding):',
              description:
                'Heavy blood loss from the womb caused by retained tissue, an injury to the cervix or uterus, or the womb muscle failing to contract tightly, which can lead to severe anemia or life-threatening shock if untreated.'
            },
            {
              title: 'Uterine Infection and Sepsis:',
              description:
                'Bacteria entering the healing womb during an unsterile procedure or from untreated retained tissue, causing fever, chills, foul-smelling discharge, pelvic pain, and potentially spreading through the bloodstream (sepsis).'
            },
            {
              title: 'Cervical or Uterine Perforation (Injury to the Womb):',
              description:
                'A tear, scratch, or puncture in the cervix or muscular wall of the uterus, most often caused when sharp instruments or unsafe foreign objects are pushed inside the womb.'
            },
            {
              title: 'Intrauterine Scarring (Asherman Syndrome):',
              description:
                'Bands of scar tissue forming inside the uterine lining after repeated sharp metal scraping (sharp D&C) or severe untreated womb infections, which can make future periods lighter or affect future fertility.'
            }
          ]
        },
        {
          id: 'how-an-abortion-works',
          keyLabel: 'How the Procedures Work',
          heading: 'How Medication and Procedural Abortions Work in Your Body',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'An abortion empties the womb in one of two ways: with prescription medication tablets or with an in-clinic procedure. The exact method depends on how many weeks pregnant you are, counted from the first day of your last menstrual period.',
            'In a medication abortion, two medicines (mifepristone followed 24 to 48 hours later by misoprostol, or repeated doses of misoprostol alone) are used. Mifepristone blocks the hormone progesterone that holds the pregnancy lining inside the womb. Misoprostol softens and opens the cervix and causes the womb muscle to cramp and push out the pregnancy tissue through the vagina. Under 12 weeks, this requires one or two doses of misoprostol; at or over 12 weeks, smaller repeated doses of misoprostol are given every 3 hours inside a clinic or hospital until the womb delivers the fetus and placenta.',
            'In a procedural (in-clinic) abortion up to 12 to 14 weeks, a trained midwife, nurse, or doctor numbs the cervix and performs vacuum aspiration by passing a thin, flexible plastic tube called a Karman cannula through the cervix to empty the womb with gentle suction from a hand-held syringe (Manual Vacuum Aspiration / MVA) or electric pump (EVA) in 5 to 10 minutes. Some hospitals still perform Dilation and Curettage (D&C), where the cervix is opened and a metal spoon-shaped instrument called a curette scrapes the womb wall, though modern global health guidelines recommend vacuum aspiration with a soft Karman cannula instead of sharp D&C. After 12 to 14 weeks, the in-clinic procedure is called Dilation and Evacuation (D&E), where the cervix is softened and opened ahead of time and the clinician uses suction and smooth forceps to empty the womb.'
          ]
        },
        {
          id: 'when-an-abortion-can-happen',
          keyLabel: 'Different Times of Pregnancy',
          heading: 'Abortion at Different Times of Pregnancy',
          gifSrc: null,
          cartoonRenderer: null,
          paragraphs: [
            'Pregnancy length is counted in weeks starting from the first day of your last normal menstrual period. As a pregnancy grows, the recommended medical and procedural methods adjust so that emptying the womb stays safe at every stage:'
          ],
          timelineBulbs: [
            {
              heading: 'Up to 12 Weeks of Pregnancy (Early First Trimester)',
              paragraphs: [
                'During the first 12 weeks of pregnancy, the embryo and pregnancy lining are very small. Most abortions take place during this stage. Care can be done safely with medication tablets (mifepristone followed 24 to 48 hours later by misoprostol, or misoprostol alone, taken at home or through a clinic) or with a 5-to-10-minute gentle vacuum aspiration procedure in a clinic using a soft plastic Karman cannula.'
              ]
            },
            {
              heading: '12 to 14 Weeks of Pregnancy (Late First Trimester to Early Second Trimester)',
              paragraphs: [
                'Between 12 and 14 weeks of pregnancy, care takes place inside a clinic or hospital. A trained clinician can still perform vacuum aspiration using a slightly wider Karman cannula (often giving misoprostol tablets 2 to 3 hours beforehand to soften the cervix gently), or provide supervised medication abortion using mifepristone followed by repeated smaller doses of misoprostol every 3 hours.'
              ]
            },
            {
              heading: '14 to 20 Weeks of Pregnancy (Mid-Second Trimester)',
              paragraphs: [
                'After 14 weeks of pregnancy, the fetus and placenta are larger and the cervix requires gentle preparation ahead of time. Safe care inside a clinic or hospital is performed either through Dilation and Evacuation (D&E, where the cervix is slowly softened and opened over several hours or overnight with osmotic dilators like laminaria or misoprostol before the clinician empties the womb with suction and smooth forceps) or through supervised clinical medical induction.'
              ]
            },
            {
              heading: 'After 20 Weeks of Pregnancy (Later Pregnancy Medical & Emergency Care)',
              paragraphs: [
                'Abortions later in pregnancy take place inside a hospital when a mother’s life or physical health is in danger (such as from severe preeclampsia or eclampsia, heart failure, cancer, or a severe intrauterine infection after membranes rupture early), when a severe or fatal fetal anomaly is diagnosed on a second-trimester scan, or when severe barriers delayed earlier access. Care is provided by specialist clinical teams using inpatient medical induction of labor or specialized D&E with full pain relief and close monitoring.'
              ]
            }
          ]
        },
        {
          id: 'types-of-abortions-titles',
          keyLabel: 'Types of Abortions',
          heading: 'Types of Abortions',
          gifSrc: null,
          cartoonRenderer: null,
          paragraphs: [
            'Select any type of abortion below to open its dedicated guide:'
          ],
          customContentRenderer: ({ openSubPage }) =>
            h(
              'div',
              { className: 'mt-3 -mx-4 sm:-mx-8 overflow-hidden rounded-2xl shadow-md' },
              h(MakingGifButtons1, {
                sections: abortionTypesBigGifButtons,
                onSelectSection: (sec) => {
                  if (sec && sec.id && abortionTypeHomepages[sec.id]) {
                    openSubPage(abortionTypeHomepages[sec.id]);
                  }
                }
              })
            )
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionSelfCarePatientPacketHomePage1',
          title: 'Open & Translate Patient Information Packet (Self-Care Medical Abortion Checklist)',
          subtitle: 'Step-by-step before, during, and after patient checklist with instant language translation and offline download',
          sourceSubtitle: 'From the World Health Organization (WHO)',
          showPacketLanguageBar: true,
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
              id: 'packet-part1-before-eligibility-checklist',
              keyLabel: 'Before: Eligibility Checklist',
              heading: 'Before Taking Medication Abortion Pills: Self-Assessment Eligibility Checklist',
              gifSrc: null,
              cartoonRenderer: () => renderFertilityCycleCalendarCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
              paragraphs: [
                'Global self-care guidelines allow a woman in the first 12 weeks of pregnancy to safely self-manage a medication abortion at home when she checks four simple questions first. Count how many weeks pregnant you are starting from the first day of your last normal menstrual period (LMP). If it has been 12 weeks (84 days) or less since your last period started, check the four safety questions below:',
                '1. Do you currently have an IUD (intrauterine device or coil) inside your womb? If yes, a nurse, midwife, or doctor must remove the IUD before you take abortion pills. 2. Do you have sharp, one-sided lower belly pain or unusual spotting that could be an ectopic pregnancy (a pregnancy growing in a Fallopian tube outside the womb)? If yes, get checked at a clinic first because pills do not empty a pregnancy outside the womb.',
                '3. Do you have an inherited bleeding disorder, severe anemia, or take prescription blood-thinning medicine? 4. Do you have chronic adrenal gland failure, take long-term corticosteroid medicine, or have an allergy to mifepristone or misoprostol? If you answered NO to all four questions and you are under 12 weeks pregnant, medication abortion at home is medically safe for you. If you answered YES to any question or are 12 weeks pregnant or more, receive your care inside a clinic or hospital.'
              ]
            },
            {
              id: 'packet-part2-how-to-take-pills-checklist',
              keyLabel: 'During: Pill Dosing Checklist',
              heading: 'How to Take Mifepristone and Misoprostol Tablets Step by Step (Under 12 Weeks)',
              gifSrc: null,
              cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
              paragraphs: [
                'Option A (Two-Medicine Packet: Mifepristone + Misoprostol): Step 1: Swallow 1 tablet of mifepristone (200 mg) with clean water. Step 2: Wait 24 to 48 hours (1 to 2 days). Step 3: Take 4 tablets of misoprostol (200 micrograms each, which equals 800 micrograms total) all at the same time in one of three ways: hold all 4 tablets under your tongue for 30 minutes (sublingual), hold them between your lower cheek and gum for 30 minutes (buccal), or place them deep inside the vagina and lie down for 30 minutes. After 30 minutes, swallow any remaining pill pieces with water. If you are between 10 and 12 weeks pregnant and bleeding has not started within 4 hours, take a second dose of 4 misoprostol tablets.',
                'Option B (Misoprostol-Only Packet, when mifepristone is not available): Take 4 tablets of misoprostol (200 micrograms each = 800 micrograms total) held under your tongue, inside your cheek, or in the vagina for 30 minutes, and swallow any remaining pieces. Wait 3 hours, then take another 4 tablets of misoprostol the same way. Wait another 3 hours, and take a third dose of 4 tablets (12 tablets total over 6 hours).',
                'What to do if you vomit: If you throw up within 30 to 45 minutes of swallowing mifepristone or while holding misoprostol in your mouth, the medicine may not have absorbed and the dose may need to be repeated. If you throw up more than 45 minutes later, the medicine is already in your bloodstream. Take ibuprofen (400 mg to 800 mg) for cramps when you take misoprostol or when cramping begins (do not take aspirin because it increases bleeding).'
              ]
            },
            {
              id: 'packet-part3-what-to-expect-bleeding',
              keyLabel: 'What to Expect as Womb Empties',
              heading: 'What Normal Cramping, Bleeding, and Pill Side Effects Feel Like',
              gifSrc: null,
              cartoonRenderer: () => renderWarmComfortRecoveryCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
              paragraphs: [
                'Cramping and vaginal bleeding usually begin 1 to 4 hours after taking misoprostol. For 4 to 6 hours, bleeding will be heavier than a normal period and you will pass blood clots as the womb pushes out the pregnancy lining. Once the pregnancy passes, cramps ease and bleeding slows down.',
                'On the day you take misoprostol, the medicine can cause temporary side effects for a few hours, including chills or shivering, a mild low fever, nausea, loose stools, or tiredness. These medicine effects disappear within 24 hours.',
                'Lighter period-like bleeding or brown spotting normally continues on and off for 1 to 3 weeks. Use clean sanitary pads or clean cloths, drink plenty of clean water, eat iron-rich foods, and do not douche or put soaps or herbs inside the vagina.'
              ]
            },
            {
              id: 'packet-part4-completeness-self-check',
              keyLabel: 'After: 4-Question Completeness Check',
              heading: 'Self-Assessing That the Abortion Is Complete (4-Question Patient Checklist)',
              gifSrc: null,
              cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
              paragraphs: [
                'Global self-care guidelines confirm that you do not need a routine clinic ultrasound after an uncomplicated early medication abortion if you can answer YES to these four self-check questions:',
                '1. Did you have bleeding as heavy as or heavier than a normal period along with cramps after taking misoprostol? 2. Have your bleeding and cramps slowed down since the heaviest hours passed? 3. Have your pregnancy symptoms (morning sickness, nausea, tender breasts) gone away within 1 to 2 weeks? 4. Is a home urine pregnancy test negative when taken 3 to 4 weeks after the abortion?',
                'Remember that a standard home urine pregnancy test taken too early (only 1 or 2 weeks after an abortion) often shows a false positive because leftover pregnancy hormone takes 3 to 4 weeks to leave your urine. If you answered NO to any of the four questions above, visit a clinic or midwife to check if the pregnancy is still growing or if tissue remains in the womb.'
              ]
            },
            {
              id: 'packet-part5-emergency-signs-and-contraception',
              keyLabel: 'Emergency Red Flags & Contraception',
              heading: 'Emergency Danger Signs Checklist and Starting Contraception',
              gifSrc: null,
              cartoonRenderer: () => renderEmergencyCrossShieldCartoonSvg('#FFE4F0', '#9F133A', '#CF366C'),
              paragraphs: [
                'Go to an emergency hospital or clinic on your FemPowHer map immediately if you have any of these four red-flag danger signs: 1. Heavy bleeding that completely soaks through 2 full-sized sanitary pads an hour for 2 hours in a row (4 soaked pads in 2 hours) or feeling dizzy and faint. 2. A fever of 100.4°F (38°C) or higher that lasts more than 24 hours after taking misoprostol, or any fever that starts in the days after your abortion. 3. Severe belly pain that does not get better after taking ibuprofen. 4. Bad-smelling or pus-like vaginal discharge.',
                'Medical privacy fact at the hospital: A medication abortion taken by mouth or under the tongue looks 100% identical to a natural miscarriage on every ultrasound, physical exam, and blood or urine test, and receives the exact same treatment (Post-Abortion Care).',
                'Return of ovulation and starting birth control: Your ovaries can release a new egg (ovulate) just 8 to 14 days after an abortion, before your next period comes in 4 to 6 weeks. You can start birth control pills, injections, the arm implant, patches, rings, or condoms on the very same day you take your abortion pills.'
              ]
            }
          ]
        },
        {
          pageId: 'AbortionTypesDetailedGuideHomePage1',
          title: 'Types of Abortions',
          subtitle: 'Induced, therapeutic, medication, Karman vacuum aspiration, D&E, D&C, and spontaneous types',
          customPageRenderer: ({ onBack: onBackFromTypesHub, openSubPage, trPhrase: trP }) =>
            h(
              'div',
              {
                id: 'AbortionTypesDetailedGuideHomePage1',
                className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden'
              },
              h(
                'div',
                { className: 'w-full px-4 sm:px-6 pt-3 pb-3 shrink-0 bg-white' },
                h(
                  'div',
                  { className: 'max-w-5xl w-full mx-auto' },
                  renderSubpageBackButton(onBackFromTypesHub, t, lang),
                  h(
                    'h1',
                    {
                      className: 'text-2xl sm:text-3xl font-extrabold text-center mt-1',
                      style: { color: '#9F133A' }
                    },
                    trP('Types of Abortions')
                  )
                )
              ),
              h(MakingGifButtons1, {
                sections: abortionTypesBigGifButtons,
                onSelectSection: (sec) => {
                  if (sec && sec.id && abortionTypeHomepages[sec.id]) {
                    openSubPage(abortionTypeHomepages[sec.id]);
                  }
                }
              })
            )
        }
      ]
    },

    'abortion-safe-and-unsafe': {
      pageId: 'AbortionSafeAndUnsafeHomePage1',
      title: tr('abortionBtnSafeAndUnsafe', 'Safe and Unsafe Abortion Care'),
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
          id: 'what-makes-an-abortion-safe',
          keyLabel: 'What Makes Care Safe',
          heading: 'What Makes an Abortion Medically Safe at Any Week of Pregnancy',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'An abortion is medically safe when two conditions are met: first, it uses an evidence-based medical method that matches how many weeks pregnant you are; and second, it is supported or performed by someone with the necessary medical training and accurate information.',
            'Up to 12 to 14 weeks of pregnancy, the safe recommended methods are medication tablets (mifepristone plus misoprostol, or misoprostol alone) or vacuum aspiration using a sterile plastic Karman cannula (Manual Vacuum Aspiration / MVA or Electric Vacuum Aspiration / EVA). At or over 12 to 14 weeks of pregnancy, the safe recommended methods are Dilation and Evacuation (D&E) or supervised medical abortion (repeated small doses of misoprostol after mifepristone) inside a clinic or hospital.',
            'When the method matches your pregnancy weeks and clean medical standards are followed, serious complications are rare at any stage of pregnancy.'
          ]
        },
        {
          id: 'what-makes-an-abortion-unsafe',
          keyLabel: 'Safe vs. Unsafe Methods',
          heading: 'Why Unsafe Methods ("Less Safe" and "Least Safe") Are Dangerous',
          gifSrc: null,
          cartoonRenderer: () => renderEmergencyCrossShieldCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Around the world, about 45% of all abortions happen in unsafe conditions. Global health guidelines divide unsafe abortions into "less safe" and "least safe." An abortion is "less safe" when an outdated surgical scraping method like sharp metal curettage (sharp D&C) is used without modern vacuum aspiration, or when someone takes abortion pills without the right dose instructions for their pregnancy weeks (for example, taking an early-pregnancy pill dose at home when they are actually more than 12 to 14 weeks pregnant and need clinical monitoring).',
            'An abortion is "least safe" and life-threatening when an untrained person uses dangerous methods. Dangerous methods include putting sharp sticks, wires, knitting needles, catheters, roots, or herbal pastes inside the vagina or cervix, drinking toxic chemicals, bleach, detergent, or strong herbal brews, taking high doses of the wrong medicines (like chloroquine or painkillers), or pushing and hitting the belly with force.',
            'These dangerous methods often fail to end the pregnancy and can cause deadly blood loss (hemorrhage), severe blood infection (sepsis), poisoning, or a tear (perforation) in the wall of the womb or bowel. Never put any sharp object, herb, or chemical inside your body.'
          ]
        },
        {
          id: 'safety-under-twelve-vs-over-twelve-weeks',
          keyLabel: 'Under 12 Weeks vs. Over 12 Weeks',
          heading: 'Self-Care Eligibility Under 12 Weeks vs. Clinical Care Over 12 Weeks',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'During the first 12 weeks of pregnancy, the embryo and placenta are very small, so medication abortion tablets can be safely self-managed at home or outside a clinic as long as four safety checks are met: 1. You do not currently have an IUD inside your womb (if you do, a clinician must remove the IUD before you take abortion pills). 2. You do not have sharp one-sided lower belly pain or signs of an ectopic pregnancy in a Fallopian tube. 3. You do not have a severe bleeding disorder, severe anemia, or take prescription blood-thinning medicine. 4. You do not have chronic adrenal failure, take long-term steroid medication, or have an allergy to mifepristone or misoprostol.',
            'Once a pregnancy is past 12 to 14 weeks, the fetus and placenta are larger and the womb has a much richer blood supply. Because of this, safe abortion after 12 weeks takes place inside a clinic or hospital where trained clinicians prepare the cervix gently, use the right second-trimester medicine doses (smaller, repeated doses of misoprostol every 3 hours so the larger womb does not contract too violently), or perform a Dilation and Evacuation (D&E) procedure.',
            'In a later-pregnancy medication abortion inside a clinic, a nurse or midwife also watches closely to make sure both the fetus and the entire placenta pass completely so heavy bleeding does not occur.'
          ]
        },
        {
          id: 'ultrasound-and-early-checks',
          keyLabel: 'Checking Pregnancy Weeks',
          heading: 'How Health Workers Check How Far Along a Pregnancy Is',
          gifSrc: null,
          cartoonRenderer: () => renderFertilityCycleCalendarCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Knowing whether you are under 12 weeks or over 12 to 14 weeks pregnant is the first step in choosing the right method. Pregnancy weeks are counted starting from the first day of your last normal menstrual period (LMP), not from the day you had sex.',
            'According to international medical guidance, an ultrasound scan is not routinely required before having an abortion. A trained midwife, nurse, or doctor can check how far along the pregnancy is by asking about the first day of your last period and feeling the size of your womb during a gentle pelvic and belly exam (at 12 weeks, the top of the womb begins to rise just above the pubic bone).',
            'An ultrasound is used when a woman is unsure of her last period, when the womb feels larger than 12 to 14 weeks, or when she has sharp one-sided belly pain that could point to an ectopic pregnancy in a Fallopian tube.'
          ]
        },
        {
          id: 'why-restrictions-increase-unsafe-care',
          keyLabel: 'Who Provides Safe Care',
          heading: 'Who Can Safely Provide Abortion Care Around the World',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Safe abortion care does not only come from specialist hospital surgeons. Global clinical guidelines confirm that trained midwives, nurses, nurse-midwives, family doctors, and associate clinicians can safely provide medication abortions and vacuum aspiration procedures with a Karman cannula up to 12 to 14 weeks.',
            'For pregnancies over 12 to 14 weeks, trained doctors, specialist clinicians, and midwifery teams inside clinics and hospitals provide supervised medical induction or Dilation and Evacuation (D&E), as well as emergency Post-Abortion Care for any complication.',
            'Whether you are 6 weeks pregnant or 18 weeks pregnant, you deserve skilled, hygienic medical care and respectful treatment.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionWeeksCalculatorGuideHomePage1',
          title: 'How to Count Pregnancy Weeks (Under 12 Weeks vs. Over 12 Weeks)',
          subtitle: 'How clinicians estimate pregnancy weeks from your last period and womb size'
        },
        {
          pageId: 'AbortionUnsafeMythsWarningHomePage1',
          title: 'Dangerous Myths and Methods to Avoid',
          subtitle: 'Why herbal teas, sharp objects, and wrong pill doses can harm your body'
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
          keyLabel: 'Medication Pills (<12w & ≥12w)',
          heading: 'Medication Abortion With Mifepristone and Misoprostol (Under 12 Weeks and Over 12 Weeks)',
          gifSrc: null,
          cartoonRenderer: () => renderMedicationTabletsCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'A medication abortion uses prescription tablets to empty the womb without surgical instruments. The most effective method combines mifepristone (200 mg swallowed with water to block the hormone progesterone) followed 24 to 48 hours later by misoprostol (which softens the cervix and makes the womb contract). Where mifepristone is unavailable, a misoprostol-only regimen is also recommended.',
            'If you are under 12 weeks pregnant: 24 to 48 hours after swallowing mifepristone, you take a single dose of 4 misoprostol tablets (200 micrograms each = 800 micrograms total) held under the tongue, inside the cheek, or placed deep in the vagina for 30 minutes, then swallow any remaining pieces with water. Cramping and bleeding usually start within 1 to 4 hours and empty the womb in 4 to 6 hours (at 10 to 12 weeks, a second dose of misoprostol is sometimes taken 3 to 4 hours later if needed). If using misoprostol alone under 12 weeks, 4 tablets (800 micrograms) are taken every 3 hours (usually 3 doses total) until the pregnancy passes. If you throw up within 30 to 45 minutes of swallowing mifepristone or while holding misoprostol in your mouth, the dose may need to be repeated; after 45 minutes, the medicine is already absorbed.',
            'If you are 12 weeks pregnant or more: medication abortion is still a safe, effective option, but the dosing is different and takes place in a clinic or hospital. After taking mifepristone 24 to 48 hours earlier, smaller doses of misoprostol (400 micrograms, which is 2 tablets) are given every 3 hours under medical supervision until the womb contracts in a mini-labor and delivers both the fetus and the placenta.'
          ]
        },
        {
          id: 'in-clinic-vacuum-aspiration',
          keyLabel: 'Karman Vacuum Aspiration & D&C',
          heading: 'Vacuum Aspiration With a Karman Cannula (Up to 12 to 14 Weeks) vs. D&C',
          gifSrc: null,
          cartoonRenderer: () => renderGentleClinicCareCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Up to 12 to 14 weeks of pregnancy, the recommended in-clinic procedure is vacuum aspiration. After numbing the cervix with local anesthetic, the clinician gently passes a thin, smooth, flexible plastic tube called a Karman cannula through the cervix into the womb. The Karman cannula is attached either to a quiet hand-held vacuum syringe (Manual Vacuum Aspiration / MVA) or a gentle electric suction pump (Electric Vacuum Aspiration / EVA). Gentle suction empties the womb in 5 to 10 minutes with over 98% to 99% effectiveness.',
            'If you are between 12 and 14 weeks pregnant, the clinician often gives misoprostol tablets 2 to 3 hours before the vacuum aspiration (called cervical priming) to soften the cervix so a slightly wider Karman cannula can pass easily and safely without straining the cervix.',
            'You may also hear doctors or hospitals use the term D&C (Dilation and Curettage). In a traditional sharp D&C, the cervix is dilated with metal rods and a spoon-shaped metal loop called a sharp curette is used to scrape the inside walls of the womb. Many hospitals still say "D&C" out of habit when they actually perform gentle suction, but global medical guidelines recommend vacuum aspiration with a plastic Karman cannula instead of sharp metal scraping because Karman vacuum aspiration is faster, less painful, and has a lower risk of bleeding or scarring.'
          ]
        },
        {
          id: 'care-after-twelve-to-fourteen-weeks',
          keyLabel: 'D&E (Over 12 to 14 Weeks)',
          heading: 'Dilation and Evacuation (D&E) When You Are More Than 12 to 14 Weeks Pregnant',
          gifSrc: null,
          cartoonRenderer: () => renderSafeMedicalCareCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'When a pregnancy is past 12 to 14 weeks (in the second trimester), the recommended procedural method is Dilation and Evacuation (D&E). D&E is performed inside a clinic or hospital by a trained clinician and takes place in two steps: preparing the cervix and emptying the womb.',
            'Step 1 (Cervical Preparation): Because the pregnancy is larger after 12 to 14 weeks, the cervix must be softened and opened slowly and gently ahead of time so it is not injured. Depending on how many weeks pregnant you are, the clinician gives mifepristone or misoprostol tablets several hours before the procedure, or places tiny, thin sticks called osmotic dilators (such as laminaria made from sterilized seaweed or synthetic dilators) inside the opening of the cervix for several hours or overnight. As the dilators absorb moisture, they slowly expand and open the cervix gently.',
            'Step 2 (The Evacuation Procedure): Once the cervix is softly opened, you are given pain medication, local cervical numbing, and sedation if available, and the clinician empties the womb using vacuum suction with a wider cannula together with smooth medical forceps. The evacuation step itself usually takes 15 to 30 minutes, and most women can go home the same day after resting in the recovery room.'
          ]
        },
        {
          id: 'pain-management-during-care',
          keyLabel: 'Managing Pain & Cramps',
          heading: 'Pain Relief for Medication and In-Clinic Care at Every Stage',
          gifSrc: null,
          cartoonRenderer: () => renderWarmComfortRecoveryCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Global medical guidelines state that pain relief should always be offered for both medical and procedural abortions at every stage of pregnancy. Cramping happens because the womb muscle contracts tightly to empty itself and seal off blood vessels.',
            'For medication abortion (under 12 weeks or over 12 weeks), non-steroidal anti-inflammatory medicine like ibuprofen is recommended starting when misoprostol is taken or when cramps begin, along with a warm water bottle or heating pad on your lower belly. In a hospital or clinic induction after 12 weeks, stronger oral or injectable pain relief and anti-nausea medicine can also be given. Avoid aspirin because it increases bleeding.',
            'For in-clinic procedures (Karman vacuum aspiration or D&E), clinicians should always give ibuprofen ahead of time plus a paracervical block (local numbing medicine injected gently around the cervix so dilating the cervix hurts much less), along with optional anti-anxiety medicine or conscious sedation.'
          ]
        },
        {
          id: 'antibiotics-and-ekt-considerations',
          keyLabel: 'Antibiotics, Rh & Ectopic Checks',
          heading: 'Preventing Infection, Rh-Negative Blood Care, and Ectopic Pregnancy Checks',
          gifSrc: null,
          cartoonRenderer: () => renderEmergencyCrossShieldCartoonSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'For any in-clinic procedural abortion (vacuum aspiration with a Karman cannula, D&E, or D&C), global guidelines recommend a single dose of preventive antibiotics (such as doxycycline, azithromycin, or metronidazole) before the procedure to protect the womb from infection. For an uncomplicated medication abortion with pills, routine antibiotics are not required.',
            'Regarding Rh-negative blood: international guidelines note that under 12 weeks of pregnancy, so little fetal blood crosses into the mother that routine Rh testing and anti-D (RhoGAM) injections are not required before an early abortion. At or over 12 weeks of pregnancy, if a woman is known to have Rh-negative blood and anti-D injection is available, it is given after the abortion to protect future pregnancies.',
            'Finally, remember that abortion pills only empty a pregnancy inside the womb. If you have sharp, stabbing pain on one side of your lower belly, shoulder-tip pain, or dizziness, get checked at a clinic to rule out an ectopic pregnancy in a Fallopian tube.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionPillsVsClinicComparisonHomePage1',
          title: 'Comparing Pills, Karman Vacuum Aspiration, D&E, and Induction',
          subtitle: 'Which methods are used under 12 weeks vs. over 12 to 14 weeks'
        },
        {
          pageId: 'AbortionPainReliefChecklistHomePage1',
          title: 'Pain Relief & Cervical Preparation Guide',
          subtitle: 'How ibuprofen, paracervical numbing, and gentle cervical dilators work'
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
          heading: 'What Normal Bleeding and Blood Clots Look Like (After Pills, Karman Suction, D&C, or D&E)',
          gifSrc: null,
          cartoonRenderer: () => renderWarmComfortRecoveryCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'After an abortion, vaginal bleeding is a normal sign that your womb is emptying its pregnancy lining and shrinking back to its normal size. How much you bleed depends on whether you used medication tablets or had an in-clinic procedure (Karman vacuum aspiration, D&C, or D&E), and how many weeks pregnant you were.',
            'With a medication abortion, bleeding becomes heavier than a normal period within 1 to 4 hours after taking misoprostol. Under 12 weeks, it is normal to see dark red blood and small to medium clots for 4 to 6 hours while the pregnancy passes (under 8 to 9 weeks, the embryo is tiny and passes hidden inside normal blood clots). At or over 12 weeks in a clinical medical induction, contractions are stronger like a mini-labor until both the fetus and the placenta are delivered, followed by postpartum-style bleeding (lochia) for 2 to 4 weeks.',
            'After an in-clinic vacuum aspiration with a Karman cannula, a D&C, or a second-trimester D&E (Dilation and Evacuation), initial bleeding is often lighter because the clinician already emptied the womb and placenta tissue during the procedure. It is common to have light period-like bleeding or spotting that stops and starts for 1 to 3 weeks (with an occasional brief increase in bleeding around day 4 or 5 as hormones drop) before fading to brown spotting.'
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
          keyLabel: '4-Question Completeness Check',
          heading: 'Self-Assessing That Your Abortion Is Complete and When to Take a Pregnancy Test',
          gifSrc: null,
          cartoonRenderer: () => renderFertilityCycleCalendarCartoonSvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Global self-care guidelines use a simple 4-question checklist to help you confirm that an early medication abortion is complete: 1. Did you have bleeding as heavy as or heavier than a normal period along with cramps after taking misoprostol? 2. Have your bleeding and cramps slowed down since the pregnancy passed? 3. Have your pregnancy symptoms (morning sickness, nausea, tender breasts) gone away within 1 to 2 weeks? 4. Is a home urine pregnancy test negative 3 to 4 weeks later?',
            'Even after a pregnancy has ended completely, the pregnancy hormone hCG takes several weeks to clear out of your bloodstream and urine. Because standard home urine pregnancy tests are very sensitive, taking a urine test 1 or 2 weeks after an abortion will often still show a positive line even when the abortion worked completely. Wait about 3 to 4 weeks before taking a standard home urine pregnancy test.',
            'If you answer YES to all four checklist questions above, you do not need a routine follow-up ultrasound unless you want one. If your urine pregnancy test is still positive 4 weeks after an abortion, or if you had no bleeding or still feel pregnant, visit a local clinic or midwife on your FemPowHer map for an evaluation.'
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
            'Post-Abortion Care (PAC) is essential emergency medical care provided by hospitals, doctors, and midwives around the world to treat complications from any miscarriage, incomplete abortion, or unsafe abortion at any week of pregnancy. Every hospital and emergency clinic has a medical duty to provide life-saving Post-Abortion Care.',
            'If a piece of pregnancy or placenta tissue is stuck in the womb (an incomplete abortion), the womb cannot squeeze all the way down, which causes heavy bleeding or infection. Up to 14 weeks of pregnancy, the doctor or midwife gently empties the remaining tissue using either a quick 5-to-10-minute vacuum aspiration with a soft plastic Karman cannula or a dose of misoprostol tablets (sublingually or orally). Over 14 weeks, clinicians empty retained placenta or tissue using gentle clinical evacuation or misoprostol in the hospital.',
            'If there is an infection in the womb, doctors give intravenous (IV) antibiotic medicine and fluids before or during uterine evacuation, and if a woman has lost a lot of blood, the hospital gives IV fluids, iron, or a blood transfusion to stabilize her safely.'
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
            'One of the most common fears women around the world hear from rumors is that having an abortion will make them infertile. According to extensive global medical research, a safe, uncomplicated abortion (whether with medication tablets, vacuum aspiration with a Karman cannula, or D&E) does not cause infertility and does not make it harder to get pregnant in the future.',
            'A safe, uncomplicated abortion also does not increase the risk of miscarriage, ectopic pregnancy, birth defects, preterm birth, or low birth weight in your future pregnancies, and it does not cause breast cancer.',
            'Fertility is only threatened when an unsafe method or repeated sharp metal scraping (sharp D&C) causes an untreated womb infection, uterine scarring (Asherman syndrome), or physical injury to the uterus. That is why safe methods (pills, Karman vacuum aspiration, or skilled D&E) and prompt treatment for any sign of infection are so important for protecting your future family plans.'
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
      sourceSubtitle: cfg.sourceSubtitle || null,
      hidePageTimeline: Boolean(cfg.hidePageTimeline),
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
