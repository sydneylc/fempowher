import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=282';
import { isRtlLanguage } from '../data/translations.js?v=282';
import {
  CYCLE_PHASE_DEFINITIONS,
  FERTILITY_GREEN_OVERLAY_DEFINITION,
  createBlankCycleCalendarState,
  computeAdaptiveCyclePrediction,
  getBaselineCyclePhaseDurations,
  formatMonthYearForLang,
  getCycleCalText,
  isAnonymousCycleUser,
  loadUserCycleCalendarState,
  saveUserCycleCalendarState,
  renderGearHeartIcon
} from '../data/cycleCalendarData.js?v=282';

const h = React.createElement;

// ============================================================================
// CalendarSettingsHomePage1 (also exported as CalenderSettingsHomePage1)
// Editable Settings Page for a user's Cycle Calendar:
// - Section 1: Menstrual Cycle (Automatic main cycle frame + EWMA cycle prediction)
//   - Ovulatory Phase includes starred subheading:
//     "★ Easiest time to get pregnant (Most fertile window)"
// - Section 2: Trying to Get Pregnant (Fertility) with opt-in checkmark
//   - Enables green fertility highlight over ovulation window on the calendar
//   - Enables the interactive 4-Phase Cycle & Fertility Wheel in the Calendar Key
//   - Includes customizable widgets for Most Likely Fertile Days, Exact Ovulation Day,
//     Could Still Be Fertile After Ovulation, and Unlikely to Get Pregnant days.
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
  const isAnonUser = isAnonymousCycleUser(UserNameChoiceInsert1);

  const initial = cycleCalendarState || loadUserCycleCalendarState(UserNameChoiceInsert1);

  const [optInEncryptedStorage, setOptInEncryptedStorage] = useState(
    initial.optInEncryptedStorage !== false
  );
  const [passwordEnabled, setPasswordEnabled] = useState(Boolean(initial.calendarPasswordEnabled));
  const [calendarPassword, setCalendarPassword] = useState(initial.calendarPassword || '');
  const [firstDay, setFirstDay] = useState(initial.FirstDayOfPeriod1 || '');
  const [periodHistoryDates, setPeriodHistoryDates] = useState(() => {
    const arr = Array.isArray(initial.periodHistoryDates) ? [...initial.periodHistoryDates] : [];
    if (initial.FirstDayOfPeriod1 && !arr.includes(initial.FirstDayOfPeriod1)) {
      arr.push(initial.FirstDayOfPeriod1);
    }
    return arr.sort();
  });
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

  // Section 2: Opt-in "Trying to Get Pregnant (Fertility)" state
  const [fertilityTrackingEnabled, setFertilityTrackingEnabled] = useState(
    Boolean(initial.fertilityTrackingEnabled)
  );
  const [fertileWindowDays, setFertileWindowDays] = useState(
    Number(initial.FertileWindowDays1) || 5
  );
  const [exactOvulationDays, setExactOvulationDays] = useState(
    Number(initial.ExactOvulationDays1) || 1
  );
  const [postOvulationFertileDays, setPostOvulationFertileDays] = useState(
    Number(initial.PostOvulationFertileDays1) ?? 1
  );
  const [showInfertileDaysOnWheel, setShowInfertileDaysOnWheel] = useState(
    initial.showInfertileDaysOnWheel !== false
  );

  // Interactive clickable calendar picker inside FirstDayOfPeriod1
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

  const adaptivePrediction = computeAdaptiveCyclePrediction(
    periodHistoryDates,
    firstDay,
    periodDays
  );

  // Auto-persist helper so user's entered dates & settings stay saved unless "Clear Calendar" is clicked
  const persistPartialOrFullSettings = (overrides = {}) => {
    const nextOptIn =
      overrides.optInEncryptedStorage !== undefined
        ? overrides.optInEncryptedStorage
        : optInEncryptedStorage;
    const nextFirstDay =
      overrides.firstDay !== undefined ? overrides.firstDay : firstDay;
    const nextHistory =
      overrides.periodHistoryDates !== undefined
        ? overrides.periodHistoryDates
        : periodHistoryDates;
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

    const nextFertilityEnabled =
      overrides.fertilityTrackingEnabled !== undefined
        ? overrides.fertilityTrackingEnabled
        : fertilityTrackingEnabled;
    const nextFertileWindowDays =
      overrides.fertileWindowDays !== undefined
        ? overrides.fertileWindowDays
        : fertileWindowDays;
    const nextExactOvulationDays =
      overrides.exactOvulationDays !== undefined
        ? overrides.exactOvulationDays
        : exactOvulationDays;
    const nextPostOvulationDays =
      overrides.postOvulationFertileDays !== undefined
        ? overrides.postOvulationFertileDays
        : postOvulationFertileDays;
    const nextShowInfertile =
      overrides.showInfertileDaysOnWheel !== undefined
        ? overrides.showInfertileDaysOnWheel
        : showInfertileDaysOnWheel;

    const cleanHistorySet = new Set(Array.isArray(nextHistory) ? nextHistory : []);
    if (nextFirstDay && /^\d{4}-\d{2}-\d{2}$/.test(String(nextFirstDay))) {
      cleanHistorySet.add(String(nextFirstDay));
    }
    const sortedHistory = Array.from(cleanHistorySet).sort();
    const latestFirstDay =
      sortedHistory.length > 0 ? sortedHistory[sortedHistory.length - 1] : nextFirstDay || '';

    const hasData = Boolean(latestFirstDay || initial.hasEnteredCycleData);
    const nextState = {
      ...initial,
      optInEncryptedStorage: Boolean(nextOptIn),
      hasEnteredCycleData: hasData && Boolean(latestFirstDay),
      autoBaselinePhases: Boolean(nextAutoBaseline),
      calendarPasswordEnabled: Boolean(nextPasswordEnabled),
      calendarPassword: nextPasswordEnabled ? String(nextCalendarPassword || '') : '',
      FirstDayOfPeriod1: latestFirstDay,
      periodHistoryDates: sortedHistory,
      PeriodDaysDuration1: Math.max(1, Math.min(10, Number(nextPeriodDays) || 5)),
      FollicularPhaseDuration1: Math.max(1, Math.min(21, Number(nextFollicularDays) || 8)),
      OvulatoryPhaseDuration1: Math.max(1, Math.min(10, Number(nextOvulatoryDays) || 3)),
      LutealPhaseDuration1: Math.max(1, Math.min(21, Number(nextLutealDays) || 12)),
      repeatsOverAndOver: nextRepeats,
      fertilityTrackingEnabled: Boolean(nextFertilityEnabled),
      FertileWindowDays1: Math.max(1, Math.min(7, Number(nextFertileWindowDays) || 5)),
      ExactOvulationDays1: Math.max(1, Math.min(2, Number(nextExactOvulationDays) || 1)),
      PostOvulationFertileDays1: Math.max(0, Math.min(3, Number(nextPostOvulationDays) ?? 1)),
      showInfertileDaysOnWheel: Boolean(nextShowInfertile)
    };
    saveUserCycleCalendarState(UserNameChoiceInsert1, nextState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(nextState);
    }
  };

  const handleSelectFirstDay = (ymd) => {
    if (!ymd) return;
    const parts = String(ymd || '').split('-').map(Number);
    if (parts.length === 3 && parts[0] && parts[1]) {
      setPickerYear(parts[0]);
      setPickerMonth(parts[1] - 1);
    }

    // Add to monthly period history so the EWMA cycle algorithm learns across months
    // (If another date in the exact same month/year within 14 days was tapped, replace that month's entry)
    const targetUtc = Date.UTC(parts[0], parts[1] - 1, parts[2]);
    const filteredHistory = periodHistoryDates.filter((existingYmd) => {
      const ep = String(existingYmd).split('-').map(Number);
      if (ep.length !== 3) return false;
      const eUtc = Date.UTC(ep[0], ep[1] - 1, ep[2]);
      return Math.abs(Math.round((targetUtc - eUtc) / 86400000)) > 14;
    });
    const updatedHistory = [...filteredHistory, ymd].sort();
    const latestYmd = updatedHistory[updatedHistory.length - 1] || ymd;

    setFirstDay(latestYmd);
    setPeriodHistoryDates(updatedHistory);

    if (autoBaselinePhases) {
      const base = getBaselineCyclePhaseDurations(periodDays, latestYmd, updatedHistory);
      setFollicularDays(base.FollicularPhaseDuration1);
      setOvulatoryDays(base.OvulatoryPhaseDuration1);
      setLutealDays(base.LutealPhaseDuration1);
      persistPartialOrFullSettings({
        firstDay: latestYmd,
        periodHistoryDates: updatedHistory,
        follicularDays: base.FollicularPhaseDuration1,
        ovulatoryDays: base.OvulatoryPhaseDuration1,
        lutealDays: base.LutealPhaseDuration1
      });
    } else {
      persistPartialOrFullSettings({
        firstDay: latestYmd,
        periodHistoryDates: updatedHistory
      });
    }
  };

  const handleRemoveHistoryDate = (ymdToRemove) => {
    const remaining = periodHistoryDates.filter((d) => d !== ymdToRemove).sort();
    const nextLatest = remaining.length > 0 ? remaining[remaining.length - 1] : '';
    setPeriodHistoryDates(remaining);
    setFirstDay(nextLatest);
    if (!nextLatest) {
      handleResetToBlank();
      return;
    }
    const base = getBaselineCyclePhaseDurations(periodDays, nextLatest, remaining);
    if (autoBaselinePhases) {
      setFollicularDays(base.FollicularPhaseDuration1);
      setOvulatoryDays(base.OvulatoryPhaseDuration1);
      setLutealDays(base.LutealPhaseDuration1);
    }
    persistPartialOrFullSettings({
      firstDay: nextLatest,
      periodHistoryDates: remaining,
      follicularDays: autoBaselinePhases ? base.FollicularPhaseDuration1 : follicularDays
    });
  };

  const handleResetPhasesToNormBaseline = () => {
    const base = getBaselineCyclePhaseDurations(periodDays, firstDay, periodHistoryDates);
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
    const updatedHistory = Array.from(new Set([...periodHistoryDates, chosenFirstDay])).sort();
    const latestDay = updatedHistory[updatedHistory.length - 1] || chosenFirstDay;

    const nextState = {
      ...initial,
      optInEncryptedStorage: Boolean(optInEncryptedStorage),
      hasEnteredCycleData: true,
      autoBaselinePhases: Boolean(autoBaselinePhases),
      calendarPasswordEnabled: Boolean(passwordEnabled),
      calendarPassword: passwordEnabled ? String(calendarPassword || '') : '',
      FirstDayOfPeriod1: latestDay,
      periodHistoryDates: updatedHistory,
      PeriodDaysDuration1: Math.max(1, Math.min(10, Number(periodDays) || 5)),
      FollicularPhaseDuration1: Math.max(1, Math.min(21, Number(follicularDays) || 8)),
      OvulatoryPhaseDuration1: Math.max(1, Math.min(10, Number(ovulatoryDays) || 3)),
      LutealPhaseDuration1: Math.max(1, Math.min(21, Number(lutealDays) || 12)),
      repeatsOverAndOver,
      fertilityTrackingEnabled: Boolean(fertilityTrackingEnabled),
      FertileWindowDays1: Math.max(1, Math.min(7, Number(fertileWindowDays) || 5)),
      ExactOvulationDays1: Math.max(1, Math.min(2, Number(exactOvulationDays) || 1)),
      PostOvulationFertileDays1: Math.max(0, Math.min(3, Number(postOvulationFertileDays) ?? 1)),
      showInfertileDaysOnWheel: Boolean(showInfertileDaysOnWheel)
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
    setPeriodHistoryDates([]);
    setAutoBaselinePhases(true);
    setPeriodDays(5);
    setFollicularDays(8);
    setOvulatoryDays(3);
    setLutealDays(12);
    setRepeatsOverAndOver(true);
    setFertilityTrackingEnabled(false);
    setFertileWindowDays(5);
    setExactOvulationDays(1);
    setPostOvulationFertileDays(1);
    setShowInfertileDaysOnWheel(true);
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

  const baselineFollicularNorm = getBaselineCyclePhaseDurations(
    periodDays,
    firstDay,
    periodHistoryDates
  ).FollicularPhaseDuration1;

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
        // Status Badge (Anonymous Session vs Encrypted Account vs Blank)
        h(
          'span',
          {
            className: 'px-3 py-1 rounded-full border-2 border-black text-xs font-extrabold',
            style: {
              backgroundColor: isAnonUser
                ? '#FEF3C7'
                : isCurrentlyBlank
                ? '#FFFFFF'
                : 'rgba(216, 49, 108, 0.22)'
            }
          },
          isAnonUser
            ? ct('anonSessionBadge', 'Anonymous Session Only (Erased When You Leave)')
            : isCurrentlyBlank
            ? ct('blankStatusBadge', 'Currently Blank (No User Data Entered Yet)')
            : ct('activeStatusBadge', '🔒 Encrypted Custom Cycle Active')
        )
      ),

      // Privacy & Encryption Opt-In Notice Card
      isAnonUser
        ? h(
            'div',
            {
              className:
                'p-4 rounded-2xl border-2 border-black bg-[#FFFBEB] text-xs font-bold text-black/90 space-y-1'
            },
            h(
              'div',
              { className: 'text-sm font-black text-[#92400E]' },
              '🔒 Anonymous Session Privacy Rule:'
            ),
            h(
              'p',
              null,
              'Because you are browsing anonymously, any period date or cycle setting you enter here stays ONLY in your current open session and is automatically erased the second you leave or close this session.'
            )
          )
        : h(
            'label',
            {
              className:
                'p-4 rounded-2xl border-2 border-black bg-[#F0FDF4] flex items-center justify-between gap-3 cursor-pointer'
            },
            h(
              'div',
              { className: 'space-y-0.5' },
              h(
                'div',
                { className: 'text-sm font-black text-[#065F46]' },
                `🔒 Opt-In Password-Encrypted Calendar Storage (${UserNameChoiceInsert1})`
              ),
              h(
                'p',
                { className: 'text-xs font-bold text-black/80 leading-snug' },
                'When checked, your reported period dates and cycle settings are encrypted with your account password so they stay saved across future sessions and can only be unlocked when you log in to your account.'
              )
            ),
            h('input', {
              type: 'checkbox',
              checked: optInEncryptedStorage,
              onChange: (e) => {
                const checked = e.target.checked;
                setOptInEncryptedStorage(checked);
                persistPartialOrFullSettings({ optInEncryptedStorage: checked });
              },
              className: 'w-5 h-5 accent-[#059669] cursor-pointer shrink-0'
            })
          ),

      // Editable Phase Cards Form
      h(
        'form',
        { onSubmit: handleSave, className: 'space-y-4' },

        // 0. Extra Calendar Widget Lock Password
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
                ct('addPasswordLabel', 'Add an Extra Calendar Lock Password')
              ),
              h(
                'p',
                { className: 'text-xs font-semibold text-black/75 mt-0.5' },
                ct(
                  'addPasswordDesc',
                  'Lock your cycle calendar with an extra password when opening the calendar widget.'
                )
              )
            ),

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
                }
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

        // ====================================================================
        // SECTION 1 TITLE: MENSTRUAL CYCLE (Main Automatic Home Frame)
        // ====================================================================
        h(
          'div',
          {
            id: 'MenstrualCycleSettingsHeader1',
            className: 'pt-2 pb-1 px-1 border-b-[2.5px] border-black flex flex-col gap-0.5'
          },
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 flex-wrap' },
            h(
              'h2',
              { className: 'text-lg sm:text-xl font-black text-[#9F133A] tracking-tight' },
              ct('menstrualSectionHeader', 'Menstrual Cycle')
            ),
            h(
              'span',
              {
                className:
                  'px-2.5 py-0.5 rounded-full border-2 border-black bg-[#FCE4F4] text-[11px] font-black text-[#9F133A]'
              },
              'Main Automatic Cycle Frame ✓'
            )
          ),
          h(
            'p',
            { className: 'text-xs font-bold text-black/75' },
            ct(
              'menstrualSectionSub',
              'Main automatic cycle frame on your calendar. As you log more monthly period dates, our cycle algorithm learns your body’s personal rhythm!'
            )
          )
        ),

        // 1. FirstDayOfPeriod1 (Bright Red boxed day + Interactive Calendar Picker + Multi-Month Period History)
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

          // Logged Monthly Period History & Tentative Next Period Prediction Banner
          firstDay &&
            h(
              'div',
              {
                className:
                  'p-3 rounded-xl border-2 border-black/80 bg-[#FFF5FA] space-y-2'
              },
              h(
                'div',
                { className: 'flex items-center justify-between gap-2 flex-wrap' },
                h(
                  'div',
                  { className: 'text-xs font-black text-[#9F133A]' },
                  `📅 Tentative Next Period Prediction: ${formatDigitsForLang(
                    adaptivePrediction.tentativeNextPeriodDate || '—'
                  )}`
                ),
                h(
                  'span',
                  {
                    className:
                      'px-2 py-0.5 rounded-full border border-black bg-white text-[10.5px] font-extrabold text-black'
                  },
                  adaptivePrediction.validGaps.length > 0
                    ? `Learned Cycle Rhythm: ${formatDigitsForLang(
                        adaptivePrediction.predictedCycleLength
                      )} days (${adaptivePrediction.cyclesLoggedCount} periods logged)`
                    : `Estimated Cycle: ${formatDigitsForLang(
                        adaptivePrediction.predictedCycleLength
                      )} days (Log next month's 1st day to refine!)`
                )
              ),
              periodHistoryDates.length > 0 &&
                h(
                  'div',
                  { className: 'flex items-center gap-1.5 flex-wrap pt-0.5' },
                  h(
                    'span',
                    { className: 'text-[11px] font-extrabold text-black/75' },
                    'Reported Period 1st Days:'
                  ),
                  periodHistoryDates.map((dStr) =>
                    h(
                      'span',
                      {
                        key: `hist-${dStr}`,
                        className:
                          'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-black bg-white text-[11px] font-black text-black'
                      },
                      formatDigitsForLang(dStr),
                      periodHistoryDates.length > 1 &&
                        h(
                          'button',
                          {
                            type: 'button',
                            onClick: () => handleRemoveHistoryDate(dStr),
                            className: 'text-[#9F133A] hover:text-black font-black cursor-pointer',
                            title: 'Remove this logged date'
                          },
                          '×'
                        )
                    )
                  )
                )
            ),

          // Interactive Inline Month Calendar Picker
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
                    const isSelectedFirstDay = firstDay === ymd || periodHistoryDates.includes(ymd);
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
                const base = getBaselineCyclePhaseDurations(num, firstDay, periodHistoryDates);
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

        // Smart Cycle Algorithm Info Banner + Reset to Smart Estimate Button
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
                  'Smart Cycle & Next-Period Prediction Algorithm'
                )
              )
            ),
            h(
              'p',
              { className: 'text-xs font-semibold text-black/80 leading-snug' },
              ct(
                'autoBaselineBannerDesc',
                'Pick your First Day of Period! Our recency-weighted cycle algorithm automatically predicts your tentative next period and adjusts your phases as you log more months.'
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
            ct('resetToBaselineBtn', 'Reset to Smart Estimate')
          )
        ),

        // 3. FollicularPhaseDuration1 (Editable with Smart Norm Auto-Filled — Orange)
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
                ct('follicularLabel', 'Follicular Phase (1–7+ Days Customizable)')
              )
            ),
            h(
              'span',
              { className: 'px-2 py-0.5 rounded-full border border-black/40 bg-[#FFF3E0] text-[11px] font-extrabold text-black' },
              `${ct('normGuesstimateTag', 'Norm Guesstimate')}: ${formatDigitsForLang(
                baselineFollicularNorm
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
            baselineFollicularNorm
          )
        ),

        // 4. OvulatoryPhaseDuration1 (Editable with Starred Subheading underneath:
        //    When fertility is NOT checked: only "★"; when fertility IS checked: "★ Easiest time to get pregnant")
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
              { className: 'flex items-start gap-2.5' },
              h('span', {
                className: 'w-6 h-6 rounded-md border-2 border-black shrink-0 mt-0.5',
                style: { backgroundColor: CYCLE_PHASE_DEFINITIONS[3].rgbaFill }
              }),
              h(
                'div',
                { className: 'flex flex-col' },
                h(
                  'label',
                  { className: 'text-sm sm:text-base font-black text-black leading-snug' },
                  ct('ovulatoryLabel', 'Ovulatory Phase (1–7 Days Customizable)')
                ),
                h(
                  'span',
                  { className: 'text-xs font-black text-[#9F133A] mt-0.5' },
                  fertilityTrackingEnabled
                    ? ct('ovulatoryStarredSub', '★ Easiest time to get pregnant')
                    : '★'
                )
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
                ct('lutealLabel', 'Luteal Phase (1–7+ Days Customizable)')
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

        // ====================================================================
        // SECTION 2 TITLE + OPT-IN CHECKMARK:
        // "Trying to Get Pregnant (Fertility)"
        // ====================================================================
        h(
          'div',
          {
            id: 'TryingToGetPregnantSection1',
            className: 'pt-4 space-y-3.5'
          },
          h(
            'label',
            {
              className:
                'p-4 rounded-2xl border-[2.5px] border-black flex items-center justify-between gap-3 cursor-pointer shadow-sm transition-colors',
              style: {
                backgroundColor: fertilityTrackingEnabled ? 'rgba(118, 255, 3, 0.20)' : '#FFF9FC',
                boxShadow: fertilityTrackingEnabled
                  ? '0 0 14px rgba(57, 255, 20, 0.45)'
                  : 'none'
              }
            },
            h(
              'div',
              { className: 'space-y-1 min-w-0' },
              h(
                'div',
                { className: 'flex items-center gap-2 flex-wrap' },
                h(
                  'span',
                  {
                    className: 'w-5 h-5 rounded-md border-2 border-black shrink-0',
                    style: {
                      backgroundColor: '#39FF14',
                      boxShadow: '0 0 8px rgba(57, 255, 20, 0.9)'
                    }
                  }
                ),
                h(
                  'h2',
                  { className: 'text-lg sm:text-xl font-black text-[#052E16] tracking-tight' },
                  ct('tryingToGetPregnantHeader', 'Trying to Get Pregnant (Fertility)')
                )
              ),
              h(
                'div',
                { className: 'text-xs font-black text-[#9F133A]' },
                ct('ovulatoryStarredSub', '★ Easiest time to get pregnant')
              ),
              h(
                'p',
                { className: 'text-xs font-bold text-black/80 leading-snug' },
                ct(
                  'tryingToGetPregnantSub',
                  'Check this box to turn on a vibrant neon green fertility highlight over your ovulation window and add the interactive Cycle & Fertility Wheel to your Calendar Key.'
                )
              )
            ),
            h('input', {
              type: 'checkbox',
              checked: fertilityTrackingEnabled,
              onChange: (e) => {
                const checked = e.target.checked;
                setFertilityTrackingEnabled(checked);
                persistPartialOrFullSettings({ fertilityTrackingEnabled: checked });
              },
              className: 'w-6 h-6 accent-[#16A34A] cursor-pointer shrink-0'
            })
          ),

          // Sub-widgets revealed when "Trying to Get Pregnant (Fertility)" is checked!
          fertilityTrackingEnabled &&
            h(
              'div',
              {
                className:
                  'p-4 rounded-3xl border-2 border-black space-y-3.5',
                style: {
                  backgroundColor: 'rgba(118, 255, 3, 0.14)'
                }
              },
              // Why Timing Matters Clinical Summary Card (Sperm 3-5d, Egg 12-24h, 6-day window, highest single-day chance)
              h(
                'div',
                {
                  className:
                    'p-4 rounded-2xl border-2 border-black bg-white space-y-2'
                },
                h(
                  'div',
                  { className: 'text-xs sm:text-sm font-black text-[#052E16]' },
                  '★ Why Timing Matters When Trying to Get Pregnant:'
                ),
                h(
                  'ul',
                  { className: 'space-y-1.5 text-xs font-bold text-black/90 leading-snug' },
                  h(
                    'li',
                    null,
                    '• Highest Single-Day Chance: Having sex on the day of ovulation, as well as the 1 to 2 days right before ovulation, gives you the highest single-day chance of getting pregnant.'
                  ),
                  h(
                    'li',
                    null,
                    '• The 6-Day Fertile Window: Pregnancy is most likely during the 6-day window that includes the 5 days before ovulation and the day of ovulation itself.'
                  ),
                  h(
                    'li',
                    null,
                    '• Sperm Lifespan (3 to 5 Days): Sperm can survive inside your reproductive tract for up to 3 to 5 days, meaning sex before ovulation can still result in pregnancy once the egg is released.'
                  ),
                  h(
                    'li',
                    null,
                    '• Egg Lifespan (12 to 24 Hours): Once released, an egg only remains alive for fertilization for about 12 to 24 hours. Having sex before ovulation ensures sperm are already waiting when the egg arrives!'
                  )
                )
              ),

              // Sub-Widget 1: Most Likely Days to Get Pregnant (Least Neon — Vibrant Neon Lime-Green)
              h(
                'div',
                {
                  id: 'FertileWindowDays1',
                  className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
                },
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2 flex-wrap' },
                  h(
                    'div',
                    { className: 'flex items-start gap-2.5' },
                    h('span', {
                      className: 'w-6 h-6 rounded-md border-2 border-black shrink-0 mt-0.5',
                      style: { backgroundColor: FERTILITY_GREEN_OVERLAY_DEFINITION.rgbaFill }
                    }),
                    h(
                      'div',
                      { className: 'flex flex-col' },
                      h(
                        'label',
                        { className: 'text-sm sm:text-base font-black text-black' },
                        ct(
                          'fertilityMostLikelyDaysLabel',
                          'Most Likely Days to Get Pregnant (6-Day Sperm + Egg Window)'
                        )
                      ),
                      h(
                        'span',
                        { className: 'text-xs font-black text-[#15803D]' },
                        '★ Soft neon green highlight on calendar over your fertile days'
                      )
                    )
                  ),
                  h(
                    'span',
                    {
                      className:
                        'px-2 py-0.5 rounded-full border border-black/40 bg-[#DCFCE7] text-[11px] font-extrabold text-black'
                    },
                    `${ct('normGuesstimateTag', 'Norm Guesstimate')}: ${formatDigitsForLang(5)} ${ct(
                      'daysUnit',
                      'days'
                    )}`
                  )
                ),
                h(
                  'p',
                  { className: 'text-xs font-semibold text-black/75' },
                  ct(
                    'fertilityMostLikelyDaysDesc',
                    'Pregnancy is most likely during the 6-day window (5 days before ovulation + ovulation day itself). Sperm can live inside you for 3 to 5 days waiting for the egg!'
                  )
                ),
                renderPhaseDaysSelector(
                  fertileWindowDays,
                  (num) => {
                    setFertileWindowDays(num);
                    persistPartialOrFullSettings({ fertileWindowDays: num });
                  },
                  FERTILITY_GREEN_OVERLAY_DEFINITION.rgbaFill,
                  FERTILITY_GREEN_OVERLAY_DEFINITION.borderHex,
                  [3, 4, 5, 6, 7],
                  5
                )
              ),

              // Sub-Widget 2: Exact Ovulation Day (Most Neon & Glowing Electric Green #39FF14)
              h(
                'div',
                {
                  id: 'ExactOvulationDays1',
                  className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
                },
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2 flex-wrap' },
                  h(
                    'div',
                    { className: 'flex items-start gap-2.5' },
                    h('span', {
                      className: 'w-6 h-6 rounded-md border-2 border-black shrink-0 mt-0.5',
                      style: {
                        backgroundColor: '#39FF14',
                        boxShadow: '0 0 12px rgba(57, 255, 20, 0.95)'
                      }
                    }),
                    h(
                      'div',
                      { className: 'flex flex-col' },
                      h(
                        'label',
                        { className: 'text-sm sm:text-base font-black text-black' },
                        ct('fertilityExactOvulationLabel', 'Exact Ovulation Day (Glowing Neon Green Peak Day)')
                      ),
                      h(
                        'span',
                        { className: 'text-xs font-black text-[#15803D]' },
                        '★ Glowing electric neon green peak day when your ovary releases the egg'
                      )
                    )
                  ),
                  h(
                    'span',
                    {
                      className:
                        'px-2 py-0.5 rounded-full border border-black bg-[#39FF14]/40 text-[11px] font-extrabold text-black'
                    },
                    `${ct('normGuesstimateTag', 'Norm Guesstimate')}: ${formatDigitsForLang(1)} ${ct(
                      'dayUnit',
                      'day'
                    )}`
                  )
                ),
                h(
                  'p',
                  { className: 'text-xs font-semibold text-black/75' },
                  ct(
                    'fertilityExactOvulationDesc',
                    'Once released, an egg lives for 12 to 24 hours. Having sex on ovulation day or the 1 to 2 days right before ovulation gives the highest single-day chance of getting pregnant.'
                  )
                ),
                renderPhaseDaysSelector(
                  exactOvulationDays,
                  (num) => {
                    setExactOvulationDays(num);
                    persistPartialOrFullSettings({ exactOvulationDays: num });
                  },
                  FERTILITY_GREEN_OVERLAY_DEFINITION.peakRgbaFill,
                  FERTILITY_GREEN_OVERLAY_DEFINITION.borderHex,
                  [1, 2],
                  1
                )
              ),

              // Sub-Widget 3: Could Still Be Fertile After Ovulation (12–24h egg viability after release)
              h(
                'div',
                {
                  id: 'PostOvulationFertileDays1',
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
                      style: { backgroundColor: 'rgba(118, 255, 3, 0.34)' }
                    }),
                    h(
                      'label',
                      { className: 'text-sm sm:text-base font-black text-black' },
                      ct('fertilityPostOvulationLabel', 'Could Still Be Fertile After Ovulation')
                    )
                  ),
                  h(
                    'span',
                    {
                      className:
                        'px-2 py-0.5 rounded-full border border-black/40 bg-[#ECFDF5] text-[11px] font-extrabold text-black'
                    },
                    `${ct('normGuesstimateTag', 'Norm Guesstimate')}: ${formatDigitsForLang(1)} ${ct(
                      'dayUnit',
                      'day'
                    )}`
                  )
                ),
                h(
                  'p',
                  { className: 'text-xs font-semibold text-black/75' },
                  ct(
                    'fertilityPostOvulationDesc',
                    '1 day right after ovulation while the released egg can still be fertilized (12 to 24 hours).'
                  )
                ),
                renderPhaseDaysSelector(
                  postOvulationFertileDays,
                  (num) => {
                    setPostOvulationFertileDays(num);
                    persistPartialOrFullSettings({ postOvulationFertileDays: num });
                  },
                  'rgba(118, 255, 3, 0.38)',
                  FERTILITY_GREEN_OVERLAY_DEFINITION.borderHex,
                  [0, 1, 2, 3],
                  1
                )
              ),

              // Sub-Widget 4: Show "Unlikely to Get Pregnant" (Infertile) days on the Fertility Wheel
              h(
                'label',
                {
                  className:
                    'p-3.5 rounded-2xl border-2 border-black bg-white flex items-center justify-between gap-3 cursor-pointer'
                },
                h(
                  'span',
                  { className: 'text-xs sm:text-sm font-extrabold text-black' },
                  ct(
                    'fertilityShowInfertileLabel',
                    'Show "Unlikely to Get Pregnant" days on the Fertility Wheel'
                  )
                ),
                h('input', {
                  type: 'checkbox',
                  checked: showInfertileDaysOnWheel,
                  onChange: (e) => {
                    const checked = e.target.checked;
                    setShowInfertileDaysOnWheel(checked);
                    persistPartialOrFullSettings({ showInfertileDaysOnWheel: checked });
                  },
                  className: 'w-5 h-5 accent-[#16A34A] cursor-pointer'
                })
              )
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
            ct('repeatsToggleLabel', 'Repeat & predict tentative cycle phases across future months')
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
