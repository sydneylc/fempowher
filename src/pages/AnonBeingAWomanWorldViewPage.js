import React from 'https://esm.sh/react@18.3.1';
import BeingAWomanInHomePage from './BeingAWomanInHomePage.js?v=287';
import { getBeingAWomanContent } from '../data/beingAWomanData.js?v=287';

const h = React.createElement;

// ============================================================================
// AnonBeingAWomanWorldViewPage
// Displays "Being a Woman Worldview" for Anonymous users using the same 4-button
// PregHomePageButtons (MakingGifButtons1) hub as BeingAWomanInHomePage.
// ============================================================================
export default function AnonBeingAWomanWorldViewPage({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const worldviewContent = getBeingAWomanContent('Worldview', 'Worldview', {
    center: [18.0, 15.0],
    zoom: 2
  });

  return h(BeingAWomanInHomePage, {
    onBack,
    userNationVariable1: 'Worldview',
    userNationVariable2: 'Worldview',
    UserLanguageChoice1,
    beingAWomanContent: worldviewContent,
    roleModelCountryCenter: [18.0, 15.0],
    roleModelCountryZoom: 2,
    customTopLabel: 'Anonymous Global View',
    customMainTitle: 'Being a Woman Worldview',
    lang,
    t
  });
}
