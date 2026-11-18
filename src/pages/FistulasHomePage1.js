import React from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=205';

const h = React.createElement;

const DEFAULT_FISTULA_ISSUES = [
  {
    id: 'obstetric-and-pelvic-fistulas',
    title: {
      en: 'Understanding Fistulas (Obstetric & Pelvic Fistula)'
    },
    normalVsAbnormal: {
      en: 'A fistula is an abnormal opening or tunnel that forms between the birth canal (vagina, cervix, or uterus) and the bladder or rectum—most often after prolonged, obstructed childbirth without timely medical or surgical care, or after pelvic injury or surgery. It can cause continuous, involuntary leaking of urine or stool. A fistula is a medical injury, never a curse or a fault of the woman, and most fistulas can be surgically repaired.'
    },
    redFlags: {
      en: [
        'Continuous leaking of urine or stool through the vagina day and night after childbirth or pelvic surgery',
        'Foul-smelling discharge, fever, chills, or severe pelvic/abdominal pain (signs of infection)',
        'Skin burning, sores, or rawness around the vulva and inner thighs from constant moisture',
        'Numbness, weakness, or difficulty lifting the foot (foot drop) after a long labor'
      ]
    },
    selfCare: {
      en: 'Drink plenty of clean water to keep urine diluted and prevent kidney or bladder infections. Wash gently with clean warm water (avoid harsh soaps) and apply a protective barrier ointment if available. Seek a hospital or specialized Women’s Safe Haven / Fistula Repair Center on your map—many humanitarian hospitals provide free fistula repair surgery and rehabilitation.'
    }
  }
];

export default function FistulasHomePage1({
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

  const activeIssues = issues && issues.length > 0 ? issues : DEFAULT_FISTULA_ISSUES;

  return h(
    'div',
    {
      id: 'FistulasHomePage1',
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
        tr('eduBtnFistulas', 'Fistulas')
      ),
      h(
        'p',
        {
          className: 'text-xs sm:text-sm text-center font-bold mt-1 mb-2',
          style: { color: '#6E0926' }
        },
        tr('eduBtnFistulasSub', 'Obstetric & Pelvic Fistula Care & Repair')
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
