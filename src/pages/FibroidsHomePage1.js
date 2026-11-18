import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=205';

const h = React.createElement;

const DEFAULT_FIBROID_ISSUES = [
  {
    id: 'uterine-fibroids-overview',
    title: {
      en: 'Understanding Uterine Fibroids (Leiomyomas)'
    },
    normalVsAbnormal: {
      en: 'Fibroids are very common, non-cancerous (benign) swirling muscular growths that develop in or on the wall of the uterus (intramural, subserosal, submucosal, or pedunculated on a stalk). Many women have small fibroids with no symptoms at all, while larger or multiple fibroids can cause heavy or prolonged menstrual bleeding, pelvic pressure, frequent urination, or lower back pain.'
    },
    redFlags: {
      en: [
        'Soaking through a pad orcloth every hour for 2 or more hours, or passing large blood clots',
        'Extreme fatigue, dizziness, pale skin, or shortness of breath (signs of severe anemia from heavy bleeding)',
        'Sudden, sharp, severe pelvic pain or fever (which can happen if a fibroid on a stalk twists or outgrows its blood supply)',
        'Difficulty emptying your bladder completely or severe constipation from pelvic pressure'
      ]
    },
    selfCare: {
      en: 'Track your bleeding days and heaviness in your Cycle Calendar, eat iron-rich foods (dark leafy greens, beans, lentils, meat/fish) paired with vitamin C, and visit an OB/GYN clinic on your map for an ultrasound and treatment options ranging from gentle medications to fibroid-removal procedures.'
    }
  }
];

export default function FibroidsHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_FIBROID_ISSUES;

  return h(
    'div',
    {
      id: 'FibroidsHomePage1',
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
        tr('eduBtnFibroids', 'Fibroids')
      ),
      h(
        'p',
        {
          className: 'text-xs sm:text-sm text-center font-bold mt-1 mb-2',
          style: { color: '#6E0926' }
        },
        tr('eduBtnFibroidsSub', 'Uterine Fibroids & Heavy Bleeding Care')
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
