import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=231';
import {
  renderCleanWaterHydrationCartoonSvg,
  renderIronRichCareCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderThreeMonthRetestCalendarSvg
} from './FlyerCartoonIllustrations.js?v=231';

export default function MiscarriageHomePage({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  speakingId = null,
  speakText = () => {},
  onShowNearestClinic = () => {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };

  const sections = [
    {
      id: 'what-is-miscarriage',
      heading: 'What Is a Miscarriage (And Why It Is Never Your Fault)',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'A miscarriage is the spontaneous loss of a pregnancy during the first 20 weeks (most often in the first 12 weeks). About 1 in 4 recognized pregnancies ends in miscarriage, almost always because the fertilized egg had a random chromosomal difference that prevented it from developing further. A miscarriage is not caused by normal daily work, walking, stress, argument, or something you ate, and you should never feel ashamed or blamed.'
    },
    {
      id: 'signs-and-danger-signs',
      heading: 'What to Expect Physically vs. When to Go to a Hospital Immediately',
      stickerLabel: 'IRON & ANEMIA CARE',
      graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
      body:
        'During a miscarriage, the uterus contracts and sheds its lining, causing cramping and vaginal bleeding that is heavier than a normal menstrual period and typically tapers off over 1 to 2 weeks. Go to an emergency hospital or OB/GYN clinic on your FemPowHer map immediately if you soak through two full-sized pads an hour for two hours in a row, feel dizzy or faint, develop a fever or chills, notice foul-smelling vaginal discharge, or have severe one-sided lower belly pain (which can be a sign of an ectopic pregnancy in the Fallopian tube).'
    },
    {
      id: 'how-to-care-for-your-body',
      heading: 'Caring for Your Body While Your Uterus Heals',
      stickerLabel: 'DRINK CLEAN WATER',
      graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
      body:
        'To protect your uterus from infection while your cervix is closing, use clean sanitary pads or clean cloths rather than tampons, do not douche, and avoid putting anything inside the vagina or having sexual intercourse for at least 2 weeks after all bleeding has completely stopped. Drink plenty of clean water and eat iron-rich foods (leafy greens, beans, lentils, eggs, or meat) to replenish the blood you lost.'
    },
    {
      id: 'future-fertility',
      heading: 'When Your Period Returns and Future Fertility',
      stickerLabel: 'RE-TEST IN 3 MONTHS',
      stickerInnerTop: '4-6 WK',
      stickerInnerBottom: 'PERIOD',
      graphicRenderer: (sticker, topTxt, botTxt) =>
        renderThreeMonthRetestCalendarSvg(sticker, topTxt, botTxt),
      body:
        'Having one miscarriage does not stop you from having a healthy baby in the future: over 85% of women who experience a miscarriage go on to have a completely healthy next pregnancy. Your normal menstrual period usually returns in 4 to 6 weeks, though it is important to remember that you can ovulate as early as 2 weeks after a miscarriage if you are not yet ready to conceive again.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'MiscarriageHomePage',
    title: tr('lossBtnMiscarriage', 'I’ve Had a Miscarriage'),
    gifSrc: null,
    bgGradient: 'linear-gradient(180deg, #E11D48 0%, #BE123C 100%)',
    bgColor: '#D41742',
    titleTintColor: '#FFC9D6',
    sections,
    onBack,
    onShowNearestClinic,
    speakingId,
    speakText,
    UserLanguageChoice1,
    lang,
    t
  });
}
