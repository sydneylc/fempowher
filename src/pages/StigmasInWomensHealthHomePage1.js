import React from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=236';
import { isRtlLanguage } from '../data/translations.js?v=236';

const h = React.createElement;

// ============================================================================
// StigmasInWomensHealthHomePage1 — Empty homepage for "Stigmas in Women's Health"
// accessible from My Body & Health (MyBodyandHealthHomePage1).
// Displays at the top in title format:
//   - Title: "Stigmas in Women's Health"
//   - Large all-caps subtitle (just a little smaller than the title words itself):
//     "YOU ARE NOT ALONE !"
// Subject to UserLanguageChoice1.
// ============================================================================
export default function StigmasInWomensHealthHomePage1({
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
  const isRtl = isRtlLanguage(lang);

  return h(
    'div',
    {
      id: 'StigmasInWomensHealthHomePage1',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6'
    },
    h(
      'div',
      { className: 'max-w-5xl w-full mx-auto flex-1 flex flex-col' },
      renderSubpageBackButton(onBack, t, lang),

      // Top Header in Title Format:
      // 1. "Stigmas in Women's Health"
      // 2. Large all-caps "YOU ARE NOT ALONE !" (just a little smaller than the title words itself)
      h(
        'div',
        { className: 'text-center mt-2 mb-6 space-y-2' },
        h(
          'h1',
          {
            className: 'text-2xl sm:text-4xl font-extrabold tracking-tight',
            style: { color: '#9F133A' }
          },
          tr('eduBtnStigmasInWomensHealth', "Stigmas in Women's Health")
        ),
        h(
          'div',
          {
            className: 'text-xl sm:text-3xl font-black uppercase tracking-wide',
            style: { color: '#CF366C' }
          },
          tr('stigmasYouAreNotAloneCaps', 'YOU ARE NOT ALONE !')
        )
      ),

      // Empty homepage body below the header (ready for future content)
      h('div', {
        id: 'StigmasInWomensHealthEmptyBody1',
        className: 'flex-1 w-full'
      })
    )
  );
}
