import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=228';
import {
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderSwabAndNoAlcoholCartoonSvg,
  renderThreeMonthRetestCalendarSvg,
  renderUequalsUArtCartoonSvg
} from './FlyerCartoonIllustrations.js?v=228';

export default function JustDiagnosedSTDHomePage1({
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
      id: 'take-a-breath',
      heading: 'First: Take a Deep Breath (There Is Zero Shame Here)',
      stickerLabel: 'U=U (UNDETECTABLE)',
      graphicRenderer: (sticker) => renderUequalsUArtCartoonSvg(sticker),
      body:
        'Testing positive for an STD does not mean you are dirty, broken, or unlovable. Over 1 million people around the world acquire a sexually transmitted infection every single day, and roughly 80% of sexually active women and men contract at least one STI (such as HPV) during their lifetime. Getting tested and finding out your diagnosis is the bravest, healthiest thing you could do, because now you have the power to treat it and protect your body.'
    },
    {
      id: 'curable-vs-manageable',
      heading: 'Curable vs. Manageable: You Are Going to Be Okay',
      body:
        'If you were diagnosed with Chlamydia, Gonorrhea, Syphilis, or Trichomonas, your infection is 100% curable with a short course of prescription antibiotics or a single clinic injection. If you were diagnosed with a viral STI (HPV, Genital Herpes, Hepatitis B, or HIV), modern medicine gives you complete control: most HPV infections clear naturally or are easily treated at a clinic, daily antiviral pills keep Genital Herpes quiet, and daily Antiretroviral Therapy keeps HIV undetectable (U=U) so you live a full, healthy life and cannot pass it to a partner.'
    },
    {
      id: 'how-to-take-medicine',
      heading: 'How to Take Your Treatment So the Infection Does Not Come Back',
      stickerLabel: 'SWAB TEST & NO ALCOHOL',
      graphicRenderer: (sticker) => renderSwabAndNoAlcoholCartoonSvg(sticker),
      body:
        'Take every single dose of your prescribed antibiotic even if your symptoms disappear after the second day. Never share your single dose in half with a partner, because a half-dose will not cure either of you. Wait at least 7 full days after both you and your partner finish treatment (and until all symptoms or sores have completely disappeared) before having sex again. If you were prescribed metronidazole or tinidazole for Trichomonas, avoid all alcohol while taking the pills and for 24 to 72 hours afterward to avoid severe nausea.'
    },
    {
      id: 'telling-a-partner-safely',
      heading: 'How to Tell a Partner (And Staying Safe First)',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'For curable STDs, if you get treated but your partner does not, your partner will pass the exact same infection right back to you the next time you have sex. Many clinics offer Expedited Partner Therapy (giving you an extra prescription or medication packet to bring to your partner) or anonymous clinic partner-notification text/call services. However, your physical safety always comes first: if you are afraid a partner could react with violence, threats, or abuse, tell your nurse or connect with a Women’s Safe Haven on the FemPowHer map before saying anything.'
    },
    {
      id: 'when-to-retest',
      heading: 'Why a 3-Month Repeat Checkup Protects You',
      stickerLabel: 'RE-TEST IN 3 MONTHS',
      stickerInnerTop: '3 MO',
      stickerInnerBottom: 'CHECKUP',
      graphicRenderer: (sticker, topTxt, botTxt) =>
        renderThreeMonthRetestCalendarSvg(sticker, topTxt, botTxt),
      body:
        'If you were treated for Chlamydia, Gonorrhea, or Trichomonas, schedule a quick repeat test 3 months after finishing treatment (even if you feel completely healthy) to make sure a partner did not accidentally re-expose you. If you were treated during pregnancy, your obstetrician will also perform a test-of-cure 3 to 4 weeks after treatment to confirm the infection is completely gone before delivery.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'Can I Still Have Healthy Babies in the Future?',
      headingIcon: renderPregnantLadyHeadingIcon('#FFC7DC'),
      body:
        'Yes. Treating an STD promptly protects your uterus and Fallopian tubes from long-term inflammation, and even women living with chronic viral infections like Herpes, HPV, Hepatitis B, or HIV give birth to healthy, infection-free babies every day with routine prenatal care.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'Pick up and start your prescribed medication today, set a reminder on your phone for your 7-day no-sex healing window and your 3-month re-test, and tap back to "Types of STDs" whenever you want to read the specific flyer guide for your diagnosis.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'JustDiagnosedSTDHomePage1',
    title: tr('stdMenuBtnJustDiagnosed', 'I just got diagnosed with an STD!'),
    gifSrc: './assets/sexual-health-stds.gif?v=228',
    bgGradient: 'linear-gradient(180deg, #E61E64 0%, #B8124C 100%)',
    bgColor: '#D41758',
    titleTintColor: '#FFC7DC',
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
