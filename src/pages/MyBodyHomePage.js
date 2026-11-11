import React, { useRef } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=176';

const h = React.createElement;

export default function MyBodyHomePage({
  onBack,
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const iframeRef = useRef(null);

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  return h(
    'div',
    {
      id: 'MyBodyHomePageList1',
      'data-piece-list': 'InteractiveTopSettings1,InteractiveAgeCarousel1,InteractiveAgeDial1,InteractiveAgeButtonsCarousel1,OrganButtons1,MyBodyImage1,MyBodySettings1',
      className: 'h-full min-h-full w-full bg-white flex flex-col overflow-hidden'
    },
    // Top Header Bar with Back Button + My Body Title
    h(
      'div',
      { className: 'w-full px-4 sm:px-6 pt-3 pb-2 shrink-0 bg-white border-b border-[#FEACEC]/50' },
      h(
        'div',
        { className: 'max-w-7xl w-full mx-auto flex items-center justify-between gap-3' },
        h('div', { className: 'shrink-0' }, renderSubpageBackButton(onBack, t, lang)),
        h(
          'h1',
          {
            className: 'text-xl sm:text-2xl font-extrabold text-center flex-1',
            style: { color: '#9F133A' }
          },
          tr('eduBtnMyBody', 'My Body')
        ),
        h('div', { className: 'w-16 sm:w-20 shrink-0' })
      )
    ),
    // Embedded MyBodyInteractiveHomePage1.html
    h('iframe', {
      ref: iframeRef,
      src: '/MyBodyInteractiveHomePage1.html?v=186',
      title: tr('eduBtnMyBody', 'My Body'),
      className: 'flex-1 w-full h-full border-0',
      onLoad: () => {
        try {
          if (iframeRef.current && iframeRef.current.contentWindow && iframeRef.current.contentWindow.ReproductiveModel) {
            window.ReproductiveModel = iframeRef.current.contentWindow.ReproductiveModel;
          }
        } catch (err) {
          // Ignore cross-origin frame access if any
        }
      }
    })
  );
}
