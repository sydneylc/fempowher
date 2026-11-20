import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18.3.1';
import { cleanBackLabel, isRtlLanguage } from '../data/translations.js?v=234';

const h = React.createElement;

function resolveTranslateTargetCode(lang = 'en', UserLanguageChoice1 = null) {
  const rawTarget =
    (UserLanguageChoice1 &&
      typeof UserLanguageChoice1 === 'object' &&
      UserLanguageChoice1.translateTarget &&
      UserLanguageChoice1.translateTarget !== 'en'
      ? UserLanguageChoice1.translateTarget
      : null) ||
    (UserLanguageChoice1 && typeof UserLanguageChoice1 === 'object' && UserLanguageChoice1.code
      ? UserLanguageChoice1.code
      : null) ||
    lang ||
    'en';
  const code = String(rawTarget).toLowerCase().trim();
  if (!code || code === 'en') return 'en';
  if (code === 'prs') return 'fa';
  if (code === 'rhg') return 'bn';
  return code;
}

// ============================================================================
// 5 Topic-Specific Custom Cartoon Illustrations for "I Am Pregnant After a Loss"
// (Each section also supports `gifSrc` so custom animated GIFs can be plugged right in!)
// ============================================================================

// 1. Pregnant Woman Crying While Cradling Her Belly (Grief for the baby lost + Love for the new baby)
export function renderPregnantWomanCryingCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Soft warm rose circle backdrop
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#FFE8F2',
      stroke: '#9F133A',
      strokeWidth: '3'
    }),
    // Soft memory star in upper right (honoring the baby she lost)
    h('circle', { cx: '136', cy: '42', r: '12', fill: '#FFF4C8', opacity: '0.9' }),
    h('path', {
      d: 'M136 31 L139 39 L147 42 L139 45 L136 53 L133 45 L125 42 L133 39 Z',
      fill: '#F59E0B'
    }),
    // Hair flowing behind shoulders
    h('path', {
      d: 'M58 34 C42 36, 36 58, 40 84 C42 98, 48 112, 56 120 L92 114 L92 46 C86 34, 72 32, 58 34 Z',
      fill: '#3B1E14'
    }),
    // Pregnant dress & rounded belly silhouette
    h('path', {
      d: 'M56 88 C56 78, 84 78, 90 90 C108 98, 126 114, 124 136 C123 150, 110 162, 92 166 L52 166 C48 140, 50 108, 56 88 Z',
      fill: '#CF366C'
    }),
    // Small glowing heart inside the pregnant belly
    h('path', {
      d: 'M98 126 C95 121, 87 122, 87 128 C87 134, 98 140, 98 143 C98 140, 109 134, 109 128 C109 122, 101 121, 98 126 Z',
      fill: '#FFE4F0',
      opacity: '0.92'
    }),
    // Neck & tilted head looking down at belly
    h('rect', { x: '64', y: '72', width: '14', height: '16', rx: '6', fill: '#D99B78' }),
    h('ellipse', {
      cx: '75',
      cy: '56',
      rx: '20',
      ry: '22',
      transform: 'rotate(12 75 56)',
      fill: '#D99B78'
    }),
    // Front hair wave
    h('path', {
      d: 'M56 46 C62 32, 86 32, 94 48 C84 42, 70 42, 58 54 Z',
      fill: '#3B1E14'
    }),
    // Closed sad/tender eye & eyebrow
    h('path', {
      d: 'M76 48 Q83 45 88 49',
      stroke: '#3B1E14',
      strokeWidth: '2.2',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M77 56 Q82 60 87 56',
      stroke: '#3B1E14',
      strokeWidth: '2.3',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Gentle mouth
    h('path', {
      d: 'M78 70 Q83 67 87 70',
      stroke: '#7C2D12',
      strokeWidth: '2',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Two visible blue teardrops falling down her cheek
    h('path', {
      d: 'M84 61 C84 61, 88 66, 88 69 C88 71, 86 73, 84 73 C82 73, 80 71, 80 69 C80 66, 84 61, 84 61 Z',
      fill: '#38BDF8'
    }),
    h('path', {
      d: 'M90 73 C90 73, 93 77, 93 80 C93 82, 91.5 83.5, 90 83.5 C88.5 83.5, 87 82, 87 80 C87 77, 90 73, 90 73 Z',
      fill: '#0284C7'
    }),
    // Arm & hand lovingly cradling her pregnant belly
    h('path', {
      d: 'M62 96 C60 116, 68 136, 94 142',
      stroke: '#D99B78',
      strokeWidth: '10',
      fill: 'none',
      strokeLinecap: 'round'
    })
  );
}

// 2. Fear of Bonding Cartoon: Protective Brain & Guarded Shield Over a Baby Onesie ("Emotional Cushioning")
export function renderFearOfBondingCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#F6EEFF',
      stroke: '#9F133A',
      strokeWidth: '3'
    }),
    // Protective dotted shield dome around the baby onesie
    h('path', {
      d: 'M90 26 L140 44 L140 92 C140 126, 116 146, 90 156 C64 146, 40 126, 40 92 L40 44 Z',
      fill: '#FFFFFF',
      stroke: '#CF366C',
      strokeWidth: '3',
      strokeDasharray: '6 4'
    }),
    // Cute baby onesie inside the protective shield
    h('path', {
      d: 'M72 58 L60 70 L68 80 L74 74 L74 112 C74 118, 80 122, 90 122 C100 122, 106 118, 106 112 L106 74 L112 80 L120 70 L108 58 L98 58 C96 64, 84 64, 82 58 Z',
      fill: '#F472B6',
      stroke: '#9F133A',
      strokeWidth: '2.5',
      strokeLinejoin: 'round'
    }),
    // Question mark / protective pause badge on onesie
    h('circle', { cx: '90', cy: '88', r: '13', fill: '#FFF5FA' }),
    h(
      'text',
      {
        x: '90',
        y: '94',
        textAnchor: 'middle',
        fill: '#9F133A',
        fontSize: '18',
        fontWeight: '900'
      },
      '?'
    )
  );
}

// 3. Partner Stress Cartoon: Mother & Partner Holding Her Pregnant Belly Together
export function renderPartnerStressSupportCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#FFEBF3',
      stroke: '#9F133A',
      strokeWidth: '3'
    }),
    // Partner standing close on left
    h('circle', { cx: '66', cy: '54', r: '17', fill: '#C68663' }),
    h('path', {
      d: 'M50 48 C50 34, 80 34, 82 48 C74 42, 58 42, 50 48 Z',
      fill: '#271710'
    }),
    // Partner's body
    h('path', {
      d: 'M42 152 C42 106, 52 84, 72 84 L84 84 L84 156 L42 156 Z',
      fill: '#8E1145'
    }),
    // Mother standing on right
    h('circle', { cx: '112', cy: '58', r: '16', fill: '#E0A382' }),
    h('path', {
      d: 'M98 48 C104 36, 128 38, 130 62 C132 76, 128 92, 122 98 L112 74 Z',
      fill: '#3B1E14'
    }),
    // Mother's pregnant dress & belly curving toward center
    h('path', {
      d: 'M102 86 L124 86 C130 108, 132 134, 130 156 L76 156 C72 136, 76 112, 92 102 Z',
      fill: '#EC4899'
    }),
    // Both partners' hands meeting on the pregnant belly
    h('path', {
      d: 'M62 104 Q76 124 94 126',
      stroke: '#C68663',
      strokeWidth: '8',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M118 106 Q108 124 94 126',
      stroke: '#E0A382',
      strokeWidth: '8',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Shared heart above their heads
    h('path', {
      d: 'M90 28 C87 22, 78 23, 78 30 C78 36, 90 43, 90 46 C90 43, 102 36, 102 30 C102 23, 93 22, 90 28 Z',
      fill: '#CF366C'
    })
  );
}

// 4. Prenatal Reassurance Cartoon: Ultrasound Heartbeat Monitor & Healthy Baby Wave
export function renderPrenatalHeartbeatMonitorCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#FFF0F6',
      stroke: '#9F133A',
      strokeWidth: '3'
    }),
    // Ultrasound monitor screen frame
    h('rect', {
      x: '34',
      y: '42',
      width: '112',
      height: '82',
      rx: '14',
      fill: '#1E1B4B',
      stroke: '#9F133A',
      strokeWidth: '3.5'
    }),
    // EKG heartbeat pulse line across ultrasound screen
    h('path', {
      d: 'M44 86 L66 86 L74 64 L84 106 L94 56 L104 96 L112 78 L118 86 L136 86',
      fill: 'none',
      stroke: '#F472B6',
      strokeWidth: '4',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    // Glowing heart icon in top right of monitor
    h('path', {
      d: 'M126 54 C124 50, 118 50, 118 55 C118 59, 126 64, 126 66 C126 64, 134 59, 134 55 C134 50, 128 50, 126 54 Z',
      fill: '#FB7185'
    }),
    // Monitor stand
    h('rect', { x: '80', y: '124', width: '20', height: '14', fill: '#9F133A' }),
    h('rect', { x: '62', y: '136', width: '56', height: '8', rx: '4', fill: '#CF366C' })
  );
}

// 5. Postpartum Care After Rainbow Birth Cartoon: Mother Holding Newborn With Gentle Emotional Support
export function renderPostpartumRainbowCareCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '90',
      cy: '90',
      r: '82',
      fill: '#FFEBF3',
      stroke: '#9F133A',
      strokeWidth: '3'
    }),
    // Soft comforting arc above mother and newborn
    h('path', {
      d: 'M38 78 A54 54 0 0 1 142 78',
      fill: 'none',
      stroke: '#F472B6',
      strokeWidth: '6',
      strokeLinecap: 'round',
      opacity: '0.55'
    }),
    h('path', {
      d: 'M46 78 A46 46 0 0 1 134 78',
      fill: 'none',
      stroke: '#FBBF24',
      strokeWidth: '5',
      strokeLinecap: 'round',
      opacity: '0.65'
    }),
    // Mother's head & hair
    h('circle', { cx: '84', cy: '66', r: '18', fill: '#59311B' }),
    h('circle', { cx: '72', cy: '52', r: '11', fill: '#14110F' }),
    h('circle', { cx: '86', cy: '48', r: '12', fill: '#14110F' }),
    h('circle', { cx: '98', cy: '56', r: '11', fill: '#14110F' }),
    // Mother's shoulders
    h('path', {
      d: 'M52 152 C54 108, 68 90, 88 90 C108 90, 124 108, 126 152 Z',
      fill: '#9F133A'
    }),
    // Newborn swaddled in warm cream blanket in her arms
    h('ellipse', {
      cx: '96',
      cy: '118',
      rx: '26',
      ry: '16',
      transform: 'rotate(-12 96 118)',
      fill: '#FFF7ED',
      stroke: '#F472B6',
      strokeWidth: '2.5'
    }),
    h('circle', { cx: '110', cy: '112', r: '9', fill: '#6B3B20' })
  );
}

// Custom SVG Key Icon for the top-right "Topics Key" button
function renderTopicsKeyIcon(color = '#FEACEC') {
  return h(
    'svg',
    {
      viewBox: '0 0 36 20',
      className: 'w-6 h-4 shrink-0',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '9',
      cy: '10',
      r: '6.5',
      fill: 'none',
      stroke: color,
      strokeWidth: '2.8'
    }),
    h('line', {
      x1: '15.5',
      y1: '10',
      x2: '33',
      y2: '10',
      stroke: color,
      strokeWidth: '2.8',
      strokeLinecap: 'round'
    }),
    h('line', {
      x1: '26',
      y1: '10',
      x2: '26',
      y2: '16.5',
      stroke: color,
      strokeWidth: '2.8',
      strokeLinecap: 'round'
    }),
    h('line', {
      x1: '31.5',
      y1: '10',
      x2: '31.5',
      y2: '16.5',
      stroke: color,
      strokeWidth: '2.8',
      strokeLinecap: 'round'
    })
  );
}

// Helper to highlight search keyword occurrences inside any string
function renderHighlightedText(text = '', query = '', matchStartIndexRef = null, activeMatchIndex = 0) {
  const cleanText = String(text || '');
  const q = String(query || '').trim();
  if (!q) return cleanText;

  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = cleanText.split(regex);
  if (parts.length <= 1) return cleanText;

  return parts.map((part, idx) => {
    if (part.toLowerCase() === q.toLowerCase()) {
      const myMatchIdx = matchStartIndexRef ? matchStartIndexRef.current++ : 0;
      const isCurrent = myMatchIdx === activeMatchIndex;
      return h(
        'mark',
        {
          key: idx,
          'data-search-match-index': myMatchIdx,
          className: 'px-1 py-0.5 rounded font-extrabold transition-all',
          style: {
            backgroundColor: isCurrent ? '#FACC15' : '#FEF08A',
            color: '#6E0926',
            outline: isCurrent ? '2px solid #9F133A' : 'none'
          }
        },
        part
      );
    }
    return part;
  });
}

// ============================================================================
// Reusable Long-Form Book-Wrap Page Component (Option 3 Refined):
// - Zero chapter labels and zero numbers anywhere
// - Top-right Key symbol button opening unnumbered sub-topic jump pills
// - Search bar directly underneath the Key symbol that highlights & scrolls to matches
// - Left vertical timeline ribbon with section dots
// - Long multi-paragraph writing wrapping around floated right/left cartoon art (or custom GIFs via `sec.gifSrc`)
// - Bottom quick-reference subpage buttons located at the very bottom (opening empty home pages for now)
// - 100% UserLanguageChoice1 dynamic translation
// ============================================================================
export function LongFormTopicBookWrapPage({
  pageId,
  title,
  sections = [],
  bottomSubPages = [],
  palette = {
    pageBg: '#FFFAFC',
    headerDark: '#9F133A',
    accentMedium: '#CF366C',
    tintLight: '#FFE4F0',
    inkColor: '#4A0E24',
    timelineLine: '#F4A2C6'
  },
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const [keyMenuOpen, setKeyMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMatchIndex, setActiveMatchIndex] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);
  const [activeEmptySubPage, setActiveEmptySubPage] = useState(null);
  const [translatedMap, setTranslatedMap] = useState({});

  const pageRootRef = useRef(null);
  const sectionRefs = useRef({});

  const activeCode =
    (UserLanguageChoice1 && typeof UserLanguageChoice1 === 'object' && UserLanguageChoice1.code) ||
    lang ||
    'en';
  const tlTarget = resolveTranslateTargetCode(activeCode, UserLanguageChoice1);
  const rtl = isRtlLanguage(activeCode, UserLanguageChoice1?.writtenLanguage);

  // Live UserLanguageChoice1 translation for all headings, long paragraphs, Key pills, and bottom buttons
  useEffect(() => {
    if (!tlTarget || tlTarget === 'en') {
      setTranslatedMap({});
      return;
    }

    const cacheKey = `fempowher_longbook_i18n_v226_${pageId}_${tlTarget}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed === 'object') {
          setTranslatedMap(parsed);
          return;
        }
      }
    } catch (e) {}

    const phrases = [];
    const addP = (p) => {
      if (p && typeof p === 'string' && !phrases.includes(p)) {
        phrases.push(p);
      }
    };

    addP(title);
    addP('Topics Key');
    addP('Jump to topic in page:');
    addP('Search keyword in page...');
    sections.forEach((sec) => {
      addP(sec.keyLabel);
      addP(sec.heading);
      (sec.paragraphs || []).forEach((p) => addP(p));
    });
    bottomSubPages.forEach((bp) => {
      addP(bp.title);
      addP(bp.subtitle);
    });

    if (phrases.length === 0) return;

    let cancelled = false;
    const payload = phrases.join('\n');
    fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
        tlTarget
      )}&dt=t&q=${encodeURIComponent(payload)}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (cancelled || !data || !Array.isArray(data[0])) return;
        const fullTranslated = data[0].map((seg) => seg[0] || '').join('');
        const lines = fullTranslated.split('\n');
        const mapObj = {};
        phrases.forEach((orig, idx) => {
          if (lines[idx] && lines[idx].trim()) {
            mapObj[orig] = lines[idx].trim();
          }
        });
        setTranslatedMap(mapObj);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(mapObj));
        } catch (e) {}
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [pageId, tlTarget, title]);

  const trPhrase = (phrase) => {
    if (!phrase) return '';
    if (tlTarget === 'en' && activeCode === 'en') return phrase;
    if (translatedMap && translatedMap[phrase]) {
      return translatedMap[phrase];
    }
    return phrase;
  };

  // Count matches and scroll to active match when searchQuery or activeMatchIndex changes
  useEffect(() => {
    if (!pageRootRef.current) return;
    const q = String(searchQuery || '').trim();
    if (!q) {
      setTotalMatches(0);
      setActiveMatchIndex(0);
      return;
    }
    const marks = pageRootRef.current.querySelectorAll('mark[data-search-match-index]');
    setTotalMatches(marks.length);
    if (marks.length > 0) {
      const safeIdx = ((activeMatchIndex % marks.length) + marks.length) % marks.length;
      const targetMark =
        pageRootRef.current.querySelector(`mark[data-search-match-index="${safeIdx}"]`) || marks[0];
      if (targetMark && typeof targetMark.scrollIntoView === 'function') {
        targetMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [searchQuery, activeMatchIndex, translatedMap]);

  // If user clicked one of the bottom subpage buttons, render its Empty Home Page with Back button
  if (activeEmptySubPage) {
    return h(
      'div',
      {
        id: activeEmptySubPage.pageId,
        dir: rtl ? 'rtl' : 'ltr',
        className: 'min-h-full w-full shrink-0 flex flex-col px-5 sm:px-10 py-6 sm:py-8',
        style: { backgroundColor: palette.pageBg, color: palette.inkColor }
      },
      h(
        'div',
        { className: 'max-w-4xl w-full mx-auto space-y-6' },
        h(
          'button',
          {
            type: 'button',
            onClick: () => setActiveEmptySubPage(null),
            className:
              'px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition hover:opacity-90 inline-flex items-center gap-1.5 cursor-pointer shadow-sm',
            style: {
              backgroundColor: palette.headerDark,
              color: '#FFFFFF',
              border: `2px solid ${palette.tintLight}`
            }
          },
          h('span', { 'aria-hidden': 'true' }, rtl ? '→' : '←'),
          h('span', null, cleanBackLabel(t?.backBtn, activeCode))
        ),
        h(
          'h1',
          {
            className: 'text-2xl sm:text-4xl font-black tracking-tight text-center mt-4',
            style: { color: palette.headerDark }
          },
          trPhrase(activeEmptySubPage.title)
        )
      )
    );
  }

  const matchCounterRef = { current: 0 };

  const scrollToSection = (secId) => {
    const el = sectionRefs.current[secId];
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return h(
    'div',
    {
      id: pageId,
      ref: pageRootRef,
      dir: rtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 flex flex-col px-4 sm:px-8 py-5 sm:py-7 select-text overflow-x-hidden',
      style: {
        backgroundColor: palette.pageBg,
        color: palette.inkColor
      }
    },
    h(
      'div',
      { className: 'max-w-4xl w-full mx-auto' },
      // Top Row: Back Button on Left + Key Symbol Button & Search Bar Underneath in Top-Right Corner
      h(
        'div',
        { className: 'flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4' },
        // Left side: Back Button + Main Page Title
        h(
          'div',
          { className: 'flex-1 min-w-0 space-y-3' },
          h(
            'button',
            {
              type: 'button',
              onClick: onBack,
              className:
                'px-4 py-1.5 rounded-full font-extrabold text-xs sm:text-sm transition hover:opacity-90 inline-flex items-center gap-1.5 cursor-pointer shadow-sm',
              style: {
                backgroundColor: palette.headerDark,
                color: '#FFFFFF',
                border: `2px solid ${palette.tintLight}`
              }
            },
            h('span', { 'aria-hidden': 'true' }, rtl ? '→' : '←'),
            h('span', null, cleanBackLabel(t?.backBtn, activeCode))
          ),
          h(
            'h1',
            {
              className: 'text-2xl sm:text-4xl font-black tracking-tight leading-tight',
              style: { color: palette.headerDark }
            },
            renderHighlightedText(trPhrase(title), searchQuery, matchCounterRef, activeMatchIndex)
          )
        ),

        // Right side: Top-Right Key Symbol Button + Search Bar Underneath + Collapsible Unnumbered Topics Tray
        h(
          'div',
          { className: 'w-full sm:w-80 shrink-0 flex flex-col items-end gap-2' },
          // 1. Key Symbol Button in Top-Right Corner
          h(
            'button',
            {
              type: 'button',
              onClick: () => setKeyMenuOpen((prev) => !prev),
              title: trPhrase('Topics Key'),
              className:
                'px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition hover:opacity-95 inline-flex items-center gap-2 cursor-pointer shadow-md',
              style: {
                backgroundColor: palette.headerDark,
                color: '#FFFFFF',
                border: `2px solid ${palette.tintLight}`
              }
            },
            renderTopicsKeyIcon('#FEACEC'),
            h('span', null, trPhrase('Topics Key')),
            h('span', { className: 'text-xs opacity-85' }, keyMenuOpen ? '▲' : '▼')
          ),

          // 2. Search Bar Directly Underneath the Key Symbol
          h(
            'div',
            {
              className: 'w-full flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm',
              style: { border: `2px solid ${palette.accentMedium}` }
            },
            h(
              'svg',
              {
                viewBox: '0 0 20 20',
                className: 'w-4 h-4 shrink-0',
                fill: 'none',
                stroke: palette.headerDark,
                strokeWidth: '2.2'
              },
              h('circle', { cx: '8.5', cy: '8.5', r: '5.5' }),
              h('line', { x1: '12.5', y1: '12.5', x2: '17.5', y2: '17.5', strokeLinecap: 'round' })
            ),
            h('input', {
              type: 'text',
              value: searchQuery,
              onChange: (e) => {
                setSearchQuery(e.target.value);
                setActiveMatchIndex(0);
              },
              placeholder: trPhrase('Search keyword in page...'),
              className: 'w-full text-xs sm:text-sm font-bold bg-transparent focus:outline-none',
              style: { color: palette.inkColor }
            }),
            searchQuery.trim() &&
              h(
                'div',
                { className: 'flex items-center gap-1 shrink-0' },
                h(
                  'span',
                  {
                    className: 'px-2 py-0.5 rounded-full text-[11px] font-extrabold',
                    style: { backgroundColor: palette.tintLight, color: palette.headerDark }
                  },
                  totalMatches > 0 ? `${(activeMatchIndex % totalMatches) + 1}/${totalMatches}` : '0'
                ),
                totalMatches > 1 &&
                  h(
                    'button',
                    {
                      type: 'button',
                      onClick: () => setActiveMatchIndex((prev) => (prev + 1) % totalMatches),
                      className: 'px-1.5 py-0.5 rounded text-xs font-black cursor-pointer',
                      style: { backgroundColor: palette.headerDark, color: '#FFFFFF' },
                      title: 'Next match'
                    },
                    '↓'
                  ),
                h(
                  'button',
                  {
                    type: 'button',
                    onClick: () => {
                      setSearchQuery('');
                      setActiveMatchIndex(0);
                    },
                    className: 'px-1 text-xs font-black cursor-pointer',
                    style: { color: palette.headerDark },
                    title: 'Clear search'
                  },
                  '×'
                )
              )
          ),

          // 3. Unnumbered Sub-Topics Tray (Opens when Key Symbol is clicked)
          keyMenuOpen &&
            h(
              'div',
              {
                className: 'w-full p-3 rounded-2xl shadow-md space-y-2 transition-all',
                style: {
                  backgroundColor: '#FFF0F7',
                  border: `2px solid ${palette.headerDark}`
                }
              },
              h(
                'div',
                {
                  className: 'text-[11px] font-black uppercase tracking-wider',
                  style: { color: palette.headerDark }
                },
                trPhrase('Jump to topic in page:')
              ),
              h(
                'div',
                { className: 'flex flex-wrap gap-1.5' },
                sections.map((sec) =>
                  h(
                    'button',
                    {
                      key: sec.id,
                      type: 'button',
                      onClick: () => scrollToSection(sec.id),
                      className:
                        'px-3 py-1 rounded-full text-xs font-extrabold transition hover:opacity-90 cursor-pointer',
                      style: {
                        backgroundColor: '#FFFFFF',
                        color: palette.headerDark,
                        border: `1.5px solid ${palette.accentMedium}`
                      }
                    },
                    trPhrase(sec.keyLabel || sec.heading)
                  )
                )
              )
            )
        )
      ),

      // Main Long-Form Book-Wrap Body with Left Vertical Timeline Ribbon (Zero Chapters, Zero Numbers)
      h(
        'div',
        {
          className: 'relative mt-4 pl-6 sm:pl-9 space-y-10',
          style: {
            borderLeft: rtl ? 'none' : `4px solid ${palette.timelineLine}`,
            borderRight: rtl ? `4px solid ${palette.timelineLine}` : 'none',
            paddingRight: rtl ? '1.75rem' : undefined
          }
        },
        sections.map((sec, idx) => {
          const floatRight = idx % 2 === 0;
          const floatClass = floatRight
            ? 'float-right ml-5 mb-3 mt-1'
            : 'float-left mr-5 mb-3 mt-1';

          const visualElement = sec.gifSrc
            ? h('img', {
                src: sec.gifSrc,
                alt: trPhrase(sec.keyLabel || sec.heading),
                className: 'w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-full select-none pointer-events-none',
                style: {
                  backgroundColor: palette.tintLight,
                  border: `3px solid ${palette.headerDark}`
                }
              })
            : typeof sec.cartoonRenderer === 'function'
            ? sec.cartoonRenderer()
            : null;

          return h(
            'section',
            {
              key: sec.id,
              ref: (el) => {
                sectionRefs.current[sec.id] = el;
              },
              className: 'relative scroll-mt-6'
            },
            // Timeline Dot on the Left Ribbon
            h('span', {
              'aria-hidden': 'true',
              className: 'w-4 h-4 rounded-full absolute top-1.5',
              style: {
                left: rtl ? undefined : '-33px',
                right: rtl ? '-33px' : undefined,
                backgroundColor: idx % 2 === 0 ? palette.headerDark : palette.accentMedium,
                boxShadow: `0 0 0 3px ${palette.pageBg}`
              }
            }),

            // Unnumbered Section Heading
            h(
              'h2',
              {
                className: 'text-xl sm:text-2xl font-black tracking-tight mb-3 leading-snug',
                style: { color: palette.headerDark }
              },
              renderHighlightedText(
                trPhrase(sec.heading),
                searchQuery,
                matchCounterRef,
                activeMatchIndex
              )
            ),

            // Floated Cartoon / GIF + Long Multi-Paragraph Writing Wrapping Around It
            h(
              'div',
              { className: 'clearfix' },
              visualElement &&
                h(
                  'div',
                  {
                    className: `${floatClass} shrink-0 rounded-full`
                  },
                  visualElement
                ),
              (sec.paragraphs || []).map((para, pIdx) =>
                h(
                  'p',
                  {
                    key: pIdx,
                    className: 'text-sm sm:text-base font-semibold leading-relaxed mb-4',
                    style: { color: palette.inkColor }
                  },
                  renderHighlightedText(
                    trPhrase(para),
                    searchQuery,
                    matchCounterRef,
                    activeMatchIndex
                  )
                )
              ),
              h('div', { style: { clear: 'both' } })
            )
          );
        })
      ),

      // VERY BOTTOM: Quick-Reference Subpage Buttons (Lead to Empty Home Pages for now)
      bottomSubPages.length > 0 &&
        h(
          'div',
          {
            className: 'mt-12 pt-7 pb-8 border-t-2',
            style: { borderColor: palette.timelineLine }
          },
          h(
            'div',
            { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
            bottomSubPages.map((bp, bIdx) =>
              h(
                'button',
                {
                  key: bp.pageId || bIdx,
                  type: 'button',
                  onClick: () => setActiveEmptySubPage(bp),
                  className:
                    'w-full p-5 rounded-2xl text-left transition hover:opacity-95 cursor-pointer shadow-md flex flex-col justify-between gap-1.5',
                  style: {
                    backgroundColor: bIdx % 2 === 0 ? palette.headerDark : palette.accentMedium,
                    color: '#FFFFFF'
                  }
                },
                h(
                  'div',
                  { className: 'text-base sm:text-lg font-black leading-snug flex items-center justify-between gap-2' },
                  h('span', null, trPhrase(bp.title)),
                  h('span', { 'aria-hidden': 'true' }, rtl ? '←' : '→')
                ),
                bp.subtitle &&
                  h(
                    'div',
                    {
                      className: 'text-xs sm:text-sm font-bold',
                      style: { color: palette.tintLight }
                    },
                    trPhrase(bp.subtitle)
                  )
              )
            )
          )
        )
    )
  );
}

export default function PregnancyAfterLossHomePage({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // 5 Deep, Long-Form Multi-Paragraph Sections (No Chapter Labels, No Numbers)
  // Each section has its own custom topic-matched cartoon illustration AND a `gifSrc: null` slot ready for custom GIFs!
  const sections = [
    {
      id: 'new-waves-of-grief',
      keyLabel: 'New Waves of Grief',
      heading: 'When a New Pregnancy Wakes Up Fresh Waves of Grief',
      gifSrc: null, // Ready for custom GIF (e.g. './assets/pal-pregnant-crying.gif')
      cartoonRenderer: renderPregnantWomanCryingCartoonSvg,
      paragraphs: [
        'Between 50% and 80% of women who experience a miscarriage, stillbirth, or infant loss become pregnant again, often within 12 to 18 months of their loss. Yet walking into a new pregnancy after losing a baby is emotionally and physically unlike any other pregnancy. When friends, relatives, or neighbors hear that you are pregnant again, they frequently expect you to feel nothing but pure relief and celebration, as if carrying a new baby erases the heartbreak of the baby who died. In reality, seeing a positive pregnancy test often activates a brand-new wave of grief, confusion, survivor’s guilt, and protective fear.',
        'You may find yourself crying for the baby who is not in your arms while simultaneously thanking your body for the new baby growing inside your womb right now. Many mothers feel a sudden pang of guilt when they realize that their new due date falls in a different season, or that this baby exists only because the previous pregnancy ended. Please know that grieving the baby you lost does not take anything away from your love for this new baby. Every baby is a distinct life, and your heart is large enough to hold deep mourning for the child you lost alongside deep hope for the child you are carrying.',
        'In many cultures around the world, pregnant women are warned to hide their tears or never speak the name of a lost baby out of fear that sadness will bring bad luck or harm the womb. Medically and biologically, crying, remembering your previous baby, or feeling waves of sadness cannot cause a miscarriage or harm your developing baby. Allowing yourself to feel your real emotions honestly actually lowers internal tension and helps you feel less isolated.'
      ]
    },
    {
      id: 'fear-of-bonding',
      keyLabel: 'Fear of Bonding',
      heading: 'Why Feeling Scared of Bonding With This Baby Is Normal',
      gifSrc: null, // Ready for custom GIF (e.g. './assets/pal-fear-of-bonding.gif')
      cartoonRenderer: renderFearOfBondingCartoonSvg,
      paragraphs: [
        'If you have experienced a previous pregnancy or infant loss, your innocence about pregnancy has been shaken: you know firsthand that a positive pregnancy test does not always guarantee bringing a living baby home. Because of that knowledge, many women pregnant after a loss feel terrified to get attached to the new pregnancy. You might hesitate to talk to your belly, avoid buying baby clothes or preparing a space for the baby, delay telling friends and family, or hold your breath and check for blood every single time you walk into the bathroom.',
        'Perinatal psychologists call this protective reflex emotional cushioning. Your brain is trying to shield your heart from future devastation by holding back attachment until it feels convinced that the baby is truly safe. Emotional cushioning is often strongest as you approach the specific week or month of pregnancy when your previous loss occurred. Passing that milestone week can bring sleepless nights, vivid dreams, or physical tension in your chest and shoulders.',
        'Holding back from bonding during pregnancy never means you are cold, ungrateful, or going to have trouble loving your baby once they arrive. It is simply how a traumatized heart protects itself while walking through uncertain territory. Instead of forcing yourself to feel carefree excitement before you are ready, allow yourself to connect in tiny, gentle ways one day at a time, and remind yourself that today you are pregnant and caring for your body.'
      ]
    },
    {
      id: 'partner-stress',
      keyLabel: 'Partner Stress',
      heading: 'How Fathers and Partners Carry Hidden Fear Too',
      gifSrc: null, // Ready for custom GIF (e.g. './assets/pal-partner-stress.gif')
      cartoonRenderer: renderPartnerStressSupportCartoonSvg,
      paragraphs: [
        'Published family and maternal health research shows that fathers and partners are deeply affected by the emotional stress and anxiety of a pregnancy after loss, even when they show it differently on the outside. Because the mother is carrying the pregnancy physically inside her body, partners often feel an intense pressure to act as the unshakeable rock of the household, hiding their own grief, nightmares, and fear of losing another baby, or of losing you, so that they do not add to your worry.',
        'Sometimes a partner’s fear comes out as emotional quietness, changing the subject when you talk about the baby, working long hours, or waiting until late in the third trimester to prepare for the birth. Without open communication, a mother can misread her partner’s protective hesitation as indifference, while the partner silently carries their terror alone.',
        'Talking openly with your partner about how both of you are coping takes away that loneliness. Let your partner know that they do not have to pretend to be fearless around you, invite them to attend prenatal ultrasound and heartbeat visits whenever possible so they can hear the baby’s progress firsthand, and lean on each other when milestone weeks feel heavy.'
      ]
    },
    {
      id: 'prenatal-care',
      keyLabel: 'Prenatal Care',
      heading: 'Why Extra Reassurance Visits Protect Your Pregnancy Physically',
      gifSrc: null, // Ready for custom GIF (e.g. './assets/pal-prenatal-heartbeat.gif')
      cartoonRenderer: renderPrenatalHeartbeatMonitorCartoonSvg,
      paragraphs: [
        'Clinical research demonstrates that women who are pregnant again after a loss experience significantly higher symptoms of pregnancy-specific anxiety compared to women who have never experienced a loss. When severe psychological distress goes unaddressed for months, chronic stress hormones can increase the physical risk of preterm labor and low birth weight. That means caring for your emotional peace of mind during a pregnancy after loss is not vanity or overreacting; it is essential physical prenatal care for both you and your baby.',
        'Schedule your first prenatal visit with a compassionate OB/GYN, midwife, or maternity hospital on your FemPowHer map as early as you feel ready, and share the full story of your previous loss. Depending on when and why your prior loss happened, your provider can check your blood type and Rh factor, test for treatable thyroid, blood sugar, clotting, or infection factors, check cervical length by ultrasound, or prescribe evidence-based support such as daily prenatal folic acid and iron, progesterone supplementation, or low-dose prenatal aspirin.',
        'Most importantly, ask your clinic for a reassurance plan. Many midwives and obstetricians gladly offer brief Doppler heartbeat checks or extra early ultrasounds between standard monthly appointments for mothers who have endured a previous loss. You never need to apologize for walking into a clinic to hear your baby’s heartbeat or to get checked whenever you notice spotting, cramping, or a change in your baby’s kicks.'
      ]
    },
    {
      id: 'postpartum-care',
      keyLabel: 'Postpartum Care',
      heading: 'Why Postpartum Anxiety and Depression Can Happen Even After a Healthy Birth',
      gifSrc: null, // Ready for custom GIF (e.g. './assets/pal-postpartum-care.gif')
      cartoonRenderer: renderPostpartumRainbowCareCartoonSvg,
      paragraphs: [
        'One of the most important findings in perinatal psychiatry is that women who carry a pregnancy after a previous loss remain at an increased risk for postpartum anxiety and postpartum depression even after delivering a healthy, thriving full-term baby. Many mothers are shocked when they finally hold their living newborn in their arms yet still feel waves of panic, exhaustion, tearfulness, or an inability to sleep because they feel they must watch the baby breathe every second of the night.',
        'This happens because your nervous system spent nine straight months braced on high survival alert, waiting for something to go wrong. The moment the placenta is delivered and estrogen and progesterone plummet, nine months of held-in adrenaline and unspoken grief can release all at once. In addition, holding your living baby can bring a sudden bittersweet ache as you see for the first time what you missed with the baby you lost.',
        'Knowing this before you give birth allows you and your family to prepare gentle postpartum support ahead of time. Arrange for trusted loved ones to help with meals and household chores so you can sleep in stretches, tell your midwife or doctor immediately if anxiety or sadness lasts past the first two weeks after delivery, and remember that asking for postpartum mental health care makes you a strong, loving, protective mother.'
      ]
    }
  ];

  // Bottom Quick-Reference Subpages (Located at the very bottom; open empty home pages for now)
  const bottomSubPages = [
    {
      pageId: 'FirstPrenatalVisitAfterLossHomePage1',
      title: 'First Prenatal Visit Checklist',
      subtitle: 'Questions, blood tests & reassurance plan to ask your midwife or OB/GYN'
    },
    {
      pageId: 'PartnerGriefPostpartumAfterLossHomePage1',
      title: 'Partner Grief & Postpartum Care',
      subtitle: 'Supporting each other through milestone weeks and after your baby arrives'
    }
  ];

  return h(LongFormTopicBookWrapPage, {
    pageId: 'PregnancyAfterLossHomePage',
    title: tr('lossBtnPregnantAfterLoss', 'I Am Pregnant After a Loss'),
    sections,
    bottomSubPages,
    palette: {
      pageBg: '#FFFAFC',
      headerDark: '#9F133A',
      accentMedium: '#CF366C',
      tintLight: '#FFE4F0',
      inkColor: '#4A0E24',
      timelineLine: '#F4A2C6'
    },
    onBack,
    UserLanguageChoice1,
    lang,
    t
  });
}
