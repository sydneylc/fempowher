import React from 'https://esm.sh/react@18.3.1';
import AnonBeingAWomanWorldViewPage from './AnonBeingAWomanWorldViewPage.js?v=259';

const h = React.createElement;

export default function WorldviewHomePage({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  return h(AnonBeingAWomanWorldViewPage, {
    onBack,
    UserLanguageChoice1,
    lang,
    t
  });
}
