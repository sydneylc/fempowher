import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=209';

const h = React.createElement;

const DEFAULT_TRICHOMONAS_ISSUES = [
  {
    id: 'std-trichomonas-overview',
    title: {
      en: 'Understanding Trichomonas (Trichomoniasis)'
    },
    normalVsAbnormal: {
      en: 'Trichomoniasis ("Trich") is a very common, curable sexually transmitted infection caused by a microscopic single-celled parasite (Trichomonas vaginalis). Many women have no symptoms at all, while others notice changes in vaginal discharge, itching, or discomfort during urination or sex.'
    },
    redFlags: {
      en: [
        'Frothy or thin vaginal discharge that may be yellow-green, gray, or have a strong odor',
        'Vulvar or vaginal itching, redness, burning, or soreness',
        'Stinging or pain when urinating or during sexual intercourse',
        'Symptoms during pregnancy (untreated trichomoniasis can increase the risk of early labor)'
      ]
    },
    selfCare: {
      en: 'Trichomoniasis is completely curable with a single course of prescription antibiotic tablets (such as metronidazole or tinidazole) from a clinic or hospital. Both you and your sexual partner(s) should be treated at the same time and wait until treatment is finished before having sex again so it is not passed back and forth.'
    }
  }
];

export default function TrichomonasHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_TRICHOMONAS_ISSUES;

  return h(
    'div',
    {
      id: 'TrichomonasHomePage1',
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
        tr('eduBtnTrichomonas', 'Trichomonas')
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
