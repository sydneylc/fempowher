import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=253';
import {
  renderClinicInjectionCartoonSvg,
  renderMotherHoldingNewbornSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderUequalsUArtCartoonSvg,
  renderVaccineShieldCartoonSvg
} from './FlyerCartoonIllustrations.js?v=253';

export default function STDsAndPregnancyHomePage1({
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
      id: 'why-prenatal-testing-matters',
      heading: 'Why Every Pregnant Woman Needs First-Visit STD Screening',
      headingIcon: renderPregnantLadyHeadingIcon('#CFE2FF'),
      body:
        'Pregnancy does not prevent a woman from catching an STD, and because most STDs cause zero symptoms, a pregnant mother can carry an infection without knowing it. Untreated STDs during pregnancy can cross the placenta (like Syphilis and HIV), inflame the amniotic sac and trigger preterm labor (like Chlamydia, Gonorrhea, and Trichomonas), or pass to the baby in the birth canal during delivery. That is why every pregnant woman should receive routine blood and swab tests for Syphilis, HIV, Hepatitis B, Chlamydia, and Gonorrhea at her very first prenatal visit.'
    },
    {
      id: 'safe-antibiotics-in-pregnancy',
      heading: 'Curing Bacterial and Parasitic STDs Safely During Pregnancy',
      stickerLabel: '100% CURED BY PENICILLIN',
      graphicRenderer: (sticker) => renderClinicInjectionCartoonSvg(sticker),
      body:
        'Chlamydia, Gonorrhea, Syphilis, and Trichomonas can all be safely cured while you are pregnant using pregnancy-safe antibiotics prescribed by a doctor or midwife (such as azithromycin or amoxicillin for Chlamydia, ceftriaxone injection for Gonorrhea, Benzathine Penicillin G injection for Syphilis, and metronidazole for Trichomonas). Treating Syphilis with Penicillin at least 30 days before delivery cures both mother and baby in the womb and prevents stillbirth and congenital syphilis.'
    },
    {
      id: 'viral-stds-in-pregnancy',
      heading: 'Protecting Your Baby from HIV, Hepatitis B, and Herpes',
      stickerLabel: 'U=U (UNDETECTABLE)',
      graphicRenderer: (sticker) => renderUequalsUArtCartoonSvg(sticker),
      body:
        'Modern prenatal medicine prevents mother-to-child transmission of viral STDs in over 95% to 99% of cases. Mothers living with HIV who take daily Antiretroviral Therapy throughout pregnancy reduce transmission risk to under 1%. For mothers carrying Hepatitis B, giving the newborn the first Hepatitis B vaccine dose and Hepatitis B Immune Globulin (HBIG) within 12 hours of birth protects the baby for life. For mothers with a history of Genital Herpes, daily suppressive antiviral pills starting at 36 weeks (and a planned Cesarean delivery if active sores are present at labor) protect the newborn.'
    },
    {
      id: 'newborn-eye-care',
      heading: 'How Newborn Eye Ointment and Postnatal Care Protect Infants',
      graphic: renderMotherHoldingNewbornSvg(),
      body:
        'During vaginal childbirth, a newborn’s eyes pass directly through the birth canal where silent Gonorrhea or Chlamydia bacteria can cause severe neonatal eye infections (ophthalmia neonatorum) or infant pneumonia. Routine prenatal maternal treatment combined with gentle antibiotic eye ointment applied to the newborn’s eyes right after birth completely protects the baby’s vision.'
    },
    {
      id: 'partner-testing-in-pregnancy',
      heading: 'Why Your Partner Must Be Tested and Treated During Pregnancy Too',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'Even if you tested negative for all STDs at your first prenatal visit, you can still catch an infection later in the second or third trimester if your partner carries an untreated STI. Having your partner tested and treated alongside you (and repeating STD screening in the third trimester if there is any chance of new exposure) keeps both you and your baby safe all the way to delivery.'
    },
    {
      id: 'vaccines-before-and-during',
      heading: 'Vaccines Before, During, and After Pregnancy',
      stickerLabel: 'VACCINE PROTECTION',
      graphicRenderer: (sticker) => renderVaccineShieldCartoonSvg(sticker),
      body:
        'The Hepatitis B vaccine is safe to receive during pregnancy for women who have never been vaccinated and are at risk of exposure. The HPV vaccine is recommended before pregnancy or right after delivery (including while breastfeeding) to protect you against cervical cancer.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'If you are pregnant or planning a pregnancy, visit a maternity hospital, prenatal clinic, or OB/GYN on your FemPowHer map and ask specifically to confirm that Syphilis, HIV, Hepatitis B, Chlamydia, and Gonorrhea screening are included in your prenatal care.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'STDsAndPregnancyHomePage1',
    title: tr('stdMenuBtnPregnancy', 'STDs & Pregnancy'),
    gifSrc: './assets/sexual-health-stds.gif?v=253',
    bgGradient: 'linear-gradient(180deg, #2563EB 0%, #1D4ED8 100%)',
    bgColor: '#2057E0',
    titleTintColor: '#CFE2FF',
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
