import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=203';

const h = React.createElement;

export default function STDMenuHomePage({
  onBack,
  issues = [],
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

  return h(
    'div',
    { className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6' },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto' },
      renderSubpageBackButton(onBack, t, lang),
      h(
        'h1',
        {
          className: 'text-2xl sm:text-3xl font-extrabold text-center mt-4',
          style: { color: '#9F133A' }
        },
        tr('eduBtnSTDs', 'STDs')
      ),
      h(
        'p',
        {
          className: 'text-xs sm:text-sm text-center font-bold mt-1 mb-2',
          style: { color: '#6E0926' }
        },
        tr('eduBtnSTDsSub', 'Sexually Transmitted Diseases')
      ),
      renderEducationIssueCards({
        issues,
        lang,
        t,
        speakingId,
        speakText,
        onShowNearestClinic
      })
    )
  );
}
