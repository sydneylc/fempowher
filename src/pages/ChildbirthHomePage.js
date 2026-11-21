import React, { useState } from 'https://esm.sh/react@18.3.1';
import {
  MakingGifButtons1,
  renderSubpageBackButton
} from './PregnancyHomePage.js?v=268';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=268';
import {
  renderCleanWaterHydrationCartoonSvg,
  renderIronRichCareCartoonSvg,
  renderMotherHoldingNewbornSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=268';

const h = React.createElement;

export default function ChildbirthHomePage({
  onBack,
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

  // 4 Concise, First-Person MakingGifButtons1 Childbirth Buttons (gifSrc: null ready for GIFs later)
  const childbirthButtons = [
    {
      id: 'childbirth-stages-of-labor',
      label: tr('childbirthBtnStages', 'How Do I Know I’m in Labor?'),
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
      id: 'childbirth-vaginal-and-pain-relief',
      label: tr('childbirthBtnVaginal', 'Vaginal Birth'),
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
      id: 'childbirth-csection',
      label: tr('childbirthBtnCSection', 'C-Section'),
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
      id: 'childbirth-emergency-signs',
      label: tr('childbirthBtnDangerSigns', 'Emergency Signs in Labor'),
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
    'childbirth-stages-of-labor': {
      pageId: 'ChildbirthStagesHomePage1',
      title: tr('childbirthBtnStages', 'How Do I Know I’m in Labor?'),
      bgGradient: 'linear-gradient(180deg, #E11D48 0%, #BE123C 100%)',
      bgColor: '#D41742',
      titleTintColor: '#FFC9D6',
      sections: [
        {
          id: 'signs-of-true-labor',
          heading: 'True Labor Contractions vs. Practice Contractions (Braxton Hicks)',
          headingIcon: renderPregnantLadyHeadingIcon('#FFC9D6'),
          body:
            'True labor contractions become steadily stronger, longer, and closer together over time (typically lasting 45 to 60 seconds and coming every 3 to 5 minutes during active labor), radiating from your lower back around to your lower abdomen, and do not stop when you drink water or lie down. You may also notice the loss of your mucus plug ("bloody show") or a gush or steady trickle of clear amniotic fluid when your water breaks.'
        },
        {
          id: 'three-stages-of-labor',
          heading: 'The 3 Stages of Labor (Dilation, Pushing, and Delivering the Placenta)',
          stickerLabel: 'DRINK CLEAN WATER',
          graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
          body:
            'In Stage 1, rhythmic uterine contractions thin out (efface) and open (dilate) your cervix from 0 to 10 centimeters. In Stage 2, once your cervix is fully dilated to 10 centimeters, you push with your contractions to guide your baby down through the birth canal and into the world. In Stage 3, within 5 to 30 minutes after your baby is born, gentle contractions deliver the placenta.'
        }
      ]
    },
    'childbirth-vaginal-and-pain-relief': {
      pageId: 'ChildbirthVaginalHomePage1',
      title: tr('childbirthBtnVaginal', 'Vaginal Birth'),
      bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
      bgColor: '#0E857B',
      titleTintColor: '#CCFBF1',
      sections: [
        {
          id: 'positions-and-breathing',
          heading: 'Upright Labor Positions, Breathing, and Natural Comfort',
          graphic: renderMotherHoldingNewbornSvg(),
          body:
            'Walking, swaying on a birth ball, squatting, kneeling, or lying on your side opens your pelvic outlet and uses gravity to help your baby descend smoothly while reducing the risk of severe perineal tears. Warm showers, lower-back counter-pressure massage, and slow deep breathing between contractions keep oxygen flowing to both you and your baby.'
        },
        {
          id: 'medical-pain-relief',
          heading: 'Medical Pain Relief Options at a Hospital',
          body:
            'At equipped maternity hospitals on your FemPowHer map, you can also request medical pain relief such as an epidural block (which numbs the lower half of the body while keeping you awake to push), inhaled nitrous oxide, or safe intravenous pain relief.'
        }
      ]
    },
    'childbirth-csection': {
      pageId: 'ChildbirthCSectionHomePage1',
      title: tr('childbirthBtnCSection', 'C-Section'),
      bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1E40AF 100%)',
      bgColor: '#1D4ED8',
      titleTintColor: '#DBEAFE',
      sections: [
        {
          id: 'when-csection-saves-lives',
          heading: 'When a Cesarean Section Protects Mother and Baby',
          headingIcon: renderPregnantLadyHeadingIcon('#DBEAFE'),
          body:
            'A Cesarean section (C-section) is a surgical delivery of the baby through a low horizontal incision in the mother’s abdomen and uterus. It is life-saving when labor is obstructed (preventing obstetric fistula and stillbirth), when the placenta covers the cervix (placenta previa), when the baby is in distress or transverse/breech, or when active genital herpes sores are present at labor.'
        }
      ]
    },
    'childbirth-emergency-signs': {
      pageId: 'ChildbirthDangerSignsHomePage1',
      title: tr('childbirthBtnDangerSigns', 'Emergency Signs in Labor'),
      bgGradient: 'linear-gradient(180deg, #DC2626 0%, #991B1B 100%)',
      bgColor: '#B91C1C',
      titleTintColor: '#FECACA',
      sections: [
        {
          id: 'when-to-rush-to-hospital',
          heading: 'Emergency Warning Signs That Need Immediate Hospital Care',
          stickerLabel: 'IRON & ANEMIA CARE',
          graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
          body:
            'Go to the nearest maternity hospital on your FemPowHer map immediately if your water breaks and the fluid looks dark green or brown (meconium) or smells bad, if you have bright red heavy vaginal bleeding like a period, if your baby’s movements slow down or stop, if active labor lasts more than 12 hours without progress (obstructed labor), if you see the umbilical cord at the vaginal opening, or if you develop a severe headache, vision changes, or seizures (eclampsia).'
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
      id: 'ChildbirthHomePage',
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
          tr('eduBtnChildbirth', t.eduBtnChildbirth || 'Childbirth')
        )
      )
    ),
    h(MakingGifButtons1, {
      sections: childbirthButtons,
      containerClassName: 'flex-1 w-full grid',
      containerStyle: { gridTemplateRows: `repeat(${childbirthButtons.length}, minmax(175px, 1fr))` },
      onSelectSection: (sec) => {
        if (sec && sec.id) {
          setActiveSubPage(sec.id);
        }
      }
    })
  );
}
