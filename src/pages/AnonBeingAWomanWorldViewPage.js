import React from 'https://esm.sh/react@18.3.1';
import BeingAWomanInHomePage from './BeingAWomanInHomePage.js?v=204';
import { getBeingAWomanContent } from '../data/beingAWomanData.js?v=204';

const h = React.createElement;

// ============================================================================
// AnonBeingAWomanWorldViewPage
// NOTE FOR SYDNEY (Task #1 on Sydney's Edit List):
//   Currently displays "Being a Woman Worldview" as the title for all Anonymous users,
//   and uses the "Being A Woman In Sudan" ("Sudan" / "Sudanese") tabs inside as a placeholder
//   until Sydney customizes the anonymous worldview content.
// ============================================================================
export default function AnonBeingAWomanWorldViewPage({ onBack, lang = 'en', t = {} }) {
  const sudanContent = getBeingAWomanContent('Sudan', 'Sudanese', {
    center: [15.5007, 32.5599],
    zoom: 5
  });

  return h(BeingAWomanInHomePage, {
    onBack,
    userNationVariable1: 'Sudan',
    userNationVariable2: 'Sudanese',
    beingAWomanContent: sudanContent,
    roleModelCountryCenter: [15.5007, 32.5599],
    roleModelCountryZoom: 5,
    customTopLabel: 'Anonymous Global View',
    customMainTitle: 'Being a Woman Worldview',
    lang,
    t
  });
}
