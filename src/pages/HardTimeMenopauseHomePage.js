import React from 'react';
import { UI_TEXT } from '../data/translations.js?v=171';

const h = React.createElement;

export default function HardTimeMenopauseHomePage({
  lang,
  t,
  onBack,
}) {
  const tr = (key, fallback) => (t && t[key]) || UI_TEXT[lang]?.[key] || UI_TEXT.en?.[key] || fallback;

  return h('div', {
    className: 'education-topic-page hard-time-menopause-home-page',
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 130px)',
      background: '#FFFDFEF9',
      fontFamily: "'Kefa', Georgia, serif",
    }
  },
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
          fontSize: 'clamp(1.7rem, 4.2vw, 2.3rem)',
          fontWeight: 800,
          margin: '2px 0 6px',
          fontFamily: "'Kefa', Georgia, serif",
          letterSpacing: '-0.01em',
        }
      }, tr('menoBtnHardTime', 'Menopause is giving me a hard time!'))
    )
  );
}
