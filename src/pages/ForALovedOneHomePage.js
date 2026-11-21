import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=277';
import {
  renderCervixPapScreenCartoonSvg,
  renderCleanWaterHydrationCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=277';

export default function ForALovedOneHomePage({
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

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'ForALovedOneHomePage',
    title: tr('eduBtnForLovedOne', 'For a Loved One (Supporting a Partner, Sister, or Friend)'),
    gifSrc: './assets/fp-for-loved-one.gif?v=277',
    bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
    bgColor: '#6D28D9',
    titleTintColor: '#EDE9FE',
    sections: [
      {
        id: 'supporting-pregnant-loved-one',
        heading: 'Supporting a Pregnant Partner, Daughter, Sister, or Friend (Knowing the Warning Signs)',
        headingIcon: renderPregnantLadyHeadingIcon('#EDE9FE'),
        stickerLabel: 'TREAT BOTH PARTNERS',
        graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
        body:
          'When someone you love is pregnant, planning a pregnancy, or recovering after childbirth, your gentle support can save her life. Accompany her to prenatal checkups, help her rest and eat iron-rich foods, and know the urgent maternal red flags: never wait more than 12 hours in active labor before reaching a hospital, and seek emergency care immediately if she experiences vaginal bleeding, severe headache, blurred vision, high fever, or sudden swelling of the face and hands.'
      },
      {
        id: 'supporting-daughters-and-elders',
        heading: 'Caring Across Generations: Daughters (8–20) & Mothers or Grandmothers (50+)',
        stickerLabel: 'PAP & HPV SCREENING',
        graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
        body:
          'For younger daughters and sisters (ages 8–20), reassure her before her first period so she knows menstruation is healthy and normal, and seek care if she has debilitating cramps or heavy bleeding causing dizziness and anemia. For mothers, aunties, and grandmothers (50+ after menopause), remember that even a single drop of vaginal bleeding or spotting after menopause is an urgent medical sign that needs an OB/GYN checkup right away.'
      },
      {
        id: 'listening-without-judgment',
        heading: 'How to Listen Without Judgment and Help Her Reach a Safe Haven or Clinic',
        stickerLabel: 'DRINK CLEAN WATER',
        graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
        body:
          'Many women and girls hide reproductive pain, unplanned pregnancy concerns, or domestic coercion out of modesty, stigma, or fear of burdening the family. Ask your loved one gently how she is feeling, press "Listen Aloud" in FemPowHer so she can hear any health guide in her own spoken language, and offer to walk or ride with her to a confidential OB/GYN clinic or 24/7 Women’s Safe Haven on the FemPowHer map.'
      }
    ],
    onBack,
    onShowNearestClinic,
    speakingId,
    speakText,
    UserLanguageChoice1,
    lang,
    t
  });
}
