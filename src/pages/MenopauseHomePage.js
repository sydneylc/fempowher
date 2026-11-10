import React from 'react';
import { UI_TEXT } from '../data/translations.js?v=171';
import PregHomePageButtons from '../components/PregHomePageButtons.js?v=171';

const h = React.createElement;

export default function MenopauseHomePage({
  lang,
  t,
  onBack,
  onNavigateEducationPage,
}) {
  const tr = (key, fallback) => (t && t[key]) || UI_TEXT[lang]?.[key] || UI_TEXT.en?.[key] || fallback;

  const sections = [
    {
      id: 'what_is_menopause',
      targetPage: 'WhatIsMenopauseHomePage',
      label: tr('menoBtnWhatIs', 'What is menopause?'),
      bgColor: '#FFF27A',
      hoverColor: '#FBE862',
      textColor: '#9B0E3E',
      glowColor: '#FFF9B8',
      imgSrc: './assets/menopause-what-is.gif?v=171',
      imgAlt: tr('menoBtnWhatIs', 'What is menopause?'),
    },
    {
      id: 'starting_menopause',
      targetPage: 'StartingMenopauseHomePage',
      label: tr('menoBtnStarting', "I think I'm starting menopause!"),
      bgColor: '#FCE052',
      hoverColor: '#F5D63D',
      textColor: '#9B0E3E',
      glowColor: '#FFF199',
      imgSrc: './assets/menopause-starting.gif?v=171',
      imgAlt: tr('menoBtnStarting', "I think I'm starting menopause!"),
    },
    {
      id: 'hard_time_menopause',
      targetPage: 'HardTimeMenopauseHomePage',
      label: tr('menoBtnHardTime', 'Menopause is giving me a hard time!'),
      bgColor: '#F6BC28',
      hoverColor: '#EBB01E',
      textColor: '#9B0E3E',
      glowColor: '#FFE082',
      imgSrc: './assets/menopause-hard-time.gif?v=171',
      imgAlt: tr('menoBtnHardTime', 'Menopause is giving me a hard time!'),
    },
    {
      id: 'after_menopause',
      targetPage: 'AfterMenopauseHomePage',
      label: tr('menoBtnAfter', 'My body after menopause!'),
      bgColor: '#D6A124',
      hoverColor: '#C9951B',
      textColor: '#9B0E3E',
      glowColor: '#FFE388',
      imgSrc: './assets/menopause-after.gif?v=171',
      imgAlt: tr('menoBtnAfter', 'My body after menopause!'),
    },
  ];

  return h('div', {
    className: 'education-topic-page menopause-home-page',
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 130px)',
      background: '#FFFDFEF9',
      fontFamily: "'Kefa', Georgia, serif",
      padding: 0,
      margin: 0,
    }
  },
    // Top Header Area (Back button + Title)
    h('div', {
      style: {
        padding: '16px 16px 14px',
        background: '#FFFFFF',
      }
    },
      h('button', {
        type: 'button',
        className: 'edu-TopicBackBtn',
        onClick: onBack,
        style: {
          background: '#9B0E3E',
          color: '#FFFFFF',
          border: '2.5px solid #F7B6D2',
          borderRadius: '999px',
          padding: '8px 20px',
          fontSize: '15px',
          fontWeight: 700,
          fontFamily: "'Kefa', Georgia, serif",
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 2px 6px rgba(155, 14, 62, 0.25)',
          marginBottom: '6px',
        }
      }, `\u2190 ${tr('backButton', 'Back')}`),

      h('h1', {
        style: {
          textAlign: 'center',
          color: '#9B0E3E',
          fontSize: 'clamp(1.85rem, 4.5vw, 2.45rem)',
          fontWeight: 800,
          margin: '2px 0 6px',
          fontFamily: "'Kefa', Georgia, serif",
          letterSpacing: '-0.01em',
        }
      }, tr('eduTopicMenopauseTitle', 'Menopause'))
    ),

    // 4 Full-Width Stacked Section Bands via PregHomePageButtons
    h(PregHomePageButtons, {
      sections,
      onSelectSection: (sec) => {
        if (onNavigateEducationPage && sec.targetPage) {
          onNavigateEducationPage(sec.targetPage);
        }
      }
    })
  );
}
