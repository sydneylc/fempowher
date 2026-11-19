import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=221';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=221';
import {
  renderCleanWaterHydrationCartoonSvg,
  renderIronRichCareCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=221';

const h = React.createElement;

export default function LossOfAChildHomePage({
  onBack,
  onNavigateEducationPage = null,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  const [activeSubPage, setActiveSubPage] = useState(null);

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  // 4 Full-Width MakingGifButtons1 First-Person Loss of a Child Buttons (gifSrc: null ready for GIFs later)
  const lossButtons = [
    {
      id: 'loss-early-miscarriage',
      label: tr('lossBtnMiscarriage', 'I am having or just had a miscarriage (Early Pregnancy Loss)'),
      targetPage: 'MiscarriageHomePage',
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFEBF4 0%, #FFC4E0 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 8px rgba(255, 255, 255, 0.92)'
      }
    },
    {
      id: 'loss-stillbirth-infant',
      label: tr('lossBtnStillbirth', 'Stillbirth & Infant Loss (Physical Healing & Milk Care)'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #FFB5D6 0%, #F472B6 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#9F133A',
        textShadow: '0 1px 10px rgba(255, 255, 255, 0.95)'
      }
    },
    {
      id: 'loss-grief-and-support',
      label: tr('lossBtnGriefSupport', 'Grief, Emotional Healing & Fighting Unfair Blame'),
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #EC4899 0%, #BE185D 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(88, 8, 42, 0.7)'
      }
    },
    {
      id: 'loss-pregnancy-after-loss',
      label: tr('eduBtnPregnancyAfterLoss', 'Pregnancy After a Loss'),
      targetPage: 'PregnancyAfterLossHomePage',
      gifSrc: null,
      backgroundStyle: {
        background: 'linear-gradient(180deg, #9F133A 0%, #6E0926 100%)',
        border: 'none'
      },
      textStyle: {
        color: '#FFFFFF',
        textShadow: '0 2px 10px rgba(42, 2, 16, 0.78)'
      }
    }
  ];

  const subPageConfigs = {
    'loss-stillbirth-infant': {
      pageId: 'StillbirthInfantLossHomePage1',
      title: tr('lossBtnStillbirth', 'Stillbirth & Infant Loss (Physical Healing & Milk Care)'),
      bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1E40AF 100%)',
      bgColor: '#1D4ED8',
      titleTintColor: '#DBEAFE',
      sections: [
        {
          id: 'what-happens-physically',
          heading: 'Understanding Physical Recovery After Stillbirth or Infant Loss',
          headingIcon: renderPregnantLadyHeadingIcon('#DBEAFE'),
          body:
            'After delivering a baby in the second or third trimester or losing an infant, your body goes through complete postpartum physical recovery even while your heart is grieving. Your uterus contracts back to its pre-pregnancy size, you will have vaginal bleeding (lochia) for 4 to 6 weeks, and your perineum or Cesarean incision requires gentle daily care and rest.'
        },
        {
          id: 'managing-breast-milk',
          heading: 'Gently Stopping Breast Milk Production Without Pain or Infection',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'Three to five days after delivery, your breasts may become full and begin producing milk. Wear a firm, comfortable bra day and night, apply cool compresses or chilled clean cabbage leaves for 15 minutes at a time, avoid hot shower water directly on your breasts, and hand-express only a few drops if needed to relieve tightness (avoid full pumping, which stimulates more milk). You can also ask your hospital or OB/GYN clinic about safe medication to suppress lactation.'
        },
        {
          id: 'danger-signs',
          heading: 'When to Go to a Hospital Immediately',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'Go to a hospital immediately if you soak through two pads in an hour, pass very large clots, develop a fever or chills, notice foul-smelling vaginal discharge, or feel a hot, red, painful lump in your breast accompanied by fever.'
        }
      ]
    },
    'loss-grief-and-support': {
      pageId: 'GriefAndSupportLossHomePage1',
      title: tr('lossBtnGriefSupport', 'Grief, Emotional Healing & Fighting Unfair Blame'),
      bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
      bgColor: '#6D28D9',
      titleTintColor: '#EDE9FE',
      sections: [
        {
          id: 'never-your-fault',
          heading: 'Pregnancy and Infant Loss Are Never a Woman’s Fault',
          stickerLabel: 'TREAT BOTH PARTNERS',
          graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
          body:
            'In many communities around the world, women are unfairly blamed or stigmatized after a miscarriage, stillbirth, or infant loss. Medically and scientifically, the vast majority of pregnancy losses happen because of random chromosomal differences in the embryo, placental or umbilical cord complications, or untreated maternal infections, never because of a curse, stress, or something you did wrong.'
        },
        {
          id: 'grieving-at-your-pace',
          heading: 'Honoring Your Grief and Supporting Your Body and Mind',
          body:
            'There is no "right" timeline for grief. You may feel waves of deep sadness, anger, exhaustion, or emptiness, especially as pregnancy hormones drop rapidly after delivery. Allow yourself to rest, eat nourishing meals, and connect with compassionate nurses, maternal support groups, or Women’s Safe Havens on your FemPowHer map.'
        }
      ]
    }
  };

  if (activeSubPage && subPageConfigs[activeSubPage]) {
    const cfg = subPageConfigs[activeSubPage];
    return FlyerSTDstyleCartoonCaller1({
      pageId: cfg.pageId,
      title: cfg.title,
      gifSrc: null,
      bgGradient: cfg.bgGradient,
      bgColor: cfg.bgColor,
      titleTintColor: cfg.titleTintColor,
      sections: cfg.sections,
      onBack: () => setActiveSubPage(null),
      onShowNearestClinic,
      speakingId,
      speakText,
      UserLanguageChoice1,
      lang,
      t
    });
  }

  return h(
    'div',
    {
      id: 'LossOfAChildHomePage',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col overflow-x-hidden'
    },
    h(
      'div',
      { className: 'w-full px-4 sm:px-6 pt-3 pb-3 shrink-0 bg-white' },
      h(
        'div',
        { className: 'max-w-5xl w-full mx-auto' },
        renderSubpageBackButton(onBack, t, lang),
        h(
          'h1',
          {
            className: 'text-2xl sm:text-3xl font-extrabold text-center mt-1',
            style: { color: '#9F133A' }
          },
          tr('eduBtnLossOfChild', t.eduBtnLossOfChild || 'Loss of a Child')
        )
      )
    ),
    h(MakingGifButtons1, {
      sections: lossButtons,
      containerClassName: 'flex-1 w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${lossButtons.length}, minmax(175px, 1fr))` },
      onSelectSection: (sec) => {
        if (sec.targetPage && onNavigateEducationPage) {
          onNavigateEducationPage(sec.targetPage);
        } else if (sec.id) {
          setActiveSubPage(sec.id);
        }
      }
    })
  );
}
