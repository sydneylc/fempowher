import React, { useState, useRef, useEffect } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=285';
import { isRtlLanguage } from '../data/translations.js?v=285';
import { InteractiveCycleFertilityWheel1 } from './FertilityAndMyCycleHomePage1.js?v=285';
import {
  CYCLE_PHASE_DEFINITIONS,
  FERTILITY_GREEN_OVERLAY_DEFINITION,
  getCycleCalText,
  formatMonthYearForLang,
  getPhasesForDate,
  loadUserCycleCalendarState,
  saveUserCycleCalendarState,
  renderGearHeartIcon
} from '../data/cycleCalendarData.js?v=285';

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
  // Expanded Fertility Wheel Widget covering part of the calendar when clicked from the bottom of the Key
  const [isWheelOverlayOpen, setIsWheelOverlayOpen] = useState(false);

  // macOS Dock FaceTime-style Pop-Out Word Bubble state
  const [phaseWordBubble, setPhaseWordBubble] = useState(null);
  const hideBubbleTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (hideBubbleTimeoutRef.current) {
        clearTimeout(hideBubbleTimeoutRef.current);
      }
    };
  }, []);

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

  // Compute exact centered placement for the FaceTime-style word bubble
  const showPhaseWordBubble = (phaseDef, targetEl, pinned = false, isFromKeySidebar = false) => {
    if (!phaseDef || !targetEl || typeof targetEl.getBoundingClientRect !== 'function') return;
    if (hideBubbleTimeoutRef.current) {
      clearTimeout(hideBubbleTimeoutRef.current);
      hideBubbleTimeoutRef.current = null;
    }

    const rect = targetEl.getBoundingClientRect();
    const vw = window.innerWidth || 1024;
    const bubbleW = Math.min(264, vw - 24);

    const customLabel =
      activeState && activeState.customKeyLabels && activeState.customKeyLabels[phaseDef.id];
    let titleText =
      customLabel ||
      ct(
        phaseDef.blurbTitleKey || phaseDef.labelKey,
        phaseDef.defaultBlurbTitleEn || phaseDef.defaultLabelEn
      );
    if (phaseDef.isTentativePrediction && phaseDef.id === 'FirstDayOfPeriod1') {
      titleText = `${titleText} (${ct('tentativeFirstDayTag', 'Tentative 1st Day')})`;
    }

    let blurbText = ct(phaseDef.blurbKey, phaseDef.defaultBlurbEn || '');
    if (phaseDef.isTentativePrediction) {
      blurbText = `📅 Tentative predicted cycle from your period algorithm: ${blurbText}`;
    }

    const starredSub =
      phaseDef.id === 'OvulatoryPhaseDuration1' || phaseDef.isFertilityGreenHighlight
        ? activeState && activeState.fertilityTrackingEnabled
          ? ct('calPhaseOvulatoryStarSub', '★ Easiest time to get pregnant')
          : '★'
        : null;

    const targetCenterX = rect.left + rect.width / 2;
    const targetCenterY = rect.top + rect.height / 2;

    let placement = 'top';
    let anchorX = targetCenterX;
    let anchorY = rect.top - 10;
    let tailOffsetX = 0;

    if (isFromKeySidebar && !isRtl && vw - rect.right > bubbleW + 24) {
      placement = 'right';
      anchorX = rect.right + 12;
      anchorY = targetCenterY;
    } else if (isFromKeySidebar && isRtl && rect.left > bubbleW + 24) {
      placement = 'left';
      anchorX = rect.left - 12;
      anchorY = targetCenterY;
    } else if (rect.top > 165) {
      placement = 'top';
      const clampedCenterX = Math.max(
        bubbleW / 2 + 12,
        Math.min(vw - bubbleW / 2 - 12, targetCenterX)
      );
      anchorX = clampedCenterX;
      anchorY = rect.top - 10;
      tailOffsetX = Math.max(
        -(bubbleW / 2 - 20),
        Math.min(bubbleW / 2 - 20, targetCenterX - clampedCenterX)
      );
    } else {
      placement = 'bottom';
      const clampedCenterX = Math.max(
        bubbleW / 2 + 12,
        Math.min(vw - bubbleW / 2 - 12, targetCenterX)
      );
      anchorX = clampedCenterX;
      anchorY = rect.bottom + 10;
      tailOffsetX = Math.max(
        -(bubbleW / 2 - 20),
        Math.min(bubbleW / 2 - 20, targetCenterX - clampedCenterX)
      );
    }

    setPhaseWordBubble({
      phaseId: phaseDef.id,
      title: titleText,
      starredSub,
      blurb: blurbText,
      colorHex: phaseDef.colorHex,
      rgbaFill: phaseDef.rgbaFill,
      anchorX,
      anchorY,
      width: bubbleW,
      placement,
      tailOffsetX,
      pinned
    });
  };

  const scheduleHidePhaseWordBubble = () => {
    if (hideBubbleTimeoutRef.current) {
      clearTimeout(hideBubbleTimeoutRef.current);
    }
    hideBubbleTimeoutRef.current = setTimeout(() => {
      setPhaseWordBubble((prev) => (prev && prev.pinned ? prev : null));
    }, 140);
  };

  const handlePrevMonth = () => {
    setPhaseWordBubble(null);
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    setPhaseWordBubble(null);
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleJumpToday = () => {
    setPhaseWordBubble(null);
    setViewYear(todayYear);
    setViewMonth(todayMonth);
  };

  const monthTitle = formatDigitsForLang(
    formatMonthYearForLang(viewYear, viewMonth, lang, UserLanguageChoice1)
  );
  const weekdaysFull = ct('weekdaysFull', ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

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
      onClick: () => {
        if (phaseWordBubble) setPhaseWordBubble(null);
      },
      className: 'h-full min-h-full w-full bg-white text-black flex flex-col overflow-hidden select-none relative'
    },
    // ========================================================================
    // MACOS FACETIME-STYLE POP-OUT WORD BUBBLE (PhaseWordBubble1)
    // ========================================================================
    phaseWordBubble &&
      h(
        'div',
        {
          id: 'CyclePhaseFaceTimeWordBubble1',
          onClick: (e) => {
            e.stopPropagation();
            setPhaseWordBubble(null);
          },
          onMouseEnter: () => {
            if (hideBubbleTimeoutRef.current) {
              clearTimeout(hideBubbleTimeoutRef.current);
              hideBubbleTimeoutRef.current = null;
            }
          },
          onMouseLeave: () => {
            setPhaseWordBubble(null);
          },
          style: {
            position: 'fixed',
            left: `${phaseWordBubble.anchorX}px`,
            top: `${phaseWordBubble.anchorY}px`,
            width: `${phaseWordBubble.width}px`,
            transform:
              phaseWordBubble.placement === 'top'
                ? 'translate(-50%, -100%)'
                : phaseWordBubble.placement === 'bottom'
                ? 'translate(-50%, 0)'
                : phaseWordBubble.placement === 'right'
                ? 'translate(0, -50%)'
                : 'translate(-100%, -50%)',
            zIndex: 9999,
            background: 'rgba(238, 238, 242, 0.96)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            borderRadius: '18px',
            border: '1.5px solid rgba(0, 0, 0, 0.22)',
            boxShadow: '0 10px 28px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
            padding: '10px 14px',
            color: '#111111',
            textAlign: 'center'
          }
        },
        h(
          'div',
          { className: 'flex items-center justify-center gap-2 mb-0.5' },
          h('span', {
            className: 'w-3 h-3 rounded-full shrink-0 border border-black/60',
            style: { backgroundColor: phaseWordBubble.rgbaFill || phaseWordBubble.colorHex }
          }),
          h(
            'span',
            { className: 'text-xs sm:text-[13px] font-black text-black leading-tight' },
            phaseWordBubble.title
          )
        ),
        phaseWordBubble.starredSub &&
          h(
            'div',
            { className: 'text-[10.5px] font-black text-[#9F133A] mb-1 leading-tight' },
            phaseWordBubble.starredSub
          ),
        h(
          'p',
          { className: 'text-[11px] font-semibold text-black/85 leading-snug text-center' },
          phaseWordBubble.blurb
        ),
        phaseWordBubble.placement === 'top' &&
          h('div', {
            style: {
              position: 'absolute',
              bottom: '-7px',
              left: `calc(50% + ${phaseWordBubble.tailOffsetX || 0}px)`,
              width: '14px',
              height: '14px',
              background: 'rgba(238, 238, 242, 0.96)',
              borderRight: '1.5px solid rgba(0, 0, 0, 0.22)',
              borderBottom: '1.5px solid rgba(0, 0, 0, 0.22)',
              transform: 'translateX(-50%) rotate(45deg)',
              borderBottomRightRadius: '3px'
            }
          }),
        phaseWordBubble.placement === 'bottom' &&
          h('div', {
            style: {
              position: 'absolute',
              top: '-7px',
              left: `calc(50% + ${phaseWordBubble.tailOffsetX || 0}px)`,
              width: '14px',
              height: '14px',
              background: 'rgba(238, 238, 242, 0.96)',
              borderLeft: '1.5px solid rgba(0, 0, 0, 0.22)',
              borderTop: '1.5px solid rgba(0, 0, 0, 0.22)',
              transform: 'translateX(-50%) rotate(45deg)',
              borderTopLeftRadius: '3px'
            }
          }),
        phaseWordBubble.placement === 'right' &&
          h('div', {
            style: {
              position: 'absolute',
              left: '-7px',
              top: '50%',
              width: '14px',
              height: '14px',
              background: 'rgba(238, 238, 242, 0.96)',
              borderLeft: '1.5px solid rgba(0, 0, 0, 0.22)',
              borderBottom: '1.5px solid rgba(0, 0, 0, 0.22)',
              transform: 'translateY(-50%) rotate(45deg)',
              borderBottomLeftRadius: '3px'
            }
          }),
        phaseWordBubble.placement === 'left' &&
          h('div', {
            style: {
              position: 'absolute',
              right: '-7px',
              top: '50%',
              width: '14px',
              height: '14px',
              background: 'rgba(238, 238, 242, 0.96)',
              borderRight: '1.5px solid rgba(0, 0, 0, 0.22)',
              borderTop: '1.5px solid rgba(0, 0, 0, 0.22)',
              transform: 'translateY(-50%) rotate(45deg)',
              borderTopRightRadius: '3px'
            }
          })
      ),

    // ========================================================================
    // TOP HEADER BAR
    // ========================================================================
    h(
      'div',
      {
        className:
          'w-full px-3 sm:px-6 pt-2.5 pb-2 border-b-2 border-black bg-white shrink-0 flex items-center justify-between gap-3'
      },
      h(
        'div',
        { className: 'shrink-0' },
        renderSubpageBackButton(onBack, t, lang)
      ),

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
        renderGearHeartIcon(h, 28, '#000000', hasColors ? '#CF366C' : '#FFFFFF'),
        h(
          'span',
          { className: 'text-xs sm:text-sm font-extrabold text-black' },
          ct('mySettingsBtn', 'My Settings')
        )
      )
    ),

    // ========================================================================
    // MAIN BODY: Key Sidebar + Interactive Calendar Grid + Optional Expanded Wheel Overlay
    // ========================================================================
    h(
      'div',
      {
        className: 'flex-1 w-full flex flex-row overflow-hidden p-2 sm:p-4 gap-3 sm:gap-4 bg-white relative'
      },

      // EXPANDED FERTILITY WHEEL OVERLAY COVERING PART OF THE CALENDAR (when clicked from Key!)
      isWheelOverlayOpen &&
        h(
          'div',
          {
            id: 'CalendarExpandedFertilityWheelOverlay1',
            onClick: (e) => e.stopPropagation(),
            className:
              'absolute z-40 top-3 bottom-3 left-3 sm:left-44 right-3 max-w-lg mx-auto bg-white/95 backdrop-blur-md rounded-3xl border-[3px] border-black shadow-2xl p-3 sm:p-4 overflow-y-auto flex flex-col justify-start'
          },
          h(InteractiveCycleFertilityWheel1, {
            UserNameChoiceInsert1,
            UserLanguageChoice1,
            lang,
            t,
            formatDigitsForLang,
            cycleCalendarState: activeState,
            onUpdateCycleCalendarState: updateState,
            onCloseExpandedModal: () => setIsWheelOverlayOpen(false)
          })
        ),

      // 1. Vertical Key & Filters Menu (CalendarKeyAndFilters1)
      h(
        'aside',
        {
          id: 'CalendarKeyAndFilters1',
          'data-piece-name': 'CalendarKeyAndFilters1',
          className:
            'h-full rounded-2xl border-2 border-black bg-white flex flex-col justify-between p-2.5 sm:p-3 transition-all duration-200 shrink-0 overflow-y-auto',
          style: {
            width: isKeyExpanded ? 'min(310px, 44vw)' : 'min(156px, 30vw)'
          }
        },
        h(
          'div',
          { className: 'flex flex-col gap-1.5' },
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
                { className: 'flex flex-col gap-1 pt-0.5' },
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
                      : Number(activeState[phase.variableName]) || phase.baselineDays || 5;

                  return h(
                    'div',
                    {
                      key: phase.id,
                      onMouseEnter: (e) => showPhaseWordBubble(phase, e.currentTarget, false, true),
                      onMouseLeave: scheduleHidePhaseWordBubble,
                      onClick: (e) => {
                        e.stopPropagation();
                        showPhaseWordBubble(phase, e.currentTarget, true, true);
                      },
                      className:
                        'px-1.5 py-0.5 rounded-lg border border-black/30 bg-white hover:bg-black/[0.03] flex flex-col gap-0.5 cursor-pointer transition-colors'
                    },
                    h(
                      'div',
                      { className: 'flex items-center gap-1.5' },
                      h(
                        'button',
                        {
                          type: 'button',
                          onClick: (e) => {
                            e.stopPropagation();
                            handleTogglePhaseFilter(phase.id);
                          },
                          className: 'w-3 h-3 rounded-[3px] shrink-0 cursor-pointer flex items-center justify-center text-[8px] font-black leading-none',
                          style: {
                            backgroundColor: isVisible ? phase.rgbaFill : '#FFFFFF',
                            border:
                              phase.id === 'FirstDayOfPeriod1'
                                ? '1.5px solid #000000'
                                : `1.25px solid ${phase.borderHex}`
                          },
                          title: displayLabel
                        },
                        isVisible ? '✓' : ''
                      ),
                      isEditingKey && isKeyExpanded
                        ? h('input', {
                            type: 'text',
                            value: displayLabel,
                            onClick: (e) => e.stopPropagation(),
                            onChange: (e) =>
                              handleCustomKeyLabelChange(phase.id, e.target.value),
                            className:
                              'w-full px-1 py-0.5 text-[10px] font-bold border border-black rounded bg-white text-black'
                          })
                        : h(
                            'span',
                            {
                              className: `text-[9.5px] sm:text-[10px] font-extrabold text-black leading-tight ${
                                isKeyExpanded ? '' : 'truncate'
                              }`
                            },
                            displayLabel
                          )
                    ),
                    // Starred subheading under Ovulatory Phase:
                    // - When fertility is NOT checked: only a star "★" (no writing)
                    // - When fertility IS checked: "★ Easiest time to get pregnant"
                    phase.id === 'OvulatoryPhaseDuration1' &&
                      h(
                        'div',
                        {
                          className: `text-[8.5px] font-black text-[#9F133A] ps-4 leading-tight ${
                            isKeyExpanded ? '' : 'truncate'
                          }`
                        },
                        activeState.fertilityTrackingEnabled
                          ? ct('calPhaseOvulatoryStarSub', '★ Easiest time to get pregnant')
                          : '★'
                      ),
                    isKeyExpanded &&
                      h(
                        'div',
                        { className: 'text-[8.5px] font-bold text-black/70 ps-4 leading-none pb-0.5' },
                        `${formatDigitsForLang(dayCount)} ${
                          dayCount === 1
                            ? ct('dayUnit', 'day')
                            : ct('daysUnit', 'days')
                        }`
                      )
                  );
                }),

                // Green Fertility Highlight Filter entry in Key when "Trying to Get Pregnant (Fertility)" is ticked!
                activeState.fertilityTrackingEnabled &&
                  (() => {
                    const isGreenVisible =
                      !activeState.visiblePhases ||
                      activeState.visiblePhases.FertilityGreenOverlay1 !== false;
                    return h(
                      'div',
                      {
                        key: 'FertilityGreenOverlay1',
                        onMouseEnter: (e) =>
                          showPhaseWordBubble(
                            FERTILITY_GREEN_OVERLAY_DEFINITION,
                            e.currentTarget,
                            false,
                            true
                          ),
                        onMouseLeave: scheduleHidePhaseWordBubble,
                        onClick: (e) => {
                          e.stopPropagation();
                          showPhaseWordBubble(
                            FERTILITY_GREEN_OVERLAY_DEFINITION,
                            e.currentTarget,
                            true,
                            true
                          );
                        },
                        className:
                          'px-1.5 py-1 rounded-lg border-2 border-[#059669] bg-[#ECFDF5] hover:bg-[#D1FAE5] flex flex-col gap-0.5 cursor-pointer transition-colors mt-0.5'
                      },
                      h(
                        'div',
                        { className: 'flex items-center gap-1.5' },
                        h(
                          'button',
                          {
                            type: 'button',
                            onClick: (e) => {
                              e.stopPropagation();
                              handleTogglePhaseFilter('FertilityGreenOverlay1');
                            },
                            className:
                              'w-3 h-3 rounded-[3px] shrink-0 cursor-pointer flex items-center justify-center text-[8px] font-black leading-none',
                            style: {
                              backgroundColor: isGreenVisible
                                ? FERTILITY_GREEN_OVERLAY_DEFINITION.peakRgbaFill
                                : '#FFFFFF',
                              border: '1.5px solid #047857'
                            }
                          },
                          isGreenVisible ? '✓' : ''
                        ),
                        h(
                          'span',
                          {
                            className: `text-[9.5px] font-black text-[#065F46] leading-tight ${
                              isKeyExpanded ? '' : 'truncate'
                            }`
                          },
                          ct('tryingToGetPregnantHeader', 'Trying to Get Pregnant')
                        )
                      ),
                      h(
                        'div',
                        {
                          className: `text-[8px] font-black text-[#047857] ps-4 leading-tight ${
                            isKeyExpanded ? '' : 'truncate'
                          }`
                        },
                        '★ Green Ovulation Filter'
                      )
                    );
                  })(),

                activeState.repeatsOverAndOver &&
                  h(
                    'div',
                    {
                      className:
                        'mt-0.5 pt-1 border-t border-black/20 text-[9px] font-extrabold italic text-black/75 text-center leading-tight'
                    },
                    ct('repeatsNote', 'Repeats over and over again...')
                  ),

                // Mini Interactive Fertility Wheel at the bottom of the Key when "Trying to Get Pregnant" is ticked!
                activeState.fertilityTrackingEnabled &&
                  h(InteractiveCycleFertilityWheel1, {
                    UserNameChoiceInsert1,
                    UserLanguageChoice1,
                    lang,
                    t,
                    formatDigitsForLang,
                    cycleCalendarState: activeState,
                    onUpdateCycleCalendarState: updateState,
                    compactKeyPreview: true,
                    onRequestExpandFromKey: () => setIsWheelOverlayOpen((prev) => !prev)
                  })
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

            const allPhasesForDay = hasColors ? getPhasesForDate(dateObj, activeState) : [];
            const regularPhases = allPhasesForDay.filter((p) => !p.isFertilityGreenHighlight);
            const greenFertilityOverlay = allPhasesForDay.find((p) => p.isFertilityGreenHighlight);

            return h(
              'div',
              {
                key: `cal-day-${dayNum}`,
                className:
                  'relative border-b border-e border-black/25 p-1.5 sm:p-2 flex flex-col justify-between overflow-hidden bg-white',
                style: greenFertilityOverlay
                  ? greenFertilityOverlay.isPeakOvulationDay
                    ? {
                        // MOST NEON & GLOWING: Exact Ovulation Day (#39FF14 electric neon green + glow!)
                        backgroundImage:
                          'linear-gradient(180deg, rgba(57, 255, 20, 0.34) 0%, rgba(57, 255, 20, 0.56) 100%)',
                        boxShadow:
                          '0 0 16px rgba(57, 255, 20, 0.95), inset 0 0 0 2.5px #15803D'
                      }
                    : greenFertilityOverlay.isHighFertilePreOvDay
                    ? {
                        // MEDIUM-HIGH NEON GREEN: 1-2 days right before ovulation (highest single-day chance with ovulation day)
                        backgroundImage:
                          'linear-gradient(180deg, rgba(0, 255, 102, 0.24) 0%, rgba(0, 255, 102, 0.40) 100%)',
                        boxShadow:
                          '0 0 10px rgba(0, 255, 102, 0.75), inset 0 0 0 2px #16A34A'
                      }
                    : {
                        // LEAST NEON (STILL BRIGHT NEON LIME-GREEN): Most likely fertile window days
                        backgroundImage:
                          'linear-gradient(180deg, rgba(118, 255, 3, 0.18) 0%, rgba(118, 255, 3, 0.30) 100%)',
                        boxShadow: 'inset 0 0 0 2px #22C55E'
                      }
                  : undefined
              },
              // Top row inside day cell: Date Number + "Today" badge
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

              // Translucent Phase Ribbons Layer (with Vibrant Neon Green Fertility Highlight over Ovulation when checked!)
              hasColors &&
                regularPhases.length > 0 &&
                h(
                  'div',
                  {
                    className: 'relative z-10 flex flex-col gap-1 my-auto py-0.5'
                  },
                  regularPhases.map((p, pIdx) => {
                    const customLabel =
                      activeState.customKeyLabels && activeState.customKeyLabels[p.id];
                    const phaseName =
                      customLabel || ct(p.labelKey, p.defaultLabelEn);

                    const isOvulatoryBar = p.id === 'OvulatoryPhaseDuration1';
                    const hasGreenOverlayOnThisBar = Boolean(greenFertilityOverlay && isOvulatoryBar);
                    const isPeakOvulationBar = Boolean(
                      hasGreenOverlayOnThisBar && greenFertilityOverlay.isPeakOvulationDay
                    );

                    return h(
                      'div',
                      {
                        key: `${p.id}-${pIdx}`,
                        onMouseEnter: (e) => showPhaseWordBubble(p, e.currentTarget, false),
                        onMouseLeave: scheduleHidePhaseWordBubble,
                        onClick: (e) => {
                          e.stopPropagation();
                          showPhaseWordBubble(p, e.currentTarget, true);
                        },
                        className:
                          'w-full px-1.5 py-1 flex flex-col justify-center text-[10px] sm:text-xs font-extrabold text-black cursor-pointer transition-transform hover:scale-[1.02] relative overflow-hidden',
                        style: {
                          backgroundColor: p.rgbaFill,
                          // Layer vibrant neon green highlight over the existing pinkish-red color when Trying to Get Pregnant is checked!
                          backgroundImage: isPeakOvulationBar
                            ? 'linear-gradient(135deg, rgba(57, 255, 20, 0.78) 0%, rgba(216, 49, 108, 0.42) 50%, rgba(57, 255, 20, 0.85) 100%)'
                            : hasGreenOverlayOnThisBar
                            ? 'linear-gradient(135deg, rgba(0, 255, 102, 0.56) 0%, rgba(216, 49, 108, 0.45) 55%, rgba(118, 255, 3, 0.56) 100%)'
                            : undefined,
                          boxShadow: isPeakOvulationBar
                            ? '0 0 12px rgba(57, 255, 20, 0.95), inset 0 0 0 2.5px #15803D'
                            : hasGreenOverlayOnThisBar
                            ? '0 0 6px rgba(0, 255, 102, 0.7), inset 0 0 0 2px #16A34A'
                            : p.isTentativePrediction && p.isFirstDayBox
                            ? 'inset 0 0 0 1.5px rgba(0,0,0,0.55)'
                            : 'none',
                          mixBlendMode: 'multiply',
                          border: 'none',
                          borderRadius: '8px'
                        }
                      },
                      h(
                        'div',
                        { className: 'flex items-center justify-between gap-1 w-full' },
                        h('span', { className: 'truncate' }, phaseName),
                        p.isFirstDayBox &&
                          h(
                            'span',
                            {
                              className: `ms-1 px-1 rounded bg-white/95 text-[8.5px] font-black shrink-0 ${
                                p.isTentativePrediction ? 'border border-dashed border-black' : ''
                              }`
                            },
                            p.isTentativePrediction
                              ? ct('tentativeFirstDayTag', 'Tentative 1st Day')
                              : ct('firstDayTag', '1st Day')
                          ),
                        !p.isFirstDayBox &&
                          p.isLastPeriodDayBox &&
                          h(
                            'span',
                            {
                              className:
                                'ms-1 px-1 rounded bg-white/90 text-[9px] font-black shrink-0'
                            },
                            ct('lastDayTag', 'Last Day')
                          )
                      ),
                      // Star underneath Ovulatory Phase on the calendar ribbon:
                      // - When fertility is NOT checked: ONLY "★" (no writing!)
                      // - When fertility IS checked: "★ Easiest time to get pregnant"
                      isOvulatoryBar &&
                        h(
                          'div',
                          {
                            className:
                              'text-[8.5px] font-black leading-tight truncate text-[#052E16]'
                          },
                          activeState.fertilityTrackingEnabled
                            ? ct('calPhaseOvulatoryStarSub', '★ Easiest time to get pregnant')
                            : '★'
                        )
                    );
                  }),

                  // If the neon green fertility window extends onto late Follicular or early Luteal day (before/after the 3-day Ovulatory bar), show a neon green highlight strip over that day too!
                  greenFertilityOverlay &&
                    !regularPhases.some((rp) => rp.id === 'OvulatoryPhaseDuration1') &&
                    h(
                      'div',
                      {
                        onMouseEnter: (e) =>
                          showPhaseWordBubble(greenFertilityOverlay, e.currentTarget, false),
                        onMouseLeave: scheduleHidePhaseWordBubble,
                        onClick: (e) => {
                          e.stopPropagation();
                          showPhaseWordBubble(greenFertilityOverlay, e.currentTarget, true);
                        },
                        className:
                          'w-full px-1.5 py-0.5 rounded-md text-[8.5px] font-black text-[#052E16] truncate cursor-pointer',
                        style: {
                          backgroundColor: greenFertilityOverlay.rgbaFill,
                          boxShadow: greenFertilityOverlay.neonGlow || 'inset 0 0 0 1.5px #16A34A'
                        }
                      },
                      greenFertilityOverlay.isPostOvulationDay
                        ? '★ Could still be fertile'
                        : '★ Easiest time to get pregnant'
                    )
                )
            );
          })
        )
      )
    )
  );
}
