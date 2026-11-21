import React, { useState, useEffect } from 'https://esm.sh/react@18.3.1';
import { cleanBackLabel, isRtlLanguage } from '../data/translations.js?v=266';
import {
  renderMaleBladderUrethraCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderSwabAndNoAlcoholCartoonSvg,
  translateFlyerPhraseInstant
} from './FlyerCartoonIllustrations.js?v=266';

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

function BrightStdFlyerPageComponent({
  pageId,
  title,
  gifSrc,
  bgGradient,
  bgColor,
  titleTintColor,
  extraGraphic = null,
  sections = [],
  onBack,
  onShowNearestClinic = null,
  speakingId = null,
  speakText = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const activeCode =
    (UserLanguageChoice1 && typeof UserLanguageChoice1 === 'object' && UserLanguageChoice1.code) ||
    lang ||
    'en';
  const tlTarget = resolveTranslateTargetCode(activeCode, UserLanguageChoice1);
  const rtl = isRtlLanguage(activeCode, UserLanguageChoice1?.writtenLanguage);

  const [translatedMap, setTranslatedMap] = useState({});

  useEffect(() => {
    if (!tlTarget || tlTarget === 'en') {
      setTranslatedMap({});
      return;
    }

    const cacheKey = `fempowher_flyer_i18n_v215_${pageId}_${tlTarget}`;
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

    // Collect all strings on this flyer page (title, headings, paragraphs, sticker labels, inner sticker words, bottom button)
    const phrasesToTranslate = [];
    const addPhrase = (p) => {
      if (p && typeof p === 'string' && !phrasesToTranslate.includes(p)) {
        phrasesToTranslate.push(p);
      }
    };

    addPhrase(title);
    sections.forEach((sec) => {
      addPhrase(sec.heading);
      addPhrase(sec.body);
      addPhrase(sec.stickerLabel);
      addPhrase(sec.stickerInnerTop);
      addPhrase(sec.stickerInnerBottom);
    });
    addPhrase('Find Nearest Women’s Clinic or Hospital on Map →');

    if (phrasesToTranslate.length === 0) return;

    let cancelled = false;
    // Use newline delimiter to translate all headings, paragraphs, and sticker words in a single request
    const payload = phrasesToTranslate.join('\n');
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
        phrasesToTranslate.forEach((orig, idx) => {
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

  // Translate any string on the page or inside a cartoon sticker into UserLanguageChoice1
  const trPhrase = (phrase) => {
    if (!phrase) return '';
    if (tlTarget === 'en' && activeCode === 'en') return phrase;
    if (translatedMap && translatedMap[phrase]) {
      return translatedMap[phrase];
    }
    const instant = translateFlyerPhraseInstant(phrase, activeCode, UserLanguageChoice1);
    if (instant && instant !== phrase) {
      return instant;
    }
    return phrase;
  };

  const displayTitle = trPhrase(title);
  const fullAudioText = [
    displayTitle,
    ...sections.map((s) => `${trPhrase(s.heading)}. ${trPhrase(s.body)}`)
  ].join('. ');

  return h(
    'div',
    {
      id: pageId,
      dir: rtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 flex flex-col px-5 sm:px-10 py-6 sm:py-8 select-text overflow-x-hidden',
      style: {
        background: bgGradient || bgColor || '#FA2D48',
        backgroundColor: bgColor || '#FA2D48',
        color: '#FFFFFF'
      }
    },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto' },
      // Top Row: Back Button + Optional Listen Aloud Button (UserLanguageChoice1)
      h(
        'div',
        { className: 'flex items-center justify-between gap-3 flex-wrap' },
        h(
          'button',
          {
            type: 'button',
            onClick: onBack,
            className:
              'px-4 py-1.5 rounded-full font-extrabold text-xs sm:text-sm transition hover:opacity-90 flex items-center gap-1.5 cursor-pointer',
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.22)',
              color: '#FFFFFF',
              border: '1.5px solid rgba(255, 255, 255, 0.65)'
            }
          },
          h('span', { 'aria-hidden': 'true' }, rtl ? '→' : '←'),
          h('span', null, cleanBackLabel(t?.backBtn || t?.eduBackBtn, activeCode))
        ),
        typeof speakText === 'function' &&
          h(
            'button',
            {
              type: 'button',
              onClick: () => speakText(pageId, fullAudioText),
              className:
                'px-4 py-1.5 rounded-full font-extrabold text-xs sm:text-sm transition hover:opacity-90 cursor-pointer',
              style: {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.65)'
              }
            },
            speakingId === pageId
              ? t?.stopAudioBtn || trPhrase('Stop Audio')
              : t?.listenAudioBtn || trPhrase('Listen Aloud (Audio Guide)')
          )
      ),

      // Main Title + Floating Character GIF directly on the bright background
      h(
        'div',
        {
          className:
            'mt-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 pb-2'
        },
        h(
          'div',
          { className: 'text-center sm:text-start flex-1' },
          h(
            'h1',
            {
              className: 'text-3xl sm:text-5xl font-black tracking-tight leading-none',
              style: {
                color: '#FFFFFF',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.18)'
              }
            },
            displayTitle
          )
        ),
        gifSrc &&
          h('img', {
            src: gifSrc,
            alt: displayTitle,
            className: 'h-36 sm:h-44 w-auto object-contain select-none pointer-events-none shrink-0',
            style: {
              filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.18))'
            }
          })
      ),

      // Flowing Flyer Sections: Bolded Tinted-White Titles + Pure White Paragraphs + Varied Left/Right Side Cartoon Stickers
      h(
        'div',
        { className: 'space-y-6' },
        (() => {
          let graphicCounter = 0;
          return sections.map((sec, idx) => {
            const translatedSticker = sec.stickerLabel ? trPhrase(sec.stickerLabel) : undefined;
            const translatedInnerTop = sec.stickerInnerTop ? trPhrase(sec.stickerInnerTop) : undefined;
            const translatedInnerBottom = sec.stickerInnerBottom ? trPhrase(sec.stickerInnerBottom) : undefined;

            const sectionGraphic =
              typeof sec.graphicRenderer === 'function'
                ? sec.graphicRenderer(translatedSticker, translatedInnerTop, translatedInnerBottom)
                : sec.graphic || (sec.withGraphic ? extraGraphic : null);

            // Vary cartoon placement across the page (Right of text -> Left of text -> Right of text -> Below/Left)
            // just like the WHO flyer where the fish sits on the right and the bladder sits on the left.
            let placement = sec.graphicPlacement || null;
            if (sectionGraphic && !placement) {
              const cycle = graphicCounter % 4;
              placement = cycle === 0 ? 'right' : cycle === 1 ? 'left' : cycle === 2 ? 'right' : 'left-bottom';
              graphicCounter += 1;
            }

            const rowLayoutClass = !sectionGraphic
              ? 'block'
              : placement === 'left'
              ? 'flex flex-row-reverse items-center justify-between gap-3.5 sm:gap-6'
              : placement === 'left-bottom'
              ? 'flex flex-col sm:flex-row-reverse items-center justify-between gap-3.5 sm:gap-6'
              : 'flex flex-row items-center justify-between gap-3.5 sm:gap-6';

            return h(
              'div',
              {
                key: sec.id || idx,
                className: 'pb-2'
              },
              h(
                'div',
                {
                  className: rowLayoutClass
                },
                h(
                  'div',
                  { className: 'flex-1 min-w-0' },
                  h(
                    'h2',
                    {
                      className: 'text-xl sm:text-2xl font-black tracking-tight mb-2 flex items-center gap-2.5 flex-wrap',
                      style: {
                        color: titleTintColor || '#FFD4DC',
                        textShadow: '0 1px 6px rgba(0, 0, 0, 0.22)'
                      }
                    },
                    h('span', null, trPhrase(sec.heading)),
                    sec.headingIcon || null
                  ),
                  h(
                    'p',
                    {
                      className: 'text-sm sm:text-base font-semibold leading-relaxed',
                      style: { color: '#FFFFFF' }
                    },
                    trPhrase(sec.body)
                  )
                ),
                sectionGraphic &&
                  h(
                    'div',
                    {
                      className:
                        'shrink-0 flex items-center justify-center max-w-[38%] sm:max-w-none'
                    },
                    sectionGraphic
                  )
              )
            );
          });
        })()
      ),

      // Bottom Direct Action Link (Translated in UserLanguageChoice1)
      typeof onShowNearestClinic === 'function' &&
        h(
          'div',
          { className: 'mt-8 pt-2 pb-6 flex justify-center sm:justify-start' },
          h(
            'button',
            {
              type: 'button',
              onClick: onShowNearestClinic,
              className:
                'px-6 py-2.5 rounded-full font-black text-sm sm:text-base transition hover:opacity-95 cursor-pointer',
              style: {
                backgroundColor: '#FFFFFF',
                color: bgColor || '#E01E3C',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)'
              }
            },
            t?.findNearestClinicBtn || trPhrase('Find Nearest Women’s Clinic or Hospital on Map →')
          )
        )
    )
  );
}

// ============================================================================
// FlyerSTDstyleCartoonCaller1:
// Official Reusable Flyer Info Page Caller & Component Style:
// - Full-bleed bright dock-icon / WHO-flyer background color (zero rounded-corner white/pink bubble cards)
// - Animated transparent character GIF floating directly on the bright background next to the main title
// - Bolded section titles colored in white mixed with the background color (titleTintColor)
// - Pure white (#FFFFFF) flowing sentences/paragraphs underneath (zero bullet points, zero long hyphens, zero divider lines)
// - 3 to 4 custom topic-connected cartoons/stickers placed alongside sections on the page (plus inline headingIcon like the pregnant lady icon)
// - 100% UserLanguageChoice1 translation for every word on the flyer AND every word inside the cartoon stickers
// ============================================================================
export function FlyerSTDstyleCartoonCaller1(props) {
  return h(BrightStdFlyerPageComponent, props);
}

export const renderBrightStdFlyerPage = FlyerSTDstyleCartoonCaller1;

if (typeof window !== 'undefined') {
  window.FlyerSTDstyleCartoonCaller1 = FlyerSTDstyleCartoonCaller1;
}

// Cute flat blue fish illustration matching the WHO Trichomonas flyer
export function renderCuteFlyerFishSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 80',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M142 40 L174 16 L166 40 L174 64 Z',
      fill: '#23599E'
    }),
    h('path', {
      d: 'M72 19 C92 8, 118 10, 130 24 Z',
      fill: '#23599E'
    }),
    h('path', {
      d: 'M105 58 L128 65 L122 53 Z',
      fill: '#23599E'
    }),
    h('path', {
      d: 'M12 38 C32 14, 104 12, 148 40 C104 68, 32 64, 12 43 L24 40 Z',
      fill: '#A3BCE8'
    }),
    h('path', {
      d: 'M52 24 C60 36, 58 48, 48 56',
      stroke: '#23599E',
      strokeWidth: '3',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M65 42 L84 35 L82 49 Z',
      fill: '#23599E'
    }),
    h('circle', { cx: '32', cy: '34', r: '6', fill: '#FFFFFF' }),
    h('circle', { cx: '31', cy: '34', r: '3.5', fill: '#222222' }),
    h('circle', { cx: '88', cy: '28', r: '2', fill: '#FFFFFF', opacity: '0.85' }),
    h('circle', { cx: '102', cy: '31', r: '2', fill: '#FFFFFF', opacity: '0.85' }),
    h('circle', { cx: '115', cy: '27', r: '2', fill: '#FFFFFF', opacity: '0.85' }),
    h('circle', { cx: '96', cy: '48', r: '2', fill: '#FFFFFF', opacity: '0.85' }),
    h('circle', { cx: '110', cy: '51', r: '2', fill: '#FFFFFF', opacity: '0.85' })
  );
}

export default function TrichomonasHomePage1({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  const sections = [
    {
      id: 'what-is',
      heading: 'What is Trichomonas?',
      body:
        'Trichomoniasis (often called "Trich") is a very common, completely curable sexually transmitted infection caused by a microscopic single-celled protozoan parasite named Trichomonas vaginalis. Unlike viral infections, it is a living microscopic parasite that travels between partners during sexual contact, most commonly infecting the lower genital tract (the vulva, vagina, cervix, or urethra) in women and the inside of the urethra in men.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      graphic: renderCuteFlyerFishSvg(),
      body:
        'About 70% of people infected with Trichomonas do not notice any signs at first, or symptoms may appear 5 to 28 days after exposure. When symptoms occur in women, they typically include a thin or frothy vaginal discharge that may look yellow, green, or gray and often carries a distinct fishy smell. The vagina and outer lips (vulva) may feel red, raw, swollen, and intensely itchy, accompanied by burning or pain when urinating or during sexual intercourse.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'Trichomonas is cured with prescription oral antibiotic medication, specifically metronidazole or tinidazole tablets, taken either as a single dose or over 7 days. You can get tested and treated at any OB/GYN clinic, public sexual health clinic, community health center, or maternity hospital on the FemPowHer map. Both you and your sexual partner(s) must take the antibiotic treatment at the same time and wait at least 7 days after finishing the medication before having sex again so the parasite is not passed back and forth.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'Without antibiotic treatment, a Trichomonas infection can last for months or even years. Chronic inflammation of the vaginal and cervical tissue weakens the body’s natural protective barrier, making a woman two to three times more vulnerable to contracting HIV and other sexually transmitted infections if exposed, and can contribute to ongoing pelvic inflammation and cervical irritation.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      graphic: renderMaleBladderUrethraCartoonSvg(),
      body:
        'Most men with Trichomonas have no symptoms at all and do not realize they are carrying and transmitting the parasite to their female partners. When men do develop symptoms, they experience itching or irritation inside the penis, an inflamed urethra (urethritis), a mild clear or whitish penile discharge, and burning during urination or after ejaculation.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#FFC4CB'),
      body:
        'Pregnant women with untreated Trichomonas have a higher risk of premature rupture of membranes (the water breaking too early), preterm labor (delivering before 37 weeks), and having a baby born with a low birth weight. In rare cases, the baby can pick up the infection while passing through the birth canal. Tell your midwife or doctor if you notice unusual discharge during pregnancy so you can receive safe prenatal antibiotic treatment.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      stickerLabel: 'SWAB TEST & NO ALCOHOL',
      graphicRenderer: (sticker) => renderSwabAndNoAlcoholCartoonSvg(sticker),
      body:
        'If you notice frothy or yellowish-green discharge, a strong fishy odor, or vaginal itching and burning, visit a local clinic for a quick, painless swab test rather than using over-the-counter yeast creams or douching (which will not cure Trichomonas and can worsen irritation). Take every pill of your prescribed antibiotic, avoid alcohol while taking metronidazole or tinidazole to prevent severe nausea, and make sure your partner is treated before resuming sex.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'TrichomonasHomePage1',
    title: tr('eduBtnTrichomonas', 'Trichomonas'),
    gifSrc: './assets/std-trichomonas.gif?v=266',
    bgGradient: 'linear-gradient(180deg, #F42B3E 0%, #DA1C2E 100%)',
    bgColor: '#E62235',
    titleTintColor: '#FFC4CB',
    sections,
    onBack,
    onShowNearestClinic,
    speakingId,
    speakText,
    UserLanguageChoice1,
    lang,
    t
  });
}
