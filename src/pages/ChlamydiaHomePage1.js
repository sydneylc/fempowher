import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=208';

const h = React.createElement;

const DEFAULT_CHLAMYDIA_ISSUES = [
  {
    id: 'std-chlamydia-overview',
    title: {
      en: 'Understanding Chlamydia'
    },
    normalVsAbnormal: {
      en: 'Chlamydia is a very common bacterial sexually transmitted infection (caused by Chlamydia trachomatis). More than 70% of women with chlamydia feel no symptoms at all, which is why it is often called a "silent" infection. If left untreated, it can travel up into the uterus and Fallopian tubes and cause Pelvic Inflammatory Disease (PID), chronic pelvic pain, ectopic pregnancy, or difficulty getting pregnant.'
    },
    redFlags: {
      en: [
        'New or unusual yellowish or cloudy vaginal discharge',
        'Burning or stinging when urinating',
        'Bleeding or spotting between periods or after sexual intercourse',
        'Lower abdominal or pelvic pain, pain deep inside during sex, or fever'
      ]
    },
    selfCare: {
      en: 'Chlamydia is 100% curable with a simple course of prescription antibiotics (such as doxycycline or azithromycin). Ensure your partner(s) are treated at the same time and avoid sex for 7 days after starting treatment so you do not get re-infected.'
    }
  }
];

export default function ChlamydiaHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_CHLAMYDIA_ISSUES;

  return h(
    'div',
    {
      id: 'ChlamydiaHomePage1',
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
        tr('eduBtnChlamydia', 'Chlamydia')
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
