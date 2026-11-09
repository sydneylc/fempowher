import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton, renderEducationIssueCards } from './PregnancyHomePage.js?v=155';

const h = React.createElement;

export default function FeelingGoodPregHomePage({
  onBack,
  issues = [],
  tryingIssues = [],
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  const [pregnancySubStage, setPregnancySubStage] = useState('currently-pregnant');

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  const stageButtons = [
    {
      id: 'trying-to-conceive',
      label: tr('pregSubTrying', 'I am trying to Get Pregnant'),
      onClick: () => setPregnancySubStage('trying-to-conceive')
    },
    {
      id: 'currently-pregnant',
      label: tr('pregSubCurrent', 'I am currently Pregnant'),
      onClick: () => setPregnancySubStage('currently-pregnant')
    },
    {
      id: 'recently-miscarried',
      label: tr('pregSubMiscarried', 'I Recently Miscarried'),
      onClick: () => {
        if (onNavigateEducationPage) {
          onNavigateEducationPage('MiscarriageHomePage');
        } else {
          setPregnancySubStage('recently-miscarried');
        }
      }
    },
    {
      id: 'postpartum',
      label: tr('pregSubPostpartum', 'I am Postpartum'),
      onClick: () => {
        if (onNavigateEducationPage) {
          onNavigateEducationPage('PostpartumHomePage');
        } else {
          setPregnancySubStage('postpartum');
        }
      }
    }
  ];

  const displayedIssues =
    pregnancySubStage === 'trying-to-conceive' && tryingIssues.length > 0 ? tryingIssues : issues;

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
        tr('pregFeelGood', "I'm feeling good")
      ),
      h(
        'div',
        { className: 'grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5' },
        stageButtons.map((btn) => {
          const isActive = pregnancySubStage === btn.id;
          return h(
            'button',
            {
              key: btn.id,
              type: 'button',
              onClick: btn.onClick,
              className:
                'px-3 py-3 rounded-2xl text-xs sm:text-sm font-bold transition shadow-sm text-center flex items-center justify-center leading-snug cursor-pointer',
              style: isActive
                ? {
                    backgroundColor: '#9F133A',
                    color: '#FFFFFF',
                    border: '2px solid #FEACEC'
                  }
                : {
                    backgroundColor: '#FFF0FA',
                    color: '#9F133A',
                    border: '2px solid #CF366C'
                  }
            },
            btn.label
          );
        })
      ),
      pregnancySubStage === 'currently-pregnant' &&
        h(
          'div',
          { className: 'mt-3.5 flex justify-center' },
          h(
            'button',
            {
              type: 'button',
              onClick: () => {
                if (onNavigateEducationPage) {
                  onNavigateEducationPage('PregnancyAfterLossHomePage');
                }
              },
              className:
                'w-full sm:w-auto px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition shadow-md text-center flex items-center justify-center leading-snug cursor-pointer',
              style: {
                background: 'linear-gradient(135deg, #CF366C 0%, #9F133A 100%)',
                color: '#FFFFFF',
                border: '2px solid #FEACEC'
              }
            },
            tr('eduBtnPregnancyAfterLoss', 'Pregnancy After a Loss')
          )
        ),
      renderEducationIssueCards({
        issues: displayedIssues,
        lang,
        t,
        speakingId,
        speakText,
        onShowNearestClinic
      })
    )
  );
}
