import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=233';
import {
  renderCervixPapScreenCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderSilentInfectionCartoonSvg,
  renderVaccineShieldCartoonSvg
} from './FlyerCartoonIllustrations.js?v=233';

export default function HPVHomePage1({
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
      heading: 'What is HPV?',
      body:
        'Human Papillomavirus (HPV) is the most common sexually transmitted viral infection in the world, comprising a family of more than 200 related viruses spread through intimate skin-to-skin or vaginal, anal, or oral sexual contact. Roughly 80% of sexually active people contract at least one type of HPV during their lifetime. Low-risk HPV types (such as HPV 6 and 11) can cause benign genital warts, while high-risk oncogenic types (especially HPV 16 and 18) can cause cellular changes on the cervix and other mucosal tissues.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      stickerLabel: 'SILENT (NO SYMPTOMS)',
      graphicRenderer: (sticker) => renderSilentInfectionCartoonSvg(sticker),
      body:
        'In the vast majority of women, HPV causes no visible signs or physical discomfort at all, and the body’s immune system clears the virus naturally within 12 to 24 months. When low-risk HPV causes symptoms, they appear as small, soft, flesh-colored or pinkish bumps, either flat or shaped like tiny cauliflowers (genital warts), on the vulva, inside the vagina, on the cervix, or around the anus. High-risk HPV cell changes on the cervix are completely painless and invisible to the naked eye until advanced stages, which may cause bleeding after sex or between menstrual periods.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'PAP & HPV SCREENING',
      graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
      body:
        'While there is no pill that directly kills the HPV virus itself, every manifestation of HPV is highly treatable at an OB/GYN clinic, community women’s health center, or hospital. Genital warts can be removed with prescription topical creams, freezing (cryotherapy), or minor clinic procedures. Precancerous cervical cell changes found on a Pap smear or HPV test are safely removed with a quick outpatient procedure (such as cryotherapy, thermal ablation, or a LEEP procedure) before they can ever turn into cervical cancer.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'If a high-risk HPV infection persists on the cervix for 10 to 15 years without being detected by cervical screening or treated, the abnormal cells (cervical dysplasia) can slowly progress into invasive cervical cancer, as well as less common cancers of the vulva, vagina, anus, or throat. Untreated genital warts may stay the same, disappear on their own, or grow larger and multiply in number.'
    },
    {
      id: 'manifest-in-male',
      heading: 'How It Will Manifest in a Male',
      body:
        'Most men who carry HPV have zero symptoms and never know they have the virus, though they can easily pass it to a female partner through skin-to-skin genital contact. When symptoms do appear in men, low-risk HPV causes painless genital warts on the shaft or tip of the penis, scrotum, or around the anus. Persistent high-risk HPV in men can occasionally lead to penile, anal, or throat (oropharyngeal) cancers later in life.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#FFE5BD'),
      body:
        'Having HPV does not usually prevent a woman from having a healthy pregnancy and safe vaginal delivery. Hormonal changes during pregnancy can sometimes cause existing genital warts to grow faster, which a doctor can monitor or safely treat if they obstruct the birth canal. Transmission of HPV to a baby during delivery is very rare, and when it does occur, the infant’s immune system almost always clears the virus on its own.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      stickerLabel: 'VACCINE PROTECTION',
      graphicRenderer: (sticker) => renderVaccineShieldCartoonSvg(sticker),
      body:
        'Ask your nearest women’s health clinic about getting the HPV vaccine (which prevents over 90% of HPV-related cervical cancers and genital warts) and schedule routine cervical screening (a Pap smear or HPV swab) every 3 to 5 years, even if you feel completely healthy. Using condoms lowers the chance of HPV transmission, and avoiding tobacco smoke helps your immune system clear HPV much faster.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'HPVHomePage1',
    title: tr('eduBtnHPV', 'HPV'),
    gifSrc: './assets/std-hpv.gif?v=233',
    bgGradient: 'linear-gradient(180deg, #FF9E18 0%, #E87000 100%)',
    bgColor: '#F28508',
    titleTintColor: '#FFE5BD',
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
