import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=220';
import {
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderPrepPepShieldCartoonSvg,
  renderSilentInfectionCartoonSvg,
  renderVaccineShieldCartoonSvg
} from './FlyerCartoonIllustrations.js?v=220';

export default function WhatAreSTDsHomePage1({
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
      id: 'what-are-stds',
      heading: 'What Are STDs and STIs?',
      stickerLabel: 'SILENT (NO SYMPTOMS)',
      graphicRenderer: (sticker) => renderSilentInfectionCartoonSvg(sticker),
      body:
        'Sexually Transmitted Diseases (STDs), also called Sexually Transmitted Infections (STIs), are infections passed from one person to another during vaginal, anal, or oral sexual contact, or through intimate skin-to-skin genital contact. They are caused by three main types of microscopic organisms: bacteria (such as Chlamydia, Gonorrhea, and Syphilis), parasites (such as Trichomonas), and viruses (such as HPV, Genital Herpes, Hepatitis B, and HIV). Every bacterial and parasitic STD is 100% curable with the right clinic antibiotic, and every viral STD can be effectively treated, suppressed, or prevented with modern medicine.'
    },
    {
      id: 'why-often-silent',
      heading: 'Why Most STDs Have Zero Symptoms in Women',
      body:
        'Over 70% of women who contract a common STD like Chlamydia, HPV, Trichomonas, or early Syphilis feel completely healthy and notice no pain, itching, or unusual discharge at first. Because a woman’s vagina and cervix are internal, mild inflammation or a painless sore on the cervix is hidden from view. Feeling healthy never guarantees that you or your partner are free of an infection, which is why routine confidential clinic screening is the only reliable way to know for sure.'
    },
    {
      id: 'how-to-protect-yourself',
      heading: 'Barrier Protection and Vaccines (HPV and Hepatitis B)',
      stickerLabel: 'VACCINE PROTECTION',
      graphicRenderer: (sticker) => renderVaccineShieldCartoonSvg(sticker),
      body:
        'Using external (male) or internal (female) condoms consistently and correctly every time you have vaginal, anal, or oral sex significantly lowers the transmission of fluid-borne STDs like HIV, Chlamydia, Gonorrhea, and Trichomonas, and reduces skin-to-skin exposure to Herpes, HPV, and Syphilis. In addition, two safe, powerful vaccines protect you before exposure ever happens: the HPV vaccine prevents over 90% of cervical cancers and genital warts, and the Hepatitis B vaccine provides lifelong protection against Hepatitis B liver infection.'
    },
    {
      id: 'prep-and-72h-pep',
      heading: 'Daily PrEP and Emergency 72-Hour HIV PEP',
      stickerLabel: 'PrEP & PEP PREVENTION',
      graphicRenderer: (sticker) => renderPrepPepShieldCartoonSvg(sticker),
      body:
        'If your partner is living with HIV or you want extra protection, ask a clinic about PrEP (Pre-Exposure Prophylaxis), a daily pill or long-acting clinic injection that reduces the risk of getting HIV from sex by more than 99%. If you have an emergency exposure (a condom breaks, you have unprotected sex with someone whose HIV status is unknown, or you experience sexual assault), go to a hospital or clinic on your FemPowHer map immediately within 72 hours for PEP (Post-Exposure Prophylaxis), a 28-day emergency medicine that stops HIV from taking hold.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How STDs Pass Between Men and Women',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'Biologically, women are more vulnerable to contracting STDs during unprotected heterosexual intercourse than men because the delicate mucosal lining of the vagina and cervix has a larger surface area where semen and microscopic pathogens can rest. At the same time, many infected men have zero visible symptoms on the outside of the penis and can pass Chlamydia, HPV, Trichomonas, Herpes, or HIV without knowing they carry it.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How Protecting Yourself Protects Future Fertility and Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#C6FCEC'),
      body:
        'Catching and curing silent bacterial STDs early prevents Pelvic Inflammatory Disease (PID) and protects your Fallopian tubes from internal scarring so your future fertility remains intact. Routine prenatal STD screening at your very first pregnancy checkup also ensures that any infection is safely treated before it can affect your baby.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'Make annual STD screening a normal, stigma-free part of caring for your body whenever you have a new partner or once a year. Ask your nearest women’s clinic on the FemPowHer map about the HPV and Hepatitis B vaccines, keep condoms on hand, and never hesitate to ask a partner to get tested together before having unprotected sex.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'WhatAreSTDsHomePage1',
    title: tr('stdMenuBtnWhatAre', 'What are STDs & how do I protect myself?'),
    gifSrc: './assets/sexual-health-stds.gif?v=220',
    bgGradient: 'linear-gradient(180deg, #10B981 0%, #059669 100%)',
    bgColor: '#0E9F6E',
    titleTintColor: '#C6FCEC',
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
