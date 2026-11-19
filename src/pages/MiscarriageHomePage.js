import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=220';

const h = React.createElement;

export default function MiscarriageHomePage({
  onBack,
  issues = [],
  onNavigateEducationPage = null,
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
        tr('eduBtnMiscarriage', 'Pregnancy Loss')
      ),
      h(
        'div',
        { className: 'mt-4 flex justify-center' },
        h(
          'button',
          {
            type: 'button',
            onClick: () => {
              if (onNavigateEducationPage) {
                onNavigateEducationPage('PregnancyAfterLossHomePage');
              }
            },
            className:
              'w-full sm:w-auto px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition shadow-md text-center flex items-center justify-center leading-snug cursor-pointer',
            style: {
              background: 'linear-gradient(135deg, #CF366C 0%, #9F133A 100%)',
              color: '#FFFFFF',
              border: '2px solid #FEACEC'
            }
          },
          t.eduBtnPregnancyAfterLoss || 'Pregnancy After a Loss'
        )
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
