import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=225';
import {
  renderBurningUrinationCartoonSvg,
  renderCervixPapScreenCartoonSvg,
  renderPainlessChancreStagesCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderSwabAndNoAlcoholCartoonSvg
} from './FlyerCartoonIllustrations.js?v=225';

export default function ThinkIHaveSTDHomePage1({
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
      id: 'signs-to-look-for',
      heading: 'Signs and Symptoms That Mean You Should Get Tested',
      stickerLabel: 'BURNING URINATION',
      graphicRenderer: (sticker) => renderBurningUrinationCartoonSvg(sticker),
      body:
        'You should visit a clinic for a confidential STD test if you notice any change in your normal vaginal discharge (such as yellowish, greenish, gray, thick, or frothy fluid, or a strong fishy odor), burning or stinging when you urinate, itching or redness around the vulva, bleeding or spotting between menstrual periods or after sex, deep pelvic or lower belly pain during intercourse, or any new bump, blister, wart, or sore near your genitals, anus, or mouth.'
    },
    {
      id: 'painless-or-silent',
      heading: 'Why Painless Sores or Zero Symptoms Still Need a Test',
      stickerLabel: 'PAINLESS SORE & RASH',
      graphicRenderer: (sticker) => renderPainlessChancreStagesCartoonSvg(sticker),
      body:
        'Not all STD symptoms hurt. For example, the first sign of Syphilis is a round sore (chancre) that is completely painless, and low-risk HPV genital warts usually do not itch or burn. Furthermore, if you recently had unprotected sex with a new partner or learned that a current or past partner tested positive for an STD, you should get tested even if you feel 100% fine, because most STDs start with zero symptoms.'
    },
    {
      id: 'what-happens-at-clinic',
      heading: 'How STD Testing Works at a Clinic (Quick and Painless)',
      stickerLabel: 'PAP & HPV SCREENING',
      graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
      body:
        'Getting tested at an OB/GYN clinic, community health center, or hospital on your FemPowHer map is fast, confidential, and gentle. You do not always need a pelvic speculum exam: Chlamydia, Gonorrhea, and Trichomonas are tested with a simple urine cup or a soft cotton swab of the vagina (which many clinics even let you swab yourself in private). Syphilis, HIV, and Hepatitis B are checked with a quick finger-prick or small blood draw, and any visible blister can be gently swabbed for Herpes.'
    },
    {
      id: 'when-to-test-window',
      heading: 'When to Get Tested After Unprotected Sex (Window Periods)',
      body:
        'Every infection has a brief "window period," which is the time between exposure and when a test can detect it. Chlamydia, Gonorrhea, and Trichomonas can usually be detected 1 to 2 weeks after exposure. Rapid HIV antigen/antibody blood tests and Syphilis blood tests are highly accurate starting 3 to 6 weeks after exposure (and confirmed at 3 months). However, if you have active symptoms right now, or if you need emergency 72-hour HIV PEP or emergency contraception within 3 to 5 days of unprotected sex, go to a clinic immediately without waiting.'
    },
    {
      id: 'what-not-to-do',
      heading: 'Why You Should Never Douche or Take Leftover Pills Before a Test',
      stickerLabel: 'SWAB TEST & NO ALCOHOL',
      graphicRenderer: (sticker) => renderSwabAndNoAlcoholCartoonSvg(sticker),
      body:
        'Before going to the clinic, do not douche, wash inside the vagina, or apply over-the-counter yeast creams, because washing away the discharge makes it harder for the clinic swab to see the organism and can push bacteria higher into your uterus. Never take leftover household antibiotics from an old illness: the wrong antibiotic will not cure Gonorrhea or Syphilis and can mask your test results while the infection continues to damage your reproductive tract.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'If You Might Be Pregnant too',
      headingIcon: renderPregnantLadyHeadingIcon('#FFE2CC'),
      body:
        'If your period is late or there is any chance you could be pregnant when you go in for STD testing, tell the nurse or doctor right away. Clinics can run a pregnancy test at the same visit and make sure any antibiotic or antiviral prescribed is 100% pregnancy-safe.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'Pause sexual contact until you have been evaluated, drink plenty of water, and tap the button below to find the nearest confidential Women’s Clinic, OB/GYN, or Hospital on your FemPowHer map. Write down the date of your last unprotected sexual contact and any symptoms you noticed so you can share them clearly with your care provider.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'ThinkIHaveSTDHomePage1',
    title: tr('stdMenuBtnThinkIHave', 'I think I might have an STD!'),
    gifSrc: './assets/sexual-health-stds.gif?v=225',
    bgGradient: 'linear-gradient(180deg, #F97316 0%, #D9460F 100%)',
    bgColor: '#EA580C',
    titleTintColor: '#FFE2CC',
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
