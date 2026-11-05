import React from 'https://esm.sh/react@18.3.1';

const h = React.createElement;

// ============================================================================
// MapLegend1 — Flush corner map legend strip (styled like the Leaflet
// bottom-right attribution strip, with no floating bubble and no random list).
// Ready to hold future legend buttons when needed.
// ============================================================================
export default function MapLegend1({ message }) {
  return h(
    'div',
    {
      id: 'MapLegend1',
      className: ' z-20 pointer-events-auto select-none',
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#9F133A',
        padding: '1px 6px',
        fontSize: '11px',
        lineHeight: '1.4',
        borderBottomRightRadius: '2px'
      }
    },
    message
  );
}
