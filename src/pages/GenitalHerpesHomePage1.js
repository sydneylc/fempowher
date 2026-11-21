import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=258';
import {
  renderBurningUrinationCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderSilentInfectionCartoonSvg
} from './FlyerCartoonIllustrations.js?v=258';

export default function GenitalHerpesHomePage1({
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
      heading: 'What is Genital Herpes?',
      stickerLabel: 'SILENT (NO SYMPTOMS)',
      graphicRenderer: (sticker) => renderSilentInfectionCartoonSvg(sticker),
      body:
        'Genital herpes is a very common viral sexually transmitted infection caused by the Herpes Simplex Virus, either HSV-2 (which most commonly causes genital outbreaks) or HSV-1 (the same virus that causes cold sores on the lips, which can also be passed to the genitals through oral sexual contact). Once the virus enters through tiny microscopic breaks in the skin or mucous membranes during skin-to-skin sexual contact, it rests quietly in the nerve roots near the base of the spine and can occasionally wake up to cause recurrent outbreaks.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      stickerLabel: 'BURNING URINATION',
      graphicRenderer: (sticker) => renderBurningUrinationCartoonSvg(sticker),
      body:
        'More than 80% of people who carry genital herpes do not know they have it because they have no symptoms or only mild redness mistaken for an ingrown hair or razor bump. When a first outbreak occurs (usually 2 to 12 days after exposure), it begins with tingling, itching, or shooting tenderness in the vulva, vagina, cervix, buttocks, or inner thighs, followed by clusters of small fluid-filled blisters that open into tender shallow sores. During a first outbreak, women often experience painful burning when urine touches the sores, swollen groin lymph nodes, body aches, and a mild fever before the sores crust over and heal completely without scarring in 2 to 3 weeks.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'DAILY ANTIVIRAL PILLS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'While there is no medication that permanently erases the Herpes Simplex Virus from the nerve roots, prescription oral antiviral tablets (valacyclovir, acyclovir, or famciclovir) available at any OB/GYN clinic, sexual health center, or hospital on your FemPowHer map make genital herpes completely manageable. Taking antiviral pills at the very first tingle of an outbreak makes sores heal twice as fast, and taking a single daily suppressive antiviral pill reduces outbreaks by 70% to 80% and cuts the chance of passing the virus to a partner by nearly half.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'For most healthy women, genital herpes outbreaks naturally become less frequent, shorter, and much milder over time as the body builds antibodies. However, leaving frequent outbreaks untreated causes repeated painful genital ulcerations that disrupt the protective mucosal barrier of the vagina and vulva, increasing vulnerability to contracting HIV if exposed, and can occasionally cause temporary difficulty urinating if severe swelling irritates the urethra.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      body:
        'Just like women, the majority of men carrying HSV-2 or genital HSV-1 have no obvious symptoms and can transmit the virus during skin-to-skin contact through asymptomatic viral shedding even when no sores are visible. When men do have outbreaks, small grouped blisters or small red ulcers appear on the shaft, foreskin, or head of the penis, on the scrotum, or around the thighs and anus, healing within 1 to 2 weeks.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#D8D7FF'),
      body:
        'Women who already have genital herpes before getting pregnant pass protective antibodies to their baby through the placenta and almost always have healthy babies. Tell your midwife or obstetrician early in pregnancy if you or your partner have ever had genital herpes: your doctor will prescribe safe daily suppressive antiviral medication starting at 36 weeks of pregnancy to prevent an outbreak at delivery. If active herpes blisters or prodromal tingling are present on the vulva or cervix when labor starts, delivering by Cesarean section protects the newborn from contracting neonatal herpes in the birth canal.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'If you notice a tender blister or sore on your vulva, visit a local clinic on your FemPowHer map while the sore is still fresh so a clinician can take a quick, accurate viral swab test. During an outbreak, keep the area clean and dry, pour warm water over your vulva while urinating to prevent stinging, wear loose breathable cotton underwear, avoid all sexual contact from the first tingle until the skin is completely smooth and healed, and talk with your clinic about daily suppressive antiviral pills.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'GenitalHerpesHomePage1',
    title: tr('eduBtnGenitalHerpes', 'Genital Herpes'),
    gifSrc: './assets/std-genital-herpes.gif?v=258',
    // Bright Electric Indigo-Blue background (#4A47F5 -> #2F2CD8)
    bgGradient: 'linear-gradient(180deg, #4E4BF8 0%, #2E2BD4 100%)',
    bgColor: '#3E3BE6',
    // White mixed with the indigo background for bolded section titles
    titleTintColor: '#D8D7FF',
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
