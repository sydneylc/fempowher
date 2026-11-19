import React from 'https://esm.sh/react@18.3.1';
import { cleanBackLabel, isRtlLanguage } from '../data/translations.js?v=214';
import {
  renderMaleBladderUrethraCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderSwabAndNoAlcoholCartoonSvg
} from './FlyerCartoonIllustrations.js?v=214';

const h = React.createElement;

// Shared Full-Bleed Bright Flyer Layout for STD & Reproductive Disease Education Pages
// - Vivid dock-icon background color (no rounded-corner white/pink bubble cards)
// - Animated transparent character GIF floating directly on the colored background
// - Bolded section titles in white mixed with the background color (plus optional inline headingIcon)
// - Pure white paragraph/sentence writing underneath (no bullet points, no long hyphens)
// - Custom flat-vector cartoon illustrations alongside 3 to 4 sections on every page
export function renderBrightStdFlyerPage({
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
  lang = 'en',
  t = {}
}) {
  const rtl = isRtlLanguage(lang);
  const fullAudioText = [title, ...sections.map((s) => `${s.heading}. ${s.body}`)].join('. ');

  return h(
    'div',
    {
      id: pageId,
      dir: rtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 flex flex-col px-5 sm:px-10 py-6 sm:py-8 select-text',
      style: {
        background: bgGradient || bgColor || '#FA2D48',
        backgroundColor: bgColor || '#FA2D48',
        color: '#FFFFFF'
      }
    },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto' },
      // Top Row: Back Button + Optional Listen Aloud Button
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
          h('span', null, cleanBackLabel(t?.eduBackBtn))
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
              ? t?.stopAudioBtn || 'Stop Audio'
              : t?.listenAudioBtn || 'Listen Aloud (Audio Guide)'
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
            title
          )
        ),
        gifSrc &&
          h('img', {
            src: gifSrc,
            alt: title,
            className: 'h-36 sm:h-44 w-auto object-contain select-none pointer-events-none shrink-0',
            style: {
              filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.18))'
            }
          })
      ),

      // Flowing Flyer Sections: Bolded Tinted-White Titles + Pure White Paragraphs + Custom Cartoon Illustrations
      h(
        'div',
        { className: 'space-y-6' },
        sections.map((sec, idx) => {
          const sectionGraphic = sec.graphic || (sec.withGraphic ? extraGraphic : null);
          return h(
            'div',
            {
              key: sec.id || idx,
              className: 'pb-2'
            },
            h(
              'div',
              {
                className: sectionGraphic
                  ? 'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'
                  : 'block'
              },
              h(
                'div',
                { className: 'flex-1' },
                h(
                  'h2',
                  {
                    className: 'text-xl sm:text-2xl font-black tracking-tight mb-2 flex items-center gap-2.5 flex-wrap',
                    style: {
                      color: titleTintColor || '#FFD4DC',
                      textShadow: '0 1px 6px rgba(0, 0, 0, 0.22)'
                    }
                  },
                  h('span', null, sec.heading),
                  sec.headingIcon || null
                ),
                h(
                  'p',
                  {
                    className: 'text-sm sm:text-base font-semibold leading-relaxed',
                    style: { color: '#FFFFFF' }
                  },
                  sec.body
                )
              ),
              sectionGraphic
            )
          );
        })
      ),

      // Bottom Direct Action Link (Clean Flat Flyer Link to Nearest Clinic on Map)
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
            t?.findNearestClinicBtn || 'Find Nearest Women’s Clinic or Hospital on Map →'
          )
        )
    )
  );
}

// Cute flat blue fish illustration matching the WHO Trichomonas flyer
export function renderCuteFlyerFishSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 80',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Tail fin
    h('path', {
      d: 'M142 40 L174 16 L166 40 L174 64 Z',
      fill: '#23599E'
    }),
    // Top dorsal fin
    h('path', {
      d: 'M72 19 C92 8, 118 10, 130 24 Z',
      fill: '#23599E'
    }),
    // Bottom fin
    h('path', {
      d: 'M105 58 L128 65 L122 53 Z',
      fill: '#23599E'
    }),
    // Main fish body
    h('path', {
      d: 'M12 38 C32 14, 104 12, 148 40 C104 68, 32 64, 12 43 L24 40 Z',
      fill: '#A3BCE8'
    }),
    // Gill curve
    h('path', {
      d: 'M52 24 C60 36, 58 48, 48 56',
      stroke: '#23599E',
      strokeWidth: '3',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Side pectoral fin
    h('path', {
      d: 'M65 42 L84 35 L82 49 Z',
      fill: '#23599E'
    }),
    // Eye
    h('circle', { cx: '32', cy: '34', r: '6', fill: '#FFFFFF' }),
    h('circle', { cx: '31', cy: '34', r: '3.5', fill: '#222222' }),
    // White scale dots
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
      graphic: renderPartnerPillsCartoonSvg(),
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
      graphic: renderSwabAndNoAlcoholCartoonSvg(),
      body:
        'If you notice frothy or yellowish-green discharge, a strong fishy odor, or vaginal itching and burning, visit a local clinic for a quick, painless swab test rather than using over-the-counter yeast creams or douching (which will not cure Trichomonas and can worsen irritation). Take every pill of your prescribed antibiotic, avoid alcohol while taking metronidazole or tinidazole to prevent severe nausea, and make sure your partner is treated before resuming sex.'
    }
  ];

  return renderBrightStdFlyerPage({
    pageId: 'TrichomonasHomePage1',
    title: tr('eduBtnTrichomonas', 'Trichomonas'),
    gifSrc: './assets/std-trichomonas.gif?v=214',
    // Bright Apple-Music / WHO Flyer Red-Coral background (#F42B3E -> #DA1C2E)
    bgGradient: 'linear-gradient(180deg, #F42B3E 0%, #DA1C2E 100%)',
    bgColor: '#E62235',
    // White mixed with the red background for bolded section titles
    titleTintColor: '#FFC4CB',
    sections,
    onBack,
    onShowNearestClinic,
    speakingId,
    speakText,
    lang,
    t
  });
}
