import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=208';

const h = React.createElement;

const DEFAULT_GONORRHEA_ISSUES = [
  {
    id: 'std-gonorrhea-overview',
    title: {
      en: 'Understanding Gonorrhea'
    },
    normalVsAbnormal: {
      en: 'Gonorrhea is a bacterial sexually transmitted infection (caused by Neisseria gonorrhoeae, which grows in pairs called diplococci). It can infect the cervix, uterus, Fallopian tubes, urethra, throat, or rectum. Many women have mild or no symptoms at first, but untreated gonorrhea can cause Pelvic Inflammatory Disease (PID), scarring of the Fallopian tubes, or pass to a baby during childbirth.'
    },
    redFlags: {
      en: [
        'Increased watery, creamy, yellowish, or greenish vaginal discharge',
        'Pain or burning when urinating',
        'Bleeding between menstrual periods or heavier periods',
        'Lower abdominal or pelvic pain, fever, or swollen painful joints'
      ]
    },
    selfCare: {
      en: 'Gonorrhea is curable with specific antibiotic treatment (usually a ceftriaxone injection given at a clinic or hospital). Because antibiotic resistance is common with gonorrhea, always get treated at a verified health clinic rather than taking leftover pills, and make sure partner(s) are treated too.'
    }
  }
];

export default function GonorrheaHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_GONORRHEA_ISSUES;

  return h(
    'div',
    {
      id: 'GonorrheaHomePage1',
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
        tr('eduBtnGonorrhea', 'Gonorrhea')
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
