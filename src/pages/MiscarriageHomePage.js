import React from 'https://esm.sh/react@18.3.1';
import { IamPregALHomePageStyle } from './PregnancyAfterLossHomePage.js?v=273';

const h = React.createElement;

// ============================================================================
// 5 Topic-Specific Custom Circular Cartoon Illustrations for "I’ve Had a Miscarriage"
// (Lavender-Amethyst Plum Color Family: #6B21A8 / #9333EA / #F3E8FF)
// ============================================================================

// 1. What Is a Miscarriage (Mother holding her heart with a gentle memorial star & blossom)
function renderMiscarriageNotYourFaultCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#F3E8FF',
      stroke: '#6B21A8',
      strokeWidth: '3'
    }),
    // Soft glowing memorial star in top right
    h('circle', { cx: '134', cy: '44', r: '12', fill: '#FEF3C7' }),
    h('path', {
      d: 'M134 33 L137 41 L145 44 L137 47 L134 55 L131 47 L123 44 L131 41 Z',
      fill: '#F59E0B'
    }),
    // Woman's hair & gentle head
    h('ellipse', { cx: '90', cy: '72', rx: '28', ry: '34', fill: '#271710' }),
    h('circle', { cx: '90', cy: '68', r: '20', fill: '#C68B59' }),
    h('path', {
      d: 'M70 58 C76 42, 104 42, 110 58 C100 50, 80 50, 70 58 Z',
      fill: '#271710'
    }),
    // Closed peaceful eyes & tear
    h('path', {
      d: 'M79 68 Q83 71 87 68',
      stroke: '#271710',
      strokeWidth: '2.2',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M93 68 Q97 71 101 68',
      stroke: '#271710',
      strokeWidth: '2.2',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M100 73 C100 73, 103 78, 103 80 C103 82, 101.5 83.5, 100 83.5 C98.5 83.5, 97 82, 97 80 C97 78, 100 73, 100 73 Z',
      fill: '#38BDF8'
    }),
    // Lavender-plum dress & hands over heart
    h('path', {
      d: 'M54 156 C56 112, 70 94, 90 94 C110 94, 124 112, 126 156 Z',
      fill: '#9333EA'
    }),
    h('path', {
      d: 'M90 116 C86 110, 76 111, 76 118 C76 125, 90 133, 90 137 C90 133, 104 125, 104 118 C104 111, 94 110, 90 116 Z',
      fill: '#F3E8FF'
    })
  );
}

// 2. Physical Healing & Clean Pads Care Cartoon
function renderMiscarriagePhysicalCareCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#FAF5FF',
      stroke: '#6B21A8',
      strokeWidth: '3'
    }),
    // Warm herbal tea mug & clean pad card
    h('rect', {
      x: '46',
      y: '74',
      width: '54',
      height: '62',
      rx: '12',
      fill: '#9333EA',
      stroke: '#6B21A8',
      strokeWidth: '3'
    }),
    h('path', {
      d: 'M100 88 C114 88, 114 118, 100 118',
      fill: 'none',
      stroke: '#6B21A8',
      strokeWidth: '5',
      strokeLinecap: 'round'
    }),
    // Steam rising
    h('path', {
      d: 'M64 62 Q60 50 68 42',
      fill: 'none',
      stroke: '#A855F7',
      strokeWidth: '3',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M82 62 Q78 50 86 42',
      fill: 'none',
      stroke: '#A855F7',
      strokeWidth: '3',
      strokeLinecap: 'round'
    }),
    // White heart on warm mug
    h('path', {
      d: 'M73 102 C70 97, 62 98, 62 104 C62 110, 73 116, 73 119 C73 116, 84 110, 84 104 C84 98, 76 97, 73 102 Z',
      fill: '#FFFFFF'
    }),
    // Soft clean pad icon on right
    h('rect', {
      x: '114',
      y: '58',
      width: '26',
      height: '68',
      rx: '13',
      fill: '#FFFFFF',
      stroke: '#6B21A8',
      strokeWidth: '2.8'
    }),
    h('rect', {
      x: '120',
      y: '70',
      width: '14',
      height: '44',
      rx: '7',
      fill: '#E9D5FF'
    })
  );
}

// 3. Urgent Physical Warning Signs Shield Cartoon
function renderWarningShieldCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#F3E8FF',
      stroke: '#6B21A8',
      strokeWidth: '3'
    }),
    // Medical protection shield
    h('path', {
      d: 'M90 30 L138 48 L138 92 C138 124, 115 144, 90 154 C65 144, 42 124, 42 92 L42 48 Z',
      fill: '#6B21A8',
      stroke: '#D8B4FE',
      strokeWidth: '3.5'
    }),
    // Medical cross inside shield
    h('rect', { x: '82', y: '60', width: '16', height: '52', rx: '4', fill: '#FFFFFF' }),
    h('rect', { x: '64', y: '78', width: '52', height: '16', rx: '4', fill: '#FFFFFF' })
  );
}

// 4. Emotional Healing & Support Circles Cartoon
function renderMiscarriageSupportCircleCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#FAF5FF',
      stroke: '#6B21A8',
      strokeWidth: '3'
    }),
    // Two women holding hands in support
    h('circle', { cx: '64', cy: '62', r: '16', fill: '#8D5524' }),
    h('path', { d: 'M44 152 C44 110, 52 92, 66 92 C80 92, 86 110, 86 152 Z', fill: '#6B21A8' }),
    h('circle', { cx: '116', cy: '62', r: '16', fill: '#E0A382' }),
    h('path', { d: 'M94 152 C94 110, 100 92, 114 92 C128 92, 136 110, 136 152 Z', fill: '#9333EA' }),
    // Shared heart above
    h('path', {
      d: 'M90 36 C87 30, 78 31, 78 38 C78 44, 90 51, 90 54 C90 51, 102 44, 102 38 C102 31, 93 30, 90 36 Z',
      fill: '#A855F7'
    })
  );
}

// 5. Future Cycle & Fertility Hope Cartoon
function renderFutureCycleHopeCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#F3E8FF',
      stroke: '#6B21A8',
      strokeWidth: '3'
    }),
    // Calendar card showing 4-6 weeks cycle return & sprouting leaf
    h('rect', {
      x: '44',
      y: '46',
      width: '92',
      height: '88',
      rx: '14',
      fill: '#FFFFFF',
      stroke: '#6B21A8',
      strokeWidth: '3.5'
    }),
    h('rect', {
      x: '44',
      y: '46',
      width: '92',
      height: '24',
      rx: '10',
      fill: '#9333EA'
    }),
    // Sprouting green hope plant inside calendar
    h('path', {
      d: 'M90 120 L90 88',
      stroke: '#10B981',
      strokeWidth: '4.5',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M90 102 C74 102, 72 86, 88 86',
      fill: '#34D399',
      stroke: '#059669',
      strokeWidth: '2.5'
    }),
    h('path', {
      d: 'M90 96 C106 96, 108 80, 92 80',
      fill: '#34D399',
      stroke: '#059669',
      strokeWidth: '2.5'
    })
  );
}

export default function MiscarriageHomePage({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // 5 Global Sections Written at an Accessible 5th-Grade Reading Level (Zero Chapter Numbers, Zero Em-Dashes)
  const sections = [
    {
      id: 'what-is-miscarriage',
      keyLabel: 'What Is a Miscarriage',
      heading: 'What Is a Miscarriage and Why It Is Never Your Fault',
      gifSrc: null,
      cartoonRenderer: renderMiscarriageNotYourFaultCartoonSvg,
      paragraphs: [
        'A miscarriage is the natural loss of a pregnancy before the 20th week of pregnancy. Most miscarriages happen during the first 12 weeks. Early pregnancy loss is very common across the whole world and happens in about 1 out of every 4 known pregnancies.',
        'Almost all early miscarriages happen because the fertilized egg had a random chromosome difference that kept it from growing normally. In rarer cases, an early loss happens because of a molar pregnancy (where placenta tissue grows abnormally instead of a normal embryo) or an ectopic pregnancy (where the fertilized egg implants outside the womb, usually in a Fallopian tube). A miscarriage is never caused by normal daily work, walking, carrying groceries, feeling stressed, crying, or eating normal food. Please know that you did not cause this loss, and you should never be blamed or ashamed.',
        'Even when a pregnancy ends early, your body and your heart went through a real loss. Some mothers feel deep sadness right away, while others feel shock, numbness, anger, or guilt. Every feeling you have is valid, and you deserve gentle care while you heal.'
      ]
    },
    {
      id: 'what-your-body-feels',
      keyLabel: 'Physical Recovery',
      heading: 'What Happens in Your Body as Your Womb Heals',
      gifSrc: null,
      cartoonRenderer: renderMiscarriagePhysicalCareCartoonSvg,
      paragraphs: [
        'During and after a miscarriage, your womb gently squeezes to empty its soft lining and return to its normal size. It is normal to have vaginal bleeding, spotting, and belly cramps that feel like a heavy period for several days up to 2 weeks. Sometimes a miscarriage passes naturally at home, and other times a doctor or midwife gives medicine tablets or performs a gentle procedure to help empty the womb safely.',
        'While your womb and cervix are closing, germs can travel up into the womb more easily. To prevent an infection, use clean period pads or clean folded cloths instead of tampons. Do not douche, do not put herbs or soaps inside the vagina, and wait until all bleeding has completely stopped and you feel ready before having sex.',
        'Drink plenty of clean water and eat foods rich in iron, such as beans, lentils, dark leafy greens, eggs, or meat, to help your body replace the blood it lost. Rest whenever you feel tired, and place a warm water bottle or warm cloth on your lower belly to ease cramps.'
      ]
    },
    {
      id: 'urgent-warning-signs',
      keyLabel: 'Warning Signs',
      heading: 'Urgent Physical Warning Signs to Watch For',
      gifSrc: null,
      cartoonRenderer: renderWarningShieldCartoonSvg,
      paragraphs: [
        'Serious medical complications such as heavy blood loss, retained tissue in the womb, or uterine infection can happen during a miscarriage or in the weeks after a pregnancy ends. Trust your instincts when something feels wrong in your body.',
        'Go to an emergency hospital or maternity clinic on your FemPowHer map right away if you have heavy bleeding that soaks through more than 2 full pads an hour for 2 hours in a row, severe belly pain or sharp one-sided pain that medicine does not help, a fever of 100.4°F (38°C) or higher, chills, or bad-smelling vaginal discharge.',
        'You should also get immediate medical care if you feel dizzy or faint, have a severe headache that will not go away, notice blurry vision, have chest pain or trouble breathing, or have thoughts of hurting yourself. Always tell the doctor, midwife, or nurse clearly that you were recently pregnant and just had a miscarriage so they give you the right emergency care.'
      ]
    },
    {
      id: 'emotional-healing-and-support',
      keyLabel: 'Grief & Support',
      heading: 'Waves of Grief, Hormone Drops, and Caring for Your Heart',
      gifSrc: null,
      cartoonRenderer: renderMiscarriageSupportCircleCartoonSvg,
      paragraphs: [
        'After a miscarriage, your pregnancy hormones drop quickly. This sudden hormone drop can make sadness, crying spells, trouble sleeping, and tiredness feel even stronger. Grief does not follow a straight line, and you do not have to hide your tears or pretend you are fine.',
        'In many communities, early pregnancy loss is kept quiet, which can leave mothers feeling very lonely. Talking with a trusted friend, partner, midwife, or women’s support group who understands pregnancy loss can help lift that loneliness.',
        'If your sadness or worry makes it hard to eat, sleep, or get through the day, or if you ever feel hopeless, you can use the FemPowHer map and the Emergency Contacts tab to find confidential women’s clinics, safe havens, and crisis support lines in your region.'
      ]
    },
    {
      id: 'future-cycle-and-pregnancy',
      keyLabel: 'Future Cycle & Care',
      heading: 'When Your Period Comes Back and Planning for the Future',
      gifSrc: null,
      cartoonRenderer: renderFutureCycleHopeCartoonSvg,
      paragraphs: [
        'Your normal monthly period usually comes back 4 to 6 weeks after a miscarriage. However, your ovaries can release an egg as soon as 2 weeks after a miscarriage, even before your first period arrives. If you do not want to get pregnant right away while your body heals, ask your clinic about safe birth control options.',
        'Having one miscarriage does not mean you cannot have a healthy baby in the future. Over 85% of women who experience an early miscarriage go on to have a healthy pregnancy later. You can visit a local OB/GYN clinic or midwife to check your iron levels, check if you have Rh-negative blood (which may need a protective injection), and take a daily folic acid vitamin.',
        'There is no single right time to try again once your body has healed. Some mothers want to try again soon, while others need months or years to grieve first. Listen to your own body and heart.'
      ]
    }
  ];

  const bottomSubPages = [
    {
      pageId: 'MiscarriageClinicQuestionsHomePage1',
      title: 'Questions for Your Doctor or Midwife',
      subtitle: 'What to ask at your follow-up visit after a miscarriage'
    },
    {
      pageId: 'MiscarriagePartnerAndFamilySupportHomePage1',
      title: 'Helping Your Partner and Family Understand',
      subtitle: 'Sharing your needs and rejecting unfair myths about early loss'
    }
  ];

  return h(IamPregALHomePageStyle, {
    pageId: 'MiscarriageHomePage',
    title: tr('lossBtnMiscarriage', 'I’ve Had a Miscarriage'),
    sections,
    bottomSubPages,
    palette: {
      pageBg: '#FDFBFF',
      headerDark: '#6B21A8',
      accentMedium: '#9333EA',
      tintLight: '#F3E8FF',
      inkColor: '#3B0764',
      timelineLine: '#D8B4FE'
    },
    onBack,
    UserLanguageChoice1,
    lang,
    t
  });
}
