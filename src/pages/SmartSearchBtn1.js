import React, { useState, useEffect, useMemo } from 'https://esm.sh/react@18.3.1';
import { ALL_NATIONS_ON_EARTH } from './DatabasePage1.js?v=265';
import { isRtlLanguage } from '../data/translations.js?v=265';

const h = React.createElement;

// ==============================================================================
// Global Helper for Deep-Linking Into a Hub's Internal Sub-Page From SmartSearchBtn1
// ==============================================================================
export function consumePendingEducationSubPage() {
  if (typeof window === 'undefined') return null;
  const sub = window.__fempowherPendingSubPage || null;
  window.__fempowherPendingSubPage = null;
  return sub;
}

export function setPendingEducationSubPage(subPageId) {
  if (typeof window !== 'undefined') {
    window.__fempowherPendingSubPage = subPageId || null;
  }
}

// ==============================================================================
// Levenshtein Edit Distance + Phonetic Normalization for Closest-Word Fuzzy Search
// ==============================================================================
function normalizePhonetic(word = '') {
  return String(word || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .replace(/ph/g, 'f')
    .replace(/shun|tion|sion/g, 'tn')
    .replace(/([a-z])\1+/g, '$1');
}

export function levenshteinDistance(a = '', b = '') {
  const s = String(a).toLowerCase();
  const t = String(b).toLowerCase();
  if (s === t) return 0;
  if (!s.length) return t.length;
  if (!t.length) return s.length;

  const v0 = new Array(t.length + 1);
  const v1 = new Array(t.length + 1);
  for (let i = 0; i <= t.length; i++) v0[i] = i;

  for (let i = 0; i < s.length; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < t.length; j++) {
      const cost = s[i] === t[j] ? 0 : 1;
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (let j = 0; j <= t.length; j++) v0[j] = v1[j];
  }
  return v1[t.length];
}

// ==============================================================================
// 1. GEOGRAPHIC CLOSEST-WORD MATCHER (For Map Search Bar Only — 100% Geographic!)
// ==============================================================================
const EXTRA_GEO_PLACES = [
  'Uzbekistan',
  'Pakistan',
  'Afghanistan',
  'Bangladesh',
  'Bhutan',
  'Sudan',
  'South Sudan',
  'Yemen',
  'Oman',
  'Iran',
  'Bahrain',
  'Saudi Arabia',
  'United Arab Emirates',
  'Kyrgyzstan',
  'Kazakhstan',
  'Tajikistan',
  'Turkmenistan',
  'India',
  'Nepal',
  'Sri Lanka',
  'United States',
  'Massachusetts',
  'Boston',
  'Canada',
  'Mexico',
  'Brazil',
  'Colombia',
  'Argentina',
  'Peru',
  'Chile',
  'United Kingdom',
  'France',
  'Germany',
  'Spain',
  'Italy',
  'Ukraine',
  'Poland',
  'Nigeria',
  'Kenya',
  'Ethiopia',
  'Egypt',
  'Morocco',
  'South Africa',
  'Ghana',
  'Tanzania',
  'Uganda',
  'Rwanda',
  'Senegal',
  'Somalia',
  'Democratic Republic of the Congo',
  'Philippines',
  'Indonesia',
  'Vietnam',
  'Thailand',
  'Myanmar',
  'Cambodia',
  'Malaysia',
  'China',
  'Japan',
  'South Korea',
  'Australia',
  'New Zealand',
  'Haiti',
  'Jamaica',
  'Dominican Republic',
  'Guatemala',
  'Honduras',
  'El Salvador',
  'Venezuela',
  'Bolivia',
  'Ecuador',
  'Lebanon',
  'Jordan',
  'Iraq',
  'Syria',
  'Palestine',
  'Turkey',
  'Azerbaijan',
  'Armenia',
  'Georgia'
];

function toTitleCaseGeo(str = '') {
  return String(str)
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const GEO_DICTIONARY = (() => {
  const set = new Set();
  (ALL_NATIONS_ON_EARTH || []).forEach((n) => {
    const clean = String(n).replace(/\s*\([^)]*\)/g, '').trim();
    if (clean) set.add(toTitleCaseGeo(clean));
  });
  EXTRA_GEO_PLACES.forEach((p) => set.add(p));
  return Array.from(set);
})();

export function findClosestGeoPlace(rawQuery = '') {
  const q = String(rawQuery || '').trim();
  if (q.length < 3) return null;
  const qLower = q.toLowerCase();
  const qPhonetic = normalizePhonetic(q);

  // If already an exact match, no need for "Did you mean"
  for (const place of GEO_DICTIONARY) {
    if (place.toLowerCase() === qLower) {
      return { exact: true, suggestion: place };
    }
  }

  let bestPlace = null;
  let bestScore = Infinity;

  for (const place of GEO_DICTIONARY) {
    const pLower = place.toLowerCase();
    const pPhonetic = normalizePhonetic(place);

    // Check prefix match on longer queries (e.g. "uzbek" -> "Uzbekistan")
    if (qLower.length >= 4 && pLower.startsWith(qLower)) {
      const diff = (pLower.length - qLower.length) * 0.25;
      if (diff < bestScore) {
        bestScore = diff;
        bestPlace = place;
      }
      continue;
    }

    const distRaw = levenshteinDistance(qLower, pLower);
    const distPhon = levenshteinDistance(qPhonetic, pPhonetic);
    const dist = Math.min(distRaw, distPhon);

    // Also compare against individual words in multi-word country names
    const words = pLower.split(/\s+/);
    let wordDist = dist;
    if (words.length > 1) {
      for (const w of words) {
        if (w.length >= 4) {
          wordDist = Math.min(wordDist, levenshteinDistance(qLower, w) + 0.5);
        }
      }
    }

    const effectiveDist = Math.min(dist, wordDist);
    const maxAllowed = qLower.length <= 5 ? 2 : qLower.length <= 8 ? 3 : 4;

    if (effectiveDist <= maxAllowed && effectiveDist < bestScore) {
      bestScore = effectiveDist;
      bestPlace = place;
    }
  }

  if (bestPlace) {
    return { exact: false, suggestion: bestPlace };
  }
  return null;
}

// ==============================================================================
// 2. 3-TIER MY BODY & HEALTH SEARCH INDEX (Tier 1 -> Tier 2 -> Tier 3)
// ==============================================================================
// Tier 1: Main My Body & Health Table Buttons
// Tier 2: GIF Sub-Buttons inside Hub Homepages
// Tier 3: Page Writing & Section Headings inside Articles
export const MY_BODY_HEALTH_3TIER_INDEX = [
  // ============================================================================
  // TIER 1: MAIN MY BODY & HEALTH BUTTONS (10 Main Categories)
  // ============================================================================
  {
    id: 'tier1-my-body',
    tier: 1,
    title: 'My Body',
    page: 'MyBodyHomePage',
    subPage: null,
    keywords: 'my body anatomy vagina vulva uterus womb ovaries fallopian tubes cervix clitoris breasts hormones pelvic floor'
  },
  {
    id: 'tier1-menstrual-cycle',
    tier: 1,
    title: 'Menstrual Cycle',
    page: 'MenstrualCycleHomePage',
    subPage: null,
    keywords: 'menstrual cycle period menstruation bleeding cramps calendar ovulation fertility pads tampons'
  },
  {
    id: 'tier1-sexual-health',
    tier: 1,
    title: 'Sexual Health',
    page: 'SexualHealthHomePage',
    subPage: null,
    keywords: 'sexual health sex intimacy contraception birth control virginity hymen painful sex consent stds'
  },
  {
    id: 'tier1-family-planning',
    tier: 1,
    title: 'Family Planning',
    page: 'FamilyPlanningHomePage1',
    subPage: null,
    keywords: 'family planning birth control contraception spacing pregnancies preconception having a baby emergency contraception'
  },
  {
    id: 'tier1-pregnancy-and-birth',
    tier: 1,
    title: 'Pregnancy & Birth',
    page: 'PregnancyAndBirthHomePage',
    subPage: null,
    keywords: 'pregnancy and birth pregnant childbirth labor delivery baby prenatal preconception trimesters'
  },
  {
    id: 'tier1-postpartum',
    tier: 1,
    title: 'Postpartum',
    page: 'PostpartumHomePage',
    subPage: null,
    keywords: 'postpartum after birth fourth trimester breastfeeding lochia bleeding depression recovery c-section'
  },
  {
    id: 'tier1-loss-of-a-child',
    tier: 1,
    title: 'Loss of a Child',
    page: 'LossOfAChildHomePage',
    subPage: null,
    keywords: 'loss of a child miscarriage stillbirth infant loss baby death grief bereavement pregnant after loss'
  },
  {
    id: 'tier1-abortions',
    tier: 1,
    title: 'Abortions',
    page: 'AbortionsHomePage1',
    subPage: null,
    keywords: 'abortions termination of pregnancy medication pills mifepristone misoprostol vacuum aspiration karman d&c d&e post-abortion care'
  },
  {
    id: 'tier1-menopause',
    tier: 1,
    title: 'Menopause',
    page: 'MenopauseHomePage',
    subPage: null,
    keywords: 'menopause perimenopause postmenopause hot flashes period stopped aging hormone replacement'
  },
  {
    id: 'tier1-diseases-injuries',
    tier: 1,
    title: 'Reproductive Health Diseases & Injuries',
    page: 'DiseasesAndInjuriesHomePage',
    subPage: null,
    keywords: 'reproductive health diseases and injuries stds infections endometriosis fistula pid breast cancer cervical cancer ovarian uterine cancer'
  },
  {
    id: 'tier1-stigmas',
    tier: 1,
    title: "Stigmas in Women's Health",
    page: 'StigmasInWomensHealthHomePage1',
    subPage: null,
    keywords: 'stigmas in womens health myths taboos period shame virginity testing infertility blame fgm'
  },

  // ============================================================================
  // TIER 2: GIF SUB-BUTTONS INSIDE HUB HOMEPAGES
  // ============================================================================
  // --- Inside My Body ---
  {
    id: 'tier2-mybody-external',
    tier: 2,
    title: 'External Anatomy (Vulva, Clitoris & Labia)',
    parentTitle: 'My Body',
    page: 'MyBodyHomePage',
    subPage: null,
    keywords: 'external anatomy vulva clitoris labia urethra hymen vaginal opening'
  },
  {
    id: 'tier2-mybody-internal',
    tier: 2,
    title: 'Internal Reproductive Organs (Vagina, Cervix, Uterus, Tubes & Ovaries)',
    parentTitle: 'My Body',
    page: 'MyBodyHomePage',
    subPage: null,
    keywords: 'internal organs vagina cervix uterus womb endometrium fallopian tubes ovaries eggs'
  },

  // --- Inside Menstrual Cycle ---
  {
    id: 'tier2-cycle-first-period',
    tier: 2,
    title: 'I Just Got My First Period!',
    parentTitle: 'Menstrual Cycle',
    page: 'FirstPeriodHomePage',
    subPage: null,
    keywords: 'first period menarche puberty pads tampons bleeding cramps young girl'
  },
  {
    id: 'tier2-cycle-my-cycle',
    tier: 2,
    title: 'My Cycle (Phases, Hormones & Calendar)',
    parentTitle: 'Menstrual Cycle',
    page: 'MyCycleSubHomePage',
    subPage: null,
    keywords: 'my cycle menstrual follicular ovulation luteal phases hormones calendar tracker'
  },
  {
    id: 'tier2-cycle-fertility',
    tier: 2,
    title: 'Fertility & My Cycle',
    parentTitle: 'Menstrual Cycle',
    page: 'FertilityAndMyCycleHomePage1',
    subPage: null,
    keywords: 'fertility and my cycle fertile window ovulation egg sperm getting pregnant'
  },
  {
    id: 'tier2-cycle-calendar',
    tier: 2,
    title: 'Interactive Menstrual Cycle Calendar',
    parentTitle: 'Menstrual Cycle',
    page: 'InteractiveCalendarHomePage1',
    subPage: null,
    keywords: 'interactive calendar track period fertile days ovulation prediction log symptoms'
  },
  {
    id: 'tier2-cycle-painful-periods',
    tier: 2,
    title: 'My Periods Are Very Painful or Heavy!',
    parentTitle: 'Menstrual Cycle',
    page: 'PainfulPeriodsHomePage',
    subPage: null,
    keywords: 'painful periods dysmenorrhea heavy bleeding menorrhagia clots cramps fibroids endometriosis anemia'
  },
  {
    id: 'tier2-cycle-period-stopped',
    tier: 2,
    title: 'My Period Stopped or Is Irregular!',
    parentTitle: 'Menstrual Cycle',
    page: 'PeriodStoppedHomePage',
    subPage: null,
    keywords: 'period stopped missed period amenorrhea irregular cycle pregnancy stress pcos breastfeeding thyroid'
  },

  // --- Inside Sexual Health ---
  {
    id: 'tier2-sh-what-is-sex',
    tier: 2,
    title: 'What is sex?',
    parentTitle: 'Sexual Health',
    page: 'SexualHealthHomePage',
    subPage: 'sh-what-is-sex',
    keywords: 'what is sex intimacy arousal clitoris lubrication intercourse consent'
  },
  {
    id: 'tier2-sh-contraception',
    tier: 2,
    title: 'Contraception',
    parentTitle: 'Sexual Health',
    page: 'SexualHealthHomePage',
    subPage: 'sh-contraception',
    keywords: 'contraception birth control condoms iud implant pills injection patch ring emergency contraception'
  },
  {
    id: 'tier2-sh-first-time',
    tier: 2,
    title: 'I just had sex for the first time!',
    parentTitle: 'Sexual Health',
    page: 'SexualHealthHomePage',
    subPage: 'sh-first-time-sex',
    keywords: 'first time sex virginity hymen bleeding myth peeing after sex uti morning after pill'
  },
  {
    id: 'tier2-sh-dont-want-sex',
    tier: 2,
    title: 'I don’t want to have sex.',
    parentTitle: 'Sexual Health',
    page: 'SexualHealthHomePage',
    subPage: 'sh-dont-want-sex',
    keywords: 'dont want to have sex saying no consent boundaries coercion pressure safe haven'
  },
  {
    id: 'tier2-sh-pain-during-sex',
    tier: 2,
    title: 'Sex hurts!',
    parentTitle: 'Sexual Health',
    page: 'SexualHealthHomePage',
    subPage: 'sh-pain-during-sex',
    keywords: 'sex hurts painful intercourse dyspareunia vaginismus dryness lubricant bleeding after sex'
  },
  {
    id: 'tier2-sh-stds',
    tier: 2,
    title: 'STDs (Sexually Transmitted Diseases)',
    parentTitle: 'Sexual Health',
    page: 'STDMenuHomePage',
    subPage: null,
    keywords: 'stds sti sexually transmitted diseases infections testing treatment condoms'
  },

  // --- Inside Family Planning ---
  {
    id: 'tier2-fp-my-family-planning',
    tier: 2,
    title: 'My Family Planning',
    parentTitle: 'Family Planning',
    page: 'FamilyPlanningHomePage1',
    subPage: 'fp-my-family-planning',
    keywords: 'my family planning timeline fertile window when to have children'
  },
  {
    id: 'tier2-fp-contraception-options',
    tier: 2,
    title: 'My Birth Control & Contraception Options',
    parentTitle: 'Family Planning',
    page: 'ForMeHomePage',
    subPage: null,
    keywords: 'my birth control and contraception options family planning iud implant pills condoms injection'
  },
  {
    id: 'tier2-fp-emergency-contraception',
    tier: 2,
    title: 'Emergency Contraceptions & Options',
    parentTitle: 'Family Planning',
    page: 'FamilyPlanningHomePage1',
    subPage: 'fp-emergency-contraception',
    keywords: 'emergency contraceptions morning after pill levonorgestrel ulipristal copper iud 72 hours 5 days'
  },
  {
    id: 'tier2-fp-pregnancy-spacing',
    tier: 2,
    title: 'Healthy Spacing Between Pregnancies',
    parentTitle: 'Family Planning',
    page: 'FamilyPlanningHomePage1',
    subPage: 'fp-healthy-pregnancy-spacing',
    keywords: 'healthy spacing between pregnancies 18 to 24 months c-section recovery family planning'
  },
  {
    id: 'tier2-fp-preconception',
    tier: 2,
    title: 'Pre-Conception (Planning for a Baby)',
    parentTitle: 'Family Planning',
    page: 'PreConceptionHomePage',
    subPage: null,
    keywords: 'pre-conception planning for a baby folic acid prenatal vitamins trying to conceive family'
  },
  {
    id: 'tier2-fp-loved-one',
    tier: 2,
    title: 'For a Loved One (Supporting a Partner, Sister, or Friend)',
    parentTitle: 'Family Planning',
    page: 'ForALovedOneHomePage',
    subPage: null,
    keywords: 'for a loved one supporting partner sister friend family planning'
  },

  // --- Inside Pregnancy & Birth / Pre-Conception / Pregnancy ---
  {
    id: 'tier2-preg-preconception',
    tier: 2,
    title: 'Pre-Conception',
    parentTitle: 'Pregnancy & Birth',
    page: 'PreConceptionHomePage',
    subPage: null,
    keywords: 'preconception thinking about having a baby trying to get pregnant infertility'
  },
  {
    id: 'tier2-preg-thinking-baby',
    tier: 2,
    title: 'I Am Thinking About Having a Baby',
    parentTitle: 'Pre-Conception',
    page: 'ThinkingAboutBabyHomePage',
    subPage: null,
    keywords: 'thinking about having a baby folic acid vaccines health checkup preconception'
  },
  {
    id: 'tier2-preg-trying-baby',
    tier: 2,
    title: 'I Am Trying to Have a Baby',
    parentTitle: 'Pre-Conception',
    page: 'TryingToHaveBabyHomePage',
    subPage: null,
    keywords: 'trying to have a baby ovulation fertile days conception sperm egg'
  },
  {
    id: 'tier2-preg-hard-time-getting-pregnant',
    tier: 2,
    title: 'I Am Having a Hard Time Getting Pregnant',
    parentTitle: 'Pre-Conception',
    page: 'HardTimeGettingPregnantHomePage',
    subPage: null,
    keywords: 'hard time getting pregnant infertility pcos blocked tubes male factor fertility testing'
  },
  {
    id: 'tier2-preg-currently-pregnant',
    tier: 2,
    title: 'I Am Pregnant',
    parentTitle: 'Pregnancy & Birth',
    page: 'PregnancyHomePage',
    subPage: null,
    keywords: 'i am pregnant prenatal care trimesters fetus growth warning signs'
  },
  {
    id: 'tier2-preg-feeling-good',
    tier: 2,
    title: 'I Am Pregnant and I Am Feeling Good!',
    parentTitle: 'I Am Pregnant',
    page: 'FeelingGoodPregHomePage',
    subPage: null,
    keywords: 'pregnant and feeling good prenatal vitamins nutrition safe exercise fetal movement'
  },
  {
    id: 'tier2-preg-questions',
    tier: 2,
    title: 'I Am Pregnant and I Have Questions',
    parentTitle: 'I Am Pregnant',
    page: 'QuestionsPregHomePage',
    subPage: null,
    keywords: 'pregnant and have questions ultrasound due date body changes nausea heartburn'
  },
  {
    id: 'tier2-preg-hard-time',
    tier: 2,
    title: 'I Am Pregnant and Having a Hard Time',
    parentTitle: 'I Am Pregnant',
    page: 'HardTimePregHomePage',
    subPage: null,
    keywords: 'pregnant and having a hard time preeclampsia bleeding gestational diabetes severe vomiting hyperemesis depression'
  },
  {
    id: 'tier2-preg-childbirth',
    tier: 2,
    title: 'Childbirth & Labor',
    parentTitle: 'Pregnancy & Birth',
    page: 'ChildbirthHomePage',
    subPage: null,
    keywords: 'childbirth and labor contractions water breaking vaginal birth c-section midwife hospital'
  },

  // --- Inside Loss of a Child ---
  {
    id: 'tier2-loss-miscarriage',
    tier: 2,
    title: 'I’ve Had a Miscarriage',
    parentTitle: 'Loss of a Child',
    page: 'MiscarriageHomePage',
    subPage: null,
    keywords: 'ive had a miscarriage early pregnancy loss molar pregnancy ectopic bleeding cramps grief'
  },
  {
    id: 'tier2-loss-stillbirth',
    tier: 2,
    title: 'I’ve Had a Stillbirth',
    parentTitle: 'Loss of a Child',
    page: 'LossOfAChildHomePage',
    subPage: 'loss-stillbirth',
    keywords: 'ive had a stillbirth baby died in womb labor birth induction placenta footprints breast milk'
  },
  {
    id: 'tier2-loss-infant',
    tier: 2,
    title: 'I’ve Lost an Infant',
    parentTitle: 'Loss of a Child',
    page: 'LossOfAChildHomePage',
    subPage: 'loss-infant',
    keywords: 'ive lost an infant newborn death neonatal loss sids sudi premature infection breast milk'
  },
  {
    id: 'tier2-loss-child',
    tier: 2,
    title: 'I’ve Lost My Child',
    parentTitle: 'Loss of a Child',
    page: 'LossOfAChildHomePage',
    subPage: 'loss-child',
    keywords: 'ive lost my child grieving with your other children child death grief family'
  },
  {
    id: 'tier2-loss-pregnant-after-loss',
    tier: 2,
    title: 'I Am Pregnant After a Loss',
    parentTitle: 'Loss of a Child',
    page: 'PregnancyAfterLossHomePage',
    subPage: null,
    keywords: 'i am pregnant after a loss rainbow baby anxiety after miscarriage or stillbirth prenatal care'
  },

  // --- Inside Abortions ---
  {
    id: 'tier2-abortion-what-is',
    tier: 2,
    title: 'What Is an Abortion?',
    parentTitle: 'Abortions',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-what-is',
    keywords: 'what is an abortion definition types of abortions induced spontaneous therapeutic karman vacuum aspiration d&c d&e patient packet'
  },
  {
    id: 'tier2-abortion-safe-unsafe',
    tier: 2,
    title: 'Safe and Unsafe Abortion Care',
    parentTitle: 'Abortions',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-safe-and-unsafe',
    keywords: 'safe and unsafe abortion care less safe least safe dangerous methods under 12 weeks over 12 weeks'
  },
  {
    id: 'tier2-abortion-options',
    tier: 2,
    title: 'What Are My Options? (Medication Pills vs. In-Clinic Care)',
    parentTitle: 'Abortions',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-options',
    keywords: 'what are my options medication pills mifepristone misoprostol in-clinic vacuum aspiration karman cannula d&c d&e pain relief ibuprofen'
  },
  {
    id: 'tier2-abortion-recovery',
    tier: 2,
    title: 'I Just Had an Abortion: What Is Happening to My Body?',
    parentTitle: 'Abortions',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-recovery',
    keywords: 'i just had an abortion what is happening to my body normal bleeding clots cramps pregnancy test 4-question checklist'
  },
  {
    id: 'tier2-abortion-emergency',
    tier: 2,
    title: 'Emergency Post-Abortion Care & Danger Signs',
    parentTitle: 'Abortions',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-emergency-care',
    keywords: 'emergency post-abortion care danger signs heavy bleeding 2 pads per hour fever infection identical to miscarriage'
  },
  {
    id: 'tier2-abortion-emotions-fertility',
    tier: 2,
    title: 'Emotional Care, Privacy & My Future Fertility',
    parentTitle: 'Abortions',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-emotions-and-fertility',
    keywords: 'emotional care privacy future fertility ovulation 8 to 14 days contraception after abortion'
  },

  // --- Inside Menopause ---
  {
    id: 'tier2-meno-what-is',
    tier: 2,
    title: 'What Is Menopause?',
    parentTitle: 'Menopause',
    page: 'WhatIsMenopauseHomePage',
    subPage: null,
    keywords: 'what is menopause perimenopause 12 months without period estrogen progesterone ovaries'
  },
  {
    id: 'tier2-meno-starting',
    tier: 2,
    title: 'I Think I Am Starting Menopause',
    parentTitle: 'Menopause',
    page: 'StartingMenopauseHomePage',
    subPage: null,
    keywords: 'starting menopause perimenopause irregular periods hot flashes night sweats sleep mood'
  },
  {
    id: 'tier2-meno-hard-time',
    tier: 2,
    title: 'I Am Having a Hard Time With Menopause',
    parentTitle: 'Menopause',
    page: 'HardTimeMenopauseHomePage',
    subPage: null,
    keywords: 'hard time with menopause severe hot flashes vaginal dryness hormone therapy cooling tips'
  },
  {
    id: 'tier2-meno-after',
    tier: 2,
    title: 'Life After Menopause (Bone, Heart & Pelvic Health)',
    parentTitle: 'Menopause',
    page: 'AfterMenopauseHomePage',
    subPage: null,
    keywords: 'after menopause postmenopause osteoporosis bone calcium heart health postmenopausal bleeding'
  },

  // --- Inside Stigmas in Women's Health ---
  {
    id: 'tier2-stigma-abortion',
    tier: 2,
    title: 'Abortion Stigma',
    parentTitle: "Stigmas in Women's Health",
    page: 'StigmasInWomensHealthHomePage1',
    subPage: 'stigma-abortion',
    keywords: 'abortion stigma dangerous myths and methods to avoid herbal teas sharp objects wrong pill doses shame taboo'
  },

  // --- Inside STDs & Reproductive Health Diseases & Injuries ---
  {
    id: 'tier2-std-what-are',
    tier: 2,
    title: 'What Are STDs?',
    parentTitle: 'STDs',
    page: 'WhatAreSTDsHomePage1',
    subPage: null,
    keywords: 'what are stds sexually transmitted infections bacteria viruses parasites prevention'
  },
  {
    id: 'tier2-std-think-i-have',
    tier: 2,
    title: 'I Think I Might Have an STD',
    parentTitle: 'STDs',
    page: 'ThinkIHaveSTDHomePage1',
    subPage: null,
    keywords: 'think i have an std symptoms discharge burning sores itching testing clinic'
  },
  {
    id: 'tier2-std-just-diagnosed',
    tier: 2,
    title: 'I Just Got Diagnosed With an STD',
    parentTitle: 'STDs',
    page: 'JustDiagnosedSTDHomePage1',
    subPage: null,
    keywords: 'just diagnosed with an std treatment antibiotics partner treatment no shame'
  },
  {
    id: 'tier2-std-types',
    tier: 2,
    title: 'Types of STDs',
    parentTitle: 'STDs',
    page: 'TypesOfSTDsHomePage1',
    subPage: null,
    keywords: 'types of stds chlamydia gonorrhea trichomoniasis hpv herpes syphilis hepatitis b hiv mycoplasma'
  },
  {
    id: 'tier2-std-pregnancy',
    tier: 2,
    title: 'STDs & Pregnancy',
    parentTitle: 'STDs',
    page: 'STDsAndPregnancyHomePage1',
    subPage: null,
    keywords: 'stds and pregnancy protecting newborn syphilis hiv chlamydia gonorrhea prenatal screening'
  },
  {
    id: 'tier2-std-chlamydia',
    tier: 2,
    title: 'Chlamydia',
    parentTitle: 'Types of STDs',
    page: 'ChlamydiaHomePage1',
    subPage: null,
    keywords: 'chlamydia bacterial std curable antibiotics silent infection pid infertility'
  },
  {
    id: 'tier2-std-gonorrhea',
    tier: 2,
    title: 'Gonorrhea',
    parentTitle: 'Types of STDs',
    page: 'GonorrheaHomePage1',
    subPage: null,
    keywords: 'gonorrhea bacterial std curable ceftriaxone injection discharge burning pid'
  },
  {
    id: 'tier2-std-trichomoniasis',
    tier: 2,
    title: 'Trichomoniasis',
    parentTitle: 'Types of STDs',
    page: 'TrichomonasHomePage1',
    subPage: null,
    keywords: 'trichomoniasis trich parasite std metronidazole discharge itching treat both partners'
  },
  {
    id: 'tier2-std-hpv',
    tier: 2,
    title: 'HPV (Human Papillomavirus)',
    parentTitle: 'Types of STDs',
    page: 'HPVHomePage1',
    subPage: null,
    keywords: 'hpv human papillomavirus vaccine pap smear cervical cancer genital warts'
  },
  {
    id: 'tier2-std-herpes',
    tier: 2,
    title: 'Genital Herpes (HSV-1 & HSV-2)',
    parentTitle: 'Types of STDs',
    page: 'GenitalHerpesHomePage1',
    subPage: null,
    keywords: 'genital herpes hsv blisters sores valacyclovir acyclovir outbreaks pregnancy'
  },
  {
    id: 'tier2-std-syphilis',
    tier: 2,
    title: 'Syphilis',
    parentTitle: 'Types of STDs',
    page: 'SyphilisHomePage1',
    subPage: null,
    keywords: 'syphilis chancre sore rash penicillin injection curable stillbirth prevention'
  },
  {
    id: 'tier2-std-hep-b',
    tier: 2,
    title: 'Hepatitis B',
    parentTitle: 'Types of STDs',
    page: 'HepatitisBHomePage1',
    subPage: null,
    keywords: 'hepatitis b liver virus vaccine jaundice newborn protection'
  },
  {
    id: 'tier2-std-hiv',
    tier: 2,
    title: 'HIV & AIDS',
    parentTitle: 'Types of STDs',
    page: 'HIVHomePage1',
    subPage: null,
    keywords: 'hiv aids antiretroviral therapy art undetectable u=u prep pep pregnancy'
  },
  {
    id: 'tier2-std-mgen',
    tier: 2,
    title: 'Mycoplasma Genitalium (Mgen)',
    parentTitle: 'Types of STDs',
    page: 'MycoplasmaGenitaliumHomePage1',
    subPage: null,
    keywords: 'mycoplasma genitalium mgen bacterial std persistent cervicitis pid'
  },
  {
    id: 'tier2-disease-endometriosis',
    tier: 2,
    title: 'Endometriosis',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'EndometriosisHomePage1',
    subPage: null,
    keywords: 'endometriosis severe period pain pelvic pain painful sex cysts infertility'
  },
  {
    id: 'tier2-disease-pid',
    tier: 2,
    title: 'Pelvic Inflammatory Disease (PID)',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'PelvicInflammatoryDiseaseHomePage1',
    subPage: null,
    keywords: 'pelvic inflammatory disease pid fallopian tube infection lower belly pain fever antibiotics'
  },
  {
    id: 'tier2-disease-fistula',
    tier: 2,
    title: 'Obstetric Fistula',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'FistulaHomePage1',
    subPage: null,
    keywords: 'obstetric fistula prolonged obstructed labor leaking urine surgical repair dignity'
  },
  {
    id: 'tier2-disease-breast-cancer',
    tier: 2,
    title: 'Breast Cancer',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'BreastCancerHomePage1',
    subPage: null,
    keywords: 'breast cancer lump mammogram self-check nipple changes early detection'
  },
  {
    id: 'tier2-disease-cervical-cancer',
    tier: 2,
    title: 'Cervical Cancer',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'CervicalCancerHomePage1',
    subPage: null,
    keywords: 'cervical cancer hpv vaccine pap test via screening abnormal bleeding'
  },
  {
    id: 'tier2-disease-ovarian-cancer',
    tier: 2,
    title: 'Ovarian Cancer',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'OvarianCancerHomePage1',
    subPage: null,
    keywords: 'ovarian cancer persistent bloating belly swelling feeling full quickly pelvic ache'
  },
  {
    id: 'tier2-disease-uterine-cancer',
    tier: 2,
    title: 'Uterine (Endometrial) Cancer',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'UterineCancerHomePage1',
    subPage: null,
    keywords: 'uterine endometrial cancer bleeding after menopause abnormal heavy bleeding'
  },
  {
    id: 'tier2-disease-vaginal-vulvar-cancer',
    tier: 2,
    title: 'Vaginal & Vulvar Cancers',
    parentTitle: 'Reproductive Health Diseases & Injuries',
    page: 'VaginalVulvarCancersHomePage1',
    subPage: null,
    keywords: 'vaginal and vulvar cancers persistent itching sore bump skin color change'
  },

  // ============================================================================
  // TIER 3: IN-PAGE WRITING, HEADINGS & CLINICAL PARAGRAPHS
  // ============================================================================
  {
    id: 'tier3-fp-writing-timeline',
    tier: 3,
    title: 'What Is Family Planning? Your Body, Your Future, Your Timeline',
    parentTitle: 'Family Planning → My Family Planning',
    page: 'FamilyPlanningHomePage1',
    subPage: 'fp-my-family-planning',
    snippet:
      'Family planning gives you the knowledge and medical tools to decide for yourself whether to have children, when to have them, and how many years to wait between each pregnancy.',
    keywords: 'family planning children fertile window ovulation sperm egg calendar'
  },
  {
    id: 'tier3-fp-writing-ec',
    tier: 3,
    title: 'Emergency Contraception (Morning-After Pill & Copper IUD Within 72 Hours to 5 Days)',
    parentTitle: 'Family Planning → Emergency Contraceptions',
    page: 'FamilyPlanningHomePage1',
    subPage: 'fp-emergency-contraception',
    snippet:
      'Emergency contraceptive pills (levonorgestrel or ulipristal acetate) prevent pregnancy after unprotected sex or a broken condom by delaying ovulation, and a Copper IUD within 5 days is over 99% effective.',
    keywords: 'emergency contraception morning after pill levonorgestrel ulipristal copper iud unprotected sex broken condom'
  },
  {
    id: 'tier3-loss-miscarriage-writing',
    tier: 3,
    title: 'What Is a Miscarriage, Molar Pregnancy & Ectopic Pregnancy (And Why It Is Never Your Fault)',
    parentTitle: 'Loss of a Child → I’ve Had a Miscarriage',
    page: 'MiscarriageHomePage',
    subPage: null,
    snippet:
      'A miscarriage is the natural loss of a pregnancy before 20 weeks and happens in about 1 in 4 known pregnancies due to random chromosome differences, molar pregnancy, or ectopic pregnancy. It is never caused by work, walking, or stress.',
    keywords: 'miscarriage early pregnancy loss chromosome molar pregnancy ectopic fallopian tube bleeding pads iron grief'
  },
  {
    id: 'tier3-loss-stillbirth-labor-writing',
    tier: 3,
    title: 'Going Through Labor and Giving Birth When Your Baby Has Died (Antepartum & Intrapartum Stillbirth)',
    parentTitle: 'Loss of a Child → I’ve Had a Stillbirth',
    page: 'LossOfAChildHomePage',
    subPage: 'loss-stillbirth',
    snippet:
      'Nearly 2 million stillbirths happen worldwide each year. Learning you must still go through labor and give birth is deeply painful; doctors usually recommend induction of labor and vaginal birth for safer physical recovery, alongside bereavement care, memory-making, and gently stopping breast milk.',
    keywords: 'stillbirth labor giving birth induction vaginal delivery placenta umbilical cord preeclampsia syphilis malaria footprints cooled cot breast milk lochia'
  },
  {
    id: 'tier3-loss-infant-writing',
    tier: 3,
    title: 'Losing a Newborn or Baby in the First Year of Life & Safe Breast Milk Weaning',
    parentTitle: 'Loss of a Child → I’ve Lost an Infant',
    page: 'LossOfAChildHomePage',
    subPage: 'loss-infant',
    snippet:
      'Covers neonatal loss in the first 28 days, SIDS/SUDI, preterm birth, and severe newborn infections, plus how to slow down breast milk safely with a snug bra and cold packs to prevent mastitis.',
    keywords: 'infant loss newborn neonatal sids sudi premature birth asphyxia sepsis mastitis breast milk engorged grief'
  },
  {
    id: 'tier3-loss-child-other-children-writing',
    tier: 3,
    title: 'Grieving With Your Other Children & Taking Things at Your Own Pace',
    parentTitle: 'Loss of a Child → I’ve Lost My Child',
    page: 'LossOfAChildHomePage',
    subPage: 'loss-child',
    snippet:
      'Everyone grieves differently and there is no checklist to follow. Includes gentle, open-ended ways to comfort your other children, use simple honest words instead of "went to sleep," and move at your own pace with family and visitors.',
    keywords: 'grieving with your other children lost my child family grief stress hormones cycle visitors pace'
  },
  {
    id: 'tier3-loss-preg-after-loss-writing',
    tier: 3,
    title: 'Managing Fear on Ultrasound Days & Loving a New Baby Without Forgetting the Baby You Lost',
    parentTitle: 'Loss of a Child → I Am Pregnant After a Loss',
    page: 'PregnancyAfterLossHomePage',
    subPage: null,
    snippet:
      'Being pregnant again after a miscarriage, stillbirth, or infant loss brings both hope and fear. Covers milestone anxiety, partner grief styles, extra heartbeat checks, and postpartum emotions.',
    keywords: 'pregnant after a loss rainbow baby ultrasound anxiety milestone due date partner support postpartum'
  },
  {
    id: 'tier3-abortion-what-is-writing',
    tier: 3,
    title: 'How Medication Pills, Karman Vacuum Aspiration, D&C, and D&E Work (<12 Weeks & ≥12 Weeks)',
    parentTitle: 'Abortions → What Is an Abortion?',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-what-is',
    snippet:
      'Around 73 million induced abortions take place worldwide each year. Explains medication tablets (mifepristone + misoprostol under 12 weeks and clinical induction over 12 weeks), Karman cannula vacuum aspiration, D&C, D&E, and includes the translatable Self-Care Patient Information Packet.',
    keywords: 'what is an abortion 73 million mifepristone misoprostol karman cannula manual vacuum aspiration mva eva d&c dilation and curettage d&e dilation and evacuation laminaria types of abortions patient packet'
  },
  {
    id: 'tier3-abortion-self-care-checklist-writing',
    tier: 3,
    title: 'Self-Care Medical Abortion Patient Checklist (Before, During & 4-Question Completeness Check)',
    parentTitle: 'Abortions → Patient Information Packet & Safe Care',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-what-is',
    snippet:
      'Covers the 4 before-pill safety checks (removing an IUD, ruling out ectopic pregnancy, bleeding disorders, adrenal failure), holding 4 misoprostol tablets under the tongue/cheek/vaginally for 30 minutes, what to do if you vomit within 30 to 45 minutes, and the 4-question completeness check.',
    keywords: 'self-care checklist eligibility iud ectopic bleeding disorder adrenal steroids 800 mcg misoprostol sublingual buccal vomit 45 minutes 4-question completeness pregnancy test'
  },
  {
    id: 'tier3-abortion-emergency-pac-writing',
    tier: 3,
    title: 'Emergency Red Flags (2 Pads/Hour Rule) & Why Medication Abortion Looks Identical to Miscarriage',
    parentTitle: 'Abortions → Emergency Post-Abortion Care',
    page: 'AbortionsHomePage1',
    subPage: 'abortion-emergency-care',
    snippet:
      'Go to a hospital immediately if you soak 2 full pads an hour for 2 hours in a row or have a fever ≥ 100.4°F (38°C) lasting over 24 hours. Medically, pills taken by mouth or under the tongue look 100% identical to a natural miscarriage on all hospital exams and blood tests.',
    keywords: 'post-abortion care pac emergency 2 pads an hour fever sepsis incomplete abortion identical to miscarriage blood test ultrasound'
  },
  {
    id: 'tier3-sh-virginity-hymen-writing',
    tier: 3,
    title: 'Destigmatizing Virginity & The Medical Truth About the Hymen (Over 50% Do Not Bleed)',
    parentTitle: 'Sexual Health → I Just Had Sex for the First Time!',
    page: 'SexualHealthHomePage',
    subPage: 'sh-first-time-sex',
    snippet:
      'The hymen is a stretchy rim of tissue with a natural opening for period blood—not a sealed barrier. Over half of women do not bleed the first time they have sex, and no medical exam can test virginity.',
    keywords: 'virginity hymen bleeding wedding night myth peeing after sex uti first time sex'
  },
  {
    id: 'tier3-meno-hot-flashes-bones-writing',
    tier: 3,
    title: 'Hot Flashes, Night Sweats, Vaginal Dryness, and Protecting Bone & Heart Health After Menopause',
    parentTitle: 'Menopause → Starting & After Menopause',
    page: 'HardTimeMenopauseHomePage',
    subPage: null,
    snippet:
      'Lower estrogen causes hot flashes, sleep changes, and vaginal dryness, and after menopause increases the need for calcium, vitamin D, and weight-bearing exercise to prevent osteoporosis. Any vaginal bleeding more than 12 months after your last period should be checked by a doctor.',
    keywords: 'menopause perimenopause hot flashes night sweats vaginal dryness osteoporosis calcium heart postmenopausal bleeding'
  }
];

// ==============================================================================
// Build the Health Vocabulary Dictionary for Closest-Word Typo Correction
// ==============================================================================
const HEALTH_VOCABULARY = (() => {
  const words = new Set([
    'abortion',
    'abortions',
    'menopause',
    'perimenopause',
    'miscarriage',
    'stillbirth',
    'infant',
    'child',
    'pregnancy',
    'pregnant',
    'childbirth',
    'postpartum',
    'family',
    'planning',
    'contraception',
    'condom',
    'condoms',
    'implant',
    'iud',
    'menstrual',
    'cycle',
    'period',
    'periods',
    'ovulation',
    'fertility',
    'infertility',
    'calendar',
    'sexual',
    'sex',
    'virginity',
    'hymen',
    'chlamydia',
    'gonorrhea',
    'trichomoniasis',
    'syphilis',
    'herpes',
    'hpv',
    'hepatitis',
    'hiv',
    'mycoplasma',
    'endometriosis',
    'fistula',
    'cancer',
    'breast',
    'cervical',
    'ovarian',
    'uterine',
    'vaginal',
    'vulva',
    'uterus',
    'womb',
    'cervix',
    'ovaries',
    'fallopian',
    'bleeding',
    'cramps',
    'painful',
    'mifepristone',
    'misoprostol',
    'karman',
    'vacuum',
    'aspiration',
    'preeclampsia',
    'ectopic',
    'molar',
    'stigma',
    'stigmas',
    'hormones',
    'ultrasound',
    'placenta',
    'breastfeeding'
  ]);
  MY_BODY_HEALTH_3TIER_INDEX.forEach((item) => {
    const combined = `${item.title} ${item.keywords || ''}`.toLowerCase();
    combined.split(/[^a-z0-9]+/).forEach((w) => {
      if (w.length >= 4) words.add(w);
    });
  });
  return Array.from(words);
})();

export function findClosestHealthQuery(rawQuery = '') {
  const q = String(rawQuery || '').trim();
  if (q.length < 3) return null;
  const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
  let changed = false;

  const correctedTokens = tokens.map((tok) => {
    if (tok.length < 3) return tok;
    if (HEALTH_VOCABULARY.includes(tok)) return tok;

    // Check if tok is already a prefix of a vocabulary word (e.g. "fam" -> "family", "meno" -> "menopause")
    const prefixMatch = HEALTH_VOCABULARY.find((v) => v.startsWith(tok));
    if (prefixMatch && tok.length >= 4) {
      return tok; // substring matching will already match it directly
    }

    const tokPhon = normalizePhonetic(tok);
    let bestWord = tok;
    let bestDist = Infinity;

    for (const vocabWord of HEALTH_VOCABULARY) {
      const distRaw = levenshteinDistance(tok, vocabWord);
      const distPhon = levenshteinDistance(tokPhon, normalizePhonetic(vocabWord));
      const dist = Math.min(distRaw, distPhon);
      const maxAllowed = tok.length <= 5 ? 2 : tok.length <= 8 ? 3 : 4;
      if (dist <= maxAllowed && dist < bestDist) {
        bestDist = dist;
        bestWord = vocabWord;
      }
    }

    if (bestWord !== tok) {
      changed = true;
    }
    return bestWord;
  });

  if (!changed) return null;
  return correctedTokens.join(' ');
}

// ==============================================================================
// SmartSearchBtn1 Component (Rendered Inside the My Body & Health Header Bubble)
// ==============================================================================
export function SmartSearchBtn1({
  setEducationPage = () => {},
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const [query, setQuery] = useState('');
  const [translatedQueryToEn, setTranslatedQueryToEn] = useState('');
  const [translatedIndexTitles, setTranslatedIndexTitles] = useState({});

  const activeCode =
    (UserLanguageChoice1 && typeof UserLanguageChoice1 === 'object' && UserLanguageChoice1.code) ||
    lang ||
    'en';
  const tlTarget =
    (UserLanguageChoice1 &&
      typeof UserLanguageChoice1 === 'object' &&
      UserLanguageChoice1.translateTarget) ||
    activeCode ||
    'en';
  const rtl = isRtlLanguage(activeCode, UserLanguageChoice1?.writtenLanguage);

  // Translate index titles & snippets into UserLanguageChoice1 when non-English is active
  useEffect(() => {
    if (!tlTarget || tlTarget === 'en') {
      setTranslatedIndexTitles({});
      return;
    }
    const cacheKey = `fempowher_smartsearch1_i18n_v265_${tlTarget}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setTranslatedIndexTitles(JSON.parse(cached));
        return;
      }
    } catch (e) {}

    const phrases = [
      'Search any topic or word in any language...',
      'Showing closest match:',
      'Main Button',
      'GIF Button',
      'In Page Writing',
      'No matching topics found.'
    ];
    MY_BODY_HEALTH_3TIER_INDEX.forEach((item) => {
      if (item.title && !phrases.includes(item.title)) phrases.push(item.title);
      if (item.parentTitle && !phrases.includes(item.parentTitle)) phrases.push(item.parentTitle);
      if (item.snippet && !phrases.includes(item.snippet)) phrases.push(item.snippet);
    });

    let cancelled = false;
    fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
        tlTarget
      )}&dt=t&q=${encodeURIComponent(phrases.join('\n'))}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (cancelled || !data || !Array.isArray(data[0])) return;
        const lines = data[0]
          .map((seg) => seg[0] || '')
          .join('')
          .split('\n');
        const mapObj = {};
        phrases.forEach((orig, idx) => {
          if (lines[idx] && lines[idx].trim()) {
            mapObj[orig] = lines[idx].trim();
          }
        });
        setTranslatedIndexTitles(mapObj);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(mapObj));
        } catch (e) {}
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [tlTarget]);

  // If user types a query in ANY non-English language (e.g. Spanish, Arabic, French, Hindi),
  // translate their search term to English behind the scenes so it matches all 3 tiers!
  useEffect(() => {
    const cleanQ = String(query || '').trim();
    if (cleanQ.length < 2) {
      setTranslatedQueryToEn('');
      return;
    }
    const timer = setTimeout(() => {
      fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(
          cleanQ
        )}`
      )
        .then((r) => r.json())
        .then((data) => {
          if (data && Array.isArray(data[0])) {
            const enText = data[0]
              .map((seg) => seg[0] || '')
              .join('')
              .trim()
              .toLowerCase();
            if (enText && enText !== cleanQ.toLowerCase()) {
              setTranslatedQueryToEn(enText);
            } else {
              setTranslatedQueryToEn('');
            }
          }
        })
        .catch(() => {});
    }, 220);

    return () => clearTimeout(timer);
  }, [query]);

  const tr = (text) => {
    if (!text) return '';
    if (translatedIndexTitles && translatedIndexTitles[text]) {
      return translatedIndexTitles[text];
    }
    return text;
  };

  // Compute 3-Tier Ranked Results + Closest-Word Suggestion
  const { results, closestWordSuggestion } = useMemo(() => {
    const raw = String(query || '').trim().toLowerCase();
    if (!raw) return { results: [], closestWordSuggestion: null };

    const scoreItem = (item, qStr) => {
      const titleEn = (item.title || '').toLowerCase();
      const titleLoc = tr(item.title || '').toLowerCase();
      const parentEn = (item.parentTitle || '').toLowerCase();
      const parentLoc = tr(item.parentTitle || '').toLowerCase();
      const snippetEn = (item.snippet || '').toLowerCase();
      const snippetLoc = tr(item.snippet || '').toLowerCase();
      const kw = (item.keywords || '').toLowerCase();

      const words = qStr.split(/\s+/).filter(Boolean);
      if (words.length === 0) return 0;

      // For Tier 1 & Tier 2, check if the button title itself (or keywords) matches
      const inTitle = words.every((w) => titleEn.includes(w) || titleLoc.includes(w));
      const inParentOrKw = words.every(
        (w) =>
          titleEn.includes(w) ||
          titleLoc.includes(w) ||
          parentEn.includes(w) ||
          parentLoc.includes(w) ||
          kw.includes(w)
      );
      const inWriting = words.every(
        (w) =>
          snippetEn.includes(w) ||
          snippetLoc.includes(w) ||
          titleEn.includes(w) ||
          titleLoc.includes(w) ||
          kw.includes(w)
      );

      if (item.tier === 1) {
        if (inTitle) return 300;
        if (inParentOrKw) return 240;
        return 0;
      }
      if (item.tier === 2) {
        if (inTitle) return 200;
        if (inParentOrKw) return 150;
        return 0;
      }
      // Tier 3 (Page Writing)
      if (inTitle || inWriting) return 100;
      return 0;
    };

    const runSearchWithTerm = (qTerm) => {
      const matched = [];
      MY_BODY_HEALTH_3TIER_INDEX.forEach((item) => {
        const s = scoreItem(item, qTerm);
        if (s > 0) {
          matched.push({ item, score: s });
        }
      });
      // Sort strictly by Tier first (Tier 1 -> Tier 2 -> Tier 3), then by score within each tier
      matched.sort((a, b) => {
        if (a.item.tier !== b.item.tier) return a.item.tier - b.item.tier;
        return b.score - a.score;
      });
      return matched.map((m) => m.item);
    };

    // 1. Try direct search (and auto-translated query if typed in another language)
    let list = runSearchWithTerm(raw);
    if (list.length === 0 && translatedQueryToEn) {
      list = runSearchWithTerm(translatedQueryToEn);
    }

    // 2. Check closest-word typo correction (e.g., "menupose" -> "menopause")
    const fuzzyEn = findClosestHealthQuery(translatedQueryToEn || raw);
    if (list.length === 0 && fuzzyEn) {
      const fuzzyList = runSearchWithTerm(fuzzyEn);
      if (fuzzyList.length > 0) {
        return { results: fuzzyList, closestWordSuggestion: fuzzyEn };
      }
    } else if (fuzzyEn && fuzzyEn !== raw) {
      return { results: list, closestWordSuggestion: fuzzyEn };
    }

    return { results: list, closestWordSuggestion: null };
  }, [query, translatedQueryToEn, translatedIndexTitles]);

  const handleSelectResult = (item) => {
    if (item.subPage) {
      setPendingEducationSubPage(item.subPage);
    } else {
      setPendingEducationSubPage(null);
    }
    setEducationPage(item.page);
  };

  const getTierBadgeText = (tier) => {
    if (tier === 1) return tr('Main Button');
    if (tier === 2) return tr('GIF Button');
    return tr('In Page Writing');
  };

  return h(
    'div',
    {
      id: 'SmartSearchBtn1',
      dir: rtl ? 'rtl' : 'ltr',
      className: 'w-full mt-3.5 relative'
    },
    // Search Input Bar Inside Header Bubble
    h(
      'div',
      {
        className:
          'w-full flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-md',
        style: { border: '2px solid #FEACEC' }
      },
      h(
        'svg',
        {
          viewBox: '0 0 20 20',
          className: 'w-4 h-4 shrink-0',
          fill: 'none',
          stroke: '#9F133A',
          strokeWidth: '2.4'
        },
        h('circle', { cx: '8.5', cy: '8.5', r: '5.5' }),
        h('line', { x1: '12.5', y1: '12.5', x2: '17.5', y2: '17.5', strokeLinecap: 'round' })
      ),
      h('input', {
        type: 'text',
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: tr('Search any topic or word in any language...'),
        className: 'w-full text-xs sm:text-sm font-extrabold bg-transparent focus:outline-none',
        style: { color: '#6E0926' }
      }),
      query.trim() &&
        h(
          'button',
          {
            type: 'button',
            onClick: () => {
              setQuery('');
              setTranslatedQueryToEn('');
            },
            className:
              'w-5 h-5 rounded-full text-xs font-black flex items-center justify-center cursor-pointer shrink-0',
            style: { backgroundColor: '#FFE4F0', color: '#9F133A' },
            title: 'Clear search'
          },
          '×'
        )
    ),

    // Closest-Word Typo Suggestion Pill (e.g., "menupose" -> "Menopause")
    query.trim() &&
      closestWordSuggestion &&
      h(
        'div',
        {
          className: 'mt-2 flex items-center gap-2 flex-wrap text-xs font-extrabold px-1'
        },
        h('span', { style: { color: '#FFE4F0' } }, tr('Showing closest match:')),
        h(
          'button',
          {
            type: 'button',
            onClick: () => setQuery(closestWordSuggestion),
            className:
              'px-2.5 py-0.5 rounded-full font-black underline cursor-pointer shadow-sm',
            style: { backgroundColor: '#FEACEC', color: '#6E0926' }
          },
          closestWordSuggestion
        )
      ),

    // 3-Tier Ranked Search Results Dropdown Panel (Tier 1 Main Buttons -> Tier 2 GIF Buttons -> Tier 3 Page Writing)
    query.trim() &&
      h(
        'div',
        {
          className:
            'mt-2 w-full rounded-2xl bg-white shadow-2xl overflow-y-auto max-h-80 divide-y',
          style: {
            border: '2px solid #FEACEC',
            borderColor: '#F4A2C6'
          }
        },
        results.length === 0
          ? h(
              'div',
              {
                className: 'p-4 text-xs sm:text-sm font-bold text-center',
                style: { color: '#9F133A' }
              },
              tr('No matching topics found.')
            )
          : results.map((item) =>
              h(
                'button',
                {
                  key: item.id,
                  type: 'button',
                  onClick: () => handleSelectResult(item),
                  className:
                    'w-full px-4 py-3 text-left transition hover:bg-pink-50 cursor-pointer flex flex-col gap-1'
                },
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2 flex-wrap' },
                  h(
                    'span',
                    {
                      className: 'text-xs sm:text-sm font-black leading-snug',
                      style: { color: '#9F133A' }
                    },
                    tr(item.title)
                  ),
                  h(
                    'span',
                    {
                      className:
                        'px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide shrink-0',
                      style:
                        item.tier === 1
                          ? { backgroundColor: '#9F133A', color: '#FFFFFF' }
                          : item.tier === 2
                          ? { backgroundColor: '#CF366C', color: '#FFFFFF' }
                          : { backgroundColor: '#FFE4F0', color: '#9F133A', border: '1px solid #CF366C' }
                    },
                    getTierBadgeText(item.tier)
                  )
                ),
                item.parentTitle &&
                  h(
                    'div',
                    {
                      className: 'text-[11px] font-extrabold',
                      style: { color: '#CF366C' }
                    },
                    tr(item.parentTitle)
                  ),
                item.snippet &&
                  h(
                    'div',
                    {
                      className: 'text-xs font-semibold leading-relaxed line-clamp-2',
                      style: { color: '#4A0E24' }
                    },
                    tr(item.snippet)
                  )
              )
            )
      )
  );
}

export default SmartSearchBtn1;
