import React from 'https://esm.sh/react@18.3.1';
import { LOADING_SCREEN_WORD_ROWS, LANGUAGES, PREBOARDING_A_TEXT } from '../data/translations.js?v=244';

const h = React.createElement;

// ============================================================================
// Hand-Drawn 3D Striped-Edge Button (Exact match to user's sketch!)
// Top rounded rectangle face in solid #CF366C with thick #FEACEC outline & Kefa text,
// plus the 3D bottom lip filled with vertical #FEACEC stripes/hatching.
// ============================================================================
function Sketch3DButton({ label, onClick }) {
  const stripePositions = [
    36, 44, 62, 78, 86, 104, 112, 126, 134, 152, 168, 178, 194, 210, 218, 232,
    248, 256, 272, 286, 294, 310, 326, 334, 348, 362, 370
  ];

  return h(
    'button',
    {
      type: 'button',
      onClick,
      className:
        'group relative w-72 sm:w-80 focus:outline-none transition-transform duration-150 hover:scale-[1.03] active:translate-y-1.5 select-none',
      style: { background: 'transparent'}
    },
    h(
      'svg',
      {
        viewBox: '0 0 400 220',
        className: 'w-full h-auto overflow-visible drop-shadow-md'},
      h(
        'defs',
        null,
        h(
          'clipPath',
          { id: `rim-clip-${label.replace(/\s+/g, '-')}`},
          h('path', {
            d: 'M 22 135 C 22 162, 60 174, 200 174 C 340 174, 378 162, 378 135 L 378 172 C 378 198, 340 208, 200 208 C 60 208, 22 198, 22 172 Z'})
        )
      ),

      // 1. 3D Bottom Rim Base Fill (solid #CF366C so moving words pass behind cleanly)
      h('path', {
        d: 'M 22 135 L 22 172 C 22 198, 60 208, 200 208 C 340 208, 378 198, 378 172 L 378 135 Z',
        fill: '#CF366C'}),

      // 2. Vertical Hand-Drawn Stripes inside the 3D Bottom Rim
      h(
        'g',
        { clipPath: `url(#rim-clip-${label.replace(/\s+/g, '-')})`},
        stripePositions.map((xPos, idx) =>
          h('line', {
            key: idx,
            x1: xPos,
            y1: 130,
            x2: xPos + (idx % 3 === 0 ? 2 : -1),
            y2: 215,
            stroke: '#FFFFFF',
            strokeWidth: idx % 2 === 0 ? '4.5': '3.2',
            strokeLinecap: 'round'})
        )
      ),

      // 3. 3D Bottom Rim Outer Outline (#FFFFFF)
      h('path', {
        d: 'M 22 132 L 22 172 C 22 198, 60 208, 200 208 C 340 208, 378 198, 378 172 L 378 132',
        fill: 'none',
        stroke: '#FFFFFF',
        strokeWidth: '10',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'}),

      // 4. Main Top Rounded Rectangle Face (solid #CF366C fill + thick #FFFFFF border)
      h('path', {
        d: 'M 200 14 C 338 14, 380 28, 380 94 C 380 158, 338 172, 200 172 C 62 172, 20 158, 20 94 C 20 28, 62 14, 200 14 Z',
        fill: '#CF366C',
        stroke: '#FFFFFF',
        strokeWidth: '11',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'}),

      // 5. Centered Button Label in Kefa Font (#FFFFFF)
      h(
        'text',
        {
          x: '200',
          y: '105',
          textAnchor: 'middle',
          dominantBaseline: 'middle',
          fill: '#FFFFFF',
          style: {
            fontFamily: "'Kefa', 'Noto Sans Bengali', 'Noto Sans Hanifi Rohingya', Georgia, serif",
            fontSize: label.length > 14 ? '32px': '44px',
            fontWeight: '400',
            userSelect: 'none'}
        },
        label
      )
    )
  );
}

// ============================================================================
// FemPowHerPreBoardingAPage — First Opening Page after FemPowHerPreloader
// Features the moving train of Welcome words in the background behind the
// centered vertical column of 3 3D-striped buttons:
//   1. Sign In   -> SignInPage
//   2. New User  -> NewUserPage
//   3. Anonymous -> AnonPage1
// ============================================================================
export default function FemPowHerPreBoardingAPage({ lang, onNavigate }) {
  const pt = PREBOARDING_A_TEXT[lang] || PREBOARDING_A_TEXT.en;
  const langObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return h(
    'div',
    {
      dir: langObj.dir || 'ltr',
      className: 'relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden select-none',
      style: {
        backgroundColor: '#CF366C',
        color: '#FEACEC'}
    },

    // BACKGROUND LAYER: The moving train of welcome words across the screen behind the buttons (top to bottom, no FemPowHer text at bottom)
    h(
      'div',
      {
        dir: 'ltr',
        className: 'absolute inset-0 z-0 flex flex-col justify-evenly py-4 overflow-hidden pointer-events-none select-none'},
      LOADING_SCREEN_WORD_ROWS.map((rowWords, rowIdx) => {
        const repeated = [...rowWords, ...rowWords, ...rowWords];
        const animClass = rowIdx % 2 === 0 ? 'train-ticker-left': 'train-ticker-right';
        return h(
          'div',
          {
            key: rowIdx,
            className: 'w-full overflow-hidden whitespace-nowrap'},
          h(
            'div',
            { className: animClass },
            repeated.map((word, wIdx) =>
              h(
                'span',
                {
                  key: wIdx,
                  className: 'inline-block mx-5 sm:mx-7 text-2xl sm:text-4xl font-normal tracking-wide leading-tight',
                  style: { color: '#FEACEC'}
                },
                word
              )
            )
          )
        );
      })
    ),

    // FOREGROUND LAYER: Centered Vertical Stack of the 3 Buttons
    h(
      'div',
      {
        className: 'relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 my-auto'},
      // 1. Sign In -> SignInPage
      h(Sketch3DButton, {
        label: pt.signIn || 'Sign In',
        onClick: () => onNavigate('SignInPage')
      }),

      // 2. New User -> NewUserPage
      h(Sketch3DButton, {
        label: pt.newUser || 'New User',
        onClick: () => onNavigate('NewUserPage')
      }),

      // 3. Anonymous -> AnonPage1
      h(Sketch3DButton, {
        label: pt.anonymous || 'Anonymous',
        onClick: () => onNavigate('AnonPage1')
      })
    )
  );
}
