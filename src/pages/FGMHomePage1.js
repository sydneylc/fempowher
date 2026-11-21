import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=288';
import {
  renderCleanWaterHydrationCartoonSvg,
  renderFistulaHealingRepairCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=288';

export default function FGMHomePage1({
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
      heading: 'What is FGM (Female Genital Mutilation)?',
      body:
        'Female genital mutilation (FGM), sometimes called female genital cutting or female circumcision, refers to any procedure that partially or totally removes the external female genitalia or causes other injury to the female genital organs for non-medical reasons. FGM has no health benefits for girls or women, is recognized internationally as a violation of the human rights and bodily safety of girls and women, and is never a medical necessity.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Physical and Emotional Effects',
      body:
        'Depending on the type of cutting or narrowing performed (including Type III infibulation, where the vaginal opening is narrowed with a seal of tissue), girls and women may experience severe pain, difficulty passing urine slowly drop by drop, painful menstrual periods where blood cannot flow out freely, frequent urinary tract and pelvic infections, painful scar tissue or cysts, pain during sexual intercourse, and deep emotional trauma or anxiety.'
    },
    {
      id: 'how-to-treat',
      heading: 'Medical Care, De-Infibulation, and Where to Go',
      stickerLabel: 'SPECIALIZED CARE AVAILABLE',
      graphicRenderer: (sticker) => renderFistulaHealingRepairCartoonSvg(sticker),
      body:
        'Compassionate medical and surgical care can relieve pain and restore healthy urinary, menstrual, and sexual function. A gentle surgical procedure called de-infibulation safely opens a narrowed vaginal seal so urine and period blood can flow normally and childbirth can happen safely. Doctors can also remove painful scar cysts, offer pelvic floor therapy, and provide trauma-informed counseling. Use the FemPowHer map to find a confidential Women’s Hospital, OB-GYN Clinic, or Safe Haven near you.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How FGM Can Affect Pregnancy and Childbirth',
      headingIcon: renderPregnantLadyHeadingIcon('#FFC7DC'),
      body:
        'FGM does not stop a woman from becoming pregnant, and with skilled prenatal care you can have a safe delivery. If the vaginal opening was narrowed by FGM, doctors and midwives can perform a simple opening procedure (de-infibulation) during pregnancy or during labor to prevent severe tearing, prolonged obstructed labor, and postpartum bleeding, protecting both the mother and the baby.'
    },
    {
      id: 'protecting-girls',
      heading: 'Protecting Daughters and Supporting Survivors',
      stickerLabel: 'EVERY GIRL DESERVES SAFETY',
      graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
      body:
        'If you or a girl you know is at risk of FGM, or if you are living with physical pain or emotional distress from FGM, you are not alone. Women’s Safe Havens, emergency helplines in the Emergency Contacts tab, and specialized women’s clinics offer confidential protection, legal support, and respectful medical care without judgment.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'FGMHomePage1',
    title: `${tr('eduBtnFGM', 'FGM')} (${tr('eduBtnFGMSub', 'Female genital mutilation')})`,
    bgGradient: 'linear-gradient(180deg, #14532D 0%, #0F766E 100%)',
    bgColor: '#14532D',
    titleTintColor: '#DCFCE7',
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
