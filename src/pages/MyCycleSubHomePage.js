import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=264';
import { isRtlLanguage } from '../data/translations.js?v=264';
import {
  CYCLE_PHASE_DEFINITIONS,
  getCycleCalText,
  formatMonthYearForLang,
  getPhasesForDate,
  loadUserCycleCalendarState
} from '../data/cycleCalendarData.js?v=264';

const h = React.createElement;

// ============================================================================
// CycleCalendarWidget1 — Sizable (~2in x 2in) sneak-peek calendar widget &
// button positioned underneath the centered "My Cycle!" title, off to the
// right side of MyCycleSubHomePage.
// - All words/titles are subject to UserLanguageChoice1.
// - Top pill displays: `{UserNameChoiceInsert1}'s Cycle Calendar`
// - Defaults to white & black (no colors) centered on the current month & day
//   until the user adds their cycle info in CalendarSettingsHomePage1.
// - Only today's date has a dark black outline!
// - Clicking it opens InteractiveCalendarHomePage1.
// ============================================================================
export function CycleCalendarWidget1({
  UserNameChoiceInsert1 = 'User',
  UserLanguageChoice1 = null,
  lang = 'en',
  formatDigitsForLang = (v) => String(v),
  cycleCalendarState = null,
  onOpenCalendar = () => {}
}) {
  const ct = getCycleCalText(lang, UserLanguageChoice1);
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  const activeState = cycleCalendarState || loadUserCycleCalendarState(UserNameChoiceInsert1);
  const hasColors = Boolean(activeState && activeState.hasEnteredCycleData && activeState.FirstDayOfPeriod1);

  const monthTitle = formatDigitsForLang(
    formatMonthYearForLang(currentYear, currentMonth, lang, UserLanguageChoice1)
  );
  const weekdaysShort = ct('weekdaysShort', ['S', 'M', 'T', 'W', 'T', 'F', 'S']);

  const firstOfMonth = new Date(currentYear, currentMonth, 1);
  const startDow = firstOfMonth.getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startDow; i++) {
    cells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(currentYear, currentMonth, d));
  }
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return h(
    'button',
    {
      id: 'CycleCalendarWidget1',
      'data-piece-name': 'CycleCalendarWidget1',
      type: 'button',
      onClick: onOpenCalendar,
      title: ct('widgetClickPrompt', 'Tap to open interactive calendar →'),
      className:
        'group relative flex flex-col items-stretch text-left cursor-pointer select-none transition-transform duration-150 hover:scale-[1.015] active:scale-[0.99] focus:outline-none',
      style: {
        width: 'min(326px, 88vw)',
        minHeight: '326px'
      }
    },
    // Top overhanging rounded pill bar: "{UserNameChoiceInsert1}'s Cycle Calendar"
    h(
      'div',
      {
        className:
          'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
        style: { marginBottom: '-8px' }
      },
      h(
        'span',
        { className: 'text-sm sm:text-base font-extrabold text-black leading-tight truncate' },
        h(
          'span',
          { className: 'underline decoration-2 underline-offset-4 font-black' },
          UserNameChoiceInsert1
        ),
        ' ',
        ct('possessiveCycleCalendar', "{user}'s Cycle Calendar")
          .replace('{user}', '')
          .replace(/^'s\s*/i, "'s ")
          .trim()
      )
    ),

    // Main rounded square body (326px x 326px)
    h(
      'div',
      {
        className:
          'w-full flex-1 rounded-[32px] border-[2.5px] border-black bg-white pt-4 pb-3 px-3.5 shadow-md flex flex-col justify-between overflow-hidden'
      },
      h(
        'div',
        { className: 'text-center mb-1.5' },
        h(
          'div',
          { className: 'text-sm font-black uppercase tracking-wide text-black' },
          monthTitle
        )
      ),

      h(
        'div',
        { className: 'grid grid-cols-7 gap-1 text-center border-b border-black/30 pb-1 mb-1' },
        weekdaysShort.map((wd, idx) =>
          h(
            'div',
            {
              key: `wd-${idx}`,
              className: 'text-[11px] font-extrabold text-black/85'
            },
            wd
          )
        )
      ),

      // Calendar Grid — clean rounded date tiles (dark outline ONLY around today's date!)
      h(
        'div',
        { className: 'grid grid-cols-7 gap-1 text-center flex-1 items-center py-0.5' },
        cells.map((dateObj, idx) => {
          if (!dateObj) {
            return h('div', { key: `empty-${idx}`, className: 'h-6' });
          }
          const dayNum = dateObj.getDate();
          const isToday = dayNum === currentDay;
          const phases = hasColors ? getPhasesForDate(dateObj, activeState) : [];
          const primaryPhase = phases[0] || null;
          const secondaryPhase = phases[1] || null;

          return h(
            'div',
            {
              key: `day-${dayNum}`,
              className: 'relative h-6 flex items-center justify-center',
              style: {
                backgroundColor: primaryPhase ? primaryPhase.rgbaFill : 'transparent',
                backgroundImage:
                  primaryPhase && secondaryPhase
                    ? `linear-gradient(135deg, ${primaryPhase.rgbaFill} 0%, ${secondaryPhase.rgbaFill} 100%)`
                    : 'none',
                border: isToday ? '2px solid #000000' : 'none',
                borderRadius: isToday ? '9999px' : '6px'
              }
            },
            h(
              'span',
              {
                className: isToday
                  ? 'text-xs font-black text-black'
                  : 'text-[11px] font-bold text-black'
              },
              formatDigitsForLang(dayNum)
            )
          );
        })
      ),

      h(
        'div',
        {
          className:
            'mt-1.5 pt-1.5 border-t border-black/20 flex items-center justify-between text-[11px] font-bold text-black/85 group-hover:text-black'
        },
        h('span', null, `${ct('todayBadge', 'Today')}: ${formatDigitsForLang(currentDay)}`),
        h('span', { className: 'font-extrabold text-sm' }, '↗')
      )
    )
  );
}

// Simple clear SVG illustrations for each of the 5 Period Products
function renderPeriodProductIllustrationSvg(productId) {
  if (productId === 'pad') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      // Side wings
      h('rect', {
        x: '14',
        y: '62',
        width: '24',
        height: '46',
        rx: '8',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3'
      }),
      h('rect', {
        x: '82',
        y: '62',
        width: '24',
        height: '46',
        rx: '8',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3'
      }),
      // Main pad body
      h('rect', {
        x: '34',
        y: '14',
        width: '52',
        height: '142',
        rx: '26',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3.5'
      }),
      // Inner absorbent core
      h('rect', {
        x: '43',
        y: '28',
        width: '34',
        height: '114',
        rx: '17',
        fill: '#FFE4EF',
        stroke: '#CF366C',
        strokeWidth: '1.5',
        strokeDasharray: '4 3'
      }),
      // Red drop in center
      h('ellipse', { cx: '60', cy: '85', rx: '12', ry: '17', fill: '#EF233C' })
    );
  }
  if (productId === 'cloth') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      // Folded clean cotton cloth layers
      h('rect', {
        x: '24',
        y: '28',
        width: '72',
        height: '114',
        rx: '10',
        fill: '#FFF0F6',
        stroke: '#9F133A',
        strokeWidth: '3'
      }),
      h('line', { x1: '24', y1: '65', x2: '96', y2: '65', stroke: '#CF366C', strokeWidth: '2', strokeDasharray: '5 3' }),
      h('line', { x1: '24', y1: '104', x2: '96', y2: '104', stroke: '#CF366C', strokeWidth: '2', strokeDasharray: '5 3' }),
      // Sun & water drops showing wash & dry in sunlight
      h('circle', { cx: '60', cy: '85', r: '14', fill: '#F78C06' })
    );
  }
  if (productId === 'tampon') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      // Cotton cylinder
      h('rect', {
        x: '44',
        y: '24',
        width: '32',
        height: '86',
        rx: '16',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3.5'
      }),
      // Removal string at bottom
      h('path', {
        d: 'M60 110 C60 128, 48 138, 62 156',
        fill: 'none',
        stroke: '#9F133A',
        strokeWidth: '3',
        strokeLinecap: 'round'
      })
    );
  }
  if (productId === 'cup') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      // Top rim
      h('ellipse', {
        cx: '60',
        cy: '36',
        rx: '34',
        ry: '10',
        fill: '#FFE4EF',
        stroke: '#9F133A',
        strokeWidth: '3.2'
      }),
      // Bell-shaped silicone cup
      h('path', {
        d: 'M26 36 C28 96, 46 118, 60 124 C74 118, 92 96, 94 36',
        fill: '#FFC4E0',
        fillOpacity: '0.65',
        stroke: '#9F133A',
        strokeWidth: '3.2'
      }),
      // Bottom stem
      h('rect', {
        x: '56',
        y: '124',
        width: '8',
        height: '24',
        rx: '4',
        fill: '#9F133A'
      })
    );
  }
  // Period underwear
  return h(
    'svg',
    { viewBox: '0 0 140 150', className: 'w-28 h-28 mx-auto' },
    h('path', {
      d: 'M18 32 H122 L114 82 C92 86, 82 110, 78 124 H62 C58 110, 48 86, 26 82 Z',
      fill: '#FCE4F4',
      stroke: '#9F133A',
      strokeWidth: '3.5',
      strokeLinejoin: 'round'
    }),
    h('rect', {
      x: '56',
      y: '74',
      width: '28',
      height: '48',
      rx: '8',
      fill: '#9F133A'
    })
  );
}

// ============================================================================
// MyCycleSubHomePage — Combined Interactive Menstruation & First-Period Hub
// Combines ALL 4 options into one organized, 5th-grade reading level page
// where every single string translates via UserLanguageChoice1!
// ============================================================================
export default function MyCycleSubHomePage({
  onBack,
  onNavigateEducationPage = null,
  UserNameChoiceInsert1 = 'User',
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  formatDigitsForLang = (v) => String(v),
  cycleCalendarState = null
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };
  const ct = getCycleCalText(lang, UserLanguageChoice1);
  const isRtl = isRtlLanguage(lang);

  const activeState = cycleCalendarState || loadUserCycleCalendarState(UserNameChoiceInsert1);
  const hasColors = Boolean(
    activeState && activeState.hasEnteredCycleData && activeState.FirstDayOfPeriod1
  );

  const now = new Date();
  const periodLen = Math.max(1, Math.min(10, Number(activeState.PeriodDaysDuration1) || 5));
  const follicularLen = Math.max(1, Math.min(21, Number(activeState.FollicularPhaseDuration1) || 8));
  const ovulatoryLen = Math.max(1, Math.min(10, Number(activeState.OvulatoryPhaseDuration1) || 3));
  const lutealLen = Math.max(1, Math.min(21, Number(activeState.LutealPhaseDuration1) || 12));
  const totalCycleLen = periodLen + follicularLen + ovulatoryLen + lutealLen;

  let currentDayInCycle = 1;
  let currentPhaseDef = CYCLE_PHASE_DEFINITIONS[1];
  let daysUntilNextPeriod = totalCycleLen;

  if (hasColors) {
    const parts = String(activeState.FirstDayOfPeriod1).split('-').map(Number);
    if (parts.length === 3 && parts[0] && parts[1] && parts[2]) {
      const startUtc = Date.UTC(parts[0], parts[1] - 1, parts[2]);
      const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
      const diffDays = Math.round((todayUtc - startUtc) / 86400000);
      if (diffDays >= 0) {
        const zeroIdx = diffDays % totalCycleLen;
        currentDayInCycle = zeroIdx + 1;
        daysUntilNextPeriod = totalCycleLen - zeroIdx;
        if (zeroIdx < periodLen) {
          currentPhaseDef = CYCLE_PHASE_DEFINITIONS[1];
        } else if (zeroIdx < periodLen + follicularLen) {
          currentPhaseDef = CYCLE_PHASE_DEFINITIONS[2];
        } else if (zeroIdx < periodLen + follicularLen + ovulatoryLen) {
          currentPhaseDef = CYCLE_PHASE_DEFINITIONS[3];
        } else {
          currentPhaseDef = CYCLE_PHASE_DEFINITIONS[4];
        }
      }
    }
  }

  const currentPhaseTitle =
    (activeState.customKeyLabels && activeState.customKeyLabels[currentPhaseDef.id]) ||
    ct(
      currentPhaseDef.blurbTitleKey || currentPhaseDef.labelKey,
      currentPhaseDef.defaultBlurbTitleEn || currentPhaseDef.defaultLabelEn
    );
  const currentPhaseBlurb = ct(currentPhaseDef.blurbKey, currentPhaseDef.defaultBlurbEn || '');

  // Interactive States for all combined sections
  const [selectedProductId, setSelectedProductId] = useState('pad');
  const [selectedQuickQuestionIdx, setSelectedQuickQuestionIdx] = useState(0);
  const [selectedBloodColorId, setSelectedBloodColorId] = useState('bright-red');
  const [selectedWombPhaseId, setSelectedWombPhaseId] = useState(null);
  const [selectedBodySpotId, setSelectedBodySpotId] = useState('womb-cramps');
  const [selectedFlowTodayId, setSelectedFlowTodayId] = useState('no-blood');
  const [selectedMoodTodayIds, setSelectedMoodTodayIds] = useState(['sore-breasts', 'extra-tired']);
  const [checkedPouchItems, setCheckedPouchItems] = useState({
    pads: true,
    underwear: true,
    wrapBag: true,
    wipes: true,
    water: true
  });

  // 1. Period Products Data (5th-grade reading level, UserLanguageChoice1)
  const periodProductsList = [
    {
      id: 'pad',
      tabLabel: tr('periodProdTabPad', 'Period Pad'),
      caption: tr('periodProdCaptionPad', 'Sticks inside underwear'),
      heading: tr('periodProdHeadingPad', 'How a Period Pad Works (Great for Your First Period!):'),
      bullets: [
        tr(
          'periodProdPadB1',
          'What it is: A soft cotton strip that sticks to the inside of your underwear to catch period blood outside your body.'
        ),
        tr(
          'periodProdPadB2',
          'How to use it: Peel off the paper strip on the back, press the sticky side onto the middle of your underwear, and fold the side wings underneath.'
        ),
        tr(
          'periodProdPadB3',
          'When to change it: Put on a fresh pad every 4 to 6 hours (or sooner if it feels full) so you stay clean, dry, and comfortable.'
        ),
        tr(
          'periodProdPadB4',
          'How to throw it away: Never flush a pad down the toilet! Roll it up, wrap it in paper or tissue, and put it in a trash bin.'
        )
      ]
    },
    {
      id: 'cloth',
      tabLabel: tr('periodProdTabCloth', 'Clean Cloth'),
      caption: tr('periodProdCaptionCloth', 'Wash with soap & dry in sunlight'),
      heading: tr('periodProdHeadingCloth', 'How a Reusable Clean Cloth Pad Works:'),
      bullets: [
        tr(
          'periodProdClothB1',
          'What it is: Soft, clean cotton cloth folded into layers and placed inside your underwear to catch period blood.'
        ),
        tr(
          'periodProdClothB2',
          'When to change it: Change to a fresh clean cloth every 3 to 5 hours so your skin stays dry and healthy.'
        ),
        tr(
          'periodProdClothB3',
          'How to wash it safely: Soak the used cloth in cold water first, wash it thoroughly with clean water and soap, and hang it outside in direct sunlight until completely dry (sunlight kills germs!).'
        )
      ]
    },
    {
      id: 'tampon',
      tabLabel: tr('periodProdTabTampon', 'Tampon'),
      caption: tr('periodProdCaptionTampon', 'Goes gently inside vagina'),
      heading: tr('periodProdHeadingTampon', 'How a Tampon Works:'),
      bullets: [
        tr(
          'periodProdTamponB1',
          'What it is: A small plug of soft cotton with a strong little string on the end that goes gently inside your vagina to soak up blood before it leaves your body.'
        ),
        tr(
          'periodProdTamponB2',
          'How to take it out: The string stays outside your body so you simply pull the string gently to slide the tampon out. A tampon cannot get lost inside you!'
        ),
        tr(
          'periodProdTamponB3',
          'Important safety rule: Change your tampon every 4 to 6 hours, and never leave one in for more than 8 hours.'
        )
      ]
    },
    {
      id: 'cup',
      tabLabel: tr('periodProdTabCup', 'Period Cup'),
      caption: tr('periodProdCaptionCup', 'Reusable soft silicone cup'),
      heading: tr('periodProdHeadingCup', 'How a Period Cup Works:'),
      bullets: [
        tr(
          'periodProdCupB1',
          'What it is: A small, flexible bell-shaped cup made of soft medical silicone that you fold and place inside your vagina to catch period blood instead of soaking it up.'
        ),
        tr(
          'periodProdCupB2',
          'How to empty & clean it: Every 8 to 12 hours, pinch the bottom of the cup to break the seal, pour the blood into the toilet or latrine, rinse the cup with clean water and soap, and put it back in.'
        ),
        tr(
          'periodProdCupB3',
          'Why many women love it: One period cup can be boiled in clean water between periods and reused safely for up to 5 to 10 years!'
        )
      ]
    },
    {
      id: 'underwear',
      tabLabel: tr('periodProdTabUnderwear', 'Period Underwear'),
      caption: tr('periodProdCaptionUnderwear', 'Built-in absorbent layer'),
      heading: tr('periodProdHeadingUnderwear', 'How Period Underwear Works:'),
      bullets: [
        tr(
          'periodProdUnderwearB1',
          'What it is: Washable underwear that looks and feels just like regular underwear, but has special built-in layers in the bottom to soak up period blood and stop leaks.'
        ),
        tr(
          'periodProdUnderwearB2',
          'How to use & wash it: Wear it by itself on light or medium days (or with a pad on heavy days). After wearing, rinse in cold water until the water runs clear, wash with soap, and hang to dry.'
        )
      ]
    }
  ];

  const activeProduct =
    periodProductsList.find((p) => p.id === selectedProductId) || periodProductsList[0];

  const firstPeriodQuickQuestions = [
    {
      q: tr('firstPeriodQuickQ1', 'Does a period hurt?'),
      a: tr(
        'firstPeriodQuickA1',
        'Getting period blood itself does not hurt like a cut! You might feel gentle squeezing or aching in your lower belly (called cramps) as your womb pushes the blood out. A warm water bottle on your belly helps a lot.'
      )
    },
    {
      q: tr('firstPeriodQuickQ2', 'How much blood comes out?'),
      a: tr(
        'firstPeriodQuickA2',
        'Even though it can look like a lot in your pad or toilet, your body only loses about 2 to 3 tablespoons of blood during your entire period week! Your body easily makes fresh blood.'
      )
    },
    {
      q: tr('firstPeriodQuickQ3', 'Can I swim or play sports?'),
      a: tr(
        'firstPeriodQuickA3',
        'Yes! You can run, dance, go to school, shower, and play any sport on your period. Moving your body actually helps belly cramps feel better.'
      )
    },
    {
      q: tr('firstPeriodQuickQ4', 'Can other people tell I am on my period?'),
      a: tr(
        'firstPeriodQuickA4',
        'No! Nobody can tell you have your period just by looking at you.'
      )
    }
  ];

  // 2. Period Blood Colors Data
  const periodBloodColorsList = [
    {
      id: 'bright-red',
      name: tr('bloodColBrightRedName', 'Bright Red'),
      hex: '#EF233C',
      textHex: '#FFFFFF',
      statusBadge: tr('bloodStatusNormal', 'Totally Normal!'),
      desc: tr(
        'bloodColBrightRedDesc',
        'Fresh blood flowing quickly from your womb. This is very normal on your heavier bleeding days (usually Days 1, 2, and 3 of your period).'
      )
    },
    {
      id: 'dark-red',
      name: tr('bloodColDarkRedName', 'Dark Red / Plum'),
      hex: '#800F2F',
      textHex: '#FFFFFF',
      statusBadge: tr('bloodStatusNormal', 'Totally Normal!'),
      desc: tr(
        'bloodColDarkRedDesc',
        'Normal period blood that sat inside your womb for a few hours before coming out (especially common when you first wake up in the morning). Small coin-sized jelly drops are normal too.'
      )
    },
    {
      id: 'brown-rust',
      name: tr('bloodColBrownName', 'Brown / Rust'),
      hex: '#7F4F24',
      textHex: '#FFFFFF',
      statusBadge: tr('bloodStatusNormal', 'Totally Normal!'),
      desc: tr(
        'bloodColBrownDesc',
        'When blood touches air, it turns brown! You will often see brown blood on the very first day or the last 1 to 2 days of your period as older blood finishes leaving your womb.'
      )
    },
    {
      id: 'light-pink',
      name: tr('bloodColPinkName', 'Light Pink'),
      hex: '#FF8FA3',
      textHex: '#000000',
      statusBadge: tr('bloodStatusNormal', 'Usually Normal'),
      desc: tr(
        'bloodColPinkDesc',
        'A tiny drop of red blood mixed with your natural clear vaginal wetness. Common at the very start or end of your period, or for 1 day when an egg comes out at ovulation.'
      )
    },
    {
      id: 'gray-orange',
      name: tr('bloodColGrayName', 'Gray or Bad Smell'),
      hex: '#6C757D',
      textHex: '#FFFFFF',
      statusBadge: tr('bloodStatusVisitClinic', 'Visit a Clinic'),
      desc: tr(
        'bloodColGrayDesc',
        'Gray discharge, green/yellow fluid, itching, burning, or a strong fishy or rotten smell is NOT normal period blood—it can mean an infection that a clinic can easily treat with medicine.'
      )
    }
  ];

  // 3. What Happens Inside My Womb All Month (Underneath Calendar)
  const pStart = 1;
  const pEnd = periodLen;
  const fStart = pEnd + 1;
  const fEnd = pEnd + follicularLen;
  const oStart = fEnd + 1;
  const oEnd = fEnd + ovulatoryLen;
  const lStart = oEnd + 1;
  const lEnd = totalCycleLen;

  const wombStoryPhases = [
    {
      id: 'PeriodDaysDuration1',
      title: tr('wombStepPeriodTitle', 'Menstrual Phase (Period)'),
      daysText: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(pStart)}–${formatDigitsForLang(pEnd)}`,
      shortLine: tr('wombStepPeriodShort', 'Your womb lets go of its soft lining as period blood.'),
      detailLine: tr(
        'wombStepPeriodDetail',
        'Because no baby started growing last month, your womb gently squeezes to push out the old soft lining through your vagina as period blood. Rest, drink warm water, and eat iron-rich foods.'
      ),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[1].rgbaFill
    },
    {
      id: 'FollicularPhaseDuration1',
      title: tr('wombStepFollicularTitle', 'Follicular Phase'),
      daysText: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(fStart)}–${formatDigitsForLang(fEnd)}`,
      shortLine: tr('wombStepFollicularShort', 'Your ovary grows a tiny new egg + your energy rises.'),
      detailLine: tr(
        'wombStepFollicularDetail',
        'Right after your period ends, your ovary begins getting a tiny new egg ready inside a little sac, and your womb starts building a fresh soft lining. Most girls and women feel happier and full of energy!'
      ),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[2].rgbaFill
    },
    {
      id: 'OvulatoryPhaseDuration1',
      title: tr('wombStepOvulatoryTitle', 'Ovulatory Phase'),
      daysText: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(oStart)}–${formatDigitsForLang(oEnd)}`,
      shortLine: tr('wombStepOvulatoryShort', 'Your ovary lets go of the tiny egg (easiest days to get pregnant).'),
      detailLine: tr(
        'wombStepOvulatoryDetail',
        'Your ovary releases a tiny egg into the tube leading to your womb. You may notice clear, slippery fluid in your underwear. These are the days a woman can most easily get pregnant if she has sex.'
      ),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[3].rgbaFill
    },
    {
      id: 'LutealPhaseDuration1',
      title: tr('wombStepLutealTitle', 'Luteal Phase'),
      daysText: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(lStart)}–${formatDigitsForLang(lEnd)}`,
      shortLine: tr('wombStepLutealShort', 'Your womb builds a soft warm blanket lining before your next period.'),
      detailLine: tr(
        'wombStepLutealDetail',
        'Your womb makes its lining thick and soft like a warm blanket. If you are not pregnant, your body prepares to start your next period. You may feel hungrier, tired, bloated, emotional, or have sore breasts.'
      ),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[4].rgbaFill
    }
  ];

  const activeWombStoryId = selectedWombPhaseId || currentPhaseDef.id;
  const activeWombStoryObj =
    wombStoryPhases.find((w) => w.id === activeWombStoryId) || wombStoryPhases[0];

  // 4. Tap Any Spot on the Body (Directly below Blood Colors)
  const bodyFeelingsSpots = [
    {
      id: 'mood-head',
      label: tr('bodySpotMoodHeadLabel', 'Mood & Head'),
      title: tr('bodySpotMoodHeadTitle', 'Why Do My Moods Change or My Head Ache?'),
      whyText: tr(
        'bodySpotMoodHeadWhy',
        'As your natural body messengers (hormones) go up and down before and during your period, it is completely normal to feel more emotional, cry more easily, feel annoyed, or get a mild headache.'
      ),
      tips: [
        tr('bodySpotMoodHeadTip1', 'Drink extra glasses of clean water and do not skip meals.'),
        tr('bodySpotMoodHeadTip2', 'Get extra sleep at night and take slow deep breaths when overwhelmed.'),
        tr('bodySpotMoodHeadTip3', 'Remind yourself: having big feelings before your period is normal and will pass in a few days!')
      ]
    },
    {
      id: 'sore-breasts',
      label: tr('bodySpotBreastsLabel', 'Sore Breasts'),
      title: tr('bodySpotBreastsTitle', 'Why Do My Breasts Feel Sore or Swollen?'),
      whyText: tr(
        'bodySpotBreastsWhy',
        'In the week before your period starts (the Luteal Phase), your body holds onto a little extra water and swells the tiny milk glands in your breasts. That makes your chest feel heavy or tender to touch.'
      ),
      tips: [
        tr('bodySpotBreastsTip1', 'Wear a soft, comfortable bra (or a supportive sports bra) that does not pinch.'),
        tr('bodySpotBreastsTip2', 'Cut back on very salty snacks and caffeine for a few days.'),
        tr('bodySpotBreastsTip3', 'Your breasts will feel soft and normal again as soon as your period bleeding starts!')
      ]
    },
    {
      id: 'bloated-belly',
      label: tr('bodySpotBellyLabel', 'Bloated Belly & Poop'),
      title: tr('bodySpotBellyTitle', 'Why Does My Tummy Feel Puffy or Poop More on My Period?'),
      whyText: tr(
        'bodySpotBellyWhy',
        'Before your period, your tummy digests food more slowly and holds extra water, making your belly feel full or puffy. Then once your period starts, the same natural signal that tells your womb to squeeze out blood also makes your tummy squeeze—causing "period poops"!'
      ),
      tips: [
        tr('bodySpotBellyTip1', 'Wear loose, comfy pants or skirts around your waist.'),
        tr('bodySpotBellyTip2', 'Drink warm water, ginger tea, or mint tea to calm your tummy.'),
        tr('bodySpotBellyTip3', 'Eat smaller meals with fruit, vegetables, and whole grains.')
      ]
    },
    {
      id: 'womb-cramps',
      label: tr('bodySpotCrampsLabel', 'Womb Cramps'),
      title: tr('bodySpotCrampsTitle', 'Why Do I Get Lower Belly Cramps?'),
      whyText: tr(
        'bodySpotCrampsWhy',
        'Your womb (uterus) is a strong muscle shaped like an upside-down pear. During your period, your womb gently squeezes and relaxes to push the old soft lining out through your vagina. Those squeezes are what you feel as belly cramps!'
      ),
      tips: [
        tr('bodySpotCrampsTip1', 'Put a warm water bottle or warm folded cloth on your lower belly.'),
        tr('bodySpotCrampsTip2', 'Curl up on your side with your knees bent, or rub your lower belly in gentle circles.'),
        tr('bodySpotCrampsTip3', 'Drink warm herbal tea or take a gentle walk to help your muscles relax.')
      ]
    },
    {
      id: 'tired-legs-back',
      label: tr('bodySpotBackLegsLabel', 'Lower Back & Tired Legs'),
      title: tr('bodySpotBackLegsTitle', 'Why Do My Lower Back and Legs Ache?'),
      whyText: tr(
        'bodySpotBackLegsWhy',
        'The nerves around your womb connect right to your lower back and the top of your thighs! So when your womb squeezes during your period, you can feel a dull ache in your lower back and heavy, tired legs.'
      ),
      tips: [
        tr('bodySpotBackLegsTip1', 'Place a warm cloth or warm water bottle against your lower back.'),
        tr('bodySpotBackLegsTip2', 'Stretch your back gently on your hands and knees (like a cat stretching).'),
        tr('bodySpotBackLegsTip3', 'Rest your legs up on a pillow when lying down.')
      ]
    }
  ];

  const activeBodySpot =
    bodyFeelingsSpots.find((s) => s.id === selectedBodySpotId) || bodyFeelingsSpots[3];

  // 5. "How Does My Body Feel Today?" Check-In Options
  const flowTodayOptions = [
    { id: 'no-blood', label: tr('flowOptNoBlood', 'No Blood Today') },
    { id: 'light-spotting', label: tr('flowOptLight', 'Light Spotting') },
    { id: 'medium-flow', label: tr('flowOptMedium', 'Medium Flow') },
    { id: 'heavy-flow', label: tr('flowOptHeavy', 'Heavy Flow') }
  ];

  const moodTodayOptions = [
    { id: 'belly-cramps', label: tr('moodOptCramps', 'Belly Cramps') },
    { id: 'sore-breasts', label: tr('moodOptBreasts', 'Sore Breasts') },
    { id: 'extra-tired', label: tr('moodOptTired', 'Extra Tired') },
    { id: 'happy-energetic', label: tr('moodOptHappy', 'Happy & Energetic') },
    { id: 'emotional-sad', label: tr('moodOptEmotional', 'Emotional / Sad') },
    { id: 'hungry-cravings', label: tr('moodOptHungry', 'Hungry / Cravings') }
  ];

  const toggleMoodToday = (id) => {
    setSelectedMoodTodayIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 6. Period Bag Pouch Checklist + Stain Rescue + Facts vs Myths + Normal Q&A
  const pouchChecklistItems = [
    {
      id: 'pads',
      text: tr('pouchItemPads', '2 or 3 clean Period Pads or folded Clean Cloths')
    },
    {
      id: 'underwear',
      text: tr('pouchItemUnderwear', '1 extra pair of clean underwear')
    },
    {
      id: 'wrapBag',
      text: tr('pouchItemWrapBag', 'A small bag or paper wrap (to hold used pads or cloths)')
    },
    {
      id: 'wipes',
      text: tr('pouchItemWipes', 'Tissues or wet wipes to clean your hands and body')
    },
    {
      id: 'water',
      text: tr('pouchItemWater', 'A bottle of clean drinking water')
    }
  ];

  const factsAndQaCards = [
    {
      title: tr('periodFactQ1', 'My period skipped a month! Is that normal?'),
      body: tr(
        'periodFactA1',
        'If you just got your first period within the last 1 to 2 years, it is super common for your period to skip a month or come early or late while your body practices! Big stress, sickness, not eating enough, or pregnancy can also make a period stop.'
      ),
      bg: '#FFF5FA'
    },
    {
      title: tr('periodFactQ2', 'How old are girls when their first period starts?'),
      body: tr(
        'periodFactA2',
        'Most girls get their very first period between ages 9 and 15 (often about 2 years after their breasts first start growing and they notice clear or white wetness in their underwear). Every girl’s body has its own natural clock!'
      ),
      bg: '#FFF0F5'
    },
    {
      title: tr('periodFactQ3', 'Why do I see dark red jelly blobs in my period blood?'),
      body: tr(
        'periodFactA3',
        'Those small soft blobs are called blood clots. On heavier period days, blood comes out quickly and clumps together like jelly. If they are smaller than a coin, they are completely normal!'
      ),
      bg: '#FFF5FA'
    },
    {
      title: tr('periodFactQ4', 'Can I shower and wash my hair on my period?'),
      body: tr(
        'periodFactA4',
        'YES! Bathing or showering with warm water is healthy, keeps you clean and fresh, and helps relax belly cramps. Having your period never makes you dirty or impure.'
      ),
      bg: '#FFF0F5'
    },
    {
      title: tr('periodFactQ5', 'Does having a period mean I can get pregnant?'),
      body: tr(
        'periodFactA5',
        'YES. Once your body starts having periods, your ovaries are releasing eggs each month. If you have sex without protection, sperm can meet that egg and start a pregnancy—even when you are young.'
      ),
      bg: '#FFF5FA'
    },
    {
      title: tr('periodFactQ6', 'Do tampons or period cups take away "virginity"?'),
      body: tr(
        'periodFactA6',
        'NO! Virginity is about choosing to have sex with another person, never about using a period pad, tampon, or cup. The thin tissue inside the vaginal opening naturally stretches and already has an opening for period blood to come out.'
      ),
      bg: '#FFF0F5'
    }
  ];

  const handleOpenCalendar = () => {
    if (typeof onNavigateEducationPage === 'function') {
      onNavigateEducationPage('InteractiveCalendarHomePage1');
    }
  };

  return h(
    'div',
    {
      id: 'MyCycleSubHomePage',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6 select-none'
    },
    h(
      'div',
      { className: 'max-w-5xl w-full mx-auto flex-1 flex flex-col space-y-8 pb-12' },
      renderSubpageBackButton(onBack, t, lang),

      // Centered "My Cycle!" Title (UserLanguageChoice1)
      h(
        'h1',
        {
          className: 'text-2xl sm:text-3xl font-extrabold text-center mt-1',
          style: { color: '#9F133A' }
        },
        tr('cycleBtnMyCycle', 'My Cycle!')
      ),

      // ======================================================================
      // TOP SIDE-BY-SIDE TWO-COLUMN SECTION (Always Left & Right side-by-side!):
      // - LEFT OF THE CALENDAR:
      //     1. At the top: "Tap Any Spot on the Body to See Why It Feels That Way!" Big Bubble
      //     2. Directly underneath that on the left: "What Do Period Blood Colors Mean?" Bubble
      // - RIGHT COLUMN:
      //     1. `CycleCalendarWidget1`
      //     2. `"You are in..."` Current Phase Square
      //     3. Directly underneath the calendar column: Colored list of `"What Happens Inside My Womb All Month? (Tap Any Phase!)"`
      // ======================================================================
      h(
        'div',
        {
          className:
            'w-full flex flex-row items-start justify-between gap-4 sm:gap-6 px-1 sm:px-2'
        },

        // ====================================================================
        // LEFT COLUMN:
        //   1. At the top: "Tap Any Spot on the Body to See Why It Feels That Way!"
        //   2. Underneath that: "What Do Period Blood Colors Mean?"
        // ====================================================================
        h(
          'div',
          {
            id: 'MyCycleLeftColumn1',
            className: 'flex-1 flex flex-col gap-6 min-w-0'
          },

          // 1. TOP OF LEFT COLUMN: "Tap Any Spot on the Body to See Why It Feels That Way!" Big Bubble
          h(
            'div',
            {
              id: 'TapAnySpotOnBodyBubble1',
              'data-piece-name': 'TapAnySpotOnBodyBubble1',
              className: 'w-full flex flex-col items-stretch'
            },
            h(
              'div',
              {
                className:
                  'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
                style: { marginBottom: '-8px' }
              },
              h(
                'span',
                { className: 'text-xs sm:text-base font-extrabold text-black leading-tight' },
                tr('tapAnySpotOnBodyBubbleTitle', 'Tap Any Spot on the Body to See Why It Feels That Way!')
              )
            ),
            h(
              'div',
              {
                className:
                  'w-full rounded-[32px] border-[2.5px] border-black bg-[#FFF9FC] pt-5 pb-4 px-3.5 sm:px-4 shadow-md flex flex-row items-stretch gap-3.5'
              },
              // Left inside bubble: Friendly interactive female body silhouette with 5 clickable body spot pills (matches Option 2 image!)
              h(
                'div',
                {
                  className:
                    'w-48 sm:w-52 shrink-0 p-3 rounded-3xl border-2 border-black bg-[#FFE8F2] flex flex-col items-center justify-center relative'
                },
                h(
                  'div',
                  { className: 'w-full flex flex-col items-center py-1 relative' },
                  // Head circle with Mood & Head pill across it as in Option 2 image
                  h(
                    'div',
                    {
                      className:
                        'w-16 h-16 rounded-full border-2 border-black bg-[#8D5524] flex items-center justify-center mb-1 relative'
                    },
                    (() => {
                      const spot = bodyFeelingsSpots[0];
                      const isSelected = spot.id === activeBodySpot.id;
                      return h(
                        'button',
                        {
                          key: spot.id,
                          type: 'button',
                          onClick: () => setSelectedBodySpotId(spot.id),
                          className:
                            'w-40 py-1 px-2 rounded-xl border-2 border-black text-[11px] font-black text-center cursor-pointer transition-transform active:scale-95 shadow-sm shrink-0',
                          style: {
                            backgroundColor: isSelected ? '#9F133A' : '#FFFFFF',
                            color: isSelected ? '#FFFFFF' : '#000000'
                          }
                        },
                        isSelected ? `${spot.label} ★` : spot.label
                      );
                    })()
                  ),
                  // Torso with the remaining spots stacked down the body + Tired Legs / Back at bottom
                  h(
                    'div',
                    {
                      className:
                        'w-32 rounded-[28px] border-2 border-black bg-[#F1C27D] py-3 px-1 flex flex-col items-center gap-3'
                    },
                    bodyFeelingsSpots.slice(1, 4).map((spot) => {
                      const isSelected = spot.id === activeBodySpot.id;
                      return h(
                        'button',
                        {
                          key: spot.id,
                          type: 'button',
                          onClick: () => setSelectedBodySpotId(spot.id),
                          className:
                            'w-40 py-1.5 px-2 rounded-xl border-2 border-black text-[11px] font-black text-center cursor-pointer transition-transform active:scale-95 shadow-sm shrink-0',
                          style: {
                            backgroundColor: isSelected ? '#9F133A' : '#FFFFFF',
                            color: isSelected ? '#FFFFFF' : '#000000'
                          }
                        },
                        isSelected ? `${spot.label} ★` : spot.label
                      );
                    })
                  ),
                  // 5th pill below torso: Tired Legs / Back (matches Option 2 image!)
                  (() => {
                    const spot = bodyFeelingsSpots[4];
                    const isSelected = spot.id === activeBodySpot.id;
                    return h(
                      'button',
                      {
                        key: spot.id,
                        type: 'button',
                        onClick: () => setSelectedBodySpotId(spot.id),
                        className:
                          'mt-3 w-40 py-1.5 px-2 rounded-xl border-2 border-black text-[11px] font-black text-center cursor-pointer transition-transform active:scale-95 shadow-sm shrink-0',
                        style: {
                          backgroundColor: isSelected ? '#9F133A' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : '#000000'
                        }
                      },
                      isSelected ? `${spot.label} ★` : spot.label
                    );
                  })()
                )
              ),

              // Right inside bubble: Plain-language explanation of why that body part feels that way + 3 easy relief steps
              h(
                'div',
                {
                  className:
                    'flex-1 min-w-0 p-3.5 sm:p-4 rounded-3xl border-2 border-black bg-white flex flex-col justify-between gap-2.5'
                },
                h(
                  'div',
                  { className: 'space-y-2' },
                  h(
                    'h3',
                    { className: 'text-sm sm:text-base font-black text-[#9F133A] leading-snug' },
                    activeBodySpot.title
                  ),
                  h(
                    'p',
                    { className: 'text-xs font-bold text-black/90 leading-relaxed' },
                    activeBodySpot.whyText
                  )
                ),
                h(
                  'div',
                  {
                    className: 'p-3 rounded-2xl border-2 border-[#FEACEC] bg-[#FFF5FA] space-y-1'
                  },
                  h(
                    'div',
                    { className: 'text-xs font-black text-[#9F133A]' },
                    tr('easyWaysToFeelBetterHeader', 'Easy Ways to Help Your Body Feel Better:')
                  ),
                  h(
                    'ul',
                    { className: 'space-y-1 text-[11px] sm:text-xs font-bold text-black/90 leading-snug' },
                    activeBodySpot.tips.map((tip, tIdx) =>
                      h(
                        'li',
                        { key: `spot-tip-${tIdx}`, className: 'flex items-start gap-1.5' },
                        h('span', { className: 'font-black text-[#9F133A] shrink-0' }, '•'),
                        h('span', null, tip)
                      )
                    )
                  )
                )
              )
            )
          ),

          // 2. DIRECTLY UNDERNEATH "TAP ANY SPOT" ON THE LEFT:
          //    DIFFERENT PERIOD BLOOD COLORS IN THE OVERHANGING-PILL BUBBLE STYLE (No "Tap Any Color!")
          h(
            'div',
            {
              id: 'PeriodBloodColorsBubble1',
              'data-piece-name': 'PeriodBloodColorsBubble1',
              className: 'w-full flex flex-col items-stretch'
            },
            // Overhanging top pill bar: "What Do Period Blood Colors Mean?"
            h(
              'div',
              {
                className:
                  'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
                style: { marginBottom: '-8px' }
              },
              h(
                'span',
                { className: 'text-sm sm:text-base font-extrabold text-black leading-tight' },
                tr('periodBloodColorsBubbleTitleClean', 'What Do Period Blood Colors Mean?')
              )
            ),
            // Main rounded body of Period Blood Colors bubble (all 5 colors & meanings visible directly, no tap needed!)
            h(
              'div',
              {
                className:
                  'w-full rounded-[32px] border-[2.5px] border-black bg-[#FFF9FC] pt-5 pb-5 px-4 sm:px-5 shadow-md flex flex-col gap-3.5'
              },
              h(
                'div',
                { className: 'grid grid-cols-2 sm:grid-cols-5 gap-2.5' },
                periodBloodColorsList.map((colItem) =>
                  h(
                    'div',
                    {
                      key: colItem.id,
                      className:
                        'p-2.5 rounded-2xl border-2 border-black bg-white flex flex-col justify-start gap-2 text-left'
                    },
                    h(
                      'div',
                      {
                        className:
                          'w-full py-2 px-2 rounded-xl border-2 border-black text-[11px] font-black text-center leading-tight',
                        style: {
                          backgroundColor: colItem.hex,
                          color: colItem.textHex
                        }
                      },
                      colItem.name
                    ),
                    h(
                      'div',
                      { className: 'text-[10.5px] font-bold text-black/85 leading-snug' },
                      colItem.desc
                    )
                  )
                )
              )
            )
          )
        ),

        // ====================================================================
        // RIGHT COLUMN:
        //   1. CycleCalendarWidget1
        //   2. "You are in..." Current Phase Square
        //   3. Directly Underneath the Calendar Column:
        //      Colored List of "What Happens Inside My Womb All Month? (Tap Any Phase!)"
        // ====================================================================
        h(
          'div',
          {
            id: 'MyCycleRightCalendarColumn1',
            className: 'shrink-0 flex flex-col items-center gap-4',
            style: { width: 'min(326px, 88vw)' }
          },

          // 1. CycleCalendarWidget1
          h(CycleCalendarWidget1, {
            UserNameChoiceInsert1,
            UserLanguageChoice1,
            lang,
            formatDigitsForLang,
            cycleCalendarState: activeState,
            onOpenCalendar: handleOpenCalendar
          }),

          // 2. "You are in..." Square Directly Underneath the Calendar
          h(
            'div',
            {
              id: 'MyCycleYouAreInSquare1',
              'data-piece-name': 'MyCycleYouAreInSquare1',
              className: 'w-full flex flex-col items-stretch text-center'
            },
            h(
              'div',
              {
                className:
                  'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
                style: { marginBottom: '-8px' }
              },
              h(
                'span',
                { className: 'text-sm sm:text-base font-extrabold text-black leading-tight' },
                tr('youAreInHeaderPill', 'You are in...')
              )
            ),
            h(
              'div',
              {
                className:
                  'w-full rounded-[28px] border-[2.5px] border-black pt-5 pb-4 px-4 shadow-md flex flex-col items-center justify-between gap-2',
                style: {
                  backgroundColor: hasColors ? currentPhaseDef.rgbaFill : '#FFF5FA'
                }
              },
              h(
                'div',
                { className: 'text-xl sm:text-2xl font-black text-black leading-tight' },
                hasColors
                  ? currentPhaseTitle
                  : tr('noPeriodLoggedYetTitle', 'Add Period Date on Calendar')
              ),
              h(
                'div',
                { className: 'text-xs font-extrabold text-black/85' },
                hasColors
                  ? `${tr('dayLabel', 'Day')} ${formatDigitsForLang(currentDayInCycle)} ${tr(
                      'ofLabel',
                      'of'
                    )} ${formatDigitsForLang(totalCycleLen)} • ${tr(
                      'nextPeriodInLabel',
                      'Next period in'
                    )} ${formatDigitsForLang(daysUntilNextPeriod)} ${ct('daysUnit', 'days')}`
                  : tr(
                      'tapCalendarToStartPrompt',
                      'Tap your calendar above to pick your First Day of Period and auto-populate your phases!'
                    )
              ),
              hasColors &&
                h(
                  'div',
                  {
                    className:
                      'w-full p-2.5 rounded-2xl border-2 border-black bg-white text-left text-[11px] font-bold text-black/85 leading-snug'
                  },
                  currentPhaseBlurb
                )
            )
          ),

          // 3. UNDERNEATH THE CALENDAR:
          //    Colored List of "What Happens Inside My Womb All Month? (Tap Any Phase!)"
          h(
            'div',
            {
              id: 'WhatHappensInsideMyWombUnderCalendar1',
              'data-piece-name': 'WhatHappensInsideMyWombUnderCalendar1',
              className: 'w-full flex flex-col items-stretch'
            },
            // Overhanging top pill bar
            h(
              'div',
              {
                className:
                  'w-full px-3 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
                style: { marginBottom: '-8px' }
              },
              h(
                'span',
                { className: 'text-xs sm:text-[13px] font-extrabold text-black leading-tight' },
                tr(
                  'whatHappensInWombBubbleTitle',
                  'What Happens Inside My Womb All Month? (Tap Any Phase!)'
                )
              )
            ),
            // Main rounded container holding the 4 colored phase rows + active detail box
            h(
              'div',
              {
                className:
                  'w-full rounded-[28px] border-[2.5px] border-black bg-[#FFF9FC] pt-5 pb-4 px-3 shadow-md flex flex-col gap-2'
              },
              wombStoryPhases.map((wPhase) => {
                const isHereNow = hasColors && currentPhaseDef.id === wPhase.id;
                const isSelected = activeWombStoryObj.id === wPhase.id;
                return h(
                  'button',
                  {
                    key: wPhase.id,
                    type: 'button',
                    onClick: () => setSelectedWombPhaseId(wPhase.id),
                    className:
                      'w-full p-2.5 rounded-2xl border-2 border-black text-left flex flex-col gap-1 cursor-pointer transition-transform active:scale-[0.99]',
                    style: {
                      backgroundColor: wPhase.rgbaFill,
                      boxShadow: isSelected ? '0 0 0 2px #000000' : 'none'
                    }
                  },
                  h(
                    'div',
                    { className: 'flex items-center justify-between gap-1 flex-wrap' },
                    h(
                      'span',
                      { className: 'text-xs font-black text-black leading-tight' },
                      `${wPhase.title} (${wPhase.daysText})`
                    ),
                    isHereNow &&
                      h(
                        'span',
                        {
                          className:
                            'px-2 py-0.5 rounded-full border border-black bg-white text-[9px] font-black text-[#9F133A] shrink-0'
                        },
                        tr('youAreHereBadgeCaps', 'YOU ARE HERE')
                      )
                  ),
                  h(
                    'div',
                    { className: 'text-[11px] font-bold text-black/90 leading-snug' },
                    wPhase.shortLine
                  )
                );
              }),
              // Expanded plain-language explanation for the tapped phase
              h(
                'div',
                {
                  className:
                    'mt-1 p-2.5 rounded-2xl border-2 border-black bg-white text-left space-y-1'
                },
                h(
                  'div',
                  { className: 'text-[11px] font-black text-[#9F133A]' },
                  `${activeWombStoryObj.title} (${activeWombStoryObj.daysText})`
                ),
                h(
                  'p',
                  { className: 'text-[11px] font-bold text-black/85 leading-snug' },
                  activeWombStoryObj.detailLine
                )
              )
            )
          )
        )
      ),

      // ======================================================================
      // ORGANIZED BELOW:
      // 1. "How Does My Body Feel Today? (Tap What You Feel!)" Interactive Check-In Bubble
      // ======================================================================
      h(
        'div',
        {
          id: 'HowDoesMyBodyFeelTodayBubble1',
          'data-piece-name': 'HowDoesMyBodyFeelTodayBubble1',
          className: 'w-full flex flex-col items-stretch px-1 sm:px-2'
        },
        h(
          'div',
          {
            className:
              'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
            style: { marginBottom: '-8px' }
          },
          h(
            'span',
            { className: 'text-sm sm:text-base font-extrabold text-black leading-tight' },
            tr('howDoesBodyFeelTodayBubbleTitle', 'How Does My Body Feel Today? (Tap What You Feel!)')
          )
        ),
        h(
          'div',
          {
            className:
              'w-full rounded-[32px] border-[2.5px] border-black bg-[#FFF9FC] pt-6 pb-5 px-4 sm:px-6 shadow-md space-y-4'
          },
          // Flow today row
          h(
            'div',
            { className: 'space-y-2' },
            h(
              'div',
              { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
              tr('myBleedingUnderwearTodayLabel', 'My Bleeding / Underwear Today:')
            ),
            h(
              'div',
              { className: 'flex flex-wrap gap-2' },
              flowTodayOptions.map((fOpt) => {
                const active = selectedFlowTodayId === fOpt.id;
                return h(
                  'button',
                  {
                    key: fOpt.id,
                    type: 'button',
                    onClick: () => setSelectedFlowTodayId(fOpt.id),
                    className:
                      'px-3.5 py-1.5 rounded-full border-2 border-black text-xs font-extrabold cursor-pointer transition-transform active:scale-95',
                    style: {
                      backgroundColor: active ? '#9F133A' : '#FFFFFF',
                      color: active ? '#FFFFFF' : '#000000'
                    }
                  },
                  fOpt.label
                );
              })
            )
          ),

          // Body & mood today row
          h(
            'div',
            { className: 'space-y-2' },
            h(
              'div',
              { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
              tr('myBodyAndMoodTodayLabel', 'My Body & Mood Today:')
            ),
            h(
              'div',
              { className: 'flex flex-wrap gap-2' },
              moodTodayOptions.map((mOpt) => {
                const active = selectedMoodTodayIds.includes(mOpt.id);
                return h(
                  'button',
                  {
                    key: mOpt.id,
                    type: 'button',
                    onClick: () => toggleMoodToday(mOpt.id),
                    className:
                      'px-3.5 py-1.5 rounded-full border-2 border-black text-xs font-extrabold cursor-pointer transition-transform active:scale-95',
                    style: {
                      backgroundColor: active ? '#CF366C' : '#FFFFFF',
                      color: active ? '#FFFFFF' : '#000000'
                    }
                  },
                  active ? `${mOpt.label} ✓` : mOpt.label
                );
              })
            )
          ),

          // Reassuring feedback card inside check-in bubble
          h(
            'div',
            {
              className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
            },
            h(
              'div',
              { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
              hasColors
                ? `${tr('whyYouFeelThisWayHeader', 'Why You Feel This Way Today')} (${tr(
                    'dayLabel',
                    'Day'
                  )} ${formatDigitsForLang(currentDayInCycle)} • ${currentPhaseTitle}):`
                : tr('whyYouFeelThisWayGeneralHeader', 'Why Your Body Feels This Way:')
            ),
            h(
              'p',
              { className: 'text-xs sm:text-sm font-bold text-black/90 leading-relaxed' },
              currentPhaseBlurb
            ),
            h(
              'p',
              { className: 'text-xs font-bold text-[#9F133A] leading-snug pt-0.5' },
              tr(
                'dailyCheckInCareTip',
                'What helps today: Drink plenty of clean water, wear comfortable clothes, eat a warm nourishing meal with beans, greens, or fruit, and rest whenever your body asks for it.'
              )
            )
          )
        )
      ),

      // ======================================================================
      // ORGANIZED BELOW:
      // 2. Side-by-Side: "What to Pack in Your Period Bag Pouch" + "What If Blood Gets on My Clothes or Bed?"
      // ======================================================================
      h(
        'div',
        {
          className: 'w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-1 sm:px-2'
        },
        // Left Card: Period Bag Pouch Checklist
        h(
          'div',
          {
            id: 'PeriodBagPouchChecklist1',
            className:
              'p-5 rounded-3xl border-[2.5px] border-black bg-[#FFF5FA] shadow-sm flex flex-col justify-between gap-3'
          },
          h(
            'div',
            { className: 'space-y-1' },
            h(
              'h3',
              { className: 'text-base sm:text-lg font-black text-[#9F133A]' },
              tr('periodPouchTitle', 'What to Pack in Your Period Bag Pouch')
            ),
            h(
              'p',
              { className: 'text-xs font-bold text-black/75' },
              tr(
                'periodPouchSubtitle',
                'Keep a small pouch in your school bag or purse so you are always ready whenever your period starts!'
              )
            )
          ),
          h(
            'div',
            { className: 'space-y-2' },
            pouchChecklistItems.map((item) => {
              const checked = Boolean(checkedPouchItems[item.id]);
              return h(
                'button',
                {
                  key: item.id,
                  type: 'button',
                  onClick: () =>
                    setCheckedPouchItems((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id]
                    })),
                  className:
                    'w-full p-2.5 rounded-2xl border-2 border-black bg-white flex items-center gap-2.5 text-left cursor-pointer transition-transform active:scale-[0.99]'
                },
                h(
                  'span',
                  {
                    className:
                      'w-5 h-5 rounded-md border-2 border-black flex items-center justify-center text-xs font-black shrink-0',
                    style: {
                      backgroundColor: checked ? '#9F133A' : '#FFFFFF',
                      color: checked ? '#FFFFFF' : '#000000'
                    }
                  },
                  checked ? '✓' : ''
                ),
                h('span', { className: 'text-xs font-extrabold text-black leading-snug' }, item.text)
              );
            })
          )
        ),

        // Right Card: What If Blood Gets on My Clothes or Bed? (Cold Water Stain Rescue)
        h(
          'div',
          {
            id: 'PeriodBloodStainRescueCard1',
            className:
              'p-5 rounded-3xl border-[2.5px] border-black bg-[#FFF0F5] shadow-sm flex flex-col justify-between gap-3'
          },
          h(
            'div',
            { className: 'space-y-2.5' },
            h(
              'h3',
              { className: 'text-base sm:text-lg font-black text-[#9F133A]' },
              tr('stainRescueTitle', 'What If Blood Gets on My Clothes or Bed?')
            ),
            h(
              'p',
              { className: 'text-xs sm:text-sm font-bold text-black/90 leading-snug' },
              tr(
                'stainRescueIntro',
                'First: Do not feel ashamed! Every single woman in the world has leaked period blood onto her underwear, pants, skirt, or bedsheet at least once.'
              )
            ),
            h(
              'div',
              { className: 'p-3 rounded-2xl border-2 border-black bg-white space-y-1' },
              h(
                'div',
                { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
                tr('stainRescueColdWaterTitle', 'Always Use COLD Water First!')
              ),
              h(
                'p',
                { className: 'text-xs font-bold text-black/85 leading-snug' },
                tr(
                  'stainRescueColdWaterBody',
                  'Never use hot water on period blood (hot water sets blood into cloth). Rinse the spot under cold water right away and rub gently with soap.'
                )
              )
            ),
            h(
              'div',
              { className: 'p-3 rounded-2xl border-2 border-black bg-white space-y-1' },
              h(
                'div',
                { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
                tr('stainRescueSchoolTitle', 'If It Happens at School or Outside:')
              ),
              h(
                'p',
                { className: 'text-xs font-bold text-black/85 leading-snug' },
                tr(
                  'stainRescueSchoolBody',
                  'Tie a sweater, jacket, or scarf around your waist, fold clean tissue inside your underwear until you get a pad, and ask a female friend, teacher, or nurse for help.'
                )
              )
            )
          )
        )
      ),

      // ======================================================================
      // ORGANIZED BELOW:
      // 3. Period Questions, Facts vs. Myths & "Is My Period Normal?" Grid
      // ======================================================================
      h(
        'div',
        { className: 'w-full space-y-3 px-1 sm:px-2' },
        h(
          'div',
          { className: 'text-xs sm:text-sm font-black uppercase tracking-wide text-[#9F133A]' },
          tr(
            'periodFactsAndQaGridHeading',
            'First-Time Menstruator Questions & Period Facts vs. Myths:'
          )
        ),
        h(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
          factsAndQaCards.map((card, cIdx) =>
            h(
              'div',
              {
                key: `fact-qa-${cIdx}`,
                className: 'rounded-3xl border-[2.5px] border-black bg-white overflow-hidden shadow-sm flex flex-col'
              },
              h(
                'div',
                {
                  className: 'px-4 py-3 border-b-2 border-black',
                  style: { backgroundColor: '#FCE4F4' }
                },
                h('h4', { className: 'text-sm sm:text-base font-black text-[#9F133A]' }, card.title)
              ),
              h(
                'div',
                {
                  className: 'p-4 flex-1',
                  style: { backgroundColor: card.bg }
                },
                h('p', { className: 'text-xs sm:text-sm font-bold text-black/90 leading-relaxed' }, card.body)
              )
            )
          )
        )
      ),

      // ======================================================================
      // ORGANIZED AT VERY BOTTOM:
      // 4. What Is Normal on Your Period vs. When to Visit a Clinic
      // ======================================================================
      h(
        'div',
        {
          id: 'PeriodNormalVsClinicBox1',
          className:
            'w-full p-5 sm:p-6 rounded-3xl border-[2.5px] border-black bg-[#FFF5FA] shadow-sm space-y-2.5 mx-auto'
        },
        h(
          'h3',
          { className: 'text-base sm:text-xl font-black text-[#9F133A]' },
          tr('normalVsClinicBoxTitle', 'What Is Normal on Your Period vs. When to Visit a Clinic')
        ),
        h(
          'ul',
          { className: 'space-y-2 text-xs sm:text-sm font-bold text-black/90 leading-relaxed' },
          h(
            'li',
            null,
            `• ${tr(
              'normalVsClinicBullet1',
              'Normal Period: Lasts 3 to 7 days. Total blood lost the whole week is only about 2 to 3 tablespoons (even though it looks like more!). Mild belly cramps or small coin-sized jelly blood drops are normal.'
            )}`
          ),
          h(
            'li',
            null,
            `• ${tr(
              'normalVsClinicBullet2',
              'First-Time Menstruators: During your first 1 to 2 years of having a period, it is completely normal if your period skips a month or comes early or late while your body practices its new rhythm.'
            )}`
          ),
          h(
            'li',
            null,
            `• ${tr(
              'normalVsClinicBullet3',
              'When to Visit a Doctor or Clinic: If you soak through 1 full pad every hour for 2 hours in a row, if your period bleeding lasts longer than 8 days, or if belly pain is so bad you cannot stand up or go to school.'
            )}`
          )
        )
      )
    )
  );
}
