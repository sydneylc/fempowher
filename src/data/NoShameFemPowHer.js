// ============================================================================
// NoShameFemPowHer — Global Women's Health Linguistic Destigmatization Database
// ONLY logs cases where a women's health concept CANNOT be translated into a
// widely understood everyday word in that language without encountering a term
// that inherently carries shame, moral blame, hopelessness, or impurity —
// requiring native-speaker & community-midwife consultation.
// (Phrases that CAN be cleanly fixed—such as translating "My periods are the
// worst!" as "really painful, heavy, or hard to deal with!"—are already fixed
// directly in translations.js and App.js and are not listed here.)
// ============================================================================

export const NO_SHAME_FEMPOWHER_DATABASE = [
  {
    id: 'ns-01',
    language: 'Arabic (العربية)',
    langCode: 'ar',
    englishPhrase: 'Menopause',
    stigmatizingTranslation: 'سن اليأس (Sinn al-Yaʼs)',
    literalStigmaMeaning: '"The Age of Despair / The Age of Hopelessness"',
    whyItIsHardToTransferWithoutStigma:
      'In everyday Arabic across many regions, "سن اليأس" ("The Age of Despair") is the only phrase many women immediately recognize for menopause. The neutral clinical term "انقطاع الطمث" ("cessation of menses") is often unfamiliar to low-literacy speakers, while the feminist reform phrase "سن الأمل" ("Age of Hope") is empowering but newer.',
    currentInAppText: 'سن الأمل (انقطاع الطمث)',
    questionForNativeSpeakers:
      'How can we phrase Menopause in regional Arabic dialects so every woman immediately understands what the button means without seeing her life stage called "The Age of Despair"?'
  },
  {
    id: 'ns-02',
    language: 'Spanish (Español) & Portuguese (Português)',
    langCode: 'es / pt',
    englishPhrase: 'Pregnancy Loss / Miscarriage',
    stigmatizingTranslation: 'Aborto espontáneo',
    literalStigmaMeaning: '"Spontaneous Abortion"',
    whyItIsHardToTransferWithoutStigma:
      'Spanish and Portuguese do not have separate everyday root nouns for "miscarriage" vs. "abortion"—both use the word "aborto." While we changed the app button to "Pérdida Gestacional / Perda Gestacional" ("Gestational Loss"), in many rural communities "aborto espontáneo" or "malparto" ("bad birth") are the only terms women know, yet the word "aborto" carries intense legal, religious, and criminal stigma.',
    currentInAppText: 'Pérdida Gestacional (Aborto Espontáneo) / Perda Gestacional (Aborto Espontâneo)',
    questionForNativeSpeakers:
      'In Latin American, Spanish, Lusophone African, and Brazilian communities, is "Pérdida del embarazo / Pérdida gestacional" universally understood on its own so we can drop "(Aborto Espontáneo)" completely?'
  },
  {
    id: 'ns-03',
    language: 'Swahili (Kiswahili)',
    langCode: 'sw',
    englishPhrase: 'Pregnancy Loss / Miscarriage',
    stigmatizingTranslation: 'Kuharibika kwa Mimba (or Mimba Kuharibika)',
    literalStigmaMeaning: '"The spoiling / ruining / going bad of the pregnancy"',
    whyItIsHardToTransferWithoutStigma:
      'In Swahili, the universal medical and everyday phrase for miscarriage uses the verb "-haribika" ("to be spoiled, ruined, damaged, or corrupted"). There is no separate single word in standard Swahili that does not use either "-haribika" (spoiled) or "-toka" (come out).',
    currentInAppText: 'Kuharibika kwa Mimba',
    questionForNativeSpeakers:
      'Consult Tanzanian and Kenyan native speakers/midwives: Is "Kupoteza Ujauzito / Kupoteza Mimba" ("Losing a pregnancy") natural and clearly understood as miscarriage vs. stillbirth, so we can avoid the root "-haribika" ("spoiled/ruined")?'
  },
  {
    id: 'ns-04',
    language: 'Amharic (አማርኛ)',
    langCode: 'am',
    englishPhrase: 'Pregnancy Loss / Miscarriage',
    stigmatizingTranslation: 'ፅንስ መጨናገፍ (Ts’ins Mech’enagef) / ውርጃ (Wirja)',
    literalStigmaMeaning: '"Fetus failing / being thwarted / aborted" or "Abortion (Wirja)"',
    whyItIsHardToTransferWithoutStigma:
      'In Amharic, "ውርጃ" (Wirja) is used for both miscarriage and induced abortion (carrying heavy social stigma), while "ፅንስ መጨናገፍ" uses a verb that also means "to fail / be aborted / be ruined."',
    currentInAppText: 'የእርግዝና መቋረጥ (ፅንስ መጨናገፍ)',
    questionForNativeSpeakers:
      'Consult Ethiopian midwives and native Amharic speakers on the most compassionate, non-blaming way to refer to involuntary pregnancy loss.'
  },
  {
    id: 'ns-05',
    language: 'Somali (Soomaali)',
    langCode: 'so',
    englishPhrase: 'Pregnancy Loss / Miscarriage',
    stigmatizingTranslation: 'Ilmo ইska soo ridid / Dhicis',
    literalStigmaMeaning: '"Dropping the child / Premature falling (Dhicis)"',
    whyItIsHardToTransferWithoutStigma:
      'In Somali, "Dhicis" comes from "dhac" ("to fall/drop/fail"), and active phrases like "ilmo iska soo ridid" mean induced abortion ("throwing off the child"). Everyday Somali lacks a distinct clinical noun for early miscarriage that doesn’t evoke "falling/dropping."',
    currentInAppText: 'Dhicis (Ilmo-ka-dhac)',
    questionForNativeSpeakers:
      'Consult Somali female health workers on whether a gentler phrase for involuntary pregnancy loss exists across Northern and Benadiri Somali dialects.'
  },
  {
    id: 'ns-06',
    language: 'Rohingya (Ruáingga)',
    langCode: 'rhg',
    englishPhrase: 'Menstruation / Period & Postpartum Bleeding',
    stigmatizingTranslation: 'Gaá harab / Napak / Haiz-Nifas',
    literalStigmaMeaning: '"Body is bad/spoiled (Gaá harab)" / "Ritually impure/unclean (Napak)"',
    whyItIsHardToTransferWithoutStigma:
      'Because Rohingya is primarily an oral language without a standardized secular medical vocabulary, many girls and women in the camps only know menstruation as "gaá harab" ("my body went bad") or "napak" ("unclean"), or the religious-jurisprudential terms "haiz/nifas" (which define when a woman cannot pray or fast due to ritual impurity).',
    currentInAppText: 'Masik / Haiz (Menstrual Cycle)',
    questionForNativeSpeakers:
      'Consult Rohingya female midwives in Cox’s Bazar: Do younger and older Rohingya women all understand "Masik" without needing the "gaá harab / napak" framing?'
  },
  {
    id: 'ns-07',
    language: 'Pashto (پښتو), Dari (دری), Urdu (اردو), & Balochi (بلوچی)',
    langCode: 'ps / prs / ur / bal',
    englishPhrase: 'Pregnancy Loss / Miscarriage',
    stigmatizingTranslation: 'سقط جنین (Saqt-e janīn) / ماشوم غورځېدل / چُکّءِ دؤر کپگ / بچه انداختن',
    literalStigmaMeaning: '"Falling/defect of fetus (Saqt)" or "Dropping/throwing the child"',
    whyItIsHardToTransferWithoutStigma:
      'Across Arabic- and Persian-influenced languages, the clinical word "سقط" (saqt) literally derives from "falling/failing/defect" and is used for both spontaneous miscarriage and induced abortion, while rural spoken idioms literally say "the child fell/was dropped by the mother."',
    currentInAppText: 'از دست دادن بارداری (سقط ناخواسته) / حمل ضائع ہونا / د ماشوم ضایع کیدل',
    questionForNativeSpeakers:
      'Verify with native speakers in Afghanistan and Pakistan whether "از دست دادن بارداری / حمل ضائع ہونا" is immediately understood by rural women without needing "سقط" or "بچه افتادن".'
  },
  {
    id: 'ns-08',
    language: 'Hindi (हिन्दी), Bangla (বাংলা), Urdu (اردو), & Dari/Pashto',
    langCode: 'hi / bn / ur / prs / ps',
    englishPhrase: 'Postpartum Period (First 40 Days After Birth)',
    stigmatizingTranslation: 'सूतक (Sūtak - hi) / অশৌচ (Ashauch - bn) / نفاس (Nifās) / چلہ (Chilla)',
    literalStigmaMeaning: '"Ritual birth pollution / untouchability period (Sūtak / Ashauch)" or "40-day seclusion/impurity"',
    whyItIsHardToTransferWithoutStigma:
      'In many South and Central Asian communities, formal clinical translations like "प्रसवोत्तर काल" ("postpartum period") are unfamiliar to rural women, whereas the everyday words they do know ("सूतक", "অশৌচ", "نفاس", "چلہ") are tied to traditions where the new mother is considered ritually impure or confined for 40 days.',
    currentInAppText: 'प्रसवोत्तर देखभाल (hi) / প্রসব-পরবর্তী যত্ন (bn) / زچگی کے بعد کی دیکھ بھال (ur)',
    questionForNativeSpeakers:
      'How can we make sure rural mothers recognize "Postpartum (first 40 days)" immediately while separating it from "ritual pollution" (Sūtak/Ashauch) and framing it purely as maternal rest and healing?'
  }
];

export function generateNoShameFemPowHerCSV() {
  const headers = [
    'ID',
    'Language',
    'Language Code',
    'English Phrase / Concept',
    'Common or Only Recognized Translation (Exact Script)',
    'Literal Stigmatizing Meaning in English',
    'Why It Is Hard to Transfer Without Stigma',
    'Current FemPowHer Text (Exact Script)',
    'Question for Native Speakers'
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
      row.whyItIsHardToTransferWithoutStigma,
      row.currentInAppText,
      row.questionForNativeSpeakers
    ]
      .map(escapeCsv)
      .join(',')
  );
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
