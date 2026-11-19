import React from 'https://esm.sh/react@18.3.1';

const h = React.createElement;

// 1. Inline Pregnant Woman Silhouette Icon (matching user's uploaded pregnant lady icon, placed right next to the Pregnancy heading)
export function renderPregnantLadyHeadingIcon(color = '#FFFFFF') {
  return h(
    'svg',
    {
      viewBox: '0 0 64 76',
      className: 'w-8 h-9 sm:w-9 sm:h-11 inline-block shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Hair & back silhouette sweep
    h('path', {
      d: 'M28 6 C42 6, 49 16, 51 34 C52 42, 53 50, 53 56 C48 64, 38 71, 29 74 C17 69, 12 60, 12 49 C12 39, 19 34, 25 32 C21 30, 21 25, 25 22 C27 20, 29 19, 29 16 C24 16, 20 12, 21 8 C22 6, 25 6, 28 6 Z',
      fill: color,
      opacity: '0.96'
    }),
    // Face profile cutout line
    h('path', {
      d: 'M23 14 C23 21, 26 25, 31 25 C34 25, 37 21, 37 15',
      fill: 'none',
      stroke: 'rgba(0,0,0,0.32)',
      strokeWidth: '2.5',
      strokeLinecap: 'round'
    }),
    // Arm cradling pregnant belly
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

// 2. Mother Holding Newborn Baby in Sling Wrap (inspired by user's uploaded mother-and-baby illustration)
export function renderMotherHoldingNewbornSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 155',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Soft warm glow backdrop circle
    h('circle', { cx: '92', cy: '80', r: '64', fill: '#FFF4DC', opacity: '0.95' }),
    // Mother's curly afro hair puff circles
    h('circle', { cx: '92', cy: '28', r: '16', fill: '#14110F' }),
    h('circle', { cx: '110', cy: '32', r: '16', fill: '#14110F' }),
    h('circle', { cx: '120', cy: '47', r: '15', fill: '#14110F' }),
    h('circle', { cx: '122', cy: '63', r: '13', fill: '#14110F' }),
    h('circle', { cx: '78', cy: '36', r: '13', fill: '#14110F' }),
    h('circle', { cx: '102', cy: '46', r: '18', fill: '#14110F' }),
    // Mother's head & neck profile looking tenderly at baby
    h('path', {
      d: 'M76 42 C74 52, 73 60, 77 69 C80 75, 86 78, 92 79 L95 92 L114 86 L108 69 C104 54, 96 42, 76 42 Z',
      fill: '#59311B'
    }),
    // Mother's ear & gentle closed eye
    h('circle', { cx: '93', cy: '57', r: '4.5', fill: '#4A2714' }),
    h('path', {
      d: 'M78 56 Q82 58 84 56',
      stroke: '#231108',
      strokeWidth: '1.8',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Green dress shoulder under wrap
    h('path', {
      d: 'M84 92 L134 92 L138 142 L68 142 Z',
      fill: '#4E8752'
    }),
    // Baby's curly hair & head snuggled on chest
    h('circle', { cx: '63', cy: '80', r: '8', fill: '#14110F' }),
    h('circle', { cx: '72', cy: '79', r: '7.5', fill: '#14110F' }),
    h('circle', { cx: '57', cy: '85', r: '7', fill: '#14110F' }),
    h('circle', { cx: '66', cy: '92', r: '14', fill: '#6B3B20' }),
    // Baby's sleeping eye
    h('path', {
      d: 'M64 91 Q68 93 71 91',
      stroke: '#231108',
      strokeWidth: '1.6',
      fill: 'none',
      strokeLinecap: 'round'
    }),
    // Mother's hand cradling back of baby's head
    h('path', {
      d: 'M51 82 C47 88, 48 99, 54 105 C58 101, 56 90, 55 83 Z',
      fill: '#59311B'
    }),
    // Golden ochre baby wrap sling + white sling ring
    h('path', {
      d: 'M112 80 C128 86, 138 104, 140 126 L94 114 L92 94 Z',
      fill: '#D39B38'
    }),
    h('path', {
      d: 'M48 103 L96 108 L104 142 L42 142 Z',
      fill: '#F1C258'
    }),
    // White sling ring on mother's shoulder
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

// 3. Cartoon of a White Man Turning Yellow with "JAUNDICE" Underneath (explicitly requested by user for Hepatitis B)
export function renderJaundiceManCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 185 160',
      className: 'w-40 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    h(
      'defs',
      null,
      // Split gradient showing fair/white skin turning bright jaundiced yellow
      h(
        'linearGradient',
        { id: 'jaundiceSkinGrad', x1: '0%', y1: '0%', x2: '100%', y2: '15%' },
        h('stop', { offset: '0%', stopColor: '#FFE3D3' }),
        h('stop', { offset: '42%', stopColor: '#FFE3D3' }),
        h('stop', { offset: '58%', stopColor: '#FFE047' }),
        h('stop', { offset: '100%', stopColor: '#F4C400' })
      )
    ),
    // Rounded dark-navy badge frame
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
    // Curved arrow from normal side to yellow side
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
    // Shoulders & shirt
    h('path', {
      d: 'M46 122 C48 104, 68 98, 92 98 C116 98, 136 104, 138 122 Z',
      fill: '#3B82F6'
    }),
    // Neck (half peach, half yellow)
    h('rect', {
      x: '81',
      y: '84',
      width: '22',
      height: '18',
      rx: '6',
      fill: 'url(#jaundiceSkinGrad)'
    }),
    // Ears
    h('circle', { cx: '56', cy: '60', r: '7', fill: '#FFE3D3' }),
    h('circle', { cx: '128', cy: '60', r: '7', fill: '#F4C400' }),
    // Man's face (left side fair white/peach skin, right side turning bright jaundiced yellow)
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
    // Brown hair
    h('path', {
      d: 'M57 48 C56 29, 72 22, 92 22 C112 22, 128 29, 127 48 C119 37, 106 34, 92 34 C78 34, 65 37, 57 48 Z',
      fill: '#5C3A21'
    }),
    // Left eye (normal white sclera)
    h('ellipse', { cx: '77', cy: '57', rx: '7.5', ry: '5.5', fill: '#FFFFFF' }),
    h('circle', { cx: '77', cy: '57', r: '3', fill: '#263238' }),
    // Right eye (bright yellow sclera — hallmark of jaundice!)
    h('ellipse', { cx: '107', cy: '57', rx: '7.5', ry: '5.5', fill: '#FFF04D', stroke: '#B47B00', strokeWidth: '1' }),
    h('circle', { cx: '107', cy: '57', r: '3', fill: '#263238' }),
    // Eyebrows (concerned expression)
    h('path', { d: 'M69 48 Q77 45 84 49', stroke: '#4A2E18', strokeWidth: '2.2', fill: 'none', strokeLinecap: 'round' }),
    h('path', { d: 'M100 49 Q107 45 115 48', stroke: '#4A2E18', strokeWidth: '2.2', fill: 'none', strokeLinecap: 'round' }),
    // Nose & worried mouth
    h('path', { d: 'M92 56 L90 67 L94 68', stroke: '#8D5B3C', strokeWidth: '2', fill: 'none', strokeLinecap: 'round' }),
    h('path', { d: 'M82 78 Q92 73 102 78', stroke: '#6E3B22', strokeWidth: '2.4', fill: 'none', strokeLinecap: 'round' }),
    // Bold "JAUNDICE" label banner underneath him
    h('rect', {
      x: '24',
      y: '124',
      width: '137',
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
        fontSize: '12.5',
        fontWeight: '900',
        letterSpacing: '1.2'
      },
      'JAUNDICE'
    )
  );
}

// 4. Cute WHO-Flyer Male Bladder & Inflamed Urethra Illustration (for Trichomonas & Male Manifestation)
export function renderMaleBladderUrethraCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 170 135',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Left and right ureters entering bladder
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
    // Outer pink bladder wall
    h('path', {
      d: 'M42 54 C42 32, 128 32, 128 54 C128 82, 102 96, 85 102 C68 96, 42 82, 42 54 Z',
      fill: '#FF9AA2'
    }),
    // Inner bladder cavity
    h('path', {
      d: 'M51 56 C51 40, 119 40, 119 56 C119 77, 98 88, 85 93 C72 88, 51 77, 51 56 Z',
      fill: '#FFB7B2'
    }),
    // Golden urine pool inside bladder
    h('path', {
      d: 'M53 65 L117 65 C115 80, 97 89, 85 93 C73 89, 55 80, 53 65 Z',
      fill: '#F9D43A'
    }),
    // Prostate & inflamed urethra below bladder
    h('path', {
      d: 'M68 96 C62 104, 65 118, 77 120 L77 129 L93 129 L93 120 C105 118, 108 104, 102 96 Z',
      fill: '#FF808B'
    }),
    // Glowing red-yellow inflamed urethra line
    h('line', {
      x1: '85',
      y1: '93',
      x2: '85',
      y2: '129',
      stroke: '#FFE047',
      strokeWidth: '3.5',
      strokeLinecap: 'round'
    }),
    // Irritation radiation lines on both sides
    h('line', { x1: '46', y1: '102', x2: '56', y2: '105', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '44', y1: '113', x2: '55', y2: '113', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '48', y1: '123', x2: '58', y2: '119', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '124', y1: '102', x2: '114', y2: '105', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '126', y1: '113', x2: '115', y2: '113', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '122', y1: '123', x2: '112', y2: '119', stroke: '#FFE047', strokeWidth: '2.5', strokeLinecap: 'round' })
  );
}

// 5. Partner Pill Bottle & Two Capsules Cartoon ("TREAT BOTH PARTNERS")
export function renderPartnerPillsCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 140',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Medicine bottle
    h('rect', { x: '26', y: '20', width: '52', height: '14', rx: '4', fill: '#FFFFFF' }),
    h('rect', { x: '30', y: '34', width: '44', height: '68', rx: '9', fill: '#FFE4E8', stroke: '#FFFFFF', strokeWidth: '2' }),
    h('rect', { x: '36', y: '52', width: '32', height: '28', rx: '4', fill: '#E62235' }),
    // Medical cross on bottle
    h('rect', { x: '49', y: '57', width: '6', height: '18', rx: '1.5', fill: '#FFFFFF' }),
    h('rect', { x: '43', y: '63', width: '18', height: '6', rx: '1.5', fill: '#FFFFFF' }),
    // Two partner antibiotic capsules + heart
    h('path', {
      d: 'M122 36 C118 29, 108 29, 108 38 C108 46, 122 54, 122 58 C122 54, 136 46, 136 38 C136 29, 126 29, 122 36 Z',
      fill: '#FFE047'
    }),
    // Capsule 1 (for her)
    h('rect', { x: '94', y: '68', width: '56', height: '16', rx: '8', fill: '#FFFFFF' }),
    h('path', { d: 'M122 68 L142 68 A8 8 0 0 1 142 84 L122 84 Z', fill: '#38BDF8' }),
    // Capsule 2 (for partner)
    h('rect', { x: '94', y: '90', width: '56', height: '16', rx: '8', fill: '#FFFFFF' }),
    h('path', { d: 'M122 90 L142 90 A8 8 0 0 1 142 106 L122 106 Z', fill: '#FBBF24' }),
    // Caption pill
    h('rect', { x: '18', y: '114', width: '144', height: '20', rx: '10', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '90',
        y: '128',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'TREAT BOTH PARTNERS'
    )
  );
}

// 6. HPV Vaccine Shield & Syringe Cartoon ("90%+ PREVENTION")
export function renderVaccineShieldCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Glowing protective shield
    h('path', {
      d: 'M72 14 L118 26 L118 64 C118 92, 96 108, 72 116 C48 108, 26 92, 26 64 L26 26 Z',
      fill: '#FFFFFF',
      opacity: '0.95'
    }),
    h('path', {
      d: 'M72 22 L110 32 L110 63 C110 86, 91 99, 72 107 C53 99, 34 86, 34 63 L34 32 Z',
      fill: '#10B981'
    }),
    // Checkmark inside shield
    h('path', {
      d: 'M56 64 L67 75 L90 50',
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: '6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    // Cartoon vaccine vial on right
    h('rect', { x: '126', y: '44', width: '32', height: '48', rx: '7', fill: '#FFFFFF', stroke: '#0F172A', strokeWidth: '2' }),
    h('rect', { x: '132', y: '35', width: '20', height: '9', rx: '2', fill: '#38BDF8' }),
    h('rect', { x: '130', y: '62', width: '24', height: '24', rx: '3', fill: '#38BDF8' }),
    // Label banner underneath
    h('rect', { x: '16', y: '121', width: '148', height: '20', rx: '10', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '90',
        y: '135',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'VACCINE PROTECTION'
    )
  );
}

// 7. Cervical Screening / Pap Smear Magnifying Glass Cartoon (for HPV)
export function renderCervixPapScreenCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Magnifying glass lens showing healthy pink cervix donut
    h('circle', { cx: '78', cy: '58', r: '42', fill: '#FFF1F2', stroke: '#FFFFFF', strokeWidth: '6' }),
    // Cervix os inside lens
    h('circle', { cx: '78', cy: '58', r: '26', fill: '#FB7185' }),
    h('circle', { cx: '78', cy: '58', r: '6', fill: '#881337' }),
    // Sparkle stars showing healthy screened cervix
    h('circle', { cx: '64', cy: '44', r: '3', fill: '#FFFFFF' }),
    h('circle', { cx: '94', cy: '48', r: '2.5', fill: '#FEF08A' }),
    // Magnifying glass handle
    h('line', {
      x1: '109',
      y1: '89',
      x2: '136',
      y2: '114',
      stroke: '#FFFFFF',
      strokeWidth: '10',
      strokeLinecap: 'round'
    }),
    // Gentle cervical swab brush
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
    // Label banner
    h('rect', { x: '18', y: '121', width: '144', height: '20', rx: '10', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '90',
        y: '135',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'PAP & HPV SCREENING'
    )
  );
}

// 8. Silent Infection Cartoon ("70%-80% NO SYMPTOMS" for Chlamydia & HPV)
export function renderSilentInfectionCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Speech bubble with "SHHH / SILENT"
    h('circle', { cx: '90', cy: '58', r: '44', fill: '#FFFFFF', opacity: '0.95' }),
    // Cute cartoon face with finger to lips ("silent infection")
    h('circle', { cx: '76', cy: '50', r: '4', fill: '#0F172A' }),
    h('circle', { cx: '104', cy: '50', r: '4', fill: '#0F172A' }),
    h('circle', { cx: '66', cy: '58', r: '5', fill: '#FDA4AF', opacity: '0.7' }),
    h('circle', { cx: '114', cy: '58', r: '5', fill: '#FDA4AF', opacity: '0.7' }),
    // Quiet O mouth + "shhh" finger
    h('circle', { cx: '90', cy: '68', r: '5', fill: '#F43F5E' }),
    h('rect', { x: '86', y: '62', width: '8', height: '28', rx: '4', fill: '#FDBA74', stroke: '#0F172A', strokeWidth: '1.5' }),
    // Banner underneath
    h('rect', { x: '14', y: '116', width: '152', height: '22', rx: '11', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '90',
        y: '131',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'SILENT (NO SYMPTOMS)'
    )
  );
}

// 9. Uterus & Fallopian Tubes Pelvic Inflammatory Disease (PID) / Tubal Care Cartoon
export function renderUterusFallopianPidCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Left and right Fallopian tubes curving out to ovaries
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
    // Ovaries
    h('ellipse', { cx: '45', cy: '68', rx: '11', ry: '8', fill: '#FFF1F2' }),
    h('ellipse', { cx: '140', cy: '68', rx: '11', ry: '8', fill: '#FCA5A5' }),
    // Pear-shaped uterus body
    h('path', {
      d: 'M64 42 C64 32, 121 32, 121 42 C121 68, 106 88, 92.5 104 C79 88, 64 68, 64 42 Z',
      fill: '#FB7185',
      stroke: '#FFFFFF',
      strokeWidth: '2.5'
    }),
    // Warning glow lines on right Fallopian tube (showing tubal inflammation / PID)
    h('circle', { cx: '146', cy: '38', r: '10', fill: '#FEF08A', opacity: '0.85' }),
    h('text', { x: '146', y: '43', textAnchor: 'middle', fill: '#991B1B', fontSize: '13', fontWeight: '900' }, '!'),
    // Label banner
    h('rect', { x: '16', y: '118', width: '153', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '132.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'PROTECT FALLOPIAN TUBES'
    )
  );
}

// 10. Ceftriaxone Clinic Injection Syringe & Paired Diplococci Bacteria Cartoon (for Gonorrhea)
export function renderClinicInjectionCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Circle badge
    h('circle', { cx: '90', cy: '60', r: '44', fill: 'rgba(255,255,255,0.2)', stroke: '#FFFFFF', strokeWidth: '2' }),
    // Syringe barrel tilted diagonally
    h(
      'g',
      { transform: 'rotate(-35 90 60)' },
      h('rect', { x: '76', y: '30', width: '28', height: '56', rx: '5', fill: '#FFFFFF' }),
      h('rect', { x: '79', y: '48', width: '22', height: '35', rx: '3', fill: '#FACC15' }),
      // Plunger top
      h('rect', { x: '86', y: '14', width: '8', height: '16', fill: '#E2E8F0' }),
      h('rect', { x: '78', y: '11', width: '24', height: '5', rx: '2', fill: '#FFFFFF' }),
      // Needle tip
      h('line', { x1: '90', y1: '86', x2: '90', y2: '104', stroke: '#FFFFFF', strokeWidth: '3', strokeLinecap: 'round' }),
      // Measurement ticks
      h('line', { x1: '78', y1: '42', x2: '86', y2: '42', stroke: '#0F172A', strokeWidth: '2' }),
      h('line', { x1: '78', y1: '54', x2: '86', y2: '54', stroke: '#0F172A', strokeWidth: '2' }),
      h('line', { x1: '78', y1: '66', x2: '86', y2: '66', stroke: '#0F172A', strokeWidth: '2' })
    ),
    // Label banner
    h('rect', { x: '16', y: '118', width: '148', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '90',
        y: '132.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'CLINIC ANTIBIOTIC SHOT'
    )
  );
}

// 11. Burning Urination Flame Drops Cartoon (for Gonorrhea & Chlamydia Male Symptoms)
export function renderBurningUrinationCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 180 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Large golden-orange flame drop
    h('path', {
      d: 'M90 16 C90 16, 126 54, 126 80 C126 100, 110 114, 90 114 C70 114, 54 100, 54 80 C54 54, 90 16, 90 16 Z',
      fill: '#FB923C',
      stroke: '#FFFFFF',
      strokeWidth: '2.5'
    }),
    // Inner bright yellow flame core
    h('path', {
      d: 'M90 44 C90 44, 110 68, 110 84 C110 96, 101 105, 90 105 C79 105, 70 96, 70 84 C70 68, 90 44, 90 44 Z',
      fill: '#FEF08A'
    }),
    // Lightning bolt inside drop showing sharp stinging/burning
    h('polygon', {
      points: '94,54 78,78 90,78 84,98 104,72 91,72',
      fill: '#DC2626'
    }),
    // Label banner
    h('rect', { x: '16', y: '119', width: '148', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '90',
        y: '133.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'BURNING URINATION'
    )
  );
}

// 12. Healthy Liver with Protective Shield Cartoon (for Hepatitis B)
export function renderHealthyLiverShieldCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Smooth reddish-brown two-lobed cartoon liver
    h('path', {
      d: 'M32 54 C32 32, 68 24, 102 32 C132 28, 154 38, 152 56 C150 76, 118 92, 92 94 C64 96, 32 82, 32 54 Z',
      fill: '#E11D48',
      stroke: '#FFFFFF',
      strokeWidth: '3'
    }),
    // Liver lobe division line
    h('path', {
      d: 'M96 32 C92 54, 94 74, 100 92',
      fill: 'none',
      stroke: '#FFE4E6',
      strokeWidth: '3',
      strokeLinecap: 'round'
    }),
    // Cute smiling face on healthy liver
    h('circle', { cx: '64', cy: '56', r: '3.5', fill: '#FFFFFF' }),
    h('circle', { cx: '80', cy: '56', r: '3.5', fill: '#FFFFFF' }),
    h('path', { d: 'M66 66 Q72 72 78 66', stroke: '#FFFFFF', strokeWidth: '2.5', fill: 'none', strokeLinecap: 'round' }),
    // Green shield badge on right lobe
    h('circle', { cx: '132', cy: '76', r: '18', fill: '#22C55E', stroke: '#FFFFFF', strokeWidth: '2.5' }),
    h('path', { d: 'M124 76 L130 82 L141 70', stroke: '#FFFFFF', strokeWidth: '3.5', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }),
    // Label banner
    h('rect', { x: '18', y: '117', width: '149', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'PROTECT YOUR LIVER'
    )
  );
}

// 13. Uterine Fibroids Locations Diagram Cartoon (for FibroidsHomePage1)
export function renderFibroidsUterusDiagramSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 185 148',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Uterus outline
    h('path', {
      d: 'M60 36 C60 24, 125 24, 125 36 C125 68, 108 92, 92.5 108 C77 92, 60 68, 60 36 Z',
      fill: '#FDA4AF',
      stroke: '#FFFFFF',
      strokeWidth: '3'
    }),
    // Inner uterine cavity
    h('path', {
      d: 'M76 42 L109 42 L92.5 84 Z',
      fill: '#9F1239'
    }),
    // Swirling benign fibroid nodules (Intramural, Subserosal, Submucosal)
    h('circle', { cx: '72', cy: '56', r: '10', fill: '#FEF08A', stroke: '#CA8A04', strokeWidth: '2' }),
    h('circle', { cx: '124', cy: '52', r: '12', fill: '#FEF08A', stroke: '#CA8A04', strokeWidth: '2' }),
    h('circle', { cx: '94', cy: '62', r: '7.5', fill: '#FEF08A', stroke: '#CA8A04', strokeWidth: '2' }),
    // Label banner
    h('rect', { x: '16', y: '119', width: '153', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '133.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'BENIGN MUSCLE GROWTHS'
    )
  );
}

// 14. Iron-Rich Nutrition & Heavy Bleeding Care Cartoon (for FibroidsHomePage1)
export function renderIronRichCareCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Red blood drop with "Fe+" (Iron) badge
    h('path', {
      d: 'M64 22 C64 22, 92 54, 92 74 C92 90, 79 102, 64 102 C49 102, 36 90, 36 74 C36 54, 64 22, 64 22 Z',
      fill: '#FFFFFF'
    }),
    h('text', { x: '64', y: '80', textAnchor: 'middle', fill: '#E11D48', fontSize: '20', fontWeight: '900' }, 'Fe+'),
    // Green iron-rich spinach leaf on right
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
    // Label banner
    h('rect', { x: '16', y: '117', width: '153', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'IRON & ANEMIA CARE'
    )
  );
}

// 15. Fistula Surgical Healing & Free Repair Center Cartoon (for FistulasHomePage1)
export function renderFistulaHealingRepairCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Big white heart with surgical healing stitches & medical cross
    h('path', {
      d: 'M92.5 36 C80 16, 44 20, 44 50 C44 76, 92.5 102, 92.5 108 C92.5 102, 141 76, 141 50 C141 20, 105 16, 92.5 36 Z',
      fill: '#FFFFFF'
    }),
    // Healed suture line on left side of heart
    h('path', {
      d: 'M68 42 L76 74',
      stroke: '#E11D48',
      strokeWidth: '3',
      strokeLinecap: 'round'
    }),
    h('line', { x1: '63', y1: '49', x2: '75', y2: '46', stroke: '#E11D48', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '65', y1: '58', x2: '77', y2: '55', stroke: '#E11D48', strokeWidth: '2.5', strokeLinecap: 'round' }),
    h('line', { x1: '67', y1: '67', x2: '79', y2: '64', stroke: '#E11D48', strokeWidth: '2.5', strokeLinecap: 'round' }),
    // Green medical cross on right side of heart
    h('rect', { x: '106', y: '44', width: '8', height: '24', rx: '2', fill: '#10B981' }),
    h('rect', { x: '98', y: '52', width: '24', height: '8', rx: '2', fill: '#10B981' }),
    // Label banner
    h('rect', { x: '14', y: '117', width: '157', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      '90%+ SURGICALLY CURABLE'
    )
  );
}

// 16. Pelvic Floor Hammock & Silicone Pessary Ring Cartoon (for ProlapseHomePage1)
export function renderPelvicPessaryRingCartoonSvg() {
  return h(
    'svg',
    {
      viewBox: '0 0 185 145',
      className: 'w-36 sm:w-44 h-auto shrink-0 select-none pointer-events-none',
      'aria-hidden': 'true'
    },
    // Soft medical silicone pessary support ring
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
    // Upward support arrows showing pelvic lift
    h('path', {
      d: 'M46 98 Q92.5 112 139 98',
      fill: 'none',
      stroke: '#FEF08A',
      strokeWidth: '5',
      strokeLinecap: 'round'
    }),
    h('path', { d: 'M92.5 72 L92.5 42', stroke: '#FEF08A', strokeWidth: '4', strokeLinecap: 'round' }),
    h('polygon', { points: '84,46 92.5,33 101,46', fill: '#FEF08A' }),
    // Label banner
    h('rect', { x: '14', y: '117', width: '157', height: '21', rx: '10.5', fill: 'rgba(0,0,0,0.28)' }),
    h(
      'text',
      {
        x: '92.5',
        y: '131.5',
        textAnchor: 'middle',
        fill: '#FFFFFF',
        fontSize: '10.5',
        fontWeight: '900',
        letterSpacing: '0.8'
      },
      'PESSARY & PELVIC SUPPORT'
    )
  );
}
