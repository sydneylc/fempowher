import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=224';
import {
  renderCervixPapScreenCartoonSvg,
  renderCleanWaterHydrationCartoonSvg,
  renderIronRichCareCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=224';

export default function PregnancyAfterLossHomePage({
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
      id: 'mixed-emotions',
      heading: 'It Is Normal to Feel Both Hope and Fear at the Same Time',
      headingIcon: renderPregnantLadyHeadingIcon('#CCFBF1'),
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'Being pregnant again after a miscarriage, stillbirth, or infant loss brings a mix of joy, hope, anxiety, and protective fear, especially around the week of pregnancy when your previous loss occurred. Feeling anxious will not harm your baby or cause a loss. Take this pregnancy one day and one milestone at a time.'
    },
    {
      id: 'early-prenatal-care',
      heading: 'Getting Early Prenatal Care and Extra Reassurance Checkups',
      stickerLabel: 'PAP & HPV SCREENING',
      graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
      body:
        'Visit an OB/GYN clinic, midwife, or maternity hospital on your FemPowHer map as soon as you see a positive pregnancy test. Tell your provider about your previous loss so they can check your blood type (including Rh factor, in case you need a protective RhoGAM injection), screen for treatable conditions like thyroid or blood pressure issues, and schedule an early ultrasound so you can hear your baby’s heartbeat.'
    },
    {
      id: 'nutrition-and-folic-acid',
      heading: 'Daily Folic Acid, Iron, and Gentle Self-Care',
      stickerLabel: 'IRON & ANEMIA CARE',
      graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
      body:
        'Take a daily prenatal vitamin with at least 400 to 800 micrograms of folic acid and iron, drink plenty of clean water, and ask your doctor or midwife if low-dose prenatal aspirin or progesterone support is recommended for your medical history.'
    },
    {
      id: 'when-to-call-clinic',
      heading: 'Never Hesitate to Go In for Peace of Mind',
      stickerLabel: 'DRINK CLEAN WATER',
      graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
      body:
        'In a pregnancy after loss, you never need to apologize for asking for an extra heartbeat check. Go to your clinic or hospital anytime you notice vaginal spotting, cramping, a change in your baby’s movements in the second or third trimester, or whenever you need medical reassurance.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'PregnancyAfterLossHomePage',
    title: tr('lossBtnPregnantAfterLoss', 'I Am Pregnant After a Loss'),
    gifSrc: null,
    bgGradient: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
    bgColor: '#0E857B',
    titleTintColor: '#CCFBF1',
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
