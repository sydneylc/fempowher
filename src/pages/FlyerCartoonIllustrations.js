import React from 'https://esm.sh/react@18.3.1';

const h = React.createElement;

// Built-in instant translations for all sticker labels, inner sticker words, and section headings
// across core languages, paired with live neural translation in renderBrightStdFlyerPage for all 250+ languages.
export const FLYER_INSTANT_I18N = {
  es: {
    'PROTECT YOUR LIVER': 'PROTEGE TU HÍGADO',
    'JAUNDICE': 'ICTERICIA',
    'TREAT BOTH PARTNERS': 'TRATAR A LA PAREJA',
    'VACCINE PROTECTION': 'PROTECCIÓN VACUNAL',
    'PAP & HPV SCREENING': 'PRUEBA PAP Y VPH',
    'SILENT (NO SYMPTOMS)': 'SILENCIOSA (SIN SÍNTOMAS)',
    'PROTECT FALLOPIAN TUBES': 'PROTEGE LAS TROMPAS',
    'CLINIC ANTIBIOTIC SHOT': 'INYECCIÓN ANTIBIÓTICA',
    'BURNING URINATION': 'ARDOR AL ORINAR',
    'BENIGN MUSCLE GROWTHS': 'FIBROMAS BENIGNOS',
    'IRON & ANEMIA CARE': 'HIERRO Y ANEMIA',
    '90%+ SURGICALLY CURABLE': '90%+ CURABLE CON CIRUGÍA',
    'PESSARY & PELVIC SUPPORT': 'PESARIO Y SOPORTE PÉLVICO',
    'SWAB TEST & NO ALCOHOL': 'PRUEBA Y SIN ALCOHOL',
    'PAIRED DIPLOCOCCI': 'BACTERIAS DIPLOCOCOS',
    'RE-TEST IN 3 MONTHS': 'REPETIR PRUEBA EN 3 MESES',
    '3 MO': '3 MES',
    'CHECKUP': 'CONTROL',
    'DRINK CLEAN WATER': 'BEBER AGUA LIMPIA',
    'DAILY KEGEL EXERCISES': 'EJERCICIOS DE KEGEL',
    '5s': '5s',
    'HOLD & LIFT': 'APRETAR',
    'Signs and Symptoms': 'Signos y síntomas',
    'How to Treat and Where to Go to Be Treated': 'Cómo tratar y dónde acudir para recibir tratamiento',
    'What Happens When You Do Not Treat (Long-Term)': 'Qué sucede cuando no se trata (a largo plazo)',
    'How It Will Manifest in a Male': 'Cómo se manifiesta en el hombre',
    'How It Can Affect Pregnancy': 'Cómo puede afectar el embarazo',
    'How It Can Affect Pregnancy and Future Childbirth': 'Cómo puede afectar el embarazo y futuros partos',
    'How It Can Affect Pregnancy and Childbirth': 'Cómo puede afectar el embarazo y el parto',
    'What You Can Do Today': 'Qué puedes hacer hoy',
    'What is Trichomonas?': '¿Qué es la tricomoniasis?',
    'What is HPV?': '¿Qué es el VPH?',
    'What is Chlamydia?': '¿Qué es la clamidia?',
    'What is Gonorrhea?': '¿Qué es la gonorrea?',
    'What is Hepatitis B?': '¿Qué es la hepatitis B?',
    'What is a Fistula?': '¿Qué es una fístula?',
    'What are Fibroids?': '¿Qué son los fibromas?',
    'What is Prolapse?': '¿Qué es el prolapso?',
    'How Partners and Families Can Support Healing': 'Cómo la pareja y la familia pueden apoyar la recuperación',
    'How Fibroids Affect Intimacy and Your Partner': 'Cómo afectan los fibromas la intimidad y a tu pareja',
    'How Prolapse Affects Daily Work, Intimacy, and Partners': 'Cómo afecta el prolapso el trabajo diario, la intimidad y a la pareja',
    'Find Nearest Women’s Clinic or Hospital on Map →': 'Encontrar la clínica u hospital de mujeres más cercano en el mapa →'
  },
  fr: {
    'PROTECT YOUR LIVER': 'PROTÉGEZ VOTRE FOIE',
    'JAUNDICE': 'JAUNISSE (ICTÈRE)',
    'TREAT BOTH PARTNERS': 'TRAITER LES 2 PARTENAIRES',
    'VACCINE PROTECTION': 'PROTECTION PAR VACCIN',
    'PAP & HPV SCREENING': 'DÉPISTAGE PAP ET VPH',
    'SILENT (NO SYMPTOMS)': 'SILENCIEUX (SANS SYMPTÔMES)',
    'PROTECT FALLOPIAN TUBES': 'PROTÉGER LES TROMPES',
    'CLINIC ANTIBIOTIC SHOT': 'INJECTION ANTIBIOTIQUE',
    'BURNING URINATION': 'BRÛLURE EN URINANT',
    'BENIGN MUSCLE GROWTHS': 'FIBROMES BÉNINS',
    'IRON & ANEMIA CARE': 'SOINS FER ET ANÉMIE',
    '90%+ SURGICALLY CURABLE': '90%+ GUÉRISSABLE (CHIRURGIE)',
    'PESSARY & PELVIC SUPPORT': 'PESSAIRE ET SOUTIEN PELVIEN',
    'SWAB TEST & NO ALCOHOL': 'TEST ET ZÉRO ALCOOL',
    'PAIRED DIPLOCOCCI': 'DIPLOCOQUES EN PAIRE',
    'RE-TEST IN 3 MONTHS': 'RETESTER DANS 3 MOIS',
    '3 MO': '3 MOIS',
    'CHECKUP': 'BILAN',
    'DRINK CLEAN WATER': 'BOIRE DE L’EAU PROPRE',
    'DAILY KEGEL EXERCISES': 'EXERCICES DE KEGEL',
    '5s': '5s',
    'HOLD & LIFT': 'CONTRACTER',
    'Signs and Symptoms': 'Signes et symptômes',
    'How to Treat and Where to Go to Be Treated': 'Comment traiter et où aller pour être soignée',
    'What Happens When You Do Not Treat (Long-Term)': 'Que se passe-t-il en l’absence de traitement (à long terme)',
    'How It Will Manifest in a Male': 'Comment cela se manifeste chez l’homme',
    'How It Can Affect Pregnancy': 'Comment cela peut affecter la grossesse',
    'How It Can Affect Pregnancy and Future Childbirth': 'Comment cela peut affecter la grossesse et l’accouchement',
    'How It Can Affect Pregnancy and Childbirth': 'Comment cela peut affecter la grossesse et l’accouchement',
    'What You Can Do Today': 'Ce que vous pouvez faire aujourd’hui',
    'What is Trichomonas?': 'Qu’est-ce que la trichomonase ?',
    'What is HPV?': 'Qu’est-ce que le VPH ?',
    'What is Chlamydia?': 'Qu’est-ce que la chlamydia ?',
    'What is Gonorrhea?': 'Qu’est-ce que la gonorrhée ?',
    'What is Hepatitis B?': 'Qu’est-ce que l’hépatite B ?',
    'What is a Fistula?': 'Qu’est-ce qu’une fistule ?',
    'What are Fibroids?': 'Que sont les fibromes ?',
    'What is Prolapse?': 'Qu’est-ce que le prolapsus ?',
    'How Partners and Families Can Support Healing': 'Comment le partenaire et la famille peuvent soutenir la guérison',
    'How Fibroids Affect Intimacy and Your Partner': 'Comment les fibromes affectent l’intimité et votre partenaire',
    'How Prolapse Affects Daily Work, Intimacy, and Partners': 'Comment le prolapsus affecte le travail quotidien, l’intimité et le partenaire',
    'Find Nearest Women’s Clinic or Hospital on Map →': 'Trouver la clinique ou l’hôpital pour femmes le plus proche sur la carte →'
  },
  ar: {
    'PROTECT YOUR LIVER': 'احمِ كبدك',
    'JAUNDICE': 'اليرقان (اصفرار الجلد)',
    'TREAT BOTH PARTNERS': 'علاج كلا الشريكين',
    'VACCINE PROTECTION': 'الحماية باللقاح',
    'PAP & HPV SCREENING': 'فحص عنق الرحم و HPV',
    'SILENT (NO SYMPTOMS)': 'صامت (بدون أعراض)',
    'PROTECT FALLOPIAN TUBES': 'حماية قناتي فالوب',
    'CLINIC ANTIBIOTIC SHOT': 'حقنة مضاد حيوي بالعيادة',
    'BURNING URINATION': 'حرقة عند التبول',
    'BENIGN MUSCLE GROWTHS': 'أورام عضلية حميدة',
    'IRON & ANEMIA CARE': 'علاج الحديد وفقر الدم',
    '90%+ SURGICALLY CURABLE': 'قابل للشفاء جراحياً +90%',
    'PESSARY & PELVIC SUPPORT': 'حلقة دعم الحوض',
    'SWAB TEST & NO ALCOHOL': 'فحص مسحة وتجنب الكحول',
    'PAIRED DIPLOCOCCI': 'بكتيريا ثنائية مزدوجة',
    'RE-TEST IN 3 MONTHS': 'إعادة الفحص بعد 3 أشهر',
    '3 MO': '3 أشهر',
    'CHECKUP': 'فحص',
    'DRINK CLEAN WATER': 'اشربي ماءً نظيفاً',
    'DAILY KEGEL EXERCISES': 'تمارين كيجل اليومية',
    '5s': '5 ث',
    'HOLD & LIFT': 'شدّي الحوض',
    'Signs and Symptoms': 'العلامات والأعراض',
    'How to Treat and Where to Go to Be Treated': 'كيفية العلاج وأين تذهبين لتلقي العلاج',
    'What Happens When You Do Not Treat (Long-Term)': 'ماذا يحدث عند عدم العلاج (على المدى الطويل)',
    'How It Will Manifest in a Male': 'كيف يظهر المرض لدى الرجل',
    'How It Can Affect Pregnancy': 'كيف يمكن أن يؤثر على الحمل',
    'How It Can Affect Pregnancy and Future Childbirth': 'كيف يمكن أن يؤثر على الحمل والولادة المستقبلية',
    'How It Can Affect Pregnancy and Childbirth': 'كيف يمكن أن يؤثر على الحمل والولادة',
    'What You Can Do Today': 'ما يمكنكِ فعله اليوم',
    'What is Trichomonas?': 'ما هو داء المشعرات (تريكوموناس)؟',
    'What is HPV?': 'ما هو فيروس الورم الحليمي البشري (HPV)؟',
    'What is Chlamydia?': 'ما هي الكلاميديا؟',
    'What is Gonorrhea?': 'ما هو السيلان؟',
    'What is Hepatitis B?': 'ما هو التهاب الكبد ب؟',
    'What is a Fistula?': 'ما هو الناسور؟',
    'What are Fibroids?': 'ما هي الألياف الرحمية؟',
    'What is Prolapse?': 'ما هو هبوط أعضاء الحوض؟',
    'How Partners and Families Can Support Healing': 'كيف يمكن للزوج والعائلة دعم الشفاء',
    'How Fibroids Affect Intimacy and Your Partner': 'كيف تؤثر الألياف الرحمية على العلاقة الزوجية',
    'How Prolapse Affects Daily Work, Intimacy, and Partners': 'كيف يؤثر الهبوط على العمل اليومي والعلاقة الزوجية',
    'Find Nearest Women’s Clinic or Hospital on Map →': 'ابحثي عن أقرب عيادة أو مستشفى للنساء على الخريطة ←'
  },
  prs: {
    'PROTECT YOUR LIVER': 'محافظت از جگر (کبد)',
    'JAUNDICE': 'زردی (یرقان)',
    'TREAT BOTH PARTNERS': 'تداوی هر دو شریک جنسی',
    'VACCINE PROTECTION': 'محافظت با واکسین',
    'PAP & HPV SCREENING': 'معاینه پپ اسمیر و HPV',
    'SILENT (NO SYMPTOMS)': 'خاموش (بدون علایم)',
    'PROTECT FALLOPIAN TUBES': 'محافظت از لوله‌های رحم',
    'CLINIC ANTIBIOTIC SHOT': 'پیچکاری آنتی‌بیوتیک در کلینیک',
    'BURNING URINATION': 'سوزش هنگام ادرار',
    'BENIGN MUSCLE GROWTHS': 'تومورهای عضلاتی خوش‌خیم',
    'IRON & ANEMIA CARE': 'مراقبت آهن و کم‌خونی',
    '90%+ SURGICALLY CURABLE': '+۹۰٪ قابل تداوی با جراحی',
    'PESSARY & PELVIC SUPPORT': 'حلقه طبی و حمایت لگن',
    'SWAB TEST & NO ALCOHOL': 'معاینه کلینیک و پرهیز از الکول',
    'PAIRED DIPLOCOCCI': 'باکتری‌های جفت دیپلوکوک',
    'RE-TEST IN 3 MONTHS': 'معاینه مجدد بعد از ۳ ماه',
    '3 MO': '۳ ماه',
    'CHECKUP': 'معاینه',
    'DRINK CLEAN WATER': 'نوشیدن آب پاک',
    'DAILY KEGEL EXERCISES': 'تمرینات روزانه کگل',
    '5s': '۵ ثانیه',
    'HOLD & LIFT': 'انقباض لگن',
    'Signs and Symptoms': 'نشانه‌ها و علایم',
    'How to Treat and Where to Go to Be Treated': 'چگونگی تداوی و به کجا برای تداوی مراجعه کنید',
    'What Happens When You Do Not Treat (Long-Term)': 'در صورت عدم تداوی در درازمدت چه اتفاقی می‌افتد',
    'How It Will Manifest in a Male': 'چگونه در مردان ظاهر می‌شود',
    'How It Can Affect Pregnancy': 'چگونه می‌تواند بر حاملگی تأثیر بگذارد',
    'How It Can Affect Pregnancy and Future Childbirth': 'چگونه می‌تواند بر حاملگی و ولادت‌های آینده تأثیر بگذارد',
    'How It Can Affect Pregnancy and Childbirth': 'چگونه می‌تواند بر حاملگی و ولادت تأثیر بگذارد',
    'What You Can Do Today': 'امروز چه کاری می‌توانید انجام دهید',
    'What is Trichomonas?': 'تریکوموناس چیست؟',
    'What is HPV?': 'ویروس پاپیلومای انسانی (HPV) چیست؟',
    'What is Chlamydia?': 'کلامیدیا چیست؟',
    'What is Gonorrhea?': 'سوزاک (گونوریا) چیست؟',
    'What is Hepatitis B?': 'زردی سیاه (هپاتیت B) چیست؟',
    'What is a Fistula?': 'فیستول ولادی چیست؟',
    'What are Fibroids?': 'فیبروم رحم چیست؟',
    'What is Prolapse?': 'افتادگی رحم و لگن چیست؟',
    'How Partners and Families Can Support Healing': 'چگونه همسر و خانواده می‌توانند از بهبودی حمایت کنند',
    'How Fibroids Affect Intimacy and Your Partner': 'تأثیر فیبروم بر روابط زناشویی و همسر',
    'How Prolapse Affects Daily Work, Intimacy, and Partners': 'تأثیر افتادگی رحم بر کار روزانه و روابط زناشویی',
    'Find Nearest Women’s Clinic or Hospital on Map →': 'نزدیک‌ترین شفاخانه یا کلینیک زنان را در نقشه پیدا کنید ←'
  },
  hi: {
    'PROTECT YOUR LIVER': 'अपने लिवर की रक्षा करें',
    'JAUNDICE': 'पीलिया (जॉन्डिस)',
    'TREAT BOTH PARTNERS': 'दोनों साथियों का इलाज',
    'VACCINE PROTECTION': 'टीके से सुरक्षा',
    'PAP & HPV SCREENING': 'पैप और एचपीवी जांच',
    'SILENT (NO SYMPTOMS)': 'शांत (कोई लक्षण नहीं)',
    'PROTECT FALLOPIAN TUBES': 'फैलोपियन ट्यूब की सुरक्षा',
    'CLINIC ANTIBIOTIC SHOT': 'क्लिनिक एंटीबायोटिक इंजेक्शन',
    'BURNING URINATION': 'पेशाब में जलन',
    'BENIGN MUSCLE GROWTHS': 'गैर-कैंसरकारी गांठें',
    'IRON & ANEMIA CARE': 'आयरन और एनीमिया देखभाल',
    '90%+ SURGICALLY CURABLE': '90%+ सर्जरी से ठीक',
    'PESSARY & PELVIC SUPPORT': 'पेसरी और पेल्विक सपोर्ट',
    'SWAB TEST & NO ALCOHOL': 'स्वैब जांच और शराब से परहेज',
    'PAIRED DIPLOCOCCI': 'जोड़े वाले बैक्टीरिया',
    'RE-TEST IN 3 MONTHS': '3 महीने में दोबारा जांच',
    '3 MO': '3 माह',
    'CHECKUP': 'जांच',
    'DRINK CLEAN WATER': 'साफ पानी पिएं',
    'DAILY KEGEL EXERCISES': 'दैनिक कीगल व्यायाम',
    '5s': '5 सेकं',
    'HOLD & LIFT': 'रोकें',
    'Signs and Symptoms': 'संकेत और लक्षण',
    'How to Treat and Where to Go to Be Treated': 'इलाज कैसे करें और इलाज के लिए कहाँ जाएं',
    'What Happens When You Do Not Treat (Long-Term)': 'इलाज न कराने पर लंबे समय में क्या होता है',
    'How It Will Manifest in a Male': 'पुरुषों में इसके लक्षण कैसे दिखते हैं',
    'How It Can Affect Pregnancy': 'यह गर्भावस्था को कैसे प्रभावित कर सकता है',
    'What You Can Do Today': 'आज आप क्या कर सकती हैं'
  },
  bn: {
    'PROTECT YOUR LIVER': 'আপনার লিভার রক্ষা করুন',
    'JAUNDICE': 'জন্ডিস (হলুদ চোখ ও ত্বক)',
    'TREAT BOTH PARTNERS': 'উভয় সঙ্গীর চিকিৎসা',
    'VACCINE PROTECTION': 'টিকা সুরক্ষা',
    'PAP & HPV SCREENING': 'প্যাপ ও এইচপিভি পরীক্ষা',
    'SILENT (NO SYMPTOMS)': 'নীরব (লক্ষণহীন)',
    'PROTECT FALLOPIAN TUBES': 'ফ্যালোপিয়ান টিউব রক্ষা',
    'CLINIC ANTIBIOTIC SHOT': 'ক্লিনিক অ্যান্টিবায়োটিক ইনজেকশন',
    'BURNING URINATION': 'প্রস্রাবে জ্বালাপোড়া',
    'BENIGN MUSCLE GROWTHS': 'নিরাপদ পেশী টিউমার',
    'IRON & ANEMIA CARE': 'আয়রন ও রক্তস্বল্পতা যত্ন',
    '90%+ SURGICALLY CURABLE': '৯০%+ অস্ত্রোপচারে নিরাময়যোগ্য',
    'PESSARY & PELVIC SUPPORT': 'পেসারি রিং ও পেলভিক সাপোর্ট',
    'SWAB TEST & NO ALCOHOL': 'সোয়াব টেস্ট ও অ্যালকোহল বর্জন',
    'PAIRED DIPLOCOCCI': 'জোড়া ব্যাকটেরিয়া',
    'RE-TEST IN 3 MONTHS': '৩ মাস পর পুনরায় পরীক্ষা',
    '3 MO': '৩ মাস',
    'CHECKUP': 'পরীক্ষা',
    'DRINK CLEAN WATER': 'বিশুদ্ধ পানি পান করুন',
    'DAILY KEGEL EXERCISES': 'দৈনিক কেগেল ব্যায়াম',
    '5s': '৫ সে.',
    'HOLD & LIFT': 'ধরে রাখুন',
    'Signs and Symptoms': 'লক্ষণ ও উপসর্গ',
    'How to Treat and Where to Go to Be Treated': 'কীভাবে চিকিৎসা করবেন এবং কোথায় যাবেন',
    'What Happens When You Do Not Treat (Long-Term)': 'চিকিৎসা না করলে দীর্ঘমেয়াদে কী হয়',
    'How It Will Manifest in a Male': 'পুরুষের শরীরে এটি কীভাবে প্রকাশ পায়',
    'How It Can Affect Pregnancy': 'এটি গর্ভাবস্থায় কী প্রভাব ফেলতে পারে',
    'What You Can Do Today': 'আজ আপনি কী করতে পারেন'
  },
  sw: {
    'PROTECT YOUR LIVER': 'LINDA INI LAKO',
    'JAUNDICE': 'HOMANYONGO (MANJANO)',
    'TREAT BOTH PARTNERS': 'TIBU WENZA WOTE WAWILI',
    'VACCINE PROTECTION': 'KINGA YA CHANJO',
    'PAP & HPV SCREENING': 'UPIMAJI WA PAP NA HPV',
    'SILENT (NO SYMPTOMS)': 'KIMYA (BILA DALILI)',
    'PROTECT FALLOPIAN TUBES': 'LINDA MIRIJA YA UZAZI',
    'CLINIC ANTIBIOTIC SHOT': 'SINDANO YA ANTIBIOTIKI',
    'BURNING URINATION': 'MAUMIVU WAKATI WA KUKOJOA',
    'BENIGN MUSCLE GROWTHS': 'UVIMBE USIO WA SARATANI',
    'IRON & ANEMIA CARE': 'MADINI YA CHUMA NA DAMU',
    '90%+ SURGICALLY CURABLE': '90%+ INATIBIKA KWA UPASUAJI',
    'PESSARY & PELVIC SUPPORT': 'PETE YA KUSHIKILIA NYONGA',
    'SWAB TEST & NO ALCOHOL': 'KIPIMO NA USINYWE POMBE',
    'PAIRED DIPLOCOCCI': 'BAKTERIA PACHA',
    'RE-TEST IN 3 MONTHS': 'PIMA TENA BAADA YA MIEZI 3',
    '3 MO': 'MIEZI 3',
    'CHECKUP': 'KIPIMO',
    'DRINK CLEAN WATER': 'KUNYWA MAJI SAFI',
    'DAILY KEGEL EXERCISES': 'MAZOEZI YA KEGEL KILA SIKU',
    '5s': 'Sek 5',
    'HOLD & LIFT': 'BANA',
    'Signs and Symptoms': 'Dalili na Viashiria',
    'How to Treat and Where to Go to Be Treated': 'Jinsi ya Kutibu na Mahali pa Kwenda Kutibiwa',
    'What Happens When You Do Not Treat (Long-Term)': 'Nini Kinatokea Usipotibiwa (Muda Mrefu)',
    'How It Will Manifest in a Male': 'Jinsi Inavyojitokeza kwa Mwanaume',
    'How It Can Affect Pregnancy': 'Jinsi Inavyoweza Kuathiri Ujauzito',
    'What You Can Do Today': 'Unachoweza Kufanya Leo'
  },
  so: {
    'PROTECT YOUR LIVER': 'ILAALI BEERKAAGA',
    'JAUNDICE': 'CAGAARSHOW (INDHO CAGAAR)',
    'TREAT BOTH PARTNERS': 'DAAWEE LABADA LAMAANE',
    'VACCINE PROTECTION': 'KA HORTAGGA TALLAALKA',
    'PAP & HPV SCREENING': 'BAARITAANKA PAP & HPV',
    'SILENT (NO SYMPTOMS)': 'AAMUSAN (CALAAMAD LA’AAN)',
    'PROTECT FALLOPIAN TUBES': 'ILAALI TUUBOOYINKA ILMA-GALEENKA',
    'CLINIC ANTIBIOTIC SHOT': 'CIRBADDA ANTIBIYOOTIGA',
    'BURNING URINATION': 'GUBASHO KAADIDA AH',
    'BENIGN MUSCLE GROWTHS': 'BUROOYIN AAN KANSAR AHAYN',
    'IRON & ANEMIA CARE': 'DARYEELKA BIRTA & DHIIG-YARAANTA',
    '90%+ SURGICALLY CURABLE': '90%+ QALLIIN LAGU DAAWEYN KARO',
    'PESSARY & PELVIC SUPPORT': 'TAAGEERADA MISIGTA',
    'SWAB TEST & NO ALCOHOL': 'BAARITAAN & KHAMRI LA’AAN',
    'PAIRED DIPLOCOCCI': 'BAKTEERIYADA LAMMAANAHA AH',
    'RE-TEST IN 3 MONTHS': 'MAR KALE IS BAAR 3 BILOOD',
    '3 MO': '3 BIL',
    'CHECKUP': 'BAARIS',
    'DRINK CLEAN WATER': 'CAB BIYO NADIIF AH',
    'DAILY KEGEL EXERCISES': 'JIMICSIGA KEGEL MAALIN KASTA',
    '5s': '5 ilb',
    'HOLD & LIFT': 'QABO',
    'Signs and Symptoms': 'Calaamadaha iyo Astaamaha',
    'How to Treat and Where to Go to Be Treated': 'Sida Loo Daaweeyo iyo Meesha Aad u Tagi Karto Daaweyn',
    'What Happens When You Do Not Treat (Long-Term)': 'Maxaa Dhacaya Haddii Aan La Daaweyn (Muddo Dheer)',
    'How It Will Manifest in a Male': 'Sida Ay Ugu Muuqato Ragga',
    'How It Can Affect Pregnancy': 'Sida Ay U Saameyn Karto Uurka',
    'What You Can Do Today': 'Waxa Aad MaantaSameyn Karto'
  },
  am: {
    'PROTECT YOUR LIVER': 'ጉበትዎን ይጠብቁ',
    'JAUNDICE': 'ወፍ በሽታ (ቢጫነት)',
    'TREAT BOTH PARTNERS': 'ሁለቱም ጥንዶች ይታከሙ',
    'VACCINE PROTECTION': 'የክትባት ጥበቃ',
    'PAP & HPV SCREENING': 'የማህፀን ጫፍ ምርመራ',
    'SILENT (NO SYMPTOMS)': 'ድምፅ አልባ (ምልክት የሌለው)',
    'PROTECT FALLOPIAN TUBES': 'የማህፀን ቱቦዎችን ይጠብቁ',
    'CLINIC ANTIBIOTIC SHOT': 'የክሊኒክ አንቲባዮቲክ መርፌ',
    'BURNING URINATION': 'ሽንት ሲሸኑ ማቃጠል',
    'BENIGN MUSCLE GROWTHS': 'ካንሰር ያልሆነ እጢ',
    'IRON & ANEMIA CARE': 'የብረት እና የደም ማነስ እንክብካቤ',
    '90%+ SURGICALLY CURABLE': '90%+ በቀዶ ጥገና የሚድን',
    'PESSARY & PELVIC SUPPORT': 'የዳሌ ድጋፍ ቀለበት',
    'SWAB TEST & NO ALCOHOL': 'ምርመራ እና አልኮል አለመጠጣት',
    'PAIRED DIPLOCOCCI': 'ጥንድ ባክቴሪያዎች',
    'RE-TEST IN 3 MONTHS': 'በ3 ወር ውስጥ በድጋሚ ይመርመሩ',
    '3 MO': '3 ወር',
    'CHECKUP': 'ምርመራ',
    'DRINK CLEAN WATER': 'ንጹህ ውሃ ይጠጡ',
    'DAILY KEGEL EXERCISES': 'የዕለት ተዕለት የኬገል ልምምድ',
    '5s': '5 ሰከ',
    'HOLD & LIFT': 'ይያዙ',
    'Signs and Symptoms': 'ምልክቶች እና ስሜቶች',
    'How to Treat and Where to Go to Be Treated': 'እንዴት እንደሚታከም እና ለህክምና የት መሄድ እንደሚቻል',
    'What Happens When You Do Not Treat (Long-Term)': 'ካልታከሙ በረጅም ጊዜ ምን ይከሰታል',
    'How It Will Manifest in a Male': 'በወንዶች ላይ እንዴት እንደሚታይ',
    'How It Can Affect Pregnancy': 'እርግዝናን እንዴት ሊጎዳ እንደሚችል',
    'What You Can Do Today': 'ዛሬ ማድረግ የሚችሉት'
  }
};

export function translateFlyerPhraseInstant(phrase, lang = 'en', UserLanguageChoice1 = null) {
  if (!phrase) return '';
  const code = String(UserLanguageChoice1 || lang || 'en').toLowerCase();
  const dict = FLYER_INSTANT_I18N[code] || (code === 'fa' ? FLYER_INSTANT_I18N.prs : null);
  if (dict && dict[phrase]) {
    return dict[phrase];
  }
  return phrase;
}

// Helper to scale sticker font size automatically when translated text is longer in UserLanguageChoice1
function getStickerFontSize(text = '', baseSize = 10.5) {
  const len = String(text || '').length;
  if (len > 30) return Math.max(7.2, baseSize - 3.2);
  if (len > 24) return Math.max(8.0, baseSize - 2.3);
  if (len > 19) return Math.max(8.8, baseSize - 1.5);
  return baseSize;
}

// 1. Inline Pregnant Woman Silhouette Icon (matching user's uploaded pregnant lady icon, placed right next to the Pregnancy heading)
export function renderPregnantLadyHeadingIcon(color = '#FFFFFF') {
  return h(
    'svg',
    {
      viewBox: '0 0 64 76',
      className: 'w-8 h-9 sm:w-9 sm:h-11 inline-block shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M28 6 C42 6, 49 16, 51 34 C52 42, 53 50, 53 56 C48 64, 38 71, 29 74 C17 69, 12 60, 12 49 C12 39, 19 34, 25 32 C21 30, 21 25, 25 22 C27 20, 29 19, 29 16 C24 16, 20 12, 21 8 C22 6, 25 6, 28 6 Z',
      fill: color,
      opacity: '0.96'
    }),
    h('path', {
      d: 'M23 14 C23 21, 26 25, 31 25 C34 25, 37 21, 37 15',
      fill: 'none',
      stroke: 'rgba(0,0,0,0.32)',
      strokeWidth: '2.5',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M42 35 L46 52 L34 66 L22 67',
      fill: 'none',
      stroke: 'rgba(0,0,0,0.35)',
      strokeWidth: '3',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
}

// 2. Mother Holding Newborn Baby in Sling Wrap (used on Hepatitis B pregnancy section)
export function renderMotherHoldingNewbornSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 155',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '92', cy: '80', r: '64', fill: '#FFF4DC', opacity: '0.95' }),
    h('circle', { cx: '92', cy: '28', r: '16', fill: '#14110F' }),
    h('circle', { cx: '110', cy: '32', r: '16', fill: '#14110F' }),
    h('circle', { cx: '120', cy: '47', r: '15', fill: '#14110F' }),
    h('circle', { cx: '122', cy: '63', r: '13', fill: '#14110F' }),
    h('circle', { cx: '78', cy: '36', r: '13', fill: '#14110F' }),
    h('circle', { cx: '102', cy: '46', r: '18', fill: '#14110F' }),
    h('path', {
      d: 'M76 42 C74 52, 73 60, 77 69 C80 75, 86 78, 92 79 L95 92 L114 86 L108 69 C104 54, 96 42, 76 42 Z',
      fill: '#59311B'
    }),
    h('circle', { cx: '93', cy: '57', r: '4.5', fill: '#4A2714' }),
    h('path', {
      d: 'M78 56 Q82 58 84 56',
      stroke: '#231108',
      strokeWidth: '1.8',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M84 92 L134 92 L138 142 L68 142 Z',
      fill: '#4E8752'
    }),
    h('circle', { cx: '63', cy: '80', r: '8', fill: '#14110F' }),
    h('circle', { cx: '72', cy: '79', r: '7.5', fill: '#14110F' }),
    h('circle', { cx: '57', cy: '85', r: '7', fill: '#14110F' }),
    h('circle', { cx: '66', cy: '92', r: '14', fill: '#6B3B20' }),
    h('path', {
      d: 'M64 91 Q68 93 71 91',
      stroke: '#231108',
      strokeWidth: '1.6',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M51 82 C47 88, 48 99, 54 105 C58 101, 56 90, 55 83 Z',
      fill: '#59311B'
    }),
    h('path', {
      d: 'M112 80 C128 86, 138 104, 140 126 L94 114 L92 94 Z',
      fill: '#D39B38'
    }),
    h('path', {
      d: 'M48 103 L96 108 L104 142 L42 142 Z',
      fill: '#F1C258'
    }),
    h('circle', {
      cx: '92',
      cy: '111',
      r: '9',
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: '3'
    })
  );
}

// 3. Cartoon of a White Man Turning Yellow with translated "JAUNDICE" Underneath (UserLanguageChoice1)
export function renderJaundiceManCartoonSvg(stickerText = 'JAUNDICE') {
  const fontSize = getStickerFontSize(stickerText, 12);
  return h(
    'svg',
    {
      viewBox: '0 0 185 160',
      className: 'w-34 sm:w-42 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h(
      'defs',
      null,
      h(
        'linearGradient',
        { id: 'jaundiceSkinGrad', x1: '0%', y1: '0%', x2: '100%', y2: '15%' },
        h('stop', { offset: '0%', stopColor: '#FFE3D3' }),
        h('stop', { offset: '42%', stopColor: '#FFE3D3' }),
        h('stop', { offset: '58%', stopColor: '#FFE047' }),
        h('stop', { offset: '100%', stopColor: '#F4C400' })
      )
    ),
    h('rect', {
      x: '8',
      y: '6',
      width: '169',
      height: '148',
      rx: '22',
      fill: 'rgba(8, 32, 84, 0.42)',
      stroke: 'rgba(255,255,255,0.55)',
      strokeWidth: '2'
    }),
    h('path', {
      d: 'M62 18 Q92 8 122 18',
      fill: 'none',
      stroke: '#FFE047',
      strokeWidth: '2.5',
      strokeLinecap: 'round'
    }),
    h('polygon', {
      points: '122,13 130,19 120,22',
      fill: '#FFE047'
    }),
    h('path', {
      d: 'M46 122 C48 104, 68 98, 92 98 C116 98, 136 104, 138 122 Z',
      fill: '#3B82F6'
    }),
    h('rect', {
      x: '81',
      y: '84',
      width: '22',
      height: '18',
      rx: '6',
      fill: 'url(#jaundiceSkinGrad)'
    }),
    h('circle', { cx: '56', cy: '60', r: '7', fill: '#FFE3D3' }),
    h('circle', { cx: '128', cy: '60', r: '7', fill: '#F4C400' }),
    h('rect', {
      x: '58',
      y: '30',
      width: '68',
      height: '62',
      rx: '30',
      fill: 'url(#jaundiceSkinGrad)',
      stroke: '#FFFFFF',
      strokeWidth: '1.5'
    }),
    h('path', {
      d: 'M57 48 C56 29, 72 22, 92 22 C112 22, 128 29, 127 48 C119 37, 106 34, 92 34 C78 34, 65 37, 57 48 Z',
      fill: '#5C3A21'
    }),
    h('ellipse', { cx: '77', cy: '57', rx: '7.5', ry: '5.5', fill: '#FFFFFF' }),
    h('circle', { cx: '77', cy: '57', r: '3', fill: '#263238' }),
    h('ellipse', { cx: '107', cy: '57', rx: '7.5', ry: '5.5', fill: '#FFF04D', stroke: '#B47B00', strokeWidth: '1' }),
    h('circle', { cx: '107', cy: '57', r: '3', fill: '#263238' }),
    h('path', { d: 'M69 48 Q77 45 84 49', stroke: '#4A2E18', strokeWidth: '2.2', fill: 'none', strokeLinecap: 'round' }),
    h('path', { d: 'M100 49 Q107 45 115 48', stroke: '#4A2E18', strokeWidth: '2.2', fill: 'none', strokeLinecap: 'round' }),
    h('path', { d: 'M92 56 L90 67 L94 68', stroke: '#8D5B3C', strokeWidth: '2', fill: 'none', strokeLinecap: 'round' }),
    h('path', { d: 'M82 78 Q92 73 102 78', stroke: '#6E3B22', strokeWidth: '2.4', fill: 'none', strokeLinecap: 'round' }),
    h('rect', {
      x: '16',
      y: '124',
      width: '153',
      height: '22',
      rx: '11',
      fill: '#FFE047'
    }),
    h(
      'text',
      {
        x: '92.5',
        y: '139',
        textAnchor: 'middle',
        fill: '#0A2558',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.6'
      },
      stickerText
    )
  );
}

// 4. Cute WHO-Flyer Male Bladder & Inflamed Urethra Illustration
export function renderMaleBladderUrethraCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 170 135',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M24 22 C36 38, 44 46, 52 54',
      stroke: '#FF9AA2',
      strokeWidth: '6',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M146 22 C134 38, 126 46, 118 54',
      stroke: '#FF9AA2',
      strokeWidth: '6',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M42 54 C42 32, 128 32, 128 54 C128 82, 102 96, 85 102 C68 96, 42 82, 42 54 Z',
      fill: '#FF9AA2'
    }),
    h('path', {
      d: 'M51 56 C51 40, 119 40, 119 56 C119 77, 98 88, 85 93 C72 88, 51 77, 51 56 Z',
      fill: '#FFB7B2'
    }),
    h('path', {
      d: 'M53 65 L117 65 C115 80, 97 89, 85 93 C73 89, 55 80, 53 65 Z',
      fill: '#F9D43A'
    }),
    h('path', {
      d: 'M68 96 C62 104, 65 118, 77 120 L77 129 L93 129 L93 120 C105 118, 108 104, 102 96 Z',
      fill: '#FF808B'
    }),
    h('line', {
      x1: '85',
      y1: '93',
      x2: '85',
      y2: '129',
      stroke: '#FFE047',
      strokeWidth: '3.5',
      strokeLinecap: 'round'
    }),
    h('line', { x1: '46', y1: '102', x2: '56', y2: '105', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '44', y1: '113', x2: '55', y2: '113', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '48', y1: '123', x2: '58', y2: '119', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '124', y1: '102', x2: '114', y2: '105', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '126', y1: '113', x2: '115', y2: '113', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '122', y1: '123', x2: '112', y2: '119', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' })
  );
}

// 5. Partner Pill Bottle & Two Capsules Cartoon ("TREAT BOTH PARTNERS" in UserLanguageChoice1)
export function renderPartnerPillsCartoonSvg(stickerText = 'TREAT BOTH PARTNERS') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 140',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('rect', { x: '26', y: '20', width: '52', height: '14', rx: '4', fill: '#FFFFFF' }),
    h('rect', { x: '30', y: '34', width: '44', height: '68', rx: '9', fill: '#FFE4E8', stroke: '#FFFFFF', strokeWidth: '2' }),
    h('rect', { x: '36', y: '52', width: '32', height: '28', rx: '4', fill: '#E62235' }),
    h('rect', { x: '49', y: '57', width: '6', height: '18', rx: '1.5', fill: '#FFFFFF' }),
    h('rect', { x: '43', y: '63', width: '18', height: '6', rx: '1.5', fill: '#FFFFFF' }),
    h('path', {
      d: 'M122 36 C118 29, 108 29, 108 38 C108 46, 122 54, 122 58 C122 54, 136 46, 136 38 C136 29, 126 29, 122 36 Z',
      fill: '#FFE047'
    }),
    h('rect', { x: '94', y: '68', width: '56', height: '16', rx: '8', fill: '#FFFFFF' }),
    h('path', { d: 'M122 68 L142 68 A8 8 0 0 1 142 84 L122 84 Z', fill: '#38BDF8' }),
    h('rect', { x: '94', y: '90', width: '56', height: '16', rx: '8', fill: '#FFFFFF' }),
    h('path', { d: 'M122 90 L142 90 A8 8 0 0 1 142 106 L122 106 Z', fill: '#FBBF24' }),
    h('rect', { x: '10', y: '114', width: '165', height: '20', rx: '10', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '128',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 6. HPV / Hep B Vaccine Shield & Vial Cartoon ("VACCINE PROTECTION" in UserLanguageChoice1)
export function renderVaccineShieldCartoonSvg(stickerText = 'VACCINE PROTECTION') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M72 14 L118 26 L118 64 C118 92, 96 108, 72 116 C48 108, 26 92, 26 64 L26 26 Z',
      fill: '#FFFFFF',
      opacity: '0.95'
    }),
    h('path', {
      d: 'M72 22 L110 32 L110 63 C110 86, 91 99, 72 107 C53 99, 34 86, 34 63 L34 32 Z',
      fill: '#10B981'
    }),
    h('path', {
      d: 'M56 64 L67 75 L90 50',
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: '6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    h('rect', { x: '126', y: '44', width: '32', height: '48', rx: '7', fill: '#FFFFFF', stroke: '#0F172A', strokeWidth: '2' }),
    h('rect', { x: '132', y: '35', width: '20', height: '9', rx: '2', fill: '#38BDF8' }),
    h('rect', { x: '130', y: '62', width: '24', height: '24', rx: '3', fill: '#38BDF8' }),
    h('rect', { x: '10', y: '121', width: '165', height: '20', rx: '10', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '135',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 7. Cervical Screening / Pap Smear Magnifying Glass Cartoon ("PAP & HPV SCREENING" in UserLanguageChoice1)
export function renderCervixPapScreenCartoonSvg(stickerText = 'PAP & HPV SCREENING') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '78', cy: '58', r: '42', fill: '#FFF1F2', stroke: '#FFFFFF', strokeWidth: '6' }),
    h('circle', { cx: '78', cy: '58', r: '26', fill: '#FB7185' }),
    h('circle', { cx: '78', cy: '58', r: '6', fill: '#881337' }),
    h('circle', { cx: '64', cy: '44', r: '3', fill: '#FFFFFF' }),
    h('circle', { cx: '94', cy: '48', r: '2.5', fill: '#FEF08A' }),
    h('line', {
      x1: '109',
      y1: '89',
      x2: '136',
      y2: '114',
      stroke: '#FFFFFF',
      strokeWidth: '10',
      strokeLinecap: 'round'
    }),
    h('line', {
      x1: '134',
      y1: '24',
      x2: '94',
      y2: '54',
      stroke: '#38BDF8',
      strokeWidth: '4',
      strokeLinecap: 'round'
    }),
    h('circle', { cx: '92', cy: '55', r: '6', fill: '#FFFFFF' }),
    h('rect', { x: '10', y: '121', width: '165', height: '20', rx: '10', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '135',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 8. Silent Infection Cartoon ("SILENT (NO SYMPTOMS)" in UserLanguageChoice1)
export function renderSilentInfectionCartoonSvg(stickerText = 'SILENT (NO SYMPTOMS)') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '92.5', cy: '58', r: '44', fill: '#FFFFFF', opacity: '0.95' }),
    h('circle', { cx: '78.5', cy: '50', r: '4', fill: '#0F172A' }),
    h('circle', { cx: '106.5', cy: '50', r: '4', fill: '#0F172A' }),
    h('circle', { cx: '68.5', cy: '58', r: '5', fill: '#FDA4AF', opacity: '0.7' }),
    h('circle', { cx: '116.5', cy: '58', r: '5', fill: '#FDA4AF', opacity: '0.7' }),
    h('circle', { cx: '92.5', cy: '68', r: '5', fill: '#F43F5E' }),
    h('rect', { x: '88.5', y: '62', width: '8', height: '28', rx: '4', fill: '#FDBA74', stroke: '#0F172A', strokeWidth: '1.5' }),
    h('rect', { x: '10', y: '116', width: '165', height: '22', rx: '11', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 9. Uterus & Fallopian Tubes Pelvic Inflammatory Disease (PID) Cartoon ("PROTECT FALLOPIAN TUBES" in UserLanguageChoice1)
export function renderUterusFallopianPidCartoonSvg(stickerText = 'PROTECT FALLOPIAN TUBES') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M68 44 C42 28, 22 40, 26 62 C28 70, 36 72, 42 66',
      fill: 'none',
      stroke: '#FDA4AF',
      strokeWidth: '8',
      strokeLinecap: 'round'
    }),
    h('path', {
      d: 'M117 44 C143 28, 163 40, 159 62 C157 70, 149 72, 143 66',
      fill: 'none',
      stroke: '#EF4444',
      strokeWidth: '8',
      strokeLinecap: 'round'
    }),
    h('ellipse', { cx: '45', cy: '68', rx: '11', ry: '8', fill: '#FFF1F2' }),
    h('ellipse', { cx: '140', cy: '68', rx: '11', ry: '8', fill: '#FCA5A5' }),
    h('path', {
      d: 'M64 42 C64 32, 121 32, 121 42 C121 68, 106 88, 92.5 104 C79 88, 64 68, 64 42 Z',
      fill: '#FB7185',
      stroke: '#FFFFFF',
      strokeWidth: '2.5'
    }),
    h('circle', { cx: '146', cy: '38', r: '10', fill: '#FEF08A', opacity: '0.85' }),
    h('text', { x: '146', y: '43', textAnchor: 'middle', fill: '#991B1B', fontSize: '13', fontWeight: '900' }, '!'),
    h('rect', { x: '10', y: '118', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '132.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 10. Ceftriaxone Clinic Injection Syringe Cartoon ("CLINIC ANTIBIOTIC SHOT" in UserLanguageChoice1)
export function renderClinicInjectionCartoonSvg(stickerText = 'CLINIC ANTIBIOTIC SHOT') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '92.5', cy: '60', r: '44', fill: 'rgba(255,255,255,0.2)', stroke: '#FFFFFF', strokeWidth: '2' }),
    h(
      'g',
      { transform: 'rotate(-35 92.5 60)' },
      h('rect', { x: '78.5', y: '30', width: '28', height: '56', rx: '5', fill: '#FFFFFF' }),
      h('rect', { x: '81.5', y: '48', width: '22', height: '35', rx: '3', fill: '#FACC15' }),
      h('rect', { x: '88.5', y: '14', width: '8', height: '16', fill: '#E2E8F0' }),
      h('rect', { x: '80.5', y: '11', width: '24', height: '5', rx: '2', fill: '#FFFFFF' }),
      h('line', { x1: '92.5', y1: '86', x2: '92.5', y2: '104', stroke: '#FFFFFF', strokeWidth: '3', strokeLinecap: 'round' }),
      h('line', { x1: '80.5', y1: '42', x2: '88.5', y2: '42', stroke: '#0F172A', strokeWidth: '2' }),
      h('line', { x1: '80.5', y1: '54', x2: '88.5', y2: '54', stroke: '#0F172A', strokeWidth: '2' }),
      h('line', { x1: '80.5', y1: '66', x2: '88.5', y2: '66', stroke: '#0F172A', strokeWidth: '2' })
    ),
    h('rect', { x: '10', y: '118', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '132.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 11. Burning Urination Flame Drops Cartoon ("BURNING URINATION" in UserLanguageChoice1)
export function renderBurningUrinationCartoonSvg(stickerText = 'BURNING URINATION') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M92.5 16 C92.5 16, 128.5 54, 128.5 80 C128.5 100, 112.5 114, 92.5 114 C72.5 114, 56.5 100, 56.5 80 C56.5 54, 92.5 16, 92.5 16 Z',
      fill: '#FB923C',
      stroke: '#FFFFFF',
      strokeWidth: '2.5'
    }),
    h('path', {
      d: 'M92.5 44 C92.5 44, 112.5 68, 112.5 84 C112.5 96, 103.5 105, 92.5 105 C81.5 105, 72.5 96, 72.5 84 C72.5 68, 92.5 44, 92.5 44 Z',
      fill: '#FEF08A'
    }),
    h('polygon', {
      points: '96.5,54 80.5,78 92.5,78 86.5,98 106.5,72 93.5,72',
      fill: '#DC2626'
    }),
    h('rect', { x: '10', y: '119', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '133.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 12. Healthy Liver with Protective Shield Cartoon ("PROTECT YOUR LIVER" in UserLanguageChoice1)
export function renderHealthyLiverShieldCartoonSvg(stickerText = 'PROTECT YOUR LIVER') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M32 54 C32 32, 68 24, 102 32 C132 28, 154 38, 152 56 C150 76, 118 92, 92 94 C64 96, 32 82, 32 54 Z',
      fill: '#E11D48',
      stroke: '#FFFFFF',
      strokeWidth: '3'
    }),
    h('path', {
      d: 'M96 32 C92 54, 94 74, 100 92',
      fill: 'none',
      stroke: '#FFE4E6',
      strokeWidth: '3',
      strokeLinecap: 'round'
    }),
    h('circle', { cx: '64', cy: '56', r: '3.5', fill: '#FFFFFF' }),
    h('circle', { cx: '80', cy: '56', r: '3.5', fill: '#FFFFFF' }),
    h('path', { d: 'M66 66 Q72 72 78 66', stroke: '#FFFFFF', strokeWidth: '2.5', fill: 'none', strokeLinecap: 'round' }),
    h('circle', { cx: '132', cy: '76', r: '18', fill: '#22C55E', stroke: '#FFFFFF', strokeWidth: '2.5' }),
    h('path', { d: 'M124 76 L130 82 L141 70', stroke: '#FFFFFF', strokeWidth: '3.5', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 13. Uterine Fibroids Locations Diagram Cartoon ("BENIGN MUSCLE GROWTHS" in UserLanguageChoice1)
export function renderFibroidsUterusDiagramSvg(stickerText = 'BENIGN MUSCLE GROWTHS') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 148',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M60 36 C60 24, 125 24, 125 36 C125 68, 108 92, 92.5 108 C77 92, 60 68, 60 36 Z',
      fill: '#FDA4AF',
      stroke: '#FFFFFF',
      strokeWidth: '3'
    }),
    h('path', {
      d: 'M76 42 L109 42 L92.5 84 Z',
      fill: '#9F1239'
    }),
    h('circle', { cx: '72', cy: '56', r: '10', fill: '#FEF08A', stroke: '#CA8A04', strokeWidth: '2' }),
    h('circle', { cx: '124', cy: '52', r: '12', fill: '#FEF08A', stroke: '#CA8A04', strokeWidth: '2' }),
    h('circle', { cx: '94', cy: '62', r: '7.5', fill: '#FEF08A', stroke: '#CA8A04', strokeWidth: '2' }),
    h('rect', { x: '10', y: '119', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '133.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 14. Iron-Rich Nutrition & Heavy Bleeding Care Cartoon ("IRON & ANEMIA CARE" in UserLanguageChoice1)
export function renderIronRichCareCartoonSvg(stickerText = 'IRON & ANEMIA CARE') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M64 22 C64 22, 92 54, 92 74 C92 90, 79 102, 64 102 C49 102, 36 90, 36 74 C36 54, 64 22, 64 22 Z',
      fill: '#FFFFFF'
    }),
    h('text', { x: '64', y: '80', textAnchor: 'middle', fill: '#E11D48', fontSize: '20', fontWeight: '900' }, 'Fe+'),
    h('path', {
      d: 'M116 94 C106 70, 120 36, 148 30 C154 58, 142 88, 116 94 Z',
      fill: '#22C55E',
      stroke: '#FFFFFF',
      strokeWidth: '2.5'
    }),
    h('path', {
      d: 'M116 94 Q130 64 144 36',
      stroke: '#BBF7D0',
      strokeWidth: '2.5',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 15. Fistula Surgical Healing & Free Repair Center Cartoon ("90%+ SURGICALLY CURABLE" in UserLanguageChoice1)
export function renderFistulaHealingRepairCartoonSvg(stickerText = '90%+ SURGICALLY CURABLE') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M92.5 36 C80 16, 44 20, 44 50 C44 76, 92.5 102, 92.5 108 C92.5 102, 141 76, 141 50 C141 20, 105 16, 92.5 36 Z',
      fill: '#FFFFFF'
    }),
    h('path', {
      d: 'M68 42 L76 74',
      stroke: '#E11D48',
      strokeWidth: '3',
      strokeLinecap: 'round'
    }),
    h('line', { x1: '63', y1: '49', x2: '75', y2: '46', stroke: '#E11D48', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '65', y1: '58', x2: '77', y2: '55', stroke: '#E11D48', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '67', y1: '67', x2: '79', y2: '64', stroke: '#E11D48', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('rect', { x: '106', y: '44', width: '8', height: '24', rx: '2', fill: '#10B981' }),
    h('rect', { x: '98', y: '52', width: '24', height: '8', rx: '2', fill: '#10B981' }),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 16. Pelvic Floor Hammock & Silicone Pessary Ring Cartoon ("PESSARY & PELVIC SUPPORT" in UserLanguageChoice1)
export function renderPelvicPessaryRingCartoonSvg(stickerText = 'PESSARY & PELVIC SUPPORT') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', {
      cx: '92.5',
      cy: '56',
      r: '30',
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: '14'
    }),
    h('circle', {
      cx: '92.5',
      cy: '56',
      r: '30',
      fill: 'none',
      stroke: '#F472B6',
      strokeWidth: '8'
    }),
    h('path', {
      d: 'M46 98 Q92.5 112 139 98',
      fill: 'none',
      stroke: '#FEF08A',
      strokeWidth: '5',
      strokeLinecap: 'round'
    }),
    h('path', { d: 'M92.5 72 L92.5 42', stroke: '#FEF08A', strokeWidth: '4', strokeLinecap: 'round' }),
    h('polygon', { points: '84,46 92.5,33 101,46', fill: '#FEF08A' }),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 17. Swab Test Tube & No-Alcohol With Metronidazole Cartoon ("SWAB TEST & NO ALCOHOL" in UserLanguageChoice1)
export function renderSwabAndNoAlcoholCartoonSvg(stickerText = 'SWAB TEST & NO ALCOHOL') {
  const fontSize = getStickerFontSize(stickerText, 10);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('rect', { x: '36', y: '24', width: '26', height: '82', rx: '13', fill: '#FFFFFF', opacity: '0.92' }),
    h('rect', { x: '33', y: '18', width: '32', height: '10', rx: '4', fill: '#38BDF8' }),
    h('line', { x1: '49', y1: '28', x2: '49', y2: '82', stroke: '#F59E0B', strokeWidth: '3', strokeLinecap: 'round' }),
    h('ellipse', { cx: '49', cy: '86', rx: '6', ry: '9', fill: '#FDA4AF' }),
    h('circle', { cx: '124', cy: '62', r: '34', fill: 'rgba(0,0,0,0.22)', stroke: '#FFE047', strokeWidth: '4' }),
    h('path', { d: 'M112 42 L136 42 L132 62 C130 70, 118 70, 116 62 Z', fill: '#FFFFFF' }),
    h('line', { x1: '124', y1: '68', x2: '124', y2: '84', stroke: '#FFFFFF', strokeWidth: '3.5' }),
    h('line', { x1: '114', y1: '84', x2: '134', y2: '84', stroke: '#FFFFFF', strokeWidth: '3.5', strokeLinecap: 'round' }),
    h('line', { x1: '101', y1: '39', x2: '147', y2: '85', stroke: '#FFE047', strokeWidth: '4.5', strokeLinecap: 'round' }),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 18. Paired Kidney-Bean Diplococci Microscope Cartoon ("PAIRED DIPLOCOCCI" in UserLanguageChoice1)
export function renderDiplococciMicroscopeCartoonSvg(stickerText = 'PAIRED DIPLOCOCCI') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '92.5', cy: '58', r: '44', fill: '#E0F2FE', stroke: '#FFFFFF', strokeWidth: '5' }),
    h('ellipse', { cx: '72', cy: '48', rx: '11', ry: '7', transform: 'rotate(-25 72 48)', fill: '#EC4899' }),
    h('ellipse', { cx: '83', cy: '55', rx: '11', ry: '7', transform: 'rotate(-25 83 55)', fill: '#DB2777' }),
    h('ellipse', { cx: '106', cy: '62', rx: '11', ry: '7', transform: 'rotate(20 106 62)', fill: '#EC4899' }),
    h('ellipse', { cx: '114', cy: '51', rx: '11', ry: '7', transform: 'rotate(20 114 51)', fill: '#DB2777' }),
    h('ellipse', { cx: '84', cy: '77', rx: '9', ry: '6', fill: '#F472B6' }),
    h('ellipse', { cx: '96', cy: '77', rx: '9', ry: '6', fill: '#EC4899' }),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 19. 3-Month Calendar Retest Cartoon ("RE-TEST IN 3 MONTHS" in UserLanguageChoice1)
export function renderThreeMonthRetestCalendarSvg(
  stickerText = 'RE-TEST IN 3 MONTHS',
  innerTopText = '3 MO',
  innerBottomText = 'CHECKUP'
) {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('rect', { x: '44', y: '22', width: '97', height: '84', rx: '14', fill: '#FFFFFF' }),
    h('path', { d: 'M44 36 A14 14 0 0 1 58 22 L127 22 A14 14 0 0 1 141 36 L141 44 L44 44 Z', fill: '#059669' }),
    h('rect', { x: '64', y: '15', width: '7', height: '14', rx: '3.5', fill: '#FEF08A' }),
    h('rect', { x: '114', y: '15', width: '7', height: '14', rx: '3.5', fill: '#FEF08A' }),
    h('text', { x: '92.5', y: '74', textAnchor: 'middle', fill: '#065F46', fontSize: '21', fontWeight: '900' }, innerTopText),
    h('text', { x: '92.5', y: '94', textAnchor: 'middle', fill: '#10B981', fontSize: '10.5', fontWeight: '900' }, innerBottomText),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 20. Clean Water Hydration Pitcher & Glass Cartoon ("DRINK CLEAN WATER" in UserLanguageChoice1)
export function renderCleanWaterHydrationCartoonSvg(stickerText = 'DRINK CLEAN WATER') {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('path', {
      d: 'M62 22 C62 22, 92 56, 92 78 C92 95, 78 108, 62 108 C46 108, 32 95, 32 78 C32 56, 62 22, 62 22 Z',
      fill: '#38BDF8',
      stroke: '#FFFFFF',
      strokeWidth: '3'
    }),
    h('path', { d: 'M48 68 C46 78, 50 88, 58 92', stroke: '#FFFFFF', strokeWidth: '3', fill: 'none', strokeLinecap: 'round' }),
    h('polygon', { points: '108,34 150,34 144,104 114,104', fill: 'rgba(255,255,255,0.28)', stroke: '#FFFFFF', strokeWidth: '3' }),
    h('polygon', { points: '111,52 147,52 143,102 115,102', fill: '#7DD3FC' }),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}

// 21. Daily 5-Second Kegel Exercise Timer Cartoon ("DAILY KEGEL EXERCISES" in UserLanguageChoice1)
export function renderKegelExerciseTimerCartoonSvg(
  stickerText = 'DAILY KEGEL EXERCISES',
  innerTopText = '5s',
  innerBottomText = 'HOLD & LIFT'
) {
  const fontSize = getStickerFontSize(stickerText, 10.5);
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-32 sm:w-40 md:w-44 max-w-full h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '92.5', cy: '62', r: '40', fill: '#FFFFFF' }),
    h('rect', { x: '84', y: '12', width: '17', height: '7', rx: '3.5', fill: '#FEF08A' }),
    h('text', { x: '92.5', y: '67', textAnchor: 'middle', fill: '#6B21A8', fontSize: '23', fontWeight: '900' }, innerTopText),
    h('text', { x: '92.5', y: '85', textAnchor: 'middle', fill: '#9333EA', fontSize: '9.5', fontWeight: '900' }, innerBottomText),
    h('rect', { x: '10', y: '117', width: '165', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: String(fontSize),
        fontWeight: '900',
        letterSpacing: '0.5'
      },
      stickerText
    )
  );
}
