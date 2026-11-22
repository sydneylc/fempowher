import React, { useState, useRef, useEffect, useMemo } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=291';
import { isRtlLanguage } from '../data/translations.js?v=291';
import {
  ABORTION_MAP_CANVAS_WIDTH,
  ABORTION_MAP_CANVAS_HEIGHT,
  WIKIPEDIA_ABORTION_GROUNDS_COLUMNS,
  ABORTION_LEGAL_COLUMNS,
  ABORTION_ACCESS_LEVELS,
  ABORTION_MAP_COUNTRIES,
  ABORTION_MAP_SVG_POLYGONS,
  WIKIPEDIA_US_STATES_DATA,
  WIKIPEDIA_CANADA_PROVINCES_DATA,
  WIKIPEDIA_AUSTRALIA_STATES_DATA,
  WIKIPEDIA_EUROPE_TERM_LIMITS_DATA
} from '../data/abortionMapWorldData.js?v=291';

const h = React.createElement;

const REGION_PRESETS = [
  { id: 'world', labelKey: 'abortionMapPresetWorld', defaultLabel: 'All World', zoom: 1, panX: 0, panY: 0 },
  { id: 'americas', labelKey: 'abortionMapPresetAmericas', defaultLabel: 'Americas', zoom: 1.95, panX: 300, panY: -20 },
  { id: 'europe', labelKey: 'abortionMapPresetEurope', defaultLabel: 'Europe', zoom: 3.1, panX: 30, panY: 165 },
  { id: 'africa', labelKey: 'abortionMapPresetAfrica', defaultLabel: 'Africa', zoom: 2.2, panX: -15, panY: -95 },
  { id: 'me_c_asia', labelKey: 'abortionMapPresetMiddleEast', defaultLabel: 'Middle East & C. Asia', zoom: 2.75, panX: -135, panY: 75 },
  { id: 'asia_pac', labelKey: 'abortionMapPresetAsiaPacific', defaultLabel: 'Asia & Pacific', zoom: 2.05, panX: -335, panY: -25 }
];

// Patient-friendly, low-reading-level WHO columns (removes confusing lawyer-only jargon like Civil Code, Ministerial Decree, Other, etc.)
// polarity:
// - 'negative_when_yes': Yes = BAD for abortion access (Light Red #FEE2E2), No = GOOD for abortion access (Light Green #DCFCE7)
// - 'positive_when_yes': Yes = GOOD for abortion access (Light Green #DCFCE7), No = BAD for abortion access (Light Red #FEE2E2)
const PATIENT_FRIENDLY_WHO_COLUMNS = [
  {
    rawCol: 'Criminal / Penal Code',
    polarity: 'negative_when_yes',
    titleKey: 'abortionMapSimpleColPenalCode',
    defaultTitle: 'In Criminal / Punishment Law',
    subKey: 'abortionMapSimpleColPenalCodeSub',
    defaultSub: 'No = Good (not in crime laws) • Yes = Can carry criminal penalties if rules are broken',
    yesBadgeKey: 'abortionMapPenalYesBadge',
    defaultYesBadge: 'Yes (In Criminal Law)',
    noBadgeKey: 'abortionMapPenalNoBadge',
    defaultNoBadge: 'No (Taken Out of Crime Law)'
  },
  {
    rawCol: 'Health Regulation / Clinical Guidelines',
    polarity: 'positive_when_yes',
    titleKey: 'abortionMapSimpleColClinicalGuides',
    defaultTitle: 'Safe Doctor Care Guides',
    subKey: 'abortionMapSimpleColClinicalGuidesSub',
    defaultSub: 'Yes = Good (official safe medical guides exist for doctors and clinics)',
    yesBadgeKey: 'abortionMapGuidesYesBadge',
    defaultYesBadge: 'Yes (Safe Care Guides)',
    noBadgeKey: 'abortionMapGuidesNoBadge',
    defaultNoBadge: 'No Official Guides'
  },
  {
    rawCol: 'EML / Registered List',
    polarity: 'positive_when_yes',
    titleKey: 'abortionMapSimpleColPillsApproved',
    defaultTitle: 'Abortion Pills Approved',
    subKey: 'abortionMapSimpleColPillsApprovedSub',
    defaultSub: 'Yes = Good (safe abortion medicines are on the national approved list)',
    yesBadgeKey: 'abortionMapPillsYesBadge',
    defaultYesBadge: 'Yes (Pills Approved)',
    noBadgeKey: 'abortionMapPillsNoBadge',
    defaultNoBadge: 'No (Not on Approved List)'
  },
  {
    rawCol: 'Document Relating to Funding',
    polarity: 'positive_when_yes',
    titleKey: 'abortionMapSimpleColCostHelp',
    defaultTitle: 'Public Cost / Insurance Help',
    subKey: 'abortionMapSimpleColCostHelpSub',
    defaultSub: 'Yes = Good (public health funding or insurance policy exists to help pay)',
    yesBadgeKey: 'abortionMapFundingYesBadge',
    defaultYesBadge: 'Yes (Cost Help Exists)',
    noBadgeKey: 'abortionMapFundingNoBadge',
    defaultNoBadge: 'No Public Funding Policy'
  },
  {
    rawCol: 'Reproductive Health Act',
    polarity: 'positive_when_yes',
    titleKey: 'abortionMapSimpleColReproAct',
    defaultTitle: 'Reproductive Health Law',
    subKey: 'abortionMapSimpleColReproActSub',
    defaultSub: 'Yes = Good (national reproductive health law exists)',
    yesBadgeKey: 'abortionMapReproYesBadge',
    defaultYesBadge: 'Yes (Health Law Exists)',
    noBadgeKey: 'abortionMapReproNoBadge',
    defaultNoBadge: 'No Separate Health Act'
  },
  {
    rawCol: 'Abortion Specific Law',
    polarity: 'positive_when_yes',
    titleKey: 'abortionMapSimpleColDedicatedLaw',
    defaultTitle: 'Clear Abortion Care Law',
    subKey: 'abortionMapSimpleColDedicatedLawSub',
    defaultSub: 'Yes = Good (dedicated law explains when and how abortion care is provided)',
    yesBadgeKey: 'abortionMapDedicatedYesBadge',
    defaultYesBadge: 'Yes (Clear Care Law)',
    noBadgeKey: 'abortionMapDedicatedNoBadge',
    defaultNoBadge: 'No Dedicated Care Law'
  }
];

export default function AbortionMapHomePage1({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const isRtl = isRtlLanguage(lang);

  // Full UserLanguageChoice1 translation helper for every single text string on the map
  const tr = (key, fallbackText) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, fallbackText);
    }
    if (t && key && typeof t[key] === 'string' && t[key].trim()) {
      return t[key];
    }
    return fallbackText;
  };

  // Key expand / collapse state
  const [isKeyExpanded, setIsKeyExpanded] = useState(false);

  // Level 1-10 filter toggles (all visible by default)
  const [visibleLevels, setVisibleLevels] = useState(() => {
    const init = {};
    for (let i = 1; i <= 10; i++) init[i] = true;
    return init;
  });

  // Search query & selected country
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountryName, setSelectedCountryName] = useState(null);
  const [hoveredCountryName, setHoveredCountryName] = useState(null);

  // Map Zoom & Pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [activeRegionPreset, setActiveRegionPreset] = useState('world');
  const [showAllNationLabels, setShowAllNationLabels] = useState(false);

  // Dragging pan state
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const mapContainerRef = useRef(null);

  // Saved Legal Grounds & Policy Dataset Modal / Drawer (opened from the bubble at the bottom of the Key)
  const [isDatasetBubbleModalOpen, setIsDatasetBubbleModalOpen] = useState(false);
  const [datasetFilterCountry, setDatasetFilterCountry] = useState('');
  const [datasetFilterRegion, setDatasetFilterRegion] = useState('ALL');
  // 'wikipedia_grounds' (default: Wikipedia 6 Legal Grounds chart) or 'who_care' (WHO Patient Care indicators)
  const [datasetTableTab, setDatasetTableTab] = useState('wikipedia_grounds');
  // Regional Sub-Map Segment selector: 'none' | 'us' | 'canada' | 'europe' | 'australia'
  const [activeRegionalSubMap, setActiveRegionalSubMap] = useState('none');

  // Cycle-Calendar-style FaceTime Pop-Out Info Bubble
  const [wordBubble, setWordBubble] = useState(null);
  const hideBubbleTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (hideBubbleTimeoutRef.current) {
        clearTimeout(hideBubbleTimeoutRef.current);
      }
    };
  }, []);

  // Fast country lookup map
  const countryByName = useMemo(() => {
    const map = {};
    ABORTION_MAP_COUNTRIES.forEach((c) => {
      map[c.name] = c;
    });
    return map;
  }, []);

  // Level lookup map
  const levelByNum = useMemo(() => {
    const map = {};
    ABORTION_ACCESS_LEVELS.forEach((lvl) => {
      map[lvl.level] = lvl;
    });
    return map;
  }, []);

  const translateCountryName = (countryObj) => {
    if (!countryObj) return '';
    const slug = countryObj.name.replace(/[^a-zA-Z0-9]/g, '_');
    return tr(`abortionMapCountryName_${slug}`, countryObj.name);
  };

  const translateCountryShortName = (countryObj) => {
    if (!countryObj) return '';
    const slug = countryObj.name.replace(/[^a-zA-Z0-9]/g, '_');
    return tr(`abortionMapCountryShort_${slug}`, countryObj.shortName || countryObj.name);
  };

  const translateCountrySummary = (countryObj) => {
    if (!countryObj) return '';
    const slug = countryObj.name.replace(/[^a-zA-Z0-9]/g, '_');
    return tr(`abortionMapCountrySummary_${slug}`, countryObj.summary);
  };

  const translateWhoRegion = (whoRegion) => {
    if (!whoRegion) return '';
    const slug = whoRegion.replace(/[^a-zA-Z0-9]/g, '_');
    return tr(`abortionMapWhoRegion_${slug}`, whoRegion);
  };

  const translateLevelShortLabel = (lvlObj) => {
    if (!lvlObj) return '';
    return tr(`abortionMapLevelShort_${lvlObj.level}`, lvlObj.shortLabel);
  };

  const translateLevelTitle = (lvlObj) => {
    if (!lvlObj) return '';
    return tr(`abortionMapLevelTitle_${lvlObj.level}`, lvlObj.defaultTitle);
  };

  const translateLevelDescription = (lvlObj) => {
    if (!lvlObj) return '';
    return tr(`abortionMapLevelDesc_${lvlObj.level}`, lvlObj.defaultDescription);
  };

  const translateLegalColumn = (colName) => {
    const slug = colName.replace(/[^a-zA-Z0-9]/g, '_');
    return tr(`abortionMapLegalCol_${slug}`, colName);
  };

  const handleToggleLevelFilter = (lvlNum) => {
    setVisibleLevels((prev) => ({
      ...prev,
      [lvlNum]: !prev[lvlNum]
    }));
  };

  const handleSelectAllLevels = (val) => {
    const next = {};
    for (let i = 1; i <= 10; i++) next[i] = val;
    setVisibleLevels(next);
  };

  const handleRegionPreset = (preset) => {
    setActiveRegionPreset(preset.id);
    setZoom(preset.zoom);
    setPan({ x: preset.panX, y: preset.panY });
    setWordBubble(null);
  };

  const handleZoomStep = (delta) => {
    setActiveRegionPreset('custom');
    setZoom((prev) => Math.max(1, Math.min(6, Number((prev + delta).toFixed(2)))));
  };

  const handleFocusCountry = (countryObj) => {
    if (!countryObj) return;
    setSelectedCountryName(countryObj.name);
    setActiveRegionPreset('custom');
    const targetZoom = countryObj.area < 150 ? 4.2 : countryObj.area < 800 ? 2.8 : 2.0;
    const centerOffsetX = (ABORTION_MAP_CANVAS_WIDTH / 2 - countryObj.cx) * 0.72;
    const centerOffsetY = (ABORTION_MAP_CANVAS_HEIGHT / 2 - countryObj.cy) * 0.72;
    setZoom(targetZoom);
    setPan({ x: centerOffsetX, y: centerOffsetY });
  };

  // Show FaceTime-style Pop-Out Bubble for a Country or a Key Level
  const showFaceTimeWordBubble = (payload, targetEl, pinned = false, isFromKeySidebar = false) => {
    if (!payload || !targetEl || typeof targetEl.getBoundingClientRect !== 'function') return;
    if (hideBubbleTimeoutRef.current) {
      clearTimeout(hideBubbleTimeoutRef.current);
      hideBubbleTimeoutRef.current = null;
    }

    const rect = targetEl.getBoundingClientRect();
    const vw = window.innerWidth || 1024;
    const bubbleW = Math.min(315, vw - 24);

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
    } else if (rect.top > 215) {
      placement = 'top';
      const clampedCenterX = Math.max(
        bubbleW / 2 + 12,
        Math.min(vw - bubbleW / 2 - 12, targetCenterX)
      );
      anchorX = clampedCenterX;
      anchorY = Math.max(18, rect.top - 8);
      tailOffsetX = Math.max(
        -(bubbleW / 2 - 22),
        Math.min(bubbleW / 2 - 22, targetCenterX - clampedCenterX)
      );
    } else {
      placement = 'bottom';
      const clampedCenterX = Math.max(
        bubbleW / 2 + 12,
        Math.min(vw - bubbleW / 2 - 12, targetCenterX)
      );
      anchorX = clampedCenterX;
      anchorY = Math.min((window.innerHeight || 800) - 20, rect.bottom + 8);
      tailOffsetX = Math.max(
        -(bubbleW / 2 - 22),
        Math.min(bubbleW / 2 - 22, targetCenterX - clampedCenterX)
      );
    }

    setWordBubble({
      ...payload,
      anchorX,
      anchorY,
      width: bubbleW,
      placement,
      tailOffsetX,
      pinned
    });
  };

  const scheduleHideWordBubble = () => {
    if (hideBubbleTimeoutRef.current) {
      clearTimeout(hideBubbleTimeoutRef.current);
    }
    hideBubbleTimeoutRef.current = setTimeout(() => {
      setWordBubble((prev) => (prev && prev.pinned ? prev : null));
    }, 160);
  };

  const showCountryBubble = (countryObj, targetEl, pinned = false) => {
    if (!countryObj) return;
    const lvlObj = levelByNum[countryObj.level] || ABORTION_ACCESS_LEVELS[6];
    showFaceTimeWordBubble(
      {
        kind: 'country',
        countryName: countryObj.name,
        title: translateCountryName(countryObj),
        whoRegionLabel: translateWhoRegion(countryObj.whoRegion),
        level: countryObj.level,
        levelBadgeText: translateLevelShortLabel(lvlObj),
        colorHex: lvlObj.colorHex,
        summaryText: translateCountrySummary(countryObj),
        wikipediaGrounds: countryObj.wikipediaGrounds || null,
        inCriminalLaw:
          Boolean(countryObj.flags && countryObj.flags['Criminal / Penal Code'] === 'Yes'),
        hasClinicalGuidelines:
          Boolean(countryObj.flags && countryObj.flags['Health Regulation / Clinical Guidelines'] === 'Yes'),
        hasEmlRegistered:
          Boolean(countryObj.flags && countryObj.flags['EML / Registered List'] === 'Yes'),
        subRegionsCount: (countryObj.subRegions && countryObj.subRegions.length) || 0
      },
      targetEl,
      pinned,
      false
    );
  };

  const showLevelKeyBubble = (lvlObj, targetEl, pinned = false) => {
    if (!lvlObj) return;
    const matchingCountriesCount = ABORTION_MAP_COUNTRIES.filter(
      (c) => c.level === lvlObj.level
    ).length;
    showFaceTimeWordBubble(
      {
        kind: 'level',
        level: lvlObj.level,
        title: translateLevelTitle(lvlObj),
        colorHex: lvlObj.colorHex,
        summaryText: translateLevelDescription(lvlObj),
        matchingCountriesCount
      },
      targetEl,
      pinned,
      true
    );
  };

  // Filtered countries for search dropdown
  const searchMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return ABORTION_MAP_COUNTRIES.filter((c) => {
      const tName = translateCountryName(c).toLowerCase();
      const tShort = translateCountryShortName(c).toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        tName.includes(q) ||
        tShort.includes(q)
      );
    }).slice(0, 8);
  }, [searchQuery, lang]);

  // Filtered countries for the Bottom Key Saved WHO Legal & Policy Dataset Modal
  const filteredDatasetCountries = useMemo(() => {
    const q = datasetFilterCountry.trim().toLowerCase();
    return ABORTION_MAP_COUNTRIES.filter((c) => {
      if (datasetFilterRegion !== 'ALL' && c.whoRegion !== datasetFilterRegion) {
        return false;
      }
      if (!q) return true;
      const tName = translateCountryName(c).toLowerCase();
      const subMatch =
        Array.isArray(c.subRegions) &&
        c.subRegions.some((sr) => sr.name.toLowerCase().includes(q));
      return c.name.toLowerCase().includes(q) || tName.includes(q) || subMatch;
    });
  }, [datasetFilterCountry, datasetFilterRegion, lang]);

  // Mouse drag handlers for map panning
  const handleMapMouseDown = (e) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y
    };
  };

  const handleMapMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = (e.clientX - dragStartRef.current.x) / Math.max(1, zoom * 0.65);
    const dy = (e.clientY - dragStartRef.current.y) / Math.max(1, zoom * 0.65);
    setPan({
      x: Math.max(-460, Math.min(460, dragStartRef.current.panX + dx)),
      y: Math.max(-360, Math.min(360, dragStartRef.current.panY + dy))
    });
  };

  const handleMapMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Compute SVG viewBox from zoom & pan
  const viewW = ABORTION_MAP_CANVAS_WIDTH / zoom;
  const viewH = ABORTION_MAP_CANVAS_HEIGHT / zoom;
  const viewX = (ABORTION_MAP_CANVAS_WIDTH - viewW) / 2 - pan.x;
  const viewY = (ABORTION_MAP_CANVAS_HEIGHT - viewH) / 2 - pan.y;
  const svgViewBox = `${viewX.toFixed(1)} ${viewY.toFixed(1)} ${viewW.toFixed(1)} ${viewH.toFixed(1)}`;

  // Determine which countries show their black name labels at the current zoom level so text stays clean & readable
  const shouldShowCountryLabel = (c) => {
    if (!visibleLevels[c.level]) return false;
    if (showAllNationLabels) return true;
    if (selectedCountryName === c.name || hoveredCountryName === c.name) return true;
    if (zoom >= 3.6) return true;
    if (zoom >= 2.5) return c.area >= 32 || !c.hasPolygon;
    if (zoom >= 1.75) return c.area >= 95;
    return c.area >= 310;
  };

  const selectedCountryObj = selectedCountryName ? countryByName[selectedCountryName] : null;

  return h(
    'div',
    {
      id: 'AbortionMapHomePage1',
      dir: isRtl ? 'rtl' : 'ltr',
      onClick: () => {
        if (wordBubble) setWordBubble(null);
      },
      className:
        'min-h-full w-full bg-white text-black flex flex-col select-none relative pb-8'
    },

    // ========================================================================
    // CYCLE-CALENDAR-STYLE FACETIME POP-OUT INFO BUBBLE
    // ========================================================================
    wordBubble &&
      h(
        'div',
        {
          id: 'AbortionMapFaceTimeWordBubble1',
          onClick: (e) => {
            e.stopPropagation();
          },
          onMouseEnter: () => {
            if (hideBubbleTimeoutRef.current) {
              clearTimeout(hideBubbleTimeoutRef.current);
              hideBubbleTimeoutRef.current = null;
            }
          },
          onMouseLeave: () => {
            if (!wordBubble.pinned) {
              setWordBubble(null);
            }
          },
          style: {
            position: 'fixed',
            left: `${wordBubble.anchorX}px`,
            top: `${wordBubble.anchorY}px`,
            width: `${wordBubble.width}px`,
            transform:
              wordBubble.placement === 'top'
                ? 'translate(-50%, -100%)'
                : wordBubble.placement === 'bottom'
                ? 'translate(-50%, 0)'
                : wordBubble.placement === 'right'
                ? 'translate(0, -50%)'
                : 'translate(-100%, -50%)',
            zIndex: 9999,
            background: 'rgba(242, 243, 247, 0.97)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            borderRadius: '18px',
            border: '2px solid #000000',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            padding: '12px 14px',
            color: '#000000',
            textAlign: 'center'
          }
        },
        // Header row: Level color dot + Country or Level Title + Close button if pinned
        h(
          'div',
          { className: 'flex items-center justify-center gap-2 mb-1 relative' },
          h('span', {
            className: 'w-3.5 h-3.5 rounded-full shrink-0 border-2 border-black',
            style: { backgroundColor: wordBubble.colorHex }
          }),
          h(
            'span',
            { className: 'text-sm sm:text-[15px] font-black text-black leading-tight' },
            wordBubble.title
          ),
          wordBubble.pinned &&
            h(
              'button',
              {
                type: 'button',
                onClick: (e) => {
                  e.stopPropagation();
                  setWordBubble(null);
                },
                className:
                  'absolute end-0 top-0 w-5 h-5 rounded-full border border-black bg-white text-black font-black text-[10px] flex items-center justify-center hover:bg-black hover:text-white cursor-pointer'
              },
              '×'
            )
        ),

        // Sub-header pill badge for Country Bubble
        wordBubble.kind === 'country' &&
          h(
            'div',
            { className: 'flex flex-wrap items-center justify-center gap-1.5 mb-2' },
            h(
              'span',
              {
                className:
                  'px-2.5 py-0.5 rounded-full border-[1.5px] border-black text-[10.5px] font-black text-black shadow-sm',
                style: { backgroundColor: wordBubble.colorHex }
              },
              wordBubble.levelBadgeText
            ),
            wordBubble.whoRegionLabel &&
              h(
                'span',
                {
                  className:
                    'px-2 py-0.5 rounded-full border border-black/40 bg-white text-[10px] font-bold text-black/80'
                },
                wordBubble.whoRegionLabel
              )
          ),

        // Main plain-language description / summary
        h(
          'p',
          { className: 'text-[11.5px] font-bold text-black/90 leading-snug text-center mb-2' },
          wordBubble.summaryText
        ),

        // Wikipedia 6 Legal Grounds Mini-Grid inside Country Hover Bubble (Green = Permitted, Light Red = Prohibited)
        wordBubble.kind === 'country' &&
          wordBubble.wikipediaGrounds &&
          h(
            'div',
            { className: 'grid grid-cols-2 gap-1 pt-1.5 border-t border-black/15 text-start' },
            WIKIPEDIA_ABORTION_GROUNDS_COLUMNS.map((gCol) => {
              const gObj = wordBubble.wikipediaGrounds[gCol.key] || { permitted: false };
              const isPermitted = Boolean(gObj.permitted);
              return h(
                'div',
                {
                  key: `bubble-ground-${gCol.key}`,
                  className: `px-1.5 py-0.5 rounded border text-[9.5px] font-black flex items-center justify-between gap-1 ${
                    isPermitted
                      ? 'bg-[#DCFCE7] border-[#15803D] text-[#052E16]'
                      : 'bg-[#FEE2E2] border-[#B91C1C] text-[#7F1D1D]'
                  }`
                },
                h('span', { className: 'truncate' }, tr(gCol.titleKey, gCol.defaultTitle)),
                h(
                  'span',
                  { className: 'shrink-0' },
                  isPermitted ? '✓' : '✕'
                )
              );
            })
          ),

        // Button inside Country Bubble to inspect its full 6-ground chart & sub-regions
        wordBubble.kind === 'country' &&
          h(
            'div',
            { className: 'mt-2 flex items-center justify-center gap-2' },
            h(
              'button',
              {
                type: 'button',
                onClick: (e) => {
                  e.stopPropagation();
                  setDatasetFilterCountry(wordBubble.countryName);
                  setDatasetFilterRegion('ALL');
                  setIsDatasetBubbleModalOpen(true);
                  setWordBubble(null);
                },
                className:
                  'px-2.5 py-1 rounded-lg border-[1.5px] border-black bg-white hover:bg-[#FFF5F7] text-[10.5px] font-black text-[#9F133A] cursor-pointer shadow-sm'
              },
              wordBubble.subRegionsCount > 0
                ? `${tr('abortionMapViewLegalTableBtn', 'Open Full Grounds Chart')} (${wordBubble.subRegionsCount} ${tr('abortionMapSubRegionsTag', 'States/Regions')})`
                : tr('abortionMapViewLegalTableBtn', 'Open Full Grounds Chart')
            )
          ),

        wordBubble.kind === 'level' &&
          h(
            'div',
            { className: 'text-[10.5px] font-black text-[#9F133A] mt-1' },
            `${wordBubble.matchingCountriesCount} ${tr('abortionMapNationsInLevel', 'nations in this level')}`
          ),

        // Bubble directional tail
        wordBubble.placement === 'top' &&
          h('div', {
            style: {
              position: 'absolute',
              bottom: '-8px',
              left: `calc(50% + ${wordBubble.tailOffsetX || 0}px)`,
              width: '14px',
              height: '14px',
              background: 'rgba(242, 243, 247, 0.97)',
              borderRight: '2px solid #000000',
              borderBottom: '2px solid #000000',
              transform: 'translateX(-50%) rotate(45deg)',
              borderBottomRightRadius: '3px'
            }
          }),
        wordBubble.placement === 'bottom' &&
          h('div', {
            style: {
              position: 'absolute',
              top: '-8px',
              left: `calc(50% + ${wordBubble.tailOffsetX || 0}px)`,
              width: '14px',
              height: '14px',
              background: 'rgba(242, 243, 247, 0.97)',
              borderLeft: '2px solid #000000',
              borderTop: '2px solid #000000',
              transform: 'translateX(-50%) rotate(45deg)',
              borderTopLeftRadius: '3px'
            }
          }),
        wordBubble.placement === 'right' &&
          h('div', {
            style: {
              position: 'absolute',
              left: '-8px',
              top: '50%',
              width: '14px',
              height: '14px',
              background: 'rgba(242, 243, 247, 0.97)',
              borderLeft: '2px solid #000000',
              borderBottom: '2px solid #000000',
              transform: 'translateY(-50%) rotate(45deg)',
              borderBottomLeftRadius: '3px'
            }
          }),
        wordBubble.placement === 'left' &&
          h('div', {
            style: {
              position: 'absolute',
              right: '-8px',
              top: '50%',
              width: '14px',
              height: '14px',
              background: 'rgba(242, 243, 247, 0.97)',
              borderRight: '2px solid #000000',
              borderTop: '2px solid #000000',
              transform: 'translateY(-50%) rotate(45deg)',
              borderTopRightRadius: '3px'
            }
          })
      ),

    // ========================================================================
    // TOP HEADER BAR: BIG TITLE + SMALL WHO DATABASE CREDIT + SEARCH BAR RIGHT UNDERNEATH
    // ========================================================================
    h(
      'div',
      {
        onClick: (e) => e.stopPropagation(),
        className:
          'w-full px-3 sm:px-6 pt-3 pb-3.5 border-b-2 border-black bg-white shrink-0 flex flex-col gap-2.5'
      },
      // Top row: Back button on left + Big Title & small WHO database credit centered + WHO Table button on right
      h(
        'div',
        { className: 'w-full flex items-start justify-between gap-3' },
        h('div', { className: 'shrink-0 pt-0.5' }, renderSubpageBackButton(onBack, t, lang)),
        h(
          'div',
          { className: 'flex flex-col items-center text-center min-w-0 flex-1' },
          h(
            'h1',
            {
              className: 'text-2xl sm:text-4xl font-black tracking-tight leading-tight',
              style: { color: '#9F133A' }
            },
            tr('abortionBtnMap', "FemPowHer's Abortion Map")
          ),
          h(
            'p',
            {
              className:
                'text-[11px] sm:text-xs font-bold text-black/75 mt-0.5 leading-snug'
            },
            tr(
              'abortionMapWhoAndWikiThankYouCredit',
              'Thank You to World Health Organization (Global Abortion Policies Database) & Wikipedia / UN Global Abortion Law Summary Table'
            )
          )
        ),
        // Right quick button to open the Wikipedia 6 Legal Grounds & WHO Policy Table
        h(
          'button',
          {
            type: 'button',
            onClick: () => {
              setDatasetFilterCountry('');
              setDatasetTableTab('wikipedia_grounds');
              setIsDatasetBubbleModalOpen(true);
            },
            className:
              'px-2.5 sm:px-3 py-1.5 rounded-xl border-2 border-black bg-[#FFF5F7] hover:bg-[#FCE7EB] text-[10.5px] sm:text-xs font-black text-[#9F133A] shadow-sm cursor-pointer shrink-0'
          },
          tr('abortionMapOpenSavedDataTopBtn', 'Global Grounds Chart')
        )
      ),

      // Centered Search Bar right at the very top underneath the title & WHO credit
      h(
        'div',
        { className: 'w-full max-w-xl mx-auto relative' },
        h('input', {
          type: 'text',
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          placeholder: tr(
            'abortionMapSearchPlaceholder',
            'Search any nation (e.g., Canada, Brazil, Poland, El Salvador)...'
          ),
          className:
            'w-full px-4 py-2 rounded-full border-2 border-black text-xs sm:text-sm font-bold text-black bg-[#FFF5F7]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9F133A] shadow-sm text-center'
        }),
        searchMatches.length > 0 &&
          h(
            'div',
            {
              className:
                'absolute start-0 top-full mt-1.5 w-full rounded-2xl border-2 border-black bg-white shadow-xl z-50 overflow-hidden'
            },
            searchMatches.map((c) => {
              const lvlObj = levelByNum[c.level] || ABORTION_ACCESS_LEVELS[6];
              return h(
                'button',
                {
                  key: `search-match-${c.name}`,
                  type: 'button',
                  onClick: () => {
                    setSearchQuery('');
                    handleFocusCountry(c);
                  },
                  className:
                    'w-full px-4 py-2 text-start text-xs sm:text-sm font-black text-black hover:bg-[#FFF5F7] border-b border-black/10 last:border-b-0 flex items-center justify-between gap-2 cursor-pointer'
                },
                h('span', { className: 'truncate' }, translateCountryName(c)),
                h(
                  'span',
                  {
                    className:
                      'px-2.5 py-0.5 rounded-full border border-black text-[10.5px] font-black text-black shrink-0',
                    style: { backgroundColor: lvlObj.colorHex }
                  },
                  `${tr('abortionMapLevelWord', 'Level')} ${c.level}`
                )
              );
            })
          )
      )
    ),

    // ========================================================================
    // MAIN WORKSPACE: LEFT RAINBOW KEY (ALWAYS ON THE LEFT NEXT TO THE MAP) + RIGHT AZURE WORLD MAP
    // ========================================================================
    h(
      'div',
      {
        className:
          'flex-1 w-full max-w-[1440px] mx-auto flex flex-row items-stretch gap-2.5 sm:gap-4 p-2 sm:p-4 bg-white relative'
      },

      // ======================================================================
      // 1. VERTICAL KEY & FILTERS MENU ON THE LEFT (AbortionMapKeyAndFilters1)
      // Modeled directly on CalendarKeyAndFilters1:
      // - Compact (not expanded): shows ONLY the checkmark box + "Level 1" .. "Level 10"
      // - Expanded: shows the full level title, scale note, Check All/Uncheck All, and description
      // ======================================================================
      h(
        'aside',
        {
          id: 'AbortionMapKeyAndFilters1',
          onClick: (e) => e.stopPropagation(),
          style: {
            width: isKeyExpanded ? 'min(320px, 44vw)' : 'min(156px, 32vw)'
          },
          className:
            'rounded-2xl border-2 border-black bg-white flex flex-col justify-between p-2.5 sm:p-3 transition-all duration-200 shrink-0 shadow-sm'
        },
        h(
          'div',
          { className: 'flex flex-col gap-1.5' },
          // Header: KEY + Expand/Compact button (exact match to Menstrual Cycle Key)
          h(
            'div',
            { className: 'flex items-center justify-between gap-1 border-b-2 border-black pb-2' },
            h(
              'div',
              { className: 'min-w-0' },
              h(
                'h2',
                { className: 'text-sm sm:text-base font-black text-black uppercase tracking-wide truncate' },
                tr('abortionMapKeyShortHeading', 'Key')
              ),
              isKeyExpanded &&
                h(
                  'p',
                  { className: 'text-[10px] font-bold text-black/70 leading-tight' },
                  tr('abortionMapKeyAndFiltersSub', 'Levels 1 to 10')
                )
            ),
            h(
              'button',
              {
                id: 'AbortionMapKeyExpandButton1',
                type: 'button',
                onClick: () => setIsKeyExpanded((v) => !v),
                className:
                  'px-2 py-1 rounded-lg border-2 border-black bg-white hover:bg-black/5 text-[10px] sm:text-xs font-extrabold text-black cursor-pointer shrink-0',
                title: isKeyExpanded
                  ? tr('abortionMapKeyCompactBtn', 'Compact')
                  : tr('abortionMapKeyExpandBtn', 'Expand')
              },
              isKeyExpanded
                ? `⇤ ${tr('abortionMapKeyCompactWord', 'Compact')}`
                : `${tr('abortionMapKeyExpandWord', 'Expand')} ⇥`
            )
          ),

          // Scale legend & Check All / Uncheck All (only shown when Expanded so Compact stays super clean!)
          isKeyExpanded &&
            h(
              'div',
              {
                className:
                  'flex items-center justify-between text-[10px] font-black text-black/80 px-0.5 pt-0.5'
              },
              h('span', { className: 'text-[#15803D]' }, tr('abortionMapKeyMostAllowed', '1 = Broadest Access')),
              h('span', { className: 'text-[#991B1B]' }, tr('abortionMapKeyCriminalized', '10 = Criminalized'))
            ),

          isKeyExpanded &&
            h(
              'div',
              { className: 'flex items-center justify-between gap-2 px-0.5 pb-0.5' },
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => handleSelectAllLevels(true),
                  className: 'text-[10px] font-black underline text-black hover:text-[#9F133A] cursor-pointer'
                },
                tr('abortionMapShowAllLevels', 'Check All Levels')
              ),
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => handleSelectAllLevels(false),
                  className: 'text-[10px] font-bold underline text-black/70 hover:text-black cursor-pointer'
                },
                tr('abortionMapClearLevels', 'Uncheck All')
              )
            ),

          // 10 Rainbow Level Filter Pills (modeled directly on Cycle Calendar Key pills)
          h(
            'div',
            { className: 'flex flex-col gap-1 pt-0.5' },
            ABORTION_ACCESS_LEVELS.map((lvlObj) => {
              const isChecked = visibleLevels[lvlObj.level] !== false;
              const compactLevelOnlyLabel = `${tr('abortionMapLevelWord', 'Level')} ${lvlObj.level}`;
              const displayLabel = isKeyExpanded
                ? translateLevelTitle(lvlObj)
                : compactLevelOnlyLabel;

              return h(
                'div',
                {
                  key: `abortion-level-key-${lvlObj.level}`,
                  onMouseEnter: (e) => showLevelKeyBubble(lvlObj, e.currentTarget, false),
                  onMouseLeave: scheduleHideWordBubble,
                  onClick: (e) => {
                    e.stopPropagation();
                    showLevelKeyBubble(lvlObj, e.currentTarget, true);
                  },
                  className:
                    'px-2 py-1 rounded-xl border border-black/35 bg-white hover:bg-black/[0.03] flex flex-col gap-0.5 cursor-pointer transition-colors'
                },
                h(
                  'div',
                  { className: 'flex items-center gap-2' },
                  // Colored Checkmark Square (toggles filter when clicked)
                  h(
                    'button',
                    {
                      type: 'button',
                      onClick: (e) => {
                        e.stopPropagation();
                        handleToggleLevelFilter(lvlObj.level);
                      },
                      className:
                        'w-3.5 h-3.5 rounded-[4px] shrink-0 cursor-pointer flex items-center justify-center text-[9px] font-black leading-none text-black',
                      style: {
                        backgroundColor: isChecked ? lvlObj.colorHex : '#FFFFFF',
                        border: `1.5px solid ${lvlObj.borderHex || '#000000'}`
                      },
                      title: displayLabel
                    },
                    isChecked ? '✓' : ''
                  ),
                  // Label: When NOT expanded, shows ONLY "Level 1" .. "Level 10"
                  h(
                    'span',
                    {
                      className: `text-[10.5px] sm:text-xs font-extrabold text-black leading-tight ${
                        isKeyExpanded ? '' : 'truncate'
                      }`
                    },
                    displayLabel
                  )
                ),
                isKeyExpanded &&
                  h(
                    'p',
                    { className: 'text-[9.5px] font-bold text-black/75 ps-5 leading-snug' },
                    translateLevelDescription(lvlObj)
                  )
              );
            })
          )
        ),

        // ====================================================================
        // BOTTOM BUBBLE INSIDE THE KEY: WIKIPEDIA 6 LEGAL GROUNDS CHART & WHO CARE DATA
        // ====================================================================
        h(
          'div',
          {
            id: 'AbortionMapSavedExcelDataKeyBubble1',
            className: 'mt-2 pt-2 border-t border-black/30 flex flex-col gap-1.5'
          },
          h(
            'div',
            {
              onClick: () => {
                setDatasetFilterCountry('');
                setDatasetTableTab('wikipedia_grounds');
                setIsDatasetBubbleModalOpen(true);
              },
              className:
                'w-full rounded-xl border-2 border-black bg-[#FFF5F7] hover:bg-[#FCE7EB] p-2 cursor-pointer transition-all shadow-sm flex flex-col items-center text-center'
            },
            h(
              'div',
              { className: 'text-[10px] sm:text-[11px] font-black text-[#9F133A] leading-tight' },
              isKeyExpanded
                ? tr(
                    'abortionMapSavedDatasetBubbleTitleWiki',
                    'Global Legal Grounds Chart (Wikipedia / UN & WHO)'
                  )
                : tr('abortionMapSavedDatasetCompactBtnWiki', 'Legal Grounds Chart')
            ),
            isKeyExpanded &&
              h(
                'p',
                { className: 'text-[9.5px] font-bold text-black/75 leading-tight mt-0.5' },
                tr(
                  'abortionMapSavedDatasetBubbleDescWiki',
                  'Risk to Life, Risk to Health, Rape, Fetal Impairment, Economic/Social, and On Request.'
                )
              )
          )
        )
      ),

      // ======================================================================
      // RIGHT MAIN AREA: CONTROLS BAR + AZURE BLUE INTERACTIVE WORLD MAP + COUNTRY DETAILS
      // ======================================================================
      h(
        'div',
        {
          className: 'flex-1 min-w-0 flex flex-col gap-3'
        },

        // Top Map Toolbar: Region Quick-Jump Buttons + Zoom Controls
        h(
          'div',
          {
            onClick: (e) => e.stopPropagation(),
            className:
              'w-full rounded-2xl border-2 border-black bg-white p-2 sm:p-2.5 flex flex-wrap items-center justify-between gap-2 shadow-sm'
          },

          // Continent / Region Quick-Zoom Buttons
          h(
            'div',
            { className: 'flex flex-wrap items-center gap-1' },
            REGION_PRESETS.map((preset) =>
              h(
                'button',
                {
                  key: preset.id,
                  type: 'button',
                  onClick: () => handleRegionPreset(preset),
                  className: `px-2.5 py-1 rounded-xl border-[1.5px] border-black text-[11px] font-black cursor-pointer transition-colors ${
                    activeRegionPreset === preset.id
                      ? 'bg-[#9F133A] text-white'
                      : 'bg-white text-black hover:bg-[#FFF5F7]'
                  }`
                },
                tr(preset.labelKey, preset.defaultLabel)
              )
            )
          ),

          // Zoom In / Out / Reset + Toggle All Nation Labels
          h(
            'div',
            { className: 'flex items-center gap-1.5 ms-auto' },
            h(
              'button',
              {
                type: 'button',
                onClick: () => setShowAllNationLabels((v) => !v),
                className: `px-2.5 py-1 rounded-xl border-[1.5px] border-black text-[10.5px] font-black cursor-pointer ${
                  showAllNationLabels
                    ? 'bg-[#FCD34D] text-black'
                    : 'bg-white text-black hover:bg-black/5'
                }`
              },
              showAllNationLabels
                ? tr('abortionMapAllLabelsShown', 'All Names: ON')
                : tr('abortionMapAllLabelsAuto', 'Names: Auto-Zoom')
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => handleZoomStep(-0.55),
                className:
                  'w-7 h-7 rounded-xl border-[1.5px] border-black bg-white hover:bg-black/5 font-black text-sm flex items-center justify-center cursor-pointer',
                title: tr('abortionMapZoomOut', 'Zoom Out')
              },
              '-'
            ),
            h(
              'span',
              { className: 'text-[11px] font-black text-black min-w-[38px] text-center' },
              `${zoom.toFixed(1)}x`
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => handleZoomStep(0.55),
                className:
                  'w-7 h-7 rounded-xl border-[1.5px] border-black bg-white hover:bg-black/5 font-black text-sm flex items-center justify-center cursor-pointer',
                title: tr('abortionMapZoomIn', 'Zoom In')
              },
              '+'
            ),
            (zoom !== 1 || pan.x !== 0 || pan.y !== 0) &&
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => handleRegionPreset(REGION_PRESETS[0]),
                  className:
                    'px-2 py-1 rounded-xl border-[1.5px] border-black bg-white hover:bg-black/5 text-[10.5px] font-black text-black cursor-pointer'
                },
                tr('abortionMapResetZoom', 'Reset')
              )
          )
        ),

        // ====================================================================
        // AZURE BLUE INTERACTIVE WORLD MAP SVG CANVAS
        // ====================================================================
        h(
          'div',
          {
            id: 'AbortionWorldMapAzureCanvas1',
            ref: mapContainerRef,
            onMouseDown: handleMapMouseDown,
            onMouseMove: handleMapMouseMove,
            onMouseUp: handleMapMouseUp,
            onMouseLeave: handleMapMouseUp,
            className:
              'w-full rounded-[26px] border-[3px] border-black overflow-hidden relative shadow-md',
            style: {
              // Vibrant Azure Blue Ocean background
              background:
                'linear-gradient(180deg, #2596FF 0%, #1B84F2 55%, #0F6FDB 100%)',
              aspectRatio: `${ABORTION_MAP_CANVAS_WIDTH} / ${ABORTION_MAP_CANVAS_HEIGHT}`,
              minHeight: '420px',
              cursor: isDraggingRef.current ? 'grabbing' : zoom > 1 ? 'grab' : 'default'
            }
          },

          h(
            'svg',
            {
              viewBox: svgViewBox,
              className: 'w-full h-full block',
              style: { userSelect: 'none' }
            },
            // Ocean clickable backdrop
            h('rect', {
              x: -500,
              y: -500,
              width: ABORTION_MAP_CANVAS_WIDTH + 1000,
              height: ABORTION_MAP_CANVAS_HEIGHT + 1000,
              fill: 'transparent',
              onClick: () => {
                setWordBubble(null);
              }
            }),

            // 1. Traced Sovereign Country Polygons (from user's world map image)
            h(
              'g',
              { id: 'AbortionMapCountryPolygonsLayer' },
              ABORTION_MAP_SVG_POLYGONS.map((poly) => {
                const cObj = countryByName[poly.country];
                const lvlNum = cObj ? cObj.level : 7;
                const lvlObj = levelByNum[lvlNum] || ABORTION_ACCESS_LEVELS[6];
                const isLevelVisible = visibleLevels[lvlNum] !== false;
                const isHovered = hoveredCountryName === poly.country;
                const isSelected = selectedCountryName === poly.country;

                return h('path', {
                  key: `poly-${poly.id}`,
                  d: poly.d,
                  fill: isLevelVisible ? lvlObj.colorHex : '#D1D5DB',
                  fillOpacity: isLevelVisible ? 1 : 0.45,
                  stroke: '#000000',
                  strokeWidth: isSelected || isHovered ? 2.2 / Math.sqrt(zoom) : 1.15 / Math.sqrt(zoom),
                  strokeLinejoin: 'round',
                  className: 'transition-opacity duration-150 cursor-pointer',
                  onMouseEnter: (e) => {
                    setHoveredCountryName(poly.country);
                    if (cObj) showCountryBubble(cObj, e.currentTarget, false);
                  },
                  onMouseLeave: () => {
                    setHoveredCountryName((prev) => (prev === poly.country ? null : prev));
                    scheduleHideWordBubble();
                  },
                  onClick: (e) => {
                    e.stopPropagation();
                    if (cObj) {
                      setSelectedCountryName(cObj.name);
                      showCountryBubble(cObj, e.currentTarget, true);
                    }
                  }
                });
              })
            ),

            // 2. Interactive Dot Markers for Small Island Nations & Microstates in the WHO Excel Table
            h(
              'g',
              { id: 'AbortionMapSmallNationsMarkersLayer' },
              ABORTION_MAP_COUNTRIES.filter((c) => !c.hasPolygon).map((cObj) => {
                const lvlObj = levelByNum[cObj.level] || ABORTION_ACCESS_LEVELS[6];
                const isLevelVisible = visibleLevels[cObj.level] !== false;
                const isHovered = hoveredCountryName === cObj.name;
                const isSelected = selectedCountryName === cObj.name;
                const r = (isHovered || isSelected ? 5.2 : 3.6) / Math.pow(zoom, 0.55);

                return h('circle', {
                  key: `marker-${cObj.name}`,
                  cx: cObj.cx,
                  cy: cObj.cy,
                  r,
                  fill: isLevelVisible ? lvlObj.colorHex : '#D1D5DB',
                  fillOpacity: isLevelVisible ? 1 : 0.4,
                  stroke: '#000000',
                  strokeWidth: (isHovered || isSelected ? 1.8 : 1.1) / Math.pow(zoom, 0.55),
                  className: 'cursor-pointer',
                  onMouseEnter: (e) => {
                    setHoveredCountryName(cObj.name);
                    showCountryBubble(cObj, e.currentTarget, false);
                  },
                  onMouseLeave: () => {
                    setHoveredCountryName((prev) => (prev === cObj.name ? null : prev));
                    scheduleHideWordBubble();
                  },
                  onClick: (e) => {
                    e.stopPropagation();
                    setSelectedCountryName(cObj.name);
                    showCountryBubble(cObj, e.currentTarget, true);
                  }
                });
              })
            ),

            // 3. Bold Black Nation Name Labels Directly on the Countries
            h(
              'g',
              { id: 'AbortionMapNationBlackLabelsLayer' },
              ABORTION_MAP_COUNTRIES.filter(shouldShowCountryLabel).map((cObj) => {
                const isSelected = selectedCountryName === cObj.name;
                const isHovered = hoveredCountryName === cObj.name;
                const baseFontSize =
                  cObj.area >= 8000
                    ? 10.5
                    : cObj.area >= 2000
                    ? 8.5
                    : cObj.area >= 600
                    ? 7.2
                    : cObj.area >= 150
                    ? 6.2
                    : 5.4;
                const scaledFontSize =
                  (baseFontSize * (isSelected || isHovered ? 1.12 : 1)) /
                  Math.pow(zoom, 0.52);

                return h(
                  'text',
                  {
                    key: `label-${cObj.name}`,
                    x: cObj.cx,
                    y: cObj.hasPolygon ? cObj.cy : cObj.cy - 5 / Math.pow(zoom, 0.55),
                    textAnchor: 'middle',
                    dominantBaseline: 'central',
                    fill: '#000000',
                    stroke: 'rgba(255, 255, 255, 0.65)',
                    strokeWidth: 1.8 / Math.pow(zoom, 0.55),
                    paintOrder: 'stroke fill',
                    fontSize: `${scaledFontSize.toFixed(2)}px`,
                    fontWeight: '900',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                    style: {
                      pointerEvents: 'none',
                      letterSpacing: '0.01em'
                    }
                  },
                  translateCountryShortName(cObj)
                );
              })
            )
          ),

          // Floating bottom-left helper badge inside Azure canvas
          h(
            'div',
            {
              onClick: (e) => e.stopPropagation(),
              className:
                'absolute bottom-2.5 start-3 px-3 py-1 rounded-full border-[1.5px] border-black bg-white/95 text-[10.5px] font-black text-black shadow-sm flex items-center gap-2'
            },
            h('span', {
              className: 'w-2.5 h-2.5 rounded-full border border-black',
              style: { backgroundColor: '#2596FF' }
            }),
            h(
              'span',
              null,
              tr(
                'abortionMapCanvasHint',
                'Tip: Hover or click any nation for its info bubble. Drag to pan or use +/- to zoom in on smaller nations.'
              )
            )
          )
        ),

        // ====================================================================
        // REGIONAL SUB-MAPS & TERM-LIMIT SEGMENTS (US STATES, CANADA PROVINCES, EUROPE TERM LIMITS, AUSTRALIA STATES)
        // ====================================================================
        h(
          'div',
          {
            id: 'AbortionMapRegionalSubMapsBar1',
            onClick: (e) => e.stopPropagation(),
            className:
              'w-full rounded-[22px] border-2 border-black bg-[#FFF5F7] p-3 flex flex-col gap-2.5 shadow-sm'
          },
          h(
            'div',
            { className: 'flex flex-wrap items-center justify-between gap-2' },
            h(
              'div',
              { className: 'flex flex-col' },
              h(
                'span',
                { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
                tr(
                  'abortionMapRegionalBreakdownsTitle',
                  'Detailed Regional & State-by-State Term-Limit Breakdowns:'
                )
              ),
              h(
                'span',
                { className: 'text-[10.5px] font-bold text-black/75' },
                tr(
                  'abortionMapRegionalBreakdownsSub',
                  'Explore gestational week limits across US States, Canadian Provinces, European Nations, and Australian States.'
                )
              )
            ),
            h(
              'div',
              { className: 'flex flex-wrap items-center gap-1.5' },
              [
                { id: 'us', labelKey: 'abortionSubMapUS', defaultLabel: 'United States (50 States)' },
                { id: 'canada', labelKey: 'abortionSubMapCanada', defaultLabel: 'Canada (Provinces)' },
                { id: 'europe', labelKey: 'abortionSubMapEurope', defaultLabel: 'Europe (Week Limits)' },
                { id: 'australia', labelKey: 'abortionSubMapAustralia', defaultLabel: 'Australia (States)' }
              ].map((tab) => {
                const isActive = activeRegionalSubMap === tab.id;
                return h(
                  'button',
                  {
                    key: `submap-tab-${tab.id}`,
                    type: 'button',
                    onClick: () =>
                      setActiveRegionalSubMap((prev) => (prev === tab.id ? 'none' : tab.id)),
                    className: `px-2.5 py-1 rounded-xl border-[1.5px] border-black text-[11px] font-black cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[#9F133A] text-white'
                        : 'bg-white text-black hover:bg-[#FCE7EB]'
                    }`
                  },
                  tr(tab.labelKey, tab.defaultLabel)
                );
              })
            )
          ),

          // Expanded Regional Sub-Map Grid View when one of the 4 regional segments is clicked
          activeRegionalSubMap !== 'none' &&
            (() => {
              const items =
                activeRegionalSubMap === 'us'
                  ? WIKIPEDIA_US_STATES_DATA
                  : activeRegionalSubMap === 'canada'
                  ? WIKIPEDIA_CANADA_PROVINCES_DATA
                  : activeRegionalSubMap === 'australia'
                  ? WIKIPEDIA_AUSTRALIA_STATES_DATA
                  : WIKIPEDIA_EUROPE_TERM_LIMITS_DATA;

              const sectionHeading =
                activeRegionalSubMap === 'us'
                  ? tr(
                      'abortionSubMapUSHeading',
                      'Status of Elective Abortion in the United States (State-by-State Gestational Limits)'
                    )
                  : activeRegionalSubMap === 'canada'
                  ? tr(
                      'abortionSubMapCanadaHeading',
                      'Availability of Abortion in Canada by Province & Territory (Legal at All Stages Federally)'
                    )
                  : activeRegionalSubMap === 'australia'
                  ? tr(
                      'abortionSubMapAustraliaHeading',
                      'Accessibility of Abortion in Australia by State & Territory (Beyond Limit Legal with Two Doctors’ Approval)'
                    )
                  : tr(
                      'abortionSubMapEuropeHeading',
                      'Term Limits of Elective Abortion in Europe (In Weeks of Pregnancy)'
                    );

              return h(
                'div',
                {
                  className:
                    'mt-1 pt-2.5 border-t-2 border-black bg-white rounded-2xl p-3 flex flex-col gap-2.5'
                },
                h(
                  'div',
                  { className: 'flex items-center justify-between gap-2' },
                  h('h3', { className: 'text-xs sm:text-sm font-black text-black' }, sectionHeading),
                  h(
                    'button',
                    {
                      type: 'button',
                      onClick: () => setActiveRegionalSubMap('none'),
                      className:
                        'px-2 py-0.5 rounded-lg border border-black bg-white hover:bg-black/5 text-[10.5px] font-black text-black cursor-pointer'
                    },
                    tr('abortionMapCloseCountryCard', 'Close ×')
                  )
                ),
                h(
                  'div',
                  {
                    className:
                      'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-[340px] overflow-y-auto p-0.5'
                  },
                  items.map((item) => {
                    const lvlObj = levelByNum[item.level] || ABORTION_ACCESS_LEVELS[2];
                    return h(
                      'div',
                      {
                        key: `reg-submap-item-${item.code}-${item.name}`,
                        className:
                          'rounded-xl border-[1.5px] border-black p-2 flex flex-col justify-between gap-1 shadow-sm',
                        style: {
                          backgroundColor: lvlObj.colorHex
                        }
                      },
                      h(
                        'div',
                        { className: 'flex items-center justify-between gap-1' },
                        h(
                          'span',
                          { className: 'text-xs font-black text-black leading-tight' },
                          item.name
                        ),
                        h(
                          'span',
                          {
                            className:
                              'px-1.5 py-0.5 rounded bg-white/90 border border-black text-[9.5px] font-black text-black shrink-0'
                          },
                          item.code
                        )
                      ),
                      h(
                        'div',
                        {
                          className:
                            'px-1.5 py-0.5 rounded bg-white/90 border border-black/40 text-[10px] font-black text-black w-fit'
                        },
                        item.gestationalLimit
                      ),
                      h(
                        'p',
                        { className: 'text-[10px] font-bold text-black leading-snug' },
                        item.status
                      )
                    );
                  })
                )
              );
            })()
        ),

        // ====================================================================
        // SELECTED COUNTRY DETAILED SUMMARY CARD (WHEN A NATION IS CLICKED OR SEARCHED)
        // ====================================================================
        selectedCountryObj &&
          (() => {
            const lvlObj = levelByNum[selectedCountryObj.level] || ABORTION_ACCESS_LEVELS[6];
            const wikiGrounds = selectedCountryObj.wikipediaGrounds || {};

            return h(
              'div',
              {
                id: 'AbortionMapSelectedCountryCard1',
                onClick: (e) => e.stopPropagation(),
                className:
                  'w-full rounded-[24px] border-[2.5px] border-black bg-white p-4 sm:p-5 shadow-sm flex flex-col gap-3'
              },
              h(
                'div',
                { className: 'flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-2.5' },
                h(
                  'div',
                  { className: 'flex flex-wrap items-center gap-2.5' },
                  h(
                    'h2',
                    { className: 'text-lg sm:text-xl font-black text-black' },
                    translateCountryName(selectedCountryObj)
                  ),
                  h(
                    'span',
                    {
                      className:
                        'px-3 py-1 rounded-full border-[1.5px] border-black text-xs font-black text-black',
                      style: { backgroundColor: lvlObj.colorHex }
                    },
                    translateLevelTitle(lvlObj)
                  ),
                  h(
                    'span',
                    {
                      className:
                        'px-2.5 py-0.5 rounded-full border border-black/40 bg-[#FFF5F7] text-[11px] font-bold text-black'
                    },
                    translateWhoRegion(selectedCountryObj.whoRegion)
                  )
                ),
                h(
                  'button',
                  {
                    type: 'button',
                    onClick: () => setSelectedCountryName(null),
                    className:
                      'px-2.5 py-1 rounded-xl border-[1.5px] border-black bg-white hover:bg-black/5 text-xs font-black text-black cursor-pointer'
                  },
                  tr('abortionMapCloseCountryCard', 'Close ×')
                )
              ),

              h(
                'p',
                { className: 'text-xs sm:text-sm font-bold text-black/90 leading-relaxed' },
                translateCountrySummary(selectedCountryObj)
              ),

              // 1. WIKIPEDIA 6 LEGAL GROUNDS FOR ABORTION (Risk to Life, Risk to Health, Rape, Fetal Impairment, Economic or Social, On Request)
              h(
                'div',
                { className: 'flex flex-col gap-2' },
                h(
                  'div',
                  { className: 'text-xs font-black text-[#9F133A] uppercase tracking-wide' },
                  tr(
                    'abortionMapWikiGroundsSectionHeader',
                    'When Is Abortion Legal in This Nation? (6 Legal Grounds Chart • Green = Permitted • Red = Prohibited):'
                  )
                ),
                h(
                  'div',
                  { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2' },
                  WIKIPEDIA_ABORTION_GROUNDS_COLUMNS.map((gCol) => {
                    const gObj = wikiGrounds[gCol.key] || { permitted: false, detail: 'Prohibited' };
                    const isPermitted = Boolean(gObj.permitted);

                    return h(
                      'div',
                      {
                        key: `wiki-ground-card-${gCol.key}`,
                        className: `rounded-xl border-[1.5px] p-2.5 flex flex-col justify-between gap-1 ${
                          isPermitted
                            ? 'bg-[#DCFCE7] border-[#15803D] text-[#052E16]'
                            : 'bg-[#FEE2E2] border-[#B91C1C] text-[#7F1D1D]'
                        }`
                      },
                      h(
                        'div',
                        { className: 'flex items-center justify-between gap-2' },
                        h(
                          'span',
                          { className: 'text-xs font-black leading-tight' },
                          tr(gCol.titleKey, gCol.defaultTitle)
                        ),
                        h(
                          'span',
                          {
                            className: `px-2 py-0.5 rounded-full border text-[10.5px] font-black shrink-0 ${
                              isPermitted
                                ? 'bg-white border-[#15803D] text-[#052E16]'
                                : 'bg-white border-[#B91C1C] text-[#7F1D1D]'
                            }`
                          },
                          isPermitted
                            ? tr('abortionMapPermittedWord', 'Permitted')
                            : tr('abortionMapProhibitedWord', 'Prohibited')
                        )
                      ),
                      h(
                        'div',
                        { className: 'text-[10.5px] font-bold opacity-90 leading-snug' },
                        gObj.detail || tr(gCol.subKey, gCol.defaultSub)
                      )
                    );
                  })
                )
              ),

              // 2. Patient-Friendly Key Facts from WHO Database (Green = Helpful for Abortion Access, Light Red = Restrictive / Missing Support)
              h(
                'div',
                { className: 'flex flex-col gap-2 pt-1' },
                h(
                  'div',
                  { className: 'text-xs font-black text-[#9F133A] uppercase tracking-wide' },
                  tr(
                    'abortionMapPatientKeyFactsHeader',
                    'Healthcare & Criminal Law Indicators (Green = Helps Access • Red = Restricts or Missing):'
                  )
                ),
                h(
                  'div',
                  { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2' },
                  PATIENT_FRIENDLY_WHO_COLUMNS.map((colDef) => {
                    const isYes =
                      Boolean(selectedCountryObj.flags && selectedCountryObj.flags[colDef.rawCol] === 'Yes');
                    const isGoodForPatient =
                      colDef.polarity === 'negative_when_yes' ? !isYes : isYes;

                    return h(
                      'div',
                      {
                        key: `patient-col-${colDef.rawCol}`,
                        className: `rounded-xl border-[1.5px] p-2.5 flex flex-col justify-between gap-1 ${
                          isGoodForPatient
                            ? 'bg-[#DCFCE7] border-[#15803D] text-[#052E16]'
                            : 'bg-[#FEE2E2] border-[#B91C1C] text-[#7F1D1D]'
                        }`
                      },
                      h(
                        'div',
                        { className: 'flex items-center justify-between gap-2' },
                        h(
                          'span',
                          { className: 'text-xs font-black leading-tight' },
                          tr(colDef.titleKey, colDef.defaultTitle)
                        ),
                        h(
                          'span',
                          {
                            className: `px-2 py-0.5 rounded-full border text-[10.5px] font-black shrink-0 ${
                              isGoodForPatient
                                ? 'bg-white border-[#15803D] text-[#052E16]'
                                : 'bg-white border-[#B91C1C] text-[#7F1D1D]'
                            }`
                          },
                          isYes
                            ? tr('abortionMapYes', 'Yes')
                            : tr('abortionMapNo', 'No')
                        )
                      ),
                      h(
                        'div',
                        { className: 'text-[10.5px] font-bold opacity-90 leading-snug' },
                        isYes
                          ? tr(colDef.yesBadgeKey, colDef.defaultYesBadge)
                          : tr(colDef.noBadgeKey, colDef.defaultNoBadge)
                      )
                    );
                  })
                )
              )
            );
          })()
      )
    ),

    // ========================================================================
    // WIKIPEDIA 6 LEGAL GROUNDS SUMMARY TABLE & WHO CARE GUIDE MODAL (OPENED FROM THE BUBBLE AT THE BOTTOM OF THE KEY)
    // ========================================================================
    isDatasetBubbleModalOpen &&
      h(
        'div',
        {
          id: 'AbortionMapSavedWhoDatasetModal1',
          onClick: () => setIsDatasetBubbleModalOpen(false),
          className:
            'fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6'
        },
        h(
          'div',
          {
            onClick: (e) => e.stopPropagation(),
            className:
              'w-full max-w-6xl max-h-[90vh] rounded-[28px] border-[3px] border-black bg-white shadow-2xl flex flex-col overflow-hidden'
          },
          // Modal Header + Tab Switcher (Tab 1: Wikipedia 6 Legal Grounds Table | Tab 2: WHO Healthcare & Law Indicators)
          h(
            'div',
            {
              className:
                'px-4 sm:px-6 py-3.5 border-b-2 border-black bg-[#FFF5F7] flex flex-col gap-2.5'
            },
            h(
              'div',
              { className: 'flex flex-wrap items-center justify-between gap-3' },
              h(
                'div',
                { className: 'flex flex-col' },
                h(
                  'h2',
                  { className: 'text-base sm:text-xl font-black text-[#9F133A]' },
                  datasetTableTab === 'wikipedia_grounds'
                    ? tr(
                        'abortionMapModalTitleWikiGrounds',
                        'Countries: Legal Grounds for Abortion in All UN Member States (194 Nations)'
                      )
                    : tr(
                        'abortionMapModalTitlePatient',
                        'What Patients Need to Know: Global Abortion Care & Law Guide (194 Nations)'
                      )
                ),
                h(
                  'p',
                  { className: 'text-xs font-bold text-black/80 mt-0.5' },
                  datasetTableTab === 'wikipedia_grounds'
                    ? tr(
                        'abortionMapModalSubtitleWikiGrounds',
                        'Summarizes when abortion is Permitted (Green) or Prohibited (Light Red) across the 6 core legal grounds: Risk to Life, Risk to Health, Rape, Fetal Impairment, Economic or Social, and On Request.'
                      )
                    : tr(
                        'abortionMapModalSubtitlePatient',
                        'Green means helpful for abortion rights and safe care (even when the answer is "No" for Criminal Law!). Light Red means restrictive or missing support.'
                      )
                )
              ),
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => setIsDatasetBubbleModalOpen(false),
                  className:
                    'px-3 py-1.5 rounded-xl border-2 border-black bg-white hover:bg-black hover:text-white text-xs font-black text-black cursor-pointer'
                },
                tr('abortionMapModalCloseBtn', 'Close ×')
              )
            ),

            // Switcher buttons between Wikipedia 6 Legal Grounds Chart and WHO Patient Care Chart
            h(
              'div',
              { className: 'flex flex-wrap items-center gap-2' },
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => setDatasetTableTab('wikipedia_grounds'),
                  className: `px-3 py-1.5 rounded-xl border-2 border-black text-xs font-black cursor-pointer ${
                    datasetTableTab === 'wikipedia_grounds'
                      ? 'bg-[#9F133A] text-white'
                      : 'bg-white text-black hover:bg-[#FCE7EB]'
                  }`
                },
                tr('abortionMapTabWikiGrounds', '1. Legal Grounds Chart (Risk to Life, Health, Rape, Fetal, Social, On Request)')
              ),
              h(
                'button',
                {
                  type: 'button',
                  onClick: () => setDatasetTableTab('who_care'),
                  className: `px-3 py-1.5 rounded-xl border-2 border-black text-xs font-black cursor-pointer ${
                    datasetTableTab === 'who_care'
                      ? 'bg-[#9F133A] text-white'
                      : 'bg-white text-black hover:bg-[#FCE7EB]'
                  }`
                },
                tr('abortionMapTabWhoCare', '2. Healthcare & Criminal Law Guide (Pills, Doctor Guides, Funding)')
              )
            )
          ),

          // Filter Controls + Color Legend inside Modal
          h(
            'div',
            {
              className:
                'px-4 sm:px-6 py-2.5 border-b border-black/20 bg-white flex flex-wrap items-center gap-2.5'
            },
            h('input', {
              type: 'text',
              value: datasetFilterCountry,
              onChange: (e) => setDatasetFilterCountry(e.target.value),
              placeholder: tr('abortionMapModalSearchPlaceholder', 'Filter by nation or state/province...'),
              className:
                'w-full sm:w-64 px-3 py-1.5 rounded-xl border-[1.5px] border-black text-xs font-bold text-black'
            }),
            h(
              'select',
              {
                value: datasetFilterRegion,
                onChange: (e) => setDatasetFilterRegion(e.target.value),
                className:
                  'px-3 py-1.5 rounded-xl border-[1.5px] border-black text-xs font-black text-black bg-white'
              },
              h('option', { value: 'ALL' }, tr('abortionMapAllWhoRegions', 'All World Regions')),
              h('option', { value: 'African Region' }, translateWhoRegion('African Region')),
              h('option', { value: 'Region of the Americas' }, translateWhoRegion('Region of the Americas')),
              h('option', { value: 'Eastern Mediterranean Region' }, translateWhoRegion('Eastern Mediterranean Region')),
              h('option', { value: 'European Region' }, translateWhoRegion('European Region')),
              h('option', { value: 'South-East Asia Region' }, translateWhoRegion('South-East Asia Region')),
              h('option', { value: 'Western Pacific Region' }, translateWhoRegion('Western Pacific Region'))
            ),
            // Simple Green vs Red Legend Pills
            h(
              'div',
              { className: 'flex flex-wrap items-center gap-1.5 ms-auto' },
              h(
                'span',
                {
                  className:
                    'px-2.5 py-1 rounded-lg border border-[#15803D] bg-[#DCFCE7] text-[#052E16] text-[11px] font-black'
                },
                datasetTableTab === 'wikipedia_grounds'
                  ? tr('abortionMapGreenPermittedLegend', 'Green = Permitted')
                  : tr('abortionMapGreenGoodLegend', 'Green = Good for Abortion Access')
              ),
              h(
                'span',
                {
                  className:
                    'px-2.5 py-1 rounded-lg border border-[#B91C1C] bg-[#FEE2E2] text-[#7F1D1D] text-[11px] font-black'
                },
                datasetTableTab === 'wikipedia_grounds'
                  ? tr('abortionMapRedProhibitedLegend', 'Light Red = Prohibited')
                  : tr('abortionMapRedBadLegend', 'Light Red = Restricts or Missing Support')
              )
            )
          ),

          // Scrollable Table Content (Wikipedia 6 Legal Grounds OR WHO Care Indicators)
          h(
            'div',
            { className: 'flex-1 overflow-auto p-3 sm:p-4' },
            datasetTableTab === 'wikipedia_grounds'
              ? h(
                  'table',
                  { className: 'w-full border-collapse text-start text-xs' },
                  h(
                    'thead',
                    null,
                    h(
                      'tr',
                      { className: 'bg-[#FCE7EB] border-b-2 border-black' },
                      h(
                        'th',
                        {
                          className:
                            'p-2.5 border border-black/30 font-black text-black sticky start-0 bg-[#FCE7EB] z-10 min-w-[155px]'
                        },
                        tr('abortionMapColCountry', 'Country')
                      ),
                      h(
                        'th',
                        { className: 'p-2.5 border border-black/30 font-black text-black text-center' },
                        tr('abortionMapColLevel', 'Level')
                      ),
                      WIKIPEDIA_ABORTION_GROUNDS_COLUMNS.map((gCol) =>
                        h(
                          'th',
                          {
                            key: `wiki-th-${gCol.key}`,
                            className: 'p-2.5 border border-black/30 font-black text-black min-w-[130px]'
                          },
                          h(
                            'div',
                            { className: 'text-xs font-black text-black leading-tight' },
                            tr(gCol.titleKey, gCol.defaultTitle)
                          ),
                          h(
                            'div',
                            { className: 'text-[10px] font-bold text-black/70 leading-tight mt-0.5' },
                            tr(gCol.subKey, gCol.defaultSub)
                          )
                        )
                      )
                    )
                  ),
                  h(
                    'tbody',
                    null,
                    filteredDatasetCountries.map((cObj) => {
                      const lvlObj = levelByNum[cObj.level] || ABORTION_ACCESS_LEVELS[6];
                      const wikiGrounds = cObj.wikipediaGrounds || {};
                      return h(
                        'tr',
                        {
                          key: `wiki-row-${cObj.name}`,
                          className: 'border-b border-black/20 hover:bg-[#FFF5F7]'
                        },
                        h(
                          'td',
                          {
                            className:
                              'p-2.5 border border-black/20 font-black text-black sticky start-0 bg-white z-10'
                          },
                          translateCountryName(cObj)
                        ),
                        h(
                          'td',
                          { className: 'p-2.5 border border-black/20 text-center font-black' },
                          h(
                            'span',
                            {
                              className:
                                'inline-block px-2.5 py-0.5 rounded-full border border-black text-[11px] font-black text-black',
                              style: { backgroundColor: lvlObj.colorHex }
                            },
                            `${tr('abortionMapLevelWord', 'Level')} ${cObj.level}`
                          )
                        ),
                        WIKIPEDIA_ABORTION_GROUNDS_COLUMNS.map((gCol) => {
                          const gObj = wikiGrounds[gCol.key] || {
                            permitted: false,
                            detail: 'Prohibited'
                          };
                          const isPermitted = Boolean(gObj.permitted);
                          return h(
                            'td',
                            {
                              key: `wiki-cell-${cObj.name}-${gCol.key}`,
                              className: `p-2.5 border border-black/20 text-center font-black ${
                                isPermitted
                                  ? 'bg-[#DCFCE7] text-[#052E16]'
                                  : 'bg-[#FEE2E2] text-[#7F1D1D]'
                              }`
                            },
                            gObj.detail ||
                              (isPermitted
                                ? tr('abortionMapPermittedWord', 'Permitted')
                                : tr('abortionMapProhibitedWord', 'Prohibited'))
                          );
                        })
                      );
                    })
                  )
                )
              : h(
                  'table',
                  { className: 'w-full border-collapse text-start text-xs' },
                  h(
                    'thead',
                    null,
                    h(
                      'tr',
                      { className: 'bg-[#FCE7EB] border-b-2 border-black' },
                      h(
                        'th',
                        {
                          className:
                            'p-2.5 border border-black/30 font-black text-black sticky start-0 bg-[#FCE7EB] z-10 min-w-[155px]'
                        },
                        tr('abortionMapColCountry', 'Country / State')
                      ),
                      h(
                        'th',
                        { className: 'p-2.5 border border-black/30 font-black text-black text-center' },
                        tr('abortionMapColLevel', 'Level')
                      ),
                      PATIENT_FRIENDLY_WHO_COLUMNS.map((colDef) =>
                        h(
                          'th',
                          {
                            key: `th-${colDef.rawCol}`,
                            className: 'p-2.5 border border-black/30 font-black text-black min-w-[135px]'
                          },
                          h(
                            'div',
                            { className: 'text-xs font-black text-black leading-tight' },
                            tr(colDef.titleKey, colDef.defaultTitle)
                          ),
                          h(
                            'div',
                            { className: 'text-[10px] font-bold text-black/70 leading-tight mt-0.5' },
                            tr(colDef.subKey, colDef.defaultSub)
                          )
                        )
                      )
                    )
                  ),
                  h(
                    'tbody',
                    null,
                    filteredDatasetCountries.map((cObj) => {
                      const lvlObj = levelByNum[cObj.level] || ABORTION_ACCESS_LEVELS[6];
                      return h(
                        React.Fragment,
                        { key: `row-group-${cObj.name}` },
                        h(
                          'tr',
                          { className: 'border-b border-black/20 hover:bg-[#FFF5F7]' },
                          h(
                            'td',
                            {
                              className:
                                'p-2.5 border border-black/20 font-black text-black sticky start-0 bg-white z-10'
                            },
                            translateCountryName(cObj)
                          ),
                          h(
                            'td',
                            { className: 'p-2.5 border border-black/20 text-center font-black' },
                            h(
                              'span',
                              {
                                className:
                                  'inline-block px-2.5 py-0.5 rounded-full border border-black text-[11px] font-black text-black',
                                style: { backgroundColor: lvlObj.colorHex }
                              },
                              `${tr('abortionMapLevelWord', 'Level')} ${cObj.level}`
                            )
                          ),
                          PATIENT_FRIENDLY_WHO_COLUMNS.map((colDef) => {
                            const isYes = Boolean(cObj.flags && cObj.flags[colDef.rawCol] === 'Yes');
                            const isGoodForPatient =
                              colDef.polarity === 'negative_when_yes' ? !isYes : isYes;

                            return h(
                              'td',
                              {
                                key: `cell-${cObj.name}-${colDef.rawCol}`,
                                className: `p-2.5 border border-black/20 text-center font-black ${
                                  isGoodForPatient
                                    ? 'bg-[#DCFCE7] text-[#052E16]'
                                    : 'bg-[#FEE2E2] text-[#7F1D1D]'
                                }`
                              },
                              isYes
                                ? tr('abortionMapYes', 'Yes')
                                : tr('abortionMapNo', 'No')
                            );
                          })
                        )
                      );
                    })
                  )
                )
          )
        )
      )
  );
}
