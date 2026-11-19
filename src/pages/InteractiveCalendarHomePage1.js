import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=210';
import { isRtlLanguage } from '../data/translations.js?v=210';
import {
  CYCLE_PHASE_DEFINITIONS,
  getCycleCalText,
  formatMonthYearForLang,
  getPhasesForDate,
  loadUserCycleCalendarState,
  saveUserCycleCalendarState,
  renderGearHeartIcon
} from '../data/cycleCalendarData.js?v=210';

const h = React.createElement;

export default function InteractiveCalendarHomePage1({
  onBack,
  onOpenCalendarSettings = () => {},
  UserNameChoiceInsert1 = 'User',
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  formatDigitsForLang = (v) => String(v),
  cycleCalendarState = null,
  onUpdateCycleCalendarState = null
}) {
  const ct = getCycleCalText(lang, UserLanguageChoice1);
  const isRtl = isRtlLanguage(lang);

  const now = new Date();
  const todayYear = now.getFullYear();
  const todayMonth = now.getMonth();
  const todayDate = now.getDate();

  // Centered on the current month & year so it shows the current day
  const [viewYear, setViewYear] = useState(todayYear);
  const [viewMonth, setViewMonth] = useState(todayMonth);

  // CalendarKeyExpandButton1 state: makes the side Key larger (without encompassing the whole page)
  const [isKeyExpanded, setIsKeyExpanded] = useState(false);
  // Editable mode for CalendarKeyAndFilters1
  const [isEditingKey, setIsEditingKey] = useState(false);

  const activeState = cycleCalendarState || loadUserCycleCalendarState(UserNameChoiceInsert1);
  const hasColors = Boolean(activeState && activeState.hasEnteredCycleData && activeState.FirstDayOfPeriod1);

  const updateState = (nextState) => {
    saveUserCycleCalendarState(UserNameChoiceInsert1, nextState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(nextState);
    }
  };

  const handleTogglePhaseFilter = (phaseId) => {
    const currentVis = (activeState && activeState.visiblePhases) || {};
    const nextState = {
      ...activeState,
      visiblePhases: {
        ...currentVis,
        [phaseId]: currentVis[phaseId] === false ? true : false
      }
    };
    updateState(nextState);
  };

  const handleCustomKeyLabelChange = (phaseId, newLabel) => {
    const nextState = {
      ...activeState,
      customKeyLabels: {
        ...(activeState.customKeyLabels || {}),
        [phaseId]: newLabel
      }
    };
    updateState(nextState);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleJumpToday = () => {
    setViewYear(todayYear);
    setViewMonth(todayMonth);
  };

  const monthTitle = formatDigitsForLang(
    formatMonthYearForLang(viewYear, viewMonth, lang, UserLanguageChoice1)
  );
  const weekdaysFull = ct('weekdaysFull', ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

  // Build calendar cells for the current month
  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const startDow = firstOfMonth.getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startDow; i++) {
    cells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(viewYear, viewMonth, d));
  }
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return h(
    'div',
    {
      id: 'InteractiveCalendarHomePage1',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'h-full min-h-full w-full bg-white text-black flex flex-col overflow-hidden select-none'
    },
    // ========================================================================
    // TOP HEADER BAR:
    // - Left/Start: Back button
    // - Center: `{UserNameChoiceInsert1}'s Calendar` + Current Month & Year
    // - Top-Right (Always Available): CalendarSettingsButton1 (Gear-Heart icon + "My Settings")
    // ========================================================================
    h(
      'div',
      {
        className:
          'w-full px-3 sm:px-6 pt-2.5 pb-2 border-b-2 border-black bg-white shrink-0 flex items-center justify-between gap-3'
      },
      // Left: Back button
      h(
        'div',
        { className: 'shrink-0' },
        renderSubpageBackButton(onBack, t, lang)
      ),

      // Center: "{UserNameChoiceInsert1}'s Calendar" + Current Month Navigation
      h(
        'div',
        { className: 'flex flex-col items-center text-center min-w-0' },
        h(
          'h1',
          { className: 'text-base sm:text-xl font-black text-black leading-tight truncate' },
          h(
            'span',
            { className: 'underline decoration-2 underline-offset-4' },
            UserNameChoiceInsert1
          ),
          ' ',
          ct('possessiveCalendar', "{user}'s Calendar")
            .replace('{user}', '')
            .replace(/^'s\s*/i, "'s ")
            .trim()
        ),
        h(
          'div',
          { className: 'flex items-center gap-2 mt-1' },
          h(
            'button',
            {
              type: 'button',
              onClick: handlePrevMonth,
              className:
                'w-7 h-7 rounded-lg border border-black bg-white hover:bg-black/5 font-black text-sm flex items-center justify-center cursor-pointer',
              'aria-label': 'Previous Month'
            },
            isRtl ? '›' : '‹'
          ),
          h(
            'span',
            { className: 'text-sm sm:text-lg font-extrabold text-black px-2 min-w-[140px] text-center' },
            monthTitle
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: handleNextMonth,
              className:
                'w-7 h-7 rounded-lg border border-black bg-white hover:bg-black/5 font-black text-sm flex items-center justify-center cursor-pointer',
              'aria-label': 'Next Month'
            },
            isRtl ? '‹' : '›'
          ),
          (viewYear !== todayYear || viewMonth !== todayMonth) &&
            h(
              'button',
              {
                type: 'button',
                onClick: handleJumpToday,
                className:
                  'px-2 py-0.5 rounded-md border border-black bg-white hover:bg-black/5 text-xs font-extrabold cursor-pointer'
              },
              ct('todayBtn', 'Today')
            )
        )
      ),

      // Top-Right Corner (Always Available): CalendarSettingsButton1
      h(
        'button',
        {
          id: 'CalendarSettingsButton1',
          'data-piece-name': 'CalendarSettingsButton1',
          type: 'button',
          onClick: onOpenCalendarSettings,
          className:
            'shrink-0 flex items-center gap-2 px-2.5 py-1.5 rounded-xl border-2 border-black bg-white hover:bg-black/5 shadow-sm cursor-pointer transition-transform active:scale-95',
          title: ct('mySettingsBtn', 'My Settings')
        },
        // In blank mode, heart inside gear stays crisp black/white; when colors active, rose-pink
        renderGearHeartIcon(h, 28, '#000000', hasColors ? '#CF366C' : '#FFFFFF'),
        h(
          'span',
          { className: 'text-xs sm:text-sm font-extrabold text-black' },
          ct('mySettingsBtn', 'My Settings')
        )
      )
    ),

    // ========================================================================
    // MAIN BODY:
    // Because container `dir` is `ltr` for Left-to-Right languages and `rtl`
    // for Right-to-Left languages, placing `CalendarKeyAndFilters1` as the
    // first flex child automatically puts it on the LEFT side for English &
    // all LTR languages, and on the RIGHT side for Arabic/Dari/Pashto/Urdu RTL!
    // ========================================================================
    h(
      'div',
      {
        className: 'flex-1 w-full flex flex-row overflow-hidden p-2 sm:p-4 gap-3 sm:gap-4 bg-white'
      },
      // 1. Vertical Key & Filters Menu (CalendarKeyAndFilters1) with Expandable Button (CalendarKeyExpandButton1)
      h(
        'aside',
        {
          id: 'CalendarKeyAndFilters1',
          'data-piece-name': 'CalendarKeyAndFilters1',
          className:
            'h-full rounded-2xl border-2 border-black bg-white flex flex-col justify-between p-2.5 sm:p-3 transition-all duration-200 shrink-0 overflow-y-auto',
          style: {
            // Expandable button makes it larger (without encompassing the whole page)
            width: isKeyExpanded ? 'min(310px, 44vw)' : 'min(148px, 28vw)'
          }
        },
        // Top of Key: Title ("Key") + Expandable Button (CalendarKeyExpandButton1)
        h(
          'div',
          { className: 'flex flex-col gap-2' },
          h(
            'div',
            { className: 'flex items-center justify-between gap-1 border-b-2 border-black pb-2' },
            h(
              'div',
              { className: 'min-w-0' },
              h(
                'h2',
                { className: 'text-sm sm:text-base font-black text-black uppercase tracking-wide truncate' },
                ct('keyTitle', 'Key')
              ),
              isKeyExpanded &&
                h(
                  'p',
                  { className: 'text-[10px] font-bold text-black/70 leading-tight' },
                  ct('keyAndFiltersSub', 'Key & Filters')
                )
            ),
            // CalendarKeyExpandButton1 — Expand / Collapse Key button
            h(
              'button',
              {
                id: 'CalendarKeyExpandButton1',
                'data-piece-name': 'CalendarKeyExpandButton1',
                type: 'button',
                onClick: () => setIsKeyExpanded((prev) => !prev),
                className:
                  'px-2 py-1 rounded-lg border-2 border-black bg-white hover:bg-black/5 text-[10px] sm:text-xs font-extrabold text-black cursor-pointer shrink-0',
                title: isKeyExpanded
                  ? ct('collapseKeyBtn', 'Compact')
                  : ct('expandKeyBtn', 'Expand')
              },
              isKeyExpanded
                ? `⇤ ${ct('collapseKeyBtn', 'Compact')}`
                : `${ct('expandKeyBtn', 'Expand')} ⇥`
            )
          ),

          // Key Body:
          // - When `hasColors === false` (default before any user enters period data),
          //   the Key is empty & black-and-white (titled "Key" at its size).
          // - When `hasColors === true`, shows the translucent phase swatches,
          //   filter toggles, and editable labels!
          !hasColors
            ? h(
                'div',
                {
                  className: 'py-6 px-1 text-center flex flex-col items-center justify-center gap-2'
                },
                h(
                  'div',
                  {
                    className: 'w-8 h-8 rounded-lg border-2 border-dashed border-black/40 flex items-center justify-center text-xs font-bold text-black/50'
                  },
                  '—'
                ),
                isKeyExpanded &&
                  h(
                    'p',
                    { className: 'text-xs font-bold text-black/70 leading-snug' },
                    ct('emptyKeyNotice', 'No cycle colors added yet.')
                  ),
                isKeyExpanded &&
                  h(
                    'p',
                    { className: 'text-[11px] text-black/60 leading-snug' },
                    ct(
                      'emptyKeySub',
                      'Tap "My Settings" in the top right to add your period & cycle days.'
                    )
                  )
              )
            : h(
                'div',
                { className: 'flex flex-col gap-2 pt-1' },
                CYCLE_PHASE_DEFINITIONS.map((phase) => {
                  const isVisible =
                    !activeState.visiblePhases ||
                    activeState.visiblePhases[phase.id] !== false;
                  const customLabel =
                    activeState.customKeyLabels && activeState.customKeyLabels[phase.id];
                  const displayLabel =
                    customLabel || ct(phase.labelKey, phase.defaultLabelEn);

                  const dayCount =
                    phase.id === 'FirstDayOfPeriod1'
                      ? 1
                      : Number(activeState[phase.variableName]) || 5;

                  return h(
                    'div',
                    {
                      key: phase.id,
                      className:
                        'p-1.5 rounded-xl border border-black/30 bg-white flex flex-col gap-1'
                    },
                    h(
                      'div',
                      { className: 'flex items-center gap-2' },
                      // Filter toggle checkbox + translucent color swatch
                      h(
                        'button',
                        {
                          type: 'button',
                          onClick: () => handleTogglePhaseFilter(phase.id),
                          className: 'w-5 h-5 rounded-md shrink-0 cursor-pointer flex items-center justify-center',
                          style: {
                            backgroundColor: isVisible ? phase.rgbaFill : '#FFFFFF',
                            border:
                              phase.id === 'FirstDayOfPeriod1'
                                ? '2px solid #000000'
                                : `1.5px solid ${phase.borderHex}`
                          },
                          title: displayLabel
                        },
                        isVisible ? '✓' : ''
                      ),
                      isEditingKey && isKeyExpanded
                        ? h('input', {
                            type: 'text',
                            value: displayLabel,
                            onChange: (e) =>
                              handleCustomKeyLabelChange(phase.id, e.target.value),
                            className:
                              'w-full px-1.5 py-0.5 text-xs font-bold border border-black rounded bg-white text-black'
                          })
                        : h(
                            'span',
                            {
                              className: `text-[11px] sm:text-xs font-extrabold text-black leading-tight ${
                                isKeyExpanded ? '' : 'truncate'
                              }`
                            },
                            displayLabel
                          )
                    ),
                    isKeyExpanded &&
                      h(
                        'div',
                        { className: 'text-[10px] font-bold text-black/70 ps-7' },
                        `${formatDigitsForLang(dayCount)} ${
                          dayCount === 1
                            ? ct('dayUnit', 'day')
                            : ct('daysUnit', 'days')
                        }`
                      )
                  );
                }),
                activeState.repeatsOverAndOver &&
                  h(
                    'div',
                    {
                      className:
                        'mt-1 pt-1.5 border-t border-black/20 text-[10px] font-extrabold italic text-black/80 text-center'
                    },
                    ct('repeatsNote', 'Repeats over and over again...')
                  )
              )
        ),

        // Bottom of Key: Editable Key & Settings Controls
        h(
          'div',
          { className: 'pt-2 border-t border-black/30 flex flex-col gap-1.5' },
          hasColors &&
            isKeyExpanded &&
            h(
              'button',
              {
                type: 'button',
                onClick: () => setIsEditingKey((prev) => !prev),
                className:
                  'w-full py-1 px-2 rounded-lg border border-black bg-white hover:bg-black/5 text-[11px] font-extrabold text-black cursor-pointer'
              },
              isEditingKey
                ? ct('doneEditingKeyBtn', 'Done')
                : ct('editKeyBtn', 'Edit Key')
            ),
          h(
            'button',
            {
              type: 'button',
              onClick: onOpenCalendarSettings,
              className:
                'w-full py-1.5 px-2 rounded-lg border-2 border-black bg-white hover:bg-black/5 text-[11px] font-extrabold text-black cursor-pointer text-center'
            },
            `⚙ ${ct('mySettingsBtn', 'My Settings')}`
          )
        )
      ),

      // 2. Full-Screen Interactive Calendar Grid (CycleCalendarGrid1)
      h(
        'div',
        {
          id: 'CycleCalendarGrid1',
          'data-piece-name': 'CycleCalendarGrid1',
          className:
            'flex-1 h-full rounded-2xl border-2 border-black bg-white flex flex-col overflow-hidden shadow-sm'
        },
        // Weekday Header Bar
        h(
          'div',
          {
            className: 'grid grid-cols-7 border-b-2 border-black bg-white shrink-0'
          },
          weekdaysFull.map((wd, idx) =>
            h(
              'div',
              {
                key: `full-wd-${idx}`,
                className:
                  'py-2 text-center text-xs sm:text-sm font-black uppercase tracking-wider text-black border-e last:border-e-0 border-black/20'
              },
              wd
            )
          )
        ),

        // Calendar Days Matrix (Centered on Current Month & Current Day)
        h(
          'div',
          {
            className: 'flex-1 grid grid-cols-7 auto-rows-fr bg-white'
          },
          cells.map((dateObj, idx) => {
            if (!dateObj) {
              return h('div', {
                key: `blank-cell-${idx}`,
                className: 'border-b border-e border-black/20 bg-black/[0.015]'
              });
            }

            const dayNum = dateObj.getDate();
            const isToday =
              viewYear === todayYear &&
              viewMonth === todayMonth &&
              dayNum === todayDate;

            const phases = hasColors ? getPhasesForDate(dateObj, activeState) : [];
            const hasFirstDayBox = phases.some((p) => p.isFirstDayBox);
            const hasLastPeriodBox = phases.some((p) => p.isLastPeriodDayBox);

            return h(
              'div',
              {
                key: `cal-day-${dayNum}`,
                className:
                  'relative border-b border-e border-black/25 p-1.5 sm:p-2 flex flex-col justify-between overflow-hidden bg-white'
              },
              // Top row inside day cell: Date Number + "Today" badge or "1st Day" / "Last Day" label
              h(
                'div',
                { className: 'relative z-20 flex items-center justify-between gap-1' },
                h(
                  'span',
                  {
                    className: isToday
                      ? 'w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-white text-black font-black text-xs sm:text-sm flex items-center justify-center shadow-sm'
                      : 'text-xs sm:text-sm font-extrabold text-black px-1'
                  },
                  formatDigitsForLang(dayNum)
                ),
                isToday &&
                  h(
                    'span',
                    {
                      className:
                        'px-1.5 py-0.5 rounded border border-black bg-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-black'
                    },
                    ct('todayBadge', 'Today')
                  )
              ),

              // Translucent Phase Ribbons Layer (all colors are translucent so overlaps between phases show!)
              hasColors &&
                phases.length > 0 &&
                h(
                  'div',
                  {
                    className: 'relative z-10 flex flex-col gap-1 my-auto py-0.5'
                  },
                  phases.map((p, pIdx) => {
                    const customLabel =
                      activeState.customKeyLabels && activeState.customKeyLabels[p.id];
                    const phaseName =
                      customLabel || ct(p.labelKey, p.defaultLabelEn);

                    return h(
                      'div',
                      {
                        key: `${p.id}-${pIdx}`,
                        className: 'w-full px-1.5 py-1 flex items-center justify-between text-[10px] sm:text-xs font-extrabold text-black',
                        style: {
                          backgroundColor: p.rgbaFill,
                          mixBlendMode: 'multiply',
                          // First day of period and last day of period have distinct black boxes as drawn in Sketch 2
                          border:
                            p.isFirstDayBox || p.isLastPeriodDayBox
                              ? '2px solid #000000'
                              : 'none',
                          borderRadius:
                            p.isFirstDayBox || p.isLastPeriodDayBox ? '6px' : '9999px'
                        }
                      },
                      h('span', { className: 'truncate' }, phaseName),
                      p.isFirstDayBox &&
                        h(
                          'span',
                          {
                            className:
                              'ms-1 px-1 rounded bg-white/90 border border-black text-[9px] font-black shrink-0'
                          },
                          ct('firstDayTag', '1st Day')
                        ),
                      !p.isFirstDayBox &&
                        p.isLastPeriodDayBox &&
                        h(
                          'span',
                          {
                            className:
                              'ms-1 px-1 rounded bg-white/90 border border-black text-[9px] font-black shrink-0'
                          },
                          ct('lastDayTag', 'Last Day')
                        )
                    );
                  })
                )
            );
          })
        )
      )
    )
  );
}
