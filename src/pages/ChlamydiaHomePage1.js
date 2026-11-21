import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=256';
import {
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderSilentInfectionCartoonSvg,
  renderThreeMonthRetestCalendarSvg,
  renderUterusFallopianPidCartoonSvg
} from './FlyerCartoonIllustrations.js?v=256';

export default function ChlamydiaHomePage1({
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
      heading: 'What is Chlamydia?',
      body:
        'Chlamydia is the most frequently reported bacterial sexually transmitted infection worldwide, caused by the bacterium Chlamydia trachomatis. It spreads through vaginal, anal, or oral sex with an infected partner, even if ejaculation does not occur, and primarily infects the delicate cells of a woman’s cervix and urethra, as well as the rectum or throat.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      stickerLabel: 'SILENT (NO SYMPTOMS)',
      graphicRenderer: (sticker) => renderSilentInfectionCartoonSvg(sticker),
      body:
        'Chlamydia is widely known to doctors as a "silent infection" because roughly 70% to 80% of women with Chlamydia feel no symptoms at all. When signs do appear, usually 1 to 3 weeks after exposure, they include an abnormal yellowish or mucoid vaginal discharge coming from an inflamed cervix, a burning sensation when urinating, bleeding or spotting between menstrual periods or after sex, and dull lower abdominal or pelvic pain.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'Chlamydia is 100% curable with a short course of prescription oral antibiotics, typically doxycycline taken twice daily for 7 days, or a single prescribed dose of azithromycin (especially during pregnancy). You can be tested with a simple urine sample or gentle vaginal swab at any local OB/GYN clinic, family planning center, or hospital on your FemPowHer map. Both you and your sexual partner(s) must complete antibiotic treatment and wait 7 full days before having sex again.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      stickerLabel: 'PROTECT FALLOPIAN TUBES',
      graphicRenderer: (sticker) => renderUterusFallopianPidCartoonSvg(sticker),
      body:
        'Because Chlamydia is often silent, untreated bacteria can travel upward from the cervix into the uterus and Fallopian tubes, causing Pelvic Inflammatory Disease (PID). Over time, PID can silently form scar tissue and adhesions inside the Fallopian tubes, leading to chronic pelvic pain, tubal infertility (difficulty getting pregnant), or a life-threatening ectopic pregnancy (where a fertilized egg gets trapped in a scarred Fallopian tube).'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      body:
        'About half of infected men have no symptoms at all and can pass Chlamydia to their partner without knowing it. When men do develop symptoms, they typically notice a watery, milky, or cloudy discharge from the tip of the penis, burning or stinging during urination, and occasionally pain, tenderness, or swelling in one or both testicles (epididymitis).'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#C9FFD0'),
      body:
        'Untreated Chlamydia during pregnancy increases the risk of preterm membrane rupture, early labor, and low birth weight. In addition, a baby passing through an infected birth canal during vaginal delivery can develop a Chlamydia eye infection (neonatal conjunctivitis) or infant pneumonia within the first weeks of life. Routine prenatal screening and safe antibiotic treatment during pregnancy completely protect both mother and baby.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      stickerLabel: 'RE-TEST IN 3 MONTHS',
      stickerInnerTop: '3 MO',
      stickerInnerBottom: 'CHECKUP',
      graphicRenderer: (sticker, topTxt, botTxt) =>
        renderThreeMonthRetestCalendarSvg(sticker, topTxt, botTxt),
      body:
        'If you have a new partner, notice spotting after sex or unusual discharge, or have not had an STI screening this year, visit a local clinic for a quick urine or swab test. Take the entire antibiotic course prescribed, help your partner get treated at the same time, and return for a repeat test 3 months after treatment to make sure you have not been re-exposed.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'ChlamydiaHomePage1',
    title: tr('eduBtnChlamydia', 'Chlamydia'),
    gifSrc: './assets/std-chlamydia.gif?v=256',
    bgGradient: 'linear-gradient(180deg, #25CB35 0%, #12A620 100%)',
    bgColor: '#1BB82A',
    titleTintColor: '#C9FFD0',
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
