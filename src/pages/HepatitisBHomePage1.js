import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=244';
import {
  renderHealthyLiverShieldCartoonSvg,
  renderJaundiceManCartoonSvg,
  renderMotherHoldingNewbornSvg,
  renderPregnantLadyHeadingIcon,
  renderVaccineShieldCartoonSvg
} from './FlyerCartoonIllustrations.js?v=244';

export default function HepatitisBHomePage1({
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
      id: 'what-is',
      heading: 'What is Hepatitis B?',
      stickerLabel: 'PROTECT YOUR LIVER',
      graphicRenderer: (sticker) => renderHealthyLiverShieldCartoonSvg(sticker),
      body:
        'Hepatitis B is a serious liver infection caused by the Hepatitis B virus (HBV). It is transmitted when blood, semen, or vaginal fluids from a person carrying the virus enter another person’s body, most commonly through unprotected sexual contact, sharing needles or unsterilized medical or tattooing instruments, or from an infected mother to her baby during childbirth. Hepatitis B is 50 to 100 times more infectious than HIV, yet it is completely preventable with the Hepatitis B vaccine.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      stickerLabel: 'JAUNDICE',
      graphicRenderer: (sticker) => renderJaundiceManCartoonSvg(sticker),
      body:
        'Many people, especially when first infected, have no symptoms at all. When acute symptoms do appear (typically 1 to 4 months after exposure), they include extreme tiredness, loss of appetite, nausea and vomiting, low-grade fever, aching joints, pain or tenderness in the upper right abdomen (where the liver sits), dark tea-colored urine, pale clay-colored stools, and yellowing of the skin and the whites of the eyes (jaundice).'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      body:
        'Hepatitis B is diagnosed with a simple blood test at any hospital, prenatal clinic, or community health center on your FemPowHer map. Most healthy adults who catch acute Hepatitis B recover completely within a few months with rest, hydration, and medical monitoring. For women living with chronic Hepatitis B (lasting longer than 6 months), clinics and hospitals provide regular liver blood tests, ultrasound monitoring, and daily oral antiviral medications (such as tenofovir or entecavir) that keep the virus suppressed and protect the liver.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'While about 90% of healthy adults clear an acute Hepatitis B infection naturally, roughly 5% to 10% of adults, and up to 90% of infants infected at birth, develop lifelong chronic Hepatitis B. Left unmonitored and untreated over decades, chronic Hepatitis B causes ongoing liver inflammation that can silently progress to severe liver scarring (cirrhosis), liver failure, or liver cancer.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      body:
        'Hepatitis B affects the liver in men in the exact same way as in women: many infected men feel completely healthy and have no idea they are chronic carriers, yet the virus is present in high concentrations in their semen and blood and can be passed to a female partner during unprotected sex. When symptomatic, men experience fatigue, dark urine, right-upper abdominal discomfort, and jaundice.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#C8DCFF'),
      graphic: renderMotherHoldingNewbornSvg(),
      body:
        'Mother-to-child transmission at birth is the leading cause of chronic Hepatitis B worldwide. If a mother tests positive for Hepatitis B and no preventive steps are taken at delivery, her baby has up to a 90% chance of developing lifelong chronic infection. Fortunately, transmission to the baby is over 95% preventable: every pregnant woman should receive a Hepatitis B blood test, mothers with high viral loads can take safe antiviral medication in the third trimester, and the newborn is given the first Hepatitis B vaccine dose plus Hepatitis B Immune Globulin (HBIG) within 12 hours of birth.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      stickerLabel: 'VACCINE PROTECTION',
      graphicRenderer: (sticker) => renderVaccineShieldCartoonSvg(sticker),
      body:
        'If you have never received the Hepatitis B vaccine series, ask your local clinic or hospital about getting vaccinated because it provides lifelong protection. If you are pregnant or planning a pregnancy, make sure a Hepatitis B surface antigen (HBsAg) blood test is part of your prenatal visit, use condoms with partners whose status is unknown, and never share needles, razors, or unsterile instruments.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'HepatitisBHomePage1',
    title: tr('eduBtnHepatitisB', 'Hepatitis B'),
    gifSrc: './assets/std-hepatitis-b.gif?v=244',
    bgGradient: 'linear-gradient(180deg, #1B7BFE 0%, #0B4FD8 100%)',
    bgColor: '#1264EC',
    titleTintColor: '#C8DCFF',
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
