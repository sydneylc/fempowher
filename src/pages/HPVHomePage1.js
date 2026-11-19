import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=208';

const h = React.createElement;

const DEFAULT_HPV_ISSUES = [
  {
    id: 'std-hpv-overview',
    title: {
      en: 'Understanding HPV (Human Papillomavirus)'
    },
    normalVsAbnormal: {
      en: 'Human Papillomavirus (HPV) is the most common sexually transmitted infection in the world—nearly everyone who is sexually active is exposed to it at some point. Most HPV infections cause no symptoms and are cleared naturally by the immune system within 1 to 2 years. Low-risk types can cause harmless genital warts, while certain persistent high-risk types can gradually cause abnormal cell changes on the cervix over many years.'
    },
    redFlags: {
      en: [
        'Small flesh-colored, pink, or cauliflower-like bumps (genital warts) on the vulva, vagina, cervix, or anus',
        'Unexplained vaginal bleeding after sex, between periods, or after menopause',
        'Persistent watery, pink, or foul-smelling vaginal discharge or pelvic pain',
        'Going more than 3–5 years without a cervical screening (Pap smear or HPV test)'
      ]
    },
    selfCare: {
      en: 'The HPV vaccine protects against the HPV types that cause most cervical cancers and genital warts. Routine cervical screening (Pap test or HPV swab) at a local women’s clinic finds early cervical cell changes years before they ever become cancer so they can be easily treated.'
    }
  }
];

export default function HPVHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_HPV_ISSUES;

  return h(
    'div',
    {
      id: 'HPVHomePage1',
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
        tr('eduBtnHPV', 'HPV')
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
