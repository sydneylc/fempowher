import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=272';
import { isRtlLanguage } from '../data/translations.js?v=272';
import {
  CYCLE_PHASE_DEFINITIONS,
  createBlankCycleCalendarState,
  getBaselineCyclePhaseDurations,
  formatMonthYearForLang,
  getCycleCalText,
  loadUserCycleCalendarState,
  saveUserCycleCalendarState,
  renderGearHeartIcon
} from '../data/cycleCalendarData.js?v=272';

const h = React.createElement;

// ============================================================================
// CalendarSettingsHomePage1 (also exported as CalenderSettingsHomePage1)
// Editable Settings Page for a user's Cycle Calendar:
// - All words/titles are subject to UserLanguageChoice1.
// - Lets the user configure:
//   1. FirstDayOfPeriod1 (Bright Red — First day of period reported by user)
//   2. PeriodDaysDuration1 (Darker Red — 1–7 days of period customizable)
//   3. FollicularPhaseDuration1 (Orange — 1–7 days customizable)
//   4. OvulatoryPhaseDuration1 (Pinkish-Red — 1–7 days customizable)
//   5. LutealPhaseDuration1 (Darkest Pink — 1–7 days customizable)
// - Defaults to blank (`hasEnteredCycleData: false`) until the user saves.
// ============================================================================
export function CalendarSettingsHomePage1({
  onBack,
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

  const initial = cycleCalendarState || loadUserCycleCalendarState(UserNameChoiceInsert1);

  const [passwordEnabled, setPasswordEnabled] = useState(Boolean(initial.calendarPasswordEnabled));
  const [calendarPassword, setCalendarPassword] = useState(initial.calendarPassword || '');
  const [firstDay, setFirstDay] = useState(initial.FirstDayOfPeriod1 || '');
  const [autoBaselinePhases, setAutoBaselinePhases] = useState(
    initial.autoBaselinePhases !== false
  );
  const [periodDays, setPeriodDays] = useState(Number(initial.PeriodDaysDuration1) || 5);
  const [follicularDays, setFollicularDays] = useState(Number(initial.FollicularPhaseDuration1) || 8);
  const [ovulatoryDays, setOvulatoryDays] = useState(Number(initial.OvulatoryPhaseDuration1) || 3);
  const [lutealDays, setLutealDays] = useState(Number(initial.LutealPhaseDuration1) || 12);
  const [repeatsOverAndOver, setRepeatsOverAndOver] = useState(
    initial.repeatsOverAndOver !== false
  );

  // Interactive clickable calendar picker inside FirstDayOfPeriod1 so clicking always opens a calendar
  const nowDate = new Date();
  const parsedFirst = firstDay ? firstDay.split('-').map(Number) : null;
  const [isCalendarPickerOpen, setIsCalendarPickerOpen] = useState(false);
  const [pickerYear, setPickerYear] = useState(
    parsedFirst && parsedFirst[0] ? parsedFirst[0] : nowDate.getFullYear()
  );
  const [pickerMonth, setPickerMonth] = useState(
    parsedFirst && parsedFirst[1] ? parsedFirst[1] - 1 : nowDate.getMonth()
  );

  const isCurrentlyBlank = !firstDay && (!initial.hasEnteredCycleData || !initial.FirstDayOfPeriod1);

  // Auto-persist helper so user's entered dates & settings stay saved unless "Clear Calendar" is clicked
  const persistPartialOrFullSettings = (overrides = {}) => {
    const nextFirstDay =
      overrides.firstDay !== undefined ? overrides.firstDay : firstDay;
    const nextAutoBaseline =
      overrides.autoBaselinePhases !== undefined
        ? overrides.autoBaselinePhases
        : autoBaselinePhases;
    const nextPasswordEnabled =
      overrides.passwordEnabled !== undefined ? overrides.passwordEnabled : passwordEnabled;
    const nextCalendarPassword =
      overrides.calendarPassword !== undefined ? overrides.calendarPassword : calendarPassword;
    const nextPeriodDays =
      overrides.periodDays !== undefined ? overrides.periodDays : periodDays;
    const nextFollicularDays =
      overrides.follicularDays !== undefined ? overrides.follicularDays : follicularDays;
    const nextOvulatoryDays =
      overrides.ovulatoryDays !== undefined ? overrides.ovulatoryDays : ovulatoryDays;
    const nextLutealDays =
      overrides.lutealDays !== undefined ? overrides.lutealDays : lutealDays;
    const nextRepeats =
      overrides.repeatsOverAndOver !== undefined
        ? overrides.repeatsOverAndOver
        : repeatsOverAndOver;

    const hasData = Boolean(nextFirstDay || initial.hasEnteredCycleData);
    const nextState = {
      ...initial,
      hasEnteredCycleData: hasData && Boolean(nextFirstDay),
      autoBaselinePhases: Boolean(nextAutoBaseline),
      calendarPasswordEnabled: Boolean(nextPasswordEnabled),
      calendarPassword: nextPasswordEnabled ? String(nextCalendarPassword || '') : '',
      FirstDayOfPeriod1: nextFirstDay || '',
      PeriodDaysDuration1: Math.max(1, Math.min(10, Number(nextPeriodDays) || 5)),
      FollicularPhaseDuration1: Math.max(1, Math.min(21, Number(nextFollicularDays) || 8)),
      OvulatoryPhaseDuration1: Math.max(1, Math.min(10, Number(nextOvulatoryDays) || 3)),
      LutealPhaseDuration1: Math.max(1, Math.min(21, Number(nextLutealDays) || 12)),
      repeatsOverAndOver: nextRepeats
    };
    saveUserCycleCalendarState(UserNameChoiceInsert1, nextState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(nextState);
    }
  };

  const handleSelectFirstDay = (ymd) => {
    setFirstDay(ymd);
    const parts = String(ymd || '').split('-').map(Number);
    if (parts.length === 3 && parts[0] && parts[1]) {
      setPickerYear(parts[0]);
      setPickerMonth(parts[1] - 1);
    }
    // Automatically populate the norm/baseline guesstimate for the rest of the phase times when period date is entered
    if (autoBaselinePhases) {
      const base = getBaselineCyclePhaseDurations(periodDays);
      setFollicularDays(base.FollicularPhaseDuration1);
      setOvulatoryDays(base.OvulatoryPhaseDuration1);
      setLutealDays(base.LutealPhaseDuration1);
      persistPartialOrFullSettings({
        firstDay: ymd,
        follicularDays: base.FollicularPhaseDuration1,
        ovulatoryDays: base.OvulatoryPhaseDuration1,
        lutealDays: base.LutealPhaseDuration1
      });
    } else {
      persistPartialOrFullSettings({ firstDay: ymd });
    }
  };

  const handleResetPhasesToNormBaseline = () => {
    const base = getBaselineCyclePhaseDurations(periodDays);
    setAutoBaselinePhases(true);
    setFollicularDays(base.FollicularPhaseDuration1);
    setOvulatoryDays(base.OvulatoryPhaseDuration1);
    setLutealDays(base.LutealPhaseDuration1);
    persistPartialOrFullSettings({
      autoBaselinePhases: true,
      follicularDays: base.FollicularPhaseDuration1,
      ovulatoryDays: base.OvulatoryPhaseDuration1,
      lutealDays: base.LutealPhaseDuration1
    });
  };

  const handleSave = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const now = new Date();
    const fallbackDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate()
    ).padStart(2, '0')}`;
    const chosenFirstDay = firstDay || fallbackDate;

    const nextState = {
      ...initial,
      hasEnteredCycleData: true,
      autoBaselinePhases: Boolean(autoBaselinePhases),
      calendarPasswordEnabled: Boolean(passwordEnabled),
      calendarPassword: passwordEnabled ? String(calendarPassword || '') : '',
      FirstDayOfPeriod1: chosenFirstDay,
      PeriodDaysDuration1: Math.max(1, Math.min(10, Number(periodDays) || 5)),
      FollicularPhaseDuration1: Math.max(1, Math.min(21, Number(follicularDays) || 8)),
      OvulatoryPhaseDuration1: Math.max(1, Math.min(10, Number(ovulatoryDays) || 3)),
      LutealPhaseDuration1: Math.max(1, Math.min(21, Number(lutealDays) || 12)),
      repeatsOverAndOver
    };
    saveUserCycleCalendarState(UserNameChoiceInsert1, nextState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(nextState);
    }
    if (typeof onBack === 'function') {
      onBack();
    }
  };

  const handleResetToBlank = () => {
    const blankState = createBlankCycleCalendarState();
    setPasswordEnabled(false);
    setCalendarPassword('');
    setFirstDay('');
    setAutoBaselinePhases(true);
    setPeriodDays(5);
    setFollicularDays(8);
    setOvulatoryDays(3);
    setLutealDays(12);
    setRepeatsOverAndOver(true);
    setIsCalendarPickerOpen(false);
    saveUserCycleCalendarState(UserNameChoiceInsert1, blankState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(blankState);
    }
    if (typeof onBack === 'function') {
      onBack();
    }
  };

  const renderPhaseDaysSelector = (
    currentValue,
    onSelect,
    rgbaColor,
    borderColor,
    optionsList = [1, 2, 3, 4, 5, 6, 7],
    normDayValue = null
  ) =>
    h(
      'div',
      { className: 'flex flex-wrap items-center gap-1.5 mt-2' },
      optionsList.map((num) => {
        const active = Number(currentValue) === num;
        const isNorm = normDayValue === num;
        return h(
          'button',
          {
            key: `day-opt-${num}`,
            type: 'button',
            onClick: () => onSelect(num),
            className:
              'min-w-[38px] h-10 px-2 rounded-xl font-black text-xs sm:text-sm flex flex-col items-center justify-center cursor-pointer transition-transform active:scale-95',
            style: {
              backgroundColor: active ? rgbaColor : '#FFFFFF',
              border: active ? '2.5px solid #000000' : `1.5px solid ${borderColor}`,
              color: '#000000',
              boxShadow: active ? '0 2px 6px rgba(0,0,0,0.16)' : 'none'
            }
          },
          h('span', { className: 'leading-none' }, formatDigitsForLang(num)),
          isNorm &&
            h(
              'span',
              { className: 'text-[8px] font-extrabold uppercase tracking-tighter text-black/75 leading-none mt-0.5' },
              ct('normTagShort', 'norm')
            )
        );
      }),
      h(
        'span',
        { className: 'text-xs font-extrabold text-black/75 ms-1' },
        Number(currentValue) === 1 ? ct('dayUnit', 'day') : ct('daysUnit', 'days')
      )
    );

  return h(
    'div',
    {
      id: 'CalendarSettingsHomePage1',
      'data-page-alias': 'CalenderSettingsHomePage1',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full bg-white text-black p-4 sm:p-6 overflow-y-auto select-none'
    },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto space-y-5 pb-10' },
      renderSubpageBackButton(onBack, t, lang),

      // Top Header Card
      h(
        'div',
        {
          className:
            'p-5 rounded-3xl border-2 border-black bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'
        },
        h(
          'div',
          { className: 'flex items-center gap-3' },
          renderGearHeartIcon(h, 40, '#000000', '#CF366C'),
          h(
            'div',
            null,
            h(
              'div',
              { className: 'text-xs font-extrabold uppercase tracking-wider text-black/70' },
              h(
                'span',
                { className: 'underline decoration-2 underline-offset-2 text-black' },
                UserNameChoiceInsert1
              ),
              ' • ',
              ct('possessiveCycleCalendar', "{user}'s Cycle Calendar")
                .replace('{user}', '')
                .replace(/^'s\s*/i, '')
                .trim()
            ),
            h(
              'h1',
              { className: 'text-xl sm:text-2xl font-black text-black mt-0.5' },
              ct('calSettingsTitle', 'Calendar Settings')
            )
          )
        ),
        // Status Badge (Blank vs Active)
        h(
          'span',
          {
            className: 'px-3 py-1 rounded-full border-2 border-black text-xs font-extrabold',
            style: {
              backgroundColor: isCurrentlyBlank ? '#FFFFFF' : 'rgba(216, 49, 108, 0.22)'
            }
          },
          isCurrentlyBlank
            ? ct('blankStatusBadge', 'Currently Blank (No User Data Entered Yet)')
            : ct('activeStatusBadge', 'Custom Cycle Active on Calendar')
        )
      ),

      h(
        'p',
        { className: 'text-xs sm:text-sm font-bold text-black/80 px-1' },
        ct(
          'calSettingsSubtitle',
          'Customize your cycle phases (1–7 days each). All colors are translucent on your calendar so phase transitions & overlaps stay visible.'
        )
      ),

      // Editable Phase Cards Form
      h(
        'form',
        { onSubmit: handleSave, className: 'space-y-4' },

        // 0. FIRST BUBBLE: CalendarPasswordSetting1 — "Add a Password" + Apple iOS Green Lever Switch
        h(
          'div',
          {
            id: 'CalendarPasswordSetting1',
            'data-piece-name': 'CalendarPasswordSetting1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-3'
          },
          h(
            'div',
            { className: 'flex items-center justify-between gap-3' },
            h(
              'div',
              { className: 'min-w-0' },
              h(
                'label',
                {
                  className: 'text-sm sm:text-base font-black text-black block cursor-pointer',
                  onClick: () => {
                    const nextVal = !passwordEnabled;
                    setPasswordEnabled(nextVal);
                    persistPartialOrFullSettings({ passwordEnabled: nextVal });
                  }
                },
                ct('addPasswordLabel', 'Add a Password')
              ),
              h(
                'p',
                { className: 'text-xs font-semibold text-black/75 mt-0.5' },
                ct(
                  'addPasswordDesc',
                  'Lock your cycle calendar with a password when opening the calendar widget.'
                )
              )
            ),

            // Apple-style Toggle Lever Switch (Turns Apple Green #34C759 when clicked ON)
            h(
              'button',
              {
                type: 'button',
                role: 'switch',
                'aria-checked': passwordEnabled,
                onClick: () => {
                  const nextVal = !passwordEnabled;
                  setPasswordEnabled(nextVal);
                  persistPartialOrFullSettings({ passwordEnabled: nextVal });
                },
                className:
                  'relative inline-flex items-center shrink-0 cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none',
                style: {
                  width: '54px',
                  height: '32px',
                  borderRadius: '9999px',
                  backgroundColor: passwordEnabled ? '#34C759' : '#E5E5EA',
                  border: '2px solid #000000',
                  padding: '2px'
                },
                title: ct('addPasswordLabel', 'Add a Password')
              },
              h('span', {
                className: 'inline-block rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out',
                style: {
                  width: '24px',
                  height: '24px',
                  border: '1.5px solid #000000',
                  transform: passwordEnabled
                    ? isRtl
                      ? 'translateX(-22px)'
                      : 'translateX(22px)'
                    : 'translateX(0px)'
                }
              })
            )
          ),

          // When Apple lever is switched ON (green), reveal the password input box
          passwordEnabled &&
            h(
              'div',
              { className: 'pt-2 border-t border-black/15' },
              h('input', {
                type: 'password',
                value: calendarPassword,
                onChange: (e) => {
                  const val = e.target.value;
                  setCalendarPassword(val);
                  persistPartialOrFullSettings({ calendarPassword: val });
                },
                placeholder: ct(
                  'passwordInputPlaceholder',
                  'Enter a password for your calendar...'
                ),
                className:
                  'w-full px-4 py-2.5 rounded-xl border-2 border-black bg-white text-black font-bold text-sm outline-none focus:ring-2 focus:ring-[#34C759]'
              })
            )
        ),

        // 1. FirstDayOfPeriod1 (Bright Red boxed day + Interactive Clickable Calendar Picker)
        h(
          'div',
          {
            id: 'FirstDayOfPeriod1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-2.5'
          },
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 flex-wrap' },
            h(
              'div',
              {
                className: 'flex items-center gap-2.5 cursor-pointer',
                onClick: () => setIsCalendarPickerOpen((prev) => !prev)
              },
              h('span', {
                className: 'w-6 h-6 rounded-md border-2 border-black shrink-0',
                style: { backgroundColor: CYCLE_PHASE_DEFINITIONS[0].rgbaFill }
              }),
              h(
                'label',
                { className: 'text-sm sm:text-base font-black text-black cursor-pointer' },
                ct('firstDayLabel', 'First Day of Period (Reported by User)')
              )
            ),
            h(
              'div',
              { className: 'flex items-center gap-2 flex-wrap' },
              // Clickable Calendar Trigger Button that always opens the interactive inline calendar
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => setIsCalendarPickerOpen((prev) => !prev),
                  className:
                    'px-3.5 py-1.5 rounded-xl border-2 border-black font-extrabold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-transform active:scale-95 shadow-sm',
                  style: {
                    backgroundColor: firstDay ? 'rgba(255, 23, 68, 0.16)' : '#FFF0FA',
                    color: '#000000'
                  }
                },
                h(
                  'svg',
                  {
                    width: 17,
                    height: 17,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: '#9F133A',
                    strokeWidth: 2.3,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round'
                  },
                  h('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2, ry: 2 }),
                  h('line', { x1: 16, y1: 2, x2: 16, y2: 6 }),
                  h('line', { x1: 8, y1: 2, x2: 8, y2: 6 }),
                  h('line', { x1: 3, y1: 10, x2: 21, y2: 10 })
                ),
                h(
                  'span',
                  null,
                  firstDay
                    ? formatDigitsForLang(firstDay)
                    : 'Click to Open Calendar'
                ),
                h('span', { className: 'text-[11px] font-black text-[#9F133A]' }, isCalendarPickerOpen ? '▲' : '▼')
              ),
              h('input', {
                type: 'date',
                value: firstDay,
                onClick: (e) => {
                  setIsCalendarPickerOpen(true);
                  if (e.currentTarget && typeof e.currentTarget.showPicker === 'function') {
                    try {
                      e.currentTarget.showPicker();
                    } catch (_) {}
                  }
                },
                onChange: (e) => handleSelectFirstDay(e.target.value),
                className:
                  'px-3 py-1.5 rounded-xl border-2 border-black bg-white text-black font-extrabold text-sm cursor-pointer'
              })
            )
          ),
          h(
            'p',
            { className: 'text-xs font-semibold text-black/75' },
            ct('firstDayDesc', 'Bright red boxed day marking Day 1 of your menstrual bleeding.')
          ),

          // Interactive Inline Month Calendar Picker (Opens when clicking the calendar button or date input)
          isCalendarPickerOpen &&
            (() => {
              const firstOfPickerMonth = new Date(pickerYear, pickerMonth, 1);
              const startDow = firstOfPickerMonth.getDay();
              const daysInPickerMonth = new Date(pickerYear, pickerMonth + 1, 0).getDate();
              const pickerCells = [];
              for (let i = 0; i < startDow; i++) pickerCells.push(null);
              for (let d = 1; d <= daysInPickerMonth; d++) pickerCells.push(d);
              while (pickerCells.length % 7 !== 0) pickerCells.push(null);

              const weekdaysShort = ct('weekdaysShort', ['S', 'M', 'T', 'W', 'T', 'F', 'S']);
              const pickerMonthTitle = formatDigitsForLang(
                formatMonthYearForLang(pickerYear, pickerMonth, lang, UserLanguageChoice1)
              );

              return h(
                'div',
                {
                  className:
                    'mt-2 p-3.5 rounded-2xl border-2 border-black bg-[#FFF8FC] shadow-md space-y-2.5'
                },
                // Month & Year header inside picker
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2' },
                  h(
                    'button',
                    {
                      type: 'button',
                      onClick: () => {
                        if (pickerMonth === 0) {
                          setPickerYear((y) => y - 1);
                          setPickerMonth(11);
                        } else {
                          setPickerMonth((m) => m - 1);
                        }
                      },
                      className:
                        'w-8 h-8 rounded-lg border-2 border-black bg-white hover:bg-black/5 font-black text-base flex items-center justify-center cursor-pointer'
                    },
                    isRtl ? '›' : '‹'
                  ),
                  h(
                    'div',
                    { className: 'flex items-center gap-2' },
                    h(
                      'span',
                      { className: 'text-sm sm:text-base font-black text-black' },
                      pickerMonthTitle
                    ),
                    h(
                      'button',
                      {
                        type: 'button',
                        onClick: () => {
                          const tNow = new Date();
                          const todayYmd = `${tNow.getFullYear()}-${String(
                            tNow.getMonth() + 1
                          ).padStart(2, '0')}-${String(tNow.getDate()).padStart(2, '0')}`;
                          setPickerYear(tNow.getFullYear());
                          setPickerMonth(tNow.getMonth());
                          handleSelectFirstDay(todayYmd);
                        },
                        className:
                          'px-2 py-0.5 rounded-md border border-black bg-white hover:bg-black/5 text-[11px] font-extrabold cursor-pointer'
                      },
                      ct('todayBtn', 'Today')
                    )
                  ),
                  h(
                    'button',
                    {
                      type: 'button',
                      onClick: () => {
                        if (pickerMonth === 11) {
                          setPickerYear((y) => y + 1);
                          setPickerMonth(0);
                        } else {
                          setPickerMonth((m) => m + 1);
                        }
                      },
                      className:
                        'w-8 h-8 rounded-lg border-2 border-black bg-white hover:bg-black/5 font-black text-base flex items-center justify-center cursor-pointer'
                    },
                    isRtl ? '‹' : '›'
                  )
                ),
                // Weekday headers
                h(
                  'div',
                  { className: 'grid grid-cols-7 gap-1 text-center' },
                  weekdaysShort.map((wd, idx) =>
                    h(
                      'div',
                      { key: `pk-wd-${idx}`, className: 'text-[11px] font-black text-black/70 py-0.5' },
                      wd
                    )
                  )
                ),
                // Clickable Day cells
                h(
                  'div',
                  { className: 'grid grid-cols-7 gap-1' },
                  pickerCells.map((dayNum, idx) => {
                    if (!dayNum) {
                      return h('div', { key: `pk-empty-${idx}`, className: 'h-9' });
                    }
                    const ymd = `${pickerYear}-${String(pickerMonth + 1).padStart(2, '0')}-${String(
                      dayNum
                    ).padStart(2, '0')}`;
                    const isSelectedFirstDay = firstDay === ymd;
                    const isTodayCell =
                      pickerYear === nowDate.getFullYear() &&
                      pickerMonth === nowDate.getMonth() &&
                      dayNum === nowDate.getDate();

                    return h(
                      'button',
                      {
                        key: `pk-day-${ymd}`,
                        type: 'button',
                        onClick: () => {
                          handleSelectFirstDay(ymd);
                          setIsCalendarPickerOpen(false);
                        },
                        className:
                          'h-9 rounded-lg font-extrabold text-xs sm:text-sm flex items-center justify-center cursor-pointer transition-transform active:scale-95',
                        style: {
                          backgroundColor: isSelectedFirstDay
                            ? CYCLE_PHASE_DEFINITIONS[0].rgbaFill
                            : '#FFFFFF',
                          border: isSelectedFirstDay
                            ? '2.5px solid #000000'
                            : isTodayCell
                            ? '2px solid #9F133A'
                            : '1px solid rgba(0,0,0,0.25)',
                          color: '#000000',
                          boxShadow: isSelectedFirstDay ? '0 2px 6px rgba(255,23,68,0.35)' : 'none'
                        }
                      },
                      formatDigitsForLang(dayNum)
                    );
                  })
                )
              );
            })()
        ),

        // 2. PeriodDaysDuration1 (1–7 Days of Period Customizable — Darker Red)
        h(
          'div',
          {
            id: 'PeriodDaysDuration1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
          },
          h(
            'div',
            { className: 'flex items-center gap-2.5' },
            h('span', {
              className: 'w-6 h-6 rounded-md border-2 border-black shrink-0',
              style: { backgroundColor: CYCLE_PHASE_DEFINITIONS[1].rgbaFill }
            }),
            h(
              'label',
              { className: 'text-sm sm:text-base font-black text-black' },
              ct('periodDaysLabel', 'Days of Period (1–7 Days Customizable)')
            )
          ),
          h(
            'p',
            { className: 'text-xs font-semibold text-black/75' },
            ct(
              'periodDaysDesc',
              'Darker red bar spanning from your first day through your last day of period.'
            )
          ),
          renderPhaseDaysSelector(
            periodDays,
            (num) => {
              setPeriodDays(num);
              if (autoBaselinePhases) {
                const base = getBaselineCyclePhaseDurations(num);
                setFollicularDays(base.FollicularPhaseDuration1);
                setOvulatoryDays(base.OvulatoryPhaseDuration1);
                setLutealDays(base.LutealPhaseDuration1);
                persistPartialOrFullSettings({
                  periodDays: num,
                  follicularDays: base.FollicularPhaseDuration1,
                  ovulatoryDays: base.OvulatoryPhaseDuration1,
                  lutealDays: base.LutealPhaseDuration1
                });
              } else {
                persistPartialOrFullSettings({ periodDays: num });
              }
            },
            CYCLE_PHASE_DEFINITIONS[1].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[1].borderHex,
            [1, 2, 3, 4, 5, 6, 7],
            5
          )
        ),

        // Auto-Baseline Guesstimate Info Banner + Reset to Baseline Button
        h(
          'div',
          {
            className:
              'p-4 rounded-2xl border-2 border-black bg-[#FFF5FA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3'
          },
          h(
            'div',
            { className: 'space-y-0.5' },
            h(
              'div',
              { className: 'text-xs sm:text-sm font-black text-[#9F133A] flex items-center gap-1.5' },
              h('span', null, '✨'),
              h(
                'span',
                null,
                ct(
                  'autoBaselineBannerTitle',
                  'Automatic Normal Cycle Estimate'
                )
              )
            ),
            h(
              'p',
              { className: 'text-xs font-semibold text-black/80 leading-snug' },
              ct(
                'autoBaselineBannerDesc',
                'Just pick your First Day of Period! The calendar automatically fills in a normal 28-day cycle estimate for the rest of your phases. You can still change any number below anytime.'
              )
            )
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: handleResetPhasesToNormBaseline,
              className:
                'shrink-0 px-3 py-1.5 rounded-xl border-2 border-black bg-white hover:bg-black/5 text-xs font-extrabold text-black cursor-pointer transition-transform active:scale-95 shadow-sm'
            },
            ct('resetToBaselineBtn', 'Reset to Normal Estimate')
          )
        ),

        // 3. FollicularPhaseDuration1 (Editable with Norm Baseline Auto-Filled — Orange)
        h(
          'div',
          {
            id: 'FollicularPhaseDuration1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
          },
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 flex-wrap' },
            h(
              'div',
              { className: 'flex items-center gap-2.5' },
              h('span', {
                className: 'w-6 h-6 rounded-md border-2 border-black shrink-0',
                style: { backgroundColor: CYCLE_PHASE_DEFINITIONS[2].rgbaFill }
              }),
              h(
                'label',
                { className: 'text-sm sm:text-base font-black text-black' },
                ct('follicularLabel', 'Follicular Phase (Auto-Guesstimated & Editable)')
              )
            ),
            h(
              'span',
              { className: 'px-2 py-0.5 rounded-full border border-black/40 bg-[#FFF3E0] text-[11px] font-extrabold text-black' },
              `${ct('normGuesstimateTag', 'Norm Guesstimate')}: ${formatDigitsForLang(
                getBaselineCyclePhaseDurations(periodDays).FollicularPhaseDuration1
              )} ${ct('daysUnit', 'days')}`
            )
          ),
          h(
            'p',
            { className: 'text-xs font-semibold text-black/75' },
            ct(
              'follicularDesc',
              'Warm orange translucent bar following your period as an egg matures.'
            )
          ),
          renderPhaseDaysSelector(
            follicularDays,
            (num) => {
              setAutoBaselinePhases(false);
              setFollicularDays(num);
              persistPartialOrFullSettings({ autoBaselinePhases: false, follicularDays: num });
            },
            CYCLE_PHASE_DEFINITIONS[2].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[2].borderHex,
            [4, 5, 6, 7, 8, 9, 10, 11, 12],
            getBaselineCyclePhaseDurations(periodDays).FollicularPhaseDuration1
          )
        ),

        // 4. OvulatoryPhaseDuration1 (Editable with Norm Baseline Auto-Filled — Pinkish-Red)
        h(
          'div',
          {
            id: 'OvulatoryPhaseDuration1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
          },
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 flex-wrap' },
            h(
              'div',
              { className: 'flex items-center gap-2.5' },
              h('span', {
                className: 'w-6 h-6 rounded-md border-2 border-black shrink-0',
                style: { backgroundColor: CYCLE_PHASE_DEFINITIONS[3].rgbaFill }
              }),
              h(
                'label',
                { className: 'text-sm sm:text-base font-black text-black' },
                ct('ovulatoryLabel', 'Ovulatory Phase (Auto-Guesstimated & Editable)')
              )
            ),
            h(
              'span',
              { className: 'px-2 py-0.5 rounded-full border border-black/40 bg-[#FCE4EC] text-[11px] font-extrabold text-black' },
              `${ct('normGuesstimateTag', 'Norm Guesstimate')}: ${formatDigitsForLang(3)} ${ct('daysUnit', 'days')}`
            )
          ),
          h(
            'p',
            { className: 'text-xs font-semibold text-black/75' },
            ct(
              'ovulatoryDesc',
              'Pinkish-red translucent bar marking your fertile ovulation window.'
            )
          ),
          renderPhaseDaysSelector(
            ovulatoryDays,
            (num) => {
              setAutoBaselinePhases(false);
              setOvulatoryDays(num);
              persistPartialOrFullSettings({ autoBaselinePhases: false, ovulatoryDays: num });
            },
            CYCLE_PHASE_DEFINITIONS[3].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[3].borderHex,
            [1, 2, 3, 4, 5, 6],
            3
          )
        ),

        // 5. LutealPhaseDuration1 (Editable with Norm Baseline Auto-Filled — Darkest Pink)
        h(
          'div',
          {
            id: 'LutealPhaseDuration1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
          },
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 flex-wrap' },
            h(
              'div',
              { className: 'flex items-center gap-2.5' },
              h('span', {
                className: 'w-6 h-6 rounded-md border-2 border-black shrink-0',
                style: { backgroundColor: CYCLE_PHASE_DEFINITIONS[4].rgbaFill }
              }),
              h(
                'label',
                { className: 'text-sm sm:text-base font-black text-black' },
                ct('lutealLabel', 'Luteal Phase (Auto-Guesstimated & Editable)')
              )
            ),
            h(
              'span',
              { className: 'px-2 py-0.5 rounded-full border border-black/40 bg-[#F8BBD0] text-[11px] font-extrabold text-black' },
              `${ct('normGuesstimateTag', 'Norm Guesstimate')}: ${formatDigitsForLang(12)} ${ct('daysUnit', 'days')}`
            )
          ),
          h(
            'p',
            { className: 'text-xs font-semibold text-black/75' },
            ct(
              'lutealDesc',
              'Darkest pink translucent bar after ovulation until the next cycle begins.'
            )
          ),
          renderPhaseDaysSelector(
            lutealDays,
            (num) => {
              setAutoBaselinePhases(false);
              setLutealDays(num);
              persistPartialOrFullSettings({ autoBaselinePhases: false, lutealDays: num });
            },
            CYCLE_PHASE_DEFINITIONS[4].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[4].borderHex,
            [8, 9, 10, 11, 12, 13, 14, 15, 16],
            12
          )
        ),

        // Repeat Over and Over Toggle
        h(
          'label',
          {
            className:
              'p-4 rounded-2xl border-2 border-black bg-white flex items-center justify-between gap-3 cursor-pointer'
          },
          h(
            'span',
            { className: 'text-sm font-extrabold text-black' },
            ct('repeatsToggleLabel', 'Repeat cycle phases continuously across future dates')
          ),
          h('input', {
            type: 'checkbox',
            checked: repeatsOverAndOver,
            onChange: (e) => {
              const checked = e.target.checked;
              setRepeatsOverAndOver(checked);
              persistPartialOrFullSettings({ repeatsOverAndOver: checked });
            },
            className: 'w-5 h-5 accent-[#CF366C] cursor-pointer'
          })
        ),

        // Action Buttons: Save to My Calendar OR Clear Calendar
        h(
          'div',
          { className: 'flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2' },
          h(
            'button',
            {
              type: 'submit',
              className:
                'flex-1 py-3.5 px-6 rounded-2xl border-2 border-black text-white font-black text-sm sm:text-base shadow-md cursor-pointer transition-transform active:scale-98',
              style: {
                background: 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)'
              }
            },
            ct('saveCalendarBtn', 'Save to My Calendar')
          ),
          h(
            'button',
            {
              id: 'ClearCalendarButton1',
              type: 'button',
              onClick: handleResetToBlank,
              className:
                'py-3.5 px-5 rounded-2xl border-2 border-black bg-white hover:bg-black/5 text-black font-extrabold text-xs sm:text-sm cursor-pointer'
            },
            ct('clearToBlankBtn', 'Clear Calendar')
          )
        )
      )
    )
  );
}

export const CalenderSettingsHomePage1 = CalendarSettingsHomePage1;
export default CalendarSettingsHomePage1;
