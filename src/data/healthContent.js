// Age-Specific Reproductive Health & Agency Content (Tab 4: "Your specific issues Based on age")
// Includes visual iconography and read-aloud audio scripts for women who cannot read English

export const AGE_SPECIFIC_ISSUES = {
  '8-15': [
    {
      id: 'first-period-anatomy',
      icon: '',
      severity: 'info',
      title: {
        en: 'Your First Period (Menarche) & Understanding Your Body',
        rhg: 'Prothom Masik (𐴔𐴝𐴏𐴞𐴑) ও নিজের শরীর চিনা (৮–১৫ বছর)',
        bn: 'প্রথম মাসিক (পিরিয়ড) ও কিশোরী শরীরের স্বাভাবিক পরিবর্তন',
        so: 'Caadadaada Koowaad (Dhiigga Bisha) & Fahamka Jirkaaga'},
      normalVsAbnormal: {
        en: 'NORMAL: Bleeding for 3 to 7 days every 21–45 days; mild belly cramps; irregular timing in the first 2 years. NOT NORMAL: Soaking through a thick cloth/pad every hour, bleeding longer than 10 days, or fainting from pain.',
        rhg: 'স্বাভাবিক (Normal): ৩ হতুন ৭ দিন লউ পরা, হালকা পেট বিষা। বিপদ (Not Normal): প্রতি ঘণ্টায় কাপড় ভিজি যাওন, ১০ দিনের বেশি লউ পরন অথবা মাথা ঘুরাই পরি যাওন।',
        bn: 'স্বাভাবিক: ৩ থেকে ৭ দিন রক্তপাত, হালকা পেট ব্যথা। অস্বাভাবিক: প্রতি ঘণ্টায় প্যাড বা কাপড় ভিজে যাওয়া, ১০ দিনের বেশি রক্তপাত বা অজ্ঞান হয়ে যাওয়া।',
        so: 'CAADI: Dhiig socda 3 ilaa 7 maalmood. HALIS: Marada oo saacad walba qoyda, dhiig socda wax ka badan 10 maalmood, ama suuxdin.'},
      redFlags: {
        en: [
          'Bleeding so heavy you feel dizzy, pale, or cannot stand up',
          'Severe lower belly pain on one side with fever or vomiting',
          'No first period by age 16, or sudden stop after pain/injury'],
        rhg: [
          'এত বেশি লউ পরের যে মাথা ঘুরায় বা দাঁড়াইতে ন পারো',
          'পেটের এক পাশে তীব্র বিষ ও জ্বর/বমি',
          '১৬ বছর ওমর অইলেও মাসিক ন হওন'],
        bn: [
          'অতিরিক্ত রক্তপাতের কারণে মাথা ঘোরা বা ফ্যাকাসে হয়ে যাওয়া',
          'পেটের একপাশে তীব্র ব্যথা ও জ্বর বা বমি',
          '১৬ বছর বয়সেও প্রথম মাসিক না হওয়া'],
        so: [
          'Dhiig-bax badan oo keena wareer ama tabar-darro',
          'Calool-xanuun daran oo wata qandho ama matag',
          'Inaan caado imaan ilaa 16 sano']
      },
      selfCare: {
        en: 'Wash reusable cotton cloths with clean soap and dry them in direct sunlight (sunlight kills infection germs). Eat iron-rich foods (lentils, dark greens, eggs).',
        rhg: 'মাসিকের সুতি কাপড় সাবান দি ধুই রোদে শুকাইবা (রোদে জীবাণু মরি যায়)। ডাইল, শাক আর ডিম খাইবা।',
        bn: 'পরিষ্কার সুতি কাপড় সাবান দিয়ে ধুয়ে সরাসরি রোদে শুকাবেন। কচুশাক, ডাল ও ডিম খাবেন।',
        so: 'Ku dhaq marada saabuun nadiif ah oo ku qallaji qorraxda tooska ah.'}
    }
  ],

  '15-20': [
    {
      id: 'cycle-pain-pcos-infection',
      icon: '',
      severity: 'warning',
      title: {
        en: 'Menstrual Cycle Health, Severe Cramps (Endometriosis/PCOS) & Infections',
        rhg: 'মাসিকের তীব্র বিষ, অনিয়মিত মাসিক ও ইনফেকশন (১৫–২০ বছর)',
        bn: 'মাসিকের তীব্র ব্যথা, অনিয়মিত পিরিয়ড (PCOS) ও জরায়ু সংক্রমণ',
        so: 'Caafimaadka Wareegga Caadada, Xanuunka Daran & Caabuqa'},
      normalVsAbnormal: {
        en: 'NORMAL: Mild cramps relieved by warmth, clear or white odorless discharge between periods. NOT NORMAL: Pain that stops you from walking, foul-smelling yellow/green discharge, burning when urinating, or missing periods for 3+ months (not pregnant).',
        rhg: 'স্বাভাবিক: হালকা কোমর বিষা। বিপদ: হাঁটিতে ন পারার মতো পেট বিষা, দুর্গন্ধযুক্ত পানি ভাঙ্গা, প্রস্রাবে জ্বালাপোড়া বা ৩ মাসের বেশি মাসিক বন্ধ থাকন।',
        bn: 'স্বাভাবিক: হালকা ব্যথা ও গন্ধহীন সাদাস্রাব। অস্বাভাবিক: অসহ্য পেট ব্যথা, দুর্গন্ধযুক্ত স্রাব, প্রস্রাবে জ্বালাপোড়া বা ৩ মাসের বেশি পিরিয়ড বন্ধ থাকা।',
        so: 'CAADI: Xanuun fudud. HALIS: Xanuun kuu diidaya socodka, dheecaan ur xun leh, ama gubasho kaadida ah.'},
      redFlags: {
        en: [
          'Adolescent pregnancy danger signs: severe headache, blurred vision, or swelling of hands/face',
          'Fever with lower abdominal pain and unusual vaginal discharge',
          'Heavy bleeding lasting more than 8 days with large blood clots'],
        rhg: [
          'গর্ভবতী অইলে মাথা বিষা, চোখে ঝাপসা দেখুন বা হাত-মুখ ফুলি যাওন',
          'জ্বরের সাথে তলপেট বিষা ও দুর্গন্ধ স্রাব',
          '৮ দিনের বেশি চাকা চাকা লউ পরন'],
        bn: [
          'কম বয়সে গর্ভধারণের ঝুঁকি: তীব্র মাথাব্যথা, চোখে ঝাপসা দেখা বা হাত-মুখ ফুলে যাওয়া',
          'জ্বরসহ তলপেটে ব্যথা ও দুর্গন্ধযুক্ত স্রাব',
          '৮ দিনের বেশি সময় ধরে চাকা চাকা রক্তপাত'],
        so: [
          'Calaamadaha khatarta uurka: madax-xanuun daran, aragga oo cakiran (tahan), ama barar wejiga iyo gacmaha ah',
          'Qandho wadata xanuun caloosha hoose ah',
          'Dhiig xinjiro waaweyn wata oo socda 8+ maalmood']
      },
      selfCare: {
        en: 'Never insert herbs, ash, or unclean cloths inside the vagina. Drink clean water and visit a Women Safe Haven for free confidential checkups.',
        rhg: 'শরীরের ভিতরে কোনো গাছের পাতা বা অপরিষ্কার কাপড় দিবা না। মেইয়্যা দাক্তরের কাছে ফ্রি পরামর্শ লও।',
        bn: 'জরায়ুপথে কখনোই কোনো লতাপাতা বা অপরিষ্কার কাপড় ব্যবহার করবেন না। নিরাপদ কেন্দ্রে মহিলা ডাক্তারের পরামর্শ নিন।',
        so: 'Waligaa ha gelin geedo ama maro aan nadiif ahayn xubinta taranka.'}
    }
  ],

  '20-25': [
    {
      id: 'prenatal-fertility-cycles',
      icon: '',
      severity: 'high',
      title: {
        en: 'Prenatal Care, Safe Pregnancy & Reproductive System Health',
        rhg: 'গর্ভবতী মা-র যত্ন (Prenatal Care) ও নিরাপদ সন্তান প্রসব',
        bn: 'গর্ভকালীন যত্ন, নিরাপদ মাতৃত্ব ও প্রজনন স্বাস্থ্য (২০–২৫ বছর)',
        so: 'Daryeelka Uurka (Prenatal), Dhalmada Badbaadada leh & Caafimaadka Taranka'},
      normalVsAbnormal: {
        en: 'NORMAL IN PREGNANCY: Morning nausea in early months, mild back ache, baby kicking 10+ times in 2 hours after month 5. NOT NORMAL: Any vaginal bleeding during pregnancy, sudden gush of water before labor, or baby moving less.',
        rhg: 'স্বাভাবিক: সকালে বমি ভাব, ৫ মাস পর বাচ্চার নড়াচড়া। বিপদ: গর্ভবতী অবস্থায় এক ফোঁটাও লউ পরন, ব্যথা উঠার আগে ফানি ভাঙ্গি যাওন, বা বাচ্চার নড়াচড়া কমি যাওন।',
        bn: 'স্বাভাবিক: প্রথম দিকে বমি ভাব, ৫ মাসের পর বাচ্চার নড়াচড়া। অস্বাভাবিক: গর্ভাবস্থায় যেকোনো রক্তপাত, প্রসব বেদনার আগে পানি ভেঙে যাওয়া বা বাচ্চার নড়াচড়া কমে যাওয়া।',
        so: 'CAADI: Lalabo subaxdii, dhaqdhaqaaqa ilmaha. HALIS: Dhiig-bax kasta xilliga uurka, biyaha oo ka yimaada xilliga dhalmada ka hor, ama dhaqdhaqaaqa ilmaha oo yaraada.'},
      redFlags: {
        en: [
          'ANY bleeding during pregnancy — go to an OB/GYN hospital immediately',
          'Severe headache, vision spots, or sudden swelling of face/hands (Preeclampsia / Eclampsia convulsions)',
          'Labor lasting longer than 12 hours without the baby coming out (Risk of Obstetric Fistula — needs emergency midwife/hospital)'],
        rhg: [
          'গর্ভবতী অবস্থায় লউ পরিলে সাথে সাথে ম্যাপের হাসপাতালে যাও',
          'মাথা বিষা, চোখে অন্ধকার দেখুন ও মুখ-হাত ফুলা (খিঁচুনি/একলাম্পসিয়ার বিপদ)',
          '১২ ঘণ্টার বেশি বাচ্চা খালাসের বিষ উঠিলে ঘরে ন রাখি হাসপাতালে লই যাও (ফিস্টুলা হতুন বাঁচিবো)'],
        bn: [
          'গর্ভাবস্থায় যেকোনো রক্তপাত হলে তাৎক্ষণিক হাসপাতালে যান',
          'তীব্র মাথাব্যথা, চোখে ঝাপসা দেখা ও মুখ-হাত ফুলে যাওয়া (একলাম্পসিয়া বা খিঁচুনির ঝুঁকি)',
          '১২ ঘণ্টার বেশি প্রসব বেদনা থাকলে বাড়িতে না রেখে দ্রুত হাসপাতালে নিন'],
        so: [
          'Dhiig-bax kasta xilliga uurka — si degdeg ah u tag isbitaal',
          'Madax-xanuun daran, aragga oo xumaada iyo barar wejiga/gacmaha ah (Khatarta Qallalka)',
          'Foosha oo socota wax ka badan 12 saacadood (Khatarta Fistula — u baahan isbitaal degdeg ah)']
      },
      selfCare: {
        en: 'Attend at least 4 free prenatal checkups at your local red-pin clinic. Take daily Iron + Folic Acid tablets and know your nearest 24/7 emergency transport number before month 8.',
        rhg: 'গর্ভবতী অইলে কমপক্ষে ৪ বার মেইয়্যা দাক্তর দেখাইবা। প্রতিদিন আয়রন বড়ি খাইবা আর ৮ মাসের আগেই অ্যাম্বুলেন্স নম্বর রাখি দিবা।',
        bn: 'গর্ভাবস্থায় অন্তত ৪ বার নিকটস্থ ক্লিনিকে চেকআপ করান। প্রতিদিন আয়রন ও ফলিক অ্যাসিড ট্যাবলেট খান।',
        so: 'Samee ugu yaraan 4 baaritaan xilliga uurka. Qaado kiniinka birta (Iron) maalin walba.'}
    }
  ],

  '25-30': [
    {
      id: 'childbirth-postpartum-care',
      icon: '',
      severity: 'high',
      title: {
        en: 'Childbirth, Postpartum Recovery (4th Trimester) & Bleeding Danger Signs',
        rhg: 'বাচ্চা খালাস (Childbirth) ও বাচ্চা হইবার পর মা-র হিফাজত (Postpartum)',
        bn: 'সন্তান প্রসব, প্রসব পরবর্তী সেবা (Postpartum) ও অতিরিক্ত রক্তক্ষরণ সতর্কতা',
        so: 'Dhalmada, Xilliga Umusha (Postpartum) & Calaamadaha Khatarta Dhiig-baxa'},
      normalVsAbnormal: {
        en: 'NORMAL POSTPARTUM: Bleeding (lochia) that slowly turns from red to pink/brown and gets lighter over 4–6 weeks. NOT NORMAL: Soaking 2+ pads/cloths in an hour after birth, foul-smelling discharge with fever, or feeling hopeless/unable to care for yourself.',
        rhg: 'স্বাভাবিক: বাচ্চা হইবার পর লউ আস্তে আস্তে কমি ৪-৬ সপ্তাহে ভালো হওন। বিপদ (Postpartum Hemorrhage): বাচ্চা হইবার পর গলগল গরি লউ ভাঙ্গা, জ্বর ও দুর্গন্ধ, অথবা মন খারাপ ও কান্না আসা।',
        bn: 'স্বাভাবিক: প্রসবের পর রক্তপাত ধীরে ধীরে কমে ৪–৬ সপ্তাহে বন্ধ হওয়া। অস্বাভাবিক: প্রসবের পর প্রতি ঘণ্টায় ২টির বেশি কাপড় ভিজে যাওয়া, জ্বরসহ দুর্গন্ধযুক্ত স্রাব বা তীব্র মানসিক বিষণ্ণতা।',
        so: 'CAADI: Dhiigga umusha oo si tartiib ah u yaraada 4-6 toddobaad. HALIS: Dhiig xoog leh oo saacad walba qooya 2 maro dhalmada kadib, qandho, ama murugo daran.'},
      redFlags: {
        en: [
          'Postpartum Hemorrhage: Heavy bright red bleeding or clots larger than an egg after childbirth (Life-threatening — call emergency ambulance immediately)',
          'High fever, chills, or severe belly pain in the weeks after giving birth (Puerperal sepsis)',
          'Leaking urine or stool uncontrollably after difficult labor (Obstetric Fistula — 100% treatable for free at HOPE / Banadir Hospital!)'],
        rhg: [
          'বাচ্চা হইবার পর ডিমের মতো চাকা লউ বা বেশি লউ ভাঙ্গিলে ১ মিনিটও দেরি ন গরি হাসপাতালে লই যাও',
          'বাচ্চা হইবার পর কাঁপুনি দি জ্বর ও পেট বিষা',
          'বাচ্চা হইবার পর প্রস্রাব ধরি রাখিতে ন পারন (Fistula — HOPE হাসপাতালে ফ্রি ভালো গরের!)'],
        bn: [
          'প্রসব পরবর্তী অতিরিক্ত রক্তক্ষরণ বা বড় চাকা রক্ত গেলে এক মুহূর্ত দেরি না করে হাসপাতালে নিন',
          'প্রসবের পর কাঁপুনি দিয়ে প্রচণ্ড জ্বর ও তলপেটে ব্যথা',
          'কঠিন প্রসবের পর প্রস্রাব বা পায়খানা ধরে রাখতে না পারা (ফিস্টুলা — হাসপাতালে বিনামূল্যে সম্পূর্ণ ভালো হয়)'],
        so: [
          'Dhiig-bax xoog leh dhalmada kadib — wac ambalaasta isla markiiba',
          'Qandho daran iyo qarqaryo dhalmada kadib',
          'Kaadida oo aan la celin karin dhalmada adag kadib (Fistula — si bilaash ah ayaa loogu daweeyaa isbitaalka)']
      },
      selfCare: {
        en: 'Breastfeed immediately within the first hour after birth (this naturally helps your uterus contract to stop heavy bleeding!). Rest, drink plenty of clean fluids, and ask family for help.',
        rhg: 'বাচ্চা হইবার ১ ঘণ্টার ভিতরে বুকের দুধ খাওয়াইবা (ইয়ান মা-র জরায়ু সংকুচিত গরি লউ বন্ধ গরিতে সাহায্য গরে)।',
        bn: 'জন্মের ১ ঘণ্টার মধ্যে শিশুকে শালদুধ খাওয়ান (এটি মায়ের জরায়ু সংকুচিত করে রক্তপাত বন্ধ করতে সাহায্য করে)।',
        so: 'Naaska nuuji ilmaha saacadda ugu horreysa dhalashada kadib (tani waxay joojisaa dhiig-baxa ilmo-galeenka).'}
    }
  ],

  '30-40': [
    {
      id: 'fibroids-endometriosis-cervical',
      icon: '',
      severity: 'warning',
      title: {
        en: 'Heavy Cycles, Uterine Fibroids, Pelvic Prolapse & Cervical Screening',
        rhg: 'অতিরিক্ত মাসিক, জরায়ুর টিউমার (Fibroids), জরায়ু নিচে নামা ও পরীক্ষা (৩০–৪০ বছর)',
        bn: 'অতিরিক্ত রক্তপাত, জরায়ুর টিউমার (ফাইব্রয়েড), জরায়ু নিচে নেমে আসা ও ক্যান্সার স্ক্রিনিং',
        so: 'Dhiig-baxa Badan, Burooyinka Ilmo-galeenka (Fibroids) & Baaritaanka Makaanka'},
      normalVsAbnormal: {
        en: 'NORMAL: Regular cycles every 24–35 days. NOT NORMAL: Bleeding between periods, bleeding after marital relations, feeling a heavy bulge dropping down in the birth canal (pelvic organ prolapse), or chronic pelvic pain.',
        rhg: 'স্বাভাবিক: মাসে একবার নিয়মিত মাসিক। বিপদ: মাসিক ছাড়াও লউ ভাঙ্গা, স্বামীর সাথে মেলামেশার পর লউ দেখা, অথবা নিচের রাস্তায় ভারী কিছু নামি আইয়ের লাগন (Prolapse)।',
        bn: 'স্বাভাবিক: প্রতি মাসে নিয়মিত পিরিয়ড। অস্বাভাবিক: দুই মাসিকের মাঝখানে রক্তপাত, সহবাসের পর রক্তপাত, অথবা জরায়ু নিচের দিকে নেমে আসার অনুভূতি।',
        so: 'CAADI: Caado joogto ah. HALIS: Dhiig yimaada waqtiga caadada ka baxsan, culays ka soo dhacaya makaanka (Prolapse), ama xanuun joogto ah.'},
      redFlags: {
        en: [
          'Bleeding after intercourse or between monthly cycles',
          'Periods so heavy they cause extreme exhaustion, breathlessness, or pale inner eyelids (Severe Anemia)',
          'Feeling tissue bulging out when lifting heavy water jugs or coughing (Uterine Prolapse)'],
        rhg: [
          'মাসিকের সময় ছাড়া অন্য সময় লউ ভাঙ্গা',
          'বেশি লউ যাই শরীর দুর্বল ও চোখ সাদা অই যাওন (লউ শূন্যতা)',
          'ভারী কলসি তুলিলে বা কাশি দিলে জরায়ু নিচে নামি আসন'],
        bn: [
          'মাসিকের সময় ছাড়া বা সহবাসের পর রক্তপাত হওয়া',
          'অতিরিক্ত রক্তপাতে তীব্র দুর্বলতা ও রক্তস্বল্পতা দেখা দেওয়া',
          'ভারী কাজ বা কাশির সময় জরায়ু নিচে নেমে আসা'],
        so: [
          'Dhiig-bax aan ahayn caadada caadiga ah',
          'Dhiig-yaraan daran (Anemia) oo keenta neef-qabatin iyo daal',
          'Ilmo-galeenka oo hoos u soo dhaca marka wax culus la qaado']
      },
      selfCare: {
        en: 'Get a free visual cervical check (VIA / Pap) at your local Women Clinic every 3–5 years. Pelvic support rings (pessaries) and simple treatments can fix prolapse without fear.',
        rhg: 'মেইয়্যা হাসপাতালে যাই জরায়ুর মুখ পরীক্ষা গরো। জরায়ু নিচে নামিলে দাক্তররা রিং (Pessary) বা ওষুধে ভালো গরি দেই।',
        bn: 'নিকটস্থ ক্লিনিকে বিনামূল্যে জরায়ুমুখ পরীক্ষা (VIA) করান। জরায়ু নিচে নামলে ভয় না পেয়ে মহিলা ডাক্তারের পরামর্শ নিন।',
        so: 'Tag rugta caafimaadka haweenka si laguu baaro. Hoos-u-dhaca makaanka waa la daweyn karaa.'}
    }
  ],

  '40-50': [
    {
      id: 'perimenopause-abnormal-bleeding',
      icon: '',
      severity: 'warning',
      title: {
        en: 'Perimenopause (Transition to Menopause), Hot Flashes & Irregular Bleeding',
        rhg: 'মাসিক বন্ধ হইবার ওমর (Perimenopause ৪০–৫০), শরীর গরম হওন ও অনিয়মিত লউ',
        bn: 'পেরিমেনোপজ (মাসিক বন্ধ হওয়ার পূর্ববর্তী সময়), হট ফ্ল্যাশ ও অনিয়মিত রক্তপাত',
        so: 'Xilliga Kala-guurka Dhalmo-deyska (Perimenopause), Kulaylka Jirka & Dhiig-baxa'},
      normalVsAbnormal: {
        en: 'NORMAL AT 40–50: Cycles becoming shorter or skipping a month, night sweats, hot flashes, sleep changes. NOT NORMAL: Flooding/gushing blood, bleeding lasting more than 10 days, or bleeding coming closer than every 21 days.',
        rhg: 'স্বাভাবিক: ৪০-৫০ ওমরে মাসিক ১-২ মাস পর পর হওন, রাইতে শরীর গরম অই ঘাম ছুটা। বিপদ: হঠাৎ বন্যা বা পানির মতো বেশি লউ ভাঙ্গা, ১০ দিনের বেশি লউ থাকন।',
        bn: 'স্বাভাবিক: ৪০–৫০ বছর বয়সে মাসিক অনিয়মিত হওয়া, হঠাৎ শরীর গরম হয়ে ঘাম হওয়া। অস্বাভাবিক: অতিরিক্ত রক্তক্ষরণ বা ১০ দিনের বেশি সময় ধরে রক্তপাত থাকা।',
        so: 'CAADI (40-50 jir): Caadada oo boodbooda, dhidid habeenkii ah. HALIS: Dhiig-bax aad u badan oo socda in ka badan 10 maalmood.'},
      redFlags: {
        en: [
          'Heavy flooding bleeding that lasts longer than 10 days',
          'New severe lower belly pain, bloating that never goes down, or unexplained weight loss',
          'Any bleeding that returns after your period has completely stopped for 12 full months'],
        rhg: [
          '১০ দিনের বেশি অতিরিক্ত লউ ভাঙ্গন',
          'পেট ফুলি থাকন ও অকারণে শরীর শুকাই যাওন',
          'পূর্ণ ১ বছর মাসিক বন্ধ থাকার পর আবার লউ দেখা দেওন'],
        bn: [
          '১০ দিনের বেশি সময় ধরে অতিরিক্ত রক্তক্ষরণ',
          'পেট সবসময় ফুলে থাকা বা হঠাৎ ওজন কমে যাওয়া',
          'টানা ১২ মাস মাসিক বন্ধ থাকার পর পুনরায় রক্তপাত হওয়া'],
        so: [
          'Dhiig-bax xoog leh oo socda wax ka badan 10 maalmood',
          'Caloosha oo bararta ama miisaanka oo hoos u dhaca',
          'Dhiig soo laabta kadib markii caadadu joogsatay 12 bilood oo xiriir ah']
      },
      selfCare: {
        en: 'Keep a simple mark or stone calendar of when bleeding happens. Eat calcium-rich foods (small fish with bones, milk, sesame) to keep bones strong.',
        rhg: 'হন দিন লউ ভাঙ্গের ইয়ান মনে রাখো আর মেইয়্যা দাক্তররে কও। ছোট মাছ ও শাক খাইবা হাড্ডি মজবুত রাখিতে।',
        bn: 'কখন রক্তপাত হচ্ছে তা হিসাব রাখুন এবং ছোট মাছ, দুধ ও ক্যালসিয়ামযুক্ত খাবার খান।',
        so: 'La soco maalmaha dhiiggu yimaado oo u sheeg dhakhtarka haweenka.'}
    }
  ],

  '50+': [
    {
      id: 'postmenopause-abnormal-uterine-bleeding',
      icon: '',
      severity: 'high',
      title: {
        en: 'Post-Menopause & Abnormal Uterine Bleeding (Critical Guide for Elders 50+)',
        rhg: 'বুড়া ওমরে (৫০+ Menopause-অর পরে) হঠাৎ লউ ভাঙ্গা — জরুরি দাক্তরি খবর',
        bn: 'মেনোপজ পরবর্তী অস্বাভাবিক জরায়ু রক্তক্ষরণ (৫০+ বয়স্ক মা ও দাদি-নানিদের জরুরি গাইড)',
        so: 'Dhiig-baxa Ilmo-galeenka ee Aan Caadiga Ahayn Kadib Dhalmo-deyska (Hagaha Ayeeyooyinka 50+)'},
      normalVsAbnormal: {
        en: 'IMPORTANT FOR ELDERS & GRANDMOTHERS (50+): Once your monthly period has stopped for 1 full year (Menopause), ZERO vaginal bleeding is normal. Even a few drops of pink, brown, or red blood after menopause is Abnormal Uterine Bleeding and must be checked by a female doctor right away.',
        rhg: '৫০+ ওমরের মা ও নানি-দাদিদের জন্য জরুরি: ১ বছর মাসিক বন্ধ থাকার পর (Menopause) আর এক ফোঁটাও লউ পরা স্বাভাবিক নঅ! বুড়া ওমরে লাল, গোলাপি বা কালচে লউ ভাঙ্গিলে লুকাই ন রাখি সাথে সাথে মেইয়্যা দাক্তর (Daktor meyeá) দেখাইবা। সময়মতো দেখাইলে বড় বিপদ হতুন বাঁচি যাইবা।',
        bn: 'বয়স্ক মা ও দাদি-নানিদের জন্য অত্যন্ত জরুরি: টানা ১ বছর মাসিক বন্ধ থাকার পর (মেনোপজ) এক ফোঁটা রক্তপাতও স্বাভাবিক নয়! ৫০+ বয়সে সামান্য লাল বা বাদামী রক্তপাত হলেও লজ্জা বা ভয় না পেয়ে দ্রুত গাইনি ডাক্তার দেখাতে হবে। শুরুতে চিকিৎসা নিলে সম্পূর্ণ সুস্থ হওয়া যায়।',
        so: 'MUHIIM U AH HOOYOOYINKA WAAWEYN IYO AYEEYOOYINKA (50+): Marka caadadu kaa joogsato 1 sano oo buuxa (Dhalmo-deys), wax dhiig ah ma aha inuu yimaado. Xitaa dhibic yar oo dhiig cas ama bunni ah oo timaada dhalmo-deyska kadib waa "Dhiig-bax Aan Caadi Ahayn"(Abnormal Uterine Bleeding) — ha qarin ee u tag dhakhtarad haween isla markiiba si laguu daweeyo inta aanay xaaladdu cuslaan!'},
      redFlags: {
        en: [
          'ANY vaginal bleeding, spotting, or pink/brown discharge after menopause (even if there is no pain!)',
          'Feeling pressure, a lump, or pain in the lower belly or pelvis',
          'Difficulty urinating, pain when passing water, or uterus dropping down (prolapse)'],
        rhg: [
          'মাসিক বন্ধ অই যাওনের পর (বুড়া ওমরে) যেকোনো লউ বা লালচে পানি ভাঙ্গা — বিষ ন থাকিলেও দাক্তর দেখাইবা!',
          'তলপেটে চাকা বা ভারী লাগন',
          'প্রস্রাব গরিতে কষ্ট বা জরায়ু নিচে নামি আসন'],
        bn: [
          'মাসিক চিরতরে বন্ধ হওয়ার পর যেকোনো রক্তপাত বা লালচে স্রাব (ব্যথা না থাকলেও ডাক্তার দেখাতে হবে!)',
          'তলপেটে চাকা অনুভব করা বা তলপেট ভারী লাগা',
          'প্রস্রাবে কষ্ট হওয়া বা জরায়ু নিচে নেমে আসা'],
        so: [
          'Dhiig kasta ama dhibco cas/bunni ah oo yimaada dhalmo-deyska kadib (xitaa haddii aan xanuun jirin!)',
          'Culays, buro ama xanuun laga dareemo caloosha hoose',
          'Kaadida oo dhib noqota ama ilmo-galeenka oo hoos u soo dhaca']
      },
      selfCare: {
        en: 'Do not feel shy or hide bleeding from your daughter, family, or midwife. Most causes (like polyps, thin uterine lining, or early-stage changes) can be treated safely if you visit a hospital early! Tap the button below to see the closest Women’s Hospital on the map.',
        rhg: 'শরম ন পাই নিজের মাইয়া বা ঘরের মানুষরে কও। শুরুতে হাসপাতালে গেলে ওষুধে বা ছোট পরীক্ষায় ভালো অই যায়! নিচের বাটনে টিপ দি ম্যাপে সবচাইতে কাছের মেইয়্যা হাসপাতাল দেখো।',
        bn: 'লজ্জা না পেয়ে পরিবারের সদস্যদের জানান। প্রাথমিক অবস্থায় হাসপাতালে গেলে খুব সহজেই চিকিৎসা সম্ভব! নিচের বাটনে চাপ দিয়ে ম্যাপে নিকটস্থ গাইনি হাসপাতাল দেখুন।',
        so: 'Ha ka xishoon inaad u sheegto gabadhaada ama umulisada. Haddii aad goor hore tagto isbitaalka, si fudud ayaa loo daweyn karaa! Taabo badhanka hoose si aad khariidadda uga aragto isbitaalka kuu dhow.'}
    },
    {
      id: 'elder-bone-pelvic-health',
      icon: '',
      severity: 'info',
      title: {
        en: 'Post-Menopause Bone Strength, Urinary Comfort & Pelvic Support',
        rhg: 'বুড়া ওমরে হাড্ডির জোর ও প্রস্রাবের হিফাজত',
        bn: 'মেনোপজ পরবর্তী হাড়ের ক্ষয়রোধ ও জরায়ু সুরক্ষা',
        so: 'Adkaynta Lafaha & Caafimaadka Guud ee Ayeeyooyinka'},
      normalVsAbnormal: {
        en: 'NORMAL: Mild vaginal dryness after menopause. NOT NORMAL: Burning urination, frequent bladder infections, or tissue bulging out.',
        rhg: 'স্বাভাবিক: বুড়া ওমরে শরীর একটু শুষ্ক হওন। বিপদ: প্রস্রাবে জ্বালাপোড়া বা জরায়ু নিচে নামা।',
        bn: 'স্বাভাবিক: মেনোপজের পর হালকা শুষ্কতা। অস্বাভাবিক: ঘন ঘন প্রস্রাবে জ্বালাপোড়া বা জরায়ু নিচে নামা।',
        so: 'CAADI: Qallayl fudud. HALIS: Gubasho kaadida ah ama makaanka oo soo dhaca.'},
      redFlags: {
        en: [
          'Sudden severe back or hip pain after a minor slip or fall',
          'Inability to pass urine or fever with back/flank pain'],
        rhg: [
          'পড়ি যাই কোমর বা হাড্ডিতে তীব্র বিষ',
          'প্রস্রাব বন্ধ অই যাওন বা জ্বরের সাথে কোমর বিষা'],
        bn: [
          'হালকা আঘাতে কোমর বা হাড়ে তীব্র ব্যথা',
          'প্রস্রাব আটকে যাওয়া বা জ্বরসহ কোমর ব্যথা'],
        so: [
          'Dhabar-xanuun ama misig-xanuun daran',
          'Kaadida oo xiranta ama qandho']
      },
      selfCare: {
        en: 'Get morning sunlight for 15 minutes daily for Vitamin D, drink clean water (do not hold urine), and visit female clinics for comfortable pelvic support.',
        rhg: 'রোজ সকালে ১৫ মিনিট রোদে বইবা আর পর্যাপ্ত ফানি খাইবা।',
        bn: 'প্রতিদিন সকালে ১৫ মিনিট রোদে থাকুন এবং পর্যাপ্ত বিশুদ্ধ পানি পান করুন।',
        so: 'Subax walba 15 daqiiqo qorraxda fadhiiso oo cab biyo nadiif ah.'}
    }
  ]
};

// ============================================================================
// Category-Based Education Topics for the "Education for You!" Table Buttons
// ============================================================================
export function getEducationTopicIssues(topicId, countryName = 'Your Country', userAgeGroup = '20-25') {
  const cleanCountry =
    countryName && countryName !== 'Global' && !countryName.includes('Total Anon')
      ? countryName
      : 'Your Country';

  const TOPIC_MAP = {
    'trying-to-conceive': [
      {
        id: 'ttc-preconception-fertility-1',
        icon: '',
        severity: 'info',
        title: {
          en: 'Trying to Get Pregnant — Preconception Nutrition, Ovulation Window & Fertility Health',
          prs: 'اقدام به بارداری — تغذیه پیش از حاملگی، روزهای تخمک‌گذاری و صحت باروری',
          ps: 'د امیدوارۍ هڅه — د حمل نه مخکې خواړه، د تخمدان وخت او د مور روغتیا',
          ar: 'التخطيط للحمل — التغذية قبل الحمل، أيام الإباضة وصحة الخصوبة',
          so: 'Isku-dayga Uurka — Nafaqada Uurka Ka Hor, Maalmaha Bacriminta & Caafimaadka Taranka',
          bn: 'গর্ভধারণের প্রস্তুতি — গর্ভধারণ-পূর্ব পুষ্টি, ডিম্বস্ফোটন সময় ও প্রজনন স্বাস্থ্য',
          rhg: 'Fua Loa-r Koshish — Hamel Oibar Ager Khana, Fertile Din ar Meyeá-Fuaindor Sehat'
        },
        normalVsAbnormal: {
          en: 'NORMAL: Healthy couples can take 6 to 12 months of regular, unprotected intimacy during the fertile window (the 5 days leading up to ovulation plus the day of ovulation, usually 12–16 days before your next period starts) to conceive. NEEDS MEDICAL CHECK: If you are under 35 and have tried for 12+ months (or 6+ months if age 35+), if your periods are very irregular or absent (possible PCOS or thyroid condition), or if periods are extremely painful (possible endometriosis or fibroids).'
        },
        redFlags: {
          en: [
            'Severe pelvic pain during periods or intercourse, or very heavy menstrual bleeding (Check for fibroids, endometriosis, or pelvic infection)',
            'Absent or highly irregular periods (less than 21 days or more than 35 days apart) — a simple hormone/thyroid check can help restore ovulation',
            'History of untreated pelvic infections or multiple miscarriages — visit an OBGYN clinic for a compassionate preconception evaluation for both partners'
          ]
        },
        selfCare: {
          en: 'Start taking 400–800 mcg of Folic Acid daily at least 1–3 months before conception to protect your future baby’s brain and spine, eat iron-rich and folate-rich foods (lentils, dark leafy greens, eggs, beans), and remember that fertility involves both partners equally (nearly half of fertility challenges involve male factors, so a woman should never be blamed).'
        }
      },
      AGE_SPECIFIC_ISSUES['20-25'][0]
    ],
    pregnancy: [
      AGE_SPECIFIC_ISSUES['20-25'][0],
      AGE_SPECIFIC_ISSUES['25-30'][0]
    ],
    childbirth: [
      {
        id: 'childbirth-safe-delivery-1',
        icon: '',
        severity: 'high',
        title: {
          en: 'Childbirth — Recognizing True Labor, Safe Delivery & Emergency Warning Signs',
          prs: 'ولادت و زایمان — شناخت درد حقیقی ولادت، زایمان مصئون و علایم خطر عاجل',
          ps: 'زیږون او ولادت — د زیږون ریښتیني دردونه، خوندي ولادت او د خطر نښې',
          ar: 'الولادة والمخاض — التعرف على المخاض الحقيقي، الولادة الآمنة وعلامات الخطر',
          so: 'Dhalmada & Foosha — Aqoonsiga Foosha Dhabta ah, Dhalmada Badbaadada leh & Calaamadaha Khatarta',
          bn: 'সন্তান প্রসব — প্রকৃত প্রসববেদনা চেনা, নিরাপদ প্রসব ও জরুরি বিপদচিহ্ন',
          rhg: 'Fua Khalas / Zonom — Asol Fua-r Bish China, Hifazoti Khalas ar Joruri Bipodor Alamot'
        },
        normalVsAbnormal: {
          en: 'NORMAL LABOR: Contractions that grow steadily stronger, longer (45–60 seconds), and closer together (every 3–5 minutes), accompanied by clear or slightly pink-tinged water breaking and steady downward progress. EMERGENCY / NOT NORMAL: Active labor lasting longer than 12 hours without birth (Obstructed Labor), bright red vaginal bleeding before the baby is born (Placental Abruption / Previa), green or dark brown amniotic fluid with reduced baby movement, or the umbilical cord/foot/shoulder appearing first.'
        },
        redFlags: {
          en: [
            'Active labor lasting more than 12 hours — go to a 24/7 hospital immediately to prevent uterine rupture, fetal distress, and obstetric fistula',
            'Heavy bright-red vaginal bleeding during labor, sudden severe constant abdominal pain, or the placenta not delivering within 30–60 minutes after birth',
            'Severe headache, blurred vision, or convulsions/seizures during labor (Eclampsia — requires immediate hospital magnesium sulfate and blood pressure care)',
            'Baby is in breech (feet/bottom first) or sideways position, or umbilical cord is visible at the birth canal'
          ]
        },
        selfCare: {
          en: 'Before your due month, use the FemPowHer map to identify your nearest 24/7 OBGYN & Maternity Hospital, save their emergency phone number, and arrange reliable transport in advance. Every woman has the right to a skilled midwife or doctor, clean delivery, pain relief, and respectful maternity care.'
        }
      },
      AGE_SPECIFIC_ISSUES['25-30'][0]
    ],
    postpartum: [
      {
        id: 'postpartum-fourth-trimester-1',
        icon: '',
        severity: 'high',
        title: {
          en: 'Postpartum Recovery (The Fourth Trimester) — Physical Healing & Life-Saving Warning Signs',
          prs: 'مراقبت‌های بعد از ولادت (دوره نفاس / چله) — بهبود جسمی مادر و علایم حیاتی خطر',
          ps: 'له زیږون وروسته پاملرنه (څلویښتي) — د مور فزیکي رغیدنه او د خطر نښې',
          ar: 'التعافي بعد الولادة (فترة النفاس) — الشفاء الجسدي وعلامات الخطر المنقذة للحياة',
          so: 'Bogsooshada Dhalmada Kadib (Xilliga Umusha) — Daryeelka Jirka Hooyada & Calaamadaha Khatarta',
          bn: 'প্রসব-পরবর্তী সেবা (প্রসূতি যত্ন) — শারীরিক সুস্থতা ও জীবনরক্ষাকারী বিপদচিহ্ন',
          rhg: 'Fua Oibar Baade Ma-r Hifazot (Zaacha-Fua) — Shorilor Aram ar Jaan Bachaibar Bipodor Alamot'
        },
        normalVsAbnormal: {
          en: 'NORMAL RECOVERY: Vaginal bleeding (lochia) that starts bright red for the first 3–5 days and gradually turns pinkish-brown and then yellowish-white over 4–6 weeks, mild uterine cramping ("afterpains") while breastfeeding, and night sweats as hormones adjust. EMERGENCY / NOT NORMAL: Soaking through 1 or more pads per hour for 2 hours in a row, passing blood clots larger than a plum/egg, foul-smelling vaginal discharge, a C-section or perineal tear that becomes red/swollen/oozing pus, or a severe headache with vision changes after birth.'
        },
        redFlags: {
          en: [
            'Postpartum Hemorrhage: Heavy bleeding that soaks a pad in under an hour or large clots anytime in the first 12 weeks after birth — go to the nearest emergency hospital immediately',
            'Postpartum Preeclampsia: Severe headache that does not go away, blurred vision, swelling of the face/hands, or shortness of breath in the days or weeks after delivery',
            'Postpartum Sepsis / Infection: Fever over 38°C (100.4°F), chills, severe lower belly pain, foul-smelling discharge, or a hot, painful red wedge on the breast with flu-like chills (Mastitis)',
            'Pain, redness, or swelling in one calf/leg or sudden chest pain (Postpartum blood clot / DVT)'
          ]
        },
        selfCare: {
          en: 'The mother needs just as much care after birth as the baby. Rest deeply, drink plenty of clean water, eat warm iron- and protein-rich meals to rebuild blood stores, and never let anyone restrict your water or nutrition during postpartum recovery.'
        }
      },
      {
        id: 'postpartum-emotional-mental-health-2',
        icon: '',
        severity: 'high',
        title: {
          en: 'Postpartum Emotional Wellbeing — Baby Blues vs. Postpartum Depression, Anxiety & Psychosis',
          prs: 'صحت روانی و عاطفی بعد از ولادت — غمگینی طبیعی در برابر افسردگی پس از زایمان',
          ps: 'له زیږون وروسته رواني روغتیا — د مور خپګان، اندیښنه او ملاتړ',
          ar: 'الصحة النفسية بعد الولادة — التقلبات المزاجية مقابل اكتئاب وقلق ما بعد الولادة',
          so: 'Caafimaadka Maskaxda ee Umusha — Murugada Fudud vs. Niyad-jabka Dhalmada Kadib',
          bn: 'প্রসব-পরবর্তী মানসিক স্বাস্থ্য — সাধারণ মন খারাপ বনাম প্রসব-পরবর্তী বিষণ্ণতা ও উদ্বেগ',
          rhg: 'Fua Oibar Baade Mon-or Sehat — Mon Kharap ar Preshani-ot Ma-r Hifazot'
        },
        normalVsAbnormal: {
          en: 'BABY BLUES (Common & Temporary): Tearfulness, mood swings, and feeling overwhelmed during the first 3–14 days after birth as estrogen and progesterone drop sharply. POSTPARTUM DEPRESSION / ANXIETY (Needs Gentle Medical & Community Care): Deep sadness, numbness, hopelessness, panic, inability to sleep even when the baby sleeps, feeling disconnected from the baby, or guilt lasting longer than 2 weeks.'
        },
        redFlags: {
          en: [
            'Thoughts of harming yourself or feeling that your family would be better off without you — reach out to a hospital, midwife, or Women’s Safe Haven immediately',
            'Postpartum Psychosis (Medical Emergency): Confusion, seeing or hearing things others do not, extreme agitation, paranoia, or going days without sleep',
            'Overwhelming sadness, panic, or inability to eat or care for yourself lasting more than 2 weeks after birth'
          ]
        },
        selfCare: {
          en: 'Postpartum depression and anxiety are biological and hormonal medical conditions — they mean your body is recovering from a massive hormonal shift, never that you are a "bad" or "ungrateful" mother. Speak openly with a trusted sister, midwife, or doctor on the map; effective, compassionate treatment is available.'
        }
      }
    ],
    miscarriage: [
      {
        id: 'miscarriage-physical-safety-1',
        icon: '',
        severity: 'high',
        title: {
          en: 'Miscarriage & Early Pregnancy Loss — It Is Never Your Fault: Physical Safety & Medical Care',
          prs: 'سقط ناخواسته و از دست دادن حاملگی — هرگز تقصیر شما نیست: مصئونیت جسمی و مراقبت طبی',
          ps: 'د ماشوم ضایع کیدل (سقط) — دا هیڅکله ستاسو ملامتي نه ده: فزیکي خوندیتوب او طبي پاملرنه',
          ar: 'الإجهاض التلقائي وفقدان الحمل — ليس خطأكِ أبداً: السلامة الجسدية والرعاية الطبية',
          so: 'Dhiciska Uurka — Waligaa Adigu Eed Kuma Lihid: Badbaadada Jirka & Daryeelka Caafimaadka',
          bn: 'গর্ভপাত ও অকাল গর্ভচ্যুতি — এটি কখনোই আপনার দোষ নয়: শারীরিক সুরক্ষা ও চিকিৎসা সেবা',
          rhg: 'Pet-or Fua Nosto (Miscarriage) — Iyan Kokhono Tuáñr Dosh Noh: Shorilor Hifazot ar Daktori Elaj'
        },
        normalVsAbnormal: {
          en: 'FIRST AND MOST IMPORTANT: A miscarriage is NOT caused by lifting something, working, stress, spicy food, or anything you did wrong — over 80% of early miscarriages happen naturally due to random chromosomal patterns as the embryo forms. PHYSICAL RECOVERY: Cramping and bleeding similar to a heavy period for several days, followed by lighter spotting for 1–2 weeks. DANGER SIGNS REQUIRING IMMEDIATE HOSPITAL CARE: Bleeding that soaks through 2+ thick pads per hour for 2 consecutive hours, severe worsening abdominal pain, fever, chills, dizziness/fainting, or foul-smelling discharge.'
        },
        redFlags: {
          en: [
            'Heavy hemorrhage: Soaking 2 or more pads per hour for 2 hours in a row, or feeling dizzy, pale, and faint',
            'Incomplete or Septic Miscarriage: Fever, chills, severe lower belly pain, or foul-smelling vaginal discharge (Requires urgent, gentle uterine care and antibiotics at a hospital to protect your life and future fertility)',
            'Sharp, one-sided lower abdominal or shoulder-tip pain in early pregnancy (Possible Ectopic Pregnancy — a life-threatening emergency requiring immediate hospital care)',
            'If your blood type is Rh-negative, ask the clinic within 72 hours about an Anti-D (RhoGAM) injection to protect future pregnancies'
          ]
        },
        selfCare: {
          en: 'During physical recovery, use clean sanitary pads rather than tampons or vaginal insertions for 2 weeks to prevent infection, rest, hydrate, and eat iron-rich foods. Your body has been through a real physical birth/loss event and deserves medical kindness and rest.'
        }
      },
      {
        id: 'miscarriage-grief-healing-2',
        icon: '',
        severity: 'info',
        title: {
          en: 'Healing Heart & Body After Miscarriage — Hormonal Shifts, Stigma Protection & Grief Support',
          prs: 'التیام دل و جسم پس از سقط — تغییرات هورمونی، محافظت در برابر سرزنش و حمایت عاطفی',
          ps: 'له سقط وروسته د زړه او بدن رغیدنه — د ملامتیا مخنیوی او رواني ملاتړ',
          ar: 'تعافي القلب والجسد بعد فقدان الحمل — التغيرات الهرمونية، الحماية من اللوم والدعم النفسي',
          so: 'Bogsashada Qalbiga & Jirka Dhiciska Kadib — Isbeddelka Hormoonnada & Taageerada Murugada',
          bn: 'গর্ভপাতের পর মন ও শরীরের সুস্থতা — হরমোনের পরিবর্তন, সামাজিক কুসংস্কার থেকে সুরক্ষা ও মানসিক সহমর্মিতা',
          rhg: 'Fua Nosto Oibar Baade Dil ar Shorilor Aram — Dukh, Shorom ar Dosh-tún Hifazot'
        },
        normalVsAbnormal: {
          en: 'WHAT YOUR BODY & HEART MAY FEEL: Even after an early pregnancy loss, your hormones drop suddenly, which can cause waves of deep grief, crying spells, fatigue, or breast tenderness. In many communities, women face painful silence or unfair blame after a miscarriage — remember that pregnancy loss happens to 1 in 4 women worldwide across every nation, and your body is not broken.'
        },
        redFlags: {
          en: [
            'Being blamed, abused, or mistreated at home because of a miscarriage — visit or call any Women’s Safe Haven (pink heart pin on your map) for confidential protection and support',
            'Persistent deep depression, isolation, or thoughts of self-harm in the weeks or months following a pregnancy loss',
            'Being pressured to conceive again before your body, iron stores, and heart feel ready'
          ]
        },
        selfCare: {
          en: 'Allow yourself to grieve at your own pace — whether your pregnancy lasted 6 weeks or 6 months, your love and your loss are real. Most women who miscarry go on to have healthy future pregnancies whenever they are physically and emotionally ready.'
        }
      }
    ],
    'loss-of-a-child': [
      {
        id: 'loss-of-child-maternal-care-1',
        icon: '',
        severity: 'high',
        title: {
          en: 'Loss of a Child (Stillbirth, Infant Loss & Child Loss) — Caring for the Grieving Mother’s Body & Heart',
          prs: 'سوگ از دست دادن فرزند (ولادت طفل بی‌جان یا وفات کودک) — مراقبت از جسم و دل مادر داغدار',
          ps: 'د اولاد له لاسه ورکول — د غمجنې مور د بدن او زړه پاملرنه',
          ar: 'فقدان طفل (ولادة جنين متوفى أو فقدان رضيع أو طفل) — رعاية جسد وقلب الأم المكلومة',
          so: 'Waayitaanka Ilmaha — Daryeelka Jirka iyo Qalbiga Hooyada Murugaysan',
          bn: 'সন্তান হারানোর শোক (মৃত সন্তান প্রসব বা শিশু মৃত্যু) — শোকাহত মায়ের শরীর ও মনের যত্ন',
          rhg: 'Fua Haranor Dukh — Dukh-ot Thaka Ma-r Shoril ar Dilor Hifazot'
        },
        normalVsAbnormal: {
          en: 'HONORING YOUR CHILD & YOUR BODY: Losing a baby in late pregnancy (stillbirth), in the newborn days, or losing a child at any age is one of the deepest pains a human heart can carry. If you have just experienced a stillbirth or infant loss, your body goes through the full physical postpartum recovery — including bleeding (lochia), uterine contractions, hormonal crashes, and breastmilk coming in — while your arms and heart are aching.'
        },
        redFlags: {
          en: [
            'Physical Post-Delivery Danger Signs: Heavy vaginal bleeding (soaking a pad in an hour), high fever, severe headache/vision changes, or red, hot, painful breast infection (Mastitis)',
            'Severe breast engorgement when milk comes in after a loss: Never bind breasts tightly with rope/cloth (which causes blocked ducts and mastitis) — instead use cool compresses, gentle hand-expression only enough to relieve pain, supportive bras, or ask a doctor for safe lactation-suppressing medication',
            'Feeling unable to survive the grief, thoughts of self-harm, or facing blame/isolation from family or community'
          ]
        },
        selfCare: {
          en: 'You are still a mother, and your child’s life matters. Be gentle with your body: eat small warm meals, drink water, let trusted sisters or family handle daily chores, and never let anyone rush your grief or tell you to "just forget."'
        }
      },
      {
        id: 'loss-of-child-community-support-2',
        icon: '',
        severity: 'info',
        title: {
          en: 'How Families, Partners & Sisters Can Support a Mother After the Loss of a Child',
          prs: 'چگونه خانواده، همسر و خواهران می‌توانند از مادر داغدار پس از فقدان فرزند حمایت کنند',
          ps: 'کورنۍ او خویندې څنګه کولی شي د اولاد له لاسه ورکولو وروسته د مور ملاتړ وکړي',
          ar: 'كيف يمكن للعائلة والزوج والأخوات دعم الأم بعد فقدان طفلها',
          so: 'Sida Qoyska iyo Walaaluhu u Taageeri Karaan Hooyada Ilmaheeda Waysay',
          bn: 'সন্তান হারানোর পর পরিবার, জীবনসঙ্গী ও বোনদের কীভাবে মায়ের পাশে দাঁড়ানো উচিত',
          rhg: 'Fua Haranor Baade Ghor-or Manush ar Boin-ol Kemne Ma-r Phuañre Thakibo'
        },
        normalVsAbnormal: {
          en: 'WHAT HELPS A GRIEVING MOTHER MOST: Presence without judgment, saying her child’s name if she wishes, bringing warm food and clean water without expecting her to host, protecting her from intrusive questions or superstitions/blame, and watching closely over her physical health in the weeks and months after the loss.'
        },
        redFlags: {
          en: [
            'Blaming the mother, accusing her of "bad luck," or isolating her after a stillbirth or child’s death',
            'Ignoring physical symptoms like fever, heavy bleeding, chest pain, or severe insomnia in a bereaved mother',
            'Leaving a grieving mother completely alone when she expresses hopelessness or despair'
          ]
        },
        selfCare: {
          en: 'Grief has no expiration date and comes in waves. Use the FemPowHer map to connect with local Women’s Safe Havens, community women’s circles, and compassionate healthcare providers who can support both your physical recovery and emotional healing.'
        }
      }
    ],
    'pregnancy-after-loss': [
      {
        id: 'pregnancy-after-loss-medical-1',
        icon: '',
        severity: 'high',
        title: {
          en: 'Pregnancy After a Loss — Medical Care, Preconception Readiness & Closer Prenatal Monitoring',
          prs: 'حاملگی پس از سقط یا فقدان فرزند — مراقبت‌های طبی، آمادگی جسمی و نظارت دقیق‌تر بارداری',
          ps: 'له سقط یا اولاد له لاسه ورکولو وروسته امیدواره کیدل — طبي پاملرنه او ځانګړې څارنه',
          ar: 'الحمل بعد الإجهاض أو فقدان طفل — الرعاية الطبية، الاستعداد الجسدي والمتابعة الدقيقة',
          so: 'Uurka Dhiciska ama Waayitaanka Ilmaha Kadib — Daryeelka Caafimaadka & La-socoshada Gaarka ah',
          bn: 'গর্ভপাত বা সন্তান হারানোর পর পুনরায় গর্ভধারণ — বিশেষ চিকিৎসা সেবা ও নিবিড় গর্ভকালীন পর্যবেক্ষণ',
          rhg: 'Fua Nosto yá Haranor Baade Dobarah Hamel — Khas Daktori Elaj ar Hifazot'
        },
        normalVsAbnormal: {
          en: 'WHEN YOUR BODY IS READY & WHAT TO EXPECT: After an uncomplicated early miscarriage, once your bleeding has completely stopped, any infection is ruled out, and your body and heart feel ready (often after 1–3 normal menstrual cycles so your iron stores rebuild), most women go on to have a healthy pregnancy. After a late-term loss, stillbirth, or C-section, ask an OBGYN or midwife to check your hemoglobin (iron), thyroid, blood pressure, Rh blood group, and uterine healing so you receive closer, reassuring prenatal checkups.'
        },
        redFlags: {
          en: [
            'Any vaginal bleeding or spotting in a pregnancy after prior miscarriage — ask an OBGYN doctor immediately whether micronized progesterone support or an early reassurance ultrasound is recommended',
            'History of second-trimester loss or preterm birth — ask your OBGYN clinic early (around weeks 12–16) to check your cervical length and whether a cervical stitch (cerclage) or progesterone can protect this pregnancy',
            'History of 2 or more consecutive miscarriages, preeclampsia, or stillbirth — ask the hospital to check for treatable blood-clotting (antiphospholipid), thyroid, blood-sugar, or Rh-negative (Anti-D) factors',
            'Severe one-sided lower belly pain, dizziness, severe headache/blurred vision, or reduced baby movement after month 5 — go to your 24/7 maternity hospital immediately'
          ]
        },
        selfCare: {
          en: 'Start daily Folic Acid (400–800 mcg) and iron-rich nutrition before and during pregnancy, tell your midwife or OBGYN at your very first visit about your previous loss so they schedule extra reassurance visits, and never hesitate to go to the clinic simply for peace of mind.'
        }
      },
      {
        id: 'pregnancy-after-loss-emotional-2',
        icon: '',
        severity: 'info',
        title: {
          en: 'Holding Both Hope & Grief — Coping with Fear, Ultrasound Anxiety & Milestone Weeks',
          prs: 'امید و دلتنگی همزمان — کنار آمدن با ترس، اضطراب معاینات و هفته‌های حساس در حاملگی مجدد',
          ps: 'هیله او غم یوځای — په نوې امیدوارۍ کې له ویرې او اندیښنې سره مقابله',
          ar: 'الجمع بين الأمل والحزن — التعامل مع الخوف، قلق السونار والأسابيع الحرجة في الحمل الجديد',
          so: 'Rajo iyo Murugo Wada Jira — Maareynta Cabsida, Welwelka Baaritaanka & Toddobaadyada Xasaasiga ah',
          bn: 'আশা ও শোকের সহাবস্থান — পুনরায় গর্ভাবস্থায় ভয়, আল্ট্রাসাউন্ড উদ্বেগ ও সংবেদনশীল সপ্তাহগুলো পার করা',
          rhg: 'Asha ar Dukh Eksathe — Dobarah Hamel-or Dor, Ultrasound-or Preshani ar Dilor Shanti'
        },
        normalVsAbnormal: {
          en: 'NORMAL EMOTIONS IN PREGNANCY AFTER LOSS: Feeling terrified every time you check for bleeding, holding your breath before an ultrasound, feeling anxious as you approach the exact week or month of your previous loss, or feeling guilty for loving this new baby while still grieving the child you lost. All of these feelings are normal trauma responses — anxiety does NOT cause miscarriage or harm your baby.'
        },
        redFlags: {
          en: [
            'Severe panic attacks, inability to sleep or eat for days, or feeling completely overwhelmed by trauma triggers',
            'Being told by family or clinic staff to "stop worrying" or "forget the baby you lost now that you are pregnant again"',
            'Skipping prenatal checkups out of fear of receiving bad news — bring a trusted sister, partner, or friend to sit beside you'
          ]
        },
        selfCare: {
          en: 'At the start of every clinic or ultrasound visit, you can tell the midwife or doctor: "I had a previous loss and I am very anxious — please tell me right away if you see or hear the baby’s heartbeat." Take the pregnancy one day at a time; loving this baby never replaces or dishonors the child you carry in your heart.'
        }
      }
    ],
    menopause: [
      AGE_SPECIFIC_ISSUES['40-50'][0],
      AGE_SPECIFIC_ISSUES['50+'][0],
      AGE_SPECIFIC_ISSUES['50+'][1]
    ],
    'menstrual-cycle': [
      AGE_SPECIFIC_ISSUES['8-15'][0],
      AGE_SPECIFIC_ISSUES['15-20'][0],
      AGE_SPECIFIC_ISSUES['30-40'][0]
    ],
    'sexual-health': [
      {
        id: 'sexual-health-consent-safety',
        icon: '',
        severity: 'info',
        title: {
          en: 'Sexual Health, Bodily Autonomy, STI Protection & Contraceptive Choice'
        },
        normalVsAbnormal: {
          en: 'NORMAL: Pain-free intimacy with full bodily consent, clear or white odorless vaginal discharge, and choosing safe family spacing methods that fit your body. NOT NORMAL: Pain or bleeding during or after intercourse, sores/blisters/ulcers, unusual yellow or green foul-smelling discharge, burning urination, or any intimacy without your consent.'
        },
        redFlags: {
          en: [
            'Bleeding after intercourse (Postcoital bleeding — requires a gentle cervical exam at an OB/GYN clinic)',
            'Pelvic pain, fever, genital sores, or abnormal discharge (Untreated STIs can cause pelvic inflammatory disease or infertility, and are easily curable with antibiotics)',
            'Emergency contraception & post-exposure care (PEP) are most effective within 72 hours at any Women’s Safe Haven or OB/GYN Hospital'
          ]
        },
        selfCare: {
          en: 'Your body belongs to you. Visit any Women’s Safe Haven (pink heart pin) or OB/GYN clinic (red cross pin) on the map for 100% confidential STI screening, family planning options, pelvic pain treatment, or survivor care.'
        }
      },
      AGE_SPECIFIC_ISSUES['15-20'][0],
      AGE_SPECIFIC_ISSUES['30-40'][0]
    ],
    'diseases-injuries': [
      {
        id: 'repro-diseases-injuries-1',
        icon: '',
        severity: 'high',
        title: {
          en: 'Reproductive Health Diseases & Birth Injuries: Obstetric Fistula, Pelvic Prolapse, Fibroids & Infections'
        },
        normalVsAbnormal: {
          en: 'NORMAL: Pain-free urination, continent bladder/bowel control, and odorless vaginal discharge. NOT NORMAL: Continuous leaking of urine or stool after a long/difficult childbirth (Obstetric Fistula), feeling tissue bulging from the birth canal (Uterine Prolapse), severe pelvic pain with fever (Pelvic Inflammatory Disease), or heavy bleeding from uterine fibroids.'
        },
        redFlags: {
          en: [
            'Leaking urine or stool uncontrollably after prolonged labor (Obstetric Fistula — 100% surgical cure is available at specialized maternity hospitals)',
            'High fever, lower abdominal tenderness, and foul-smelling discharge (Pelvic infection / Sepsis requiring urgent antibiotics)',
            'Any unhealed birth tear, perineal trauma, or pelvic injury causing severe pain or bleeding'
          ]
        },
        selfCare: {
          en: 'Never suffer in silence or isolation — obstetric fistula, pelvic organ prolapse, endometriosis, PCOS, and reproductive infections are medical conditions, never a source of shame. Use the map to locate free female OB/GYN reconstructive and maternity clinics near you.'
        }
      },
      AGE_SPECIFIC_ISSUES['30-40'][0],
      AGE_SPECIFIC_ISSUES['15-20'][0]
    ],
    'std-menu': [
      {
        id: 'std-menu-overview-testing',
        icon: '',
        severity: 'high',
        title: {
          en: 'STDs Overview: Confidential Screening, Symptoms & Curable vs. Manageable Diseases'
        },
        normalVsAbnormal: {
          en: 'MANY STDs HAVE ZERO SYMPTOMS AT FIRST: Over 70% of women with Chlamydia, Gonorrhea, HPV, or early HIV feel completely normal. When symptoms do appear, they include unusual yellow, green, or gray vaginal discharge, burning when urinating, bleeding between periods or after intimacy, pelvic or lower abdominal pain, or genital sores, blisters, or warts.'
        },
        redFlags: {
          en: [
            'Lower abdominal pain, fever, and pain during intercourse (Pelvic Inflammatory Disease / PID — requires prompt antibiotics to protect your Fallopian tubes and fertility)',
            'Any painless or painful genital sore, ulcer, blister, or rash on the palms/soles (Syphilis or Herpes — Syphilis is 100% curable with penicillin and critical to treat before or during pregnancy)',
            'Possible exposure to HIV within the last 72 hours — Emergency Post-Exposure Prophylaxis (PEP) at any Women’s Safe Haven or Hospital can prevent infection'
          ]
        },
        selfCare: {
          en: 'Bacterial and parasitic STDs (Chlamydia, Gonorrhea, Syphilis, Trichomoniasis) are 100% curable with simple antibiotics, and viral STDs (HIV, HPV, Herpes, Hepatitis B) are safely manageable with modern medicine and vaccines. Use the map to find free, judgment-free STD testing and treatment at any Women’s Safe Haven or OB/GYN clinic.'
        }
      },
      {
        id: 'std-menu-bacterial-curable',
        icon: '',
        severity: 'info',
        title: {
          en: 'Curable STDs: Chlamydia, Gonorrhea, Syphilis & Trichomoniasis'
        },
        normalVsAbnormal: {
          en: 'CURABLE WITH ANTIBIOTICS: Chlamydia, Gonorrhea, Syphilis, and Trichomoniasis are completely curable with a short course of oral or injectable medication. If left untreated, Chlamydia and Gonorrhea can silently climb into the uterus and Fallopian tubes, causing scar tissue, ectopic pregnancy, or infertility.'
        },
        redFlags: {
          en: [
            'Yellow-green frothy discharge, itching, or burning urination',
            'A painless firm sore (chancre) that disappears on its own — Syphilis remains in the blood even after the sore heals and requires a quick blood test and antibiotic shot',
            'Re-infection from an untreated partner — both partners should be treated before resuming intimacy'
          ]
        },
        selfCare: {
          en: 'Always finish the full course of prescribed antibiotics even if symptoms disappear after two days, and ask the clinic if they offer partner treatment packets.'
        }
      },
      {
        id: 'std-menu-viral-hpv-hiv-hsv',
        icon: '',
        severity: 'info',
        title: {
          en: 'Viral STDs: HPV (Cervical Health), HIV (PrEP & PEP), Herpes (HSV) & Hepatitis B'
        },
        normalVsAbnormal: {
          en: 'MANAGEABLE & PREVENTABLE: Human Papillomavirus (HPV) is the most common STD worldwide; most strains clear naturally, while high-risk strains can cause cervical cell changes that are 100% preventable with the HPV vaccine and routine cervical screening (Pap/HPV swab or VIA). HIV is completely manageable with daily antiretroviral therapy (ART), allowing women to live long, healthy lives and give birth to HIV-free babies.'
        },
        redFlags: {
          en: [
            'Bleeding after intimacy or between periods (always get a gentle cervical checkup)',
            'Painful grouped blisters or sores around the vulva or mouth (Herpes simplex — antiviral tablets shorten outbreaks and reduce transmission)',
            'Unprotected exposure or sexual assault within the past 72 hours — go immediately to a Safe Haven or Hospital for emergency HIV PEP, emergency contraception, and preventive STD antibiotics'
          ]
        },
        selfCare: {
          en: 'Having an STD never diminishes your worth. Every Women’s Safe Haven (pink heart pin) and OB/GYN center (red cross pin) on the FemPowHer map provides confidential care.'
        }
      }
    ],
    'for-me': [
      ...(AGE_SPECIFIC_ISSUES[userAgeGroup] || AGE_SPECIFIC_ISSUES['20-25']),
      {
        id: 'for-me-daily-agency',
        icon: '',
        severity: 'info',
        title: {
          en: 'For Me — Knowing My Body, My Cycle & My Right to Safe Care'
        },
        normalVsAbnormal: {
          en: 'NORMAL: Asking questions at a clinic, requesting a female midwife or doctor, and tracking your monthly cycle and energy levels. NEEDS CARE: Any sudden change in bleeding pattern, persistent pelvic pain, dizziness/anemia, or feeling unsafe at home.'
        },
        redFlags: {
          en: [
            'Bleeding that soaks through a pad or cloth every hour for 2+ hours',
            'Any bleeding during pregnancy or any bleeding after menopause',
            'Feeling unsafe, coerced, or in need of an immediate Women’s Safe Haven'
          ]
        },
        selfCare: {
          en: 'You can switch your age group at the top anytime or explore Pregnancy, Menopause, and Menstrual Cycle guides. Every Women’s Safe Haven (pink heart pin) and Hospital (red cross pin) on the FemPowHer map is here for you.'
        }
      }
    ],
    'for-loved-one': [
      {
        id: 'loved-one-caregiver-guide',
        icon: '',
        severity: 'high',
        title: {
          en: 'For a Loved One — How to Support a Mother, Daughter, Sister, or Grandmother'
        },
        normalVsAbnormal: {
          en: 'FOR DAUGHTERS (8–20): Reassure her before her first period and watch for severe cramps or anemia. FOR PREGNANT SISTERS/MOTHERS (20–40): Know the 3 delays — never wait more than 12 hours in labor before going to a hospital. FOR ELDERS & GRANDMOTHERS (50+): Any vaginal spotting after menopause is an urgent medical sign that needs a doctor right away.'
        },
        redFlags: {
          en: [
            'A mother or grandmother (50+) mentions even a single drop of blood after menopause — accompany her to an OB/GYN clinic immediately',
            'A pregnant loved one has a severe headache, blurred vision, bleeding, or labor lasting over 12 hours',
            'A sister or friend confides that she is experiencing domestic violence — help her reach a Women’s Safe Haven on the map'
          ]
        },
        selfCare: {
          en: 'Many women hide symptoms out of modesty or fear of burdening the family. Gently ask your mother, grandmother, or daughter how she is feeling, press "Listen Aloud" so she can hear the guide in her own language, and accompany her to the clinic.'
        }
      },
      AGE_SPECIFIC_ISSUES['50+'][0],
      AGE_SPECIFIC_ISSUES['8-15'][0]
    ],
    'traditional-stories': [
      {
        id: 'traditional-female-health-country',
        icon: '',
        severity: 'info',
        title: {
          en: 'Traditional Female Health Stories — Intergenerational Maternal Wisdom & Safe Care'
        },
        normalVsAbnormal: {
          en: `HONORING HELPFUL TRADITIONS IN ${cleanCountry.toUpperCase()}: Across generations in ${cleanCountry}, grandmothers, traditional birth attendants (dais / midwives), and community sisters have passed down 40-day postpartum rest traditions, warm nourishing iron-rich broths (lentils, fenugreek, ginger, sesame, moringa), belly binding for comfort, and communal circle support for new mothers. REPLACING HARMFUL MYTHS WITH SAFE CARE: While community warmth heals the spirit, never delay hospital transport during obstructed labor, never restrict water or protein after childbirth, and never use unsterile cloths or herbal insertions.`
        },
        redFlags: {
          en: [
            'Delaying emergency hospital transport during difficult labor to wait for home remedies',
            'Withholding clean water, colostrum (first breastmilk), or iron-rich food from a postpartum mother',
            'Treating postmenopausal bleeding or severe pelvic pain solely with home herbs instead of a medical exam'
          ]
        },
        selfCare: {
          en: `Combine the best of ${cleanCountry}’s maternal wisdom — warm rest, family care, storytelling, and nourishing traditional foods — with modern 24/7 skilled midwifery and OB/GYN clinics mapped across ${cleanCountry}.`
        }
      }
    ],
    worldview: [
      {
        id: 'worldview-global-sisterhood',
        icon: '',
        severity: 'info',
        title: {
          en: 'Worldview — Global Maternal Health, Safe Havens & Cross-Cultural Sisterhood Across All Continents'
        },
        normalVsAbnormal: {
          en: 'THE GLOBAL PICTURE: Every day across the world — from rural villages in South Asia, Central Asia, and Sub-Saharan Africa to nomadic steppes, desert oases, and urban neighborhoods — women share the same biological milestones of menarche, motherhood, and menopause. Globally, over 90% of maternal complications (postpartum hemorrhage, preeclampsia, obstetric fistula, and cervical/uterine conditions) are preventable or treatable when women have local-language education and rapid access to a Safe Haven or OB/GYN hospital.'
        },
        redFlags: {
          en: [
            'The "Three Delays" worldwide: Delay in recognizing danger signs, Delay in reaching a safe facility, and Delay in receiving respectful care',
            'Stigma or silence around menstruation, domestic violence, obstetric fistula, and postmenopausal bleeding',
            'Lack of native-script health guidance for rural, indigenous, and displaced women'
          ]
        },
        selfCare: {
          en: 'FemPowHer connects nearly 2,000 verified Women’s Safe Havens, Sakhi/One-Stop Crisis Centers, Maternity Hospitals, and Rural Health Posts across Earth — completely free, local-first, and in your native language and script.'
        }
      }
    ],
    'womens-health-news': [
      {
        id: 'womens-health-news-breakthroughs',
        icon: '',
        severity: 'info',
        title: {
          en: 'Women’s Health in the News — Global Maternal Care, Mobile Midwifery & Research Updates'
        },
        normalVsAbnormal: {
          en: 'LATEST DEVELOPMENTS IN WOMEN’S HEALTH: Around the world, new community midwifery networks, heat-stable carbetocin to prevent postpartum hemorrhage without refrigeration, single-dose HPV vaccines preventing cervical cancer, and non-invasive endometriosis & menopause treatments are expanding to rural and humanitarian clinics.'
        },
        redFlags: {
          en: [
            'Outbreak & waterborne alerts during monsoon or displacement seasons require extra hydration and prenatal vigilance for pregnant mothers',
            'Watch out for unverified social media remedies — always verify treatments with a trained midwife or OB/GYN doctor',
            'New mobile maternal clinics and free cervical screening days are updated regularly in your local Public Health News tab'
          ]
        },
        selfCare: {
          en: 'Check both this section and the "Public health news near you" tab for local mobile clinic schedules, safe water notices, and maternal health campaigns in your area.'
        }
      }
    ]
  };

  return TOPIC_MAP[topicId] || TOPIC_MAP['for-me'];
}

