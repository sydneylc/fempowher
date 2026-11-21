import React, { useState, useRef, useEffect, useMemo } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=285';
import { isRtlLanguage } from '../data/translations.js?v=285';
import {
  ABORTION_MAP_CANVAS_WIDTH,
  ABORTION_MAP_CANVAS_HEIGHT,
  ABORTION_LEGAL_COLUMNS,
  ABORTION_ACCESS_LEVELS,
  ABORTION_MAP_COUNTRIES,
  ABORTION_MAP_SVG_POLYGONS
} from '../data/abortionMapWorldData.js?v=285';

const h = React.createElement;

const REGION_PRESETS = [
  { id: 'world', labelKey: 'abortionMapPresetWorld', defaultLabel: 'All World', zoom: 1, panX: 0, panY: 0 },
  { id: 'americas', labelKey: 'abortionMapPresetAmericas', defaultLabel: 'Americas', zoom: 1.95, panX: 300, panY: -20 },
  { id: 'europe', labelKey: 'abortionMapPresetEurope', defaultLabel: 'Europe', zoom: 3.1, panX: 30, panY: 165 },
  { id: 'africa', labelKey: 'abortionMapPresetAfrica', defaultLabel: 'Africa', zoom: 2.2, panX: -15, panY: -95 },
  { id: 'me_c_asia', labelKey: 'abortionMapPresetMiddleEast', defaultLabel: 'Middle East & C. Asia', zoom: 2.75, panX: -135, panY: 75 },
  { id: 'asia_pac', labelKey: 'abortionMapPresetAsiaPacific', defaultLabel: 'Asia & Pacific', zoom: 2.05, panX: -335, panY: -25 }
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

  // Saved WHO Legal & Policy Excel Dataset Modal / Drawer (opened from the bubble at the bottom of the Key)
  const [isDatasetBubbleModalOpen, setIsDatasetBubbleModalOpen] = useState(false);
  const [datasetFilterCountry, setDatasetFilterCountry] = useState('');
  const [datasetFilterRegion, setDatasetFilterRegion] = useState('ALL');

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
    const activeFlags = ABORTION_LEGAL_COLUMNS.filter(
      (col) => countryObj.flags && countryObj.flags[col] === 'Yes'
    );
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
        hasClinicalGuidelines:
          countryObj.flags && countryObj.flags['Health Regulation / Clinical Guidelines'] === 'Yes',
        hasEmlRegistered:
          countryObj.flags && countryObj.flags['EML / Registered List'] === 'Yes',
        activeFlagsCount: activeFlags.length,
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

        // Quick WHO Policy Pills for Country Bubble
        wordBubble.kind === 'country' &&
          h(
            'div',
            { className: 'flex flex-wrap items-center justify-center gap-1.5 pt-1 border-t border-black/15' },
            h(
              'span',
              {
                className: `px-2 py-0.5 rounded-md border text-[10px] font-extrabold ${
                  wordBubble.hasClinicalGuidelines
                    ? 'bg-[#DCFCE7] border-[#15803D] text-[#052E16]'
                    : 'bg-white/80 border-black/30 text-black/70'
                }`
              },
              `${tr('abortionMapClinicalGuidelinesLabel', 'Clinical Guidelines')}: ${
                wordBubble.hasClinicalGuidelines
                  ? tr('abortionMapYes', 'Yes')
                  : tr('abortionMapNo', 'No')
              }`
            ),
            h(
              'span',
              {
                className: `px-2 py-0.5 rounded-md border text-[10px] font-extrabold ${
                  wordBubble.hasEmlRegistered
                    ? 'bg-[#DCFCE7] border-[#15803D] text-[#052E16]'
                    : 'bg-white/80 border-black/30 text-black/70'
                }`
              },
              `${tr('abortionMapEmlShortLabel', 'Essential Medicines (EML)')}: ${
                wordBubble.hasEmlRegistered
                  ? tr('abortionMapYes', 'Yes')
                  : tr('abortionMapNo', 'No')
              }`
            )
          ),

        // Button inside Country Bubble to inspect its full 15-column WHO record & sub-regions
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
                ? `${tr('abortionMapViewLegalTableBtn', 'View Full Legal Record')} (${wordBubble.subRegionsCount} ${tr('abortionMapSubRegionsTag', 'Sub-Regions')})`
                : tr('abortionMapViewLegalTableBtn', 'View Full Legal Record')
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
    // TOP HEADER BAR
    // ========================================================================
    h(
      'div',
      {
        className:
          'w-full px-3 sm:px-6 pt-3 pb-2.5 border-b-2 border-black bg-white shrink-0 flex flex-wrap items-center justify-between gap-3'
      },
      h('div', { className: 'shrink-0' }, renderSubpageBackButton(onBack, t, lang)),
      h(
        'div',
        { className: 'flex flex-col items-center text-center min-w-0 flex-1' },
        h(
          'h1',
          {
            className: 'text-xl sm:text-3xl font-black tracking-tight leading-tight',
            style: { color: '#9F133A' }
          },
          tr('abortionBtnMap', "FemPowHer's Abortion Map")
        ),
        h(
          'p',
          { className: 'text-xs sm:text-sm font-bold text-black/80 mt-0.5 max-w-2xl' },
          tr(
            'abortionMapSubtitle1',
            'Hover over or tap any nation on the map (or any level in the Key) to see its abortion care accessibility level and legal protections.'
          )
        )
      ),
      // Right quick button to open the Saved WHO Excel Policy Dataset
      h(
        'button',
        {
          type: 'button',
          onClick: () => {
            setDatasetFilterCountry('');
            setIsDatasetBubbleModalOpen(true);
          },
          className:
            'px-3 py-1.5 rounded-xl border-2 border-black bg-[#FFF5F7] hover:bg-[#FCE7EB] text-xs font-black text-[#9F133A] shadow-sm cursor-pointer shrink-0'
        },
        tr('abortionMapOpenSavedDataTopBtn', 'WHO Policy Table (194 Nations)')
      )
    ),

    // ========================================================================
    // MAIN WORKSPACE: LEFT RAINBOW KEY (WITH SAVED EXCEL DATA BUBBLE AT BOTTOM) + RIGHT AZURE WORLD MAP
    // ========================================================================
    h(
      'div',
      {
        className:
          'w-full max-w-[1440px] mx-auto flex-1 flex flex-col lg:flex-row gap-3 sm:gap-4 p-3 sm:p-4 items-stretch'
      },

      // ======================================================================
      // LEFT SIDEBAR: 10-LEVEL RAINBOW ACCESSIBILITY KEY + SAVED WHO EXCEL BUBBLE AT BOTTOM
      // ======================================================================
      h(
        'aside',
        {
          id: 'AbortionMapKeyAndFilters1',
          onClick: (e) => e.stopPropagation(),
          style: {
            width: isKeyExpanded ? '340px' : '256px',
            maxWidth: '100%'
          },
          className:
            'w-full lg:w-auto shrink-0 rounded-[24px] border-[2.5px] border-black bg-white p-3.5 flex flex-col justify-between transition-all duration-200 shadow-sm'
        },
        h(
          'div',
          { className: 'flex flex-col' },
          // Key Title + Expand button
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 pb-2 mb-2 border-b-2 border-black' },
            h(
              'span',
              { className: 'text-sm sm:text-base font-black tracking-wide text-black uppercase' },
              tr('abortionMapKeyTitle', 'KEY (LEVELS 1 TO 10)')
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => setIsKeyExpanded((v) => !v),
                className:
                  'px-2.5 py-1 rounded-lg border-[1.5px] border-black bg-white hover:bg-black/5 text-[11px] font-black text-black cursor-pointer shrink-0'
              },
              isKeyExpanded
                ? tr('abortionMapKeyCompactBtn', '← Compact')
                : tr('abortionMapKeyExpandBtn', 'Expand →')
            )
          ),

          // Scale legend header (Level 1 Most Allowed -> Level 10 Criminalized)
          h(
            'div',
            {
              className:
                'flex items-center justify-between text-[10.5px] font-black text-black/80 px-1 mb-2'
            },
            h('span', { className: 'text-[#15803D]' }, tr('abortionMapKeyMostAllowed', '1 = Broadest Access')),
            h('span', { className: 'text-[#991B1B]' }, tr('abortionMapKeyCriminalized', '10 = Criminalized'))
          ),

          // Show All / Hide All quick links
          h(
            'div',
            { className: 'flex items-center justify-between gap-2 mb-2 px-1' },
            h(
              'button',
              {
                type: 'button',
                onClick: () => handleSelectAllLevels(true),
                className: 'text-[10.5px] font-black underline text-black hover:text-[#9F133A] cursor-pointer'
              },
              tr('abortionMapShowAllLevels', 'Check All Levels')
            ),
            h(
              'button',
              {
                type: 'button',
                onClick: () => handleSelectAllLevels(false),
                className: 'text-[10.5px] font-bold underline text-black/70 hover:text-black cursor-pointer'
              },
              tr('abortionMapClearLevels', 'Uncheck All')
            )
          ),

          // 10 Rainbow Level Filter Pills
          h(
            'div',
            { className: 'flex flex-col gap-1.5' },
            ABORTION_ACCESS_LEVELS.map((lvlObj) => {
              const isChecked = visibleLevels[lvlObj.level] !== false;
              const labelText = isKeyExpanded
                ? translateLevelTitle(lvlObj)
                : translateLevelShortLabel(lvlObj);

              return h(
                'div',
                {
                  key: `abortion-level-key-${lvlObj.level}`,
                  onMouseEnter: (e) => showLevelKeyBubble(lvlObj, e.currentTarget, false),
                  onMouseLeave: scheduleHideWordBubble,
                  onClick: (e) => {
                    e.stopPropagation();
                    handleToggleLevelFilter(lvlObj.level);
                  },
                  className: `w-full rounded-xl border-[1.5px] border-black px-2.5 py-1.5 flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] ${
                    isChecked ? 'opacity-100' : 'opacity-45'
                  }`,
                  style: {
                    backgroundColor: lvlObj.colorHex
                  }
                },
                // Checkbox square
                h(
                  'span',
                  {
                    className:
                      'w-4 h-4 rounded border-[1.5px] border-black bg-white flex items-center justify-center text-[11px] font-black text-black shrink-0'
                  },
                  isChecked ? '✓' : ''
                ),
                // Black readable text on every single rainbow level color
                h(
                  'div',
                  { className: 'flex-1 min-w-0' },
                  h(
                    'div',
                    {
                      className: `text-[11.5px] font-black text-black leading-tight ${
                        isKeyExpanded ? '' : 'truncate'
                      }`
                    },
                    labelText
                  ),
                  isKeyExpanded &&
                    h(
                      'p',
                      { className: 'text-[10px] font-bold text-black/85 leading-snug mt-0.5' },
                      translateLevelDescription(lvlObj)
                    )
                )
              );
            })
          )
        ),

        // ====================================================================
        // BOTTOM BUBBLE INSIDE THE KEY: SAVED WHO EXCEL LEGAL & POLICY DATASET
        // ====================================================================
        h(
          'div',
          {
            id: 'AbortionMapSavedExcelDataKeyBubble1',
            className:
              'mt-3 pt-3 border-t-2 border-black flex flex-col gap-2'
          },
          h(
            'div',
            {
              onClick: () => {
                setDatasetFilterCountry('');
                setIsDatasetBubbleModalOpen(true);
              },
              className:
                'w-full rounded-2xl border-2 border-black bg-[#FFF5F7] hover:bg-[#FCE7EB] p-3 cursor-pointer transition-all shadow-sm flex flex-col items-center text-center'
            },
            h(
              'span',
              {
                className:
                  'px-2 py-0.5 rounded-full border border-black bg-white text-[9.5px] font-black uppercase tracking-wider text-[#9F133A] mb-1'
              },
              tr('abortionMapSavedDatasetBadge', 'Saved WHO Excel Dataset')
            ),
            h(
              'div',
              { className: 'text-xs sm:text-[13px] font-black text-black leading-snug' },
              tr(
                'abortionMapSavedDatasetBubbleTitle',
                'Additional Legal & Policy Sources Archive'
              )
            ),
            h(
              'p',
              { className: 'text-[10.5px] font-bold text-black/75 leading-tight mt-1' },
              tr(
                'abortionMapSavedDatasetBubbleDesc',
                'All 15 WHO legal columns (Constitution, Penal Code, Clinical Guidelines, EML, Funding, Sub-Regions & more) saved for reference.'
              )
            ),
            h(
              'span',
              {
                className:
                  'mt-2 px-3 py-1 rounded-xl border-[1.5px] border-black bg-white text-[11px] font-black text-black'
              },
              tr('abortionMapSavedDatasetOpenBtn', 'Open Saved Legal Table →')
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

        // Top Map Toolbar: Search Country + Region Quick-Jump Buttons + Zoom Controls
        h(
          'div',
          {
            onClick: (e) => e.stopPropagation(),
            className:
              'w-full rounded-2xl border-2 border-black bg-white p-2.5 sm:p-3 flex flex-wrap items-center justify-between gap-2 shadow-sm'
          },

          // Country Search input with instant dropdown
          h(
            'div',
            { className: 'relative w-full sm:w-64' },
            h('input', {
              type: 'text',
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: tr('abortionMapSearchPlaceholder', 'Search any nation (e.g., Canada, Brazil, Poland)...'),
              className:
                'w-full px-3 py-1.5 rounded-xl border-[1.5px] border-black text-xs font-bold text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#9F133A]'
            }),
            searchMatches.length > 0 &&
              h(
                'div',
                {
                  className:
                    'absolute start-0 top-full mt-1 w-full rounded-xl border-2 border-black bg-white shadow-xl z-50 overflow-hidden'
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
                        'w-full px-3 py-2 text-start text-xs font-black text-black hover:bg-[#FFF5F7] border-b border-black/10 last:border-b-0 flex items-center justify-between gap-2 cursor-pointer'
                    },
                    h('span', { className: 'truncate' }, translateCountryName(c)),
                    h(
                      'span',
                      {
                        className:
                          'px-2 py-0.5 rounded-full border border-black text-[10px] font-black text-black shrink-0',
                        style: { backgroundColor: lvlObj.colorHex }
                      },
                      `L${c.level}`
                    )
                  );
                })
              )
          ),

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
        // SELECTED COUNTRY DETAILED SUMMARY CARD (WHEN A NATION IS CLICKED OR SEARCHED)
        // ====================================================================
        selectedCountryObj &&
          (() => {
            const lvlObj = levelByNum[selectedCountryObj.level] || ABORTION_ACCESS_LEVELS[6];
            const yesCols = ABORTION_LEGAL_COLUMNS.filter(
              (col) => selectedCountryObj.flags && selectedCountryObj.flags[col] === 'Yes'
            );
            const noCols = ABORTION_LEGAL_COLUMNS.filter(
              (col) => !selectedCountryObj.flags || selectedCountryObj.flags[col] !== 'Yes'
            );

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

              // Active WHO Legal & Policy Instruments for this country
              h(
                'div',
                { className: 'flex flex-col gap-1.5' },
                h(
                  'div',
                  { className: 'text-xs font-black text-[#9F133A] uppercase tracking-wide' },
                  tr(
                    'abortionMapIdentifiedLegalSourcesHeader',
                    'Identified Legal & Policy Documents in WHO Database:'
                  )
                ),
                h(
                  'div',
                  { className: 'flex flex-wrap gap-1.5' },
                  yesCols.map((col) =>
                    h(
                      'span',
                      {
                        key: `yes-col-${col}`,
                        className:
                          'px-2.5 py-1 rounded-xl border-[1.5px] border-black bg-[#DCFCE7] text-[11px] font-black text-black'
                      },
                      `✓ ${translateLegalColumn(col)}`
                    )
                  ),
                  noCols.map((col) =>
                    h(
                      'span',
                      {
                        key: `no-col-${col}`,
                        className:
                          'px-2.5 py-1 rounded-xl border border-black/30 bg-gray-100 text-[11px] font-semibold text-black/60'
                      },
                      `– ${translateLegalColumn(col)}`
                    )
                  )
                )
              ),

              // Sub-Regions Breakdown (if the nation has states/provinces/cantons/territories in the WHO Excel table)
              selectedCountryObj.subRegions &&
                selectedCountryObj.subRegions.length > 0 &&
                h(
                  'div',
                  { className: 'mt-1 pt-2.5 border-t border-black/20 flex flex-col gap-2' },
                  h(
                    'div',
                    { className: 'text-xs font-black text-black' },
                    `${tr('abortionMapSubRegionsHeader', 'Sub-National States, Provinces, or Territories')} (${selectedCountryObj.subRegions.length}):`
                  ),
                  h(
                    'div',
                    { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2' },
                    selectedCountryObj.subRegions.map((sr) => {
                      const srYes = ABORTION_LEGAL_COLUMNS.filter(
                        (col) => sr.flags && sr.flags[col] === 'Yes'
                      );
                      return h(
                        'div',
                        {
                          key: `subregion-${sr.name}`,
                          className:
                            'rounded-xl border-[1.5px] border-black bg-[#FFF5F7] p-2.5 flex flex-col gap-1'
                        },
                        h('div', { className: 'text-xs font-black text-black' }, sr.name),
                        h(
                          'div',
                          { className: 'text-[10.5px] font-bold text-black/80 leading-snug' },
                          srYes.length > 0
                            ? srYes.map((c) => translateLegalColumn(c)).join(' • ')
                            : tr('abortionMapGovernedByFederalLaw', 'Governed under national/federal framework')
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
    // SAVED WHO EXCEL LEGAL & POLICY DATASET MODAL (OPENED FROM THE BUBBLE AT THE BOTTOM OF THE KEY)
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
          // Modal Header
          h(
            'div',
            {
              className:
                'px-4 sm:px-6 py-3.5 border-b-2 border-black bg-[#FFF5F7] flex flex-wrap items-center justify-between gap-3'
            },
            h(
              'div',
              { className: 'flex flex-col' },
              h(
                'h2',
                { className: 'text-base sm:text-xl font-black text-[#9F133A]' },
                tr(
                  'abortionMapModalTitle',
                  'Saved WHO Global Abortion Legal & Policy Sources Dataset (194 Sovereign Nations & 89 Sub-Regions)'
                )
              ),
              h(
                'p',
                { className: 'text-xs font-bold text-black/80' },
                tr(
                  'abortionMapModalSubtitle',
                  'Complete 15-column policy table saved from the WHO Excel database for reference and future clinical work.'
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

          // Filter Controls inside Modal
          h(
            'div',
            {
              className:
                'px-4 sm:px-6 py-2.5 border-b border-black/20 bg-white flex flex-wrap items-center gap-3'
            },
            h('input', {
              type: 'text',
              value: datasetFilterCountry,
              onChange: (e) => setDatasetFilterCountry(e.target.value),
              placeholder: tr('abortionMapModalSearchPlaceholder', 'Filter by nation or state/province...'),
              className:
                'w-full sm:w-72 px-3 py-1.5 rounded-xl border-[1.5px] border-black text-xs font-bold text-black'
            }),
            h(
              'select',
              {
                value: datasetFilterRegion,
                onChange: (e) => setDatasetFilterRegion(e.target.value),
                className:
                  'px-3 py-1.5 rounded-xl border-[1.5px] border-black text-xs font-black text-black bg-white'
              },
              h('option', { value: 'ALL' }, tr('abortionMapAllWhoRegions', 'All WHO Regions')),
              h('option', { value: 'African Region' }, translateWhoRegion('African Region')),
              h('option', { value: 'Region of the Americas' }, translateWhoRegion('Region of the Americas')),
              h('option', { value: 'Eastern Mediterranean Region' }, translateWhoRegion('Eastern Mediterranean Region')),
              h('option', { value: 'European Region' }, translateWhoRegion('European Region')),
              h('option', { value: 'South-East Asia Region' }, translateWhoRegion('South-East Asia Region')),
              h('option', { value: 'Western Pacific Region' }, translateWhoRegion('Western Pacific Region'))
            ),
            h(
              'span',
              { className: 'text-xs font-black text-black/75 ms-auto' },
              `${filteredDatasetCountries.length} ${tr('abortionMapNationsShownCount', 'nations shown')}`
            )
          ),

          // Scrollable 15-Column Table
          h(
            'div',
            { className: 'flex-1 overflow-auto p-3 sm:p-4' },
            h(
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
                    { className: 'p-2 border border-black/30 font-black text-black sticky start-0 bg-[#FCE7EB] z-10' },
                    tr('abortionMapColCountry', 'Country / Sub-Region')
                  ),
                  h(
                    'th',
                    { className: 'p-2 border border-black/30 font-black text-black' },
                    tr('abortionMapColLevel', 'Level')
                  ),
                  ABORTION_LEGAL_COLUMNS.map((col) =>
                    h(
                      'th',
                      {
                        key: `th-${col}`,
                        className: 'p-2 border border-black/30 font-black text-black min-w-[96px]'
                      },
                      translateLegalColumn(col)
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
                            'p-2 border border-black/20 font-black text-black sticky start-0 bg-white z-10'
                        },
                        translateCountryName(cObj)
                      ),
                      h(
                        'td',
                        { className: 'p-2 border border-black/20 text-center font-black' },
                        h(
                          'span',
                          {
                            className:
                              'inline-block px-2 py-0.5 rounded-full border border-black text-[10.5px] font-black text-black',
                            style: { backgroundColor: lvlObj.colorHex }
                          },
                          `L${cObj.level}`
                        )
                      ),
                      ABORTION_LEGAL_COLUMNS.map((col) => {
                        const val = cObj.flags && cObj.flags[col] === 'Yes';
                        return h(
                          'td',
                          {
                            key: `cell-${cObj.name}-${col}`,
                            className: `p-2 border border-black/20 text-center font-bold ${
                              val ? 'bg-[#DCFCE7] text-[#052E16]' : 'text-black/50'
                            }`
                          },
                          val ? tr('abortionMapYes', 'Yes') : tr('abortionMapNo', 'No')
                        );
                      })
                    ),
                    // Render sub-regions rows indented underneath if any exist
                    Array.isArray(cObj.subRegions) &&
                      cObj.subRegions.map((sr) =>
                        h(
                          'tr',
                          {
                            key: `subrow-${cObj.name}-${sr.name}`,
                            className: 'border-b border-black/10 bg-gray-50/80 text-[11px]'
                          },
                          h(
                            'td',
                            {
                              className:
                                'p-1.5 ps-5 border border-black/15 font-bold text-black/85 sticky start-0 bg-gray-50 z-10'
                            },
                            `↳ ${sr.name}`
                          ),
                          h(
                            'td',
                            { className: 'p-1.5 border border-black/15 text-center font-bold text-black/60' },
                            `L${cObj.level}`
                          ),
                          ABORTION_LEGAL_COLUMNS.map((col) => {
                            const val = sr.flags && sr.flags[col] === 'Yes';
                            return h(
                              'td',
                              {
                                key: `subcell-${sr.name}-${col}`,
                                className: `p-1.5 border border-black/15 text-center font-semibold ${
                                  val ? 'bg-[#DCFCE7]/70 text-[#052E16]' : 'text-black/40'
                                }`
                              },
                              val ? tr('abortionMapYes', 'Yes') : tr('abortionMapNo', 'No')
                            );
                          })
                        )
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
