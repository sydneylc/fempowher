import React, { useState, useEffect } from 'https://esm.sh/react@18.3.1';
import { isRtlLanguage, cleanBackLabel } from '../data/translations.js?v=278';

const h = React.createElement;

export function renderSubpageBackButton(onBack, t = {}, lang = 'en') {
  const isRtl = isRtlLanguage(lang);
  return h(
    'div',
    { className: 'w-full flex items-center justify-start sticky top-0 z-20 bg-white/95 py-1.5' },
    h(
      'button',
      {
        type: 'button',
        onClick: onBack,
        className: 'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition shadow-sm cursor-pointer hover:opacity-95',
        style: { backgroundColor: '#9F133A', color: '#FFFFFF', border: '2px solid #FEACEC' }
      },
      h('span', { 'aria-hidden': 'true' }, isRtl ? '→' : '←'),
      h('bdi', null, cleanBackLabel(t.backBtn, lang))
    )
  );
}

export function renderEducationIssueCards({
  issues = [],
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  return h(
    'div',
    { className: 'space-y-4 mt-6' },
    issues.map((issue) => {
      const titleTxt = issue.title?.[lang] || issue.title?.en || '';
      const normTxt = issue.normalVsAbnormal?.[lang] || issue.normalVsAbnormal?.en || '';
      const flagsList = issue.redFlags?.[lang] || issue.redFlags?.en || [];
      const careTxt = issue.selfCare?.[lang] || issue.selfCare?.en || '';
      const fullSpeech = `${titleTxt}. ${normTxt}. ${t.whenToSeekHelp || ''} ${flagsList.join('. ')}. ${careTxt}`;

      return h(
        'div',
        {
          key: issue.id,
          className: 'bg-white rounded-3xl p-5 border-2 shadow-sm space-y-4',
          style: { borderColor: '#CF366C' }
        },
        h(
          'div',
          { className: 'flex flex-wrap items-start justify-between gap-3' },
          h(
            'div',
            { className: 'flex items-center gap-2.5' },
            h('h3', { className: 'text-lg font-bold leading-snug', style: { color: '#9F133A' } }, titleTxt)
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: () => speakText(`issue-${issue.id}`, fullSpeech),
              className: 'px-4 py-2 rounded-2xl font-bold text-xs flex items-center gap-1.5 shadow-sm shrink-0',
              style: { backgroundColor: '#FEACEC', color: '#9F133A' }
            },
            speakingId === `issue-${issue.id}` ? t.stopAudioBtn : t.listenAudioBtn
          )
        ),
        h(
          'div',
          {
            className: 'p-3.5 rounded-2xl border',
            style: { backgroundColor: '#FFF5FC', borderColor: '#FEACEC' }
          },
          h('div', { className: 'text-xs font-bold uppercase mb-1', style: { color: '#CF366C' } }, `${t.normalVsAbnormal}`),
          h('p', { className: 'text-sm leading-relaxed font-bold', style: { color: '#9F133A' } }, normTxt)
        ),
        h(
          'div',
          {
            className: 'p-4 rounded-2xl border-2',
            style: { backgroundColor: '#9F133A', borderColor: '#CF366C', color: '#FFFFFF' }
          },
          h('div', { className: 'text-xs font-bold uppercase mb-2', style: { color: '#FEACEC' } }, t.whenToSeekHelp),
          h(
            'ul',
            { className: 'space-y-1.5' },
            flagsList.map((rf, idx) =>
              h(
                'li',
                { key: idx, className: 'text-sm font-bold flex items-start gap-2', style: { color: '#FFFFFF' } },
                h('span', { style: { color: '#FEACEC' } }, '-'),
                rf
              )
            )
          )
        ),
        h(
          'div',
          {
            className: 'p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3',
            style: { backgroundColor: '#FFF0FA', borderColor: '#CF366C' }
          },
          h(
            'div',
            null,
            h('div', { className: 'text-xs font-bold uppercase mb-1', style: { color: '#CF366C' } }, `${t.selfCareSteps}`),
            h('p', { className: 'text-xs sm:text-sm font-bold leading-relaxed', style: { color: '#9F133A' } }, careTxt)
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: onShowNearestClinic,
              className: 'px-4 py-3 rounded-2xl text-white font-bold text-xs shrink-0 shadow-md',
              style: { backgroundColor: '#9F133A' }
            },
            t.findClinicForThis
          )
        )
      );
    })
  );
}

// ============================================================================
// PregHomePageButtons / MakingGifButtons1:
// Reusable full-width, zero-outline, large-GIF banner button stack.
// - Every button across the entire app remains the exact tall height and large GIF
//   scale of the 3 PregnancyHomePage buttons (`clamp(230px, calc((100vh - 175px) / 3), 275px)`).
// - When a page has more than 3 buttons (4, 5, 6, or 8), the buttons never shrink;
//   the user simply scrolls down.
// - Supports placing the GIF on either side of the words (`sec.gifSide: 'left' | 'right'`).
// - Automatically translates all button labels and subLabels into UserLanguageChoice1.
// ============================================================================
export function PregHomePageButtons({
  sections = [],
  onSelectSection = () => {},
  containerClassName = 'w-full grid'
}) {
  const rowCount = Math.max(1, sections.length || 3);
  const standardPregButtonRowHeight = 'clamp(230px, calc((100vh - 175px) / 3), 275px)';

  // Live UserLanguageChoice1 translation fallback for any button label/subLabel on any page
  const [translatedLabels, setTranslatedLabels] = useState({});
  const docLang =
    (typeof document !== 'undefined' && document.documentElement && document.documentElement.lang) || 'en';

  useEffect(() => {
    const code = String(docLang || 'en').toLowerCase().trim();
    if (!code || code === 'en') {
      setTranslatedLabels({});
      return;
    }
    const tlTarget = code === 'prs' ? 'fa' : code === 'rhg' ? 'bn' : code;
    const phrases = [];
    sections.forEach((sec) => {
      if (sec.label && typeof sec.label === 'string' && !phrases.includes(sec.label)) {
        phrases.push(sec.label);
      }
      if (sec.subLabel && typeof sec.subLabel === 'string' && !phrases.includes(sec.subLabel)) {
        phrases.push(sec.subLabel);
      }
      if (sec.splitRightButton) {
        const rb = sec.splitRightButton;
        if (rb.label && typeof rb.label === 'string' && !phrases.includes(rb.label)) {
          phrases.push(rb.label);
        }
        if (rb.subLabel && typeof rb.subLabel === 'string' && !phrases.includes(rb.subLabel)) {
          phrases.push(rb.subLabel);
        }
      }
    });
    if (phrases.length === 0) return;

    const cacheKey = `fempowher_gifbtns_i18n_v228_${tlTarget}_${phrases.join('|').slice(0, 120)}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setTranslatedLabels(JSON.parse(cached));
        return;
      }
    } catch (e) {}

    let cancelled = false;
    fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
        tlTarget
      )}&dt=t&q=${encodeURIComponent(phrases.join('\n'))}`
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
        setTranslatedLabels(mapObj);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(mapObj));
        } catch (e) {}
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [docLang, sections.map((s) => `${s.id}:${s.label || ''}:${s.subLabel || ''}`).join('|')]);

  const trBtnText = (txt) => {
    if (!txt) return '';
    return translatedLabels[txt] || txt;
  };

  const renderSingleGifBannerBtn = (btnObj, isHalfWidth = false) => {
    const gifOnRight = btnObj.gifSide === 'right';
    return h(
      'button',
      {
        key: btnObj.id,
        type: 'button',
        onClick: () => {
          if (typeof btnObj.onClick === 'function') {
            btnObj.onClick(btnObj);
          } else {
            onSelectSection(btnObj);
          }
        },
        className:
          'w-full h-full min-h-[230px] relative overflow-hidden flex items-center justify-center px-3 sm:px-6 py-0 m-0 cursor-pointer transition hover:brightness-[0.99] focus:outline-none border-0 rounded-none',
        style: btnObj.backgroundStyle || { backgroundColor: '#FCE4F4', border: 'none' }
      },
      h(
        'div',
        {
          className: `w-full h-full max-w-4xl mx-auto flex ${
            gifOnRight ? 'flex-row-reverse' : 'flex-row'
          } items-center justify-center gap-3 sm:gap-6`
        },
        btnObj.gifSrc &&
          h(
            'div',
            {
              className: 'h-full flex items-center justify-center shrink-0 z-10'
            },
            h('img', {
              src: btnObj.gifSrc,
              alt: trBtnText(btnObj.label) || '',
              className:
                btnObj.imgClassName ||
                'h-[106%] sm:h-[112%] w-auto max-w-none object-contain select-none pointer-events-none',
              style: btnObj.imgStyle || undefined
            })
          ),
        h(
          'div',
          {
            className: btnObj.gifSrc
              ? 'flex flex-col items-center justify-center text-center z-10 max-w-[54%] sm:max-w-[58%]'
              : 'flex flex-col items-center justify-center text-center z-10 max-w-[90%] sm:max-w-[85%]'
          },
          h(
            'span',
            {
              className:
                btnObj.labelClassName ||
                (isHalfWidth
                  ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight'
                  : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight'),
              style: btnObj.textStyle || {
                color: '#9F133A',
                textShadow: '0 1px 8px rgba(255, 255, 255, 0.85)'
              }
            },
            trBtnText(btnObj.label)
          ),
          btnObj.subLabel &&
            h(
              'span',
              {
                className:
                  btnObj.subLabelClassName ||
                  'text-xs sm:text-sm md:text-base font-extrabold leading-snug mt-1',
                style:
                  btnObj.subTextStyle ||
                  btnObj.textStyle || {
                    color: '#9F133A',
                    textShadow: '0 1px 8px rgba(255, 255, 255, 0.85)'
                  }
              },
              trBtnText(btnObj.subLabel)
            )
        )
      )
    );
  };

  return h(
    'div',
    {
      className: 'w-full grid shrink-0',
      style: {
        gridTemplateRows: `repeat(${rowCount}, ${standardPregButtonRowHeight})`
      }
    },
    sections.map((sec) => {
      if (sec.splitRightButton) {
        return h(
          'div',
          {
            key: `${sec.id}-split-row`,
            className: 'w-full h-full min-h-[230px] grid grid-cols-2'
          },
          renderSingleGifBannerBtn(sec, true),
          renderSingleGifBannerBtn(sec.splitRightButton, true)
        );
      }
      return renderSingleGifBannerBtn(sec, false);
    })
  );
}

export const MakingGifButtons1 = PregHomePageButtons;

export default function PregnancyHomePage({
  onBack,
  onNavigateEducationPage = null,
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

  const fullScreenSections = [
    {
      id: 'questions',
      label: tr('pregFeelQuestions', 'I have questions'),
      targetPage: 'QuestionsPregHomePage',
      gifSrc: './assets/pregnancy-questions.gif?v=278',
      // Tone 1: Light Apple-Mint Green (#B2EAA2) — zero outline, matches the GIF background seamlessly
      backgroundStyle: {
        backgroundColor: '#B2EAA2',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.85)'
      }
    },
    {
      id: 'feeling-good',
      label: tr('pregFeelGood', "I'm feeling good"),
      targetPage: 'FeelingGoodPregHomePage',
      gifSrc: './assets/pregnancy-feeling-good.gif?v=278',
      // Tone 2: Emerald-Mint Green (#50D5A2) with Dark Olive Green Grass (#546414) — zero outline
      backgroundStyle: {
        background:
          'linear-gradient(180deg, #50D5A2 0%, #50D5A2 65.5%, #5E7018 65.5%, #546414 93.8%, #50D5A2 93.8%, #50D5A2 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.9)'
      }
    },
    {
      id: 'hard-time',
      label: tr('pregFeelHardTime', "I'm having a hard time"),
      targetPage: 'HardTimePregHomePage',
      gifSrc: './assets/pregnancy-hard-time.gif?v=278',
      // Tone 3: Deep Teal-Green (#0DAA8D) with Olive floor horizon & bright lime (#BEFE62) rug/leaves in GIF
      backgroundStyle: {
        background:
          'linear-gradient(180deg, #0DAA8D 0%, #0DAA8D 92.8%, #546414 92.8%, #546414 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(8, 95, 78, 0.65)'
      }
    }
  ];

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden' },
    // Top Header Bar: Back Button + Pregnancy Title (UserLanguageChoice1) + Centered Question (UserLanguageChoice1)
    h(
      'div',
      { className: 'w-full px-4 sm:px-6 pt-3 pb-2 shrink-0 bg-white' },
      h(
        'div',
        { className: 'max-w-5xl w-full mx-auto' },
        renderSubpageBackButton(onBack, t, lang),
        h(
          'h1',
          {
            className: 'text-2xl sm:text-3xl font-extrabold text-center mt-0.5',
            style: { color: '#9F133A' }
          },
          tr('eduBtnPregnancy', 'Pregnancy')
        ),
        h(
          'p',
          {
            className: 'text-sm sm:text-base md:text-lg font-bold text-center mt-1 leading-snug',
            style: { color: '#CF366C' }
          },
          tr('pregFeelingQuestion', 'Every pregnancy is different, how are you feeling about yours?')
        )
      )
    ),
    h(PregHomePageButtons, {
      sections: fullScreenSections,
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    })
  );
}
