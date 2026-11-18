import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  LANGUAGES,
  AGE_GROUPS,
  WORLD_LANGUAGE_SUGGESTIONS,
  inferLanguageNameFromNationAndRegion,
  mapWrittenLanguageToUiCode,
  UI_TEXT,
  isRtlLanguage,
  cleanBackLabel
} from '../data/translations.js?v=205';

const h = React.createElement;

// ============================================================================
// AnonPage1 — Clean #CF366C background, no red surrounding box.
// Descending list:
//   1. Top button: "Just Go Anonymously!"-> leads to TotalAnon (whole planet in English)
//   2. Four entering questions:
//        - What nation you are in
//        - Region
//        - Language (Open writable text input + autocomplete datalist of 250+ languages!
//          Auto-populates from Nation + Region, e.g. Massachusetts USA -> English,
//          Balochistan Pakistan -> Balochi, Garhwal India -> Garhwali, Tigray -> Tigrinya,
//          and you can freely write in ANY language or dialect!)
//        - Age Group
//   3. Bottom button: "Go Precise Anonymously!"-> leads to the exact area & specifications entered
// ============================================================================
export default function AnonPage1({
  lang,
  setLang,
  ageGroup,
  setAgeGroup,
  onBack,
  onJustGoTotalAnon,
  onGoPreciseAnon
}) {
  const [nation, setNation] = useState('');
  const [region, setRegion] = useState('');
  const [writtenLanguage, setWrittenLanguage] = useState('English');
  const [isLocating, setIsLocating] = useState(false);

  const langObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  // Auto-populate Language text box whenever Nation or Region changes
  const handleNationChange = (val) => {
    setNation(val);
    const { displayName, uiCode } = inferLanguageNameFromNationAndRegion(val, region);
    setWrittenLanguage(displayName);
    setLang(uiCode);
  };

  const handleRegionChange = (val) => {
    setRegion(val);
    const { displayName, uiCode } = inferLanguageNameFromNationAndRegion(nation, val);
    setWrittenLanguage(displayName);
    setLang(uiCode);
  };

  // Allow user to freely write in ANY language (e.g. Tigrinya, Garhwali, Pashto, etc.)
  const handleWrittenLanguageChange = (val) => {
    setWrittenLanguage(val);
    setLang(mapWrittenLanguageToUiCode(val));
  };

  const handlePreciseSubmit = async (e) => {
    e.preventDefault();
    setIsLocating(true);
    await onGoPreciseAnon({
      nation: nation.trim(),
      region: region.trim(),
      lang,
      writtenLanguage: writtenLanguage.trim() || 'English',
      ageGroup
    });
    setIsLocating(false);
  };

  const t = UI_TEXT[lang] || UI_TEXT.en;
  const isRtl = isRtlLanguage(lang, writtenLanguage);

  return h(
    'div',
    {
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-screen w-full flex flex-col justify-between items-center px-4 py-6 select-none',
      style: { backgroundColor: '#CF366C', color: '#FEACEC'}
    },
    // Top-start clean Back button (no bubble)
    h(
      'div',
      { className: 'w-full max-w-md flex items-center justify-start'},
      h(
        'button',
        {
          type: 'button',
          onClick: onBack,
          className: 'inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer bg-transparent border-0 p-0 hover:opacity-80',
          style: { color: '#FEACEC'}
        },
        h('span', { 'aria-hidden': 'true' }, isRtl ? '→' : '←'),
        h('bdi', null, cleanBackLabel(t.backBtn, lang))
      )
    ),

    // Center Descending List
    h(
      'form',
      {
        onSubmit: handlePreciseSubmit,
        className: 'w-full max-w-md my-auto py-4 space-y-5'},

      // 1. TOP BUTTON: "Just Go Anonymously!"-> leads to TotalAnon (whole planet in English)
      h(
        'button',
        {
          type: 'button',
          onClick: onJustGoTotalAnon,
          className:
            'w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-lg transition transform hover:scale-[1.01] active:scale-[0.99]',
          style: { backgroundColor: '#FEACEC', color: '#9F133A'}
        },
        'Just Go Anonymously!'),

      // 2. FOUR ENTERING QUESTIONS
      // Question 1: What nation you are in
      h(
        'div',
        null,
        h(
          'label',
          { className: 'block text-base sm:text-lg font-bold mb-1.5 text-center', style: { color: '#FEACEC'} },
          'What nation you are in'),
        h('input', {
          type: 'text',
          value: nation,
          onChange: (e) => handleNationChange(e.target.value),
          placeholder: 'e.g., USA, Pakistan, Eritrea, India...',
          className: 'w-full px-5 py-3.5 rounded-2xl border-2 outline-none text-base font-bold shadow-md',
          style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC'}
        })
      ),

      // Question 2: Region
      h(
        'div',
        null,
        h(
          'label',
          { className: 'block text-base sm:text-lg font-bold mb-1.5 text-center', style: { color: '#FEACEC'} },
          'Region'),
        h('input', {
          type: 'text',
          value: region,
          onChange: (e) => handleRegionChange(e.target.value),
          placeholder: 'e.g., Massachusetts, Balochistan, Garhwal, Tigray...',
          className: 'w-full px-5 py-3.5 rounded-2xl border-2 outline-none text-base font-bold shadow-md',
          style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC'}
        })
      ),

      // Question 3: Language (Open writable text box + 250+ language autocomplete datalist!)
      h(
        'div',
        null,
        h(
          'label',
          { className: 'block text-base sm:text-lg font-bold mb-1.5 text-center', style: { color: '#FEACEC'} },
          'Language'),
        h('input', {
          type: 'text',
          list: 'world-languages-datalist',
          value: writtenLanguage,
          onChange: (e) => handleWrittenLanguageChange(e.target.value),
          placeholder: 'Type any language (e.g., Tigrinya, Garhwali, Balochi, Pashto...)',
          className: 'w-full px-5 py-3.5 rounded-2xl border-2 outline-none text-base font-bold shadow-md',
          style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC'}
        }),
        h(
          'datalist',
          { id: 'world-languages-datalist'},
          WORLD_LANGUAGE_SUGGESTIONS.map((langName, idx) =>
            h('option', { key: idx, value: langName })
          )
        )
      ),

      // Question 4: Age Group
      h(
        'div',
        null,
        h(
          'label',
          { className: 'block text-base sm:text-lg font-bold mb-1.5 text-center', style: { color: '#FEACEC'} },
          'Age Group'),
        h(
          'select',
          {
            value: ageGroup,
            onChange: (e) => setAgeGroup(e.target.value),
            className: 'w-full px-5 py-3.5 rounded-2xl border-2 outline-none text-base font-bold shadow-md cursor-pointer',
            style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC'}
          },
          AGE_GROUPS.map((ag) =>
            h(
              'option',
              { key: ag.id, value: ag.id },
              `${ag.label}`)
          )
        )
      ),

      // 3. BOTTOM BUTTON: "Explore My Region Anonymously!"
      h(
        'button',
        {
          type: 'submit',
          disabled: isLocating,
          className:
            'w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-lg transition transform hover:scale-[1.01] active:scale-[0.99]',
          style: { backgroundColor: '#FEACEC', color: '#9F133A'}
        },
        isLocating ? 'Locating...': 'Explore My Region Anonymously!')
    ),

    h('div', { className: 'h-6'})
  );
}
