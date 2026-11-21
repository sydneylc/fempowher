import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=282';
import {
  renderCervixPapScreenCartoonSvg,
  renderPartnerPillsCartoonSvg,
  renderPrepPepShieldCartoonSvg
} from './FlyerCartoonIllustrations.js?v=282';

export default function ForMeHomePage({
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

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'ForMeHomePage',
    title: tr('fpBtnContraceptionForMe', 'My Birth Control & Contraception Options'),
    gifSrc: './assets/fp-contraception-for-me.gif?v=282',
    bgGradient: 'linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)',
    bgColor: '#6D28D9',
    titleTintColor: '#EDE9FE',
    sections: [
      {
        id: 'larc-iud-implant',
        heading: 'Long-Acting Reversible Contraception (IUD & Arm Implant — Over 99% Effective)',
        stickerLabel: 'PAP & HPV SCREENING',
        graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
        body:
          'Hormonal and Copper IUDs (Intrauterine Devices placed gently in the uterus at a clinic) and the contraceptive arm implant (a tiny flexible rod under the skin of the upper arm) are over 99% effective for 3 to 10 years, require no daily reminders, and your natural fertility returns immediately as soon as you ask a provider to remove them.'
      },
      {
        id: 'pills-patch-ring-injection',
        heading: 'Birth Control Pills, Vaginal Ring, Patch & 3-Month Injection',
        stickerLabel: 'TREAT BOTH PARTNERS',
        graphicRenderer: (sticker) => renderPartnerPillsCartoonSvg(sticker),
        body:
          'Birth control pills (taken once a day), the contraceptive vaginal ring (placed for 3 weeks), the weekly skin patch, and the 3-month contraceptive injection (Depo-Provera) use safe hormones to prevent ovulation so no egg is released. They can also make periods lighter, more regular, and less painful.'
      },
      {
        id: 'condoms-dual-protection',
        heading: 'External & Internal Condoms: The Only Birth Control That Also Stops STDs',
        stickerLabel: 'PrEP & PEP PREVENTION',
        graphicRenderer: (sticker) => renderPrepPepShieldCartoonSvg(sticker),
        body:
          'While IUDs, implants, pills, and injections are wonderful at preventing pregnancy, only external (male) condoms and internal (female) condoms protect you from both pregnancy and Sexually Transmitted Diseases (STDs) like HIV, Chlamydia, and Gonorrhea.'
      }
    ],
    onBack,
    onShowNearestClinic,
    speakingId,
    speakText,
    UserLanguageChoice1,
    lang,
    t
  });
}
