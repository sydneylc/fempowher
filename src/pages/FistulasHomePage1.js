import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=228';
import {
  renderCleanWaterHydrationCartoonSvg,
  renderFistulaHealingRepairCartoonSvg,
  renderMaleBladderUrethraCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=228';

export default function FistulasHomePage1({
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
      heading: 'What is a Fistula?',
      body:
        'An obstetric or pelvic fistula is an abnormal opening or tunnel that forms between a woman’s birth canal (the vagina, cervix, or uterus) and her urinary tract (bladder or urethra, called a vesicovaginal fistula) or her rectum (called a rectovaginal fistula). It most commonly occurs after a long, obstructed childbirth when a woman cannot reach a hospital in time for an emergency Cesarean section, or occasionally after complicated pelvic surgery or injury. A fistula is a physical medical injury, never a curse or a fault of the woman.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      graphic: renderMaleBladderUrethraCartoonSvg(),
      body:
        'The primary sign of a fistula is continuous, involuntary leaking of urine, stool, or gas through the vagina day and night after childbirth or pelvic trauma. Constant moisture can cause painful burning, redness, and skin sores around the vulva and inner thighs, along with frequent bladder infections. Some women who endured days of obstructed labor also experience nerve compression in the pelvis that causes numbness, weakness, or difficulty lifting the foot (known as foot drop).'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: '90%+ SURGICALLY CURABLE',
      graphicRenderer: (sticker) => renderFistulaHealingRepairCartoonSvg(sticker),
      body:
        'Over 90% of obstetric and pelvic fistulas can be completely closed and cured with specialized reconstructive fistula repair surgery. If you go to a hospital within the first few days after delivery, small bladder fistulas can sometimes heal with simple continuous bladder catheter drainage alone, without surgery. Visit a Women’s Hospital or Fistula Repair Center on your FemPowHer map, where many humanitarian and public hospitals provide fistula repair surgery, physical therapy, and post-surgical care free of charge.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'Without medical care or surgical repair, a fistula rarely closes on its own after the initial postpartum weeks. Long-term untreated fistulas can lead to chronic urinary tract and kidney infections, painful bladder stones, vaginal scarring, skin ulceration, and deep emotional isolation or depression if a woman feels forced to hide her condition.'
    },
    {
      id: 'manifest-in-partner',
      heading: 'How Partners and Families Can Support Healing',
      body:
        'A fistula is not contagious and cannot be passed to a husband or partner. Partners and family members play a critical role by rejecting social stigma, helping the woman travel to a hospital or specialized fistula center, supporting her hydration and hygiene at home, and following the surgeon’s instructions to wait until the vaginal tissue is completely healed after repair surgery before resuming sexual intercourse.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy and Future Childbirth',
      headingIcon: renderPregnantLadyHeadingIcon('#FFC7DC'),
      body:
        'After successful fistula repair surgery, many women go on to have healthy future pregnancies and healthy babies. To protect the surgically repaired tissue between the birth canal and bladder from tearing open again during labor, doctors recommend early prenatal visits and delivering any future baby by planned Cesarean section at a well-equipped maternity hospital.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      stickerLabel: 'DRINK CLEAN WATER',
      graphicRenderer: (sticker) => renderCleanWaterHydrationCartoonSvg(sticker),
      body:
        'If you notice continuous leaking of urine or stool after childbirth, do not restrict drinking water. Instead, drink plenty of clean water every day to keep your urine diluted and prevent kidney infections and skin burning. Wash gently with clean warm water, protect irritated skin with a gentle barrier ointment if available, and use the FemPowHer map to connect with the nearest Women’s Hospital or Fistula Care Center.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'FistulasHomePage1',
    title: tr('eduBtnFistulas', 'Fistulas'),
    gifSrc: './assets/diseases-fistulas.gif?v=228',
    bgGradient: 'linear-gradient(180deg, #ED2762 0%, #C7144A 100%)',
    bgColor: '#D91E55',
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
