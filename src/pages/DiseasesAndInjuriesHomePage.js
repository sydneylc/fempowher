import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=183';

const h = React.createElement;

export default function DiseasesAndInjuriesHomePage({
  onBack,
  onNavigateEducationPage = null,
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
        tr('eduBtnDiseasesInjuries', 'Reproductive Health Diseases & Injuries')
      ),
      // STIs / STDs Button above the main info bubble -> opens STDMenuHomePage
      h(
        'div',
        { className: 'mt-5 mb-2 flex justify-center' },
        h(
          'button',
          {
            type: 'button',
            onClick: () => {
              if (onNavigateEducationPage) {
                onNavigateEducationPage('STDMenuHomePage');
              }
            },
            className:
              'w-full sm:w-auto min-w-[260px] px-6 py-3.5 rounded-2xl text-sm sm:text-base font-extrabold text-white shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer',
            style: {
              background: 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)',
              border: '2px solid #FEACEC'
            }
          },
          tr('eduBtnSTIs', 'STIs / STDs')
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
