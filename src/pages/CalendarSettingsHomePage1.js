import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=186';
import { isRtlLanguage } from '../data/translations.js?v=186';
import {
  CYCLE_PHASE_DEFINITIONS,
  createBlankCycleCalendarState,
  getCycleCalText,
  loadUserCycleCalendarState,
  saveUserCycleCalendarState,
  renderGearHeartIcon
} from '../data/cycleCalendarData.js?v=186';

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
  const [periodDays, setPeriodDays] = useState(Number(initial.PeriodDaysDuration1) || 5);
  const [follicularDays, setFollicularDays] = useState(Number(initial.FollicularPhaseDuration1) || 5);
  const [ovulatoryDays, setOvulatoryDays] = useState(Number(initial.OvulatoryPhaseDuration1) || 4);
  const [lutealDays, setLutealDays] = useState(Number(initial.LutealPhaseDuration1) || 6);
  const [repeatsOverAndOver, setRepeatsOverAndOver] = useState(
    initial.repeatsOverAndOver !== false
  );

  const isCurrentlyBlank = !initial.hasEnteredCycleData || !initial.FirstDayOfPeriod1;

  const handleSave = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    // If user didn't pick a date yet in the input before hitting Save, default to the 1st of the current month so they can see their settings immediately, or keep blank if they cleared it
    const now = new Date();
    const fallbackDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate()
    ).padStart(2, '0')}`;
    const chosenFirstDay = firstDay || fallbackDate;

    const nextState = {
      ...initial,
      hasEnteredCycleData: true,
      calendarPasswordEnabled: Boolean(passwordEnabled),
      calendarPassword: passwordEnabled ? String(calendarPassword || '') : '',
      FirstDayOfPeriod1: chosenFirstDay,
      PeriodDaysDuration1: Math.max(1, Math.min(7, Number(periodDays) || 5)),
      FollicularPhaseDuration1: Math.max(1, Math.min(7, Number(follicularDays) || 5)),
      OvulatoryPhaseDuration1: Math.max(1, Math.min(7, Number(ovulatoryDays) || 4)),
      LutealPhaseDuration1: Math.max(1, Math.min(7, Number(lutealDays) || 6)),
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
    setPeriodDays(5);
    setFollicularDays(5);
    setOvulatoryDays(4);
    setLutealDays(6);
    setRepeatsOverAndOver(true);
    saveUserCycleCalendarState(UserNameChoiceInsert1, blankState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(blankState);
    }
    if (typeof onBack === 'function') {
      onBack();
    }
  };

  const renderOneToSevenSelector = (currentValue, onSelect, rgbaColor, borderColor) =>
    h(
      'div',
      { className: 'flex flex-wrap items-center gap-2 mt-2' },
      [1, 2, 3, 4, 5, 6, 7].map((num) => {
        const active = Number(currentValue) === num;
        return h(
          'button',
          {
            key: `day-opt-${num}`,
            type: 'button',
            onClick: () => onSelect(num),
            className:
              'w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center cursor-pointer transition-transform active:scale-95',
            style: {
              backgroundColor: active ? rgbaColor : '#FFFFFF',
              border: active ? '2.5px solid #000000' : `1.5px solid ${borderColor}`,
              color: '#000000',
              boxShadow: active ? '0 2px 6px rgba(0,0,0,0.16)' : 'none'
            }
          },
          formatDigitsForLang(num)
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
                  onClick: () => setPasswordEnabled((prev) => !prev)
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
                onClick: () => setPasswordEnabled((prev) => !prev),
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
                onChange: (e) => setCalendarPassword(e.target.value),
                placeholder: ct(
                  'passwordInputPlaceholder',
                  'Enter a password for your calendar...'
                ),
                className:
                  'w-full px-4 py-2.5 rounded-xl border-2 border-black bg-white text-black font-bold text-sm outline-none focus:ring-2 focus:ring-[#34C759]'
              })
            )
        ),

        // 1. FirstDayOfPeriod1 (Bright Red boxed day)
        h(
          'div',
          {
            id: 'FirstDayOfPeriod1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-2'
          },
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 flex-wrap' },
            h(
              'div',
              { className: 'flex items-center gap-2.5' },
              h('span', {
                className: 'w-6 h-6 rounded-md border-2 border-black shrink-0',
                style: { backgroundColor: CYCLE_PHASE_DEFINITIONS[0].rgbaFill }
              }),
              h(
                'label',
                { className: 'text-sm sm:text-base font-black text-black' },
                ct('firstDayLabel', 'First Day of Period (Reported by User)')
              )
            ),
            h('input', {
              type: 'date',
              value: firstDay,
              onChange: (e) => setFirstDay(e.target.value),
              className:
                'px-3 py-1.5 rounded-xl border-2 border-black bg-white text-black font-extrabold text-sm cursor-pointer'
            })
          ),
          h(
            'p',
            { className: 'text-xs font-semibold text-black/75' },
            ct('firstDayDesc', 'Bright red boxed day marking Day 1 of your menstrual bleeding.')
          )
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
          renderOneToSevenSelector(
            periodDays,
            setPeriodDays,
            CYCLE_PHASE_DEFINITIONS[1].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[1].borderHex
          )
        ),

        // 3. FollicularPhaseDuration1 (1–7 Days Customizable — Orange)
        h(
          'div',
          {
            id: 'FollicularPhaseDuration1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
          },
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
              ct('follicularLabel', 'Follicular Phase (1–7 Days Customizable)')
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
          renderOneToSevenSelector(
            follicularDays,
            setFollicularDays,
            CYCLE_PHASE_DEFINITIONS[2].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[2].borderHex
          )
        ),

        // 4. OvulatoryPhaseDuration1 (1–7 Days Customizable — Pinkish-Red)
        h(
          'div',
          {
            id: 'OvulatoryPhaseDuration1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
          },
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
              ct('ovulatoryLabel', 'Ovulatory Phase (1–7 Days Customizable)')
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
          renderOneToSevenSelector(
            ovulatoryDays,
            setOvulatoryDays,
            CYCLE_PHASE_DEFINITIONS[3].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[3].borderHex
          )
        ),

        // 5. LutealPhaseDuration1 (1–7 Days Customizable — Darkest Pink)
        h(
          'div',
          {
            id: 'LutealPhaseDuration1',
            className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5'
          },
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
              ct('lutealLabel', 'Luteal Phase (1–7 Days Customizable)')
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
          renderOneToSevenSelector(
            lutealDays,
            setLutealDays,
            CYCLE_PHASE_DEFINITIONS[4].rgbaFill,
            CYCLE_PHASE_DEFINITIONS[4].borderHex
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
            onChange: (e) => setRepeatsOverAndOver(e.target.checked),
            className: 'w-5 h-5 accent-[#CF366C] cursor-pointer'
          })
        ),

        // Action Buttons: Save to My Calendar OR Reset to Blank Calendar
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
              type: 'button',
              onClick: handleResetToBlank,
              className:
                'py-3.5 px-5 rounded-2xl border-2 border-black bg-white hover:bg-black/5 text-black font-extrabold text-xs sm:text-sm cursor-pointer'
            },
            ct('clearToBlankBtn', 'Reset to Blank Calendar (No Info Entered Yet)')
          )
        )
      )
    )
  );
}

export const CalenderSettingsHomePage1 = CalendarSettingsHomePage1;
export default CalendarSettingsHomePage1;
