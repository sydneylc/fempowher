import React from 'https://esm.sh/react@18.3.1';
import { FlyerSTDstyleCartoonCaller1 } from './TrichomonasHomePage1.js?v=224';
import {
  renderCervixPapScreenCartoonSvg,
  renderFibroidsUterusDiagramSvg,
  renderIronRichCareCartoonSvg,
  renderPregnantLadyHeadingIcon
} from './FlyerCartoonIllustrations.js?v=224';

export default function FibroidsHomePage1({
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
      heading: 'What are Fibroids?',
      stickerLabel: 'BENIGN MUSCLE GROWTHS',
      graphicRenderer: (sticker) => renderFibroidsUterusDiagramSvg(sticker),
      body:
        'Uterine fibroids (medically called leiomyomas or myomas) are very common, benign (non-cancerous) swirling muscular growths that develop from the smooth muscle tissue of the uterus. They can grow inside the muscular wall of the uterus (intramural), bulge into the inner uterine cavity (submucosal), project outward from the outer surface of the uterus (subserosal), or hang from a narrow stalk (pedunculated). Up to 70% of women develop at least one small fibroid by age 50, and fibroids almost never turn into cancer.'
    },
    {
      id: 'signs-and-symptoms',
      heading: 'Signs and Symptoms',
      stickerLabel: 'IRON & ANEMIA CARE',
      graphicRenderer: (sticker) => renderIronRichCareCartoonSvg(sticker),
      body:
        'Many women with small fibroids feel no symptoms at all. When fibroids grow larger or press against the uterine lining, they commonly cause heavy, gushing, or prolonged menstrual periods with large blood clots, pelvic heaviness or fullness, a visibly enlarged lower belly, frequent urination (when a fibroid presses on the bladder), constipation, and dull aching in the lower back or legs.'
    },
    {
      id: 'how-to-treat',
      heading: 'How to Treat and Where to Go to Be Treated',
      stickerLabel: 'PAP & HPV SCREENING',
      graphicRenderer: (sticker) => renderCervixPapScreenCartoonSvg(sticker),
      body:
        'Fibroids are diagnosed with a gentle pelvic exam and a painless pelvic ultrasound at any OB/GYN clinic or women’s hospital on your FemPowHer map. Treatment depends on your symptoms and whether you plan to have children in the future: doctors can prescribe iron supplements, non-hormonal medications (like tranexamic acid) or hormonal options to reduce heavy bleeding, minimally invasive procedures to shrink fibroids, or a myomectomy (a surgery that removes only the fibroids while keeping your uterus intact for future pregnancy).'
    },
    {
      id: 'when-not-treated',
      heading: 'What Happens When You Do Not Treat (Long-Term)',
      body:
        'Small, painless fibroids that do not cause heavy bleeding do not require surgery and often shrink naturally after menopause when estrogen levels drop. However, leaving severely bleeding fibroids untreated for years can drain the body’s iron stores and cause severe iron-deficiency anemia, leading to chronic exhaustion, dizziness, fainting, shortness of breath, and strain on the heart.'
    },
    {
      id: 'manifest-in-partner',
      heading: 'How Fibroids Affect Intimacy and Your Partner',
      body:
        'Fibroids are not an infection and cannot be transmitted to a partner. However, fibroids positioned near the cervix or lower uterus can cause deep pelvic pain or pressure during sexual intercourse (dyspareunia) or light spotting afterward. Communicating openly with your partner about comfortable positions and seeking medical treatment for large fibroids can completely relieve pain during intimacy.'
    },
    {
      id: 'affect-pregnancy',
      heading: 'How It Can Affect Pregnancy',
      headingIcon: renderPregnantLadyHeadingIcon('#FFD2CC'),
      body:
        'Most women with fibroids have completely normal pregnancies, though submucosal fibroids that distort the inside of the uterine cavity can sometimes make it harder for a fertilized egg to implant or slightly increase the risk of miscarriage, breech positioning, or Cesarean delivery. Sometimes pregnancy hormones cause a fibroid to grow quickly and outgrow its blood supply (red degeneration), causing temporary localized pain that your obstetrician can safely manage with rest and prenatal care.'
    },
    {
      id: 'what-to-do-today',
      heading: 'What You Can Do Today',
      body:
        'If you soak through a pad or cloth every hour for two or more hours in a row, pass large blood clots, or feel dizzy and exhausted during your period, schedule an ultrasound at a local OB/GYN clinic on your FemPowHer map. Track your heavy bleeding days in your Cycle Calendar and eat iron-rich foods such as dark leafy greens, beans, lentils, eggs, fish, or meat paired with vitamin C to help your body absorb iron.'
    }
  ];

  return FlyerSTDstyleCartoonCaller1({
    pageId: 'FibroidsHomePage1',
    title: tr('eduBtnFibroids', 'Fibroids'),
    gifSrc: './assets/diseases-fibroids.gif?v=224',
    bgGradient: 'linear-gradient(180deg, #F04330 0%, #C92616 100%)',
    bgColor: '#DC3422',
    titleTintColor: '#FFD2CC',
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
