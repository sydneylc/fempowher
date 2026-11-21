import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderEducationIssueCards, renderSubpageBackButton } from './PregnancyHomePage.js?v=278';
import { isRtlLanguage } from '../data/translations.js?v=278';

const h = React.createElement;

// Simple clear SVG illustrations for each of the 5 Period Products
export function renderPeriodProductIllustrationSvg(productId) {
  if (productId === 'pad') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      h('rect', {
        x: '14',
        y: '62',
        width: '24',
        height: '46',
        rx: '8',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3'
      }),
      h('rect', {
        x: '82',
        y: '62',
        width: '24',
        height: '46',
        rx: '8',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3'
      }),
      h('rect', {
        x: '34',
        y: '14',
        width: '52',
        height: '142',
        rx: '26',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3.5'
      }),
      h('rect', {
        x: '43',
        y: '28',
        width: '34',
        height: '114',
        rx: '17',
        fill: '#FFE4EF',
        stroke: '#CF366C',
        strokeWidth: '1.5',
        strokeDasharray: '4 3'
      }),
      h('ellipse', { cx: '60', cy: '85', rx: '12', ry: '17', fill: '#EF233C' })
    );
  }
  if (productId === 'cloth') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      h('rect', {
        x: '24',
        y: '28',
        width: '72',
        height: '114',
        rx: '10',
        fill: '#FFF0F6',
        stroke: '#9F133A',
        strokeWidth: '3'
      }),
      h('line', {
        x1: '24',
        y1: '65',
        x2: '96',
        y2: '65',
        stroke: '#CF366C',
        strokeWidth: '2',
        strokeDasharray: '5 3'
      }),
      h('line', {
        x1: '24',
        y1: '104',
        x2: '96',
        y2: '104',
        stroke: '#CF366C',
        strokeWidth: '2',
        strokeDasharray: '5 3'
      }),
      h('circle', { cx: '60', cy: '85', r: '14', fill: '#F78C06' })
    );
  }
  if (productId === 'tampon') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      h('rect', {
        x: '44',
        y: '24',
        width: '32',
        height: '86',
        rx: '16',
        fill: '#FFFFFF',
        stroke: '#9F133A',
        strokeWidth: '3.5'
      }),
      h('path', {
        d: 'M60 110 C60 128, 48 138, 62 156',
        fill: 'none',
        stroke: '#9F133A',
        strokeWidth: '3',
        strokeLinecap: 'round'
      })
    );
  }
  if (productId === 'cup') {
    return h(
      'svg',
      { viewBox: '0 0 120 170', className: 'w-24 h-32 mx-auto' },
      h('ellipse', {
        cx: '60',
        cy: '36',
        rx: '34',
        ry: '10',
        fill: '#FFE4EF',
        stroke: '#9F133A',
        strokeWidth: '3.2'
      }),
      h('path', {
        d: 'M26 36 C28 96, 46 118, 60 124 C74 118, 92 96, 94 36',
        fill: '#FFC4E0',
        fillOpacity: '0.65',
        stroke: '#9F133A',
        strokeWidth: '3.2'
      }),
      h('rect', {
        x: '56',
        y: '124',
        width: '8',
        height: '24',
        rx: '4',
        fill: '#9F133A'
      })
    );
  }
  return h(
    'svg',
    { viewBox: '0 0 140 150', className: 'w-28 h-28 mx-auto' },
    h('path', {
      d: 'M18 32 H122 L114 82 C92 86, 82 110, 78 124 H62 C58 110, 48 86, 26 82 Z',
      fill: '#FCE4F4',
      stroke: '#9F133A',
      strokeWidth: '3.5',
      strokeLinejoin: 'round'
    }),
    h('rect', {
      x: '56',
      y: '74',
      width: '28',
      height: '48',
      rx: '8',
      fill: '#9F133A'
    })
  );
}

// ============================================================================
// PeriodProductsBigBubble1 — Interactive Period Products Explorer + First-Time
// Period Quick Questions placed at the top of "I got my first period!"
// (FirstPeriodHomePage.js). Every string is subject to UserLanguageChoice1.
// ============================================================================
export function PeriodProductsBigBubble1({
  UserLanguageChoice1 = null,
  t = {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  const [selectedProductId, setSelectedProductId] = useState('pad');
  const [selectedQuickQuestionIdx, setSelectedQuickQuestionIdx] = useState(0);

  const periodProductsList = [
    {
      id: 'pad',
      tabLabel: tr('periodProdTabPad', 'Period Pad'),
      caption: tr('periodProdCaptionPad', 'Sticks inside underwear'),
      heading: tr('periodProdHeadingPad', 'How a Period Pad Works (Great for Your First Period!):'),
      bullets: [
        tr(
          'periodProdPadB1',
          'What it is: A soft cotton strip that sticks to the inside of your underwear to catch period blood outside your body.'
        ),
        tr(
          'periodProdPadB2',
          'How to use it: Peel off the paper strip on the back, press the sticky side onto the middle of your underwear, and fold the side wings underneath.'
        ),
        tr(
          'periodProdPadB3',
          'When to change it: Put on a fresh pad every 4 to 6 hours (or sooner if it feels full) so you stay clean, dry, and comfortable.'
        ),
        tr(
          'periodProdPadB4',
          'How to throw it away: Never flush a pad down the toilet! Roll it up, wrap it in paper or tissue, and put it in a trash bin.'
        )
      ]
    },
    {
      id: 'cloth',
      tabLabel: tr('periodProdTabCloth', 'Clean Cloth'),
      caption: tr('periodProdCaptionCloth', 'Wash with soap & dry in sunlight'),
      heading: tr('periodProdHeadingCloth', 'How a Reusable Clean Cloth Pad Works:'),
      bullets: [
        tr(
          'periodProdClothB1',
          'What it is: Soft, clean cotton cloth folded into layers and placed inside your underwear to catch period blood.'
        ),
        tr(
          'periodProdClothB2',
          'When to change it: Change to a fresh clean cloth every 3 to 5 hours so your skin stays dry and healthy.'
        ),
        tr(
          'periodProdClothB3',
          'How to wash it safely: Soak the used cloth in cold water first, wash it thoroughly with clean water and soap, and hang it outside in direct sunlight until completely dry (sunlight kills germs!).'
        )
      ]
    },
    {
      id: 'tampon',
      tabLabel: tr('periodProdTabTampon', 'Tampon'),
      caption: tr('periodProdCaptionTampon', 'Goes gently inside vagina'),
      heading: tr('periodProdHeadingTampon', 'How a Tampon Works:'),
      bullets: [
        tr(
          'periodProdTamponB1',
          'What it is: A small plug of soft cotton with a strong little string on the end that goes gently inside your vagina to soak up blood before it leaves your body.'
        ),
        tr(
          'periodProdTamponB2',
          'How to take it out: The string stays outside your body so you simply pull the string gently to slide the tampon out. A tampon cannot get lost inside you!'
        ),
        tr(
          'periodProdTamponB3',
          'Important safety rule: Change your tampon every 4 to 6 hours, and never leave one in for more than 8 hours.'
        )
      ]
    },
    {
      id: 'cup',
      tabLabel: tr('periodProdTabCup', 'Period Cup'),
      caption: tr('periodProdCaptionCup', 'Reusable soft silicone cup'),
      heading: tr('periodProdHeadingCup', 'How a Period Cup Works:'),
      bullets: [
        tr(
          'periodProdCupB1',
          'What it is: A small, flexible bell-shaped cup made of soft medical silicone that you fold and place inside your vagina to catch period blood instead of soaking it up.'
        ),
        tr(
          'periodProdCupB2',
          'How to empty & clean it: Every 8 to 12 hours, pinch the bottom of the cup to break the seal, pour the blood into the toilet or latrine, rinse the cup with clean water and soap, and put it back in.'
        ),
        tr(
          'periodProdCupB3',
          'Why many women love it: One period cup can be boiled in clean water between periods and reused safely for up to 5 to 10 years!'
        )
      ]
    },
    {
      id: 'underwear',
      tabLabel: tr('periodProdTabUnderwear', 'Period Underwear'),
      caption: tr('periodProdCaptionUnderwear', 'Built-in absorbent layer'),
      heading: tr('periodProdHeadingUnderwear', 'How Period Underwear Works:'),
      bullets: [
        tr(
          'periodProdUnderwearB1',
          'What it is: Washable underwear that looks and feels just like regular underwear, but has special built-in layers in the bottom to soak up period blood and stop leaks.'
        ),
        tr(
          'periodProdUnderwearB2',
          'How to use & wash it: Wear it by itself on light or medium days (or with a pad on heavy days). After wearing, rinse in cold water until the water runs clear, wash with soap, and hang to dry.'
        )
      ]
    }
  ];

  const activeProduct =
    periodProductsList.find((p) => p.id === selectedProductId) || periodProductsList[0];

  const firstPeriodQuickQuestions = [
    {
      q: tr('firstPeriodQuickQ1', 'Does a period hurt?'),
      a: tr(
        'firstPeriodQuickA1',
        'Getting period blood itself does not hurt like a cut! You might feel gentle squeezing or aching in your lower belly (called cramps) as your womb pushes the blood out. A warm water bottle on your belly helps a lot.'
      )
    },
    {
      q: tr('firstPeriodQuickQ2', 'How much blood comes out?'),
      a: tr(
        'firstPeriodQuickA2',
        'Even though it can look like a lot in your pad or toilet, your body only loses about 2 to 3 tablespoons of blood during your entire period week! Your body easily makes fresh blood.'
      )
    },
    {
      q: tr('firstPeriodQuickQ3', 'Can I swim or play sports?'),
      a: tr(
        'firstPeriodQuickA3',
        'Yes! You can run, dance, go to school, shower, and play any sport on your period. Moving your body actually helps belly cramps feel better.'
      )
    },
    {
      q: tr('firstPeriodQuickQ4', 'Can other people tell I am on my period?'),
      a: tr(
        'firstPeriodQuickA4',
        'No! Nobody can tell you have your period just by looking at you.'
      )
    }
  ];

  return h(
    'div',
    {
      id: 'PeriodProductsBigBubble1',
      'data-piece-name': 'PeriodProductsBigBubble1',
      className: 'w-full flex flex-col items-stretch mt-5 mb-6 select-none'
    },
    // Overhanging top pill bar: "Period Products"
    h(
      'div',
      {
        className:
          'w-full px-4 py-2 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
        style: { marginBottom: '-8px' }
      },
      h(
        'span',
        { className: 'text-sm sm:text-base font-extrabold text-black leading-tight' },
        tr('periodProductsBubbleTitle', 'Period Products')
      )
    ),
    // Main rounded body of Period Products bubble
    h(
      'div',
      {
        className:
          'w-full rounded-[32px] border-[2.5px] border-black bg-[#FFF9FC] pt-5 pb-5 px-4 sm:px-5 shadow-md flex flex-col gap-4'
      },
      // Product selector pills
      h(
        'div',
        { className: 'flex flex-wrap items-center gap-2' },
        periodProductsList.map((prod) => {
          const isSelected = prod.id === activeProduct.id;
          return h(
            'button',
            {
              key: prod.id,
              type: 'button',
              onClick: () => setSelectedProductId(prod.id),
              className:
                'px-3 py-1.5 rounded-full border-2 border-black text-xs font-extrabold cursor-pointer transition-transform active:scale-95',
              style: {
                backgroundColor: isSelected ? '#9F133A' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : '#000000'
              }
            },
            prod.tabLabel
          );
        })
      ),

      // Product illustration box + Simple 5th-grade step-by-step instructions
      h(
        'div',
        { className: 'flex flex-col sm:flex-row items-center sm:items-start gap-4' },
        h(
          'div',
          {
            className:
              'w-full sm:w-40 shrink-0 p-3 rounded-2xl border-2 border-black bg-[#FFE4EF] flex flex-col items-center justify-center text-center gap-1.5'
          },
          renderPeriodProductIllustrationSvg(activeProduct.id),
          h(
            'span',
            { className: 'text-[11px] font-black text-[#9F133A] leading-tight' },
            activeProduct.caption
          )
        ),
        h(
          'div',
          { className: 'flex-1 min-w-[220px] flex flex-col justify-center space-y-2' },
          h(
            'h3',
            { className: 'text-sm sm:text-base font-black text-[#9F133A]' },
            activeProduct.heading
          ),
          h(
            'ul',
            { className: 'space-y-1.5 text-xs sm:text-[13px] font-bold text-black/90 leading-snug' },
            activeProduct.bullets.map((bLine, bIdx) =>
              h(
                'li',
                { key: `prod-b-${bIdx}`, className: 'flex items-start gap-1.5' },
                h('span', { className: 'font-black text-[#9F133A] shrink-0' }, '•'),
                h('span', null, bLine)
              )
            )
          )
        )
      ),

      // First-Time Period Quick Questions inside the Period Products bubble
      h(
        'div',
        {
          className: 'p-3.5 rounded-2xl border-2 border-[#9F133A] bg-white space-y-2.5'
        },
        h(
          'div',
          { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
          tr('firstPeriodQuickQuestionsHeader', 'First-Time Period Quick Questions (Tap to Read):')
        ),
        h(
          'div',
          { className: 'flex flex-wrap gap-1.5' },
          firstPeriodQuickQuestions.map((item, qIdx) => {
            const active = selectedQuickQuestionIdx === qIdx;
            return h(
              'button',
              {
                key: `quick-q-${qIdx}`,
                type: 'button',
                onClick: () => setSelectedQuickQuestionIdx(qIdx),
                className:
                  'px-2.5 py-1 rounded-xl border text-[11px] font-extrabold cursor-pointer transition-colors',
                style: {
                  backgroundColor: active ? '#9F133A' : '#FCE4F4',
                  borderColor: '#9F133A',
                  color: active ? '#FFFFFF' : '#9F133A'
                }
              },
              item.q
            );
          })
        ),
        firstPeriodQuickQuestions[selectedQuickQuestionIdx] &&
          h(
            'p',
            {
              className:
                'text-xs font-bold text-black/90 bg-[#FFF5FA] p-2.5 rounded-xl border border-[#FEACEC] leading-snug'
            },
            firstPeriodQuickQuestions[selectedQuickQuestionIdx].a
          )
      )
    )
  );
}

// ============================================================================
// PeriodBloodColorsBubble1 — "What Do Period Blood Colors Mean?" full-width
// overhanging-pill bubble placed directly underneath PeriodProductsBigBubble1
// in FirstPeriodHomePage.js (matching MyCycleSubHomePage.js).
// ============================================================================
export function PeriodBloodColorsBubble1({
  UserLanguageChoice1 = null,
  t = {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  const periodBloodColorsList = [
    {
      id: 'bright-red',
      name: tr('bloodColBrightRedName', 'Bright Red'),
      hex: '#EF233C',
      textHex: '#FFFFFF',
      desc: tr(
        'bloodColBrightRedDesc',
        'Fresh blood flowing quickly from your womb. This is very normal on your heavier bleeding days (usually Days 1, 2, and 3 of your period).'
      )
    },
    {
      id: 'dark-red',
      name: tr('bloodColDarkRedName', 'Dark Red / Plum'),
      hex: '#800F2F',
      textHex: '#FFFFFF',
      desc: tr(
        'bloodColDarkRedDesc',
        'Normal period blood that sat inside your womb for a few hours before coming out (especially common when you first wake up in the morning). Small coin-sized jelly drops are normal too.'
      )
    },
    {
      id: 'brown-rust',
      name: tr('bloodColBrownName', 'Brown / Rust'),
      hex: '#7F4F24',
      textHex: '#FFFFFF',
      desc: tr(
        'bloodColBrownDesc',
        'When blood touches air, it turns brown! You will often see brown blood on the very first day or the last 1 to 2 days of your period as older blood finishes leaving your womb.'
      )
    },
    {
      id: 'light-pink',
      name: tr('bloodColPinkName', 'Light Pink'),
      hex: '#FF8FA3',
      textHex: '#000000',
      desc: tr(
        'bloodColPinkDesc',
        'A tiny drop of red blood mixed with your natural clear vaginal wetness. Common at the very start or end of your period, or for 1 day when an egg comes out at ovulation.'
      )
    },
    {
      id: 'gray-orange',
      name: tr('bloodColGrayName', 'Gray or Bad Smell'),
      hex: '#6C757D',
      textHex: '#FFFFFF',
      desc: tr(
        'bloodColGrayDesc',
        'Gray discharge, green or yellow fluid, itching, burning, or a strong fishy or rotten smell is NOT normal period blood. It can mean an infection that a clinic can easily treat with medicine.'
      )
    }
  ];

  return h(
    'div',
    {
      id: 'PeriodBloodColorsBubble1',
      'data-piece-name': 'PeriodBloodColorsBubble1',
      className: 'w-full flex flex-col items-stretch mb-6 select-none'
    },
    h(
      'div',
      {
        className:
          'w-full px-4 py-2.5 rounded-2xl border-[2.5px] border-black bg-white shadow-sm z-10 flex items-center justify-center text-center',
        style: { marginBottom: '-8px' }
      },
      h(
        'span',
        { className: 'text-sm sm:text-base font-extrabold text-black leading-tight' },
        tr('periodBloodColorsBubbleTitleClean', 'What Do Period Blood Colors Mean?')
      )
    ),
    h(
      'div',
      {
        className:
          'w-full rounded-[28px] border-[2.5px] border-black bg-[#FFF9FC] pt-5 pb-4 px-3 sm:px-4 shadow-md flex flex-col gap-2.5'
      },
      h(
        'div',
        { className: 'grid grid-cols-2 sm:grid-cols-5 gap-2.5 items-start' },
        periodBloodColorsList.map((colItem) =>
          h(
            'div',
            {
              key: colItem.id,
              className:
                'p-2.5 rounded-2xl border-2 border-black bg-white flex flex-col items-center justify-start gap-2 text-left min-w-0'
            },
            h(
              'div',
              {
                className:
                  'w-fit max-w-full mx-auto py-1.5 px-3 rounded-xl border-2 border-black text-xs sm:text-[13px] font-black text-center leading-tight break-words shadow-xs',
                style: {
                  backgroundColor: colItem.hex,
                  color: colItem.textHex
                }
              },
              colItem.name
            ),
            h(
              'div',
              { className: 'w-full text-[11px] font-bold text-black/85 leading-snug break-words' },
              colItem.desc
            )
          )
        )
      )
    )
  );
}

export default function FirstPeriodHomePage({
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
  const isRtl = isRtlLanguage(lang);

  return h(
    'div',
    {
      id: 'FirstPeriodHomePage',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6'
    },
    h(
      'div',
      { className: 'max-w-5xl w-full mx-auto' },
      renderSubpageBackButton(onBack, t, lang),
      h(
        'h1',
        {
          className: 'text-2xl sm:text-3xl font-extrabold text-center mt-4',
          style: { color: '#9F133A' }
        },
        tr('cycleBtnFirstPeriod', 'I got my first period!')
      ),

      // 1. Top of "I got my first period!" page: Period Products Big Bubble
      h(PeriodProductsBigBubble1, {
        UserLanguageChoice1,
        t
      }),

      // 2. Directly underneath Period Products: "What Do Period Blood Colors Mean?" Bubble
      h(PeriodBloodColorsBubble1, {
        UserLanguageChoice1,
        t
      }),

      renderEducationIssueCards({
        issues,
        lang,
        t,
        speakingId,
        speakText,
        onShowNearestClinic
      })
    )
  );
}
