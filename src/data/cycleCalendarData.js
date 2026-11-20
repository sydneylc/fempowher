// ============================================================================
// cycleCalendarData.js — Shared Data, Variables, Phase Calculator & Translations
// for:
//   - CycleCalendarWidget1 (2"x2" right-aligned sneak peek widget in MyCycleSubHomePage)
//   - InteractiveCalendarHomePage1 (Full-screen interactive calendar page)
//   - CalendarKeyAndFilters1 & CalendarKeyExpandButton1 (LTR-left / RTL-right expandable & editable Key)
//   - CalendarSettingsButton1 (Top-right Gear-Heart "My Settings" button)
//   - CalendarSettingsHomePage1 / CalenderSettingsHomePage1 (Editable settings page)
//
// IMPORTANT DEFAULT RULE:
// Because no users have entered their period/cycle info yet (and whenever a new
// user enters for the first time), `hasEnteredCycleData` defaults to `false`.
// When `hasEnteredCycleData === false`, both CycleCalendarWidget1 and
// InteractiveCalendarHomePage1 render in pure white & black (no colors) with an
// empty Key (still titled "Key") centered on the current month and showing the
// current day.
// ============================================================================

export const CYCLE_PHASE_DEFINITIONS = [
  {
    id: 'FirstDayOfPeriod1',
    variableName: 'FirstDayOfPeriod1',
    labelKey: 'calPhaseFirstDay',
    defaultLabelEn: 'First Day of Period',
    blurbTitleKey: 'calPhaseFirstDay',
    blurbKey: 'calBlurbFirstDay',
    defaultBlurbEn:
      'Day 1 of your period when bleeding starts. You might have belly cramps, feel tired, or just want to rest and stay warm.',
    colorHex: '#EF233C',
    // Translucent bright red so overlaps remain visible
    rgbaFill: 'rgba(239, 35, 60, 0.56)',
    borderHex: '#111111',
    isBoxedDay: true,
    minDays: 1,
    maxDays: 1,
    baselineDays: 1
  },
  {
    id: 'PeriodDaysDuration1',
    variableName: 'PeriodDaysDuration1',
    labelKey: 'calPhasePeriodDays',
    defaultLabelEn: 'Period (1–7 Days)',
    blurbTitleKey: 'calPhasePeriodTitleShort',
    defaultBlurbTitleEn: 'Period',
    blurbKey: 'calBlurbPeriodDays',
    defaultBlurbEn:
      'Your body lets go of the soft lining inside your womb as period blood (usually for 3 to 7 days). You might feel tired, crampy, or sore before your energy comes back.',
    colorHex: '#9B111E',
    // Translucent darker red
    rgbaFill: 'rgba(155, 17, 30, 0.54)',
    borderHex: '#6E0915',
    isBoxedLastDay: true,
    minDays: 1,
    maxDays: 7,
    baselineDays: 5
  },
  {
    id: 'FollicularPhaseDuration1',
    variableName: 'FollicularPhaseDuration1',
    labelKey: 'calPhaseFollicular',
    defaultLabelEn: 'Follicular Phase',
    blurbTitleKey: 'calPhaseFollicular',
    blurbKey: 'calBlurbFollicular',
    defaultBlurbEn:
      'Right after your period ends, your body gets a new tiny egg ready. You will often feel happier, clearer, and have much more energy to do things.',
    colorHex: '#F78C06',
    // Translucent orange as in the drawing
    rgbaFill: 'rgba(247, 140, 6, 0.50)',
    borderHex: '#C86D00',
    minDays: 1,
    maxDays: 14,
    baselineDays: 8
  },
  {
    id: 'OvulatoryPhaseDuration1',
    variableName: 'OvulatoryPhaseDuration1',
    labelKey: 'calPhaseOvulatory',
    defaultLabelEn: 'Ovulatory Phase',
    blurbTitleKey: 'calPhaseOvulatory',
    blurbKey: 'calBlurbOvulatory',
    defaultBlurbEn:
      'Your ovary lets go of a tiny egg. These are the days you can most easily get pregnant! You may feel great energy, feel more interested in sex, and notice clear, slippery fluid in your underwear.',
    colorHex: '#D8316C',
    // Translucent pinkish-red as in the drawing
    rgbaFill: 'rgba(216, 49, 108, 0.52)',
    borderHex: '#A31D4E',
    minDays: 1,
    maxDays: 7,
    baselineDays: 3
  },
  {
    id: 'LutealPhaseDuration1',
    variableName: 'LutealPhaseDuration1',
    labelKey: 'calPhaseLuteal',
    defaultLabelEn: 'Luteal Phase',
    blurbTitleKey: 'calPhaseLuteal',
    blurbKey: 'calBlurbLuteal',
    defaultBlurbEn:
      'Your womb builds a soft, thick lining in case a baby starts growing. If you are not pregnant, your body gets ready for your next period. You may feel hungrier, bloated, emotional, tired, or have sore breasts.',
    colorHex: '#B51762',
    // Translucent darkest pink as in the drawing
    rgbaFill: 'rgba(181, 23, 98, 0.56)',
    borderHex: '#7A0C40',
    minDays: 1,
    maxDays: 16,
    baselineDays: 12
  }
];

// Norm / Baseline cycle durations automatically applied when a user enters when her period occurred
export function getBaselineCyclePhaseDurations(periodDays = 5) {
  const cleanPeriod = Math.max(1, Math.min(10, Number(periodDays) || 5));
  // Baseline 28-day cycle: Period (default 5d) + Follicular (13 - periodDays = 8d) + Ovulatory (3d) + Luteal (12d) = 28 days
  const baselineFollicular = Math.max(5, 13 - cleanPeriod);
  return {
    PeriodDaysDuration1: cleanPeriod,
    FollicularPhaseDuration1: baselineFollicular,
    OvulatoryPhaseDuration1: 3,
    LutealPhaseDuration1: 12
  };
}

// Default blank state for all current and new users before they enter any info
export function createBlankCycleCalendarState() {
  return {
    hasEnteredCycleData: false,
    calendarPasswordEnabled: false,
    calendarPassword: '',
    FirstDayOfPeriod1: '', // YYYY-MM-DD when user sets it in CalendarSettingsHomePage1
    autoBaselinePhases: true, // Automatically guesstimates Follicular, Ovulatory & Luteal from Period unless customized
    PeriodDaysDuration1: 5, // Default 5-day period norm (editable)
    FollicularPhaseDuration1: 8, // Baseline norm post-period follicular days (editable)
    OvulatoryPhaseDuration1: 3, // Baseline norm fertile ovulation window days (editable)
    LutealPhaseDuration1: 12, // Baseline norm luteal phase days (editable)
    repeatsOverAndOver: true,
    // Editable Key & Filters state (so user can customize or toggle visibility in Key)
    visiblePhases: {
      FirstDayOfPeriod1: true,
      PeriodDaysDuration1: true,
      FollicularPhaseDuration1: true,
      OvulatoryPhaseDuration1: true,
      LutealPhaseDuration1: true
    },
    customKeyLabels: {}
  };
}

export function loadUserCycleCalendarState(usernameKey = 'Anonymous') {
  try {
    const cleanUser = String(usernameKey || 'Anonymous').trim().toLowerCase() || 'anonymous';
    const storageKey = `fempowher_cycle_cal_v1_${cleanUser}`;
    let raw = localStorage.getItem(storageKey);
    let parsed = raw ? JSON.parse(raw) : null;

    // Fallback to account-level persisted cycleCalendarState for non-anonymous users
    if (
      (!parsed || typeof parsed !== 'object' || !parsed.FirstDayOfPeriod1) &&
      cleanUser !== 'anonymous' &&
      cleanUser !== 'user'
    ) {
      try {
        const accountsRaw = localStorage.getItem('fempowher_accounts_v1');
        const accounts = accountsRaw ? JSON.parse(accountsRaw) : null;
        if (accounts && accounts[cleanUser] && accounts[cleanUser].cycleCalendarState) {
          parsed = accounts[cleanUser].cycleCalendarState;
          localStorage.setItem(storageKey, JSON.stringify(parsed));
        }
      } catch (_) {}
    }

    if (!parsed || typeof parsed !== 'object') {
      return createBlankCycleCalendarState();
    }
    const hasCycle = Boolean(parsed.FirstDayOfPeriod1 && parsed.hasEnteredCycleData !== false);
    return {
      ...createBlankCycleCalendarState(),
      ...parsed,
      hasEnteredCycleData: hasCycle,
      visiblePhases: {
        ...createBlankCycleCalendarState().visiblePhases,
        ...(parsed.visiblePhases || {})
      },
      customKeyLabels: {
        ...(parsed.customKeyLabels || {})
      }
    };
  } catch (e) {
    return createBlankCycleCalendarState();
  }
}

export function saveUserCycleCalendarState(usernameKey = 'Anonymous', stateObj = {}) {
  try {
    const cleanUser = String(usernameKey || 'Anonymous').trim().toLowerCase() || 'anonymous';
    const storageKey = `fempowher_cycle_cal_v1_${cleanUser}`;
    localStorage.setItem(storageKey, JSON.stringify(stateObj));

    // Also persist inside the user's account record in fempowher_accounts_v1 for non-anonymous users
    if (cleanUser !== 'anonymous' && cleanUser !== 'user') {
      try {
        const accountsRaw = localStorage.getItem('fempowher_accounts_v1');
        const accounts = accountsRaw ? JSON.parse(accountsRaw) : {};
        if (accounts && typeof accounts === 'object') {
          accounts[cleanUser] = {
            ...(accounts[cleanUser] || { username: usernameKey }),
            cycleCalendarState: stateObj
          };
          localStorage.setItem('fempowher_accounts_v1', JSON.stringify(accounts));
        }
      } catch (_) {}
    }
  } catch (e) {}
}

// Compute which phase(s) apply to a given YYYY-MM-DD date string.
// Returns an array of phase objects so translucent overlapping phases can both render!
export function getPhasesForDate(dateObj, calendarState) {
  if (
    !calendarState ||
    !calendarState.hasEnteredCycleData ||
    !calendarState.FirstDayOfPeriod1
  ) {
    return [];
  }

  const parts = String(calendarState.FirstDayOfPeriod1).split('-').map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) return [];

  const startUtc = Date.UTC(parts[0], parts[1] - 1, parts[2]);
  const targetUtc = Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
  const diffDays = Math.round((targetUtc - startUtc) / 86400000);

  if (diffDays < 0) return [];

  const periodLen = Math.max(1, Math.min(10, Number(calendarState.PeriodDaysDuration1) || 5));
  const follicularLen = Math.max(1, Math.min(21, Number(calendarState.FollicularPhaseDuration1) || 8));
  const ovulatoryLen = Math.max(1, Math.min(10, Number(calendarState.OvulatoryPhaseDuration1) || 3));
  const lutealLen = Math.max(1, Math.min(21, Number(calendarState.LutealPhaseDuration1) || 12));

  const totalCycleLen = periodLen + follicularLen + ovulatoryLen + lutealLen;
  if (totalCycleLen <= 0) return [];

  if (!calendarState.repeatsOverAndOver && diffDays >= totalCycleLen) {
    return [];
  }

  const dayInCycle = diffDays % totalCycleLen; // 0-indexed day within cycle
  const cycleNumber = Math.floor(diffDays / totalCycleLen) + 1;
  const visible = calendarState.visiblePhases || {};
  const matched = [];

  const pEnd = periodLen - 1;
  const fStart = periodLen;
  const fEnd = fStart + follicularLen - 1;
  const oStart = fEnd + 1;
  const oEnd = oStart + ovulatoryLen - 1;
  const lStart = oEnd + 1;
  const lEnd = lStart + lutealLen - 1;

  // 1. First Day of Period (bright red box + darker red period bar overlap on day 0)
  if (dayInCycle === 0) {
    if (visible.FirstDayOfPeriod1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[0],
        isFirstDayBox: true,
        isLastPeriodDayBox: periodLen === 1,
        dayInPhase: 1,
        cycleNumber
      });
    }
    if (periodLen > 1 && visible.PeriodDaysDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[1],
        isFirstDayBox: false,
        isLastPeriodDayBox: false,
        dayInPhase: 1,
        cycleNumber
      });
    }
  } else if (dayInCycle > 0 && dayInCycle <= pEnd) {
    if (visible.PeriodDaysDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[1],
        isFirstDayBox: false,
        isLastPeriodDayBox: dayInCycle === pEnd,
        dayInPhase: dayInCycle + 1,
        cycleNumber
      });
    }
  }

  // 2. Follicular Phase
  if (dayInCycle >= fStart && dayInCycle <= fEnd) {
    if (visible.FollicularPhaseDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[2],
        dayInPhase: dayInCycle - fStart + 1,
        isPhaseStart: dayInCycle === fStart,
        isPhaseEnd: dayInCycle === fEnd,
        cycleNumber
      });
    }
  }

  // 3. Ovulatory Phase
  if (dayInCycle >= oStart && dayInCycle <= oEnd) {
    if (visible.OvulatoryPhaseDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[3],
        dayInPhase: dayInCycle - oStart + 1,
        isPhaseStart: dayInCycle === oStart,
        isPhaseEnd: dayInCycle === oEnd,
        cycleNumber
      });
    }
  }

  // 4. Luteal Phase
  if (dayInCycle >= lStart && dayInCycle <= lEnd) {
    if (visible.LutealPhaseDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[4],
        dayInPhase: dayInCycle - lStart + 1,
        isPhaseStart: dayInCycle === lStart,
        isPhaseEnd: dayInCycle === lEnd,
        cycleNumber
      });
    }
  }

  return matched;
}

// ============================================================================
// Multilingual Translations for Cycle Calendar (All 16 built-in languages +
// dynamic fallback through UserLanguageChoice1.translate)
// ============================================================================
export const CYCLE_CALENDAR_TRANSLATIONS = {
  en: {
    possessiveCycleCalendar: "{user}'s Cycle Calendar",
    possessiveCalendar: "{user}'s Calendar",
    mySettingsBtn: 'My Settings',
    keyTitle: 'Key',
    keyAndFiltersSub: 'Key & Filters',
    expandKeyBtn: 'Expand',
    collapseKeyBtn: 'Compact',
    editKeyBtn: 'Edit Key',
    doneEditingKeyBtn: 'Done',
    emptyKeyNotice: 'No cycle colors added yet.',
    emptyKeySub: 'Tap "My Settings" in the top right to add your period & cycle days.',
    widgetClickPrompt: 'Tap to open interactive calendar →',
    todayBtn: 'Today',
    todayBadge: 'Today',
    firstDayTag: '1st Day',
    lastDayTag: 'Last Day',
    repeatsNote: 'Repeats over and over again...',
    calSettingsTitle: 'Calendar Settings',
    calSettingsSubtitle: 'Customize your cycle phases (1–7 days each). All colors are translucent on your calendar so phase transitions & overlaps stay visible.',
    addPasswordLabel: 'Add a Password',
    addPasswordDesc: 'Lock your cycle calendar with a password when opening the calendar widget.',
    passwordInputPlaceholder: 'Enter a password for your calendar...',
    firstDayLabel: 'First Day of Period (Reported by User)',
    firstDayDesc: 'Bright red boxed day marking Day 1 of your menstrual bleeding.',
    periodDaysLabel: 'Days of Period (1–7 Days Customizable)',
    periodDaysDesc: 'Darker red bar spanning from your first day through your last day of period.',
    follicularLabel: 'Follicular Phase (1–7 Days Customizable)',
    follicularDesc: 'Warm orange translucent bar following your period as an egg matures.',
    ovulatoryLabel: 'Ovulatory Phase (1–7 Days Customizable)',
    ovulatoryDesc: 'Pinkish-red translucent bar marking your fertile ovulation window.',
    lutealLabel: 'Luteal Phase (1–7 Days Customizable)',
    lutealDesc: 'Darkest pink translucent bar after ovulation until the next cycle begins.',
    repeatsToggleLabel: 'Repeat cycle phases continuously across future dates',
    daysUnit: 'days',
    dayUnit: 'day',
    saveCalendarBtn: 'Save to My Calendar',
    clearToBlankBtn: 'Clear Calendar',
    blankStatusBadge: 'Currently Blank (No User Data Entered Yet)',
    activeStatusBadge: 'Custom Cycle Active on Calendar',
    calPhaseFirstDay: 'First Day of Period',
    calPhasePeriodDays: 'Period (1–7 Days)',
    calPhasePeriodTitleShort: 'Period',
    calPhaseFollicular: 'Follicular Phase',
    calPhaseOvulatory: 'Ovulatory Phase',
    calPhaseLuteal: 'Luteal Phase',
    calBlurbFirstDay:
      'Day 1 of your period when bleeding starts. You might have belly cramps, feel tired, or just want to rest and stay warm.',
    calBlurbPeriodDays:
      'Your body lets go of the soft lining inside your womb as period blood (usually for 3 to 7 days). You might feel tired, crampy, or sore before your energy comes back.',
    calBlurbFollicular:
      'Right after your period ends, your body gets a new tiny egg ready. You will often feel happier, clearer, and have much more energy to do things.',
    calBlurbOvulatory:
      'Your ovary lets go of a tiny egg. These are the days you can most easily get pregnant! You may feel great energy, feel more interested in sex, and notice clear, slippery fluid in your underwear.',
    calBlurbLuteal:
      'Your womb builds a soft, thick lining in case a baby starts growing. If you are not pregnant, your body gets ready for your next period. You may feel hungrier, bloated, emotional, tired, or have sore breasts.',
    autoBaselineBannerTitle: 'Automatic Normal Cycle Estimate',
    autoBaselineBannerDesc:
      'Just pick your First Day of Period! The calendar automatically fills in a normal 28-day cycle estimate for the rest of your phases. You can still change any number below anytime.',
    resetToBaselineBtn: 'Reset to Normal Estimate',
    weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    weekdaysFull: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  ar: {
    possessiveCycleCalendar: 'تقويم الدورة الشهرية لـ {user}',
    possessiveCalendar: 'تقويم {user}',
    mySettingsBtn: 'إعداداتي',
    keyTitle: 'مفتاح التقويم',
    keyAndFiltersSub: 'المفتاح والفلاتر',
    expandKeyBtn: 'توسيع',
    collapseKeyBtn: 'تصغير',
    editKeyBtn: 'تعديل المفتاح',
    doneEditingKeyBtn: 'تم',
    emptyKeyNotice: 'لم تتم إضافة ألوان للدورة بعد.',
    emptyKeySub: 'اضغطي على "إعداداتي" في الأعلى لإضافة أيام الدورة الشهرية.',
    widgetClickPrompt: 'اضغطي لفتح التقويم التفاعلي ←',
    todayBtn: 'اليوم',
    todayBadge: 'اليوم',
    firstDayTag: 'اليوم الأول',
    lastDayTag: 'اليوم الأخير',
    repeatsNote: 'يتكرر باستمرار...',
    calSettingsTitle: 'إعدادات التقويم',
    calSettingsSubtitle: 'خصّصي مراحل دورتكِ الشهرية (١–٧ أيام لكل مرحلة). جميع الألوان شفافة لإظهار التداخل.',
    addPasswordLabel: 'إضافة كلمة مرور',
    addPasswordDesc: 'اقفلي تقويم دورتكِ الشهرية بكلمة مرور عند الضغط على أداة التقويم.',
    passwordInputPlaceholder: 'أدخلي كلمة مرور لتقويمكِ...',
    firstDayLabel: 'أول يوم للدورة الشهرية (تحدده المستخدمة)',
    firstDayDesc: 'مربع أحمر ساطع يحدد اليوم الأول للحيض.',
    periodDaysLabel: 'أيام الدورة الشهرية (١–٧ أيام قابلة للتخصيص)',
    periodDaysDesc: 'شريط أحمر داكن يمتد من اليوم الأول حتى اليوم الأخير للدورة.',
    follicularLabel: 'المرحلة الجريبية (١–٧ أيام قابلة للتخصيص)',
    follicularDesc: 'شريط برتقالي شفاف يلي فترة الحيض.',
    ovulatoryLabel: 'مرحلة الإباضة (١–٧ أيام قابلة للتخصيص)',
    ovulatoryDesc: 'شريط وردي محمرّ شفاف يحدد نافذة الإباضة والخصوبة.',
    lutealLabel: 'المرحلة الأصفرية (١–٧ أيام قابلة للتخصيص)',
    lutealDesc: 'شريط وردي داكن شفاف بعد الإباضة وحتى بداية الدورة التالية.',
    repeatsToggleLabel: 'تكرار مراحل الدورة الشهرية تلقائياً',
    daysUnit: 'أيام',
    dayUnit: 'يوم',
    saveCalendarBtn: 'حفظ في تقويمي',
    clearToBlankBtn: 'إعادة التقويم فارغاً (بدون بيانات)',
    blankStatusBadge: 'التقويم فارغ حالياً (لم تُدخل بيانات بعد)',
    activeStatusBadge: 'بيانات الدورة مفعّلة على التقويم',
    calPhaseFirstDay: 'أول يوم للدورة',
    calPhasePeriodDays: 'فترة الحيض (١–٧ أيام)',
    calPhaseFollicular: 'المرحلة الجريبية',
    calPhaseOvulatory: 'مرحلة الإباضة',
    calPhaseLuteal: 'المرحلة الأصفرية',
    weekdaysShort: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
    weekdaysFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  },
  es: {
    possessiveCycleCalendar: 'Calendario de Ciclo de {user}',
    possessiveCalendar: 'Calendario de {user}',
    mySettingsBtn: 'Mis Ajustes',
    keyTitle: 'Clave',
    keyAndFiltersSub: 'Clave y Filtros',
    expandKeyBtn: 'Ampliar',
    collapseKeyBtn: 'Compactar',
    editKeyBtn: 'Editar Clave',
    doneEditingKeyBtn: 'Listo',
    emptyKeyNotice: 'Aún no se han añadido datos del ciclo.',
    emptyKeySub: 'Toca "Mis Ajustes" arriba a la derecha para agregar tus días.',
    widgetClickPrompt: 'Toca para abrir el calendario interactivo →',
    todayBtn: 'Hoy',
    todayBadge: 'Hoy',
    firstDayTag: '1er Día',
    lastDayTag: 'Último Día',
    repeatsNote: 'Se repite una y otra vez...',
    calSettingsTitle: 'Ajustes del Calendario',
    calSettingsSubtitle: 'Personaliza las fases de tu ciclo (1–7 días cada una). Los colores son translúcidos para mostrar superposiciones.',
    addPasswordLabel: 'Añadir una Contraseña',
    addPasswordDesc: 'Bloquea tu calendario del ciclo con una contraseña al abrir el widget.',
    passwordInputPlaceholder: 'Escribe una contraseña para tu calendario...',
    firstDayLabel: 'Primer Día del Período (Reportado por la Usuaria)',
    firstDayDesc: 'Rojo brillante marcando el Día 1 de tu menstruación.',
    periodDaysLabel: 'Días de Período (1–7 Días Personalizables)',
    periodDaysDesc: 'Rojo oscuro desde el primer hasta el último día de tu período.',
    follicularLabel: 'Fase Folicular (1–7 Días Personalizables)',
    follicularDesc: 'Naranja translúcido después del período.',
    ovulatoryLabel: 'Fase Ovulatoria (1–7 Días Personalizables)',
    ovulatoryDesc: 'Rojo rosado translúcido durante los días de ovulación.',
    lutealLabel: 'Fase Lútea (1–7 Días Personalizables)',
    lutealDesc: 'Rosa más oscuro translúcido después de la ovulación.',
    repeatsToggleLabel: 'Repetir las fases del ciclo continuamente',
    daysUnit: 'días',
    dayUnit: 'día',
    saveCalendarBtn: 'Guardar en Mi Calendario',
    clearToBlankBtn: 'Restablecer en Blanco (Sin Datos Aún)',
    blankStatusBadge: 'Actualmente en Blanco (Sin Datos Ingresados)',
    activeStatusBadge: 'Ciclo Personalizado Activo',
    calPhaseFirstDay: 'Primer Día del Período',
    calPhasePeriodDays: 'Período (1–7 Días)',
    calPhaseFollicular: 'Fase Folicular',
    calPhaseOvulatory: 'Fase Ovulatoria',
    calPhaseLuteal: 'Fase Lútea',
    weekdaysShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekdaysFull: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  },
  fr: {
    possessiveCycleCalendar: 'Calendrier du Cycle de {user}',
    possessiveCalendar: 'Calendrier de {user}',
    mySettingsBtn: 'Mes Réglages',
    keyTitle: 'Légende / Clé',
    keyAndFiltersSub: 'Clé et Filtres',
    expandKeyBtn: 'Agrandir',
    collapseKeyBtn: 'Réduire',
    editKeyBtn: 'Modifier',
    doneEditingKeyBtn: 'Terminé',
    emptyKeyNotice: 'Aucune donnée de cycle saisie.',
    emptyKeySub: 'Appuyez sur "Mes Réglages" en haut à droite pour ajouter vos jours.',
    widgetClickPrompt: 'Appuyez pour ouvrir le calendrier interactif →',
    todayBtn: "Aujourd'hui",
    todayBadge: "Aujourd'hui",
    firstDayTag: '1er Jour',
    lastDayTag: 'Dernier Jour',
    repeatsNote: 'Se répète continuellement...',
    calSettingsTitle: 'Réglages du Calendrier',
    calSettingsSubtitle: 'Personnalisez les phases de votre cycle (1 à 7 jours chacune).',
    addPasswordLabel: 'Ajouter un Mot de Passe',
    addPasswordDesc: 'Verrouillez votre calendrier avec un mot de passe.',
    passwordInputPlaceholder: 'Entrez un mot de passe pour votre calendrier...',
    firstDayLabel: 'Premier Jour des Règles',
    firstDayDesc: 'Rouge vif marquant le 1er jour des règles.',
    periodDaysLabel: 'Jours des Règles (1–7 Jours)',
    periodDaysDesc: 'Rouge foncé du premier au dernier jour des règles.',
    follicularLabel: 'Phase Folliculaire (1–7 Jours)',
    follicularDesc: 'Orange translucide après les règles.',
    ovulatoryLabel: 'Phase Ovulatoire (1–7 Jours)',
    ovulatoryDesc: 'Rose-rouge translucide pendant l’ovulation.',
    lutealLabel: 'Phase Lutéale (1–7 Jours)',
    lutealDesc: 'Rose foncé translucide après l’ovulation.',
    repeatsToggleLabel: 'Répéter le cycle continuellement',
    daysUnit: 'jours',
    dayUnit: 'jour',
    saveCalendarBtn: 'Enregistrer dans Mon Calendrier',
    clearToBlankBtn: 'Réinitialiser à Vide (Aucune Donnée)',
    blankStatusBadge: 'Actuellement Vide (Aucune Donnée Saisie)',
    activeStatusBadge: 'Cycle Actif sur le Calendrier',
    calPhaseFirstDay: '1er Jour des Règles',
    calPhasePeriodDays: 'Règles (1–7 Jours)',
    calPhaseFollicular: 'Phase Folliculaire',
    calPhaseOvulatory: 'Phase Ovulatoire',
    calPhaseLuteal: 'Phase Lutéale',
    weekdaysShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekdaysFull: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  }
};

export function getCycleCalText(lang = 'en', UserLanguageChoice1 = null) {
  const code = String(UserLanguageChoice1 || lang || 'en');
  const base = CYCLE_CALENDAR_TRANSLATIONS[code] || CYCLE_CALENDAR_TRANSLATIONS.en;
  return (key, fallback) => {
    if (base[key] !== undefined) return base[key];
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, fallback || CYCLE_CALENDAR_TRANSLATIONS.en[key] || key);
    }
    return fallback || CYCLE_CALENDAR_TRANSLATIONS.en[key] || key;
  };
}

export function formatMonthYearForLang(year, monthIndex, lang = 'en', UserLanguageChoice1 = null) {
  const localeMap = {
    en: 'en-US',
    ar: 'ar',
    es: 'es',
    fr: 'fr',
    pt: 'pt',
    ru: 'ru',
    zh: 'zh-CN',
    hi: 'hi-IN',
    bn: 'bn-BD',
    ur: 'ur-PK',
    fa: 'fa-IR',
    prs: 'fa-AF',
    ps: 'ps-AF',
    sw: 'sw-KE',
    so: 'so-SO',
    am: 'am-ET',
    rhg: 'en-US'
  };
  const code = String((UserLanguageChoice1 && UserLanguageChoice1.translateTarget) || lang || 'en');
  const locale = localeMap[code] || code || 'en-US';
  try {
    const dt = new Date(year, monthIndex, 1);
    return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(dt);
  } catch (e) {
    const fallbackMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${fallbackMonths[monthIndex] || 'Month'} ${year}`;
  }
}

// Reusable SVG Icon: Gear with a Heart inside (matches Drawing 3 for CalendarSettingsButton1)
export function renderGearHeartIcon(ReactCreateElement, size = 26, strokeColor = '#111111', heartFill = '#CF366C') {
  const h = ReactCreateElement;
  return h(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 36 36',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': 'true'
    },
    // Rounded square button frame (as drawn in Sketch 3)
    h('rect', {
      x: '1.5',
      y: '1.5',
      width: '33',
      height: '33',
      rx: '8',
      fill: '#FFFFFF',
      stroke: strokeColor,
      strokeWidth: '2.2'
    }),
    // 8-tooth hand-drawn style gear wheel
    h('path', {
      d: 'M16.2 6.2 H19.8 L20.4 9.1 C21.3 9.4 22.1 9.9 22.8 10.5 L25.6 9.3 L28.1 11.8 L26.9 14.6 C27.5 15.3 28.0 16.1 28.3 17.0 L31.2 17.6 V21.2 L28.3 21.8 C28.0 22.7 27.5 23.5 26.9 24.2 L28.1 27.0 L25.6 29.5 L22.8 28.3 C22.1 28.9 21.3 29.4 20.4 29.7 L19.8 32.6 H16.2 L15.6 29.7 C14.7 29.4 13.9 28.9 13.2 28.3 L10.4 29.5 L7.9 27.0 L9.1 24.2 C8.5 23.5 8.0 22.7 7.7 21.8 L4.8 21.2 V17.6 L7.7 17.0 C8.0 16.1 8.5 15.3 9.1 14.6 L7.9 11.8 L10.4 9.3 L13.2 10.5 C13.9 9.9 14.7 9.4 15.6 9.1 Z',
      fill: '#FFF9FC',
      stroke: strokeColor,
      strokeWidth: '1.9',
      strokeLinejoin: 'round'
    }),
    // Center heart inside the gear (Women's Safe Haven heart shape!)
    h('path', {
      d: 'M18 24.2 C18 24.2 12.2 20.3 12.2 16.6 C12.2 14.6 13.8 13.2 15.6 13.2 C16.7 13.2 17.6 13.8 18 14.6 C18.4 13.8 19.3 13.2 20.4 13.2 C22.2 13.2 23.8 14.6 23.8 16.6 C23.8 20.3 18 24.2 18 24.2 Z',
      fill: heartFill,
      stroke: strokeColor,
      strokeWidth: '1.5',
      strokeLinejoin: 'round'
    })
  );
}
