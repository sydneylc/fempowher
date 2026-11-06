import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18.3.1';
import {
  LANGUAGES,
  AGE_GROUPS,
  UI_TEXT,
  WORLD_LANGUAGE_SUGGESTIONS,
  mapWrittenLanguageToUiCode,
  mapWrittenLanguageToTranslateTarget,
  detectDeviceLanguage,
  resolveUserLanguageChoice1,
  isRtlLanguage,
  cleanBackLabel
} from './data/translations.js?v=128';
import { FEATURED_REGIONS, COXS_BAZAR_SUBREGIONS, CLINICS_BY_REGION, PUBLIC_HEALTH_NEWS } from './data/regionsData.js?v=132';
import { AGE_SPECIFIC_ISSUES, getEducationTopicIssues } from './data/healthContent.js?v=123';
import { fetchLiveCentersNearPoint } from './data/liveOverpassDiscovery.js?v=120';
import { getImmediateCrisisInfoForArea } from './data/emergencyHotlinesByArea.js?v=97';
import { resolveUserNationVariables, getBeingAWomanContent } from './data/beingAWomanData.js?v=101';

// Import individual Page Components from src/pages/
import FemPowHerPreloader from './pages/FemPowHerPreloader.js?v=17';
import FemPowHerPreBoardingAPage from './pages/FemPowHerPreBoardingAPage.js?v=51';
import NewUserPage from './pages/NewUserPage.js?v=119';
import SignInPage from './pages/SignInPage.js?v=119';
import AnonPage1 from './pages/AnonPage1.js?v=119';
import TOTAL_ANON_CONFIG from './pages/TotalAnon.js?v=18';
import FemPowHerPreBoardingBPage from './pages/FemPowHerPreBoardingBPage.js?v=119';
import MapLegend1 from './pages/MapLegend1.js?v=18';
import DatabasePage1 from './pages/DatabasePage1.js?v=94';
import PregnancyAndBirthHomePage from './pages/PregnancyAndBirthHomePage.js?v=128';
import PregnancyHomePage from './pages/PregnancyHomePage.js?v=128';
import PreConceptionHomePage from './pages/PreConceptionHomePage.js?v=128';
import FeelingGoodPregHomePage from './pages/FeelingGoodPregHomePage.js?v=128';
import QuestionsPregHomePage from './pages/QuestionsPregHomePage.js?v=128';
import HardTimePregHomePage from './pages/HardTimePregHomePage.js?v=128';
import ChildbirthHomePage from './pages/ChildbirthHomePage.js?v=128';
import PostpartumHomePage from './pages/PostpartumHomePage.js?v=128';
import MiscarriageHomePage from './pages/MiscarriageHomePage.js?v=128';
import LossOfAChildHomePage from './pages/LossOfAChildHomePage.js?v=128';
import PregnancyAfterLossHomePage from './pages/PregnancyAfterLossHomePage.js?v=128';
import MenopauseHomePage from './pages/MenopauseHomePage.js?v=119';
import MenstrualCycleHomePage from './pages/MenstrualCycleHomePage.js?v=130';
import FirstPeriodHomePage from './pages/FirstPeriodHomePage.js?v=128';
import MyCycleSubHomePage from './pages/MyCycleSubHomePage.js?v=128';
import PainfulPeriodsHomePage from './pages/PainfulPeriodsHomePage.js?v=128';
import PeriodStoppedHomePage from './pages/PeriodStoppedHomePage.js?v=128';
import SexualHealthHomePage from './pages/SexualHealthHomePage.js?v=119';
import ForALovedOneHomePage from './pages/ForALovedOneHomePage.js?v=119';
import ForMeHomePage from './pages/ForMeHomePage.js?v=119';
import DiseasesAndInjuriesHomePage from './pages/DiseasesAndInjuriesHomePage.js?v=119';
import WorldviewHomePage from './pages/WorldviewHomePage.js?v=119';
import BeingAWomanInHomePage from './pages/BeingAWomanInHomePage.js?v=119';
import AnonBeingAWomanWorldViewPage from './pages/AnonBeingAWomanWorldViewPage.js?v=119';

const h = React.createElement;

// Built-in First User / Creator Account: sydneyalc (Full World View Privileges)
// + Rohingya-located account created with stvjc@channing.harvard.edu
const DEFAULT_ACCOUNTS = {
  sydneyalc: {
    username: 'sydneyalc',
    password: 'AntiGravityRulez',
    email: 'sydneylosikoffcarey@gmail.com',
    lang: 'en',
    writtenLanguage: 'English',
    ageGroup: '20-25',
    regionId: 'total-anon-earth',
    customRegion: null,
    isFullWorldPrivilege: true
  },
  stvjc: {
    username: 'stvjc',
    password: 'AntiGravityRulez',
    email: 'stvjc@channing.harvard.edu',
    lang: 'rhg',
    writtenLanguage: 'Rohingya (Ruáingga / 𐴌𐴗𐴥𐴝𐴙𐴚𐴒𐴙𐴝)',
    ageGroup: '20-25',
    nation: 'Bangladesh',
    region: "Cox's Bazar",
    regionId: 'coxs-bazar',
    customRegion: null
  }
};

function loadAccounts() {
  try {
    const raw = localStorage.getItem('fempowher_accounts_v1');
    const parsed = raw ? JSON.parse(raw) : {};
    const merged = { ...DEFAULT_ACCOUNTS, ...parsed, sydneyalc: DEFAULT_ACCOUNTS.sydneyalc };
    localStorage.setItem('fempowher_accounts_v1', JSON.stringify(merged));
    return merged;
  } catch (e) {
    return { ...DEFAULT_ACCOUNTS };
  }
}

function saveAccount(acct) {
  try {
    const all = loadAccounts();
    all[acct.username.toLowerCase()] = acct;
    localStorage.setItem('fempowher_accounts_v1', JSON.stringify(all));
  } catch (e) {}
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
}

export default function App() {
  const detectedLang = detectDeviceLanguage();

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('FemPowHerPreBoardingAPage');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [ageGroup, setAgeGroup] = useState('20-25');
  const [regionId, setRegionId] = useState('total-anon-earth');
  const [customRegion, setCustomRegion] = useState(null);
  const [lang, setLang] = useState(detectedLang);
  const [writtenLanguage, setWrittenLanguage] = useState(() => {
    const found = LANGUAGES.find((l) => l.code === detectedLang);
    return found ? found.name : 'English';
  });

  const handleGlobalLanguageChange = (val) => {
    setWrittenLanguage(val);
    setLang(mapWrittenLanguageToUiCode(val));
  };

  // Navigation & Map states inside MainApp
  const [activeTab, setActiveTab] = useState('map');
  const [educationSelection, setEducationSelection] = useState(null);
  const [educationPage, setEducationPage] = useState(null);
  const [beingWomanSubTab, setBeingWomanSubTab] = useState('gender-outlook');
  const [selectedRoleModel, setSelectedRoleModel] = useState(null);
  const [isMapHover, setIsMapHover] = useState(false);
  const [mapStyle, setMapStyle] = useState('district');
  const [clinicFilter, setClinicFilter] = useState('all');
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [activeRouteClinic, setActiveRouteClinic] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchingGeo, setIsSearchingGeo] = useState(false);
  const [searchFeedback, setSearchFeedback] = useState('');
  const [dynamicClinics, setDynamicClinics] = useState([]);
  const [liveDiscoveredClinics, setLiveDiscoveredClinics] = useState([]);
  const [isScanningLive, setIsScanningLive] = useState(false);
  const [mapRuralQuery, setMapRuralQuery] = useState('');
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCenterCoords, setMapCenterCoords] = useState(null);
  const [visibleHospitalsCount, setVisibleHospitalsCount] = useState(5);
  const [visibleSheltersCount, setVisibleSheltersCount] = useState(5);
  const [enrichedAddressById, setEnrichedAddressById] = useState({});
  const [enrichedPhoneById, setEnrichedPhoneById] = useState({});
  const [enrichedHoursById, setEnrichedHoursById] = useState({});

  useEffect(() => {
    setVisibleHospitalsCount(5);
    setVisibleSheltersCount(5);
  }, [regionId, customRegion]);

  const handleMapRuralJump = async (e) => {
    e.preventDefault();
    const q = mapRuralQuery.trim();
    if (!q) return;
    setIsScanningLive(true);
    await resolveLocationAndSetRegion({ rawQuery: q, chosenLang: lang });
    setIsScanningLive(false);
  };

  const mapContainerRef = useRef(null);
  const leafletMapRef = useRef(null);
  const layerGroupRef = useRef(null);
  const tileLayerRef = useRef(null);
  const lastMapViewKeyRef = useRef('');

  const [customTranslatedUi, setCustomTranslatedUi] = useState(null);

  // Live neural translation fallback for any of the 250+ world languages not in the static UI_TEXT dictionary
  useEffect(() => {
    const uiCode = mapWrittenLanguageToUiCode(writtenLanguage);
    const tlTarget = mapWrittenLanguageToTranslateTarget(writtenLanguage);
    if (uiCode !== 'en' || !tlTarget || tlTarget === 'en') {
      setCustomTranslatedUi(null);
      return;
    }
    const cacheKey = `fempowher_ai_ui_v131_${tlTarget}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setCustomTranslatedUi(JSON.parse(cached));
        return;
      }
    } catch (e) {}

    let cancelled = false;
    const keysToTranslate = [
      'appName',
      'backBtn',
      'anonymousLabel',
      'totalAnonEarthLabel',
      'selectLanguagePlaceholder',
      'mapSearchPlaceholder',
      'findBtn',
      'scanningBtn',
      'hotlineLabel',
      'mapHeaderBadge',
      'mapInstruction',
      'satelliteToggle',
      'illustratedMapToggle',
      'filterAll',
      'filterObgyn',
      'filterSafeHaven',
      'filterHospital',
      'filterClinics',
      'directionsBtn',
      'callClinicBtn',
      'listenAudioBtn',
      'stopAudioBtn',
      'showingRouteTo',
      'clearRouteBtn',
      'distanceAway',
      'tabMap',
      'tabMapSub',
      'tabEmergency',
      'tabNews',
      'tabNewsSub',
      'tabIssues',
      'tabIssuesSub',
      'tabProfile',
      'emergencyTitle',
      'emergencySubtitle',
      'immediateCrisisNumbersTitle',
      'nationalEmergencyNumberLabel',
      'regionalEmergencyNumberLabel',
      'crisisLinePrefix',
      'hospitalsSectionTitle',
      'womensSheltersSectionTitle',
      'contactColumnLabel',
      'addressColumnLabel',
      'extendBtnLabel',
      'newsTitle',
      'newsSubtitle',
      'issuesTitle',
      'issuesSubtitle',
      'eduHeaderTitle',
      'eduSwitchAgePrompt',
      'eduBtnPregnancyAndBirth',
      'eduBtnPregnancy',
      'eduBtnPreConception',
      'eduBtnChildbirth',
      'eduBtnPostpartum',
      'eduBtnMiscarriage',
      'eduBtnLossOfChild',
      'eduBtnPregnancyAfterLoss',
      'pregFeelingQuestion',
      'pregFeelQuestions',
      'pregFeelGood',
      'pregFeelHardTime',
      'pregSubTrying',
      'pregSubCurrent',
      'pregSubMiscarried',
      'pregSubPostpartum',
      'eduBtnMenopause',
      'eduBtnMenstrualCycle',
      'cycleBtnFirstPeriod',
      'cycleBtnMyCycle',
      'cycleBtnPeriodsWorst',
      'cycleBtnPeriodStopped',
      'eduBtnSexualHealth',
      'eduBtnDiseasesInjuries',
      'eduBtnForMe',
      'eduBtnForLovedOne',
      'eduBtnTraditionalStories',
      'eduBtnWorldview',
      'eduBtnWomensHealthNews',
      'eduBackToTable',
      'profileTitle',
      'privacyBadge',
      'languageLabel'
    ];
    const sourceLines = keysToTranslate
      .map((k) =>
        k === 'cycleBtnPeriodsWorst'
          ? 'My periods are really painful, heavy, or hard to deal with!'
          : UI_TEXT.en[k] || ''
      )
      .join('\n');
    fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
        tlTarget
      )}&dt=t&q=${encodeURIComponent(sourceLines)}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (cancelled || !data || !Array.isArray(data[0])) return;
        const fullTranslated = data[0].map((seg) => seg[0] || '').join('');
        const lines = fullTranslated.split('\n');
        const built = { ...UI_TEXT.en };
        keysToTranslate.forEach((k, idx) => {
          if (lines[idx] && lines[idx].trim()) {
            built[k] = lines[idx].trim();
          }
        });
        setCustomTranslatedUi(built);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(built));
        } catch (e) {}
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [writtenLanguage]);

  const baseT = UI_TEXT[lang] || UI_TEXT.en;
  const t = lang === 'en' && customTranslatedUi ? { ...baseT, ...customTranslatedUi } : baseT;
  // UserLanguageChoice1: Variable representing the user's chosen language preference
  // Any titles or text subject to UserLanguageChoice1 dynamically translate to the user's chosen language
  const UserLanguageChoice1 = resolveUserLanguageChoice1(lang, writtenLanguage, t);
  const isRtl = isRtlLanguage(lang, writtenLanguage);

  useEffect(() => {
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
      document.documentElement.lang = lang || 'en';
    }
  }, [isRtl, lang]);

  const formatDigitsForLang = (str) => {
    const s = String(str || '');
    if (lang === 'prs' || lang === 'fa' || lang === 'ps' || lang === 'ur' || lang === 'bal' || lang === 'ku') {
      const persoArabicDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return s.replace(/[0-9]/g, (d) => persoArabicDigits[Number(d)]);
    }
    if (lang === 'ar') {
      const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      return s.replace(/[0-9]/g, (d) => arabicDigits[Number(d)]);
    }
    if (lang === 'hi') {
      const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
      return s.replace(/[0-9]/g, (d) => devanagariDigits[Number(d)]);
    }
    if (lang === 'bn') {
      const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return s.replace(/[0-9]/g, (d) => banglaDigits[Number(d)]);
    }
    return s;
  };

  const currentRegion = customRegion || FEATURED_REGIONS.find((r) => r.id === regionId) || FEATURED_REGIONS[0];
  const baseClinics = (() => {
    const regionalList = CLINICS_BY_REGION[regionId] || [];
    const globalList = CLINICS_BY_REGION['total-anon-earth'] || [];
    const combined = [...regionalList, ...dynamicClinics, ...globalList];
    const seenIds = new Set();
    const deduped = [];
    for (const item of combined) {
      if (!item || !item.id || seenIds.has(item.id)) continue;
      seenIds.add(item.id);
      deduped.push(item);
    }
    return deduped;
  })();
  const clinics = [...baseClinics, ...liveDiscoveredClinics];

  // User's active coordinates for Emergency Contacts distance sorting
  const emergencyUserLoc =
    regionId === 'total-anon-earth' && mapCenterCoords
      ? mapCenterCoords
      : currentRegion.userLocation || [20.0, 15.0];

  const allGlobalEmergencyPool = (() => {
    const curatedPool = [
      ...(CLINICS_BY_REGION['total-anon-earth'] || []),
      ...(CLINICS_BY_REGION['coxs-bazar'] || []),
      ...(CLINICS_BY_REGION['somalia-mogadishu'] || [])
    ];
    const seen = new Set();
    const syntheticIds = new Set(['custom-wfs-1', 'custom-obgyn-1', 'precise-anon-wfs-1', 'precise-anon-hosp-1']);
    const result = [];

    for (const c of curatedPool) {
      if (!c || !c.id || syntheticIds.has(c.id) || seen.has(c.id)) continue;
      if (typeof c.lat !== 'number' || typeof c.lng !== 'number') continue;
      seen.add(c.id);
      result.push(c);
    }

    for (const liveC of liveDiscoveredClinics) {
      if (!liveC || !liveC.id || seen.has(liveC.id)) continue;
      if (typeof liveC.lat !== 'number' || typeof liveC.lng !== 'number') continue;
      // Skip live OSM entries that lack a real phone number or duplicate a curated facility within 2.5 km
      const hasRealPhone =
        liveC.phone &&
        String(liveC.phone).trim() &&
        !/Local Emergency|112 \/ 911/i.test(String(liveC.phone));
      if (!hasRealPhone) continue;
      const isDuplicateNearCurated = result.some(
        (cur) =>
          (cur.type === 'safe-haven') === (liveC.type === 'safe-haven') &&
          parseFloat(getDistanceKm(cur.lat, cur.lng, liveC.lat, liveC.lng)) < 2.5
      );
      if (isDuplicateNearCurated) continue;
      seen.add(liveC.id);
      result.push(liveC);
    }

    return result;
  })();

  const MATERNITY_NAME_REGEX =
    /matern|obstet|obstét|ginec|gynec|gynaec|ob\/gyn|ob-gyn|obgyn|women|woman|female|mother|mère|mere|madre|mãe|mae|materno|mulher|mujer|femme|frauen|perinat|перинатал|роддом|родильн|акушер|гинекол|женск|zayeshgah|زایشگاه|زنان|بانوان|نسایی|ولادی|زیږنتون|زچگی|زنانہ|لیڈی|مستشفى الولادة|مستشفى النساء|الأم والطفل|توليد|نسائية|حوامل|ولادة|قابلة|妇幼|妇产|妇女|妇婴|产科|妇科|孕产|母婴|婦幼|婦產|婦女|婦科|mahila|zanana|prasuti|matru|garbh|stree|प्रसूति|महिला|गर्भ|स्त्री|প্রসূতি|গাইনি|মাতৃ|নারী|ধাত্রী|মহিলা|daktor meye|baal-bassa|umuliso|dhalmada|haweenka|uurka|birth|midwife|midwifery|fistula|tug'ruq|tug‘ruq|туғруқ|таваллудхона|амаржих|эх хүүхдийн|kokelo ya bomme|profamilia|reproductiv|reprodutiv|salud sexual|\bile\b|aborto|parto|prenatal|postpartum|postnatal|antenatal|breast|cervical|uter|ovari|menopaus|menstru|contracept|family planning|planificación familiar|planejamento familiar|c-section|cesarean|cesárea|césarienne|kvinno|kvinne|føde|förlossning|barnmorsk|kätilö|synnytys|naisten|nőgyógy|szülész|położn|ginekol|porod|rodilišt|maternit|ginecolog|doğum|kadın|jinekoloj|gebelik|ebelik/i;

  const PREGNANT_WOMAN_SVG_PATH =
    'M36.33 2.91 L37.59 2.86 L39.43 3.31 L40.71 4.01 L41.86 5.27 L42.99 7.42 L43.87 10.27 L44.33 12.99 L44.43 15.28 L44.36 15.42 L44.24 15.37 L43.69 13.73 L43.34 12.99 L41.43 11.40 L40.44 9.21 L39.56 8.01 L38.74 7.19 L38.01 6.82 L35.20 6.12 L33.87 5.37 L33.82 4.67 L34.03 4.11 L34.76 3.42 Z M33.83 6.22 L34.12 6.44 L34.49 8.15 L35.04 9.57 L35.73 10.74 L36.17 11.29 L36.62 11.60 L37.62 11.81 L37.48 12.38 L36.88 12.87 L36.15 13.35 L35.90 13.31 L34.75 12.05 L33.87 10.52 L33.48 9.15 L33.49 7.62 Z M35.04 6.88 L37.24 7.37 L38.12 7.69 L38.63 8.06 L38.74 8.28 L38.61 8.91 L38.10 10.27 L37.37 10.96 L36.88 10.90 L36.44 10.47 L35.48 8.69 L35.04 7.38 Z M39.31 9.18 L39.49 9.17 L39.93 9.83 L40.99 12.05 L42.57 13.21 L42.99 13.88 L44.53 19.14 L44.76 20.77 L44.75 21.73 L42.52 24.11 L38.96 27.44 L36.04 29.02 L35.62 29.14 L35.16 28.94 L32.61 27.44 L31.90 26.73 L31.20 25.56 L30.88 24.47 L30.88 22.54 L31.20 21.44 L31.79 20.39 L32.77 19.40 L34.11 18.65 L35.27 18.28 L35.84 17.75 L35.98 17.39 L35.02 16.82 L34.71 16.36 L34.71 15.97 L35.29 15.02 L35.84 14.47 L37.42 13.42 L38.17 12.75 L38.41 12.00 L38.32 11.26 L39.02 10.08 Z M40.66 15.49 L40.33 15.67 L40.28 16.16 L41.46 19.91 L41.64 21.04 L37.42 26.46 L35.84 26.52 L34.11 26.87 L33.82 27.23 L34.20 27.60 L35.62 27.29 L37.75 27.22 L40.55 23.77 L42.34 21.30 L42.45 20.90 L41.79 18.38 L41.02 15.97 Z';

  const renderMaroonPregnantIcon = (heightPx = 15, extraStyle = {}) => {
    const widthPx = Math.round(heightPx * 0.56 * 10) / 10;
    return h(
      'svg',
      {
        viewBox: '30.5 2.5 14.8 27.0',
        width: widthPx,
        height: heightPx,
        style: {
          display: 'inline-block',
          flexShrink: 0,
          overflow: 'visible',
          ...extraStyle
        },
        'aria-hidden': 'true'
      },
      h('path', {
        d: PREGNANT_WOMAN_SVG_PATH,
        fill: '#9F133A',
        fillRule: 'evenodd'
      })
    );
  };

  const getCleanClinicTitleAndPhone = (c) => {
    if (!c) return { cleanTitle: '', cleanPhone: '', cleanHotline: '' };
    let rawTitle = String(c.name?.[lang] || c.name?.en || '').trim();
    let extractedPhone = '';
    const match = rawTitle.match(
      /(?:[-–—•|,/(\s]*(?:tél\.?|tel\.?|téléphone|teléfono|telefono|phone|ph\.?|cel\.?|whatsapp)?\s*[:.]?\s*)((?:\+|00)?\d[\d\s\-().]{6,}\d)\)?\s*$/i
    );
    if (match && match[1]) {
      const digits = match[1].replace(/\D/g, '');
      if (digits.length >= 7) {
        extractedPhone = match[1].trim();
        const prefix = rawTitle.slice(0, match.index).replace(/[-–—•|,/\s(&]+$/, '').trim();
        if (prefix.length >= 3) {
          rawTitle = prefix;
        }
      }
    }
    const cleanPhone = String(enrichedPhoneById[c.id] || c.phone || extractedPhone || '').trim();
    const rawHotline = String(c.emergencyHotline || '').trim();
    const cleanHotline = rawHotline && rawHotline !== cleanPhone ? rawHotline : '';
    return { cleanTitle: rawTitle, cleanPhone, cleanHotline };
  };

  const hasWomensHealthInTitle = (c) => {
    if (!c) return false;
    const allNames = c.name && typeof c.name === 'object' ? Object.values(c.name).join(' ') : String(c.name || '');
    if (c.type === 'safe-haven') {
      return /matern|obstet|obstét|ginec|gynec|gynaec|ob\/gyn|ob-gyn|obgyn|midwife|midwifery|perinat|daktor meye|umuliso/i.test(
        allNames
      );
    }
    return MATERNITY_NAME_REGEX.test(allNames);
  };

  const isWomensHealthFacility = (c) => {
    if (!c || c.type === 'safe-haven') return false;
    return c.type === 'obgyn' || hasWomensHealthInTitle(c);
  };

  const rawSortedHospitals = allGlobalEmergencyPool
    .filter((c) => c.type !== 'safe-haven')
    .map((c) => ({
      ...c,
      distanceKmNum: parseFloat(getDistanceKm(emergencyUserLoc[0], emergencyUserLoc[1], c.lat, c.lng))
    }))
    .sort((a, b) => a.distanceKmNum - b.distanceKmNum);

  const rawSortedShelters = allGlobalEmergencyPool
    .filter((c) => c.type === 'safe-haven')
    .map((c) => ({
      ...c,
      distanceKmNum: parseFloat(getDistanceKm(emergencyUserLoc[0], emergencyUserLoc[1], c.lat, c.lng))
    }))
    .sort((a, b) => a.distanceKmNum - b.distanceKmNum);

  // User Nation Variables:
  //   userNationVariable1: The Nation/Region noun itself (e.g. "Somalia", "Nigeria", "Colombia", "Sudan")
  //   userNationVariable2: The Demonym / Adjectival form of that Nation (e.g. "Somali", "Nigerian", "Colombian", "Sudanese")
  const {
    userNationVariable1,
    userNationVariable2,
    countryCenter: roleModelCountryCenter,
    countryZoom: roleModelCountryZoom
  } = resolveUserNationVariables(
    currentRegion,
    rawSortedHospitals.slice(0, 10),
    rawSortedShelters.slice(0, 10)
  );

  // Filter out foreign-country facilities across borders/seas when a specific nation is active
  const filterByActiveNationOrLocalRadius = (sortedList) => {
    if (!userNationVariable1 || userNationVariable1 === 'Planet Earth') {
      return sortedList.slice(0, 25);
    }
    const nationLower = userNationVariable1.toLowerCase();
    const isSameNation = (c) => {
      const hay = `${c.regionDistrict || ''} ${c.address?.en || ''} ${c.name?.en || ''}`.toLowerCase();
      if (nationLower === 'sudan') {
        return hay.includes('sudan') && !hay.includes('south sudan');
      }
      return hay.includes(nationLower) || c.distanceKmNum <= 250;
    };
    const sameNationItems = sortedList.filter(isSameNation);
    return (sameNationItems.length > 0 ? sameNationItems : sortedList.filter((c) => c.distanceKmNum <= 500)).slice(0, 25);
  };

  const closestHospitals = filterByActiveNationOrLocalRadius(rawSortedHospitals);
  const closestShelters = filterByActiveNationOrLocalRadius(rawSortedShelters);

  const beingAWomanContent = getBeingAWomanContent(
    userNationVariable1,
    userNationVariable2,
    currentRegion
  );

  const roleModelMapContainerRef = useRef(null);
  const roleModelLeafletMapRef = useRef(null);

  useEffect(() => {
    if (
      activeTab !== 'issues' ||
      educationSelection?.type !== 'being-a-woman' ||
      beingWomanSubTab !== 'role-models'
    ) {
      if (roleModelLeafletMapRef.current) {
        roleModelLeafletMapRef.current.remove();
        roleModelLeafletMapRef.current = null;
      }
      return;
    }
    const L = window.L;
    if (!L || !roleModelMapContainerRef.current) return;

    if (roleModelLeafletMapRef.current) {
      roleModelLeafletMapRef.current.remove();
      roleModelLeafletMapRef.current = null;
    }

    const rmMap = L.map(roleModelMapContainerRef.current, {
      center: roleModelCountryCenter || [5.1521, 46.1996],
      zoom: roleModelCountryZoom || 6,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors • FemPowHer Role Models Map',
      maxZoom: 18
    }).addTo(rmMap);

    const roleModelsList = beingAWomanContent.roleModels || [];
    roleModelsList.forEach((rm) => {
      if (typeof rm.lat !== 'number' || typeof rm.lng !== 'number') return;
      const isSelected = selectedRoleModel && selectedRoleModel.id === rm.id;
      const pinHtml = `<div style="
        background:${isSelected ? '#6E0926' : '#E30B52'};
        color:#FFFFFF;
        border:2.5px solid #FEACEC;
        border-radius:9999px;
        padding:3px 9px;
        font-family:'Kefa',serif;
        font-size:11px;
        font-weight:800;
        white-space:nowrap;
        box-shadow:0 3px 10px rgba(159,19,58,0.45);
        cursor:pointer;
      ">${rm.name}</div>`;
      const icon = L.divIcon({
        className: 'fempowher-rolemodel-pin',
        html: pinHtml,
        iconSize: [120, 28],
        iconAnchor: [60, 14]
      });
      const marker = L.marker([rm.lat, rm.lng], { icon }).addTo(rmMap);
      marker.on('click', () => {
        setSelectedRoleModel(rm);
      });
    });

    setTimeout(() => {
      try {
        rmMap.invalidateSize();
      } catch (e) {}
    }, 120);

    roleModelLeafletMapRef.current = rmMap;

    return () => {
      if (roleModelLeafletMapRef.current) {
        roleModelLeafletMapRef.current.remove();
        roleModelLeafletMapRef.current = null;
      }
    };
  }, [
    activeTab,
    educationSelection,
    beingWomanSubTab,
    userNationVariable1,
    selectedRoleModel
  ]);

  // Automatically enrich visible Emergency Contact addresses into exact Google Search format
  // (<house_number> <road>, <suburb>, <city>, <postcode>, <country>) if an entry only has a city/region address
  useEffect(() => {
    if (activeTab !== 'emergency') return;
    const visibleItems = [
      ...closestHospitals.slice(0, visibleHospitalsCount),
      ...closestShelters.slice(0, visibleSheltersCount)
    ];
    let cancelled = false;

    const formatGoogleStyleAddress = (addrObj, fallbackAddr) => {
      if (!addrObj) return fallbackAddr;
      const cleanWard = (s) => (s ? String(s).replace(/\s+Ward\s+\d+$/i, '').trim() : '');
      const houseNum = (addrObj.house_number || '').trim();
      const road = (addrObj.road || addrObj.pedestrian || addrObj.street || addrObj.highway || '').trim();
      const streetLine = [houseNum, road].filter(Boolean).join(' ').trim();
      const suburb = cleanWard(
        addrObj.suburb || addrObj.neighbourhood || addrObj.quarter || addrObj.residential || addrObj.village || addrObj.hamlet || ''
      );
      const city = cleanWard(addrObj.city || addrObj.town || addrObj.municipality || addrObj.county || '');
      const postcode = (addrObj.postcode || '').trim();
      const country = (addrObj.country || '').trim();

      const rawParts = [streetLine, suburb, city, postcode, country].filter(Boolean);
      const deduped = [];
      for (const p of rawParts) {
        if (!deduped.some((ex) => ex.toLowerCase() === p.toLowerCase())) {
          deduped.push(p);
        }
      }
      return deduped.length >= 3 ? deduped.join(', ') : fallbackAddr;
    };

    (async () => {
      for (const item of visibleItems) {
        if (cancelled) break;
        if (enrichedAddressById[item.id]) continue;
        // Skip entries that already have hand-verified exact Google Search street addresses
        if (
          item.id.startsWith('za-wiki-hosp-') ||
          item.id.startsWith('za-safe-user-') ||
          item.id.startsWith('canada-safe-user-') ||
          item.id.startsWith('namibia-hosp-') ||
          item.id.startsWith('zimbabwe-wiki-hosp-') ||
          item.id.startsWith('caboverde-hosp-') ||
          item.id.startsWith('nigeria-wiki-hosp-') ||
          item.id.startsWith('nigeria-safe-user-') ||
          item.id.startsWith('brazil-wiki-hosp-') ||
          item.id.startsWith('brazil-acolhimento-safe-') ||
          item.id.startsWith('brazil-legal-hosp-') ||
          item.id.startsWith('peru-aurora-safe-') ||
          item.id.startsWith('peru-minsa-hosp-') ||
          item.id.startsWith('latam-dir-') ||
          item.id.startsWith('sudan-krt-') ||
          item.id.startsWith('zw-fb-') ||
          item.id.startsWith('lila-')
        ) {
          continue;
        }
        const rawAddr = item.address?.en || '';

        const cacheKey = `fempowher_gaddr_v105_${item.id}`;
        try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) {
            const parsed = JSON.parse(cached);
            if (parsed.addr) setEnrichedAddressById((prev) => ({ ...prev, [item.id]: parsed.addr }));
            if (parsed.phone) setEnrichedPhoneById((prev) => ({ ...prev, [item.id]: parsed.phone }));
            if (parsed.hours) setEnrichedHoursById((prev) => ({ ...prev, [item.id]: parsed.hours }));
            continue;
          }
        } catch (e) {}

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${item.lat}&lon=${item.lng}&addressdetails=1&extratags=1&accept-language=en`
          );
          if (!res.ok) continue;
          const data = await res.json();
          if (cancelled) break;
          const hasRealOnlineRoad = !!(data?.address?.road || data?.address?.pedestrian || data?.address?.street);
          const formatted = hasRealOnlineRoad ? formatGoogleStyleAddress(data?.address, rawAddr) : rawAddr;
          const onlinePhone =
            data?.extratags?.phone ||
            data?.extratags?.['contact:phone'] ||
            data?.extratags?.telephone ||
            '';
          const rawOnlineHours = data?.extratags?.opening_hours || '';
          const onlineHours =
            rawOnlineHours === '24/7'
              ? 'Open 24 hours'
              : rawOnlineHours
              ? rawOnlineHours
              : '';
          if (formatted) {
            setEnrichedAddressById((prev) => ({ ...prev, [item.id]: formatted }));
          }
          if (onlinePhone) {
            setEnrichedPhoneById((prev) => ({ ...prev, [item.id]: onlinePhone }));
          }
          if (onlineHours) {
            setEnrichedHoursById((prev) => ({ ...prev, [item.id]: onlineHours }));
          }
          try {
            localStorage.setItem(cacheKey, JSON.stringify({ addr: formatted, phone: onlinePhone, hours: onlineHours }));
          } catch (e) {}
        } catch (e) {}
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [activeTab, visibleHospitalsCount, visibleSheltersCount, regionId, customRegion, mapCenterCoords]);

  const extractContactLines = (clinic) => {
    const lines = [];
    const { cleanPhone } = getCleanClinicTitleAndPhone(clinic);
    const rawPhone = cleanPhone || enrichedPhoneById[clinic.id] || clinic.phone || '';
    if (rawPhone && String(rawPhone).trim()) {
      const cleanedPhone = String(rawPhone)
        .replace(/^(911|112|999|000|111|100|10177|113|190|Local Emergency)\s*\/\s*/i, '')
        .trim();
      const firstDial = cleanedPhone.split('/')[0].trim();
      lines.push({ label: 'Phone', value: cleanedPhone, href: `tel:${firstDial}` });
    }
    if (clinic.email && String(clinic.email).trim()) {
      lines.push({ label: 'Email', value: String(clinic.email).trim(), href: `mailto:${String(clinic.email).trim()}` });
    } else {
      const dirText = clinic.directionsText?.[lang] || clinic.directionsText?.en || '';
      const emailMatch = dirText.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g);
      if (emailMatch && emailMatch.length > 0) {
        lines.push({ label: 'Email', value: emailMatch.join(' / '), href: `mailto:${emailMatch[0]}` });
      }
    }
    if (clinic.website && String(clinic.website).trim()) {
      lines.push({ label: 'Website', value: String(clinic.website).trim(), href: String(clinic.website).trim() });
    }
    return lines;
  };

  const extractOpenHours = (clinic) => {
    if (clinic.openHours && String(clinic.openHours).trim()) {
      return String(clinic.openHours).trim();
    }
    if (enrichedHoursById[clinic.id] && String(enrichedHoursById[clinic.id]).trim()) {
      return String(enrichedHoursById[clinic.id]).trim();
    }
    return '';
  };

  const filteredClinics = clinics.filter((c) => {
    if (clinicFilter === 'all') return true;
    if (clinicFilter === 'safe-haven') return c.type === 'safe-haven';
    if (clinicFilter === 'obgyn') {
      return isWomensHealthFacility(c);
    }
    if (clinicFilter === 'hospital') return c.type !== 'safe-haven';
    return c.type === clinicFilter;
  });

  // Automatically dismiss FemPowHerPreloader after 2.6 seconds
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const navigateWithPreloader = (targetPage) => {
    setIsLoading(true);
    setCurrentPage(targetPage);
  };

  const speakText = (id, textToSpeak) => {
    if (!('speechSynthesis'in window)) {
      alert('Audio read-aloud: '+ textToSpeak);
      return;
    }
    window.speechSynthesis.cancel();
    if (speakingId === id) {
      setSpeakingId(null);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const langObj = LANGUAGES.find((l) => l.code === lang);
    utterance.lang = langObj?.speechLang || 'en-US';
    utterance.rate = 0.92;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Unified region/location resolver for Anonymous, New Users, Returning Users, and In-App Search
  const resolveLocationAndSetRegion = async ({ nation = '', region = '', rawQuery = '', chosenLang = lang }) => {
    const cleanRegion = String(region || '').trim();
    const cleanNation = String(nation || '').trim();
    const combinedQuery = rawQuery.trim() || [cleanRegion, cleanNation].filter(Boolean).join(', ');
    const lower = combinedQuery.toLowerCase();

    if (!lower) {
      return { regionId: regionId || 'total-anon-earth', customRegion };
    }

    // 1. Cox's Bazar & Rohingya Camps (handles "Cox's Bazar", "Coz bazaar", "Cox bazaar", "Ukhiya", "Rohingya", etc.)
    if (
      lower.includes('cox') ||
      lower.includes('coz') ||
      lower.includes('bazar') ||
      lower.includes('bazaar') ||
      lower.includes('ukhiya') ||
      lower.includes('ukhia') ||
      lower.includes('rohingya') ||
      lower.includes('ruáingga') ||
      lower.includes('ruaingga') ||
      lower.includes('kutupalong') ||
      lower.includes('teknaf') ||
      lower.includes('ramu') ||
      lower.includes('chakaria') ||
      lower.includes('kutubdia') ||
      lower.includes('pekua') ||
      lower.includes('maheshkhali') ||
      lower.includes('nayapara') ||
      lower.includes('balukhali') ||
      lower.includes('bhasan char')
    ) {
      setCustomRegion(null);
      setRegionId('coxs-bazar');
      setMapCenterCoords([21.48, 92.03]);
      setMapZoom(10);
      return { regionId: 'coxs-bazar', customRegion: null };
    }

    // 2. Balochistan (handles "Balochistan", "Baluchistan", "Quetta", "Gwadar", "Turbat", "Kalat", "Khuzdar", "Makran", etc.)
    if (
      lower.includes('baloch') ||
      lower.includes('baluch') ||
      lower.includes('quetta') ||
      lower.includes('gwadar') ||
      lower.includes('turbat') ||
      lower.includes('khuzdar') ||
      lower.includes('kalat') ||
      lower.includes('makran') ||
      lower.includes('zhob') ||
      lower.includes('chaman') ||
      lower.includes('sibi') ||
      lower.includes('lasbela') ||
      lower.includes('panjgur') ||
      lower.includes('loralai') ||
      lower.includes('nushki') ||
      lower.includes('chagai') ||
      lower.includes('zahedan') ||
      lower.includes('chabahar')
    ) {
      const balochTownCoords = [
        { match: 'gwadar', lat: 25.1216, lon: 62.3254, zoom: 10, label: 'Gwadar, Balochistan' },
        { match: 'turbat', lat: 26.0081, lon: 63.0383, zoom: 10, label: 'Turbat, Balochistan' },
        { match: 'khuzdar', lat: 27.8165, lon: 66.6057, zoom: 10, label: 'Khuzdar, Balochistan' },
        { match: 'kalat', lat: 29.0258, lon: 66.5916, zoom: 10, label: 'Kalat, Balochistan' },
        { match: 'chaman', lat: 30.921, lon: 66.4597, zoom: 10, label: 'Chaman, Balochistan' },
        { match: 'zhob', lat: 31.3417, lon: 69.4486, zoom: 10, label: 'Zhob, Balochistan' },
        { match: 'sibi', lat: 29.543, lon: 67.8773, zoom: 10, label: 'Sibi, Balochistan' },
        { match: 'zahedan', lat: 29.4963, lon: 60.8629, zoom: 10, label: 'Zahedan, Sistan & Baluchestan' },
        { match: 'chabahar', lat: 25.2919, lon: 60.643, zoom: 10, label: 'Chabahar, Sistan & Baluchestan' }
      ];
      const specificTown = balochTownCoords.find((t) => lower.includes(t.match));
      if (specificTown) {
        const townReg = {
          id: 'custom',
          nameEn: specificTown.label,
          nameLocal: specificTown.label,
          country: cleanNation || 'Pakistan',
          defaultLang: chosenLang || 'bal',
          secondaryLang: 'en',
          center: [specificTown.lat, specificTown.lon],
          zoom: specificTown.zoom,
          userLocation: [specificTown.lat, specificTown.lon],
          userLocationLabel: {
            en: specificTown.label,
            rhg: specificTown.label,
            bn: specificTown.label,
            so: specificTown.label
          }
        };
        setCustomRegion(townReg);
        setRegionId('custom');
        setMapCenterCoords([specificTown.lat, specificTown.lon]);
        setMapZoom(specificTown.zoom);
        return { regionId: 'custom', customRegion: townReg };
      }
      setCustomRegion(null);
      setRegionId('balochistan-pakistan');
      setMapCenterCoords([28.95, 65.50]);
      setMapZoom(7);
      return { regionId: 'balochistan-pakistan', customRegion: null };
    }

    // 3. Mogadishu & Banadir, Somalia
    if (
      lower.includes('mogadishu') ||
      lower.includes('muqdisho') ||
      lower.includes('banadir') ||
      lower.includes('banaadir') ||
      lower.includes('baidoa') ||
      lower.includes('baydhabo')
    ) {
      setCustomRegion(null);
      setRegionId('somalia-mogadishu');
      setMapCenterCoords([2.0469, 45.3182]);
      setMapZoom(12);
      return { regionId: 'somalia-mogadishu', customRegion: null };
    }

    // 4. Dhaka, Bangladesh
    if (lower.includes('dhaka') || lower.includes('korail')) {
      setCustomRegion(null);
      setRegionId('dhaka-bangladesh');
      setMapCenterCoords([23.7806, 90.407]);
      setMapZoom(12);
      return { regionId: 'dhaka-bangladesh', customRegion: null };
    }

    // 5. Try OpenStreetMap Nominatim Geocoding (trying combinedQuery, then cleanRegion, then cleanNation)
    const candidateQueries = [combinedQuery, cleanRegion, cleanNation].filter(Boolean);
    for (const qTry of candidateQueries) {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(qTry)}&limit=1`
        );
        const data = await res.json();
        if (data && data.length > 0) {
          const place = data[0];
          const lat = parseFloat(place.lat);
          const lon = parseFloat(place.lon);
          let targetZoom = cleanRegion ? 9 : 6;
          if (Array.isArray(place.boundingbox) && place.boundingbox.length === 4) {
            const latSpan = Math.abs(parseFloat(place.boundingbox[1]) - parseFloat(place.boundingbox[0]));
            const lonSpan = Math.abs(parseFloat(place.boundingbox[3]) - parseFloat(place.boundingbox[2]));
            const maxSpan = Math.max(latSpan, lonSpan);
            if (maxSpan > 18) targetZoom = 5;
            else if (maxSpan > 8) targetZoom = 6;
            else if (maxSpan > 3.5) targetZoom = 7;
            else if (maxSpan > 1.5) targetZoom = 8;
            else if (maxSpan > 0.5) targetZoom = 9;
            else targetZoom = 11;
          }
          const labelShort = cleanRegion || cleanNation || place.display_name.split(',')[0].trim();
          const newReg = {
            id: 'custom',
            nameEn: combinedQuery,
            nameLocal: labelShort,
            country: cleanNation || place.display_name.split(',').pop().trim(),
            defaultLang: chosenLang,
            secondaryLang: 'en',
            center: [lat, lon],
            zoom: targetZoom,
            userLocation: [lat, lon],
            userLocationLabel: {
              en: labelShort,
              rhg: labelShort,
              bn: labelShort,
              so: labelShort
            }
          };
          setCustomRegion(newReg);
          setRegionId('custom');
          setMapCenterCoords([lat, lon]);
          setMapZoom(targetZoom);
          fetchLiveCentersNearPoint(lat, lon, 35000, labelShort).then((liveList) => {
            if (liveList.length > 0) {
              setLiveDiscoveredClinics((prev) => {
                const existingIds = new Set(prev.map((item) => item.id));
                const added = liveList.filter((item) => !existingIds.has(item.id));
                return added.length > 0 ? [...prev, ...added] : prev;
              });
            }
          });
          return { regionId: 'custom', customRegion: newReg };
        }
      } catch (err) {}
    }

    // 6. Offline / Fallback Lookup against our 4,463 Global Facilities in WORLD_CENTERS_DIRECTORY
    const globalFacilities = CLINICS_BY_REGION['total-anon-earth'] || [];
    const searchTerms = [cleanRegion.toLowerCase(), cleanNation.toLowerCase(), lower].filter(Boolean);
    for (const term of searchTerms) {
      const matched = globalFacilities.filter((c) => {
        const hay = `${c.regionDistrict || ''} ${c.name?.en || ''} ${c.address?.en || ''}`.toLowerCase();
        return hay.includes(term);
      });
      if (matched.length > 0) {
        const avgLat = matched.reduce((acc, c) => acc + c.lat, 0) / matched.length;
        const avgLng = matched.reduce((acc, c) => acc + c.lng, 0) / matched.length;
        const targetZoom = cleanRegion && term === cleanRegion.toLowerCase() ? 9 : 6;
        const labelShort = cleanRegion || cleanNation || combinedQuery;
        const fallbackReg = {
          id: 'custom',
          nameEn: combinedQuery,
          nameLocal: labelShort,
          country: cleanNation || labelShort,
          defaultLang: chosenLang,
          secondaryLang: 'en',
          center: [avgLat, avgLng],
          zoom: targetZoom,
          userLocation: [avgLat, avgLng],
          userLocationLabel: {
            en: labelShort,
            rhg: labelShort,
            bn: labelShort,
            so: labelShort
          }
        };
        setCustomRegion(fallbackReg);
        setRegionId('custom');
        setMapCenterCoords([avgLat, avgLng]);
        setMapZoom(targetZoom);
        return { regionId: 'custom', customRegion: fallbackReg };
      }
    }

    return { regionId: regionId || 'total-anon-earth', customRegion };
  };

  const handleGlobalRegionSearch = async (e) => {
    if (e) e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setIsSearchingGeo(true);
    setSearchFeedback('Searching Earth map...');
    const res = await resolveLocationAndSetRegion({ rawQuery: q, chosenLang: lang });
    setIsSearchingGeo(false);
    if (res.regionId === 'coxs-bazar') {
      setLang('rhg');
      setSearchFeedback('Matched Cox’s Bazar & Ukhiya Rohingya Camps');
    } else if (res.regionId === 'balochistan-pakistan') {
      setLang('bal');
      setSearchFeedback('Matched Balochistan Region');
    } else if (res.regionId === 'somalia-mogadishu') {
      setLang('so');
      setSearchFeedback('Matched Mogadishu, Somalia');
    } else if (res.customRegion) {
      setSearchFeedback(`Found "${res.customRegion.nameEn}" on Earth!`);
    }
  };

  useEffect(() => {
    if (isLoading || (currentPage !== 'MainApp'&& currentPage !== 'TotalAnon') || activeTab !== 'map') return;
    const L = window.L;
    if (!L || !mapContainerRef.current) return;

    const currentViewKey = `${regionId}_${customRegion ? `${customRegion.center[0]}_${customRegion.center[1]}_${customRegion.zoom}` : `${currentRegion.center[0]}_${currentRegion.center[1]}_${currentRegion.zoom}`}`;

    if (!leafletMapRef.current || leafletMapRef.current.getContainer() !== mapContainerRef.current) {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
      const map = L.map(mapContainerRef.current, {
        center: currentRegion.center,
        zoom: currentRegion.zoom,
        zoomControl: false
      });
      L.control.zoom({ position: 'topright'}).addTo(map);
      leafletMapRef.current = map;
      layerGroupRef.current = L.layerGroup().addTo(map);
      lastMapViewKeyRef.current = currentViewKey;
      setMapZoom(currentRegion.zoom);
      setMapCenterCoords(currentRegion.center);

      map.on('zoomend', () => {
        setMapZoom(map.getZoom());
      });

      // Layer 1 Live Discovery: When user zooms/pans into any region, rural district, or town on Earth (zoom >= 5),
      // automatically fetch real local hospitals, rural health posts, midwives, and safe havens
      map.on('moveend', async () => {
        const z = map.getZoom();
        const c = map.getCenter();
        if (z >= 4) {
          setMapCenterCoords([c.lat, c.lng]);
        }
        if (z >= 5) {
          const radius = z === 5 ? 95000 : z === 6 ? 70000 : z === 7 ? 50000 : 35000;
          setIsScanningLive(true);
          const liveList = await fetchLiveCentersNearPoint(c.lat, c.lng, radius, 'Local District');
          setIsScanningLive(false);
          if (liveList.length > 0) {
            setLiveDiscoveredClinics((prev) => {
              const existingIds = new Set(prev.map((item) => item.id));
              const added = liveList.filter((item) => !existingIds.has(item.id));
              return added.length > 0 ? [...prev, ...added] : prev;
            });
          }
        }
      });

      setTimeout(() => {
        map.invalidateSize();
        map.setView(currentRegion.center, currentRegion.zoom);
      }, 50);
    } else if (lastMapViewKeyRef.current !== currentViewKey) {
      lastMapViewKeyRef.current = currentViewKey;
      leafletMapRef.current.setView(currentRegion.center, currentRegion.zoom);
      setMapZoom(currentRegion.zoom);
      setMapCenterCoords(currentRegion.center);
    }

    const map = leafletMapRef.current;
    const lg = layerGroupRef.current;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }
    if (mapStyle === 'satellite') {
      tileLayerRef.current = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          attribution: 'Satellite © Esri, Maxar, Earthstar Geographics',
          maxZoom: 18
        }
      ).addTo(map);
    } else {
      tileLayerRef.current = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors • FemPowHer Humanitarian Map',
        maxZoom: 18
      }).addTo(map);
    }

    lg.clearLayers();

    if (regionId === 'coxs-bazar'&& !customRegion) {
      COXS_BAZAR_SUBREGIONS.forEach((sub) => {
        const poly = L.polygon(sub.coords, {
          color: '#9F133A',
          weight: 2,
          fillColor: sub.color,
          fillOpacity: mapStyle === 'satellite'? 0.28 : 0.52
        }).addTo(lg);

        const labelText =
          lang === 'rhg'? sub.nameRhg : lang === 'bn'? sub.nameBn : sub.nameEn;

        L.marker(sub.labelPos, {
          icon: L.divIcon({
            className: 'subregion-label-icon',
            html: `<div style="font-family: 'Kefa', 'Noto Sans Bengali', 'Noto Sans Hanifi Rohingya', Georgia, serif;
              font-weight: 800;
              font-size: 12px;
              color: #9F133A;
              background: rgba(255,255,255,0.92);
              padding: 2px 8px;
              border-radius: 6px;
              border: 1.5px solid #CF366C;
              white-space: nowrap;
              box-shadow: 0 1px 4px rgba(0,0,0,0.25);
              pointer-events: none;
              transform: translate(-50%, -50%);
            ">${labelText}</div>`,
            iconSize: [0, 0]
          })
        }).addTo(lg);

        poly.on('click', () => {
          map.flyTo(sub.labelPos, 11, { duration: 0.8 });
        });
      });
    }

    const userLoc = currentRegion.userLocation;
    const displayUser = isAnonymous ? 'Anonymous' : username || 'User';
    const userLabel =
      currentRegion.userLocationLabel?.[lang] || currentRegion.userLocationLabel?.en || 'Your Location';

    // Only place a personal userLocation marker when viewing a specific region (not on Global Planet View)
    if (regionId !== 'total-anon-earth') {
      const userMarker = L.marker(userLoc, {
        icon: L.divIcon({
          className: 'user-loc-icon',
          html: `<div style="width: 18px;
            height: 18px;
            background: #FFFFFF;
            border: 4px solid #9F133A;
            border-radius: 50%;
            box-shadow: 0 0 0 4px rgba(254,172,236,0.65), 0 2px 6px rgba(0,0,0,0.4);
          " title="${userLabel}"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        })
      }).addTo(lg);
      userMarker.bindTooltip(`${displayUser}: ${userLabel}`, { direction: 'top', offset: [0, -10] });
    }

    // ========================================================================
    // Dynamic Nearest-Neighbor Non-Overlapping Pin Sizing & Layout
    // Every pin is sized as large as possible without overlapping its neighbors
    // at the current zoom level (e.g., Mongolia stays larger at world zoom while
    // dense clusters like Delhi shrink so zero pins overlap, and dynamically
    // resize as you zoom in and out).
    // ========================================================================
    const currentZoom = map.getZoom();
    const n = filteredClinics.length;
    const pts = filteredClinics.map((c) => {
      const p = map.project([c.lat, c.lng], currentZoom);
      return { x: p.x, y: p.y, origX: p.x, origY: p.y };
    });

    const MAX_PIN_PX = currentZoom <= 3 ? 16.8 : currentZoom <= 5 ? 20.2 : 23.5;
    const MIN_PIN_PX = currentZoom <= 3 ? 4.0 : currentZoom <= 5 ? 5.2 : 6.8;
    const sameCityDegThreshold = currentZoom < 8 ? 0.22 : 0.002;

    // 1. Measure pixel distance to nearest regional neighbor (outside same-city twin pair)
    const sizes = new Array(n).fill(MAX_PIN_PX);
    const twinPartner = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
      let nearestRegionalPx = Infinity;
      let nearestTwinIdx = -1;
      let nearestTwinGeoDist = Infinity;

      const ci = filteredClinics[i];
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const cj = filteredClinics[j];
        const dLat = Math.abs(ci.lat - cj.lat);
        const dLng = Math.abs(ci.lng - cj.lng);
        const geoDist = Math.hypot(dLat, dLng);

        const dx = pts[i].origX - pts[j].origX;
        const dy = pts[i].origY - pts[j].origY;
        const distPx = Math.hypot(dx, dy);

        if (geoDist < sameCityDegThreshold) {
          if (geoDist < nearestTwinGeoDist) {
            nearestTwinGeoDist = geoDist;
            nearestTwinIdx = j;
          }
        } else if (distPx < nearestRegionalPx) {
          nearestRegionalPx = distPx;
        }
      }

      twinPartner[i] = nearestTwinIdx;
      if (!isFinite(nearestRegionalPx)) nearestRegionalPx = MAX_PIN_PX * 3;

      // If part of a same-city Hospital + Safe Haven pair, two pins share the regional space
      const rawAllowed =
        nearestTwinIdx !== -1 ? nearestRegionalPx * 0.45 : nearestRegionalPx * 0.84;
      sizes[i] = Math.max(MIN_PIN_PX, Math.min(MAX_PIN_PX, rawAllowed));
    }

    // 2. Place same-city twin pairs (Hospital + Safe Haven) cleanly side-by-side in pixel space
    const pairedVisited = new Set();
    for (let i = 0; i < n; i++) {
      const j = twinPartner[i];
      if (j !== -1 && !pairedVisited.has(i) && !pairedVisited.has(j) && twinPartner[j] === i) {
        pairedVisited.add(i);
        pairedVisited.add(j);
        const pairSize = Math.min(sizes[i], sizes[j]);
        sizes[i] = pairSize;
        sizes[j] = pairSize;
        const midX = (pts[i].origX + pts[j].origX) / 2;
        const midY = (pts[i].origY + pts[j].origY) / 2;
        const sep = pairSize / 2 + 0.7;
        pts[i].x = midX - sep;
        pts[i].y = midY;
        pts[j].x = midX + sep;
        pts[j].y = midY;
      }
    }

    // 3. Multi-pass circle-packing relaxation so close neighbors never overlap
    for (let iter = 0; iter < 5; iter++) {
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const dx = pts[j].x - pts[i].x;
          const dy = pts[j].y - pts[i].y;
          if (Math.abs(dx) > MAX_PIN_PX * 2 || Math.abs(dy) > MAX_PIN_PX * 2) continue;
          const dist = Math.hypot(dx, dy);
          const minDist = (sizes[i] + sizes[j]) / 2 + 1.0;
          if (dist < minDist) {
            // Shrink both slightly toward MIN_PIN_PX and nudge apart
            sizes[i] = Math.max(MIN_PIN_PX, sizes[i] * 0.93);
            sizes[j] = Math.max(MIN_PIN_PX, sizes[j] * 0.93);
            const newMinDist = (sizes[i] + sizes[j]) / 2 + 1.0;
            const overlap = newMinDist - dist;
            if (overlap > 0) {
              const ux = dist > 0.001 ? dx / dist : Math.cos(i + j);
              const uy = dist > 0.001 ? dy / dist : Math.sin(i + j);
              const push = overlap * 0.48;
              pts[i].x -= ux * push;
              pts[i].y -= uy * push;
              pts[j].x += ux * push;
              pts[j].y += uy * push;
            }
          }
        }
      }
    }

    // 4. Final strict non-overlap clamp: guarantee diameter <= distance to closest actual neighbor
    for (let i = 0; i < n; i++) {
      let minDistToAny = Infinity;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        if (Math.abs(dx) > MAX_PIN_PX * 2 || Math.abs(dy) > MAX_PIN_PX * 2) continue;
        const d = Math.hypot(dx, dy);
        if (d < minDistToAny) minDistToAny = d;
      }
      if (isFinite(minDistToAny)) {
        sizes[i] = Math.max(3.5, Math.min(sizes[i], minDistToAny * 0.84));
      }
    }

    filteredClinics.forEach((clinic, idx) => {
      const isSelected = selectedClinic?.id === clinic.id;
      const isSafeHaven = clinic.type === 'safe-haven';
      const computedSize = Math.round(sizes[idx] * 0.84 * 10) / 10;
      const sizePx = isSelected ? Math.max(22, computedSize + 6) : Math.max(4.6, computedSize);
      const anchorPx = sizePx / 2;

      const renderLatLng = map.unproject([pts[idx].x, pts[idx].y], currentZoom);

      // Hand-drawn style SVG Red Cross = Hospitals & OBGYN Centers (no white outline)
      // Hand-drawn style SVG Small Heart = Women Safe Havens (no white outline)
      const pinHtml = isSafeHaven
        ? `<div class="fempowher-map-pin-inner" style="width:${sizePx}px;height:${sizePx}px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
            <svg viewBox="0 0 32 32" width="${sizePx}" height="${sizePx}" style="display:block;overflow:visible;">
              <path d="M16.2 28.4 C13.5 26.2, 4.2 19.6, 3.6 11.8 C3.1 6.4, 7.2 3.2, 11.4 3.6 C14.1 3.9, 15.6 6.2, 16.3 7.9 C17.2 6.1, 19.3 4.1, 22.4 4.3 C26.8 4.6, 29.4 8.2, 28.5 13.2 C27.3 20.1, 18.8 26.5, 16.2 28.4 Z" fill="#CF366C"/>
            </svg>
          </div>`
        : `<div class="fempowher-map-pin-inner" style="width:${sizePx}px;height:${sizePx}px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
            <svg viewBox="0 0 32 32" width="${sizePx}" height="${sizePx}" style="display:block;overflow:visible;">
              <path d="M11.2 2.8 L20.8 3.1 L20.6 11.4 L29.2 11.7 L29.4 20.8 L20.5 20.6 L20.7 29.2 L11.1 29.1 L11.3 20.5 L2.8 20.7 L2.6 11.3 L11.4 11.2 Z" fill="#E30B52"/>
            </svg>
          </div>`;

      const pinMarker = L.marker([renderLatLng.lat, renderLatLng.lng], {
        riseOnHover: true,
        icon: L.divIcon({
          className: 'fempowher-map-pin',
          html: pinHtml,
          iconSize: [sizePx, sizePx],
          iconAnchor: [anchorPx, anchorPx]
        })
      }).addTo(lg);

      const cName = getCleanClinicTitleAndPhone(clinic).cleanTitle;
      pinMarker.bindTooltip(`${cName}`, { direction: 'top', offset: [0, -Math.max(8, anchorPx + 2)] });

      pinMarker.on('click', () => {
        setSelectedClinic(clinic);
        map.flyTo([clinic.lat, clinic.lng], Math.max(map.getZoom(), 11), { duration: 0.7 });
      });
    });

    if (activeRouteClinic) {
      const routeCoords = [userLoc, [activeRouteClinic.lat, activeRouteClinic.lng]];
      L.polyline(routeCoords, {
        color: '#9F133A',
        weight: 5,
        dashArray: '10, 8',
        opacity: 0.95
      }).addTo(lg);

      map.fitBounds(L.latLngBounds(routeCoords), { padding: [55, 55], maxZoom: 13 });
    }
  }, [isLoading, currentPage, activeTab, regionId, customRegion, lang, mapStyle, clinicFilter, selectedClinic, activeRouteClinic, liveDiscoveredClinics, mapZoom]);

  useEffect(() => {
    if ((isLoading || activeTab !== 'map' || (currentPage !== 'MainApp' && currentPage !== 'TotalAnon')) && leafletMapRef.current) {
      leafletMapRef.current.remove();
      leafletMapRef.current = null;
    }
  }, [isLoading, currentPage, activeTab]);

  // 1. FemPowHerPreloader
  if (isLoading) {
    return h(FemPowHerPreloader);
  }

  // 2. FemPowHerPreBoardingAPage
  if (currentPage === 'FemPowHerPreBoardingAPage') {
    return h(FemPowHerPreBoardingAPage, {
      lang,
      setLang,
      onNavigate: (targetPage) => {
        if (targetPage === 'AnonPage1') {
          setIsAnonymous(true);
          setUsername('Anonymous');
        } else {
          setIsAnonymous(false);
        }
        setCurrentPage(targetPage);
      }
    });
  }

  // 3. NewUserPage
  if (currentPage === 'NewUserPage') {
    return h(NewUserPage, {
      lang,
      username,
      setUsername,
      password,
      setPassword,
      email,
      setEmail,
      onBack: () => setCurrentPage('FemPowHerPreBoardingAPage'),
      onRegisterUser: ({ username: newU, password: newP, email: newE }) => {
        const key = newU.toLowerCase();
        // If registering as sydneyalc, grant full world view creator privileges immediately
        if (key === 'sydneyalc') {
          setUsername('sydneyalc');
          setEmail(newE || 'sydneylosikoffcarey@gmail.com');
          setLang('en');
          setWrittenLanguage('English');
          setAgeGroup('20-25');
          setCustomRegion(null);
          setRegionId('total-anon-earth');
          setIsAnonymous(false);
          saveAccount({
            username: 'sydneyalc',
            password: newP || 'AntiGravityRulez',
            email: newE || 'sydneylosikoffcarey@gmail.com',
            lang: 'en',
            ageGroup: '20-25',
            regionId: 'total-anon-earth',
            isFullWorldPrivilege: true
          });
          setActiveTab('map');
          navigateWithPreloader('MainApp');
          return;
        }
        saveAccount({
          username: newU,
          password: newP,
          email: newE,
          lang,
          ageGroup,
          regionId
        });
        setIsAnonymous(false);
        setCurrentPage('FemPowHerPreBoardingBPage');
      }
    });
  }

  // 4. SignInPage
  if (currentPage === 'SignInPage') {
    return h(SignInPage, {
      lang,
      username,
      setUsername,
      password,
      setPassword,
      onBack: () => setCurrentPage('FemPowHerPreBoardingAPage'),
      onSignInUser: ({ username: signU, password: signP }) => {
        const accounts = loadAccounts();
        const lookupKey = signU.trim().toLowerCase();
        const acct =
          accounts[lookupKey] ||
          Object.values(accounts).find(
            (a) => a && a.email && String(a.email).trim().toLowerCase() === lookupKey
          );
        if (!acct) {
          return { error: 'Username or email not found. Please check spelling or use New User.'};
        }
        if (acct.password !== signP) {
          return { error: 'Incorrect password. Please try again.'};
        }
        const signLang = acct.lang || 'en';
        setUsername(acct.username);
        setEmail(acct.email || '');
        setLang(signLang);
        const matchedLangObj = LANGUAGES.find((l) => l.code === signLang);
        setWrittenLanguage(acct.writtenLanguage || (matchedLangObj ? matchedLangObj.name : 'English'));
        setAgeGroup(acct.ageGroup || '20-25');
        if (acct.customRegion) {
          setCustomRegion(acct.customRegion);
          setRegionId('custom');
          setMapCenterCoords(acct.customRegion.center);
          setMapZoom(acct.customRegion.zoom || 9);
        } else {
          setCustomRegion(null);
          const targetRegId = acct.regionId || 'total-anon-earth';
          setRegionId(targetRegId);
          const regObj = FEATURED_REGIONS.find((r) => r.id === targetRegId);
          if (regObj) {
            setMapCenterCoords(regObj.center);
            setMapZoom(regObj.zoom);
          }
        }
        setIsAnonymous(false);
        setActiveTab('map');
        navigateWithPreloader('MainApp');
        return { ok: true };
      }
    });
  }

  // 5. AnonPage1
  if (currentPage === 'AnonPage1') {
    return h(AnonPage1, {
      lang,
      setLang,
      ageGroup,
      setAgeGroup,
      onBack: () => setCurrentPage('FemPowHerPreBoardingAPage'),
      // Top button: "Just Go Anonymously!"-> leads to TotalAnon (whole planet in English)
      onJustGoTotalAnon: () => {
        setIsAnonymous(true);
        setUsername(TOTAL_ANON_CONFIG.username);
        setLang(TOTAL_ANON_CONFIG.lang);
        setWrittenLanguage('English');
        setCustomRegion(null);
        setRegionId(TOTAL_ANON_CONFIG.regionId);
        setActiveTab('map');
        navigateWithPreloader('TotalAnon');
      },
      // Bottom button: "Explore My Region Anonymously!"-> leads to exact area with entered nation, region, language & age group
      onGoPreciseAnon: async ({ nation, region, lang: chosenLang, writtenLanguage: chosenWrittenLang, ageGroup: chosenAge }) => {
        setIsAnonymous(true);
        setUsername('Anonymous');
        setLang(chosenLang);
        if (chosenWrittenLang) {
          setWrittenLanguage(chosenWrittenLang);
        }
        setAgeGroup(chosenAge);

        await resolveLocationAndSetRegion({
          nation,
          region,
          chosenLang
        });

        setActiveTab('map');
        navigateWithPreloader('MainApp');
      }
    });
  }

  // 6. FemPowHerPreBoardingBPage
  if (currentPage === 'FemPowHerPreBoardingBPage') {
    return h(FemPowHerPreBoardingBPage, {
      lang,
      setLang,
      ageGroup,
      setAgeGroup,
      onBack: () => setCurrentPage('FemPowHerPreBoardingAPage'),
      onOpenMap: async ({ nation = '', region = '', lang: chosenLang = lang, writtenLanguage: chosenWrittenLang = writtenLanguage, ageGroup: chosenAge = ageGroup } = {}) => {
        setLang(chosenLang);
        if (chosenWrittenLang) {
          setWrittenLanguage(chosenWrittenLang);
        }
        setAgeGroup(chosenAge);

        const resolved = await resolveLocationAndSetRegion({
          nation,
          region,
          chosenLang
        });

        if (username && !isAnonymous) {
          saveAccount({
            username,
            password,
            email,
            lang: chosenLang,
            writtenLanguage: chosenWrittenLang,
            ageGroup: chosenAge,
            nation,
            region,
            regionId: resolved.regionId,
            customRegion: resolved.customRegion
          });
        }
        setActiveTab('map');
        navigateWithPreloader('MainApp');
      }
    });
  }

  // 7. MainApp (MapPage + 5 Bottom Tabs)
  const regionNews = PUBLIC_HEALTH_NEWS[regionId] || PUBLIC_HEALTH_NEWS['coxs-bazar'];
  const userCountryForStories =
    currentRegion.country && currentRegion.country !== 'Global'
      ? currentRegion.country
      : currentRegion.nameEn && !currentRegion.nameEn.includes('Total Anon')
      ? currentRegion.nameEn
      : 'Your Country';
  const educationTableButtons = [
    {
      id: 'pregnancy-and-birth',
      page: 'PregnancyAndBirthHomePage',
      label: t.eduBtnPregnancyAndBirth || 'Pregnancy & Birth',
      shade: 'standard'
    },
    { id: 'postpartum', page: 'PostpartumHomePage', label: t.eduBtnPostpartum || 'Postpartum', shade: 'standard' },
    { id: 'loss-of-a-child', page: 'LossOfAChildHomePage', label: t.eduBtnLossOfChild || 'Loss of a Child', shade: 'lighter' },
    { id: 'menopause', page: 'MenopauseHomePage', label: t.eduBtnMenopause || 'Menopause', shade: 'standard' },
    { id: 'menstrual-cycle', page: 'MenstrualCycleHomePage', label: t.eduBtnMenstrualCycle || 'Menstrual Cycle', shade: 'standard' },
    { id: 'sexual-health', page: 'SexualHealthHomePage', label: t.eduBtnSexualHealth || 'Sexual Health', shade: 'standard' },
    { id: 'for-loved-one', page: 'ForALovedOneHomePage', label: t.eduBtnForLovedOne || 'For a Loved One', shade: 'lighter' },
    { id: 'for-me', page: 'ForMeHomePage', label: t.eduBtnForMe || 'For Me', shade: 'lighter' },
    {
      id: 'diseases-injuries',
      page: 'DiseasesAndInjuriesHomePage',
      label: t.eduBtnDiseasesInjuries || 'Reproductive Health Diseases and Injuries',
      shade: 'darker'
    },
    { id: 'worldview', page: 'WorldviewHomePage', label: t.eduBtnWorldview || 'Worldview', shade: 'darker' }
  ];
  const activeEducationIssues =
    educationSelection?.type === 'age'
      ? AGE_SPECIFIC_ISSUES[educationSelection.id] || AGE_SPECIFIC_ISSUES['25-30']
      : educationSelection?.type === 'topic'
      ? getEducationTopicIssues(educationSelection.id, userCountryForStories, ageGroup)
      : [];
  const displayUsername =
    isAnonymous || username === 'Anonymous'
      ? t.anonymousLabel || 'Anonymous'
      : username || t.anonymousLabel || 'User';
  const displayRegionName =
    currentRegion.id === 'total-anon-earth'
      ? t.totalAnonEarthLabel || currentRegion.nameEn
      : currentRegion.nameEn;
  const displayAgeGroup = formatDigitsForLang(ageGroup);

  return h(
    'div',
    {
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'h-screen w-screen overflow-hidden flex flex-col bg-white select-none'
    },

    h(
      'header',
      {
        className: 'text-white px-3.5 py-2.5 shadow-md flex flex-wrap items-center justify-between gap-2 z-30 shrink-0',
        style: { background: 'linear-gradient(90deg, #9F133A 0%, #CF366C 100%)'}
      },
      h(
        'div',
        { className: 'flex items-center gap-3' },
        h(
          'button',
          {
            type: 'button',
            onClick: () => {
              if (activeTab !== 'map') {
                setActiveTab('map');
              } else {
                setCurrentPage('FemPowHerPreBoardingAPage');
              }
            },
            className: 'inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer bg-transparent border-0 p-0 hover:opacity-80',
            style: { color: '#FEACEC' }
          },
          h('span', { 'aria-hidden': 'true' }, isRtl ? '→' : '←'),
          h('bdi', null, cleanBackLabel(t.backBtn, lang))
        ),
        h(
          'button',
          {
            onClick: () => setActiveTab('map'),
            className: 'font-bold text-lg tracking-tight flex items-center gap-1.5 text-white'
          },
          t.appName || 'FemPowHer'
        ),
        h(
          'span',
          {
            className: 'hidden md:inline-block text-xs px-2.5 py-0.5 rounded-full font-bold',
            style: { backgroundColor: '#9F133A', color: '#FEACEC', border: '1px solid #FEACEC'}
          },
          `${displayRegionName} • ${displayUsername} (${displayAgeGroup})`)
      ),

      h(
        'div',
        { className: 'flex items-center gap-2' },
        h('input', {
          type: 'text',
          list: 'main-world-languages-datalist',
          value: writtenLanguage,
          onChange: (e) => handleGlobalLanguageChange(e.target.value),
          placeholder: t.selectLanguagePlaceholder || 'Select or type language...',
          className: 'px-3.5 py-1.5 rounded-xl border-2 outline-none text-xs font-bold shadow-sm w-44 sm:w-56',
          style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC' }
        }),
        h(
          'datalist',
          { id: 'main-world-languages-datalist' },
          WORLD_LANGUAGE_SUGGESTIONS.map((langName, idx) =>
            h('option', { key: idx, value: langName })
          )
        )
      )
    ),

    h(
      'main',
      { className: 'flex-1 relative overflow-y-auto flex flex-col bg-white'},

      activeTab === 'map'&&
        h(
          'div',
          { className: 'flex-1 flex flex-col relative h-full'},
          h(
            'div',
            {
              className: 'bg-white border-b-2 px-3 py-2 flex flex-col gap-2 z-20 shadow-sm',
              style: { borderColor: '#FEACEC'}
            },
            // Top Row: Pink-outlined title centered on top, Search bar + Find + Satellite in top right in line with it
            h(
              'div',
              { className: 'relative flex flex-wrap items-center justify-between gap-2 w-full' },
              // Left spacer on desktop so the center badge stays dead-center while search sits on the right
              h('div', { className: 'hidden xl:block xl:w-[360px] shrink-0 pointer-events-none' }),
              // Centered pink-outlined Women's Safe Havens & OB/GYN title
              h(
                'div',
                { className: 'flex-1 flex justify-center' },
                h(
                  'span',
                  {
                    className: 'inline-flex items-center justify-center text-xs sm:text-sm font-bold px-4 py-1 rounded-xl shrink-0 text-center shadow-sm',
                    style: {
                      backgroundColor: '#FEACEC',
                      color: '#9F133A',
                      border: '2px solid #CF366C'
                    }
                  },
                  t.mapHeaderBadge
                )
              ),
              // Top-right Search bar + Find + Satellite toggle in line with the title
              h(
                'div',
                { className: 'flex items-center justify-end gap-1.5 shrink-0 flex-wrap ml-auto xl:w-[360px]' },
                h(
                  'form',
                  { onSubmit: handleMapRuralJump, className: 'flex items-center gap-1' },
                  h('input', {
                    type: 'text',
                    value: mapRuralQuery,
                    onChange: (e) => setMapRuralQuery(e.target.value),
                    placeholder: t.mapSearchPlaceholder || 'Search any village, rural district, or town...',
                    className: 'px-2.5 py-1 rounded-lg border text-xs font-bold outline-none w-44 sm:w-52',
                    style: { borderColor: '#CF366C', color: '#9F133A', backgroundColor: '#FFF5FC' }
                  }),
                  h(
                    'button',
                    {
                      type: 'submit',
                      className: 'px-2.5 py-1 rounded-lg text-xs font-bold text-white shrink-0',
                      style: { backgroundColor: '#9F133A' }
                    },
                    isScanningLive ? (t.scanningBtn || 'Scanning...') : (t.findBtn || 'Find')
                  )
                ),
                h(
                  'button',
                  {
                    onClick: () => setMapStyle(mapStyle === 'district'? 'satellite': 'district'),
                    className: 'px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 shrink-0',
                    style: { backgroundColor: '#CF366C', color: '#FFFFFF'}
                  },
                  mapStyle === 'district'? `${t.satelliteToggle}`: `${t.illustratedMapToggle}`
                )
              )
            ),
            // Second Row: 4 filter options centered below the title
            h(
              'div',
              { className: 'flex items-center justify-center gap-2 overflow-x-auto py-0.5 flex-wrap' },
              [
                { id: 'all', label: t.filterAll },
                { id: 'safe-haven', label: t.filterSafeHaven },
                { id: 'obgyn', label: t.filterObgyn },
                { id: 'hospital', label: t.filterHospital }
              ].map((f) =>
                h(
                  'button',
                  {
                    key: f.id,
                    onClick: () => setClinicFilter(f.id),
                    className: 'px-3 py-1 rounded-lg text-xs font-bold transition shrink-0',
                    style:
                      clinicFilter === f.id
                        ? { backgroundColor: '#9F133A', color: '#FFFFFF'}
                        : { backgroundColor: '#FFF0FA', color: '#9F133A', border: '1px solid #FEACEC'}
                  },
                  f.label
                )
              )
            )
          ),

          activeRouteClinic &&
            h(
              'div',
              {
                className: 'text-white px-4 py-2.5 flex items-center justify-between gap-3 z-20 shadow-md',
                style: { backgroundColor: '#9F133A', borderBottom: '2px solid #FEACEC'}
              },
              h(
                'div',
                { className: 'text-xs'},
                h(
                  'div',
                  { className: 'font-bold uppercase tracking-wider text-[10px]', style: { color: '#FEACEC'} },
                  `${t.showingRouteTo} (${getDistanceKm(
                    currentRegion.userLocation[0],
                    currentRegion.userLocation[1],
                    activeRouteClinic.lat,
                    activeRouteClinic.lng
                  )} km ${t.distanceAway})`),
                h('div', { className: 'font-bold text-sm mt-0.5'}, activeRouteClinic.name[lang] || activeRouteClinic.name.en),
                h(
                  'div',
                  { className: 'mt-0.5', style: { color: '#FEACEC'} },
                  activeRouteClinic.directionsText[lang] || activeRouteClinic.directionsText.en
                )
              ),
              h(
                'div',
                { className: 'flex items-center gap-2 shrink-0'},
                h(
                  'button',
                  {
                    onClick: () =>
                      speakText(
                        'route-voice',
                        `${activeRouteClinic.name[lang] || activeRouteClinic.name.en}. ${
                          activeRouteClinic.directionsText[lang] || activeRouteClinic.directionsText.en
                        }`),
                    className: 'px-2.5 py-1.5 rounded-lg font-bold text-xs',
                    style: { backgroundColor: '#FEACEC', color: '#9F133A'}
                  },
                  speakingId === 'route-voice' ? t.stopAudioBtn : t.listenAudioBtn),
                h(
                  'button',
                  {
                    onClick: () => setActiveRouteClinic(null),
                    className: 'px-2.5 py-1.5 rounded-lg text-white font-bold text-xs',
                    style: { backgroundColor: '#CF366C'}
                  },
                  t.clearRouteBtn
                )
              )
            ),

          h(
            'div',
            { className: 'flex-1 w-full h-full relative flex flex-col' },
            h('div', {
              ref: mapContainerRef,
              className: 'flex-1 w-full h-full z-10',
              style: { minHeight: '300px' }
            }),
            !selectedClinic && h(MapLegend1, { message: t.mapInstruction })
          ),

          selectedClinic &&
            (() => {
              const { cleanTitle, cleanPhone, cleanHotline } = getCleanClinicTitleAndPhone(selectedClinic);
              const dialTarget = cleanPhone || cleanHotline || selectedClinic.phone || '';
              return h(
                'div',
                {
                  className: 'absolute bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:w-[430px] bg-white rounded-3xl shadow-2xl border-2 p-4 z-20 max-h-[68vh] overflow-y-auto',
                  style: { borderColor: '#9F133A'}
                },
                h(
                  'div',
                  { className: 'flex items-start justify-between gap-2'},
                  h(
                    'div',
                    null,
                    h(
                      'span',
                      {
                        className: 'inline-block text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-1',
                        style: { backgroundColor: '#FEACEC', color: '#9F133A'}
                      },
                      selectedClinic.categoryBadge[lang] || selectedClinic.categoryBadge.en
                    ),
                    h(
                      'h3',
                      { className: 'text-base font-bold leading-snug', style: { color: '#9F133A'} },
                      cleanTitle,
                      hasWomensHealthInTitle(selectedClinic) &&
                        renderMaroonPregnantIcon(18, { marginInlineStart: '6px', verticalAlign: 'text-bottom' })
                    )
                  ),
                  h(
                    'button',
                    {
                      onClick: () => setSelectedClinic(null),
                      className: 'w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center shrink-0',
                      style: { backgroundColor: '#FEACEC', color: '#9F133A'}
                    },
                    'X')
                ),
                h(
                  'div',
                  {
                    className: 'mt-2 text-xs space-y-1 p-2.5 rounded-xl border',
                    style: { backgroundColor: '#FFF5FC', borderColor: '#FEACEC', color: '#9F133A'}
                  },
                  h(
                    'div',
                    { className: 'font-bold'},
                    selectedClinic.address[lang] || selectedClinic.address.en,
                    ' (',
                    h(
                      'bdi',
                      null,
                      `${getDistanceKm(
                        currentRegion.userLocation[0],
                        currentRegion.userLocation[1],
                        selectedClinic.lat,
                        selectedClinic.lng
                      )} km`
                    ),
                    ` ${t.distanceAway})`
                  ),
                  (cleanPhone || cleanHotline) &&
                    h(
                      'div',
                      { className: 'font-bold', style: { color: '#CF366C'} },
                      cleanPhone && h('bdi', null, cleanPhone),
                      cleanPhone && cleanHotline ? ` • ${t.hotlineLabel || 'Hotline:'} ` : !cleanPhone && cleanHotline ? `${t.hotlineLabel || 'Hotline:'} ` : '',
                      cleanHotline && h('bdi', null, cleanHotline)
                    )
                ),
                h(
                  'div',
                  { className: 'mt-2.5'},
                  h(
                    'ul',
                    { className: 'space-y-1'},
                    (selectedClinic.services[lang] || selectedClinic.services.en).map((srv, idx) => {
                      const enSrv = selectedClinic.services?.en?.[idx] || '';
                      const isFemaleHealthLine = MATERNITY_NAME_REGEX.test(`${srv || ''} ${enSrv}`);
                      return h(
                        'li',
                        { key: idx, className: 'text-xs flex items-center gap-1.5 font-bold', style: { color: '#9F133A'} },
                        isFemaleHealthLine
                          ? renderMaroonPregnantIcon(15)
                          : h('span', { style: { color: '#CF366C'} }, '-'),
                        h('span', null, srv)
                      );
                    })
                  )
                ),
                h(
                  'div',
                  {
                    className: 'mt-2.5 text-xs p-2.5 rounded-xl border font-bold',
                    style: { backgroundColor: '#FFF0FA', borderColor: '#CF366C', color: '#9F133A'}
                  },
                  selectedClinic.directionsText[lang] || selectedClinic.directionsText.en
                ),
                h(
                  'div',
                  { className: 'mt-3 grid grid-cols-2 gap-2'},
                  h(
                    'button',
                    {
                      onClick: () => setActiveRouteClinic(selectedClinic),
                      className: 'py-2.5 px-3 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm',
                      style: { backgroundColor: '#9F133A'}
                    },
                    t.directionsBtn
                  ),
                  h(
                    'a',
                    {
                      href: `tel:${dialTarget}`,
                      className: 'py-2.5 px-3 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm text-center',
                      style: { backgroundColor: '#CF366C'}
                    },
                    t.callClinicBtn
                  )
                ),
                h(
                  'button',
                  {
                    onClick: () =>
                      speakText(
                        `clinic-${selectedClinic.id}`,
                        `${cleanTitle}. ${
                          selectedClinic.address[lang] || selectedClinic.address.en
                        }. ${(selectedClinic.services[lang] || selectedClinic.services.en).join('. ')}. ${
                          selectedClinic.directionsText[lang] || selectedClinic.directionsText.en
                        }`),
                    className: 'mt-2 w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5',
                    style: { backgroundColor: '#FEACEC', color: '#9F133A'}
                  },
                  speakingId === `clinic-${selectedClinic.id}`? t.stopAudioBtn : t.listenAudioBtn
                )
              );
            })()
        ),

      activeTab === 'emergency'&&
        (() => {
          const areaCrisisInfo = getImmediateCrisisInfoForArea(currentRegion, closestHospitals, closestShelters);
          return h(
            'div',
            { className: 'max-w-3xl w-full mx-auto p-4 sm:p-6 space-y-8'},
            h(
              'div',
              {
                className: 'text-white p-5 rounded-3xl shadow-lg',
                style: { background: 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)'}
              },
              h('div', { className: 'text-xs font-bold uppercase tracking-wider', style: { color: '#FEACEC'} }, `${currentRegion.nameEn}`),
              h('h2', { className: 'text-xl sm:text-2xl font-bold mt-1'}, t.emergencyTitle),
              h('p', { className: 'text-xs sm:text-sm mt-1', style: { color: '#FEACEC'} }, t.emergencySubtitle)
            ),

            // IMMEDIATE CRISIS & EMERGENCY NUMBERS IN YOUR AREA (Matches sketch: one-line smaller title + dotted leader rows)
            h(
              'div',
              {
                className: 'w-full px-2 sm:px-6 py-2'
              },
              h(
                'h3',
                {
                  className: 'text-xs sm:text-base font-bold text-center whitespace-nowrap underline underline-offset-4 tracking-wide',
                  style: { color: '#E30B52'}
                },
                t.immediateCrisisNumbersTitle || 'Immediate Crisis & Emergency Numbers in Your Area'
              ),
              h(
                'div',
                { className: 'mt-4 flex flex-col space-y-2.5 max-w-xl mx-auto'},
                // 1. National Emergency Number . . . . . . . 123
                h(
                  'div',
                  {
                    className: 'flex items-baseline w-full text-xs sm:text-sm font-bold',
                    style: { color: '#E30B52'}
                  },
                  h('span', { className: 'shrink-0 pr-2'}, t.nationalEmergencyNumberLabel || 'National Emergency Number'),
                  h('span', {
                    className: 'flex-1 border-b-2 border-dotted mx-1',
                    style: { borderColor: '#E30B52'}
                  }),
                  h('span', { className: 'shrink-0 pl-2 font-extrabold'}, areaCrisisInfo.nationalNumber || areaCrisisInfo.emergencyNumber)
                ),
                // 2. Regional Emergency Number (if there is one) . . . . . . . xxx
                areaCrisisInfo.regionalNumber &&
                  h(
                    'div',
                    {
                      className: 'flex items-baseline w-full text-xs sm:text-sm font-bold',
                      style: { color: '#E30B52'}
                    },
                    h('span', { className: 'shrink-0 pr-2'}, t.regionalEmergencyNumberLabel || 'Regional Emergency Number'),
                    h('span', {
                      className: 'flex-1 border-b-2 border-dotted mx-1',
                      style: { borderColor: '#E30B52'}
                    }),
                    h('span', { className: 'shrink-0 pl-2 font-extrabold'}, areaCrisisInfo.regionalNumber)
                  ),
                // 3. Crisis lines . . . . . . . xxx (Translates "Crisis" while keeping original name in parentheses)
                areaCrisisInfo.crisisItems &&
                  areaCrisisInfo.crisisItems.length > 0 &&
                  areaCrisisInfo.crisisItems.map((item, idx) => {
                    const crisisPrefix = t.crisisLinePrefix || 'Crisis';
                    const localizedCrisisLabel = item.originalName
                      ? `${crisisPrefix} (${item.originalName})`
                      : crisisPrefix;
                    return h(
                      'div',
                      {
                        key: `crisis-line-${idx}`,
                        className: 'flex items-baseline w-full text-xs sm:text-sm font-bold',
                        style: { color: '#E30B52'}
                      },
                      h('span', { className: 'shrink-0 pr-2'}, localizedCrisisLabel),
                      h('span', {
                        className: 'flex-1 border-b-2 border-dotted mx-1',
                        style: { borderColor: '#E30B52'}
                      }),
                      h('span', { className: 'shrink-0 pl-2 font-extrabold'}, item.number)
                    );
                  })
              )
            ),

            // LIST 1: HOSPITALS (5 closest -> Extend by 5 up to 25)
          h(
            'div',
            { className: 'space-y-4'},
            h(
              'h3',
              {
                className: 'text-xl sm:text-2xl font-bold text-center tracking-wide pb-2 border-b-2',
                style: { color: '#9F133A', borderColor: '#FEACEC'}
              },
              t.hospitalsSectionTitle || 'Hospitals'
            ),
            h(
              'div',
              { className: 'flex flex-col items-center space-y-4'},
              closestHospitals.slice(0, visibleHospitalsCount).map((clinic) => {
                const contactLines = extractContactLines(clinic);
                const openHoursText = extractOpenHours(clinic);
                const exactAddr =
                  enrichedAddressById[clinic.id] ||
                  clinic.address?.[lang] ||
                  clinic.address?.en ||
                  clinic.regionDistrict ||
                  '';
                return h(
                  'div',
                  {
                    key: clinic.id,
                    className: 'w-full bg-white rounded-2xl p-4 sm:p-5 border-2 shadow-sm transition',
                    style: { borderColor: '#FEACEC'}
                  },
                  // Centered Hospital Title
                  h(
                    'h4',
                    {
                      className: 'text-base sm:text-lg font-bold text-center',
                      style: { color: '#9F133A'}
                    },
                    getCleanClinicTitleAndPhone(clinic).cleanTitle,
                    hasWomensHealthInTitle(clinic) &&
                      renderMaroonPregnantIcon(19, { marginInlineStart: '6px', verticalAlign: 'text-bottom' })
                  ),
                  // Underneath Title: Start side Contact | End side Exact Address (in line with each other)
                  h(
                    'div',
                    {
                      className: 'grid grid-cols-2 gap-4 items-start mt-3 pt-3 border-t',
                      style: { borderColor: '#FEACEC'}
                    },
                    // Start Side: Contact
                    h(
                      'div',
                      { className: 'text-start space-y-1 pe-2'},
                      h(
                        'div',
                        {
                          className: 'text-xs sm:text-sm font-bold uppercase tracking-wider',
                          style: { color: '#9F133A'}
                        },
                        t.contactColumnLabel || 'CONTACT'
                      ),
                      contactLines.length > 0
                        ? contactLines.map((line, idx) =>
                            h(
                              'div',
                              { key: idx, className: 'text-xs sm:text-sm font-bold break-words', style: { color: '#CF366C'} },
                              line.href
                                ? h(
                                    'a',
                                    {
                                      href: line.href,
                                      target: line.label === 'Website' ? '_blank' : undefined,
                                      rel: line.label === 'Website' ? 'noopener noreferrer' : undefined,
                                      className: 'underline hover:opacity-80',
                                      style: { color: '#CF366C'}
                                    },
                                    h('bdi', null, line.value)
                                  )
                                : h('bdi', null, line.value)
                            )
                          )
                        : h('div', { className: 'text-xs sm:text-sm font-bold', style: { color: '#CF366C'} }, h('bdi', null, 'Local Emergency / 112'))
                    ),
                    // End Side: Exact Address (in line with Contact info)
                    h(
                      'div',
                      { className: 'text-end space-y-1 ps-2'},
                      h(
                        'div',
                        {
                          className: 'text-xs sm:text-sm font-bold uppercase tracking-wider',
                          style: { color: '#9F133A'}
                        },
                        t.addressColumnLabel || 'ADDRESS'
                      ),
                      h(
                        'div',
                        { className: 'text-xs sm:text-sm font-bold break-words', style: { color: '#CF366C'} },
                        exactAddr
                      )
                    )
                  ),
                  // Centered underneath Contact & Address: Open hours / 24/7
                  openHoursText &&
                    h(
                      'div',
                      {
                        className: 'mt-3 pt-2 border-t text-center text-xs sm:text-sm font-bold',
                        style: { borderColor: '#FEACEC', color: '#9F133A'}
                      },
                      openHoursText
                    )
                );
              })
            ),
            visibleHospitalsCount < Math.min(25, closestHospitals.length) &&
              h(
                'div',
                { className: 'flex justify-center pt-2'},
                h(
                  'button',
                  {
                    onClick: () => setVisibleHospitalsCount((prev) => Math.min(25, prev + 5)),
                    className: 'px-8 py-2.5 rounded-full font-bold text-sm text-white shadow-md transition hover:opacity-95',
                    style: { backgroundColor: '#9F133A', border: '2px solid #FEACEC'}
                  },
                  t.extendBtnLabel || 'Extend'
                )
              )
          ),

          // LIST 2: WOMEN'S SHELTERS (5 closest -> Extend by 5 up to 25)
          h(
            'div',
            { className: 'space-y-4 pt-4'},
            h(
              'h3',
              {
                className: 'text-xl sm:text-2xl font-bold text-center tracking-wide pb-2 border-b-2',
                style: { color: '#9F133A', borderColor: '#FEACEC'}
              },
              t.womensSheltersSectionTitle || 'Women’s Shelters'
            ),
            h(
              'div',
              { className: 'flex flex-col items-center space-y-4'},
              closestShelters.slice(0, visibleSheltersCount).map((clinic) => {
                const contactLines = extractContactLines(clinic);
                const openHoursText = extractOpenHours(clinic);
                const exactAddr =
                  enrichedAddressById[clinic.id] ||
                  clinic.address?.[lang] ||
                  clinic.address?.en ||
                  clinic.regionDistrict ||
                  '';
                return h(
                  'div',
                  {
                    key: clinic.id,
                    className: 'w-full bg-white rounded-2xl p-4 sm:p-5 border-2 shadow-sm transition',
                    style: { borderColor: '#FEACEC'}
                  },
                  // Centered Women's Shelter Title
                  h(
                    'h4',
                    {
                      className: 'text-base sm:text-lg font-bold text-center',
                      style: { color: '#9F133A'}
                    },
                    getCleanClinicTitleAndPhone(clinic).cleanTitle
                  ),
                  // Underneath Title: Left side Contact | Right side Exact Address (in line with each other)
                  h(
                    'div',
                    {
                      className: 'grid grid-cols-2 gap-4 items-start mt-3 pt-3 border-t',
                      style: { borderColor: '#FEACEC'}
                    },
                    // Start Side: Contact
                    h(
                      'div',
                      { className: 'text-start space-y-1 pe-2'},
                      h(
                        'div',
                        {
                          className: 'text-xs sm:text-sm font-bold uppercase tracking-wider',
                          style: { color: '#9F133A'}
                        },
                        t.contactColumnLabel || 'CONTACT'
                      ),
                      contactLines.length > 0
                        ? contactLines.map((line, idx) =>
                            h(
                              'div',
                              { key: idx, className: 'text-xs sm:text-sm font-bold break-words', style: { color: '#CF366C'} },
                              line.href
                                ? h(
                                    'a',
                                    {
                                      href: line.href,
                                      target: line.label === 'Website' ? '_blank' : undefined,
                                      rel: line.label === 'Website' ? 'noopener noreferrer' : undefined,
                                      className: 'underline hover:opacity-80',
                                      style: { color: '#CF366C'}
                                    },
                                    h('bdi', null, line.value)
                                  )
                                : h('bdi', null, line.value)
                            )
                          )
                        : h('div', { className: 'text-xs sm:text-sm font-bold', style: { color: '#CF366C'} }, h('bdi', null, 'Local Emergency / 112'))
                    ),
                    // End Side: Exact Address (in line with Contact info)
                    h(
                      'div',
                      { className: 'text-end space-y-1 ps-2'},
                      h(
                        'div',
                        {
                          className: 'text-xs sm:text-sm font-bold uppercase tracking-wider',
                          style: { color: '#9F133A'}
                        },
                        t.addressColumnLabel || 'ADDRESS'
                      ),
                      h(
                        'div',
                        { className: 'text-xs sm:text-sm font-bold break-words', style: { color: '#CF366C'} },
                        exactAddr
                      )
                    )
                  ),
                  // Centered underneath Contact & Address: Open hours / 24/7
                  openHoursText &&
                    h(
                      'div',
                      {
                        className: 'mt-3 pt-2 border-t text-center text-xs sm:text-sm font-bold',
                        style: { borderColor: '#FEACEC', color: '#9F133A'}
                      },
                      openHoursText
                    )
                );
              })
            ),
            visibleSheltersCount < Math.min(25, closestShelters.length) &&
              h(
                'div',
                { className: 'flex justify-center pt-2'},
                h(
                  'button',
                  {
                    onClick: () => setVisibleSheltersCount((prev) => Math.min(25, prev + 5)),
                    className: 'px-8 py-2.5 rounded-full font-bold text-sm text-white shadow-md transition hover:opacity-95',
                    style: { backgroundColor: '#9F133A', border: '2px solid #FEACEC'}
                  },
                  t.extendBtnLabel || 'Extend'
                )
              )
            )
          );
        })(),

      activeTab === 'being-a-woman'&&
        (isAnonymous || username === 'Anonymous' || currentPage === 'TotalAnon'
          ? h(AnonBeingAWomanWorldViewPage, {
              onBack: () => setActiveTab('map'),
              UserLanguageChoice1,
              lang,
              t
            })
          : h(BeingAWomanInHomePage, {
              onBack: () => setActiveTab('map'),
              userNationVariable1,
              userNationVariable2,
              UserLanguageChoice1,
              beingAWomanContent,
              roleModelCountryCenter,
              roleModelCountryZoom,
              lang,
              t
            })),

      activeTab === 'issues'&&
        (() => {
          const handleShowNearestClinicFromEdu = () => {
            const firstClinic = clinics[0];
            if (firstClinic) {
              setSelectedClinic(firstClinic);
              setActiveRouteClinic(firstClinic);
            }
            setActiveTab('map');
          };
          const commonEduPageProps = {
            onBack: () => setEducationPage(null),
            lang,
            UserLanguageChoice1,
            t,
            speakingId,
            speakText,
            onShowNearestClinic: handleShowNearestClinicFromEdu
          };

          if (educationPage === 'PregnancyAndBirthHomePage') {
            return h(PregnancyAndBirthHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage(null),
              onNavigateEducationPage: (targetPage) => setEducationPage(targetPage)
            });
          }
          if (educationPage === 'PregnancyHomePage') {
            return h(PregnancyHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyAndBirthHomePage'),
              onNavigateEducationPage: (targetPage) => setEducationPage(targetPage)
            });
          }
          if (educationPage === 'PreConceptionHomePage') {
            return h(PreConceptionHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyAndBirthHomePage'),
              issues: getEducationTopicIssues('trying-to-conceive', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'FeelingGoodPregHomePage') {
            return h(FeelingGoodPregHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyHomePage'),
              issues: getEducationTopicIssues('pregnancy', userCountryForStories, ageGroup),
              tryingIssues: getEducationTopicIssues('trying-to-conceive', userCountryForStories, ageGroup),
              onNavigateEducationPage: (targetPage) => setEducationPage(targetPage)
            });
          }
          if (educationPage === 'QuestionsPregHomePage') {
            return h(QuestionsPregHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyHomePage')
            });
          }
          if (educationPage === 'HardTimePregHomePage') {
            return h(HardTimePregHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyHomePage')
            });
          }
          if (educationPage === 'ChildbirthHomePage') {
            return h(ChildbirthHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyAndBirthHomePage'),
              issues: getEducationTopicIssues('childbirth', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'PostpartumHomePage') {
            return h(PostpartumHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('postpartum', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'MiscarriageHomePage') {
            return h(MiscarriageHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyAndBirthHomePage'),
              issues: getEducationTopicIssues('miscarriage', userCountryForStories, ageGroup),
              onNavigateEducationPage: (targetPage) => setEducationPage(targetPage)
            });
          }
          if (educationPage === 'LossOfAChildHomePage') {
            return h(LossOfAChildHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('loss-of-a-child', userCountryForStories, ageGroup),
              onNavigateEducationPage: (targetPage) => setEducationPage(targetPage)
            });
          }
          if (educationPage === 'PregnancyAfterLossHomePage') {
            return h(PregnancyAfterLossHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('PregnancyAndBirthHomePage'),
              issues: getEducationTopicIssues('pregnancy-after-loss', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'MenopauseHomePage') {
            return h(MenopauseHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('menopause', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'MenstrualCycleHomePage') {
            return h(MenstrualCycleHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage(null),
              onNavigateEducationPage: (targetPage) => setEducationPage(targetPage)
            });
          }
          if (educationPage === 'FirstPeriodHomePage') {
            return h(FirstPeriodHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('MenstrualCycleHomePage'),
              issues: getEducationTopicIssues('menstrual-cycle', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'MyCycleSubHomePage') {
            return h(MyCycleSubHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('MenstrualCycleHomePage')
            });
          }
          if (educationPage === 'PainfulPeriodsHomePage') {
            return h(PainfulPeriodsHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('MenstrualCycleHomePage')
            });
          }
          if (educationPage === 'PeriodStoppedHomePage') {
            return h(PeriodStoppedHomePage, {
              ...commonEduPageProps,
              onBack: () => setEducationPage('MenstrualCycleHomePage')
            });
          }
          if (educationPage === 'SexualHealthHomePage') {
            return h(SexualHealthHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('sexual-health', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'ForALovedOneHomePage') {
            return h(ForALovedOneHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('for-loved-one', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'ForMeHomePage') {
            return h(ForMeHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('for-me', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'DiseasesAndInjuriesHomePage') {
            return h(DiseasesAndInjuriesHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('diseases-injuries', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'WorldviewHomePage') {
            return h(WorldviewHomePage, {
              ...commonEduPageProps,
              issues: getEducationTopicIssues('worldview', userCountryForStories, ageGroup)
            });
          }
          if (educationPage === 'BeingAWomanInHomePage') {
            return h(BeingAWomanInHomePage, {
              onBack: () => setEducationPage(null),
              userNationVariable1,
              userNationVariable2,
              beingAWomanContent,
              roleModelCountryCenter,
              roleModelCountryZoom,
              lang,
              t
            });
          }

          return h(
              'div',
              { className: 'max-w-3xl w-full mx-auto p-4 sm:p-6 space-y-5'},
              // Top Header Card: Keeps the exact Age Group selection at the top
              h(
                'div',
                {
                  className: 'text-white p-5 rounded-3xl shadow-lg',
                  style: { background: 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)'}
                },
                h(
                  'div',
                  { className: 'text-xs font-bold uppercase tracking-wider', style: { color: '#FEACEC'} },
                  `${displayUsername} • ${t.eduHeaderTitle || t.tabIssues}`
                ),
                h(
                  'h2',
                  { className: 'text-xl sm:text-2xl font-bold mt-1'},
                  t.eduHeaderTitle || t.tabIssues
                ),
                h('p', { className: 'text-xs sm:text-sm mt-1', style: { color: '#FEACEC'} }, t.issuesSubtitle),
                h(
                  'div',
                  { className: 'mt-4 pt-3 border-t', style: { borderColor: 'rgba(254,172,236,0.4)'} },
                  h(
                    'div',
                    { className: 'text-[11px] font-bold mb-2', style: { color: '#FEACEC'} },
                    t.eduSwitchAgePrompt || 'Select an Age Group (Check for yourself, a daughter, or an elder/grandmother):'
                  ),
                  h(
                    'div',
                    { className: 'flex flex-wrap gap-1.5'},
                    AGE_GROUPS.map((ag) => {
                      const isSelectedAge = ageGroup === ag.id;
                      return h(
                        'button',
                        {
                          key: ag.id,
                          onClick: () => {
                            setAgeGroup(ag.id);
                          },
                          className: 'px-3 py-1.5 rounded-xl text-xs font-bold transition',
                          style: isSelectedAge
                            ? { backgroundColor: '#FEACEC', color: '#9F133A', border: '2px solid #FFFFFF' }
                            : { backgroundColor: 'rgba(255,255,255,0.18)', color: '#FFFFFF' }
                        },
                        formatDigitsForLang(ag.label)
                      );
                    })
                  )
                )
              ),

              // Equal-Sized Buttons Directly on Page (Each button navigates to its own new empty HomePage)
              h(
                'div',
                {
                  className: 'grid grid-cols-2 gap-3'
                },
                educationTableButtons.map((btn) => {
                  const baseBg =
                    btn.shade === 'lighter'
                      ? 'linear-gradient(135deg, #CF366C 0%, #EA689A 100%)'
                      : btn.shade === 'darker'
                      ? 'linear-gradient(135deg, #6E0926 0%, #8F1034 100%)'
                      : 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)';
                  return h(
                    'button',
                    {
                      key: btn.id,
                      type: 'button',
                      onClick: () => setEducationPage(btn.page),
                      className:
                        'w-full h-16 sm:h-20 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition text-center flex items-center justify-center shadow-md cursor-pointer leading-snug',
                      style: {
                        background: baseBg,
                        color: '#FFFFFF',
                        border: '2px solid #FFFFFF'
                      }
                    },
                    btn.label
                  );
                })
              )
            );
        })(),

      activeTab === 'profile'&&
        h(
          'div',
          { className: 'max-w-xl w-full mx-auto p-4 sm:p-6 space-y-4'},
          h(
            'div',
            {
              className: 'bg-white rounded-3xl p-6 border-2 shadow-sm space-y-5',
              style: { borderColor: '#CF366C'}
            },
            h(
              'div',
              { className: 'flex items-center justify-between flex-wrap gap-2'},
              h('h2', { className: 'text-xl font-bold', style: { color: '#9F133A'} }, `${t.profileTitle}`),
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => setActiveTab('map'),
                  className: 'inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer bg-transparent border-0 p-0 hover:opacity-80',
                  style: { color: '#9F133A' }
                },
                h('span', { 'aria-hidden': 'true' }, isRtl ? '→' : '←'),
                h('bdi', null, cleanBackLabel(t.backBtn, lang))
              )
            ),
            h(
              'div',
              {
                className: 'p-3.5 rounded-2xl border text-xs font-bold',
                style: { backgroundColor: '#FFF0FA', borderColor: '#FEACEC', color: '#9F133A'}
              },
              t.privacyBadge
            ),
            h(
              'div',
              null,
              h('label', { className: 'block text-xs font-bold uppercase mb-2', style: { color: '#9F133A'} }, t.languageLabel),
              h('input', {
                type: 'text',
                list: 'main-world-languages-datalist',
                value: writtenLanguage,
                onChange: (e) => handleGlobalLanguageChange(e.target.value),
                placeholder: t.selectLanguagePlaceholder || 'Select or type language...',
                className: 'w-full px-5 py-3.5 rounded-2xl border-2 outline-none text-base font-bold shadow-sm',
                style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC' }
              })
            )
          )
        ),

      activeTab === 'DatabasePage1' &&
        h(DatabasePage1, {
          allCenters: allGlobalEmergencyPool,
          enrichedAddressById,
          enrichedPhoneById,
          extractContactLines,
          extractOpenHours
        })
    ),

    // BOTTOM NAVIGATION BAR
    h(
      'nav',
      {
        className: 'bg-white border-t-2 grid grid-cols-5 z-30 shrink-0 shadow-[0_-4px_12px_rgba(159,19,58,0.12)] relative',
        style: { borderColor: '#9F133A'}
      },
      [
        { id: 'map', title: t.tabMap, sub: t.tabMapSub },
        { id: 'emergency', title: t.tabEmergency, sub: null },
        {
          id: 'issues',
          title: t.tabIssues,
          sub:
            educationSelection?.type === 'age'
              ? `${t.tabIssuesSub} (${formatDigitsForLang(educationSelection.id)})`
              : t.tabIssuesSub
        },
        isAnonymous || username === 'Anonymous' || currentPage === 'TotalAnon'
          ? { id: 'being-a-woman', title: 'Being a Woman Worldview', sub: null }
          : { id: 'being-a-woman', title: 'Being A Woman In', sub: userNationVariable1 },
        { id: 'profile', title: t.tabProfile, isProfile: true }
      ].map((tab, idx) => {
        const active =
          activeTab === tab.id || (tab.id === 'map' && activeTab === 'DatabasePage1');
        const tabButton = h(
          'button',
          {
            key: tab.id,
            onClick: () => {
              if (tab.id === 'issues') {
                setEducationSelection(null);
                setEducationPage(null);
              }
              setActiveTab(tab.id);
              setIsMapHover(false);
            },
            className: 'w-full h-full py-2 px-1 flex flex-col items-center justify-center text-center transition font-bold cursor-pointer',
            style: {
              borderRight: idx < 4 ? '1.5px solid #CF366C': 'none',
              backgroundColor: active ? '#9F133A': '#FFFFFF',
              color: active ? '#FFFFFF': '#9F133A'}
          },
          tab.isProfile &&
            h(
              'svg',
              {
                className: 'w-5 h-5 mb-0.5',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: active ? '#FEACEC': '#9F133A',
                strokeWidth: '2.2'},
              h('circle', { cx: '12', cy: '7', r: '4'}),
              h('path', { d: 'M5 21v-2a7 7 0 0 1 14 0v2Z'})
            ),
          h('span', { className: 'text-[10px] sm:text-xs leading-tight line-clamp-2'}, tab.title),
          tab.sub &&
            h(
              'span',
              {
                className: 'text-[9px] sm:text-[10px] mt-0.5 leading-tight line-clamp-1',
                style: { color: active ? '#FEACEC': '#CF366C'}
              },
              tab.sub
            )
        );

        if (tab.id === 'map') {
          return h(
            'div',
            {
              key: 'map-dropup-wrapper',
              className: 'relative flex flex-col items-stretch justify-stretch',
              onMouseEnter: () => setIsMapHover(true),
              onMouseLeave: () => setIsMapHover(false)
            },
            isMapHover &&
              h(
                'div',
                {
                  className: 'absolute bottom-full left-0 right-0 pb-1.5 px-1.5 z-50 flex flex-col items-center'
                },
                h(
                  'button',
                  {
                    type: 'button',
                    onClick: (e) => {
                      e.stopPropagation();
                      setActiveTab('DatabasePage1');
                      setIsMapHover(false);
                    },
                    className: 'w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm text-white shadow-xl transition cursor-pointer text-center',
                    style: {
                      background: 'linear-gradient(135deg, #6E0926 0%, #8F1034 100%)',
                      border: '2px solid #FEACEC'
                    }
                  },
                  'Database'
                )
              ),
            tabButton
          );
        }

        return tabButton;
      })
    )
  );
}
