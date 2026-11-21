import React from 'https://esm.sh/react@18.3.1';
import { SmartSearchBtn1 } from './SmartSearchBtn1.js?v=269';

const h = React.createElement;

export default function MyBodyandHealthHomePage1({
  UserNameChoiceInsert1,
  displayUsername = 'User',
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  AGE_GROUPS = [],
  ageGroup = '20-25',
  setAgeGroup = () => {},
  formatDigitsForLang = (v) => v,
  educationTableButtons = [],
  setEducationPage = () => {}
}) {
  const pageTitle = t.eduHeaderTitle || t.tabIssues || 'My Body & Health';
  const activeUserName = UserNameChoiceInsert1 || displayUsername;

  return h(
    'div',
    { className: 'max-w-3xl w-full mx-auto p-4 sm:p-6 space-y-5' },
    // Top Header Card with SmartSearchBtn1 Inside the Header Bubble
    h(
      'div',
      {
        className: 'text-white p-5 rounded-3xl shadow-lg',
        style: { background: 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)' }
      },
      h(
        'div',
        { className: 'text-xs font-bold uppercase tracking-wider', style: { color: '#FEACEC' } },
        `${activeUserName} • ${pageTitle}`
      ),
      h(
        'h2',
        { className: 'text-xl sm:text-2xl font-bold mt-1' },
        pageTitle
      ),
      h('p', { className: 'text-xs sm:text-sm mt-1', style: { color: '#FEACEC' } }, t.issuesSubtitle),
      h(SmartSearchBtn1, {
        setEducationPage,
        UserLanguageChoice1,
        lang,
        t
      })
    ),

    // Equal-Sized 10 Buttons Directly on Page (2x5 Grid)
    h(
      'div',
      {
        className: 'grid grid-cols-2 gap-3'
      },
      educationTableButtons.map((btn) => {
        const baseBg =
          btn.shade === 'lighter'
            ? 'linear-gradient(135deg, #CF366C 0%, #EA689A 100%)'
            : btn.shade === 'darker'
            ? 'linear-gradient(135deg, #6E0926 0%, #8F1034 100%)'
            : 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)';
        return h(
          'button',
          {
            key: btn.id,
            type: 'button',
            onClick: () => setEducationPage(btn.page),
            className:
              'w-full h-16 sm:h-20 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition text-center flex items-center justify-center shadow-md cursor-pointer leading-snug',
            style: {
              background: baseBg,
              color: '#FFFFFF',
              border: '2px solid #FFFFFF'
            }
          },
          btn.label
        );
      })
    )
  );
}
