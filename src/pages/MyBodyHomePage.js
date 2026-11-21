import React, { useRef, useState, useEffect } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=252';
import { renderGearHeartIcon } from '../data/cycleCalendarData.js?v=252';

const h = React.createElement;

export default function MyBodyHomePage({
  onBack,
  onOpenMyBodySettings = null,
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const iframeRef = useRef(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event && event.data && event.data.type === 'MY_BODY_SCROLL') {
        setIsScrolledDown(Boolean(event.data.isScrolled || event.data.scrollTop > 20));
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  const handleMyBodySettingsClick = () => {
    if (typeof onOpenMyBodySettings === 'function') {
      onOpenMyBodySettings();
      return;
    }
    try {
      if (iframeRef.current && iframeRef.current.contentWindow && iframeRef.current.contentWindow.document) {
        const doc = iframeRef.current.contentWindow.document;
        const target = doc.getElementById('MyBodySettings1') || doc.getElementById('InteractiveTopSettings1');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          target.style.boxShadow = '0 0 0 3px #CF366C';
          setTimeout(() => {
            target.style.boxShadow = '';
          }, 1400);
        }
      }
    } catch (err) {
      // Ignore cross-origin frame access if any
    }
  };

  return h(
    'div',
    {
      id: 'MyBodyHomePageList1',
      'data-piece-list': 'MyBodySettingsButton1,InteractiveTopSettings1,InteractiveAgeCarousel1,InteractiveAgeDial1,InteractiveActiveBodyFilters1,InteractiveAgeButtonsCarousel1,OrganButtons1,ConceptionComponents1,PregnancyComponents1,MyBodyImage1,MyBodySettings1',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden'
    },
    // Top Header Bar with Back Button + My Body Title + Top-Right MyBodySettingsButton1 (automatically compacts when scrolling down!)
    h(
      'div',
      {
        className: `w-full px-3 sm:px-5 shrink-0 bg-white border-b border-[#FEACEC]/50 transition-all duration-150 ${
          isScrolledDown ? 'py-0.5' : 'pt-2.5 pb-1.5'
        }`
      },
      h(
        'div',
        { className: 'max-w-7xl w-full mx-auto flex items-center justify-between gap-2' },
        h(
          'div',
          {
            className: `shrink-0 origin-left transition-transform duration-150 ${
              isScrolledDown ? 'scale-75' : 'scale-100'
            }`
          },
          renderSubpageBackButton(onBack, t, lang)
        ),
        h(
          'h1',
          {
            className: `font-extrabold text-center flex-1 transition-all duration-150 ${
              isScrolledDown ? 'text-sm sm:text-base leading-tight' : 'text-xl sm:text-2xl'
            }`,
            style: { color: '#9F133A' }
          },
          tr('eduBtnMyBody', 'My Body')
        ),
        // Top-Right Corner (Always Available): MyBodySettingsButton1 (New button using the same Gear-with-a-Heart icon as the Cycle Calendar)
        h(
          'button',
          {
            id: 'MyBodySettingsButton1',
            'data-piece-name': 'MyBodySettingsButton1',
            type: 'button',
            onClick: handleMyBodySettingsClick,
            className: `shrink-0 origin-right flex items-center gap-2 px-2.5 py-1.5 rounded-xl border-2 border-black bg-white hover:bg-black/5 shadow-sm cursor-pointer transition-all duration-150 active:scale-95 ${
              isScrolledDown ? 'scale-75' : 'scale-100'
            }`,
            title: tr('mySettingsBtn', 'My Settings')
          },
          renderGearHeartIcon(h, 28, '#000000', '#CF366C'),
          h(
            'span',
            { className: 'text-xs sm:text-sm font-extrabold text-black' },
            tr('mySettingsBtn', 'My Settings')
          )
        )
      )
    ),
    // Embedded MyBodyInteractiveHomePage1.html
    h('iframe', {
      ref: iframeRef,
      src: './MyBodyInteractiveHomePage1.html?v=252&old=218',
      title: tr('eduBtnMyBody', 'My Body'),
      className: 'flex-1 w-full h-full border-0 bg-white',
      style: { backgroundColor: '#ffffff' },
      onLoad: () => {
        try {
          if (iframeRef.current && iframeRef.current.contentWindow) {
            const win = iframeRef.current.contentWindow;
            if (win.ReproductiveModel) {
              window.ReproductiveModel = win.ReproductiveModel;
            }
            win.addEventListener(
              'scroll',
              () => {
                const top = win.scrollY || (win.document && win.document.documentElement && win.document.documentElement.scrollTop) || 0;
                setIsScrolledDown(top > 20);
              },
              { passive: true }
            );
          }
        } catch (err) {
          // Ignore cross-origin frame access if any
        }
      }
    })
  );
}
