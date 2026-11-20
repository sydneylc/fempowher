import React from 'https://esm.sh/react@18.3.1';
import BeingAWomanInHomePage from './BeingAWomanInHomePage.js?v=230';
import { getBeingAWomanContent } from '../data/beingAWomanData.js?v=230';

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
  const sudanContent = getBeingAWomanContent('Sudan', 'Sudanese', {
    center: [15.5007, 32.5599],
    zoom: 5
  });

  return h(BeingAWomanInHomePage, {
    onBack,
    userNationVariable1: 'Sudan',
    userNationVariable2: 'Sudanese',
    UserLanguageChoice1,
    beingAWomanContent: sudanContent,
    roleModelCountryCenter: [15.5007, 32.5599],
    roleModelCountryZoom: 5,
    customTopLabel: 'Anonymous Global View',
    customMainTitle: 'Being a Woman Worldview',
    lang,
    t
  });
}
