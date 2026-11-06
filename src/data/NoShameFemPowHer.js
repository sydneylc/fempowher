// ============================================================================
// NoShameFemPowHer — Global Women's Health Linguistic Destigmatization Database
// Tracks English phrases & women's health concepts whose literal or traditional
// translations in world languages carry moral shame, blame, impurity, or stigma,
// alongside the destigmatized replacement used in FemPowHer and notes for
// native-speaker community review.
// ============================================================================

export const NO_SHAME_FEMPOWHER_DATABASE = [
  {
    id: 'ns-01',
    language: 'Arabic (العربية)',
    langCode: 'ar',
    englishPhrase: 'My periods are the worst!',
    stigmatizingTranslation: 'دورتي الشهرية هي الأسوأ! (Dawratī al-shahriyyah hiya al-aswaʼ!)',
    literalStigmaMeaning: '"My monthly period is the most evil / morally worst / most corrupt!"',
    whyItStigmatizes:
      'In Arabic, translating the English slang idiom "the worst" literally ("الأَسْوَأ" from root س-و-ء sūʼ = evil/badness/shame) frames menstruation itself as something morally bad or shameful rather than physically painful.',
    femPowHerDestigmatized: 'دورتي الشهرية مؤلمة وصعبة للغاية! ("My menstrual period is very painful and difficult!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Ask native speakers across Levantine, Egyptian, Gulf, and Maghrebi dialects for warm, empathetic everyday ways women say "My cramps/periods are really rough!" without moralizing language.'
  },
  {
    id: 'ns-02',
    language: 'Arabic (العربية)',
    langCode: 'ar',
    englishPhrase: 'Menopause',
    stigmatizingTranslation: 'سن اليأس (Sinn al-Yaʼs)',
    literalStigmaMeaning: '"The Age of Despair / The Age of Hopelessness"',
    whyItStigmatizes:
      'The standard dictionary and medical-colloquial Arabic term for menopause ("سن اليأس") literally defines a woman’s life after fertility as "the age of despair/hopelessness," reducing her worth to reproduction.',
    femPowHerDestigmatized: 'سن الأمل / انقطاع الطمث ("The Age of Hope / Cessation of Menses")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer to "سن الأمل (انقطاع الطمث)". Consult native speakers on regional familiarity with "سن الأمل" (Age of Hope) or "سن التجديد" (Age of Renewal) alongside the clinical term "انقطاع الطمث".'
  },
  {
    id: 'ns-03',
    language: 'Pashto (پښتو)',
    langCode: 'ps',
    englishPhrase: 'Menstrual Cycle / Menopause',
    stigmatizingTranslation: 'میاشتنۍ ناروغي (Myāshtanai Nāroghī) / ناپاکي (Nāpākī)',
    literalStigmaMeaning: '"Monthly Sickness / Monthly Disease" or "Impurity / Uncleanliness"',
    whyItStigmatizes:
      'Everyday Pashto frequently refers to normal menstruation as "میاشتنۍ ناروغي" (monthly illness/disease) or "ناپاکي" (uncleanliness), teaching girls that a healthy menstrual cycle is a sickness or state of pollution.',
    femPowHerDestigmatized: 'میاشتنۍ عادت (حیض) ("Monthly Rhythm / Habit") & د میاشتنۍ عادت بندیدل ("Stopping of the Monthly Cycle")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer (removed "ناروغۍ" from Menopause as well). Consult Afghan and Pakistani Pashto female health workers on the most empowering, non-shaming everyday phrase for young girls getting their first period.'
  },
  {
    id: 'ns-04',
    language: 'Pashto (پښتو)',
    langCode: 'ps',
    englishPhrase: 'My periods are the worst!',
    stigmatizingTranslation: 'زما میاشتنۍ عادت تر ټولو بد دی! (Zmā myāshtanai ʻādat tar ṭolo bad dai!)',
    literalStigmaMeaning: '"My monthly habit is the most bad / shameful / wicked!"',
    whyItStigmatizes:
      'Literal translation of "the worst" ("تر ټولو بد") attaches moral badness or defectiveness to the girl’s body and cycle.',
    femPowHerDestigmatized: 'زما میاشتنۍ عادت ډیر دردناک او سخت دی! ("My monthly period is very painful and hard!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Verify with native Pashto speakers whether "ډیر دردناک او سخت" feels natural and comforting for adolescents.'
  },
  {
    id: 'ns-05',
    language: 'Dari (دری) & Farsi/Persian (فارسی)',
    langCode: 'prs / fa',
    englishPhrase: 'My periods are the worst!',
    stigmatizingTranslation: 'عادت ماهوار من بدترین است! / پریودهای من بدترین هستند!',
    literalStigmaMeaning: '"My monthly period is the worst / most bad / most defective!"',
    whyItStigmatizes:
      'In Dari and Farsi, "بدترین" (badtarīn) does not carry the playful English hyperbole of "ugh, cramps are the worst"—it sounds like the woman’s body or cycle is defective or bad.',
    femPowHerDestigmatized: 'عادت ماهوار من بسیار دردناک و شدید است! / پریودهای من بسیار دردناک و سخت هستند!',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer to mean "very painful and intense/hard." Also avoided colloquial "مریضی ماهانه" ("monthly sickness").'
  },
  {
    id: 'ns-06',
    language: 'Dari (دری) & Farsi/Persian (فارسی)',
    langCode: 'prs / fa',
    englishPhrase: 'Pregnancy Loss (Miscarriage)',
    stigmatizingTranslation: 'بچه انداختن (Bacheh andākhtan) / سقط جنین (Saqt-e janīn)',
    literalStigmaMeaning: '"Throwing/dropping the baby" or "Abortion/expulsion of fetus"',
    whyItStigmatizes:
      'Colloquial "بچه انداختن" puts active verb blame on the mother ("she dropped the baby"), while standalone "سقط جنین" is also used for induced abortion, which can cause grieving mothers to feel blamed or judged.',
    femPowHerDestigmatized: 'از دست دادن بارداری (سقط ناخواسته جنین) ("Pregnancy Loss / Involuntary Miscarriage")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer to emphasize involuntary loss ("ناخواسته" / "از دست دادن بارداری"). Consult native speakers on the gentlest phrasing for grieving mothers.'
  },
  {
    id: 'ns-07',
    language: 'Bangla (বাংলা)',
    langCode: 'bn',
    englishPhrase: 'Menstrual Cycle & My periods are the worst!',
    stigmatizingTranslation: 'শরীর খারাপ (Shorīr khārāp) / আমার মাসিক সবচেয়ে খারাপ! (Āmār māsik shobcheye khārāp!)',
    literalStigmaMeaning: '"Body is bad/spoiled/unwell" / "My period is the most bad!"',
    whyItStigmatizes:
      'In Bengal, the most common everyday euphemism for having a period is "শরীর খারাপ" ("my body is bad/spoiled"), and translating "the worst" literally as "সবচেয়ে খারাপ" reinforces that menstruation makes the body "bad."',
    femPowHerDestigmatized: 'মাসিক বা ঋতুস্রাব চক্র ("Monthly or Seasonal Cycle") & আমার মাসিক খুব কষ্টকর ও তীব্র! ("My period is very painful/distressing and intense!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Consult Bangladeshi and West Bengali women on warm, stigma-free ways young girls talk about period pain.'
  },
  {
    id: 'ns-08',
    language: 'Rohingya (Ruáingga)',
    langCode: 'rhg',
    englishPhrase: 'Menstrual Cycle & My periods are the worst!',
    stigmatizingTranslation: 'Gaá harab / Añár masik beilá harab! (My body is bad / My period is the most bad/corrupt!)',
    literalStigmaMeaning: '"Spoiled/bad body" or "Most bad/corrupt period" (or framing strictly as "napak" = ritual impurity)',
    whyItStigmatizes:
      'In Rohingya camps, girls often only hear menstruation referred to as "gaá harab" (body gone bad) or "napak" (impure), leading to fear and hiding during menarche.',
    femPowHerDestigmatized: 'Masik / Haiz & Añár masikót kub beši biš arde kúon za! ("In my period there is very heavy pain and bleeding!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. High-priority item to review with Rohingya female community health workers (midwives in Cox’s Bazar) to ensure the gentlest spoken phrasing for audio playback.'
  },
  {
    id: 'ns-09',
    language: 'Urdu (اردو)',
    langCode: 'ur',
    englishPhrase: 'Menstrual Cycle & My periods are the worst!',
    stigmatizingTranslation: 'ناپاکی کے دن (Nāpākī ke din) / میری ماہواری سب سے بری ہے! (Merī māhwārī sab se burī hai!)',
    literalStigmaMeaning: '"Days of impurity/uncleanliness" / "My period is the most bad/shameful!"',
    whyItStigmatizes:
      '"بری" (burī = bad/shameful/wicked) and "ناپاکی" (impurity) attach moral shame to menstruation.',
    femPowHerDestigmatized: 'ماہواری کا چکر ("Monthly Cycle") & میری ماہواری بہت تکلیف دہ اور شدید ہے! ("My period is very painful and intense!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Also avoided "حمل گرانا" (dropping a pregnancy) in favor of "حمل ضائع ہونا" (losing a pregnancy).'
  },
  {
    id: 'ns-10',
    language: 'Hindi (हिन्दी)',
    langCode: 'hi',
    englishPhrase: 'Menstrual Cycle / Postpartum / My periods are the worst!',
    stigmatizingTranslation: 'अशुद्ध / अपवित्र दिन (Impure days) / सूतक (Sūtak = birth pollution) / मेरे पीरियड्स सबसे खराब हैं!',
    literalStigmaMeaning: '"Impure/unclean days", "Ritual birth pollution", or "My periods are the most bad/defective!"',
    whyItStigmatizes:
      'Traditional terms tie menstruation and postpartum recovery to ritual untouchability ("अछूत/अशुद्ध"), and "सबसे खराब" means defective/bad.',
    femPowHerDestigmatized: 'मासिक धर्म चक्र & प्रसवोत्तर देखभाल & मेरे पीरियड्स बहुत दर्दनाक और कठिन हैं! ("My periods are very painful and difficult!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Review with Hindi speakers whether conversational "पीरियड्स" alongside "मासिक चक्र" is clearest across rural and urban India.'
  },
  {
    id: 'ns-11',
    language: 'Somali (Soomaali)',
    langCode: 'so',
    englishPhrase: 'My periods are the worst!',
    stigmatizingTranslation: 'Caadadaydu waa tan ugu xun! (My period is the most bad/evil/ugly!)',
    literalStigmaMeaning: '"My period is the most bad / evil / shameful!" ("ugu xun" from xumaan = badness/evil)',
    whyItStigmatizes:
      'In Somali, "ugu xun" carries strong negative judgment rather than describing physical pain or heavy bleeding.',
    femPowHerDestigmatized: 'Caadadaydu aad bay u xanuun badan tahay! ("My period is very painful!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Also verify with Somali midwives the gentlest phrasing for pregnancy loss ("Dhicis / Uur-burbur") that avoids any implication of maternal fault.'
  },
  {
    id: 'ns-12',
    language: 'Swahili (Kiswahili)',
    langCode: 'sw',
    englishPhrase: 'My periods are the worst!',
    stigmatizingTranslation: 'Hedhi zangu ni mbaya sana / mbaya zaidi! (My periods are very bad/rotten/evil!)',
    literalStigmaMeaning: '"My periods are the most bad / morally bad / spoiled!"',
    whyItStigmatizes:
      'In Swahili, "mbaya" means bad, ugly, or rotten; applying it to "hedhi" (menstruation) reinforces period taboo.',
    femPowHerDestigmatized: 'Hedhi zangu zina maumivu makali na ni ngumu! ("My periods have severe pain and are difficult!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Also in Swahili, "Kuharibika kwa Mimba" (miscarriage) literally uses the root "-haribika" (to be spoiled/ruined)—flag for native Swahili speakers to see if "Kupoteza Ujauzito" (Pregnancy Loss) is gentler.'
  },
  {
    id: 'ns-13',
    language: 'Amharic (አማርኛ)',
    langCode: 'am',
    englishPhrase: 'My periods are the worst! & Menstrual Cycle',
    stigmatizingTranslation: 'የወር አበባዬ በጣም መጥፎ ነው! (Yewor abebaye betam metfo new! = My period is very bad/wicked!) / ደም መፍሰስ',
    literalStigmaMeaning: '"My monthly flower is very bad/wicked/ugly!"',
    whyItStigmatizes:
      'Notice how beautiful the Amharic term for menstruation actually is—"የወር አበባ" (Yewor Abeba) literally means "Monthly Flower"! Calling it "መጥፎ" (bad/ugly) contradicts that dignity and adds shame.',
    femPowHerDestigmatized: 'የወር አበባዬ በጣም የሚያም እና ከባድ ነው! ("My monthly flower [period] is very painful and heavy!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Also flag "ፅንስ መጨናገፍ" (miscarriage) vs "እርግዝና ማጣት" (pregnancy loss) for native Amharic speaker consultation.'
  },
  {
    id: 'ns-14',
    language: 'Spanish (Español) & Portuguese (Português)',
    langCode: 'es / pt',
    englishPhrase: 'Pregnancy Loss (Miscarriage)',
    stigmatizingTranslation: 'Aborto (Espontáneo)',
    literalStigmaMeaning: '"Abortion (Spontaneous)"',
    whyItStigmatizes:
      'In Spanish and Portuguese, the clinical word "aborto" is identical for both miscarriage and induced abortion. In regions with severe legal or religious stigma around abortion, women arriving at hospitals with a miscarriage often face suspicion or shame when the word "aborto" is used.',
    femPowHerDestigmatized: 'Pérdida Gestacional (es) / Perda Gestacional (pt) ("Gestational / Pregnancy Loss")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer to lead with "Pérdida Gestacional / Perda Gestacional" and updated the English button from "Miscarriage" to "Pregnancy Loss" as well!'
  },
  {
    id: 'ns-15',
    language: 'Mandarin Chinese (中文)',
    langCode: 'zh',
    englishPhrase: 'Menstrual Cycle & My periods are the worst!',
    stigmatizingTranslation: '倒霉 (Dǎoméi = Bad luck!) / 身上不干净 (Body is unclean) / 我的月经最糟糕了！',
    literalStigmaMeaning: '"Having bad luck / misfortune" or "Body is dirty/unclean"',
    whyItStigmatizes:
      'Traditional Chinese euphemisms for getting one’s period include "倒霉了" ("I got bad luck") or "不干净" ("unclean").',
    femPowHerDestigmatized: '我的经期非常难受、痛经严重！ ("My menstrual period is very uncomfortable with severe cramps!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Uses empowering, care-centered phrasing ("月经周期护理").'
  },
  {
    id: 'ns-16',
    language: 'Turkish (Türkçe) & Uzbek (Oʻzbekcha)',
    langCode: 'tr / uz',
    englishPhrase: 'Menstrual Cycle & My periods are the worst!',
    stigmatizingTranslation: 'Hastalanmak ("Getting sick") / Kirlenmek ("Becoming dirty") / Adetim en kötüsü!',
    literalStigmaMeaning: '"Falling ill / becoming dirty" or "My period is the worst/most bad"',
    whyItStigmatizes:
      'Colloquial Turkish "hastalanmak" (getting sick) and "kirlenmek" (getting dirty) frame menstruation as illness or dirtiness.',
    femPowHerDestigmatized: 'Adet dönemlerim çok ağrılı ve zor geçiyor! (tr) / Hayz davrim juda ogʻriqli va qiyin oʻtadi! (uz) ("My periods are very painful and hard!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Uses neutral "Adet Döngüsü (Regl)" and "Hayz sikli".'
  },
  {
    id: 'ns-17',
    language: 'Balochi (بلوچی) & Kurdish (کوردی)',
    langCode: 'bal / ku',
    englishPhrase: 'Pregnancy Loss & My periods are the worst!',
    stigmatizingTranslation: 'چُکّءِ دؤر کپگ (Child falling/dropping) / منی ماہواری گندگ تریں انت! (My period is the most rotten/bad!)',
    literalStigmaMeaning: '"Dropping the child" / "My period is the most rotten/evil!"',
    whyItStigmatizes:
      'In Balochi, "گندگ" (gandag) means bad/rotten/foul, and "چُکّءِ دؤر کپگ" literally describes the child falling away.',
    femPowHerDestigmatized: 'حمل ضائع بوگ ("Pregnancy Loss") & منی ماہواری باز دردناک ءُ سکّ انت! ("My period is very painful and hard!")',
    statusAndNativeSpeakerNote:
      'Changed in FemPowHer. Flagged for native Balochi and Sorani/Kurmanji Kurdish speakers to verify the most compassionate community phrasing.'
  },
  {
    id: 'ns-18',
    language: 'Multiple Languages (ar, ur, hi, ps, prs, fa, sw, so, am)',
    langCode: 'global',
    englishPhrase: 'Pre-Conception / Difficulty Conceiving (Infertility)',
    stigmatizingTranslation: 'عاقر (ʻĀqir - ar) / بانجھ (Bānjh - ur) / बांझ (hi) / شنډه (Shanda - ps) / نازا (Nāzā - fa/prs) / Mgumba (sw) / Madhalays (so) / መካን (Mekan - am)',
    literalStigmaMeaning: '"Barren / Sterile / Fruitless Woman"',
    whyItStigmatizes:
      'Across many languages, the common noun for infertility is a derogatory adjective applied almost exclusively to women ("barren"), blaming women for difficulty conceiving even though ~50% of fertility factors are male or shared.',
    femPowHerDestigmatized: 'Pre-Conception Care & Trying to Conceive ("مراقبت‌های پیش از بارداری" / "حمل سے پہلے کی تیاری" / "التخطيط والاستعداد للحمل")',
    statusAndNativeSpeakerNote:
      'FemPowHer strictly avoids all "barren" terminology across all 22 languages, framing around Pre-Conception health and supportive care. Consult native speakers when adding dedicated Fertility/Infertility subpages.'
  }
];

export function generateNoShameFemPowHerCSV() {
  const headers = [
    'ID',
    'Language',
    'Language Code',
    'English Phrase / Concept',
    'Literal or Traditional Stigmatizing Translation (Exact Script)',
    'Literal Stigmatizing Meaning in English',
    'Why It Reinforces Shame or Stigma',
    'FemPowHer Destigmatized Replacement (Exact Script)',
    'Status & Notes for Native Speaker Consultation'
  ];
  const escapeCsv = (val) => {
    const s = String(val ?? '').replace(/"/g, '""');
    return `"${s}"`;
  };
  const rows = NO_SHAME_FEMPOWHER_DATABASE.map((row) =>
    [
      row.id,
      row.language,
      row.langCode,
      row.englishPhrase,
      row.stigmatizingTranslation,
      row.literalStigmaMeaning,
      row.whyItStigmatizes,
      row.femPowHerDestigmatized,
      row.statusAndNativeSpeakerNote
    ]
      .map(escapeCsv)
      .join(',')
  );
  // Prepend UTF-8 BOM (\uFEFF) so Excel opens Arabic, Bangla, Hindi, Amharic, and Chinese scripts cleanly
  return '\uFEFF' + [headers.map(escapeCsv).join(','), ...rows].join('\r\n');
}

export function downloadNoShameFemPowHerCSV() {
  const csvContent = generateNoShameFemPowHerCSV();
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'NoShameFemPowHer.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
