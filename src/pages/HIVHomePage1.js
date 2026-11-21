import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=286';
import {
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderPrepPepShieldCartoonSvg,
  renderUequalsUArtCartoonSvg
} from './FlyerCartoonIllustrations.js?v=286';

export default function HIVHomePage1({
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
      heading: 'What is HIV?',
      body:
        'Human Immunodeficiency Virus (HIV) is a virus that targets the body’s immune system, specifically the CD4 white blood cells (T-cells) that defend the body against infections and certain cancers. HIV is transmitted when specific body fluids from a person with a detectable viral load (blood, semen, pre-seminal fluid, vaginal fluids, rectal fluids, or breast milk) enter another person’s bloodstream or mucous membranes through unprotected vaginal or anal sex, sharing needles or unsterilized medical instruments, or from mother to child during pregnancy, birth, or breastfeeding. HIV is never spread by hugging, kissing, sharing food or toilets, or mosquito bites.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      body:
        'About 2 to 4 weeks after initial exposure, many people experience a temporary flu-like illness (acute HIV infection) lasting 1 to 2 weeks, with fever, sore throat, swollen lymph nodes in the neck or groin, rash, muscle aches, headache, and night sweats. After this early phase, HIV enters a clinical latency stage where a woman can feel and look completely healthy with zero symptoms for 8 to 10 years or longer, even while the virus is active inside the immune system. In addition, women living with untreated HIV often experience frequent or stubborn vaginal yeast infections, pelvic inflammatory disease, and abnormal cervical Pap smear changes.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'U=U (UNDETECTABLE)',
      graphicRenderer: (sticker) => renderUequalsUArtCartoonSvg(sticker),
      body:
        'Modern HIV treatment is Antiretroviral Therapy (ART), typically a single daily pill (or long-acting clinic injection) available free or low-cost at hospitals, public health clinics, and prenatal centers on your FemPowHer map. When taken every day, ART reduces the amount of HIV in the blood to an undetectable level within 3 to 6 months, allowing a woman to live a long, healthy, normal lifespan. Scientifically proven around the world as U=U (Undetectable equals Untransmittable), a person on daily ART who maintains an undetectable viral load has zero risk of transmitting HIV to a sexual partner.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'Without Antiretroviral Therapy, HIV gradually destroys the body’s CD4 immune cells over several years until the immune system becomes too weak to fight off everyday germs, advancing to Stage 3 HIV, known as AIDS (Acquired Immunodeficiency Syndrome). At that stage, the body becomes vulnerable to life-threatening opportunistic infections such as tuberculosis, severe pneumonia, fungal meningitis, and invasive cervical cancer.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'HIV affects the immune system in men in the exact same way as in women: an infected man may experience a brief flu-like fever and swollen glands weeks after exposure and then feel completely healthy for years while carrying high levels of virus in his semen and blood. Biologically, during unprotected heterosexual intercourse, a woman is roughly twice as likely to contract HIV from an untreated male partner as a man is from a woman because the delicate mucosal lining of the vagina and cervix has a larger surface area exposed to semen.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#F3D5FF'),
      body:
        'Without any medical treatment, a mother with HIV has a 15% to 45% chance of passing the virus to her baby during pregnancy, labor, delivery, or breastfeeding. However, when a pregnant woman takes daily Antiretroviral Therapy throughout pregnancy and childbirth and her newborn receives a short course of preventive liquid HIV medicine after birth, the risk of mother-to-child transmission drops to less than 1%, allowing women living with HIV to give birth to completely HIV-free, healthy babies.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      stickerLabel: 'PrEP & PEP PREVENTION',
      graphicRenderer: (sticker) => renderPrepPepShieldCartoonSvg(sticker),
      body:
        'Know your status by getting a quick, confidential rapid finger-prick or blood test at any clinic on your FemPowHer map. If you were potentially exposed to HIV within the last 72 hours (through unprotected sex, a broken condom, or sexual assault), go to an emergency hospital or clinic immediately for PEP (Post-Exposure Prophylaxis), a 28-day emergency medication that prevents HIV if started within 72 hours. For ongoing protection, ask your clinic about PrEP (Pre-Exposure Prophylaxis), which reduces the risk of getting HIV from sex by over 99%.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'HIVHomePage1',
    title: tr('eduBtnHIV', 'HIV'),
    gifSrc: './assets/std-hiv.gif?v=286',
    // Bright Electric Violet-Purple background (#9333EA -> #6B21A8)
    bgGradient: 'linear-gradient(180deg, #9836F2 0%, #6D1EB0 100%)',
    bgColor: '#8129D0',
    // White mixed with the purple background for bolded section titles
    titleTintColor: '#F3D5FF',
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
