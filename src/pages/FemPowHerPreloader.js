import React from 'https://esm.sh/react@18.3.1';
import { LOADING_SCREEN_WORD_ROWS } from '../data/translations.js?v=236';

const h = React.createElement;

// ============================================================================
// FemPowHerPreloader — Automatic Loading Screen
// Solid #CF366C background, 10 rows of plain #FEACEC Kefa words moving across,
// and large "FemPowHer"centered at the bottom in #FEACEC.
// ============================================================================
export default function FemPowHerPreloader() {
  return h(
    'div',
    {
      className: 'fixed inset-0 z-50 flex flex-col justify-between overflow-hidden select-none',
      style: {
        backgroundColor: '#CF366C',
        color: '#FEACEC',
        fontFamily: "'Kefa', 'Noto Sans Bengali', 'Noto Sans Hanifi Rohingya', Georgia, serif"}
    },
    h(
      'div',
      { className: 'flex-1 flex flex-col justify-evenly py-4 overflow-hidden'},
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
    h(
      'div',
      { className: 'pb-8 pt-2 text-center shrink-0'},
      h(
        'div',
        {
          className: 'text-5xl sm:text-7xl font-normal tracking-wide',
          style: { color: '#FEACEC'}
        },
        'FemPowHer')
    )
  );
}
