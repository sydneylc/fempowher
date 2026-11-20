import React from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=234';
import { isRtlLanguage } from '../data/translations.js?v=234';
import {
  CYCLE_PHASE_DEFINITIONS,
  getCycleCalText,
  formatMonthYearForLang,
  getPhasesForDate,
  loadUserCycleCalendarState
} from '../data/cycleCalendarData.js?v=234';

const h = React.createElement;

// ============================================================================
// CycleCalendarWidget1 — Sizable (~2in x 2in) sneak-peek calendar widget &
// button positioned underneath the centered "My Cycle!" title, off to the
// right side of MyCycleSubHomePage (leaving open room on the left for future
// additions).
// - All words/titles are subject to UserLanguageChoice1.
// - Top pill displays: `{UserNameChoiceInsert1}'s Cycle Calendar`
// - Defaults to white & black (no colors) centered on the current month & day
//   until the user adds their cycle info in CalendarSettingsHomePage1.
// - Clicking it opens InteractiveCalendarHomePage1 (no phase pop-out bubbles
//   on the outside preview widget).
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

  // Build compact calendar rows centered around the current month & current day
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
        // Right in-between the original (218px) and the 2x (436px) size: 326px x 326px
        width: 'min(326px, 88vw)',
        minHeight: '326px'
      }
    },
    // Top overhanging rounded pill bar (matches Sketch 1 & Sketch 2: "{UserNameChoiceInsert1}'s Cycle Calendar")
    h(
      'div',
      {
        className: 'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
        style: {
          marginBottom: '-8px'
        }
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
      // Centered Current Month Title
      h(
        'div',
        { className: 'text-center mb-1.5' },
        h(
          'div',
          { className: 'text-sm font-black uppercase tracking-wide text-black' },
          monthTitle
        )
      ),

      // Weekday header row
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

      // Calendar Grid centered so it shows the current day — clean rounded date tiles (dark outline ONLY around today's date!)
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
                // Translucent rounded tile using current colors
                backgroundColor: primaryPhase ? primaryPhase.rgbaFill : 'transparent',
                backgroundImage:
                  primaryPhase && secondaryPhase
                    ? `linear-gradient(135deg, ${primaryPhase.rgbaFill} 0%, ${secondaryPhase.rgbaFill} 100%)`
                    : 'none',
                // ONLY make a dark outline around the day for today's date!
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

      // Bottom subtle prompt inside widget
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
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6'
    },
    h(
      'div',
      { className: 'max-w-5xl w-full mx-auto flex-1 flex flex-col' },
      renderSubpageBackButton(onBack, t, lang),

      // Centered "My Cycle!" Title (UserLanguageChoice1)
      h(
        'h1',
        {
          className: 'text-2xl sm:text-3xl font-extrabold text-center mt-2 mb-6',
          style: { color: '#9F133A' }
        },
        tr('cycleBtnMyCycle', 'My Cycle!')
      ),

      // Main Row underneath centered "My Cycle!" title:
      // Left area stays open/available so other items can be placed to the left of CycleCalendarWidget1,
      // while CycleCalendarWidget1 and the "You are in..." square sit off to the right side!
      h(
        'div',
        {
          className: 'w-full flex flex-row items-start justify-end gap-6 px-2 sm:px-4'
        },
        // Open left space reserved for future MyCycleSubHomePage items
        h('div', {
          id: 'MyCycleLeftOpenSpace1',
          className: 'flex-1 min-h-[218px]'
        }),

        // Right-aligned column: CycleCalendarWidget1 + "You are in..." current phase square underneath
        h(
          'div',
          {
            className: 'shrink-0 flex flex-col items-center gap-4',
            style: { width: 'min(326px, 88vw)' }
          },
          h(CycleCalendarWidget1, {
            UserNameChoiceInsert1,
            UserLanguageChoice1,
            lang,
            formatDigitsForLang,
            cycleCalendarState: activeState,
            onOpenCalendar: handleOpenCalendar
          }),

          // "You are in..." square directly underneath the calendar
          h(
            'div',
            {
              id: 'MyCycleYouAreInSquare1',
              'data-piece-name': 'MyCycleYouAreInSquare1',
              className: 'w-full flex flex-col items-stretch text-center'
            },
            // Overhanging top pill bar: "You are in..."
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
            // Main rounded square body tinted to current phase color
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
          )
        )
      )
    )
  );
}
