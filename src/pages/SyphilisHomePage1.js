import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=220';
import {
  renderClinicInjectionCartoonSvg,
  renderPainlessChancreStagesCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=220';

export default function SyphilisHomePage1({
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
      heading: 'What is Syphilis?',
      body:
        'Syphilis is a serious, completely curable bacterial sexually transmitted infection caused by a spiral-shaped corkscrew bacterium (spirochete) named Treponema pallidum. It spreads through direct skin-to-skin or mucous membrane contact with a syphilis sore during vaginal, anal, or oral sex, or from an infected mother to her baby through the placenta during pregnancy. Doctors progress Syphilis through four distinct stages (Primary, Secondary, Latent, and Tertiary) if it is not treated early.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      stickerLabel: 'PAINLESS SORE & RASH',
      graphicRenderer: (sticker) => renderPainlessChancreStagesCartoonSvg(sticker),
      body:
        'Syphilis is famous as "the great imitator" because its early signs are painless and easy to miss. In the Primary stage (about 3 weeks after exposure), a single firm, round, completely painless sore called a chancre appears where the bacteria entered, often hidden inside the vagina or on the cervix where a woman cannot see or feel it, and fades on its own in 3 to 6 weeks even though the bacteria remain in the blood. Weeks later, the Secondary stage causes a non-itchy reddish-brown rash (characteristically on the palms of the hands and soles of the feet), flat moist warts in the genital area (condyloma lata), patchy hair loss, swollen lymph nodes, sore throat, and fever.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: '100% CURED BY PENICILLIN',
      graphicRenderer: (sticker) => renderClinicInjectionCartoonSvg(sticker),
      body:
        'Syphilis is diagnosed with a quick blood test at any OB/GYN clinic, prenatal clinic, or hospital on your FemPowHer map, and is 100% cured with a prescription intramuscular injection of long-acting Benzathine Penicillin G (a single shot for early syphilis, or three weekly shots for late latent syphilis; safe alternative antibiotics are available for non-pregnant patients with a penicillin allergy). Both you and your sexual partner(s) must be tested and treated so you do not reinfect each other.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'When Secondary Syphilis symptoms fade without antibiotic treatment, the infection enters a hidden Latent stage that can last for years with no outward signs. In 15% to 30% of untreated people, the bacteria eventually cause Tertiary Syphilis or Neurosyphilis/Ocular Syphilis, severely damaging the heart and major blood vessels (aortic aneurysm), brain, spinal cord, nerves, eyes (causing blindness), liver, and bones.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      stickerLabel: 'TREAT BOTH PARTNERS',
      graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
      body:
        'In men, the Primary stage usually produces a firm, painless round sore (chancre) on the shaft, head, or foreskin of the penis, scrotum, anus, or mouth. Because the sore does not hurt and disappears on its own within a few weeks, many men mistakenly believe it was a minor scratch that healed, continuing to pass the infection to partners as they progress into the Secondary rash and Latent stages.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#FFC9E3'),
      body:
        'Untreated Syphilis in a pregnant woman is one of the most dangerous yet most preventable threats to a baby: the bacteria cross the placenta directly and can cause miscarriage, stillbirth, preterm birth, or severe Congenital Syphilis in the newborn (causing bone deformities, severe anemia, enlarged liver and spleen, blindness, deafness, or meningitis). Every pregnant woman should receive a Syphilis blood test at her very first prenatal visit (and again in the third trimester); a single course of Penicillin G given at least 30 days before delivery cures both the mother and the baby in the womb.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'Because a primary syphilis sore inside the vagina or on the cervix is completely painless, never wait for pain to get tested: ask for a Syphilis blood test alongside your routine STI screening at a clinic on your FemPowHer map, especially if you are pregnant, planning a pregnancy, or notice a painless genital sore or a rash on your palms or soles. Complete your penicillin injection treatment and follow up with blood tests to confirm your antibody levels drop as expected.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'SyphilisHomePage1',
    title: tr('eduBtnSyphilis', 'Syphilis'),
    gifSrc: './assets/std-syphilis.gif?v=220',
    // Bright Deep Fuchsia-Berry Magenta background (#E81D76 -> #B80F58)
    bgGradient: 'linear-gradient(180deg, #EC227A 0%, #BA105B 100%)',
    bgColor: '#D6196B',
    // White mixed with the berry-magenta background for bolded section titles
    titleTintColor: '#FFC9E3',
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
