import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=209';

const h = React.createElement;

const DEFAULT_HEPATITIS_B_ISSUES = [
  {
    id: 'std-hepatitis-b-overview',
    title: {
      en: 'Understanding Hepatitis B'
    },
    normalVsAbnormal: {
      en: 'Hepatitis B is a viral infection that affects the liver and is spread through sexual contact, blood or unsterile needles/instruments, or from an infected mother to her baby at birth. Many adults fight off an acute infection, while others develop chronic Hepatitis B that requires monitoring and care to protect the liver.'
    },
    redFlags: {
      en: [
        'Yellowing of the skin or the whites of the eyes (jaundice) and dark tea-colored urine',
        'Extreme fatigue, nausea, vomiting, or loss of appetite',
        'Pain or tenderness in the upper right side of the abdomen (over the liver)',
        'Being pregnant and not knowing your Hepatitis B status (newborns can be protected at birth with a vaccine and immune globulin)'
      ]
    },
    selfCare: {
      en: 'Hepatitis B is preventable with the safe, effective Hepatitis B vaccine. If you are pregnant, ask your clinic for a Hepatitis B blood test so your baby can receive protective vaccination immediately at birth. Avoid alcohol and unprescribed medications that strain the liver, and visit a clinic for liver monitoring and antiviral care if needed.'
    }
  }
];

export default function HepatitisBHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_HEPATITIS_B_ISSUES;

  return h(
    'div',
    {
      id: 'HepatitisBHomePage1',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6'
    },
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
        tr('eduBtnHepatitisB', 'Hepatitis B')
      ),
      renderEducationIssueCards({
        issues: activeIssues,
        lang,
        t,
        speakingId,
        speakText,
        onShowNearestClinic
      })
    )
  );
}
