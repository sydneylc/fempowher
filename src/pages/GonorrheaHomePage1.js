import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=290';
import {
  renderBurningUrinationCartoonSvg,
  renderClinicInjectionCartoonSvg,
  renderDiplococciMicroscopeCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderUterusFallopianPidCartoonSvg
} from './FlyerCartoonIllustrations.js?v=290';

export default function GonorrheaHomePage1({
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
      heading: 'What is Gonorrhea?',
      stickerLabel: 'PAIRED DIPLOCOCCI',
      graphicRenderer: (sticker) => renderDiplococciMicroscopeCartoonSvg(sticker),
      body:
        'Gonorrhea is a common, curable bacterial sexually transmitted infection caused by Neisseria gonorrhoeae, which are microscopic kidney-bean-shaped bacteria that grow in pairs (diplococci) and thrive in warm, moist areas of the reproductive tract. It spreads through vaginal, anal, or oral sexual contact and can infect the cervix, uterus, Fallopian tubes, urethra, throat, eyes, and rectum.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      body:
        'More than half of women infected with Gonorrhea have no obvious symptoms or experience mild signs that are easily mistaken for a common bladder or vaginal infection. When symptoms appear, usually within 2 to 14 days of exposure, they include a thicker, creamy, yellowish, or greenish vaginal discharge, pain or burning when urinating, bleeding between menstrual periods, heavier periods, soreness in the throat (from oral contact), or pain in the lower belly and pelvis.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'CLINIC ANTIBIOTIC SHOT',
      graphicRenderer: (sticker) => renderClinicInjectionCartoonSvg(sticker),
      body:
        'Because Gonorrhea has developed resistance to many older oral antibiotics around the world, standard medical treatment is a single intramuscular antibiotic injection (usually ceftriaxone) given at a clinic or hospital, sometimes paired with oral antibiotics if Chlamydia is also present. Visit an OB/GYN clinic, public health clinic, or hospital on the FemPowHer map for testing and the proper injection. Never rely on leftover household antibiotic pills, and make sure your partner(s) are treated before resuming sex.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      stickerLabel: 'PROTECT FALLOPIAN TUBES',
      graphicRenderer: (sticker) => renderUterusFallopianPidCartoonSvg(sticker),
      body:
        'Left untreated, Gonorrhea ascends into the uterus and Fallopian tubes to cause severe Pelvic Inflammatory Disease (PID), internal pelvic abscesses, chronic pelvic pain, scarring that blocks the Fallopian tubes (causing infertility or ectopic pregnancy), and in rare cases can enter the bloodstream to cause Disseminated Gonococcal Infection (DGI) with fever, skin lesions, and swollen, painful joints.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      stickerLabel: 'BURNING URINATION',
      graphicRenderer: (sticker) => renderBurningUrinationCartoonSvg(sticker),
      body:
        'Unlike women, most men infected with Gonorrhea develop noticeable symptoms within 2 to 7 days of exposure, although some men remain asymptomatic carriers. Men typically experience a sharp burning sensation when urinating (often described as "peeing glass"), a white, yellow, or green pus-like discharge from the tip of the penis, and sometimes painful or swollen testicles.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#C9EBFF'),
      body:
        'Untreated Gonorrhea during pregnancy is linked to miscarriage, premature rupture of membranes, chorioamnionitis (infection of the amniotic sac), preterm birth, and postpartum uterine infection. If passed to the newborn’s eyes during childbirth, Gonorrhea causes a severe eye infection (ophthalmia neonatorum) that can damage vision if not prevented with routine newborn antibiotic eye ointment and maternal prenatal treatment.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'If you or your partner notice burning with urination, unusual yellowish-green discharge, or pelvic pain, go to a local clinic immediately for a combined Gonorrhea and Chlamydia test. Complete your clinic treatment, ensure all recent partners receive treatment too, abstain from sex for 7 days after both partners are treated, and get re-tested in 3 months.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'GonorrheaHomePage1',
    title: tr('eduBtnGonorrhea', 'Gonorrhea'),
    gifSrc: './assets/std-gonorrhea.gif?v=290',
    bgGradient: 'linear-gradient(180deg, #22A2FE 0%, #0D6FE8 100%)',
    bgColor: '#1586F4',
    titleTintColor: '#C9EBFF',
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
