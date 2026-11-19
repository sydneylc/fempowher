import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=208';

const h = React.createElement;

const DEFAULT_PROLAPSE_ISSUES = [
  {
    id: 'pelvic-organ-and-uterine-prolapse',
    title: {
      en: 'Understanding Prolapse (Pelvic Organ & Uterine Prolapse)'
    },
    normalVsAbnormal: {
      en: 'Pelvic organ prolapse happens when the pelvic floor muscles and ligaments that support the uterus, bladder, or rectum become stretched or weakened—often after childbirth, heavy physical labor, chronic coughing, or hormonal changes after menopause—allowing the uterus or vaginal walls to drop (prolapse) downward into or slightly outside the vaginal opening. It is very common, never something to be ashamed of, and treatable.'
    },
    redFlags: {
      en: [
        'A feeling of heaviness, fullness, pulling, or "sitting on a small ball" in the pelvis or vagina',
        'Seeing or feeling a soft bulge or tissue protruding at or near the vaginal opening',
        'Difficulty emptying the bladder completely, leaking urine when coughing/lifting, or needing to press gently to pass stool',
        'Bleeding, irritation, sores, or infection on exposed tissue, or lower back pain that worsens after standing or carrying loads'
      ]
    },
    selfCare: {
      en: 'Pelvic floor exercises (Kegels), avoiding heavy lifting when possible, preventing constipation with water and fiber, and a simple non-surgical medical support ring (vaginal pessary) or pelvic reconstructive surgery can relieve symptoms. Visit an OB/GYN clinic or Women’s Hospital on your map for a gentle exam and support options.'
    }
  }
];

export default function ProlapseHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_PROLAPSE_ISSUES;

  return h(
    'div',
    {
      id: 'ProlapseHomePage1',
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
        tr('eduBtnProlapse', 'Prolapse')
      ),
      h(
        'p',
        {
          className: 'text-xs sm:text-sm text-center font-bold mt-1 mb-2',
          style: { color: '#6E0926' }
        },
        tr('eduBtnProlapseSub', 'Pelvic Organ & Uterine Prolapse')
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
