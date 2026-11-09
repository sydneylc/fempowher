import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=167';

const h = React.createElement;

export default function ForALovedOneHomePage({
  onBack,
  issues = [],
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  return h(
    'div',
    { className: 'min-h-full w-full bg-white flex flex-col p-4 sm:p-6' },
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
        t.eduBtnForLovedOne || 'For a Loved One'
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
