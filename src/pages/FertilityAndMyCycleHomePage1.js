import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=283';
import { CycleCalendarWidget1 } from './MyCycleSubHomePage.js?v=283';
import { isRtlLanguage } from '../data/translations.js?v=283';
import {
  CYCLE_PHASE_DEFINITIONS,
  FERTILITY_GREEN_OVERLAY_DEFINITION,
  computeAdaptiveCyclePrediction,
  getCycleCalText,
  loadUserCycleCalendarState,
  saveUserCycleCalendarState
} from '../data/cycleCalendarData.js?v=283';

const h = React.createElement;

// Build SVG Donut arcs for the Interactive 4-Phase Cycle & Fertility Wheel
function buildArcPath(cx, cy, rOuter, rInner, startAngleDeg, endAngleDeg) {
  const safeEnd = Math.max(startAngleDeg + 0.5, Math.min(359.99, endAngleDeg));
  const toRad = (deg) => ((deg - 90) * Math.PI) / 180;
  const x1Out = cx + rOuter * Math.cos(toRad(startAngleDeg));
  const y1Out = cy + rOuter * Math.sin(toRad(startAngleDeg));
  const x2Out = cx + rOuter * Math.cos(toRad(safeEnd));
  const y2Out = cy + rOuter * Math.sin(toRad(safeEnd));

  const x1In = cx + rInner * Math.cos(toRad(safeEnd));
  const y1In = cy + rInner * Math.sin(toRad(safeEnd));
  const x2In = cx + rInner * Math.cos(toRad(startAngleDeg));
  const y2In = cy + rInner * Math.sin(toRad(startAngleDeg));

  const largeArc = safeEnd - startAngleDeg > 180 ? 1 : 0;

  return [
    `M ${x1Out.toFixed(2)} ${y1Out.toFixed(2)}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2Out.toFixed(2)} ${y2Out.toFixed(2)}`,
    `L ${x1In.toFixed(2)} ${y1In.toFixed(2)}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${x2In.toFixed(2)} ${y2In.toFixed(2)}`,
    'Z'
  ].join(' ');
}

// ============================================================================
// InteractiveCycleFertilityWheel1 — Shared, Two-Way Synchronized 4-Phase
// Cycle & Fertility Wheel used in:
//   1. FertilityAndMyCycleHomePage1 (Full page wheel)
//   2. CalendarKeyAndFilters1 bottom mini-wheel (when "Trying to Get Pregnant" is checked)
//   3. Expanded floating wheel widget covering part of InteractiveCalendarHomePage1
// Any click or adjustment on any wheel updates `cycleCalendarState` so all
// wheels across the entire app stay 100% synchronized!
// ============================================================================
export function InteractiveCycleFertilityWheel1({
  UserNameChoiceInsert1 = 'User',
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  formatDigitsForLang = (v) => String(v),
  cycleCalendarState = null,
  onUpdateCycleCalendarState = null,
  compactKeyPreview = false,
  onRequestExpandFromKey = null,
  onCloseExpandedModal = null,
  showInteractiveControls = true
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };
  const ct = getCycleCalText(lang, UserLanguageChoice1);

  const activeState = cycleCalendarState || loadUserCycleCalendarState(UserNameChoiceInsert1);
  const hasColors = Boolean(
    activeState && activeState.hasEnteredCycleData && activeState.FirstDayOfPeriod1
  );

  const periodLen = Math.max(1, Math.min(10, Number(activeState.PeriodDaysDuration1) || 5));
  const follicularLen = Math.max(1, Math.min(21, Number(activeState.FollicularPhaseDuration1) || 8));
  const ovulatoryLen = Math.max(1, Math.min(10, Number(activeState.OvulatoryPhaseDuration1) || 3));
  const lutealLen = Math.max(1, Math.min(21, Number(activeState.LutealPhaseDuration1) || 12));
  const totalCycleLen = periodLen + follicularLen + ovulatoryLen + lutealLen;

  const pStart = 1;
  const pEnd = periodLen;
  const fStart = pEnd + 1;
  const fEnd = pEnd + follicularLen;
  const oStart = fEnd + 1;
  const oEnd = fEnd + ovulatoryLen;
  const lStart = oEnd + 1;
  const lEnd = totalCycleLen;

  // Fertility window day numbers (1-indexed within cycle)
  const fertileLeadDays = Math.max(1, Math.min(7, Number(activeState.FertileWindowDays1) || 5));
  const exactOvDays = Math.max(1, Math.min(2, Number(activeState.ExactOvulationDays1) || 1));
  const postOvDays = Math.max(0, Math.min(3, Number(activeState.PostOvulationFertileDays1) ?? 1));

  const peakOvDayEnd = oEnd;
  const peakOvDayStart = Math.max(oStart, peakOvDayEnd - exactOvDays + 1);
  const fertileWindowDayStart = Math.max(pEnd + 1, peakOvDayEnd - fertileLeadDays + 1);
  const fertileWindowDayEnd = Math.min(lEnd, peakOvDayEnd + postOvDays);

  // Determine today's cycle day
  const now = new Date();
  let currentDayInCycle = 1;
  let currentPhaseKey = 'PeriodDaysDuration1';
  if (hasColors) {
    const parts = String(activeState.FirstDayOfPeriod1).split('-').map(Number);
    if (parts.length === 3 && parts[0] && parts[1] && parts[2]) {
      const startUtc = Date.UTC(parts[0], parts[1] - 1, parts[2]);
      const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
      const diffDays = Math.round((todayUtc - startUtc) / 86400000);
      if (diffDays >= 0) {
        const zeroIdx = diffDays % totalCycleLen;
        currentDayInCycle = zeroIdx + 1;
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

  const syncedPhaseId = activeState.selectedWheelPhaseId || currentPhaseKey;
  const syncedDayNumber = activeState.selectedWheelDayNumber || null;

  const syncWheelStateChange = (patch) => {
    const nextState = {
      ...activeState,
      ...patch
    };
    saveUserCycleCalendarState(UserNameChoiceInsert1, nextState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(nextState);
    }
  };

  const phaseMetaList = [
    {
      id: 'PeriodDaysDuration1',
      title: tr('fertilityPhaseMenstrualTitle', 'Menstrual Phase'),
      shortWheelLabel: tr('wheelPeriodShort', 'Period'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(pStart)}–${formatDigitsForLang(pEnd)}`,
      shortSub: tr('fertilityPhaseMenstrualSub', 'Period bleeding (Unlikely to get pregnant)'),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[1].rgbaFill
    },
    {
      id: 'FollicularPhaseDuration1',
      title: tr('fertilityPhaseFollicularTitle', 'Follicular Phase'),
      shortWheelLabel: tr('wheelFollicularShort', 'Follicular'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(fStart)}–${formatDigitsForLang(fEnd)}`,
      shortSub: tr('fertilityPhaseFollicularSub', 'Getting a new egg ready'),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[2].rgbaFill
    },
    {
      id: 'OvulatoryPhaseDuration1',
      title: tr('fertilityPhaseOvulatoryTitle', 'Ovulatory Phase'),
      shortWheelLabel: tr('wheelOvulatoryShort', 'Fertile / Ovulation'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(oStart)}–${formatDigitsForLang(oEnd)}`,
      shortSub: tr('ovulatoryStarredSub', '★ Easiest time to get pregnant'),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[3].rgbaFill
    },
    {
      id: 'LutealPhaseDuration1',
      title: tr('fertilityPhaseLutealTitle', 'Luteal Phase'),
      shortWheelLabel: tr('wheelLutealShort', 'Luteal'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(lStart)}–${formatDigitsForLang(lEnd)}`,
      shortSub: tr('fertilityPhaseLutealSub', 'Womb lining thickens before next period'),
      rgbaFill: CYCLE_PHASE_DEFINITIONS[4].rgbaFill
    }
  ];

  const activePhaseMeta =
    phaseMetaList.find((p) => p.id === syncedPhaseId) || phaseMetaList[0];

  const pDeg = (periodLen / totalCycleLen) * 360;
  const fDeg = (follicularLen / totalCycleLen) * 360;
  const oDeg = (ovulatoryLen / totalCycleLen) * 360;

  const wheelSegments = [
    { ...phaseMetaList[0], startAngle: 0, endAngle: pDeg },
    { ...phaseMetaList[1], startAngle: pDeg, endAngle: pDeg + fDeg },
    { ...phaseMetaList[2], startAngle: pDeg + fDeg, endAngle: pDeg + fDeg + oDeg },
    { ...phaseMetaList[3], startAngle: pDeg + fDeg + oDeg, endAngle: 360 }
  ];

  // Build individual day beads (1..totalCycleLen) around the outer ring of the wheel
  // matching the uploaded "Days of Average Menstrual Cycle" & "fertility tracking diagram"
  const dayBeads = [];
  for (let d = 1; d <= totalCycleLen; d++) {
    const angleDeg = ((d - 0.5) / totalCycleLen) * 360;
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    const beadR = 176;
    const bx = 200 + beadR * Math.cos(rad);
    const by = 200 + beadR * Math.sin(rad);

    let phaseIdForDay = 'LutealPhaseDuration1';
    if (d <= pEnd) phaseIdForDay = 'PeriodDaysDuration1';
    else if (d <= fEnd) phaseIdForDay = 'FollicularPhaseDuration1';
    else if (d <= oEnd) phaseIdForDay = 'OvulatoryPhaseDuration1';

    const isPeakOv = d >= peakOvDayStart && d <= peakOvDayEnd;
    const isHighPreOv = !isPeakOv && d >= Math.max(pEnd + 1, peakOvDayStart - 2) && d < peakOvDayStart;
    const isFertileGreen = d >= fertileWindowDayStart && d <= fertileWindowDayEnd;
    const isPostOv = d > peakOvDayEnd && d <= fertileWindowDayEnd;

    let beadFill = '#E5E7EB';
    let beadTextHex = '#111111';
    let dayNote = tr('wheelDayUnlikelyNote', 'Pregnancy unlikely on this day.');

    if (d <= pEnd) {
      beadFill = '#F87171';
      beadTextHex = '#000000';
      dayNote =
        d === 1
          ? tr('wheelDay1Note', 'Day 1: First day of menstrual bleeding.')
          : tr('wheelPeriodDayNote', 'Menstruation (period bleeding).');
    } else if (isPeakOv) {
      // Most Neon & Glowing Electric Green for Exact Ovulation Day
      beadFill = '#39FF14';
      beadTextHex = '#000000';
      dayNote = tr(
        'wheelPeakOvulationNote',
        '★ Exact Ovulation Day! Your ovary releases the egg (which lives 12 to 24 hours). Having sex today or 1 to 2 days before gives the highest single-day chance of getting pregnant!'
      );
    } else if (isHighPreOv) {
      // Medium-Bright Neon Green for 1-2 days right before ovulation
      beadFill = '#00FF66';
      beadTextHex = '#000000';
      dayNote = tr(
        'wheelHighPreOvulationNote',
        '★ 1 to 2 days right before ovulation! Along with ovulation day, having sex on these days gives the highest single-day chance of getting pregnant because sperm are ready when the egg arrives.'
      );
    } else if (isPostOv) {
      // Least neon (still bright neon lime-green) for 1 day after ovulation
      beadFill = '#7CFF5B';
      beadTextHex = '#000000';
      dayNote = tr(
        'wheelPostOvulationNote',
        '★ Could still be fertile right after ovulation while the egg remains viable (about 12 to 24 hours after release).'
      );
    } else if (isFertileGreen) {
      // Least neon (still bright neon lime-green) for the 6-day fertile window
      beadFill = '#7CFF5B';
      beadTextHex = '#000000';
      dayNote = tr(
        'wheelMostFertileDaysNote',
        '★ Most likely fertile window (6-day window: 5 days before ovulation + ovulation day)! Sperm can survive in your reproductive tract for 3 to 5 days waiting for the egg.'
      );
    } else if (activeState.showInfertileDaysOnWheel !== false) {
      beadFill = '#DCFCE7';
      beadTextHex = '#065F46';
      dayNote = tr('wheelInfertileDayNote', 'Unlikely to get pregnant (Infertile phase of cycle).');
    }

    dayBeads.push({
      dayNum: d,
      bx,
      by,
      phaseIdForDay,
      isPeakOv,
      isFertileGreen,
      beadFill,
      beadTextHex,
      dayNote
    });
  }

  const selectedDayObj = syncedDayNumber
    ? dayBeads.find((b) => b.dayNum === Number(syncedDayNumber))
    : null;

  // Compact preview rendered at the bottom of the Calendar Key sidebar
  if (compactKeyPreview) {
    return h(
      'div',
      {
        id: 'CalendarKeyMiniFertilityWheel1',
        onClick: () => {
          if (typeof onRequestExpandFromKey === 'function') {
            onRequestExpandFromKey();
          }
        },
        className:
          'mt-2 p-2 rounded-2xl border-2 border-black bg-[#F0FDF4] hover:bg-[#DCFCE7] cursor-pointer transition-transform active:scale-95 flex flex-col items-center gap-1 shadow-sm'
      },
      h(
        'div',
        { className: 'w-full flex items-center justify-between gap-1' },
        h(
          'span',
          { className: 'text-[9.5px] font-black text-[#065F46] leading-tight truncate' },
          '★ Fertility Wheel'
        ),
        h(
          'span',
          {
            className:
              'px-1.5 py-0.5 rounded-md border border-black bg-white text-[8.5px] font-black text-black shrink-0'
          },
          'Expand ⤢'
        )
      ),
      h(
        'svg',
        {
          viewBox: '0 0 400 400',
          className: 'w-24 h-24 overflow-visible'
        },
        wheelSegments.map((seg) =>
          h('path', {
            key: `mini-seg-${seg.id}`,
            d: buildArcPath(200, 200, 152, 86, seg.startAngle, seg.endAngle),
            fill: seg.rgbaFill,
            stroke: '#000000',
            strokeWidth: syncedPhaseId === seg.id ? '4' : '2.2'
          })
        ),
        // Green fertility highlight arc on the outer edge of the mini wheel
        h('path', {
          d: buildArcPath(
            200,
            200,
            174,
            155,
            ((fertileWindowDayStart - 1) / totalCycleLen) * 360,
            (fertileWindowDayEnd / totalCycleLen) * 360
          ),
          fill: FERTILITY_GREEN_OVERLAY_DEFINITION.peakRgbaFill,
          stroke: '#047857',
          strokeWidth: '2.5'
        }),
        h('circle', {
          cx: 200,
          cy: 200,
          r: 84,
          fill: '#FFFFFF',
          stroke: '#000000',
          strokeWidth: '2.5'
        }),
        h(
          'text',
          {
            x: 200,
            y: 192,
            textAnchor: 'middle',
            fill: '#9F133A',
            fontSize: '26',
            fontWeight: '900'
          },
          selectedDayObj
            ? `D${formatDigitsForLang(selectedDayObj.dayNum)}`
            : `${formatDigitsForLang(totalCycleLen)}d`
        ),
        h(
          'text',
          {
            x: 200,
            y: 220,
            textAnchor: 'middle',
            fill: '#065F46',
            fontSize: '18',
            fontWeight: '900'
          },
          activePhaseMeta.shortWheelLabel
        )
      ),
      h(
        'div',
        { className: 'text-[8.5px] font-extrabold text-black/80 text-center leading-tight' },
        'Tap to open & adjust on calendar'
      )
    );
  }

  // Full / Expanded Interactive Wheel Widget
  return h(
    'div',
    {
      id: 'Interactive4PhaseCycleWheel1',
      className: 'w-full flex flex-col items-stretch'
    },
    // Top overhanging rounded pill bar
    h(
      'div',
      {
        className:
          'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-between gap-2',
        style: { marginBottom: '-8px' }
      },
      h(
        'span',
        { className: 'text-xs sm:text-base font-extrabold text-black leading-tight mx-auto' },
        tr('interactiveWheelHeader', 'Interactive 4-Phase Cycle & Fertility Wheel')
      ),
      typeof onCloseExpandedModal === 'function' &&
        h(
          'button',
          {
            type: 'button',
            onClick: onCloseExpandedModal,
            className:
              'px-2.5 py-0.5 rounded-lg border-2 border-black bg-[#FFF0F6] hover:bg-black/10 text-xs font-black text-black cursor-pointer shrink-0'
          },
          '✕ Close'
        )
    ),
    // Main rounded box body containing the interactive SVG wheel + synced controls
    h(
      'div',
      {
        className:
          'w-full rounded-[32px] border-[2.5px] border-black bg-white pt-6 pb-5 px-4 shadow-md flex flex-col items-center justify-center gap-3'
      },
      h(
        'svg',
        {
          viewBox: '0 0 400 400',
          className: 'w-full max-w-[365px] h-auto overflow-visible'
        },
        // 4 Main Phase Donut Arcs
        wheelSegments.map((seg) => {
          const isSelected = syncedPhaseId === seg.id;
          const isCurrent = hasColors && currentPhaseKey === seg.id;
          const midAngle = (seg.startAngle + seg.endAngle) / 2;
          const midRad = ((midAngle - 90) * Math.PI) / 180;
          const labelR = 124;
          const lx = 200 + labelR * Math.cos(midRad);
          const ly = 200 + labelR * Math.sin(midRad);

          return h(
            'g',
            {
              key: seg.id,
              onClick: () =>
                syncWheelStateChange({
                  selectedWheelPhaseId: seg.id,
                  selectedWheelDayNumber: null
                }),
              className: 'cursor-pointer transition-transform duration-150',
              style: {
                transformOrigin: '200px 200px',
                transform: isSelected ? 'scale(1.02)' : 'scale(1)'
              }
            },
            h('path', {
              d: buildArcPath(200, 200, 156, 88, seg.startAngle, seg.endAngle),
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
                fontSize: '11',
                fontWeight: '900'
              },
              isCurrent ? `${seg.shortWheelLabel} ★` : seg.shortWheelLabel
            )
          );
        }),

        // Outer ring of clickable Cycle Day Beads (1..totalCycleLen) matching the uploaded fertility tracking diagrams!
        dayBeads.map((b) => {
          const isDaySelected = Number(syncedDayNumber) === b.dayNum;
          const isTodayBead = hasColors && currentDayInCycle === b.dayNum;
          return h(
            'g',
            {
              key: `wheel-bead-${b.dayNum}`,
              onClick: (e) => {
                e.stopPropagation();
                syncWheelStateChange({
                  selectedWheelPhaseId: b.phaseIdForDay,
                  selectedWheelDayNumber: b.dayNum
                });
              },
              className: 'cursor-pointer'
            },
            h('circle', {
              cx: b.bx,
              cy: b.by,
              r: isDaySelected ? 13.5 : isTodayBead ? 12.5 : 11,
              fill: b.beadFill,
              stroke: isDaySelected || isTodayBead ? '#000000' : 'rgba(0,0,0,0.65)',
              strokeWidth: isDaySelected ? '2.8' : isTodayBead ? '2.4' : '1.4'
            }),
            h(
              'text',
              {
                x: b.bx,
                y: b.by + 0.5,
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                fill: b.beadTextHex,
                fontSize: totalCycleLen > 32 ? '8' : '9',
                fontWeight: '900'
              },
              formatDigitsForLang(b.dayNum)
            )
          );
        }),

        // Inner White Hub Circle
        h('circle', {
          cx: 200,
          cy: 200,
          r: 87,
          fill: '#FFFFFF',
          stroke: '#000000',
          strokeWidth: '2.5'
        }),
        // Center Hub Text
        h(
          'text',
          {
            x: 200,
            y: 168,
            textAnchor: 'middle',
            fill: '#9F133A',
            fontSize: '18',
            fontWeight: '900'
          },
          selectedDayObj
            ? `${tr('dayUpperLabel', 'DAY')} ${formatDigitsForLang(selectedDayObj.dayNum)}`
            : hasColors
            ? `${tr('dayUpperLabel', 'DAY')} ${formatDigitsForLang(currentDayInCycle)}`
            : tr('tapAnyPhaseUpper', '4 PHASES')
        ),
        h(
          'text',
          {
            x: 200,
            y: 191,
            textAnchor: 'middle',
            fill: '#000000',
            fontSize: '13',
            fontWeight: '900'
          },
          activePhaseMeta.title
        ),
        h(
          'text',
          {
            x: 200,
            y: 210,
            textAnchor: 'middle',
            fill: '#9F133A',
            fontSize: '10.5',
            fontWeight: '800'
          },
          activePhaseMeta.daysRange
        ),
        h(
          'text',
          {
            x: 200,
            y: 228,
            textAnchor: 'middle',
            fill: activePhaseMeta.id === 'OvulatoryPhaseDuration1' ? '#047857' : '#333333',
            fontSize: '9',
            fontWeight: '800'
          },
          activePhaseMeta.id === 'OvulatoryPhaseDuration1'
            ? '★ Easiest time to get pregnant'
            : activePhaseMeta.shortSub
        )
      ),

      // Selected Day / Fertile Window Quick Legend Bar (Synced across all wheels)
      selectedDayObj &&
        h(
          'div',
          {
            className:
              'w-full p-3 rounded-2xl border-2 border-black bg-[#F0FDF4] text-xs font-bold text-black flex items-center justify-between gap-2'
          },
          h(
            'div',
            { className: 'space-y-0.5' },
            h(
              'div',
              { className: 'font-black text-[#065F46]' },
              `${tr('dayLabel', 'Day')} ${formatDigitsForLang(selectedDayObj.dayNum)} • ${
                activePhaseMeta.title
              }`
            ),
            h('div', { className: 'text-black/85' }, selectedDayObj.dayNote)
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: () => syncWheelStateChange({ selectedWheelDayNumber: null }),
              className:
                'px-2 py-1 rounded-lg border border-black bg-white text-[10px] font-black cursor-pointer shrink-0'
            },
            'Show All'
          )
        ),

      // Interactive Quick Adjuster on the Wheel (changes sync across all wheels + calendar!)
      showInteractiveControls &&
        h(
          'div',
          {
            className:
              'w-full p-3 rounded-2xl border-2 border-black bg-[#FFF9FC] flex flex-wrap items-center justify-between gap-2'
          },
          h(
            'div',
            { className: 'text-[11px] font-black text-black' },
            `★ Most Fertile Window: ${tr('daysLabel', 'Days')} ${formatDigitsForLang(
              fertileWindowDayStart
            )}–${formatDigitsForLang(fertileWindowDayEnd)} (${ct(
              'ovulatoryStarredSub',
              '★ Easiest time to get pregnant'
            )})`
          ),
          h(
            'div',
            { className: 'flex items-center gap-1.5' },
            h(
              'span',
              { className: 'text-[10.5px] font-extrabold text-black/75' },
              `${activePhaseMeta.shortWheelLabel} ${ct('daysUnit', 'days')}:`
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => {
                  const curr = Number(activeState[activePhaseMeta.id]) || 5;
                  const nextVal = Math.max(1, curr - 1);
                  syncWheelStateChange({
                    autoBaselinePhases: false,
                    [activePhaseMeta.id]: nextVal
                  });
                },
                className:
                  'w-6 h-6 rounded-lg border-2 border-black bg-white hover:bg-black/5 font-black text-xs flex items-center justify-center cursor-pointer'
              },
              '−'
            ),
            h(
              'span',
              { className: 'text-xs font-black px-1' },
              formatDigitsForLang(Number(activeState[activePhaseMeta.id]) || 5)
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => {
                  const curr = Number(activeState[activePhaseMeta.id]) || 5;
                  const nextVal = Math.min(20, curr + 1);
                  syncWheelStateChange({
                    autoBaselinePhases: false,
                    [activePhaseMeta.id]: nextVal
                  });
                },
                className:
                  'w-6 h-6 rounded-lg border-2 border-black bg-white hover:bg-black/5 font-black text-xs flex items-center justify-center cursor-pointer'
              },
              '+'
            )
          )
        ),

      h(
        'p',
        { className: 'text-xs font-extrabold text-black/70 text-center' },
        tr(
          'wheelTapInstruction',
          'Tap any numbered day bead or phase slice on the wheel! Changes sync across your Calendar Key and Fertility Wheel.'
        )
      )
    )
  );
}

export default function FertilityAndMyCycleHomePage1({
  onBack,
  onNavigateEducationPage = null,
  UserNameChoiceInsert1 = 'User',
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  formatDigitsForLang = (v) => String(v),
  cycleCalendarState = null,
  onUpdateCycleCalendarState = null
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

  const displayedPhaseId = activeState.selectedWheelPhaseId || currentPhaseKey;

  const handleSelectPhaseCard = (phaseId) => {
    const nextState = {
      ...activeState,
      selectedWheelPhaseId: phaseId,
      selectedWheelDayNumber: null
    };
    saveUserCycleCalendarState(UserNameChoiceInsert1, nextState);
    if (typeof onUpdateCycleCalendarState === 'function') {
      onUpdateCycleCalendarState(nextState);
    }
  };

  const pStart = 1;
  const pEnd = periodLen;
  const fStart = pEnd + 1;
  const fEnd = pEnd + follicularLen;
  const oStart = fEnd + 1;
  const oEnd = fEnd + ovulatoryLen;
  const lStart = oEnd + 1;
  const lEnd = totalCycleLen;

  const prediction = computeAdaptiveCyclePrediction(
    activeState.periodHistoryDates,
    activeState.FirstDayOfPeriod1,
    periodLen
  );

  const phaseCardsData = [
    {
      id: 'PeriodDaysDuration1',
      title: tr('fertilityPhaseMenstrualTitle', 'Menstrual Phase'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(pStart)}–${formatDigitsForLang(pEnd)}`,
      shortSub: tr('fertilityPhaseMenstrualSub', 'Period bleeding'),
      hormoneHeadline: tr('fertilityHormoneMenstrual', 'Your Body Starts a Fresh Cycle'),
      fertilityStatus: tr('fertilityStatusMenstrual', 'Lowest chance of getting pregnant'),
      colorHex: CYCLE_PHASE_DEFINITIONS[1].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[1].rgbaFill,
      guideTitle: tr(
        'fertilityGuideMenstrualTitle',
        'What Is Happening in My Body: Menstrual Phase (Your Period)'
      ),
      bullets: [
        tr(
          'fertilityGuideMenstrualB1',
          'What Your Body Is Doing: Because there was no pregnancy last month, your womb (uterus) lets go of its soft inner lining. That lining comes out through your vagina as period blood.'
        ),
        tr(
          'fertilityGuideMenstrualB2',
          'Can I Get Pregnant Right Now?: This is the time you are least likely to get pregnant. (Only women with very short cycles under 21 days can sometimes get pregnant right at the end of their period.)'
        ),
        tr(
          'fertilityGuideMenstrualB3',
          'How You May Feel & Care for Yourself: You might feel belly cramps, a sore lower back, or low energy. Drink warm water or tea, rest when you can, and eat foods with iron like beans, dark green leaves, lentils, or eggs.'
        )
      ]
    },
    {
      id: 'FollicularPhaseDuration1',
      title: tr('fertilityPhaseFollicularTitle', 'Follicular Phase'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(fStart)}–${formatDigitsForLang(fEnd)}`,
      shortSub: tr('fertilityPhaseFollicularSub', 'Getting a new egg ready'),
      hormoneHeadline: tr('fertilityHormoneFollicular', 'New Egg Growing • Energy Rising'),
      fertilityStatus: tr('fertilityStatusFollicular', 'Chance of getting pregnant goes up near the end of this phase'),
      colorHex: CYCLE_PHASE_DEFINITIONS[2].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[2].rgbaFill,
      guideTitle: tr(
        'fertilityGuideFollicularTitle',
        'What Is Happening in My Body: Follicular Phase'
      ),
      bullets: [
        tr(
          'fertilityGuideFollicularB1',
          'What Your Body Is Doing: Right after your period stops, your ovaries start growing a tiny new egg inside a small sac, and your womb starts building a fresh soft lining again.'
        ),
        tr(
          'fertilityGuideFollicularB2',
          'Can I Get Pregnant Right Now?: In the first few days after your period, your underwear feels dry and pregnancy is less likely. By the last 2 or 3 days of this phase, you may see creamy or wet fluid, and because sperm from sex can stay alive inside you for up to 5 days waiting for the egg, you CAN get pregnant toward the end of this phase!'
        ),
        tr(
          'fertilityGuideFollicularB3',
          'How You May Feel: Most women feel lighter, happier, clearer-headed, and have much more energy during these days.'
        )
      ]
    },
    {
      id: 'OvulatoryPhaseDuration1',
      title: tr('fertilityPhaseOvulatoryTitle', 'Ovulatory Phase'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(oStart)}–${formatDigitsForLang(oEnd)}`,
      shortSub: tr('ovulatoryStarredSub', '★ Easiest time to get pregnant'),
      hormoneHeadline: tr('fertilityHormoneOvulatory', 'Egg Released • Peak Fertile Days'),
      fertilityStatus: tr('fertilityStatusOvulatory', '★ Easiest time to get pregnant right now!'),
      colorHex: CYCLE_PHASE_DEFINITIONS[3].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[3].rgbaFill,
      guideTitle: tr(
        'fertilityGuideOvulatoryTitle',
        'What Is Happening in My Body: Ovulatory Phase (★ Easiest Time to Get Pregnant)'
      ),
      bullets: [
        tr(
          'fertilityGuideOvulatoryB1',
          'Highest Single-Day Chance: Having sex on the day of ovulation, as well as the 1 to 2 days right before ovulation, gives you the highest single-day chance of getting pregnant.'
        ),
        tr(
          'fertilityGuideOvulatoryB2',
          'Why Timing Matters (The 6-Day Fertile Window): Pregnancy is most likely during the 6-day window that includes the 5 days before ovulation and the day of ovulation itself.'
        ),
        tr(
          'fertilityGuideOvulatoryB3',
          'Sperm Lifespan (3 to 5 Days) vs. Egg Lifespan (12 to 24 Hours): Sperm can survive in your reproductive tract for up to 3 to 5 days, while a released egg only remains viable for fertilization for about 12 to 24 hours. Having sex before ovulation ensures sperm are already waiting when the egg arrives!'
        ),
        tr(
          'fertilityGuideOvulatoryB4',
          'How You May Feel: Your body makes clear, slippery fluid (like raw egg white) to help sperm swim. You may feel high energy, extra confident, and more interested in sex.'
        )
      ]
    },
    {
      id: 'LutealPhaseDuration1',
      title: tr('fertilityPhaseLutealTitle', 'Luteal Phase'),
      daysRange: `${tr('daysLabel', 'Days')} ${formatDigitsForLang(lStart)}–${formatDigitsForLang(lEnd)}`,
      shortSub: tr('fertilityPhaseLutealSub', 'Womb lining thickens before next period'),
      hormoneHeadline: tr('fertilityHormoneLuteal', 'Womb Lining Soft & Thick'),
      fertilityStatus: tr('fertilityStatusLuteal', 'If an egg met sperm, it attaches in the womb 6–10 days after ovulation'),
      colorHex: CYCLE_PHASE_DEFINITIONS[4].colorHex,
      rgbaFill: CYCLE_PHASE_DEFINITIONS[4].rgbaFill,
      guideTitle: tr(
        'fertilityGuideLutealTitle',
        'What Is Happening in My Body: Luteal Phase'
      ),
      bullets: [
        tr(
          'fertilityGuideLutealB1',
          'What Your Body Is Doing: Your body makes the lining inside your womb thick, warm, and soft like a blanket in case a fertilized egg needs a home to grow into a baby.'
        ),
        tr(
          'fertilityGuideLutealB2',
          'Can I Get Pregnant Right Now?: Once the egg from ovulation is gone, you cannot start a new pregnancy during the middle or end of the Luteal Phase. If sperm did meet the egg during your fertile days, the tiny fertilized egg snuggles into your womb wall about 6 to 10 days after ovulation. If not, your body gets ready to start your next period.'
        ),
        tr(
          'fertilityGuideLutealB3',
          'How You May Feel & Care for Yourself: As your period gets closer, you might feel hungrier, bloated, tired, emotional, or have sore breasts. Drink plenty of water, get extra sleep, and be gentle with yourself.'
        )
      ]
    }
  ];

  const currentPhaseObj =
    phaseCardsData.find((p) => p.id === currentPhaseKey) || phaseCardsData[0];
  const activeGuidePhaseObj =
    phaseCardsData.find((p) => p.id === displayedPhaseId) || currentPhaseObj;

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

      h(
        'h1',
        {
          className: 'text-2xl sm:text-3xl font-extrabold text-center mt-1',
          style: { color: '#9F133A' }
        },
        tr('cycleBtnFertilityAndMyCycle', 'Fertility and My Cycle')
      ),

      // TOP TWO-COLUMN ROW:
      // Left: Shared Two-Way Synced Interactive 4-Phase Cycle & Fertility Wheel
      // Right: Synchronized Copy of CycleCalendarWidget1 + "You are in..." Square Underneath
      h(
        'div',
        {
          className:
            'w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 px-1 sm:px-2'
        },

        // LEFT COLUMN: Shared Synced Wheel
        h(
          'div',
          { className: 'w-full lg:flex-1 flex flex-col items-stretch' },
          h(InteractiveCycleFertilityWheel1, {
            UserNameChoiceInsert1,
            UserLanguageChoice1,
            lang,
            t,
            formatDigitsForLang,
            cycleCalendarState: activeState,
            onUpdateCycleCalendarState
          })
        ),

        // RIGHT COLUMN: Synchronized Copy of CycleCalendarWidget1 + "You are in..." Square Underneath
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

          // "You are in..." Square Directly Underneath the Calendar
          h(
            'div',
            {
              id: 'YouAreInCurrentPhaseSquare1',
              'data-piece-name': 'YouAreInCurrentPhaseSquare1',
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
              hasColors &&
                currentPhaseObj.id === 'OvulatoryPhaseDuration1' &&
                h(
                  'div',
                  { className: 'text-xs font-black text-[#9F133A]' },
                  activeState.fertilityTrackingEnabled
                    ? ct('ovulatoryStarredSub', '★ Easiest time to get pregnant')
                    : '★'
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
                      'Tentative next period in'
                    )} ${formatDigitsForLang(daysUntilNextPeriod)} ${ct('daysUnit', 'days')}${
                      prediction.tentativeNextPeriodDate
                        ? ` (${formatDigitsForLang(prediction.tentativeNextPeriodDate)})`
                        : ''
                    }`
                  : tr(
                      'tapCalendarToStartPrompt',
                      'Tap your calendar above to pick your First Day of Period and auto-populate your phases!'
                    )
              ),
              h(
                'div',
                {
                  className:
                    'w-full p-2.5 rounded-2xl border-2 border-black bg-white text-left space-y-1'
                },
                h(
                  'div',
                  { className: 'text-[11px] font-black text-[#9F133A]' },
                  `★ ${tr('fertileWindowDaysLabel', 'Easiest time to get pregnant')}: ${tr(
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

      // BELOW THE CALENDAR & WHEEL: 4 Clickable Phase Cards
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
                onClick: () => handleSelectPhaseCard(card.id),
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
              h(
                'div',
                {
                  className: `text-xs font-bold leading-snug ${
                    card.id === 'OvulatoryPhaseDuration1' ? 'text-[#9F133A] font-black' : 'text-black/85'
                  }`
                },
                card.shortSub
              )
            );
          })
        )
      ),

      // LIVE PHASE & FERTILITY GUIDE BOX BELOW THE 4 CARDS
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
