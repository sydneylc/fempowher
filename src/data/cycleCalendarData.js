// ============================================================================
// cycleCalendarData.js — Shared Data, Variables, Adaptive Cycle Prediction
// Algorithm, Password-Derived Encryption, Anonymous Ephemeral Session Memory,
// Phase Calculator & Multilingual Translations for:
//   - CycleCalendarWidget1 (Sneak peek widget in MyCycleSubHomePage & FertilityAndMyCycleHomePage1)
//   - InteractiveCalendarHomePage1 (Full-screen interactive calendar page)
//   - CalendarKeyAndFilters1 & CalendarKeyExpandButton1 (Expandable & editable Key + Fertility Wheel)
//   - CalendarSettingsButton1 (Top-right Gear-Heart "My Settings" button)
//   - CalendarSettingsHomePage1 / CalenderSettingsHomePage1 (Editable settings page)
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
    starredSubKey: 'calPhaseOvulatoryStarSub',
    defaultStarredSubEn: '★ Easiest time to get pregnant',
    blurbTitleKey: 'calPhaseOvulatory',
    blurbKey: 'calBlurbOvulatory',
    defaultBlurbEn:
      'Your ovary lets go of a tiny egg (which stays alive for 12 to 24 hours). You may feel great energy, feel more interested in sex, and notice clear, slippery fluid in your underwear.',
    colorHex: '#D8316C',
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
    rgbaFill: 'rgba(181, 23, 98, 0.56)',
    borderHex: '#7A0C40',
    minDays: 1,
    maxDays: 16,
    baselineDays: 12
  }
];

// Vibrant Neon Green fertility highlight filter definition when "Trying to Get Pregnant (Fertility)" is checked:
// - Least neon (Vibrant Lime-Green): Most likely fertile window days (5 days before ovulation when sperm survive 3-5 days + 1 day after ovulation while egg survives 12-24h)
// - Medium-Bright Neon Green: 1-2 days right before ovulation (highest single-day chance along with ovulation day!)
// - Most Neon & Glowing (Electric Neon Green #39FF14): Exact Ovulation Day (egg release day!)
export const FERTILITY_GREEN_OVERLAY_DEFINITION = {
  id: 'FertilityGreenOverlay1',
  labelKey: 'calFertilityGreenOverlayLabel',
  defaultLabelEn: 'Trying to Get Pregnant (Neon Fertile Highlight)',
  starredSubKey: 'calPhaseOvulatoryStarSub',
  defaultStarredSubEn: '★ Easiest time to get pregnant',
  blurbKey: 'calFertilityGreenOverlayBlurb',
  defaultBlurbEn:
    'Pregnancy is most likely during the 6-day fertile window (the 5 days before ovulation + ovulation day itself). Sperm can live inside you for 3 to 5 days waiting for the egg, while the egg lives for 12 to 24 hours after release. Having sex on ovulation day or the 1 to 2 days right before ovulation gives the highest single-day chance of getting pregnant!',
  colorHex: '#39FF14',
  // Least neon (still vibrant neon lime-green) for general fertile window days
  rgbaFill: 'rgba(118, 255, 3, 0.44)',
  // Medium-high vibrant neon green for the 1-2 days right before ovulation
  highFertileRgbaFill: 'rgba(0, 255, 102, 0.58)',
  // Most neon glowing electric green for the Exact Ovulation Day!
  peakRgbaFill: 'rgba(57, 255, 20, 0.78)',
  peakNeonGlow: '0 0 12px rgba(57, 255, 20, 0.95), inset 0 0 0 2.5px #15803D',
  borderHex: '#16A34A'
};

// Helper: Number of days in the calendar month of a YYYY-MM-DD date string (defaults to 30 if invalid)
export function getCalendarMonthDaysFromYmd(ymd) {
  if (!ymd || typeof ymd !== 'string') return 28;
  const parts = ymd.split('-').map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1]) return 28;
  // new Date(year, month, 0).getDate() returns the exact number of days in `parts[1]` (1-indexed month)
  const daysInThatMonth = new Date(parts[0], parts[1], 0).getDate();
  return Math.max(28, Math.min(35, daysInThatMonth || 30));
}

// ============================================================================
// CLINICAL RECENCY-WEIGHTED MENSTRUAL CYCLE PREDICTION ALGORITHM (EWMA)
// ============================================================================
export function computeAdaptiveCyclePrediction(periodHistoryDates = [], firstDayStr = '', periodDays = 5) {
  const cleanPeriod = Math.max(1, Math.min(10, Number(periodDays) || 5));
  const ovulatoryDays = 3;
  const lutealDays = 12;

  const allDatesSet = new Set();
  if (Array.isArray(periodHistoryDates)) {
    periodHistoryDates.forEach((d) => {
      if (d && /^\d{4}-\d{2}-\d{2}$/.test(String(d).trim())) {
        allDatesSet.add(String(d).trim());
      }
    });
  }
  if (firstDayStr && /^\d{4}-\d{2}-\d{2}$/.test(String(firstDayStr).trim())) {
    allDatesSet.add(String(firstDayStr).trim());
  }

  const sortedDates = Array.from(allDatesSet).sort();
  const latestStartDate = sortedDates.length > 0 ? sortedDates[sortedDates.length - 1] : '';

  const validGaps = [];
  for (let i = 1; i < sortedDates.length; i++) {
    const p1 = sortedDates[i - 1].split('-').map(Number);
    const p2 = sortedDates[i].split('-').map(Number);
    const u1 = Date.UTC(p1[0], p1[1] - 1, p1[2]);
    const u2 = Date.UTC(p2[0], p2[1] - 1, p2[2]);
    const gap = Math.round((u2 - u1) / 86400000);
    if (gap >= 18 && gap <= 48) {
      validGaps.push(gap);
    }
  }

  let predictedCycleLength = 28;
  let algorithmMethod = 'baseline-28';

  if (validGaps.length >= 1) {
    // Recency-Weighted Moving Average (EWMA): most recent cycle gets highest weight
    let weightedSum = 0;
    let weightTotal = 0;
    const recentGaps = validGaps.slice(-6); // Up to last 6 cycles
    for (let i = 0; i < recentGaps.length; i++) {
      // Newer cycles (higher i) get exponentially larger weight
      const recencyRank = recentGaps.length - 1 - i;
      const weight = Math.pow(0.6, recencyRank);
      weightedSum += recentGaps[i] * weight;
      weightTotal += weight;
    }
    predictedCycleLength = Math.max(21, Math.min(42, Math.round(weightedSum / weightTotal)));
    algorithmMethod = `ewma-${validGaps.length}-cycles`;
  } else if (latestStartDate) {
    // 1 period date logged (e.g. Oct 27 -> Nov 27): match the calendar month length of that start date
    // so Oct 27 projects tentative next period on Nov 27 (31 days)!
    predictedCycleLength = getCalendarMonthDaysFromYmd(latestStartDate);
    algorithmMethod = 'single-month-same-date';
  }

  const adaptiveFollicular = Math.max(
    4,
    Math.min(21, predictedCycleLength - cleanPeriod - ovulatoryDays - lutealDays)
  );
  const actualTotal = cleanPeriod + adaptiveFollicular + ovulatoryDays + lutealDays;

  // Compute the tentative next period date (YYYY-MM-DD) from latestStartDate + actualTotal
  let tentativeNextPeriodDate = '';
  if (latestStartDate) {
    const parts = latestStartDate.split('-').map(Number);
    const nextUtc = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + actualTotal));
    tentativeNextPeriodDate = `${nextUtc.getUTCFullYear()}-${String(nextUtc.getUTCMonth() + 1).padStart(
      2,
      '0'
    )}-${String(nextUtc.getUTCDate()).padStart(2, '0')}`;
  }

  return {
    sortedDates,
    latestStartDate,
    validGaps,
    cyclesLoggedCount: sortedDates.length,
    predictedCycleLength: actualTotal,
    algorithmMethod,
    tentativeNextPeriodDate,
    PeriodDaysDuration1: cleanPeriod,
    FollicularPhaseDuration1: adaptiveFollicular,
    OvulatoryPhaseDuration1: ovulatoryDays,
    LutealPhaseDuration1: lutealDays
  };
}

// Norm / Baseline cycle durations automatically applied when a user enters when her period occurred
export function getBaselineCyclePhaseDurations(periodDays = 5, firstDayStr = '', periodHistoryDates = []) {
  const pred = computeAdaptiveCyclePrediction(periodHistoryDates, firstDayStr, periodDays);
  return {
    PeriodDaysDuration1: pred.PeriodDaysDuration1,
    FollicularPhaseDuration1: pred.FollicularPhaseDuration1,
    OvulatoryPhaseDuration1: pred.OvulatoryPhaseDuration1,
    LutealPhaseDuration1: pred.LutealPhaseDuration1,
    predictedCycleLength: pred.predictedCycleLength,
    tentativeNextPeriodDate: pred.tentativeNextPeriodDate,
    algorithmMethod: pred.algorithmMethod
  };
}

// Default blank state for all current and new users before they enter any info
export function createBlankCycleCalendarState() {
  return {
    hasEnteredCycleData: false,
    optInEncryptedStorage: true,
    calendarPasswordEnabled: false,
    calendarPassword: '',
    FirstDayOfPeriod1: '', // Most recent YYYY-MM-DD period start date
    periodHistoryDates: [], // Chronological array of logged YYYY-MM-DD period start dates for EWMA prediction
    autoBaselinePhases: true, // Automatically uses the adaptive cycle prediction algorithm unless manually overridden
    PeriodDaysDuration1: 5, // Default 5-day period norm (editable)
    FollicularPhaseDuration1: 8, // Adaptive pre-ovulatory follicular days (editable)
    OvulatoryPhaseDuration1: 3, // Fertile ovulation window days (editable)
    LutealPhaseDuration1: 12, // Post-ovulation luteal phase days (editable)
    repeatsOverAndOver: true,
    // Section 2: Opt-in "Trying to Get Pregnant (Fertility)" settings & synchronized wheel state
    fertilityTrackingEnabled: false, // Checkbox next to "Trying to Get Pregnant (Fertility)"
    FertileWindowDays1: 5, // Days leading up to & including ovulation when sperm can wait for egg (1-7 days, norm 5)
    ExactOvulationDays1: 1, // Peak egg-release day(s) inside ovulation window (1-2 days, norm 1)
    PostOvulationFertileDays1: 1, // "Could still be fertile after ovulation" days (1-3 days, norm 1)
    showInfertileDaysOnWheel: true, // Highlights "Unlikely to get pregnant" days on the interactive wheel
    selectedWheelPhaseId: null, // Shared across all fertility wheels in the app
    selectedWheelDayNumber: null, // Shared selected cycle day (1..N) across all fertility wheels
    // Editable Key & Filters state (so user can customize or toggle visibility in Key)
    visiblePhases: {
      FirstDayOfPeriod1: true,
      PeriodDaysDuration1: true,
      FollicularPhaseDuration1: true,
      OvulatoryPhaseDuration1: true,
      LutealPhaseDuration1: true,
      FertilityGreenOverlay1: true
    },
    customKeyLabels: {}
  };
}

// ============================================================================
// PASSWORD-DERIVED ENCRYPTION & AUTHENTICATED SESSION MANAGEMENT
// - Calendar data for registered users is encrypted with a key derived from
//   their account username + password (`deriveKeyStreamByte`).
// - Without the user's password, the stored payload in localStorage is opaque
//   ciphertext (`enc_v2:...`) and cannot be read.
// - Anonymous users NEVER write calendar data to localStorage; their data lives
//   only in `ephemeralAnonCycleState` for their active session and is wiped
//   the moment they leave or reload.
// ============================================================================
let ephemeralAnonCycleState = null;
const activeAccountPasswordsInMemory = {};

function fnv1aHash32(str, seed = 0x811c9dc5) {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

function deriveKeyStreamByte(masterSecret, saltHex, byteIndex) {
  const block = Math.floor(byteIndex / 4);
  const offset = byteIndex % 4;
  const h1 = fnv1aHash32(`${masterSecret}::${saltHex}::block_${block}`, 0x811c9dc5);
  const h2 = fnv1aHash32(`${saltHex}::${masterSecret}::mix_${block}`, h1 ^ 0x9e3779b9);
  return ((h1 ^ h2) >>> (offset * 8)) & 0xff;
}

export function encryptCycleDataWithPassword(stateObj, usernameKey, passwordSecret) {
  const cleanUser = String(usernameKey || '').trim().toLowerCase();
  const cleanPass = String(passwordSecret || '');
  if (!cleanUser || !cleanPass) return null;

  const jsonStr = JSON.stringify(stateObj);
  const utf8Bytes = new TextEncoder().encode(jsonStr);
  const saltHex = fnv1aHash32(`${cleanUser}::fempowher_salt_v2::${utf8Bytes.length}`).toString(16).padStart(8, '0');
  const masterSecret = `FPW_ENC_V2::${cleanUser}::${cleanPass}`;

  const cipherBytes = new Uint8Array(utf8Bytes.length);
  for (let i = 0; i < utf8Bytes.length; i++) {
    cipherBytes[i] = utf8Bytes[i] ^ deriveKeyStreamByte(masterSecret, saltHex, i);
  }

  let binaryStr = '';
  for (let i = 0; i < cipherBytes.length; i++) {
    binaryStr += String.fromCharCode(cipherBytes[i]);
  }
  const b64 = typeof btoa === 'function' ? btoa(binaryStr) : '';
  const macTag = fnv1aHash32(`${masterSecret}::${saltHex}::${jsonStr}`).toString(16).padStart(8, '0');
  return `enc_v2:${saltHex}:${macTag}:${b64}`;
}

export function decryptCycleDataWithPassword(cipherPayload, usernameKey, passwordSecret) {
  try {
    if (!cipherPayload || typeof cipherPayload !== 'string' || !cipherPayload.startsWith('enc_v2:')) {
      return null;
    }
    const cleanUser = String(usernameKey || '').trim().toLowerCase();
    const cleanPass = String(passwordSecret || '');
    if (!cleanUser || !cleanPass) return null;

    const parts = cipherPayload.split(':');
    if (parts.length !== 4) return null;
    const [, saltHex, expectedMac, b64] = parts;
    const masterSecret = `FPW_ENC_V2::${cleanUser}::${cleanPass}`;

    const binaryStr = typeof atob === 'function' ? atob(b64) : '';
    const cipherBytes = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
      cipherBytes[i] = binaryStr.charCodeAt(i);
    }

    const plainBytes = new Uint8Array(cipherBytes.length);
    for (let i = 0; i < cipherBytes.length; i++) {
      plainBytes[i] = cipherBytes[i] ^ deriveKeyStreamByte(masterSecret, saltHex, i);
    }

    const jsonStr = new TextDecoder().decode(plainBytes);
    const actualMac = fnv1aHash32(`${masterSecret}::${saltHex}::${jsonStr}`).toString(16).padStart(8, '0');
    if (actualMac !== expectedMac) {
      // Wrong password — decryption rejected!
      return null;
    }
    return JSON.parse(jsonStr);
  } catch (e) {
    return null;
  }
}

export function isAnonymousCycleUser(usernameKey) {
  const clean = String(usernameKey || '').trim().toLowerCase();
  if (!clean || clean === 'anonymous' || clean === 'user' || clean === 'totalanon') {
    return true;
  }
  return false;
}

// Register the logged-in user's password in session memory so encrypted calendar reads/writes unlock
export function setAuthenticatedCycleUserPassword(usernameKey, passwordSecret) {
  const cleanUser = String(usernameKey || '').trim().toLowerCase();
  if (!cleanUser || isAnonymousCycleUser(cleanUser)) return;
  if (passwordSecret) {
    activeAccountPasswordsInMemory[cleanUser] = String(passwordSecret);
    try {
      sessionStorage.setItem(
        'fempowher_active_auth_session_v1',
        JSON.stringify({ username: cleanUser, k: btoa(encodeURIComponent(String(passwordSecret))) })
      );
    } catch (_) {}
  }
}

export function getAuthenticatedCycleUserPassword(usernameKey) {
  const cleanUser = String(usernameKey || '').trim().toLowerCase();
  if (!cleanUser || isAnonymousCycleUser(cleanUser)) return '';
  if (activeAccountPasswordsInMemory[cleanUser]) {
    return activeAccountPasswordsInMemory[cleanUser];
  }
  try {
    const rawSession = sessionStorage.getItem('fempowher_active_auth_session_v1');
    if (rawSession) {
      const parsed = JSON.parse(rawSession);
      if (parsed && parsed.username === cleanUser && parsed.k) {
        const pass = decodeURIComponent(atob(parsed.k));
        activeAccountPasswordsInMemory[cleanUser] = pass;
        return pass;
      }
    }
  } catch (_) {}
  return '';
}

// One-way cryptographic hash for account passwords & emails (never stores raw credentials in source code or localStorage)
export function hashAccountCredential(tag, rawValue) {
  const v = String(rawValue || '').trim();
  const h1 = fnv1aHash32(`FPW_CRED_V2::${tag}::${v}`, 0x811c9dc5);
  const h2 = fnv1aHash32(`FPW_SALT_V2::${v}::${tag}`, h1 ^ 0x9e3779b9);
  const h3 = fnv1aHash32(
    `FPW_ROUND3::${h1.toString(16).padStart(8, '0')}::${v}::${h2.toString(16).padStart(8, '0')}`,
    0x85ebca6b
  );
  return `fpw_h2:${h1.toString(16).padStart(8, '0')}${h2.toString(16).padStart(8, '0')}${h3
    .toString(16)
    .padStart(8, '0')}`;
}

// Erase anonymous session calendar data immediately when an anonymous user leaves the session
export function clearAnonymousCycleSession() {
  ephemeralAnonCycleState = null;
  try {
    localStorage.removeItem('fempowher_cycle_cal_v1_anonymous');
    localStorage.removeItem('fempowher_cycle_cal_v1_user');
  } catch (_) {}
}

// Pre-encrypted ciphertext blob (cannot be decrypted or read without typing the account owner's password)
const SYDNEYALC_PRE_ENCRYPTED_BLOB =
  'enc_v2:68fc7384:2e596b8a:5eujGaIGYu5BCO4nLNnONNepWvoECEGpCigtuDHSuZ3/tAhd+pHCg0f5QBS2K4NhYsbE/lhXfR8TMOndDBh/i7ASLMpIP/0m9BEFf8BnRtKk+ao22wMfCZbaxpNcSsXy1v9iMCN/oILUIYFKps0oAHxz8ZVFRzM+eFpDOiX03NgeapagP1oEOmiQoqbc9dzbFAnkB3jJKe4vvN84iQihRRFq+LK8wX6uS1Ofe0H4suCmT6gm4U+nItrJkWi/ZXkp/Li/5cU/1Fa2QhL631Pz3483tuY01l3Y2+0N3OcbnuZ8xuT8GmcMRhzu/r4zwUyYJrnuG0yMUpJqbmw12q7AS5QGSpCh3t4WmXc/3qY3LvHzaZRusR98h4Pxt4+BIQ==';

// Clean up any legacy plaintext anonymous keys on module load
try {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('fempowher_cycle_cal_v1_anonymous');
    localStorage.removeItem('fempowher_cycle_cal_v1_user');
  }
} catch (_) {}

function normalizeLoadedCycleState(parsed) {
  if (!parsed || typeof parsed !== 'object') {
    return createBlankCycleCalendarState();
  }
  const blank = createBlankCycleCalendarState();
  const historySet = new Set(Array.isArray(parsed.periodHistoryDates) ? parsed.periodHistoryDates : []);
  if (parsed.FirstDayOfPeriod1 && /^\d{4}-\d{2}-\d{2}$/.test(String(parsed.FirstDayOfPeriod1))) {
    historySet.add(String(parsed.FirstDayOfPeriod1));
  }
  const sortedHistory = Array.from(historySet).sort();
  const latestFirstDay =
    sortedHistory.length > 0 ? sortedHistory[sortedHistory.length - 1] : parsed.FirstDayOfPeriod1 || '';
  const hasCycle = Boolean(latestFirstDay && parsed.hasEnteredCycleData !== false);

  let follicularLen = Number(parsed.FollicularPhaseDuration1) || 8;
  let periodLen = Number(parsed.PeriodDaysDuration1) || 5;
  let ovulatoryLen = Number(parsed.OvulatoryPhaseDuration1) || 3;
  let lutealLen = Number(parsed.LutealPhaseDuration1) || 12;

  if (hasCycle && parsed.autoBaselinePhases !== false) {
    const pred = computeAdaptiveCyclePrediction(sortedHistory, latestFirstDay, periodLen);
    follicularLen = pred.FollicularPhaseDuration1;
    ovulatoryLen = pred.OvulatoryPhaseDuration1;
    lutealLen = pred.LutealPhaseDuration1;
  }

  return {
    ...blank,
    ...parsed,
    FirstDayOfPeriod1: latestFirstDay,
    periodHistoryDates: sortedHistory,
    PeriodDaysDuration1: periodLen,
    FollicularPhaseDuration1: follicularLen,
    OvulatoryPhaseDuration1: ovulatoryLen,
    LutealPhaseDuration1: lutealLen,
    hasEnteredCycleData: hasCycle,
    visiblePhases: {
      ...blank.visiblePhases,
      ...(parsed.visiblePhases || {})
    },
    customKeyLabels: {
      ...(parsed.customKeyLabels || {})
    }
  };
}

export function loadUserCycleCalendarState(usernameKey = 'Anonymous', explicitPassword = '') {
  try {
    // 1. Anonymous user: strictly session-only in-memory state (never persisted to localStorage!)
    if (isAnonymousCycleUser(usernameKey)) {
      if (!ephemeralAnonCycleState) {
        return createBlankCycleCalendarState();
      }
      return normalizeLoadedCycleState(ephemeralAnonCycleState);
    }

    // 2. Registered logged-in user: requires their authenticated password to decrypt
    const cleanUser = String(usernameKey).trim().toLowerCase();
    const userPass = explicitPassword || getAuthenticatedCycleUserPassword(cleanUser);
    if (explicitPassword) {
      setAuthenticatedCycleUserPassword(cleanUser, explicitPassword);
    }

    if (!userPass) {
      // Cannot decrypt a registered user's private calendar without their password!
      return createBlankCycleCalendarState();
    }

    const encStorageKey = `fempowher_encrypted_cycle_v2_${cleanUser}`;
    const legacyStorageKey = `fempowher_cycle_cal_v1_${cleanUser}`;

    let decrypted = null;
    const rawEnc = localStorage.getItem(encStorageKey);
    if (rawEnc) {
      decrypted = decryptCycleDataWithPassword(rawEnc, cleanUser, userPass);
    }

    // Check account record in fempowher_accounts_v1 for encryptedCycleCalendar
    if (!decrypted || !decrypted.FirstDayOfPeriod1) {
      try {
        const accountsRaw = localStorage.getItem('fempowher_accounts_v1');
        const accounts = accountsRaw ? JSON.parse(accountsRaw) : null;
        if (accounts && accounts[cleanUser]) {
          if (accounts[cleanUser].encryptedCycleCalendar) {
            const fromAcct = decryptCycleDataWithPassword(
              accounts[cleanUser].encryptedCycleCalendar,
              cleanUser,
              userPass
            );
            if (fromAcct && fromAcct.FirstDayOfPeriod1) {
              decrypted = fromAcct;
            }
          } else if (
            accounts[cleanUser].cycleCalendarState &&
            accounts[cleanUser].cycleCalendarState.FirstDayOfPeriod1
          ) {
            // Migrate legacy unencrypted account calendar state into password-encrypted storage
            decrypted = accounts[cleanUser].cycleCalendarState;
          }
        }
      } catch (_) {}
    }

    // Migrate legacy plaintext per-user key if present, then remove plaintext key
    if (!decrypted || !decrypted.FirstDayOfPeriod1) {
      const legacyRaw = localStorage.getItem(legacyStorageKey);
      if (legacyRaw) {
        try {
          const legacyParsed = JSON.parse(legacyRaw);
          if (legacyParsed && legacyParsed.FirstDayOfPeriod1) {
            decrypted = legacyParsed;
          }
          localStorage.removeItem(legacyStorageKey);
        } catch (_) {}
      }
    }

    if ((!decrypted || !decrypted.FirstDayOfPeriod1) && cleanUser === 'sydneyalc') {
      const fromEncryptedVault = decryptCycleDataWithPassword(
        SYDNEYALC_PRE_ENCRYPTED_BLOB,
        'sydneyalc',
        userPass
      );
      if (fromEncryptedVault && fromEncryptedVault.FirstDayOfPeriod1) {
        decrypted = fromEncryptedVault;
        saveUserCycleCalendarState(cleanUser, decrypted, userPass);
      }
    }

    if (!decrypted || typeof decrypted !== 'object') {
      return createBlankCycleCalendarState();
    }

    const normalized = normalizeLoadedCycleState(decrypted);
    // Ensure encrypted copy is up to date on disk
    const reEncrypted = encryptCycleDataWithPassword(normalized, cleanUser, userPass);
    if (reEncrypted) {
      localStorage.setItem(encStorageKey, reEncrypted);
    }
    return normalized;
  } catch (e) {
    return createBlankCycleCalendarState();
  }
}

export function saveUserCycleCalendarState(usernameKey = 'Anonymous', stateObj = {}, explicitPassword = '') {
  try {
    const normalized = normalizeLoadedCycleState(stateObj);

    // 1. Anonymous user: keep ONLY in ephemeral session memory; never write to localStorage!
    if (isAnonymousCycleUser(usernameKey)) {
      ephemeralAnonCycleState = normalized;
      return;
    }

    // 2. Registered user: encrypt with user's password before writing to localStorage
    const cleanUser = String(usernameKey).trim().toLowerCase();
    const userPass = explicitPassword || getAuthenticatedCycleUserPassword(cleanUser);
    if (!userPass) return;

    const encStorageKey = `fempowher_encrypted_cycle_v2_${cleanUser}`;
    const legacyStorageKey = `fempowher_cycle_cal_v1_${cleanUser}`;
    localStorage.removeItem(legacyStorageKey);

    if (normalized.optInEncryptedStorage === false) {
      localStorage.removeItem(encStorageKey);
      return;
    }

    const cipherPayload = encryptCycleDataWithPassword(normalized, cleanUser, userPass);
    if (!cipherPayload) return;

    localStorage.setItem(encStorageKey, cipherPayload);

    // Also persist encrypted payload inside the user's account record in fempowher_accounts_v1
    try {
      const accountsRaw = localStorage.getItem('fempowher_accounts_v1');
      const accounts = accountsRaw ? JSON.parse(accountsRaw) : {};
      if (accounts && typeof accounts === 'object') {
        const existingAcct = { ...(accounts[cleanUser] || { username: usernameKey }) };
        delete existingAcct.cycleCalendarState; // Remove any legacy unencrypted copy
        existingAcct.encryptedCycleCalendar = cipherPayload;
        accounts[cleanUser] = existingAcct;
        localStorage.setItem('fempowher_accounts_v1', JSON.stringify(accounts));
      }
    } catch (_) {}
  } catch (e) {}
}

// ============================================================================
// Compute which phase(s) apply to a given Date object.
// Supports:
// - Historical logged periods from `periodHistoryDates`
// - Adaptive EWMA cycle prediction & future "Tentative Next Period" flags
// - Greenish fertility highlight filter (`FertilityGreenOverlay1`) over the
//   ovulation / fertile window when `fertilityTrackingEnabled === true`
// ============================================================================
export function getPhasesForDate(dateObj, calendarState) {
  if (
    !calendarState ||
    !calendarState.hasEnteredCycleData ||
    !calendarState.FirstDayOfPeriod1
  ) {
    return [];
  }

  const targetUtc = Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());

  const historyList =
    Array.isArray(calendarState.periodHistoryDates) && calendarState.periodHistoryDates.length > 0
      ? [...calendarState.periodHistoryDates].sort()
      : [calendarState.FirstDayOfPeriod1];

  // Find the most recent logged period start date that is <= targetUtc (or the earliest logged date if target is after it)
  let anchorDateStr = calendarState.FirstDayOfPeriod1;
  let nextLoggedDateUtc = null;

  for (let i = 0; i < historyList.length; i++) {
    const p = String(historyList[i]).split('-').map(Number);
    if (p.length === 3 && p[0] && p[1] && p[2]) {
      const u = Date.UTC(p[0], p[1] - 1, p[2]);
      if (u <= targetUtc) {
        anchorDateStr = historyList[i];
        if (i + 1 < historyList.length) {
          const pn = String(historyList[i + 1]).split('-').map(Number);
          nextLoggedDateUtc = Date.UTC(pn[0], pn[1] - 1, pn[2]);
        } else {
          nextLoggedDateUtc = null;
        }
      }
    }
  }

  const parts = String(anchorDateStr).split('-').map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) return [];

  const startUtc = Date.UTC(parts[0], parts[1] - 1, parts[2]);
  const diffDays = Math.round((targetUtc - startUtc) / 86400000);

  if (diffDays < 0) return [];

  const periodLen = Math.max(1, Math.min(10, Number(calendarState.PeriodDaysDuration1) || 5));
  const follicularLen = Math.max(1, Math.min(21, Number(calendarState.FollicularPhaseDuration1) || 8));
  const ovulatoryLen = Math.max(1, Math.min(10, Number(calendarState.OvulatoryPhaseDuration1) || 3));
  const lutealLen = Math.max(1, Math.min(21, Number(calendarState.LutealPhaseDuration1) || 12));

  // If this date falls between two historical logged periods, use that exact historical cycle length
  const totalCycleLen =
    nextLoggedDateUtc && nextLoggedDateUtc > startUtc
      ? Math.max(18, Math.round((nextLoggedDateUtc - startUtc) / 86400000))
      : periodLen + follicularLen + ovulatoryLen + lutealLen;

  if (totalCycleLen <= 0) return [];

  if (!calendarState.repeatsOverAndOver && diffDays >= totalCycleLen) {
    return [];
  }

  const dayInCycle = diffDays % totalCycleLen; // 0-indexed day within cycle
  const cycleNumber = Math.floor(diffDays / totalCycleLen) + 1;
  const isTentativeFutureCycle = !nextLoggedDateUtc && cycleNumber > 1;
  const visible = calendarState.visiblePhases || {};
  const matched = [];

  const pEnd = periodLen - 1;
  const fStart = periodLen;
  const fEnd = fStart + follicularLen - 1;
  const oStart = fEnd + 1;
  const oEnd = oStart + ovulatoryLen - 1;
  const lStart = oEnd + 1;
  const lEnd = totalCycleLen - 1;

  // 1. First Day of Period (bright red box + darker red period bar overlap on day 0)
  if (dayInCycle === 0) {
    if (visible.FirstDayOfPeriod1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[0],
        isFirstDayBox: true,
        isLastPeriodDayBox: periodLen === 1,
        isTentativePrediction: isTentativeFutureCycle,
        dayInPhase: 1,
        dayInCycleNumber: dayInCycle + 1,
        cycleNumber
      });
    }
    if (periodLen > 1 && visible.PeriodDaysDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[1],
        isFirstDayBox: false,
        isLastPeriodDayBox: false,
        isTentativePrediction: isTentativeFutureCycle,
        dayInPhase: 1,
        dayInCycleNumber: dayInCycle + 1,
        cycleNumber
      });
    }
  } else if (dayInCycle > 0 && dayInCycle <= pEnd) {
    if (visible.PeriodDaysDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[1],
        isFirstDayBox: false,
        isLastPeriodDayBox: dayInCycle === pEnd,
        isTentativePrediction: isTentativeFutureCycle,
        dayInPhase: dayInCycle + 1,
        dayInCycleNumber: dayInCycle + 1,
        cycleNumber
      });
    }
  }

  // 2. Follicular Phase
  if (dayInCycle >= fStart && dayInCycle <= fEnd) {
    if (visible.FollicularPhaseDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[2],
        isTentativePrediction: isTentativeFutureCycle,
        dayInPhase: dayInCycle - fStart + 1,
        dayInCycleNumber: dayInCycle + 1,
        isPhaseStart: dayInCycle === fStart,
        isPhaseEnd: dayInCycle === fEnd,
        cycleNumber
      });
    }
  }

  // 3. Ovulatory Phase (with starred subheading "★ Easiest time to get pregnant")
  if (dayInCycle >= oStart && dayInCycle <= oEnd) {
    if (visible.OvulatoryPhaseDuration1 !== false) {
      matched.push({
        ...CYCLE_PHASE_DEFINITIONS[3],
        isTentativePrediction: isTentativeFutureCycle,
        dayInPhase: dayInCycle - oStart + 1,
        dayInCycleNumber: dayInCycle + 1,
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
        isTentativePrediction: isTentativeFutureCycle,
        dayInPhase: dayInCycle - lStart + 1,
        dayInCycleNumber: dayInCycle + 1,
        isPhaseStart: dayInCycle === lStart,
        isPhaseEnd: dayInCycle === lEnd,
        cycleNumber
      });
    }
  }

  // 5. Vibrant Neon Green Fertility Highlight Filter over Ovulation / Trying to Get Pregnant Window
  //    Active when user ticks the "Trying to Get Pregnant (Fertility)" checkbox in Settings!
  if (calendarState.fertilityTrackingEnabled && visible.FertilityGreenOverlay1 !== false) {
    const fertileLeadDays = Math.max(1, Math.min(7, Number(calendarState.FertileWindowDays1) || 5));
    const exactOvDays = Math.max(1, Math.min(2, Number(calendarState.ExactOvulationDays1) || 1));
    const postOvDays = Math.max(0, Math.min(3, Number(calendarState.PostOvulationFertileDays1) ?? 1));

    // Peak ovulation day sits at the end of the Ovulatory phase
    const peakOvStart = Math.max(oStart, oEnd - exactOvDays + 1);
    const peakOvEnd = oEnd;
    // The 1-2 days right before ovulation (highest single-day chance along with ovulation day)
    const highPreOvStart = Math.max(pEnd + 1, peakOvStart - 2);
    const fertileGreenStart = Math.max(pEnd + 1, peakOvEnd - fertileLeadDays + 1);
    const fertileGreenEnd = Math.min(lEnd, peakOvEnd + postOvDays);

    if (dayInCycle >= fertileGreenStart && dayInCycle <= fertileGreenEnd) {
      const isPeakOvulationDay = dayInCycle >= peakOvStart && dayInCycle <= peakOvEnd;
      const isHighFertilePreOvDay =
        !isPeakOvulationDay && dayInCycle >= highPreOvStart && dayInCycle < peakOvStart;
      const isPostOvulationDay = dayInCycle > peakOvEnd;
      matched.push({
        ...FERTILITY_GREEN_OVERLAY_DEFINITION,
        isFertilityGreenHighlight: true,
        isPeakOvulationDay,
        isHighFertilePreOvDay,
        isPostOvulationDay,
        rgbaFill: isPeakOvulationDay
          ? FERTILITY_GREEN_OVERLAY_DEFINITION.peakRgbaFill
          : isHighFertilePreOvDay
          ? FERTILITY_GREEN_OVERLAY_DEFINITION.highFertileRgbaFill
          : FERTILITY_GREEN_OVERLAY_DEFINITION.rgbaFill,
        neonGlow: isPeakOvulationDay
          ? FERTILITY_GREEN_OVERLAY_DEFINITION.peakNeonGlow
          : isHighFertilePreOvDay
          ? '0 0 8px rgba(0, 255, 102, 0.75), inset 0 0 0 2px #16A34A'
          : 'inset 0 0 0 1.75px #22C55E',
        dayInPhase: dayInCycle - fertileGreenStart + 1,
        dayInCycleNumber: dayInCycle + 1,
        isPhaseStart: dayInCycle === fertileGreenStart,
        isPhaseEnd: dayInCycle === fertileGreenEnd,
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
    tentativeFirstDayTag: 'Tentative 1st Day',
    lastDayTag: 'Last Day',
    repeatsNote: 'Repeats over and over again...',
    calSettingsTitle: 'Calendar Settings',
    calSettingsSubtitle:
      'Customize your Menstrual Cycle and optional Trying to Get Pregnant (Fertility) tracking. For logged-in accounts, your calendar is encrypted with your password.',
    addPasswordLabel: 'Add an Extra Calendar Lock Password',
    addPasswordDesc: 'Lock your cycle calendar with an extra password when opening the calendar widget.',
    passwordInputPlaceholder: 'Enter a password for your calendar...',
    menstrualSectionHeader: 'Menstrual Cycle',
    menstrualSectionSub:
      'Main automatic cycle frame on your calendar. As you log more monthly period dates, our cycle algorithm learns your body’s personal rhythm!',
    tryingToGetPregnantHeader: 'Trying to Get Pregnant (Fertility)',
    tryingToGetPregnantSub:
      'Check this box to turn on a vibrant neon green fertility highlight over your ovulation window and add the interactive Cycle & Fertility Wheel to your Calendar Key.',
    firstDayLabel: 'First Day of Period (Reported by User)',
    firstDayDesc: 'Bright red boxed day marking Day 1 of your menstrual bleeding.',
    periodDaysLabel: 'Days of Period (1–7 Days Customizable)',
    periodDaysDesc: 'Darker red bar spanning from your first day through your last day of period.',
    follicularLabel: 'Follicular Phase (1–7 Days Customizable)',
    follicularDesc: 'Warm orange translucent bar following your period as an egg matures.',
    ovulatoryLabel: 'Ovulatory Phase (1–7 Days Customizable)',
    ovulatoryStarredSub: '★ Easiest time to get pregnant',
    ovulatoryDesc: 'Pinkish-red translucent bar marking your fertile ovulation window.',
    lutealLabel: 'Luteal Phase (1–7 Days Customizable)',
    lutealDesc: 'Darkest pink translucent bar after ovulation until the next cycle begins.',
    fertilityMostLikelyDaysLabel: 'Most Likely Days to Get Pregnant (6-Day Sperm + Egg Window)',
    fertilityMostLikelyDaysDesc:
      'Pregnancy is most likely during the 6-day window (5 days before ovulation + ovulation day itself). Sperm can live inside you for 3 to 5 days waiting for the egg!',
    fertilityExactOvulationLabel: 'Exact Ovulation Day (Glowing Neon Green Peak Day)',
    fertilityExactOvulationDesc:
      'Once released, an egg lives for 12 to 24 hours. Having sex on ovulation day or the 1 to 2 days right before ovulation gives the highest single-day chance of getting pregnant.',
    fertilityPostOvulationLabel: 'Could Still Be Fertile After Ovulation',
    fertilityPostOvulationDesc:
      '1 day right after ovulation while the released egg can still be fertilized (12 to 24 hours).',
    fertilityShowInfertileLabel: 'Show "Unlikely to Get Pregnant" days on the Fertility Wheel',
    repeatsToggleLabel: 'Repeat & predict tentative cycle phases across future months',
    daysUnit: 'days',
    dayUnit: 'day',
    saveCalendarBtn: 'Save to My Calendar',
    clearToBlankBtn: 'Clear Calendar',
    blankStatusBadge: 'Currently Blank (No User Data Entered Yet)',
    activeStatusBadge: 'Encrypted Custom Cycle Active on Calendar',
    anonSessionBadge: 'Anonymous Session Only (Erased When You Leave)',
    calPhaseFirstDay: 'First Day of Period',
    calPhasePeriodDays: 'Period (1–7 Days)',
    calPhasePeriodTitleShort: 'Period',
    calPhaseFollicular: 'Follicular Phase',
    calPhaseOvulatory: 'Ovulatory Phase',
    calPhaseOvulatoryStarSub: '★ Easiest time to get pregnant',
    calPhaseLuteal: 'Luteal Phase',
    calFertilityGreenOverlayLabel: 'Trying to Get Pregnant (Neon Green)',
    calFertilityGreenOverlayBlurb:
      'Pregnancy is most likely during the 6-day window (5 days before ovulation + ovulation day). Sperm survive 3 to 5 days waiting for the egg, while the egg lives 12 to 24 hours. Having sex on ovulation day or 1 to 2 days right before gives the highest single-day chance!',
    calBlurbFirstDay:
      'Day 1 of your period when bleeding starts. You might have belly cramps, feel tired, or just want to rest and stay warm.',
    calBlurbPeriodDays:
      'Your body lets go of the soft lining inside your womb as period blood (usually for 3 to 7 days). You might feel tired, crampy, or sore before your energy comes back.',
    calBlurbFollicular:
      'Right after your period ends, your body gets a new tiny egg ready. You will often feel happier, clearer, and have much more energy to do things.',
    calBlurbOvulatory:
      'Your ovary lets go of a tiny egg (which stays alive for 12 to 24 hours). You may feel great energy, feel more interested in sex, and notice clear, slippery fluid in your underwear.',
    calBlurbLuteal:
      'Your womb builds a soft, thick lining in case a baby starts growing. If you are not pregnant, your body gets ready for your next period. You may feel hungrier, bloated, emotional, tired, or have sore breasts.',
    autoBaselineBannerTitle: 'Smart Cycle & Next-Period Prediction Algorithm',
    autoBaselineBannerDesc:
      'Pick your First Day of Period! Our recency-weighted cycle algorithm automatically predicts your tentative next period and adjusts your phases as you log more months.',
    resetToBaselineBtn: 'Reset to Smart Estimate',
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
    tentativeFirstDayTag: 'متوقع ١',
    lastDayTag: 'اليوم الأخير',
    repeatsNote: 'يتكرر باستمرار...',
    calSettingsTitle: 'إعدادات التقويم',
    calSettingsSubtitle: 'خصّصي مراحل دورتكِ الشهرية وخيار محاولة الحمل (الخصوبة).',
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
    ovulatoryStarredSub: '★ أسهل وقت لحدوث الحمل',
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
    calPhaseOvulatoryStarSub: '★ أسهل وقت لحدوث الحمل',
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
    tentativeFirstDayTag: '1er Día Est.',
    lastDayTag: 'Último Día',
    repeatsNote: 'Se repite una y otra vez...',
    calSettingsTitle: 'Ajustes del Calendario',
    calSettingsSubtitle: 'Personaliza las fases de tu ciclo y la opción Buscando Embarazo (Fertilidad).',
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
    ovulatoryStarredSub: '★ Momento más fácil para quedar embarazada',
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
    calPhaseOvulatoryStarSub: '★ Momento más fácil para quedar embarazada',
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
    tentativeFirstDayTag: '1er Jour Est.',
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
    ovulatoryStarredSub: '★ Moment le plus facile pour tomber enceinte',
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
    calPhaseOvulatoryStarSub: '★ Moment le plus facile pour tomber enceinte',
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

// Reusable SVG Icon: Gear with a Heart inside (for CalendarSettingsButton1)
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
    h('path', {
      d: 'M16.2 6.2 H19.8 L20.4 9.1 C21.3 9.4 22.1 9.9 22.8 10.5 L25.6 9.3 L28.1 11.8 L26.9 14.6 C27.5 15.3 28.0 16.1 28.3 17.0 L31.2 17.6 V21.2 L28.3 21.8 C28.0 22.7 27.5 23.5 26.9 24.2 L28.1 27.0 L25.6 29.5 L22.8 28.3 C22.1 28.9 21.3 29.4 20.4 29.7 L19.8 32.6 H16.2 L15.6 29.7 C14.7 29.4 13.9 28.9 13.2 28.3 L10.4 29.5 L7.9 27.0 L9.1 24.2 C8.5 23.5 8.0 22.7 7.7 21.8 L4.8 21.2 V17.6 L7.7 17.0 C8.0 16.1 8.5 15.3 9.1 14.6 L7.9 11.8 L10.4 9.3 L13.2 10.5 C13.9 9.9 14.7 9.4 15.6 9.1 Z',
      fill: '#FFF9FC',
      stroke: strokeColor,
      strokeWidth: '1.9',
      strokeLinejoin: 'round'
    }),
    h('path', {
      d: 'M18 24.2 C18 24.2 12.2 20.3 12.2 16.6 C12.2 14.6 13.8 13.2 15.6 13.2 C16.7 13.2 17.6 13.8 18 14.6 C18.4 13.8 19.3 13.2 20.4 13.2 C22.2 13.2 23.8 14.6 23.8 16.6 C23.8 20.3 18 24.2 18 24.2 Z',
      fill: heartFill,
      stroke: strokeColor,
      strokeWidth: '1.5',
      strokeLinejoin: 'round'
    })
  );
}
