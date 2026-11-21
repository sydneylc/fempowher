import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=283';
import {
  renderKegelExerciseTimerCartoonSvg,
  renderPelvicPessaryRingCartoonSvg,
  renderPregnantLadyHeadingIcon,
  renderUterusFallopianPidCartoonSvg
} from './FlyerCartoonIllustrations.js?v=283';

export default function ProlapseHomePage1({
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
      heading: 'What is Prolapse?',
      stickerLabel: 'PROTECT FALLOPIAN TUBES',
      graphicRenderer: (sticker) => renderUterusFallopianPidCartoonSvg(sticker),
      body:
        'Pelvic organ prolapse (including uterine prolapse) happens when the hammock of pelvic floor muscles and ligaments that holds up the uterus, bladder, and rectum becomes stretched or weakened, allowing the uterus or vaginal walls to drop downward into or slightly outside the vaginal opening. It most commonly develops after one or more vaginal childbirths, years of carrying heavy loads, chronic coughing or constipation, or the natural drop in estrogen after menopause. Prolapse is very common and never something to be ashamed of.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      body:
        'Women with pelvic organ prolapse typically notice a feeling of heaviness, pulling, or fullness in the lower pelvis or vagina (often described as feeling like you are sitting on a small ball), especially at the end of the day or after standing and lifting. You may see or feel a soft bulge of tissue near the vaginal opening, experience leaking of urine when coughing or lifting, or have difficulty emptying the bladder or bowel completely without changing position.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'PESSARY & PELVIC SUPPORT',
      graphicRenderer: (sticker) => renderPelvicPessaryRingCartoonSvg(sticker),
      body:
        'Prolapse is completely treatable at an OB/GYN clinic or Women’s Hospital on your FemPowHer map, often without any surgery at all. Mild to moderate prolapse improves significantly with guided pelvic floor muscle exercises (Kegels) and a vaginal pessary, which is a soft, removable medical silicone support ring that a nurse or doctor fits comfortably inside the vagina to hold the uterus and bladder in place. For severe prolapse, pelvic reconstructive surgery can permanently restore support.'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'While mild prolapse is not life-threatening, severe untreated prolapse where the cervix or vaginal tissue protrudes outside the body can rub against clothing and develop rawness, bleeding sores, or infection. Severe downward dropping of the bladder can also kink the urethra, preventing the bladder from emptying properly and increasing the risk of recurrent urinary tract infections.'
    },
    {
      id: 'manifest-in-partner',
      heading: 'How Prolapse Affects Daily Work, Intimacy, and Partners',
      body:
        'Prolapse cannot hurt a sexual partner during intercourse, though a woman may feel pelvic discomfort, dryness, or self-consciousness. A partner and family can help immediately by sharing heavy lifting tasks (such as carrying water, firewood, or heavy market loads) so the woman does not have to strain her pelvic floor while her tissue recovers or after a pessary or surgical repair.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy and Childbirth',
      headingIcon: renderPregnantLadyHeadingIcon('#E9D5FF'),
      body:
        'Difficult or prolonged vaginal deliveries are the most common cause of pelvic floor stretching later in life, and existing mild prolapse can feel heavier during pregnancy as the baby grows. Doing daily pelvic floor exercises during pregnancy and after childbirth, spacing pregnancies so your body can recover, and discussing delivery options with your midwife or obstetrician help protect your pelvic support.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      stickerLabel: 'DAILY KEGEL EXERCISES',
      stickerInnerTop: '5s',
      stickerInnerBottom: 'HOLD & LIFT',
      graphicRenderer: (sticker, topTxt, botTxt) =>
        renderKegelExerciseTimerCartoonSvg(sticker, topTxt, botTxt),
      body:
        'Practice daily Kegel exercises by gently squeezing and lifting the muscles you would use to stop the flow of urine, holding for 5 seconds and relaxing for 5 seconds, 10 times in a row, three times a day. Drink plenty of water and eat fiber-rich foods so you never have to strain during bowel movements, avoid lifting heavy objects whenever possible, and visit a local OB/GYN clinic to ask about a pessary support ring or pelvic floor care.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'ProlapseHomePage1',
    title: tr('eduBtnProlapse', 'Prolapse'),
    gifSrc: './assets/diseases-prolapse.gif?v=283',
    bgGradient: 'linear-gradient(180deg, #8E2FF7 0%, #6817C2 100%)',
    bgColor: '#7B23DC',
    titleTintColor: '#E9D5FF',
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
