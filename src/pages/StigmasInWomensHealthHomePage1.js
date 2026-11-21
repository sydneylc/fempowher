import React, { useState } from 'https://esm.sh/react@18.3.1';
import { renderSubpageBackButton } from './PregnancyHomePage.js?v=267';
import { isRtlLanguage } from '../data/translations.js?v=267';
import { IamPregALHomePageStyle } from './PregnancyAfterLossHomePage.js?v=267';
import { consumePendingEducationSubPage } from './SmartSearchBtn1.js?v=267';

const h = React.createElement;

function renderAbortionStigmaShieldSvg(bg = '#FFEDD5', stroke = '#9A3412', accent = '#EA580C') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    h('path', {
      d: 'M90 28 L138 46 L138 92 C138 124, 115 144, 90 154 C65 144, 42 124, 42 92 L42 46 Z',
      fill: '#FFFFFF',
      stroke,
      strokeWidth: '3.5'
    }),
    h('path', {
      d: 'M90 70 C84 60, 68 62, 68 74 C68 87, 90 100, 90 107 C90 100, 112 87, 112 74 C112 62, 96 60, 90 70 Z',
      fill: accent
    }),
    h('path', {
      d: 'M78 122 L87 131 L105 113',
      fill: 'none',
      stroke,
      strokeWidth: '4.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
}

function renderStigmaSupportCommunitySvg(bg = '#FFEDD5', stroke = '#9A3412', accent = '#EA580C') {
  return h(
    'svg',
    {
      viewBox: '0 0 180 180',
      className: 'w-36 h-36 sm:w-44 sm:h-44 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h('circle', { cx: '90', cy: '90', r: '82', fill: bg, stroke, strokeWidth: '3' }),
    h('circle', { cx: '66', cy: '66', r: '16', fill: '#8D5524' }),
    h('path', { d: 'M44 152 C44 110, 52 92, 68 92 C82 92, 88 110, 88 152 Z', fill: stroke }),
    h('circle', { cx: '114', cy: '66', r: '16', fill: '#D99B78' }),
    h('path', { d: 'M92 152 C92 110, 98 92, 112 92 C128 92, 136 110, 136 152 Z', fill: accent }),
    h('path', {
      d: 'M90 36 C87 30, 78 31, 78 38 C78 44, 90 51, 90 54 C90 51, 102 44, 102 38 C102 31, 93 30, 90 36 Z',
      fill: accent
    })
  );
}

// ============================================================================
// StigmasInWomensHealthHomePage1 — "Stigmas in Women's Health"
// accessible from My Body & Health (MyBodyandHealthHomePage1).
// Displays at the top in title format:
//   - Title: "Stigmas in Women's Health"
//   - Large all-caps subtitle: "YOU ARE NOT ALONE !"
//   - First button in Main My Body & Health Button Style: "Abortion Stigma"
//   - Inside "Abortion Stigma" homepage: includes the orange sub-button
//     "Dangerous Myths and Methods to Avoid (Why herbal teas, sharp objects, and wrong pill doses can harm your body)"
// ============================================================================
export default function StigmasInWomensHealthHomePage1({
  onBack,
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {}
}) {
  const [activeStigmaPage, setActiveStigmaPage] = useState(() => consumePendingEducationSubPage());

  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };
  const isRtl = isRtlLanguage(lang);

  // 6 Main-style buttons inside "Stigmas in Women's Health" (matching My Body & Health main button style)
  const stigmaMainStyleButtons = [
    {
      id: 'stigma-abortion',
      label: tr('stigmaBtnAbortionStigma', 'Abortion Stigma'),
      shade: 'lighter'
    },
    {
      id: 'stigma-postpartum',
      label: tr('stigmaBtnPostpartumStigma', 'Postpartum Stigma'),
      shade: 'standard'
    },
    {
      id: 'stigma-menopause',
      label: tr('stigmaBtnMenopauseStigma', 'Menopause Stigma'),
      shade: 'standard'
    },
    {
      id: 'stigma-pregnancy-birth',
      label: tr('stigmaBtnPregnancyBirthStigmas', 'Pregnancy & Birth Stigmas'),
      shade: 'standard'
    },
    {
      id: 'stigma-sex',
      label: tr('stigmaBtnSexStigma', 'Sex Stigma'),
      shade: 'standard'
    },
    {
      id: 'stigma-stds',
      label: tr('stigmaBtnStdsStigma', 'STDs Stigma'),
      shade: 'darker'
    }
  ];

  const stigmaSubPages = {
    'stigma-abortion': {
      pageId: 'AbortionStigmaHomePage1',
      title: tr('stigmaBtnAbortionStigma', 'Abortion Stigma'),
      palette: {
        pageBg: '#FFFDF9',
        headerDark: '#9A3412',
        accentMedium: '#EA580C',
        tintLight: '#FFEDD5',
        inkColor: '#431407',
        timelineLine: '#FDBA74'
      },
      sections: [
        {
          id: 'understanding-abortion-stigma',
          keyLabel: 'What Is Abortion Stigma',
          heading: 'Understanding Abortion Stigma and Why You Are Not Alone',
          gifSrc: null,
          cartoonRenderer: () => renderStigmaSupportCommunitySvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'Around the world, about 73 million induced abortions take place every year, which is nearly 3 out of every 10 pregnancies. Even though ending a pregnancy is one of the most common medical experiences in women’s lives, social stigma, cultural taboos, and judgment often make women feel that they must hide in silence or carry unfair shame.',
            'Abortion stigma is the false belief that a woman who ends a pregnancy, whether for her own health, her family’s survival, or her future, is doing something shameful. In reality, comprehensive abortion care is recognized worldwide as essential healthcare.',
            'Stigma and secrecy do not stop women from needing abortions. Instead, fear of being judged or exposed delays women from seeking timely medical care and pushes millions of women toward dangerous, unsafe methods.'
          ]
        },
        {
          id: 'how-stigma-leads-to-unsafe-myths',
          keyLabel: 'How Stigma Harms Health',
          heading: 'How Stigma Pushes Women Toward Dangerous Myths and Unsafe Methods',
          gifSrc: null,
          cartoonRenderer: () => renderAbortionStigmaShieldSvg('#FFEDD5', '#9A3412', '#EA580C'),
          paragraphs: [
            'When society shames women or blocks open conversation about reproductive health, dangerous rumors and myths fill the gap. Nearly 45% of all abortions worldwide happen in unsafe conditions because women are afraid or unable to reach a respectful nurse, midwife, or doctor.',
            'Replacing stigma with plain, honest medical facts saves women’s lives. No woman should ever risk her life with toxic teas, sharp objects, or unverified pill doses out of fear of being judged.',
            'Your dignity, your health, and your future matter. Click the button below to read about dangerous myths and methods to avoid.'
          ]
        }
      ],
      bottomSubPages: [
        {
          pageId: 'AbortionUnsafeMythsWarningHomePage1',
          title: 'Dangerous Myths and Methods to Avoid',
          subtitle: 'Why herbal teas, sharp objects, and wrong pill doses can harm your body'
        }
      ]
    },
    'stigma-postpartum': {
      pageId: 'PostpartumStigmaHomePage1',
      title: tr('stigmaBtnPostpartumStigma', 'Postpartum Stigma'),
      palette: {
        pageBg: '#FFFAFC',
        headerDark: '#9F133A',
        accentMedium: '#CF366C',
        tintLight: '#FFE4F0',
        inkColor: '#4A0E24',
        timelineLine: '#F4A2C6'
      },
      sections: [
        {
          id: 'postpartum-stigma-overview',
          keyLabel: 'Postpartum Stigma',
          heading: 'Breaking the Silence Around Postpartum Recovery, Depression, and Body Changes',
          gifSrc: null,
          cartoonRenderer: () => renderStigmaSupportCommunitySvg('#FFE4F0', '#9F133A', '#CF366C'),
          paragraphs: [
            'Around the world, new mothers are often pressured to look and feel overjoyed every single moment after giving birth, while hiding deep exhaustion, postpartum depression or anxiety, painful breastfeeding struggles, vaginal bleeding (lochia), or pelvic floor healing.',
            'Postpartum depression and anxiety are real medical conditions caused by sharp hormone drops and physical exhaustion, never a sign that a woman is a bad or unloving mother. Every mother deserves rest, medical care, and emotional support without judgment.'
          ]
        }
      ],
      bottomSubPages: []
    },
    'stigma-menopause': {
      pageId: 'MenopauseStigmaHomePage1',
      title: tr('stigmaBtnMenopauseStigma', 'Menopause Stigma'),
      palette: {
        pageBg: '#FDFBFF',
        headerDark: '#6B21A8',
        accentMedium: '#9333EA',
        tintLight: '#F3E8FF',
        inkColor: '#3B0764',
        timelineLine: '#D8B4FE'
      },
      sections: [
        {
          id: 'menopause-stigma-overview',
          keyLabel: 'Menopause Stigma',
          heading: 'Honoring Women Through Perimenopause and Menopause Without Shame',
          gifSrc: null,
          cartoonRenderer: () => renderStigmaSupportCommunitySvg('#F3E8FF', '#6B21A8', '#9333EA'),
          paragraphs: [
            'In many societies, menopause is treated as a taboo subject or falsely linked to a loss of a woman’s value, beauty, or vitality. Because of this silence, millions of women suffer through hot flashes, night sweats, sleep loss, mood shifts, and vaginal dryness without knowing that effective relief exists.',
            'Menopause is a natural biological transition, and a woman’s wisdom, dignity, and health after her fertile years matter deeply.'
          ]
        }
      ],
      bottomSubPages: []
    },
    'stigma-pregnancy-birth': {
      pageId: 'PregnancyBirthStigmasHomePage1',
      title: tr('stigmaBtnPregnancyBirthStigmas', 'Pregnancy & Birth Stigmas'),
      palette: {
        pageBg: '#F8FAFF',
        headerDark: '#1E3A8A',
        accentMedium: '#2563EB',
        tintLight: '#DBEAFE',
        inkColor: '#172554',
        timelineLine: '#93C5FD'
      },
      sections: [
        {
          id: 'pregnancy-birth-stigma-overview',
          keyLabel: 'Pregnancy & Birth Stigmas',
          heading: 'Rejecting Unfair Blame Around Infertility, Baby’s Biological Sex, and How You Give Birth',
          gifSrc: null,
          cartoonRenderer: () => renderAbortionStigmaShieldSvg('#DBEAFE', '#1E3A8A', '#2563EB'),
          paragraphs: [
            'Across many regions, women face unfair blame for infertility, for giving birth to daughters instead of sons, for needing pain relief or a Cesarean section during delivery, or for experiencing a pregnancy complication or miscarriage.',
            'Biologically, the father’s sperm cell (which carries either an X or a Y chromosome) determines whether a baby is a girl or a boy, and half of all infertility involves male factors. Furthermore, whether a woman gives birth vaginally or by C-section, with pain medicine or without, safe delivery for mother and baby is all that matters.'
          ]
        }
      ],
      bottomSubPages: []
    },
    'stigma-sex': {
      pageId: 'SexStigmaHomePage1',
      title: tr('stigmaBtnSexStigma', 'Sex Stigma'),
      palette: {
        pageBg: '#F7FEFD',
        headerDark: '#0F766E',
        accentMedium: '#0D9488',
        tintLight: '#CCFBF1',
        inkColor: '#134E4A',
        timelineLine: '#5EEAD4'
      },
      sections: [
        {
          id: 'sex-stigma-overview',
          keyLabel: 'Sex Stigma',
          heading: 'Dismantling Myths About Virginity, the Hymen, Consent, and Female Pleasure',
          gifSrc: null,
          cartoonRenderer: () => renderStigmaSupportCommunitySvg('#CCFBF1', '#0F766E', '#0D9488'),
          paragraphs: [
            'Cultural taboos around female sexuality often teach girls that their human worth depends on a myth of "virginity" or bleeding on the first time having sex, while silencing conversations about consent, contraception, and painful sex.',
            'Over half of women do not bleed the first time they have vaginal intercourse because the hymen is naturally stretchy and open, and no medical exam can test virginity. Every woman has the right to bodily autonomy, safety, and honest sexual health education.'
          ]
        }
      ],
      bottomSubPages: []
    },
    'stigma-stds': {
      pageId: 'StdsStigmaHomePage1',
      title: tr('stigmaBtnStdsStigma', 'STDs Stigma'),
      palette: {
        pageBg: '#FFF8F9',
        headerDark: '#9F1239',
        accentMedium: '#E11D48',
        tintLight: '#FFE4E6',
        inkColor: '#4C0519',
        timelineLine: '#FDA4AF'
      },
      sections: [
        {
          id: 'stds-stigma-overview',
          keyLabel: 'STDs Stigma',
          heading: 'An STD Is a Common Medical Infection, Never a Moral Failure',
          gifSrc: null,
          cartoonRenderer: () => renderAbortionStigmaShieldSvg('#FFE4E6', '#9F1239', '#E11D48'),
          paragraphs: [
            'Around the world, more than 1 million sexually transmitted infections are acquired every single day, and most adults will contract at least one STD (such as HPV) in their lifetime, including married women who have only ever had one partner.',
            'Shame and stigma keep people from getting tested and treated. Bacterial and parasitic STDs like chlamydia, gonorrhea, syphilis, and trichomoniasis are completely curable with antibiotic medicine, and viral STDs like HIV, herpes, and Hepatitis B can be safely managed with modern treatment.'
          ]
        }
      ],
      bottomSubPages: []
    }
  };

  if (activeStigmaPage && stigmaSubPages[activeStigmaPage]) {
    const cfg = stigmaSubPages[activeStigmaPage];
    return h(IamPregALHomePageStyle, {
      pageId: cfg.pageId,
      title: cfg.title,
      palette: cfg.palette,
      sections: cfg.sections,
      bottomSubPages: cfg.bottomSubPages,
      onBack: () => setActiveStigmaPage(null),
      UserLanguageChoice1,
      lang,
      t
    });
  }

  return h(
    'div',
    {
      id: 'StigmasInWomensHealthHomePage1',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-full w-full shrink-0 bg-white flex flex-col p-4 sm:p-6'
    },
    h(
      'div',
      { className: 'max-w-3xl w-full mx-auto flex-1 flex flex-col' },
      renderSubpageBackButton(onBack, t, lang),

      // Top Header in Title Format:
      // 1. "Stigmas in Women's Health"
      // 2. Large all-caps "YOU ARE NOT ALONE !"
      h(
        'div',
        { className: 'text-center mt-2 mb-6 space-y-2' },
        h(
          'h1',
          {
            className: 'text-2xl sm:text-4xl font-extrabold tracking-tight',
            style: { color: '#9F133A' }
          },
          tr('eduBtnStigmasInWomensHealth', "Stigmas in Women's Health")
        ),
        h(
          'div',
          {
            className: 'text-xl sm:text-3xl font-black uppercase tracking-wide',
            style: { color: '#CF366C' }
          },
          tr('stigmasYouAreNotAloneCaps', 'YOU ARE NOT ALONE !')
        )
      ),

      // Main-Style Button Grid Inside "Stigmas in Women's Health" (First Button: "Abortion Stigma")
      h(
        'div',
        { className: 'grid grid-cols-2 gap-3 mt-2' },
        stigmaMainStyleButtons.map((btn) => {
          const baseBg =
            btn.shade === 'lighter'
              ? 'linear-gradient(135deg, #CF366C 0%, #EA689A 100%)'
              : btn.shade === 'darker'
              ? 'linear-gradient(135deg, #6E0926 0%, #8F1034 100%)'
              : 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)';
          return h(
            'button',
            {
              key: btn.id,
              type: 'button',
              onClick: () => setActiveStigmaPage(btn.id),
              className:
                'w-full h-16 sm:h-20 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition text-center flex items-center justify-center shadow-md cursor-pointer leading-snug',
              style: {
                background: baseBg,
                color: '#FFFFFF',
                border: '2px solid #FFFFFF'
              }
            },
            btn.label
          );
        })
      )
    )
  );
}
