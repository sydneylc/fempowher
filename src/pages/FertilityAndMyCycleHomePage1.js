import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=232';
import { CycleCalendarWidget1 } from './MyCycleSubHomePage.js?v=232';
import { isRtlLanguage } from '../data/translations.js?v=232';
import {
  CYCLE_PHASE_DEFINITIONS,
  getCycleCalText,
  getPhasesForDate,
  loadUserCycleCalendarState
} from '../data/cycleCalendarData.js?v=232';

const h = React.createElement;

// ============================================================================
// FertilityAndMyCycleHomePage1 — "Fertility and My Cycle" interactive homepage
// implementing Option B:
// - Left Column: Interactive 4-Phase Circular Cycle & Fertility Wheel (using
//   the exact current phase colors from CYCLE_PHASE_DEFINITIONS)
// - Right Column:
//   1. Exact synchronized copy of CycleCalendarWidget1 (shares the exact same
//      `cycleCalendarState` and localStorage history as the calendar in
//      MyCycleSubHomePage; interacting with either calendar applies the same
//      changes to both; only today's date has a dark outline!)
//   2. Overhanging-pill `"You are in..."` square directly underneath the
//      calendar showing the user's current phase, cycle day, countdown to next
//      period, and fertile / implantation window status.
// - Below Both Columns:
//   1. 4 clickable Phase Cards (`Menstrual Phase`, `Follicular Phase`,
//      `Ovulatory (Fertile!)`, `Luteal Phase`)
//   2. Live Phase & Fertility Guide for the selected or current phase.
// ============================================================================
export default function FertilityAndMyCycleHomePage1({
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

  // Determine today's exact cycle day & current phase from the shared calendar state
  let currentDayInCycle = 1;
  let currentPhaseKey = 'PeriodDaysDuration1';
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
          currentPhaseKey = 'PeriodDaysDuration1';
        } else if (zeroIdx < periodLen + follicularLen) {
          currentPhaseKey = 'FollicularPhaseDuration1';
        } else if (zeroIdx < periodLen + follicularLen + ovulatoryLen) {
          currentPhaseKey = 'OvulatoryPhaseDuration1';
        } else {
          currentPhaseKey = 'LutealPhaseDuration1';
        }
      }
    }
  }

  const [selectedPhaseId, setSelectedPhaseId] = useState(null);
  const displayedPhaseId = selectedPhaseId || currentPhaseKey;

  const pStart = 1;
  const pEnd = periodLen;
  const fStart = pEnd + 1;
  const fEnd = pEnd + follicularLen;
  const oStart = fEnd + 1;
  const oEnd = fEnd + ovulatoryLen;
  const lStart = oEnd + 1;
  const lEnd = totalCycleLen;

  const phaseCardsData = [
    {
      id: 'PeriodDaysDuration1',
      title: tr('fertilityPhaseMenstrualTitle', 'Menstrual Phase'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(pStart)}–${formatDigitsForLang(pEnd)}`,
      shortSub: tr('fertilityPhaseMenstrualSub', 'Shedding uterine lining'),
      hormoneHeadline: tr('fertilityHormoneMenstrual', 'Estrogen & Progesterone Reset'),
      fertilityStatus: tr('fertilityStatusMenstrual', 'Lowest conception chance • Cycle Day 1 reset'),
      colorHex: CYCLE_PHASE_DEFINITIONS[1].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[1].rgbaFill,
      guideTitle: tr(
        'fertilityGuideMenstrualTitle',
        'Live Phase Guide: Menstrual Phase + Fertility & Body Insights'
      ),
      bullets: [
        tr(
          'fertilityGuideMenstrualB1',
          'What Your Body Is Doing: Your uterus is shedding last cycle’s lining through menstrual bleeding, while your pituitary gland already begins signaling your ovaries to prepare a fresh cohort of follicles for the new cycle.'
        ),
        tr(
          'fertilityGuideMenstrualB2',
          'Fertility & Conception Window: Conception chance is at its lowest during menstrual bleeding, unless you have a very short cycle (under 21 days) where ovulation happens soon after your period ends.'
        ),
        tr(
          'fertilityGuideMenstrualB3',
          'How You May Feel & Self-Care: Lower hormone levels can bring cramps, lower back ache, and fatigue. Focus on iron-rich foods (lentils, leafy greens, beans, eggs), warm herbal tea, and gentle rest.'
        )
      ]
    },
    {
      id: 'FollicularPhaseDuration1',
      title: tr('fertilityPhaseFollicularTitle', 'Follicular Phase'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(fStart)}–${formatDigitsForLang(fEnd)}`,
      shortSub: tr('fertilityPhaseFollicularSub', 'Egg maturing + Estrogen rises'),
      hormoneHeadline: tr('fertilityHormoneFollicular', 'Estrogen Rising • Follicle Maturing'),
      fertilityStatus: tr('fertilityStatusFollicular', 'Fertility building as ovulation approaches'),
      colorHex: CYCLE_PHASE_DEFINITIONS[2].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[2].rgbaFill,
      guideTitle: tr(
        'fertilityGuideFollicularTitle',
        'Live Phase Guide: Follicular Phase + Fertility & Body Insights'
      ),
      bullets: [
        tr(
          'fertilityGuideFollicularB1',
          'What Your Body Is Doing: Follicle-stimulating hormone (FSH) nurtures several ovarian follicles until one dominant follicle matures an egg. Rising estrogen rebuilds a fresh, nutrient-rich uterine lining.'
        ),
        tr(
          'fertilityGuideFollicularB2',
          'Fertility & Cervical Fluid Sign: Early follicular days are dry or sticky, then cervical fluid becomes creamy and wetter toward the end of this phase. Because sperm can survive up to 5 days in fertile cervical fluid, the final 2 to 3 days of the Follicular Phase begin your fertile window!'
        ),
        tr(
          'fertilityGuideFollicularB3',
          'How You May Feel & Self-Care: Rising estrogen boosts mental clarity, physical stamina, optimism, and social energy.'
        )
      ]
    },
    {
      id: 'OvulatoryPhaseDuration1',
      title: tr('fertilityPhaseOvulatoryTitle', 'Ovulatory (Fertile!)'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(oStart)}–${formatDigitsForLang(oEnd)}`,
      shortSub: tr('fertilityPhaseOvulatorySub', 'Peak conception window!'),
      hormoneHeadline: tr('fertilityHormoneOvulatory', 'Estrogen & LH Surge • Egg Released'),
      fertilityStatus: tr('fertilityStatusOvulatory', 'Peak Fertile Window! Highest chance of pregnancy'),
      colorHex: CYCLE_PHASE_DEFINITIONS[3].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[3].rgbaFill,
      guideTitle: tr(
        'fertilityGuideOvulatoryTitle',
        'Live Phase Guide: Ovulatory Phase + Peak Fertility Insights'
      ),
      bullets: [
        tr(
          'fertilityGuideOvulatoryB1',
          'What Your Body Is Doing: Peak estrogen triggers a surge of Luteinizing Hormone (LH), causing your ovary to release its mature egg into the fallopian tube, where it can be fertilized for 12 to 24 hours.'
        ),
        tr(
          'fertilityGuideOvulatoryB2',
          'Fertility & Body Signs: This is your peak conception window! Your cervix softens and produces clear, slippery, stretchy "raw egg-white" cervical fluid that nourishes sperm and helps them swim to the egg.'
        ),
        tr(
          'fertilityGuideOvulatoryB3',
          'How You May Feel: Many women notice a natural peak in confidence, energy, and sex drive, sometimes accompanied by a brief one-sided lower belly twinge (mittelschmerz) when the egg releases.'
        )
      ]
    },
    {
      id: 'LutealPhaseDuration1',
      title: tr('fertilityPhaseLutealTitle', 'Luteal Phase'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(lStart)}–${formatDigitsForLang(lEnd)}`,
      shortSub: tr('fertilityPhaseLutealSub', 'Progesterone peak + Implantation window'),
      hormoneHeadline: tr('fertilityHormoneLuteal', 'Progesterone Peak • Uterine Lining Thick'),
      fertilityStatus: tr('fertilityStatusLuteal', 'Implantation window (6–10 days after ovulation)'),
      colorHex: CYCLE_PHASE_DEFINITIONS[4].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[4].rgbaFill,
      guideTitle: tr(
        'fertilityGuideLutealTitle',
        'Live Phase Guide: Luteal Phase + Trying to Get Pregnant Insights'
      ),
      bullets: [
        tr(
          'fertilityGuideLutealB1',
          'What Your Body Is Doing: After ovulation, the empty follicle transforms into the corpus luteum and secretes progesterone, warming your resting body temperature by ~0.2°C and thickening your uterine lining like a soft quilt.'
        ),
        tr(
          'fertilityGuideLutealB2',
          'Fertility & Implantation Window: The unfertilized egg is no longer available after ovulation, so new conception cannot occur in the mid-to-late Luteal Phase. However, if an egg was fertilized during your Ovulatory window, implantation into the uterine wall takes place 6 to 10 days after ovulation!'
        ),
        tr(
          'fertilityGuideLutealB3',
          'How You May Feel & Self-Care: Progesterone slows digestion and raises resting metabolism, which can cause food cravings, breast tenderness, bloating, or nesting fatigue. Prioritize magnesium-rich foods, hydration, and extra sleep.'
        )
      ]
    }
  ];

  const currentPhaseObj =
    phaseCardsData.find((p) => p.id === currentPhaseKey) || phaseCardsData[0];
  const activeGuidePhaseObj =
    phaseCardsData.find((p) => p.id === displayedPhaseId) || currentPhaseObj;

  // Build SVG Donut arcs for the Interactive 4-Phase Cycle & Fertility Wheel
  // Angles proportional to the user's actual phase durations (or norm 28-day baseline)
  const buildArcPath = (cx, cy, rOuter, rInner, startAngleDeg, endAngleDeg) => {
    const toRad = (deg) => ((deg - 90) * Math.PI) / 180;
    const x1Out = cx + rOuter * Math.cos(toRad(startAngleDeg));
    const y1Out = cy + rOuter * Math.sin(toRad(startAngleDeg));
    const x2Out = cx + rOuter * Math.cos(toRad(endAngleDeg));
    const y2Out = cy + rOuter * Math.sin(toRad(endAngleDeg));

    const x1In = cx + rInner * Math.cos(toRad(endAngleDeg));
    const y1In = cy + rInner * Math.sin(toRad(endAngleDeg));
    const x2In = cx + rInner * Math.cos(toRad(startAngleDeg));
    const y2In = cy + rInner * Math.sin(toRad(startAngleDeg));

    const largeArc = endAngleDeg - startAngleDeg > 180 ? 1 : 0;

    return [
      `M ${x1Out.toFixed(2)} ${y1Out.toFixed(2)}`,
      `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2Out.toFixed(2)} ${y2Out.toFixed(2)}`,
      `L ${x1In.toFixed(2)} ${y1In.toFixed(2)}`,
      `A ${rInner} ${rInner} 0 ${largeArc} 0 ${x2In.toFixed(2)} ${y2In.toFixed(2)}`,
      'Z'
    ].join(' ');
  };

  const pDeg = (periodLen / totalCycleLen) * 360;
  const fDeg = (follicularLen / totalCycleLen) * 360;
  const oDeg = (ovulatoryLen / totalCycleLen) * 360;

  const wheelSegments = [
    {
      ...phaseCardsData[0],
      startAngle: 0,
      endAngle: pDeg,
      shortWheelLabel: tr('wheelPeriodShort', 'Period')
    },
    {
      ...phaseCardsData[1],
      startAngle: pDeg,
      endAngle: pDeg + fDeg,
      shortWheelLabel: tr('wheelFollicularShort', 'Follicular')
    },
    {
      ...phaseCardsData[2],
      startAngle: pDeg + fDeg,
      endAngle: pDeg + fDeg + oDeg,
      shortWheelLabel: tr('wheelOvulatoryShort', 'Fertile / Ovulation')
    },
    {
      ...phaseCardsData[3],
      startAngle: pDeg + fDeg + oDeg,
      endAngle: 360,
      shortWheelLabel: tr('wheelLutealShort', 'Luteal')
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
      id: 'FertilityAndMyCycleHomePage1',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6 select-none'
    },
    h(
      'div',
      { className: 'max-w-5xl w-full mx-auto flex-1 flex flex-col space-y-6 pb-10' },
      renderSubpageBackButton(onBack, t, lang),

      // Centered Title: "Fertility and My Cycle" (UserLanguageChoice1)
      h(
        'h1',
        {
          className: 'text-2xl sm:text-3xl font-extrabold text-center mt-1',
          style: { color: '#9F133A' }
        },
        tr('cycleBtnFertilityAndMyCycle', 'Fertility and My Cycle')
      ),

      // ======================================================================
      // TOP TWO-COLUMN ROW:
      // Left: Interactive 4-Phase Cycle & Fertility Wheel
      // Right: Synchronized Copy of CycleCalendarWidget1 + "You are in..." Square Underneath
      // ======================================================================
      h(
        'div',
        {
          className:
            'w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 px-1 sm:px-2'
        },

        // LEFT COLUMN: Interactive 4-Phase Cycle & Fertility Wheel
        h(
          'div',
          {
            id: 'Interactive4PhaseCycleWheel1',
            className: 'w-full lg:flex-1 flex flex-col items-stretch'
          },
          // Top overhanging rounded pill bar matching the calendar aesthetic
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
              tr('interactiveWheelHeader', 'Interactive 4-Phase Cycle & Fertility Wheel')
            )
          ),
          // Main rounded box body containing the interactive SVG wheel
          h(
            'div',
            {
              className:
                'w-full rounded-[32px] border-[2.5px] border-black bg-white pt-6 pb-5 px-4 shadow-md flex flex-col items-center justify-center'
            },
            h(
              'svg',
              {
                viewBox: '0 0 380 380',
                className: 'w-full max-w-[355px] h-auto overflow-visible'
              },
              wheelSegments.map((seg) => {
                const isSelected = displayedPhaseId === seg.id;
                const isCurrent = hasColors && currentPhaseKey === seg.id;
                const midAngle = (seg.startAngle + seg.endAngle) / 2;
                const midRad = ((midAngle - 90) * Math.PI) / 180;
                const labelR = 136;
                const lx = 190 + labelR * Math.cos(midRad);
                const ly = 190 + labelR * Math.sin(midRad);

                return h(
                  'g',
                  {
                    key: seg.id,
                    onClick: () => setSelectedPhaseId(seg.id),
                    className: 'cursor-pointer transition-transform duration-150',
                    style: {
                      transformOrigin: '190px 190px',
                      transform: isSelected ? 'scale(1.025)' : 'scale(1)'
                    }
                  },
                  h('path', {
                    d: buildArcPath(190, 190, 174, 98, seg.startAngle, seg.endAngle),
                    fill: seg.rgbaFill,
                    stroke: '#000000',
                    strokeWidth: isSelected ? '3.2' : '2'
                  }),
                  h(
                    'text',
                    {
                      x: lx,
                      y: ly,
                      textAnchor: 'middle',
                      dominantBaseline: 'middle',
                      fill: '#000000',
                      fontSize: '11.5',
                      fontWeight: '900'
                    },
                    isCurrent ? `${seg.shortWheelLabel} ★` : seg.shortWheelLabel
                  )
                );
              }),
              // Inner White Hub Circle
              h('circle', {
                cx: 190,
                cy: 190,
                r: 97,
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeWidth: '2.5'
              }),
              // Center Hub Text
              h(
                'text',
                {
                  x: 190,
                  y: 162,
                  textAnchor: 'middle',
                  fill: '#9F133A',
                  fontSize: '20',
                  fontWeight: '900'
                },
                hasColors
                  ? `${tr('dayUpperLabel', 'DAY')} ${formatDigitsForLang(currentDayInCycle)}`
                  : tr('tapAnyPhaseUpper', '4 PHASES')
              ),
              h(
                'text',
                {
                  x: 190,
                  y: 186,
                  textAnchor: 'middle',
                  fill: '#000000',
                  fontSize: '14',
                  fontWeight: '900'
                },
                activeGuidePhaseObj.title
              ),
              h(
                'text',
                {
                  x: 190,
                  y: 207,
                  textAnchor: 'middle',
                  fill: '#9F133A',
                  fontSize: '10.5',
                  fontWeight: '800'
                },
                activeGuidePhaseObj.daysRange
              ),
              h(
                'text',
                {
                  x: 190,
                  y: 226,
                  textAnchor: 'middle',
                  fill: '#333333',
                  fontSize: '9.5',
                  fontWeight: '700'
                },
                activeGuidePhaseObj.shortSub
              )
            ),
            h(
              'p',
              { className: 'text-xs font-extrabold text-black/70 text-center mt-2' },
              tr(
                'wheelTapInstruction',
                'Tap any phase on the wheel (or the cards below) to see what your hormones & fertility are doing!'
              )
            )
          )
        ),

        // RIGHT COLUMN: Synchronized Copy of CycleCalendarWidget1 + "You are in..." Square Underneath
        h(
          'div',
          {
            className: 'shrink-0 flex flex-col items-center gap-4',
            style: { width: 'min(326px, 88vw)' }
          },
          // 1. Exact Synchronized Copy of CycleCalendarWidget1
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
              id: 'YouAreInCurrentPhaseSquare1',
              'data-piece-name': 'YouAreInCurrentPhaseSquare1',
              className: 'w-full flex flex-col items-stretch text-center'
            },
            // Top overhanging pill bar: "You are in..."
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
            // Main rounded square body tinted with the user's current phase color
            h(
              'div',
              {
                className:
                  'w-full rounded-[28px] border-[2.5px] border-black pt-5 pb-4 px-4 shadow-md flex flex-col items-center justify-between gap-2.5',
                style: {
                  backgroundColor: hasColors ? currentPhaseObj.rgbaFill : '#FFF5FA'
                }
              },
              h(
                'div',
                { className: 'text-xl sm:text-2xl font-black text-black leading-tight' },
                hasColors
                  ? currentPhaseObj.title
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
              // White inner fertility status card inside "You are in..." square
              h(
                'div',
                {
                  className:
                    'w-full p-2.5 rounded-2xl border-2 border-black bg-white text-left space-y-1'
                },
                h(
                  'div',
                  { className: 'text-[11px] font-black text-[#9F133A]' },
                  `${tr('fertileWindowDaysLabel', 'Fertile Ovulation Window')}: ${tr(
                    'daysLabel',
                    'Days'
                  )} ${formatDigitsForLang(oStart)}–${formatDigitsForLang(oEnd)}`
                ),
                h(
                  'div',
                  { className: 'text-[11px] font-bold text-black/85 leading-snug' },
                  currentPhaseObj.fertilityStatus
                )
              )
            )
          )
        )
      ),

      // ======================================================================
      // BELOW THE CALENDAR & WHEEL: 4 Clickable Phase Cards
      // ======================================================================
      h(
        'div',
        { className: 'w-full space-y-2.5 pt-2' },
        h(
          'div',
          { className: 'text-xs sm:text-sm font-black uppercase tracking-wide text-[#9F133A] px-1' },
          tr(
            'belowCalendarTapPhasesHeading',
            'Tap Any of Your 4 Phases to See What Your Body & Fertility Are Doing:'
          )
        ),
        h(
          'div',
          { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3' },
          phaseCardsData.map((card) => {
            const isSelected = displayedPhaseId === card.id;
            const isCurrentNow = hasColors && currentPhaseKey === card.id;
            return h(
              'button',
              {
                key: card.id,
                type: 'button',
                onClick: () => setSelectedPhaseId(card.id),
                className:
                  'p-4 rounded-2xl border-[2.5px] border-black text-left flex flex-col justify-between gap-1.5 cursor-pointer transition-transform active:scale-[0.98]',
                style: {
                  backgroundColor: card.rgbaFill,
                  boxShadow: isSelected
                    ? '0 0 0 3px #000000, 0 6px 16px rgba(0,0,0,0.15)'
                    : '0 2px 6px rgba(0,0,0,0.08)'
                }
              },
              h(
                'div',
                { className: 'flex items-center justify-between gap-1' },
                h('span', { className: 'text-sm sm:text-base font-black text-black leading-tight' }, card.title),
                isCurrentNow &&
                  h(
                    'span',
                    {
                      className:
                        'px-2 py-0.5 rounded-full border border-black bg-white text-[10px] font-black text-black shrink-0'
                    },
                    tr('nowBadgeUpper', 'NOW')
                  )
              ),
              h('div', { className: 'text-xs sm:text-sm font-extrabold text-black' }, card.daysRange),
              h('div', { className: 'text-xs font-bold text-black/85 leading-snug' }, card.shortSub)
            );
          })
        )
      ),

      // ======================================================================
      // LIVE PHASE & FERTILITY GUIDE BOX BELOW THE 4 CARDS
      // ======================================================================
      h(
        'div',
        {
          id: 'LivePhaseAndFertilityGuide1',
          className: 'w-full p-5 sm:p-6 rounded-3xl border-[2.5px] border-black bg-[#FFF8FC] shadow-sm space-y-3'
        },
        h(
          'div',
          { className: 'flex flex-wrap items-center justify-between gap-2' },
          h(
            'h2',
            { className: 'text-lg sm:text-xl font-black text-[#9F133A]' },
            activeGuidePhaseObj.guideTitle
          ),
          h(
            'span',
            {
              className: 'px-3 py-1 rounded-full border-2 border-black text-xs font-extrabold text-black',
              style: { backgroundColor: activeGuidePhaseObj.rgbaFill }
            },
            `${activeGuidePhaseObj.title} (${activeGuidePhaseObj.daysRange})`
          )
        ),
        h(
          'ul',
          { className: 'space-y-2.5 text-xs sm:text-sm font-bold text-black/90 leading-relaxed' },
          activeGuidePhaseObj.bullets.map((line, idx) =>
            h(
              'li',
              { key: `guide-b-${idx}`, className: 'flex items-start gap-2' },
              h('span', { className: 'font-black text-[#9F133A] shrink-0' }, '•'),
              h('span', null, line)
            )
          )
        )
      )
    )
  );
}
