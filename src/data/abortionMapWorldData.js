// Auto-generated Global Abortion Law (Wikipedia 6 Grounds Chart + WHO Global Abortion Policies Database) & Interactive World Map Dataset
// Generated from media_1795297482793_34d0c210.jpg (1024x843), Wikipedia Abortion Law Summary Table, and WHO Global Abortion Policies Database

export const ABORTION_MAP_CANVAS_WIDTH = 1024;
export const ABORTION_MAP_CANVAS_HEIGHT = 843;

export const WIKIPEDIA_ABORTION_GROUNDS_COLUMNS = [
  {
    "key": "riskToLife",
    "titleKey": "wikiGroundRiskToLife",
    "defaultTitle": "Risk to Life",
    "subKey": "wikiGroundRiskToLifeSub",
    "defaultSub": "Allowed to save the pregnant woman's life"
  },
  {
    "key": "riskToHealth",
    "titleKey": "wikiGroundRiskToHealth",
    "defaultTitle": "Risk to Health",
    "subKey": "wikiGroundRiskToHealthSub",
    "defaultSub": "Allowed to protect physical or mental health"
  },
  {
    "key": "rape",
    "titleKey": "wikiGroundRape",
    "defaultTitle": "Rape / Sexual Assault",
    "subKey": "wikiGroundRapeSub",
    "defaultSub": "Allowed when pregnancy results from rape"
  },
  {
    "key": "fetalImpairment",
    "titleKey": "wikiGroundFetalImpairment",
    "defaultTitle": "Fetal Impairment",
    "subKey": "wikiGroundFetalImpairmentSub",
    "defaultSub": "Allowed for severe or fatal fetal conditions"
  },
  {
    "key": "economicOrSocial",
    "titleKey": "wikiGroundEconomicOrSocial",
    "defaultTitle": "Economic or Social",
    "subKey": "wikiGroundEconomicOrSocialSub",
    "defaultSub": "Allowed for financial, family, or social distress"
  },
  {
    "key": "onRequest",
    "titleKey": "wikiGroundOnRequest",
    "defaultTitle": "On Request",
    "subKey": "wikiGroundOnRequestSub",
    "defaultSub": "Allowed on the woman's own request (with gestational limit)"
  }
];

export const ABORTION_LEGAL_COLUMNS = [
  "Reproductive Health Act",
  "General Medical Health Act",
  "Constitution",
  "Criminal / Penal Code",
  "Civil Code",
  "Ministerial Order / Decree",
  "Case Law",
  "Health Regulation / Clinical Guidelines",
  "EML / Registered List",
  "Medical Ethics Code",
  "Document Relating to Funding",
  "Abortion Specific Law",
  "Law on Medical Practitioners",
  "Law on Health Care Services",
  "Other"
];

export const ABORTION_ACCESS_LEVELS = [
  {
    "level": 1,
    "colorHex": "#1B9E4B",
    "borderHex": "#0F5E2C",
    "shortLabel": "Level 1: Full Decriminalized Care",
    "defaultTitle": "Level 1: Fully Decriminalized & Standard Healthcare",
    "defaultDescription": "Abortion is decriminalized and treated as standard healthcare on request with broad protection and no early federal gestational cutoffs (for example, Canada and Colombia)."
  },
  {
    "level": 2,
    "colorHex": "#34B865",
    "borderHex": "#1E7A40",
    "shortLabel": "Level 2: On Request (20 to 24 Wks)",
    "defaultTitle": "Level 2: Broad Access on Request (Up to 20 to 24 Weeks)",
    "defaultDescription": "Abortion is legal on a woman's request or broad social grounds through the first 20 to 24 weeks of pregnancy (for example, the Netherlands, Australia, New Zealand, Singapore, Sweden, Iceland, and the United Kingdom)."
  },
  {
    "level": 3,
    "colorHex": "#74D65C",
    "borderHex": "#3E8E2C",
    "shortLabel": "Level 3: On Request (1st Trimester)",
    "defaultTitle": "Level 3: Legal on Request in First Trimester (10 to 16 Weeks)",
    "defaultDescription": "Abortion is legal on a woman's request during the first trimester (typically 12 to 14 weeks) and permitted later for health, life, or specific exceptions (for example, Argentina, France, Spain, South Africa, Uruguay, Mexico, Germany, Italy, Tunisia, Nepal, Thailand, and Kazakhstan)."
  },
  {
    "level": 4,
    "colorHex": "#B8E655",
    "borderHex": "#688E19",
    "shortLabel": "Level 4: Broad / State-by-State",
    "defaultTitle": "Level 4: Broad Socio-Economic Grounds or State-by-State Access",
    "defaultDescription": "Abortion is available either on broad socio-economic and health grounds or varies strongly by state or sub-region (for example, the United States, Finland, Cyprus, Bosnia and Herzegovina, and Barbados)."
  },
  {
    "level": 5,
    "colorHex": "#FCD34D",
    "borderHex": "#B45309",
    "shortLabel": "Level 5: Broad Medical & Social Grounds",
    "defaultTitle": "Level 5: Broad Medical & Social Grounds with Provider Approval",
    "defaultDescription": "Abortion is permitted across broad health, economic, contraceptive-failure, or humanitarian categories up to 20 to 24 weeks, subject to doctor authorization and gestational rules (for example, India, Zambia, Japan, and Fiji)."
  },
  {
    "level": 6,
    "colorHex": "#F59E0B",
    "borderHex": "#92400E",
    "shortLabel": "Level 6: Physical & Mental Health Grounds",
    "defaultTitle": "Level 6: Allowed Under Specific Physical & Mental Health Circumstances",
    "defaultDescription": "Abortion is permitted when pregnancy risks the woman's life, physical or mental health, or results from rape, incest, or severe fetal condition (for example, Ghana, Rwanda, Ethiopia, Botswana, Namibia, and Israel)."
  },
  {
    "level": 7,
    "colorHex": "#F97316",
    "borderHex": "#9A3412",
    "shortLabel": "Level 7: Restricted (Life, Health, Rape)",
    "defaultTitle": "Level 7: Restricted (Allowed for Life, Health, Rape, or Fetal Risk)",
    "defaultDescription": "Abortion is generally restricted by law, with exceptions for risk to life or health, rape, or severe fetal abnormalities (for example, Brazil, Chile, Bolivia, Ecuador, Peru, Kenya, Morocco, Algeria, Pakistan, Malaysia, and Indonesia)."
  },
  {
    "level": 8,
    "colorHex": "#EF4444",
    "borderHex": "#991B1B",
    "shortLabel": "Level 8: Strict (Life Threat / Criminal Act)",
    "defaultTitle": "Level 8: Strict with Narrow Allowances (Life Threat or Rape Only)",
    "defaultDescription": "Abortion is heavily restricted, permitted primarily only when the pregnancy threatens the woman's life or health or results from a criminal act such as rape or incest (for example, Poland, Panama, Mali, Niger, Sudan, and Iran)."
  },
  {
    "level": 9,
    "colorHex": "#C81E32",
    "borderHex": "#7F1D1D",
    "shortLabel": "Level 9: Very Strict (To Save Life Only)",
    "defaultTitle": "Level 9: Very Strict (Permitted Strictly Only to Save Life)",
    "defaultDescription": "Abortion is prohibited except when strictly indispensable to save the life of the pregnant woman (for example, Nigeria, Uganda, Tanzania, Malawi, Afghanistan, Egypt, Lebanon, Yemen, Myanmar, Sri Lanka, Guatemala, Paraguay, and Venezuela)."
  },
  {
    "level": 10,
    "colorHex": "#991B1B",
    "borderHex": "#450A0A",
    "shortLabel": "Level 10: Total Ban / Criminalized",
    "defaultTitle": "Level 10: Total Ban & Criminalized Under All Circumstances",
    "defaultDescription": "Abortion is prohibited and criminalized under all circumstances with no explicit legal exceptions for health, rape, or saving life (for example, El Salvador, Nicaragua, the Philippines, Honduras, Dominican Republic, Haiti, Andorra, Malta, Madagascar, and Senegal)."
  }
];

export const ABORTION_MAP_COUNTRIES = [
  {
    "name": "Afghanistan",
    "shortName": "Afghanistan",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is prohibited except when strictly necessary to save the pregnant woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 698.0,
    "cy": 341.0,
    "area": 867
  },
  {
    "name": "Albania",
    "shortName": "Albania",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 537.5,
    "cy": 305.8,
    "area": 24
  },
  {
    "name": "Algeria",
    "shortName": "Algeria",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted when necessary to save the woman's life or preserve her physiological and mental balance.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 468.0,
    "cy": 368.0,
    "area": 3448
  },
  {
    "name": "Andorra",
    "shortName": "Andorra",
    "whoRegion": "European Region",
    "level": 10,
    "summary": "Abortion is prohibited under all circumstances in the Penal Code.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 461.0,
    "cy": 299.5,
    "area": 18
  },
  {
    "name": "Angola",
    "shortName": "Angola",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted to save life or health, in cases of rape, or fetal non-viability.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 524.0,
    "cy": 552.0,
    "area": 1569
  },
  {
    "name": "Antigua and Barbuda",
    "shortName": "Antigua & Barbuda",
    "whoRegion": "Region of the Americas",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 214.0,
    "cy": 415.0,
    "area": 18
  },
  {
    "name": "Argentina",
    "shortName": "Argentina",
    "whoRegion": "Region of the Americas",
    "level": 3,
    "summary": "Abortion is legal on request up to 14 weeks of gestation (and later under specific exceptions such as rape or risk to life or health).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 14 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 14 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 224.0,
    "cy": 648.0,
    "area": 3975
  },
  {
    "name": "Armenia",
    "shortName": "Armenia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 616.5,
    "cy": 313.5,
    "area": 18
  },
  {
    "name": "Australia",
    "shortName": "Australia",
    "whoRegion": "Western Pacific Region",
    "level": 2,
    "summary": "Abortion is decriminalized and available on request across all states and territories (typically up to 22 to 24 weeks, and later with medical approval).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (16 to 24 wks by state)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [
      {
        "name": "Australian Capital Territory",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "New South Wales",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Northern Territory",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "Yes",
          "Other": "Yes"
        }
      },
      {
        "name": "Queensland",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "South Australia",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "Yes",
          "Other": "Yes"
        }
      },
      {
        "name": "Tasmania",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "Yes",
          "Other": "Yes"
        }
      },
      {
        "name": "Victoria",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "Yes",
          "Other": "Yes"
        }
      },
      {
        "name": "Western Australia",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      }
    ],
    "hasPolygon": true,
    "cx": 955.0,
    "cy": 612.0,
    "area": 11035
  },
  {
    "name": "Austria",
    "shortName": "Austria",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request during the first 3 months (12 to 16 weeks) of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "Yes",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 510.3,
    "cy": 277.5,
    "area": 82
  },
  {
    "name": "Azerbaijan",
    "shortName": "Azerbaijan",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 628.8,
    "cy": 310.3,
    "area": 82
  },
  {
    "name": "Bahamas",
    "shortName": "Bahamas",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted to preserve the life or physical and mental health of the woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 169.0,
    "cy": 381.0,
    "area": 18
  },
  {
    "name": "Bahrain",
    "shortName": "Bahrain",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 6,
    "summary": "Abortion is permitted on medical and health grounds with specialist approval.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 651.5,
    "cy": 378.5,
    "area": 18
  },
  {
    "name": "Bangladesh",
    "shortName": "Bangladesh",
    "whoRegion": "South-East Asia Region",
    "level": 9,
    "summary": "Abortion is permitted under the Penal Code only to save the woman's life, though Menstrual Regulation (MR) is provided as an official family planning service up to 10 to 12 weeks.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 797.2,
    "cy": 386.3,
    "area": 135
  },
  {
    "name": "Barbados",
    "shortName": "Barbados",
    "whoRegion": "Region of the Americas",
    "level": 4,
    "summary": "Abortion is permitted on broad health, physical, mental, and socio-economic grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 224.0,
    "cy": 434.0,
    "area": 18
  },
  {
    "name": "Belarus",
    "shortName": "Belarus",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 555.4,
    "cy": 251.9,
    "area": 336
  },
  {
    "name": "Belgium",
    "shortName": "Belgium",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks after conception (14 weeks LMP).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 477.4,
    "cy": 265.5,
    "area": 33
  },
  {
    "name": "Belize",
    "shortName": "Belize",
    "whoRegion": "Region of the Americas",
    "level": 4,
    "summary": "Abortion is permitted on medical, health, fetal, and socio-economic grounds with physician approval.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 122.5,
    "cy": 415.5,
    "area": 18
  },
  {
    "name": "Benin",
    "shortName": "Benin",
    "whoRegion": "African Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy when pregnancy causes material, educational, professional, or moral distress.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 466.8,
    "cy": 450.0,
    "area": 116
  },
  {
    "name": "Bhutan",
    "shortName": "Bhutan",
    "whoRegion": "South-East Asia Region",
    "level": 7,
    "summary": "Abortion is permitted to save the woman's life, when pregnancy results from rape or incest, or when the woman is of unsound mind.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 794.7,
    "cy": 369.7,
    "area": 30
  },
  {
    "name": "Bolivia (Plurinational State of)",
    "shortName": "Bolivia",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted when pregnancy results from rape or incest, or to protect the life or health of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 214.0,
    "cy": 572.0,
    "area": 1361
  },
  {
    "name": "Bosnia and Herzegovina",
    "shortName": "Bosnia & Herz.",
    "whoRegion": "European Region",
    "level": 4,
    "summary": "Abortion is legal on request up to 10 weeks of pregnancy in both entities.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [
      {
        "name": "Federation of Bosnia and Herzegovina",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "Yes",
          "Other": "No"
        }
      },
      {
        "name": "Republika Srpska",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "Yes",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      }
    ],
    "hasPolygon": false,
    "cx": 525.5,
    "cy": 297.5,
    "area": 18
  },
  {
    "name": "Botswana",
    "shortName": "Botswana",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted within the first 16 weeks in cases of rape, incest, risk to life or physical/mental health, or severe fetal abnormality.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 547.0,
    "cy": 598.0,
    "area": 730
  },
  {
    "name": "Brazil",
    "shortName": "Brazil",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is generally illegal, except in cases of rape, risk to the pregnant person's life, or severe fetal abnormalities (such as anencephaly).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Anencephaly only)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 258.0,
    "cy": 548.0,
    "area": 11511
  },
  {
    "name": "Brunei Darussalam",
    "shortName": "Brunei",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is prohibited except in good faith for the purpose of saving the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 894.0,
    "cy": 468.0,
    "area": 18
  },
  {
    "name": "Bulgaria",
    "shortName": "Bulgaria",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 549.9,
    "cy": 301.2,
    "area": 143
  },
  {
    "name": "Burkina Faso",
    "shortName": "Burkina Faso",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to save life, preserve health, or in cases of rape, incest, or severe fetal condition.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 451.0,
    "cy": 438.7,
    "area": 290
  },
  {
    "name": "Burundi",
    "shortName": "Burundi",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion is prohibited except for therapeutic necessity to save life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 572.8,
    "cy": 510.7,
    "area": 32
  },
  {
    "name": "Cabo Verde",
    "shortName": "Cabo Verde",
    "whoRegion": "African Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 368.0,
    "cy": 424.0,
    "area": 18
  },
  {
    "name": "Cambodia",
    "shortName": "Cambodia",
    "whoRegion": "Western Pacific Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 856.9,
    "cy": 437.4,
    "area": 183
  },
  {
    "name": "Cameroon",
    "shortName": "Cameroon",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted when necessary to save the woman's life or in cases of pregnancy resulting from rape.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 506.0,
    "cy": 470.0,
    "area": 477
  },
  {
    "name": "Canada",
    "shortName": "Canada",
    "whoRegion": "Region of the Americas",
    "level": 1,
    "summary": "Abortion is decriminalized and regulated as standard healthcare with no gestational limits under federal law.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (No federal limit)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [
      {
        "name": "Alberta",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "Yes",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "British Columbia",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Manitoba",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "New Brunswick",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "Yes",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Newfoundland and Labrador",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "Yes",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Northwest Territories",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "Yes",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Nova Scotia",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Nunavut",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Ontario",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Prince Edward Island",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Quebec",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "Yes",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Saskatchewan",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Yukon",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      }
    ],
    "hasPolygon": true,
    "cx": 135.0,
    "cy": 250.0,
    "area": 14779
  },
  {
    "name": "Central African Republic",
    "shortName": "Central African Rep.",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to save life or health, in cases of rape or incest, or for minors in distress.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 535.0,
    "cy": 465.0,
    "area": 742
  },
  {
    "name": "Chad",
    "shortName": "Chad",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to save life, preserve health, or in cases of rape, incest, or fetal impairment.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 529.0,
    "cy": 425.0,
    "area": 1605
  },
  {
    "name": "Chile",
    "shortName": "Chile",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted only on three grounds: risk to the woman's life, lethal fetal abnormality, or rape (up to 12 weeks, or 14 weeks for girls under 14).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 12 to 14 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Lethal fetal impairment)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 205.0,
    "cy": 650.0,
    "area": 664
  },
  {
    "name": "China",
    "shortName": "China",
    "whoRegion": "Western Pacific Region",
    "level": 3,
    "summary": "Abortion is legal on request as part of reproductive health services (non-medical sex-selective abortion is prohibited).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [
      {
        "name": "Hong Kong Special Administrative region (China)",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "Yes",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      }
    ],
    "hasPolygon": true,
    "cx": 832.0,
    "cy": 342.0,
    "area": 14390
  },
  {
    "name": "Colombia",
    "shortName": "Colombia",
    "whoRegion": "Region of the Americas",
    "level": 1,
    "summary": "Abortion is decriminalized on request up to 24 weeks of pregnancy, and permitted later for health, life, or fetal conditions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 178.0,
    "cy": 478.0,
    "area": 1338
  },
  {
    "name": "Comoros",
    "shortName": "Comoros",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted for serious medical reasons certified by physicians to protect life or health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 622.0,
    "cy": 558.0,
    "area": 18
  },
  {
    "name": "Congo",
    "shortName": "Congo",
    "whoRegion": "African Region",
    "level": 10,
    "summary": "Abortion is prohibited under the Penal Code with no explicit statutory exceptions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 516.0,
    "cy": 500.0,
    "area": 357
  },
  {
    "name": "Cook Islands",
    "shortName": "Cook Islands",
    "whoRegion": "Western Pacific Region",
    "level": 7,
    "summary": "Abortion is permitted to preserve the woman's life or physical/mental health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 985.0,
    "cy": 605.0,
    "area": 18
  },
  {
    "name": "Costa Rica",
    "shortName": "Costa Rica",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted only when necessary to preserve the life or health of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 137.1,
    "cy": 449.3,
    "area": 34
  },
  {
    "name": "Croatia",
    "shortName": "Croatia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 10 weeks after conception.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 523.5,
    "cy": 294.7,
    "area": 37
  },
  {
    "name": "Cuba",
    "shortName": "Cuba",
    "whoRegion": "Region of the Americas",
    "level": 3,
    "summary": "Abortion is legal on request in the public health system during the first trimester.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 162.8,
    "cy": 397.0,
    "area": 110
  },
  {
    "name": "Cyprus",
    "shortName": "Cyprus",
    "whoRegion": "European Region",
    "level": 4,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy (and up to 19 weeks in cases of rape).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 579.5,
    "cy": 333.5,
    "area": 18
  },
  {
    "name": "Czechia",
    "shortName": "Czechia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 513.1,
    "cy": 268.1,
    "area": 107
  },
  {
    "name": "C\u00f4te d'Ivoire",
    "shortName": "C\u00f4te d'Ivoire",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted to save the life of the pregnant woman or in cases of rape.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 436.2,
    "cy": 461.5,
    "area": 328
  },
  {
    "name": "Democratic People's Republic of Korea",
    "shortName": "North Korea",
    "whoRegion": "South-East Asia Region",
    "level": 3,
    "summary": "Abortion is permitted on request and medical grounds in state health facilities.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 908.9,
    "cy": 311.3,
    "area": 110
  },
  {
    "name": "Democratic Republic of the Congo",
    "shortName": "DR Congo",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Under the Maputo Protocol implementation, abortion is permitted in cases of sexual assault, rape, incest, and when pregnancy endangers mental or physical health or life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 548.0,
    "cy": 510.0,
    "area": 2995
  },
  {
    "name": "Denmark",
    "shortName": "Denmark",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy (expanding to 18 weeks), and later with regional permit.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 362.5,
    "cy": 170.5,
    "area": 5326
  },
  {
    "name": "Djibouti",
    "shortName": "Djibouti",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted for therapeutic medical necessity to protect the woman's life or health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 618.5,
    "cy": 439.5,
    "area": 18
  },
  {
    "name": "Dominica",
    "shortName": "Dominica",
    "whoRegion": "Region of the Americas",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 216.0,
    "cy": 422.0,
    "area": 18
  },
  {
    "name": "Dominican Republic",
    "shortName": "Dominican Rep.",
    "whoRegion": "Region of the Americas",
    "level": 10,
    "summary": "Abortion is prohibited under all circumstances in the Penal Code with no explicit exceptions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 192.4,
    "cy": 410.0,
    "area": 37
  },
  {
    "name": "Ecuador",
    "shortName": "Ecuador",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted when the woman's life or health is in danger, or in cases of rape.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 157.5,
    "cy": 502.6,
    "area": 293
  },
  {
    "name": "Egypt",
    "shortName": "Egypt",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is prohibited under the Penal Code except when necessary under medical ethics to save the pregnant woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 568.0,
    "cy": 375.0,
    "area": 1298
  },
  {
    "name": "El Salvador",
    "shortName": "El Salvador",
    "whoRegion": "Region of the Americas",
    "level": 10,
    "summary": "Abortion is prohibited under all circumstances, including to save a pregnant person's life, with severe criminal penalties.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 122.0,
    "cy": 431.5,
    "area": 18
  },
  {
    "name": "Equatorial Guinea",
    "shortName": "Eq. Guinea",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted to save life or health with medical authorization.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 497.5,
    "cy": 487.5,
    "area": 18
  },
  {
    "name": "Eritrea",
    "shortName": "Eritrea",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to save life, preserve physical or mental health, or in cases of rape or incest.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 602.3,
    "cy": 424.7,
    "area": 83
  },
  {
    "name": "Estonia",
    "shortName": "Estonia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 11 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 545.9,
    "cy": 230.9,
    "area": 30
  },
  {
    "name": "Eswatini",
    "shortName": "Eswatini",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted under the Constitution on medical or therapeutic grounds including risk to life, physical/mental health, rape, incest, or severe fetal defect.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "Yes",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 573.5,
    "cy": 619.5,
    "area": 18
  },
  {
    "name": "Ethiopia",
    "shortName": "Ethiopia",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted in cases of rape, incest, risk to life or health, fetal impairment, or if the pregnant person is a minor or has a disability.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 609.0,
    "cy": 456.0,
    "area": 1442
  },
  {
    "name": "Fiji",
    "shortName": "Fiji",
    "whoRegion": "Western Pacific Region",
    "level": 5,
    "summary": "Abortion is permitted to preserve physical or mental health, in cases of rape/incest, fetal impairment, and socio-economic factors.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1012.0,
    "cy": 578.0,
    "area": 18
  },
  {
    "name": "Finland",
    "shortName": "Finland",
    "whoRegion": "European Region",
    "level": 4,
    "summary": "Abortion is available on request up to 12 weeks of pregnancy (following the 2023 reform) and up to 20 to 24 weeks on medical or social grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 544.0,
    "cy": 205.0,
    "area": 616
  },
  {
    "name": "France",
    "shortName": "France",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is constitutionally protected and available on request up to 14 weeks of pregnancy (16 weeks LMP).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 16 weeks LMP)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 16 weeks LMP)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 470.0,
    "cy": 283.0,
    "area": 774
  },
  {
    "name": "Gabon",
    "shortName": "Gabon",
    "whoRegion": "African Region",
    "level": 8,
    "summary": "Abortion is permitted only when the woman's life is gravely endangered or in cases of rape, incest, or severe fetal distress.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Narrow exception)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 502.7,
    "cy": 498.5,
    "area": 317
  },
  {
    "name": "Gambia",
    "shortName": "Gambia",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted to save the life or protect the health of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 397.5,
    "cy": 432.5,
    "area": 18
  },
  {
    "name": "Georgia",
    "shortName": "Georgia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "Yes",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 614.8,
    "cy": 304.6,
    "area": 110
  },
  {
    "name": "Germany",
    "shortName": "Germany",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is available on request during the first 12 weeks after conception following mandatory counseling.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 497.0,
    "cy": 263.0,
    "area": 497
  },
  {
    "name": "Ghana",
    "shortName": "Ghana",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted when pregnancy risks the woman's life, physical or mental health, or results from rape, incest, or severe fetal abnormality.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 452.6,
    "cy": 459.2,
    "area": 274
  },
  {
    "name": "Greece",
    "shortName": "Greece",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 540.2,
    "cy": 315.5,
    "area": 124
  },
  {
    "name": "Grenada",
    "shortName": "Grenada",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted to save the woman's life or preserve health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 214.5,
    "cy": 439.5,
    "area": 18
  },
  {
    "name": "Guatemala",
    "shortName": "Guatemala",
    "whoRegion": "Region of the Americas",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 116.7,
    "cy": 423.2,
    "area": 101
  },
  {
    "name": "Guinea",
    "shortName": "Guinea",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to preserve life and health, in cases of rape or incest, or severe fetal abnormality.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 416.0,
    "cy": 448.2,
    "area": 239
  },
  {
    "name": "Guinea-Bissau",
    "shortName": "Guinea-Bissau",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion is permitted strictly to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 400.1,
    "cy": 438.5,
    "area": 53
  },
  {
    "name": "Guyana",
    "shortName": "Guyana",
    "whoRegion": "Region of the Americas",
    "level": 3,
    "summary": "Abortion is legal on request up to 8 weeks of pregnancy, and up to 16 weeks on broad grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 232.8,
    "cy": 475.1,
    "area": 185
  },
  {
    "name": "Haiti",
    "shortName": "Haiti",
    "whoRegion": "Region of the Americas",
    "level": 10,
    "summary": "Abortion is prohibited under the Penal Code with no explicit statutory exceptions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 184.5,
    "cy": 409.5,
    "area": 18
  },
  {
    "name": "Honduras",
    "shortName": "Honduras",
    "whoRegion": "Region of the Americas",
    "level": 10,
    "summary": "Abortion is constitutionally and criminally prohibited under all circumstances with no exceptions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 129.8,
    "cy": 427.8,
    "area": 89
  },
  {
    "name": "Hungary",
    "shortName": "Hungary",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy with counseling requirements.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 518.2,
    "cy": 288.9,
    "area": 52
  },
  {
    "name": "Iceland",
    "shortName": "Iceland",
    "whoRegion": "European Region",
    "level": 2,
    "summary": "Abortion is available on request up to 22 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 413.3,
    "cy": 204.2,
    "area": 147
  },
  {
    "name": "India",
    "shortName": "India",
    "whoRegion": "South-East Asia Region",
    "level": 5,
    "summary": "Abortion is permitted up to 20 weeks on broad grounds (and up to 24 weeks for specific categories), though subject to medical approval and gestational rules.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (Up to 20 to 24 weeks)"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks+)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 20 weeks, incl. contraceptive failure)"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited (Requires medical grounds)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 752.0,
    "cy": 398.0,
    "area": 3795
  },
  {
    "name": "Indonesia",
    "shortName": "Indonesia",
    "whoRegion": "Western Pacific Region",
    "level": 7,
    "summary": "Abortion is permitted for medical emergencies threatening life and in cases of rape (up to 14 weeks under recent Health Law updates).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 14 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe genetic defect)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 894.0,
    "cy": 502.0,
    "area": 617
  },
  {
    "name": "Iran (Islamic Republic of)",
    "shortName": "Iran",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 8,
    "summary": "Abortion is heavily restricted, permitted only to save the pregnant woman's life or for specific severe fetal conditions before 4 months with formal approval.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Up to 19 weeks with panel approval)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 658.0,
    "cy": 347.0,
    "area": 2212
  },
  {
    "name": "Iraq",
    "shortName": "Iraq",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is prohibited except for strict medical necessity to save life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 619.0,
    "cy": 345.0,
    "area": 607
  },
  {
    "name": "Ireland",
    "shortName": "Ireland",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy, and later for serious risks to life or health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 437.2,
    "cy": 252.8,
    "area": 102
  },
  {
    "name": "Israel",
    "shortName": "Israel",
    "whoRegion": "European Region",
    "level": 6,
    "summary": "Abortion is permitted with hospital committee approval on health, age, non-marital, rape/incest, or fetal grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 588.5,
    "cy": 351.5,
    "area": 18
  },
  {
    "name": "Italy",
    "shortName": "Italy",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request during the first 90 days (12.8 weeks) of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 502.0,
    "cy": 295.0,
    "area": 292
  },
  {
    "name": "Jamaica",
    "shortName": "Jamaica",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion remains restricted under the Offences Against the Person Act, permitted under common law to preserve life and physical/mental health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 167.0,
    "cy": 412.5,
    "area": 18
  },
  {
    "name": "Japan",
    "shortName": "Japan",
    "whoRegion": "Western Pacific Region",
    "level": 5,
    "summary": "Abortion is permitted up to 22 weeks on physical health, economic, or rape grounds under the Maternal Health Protection Act.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Covered under maternal health/economic grounds"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 955.0,
    "cy": 332.0,
    "area": 279
  },
  {
    "name": "Jordan",
    "shortName": "Jordan",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted to save the woman's life or protect her health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 594.1,
    "cy": 352.7,
    "area": 92
  },
  {
    "name": "Kazakhstan",
    "shortName": "Kazakhstan",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy, and up to 22 weeks on social grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 690.0,
    "cy": 275.0,
    "area": 4353
  },
  {
    "name": "Kenya",
    "shortName": "Kenya",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Under the Constitution, abortion is not permitted unless, in the opinion of a trained health professional, there is need for emergency treatment, or the life or health of the mother is in danger.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Under health/court rulings)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 602.0,
    "cy": 493.0,
    "area": 690
  },
  {
    "name": "Kiribati",
    "shortName": "Kiribati",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1015.0,
    "cy": 495.0,
    "area": 18
  },
  {
    "name": "Kuwait",
    "shortName": "Kuwait",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted to save the woman's life, protect against grave health harm, or for severe untreatable fetal malformation.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 637.5,
    "cy": 362.5,
    "area": 18
  },
  {
    "name": "Kyrgyzstan",
    "shortName": "Kyrgyzstan",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 724.0,
    "cy": 305.0,
    "area": 213
  },
  {
    "name": "Lao People's Democratic Republic",
    "shortName": "Laos",
    "whoRegion": "Western Pacific Region",
    "level": 8,
    "summary": "Abortion is restricted to saving the woman's life or specific medical indications.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Narrow exception)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 845.5,
    "cy": 406.2,
    "area": 192
  },
  {
    "name": "Latvia",
    "shortName": "Latvia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 545.2,
    "cy": 237.8,
    "area": 50
  },
  {
    "name": "Lebanon",
    "shortName": "Lebanon",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is prohibited except when strictly necessary to save the pregnant woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 590.5,
    "cy": 340.5,
    "area": 18
  },
  {
    "name": "Lesotho",
    "shortName": "Lesotho",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted to preserve life or health, in cases of rape or incest, or severe fetal impairment.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 563.0,
    "cy": 632.2,
    "area": 25
  },
  {
    "name": "Liberia",
    "shortName": "Liberia",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted to preserve physical or mental health, in cases of rape/incest, or fetal impairment.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 421.9,
    "cy": 467.2,
    "area": 72
  },
  {
    "name": "Libya",
    "shortName": "Libya",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 525.0,
    "cy": 372.0,
    "area": 2211
  },
  {
    "name": "Lithuania",
    "shortName": "Lithuania",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 541.1,
    "cy": 244.0,
    "area": 79
  },
  {
    "name": "Luxembourg",
    "shortName": "Luxembourg",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks after conception (14 weeks LMP).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 483.5,
    "cy": 270.5,
    "area": 18
  },
  {
    "name": "Madagascar",
    "shortName": "Madagascar",
    "whoRegion": "African Region",
    "level": 10,
    "summary": "Abortion is prohibited under all circumstances with no explicit statutory exceptions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 633.0,
    "cy": 585.0,
    "area": 750
  },
  {
    "name": "Malawi",
    "shortName": "Malawi",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion is permitted strictly to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 588.5,
    "cy": 555.9,
    "area": 113
  },
  {
    "name": "Malaysia",
    "shortName": "Malaysia",
    "whoRegion": "Western Pacific Region",
    "level": 7,
    "summary": "Abortion is permitted if a registered medical practitioner judges in good faith that continuing the pregnancy risks the woman's life or physical/mental health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 896.0,
    "cy": 479.0,
    "area": 206
  },
  {
    "name": "Maldives",
    "shortName": "Maldives",
    "whoRegion": "South-East Asia Region",
    "level": 7,
    "summary": "Abortion is permitted to save the mother's life, for certain severe fetal defects, or in cases of rape/incest within 120 days.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 735.0,
    "cy": 478.0,
    "area": 18
  },
  {
    "name": "Mali",
    "shortName": "Mali",
    "whoRegion": "African Region",
    "level": 8,
    "summary": "Abortion is permitted only to save the pregnant woman's life or when pregnancy results from rape or incest.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 448.0,
    "cy": 416.0,
    "area": 1661
  },
  {
    "name": "Malta",
    "shortName": "Malta",
    "whoRegion": "European Region",
    "level": 10,
    "summary": "Abortion is prohibited except under narrow 2023 life-saving medical intervention rules when the woman's life is at immediate risk.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Strictly only immediate life risk since 2023)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 508.0,
    "cy": 326.0,
    "area": 18
  },
  {
    "name": "Marshall Islands",
    "shortName": "Marshall Islands",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is permitted strictly to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1012.0,
    "cy": 455.0,
    "area": 18
  },
  {
    "name": "Mauritania",
    "shortName": "Mauritania",
    "whoRegion": "African Region",
    "level": 10,
    "summary": "Abortion is prohibited under the Penal Code except narrow therapeutic necessity to save life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 418.0,
    "cy": 404.0,
    "area": 1241
  },
  {
    "name": "Mauritius",
    "shortName": "Mauritius",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted to save life, preserve physical/mental health, in cases of rape/incest, or for girls under 18.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 662.0,
    "cy": 595.0,
    "area": 18
  },
  {
    "name": "Mexico",
    "shortName": "Mexico",
    "whoRegion": "Region of the Americas",
    "level": 3,
    "summary": "Abortion has been decriminalized at the federal level by the Supreme Court and is available on request in the first trimester (12 weeks) across the majority of Mexican states.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (All states)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Most states)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (In many states)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (12 wks in majority of states)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [
      {
        "name": "Aguascalientes",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Baja California",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Baja California Sur",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Campeche",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Chiapas",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Chihuahua",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Coahuila",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Colima",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Durango",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Guanajuato",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Guerrero",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Hidalgo",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Jalisco",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Mexico City",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Mexico State",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Michoac\u00e1n",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Morelos",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Nayarit",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Nuevo Le\u00f3n",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Oaxaca",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Puebla",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Quer\u00e9taro",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Quintana Roo",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "San Luis Potos\u00ed",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Sinaloa",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Sonora",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Tabasco",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Tamaulipas",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Tlaxcala",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Veracruz",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Yucat\u00e1n",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Zacatecas",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "Yes",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      }
    ],
    "hasPolygon": true,
    "cx": 82.0,
    "cy": 392.0,
    "area": 2484
  },
  {
    "name": "Micronesia (Federated States of)",
    "shortName": "Micronesia",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is restricted to saving the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 995.0,
    "cy": 468.0,
    "area": 18
  },
  {
    "name": "Monaco",
    "shortName": "Monaco",
    "whoRegion": "European Region",
    "level": 7,
    "summary": "Abortion is permitted to save the woman's life, in cases of rape, or severe fetal affection.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 486.0,
    "cy": 293.0,
    "area": 18
  },
  {
    "name": "Mongolia",
    "shortName": "Mongolia",
    "whoRegion": "Western Pacific Region",
    "level": 3,
    "summary": "Abortion is legal on request during the first 12 weeks (3 months) of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 812.0,
    "cy": 282.0,
    "area": 2589
  },
  {
    "name": "Montenegro",
    "shortName": "Montenegro",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 10 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 531.5,
    "cy": 301.5,
    "area": 18
  },
  {
    "name": "Morocco",
    "shortName": "Morocco",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted when necessary to safeguard the woman's health or life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 436.0,
    "cy": 350.0,
    "area": 526
  },
  {
    "name": "Mozambique",
    "shortName": "Mozambique",
    "whoRegion": "African Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy (16 weeks in cases of rape).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 592.0,
    "cy": 575.0,
    "area": 824
  },
  {
    "name": "Myanmar",
    "shortName": "Myanmar",
    "whoRegion": "South-East Asia Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only in good faith to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 820.0,
    "cy": 398.0,
    "area": 780
  },
  {
    "name": "Namibia",
    "shortName": "Namibia",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to save life, preserve physical or mental health, or in cases of rape, incest, or severe fetal abnormality.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 522.0,
    "cy": 597.0,
    "area": 995
  },
  {
    "name": "Naoero",
    "shortName": "Naoero",
    "whoRegion": "Western Pacific Region",
    "level": 7,
    "summary": "Abortion is permitted to preserve the life or physical and mental health of the woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1008.0,
    "cy": 498.0,
    "area": 18
  },
  {
    "name": "Nepal",
    "shortName": "Nepal",
    "whoRegion": "South-East Asia Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy (and up to 28 weeks in cases of rape or risk to life/health).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 769.7,
    "cy": 366.5,
    "area": 187
  },
  {
    "name": "Netherlands",
    "shortName": "Netherlands",
    "whoRegion": "European Region",
    "level": 2,
    "summary": "Abortion is available on request through the first 24 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 481.5,
    "cy": 258.9,
    "area": 41
  },
  {
    "name": "New Zealand",
    "shortName": "New Zealand",
    "whoRegion": "Western Pacific Region",
    "level": 2,
    "summary": "Abortion is decriminalized and available on request up to 20 weeks of pregnancy, and later with clinical consultation.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 20 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 1019.4,
    "cy": 704.6,
    "area": 36
  },
  {
    "name": "Nicaragua",
    "shortName": "Nicaragua",
    "whoRegion": "Region of the Americas",
    "level": 10,
    "summary": "Abortion is banned in all circumstances with no exceptions for health, life, or rape.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 134.5,
    "cy": 435.8,
    "area": 105
  },
  {
    "name": "Niger",
    "shortName": "Niger",
    "whoRegion": "African Region",
    "level": 8,
    "summary": "Abortion is permitted only when the woman's life or health is threatened or in cases of fetal non-viability.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 495.0,
    "cy": 415.0,
    "area": 1453
  },
  {
    "name": "Nigeria",
    "shortName": "Nigeria",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman (governed by the Criminal Code in Southern Nigeria and Penal Code in Northern Nigeria).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [
      {
        "name": "Northern Nigeria",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Southern Nigeria",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      }
    ],
    "hasPolygon": true,
    "cx": 488.0,
    "cy": 451.0,
    "area": 1170
  },
  {
    "name": "Niue",
    "shortName": "Niue",
    "whoRegion": "Western Pacific Region",
    "level": 7,
    "summary": "Abortion is permitted to preserve the woman's life or physical/mental health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1018.0,
    "cy": 598.0,
    "area": 18
  },
  {
    "name": "North Macedonia",
    "shortName": "North Macedonia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 540.5,
    "cy": 303.5,
    "area": 18
  },
  {
    "name": "Norway",
    "shortName": "Norway",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy (and through tribunal review up to 18 to 22 weeks).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 500.0,
    "cy": 211.0,
    "area": 439
  },
  {
    "name": "Oman",
    "shortName": "Oman",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is permitted only to save the pregnant woman's life or for fatal fetal conditions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 670.0,
    "cy": 401.0,
    "area": 331
  },
  {
    "name": "Pakistan",
    "shortName": "Pakistan",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted before organs are formed to save the woman's life or provide necessary treatment (Isqat-i-Haml).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (Necessary treatment early in pregnancy)"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 714.0,
    "cy": 358.0,
    "area": 1159
  },
  {
    "name": "Palau",
    "shortName": "Palau",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 948.0,
    "cy": 462.0,
    "area": 18
  },
  {
    "name": "Panama",
    "shortName": "Panama",
    "whoRegion": "Region of the Americas",
    "level": 8,
    "summary": "Abortion is permitted only to save the woman's life, in cases of rape (within the first 2 months), or serious fetal causes.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 8 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 147.1,
    "cy": 456.7,
    "area": 34
  },
  {
    "name": "Papua New Guinea",
    "shortName": "Papua New Guinea",
    "whoRegion": "Western Pacific Region",
    "level": 8,
    "summary": "Abortion is heavily restricted under criminal law, permitted only to preserve the mother's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Narrow exception)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 998.0,
    "cy": 521.0,
    "area": 864
  },
  {
    "name": "Paraguay",
    "shortName": "Paraguay",
    "whoRegion": "Region of the Americas",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 241.0,
    "cy": 602.0,
    "area": 485
  },
  {
    "name": "Peru",
    "shortName": "Peru",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Therapeutic abortion is permitted up to 22 weeks when the only way to save the life of the pregnant woman or avoid serious and permanent damage to her health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 172.0,
    "cy": 542.0,
    "area": 1651
  },
  {
    "name": "Philippines",
    "shortName": "Philippines",
    "whoRegion": "Western Pacific Region",
    "level": 10,
    "summary": "Abortion is criminalized under all circumstances, with no explicit legal exceptions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 916.0,
    "cy": 421.0,
    "area": 87
  },
  {
    "name": "Poland",
    "shortName": "Poland",
    "whoRegion": "European Region",
    "level": 8,
    "summary": "Abortion is heavily restricted, permitted primarily when the pregnancy threatens the pregnant person's life or health or results from a criminal act such as rape or incest.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited (Struck down in 2020)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 527.0,
    "cy": 260.0,
    "area": 523
  },
  {
    "name": "Portugal",
    "shortName": "Portugal",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 10 weeks of pregnancy, and up to 16 to 24 weeks for specific grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 432.0,
    "cy": 312.8,
    "area": 71
  },
  {
    "name": "Qatar",
    "shortName": "Qatar",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted to save the woman's life or in cases of severe untreatable fetal impairment.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 655.5,
    "cy": 381.5,
    "area": 18
  },
  {
    "name": "Republic of Korea",
    "shortName": "South Korea",
    "whoRegion": "Western Pacific Region",
    "level": 3,
    "summary": "Abortion was decriminalized by the Constitutional Court (2019 ruling took effect 2021), removing criminal penalties in early pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 918.8,
    "cy": 329.3,
    "area": 115
  },
  {
    "name": "Republic of Moldova",
    "shortName": "Moldova",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 559.0,
    "cy": 279.5,
    "area": 35
  },
  {
    "name": "Romania",
    "shortName": "Romania",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 14 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 546.8,
    "cy": 285.9,
    "area": 352
  },
  {
    "name": "Russian Federation",
    "shortName": "Russia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy, up to 22 weeks in cases of rape, and at any stage for medical necessity.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 740.0,
    "cy": 222.0,
    "area": 33026
  },
  {
    "name": "Rwanda",
    "shortName": "Rwanda",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted in cases of rape, forced marriage, incest, severe fetal condition, or risk to the pregnant person's life or health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 584.0,
    "cy": 500.7,
    "area": 58
  },
  {
    "name": "Saint Kitts and Nevis",
    "shortName": "St. Kitts & Nevis",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted to preserve life and health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 211.0,
    "cy": 413.0,
    "area": 18
  },
  {
    "name": "Saint Lucia",
    "shortName": "Saint Lucia",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted to preserve the woman's life or physical/mental health, or in cases of rape or incest.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 218.0,
    "cy": 429.0,
    "area": 18
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "shortName": "St. Vincent",
    "whoRegion": "Region of the Americas",
    "level": 4,
    "summary": "Abortion is permitted on physical, mental, and socio-economic grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 216.5,
    "cy": 434.0,
    "area": 18
  },
  {
    "name": "Samoa",
    "shortName": "Samoa",
    "whoRegion": "Western Pacific Region",
    "level": 7,
    "summary": "Abortion is permitted to preserve the woman's life or physical/mental health (up to 20 weeks).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1019.0,
    "cy": 565.0,
    "area": 18
  },
  {
    "name": "San Marino",
    "shortName": "San Marino",
    "whoRegion": "European Region",
    "level": 4,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy following the 2021 referendum.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 504.5,
    "cy": 291.5,
    "area": 18
  },
  {
    "name": "Sao Tome and Principe",
    "shortName": "Sao Tome",
    "whoRegion": "African Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 488.0,
    "cy": 496.0,
    "area": 18
  },
  {
    "name": "Saudi Arabia",
    "shortName": "Saudi Arabia",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted to save the woman's life or protect against grave damage to health with medical committee approval.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 625.0,
    "cy": 387.0,
    "area": 2543
  },
  {
    "name": "Senegal",
    "shortName": "Senegal",
    "whoRegion": "African Region",
    "level": 10,
    "summary": "Abortion is prohibited in the Penal Code (with narrow medical ethics provision only when three physicians certify it is the sole way to save the woman's life).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": false,
        "detail": "Prohibited (Total Ban)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 403.2,
    "cy": 428.7,
    "area": 179
  },
  {
    "name": "Serbia",
    "shortName": "Serbia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 10 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 532.6,
    "cy": 295.1,
    "area": 109
  },
  {
    "name": "Seychelles",
    "shortName": "Seychelles",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to preserve physical or mental health, in cases of rape/incest, or severe fetal impairment.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 654.0,
    "cy": 512.0,
    "area": 18
  },
  {
    "name": "Sierra Leone",
    "shortName": "Sierra Leone",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion remains restricted under colonial-era law to saving the woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 413.2,
    "cy": 455.7,
    "area": 57
  },
  {
    "name": "Singapore",
    "shortName": "Singapore",
    "whoRegion": "Western Pacific Region",
    "level": 2,
    "summary": "Abortion is available on request up to 24 weeks of pregnancy (and later to save the pregnant woman's life).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 858.0,
    "cy": 484.5,
    "area": 18
  },
  {
    "name": "Slovakia",
    "shortName": "Slovakia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 526.7,
    "cy": 280.5,
    "area": 112
  },
  {
    "name": "Slovenia",
    "shortName": "Slovenia",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 10 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 513.5,
    "cy": 287.5,
    "area": 18
  },
  {
    "name": "Solomon Islands",
    "shortName": "Solomon Islands",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1010.0,
    "cy": 535.0,
    "area": 18
  },
  {
    "name": "Somalia",
    "shortName": "Somalia",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only in cases of necessity to save the pregnant woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 633.0,
    "cy": 469.0,
    "area": 713
  },
  {
    "name": "South Africa",
    "shortName": "South Africa",
    "whoRegion": "African Region",
    "level": 3,
    "summary": "Abortion is available on request up to 12 weeks of pregnancy, and up to 20 weeks for physical/mental health, socio-economic reasons, rape, or fetal conditions.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (Up to 20 weeks)"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 20 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 20 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 550.0,
    "cy": 632.0,
    "area": 1620
  },
  {
    "name": "South Sudan",
    "shortName": "South Sudan",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion is permitted strictly to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "Yes",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 574.0,
    "cy": 462.0,
    "area": 18
  },
  {
    "name": "Spain",
    "shortName": "Spain",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is available on request up to 14 weeks of pregnancy, and up to 22 weeks for health or fetal risks.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks+)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks)"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 14 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Up to 22 weeks+)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 14 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 14 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 448.0,
    "cy": 311.0,
    "area": 672
  },
  {
    "name": "Sri Lanka",
    "shortName": "Sri Lanka",
    "whoRegion": "South-East Asia Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only in good faith to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 766.7,
    "cy": 461.3,
    "area": 46
  },
  {
    "name": "Sudan",
    "shortName": "Sudan",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 8,
    "summary": "Abortion is permitted only to save the pregnant woman's life or in cases of rape (within 90 days) or if the fetus has died in the womb.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 90 days)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 572.0,
    "cy": 424.0,
    "area": 3342
  },
  {
    "name": "Suriname",
    "shortName": "Suriname",
    "whoRegion": "Region of the Americas",
    "level": 9,
    "summary": "Abortion is prohibited under the Penal Code except under medical necessity to save the woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 243.5,
    "cy": 476.1,
    "area": 137
  },
  {
    "name": "Sweden",
    "shortName": "Sweden",
    "whoRegion": "European Region",
    "level": 2,
    "summary": "Abortion is available on request up to 18 weeks of pregnancy, and later with National Board of Health approval.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 18 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 18 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 515.0,
    "cy": 214.0,
    "area": 740
  },
  {
    "name": "Switzerland",
    "shortName": "Switzerland",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy across all cantons.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [
      {
        "name": "Aargau",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Appenzell Ausserrhoden",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Appenzell Innerrhoden",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Basel-Landschaft",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Basel-Stadt",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Bern",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Fribourg",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "Yes",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Geneva",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Glarus",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Graub\u00fcnden",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Jura",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Lucerne",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Neuch\u00e2tel",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Nidwalden",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Obwalden",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Schaffhausen",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Schwyz",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Solothurn",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "St. Gallen",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Thurgau",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Ticino",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Uri",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Valais",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Vaud",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Zug",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Zurich",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      }
    ],
    "hasPolygon": true,
    "cx": 491.2,
    "cy": 281.5,
    "area": 57
  },
  {
    "name": "Syrian Arab Republic",
    "shortName": "Syria",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is prohibited except to save the pregnant woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 598.7,
    "cy": 335.4,
    "area": 210
  },
  {
    "name": "Tajikistan",
    "shortName": "Tajikistan",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 713.9,
    "cy": 319.6,
    "area": 161
  },
  {
    "name": "Thailand",
    "shortName": "Thailand",
    "whoRegion": "South-East Asia Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy, and up to 20 weeks with counseling.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 842.0,
    "cy": 421.0,
    "area": 450
  },
  {
    "name": "Timor-Leste",
    "shortName": "Timor-Leste",
    "whoRegion": "South-East Asia Region",
    "level": 8,
    "summary": "Abortion is permitted only when necessary to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Narrow exception)"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 926.0,
    "cy": 524.0,
    "area": 18
  },
  {
    "name": "Togo",
    "shortName": "Togo",
    "whoRegion": "African Region",
    "level": 6,
    "summary": "Abortion is permitted to save life or health, in cases of rape or incest, or severe fetal impairment.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 461.0,
    "cy": 455.3,
    "area": 36
  },
  {
    "name": "Tonga",
    "shortName": "Tonga",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1016.0,
    "cy": 592.0,
    "area": 18
  },
  {
    "name": "Trinidad and Tobago",
    "shortName": "Trinidad & Tobago",
    "whoRegion": "Region of the Americas",
    "level": 7,
    "summary": "Abortion is permitted to preserve the life as well as physical and mental health of the woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 216.0,
    "cy": 446.5,
    "area": 18
  },
  {
    "name": "Tunisia",
    "shortName": "Tunisia",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 3,
    "summary": "Abortion is legal on request during the first 3 months (12 weeks) of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 493.8,
    "cy": 338.8,
    "area": 161
  },
  {
    "name": "Turkmenistan",
    "shortName": "Turkmenistan",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 5 weeks of pregnancy and on broad grounds up to 12 weeks.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 673.0,
    "cy": 317.0,
    "area": 616
  },
  {
    "name": "Tuvalu",
    "shortName": "Tuvalu",
    "whoRegion": "Western Pacific Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1016.0,
    "cy": 548.0,
    "area": 18
  },
  {
    "name": "T\u00fcrkiye",
    "shortName": "T\u00fcrkiye",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 10 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 585.0,
    "cy": 317.0,
    "area": 1066
  },
  {
    "name": "Uganda",
    "shortName": "Uganda",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion is heavily restricted under the Penal Code, permitted strictly to save the pregnant woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 582.1,
    "cy": 488.2,
    "area": 196
  },
  {
    "name": "Ukraine",
    "shortName": "Ukraine",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy, and up to 22 weeks on medical and social grounds.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "Yes",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 568.0,
    "cy": 271.0,
    "area": 828
  },
  {
    "name": "United Arab Emirates",
    "shortName": "UAE",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 7,
    "summary": "Abortion is permitted to save the pregnant woman's life, for severe fetal malformation, or under recent decrees for specific emergencies.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "Yes",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 662.2,
    "cy": 386.4,
    "area": 56
  },
  {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "shortName": "United Kingdom",
    "whoRegion": "European Region",
    "level": 2,
    "summary": "Abortion is permitted up to 24 weeks on broad health and socio-economic grounds in England, Scotland, and Wales, and on request up to 12 weeks in Northern Ireland.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Under health/social grounds)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (No limit)"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 24 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Broad 24 wks (12 wks on request in N. Ireland)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "No",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [
      {
        "name": "England",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "Yes",
          "Case Law": "Yes",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Northern Ireland",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "No",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Scotland",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "Yes",
          "Case Law": "Yes",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Wales",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "Yes",
          "Case Law": "Yes",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "Yes",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "Yes"
        }
      },
      {
        "name": "Guernsey",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "Yes",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Isle of Man",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "Yes",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      },
      {
        "name": "Jersey",
        "flags": {
          "Reproductive Health Act": "No",
          "General Medical Health Act": "No",
          "Constitution": "No",
          "Criminal / Penal Code": "No",
          "Civil Code": "No",
          "Ministerial Order / Decree": "No",
          "Case Law": "No",
          "Health Regulation / Clinical Guidelines": "No",
          "EML / Registered List": "No",
          "Medical Ethics Code": "No",
          "Document Relating to Funding": "No",
          "Abortion Specific Law": "Yes",
          "Law on Medical Practitioners": "No",
          "Law on Health Care Services": "No",
          "Other": "No"
        }
      }
    ],
    "hasPolygon": true,
    "cx": 455.6,
    "cy": 250.2,
    "area": 251
  },
  {
    "name": "United Republic of Tanzania",
    "shortName": "Tanzania",
    "whoRegion": "African Region",
    "level": 9,
    "summary": "Abortion is permitted strictly to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 592.0,
    "cy": 526.0,
    "area": 1144
  },
  {
    "name": "United States of America",
    "shortName": "United States",
    "whoRegion": "Region of the Americas",
    "level": 4,
    "summary": "Abortion access is regulated state-by-state following the 2022 Supreme Court ruling: protected on request in many states (such as Massachusetts, California, and New York), while restricted or banned in others.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (All states)"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Varies by state"
      },
      "rape": {
        "permitted": true,
        "detail": "Varies by state"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Varies by state"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Varies by state"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Varies by state (Legal in most states)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "No",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 115.0,
    "cy": 322.0,
    "area": 12172
  },
  {
    "name": "Uruguay",
    "shortName": "Uruguay",
    "whoRegion": "Region of the Americas",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy (14 weeks in cases of rape), and later for health or fetal risks.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (Up to 14 weeks)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "Yes",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "Yes",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 254.6,
    "cy": 645.6,
    "area": 217
  },
  {
    "name": "Uzbekistan",
    "shortName": "Uzbekistan",
    "whoRegion": "European Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 12 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 681.0,
    "cy": 304.0,
    "area": 595
  },
  {
    "name": "Vanuatu",
    "shortName": "Vanuatu",
    "whoRegion": "Western Pacific Region",
    "level": 7,
    "summary": "Abortion is permitted for good medical reasons to preserve the woman's life and health.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": false,
    "cx": 1012.0,
    "cy": 562.0,
    "area": 18
  },
  {
    "name": "Venezuela (Bolivarian Republic of)",
    "shortName": "Venezuela",
    "whoRegion": "Region of the Americas",
    "level": 9,
    "summary": "Abortion is permitted strictly only when indispensable to save the life of the pregnant woman.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "Yes",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 206.0,
    "cy": 464.0,
    "area": 1130
  },
  {
    "name": "Viet Nam",
    "shortName": "Viet Nam",
    "whoRegion": "Western Pacific Region",
    "level": 3,
    "summary": "Abortion is legal on request up to 22 weeks of pregnancy.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": true,
        "detail": "Permitted (Up to 12 weeks)"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "Yes",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "Yes"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 866.0,
    "cy": 440.0,
    "area": 156
  },
  {
    "name": "Yemen",
    "shortName": "Yemen",
    "whoRegion": "Eastern Mediterranean Region",
    "level": 9,
    "summary": "Abortion is permitted strictly only to save the pregnant woman's life.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted (Only to save life)"
      },
      "riskToHealth": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "rape": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "fetalImpairment": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "Yes",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "Yes",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "No",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "No",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 640.0,
    "cy": 422.0,
    "area": 549
  },
  {
    "name": "Zambia",
    "shortName": "Zambia",
    "whoRegion": "African Region",
    "level": 5,
    "summary": "Abortion is permitted on broad health, mental health, and socio-economic grounds (requiring signatures of physicians where available).",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted"
      },
      "economicOrSocial": {
        "permitted": true,
        "detail": "Permitted"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "No",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 563.0,
    "cy": 557.0,
    "area": 910
  },
  {
    "name": "Zimbabwe",
    "shortName": "Zimbabwe",
    "whoRegion": "African Region",
    "level": 7,
    "summary": "Abortion is permitted only when pregnancy threatens life or permanent physical health, in cases of rape/incest, or severe fetal impairment.",
    "wikipediaGrounds": {
      "riskToLife": {
        "permitted": true,
        "detail": "Permitted"
      },
      "riskToHealth": {
        "permitted": true,
        "detail": "Permitted"
      },
      "rape": {
        "permitted": true,
        "detail": "Permitted (In most cases)"
      },
      "fetalImpairment": {
        "permitted": true,
        "detail": "Permitted (Severe cases)"
      },
      "economicOrSocial": {
        "permitted": false,
        "detail": "Prohibited"
      },
      "onRequest": {
        "permitted": false,
        "detail": "Prohibited"
      }
    },
    "flags": {
      "Reproductive Health Act": "No",
      "General Medical Health Act": "No",
      "Constitution": "No",
      "Criminal / Penal Code": "Yes",
      "Civil Code": "No",
      "Ministerial Order / Decree": "No",
      "Case Law": "Yes",
      "Health Regulation / Clinical Guidelines": "Yes",
      "EML / Registered List": "Yes",
      "Medical Ethics Code": "No",
      "Document Relating to Funding": "No",
      "Abortion Specific Law": "Yes",
      "Law on Medical Practitioners": "No",
      "Law on Health Care Services": "No",
      "Other": "No"
    },
    "subRegions": [],
    "hasPolygon": true,
    "cx": 571.0,
    "cy": 583.0,
    "area": 519
  }
];

export const ABORTION_MAP_SVG_POLYGONS = [
  {
    "id": 0,
    "country": "Russian Federation",
    "d": "M727,158L730,158L742,163L757,162L758,165L754,167L751,170L753,173L756,174L760,174L761,173L765,173L771,171L777,171L778,172L789,174L795,171L800,171L801,172L805,172L813,176L822,183L826,183L830,180L840,181L843,179L843,177L845,175L866,175L881,182L900,182L909,186L913,186L914,187L917,187L918,186L930,186L938,190L941,190L943,188L942,185L954,185L966,189L969,189L978,193L981,193L986,195L991,195L992,196L997,196L1002,198L1006,198L1009,200L1011,204L1011,205L1009,205L999,200L993,199L989,203L989,206L997,212L992,213L987,219L983,222L979,223L975,221L969,221L966,224L965,227L967,231L972,234L975,234L978,239L978,241L980,243L979,246L979,250L980,251L977,255L978,261L965,248L962,243L957,238L957,236L960,233L960,225L963,221L963,218L959,213L955,214L953,216L951,221L950,221L945,215L940,215L938,217L938,226L937,227L931,226L929,224L926,223L923,224L921,226L919,226L916,224L906,224L901,229L896,241L897,246L908,253L921,254L924,256L925,259L930,266L929,281L926,288L926,293L927,294L927,298L926,299L921,295L917,295L914,291L920,283L920,277L917,274L912,274L908,276L904,276L898,270L887,267L885,265L883,260L878,255L873,253L870,253L862,249L858,249L855,251L855,256L859,262L859,265L857,267L852,267L848,264L845,264L839,266L834,269L829,270L823,268L818,265L807,265L804,264L798,259L791,256L787,256L784,258L783,260L786,265L785,266L775,264L771,262L766,262L760,265L756,269L753,269L751,267L743,265L737,261L730,262L724,259L717,251L711,248L706,250L700,249L698,248L693,242L689,241L678,247L671,247L667,245L662,246L660,248L659,259L661,261L663,261L665,263L664,264L661,264L658,262L648,263L645,261L642,261L637,259L628,259L625,262L625,265L624,266L623,265L620,265L618,267L617,269L617,273L618,275L626,281L626,283L622,287L621,291L623,296L628,302L628,304L619,300L612,295L609,294L601,295L599,293L593,290L591,290L596,284L595,278L597,277L600,273L599,269L596,266L585,267L583,266L576,258L568,256L572,253L572,250L566,245L565,242L563,240L560,239L556,240L553,236L553,228L555,226L555,222L554,221L558,218L561,214L561,212L558,208L555,196L551,190L554,186L558,188L565,189L580,194L580,196L565,196L562,199L562,201L568,207L571,207L572,206L581,207L585,202L587,201L589,202L594,198L594,194L593,193L594,191L597,192L595,194L595,196L597,198L618,191L630,192L642,186L647,187L653,191L658,191L660,189L660,186L653,179L653,176L655,175L659,175L668,187L668,191L667,192L667,196L668,198L673,201L676,201L681,197L681,188L675,185L674,183L670,180L671,178L688,179L689,178L689,175L686,172L693,172L699,166L702,165L706,165L707,164L720,164L727,158Z",
    "cx": 763.3,
    "cy": 220.8,
    "area": 33026,
    "isPrimary": true
  },
  {
    "id": 1,
    "country": "Canada",
    "d": "M214,180L214,186L218,189L219,193L221,195L224,195L231,190L238,189L229,197L218,196L210,203L204,205L192,212L186,213L180,218L174,219L172,221L171,227L170,228L173,232L172,237L174,239L177,239L180,237L190,246L193,247L200,247L200,248L195,252L194,257L198,262L200,263L204,263L206,262L209,258L211,248L214,246L221,245L227,240L227,235L224,229L225,228L228,228L231,226L233,217L234,216L247,216L251,222L250,228L253,231L258,231L263,228L267,228L268,229L268,240L270,244L278,251L279,255L276,259L268,261L261,265L258,265L257,264L249,264L244,266L234,266L230,268L225,273L224,280L222,283L217,287L215,288L203,287L198,293L196,294L190,293L187,297L180,298L185,293L187,293L190,290L190,286L188,283L180,282L178,280L178,276L177,274L171,270L167,271L162,274L159,274L157,272L148,273L147,271L144,269L113,269L112,270L77,271L76,272L52,271L50,265L44,257L43,253L44,251L50,248L54,244L54,242L51,237L51,235L53,233L54,230L54,224L50,222L49,223L46,223L44,225L42,223L41,219L44,216L55,209L78,188L81,188L85,190L92,190L93,189L101,188L106,185L115,184L122,188L132,188L133,189L140,190L142,193L147,197L156,197L165,193L171,193L174,196L179,196L180,195L188,195L191,196L195,194L200,194L202,193L204,191L206,186L210,185L214,180Z",
    "cx": 147.3,
    "cy": 236.2,
    "area": 14779,
    "isPrimary": true
  },
  {
    "id": 2,
    "country": "China",
    "d": "M859,252L869,256L875,257L879,260L882,266L886,270L897,273L902,279L909,279L914,277L917,278L917,282L916,284L911,289L911,293L914,297L914,300L909,302L905,306L902,307L898,311L896,315L893,315L893,309L890,306L884,308L877,315L877,318L884,325L886,326L893,326L894,325L894,326L891,328L889,334L903,351L902,357L905,360L905,364L904,365L903,373L899,383L894,388L886,391L881,395L877,395L875,397L874,400L873,398L869,395L862,395L861,390L857,387L855,387L851,391L850,390L844,390L838,396L837,396L835,395L831,389L826,386L824,383L827,379L829,374L827,369L825,367L819,365L815,360L807,360L805,361L800,367L794,364L783,367L764,356L761,356L760,355L756,356L749,348L749,342L746,334L742,331L738,332L736,329L731,325L731,322L728,319L723,318L722,316L724,316L727,313L728,310L739,306L743,302L742,298L738,295L738,292L740,292L743,290L744,285L746,283L751,283L753,281L755,277L755,274L754,273L759,275L761,277L768,279L770,281L771,287L775,291L778,292L786,292L791,295L791,296L797,302L801,304L818,305L823,307L833,307L837,304L841,304L846,301L850,297L849,290L855,290L857,288L865,287L867,286L870,282L869,278L866,276L858,276L852,274L853,271L860,269L862,266L862,261L858,255L859,252Z",
    "cx": 830.3,
    "cy": 329.8,
    "area": 14390,
    "isPrimary": true
  },
  {
    "id": 3,
    "country": "United States of America",
    "d": "M120,272L143,272L146,276L153,276L155,275L155,276L153,276L149,280L149,283L151,285L155,285L160,283L166,283L163,284L158,289L157,292L152,299L152,302L155,306L157,306L162,301L167,293L170,291L172,291L173,292L173,295L168,301L168,305L169,307L172,309L179,309L184,307L190,301L190,297L198,297L204,290L207,290L208,291L216,291L220,289L226,282L228,283L228,289L222,292L217,293L213,297L212,303L210,305L207,305L206,304L203,305L192,318L188,318L186,320L184,331L180,336L173,340L167,342L162,346L158,353L158,360L160,365L160,376L157,377L155,376L155,364L154,361L151,358L147,358L144,355L141,354L134,354L131,355L128,359L126,360L122,360L121,359L110,359L101,365L97,369L95,374L94,374L91,371L91,363L90,360L87,357L83,357L80,361L77,363L75,361L75,354L70,348L64,348L54,353L50,351L40,343L32,343L29,339L25,337L25,324L22,316L23,314L28,310L29,307L29,300L41,287L45,279L45,274L45,275L48,277L50,276L51,274L58,274L59,275L84,275L85,274L119,273L120,272Z",
    "cx": 107.4,
    "cy": 316.5,
    "area": 12172,
    "isPrimary": true
  },
  {
    "id": 4,
    "country": "Brazil",
    "d": "M227,475L228,476L228,488L231,492L235,492L240,489L243,489L245,486L247,486L250,490L255,490L261,483L262,486L264,488L264,492L265,494L270,498L270,501L272,503L279,502L283,504L287,509L294,509L295,510L304,511L308,513L313,518L318,520L321,520L323,526L323,533L322,536L317,541L314,549L309,554L307,559L308,567L310,572L310,578L307,583L304,593L302,597L299,600L286,602L278,609L277,611L277,625L270,633L267,640L267,643L265,643L264,643L260,638L252,635L252,630L256,628L260,624L259,614L261,612L261,607L258,604L251,603L247,596L241,590L241,587L243,583L243,578L242,576L232,568L232,564L222,552L215,552L213,551L211,544L208,541L206,540L202,541L196,546L194,546L192,545L192,542L189,539L183,540L181,538L179,533L179,525L180,522L183,519L188,519L191,516L191,510L193,506L193,497L191,492L194,490L201,489L202,492L204,494L208,495L212,493L215,490L215,482L214,479L215,478L220,478L221,479L224,478L227,475Z",
    "cx": 256.5,
    "cy": 544.5,
    "area": 11511,
    "isPrimary": true
  },
  {
    "id": 5,
    "country": "Australia",
    "d": "M964,550L968,553L976,553L976,555L972,559L971,564L972,566L984,577L990,577L993,574L995,570L998,554L1001,550L1001,558L1003,561L1007,563L1007,574L1008,575L1008,579L1015,587L1016,589L1016,593L1020,598L1020,601L1023,606L1023,627L1020,631L1017,639L1009,646L1008,651L1000,658L999,660L999,664L998,666L996,667L989,668L984,671L982,670L965,671L964,670L964,662L963,661L963,656L962,654L960,651L955,651L953,653L952,651L952,647L947,642L940,638L933,638L930,639L919,645L914,646L904,652L891,651L881,655L879,655L877,653L878,651L884,646L885,643L883,638L883,627L881,622L881,618L884,613L884,606L887,602L890,595L891,594L897,594L905,590L913,589L918,585L922,575L926,576L928,574L929,570L938,562L940,562L945,567L949,567L951,565L954,559L954,557L956,555L961,555L963,553L964,550Z",
    "cx": 957.0,
    "cy": 613.0,
    "area": 11035,
    "isPrimary": true
  },
  {
    "id": 6,
    "country": "Denmark",
    "d": "M394,140L414,140L423,144L440,144L436,146L432,146L431,147L425,148L421,152L421,157L417,160L416,165L412,169L407,169L404,170L402,172L402,175L405,179L402,177L398,177L396,179L396,183L399,185L388,189L382,189L381,188L377,189L370,195L362,200L359,199L352,199L345,205L344,209L342,211L340,211L332,221L327,218L324,218L320,215L318,209L318,206L317,205L317,198L318,195L325,189L326,185L330,183L330,180L327,177L324,177L324,168L325,165L321,160L318,159L301,161L297,159L297,156L302,154L314,154L315,153L319,153L328,147L332,147L333,146L341,146L346,144L366,144L367,143L372,143L378,141L393,141L394,140Z",
    "cx": 362.5,
    "cy": 170.5,
    "area": 5326,
    "isPrimary": true
  },
  {
    "id": 7,
    "country": "Kazakhstan",
    "d": "M688,245L692,245L697,251L701,253L712,252L726,264L729,265L734,265L735,264L744,269L749,270L751,272L751,278L749,280L745,280L741,284L741,287L738,288L735,291L735,297L724,295L722,296L719,300L717,300L715,298L710,298L708,301L704,302L702,304L701,307L698,307L690,297L683,296L678,294L677,291L671,287L668,287L667,288L659,287L658,286L655,286L652,289L652,295L654,301L650,298L647,300L643,299L639,296L638,292L639,291L642,292L646,289L647,287L646,282L643,279L640,278L633,278L629,280L621,274L620,272L621,268L625,270L627,268L629,262L636,262L647,266L654,266L656,265L660,267L665,267L668,265L668,261L665,258L663,258L663,249L666,248L670,250L679,250L688,245Z",
    "cx": 690.0,
    "cy": 275.4,
    "area": 4353,
    "isPrimary": true
  },
  {
    "id": 8,
    "country": "Argentina",
    "d": "M211,597L217,602L219,602L220,599L223,598L225,601L225,603L228,606L233,608L238,608L242,610L241,620L244,624L246,625L250,625L256,618L257,620L257,623L255,625L252,626L249,629L248,632L246,632L242,635L242,638L246,646L246,653L247,655L250,657L253,662L253,669L251,671L241,671L239,673L239,682L233,682L231,684L231,686L236,690L236,692L234,697L235,699L231,702L230,705L231,709L237,713L237,716L233,723L233,729L234,730L231,732L228,732L227,731L226,727L221,719L221,716L218,709L219,703L220,702L219,697L216,695L214,695L214,689L209,685L208,682L208,663L210,659L210,652L206,648L203,643L203,629L204,628L204,613L207,611L210,607L209,599L211,597Z",
    "cx": 225.8,
    "cy": 654.2,
    "area": 3975,
    "isPrimary": true
  },
  {
    "id": 9,
    "country": "India",
    "d": "M741,335L744,337L745,343L746,344L746,350L748,353L754,358L755,364L758,369L762,371L768,372L772,375L778,377L785,377L789,382L789,387L788,388L789,393L783,398L778,407L768,415L763,420L761,424L760,447L759,449L754,455L753,455L751,451L748,445L747,440L740,429L740,422L734,411L734,408L735,407L735,396L732,393L730,393L724,398L722,397L721,392L717,388L717,387L721,387L723,386L725,384L726,381L725,378L720,373L720,370L726,368L734,359L736,355L735,350L730,343L729,340L730,339L739,339L741,337L741,335Z",
    "cx": 751.7,
    "cy": 392.3,
    "area": 3795,
    "isPrimary": true
  },
  {
    "id": 10,
    "country": "Algeria",
    "d": "M485,327L488,327L488,334L485,341L486,344L492,352L493,360L496,367L496,373L494,377L494,381L496,384L501,388L495,393L489,396L485,400L483,404L478,405L475,408L472,407L472,405L468,400L460,395L448,389L442,384L428,370L428,368L432,363L440,360L445,352L451,352L455,349L456,347L456,343L454,338L454,334L455,333L459,331L472,330L473,329L478,329L479,328L484,328L485,327Z",
    "cx": 468.4,
    "cy": 367.3,
    "area": 3448,
    "isPrimary": true
  },
  {
    "id": 11,
    "country": "Sudan",
    "d": "M593,391L595,393L596,396L596,405L597,408L602,413L602,415L596,420L595,431L589,439L587,449L584,453L584,459L586,462L593,468L594,473L588,474L585,477L582,478L575,475L568,474L563,470L561,466L550,455L549,453L549,447L544,438L544,432L550,423L550,414L551,413L551,409L550,407L553,404L554,397L575,397L576,396L579,396L580,397L589,397L592,394L593,391Z",
    "cx": 572.1,
    "cy": 432.3,
    "area": 3342,
    "isPrimary": true
  },
  {
    "id": 12,
    "country": "Democratic Republic of the Congo",
    "d": "M560,473L562,473L565,476L569,478L573,478L575,484L575,489L571,492L571,498L567,503L568,516L571,524L572,531L569,532L566,535L564,540L564,546L569,554L567,554L563,548L557,548L551,544L543,544L542,543L542,536L543,534L543,531L540,527L534,527L530,530L526,530L524,524L521,521L518,521L517,522L507,522L506,520L507,519L515,519L519,516L521,508L528,499L528,496L529,495L529,479L530,476L532,474L534,474L539,478L543,479L552,474L559,474L560,473Z",
    "cx": 548.3,
    "cy": 508.3,
    "area": 2995,
    "isPrimary": true
  },
  {
    "id": 13,
    "country": "Mongolia",
    "d": "M787,260L793,260L797,262L803,267L806,268L817,268L827,273L833,273L843,268L849,268L850,269L849,271L849,275L852,278L855,278L856,279L864,279L866,280L866,283L858,284L855,285L854,287L847,287L845,290L845,292L847,295L846,297L842,300L840,300L839,301L836,301L832,304L825,304L819,302L803,301L798,299L791,291L787,289L776,288L774,285L773,280L769,276L765,275L758,271L767,265L773,266L781,269L786,269L789,266L787,260Z",
    "cx": 812.2,
    "cy": 282.3,
    "area": 2589,
    "isPrimary": true
  },
  {
    "id": 14,
    "country": "Saudi Arabia",
    "d": "M602,350L605,350L611,353L618,360L618,361L623,365L626,366L635,365L637,369L642,374L646,375L646,381L651,387L652,391L655,393L661,393L666,397L666,399L663,403L658,404L654,406L653,408L646,407L642,408L637,415L634,415L625,412L622,412L620,414L618,410L613,405L610,404L608,402L607,393L603,385L601,383L601,381L596,371L592,366L588,364L588,363L592,363L594,362L599,357L600,353L602,350Z",
    "cx": 625.2,
    "cy": 385.2,
    "area": 2543,
    "isPrimary": true
  },
  {
    "id": 15,
    "country": "Mexico",
    "d": "M35,346L39,346L49,354L53,356L59,355L65,351L69,351L72,355L72,362L75,366L79,366L83,361L85,360L87,361L88,372L89,374L94,378L94,381L90,388L90,394L93,400L94,408L97,412L105,415L111,414L115,412L119,408L120,402L122,400L124,399L129,399L126,408L120,413L115,413L113,415L113,420L112,421L108,423L106,422L101,420L92,422L91,421L81,419L77,417L71,412L68,411L64,407L64,403L66,398L61,387L53,377L51,369L49,367L47,362L47,354L46,352L43,350L38,350L35,353L35,357L38,361L38,365L43,375L43,380L46,387L44,385L42,377L39,374L36,373L37,362L34,359L35,357L35,350L34,347L35,346Z",
    "cx": 76.1,
    "cy": 386.5,
    "area": 2484,
    "isPrimary": true
  },
  {
    "id": 16,
    "country": "Iran (Islamic Republic of)",
    "d": "M629,316L630,316L632,319L632,324L634,326L640,328L645,332L651,332L655,328L656,325L659,323L667,323L670,324L678,330L678,333L675,337L675,340L684,355L684,363L691,370L691,373L688,377L686,377L677,377L675,375L675,372L671,369L665,372L658,370L652,367L648,361L643,356L637,354L637,351L633,347L629,345L626,341L629,334L628,330L622,325L618,320L619,317L624,320L626,320L629,316Z",
    "cx": 657.8,
    "cy": 347.0,
    "area": 2212,
    "isPrimary": true
  },
  {
    "id": 17,
    "country": "Libya",
    "d": "M538,346L549,352L549,381L550,382L550,393L551,394L549,404L545,403L542,400L530,394L523,389L516,389L514,390L509,390L504,387L497,380L500,371L499,369L499,365L496,358L497,355L500,352L501,348L502,347L505,347L506,348L510,348L512,349L515,353L517,354L521,354L526,358L530,359L533,357L535,352L535,348L538,346Z",
    "cx": 525.7,
    "cy": 372.4,
    "area": 2211,
    "isPrimary": true
  },
  {
    "id": 18,
    "country": "United States of America",
    "d": "M44,181L49,181L55,184L76,184L77,185L55,205L43,213L38,218L37,221L42,228L45,228L48,226L51,226L51,229L48,234L48,239L50,241L50,244L49,245L46,247L46,237L44,232L37,224L23,219L16,219L8,225L7,225L9,223L9,220L8,219L3,219L0,221L0,202L6,197L5,194L1,191L2,190L8,190L9,189L12,189L21,186L24,184L38,183L44,181Z",
    "cx": 32.8,
    "cy": 202.2,
    "area": 2209,
    "isPrimary": false
  },
  {
    "id": 19,
    "country": "Mali",
    "d": "M435,382L447,392L461,399L468,405L470,410L472,411L473,413L473,421L468,425L454,425L453,426L449,426L445,430L445,432L439,438L435,448L432,448L428,448L427,443L424,439L421,439L420,440L417,440L416,439L414,434L414,428L419,426L434,427L436,426L438,423L438,418L437,417L436,409L435,408L434,387L433,386L435,382Z",
    "cx": 444.5,
    "cy": 416.5,
    "area": 1661,
    "isPrimary": true
  },
  {
    "id": 20,
    "country": "Peru",
    "d": "M171,500L178,506L180,506L186,509L188,514L188,515L181,516L177,521L176,524L176,535L178,539L182,543L186,543L188,542L189,543L189,546L192,548L195,552L195,560L193,564L193,570L195,574L195,577L193,578L191,576L185,571L179,569L173,565L164,546L159,540L155,530L148,522L148,517L149,516L150,516L152,519L157,520L160,516L160,512L162,510L165,510L170,507L171,500Z",
    "cx": 174.2,
    "cy": 538.3,
    "area": 1651,
    "isPrimary": true
  },
  {
    "id": 21,
    "country": "South Africa",
    "d": "M566,600L574,600L575,602L575,606L576,607L576,610L571,617L572,620L576,623L576,626L572,632L564,640L562,644L555,650L548,651L547,652L541,652L536,654L530,654L528,652L528,648L527,638L521,627L527,629L530,629L534,625L534,622L535,621L534,613L535,613L535,617L538,621L543,620L546,614L549,614L551,616L555,615L566,600Z",
    "cx": 550.5,
    "cy": 629.6,
    "area": 1620,
    "isPrimary": true
  },
  {
    "id": 22,
    "country": "Chad",
    "d": "M517,392L521,392L527,395L532,399L539,402L545,406L548,410L547,412L547,421L542,428L541,431L541,439L543,443L541,444L540,448L538,450L534,450L532,451L530,454L529,455L529,458L523,458L522,459L519,459L515,455L515,453L518,450L518,445L516,442L516,438L511,432L511,430L512,427L519,420L520,417L520,405L519,404L519,401L516,398L516,393L517,392Z",
    "cx": 529.1,
    "cy": 425.6,
    "area": 1605,
    "isPrimary": true
  },
  {
    "id": 23,
    "country": "Angola",
    "d": "M520,524L522,530L526,534L529,534L535,530L538,530L540,533L539,534L539,540L538,541L539,545L543,548L546,547L548,548L547,551L540,557L540,560L539,561L539,568L543,575L530,575L526,575L525,574L506,574L504,573L504,567L505,564L511,553L510,537L509,536L509,532L508,531L507,525L519,525L520,524Z",
    "cx": 524.0,
    "cy": 552.3,
    "area": 1569,
    "isPrimary": true
  },
  {
    "id": 24,
    "country": "Niger",
    "d": "M502,391L505,391L508,393L512,393L513,394L512,395L513,399L516,402L516,408L517,409L516,419L511,423L509,426L508,431L506,431L501,434L492,435L481,429L476,429L472,432L470,438L468,438L468,436L466,434L464,434L461,432L460,429L463,428L469,428L473,426L475,424L477,419L476,417L476,411L479,408L483,408L485,407L490,399L493,398L502,391Z",
    "cx": 494.9,
    "cy": 415.6,
    "area": 1453,
    "isPrimary": true
  },
  {
    "id": 25,
    "country": "Ethiopia",
    "d": "M610,430L614,431L618,435L618,437L614,443L614,446L617,449L620,449L623,453L626,454L631,459L636,459L638,460L637,463L631,469L626,471L620,476L613,476L604,477L600,474L597,474L598,472L597,468L587,457L587,455L591,448L592,440L597,433L598,432L606,433L610,430Z",
    "cx": 609.2,
    "cy": 455.7,
    "area": 1442,
    "isPrimary": true
  },
  {
    "id": 26,
    "country": "Bolivia (Plurinational State of)",
    "d": "M204,544L207,544L209,550L212,554L222,556L224,561L228,564L229,566L229,570L238,576L240,580L239,584L237,582L233,581L227,585L223,589L222,591L222,595L220,595L217,598L213,594L209,594L207,596L206,599L205,599L203,586L201,581L198,578L198,573L196,568L197,562L199,558L199,554L197,549L204,544Z",
    "cx": 213.6,
    "cy": 572.4,
    "area": 1361,
    "isPrimary": true
  },
  {
    "id": 27,
    "country": "Colombia",
    "d": "M177,445L179,445L176,451L176,455L179,461L185,466L190,468L195,468L197,470L196,476L195,477L196,480L199,483L199,486L193,487L188,491L188,495L190,499L190,505L189,507L188,507L186,505L176,501L170,493L162,493L157,488L162,483L164,477L164,467L163,466L163,463L170,454L171,448L177,445Z",
    "cx": 178.0,
    "cy": 478.6,
    "area": 1338,
    "isPrimary": true
  },
  {
    "id": 28,
    "country": "Egypt",
    "d": "M552,353L560,356L566,356L571,353L574,353L579,356L583,356L584,357L585,362L580,361L579,362L579,366L585,377L586,382L590,388L590,390L588,393L587,394L582,394L581,393L556,394L554,393L554,389L553,388L552,353Z",
    "cx": 568.8,
    "cy": 374.8,
    "area": 1298,
    "isPrimary": true
  },
  {
    "id": 29,
    "country": "Mauritania",
    "d": "M427,375L429,375L433,379L430,383L430,389L431,390L431,404L432,405L432,411L435,419L435,422L433,424L417,423L410,426L404,418L402,417L398,417L399,414L398,400L407,400L409,399L410,398L410,394L415,388L415,380L416,379L423,379L425,378L427,375Z",
    "cx": 418.4,
    "cy": 404.0,
    "area": 1241,
    "isPrimary": true
  },
  {
    "id": 30,
    "country": "Nigeria",
    "d": "M477,432L480,432L487,437L490,438L500,438L507,434L509,434L512,437L512,442L507,447L504,454L503,460L500,463L496,463L492,466L490,473L486,472L483,474L481,474L477,468L471,465L469,458L474,451L473,440L474,439L474,436L477,432Z",
    "cx": 488.6,
    "cy": 451.4,
    "area": 1170,
    "isPrimary": true
  },
  {
    "id": 31,
    "country": "Pakistan",
    "d": "M728,328L731,328L735,334L738,336L734,336L732,335L729,336L726,339L726,342L732,351L732,356L723,366L720,366L716,370L716,373L722,379L722,382L720,384L717,384L715,383L711,378L707,377L703,377L698,379L692,379L691,378L694,374L694,369L688,363L688,362L690,361L693,361L697,363L702,362L704,360L706,355L716,343L718,338L718,333L719,331L728,328Z",
    "cx": 714.5,
    "cy": 358.1,
    "area": 1159,
    "isPrimary": true
  },
  {
    "id": 32,
    "country": "United Republic of Tanzania",
    "d": "M578,502L578,505L580,508L584,509L586,508L589,504L592,507L597,509L603,515L607,517L608,520L608,535L610,539L610,546L608,548L605,548L602,548L601,547L592,547L592,541L590,538L587,537L584,539L575,531L573,518L576,516L578,512L578,502Z",
    "cx": 592.6,
    "cy": 526.5,
    "area": 1144,
    "isPrimary": true
  },
  {
    "id": 33,
    "country": "Venezuela (Bolivarian Republic of)",
    "d": "M190,445L193,445L200,449L203,449L204,450L218,449L223,455L228,459L224,465L224,474L223,475L213,475L211,477L212,488L211,490L206,491L202,485L202,482L199,479L199,475L200,474L200,469L199,467L196,465L191,465L186,463L180,457L180,449L181,450L181,453L183,455L186,456L188,454L188,447L190,445Z",
    "cx": 205.8,
    "cy": 463.7,
    "area": 1130,
    "isPrimary": true
  },
  {
    "id": 34,
    "country": "T\u00fcrkiye",
    "d": "M580,305L581,306L584,306L593,311L599,311L600,310L603,310L607,307L611,307L615,312L616,314L615,316L615,322L616,323L615,324L608,324L604,326L597,326L596,325L593,326L590,327L587,325L585,325L579,328L576,328L575,327L569,327L567,328L564,326L561,326L557,321L555,317L555,314L556,313L561,310L562,311L565,311L568,309L573,309L576,306L579,306L580,305Z",
    "cx": 585.6,
    "cy": 317.3,
    "area": 1066,
    "isPrimary": true
  },
  {
    "id": 35,
    "country": "Namibia",
    "d": "M504,577L521,577L522,578L539,579L538,579L536,582L536,590L531,600L531,613L531,623L530,625L528,626L524,624L520,624L519,620L514,610L515,608L515,599L514,596L508,585L506,583L504,577Z",
    "cx": 522.6,
    "cy": 596.9,
    "area": 995,
    "isPrimary": true
  },
  {
    "id": 36,
    "country": "Zambia",
    "d": "M573,534L583,542L583,550L582,551L582,557L581,559L577,560L572,565L570,565L558,576L553,576L552,574L546,574L543,569L543,566L542,565L543,563L543,558L546,557L549,554L551,548L556,551L561,551L567,558L570,558L572,556L572,552L568,547L567,542L568,541L568,538L573,534Z",
    "cx": 563.1,
    "cy": 557.3,
    "area": 910,
    "isPrimary": true
  },
  {
    "id": 37,
    "country": "Afghanistan",
    "d": "M714,321L715,323L715,328L716,329L714,340L710,346L705,351L701,359L696,359L692,357L690,357L687,359L687,354L678,339L679,336L681,334L685,336L688,336L692,333L692,330L696,326L698,326L704,329L714,321Z",
    "cx": 698.2,
    "cy": 341.0,
    "area": 867,
    "isPrimary": true
  },
  {
    "id": 38,
    "country": "Papua New Guinea",
    "d": "M986,505L990,506L996,510L1005,511L1009,513L1011,515L1012,518L1017,523L1020,524L1022,526L1021,529L1020,529L1019,531L1023,535L1023,541L1021,540L1017,532L1012,529L1008,530L1004,534L1002,537L998,537L992,532L986,534L990,529L990,526L988,522L982,517L976,514L973,513L967,513L967,511L970,510L971,508L972,511L974,513L976,513L979,511L982,507L986,505Z",
    "cx": 998.5,
    "cy": 521.3,
    "area": 864,
    "isPrimary": true
  },
  {
    "id": 39,
    "country": "Canada",
    "d": "M236,173L237,173L237,177L239,179L242,179L245,176L250,174L257,179L273,178L279,181L278,189L281,192L287,193L288,196L285,200L283,200L280,197L276,195L273,195L270,198L270,202L274,206L274,208L271,209L269,207L267,207L266,206L263,207L262,208L262,212L263,214L260,214L258,212L257,209L253,205L251,204L244,204L243,203L246,204L255,204L261,195L261,190L255,183L251,181L243,180L242,181L229,182L229,179L236,173Z",
    "cx": 262.9,
    "cy": 190.7,
    "area": 838,
    "isPrimary": false
  },
  {
    "id": 40,
    "country": "Ukraine",
    "d": "M567,259L575,261L577,264L584,270L594,269L596,271L596,273L588,280L585,280L580,282L579,283L579,289L578,289L576,287L575,284L571,281L568,281L564,284L563,285L563,284L565,282L565,279L564,276L561,273L555,273L551,275L543,275L540,273L540,270L543,267L543,262L546,260L551,260L556,264L562,264L563,265L567,262L567,259Z",
    "cx": 567.8,
    "cy": 271.5,
    "area": 828,
    "isPrimary": true
  },
  {
    "id": 41,
    "country": "Mozambique",
    "d": "M595,550L598,550L599,551L609,551L610,550L611,556L612,557L612,562L610,566L606,570L596,576L589,583L588,585L588,593L590,599L589,605L578,614L576,620L575,619L575,616L578,614L579,611L579,605L577,600L581,597L583,593L584,585L585,584L585,576L583,571L578,567L575,566L581,562L585,562L587,564L587,568L586,569L587,572L590,574L593,574L596,571L596,564L591,555L591,553L595,550Z",
    "cx": 592.7,
    "cy": 575.1,
    "area": 824,
    "isPrimary": true
  },
  {
    "id": 42,
    "country": "Myanmar",
    "d": "M821,369L825,372L825,376L821,381L821,385L830,393L831,396L833,398L836,399L835,401L830,402L825,406L826,413L831,421L832,431L836,436L835,437L835,440L833,435L828,418L825,415L823,415L820,418L819,421L817,422L816,421L816,414L814,408L807,400L810,391L810,387L814,382L815,379L815,374L818,373L821,369Z",
    "cx": 820.4,
    "cy": 398.2,
    "area": 780,
    "isPrimary": true
  },
  {
    "id": 43,
    "country": "France",
    "d": "M469,266L471,266L476,271L484,271L487,273L487,275L483,279L483,282L480,284L480,286L483,290L483,296L474,296L470,301L465,297L459,297L457,298L460,294L460,288L459,285L453,278L448,277L448,275L456,274L457,271L460,273L464,273L469,266Z",
    "cx": 469.8,
    "cy": 282.8,
    "area": 774,
    "isPrimary": true
  },
  {
    "id": 44,
    "country": "Madagascar",
    "d": "M645,556L647,556L648,558L648,565L645,568L643,573L643,576L641,580L640,593L634,603L633,608L629,612L626,612L622,607L621,604L621,597L625,591L625,588L626,587L626,581L625,580L626,578L626,574L630,571L635,570L640,565L643,558L645,556Z",
    "cx": 633.4,
    "cy": 585.7,
    "area": 750,
    "isPrimary": true
  },
  {
    "id": 45,
    "country": "Central African Republic",
    "d": "M544,446L546,449L546,454L547,456L549,459L558,467L559,470L551,471L545,475L540,475L535,471L531,471L528,473L526,477L524,477L520,482L519,479L513,471L514,467L518,462L528,462L530,461L532,459L533,454L541,452L544,446Z",
    "cx": 535.5,
    "cy": 465.6,
    "area": 742,
    "isPrimary": true
  },
  {
    "id": 46,
    "country": "Sweden",
    "d": "M521,191L527,191L533,196L533,198L528,203L527,206L519,210L517,212L516,214L516,219L519,224L519,227L514,232L514,238L512,240L507,243L506,242L505,236L502,229L505,226L505,222L503,218L503,213L509,207L511,200L521,191Z",
    "cx": 514.8,
    "cy": 214.1,
    "area": 740,
    "isPrimary": true
  },
  {
    "id": 47,
    "country": "Botswana",
    "d": "M541,581L544,581L545,582L553,581L556,583L559,592L564,598L557,606L554,612L552,613L549,610L545,611L540,618L538,615L538,611L534,608L535,598L539,591L539,583L541,581Z",
    "cx": 547.5,
    "cy": 597.8,
    "area": 730,
    "isPrimary": true
  },
  {
    "id": 48,
    "country": "Somalia",
    "d": "M649,443L651,444L651,450L648,459L646,462L645,467L637,481L633,485L628,488L618,498L618,499L617,499L617,495L616,494L616,486L617,483L620,479L623,478L627,474L634,471L641,462L641,458L640,457L638,456L632,456L626,451L623,447L628,449L637,449L638,448L641,448L649,443Z",
    "cx": 633.8,
    "cy": 469.1,
    "area": 713,
    "isPrimary": true
  },
  {
    "id": 49,
    "country": "Kenya",
    "d": "M594,476L598,477L605,481L609,479L615,479L613,485L614,502L610,506L609,509L608,510L608,513L606,513L598,506L592,503L592,498L588,494L593,490L593,483L590,477L593,477L594,476Z",
    "cx": 602.5,
    "cy": 493.2,
    "area": 690,
    "isPrimary": true
  },
  {
    "id": 50,
    "country": "Spain",
    "d": "M434,298L454,299L456,301L463,300L468,304L466,306L463,307L459,311L458,313L459,319L456,321L450,326L442,326L439,324L435,324L435,321L436,320L436,312L440,307L440,304L438,302L432,302L432,300L434,298Z",
    "cx": 448.2,
    "cy": 310.9,
    "area": 672,
    "isPrimary": true
  },
  {
    "id": 51,
    "country": "Chile",
    "d": "M196,581L198,582L200,587L202,600L206,603L207,605L200,613L201,626L200,627L200,635L199,636L200,644L202,648L207,653L207,658L204,666L204,669L205,670L205,684L211,691L211,696L213,698L216,699L215,710L218,717L218,720L224,732L227,735L232,735L233,734L236,734L237,735L237,736L234,736L231,738L228,738L220,728L214,711L212,698L210,695L209,691L203,686L202,683L202,677L199,671L199,664L200,663L199,629L200,628L199,627L199,619L197,613L197,584L196,581Z",
    "cx": 205.8,
    "cy": 655.4,
    "area": 664,
    "isPrimary": true
  },
  {
    "id": 52,
    "country": "Indonesia",
    "d": "M903,477L907,478L907,481L910,487L910,490L907,493L906,497L901,502L901,511L900,512L897,512L895,510L890,510L889,511L885,508L883,508L881,507L881,502L876,496L876,490L879,489L882,492L887,494L892,490L899,490L902,486L903,477Z",
    "cx": 893.9,
    "cy": 497.0,
    "area": 617,
    "isPrimary": true
  },
  {
    "id": 53,
    "country": "Finland",
    "d": "M542,185L545,185L548,188L548,191L551,195L551,197L553,200L555,209L558,213L551,219L547,219L538,222L536,222L533,219L533,213L541,204L541,202L537,198L536,195L529,189L537,190L540,188L542,185Z",
    "cx": 544.1,
    "cy": 205.1,
    "area": 616,
    "isPrimary": true
  },
  {
    "id": 54,
    "country": "Turkmenistan",
    "d": "M667,301L674,309L679,310L686,317L690,319L694,323L689,329L689,332L687,333L683,331L674,323L669,320L658,320L656,321L655,317L649,312L653,312L655,310L655,307L657,308L661,308L664,305L665,302L667,301Z",
    "cx": 672.8,
    "cy": 316.8,
    "area": 616,
    "isPrimary": true
  },
  {
    "id": 55,
    "country": "Iraq",
    "d": "M618,326L622,328L625,331L625,336L623,338L623,343L628,348L633,351L635,356L631,359L631,362L629,363L625,362L624,362L611,349L607,347L604,347L603,344L609,338L611,328L612,327L617,327L618,326Z",
    "cx": 619.2,
    "cy": 344.6,
    "area": 607,
    "isPrimary": true
  },
  {
    "id": 56,
    "country": "Uzbekistan",
    "d": "M656,289L664,292L670,290L672,291L678,298L688,300L697,310L700,311L702,310L706,305L711,308L714,308L715,309L714,311L709,309L705,309L701,313L698,315L698,317L703,323L702,325L700,323L697,322L695,319L690,315L687,314L682,308L676,306L668,298L665,298L662,301L660,305L658,305L658,301L655,293L656,289Z",
    "cx": 681.5,
    "cy": 304.1,
    "area": 595,
    "isPrimary": true
  },
  {
    "id": 57,
    "country": "Yemen",
    "d": "M646,410L652,411L658,418L658,420L656,423L649,429L639,430L633,433L628,434L626,434L625,432L625,424L622,418L622,416L628,416L632,418L639,418L642,415L643,412L646,410Z",
    "cx": 639.8,
    "cy": 422.2,
    "area": 549,
    "isPrimary": true
  },
  {
    "id": 58,
    "country": "Morocco",
    "d": "M438,336L441,336L442,337L448,337L450,336L451,337L451,340L453,346L452,348L444,349L437,358L430,360L424,367L422,368L417,368L417,367L421,363L423,359L423,355L425,349L431,343L432,343L438,336Z",
    "cx": 435.7,
    "cy": 349.8,
    "area": 526,
    "isPrimary": true
  },
  {
    "id": 59,
    "country": "Poland",
    "d": "M522,248L525,250L530,250L531,251L536,251L538,252L538,257L540,261L540,266L537,269L536,273L528,273L526,274L521,276L520,275L525,271L526,268L523,264L519,264L512,260L512,255L511,254L511,253L514,253L522,248Z",
    "cx": 527.1,
    "cy": 260.4,
    "area": 523,
    "isPrimary": true
  },
  {
    "id": 60,
    "country": "Zimbabwe",
    "d": "M572,568L577,570L581,574L581,578L582,580L581,581L581,589L578,596L576,597L571,597L568,597L563,592L560,587L560,583L557,579L559,579L564,576L566,573L572,568Z",
    "cx": 571.2,
    "cy": 583.2,
    "area": 519,
    "isPrimary": true
  },
  {
    "id": 61,
    "country": "Germany",
    "d": "M494,248L494,249L497,251L503,251L504,250L507,250L508,251L509,260L507,263L504,264L501,267L501,269L506,273L502,275L499,277L497,276L490,276L490,272L486,268L484,268L484,266L488,258L487,255L490,254L494,250L494,248Z",
    "cx": 496.8,
    "cy": 262.5,
    "area": 497,
    "isPrimary": true
  },
  {
    "id": 62,
    "country": "Paraguay",
    "d": "M232,585L236,585L237,586L238,591L250,606L252,607L257,607L258,608L258,611L253,616L251,620L249,622L247,622L245,621L245,615L246,614L245,609L242,606L231,604L228,602L228,600L226,597L226,590L232,585Z",
    "cx": 240.6,
    "cy": 602.3,
    "area": 485,
    "isPrimary": true
  },
  {
    "id": 63,
    "country": "Cameroon",
    "d": "M513,445L515,446L515,449L511,452L511,454L515,459L515,461L510,468L510,472L512,476L516,480L516,482L518,485L516,485L512,482L509,482L508,483L506,482L504,482L502,484L497,484L496,478L493,474L494,473L494,469L495,467L501,466L505,463L507,459L508,452L510,448L513,445Z",
    "cx": 505.8,
    "cy": 469.8,
    "area": 477,
    "isPrimary": true
  },
  {
    "id": 64,
    "country": "Thailand",
    "d": "M831,405L834,405L839,409L840,415L843,418L847,418L851,416L853,417L856,424L858,426L858,428L851,428L847,431L846,435L841,433L838,433L835,430L834,420L828,409L828,407L831,405Z",
    "cx": 841.7,
    "cy": 420.9,
    "area": 450,
    "isPrimary": true
  },
  {
    "id": 65,
    "country": "Norway",
    "d": "M534,183L540,183L536,187L529,185L526,186L524,188L520,188L508,199L506,206L499,214L499,217L501,220L501,223L502,224L501,226L496,225L492,227L487,230L485,230L483,228L482,225L482,219L483,217L485,215L494,212L501,207L510,196L512,192L516,188L521,186L528,185L529,184L533,184L534,183Z",
    "cx": 500.3,
    "cy": 211.3,
    "area": 439,
    "isPrimary": true
  },
  {
    "id": 66,
    "country": "Indonesia",
    "d": "M825,473L831,474L834,477L835,480L845,490L852,495L853,502L861,508L860,518L860,519L858,520L852,515L847,508L846,505L839,497L839,490L838,487L830,478L827,477L824,474L825,473Z",
    "cx": 846.6,
    "cy": 498.6,
    "area": 434,
    "isPrimary": false
  },
  {
    "id": 67,
    "country": "Canada",
    "d": "M315,142L322,142L322,143L311,144L301,148L285,150L276,154L272,157L259,157L257,158L254,162L255,164L259,164L260,165L259,166L253,166L252,167L244,166L243,165L239,165L238,164L239,162L241,162L244,164L250,164L254,158L256,157L263,157L270,154L273,151L273,147L271,145L268,144L290,143L296,145L303,145L304,144L309,144L315,142Z",
    "cx": 277.8,
    "cy": 151.5,
    "area": 428,
    "isPrimary": false
  },
  {
    "id": 68,
    "country": "Congo",
    "d": "M526,480L526,492L525,493L525,498L519,505L516,514L514,516L511,516L510,515L504,516L503,514L505,511L505,509L506,506L510,508L513,507L516,502L515,491L509,486L511,485L515,488L520,488L523,485L524,481L526,480Z",
    "cx": 516.4,
    "cy": 499.9,
    "area": 357,
    "isPrimary": true
  },
  {
    "id": 69,
    "country": "Romania",
    "d": "M538,276L540,276L542,278L553,278L555,281L556,286L560,289L559,293L556,294L553,294L552,293L540,294L539,291L535,286L535,283L537,280L538,276Z",
    "cx": 546.8,
    "cy": 285.9,
    "area": 352,
    "isPrimary": true
  },
  {
    "id": 70,
    "country": "Belarus",
    "d": "M553,243L561,243L562,245L568,250L568,252L564,255L563,258L564,261L558,261L557,260L555,260L550,256L547,256L542,258L541,255L541,252L545,251L549,246L553,243Z",
    "cx": 555.4,
    "cy": 251.9,
    "area": 336,
    "isPrimary": true
  },
  {
    "id": 71,
    "country": "Canada",
    "d": "M162,174L165,174L170,177L181,177L183,175L187,174L184,179L184,181L187,184L186,185L183,186L175,186L169,183L163,184L158,188L154,188L150,186L159,186L160,184L157,181L152,180L150,178L158,177L162,174Z",
    "cx": 169.4,
    "cy": 180.6,
    "area": 332,
    "isPrimary": false
  },
  {
    "id": 72,
    "country": "Oman",
    "d": "M669,386L680,392L681,396L676,404L662,416L656,412L656,409L664,406L668,402L669,400L669,396L667,394L666,391L668,389L669,386Z",
    "cx": 669.6,
    "cy": 401.2,
    "area": 331,
    "isPrimary": true
  },
  {
    "id": 73,
    "country": "C\u00f4te d'Ivoire",
    "d": "M429,451L431,452L436,451L439,453L444,453L445,454L445,460L443,464L443,468L445,471L443,471L432,472L431,469L427,467L426,464L431,459L428,455L429,451Z",
    "cx": 436.2,
    "cy": 461.5,
    "area": 328,
    "isPrimary": true
  },
  {
    "id": 74,
    "country": "Gabon",
    "d": "M504,486L506,486L507,489L511,491L513,498L511,504L504,503L502,505L502,508L502,510L500,512L494,505L493,499L494,498L494,495L496,493L501,492L504,486Z",
    "cx": 502.7,
    "cy": 498.5,
    "area": 317,
    "isPrimary": true
  },
  {
    "id": 75,
    "country": "India",
    "d": "M808,363L813,363L815,364L817,370L814,371L812,373L811,380L807,386L807,389L805,388L806,382L804,380L802,380L800,379L799,380L798,378L794,375L787,374L787,371L786,370L788,370L793,375L797,375L802,371L804,366L808,363Z",
    "cx": 805.6,
    "cy": 373.4,
    "area": 300,
    "isPrimary": false
  },
  {
    "id": 76,
    "country": "Ecuador",
    "d": "M155,492L157,492L159,495L163,497L167,496L168,499L168,503L167,505L164,507L159,508L157,511L157,514L155,517L152,513L153,510L149,505L149,500L152,494L155,492Z",
    "cx": 157.5,
    "cy": 502.6,
    "area": 293,
    "isPrimary": true
  },
  {
    "id": 77,
    "country": "Italy",
    "d": "M502,283L505,283L507,285L503,289L503,294L505,298L520,309L521,311L518,315L517,310L515,308L510,306L502,303L502,298L499,294L497,293L487,294L486,289L487,289L489,286L496,286L502,283Z",
    "cx": 501.8,
    "cy": 295.1,
    "area": 292,
    "isPrimary": true
  },
  {
    "id": 78,
    "country": "Burkina Faso",
    "d": "M451,429L457,429L458,433L461,436L464,437L465,439L460,442L450,443L449,444L446,445L444,447L443,450L440,450L439,449L439,446L442,439L448,433L448,431L451,429Z",
    "cx": 451.0,
    "cy": 438.7,
    "area": 290,
    "isPrimary": true
  },
  {
    "id": 79,
    "country": "Morocco",
    "d": "M413,371L424,371L424,375L417,375L414,376L412,378L411,388L408,392L406,397L397,397L397,392L404,385L406,377L413,371Z",
    "cx": 408.5,
    "cy": 383.7,
    "area": 282,
    "isPrimary": false
  },
  {
    "id": 80,
    "country": "Japan",
    "d": "M956,309L961,313L961,318L962,319L964,332L961,335L955,338L948,337L945,341L944,341L939,338L938,336L949,334L951,330L957,325L958,323L958,314L956,311L956,309Z",
    "cx": 954.8,
    "cy": 329.0,
    "area": 279,
    "isPrimary": true
  },
  {
    "id": 81,
    "country": "Ghana",
    "d": "M452,446L455,446L459,458L458,469L452,471L448,471L446,467L449,458L449,455L447,452L447,448L452,446Z",
    "cx": 452.6,
    "cy": 459.2,
    "area": 274,
    "isPrimary": true
  },
  {
    "id": 82,
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "d": "M449,232L450,232L450,235L451,236L458,237L454,240L454,243L460,251L466,256L464,259L464,261L459,263L458,264L457,263L453,263L453,260L451,258L452,255L455,255L456,254L456,249L453,245L447,241L447,235L449,232Z",
    "cx": 455.6,
    "cy": 250.2,
    "area": 251,
    "isPrimary": true
  },
  {
    "id": 83,
    "country": "Guinea",
    "d": "M406,440L413,441L417,444L422,442L425,448L425,457L427,458L427,459L426,459L423,460L416,449L413,447L411,447L406,451L403,448L403,446L406,443L406,440Z",
    "cx": 416.0,
    "cy": 448.2,
    "area": 239,
    "isPrimary": true
  },
  {
    "id": 84,
    "country": "Uruguay",
    "d": "M248,635L249,635L252,639L259,641L260,644L262,646L265,647L263,652L259,653L256,653L255,652L250,653L249,652L249,644L248,641L246,639L246,636L248,635Z",
    "cx": 254.6,
    "cy": 645.6,
    "area": 217,
    "isPrimary": true
  },
  {
    "id": 85,
    "country": "Kyrgyzstan",
    "d": "M723,299L730,299L739,302L736,304L727,307L725,309L724,312L721,313L720,314L718,313L715,314L717,313L718,308L715,305L711,304L711,302L713,301L717,304L719,304L723,299Z",
    "cx": 724.0,
    "cy": 305.0,
    "area": 213,
    "isPrimary": true
  },
  {
    "id": 86,
    "country": "Syrian Arab Republic",
    "d": "M607,328L608,328L608,329L607,330L606,337L603,340L598,342L592,347L591,347L591,344L593,342L595,340L595,338L593,335L591,335L591,331L593,329L606,329L607,328Z",
    "cx": 598.7,
    "cy": 335.4,
    "area": 210,
    "isPrimary": true
  },
  {
    "id": 87,
    "country": "Malaysia",
    "d": "M903,467L908,471L911,472L911,473L908,475L906,474L902,474L899,478L899,484L898,486L897,487L893,486L890,487L888,490L885,490L883,488L901,471L903,467Z",
    "cx": 896.8,
    "cy": 479.2,
    "area": 206,
    "isPrimary": true
  },
  {
    "id": 88,
    "country": "Uganda",
    "d": "M587,479L590,484L590,488L585,493L583,493L579,497L575,499L574,499L574,497L574,494L579,489L579,486L577,480L585,481L587,479Z",
    "cx": 582.1,
    "cy": 488.2,
    "area": 196,
    "isPrimary": true
  },
  {
    "id": 89,
    "country": "Lao People's Democratic Republic",
    "d": "M842,396L844,396L846,398L847,403L853,407L854,413L849,413L846,415L844,415L843,414L842,408L837,404L842,396Z",
    "cx": 845.5,
    "cy": 406.2,
    "area": 192,
    "isPrimary": true
  },
  {
    "id": 90,
    "country": "Nepal",
    "d": "M758,359L765,360L774,366L783,370L783,374L782,374L776,373L767,368L761,367L758,363L758,359Z",
    "cx": 769.7,
    "cy": 366.5,
    "area": 187,
    "isPrimary": true
  },
  {
    "id": 91,
    "country": "Guyana",
    "d": "M231,461L234,466L237,468L237,470L234,475L234,479L239,484L238,487L234,489L232,489L231,486L231,474L227,469L227,466L231,461Z",
    "cx": 232.8,
    "cy": 475.1,
    "area": 185,
    "isPrimary": true
  },
  {
    "id": 92,
    "country": "Cambodia",
    "d": "M851,431L854,431L859,433L863,433L864,432L866,437L862,441L859,445L855,445L849,438L849,434L851,431Z",
    "cx": 856.9,
    "cy": 437.4,
    "area": 183,
    "isPrimary": true
  },
  {
    "id": 93,
    "country": "Senegal",
    "d": "M397,420L403,421L405,425L410,429L411,435L412,436L412,438L410,437L407,437L401,431L396,431L396,422L397,420Z",
    "cx": 403.2,
    "cy": 428.7,
    "area": 179,
    "isPrimary": true
  },
  {
    "id": 94,
    "country": "Canada",
    "d": "M242,274L245,274L240,279L239,281L240,284L242,286L248,287L248,288L241,290L240,287L239,286L231,287L231,282L228,278L231,278L242,274Z",
    "cx": 237.3,
    "cy": 281.8,
    "area": 163,
    "isPrimary": false
  },
  {
    "id": 95,
    "country": "Tajikistan",
    "d": "M706,312L710,313L713,317L719,317L719,319L723,322L727,322L728,323L727,325L721,327L718,326L718,322L715,318L712,318L709,320L706,324L705,320L702,317L706,312Z",
    "cx": 713.9,
    "cy": 319.6,
    "area": 161,
    "isPrimary": true
  },
  {
    "id": 96,
    "country": "Tunisia",
    "d": "M491,327L496,327L497,328L497,333L494,337L494,340L499,345L497,350L497,351L495,352L493,347L489,342L489,339L491,336L491,327Z",
    "cx": 493.8,
    "cy": 338.8,
    "area": 161,
    "isPrimary": true
  },
  {
    "id": 97,
    "country": "Viet Nam",
    "d": "M867,423L871,428L871,431L872,432L872,440L862,452L860,454L859,454L859,453L858,452L858,448L860,448L869,438L869,435L867,431L867,423Z",
    "cx": 866.5,
    "cy": 439.8,
    "area": 156,
    "isPrimary": true
  },
  {
    "id": 98,
    "country": "Iceland",
    "d": "M402,200L405,202L416,202L417,201L424,200L426,201L426,202L423,204L417,206L414,209L405,208L404,207L404,203L401,201L402,200Z",
    "cx": 413.3,
    "cy": 204.2,
    "area": 147,
    "isPrimary": true
  },
  {
    "id": 99,
    "country": "Bulgaria",
    "d": "M546,296L551,296L556,298L555,299L555,302L558,306L558,308L555,310L555,309L551,304L549,303L543,303L541,301L541,297L545,297L546,296Z",
    "cx": 549.9,
    "cy": 301.2,
    "area": 143,
    "isPrimary": true
  },
  {
    "id": 100,
    "country": "Suriname",
    "d": "M240,470L249,470L248,472L248,482L247,483L245,482L242,484L241,481L237,478L238,474L240,472L240,470Z",
    "cx": 243.5,
    "cy": 476.1,
    "area": 137,
    "isPrimary": true
  },
  {
    "id": 101,
    "country": "Bangladesh",
    "d": "M790,378L795,379L795,381L797,383L803,383L802,385L802,389L806,394L805,396L804,396L804,394L799,390L792,391L792,381L790,378Z",
    "cx": 797.2,
    "cy": 386.3,
    "area": 135,
    "isPrimary": true
  },
  {
    "id": 102,
    "country": "Malaysia",
    "d": "M839,465L851,471L852,478L853,479L853,484L853,486L852,486L848,482L844,472L839,465Z",
    "cx": 847.9,
    "cy": 475.2,
    "area": 132,
    "isPrimary": false
  },
  {
    "id": 103,
    "country": "Guyana",
    "d": "M253,471L257,473L261,478L257,484L253,487L250,486L251,484L251,473L253,471Z",
    "cx": 254.7,
    "cy": 479.0,
    "area": 128,
    "isPrimary": false
  },
  {
    "id": 104,
    "country": "Greece",
    "d": "M544,306L548,306L550,307L550,308L544,308L541,311L542,322L542,324L539,326L537,320L534,316L534,314L536,312L539,311L544,306Z",
    "cx": 540.2,
    "cy": 315.5,
    "area": 124,
    "isPrimary": true
  },
  {
    "id": 105,
    "country": "Indonesia",
    "d": "M865,525L870,526L875,529L878,529L879,528L886,529L888,528L890,529L893,533L895,533L896,534L895,534L892,533L883,533L878,530L871,530L868,528L864,527L865,525Z",
    "cx": 880.1,
    "cy": 529.7,
    "area": 119,
    "isPrimary": false
  },
  {
    "id": 106,
    "country": "Canada",
    "d": "M277,265L276,267L276,271L278,273L282,271L280,274L282,280L280,280L276,277L264,277L270,273L277,265Z",
    "cx": 274.5,
    "cy": 274.1,
    "area": 116,
    "isPrimary": false
  },
  {
    "id": 107,
    "country": "Benin",
    "d": "M467,441L470,442L470,447L471,448L470,452L466,457L466,461L468,464L468,465L467,465L466,466L466,456L462,445L467,441Z",
    "cx": 466.8,
    "cy": 450.0,
    "area": 116,
    "isPrimary": true
  },
  {
    "id": 108,
    "country": "Republic of Korea",
    "d": "M913,321L916,322L924,329L925,332L924,334L921,336L917,336L916,334L916,328L912,322L913,321Z",
    "cx": 918.8,
    "cy": 329.3,
    "area": 115,
    "isPrimary": true
  },
  {
    "id": 109,
    "country": "Viet Nam",
    "d": "M855,391L858,392L859,394L859,398L856,402L856,406L852,403L849,400L849,397L846,393L853,395L855,391Z",
    "cx": 853.8,
    "cy": 397.5,
    "area": 115,
    "isPrimary": false
  },
  {
    "id": 110,
    "country": "Malawi",
    "d": "M586,541L589,542L588,556L593,565L593,569L592,571L590,570L590,567L591,566L590,563L585,559L585,553L587,547L586,541Z",
    "cx": 588.5,
    "cy": 555.9,
    "area": 113,
    "isPrimary": true
  },
  {
    "id": 111,
    "country": "Slovakia",
    "d": "M529,276L533,276L534,277L532,283L527,285L524,284L519,283L518,281L519,279L523,279L529,276Z",
    "cx": 526.7,
    "cy": 280.5,
    "area": 112,
    "isPrimary": true
  },
  {
    "id": 112,
    "country": "Georgia",
    "d": "M606,298L611,298L613,300L621,304L622,305L618,307L618,310L621,312L623,314L623,315L621,315L612,304L608,303L608,301L606,298Z",
    "cx": 614.8,
    "cy": 304.6,
    "area": 110,
    "isPrimary": true
  },
  {
    "id": 113,
    "country": "Democratic People's Republic of Korea",
    "d": "M914,303L914,307L911,312L911,317L912,318L909,320L908,318L907,316L902,312L902,311L914,303Z",
    "cx": 908.9,
    "cy": 311.3,
    "area": 110,
    "isPrimary": true
  },
  {
    "id": 114,
    "country": "Cuba",
    "d": "M147,392L158,392L161,393L175,402L176,404L174,403L168,403L163,397L153,393L145,393L147,392Z",
    "cx": 162.8,
    "cy": 397.0,
    "area": 110,
    "isPrimary": true
  },
  {
    "id": 115,
    "country": "Serbia",
    "d": "M529,287L532,288L536,292L538,298L538,300L533,301L532,300L527,300L530,296L530,292L528,290L529,287Z",
    "cx": 532.6,
    "cy": 295.1,
    "area": 109,
    "isPrimary": true
  },
  {
    "id": 116,
    "country": "Czechia",
    "d": "M511,263L518,267L521,267L522,268L522,270L520,271L516,271L508,271L504,268L508,266L511,263Z",
    "cx": 513.1,
    "cy": 268.1,
    "area": 107,
    "isPrimary": true
  },
  {
    "id": 117,
    "country": "Nicaragua",
    "d": "M138,430L140,430L140,432L137,439L137,442L136,443L133,440L130,440L129,439L129,435L130,433L138,430Z",
    "cx": 134.5,
    "cy": 435.8,
    "area": 105,
    "isPrimary": true
  },
  {
    "id": 118,
    "country": "Ireland",
    "d": "M439,246L442,247L441,256L440,257L437,257L434,259L431,260L434,256L434,254L432,251L435,250L439,246Z",
    "cx": 437.2,
    "cy": 252.8,
    "area": 102,
    "isPrimary": true
  },
  {
    "id": 119,
    "country": "Guatemala",
    "d": "M117,416L122,416L121,417L121,426L115,428L112,430L110,427L110,425L114,424L117,421L117,418L116,417L117,416Z",
    "cx": 116.7,
    "cy": 423.2,
    "area": 101,
    "isPrimary": true
  },
  {
    "id": 120,
    "country": "Japan",
    "d": "M951,292L957,295L961,295L963,296L963,298L959,301L958,300L954,300L951,302L949,300L951,298L951,292Z",
    "cx": 955.5,
    "cy": 297.3,
    "area": 94,
    "isPrimary": false
  },
  {
    "id": 121,
    "country": "Jordan",
    "d": "M600,345L600,347L596,354L596,356L591,360L590,360L590,358L590,350L593,350L596,347L600,345Z",
    "cx": 594.1,
    "cy": 352.7,
    "area": 92,
    "isPrimary": true
  },
  {
    "id": 122,
    "country": "Honduras",
    "d": "M133,424L137,424L139,426L129,430L126,433L126,434L125,434L123,428L125,426L128,426L133,424Z",
    "cx": 129.8,
    "cy": 427.8,
    "area": 89,
    "isPrimary": true
  },
  {
    "id": 123,
    "country": "Philippines",
    "d": "M915,413L917,413L919,417L919,420L917,424L917,430L912,426L912,424L914,422L915,419L914,417L914,414L915,413Z",
    "cx": 915.7,
    "cy": 421.3,
    "area": 87,
    "isPrimary": true
  },
  {
    "id": 124,
    "country": "Indonesia",
    "d": "M918,502L925,502L923,505L923,509L925,515L921,507L918,507L917,508L917,517L917,515L914,510L918,502Z",
    "cx": 919.7,
    "cy": 507.6,
    "area": 86,
    "isPrimary": false
  },
  {
    "id": 125,
    "country": "Eritrea",
    "d": "M602,418L604,418L604,423L607,427L605,430L603,430L598,428L599,427L599,421L602,418Z",
    "cx": 602.3,
    "cy": 424.7,
    "area": 83,
    "isPrimary": true
  },
  {
    "id": 126,
    "country": "Austria",
    "d": "M510,274L516,274L517,275L516,278L514,280L511,280L510,281L503,280L502,279L510,274Z",
    "cx": 510.3,
    "cy": 277.5,
    "area": 82,
    "isPrimary": true
  },
  {
    "id": 127,
    "country": "Azerbaijan",
    "d": "M630,306L631,306L634,310L634,315L633,315L632,313L628,313L627,314L626,315L626,313L621,309L630,306Z",
    "cx": 628.8,
    "cy": 310.3,
    "area": 82,
    "isPrimary": true
  },
  {
    "id": 128,
    "country": "Canada",
    "d": "M149,168L160,169L150,171L149,172L145,172L144,173L142,173L139,175L134,175L134,174L137,172L145,171L149,168Z",
    "cx": 146.1,
    "cy": 171.3,
    "area": 80,
    "isPrimary": false
  },
  {
    "id": 129,
    "country": "Lithuania",
    "d": "M535,241L544,241L547,243L546,245L544,248L540,248L534,242L535,241Z",
    "cx": 541.1,
    "cy": 244.0,
    "area": 79,
    "isPrimary": true
  },
  {
    "id": 130,
    "country": "Philippines",
    "d": "M937,456L938,456L939,459L939,463L937,468L933,462L930,460L926,461L928,459L934,459L937,456Z",
    "cx": 934.9,
    "cy": 461.2,
    "area": 74,
    "isPrimary": false
  },
  {
    "id": 131,
    "country": "Liberia",
    "d": "M419,461L423,464L423,467L428,471L428,473L427,473L422,471L417,466L417,464L419,461Z",
    "cx": 421.9,
    "cy": 467.2,
    "area": 72,
    "isPrimary": true
  },
  {
    "id": 132,
    "country": "Portugal",
    "d": "M432,305L436,305L436,307L433,310L433,317L431,321L430,323L429,314L431,311L432,305Z",
    "cx": 432.0,
    "cy": 312.8,
    "area": 71,
    "isPrimary": true
  },
  {
    "id": 133,
    "country": "Australia",
    "d": "M971,684L976,686L979,685L978,689L976,691L974,691L969,694L971,688L971,684Z",
    "cx": 973.8,
    "cy": 688.3,
    "area": 66,
    "isPrimary": false
  },
  {
    "id": 134,
    "country": "Rwanda",
    "d": "M584,496L587,497L586,504L584,505L583,506L581,504L581,499L584,496Z",
    "cx": 584.0,
    "cy": 500.7,
    "area": 58,
    "isPrimary": true
  },
  {
    "id": 135,
    "country": "Switzerland",
    "d": "M488,279L499,280L499,281L494,283L490,282L484,286L486,284L486,281L488,279Z",
    "cx": 491.2,
    "cy": 281.5,
    "area": 57,
    "isPrimary": true
  },
  {
    "id": 136,
    "country": "Sierra Leone",
    "d": "M411,451L413,451L417,457L415,461L415,462L413,460L412,457L409,454L411,451Z",
    "cx": 413.2,
    "cy": 455.7,
    "area": 57,
    "isPrimary": true
  },
  {
    "id": 137,
    "country": "United Arab Emirates",
    "d": "M664,381L666,381L666,386L663,390L659,390L655,389L659,388L662,385L664,381Z",
    "cx": 662.2,
    "cy": 386.4,
    "area": 56,
    "isPrimary": true
  },
  {
    "id": 138,
    "country": "Guinea-Bissau",
    "d": "M397,434L400,434L402,436L403,438L403,442L402,443L400,444L397,437L397,434Z",
    "cx": 400.1,
    "cy": 438.5,
    "area": 53,
    "isPrimary": true
  },
  {
    "id": 139,
    "country": "Hungary",
    "d": "M517,286L520,286L525,288L525,289L519,289L517,291L517,293L515,293L513,289L517,286Z",
    "cx": 518.2,
    "cy": 288.9,
    "area": 52,
    "isPrimary": true
  },
  {
    "id": 140,
    "country": "Latvia",
    "d": "M542,236L550,236L551,241L548,240L546,238L535,238L541,237L542,236Z",
    "cx": 545.2,
    "cy": 237.8,
    "area": 50,
    "isPrimary": true
  },
  {
    "id": 141,
    "country": "Japan",
    "d": "M937,340L940,342L939,349L938,350L937,349L934,347L933,345L937,340Z",
    "cx": 937.0,
    "cy": 344.9,
    "area": 50,
    "isPrimary": false
  },
  {
    "id": 142,
    "country": "Canada",
    "d": "M256,147L258,147L261,150L260,151L251,151L247,151L246,150L251,150L256,147Z",
    "cx": 254.6,
    "cy": 149.7,
    "area": 48,
    "isPrimary": false
  },
  {
    "id": 143,
    "country": "Canada",
    "d": "M207,171L209,171L210,174L208,174L202,178L200,177L199,175L201,175L207,171Z",
    "cx": 204.8,
    "cy": 174.2,
    "area": 46,
    "isPrimary": false
  },
  {
    "id": 144,
    "country": "Sri Lanka",
    "d": "M765,456L768,458L770,463L766,466L765,466L765,456Z",
    "cx": 766.7,
    "cy": 461.3,
    "area": 46,
    "isPrimary": true
  },
  {
    "id": 145,
    "country": "Japan",
    "d": "M937,266L942,269L942,275L945,279L945,281L945,282L944,281L942,275L938,270L938,267L937,266Z",
    "cx": 941.2,
    "cy": 273.0,
    "area": 44,
    "isPrimary": false
  },
  {
    "id": 146,
    "country": "Viet Nam",
    "d": "M857,417L864,425L863,429L861,430L862,428L860,423L857,419L857,417Z",
    "cx": 860.9,
    "cy": 423.8,
    "area": 44,
    "isPrimary": false
  },
  {
    "id": 147,
    "country": "Canada",
    "d": "M178,162L183,162L185,165L179,165L176,165L175,166L172,165L178,162Z",
    "cx": 178.9,
    "cy": 163.9,
    "area": 43,
    "isPrimary": false
  },
  {
    "id": 148,
    "country": "Netherlands",
    "d": "M483,255L484,255L484,260L482,263L481,262L480,262L478,259L483,255Z",
    "cx": 481.5,
    "cy": 258.9,
    "area": 41,
    "isPrimary": true
  },
  {
    "id": 149,
    "country": "Indonesia",
    "d": "M965,500L969,500L971,503L971,505L969,504L965,504L963,503L963,501L965,500Z",
    "cx": 967.2,
    "cy": 502.3,
    "area": 39,
    "isPrimary": false
  },
  {
    "id": 150,
    "country": "Canada",
    "d": "M220,203L222,203L225,206L225,208L221,207L216,208L220,203Z",
    "cx": 220.9,
    "cy": 205.8,
    "area": 37,
    "isPrimary": false
  },
  {
    "id": 151,
    "country": "Croatia",
    "d": "M521,292L523,293L527,293L527,295L525,297L525,298L524,298L520,295L521,292Z",
    "cx": 523.5,
    "cy": 294.7,
    "area": 37,
    "isPrimary": true
  },
  {
    "id": 152,
    "country": "Dominican Republic",
    "d": "M190,408L195,408L197,409L196,411L194,411L192,412L188,412L190,408Z",
    "cx": 192.4,
    "cy": 410.0,
    "area": 37,
    "isPrimary": true
  },
  {
    "id": 153,
    "country": "Togo",
    "d": "M458,446L459,446L460,448L460,451L462,454L462,457L463,458L462,467L462,457L458,446Z",
    "cx": 461.0,
    "cy": 455.3,
    "area": 36,
    "isPrimary": true
  },
  {
    "id": 154,
    "country": "New Zealand",
    "d": "M1022,701L1023,701L1023,704L1019,707L1016,707L1014,707L1022,701Z",
    "cx": 1019.4,
    "cy": 704.6,
    "area": 36,
    "isPrimary": true
  },
  {
    "id": 155,
    "country": "Republic of Moldova",
    "d": "M557,276L559,276L562,280L560,283L559,284L558,283L558,280L556,277L557,276Z",
    "cx": 559.0,
    "cy": 279.5,
    "area": 35,
    "isPrimary": true
  },
  {
    "id": 156,
    "country": "Costa Rica",
    "d": "M135,446L137,446L140,450L140,453L134,449L135,446Z",
    "cx": 137.1,
    "cy": 449.3,
    "area": 34,
    "isPrimary": true
  },
  {
    "id": 157,
    "country": "Panama",
    "d": "M143,454L146,456L151,456L153,455L151,457L148,459L145,459L143,456L143,454Z",
    "cx": 147.1,
    "cy": 456.7,
    "area": 34,
    "isPrimary": true
  },
  {
    "id": 158,
    "country": "Belgium",
    "d": "M475,262L481,266L481,268L480,268L477,268L475,266L474,264L475,262Z",
    "cx": 477.4,
    "cy": 265.5,
    "area": 33,
    "isPrimary": true
  },
  {
    "id": 159,
    "country": "Burundi",
    "d": "M574,507L575,507L575,510L574,513L572,515L571,514L571,509L574,507Z",
    "cx": 572.8,
    "cy": 510.7,
    "area": 32,
    "isPrimary": true
  },
  {
    "id": 160,
    "country": "Estonia",
    "d": "M542,229L549,230L549,233L545,233L542,229Z",
    "cx": 545.9,
    "cy": 230.9,
    "area": 30,
    "isPrimary": true
  },
  {
    "id": 161,
    "country": "Bhutan",
    "d": "M791,368L796,368L798,369L798,371L794,372L791,368Z",
    "cx": 794.7,
    "cy": 369.7,
    "area": 30,
    "isPrimary": true
  },
  {
    "id": 162,
    "country": "Indonesia",
    "d": "M935,491L935,492L932,494L922,492L928,492L929,493L935,491Z",
    "cx": 929.3,
    "cy": 492.6,
    "area": 26,
    "isPrimary": false
  },
  {
    "id": 163,
    "country": "China",
    "d": "M911,383L912,383L912,387L911,388L912,389L911,392L909,390L911,383Z",
    "cx": 910.8,
    "cy": 387.5,
    "area": 25,
    "isPrimary": false
  },
  {
    "id": 164,
    "country": "Lesotho",
    "d": "M564,629L565,629L565,632L564,634L562,635L561,635L561,632L564,629Z",
    "cx": 563.0,
    "cy": 632.2,
    "area": 25,
    "isPrimary": true
  },
  {
    "id": 165,
    "country": "Albania",
    "d": "M536,304L540,304L539,307L536,308L535,306L536,304Z",
    "cx": 537.5,
    "cy": 305.8,
    "area": 24,
    "isPrimary": true
  },
  {
    "id": 166,
    "country": "Italy",
    "d": "M492,310L494,310L494,315L493,315L491,315L491,311L492,310Z",
    "cx": 492.6,
    "cy": 312.6,
    "area": 23,
    "isPrimary": false
  },
  {
    "id": 167,
    "country": "Denmark",
    "d": "M494,238L495,240L493,246L492,240L494,238Z",
    "cx": 493.3,
    "cy": 241.5,
    "area": 21,
    "isPrimary": false
  },
  {
    "id": 168,
    "country": "Malaysia",
    "d": "M836,455L840,462L838,462L836,461L836,455Z",
    "cx": 837.3,
    "cy": 459.5,
    "area": 21,
    "isPrimary": false
  }
];

export const WIKIPEDIA_US_STATES_DATA = [
  {
    "code": "AK",
    "name": "Alaska",
    "level": 1,
    "status": "Legal at any stage",
    "gestationalLimit": "No gestational limit",
    "gridX": 0,
    "gridY": 0
  },
  {
    "code": "CO",
    "name": "Colorado",
    "level": 1,
    "status": "Legal at any stage",
    "gestationalLimit": "No gestational limit",
    "gridX": 3,
    "gridY": 3
  },
  {
    "code": "DC",
    "name": "Washington, D.C.",
    "level": 1,
    "status": "Legal at any stage",
    "gestationalLimit": "No gestational limit",
    "gridX": 9,
    "gridY": 4
  },
  {
    "code": "MD",
    "name": "Maryland",
    "level": 1,
    "status": "Legal at any stage (Constitutional right)",
    "gestationalLimit": "Protected throughout pregnancy",
    "gridX": 9,
    "gridY": 3
  },
  {
    "code": "MI",
    "name": "Michigan",
    "level": 1,
    "status": "Legal at any stage (Constitutional right)",
    "gestationalLimit": "No statutory gestational limit",
    "gridX": 7,
    "gridY": 2
  },
  {
    "code": "MN",
    "name": "Minnesota",
    "level": 1,
    "status": "Legal at any stage",
    "gestationalLimit": "No gestational limit",
    "gridX": 5,
    "gridY": 1
  },
  {
    "code": "NJ",
    "name": "New Jersey",
    "level": 1,
    "status": "Legal at any stage",
    "gestationalLimit": "No gestational limit",
    "gridX": 10,
    "gridY": 2
  },
  {
    "code": "NM",
    "name": "New Mexico",
    "level": 1,
    "status": "Legal at any stage",
    "gestationalLimit": "No gestational limit",
    "gridX": 3,
    "gridY": 4
  },
  {
    "code": "OR",
    "name": "Oregon",
    "level": 1,
    "status": "Legal at any stage",
    "gestationalLimit": "No gestational limit",
    "gridX": 1,
    "gridY": 2
  },
  {
    "code": "VT",
    "name": "Vermont",
    "level": 1,
    "status": "Legal at any stage (Constitutional right)",
    "gestationalLimit": "No gestational limit",
    "gridX": 10,
    "gridY": 0
  },
  {
    "code": "CA",
    "name": "California",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 1,
    "gridY": 3
  },
  {
    "code": "CT",
    "name": "Connecticut",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 11,
    "gridY": 2
  },
  {
    "code": "DE",
    "name": "Delaware",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 10,
    "gridY": 3
  },
  {
    "code": "HI",
    "name": "Hawaii",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 0,
    "gridY": 6
  },
  {
    "code": "IL",
    "name": "Illinois",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 6,
    "gridY": 2
  },
  {
    "code": "ME",
    "name": "Maine",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability ( and later when medically necessary)",
    "gridX": 11,
    "gridY": 0
  },
  {
    "code": "MA",
    "name": "Massachusetts",
    "level": 2,
    "status": "Legal through 24th week LMP (5.5 months)",
    "gestationalLimit": "24 weeks LMP",
    "gridX": 11,
    "gridY": 1
  },
  {
    "code": "MT",
    "name": "Montana",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 3,
    "gridY": 1
  },
  {
    "code": "NV",
    "name": "Nevada",
    "level": 2,
    "status": "Legal through 24th week LMP (5.5 months)",
    "gestationalLimit": "24 weeks LMP",
    "gridX": 2,
    "gridY": 3
  },
  {
    "code": "NH",
    "name": "New Hampshire",
    "level": 2,
    "status": "Legal through 24th week LMP (5.5 months)",
    "gestationalLimit": "24 weeks LMP",
    "gridX": 10,
    "gridY": 1
  },
  {
    "code": "NY",
    "name": "New York",
    "level": 2,
    "status": "Legal through 24th week LMP (5.5 months)",
    "gestationalLimit": "24 weeks LMP (or fetal viability)",
    "gridX": 9,
    "gridY": 1
  },
  {
    "code": "OH",
    "name": "Ohio",
    "level": 2,
    "status": "Legal before fetal viability (Constitutional right)",
    "gestationalLimit": "Fetal viability (~22 to 24 weeks)",
    "gridX": 8,
    "gridY": 2
  },
  {
    "code": "PA",
    "name": "Pennsylvania",
    "level": 2,
    "status": "Legal through 24th week LMP (5.5 months)",
    "gestationalLimit": "24 weeks LMP",
    "gridX": 9,
    "gridY": 2
  },
  {
    "code": "RI",
    "name": "Rhode Island",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 11,
    "gridY": 3
  },
  {
    "code": "VA",
    "name": "Virginia",
    "level": 2,
    "status": "Legal through second trimester (~26 weeks)",
    "gestationalLimit": "End of second trimester",
    "gridX": 8,
    "gridY": 4
  },
  {
    "code": "WA",
    "name": "Washington",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 1,
    "gridY": 1
  },
  {
    "code": "AZ",
    "name": "Arizona",
    "level": 2,
    "status": "Legal before fetal viability (~24 weeks LMP)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 2,
    "gridY": 4
  },
  {
    "code": "MO",
    "name": "Missouri",
    "level": 2,
    "status": "Legal before fetal viability (Constitutional amendment)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 6,
    "gridY": 3
  },
  {
    "code": "WY",
    "name": "Wyoming",
    "level": 2,
    "status": "Legal before fetal viability (Bans blocked by court)",
    "gestationalLimit": "Fetal viability (~24 weeks)",
    "gridX": 3,
    "gridY": 2
  },
  {
    "code": "KS",
    "name": "Kansas",
    "level": 3,
    "status": "Legal through 22nd week LMP (5 months)",
    "gestationalLimit": "22 weeks LMP",
    "gridX": 4,
    "gridY": 3
  },
  {
    "code": "WI",
    "name": "Wisconsin",
    "level": 3,
    "status": "Legal through 22nd week LMP (5 months)",
    "gestationalLimit": "22 weeks LMP",
    "gridX": 6,
    "gridY": 1
  },
  {
    "code": "UT",
    "name": "Utah",
    "level": 3,
    "status": "Legal through 18th week LMP",
    "gestationalLimit": "18 weeks LMP",
    "gridX": 2,
    "gridY": 2
  },
  {
    "code": "NE",
    "name": "Nebraska",
    "level": 4,
    "status": "Legal through 12th week LMP",
    "gestationalLimit": "12 weeks LMP",
    "gridX": 4,
    "gridY": 2
  },
  {
    "code": "NC",
    "name": "North Carolina",
    "level": 4,
    "status": "Legal through 12th week LMP",
    "gestationalLimit": "12 weeks LMP",
    "gridX": 8,
    "gridY": 5
  },
  {
    "code": "FL",
    "name": "Florida",
    "level": 8,
    "status": "Restricted after 6 weeks LMP (Cardiac-cell activity cutoff)",
    "gestationalLimit": "6 weeks LMP",
    "gridX": 9,
    "gridY": 7
  },
  {
    "code": "GA",
    "name": "Georgia",
    "level": 8,
    "status": "Restricted after 6 weeks LMP (Cardiac-cell activity cutoff)",
    "gestationalLimit": "6 weeks LMP",
    "gridX": 8,
    "gridY": 6
  },
  {
    "code": "IA",
    "name": "Iowa",
    "level": 8,
    "status": "Restricted after 6 weeks LMP (Cardiac-cell activity cutoff)",
    "gestationalLimit": "6 weeks LMP",
    "gridX": 5,
    "gridY": 2
  },
  {
    "code": "SC",
    "name": "South Carolina",
    "level": 8,
    "status": "Restricted after 6 weeks LMP (Cardiac-cell activity cutoff)",
    "gestationalLimit": "6 weeks LMP",
    "gridX": 9,
    "gridY": 5
  },
  {
    "code": "ND",
    "name": "North Dakota",
    "level": 8,
    "status": "Heavily restricted / 6-week and life/health exceptions under court review",
    "gestationalLimit": "6 weeks LMP / Restricted",
    "gridX": 4,
    "gridY": 1
  },
  {
    "code": "AL",
    "name": "Alabama",
    "level": 10,
    "status": "Illegal (Total ban with narrow life/grave health exception)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 7,
    "gridY": 6
  },
  {
    "code": "AR",
    "name": "Arkansas",
    "level": 10,
    "status": "Illegal (Total ban except to save mother's life)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 5,
    "gridY": 5
  },
  {
    "code": "ID",
    "name": "Idaho",
    "level": 10,
    "status": "Illegal (Total ban with narrow life/rape exceptions)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 2,
    "gridY": 1
  },
  {
    "code": "IN",
    "name": "Indiana",
    "level": 9,
    "status": "Illegal (Near-total ban with limited life, health, rape, or lethal fetal exceptions)",
    "gestationalLimit": "Banned (narrow exceptions)",
    "gridX": 7,
    "gridY": 3
  },
  {
    "code": "KY",
    "name": "Kentucky",
    "level": 10,
    "status": "Illegal (Total ban except to save mother's life)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 7,
    "gridY": 4
  },
  {
    "code": "LA",
    "name": "Louisiana",
    "level": 10,
    "status": "Illegal (Total ban with narrow life/medically futile exceptions)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 5,
    "gridY": 6
  },
  {
    "code": "MS",
    "name": "Mississippi",
    "level": 10,
    "status": "Illegal (Total ban except to save life or reported rape)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 6,
    "gridY": 6
  },
  {
    "code": "OK",
    "name": "Oklahoma",
    "level": 10,
    "status": "Illegal (Total ban except to save mother's life)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 4,
    "gridY": 4
  },
  {
    "code": "SD",
    "name": "South Dakota",
    "level": 10,
    "status": "Illegal (Total ban except to save mother's life)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 4,
    "gridY": 0
  },
  {
    "code": "TN",
    "name": "Tennessee",
    "level": 10,
    "status": "Illegal (Total ban except to save mother's life)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 7,
    "gridY": 5
  },
  {
    "code": "TX",
    "name": "Texas",
    "level": 10,
    "status": "Illegal (Total ban except narrow life-saving medical emergency)",
    "gestationalLimit": "Banned at all stages",
    "gridX": 4,
    "gridY": 5
  },
  {
    "code": "WV",
    "name": "West Virginia",
    "level": 9,
    "status": "Illegal (Near-total ban with narrow medical emergency and early rape exceptions)",
    "gestationalLimit": "Banned (narrow exceptions)",
    "gridX": 8,
    "gridY": 3
  }
];

export const WIKIPEDIA_CANADA_PROVINCES_DATA = [
  {
    "code": "BC",
    "name": "British Columbia",
    "level": 1,
    "status": "Legal at all stages; available on request up to 24 weeks and 6 days (~25 weeks)",
    "gestationalLimit": "First 25 weeks (Legal at all stages)",
    "gridX": 1,
    "gridY": 2
  },
  {
    "code": "ON",
    "name": "Ontario",
    "level": 1,
    "status": "Legal at all stages; available on request up to 24 weeks",
    "gestationalLimit": "First 24 weeks (Legal at all stages)",
    "gridX": 5,
    "gridY": 2
  },
  {
    "code": "QC",
    "name": "Quebec",
    "level": 1,
    "status": "Legal at all stages; available on request up to 24 weeks (and later in specialized centers)",
    "gestationalLimit": "First 24 weeks (Legal at all stages)",
    "gridX": 6,
    "gridY": 2
  },
  {
    "code": "AB",
    "name": "Alberta",
    "level": 2,
    "status": "Legal at all stages; available on request up to 20 weeks",
    "gestationalLimit": "First 20 weeks (Legal at all stages)",
    "gridX": 2,
    "gridY": 2
  },
  {
    "code": "NT",
    "name": "Northwest Territories",
    "level": 2,
    "status": "Legal at all stages; available up to 19 to 20 weeks",
    "gestationalLimit": "First 20 weeks (Legal at all stages)",
    "gridX": 2,
    "gridY": 1
  },
  {
    "code": "NU",
    "name": "Nunavut",
    "level": 2,
    "status": "Legal at all stages; available up to 19 to 20 weeks (and via regional referral)",
    "gestationalLimit": "First 20 weeks (Legal at all stages)",
    "gridX": 4,
    "gridY": 1
  },
  {
    "code": "SK",
    "name": "Saskatchewan",
    "level": 2,
    "status": "Legal at all stages; available up to 19 weeks in province",
    "gestationalLimit": "First 19 weeks (Legal at all stages)",
    "gridX": 3,
    "gridY": 2
  },
  {
    "code": "MB",
    "name": "Manitoba",
    "level": 3,
    "status": "Legal at all stages; available up to 16 weeks in province (later by referral)",
    "gestationalLimit": "First 16 weeks in-province",
    "gridX": 4,
    "gridY": 2
  },
  {
    "code": "NB",
    "name": "New Brunswick",
    "level": 3,
    "status": "Legal at all stages; available up to 16 weeks in province",
    "gestationalLimit": "First 16 weeks in-province",
    "gridX": 7,
    "gridY": 2
  },
  {
    "code": "NS",
    "name": "Nova Scotia",
    "level": 3,
    "status": "Legal at all stages; available up to 16 weeks in province",
    "gestationalLimit": "First 16 weeks in-province",
    "gridX": 8,
    "gridY": 2
  },
  {
    "code": "NL",
    "name": "Newfoundland and Labrador",
    "level": 3,
    "status": "Legal at all stages; available up to 15 to 16 weeks in province",
    "gestationalLimit": "First 16 weeks in-province",
    "gridX": 8,
    "gridY": 1
  },
  {
    "code": "YT",
    "name": "Yukon",
    "level": 3,
    "status": "Legal at all stages; available up to 13 weeks locally (and up to 25 weeks in BC)",
    "gestationalLimit": "First 13 weeks locally",
    "gridX": 1,
    "gridY": 1
  },
  {
    "code": "PE",
    "name": "Prince Edward Island",
    "level": 3,
    "status": "Legal at all stages; available up to 12 weeks locally (and later via regional partner clinics)",
    "gestationalLimit": "First 12 weeks locally",
    "gridX": 8,
    "gridY": 3
  }
];

export const WIKIPEDIA_AUSTRALIA_STATES_DATA = [
  {
    "code": "ACT",
    "name": "Australian Capital Territory",
    "level": 1,
    "status": "Legal at any stage if provided by a medical doctor (Free for ACT residents)",
    "gestationalLimit": "No gestational limit (Legal at any stage)",
    "gridX": 4,
    "gridY": 3
  },
  {
    "code": "VIC",
    "name": "Victoria",
    "level": 2,
    "status": "Available on request for the first 24 weeks (5.5 months); beyond 24 weeks with two doctors' approval",
    "gestationalLimit": "First 24 weeks (5.5 months)",
    "gridX": 3,
    "gridY": 4
  },
  {
    "code": "NT",
    "name": "Northern Territory",
    "level": 2,
    "status": "Available on request for the first 24 weeks (5.5 months); beyond 24 weeks with two doctors' approval",
    "gestationalLimit": "First 24 weeks (5.5 months)",
    "gridX": 2,
    "gridY": 1
  },
  {
    "code": "WA",
    "name": "Western Australia",
    "level": 2,
    "status": "Available on request for the first 23 weeks (5.5 months); beyond 23 weeks with two doctors' approval",
    "gestationalLimit": "First 23 weeks (5.5 months)",
    "gridX": 1,
    "gridY": 2
  },
  {
    "code": "SA",
    "name": "South Australia",
    "level": 2,
    "status": "Available on request for the first 22 weeks and 6 days (~23 weeks); later with two doctors' approval",
    "gestationalLimit": "First 23 weeks (5.5 months)",
    "gridX": 2,
    "gridY": 3
  },
  {
    "code": "NSW",
    "name": "New South Wales",
    "level": 2,
    "status": "Available on request for the first 22 weeks (5 months); beyond 22 weeks with two doctors' approval",
    "gestationalLimit": "First 22 weeks (5 months)",
    "gridX": 4,
    "gridY": 2
  },
  {
    "code": "QLD",
    "name": "Queensland",
    "level": 2,
    "status": "Available on request for the first 22 weeks (5 months); beyond 22 weeks with two doctors' approval",
    "gestationalLimit": "First 22 weeks (5 months)",
    "gridX": 4,
    "gridY": 1
  },
  {
    "code": "TAS",
    "name": "Tasmania",
    "level": 3,
    "status": "Available on request for the first 16 weeks (4 months); beyond 16 weeks with two doctors' approval",
    "gestationalLimit": "First 16 weeks (4 months)",
    "gridX": 3,
    "gridY": 5
  }
];

export const WIKIPEDIA_EUROPE_TERM_LIMITS_DATA = [
  {
    "code": "NL",
    "name": "Netherlands",
    "level": 2,
    "status": "Legal on request for the first 24 weeks",
    "gestationalLimit": "24 weeks"
  },
  {
    "code": "GB",
    "name": "Great Britain (England, Scotland, Wales)",
    "level": 2,
    "status": "Available through 24 weeks on broad health & socio-economic grounds",
    "gestationalLimit": "24 weeks"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "level": 2,
    "status": "Legal on request for the first 22 weeks",
    "gestationalLimit": "22 weeks"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "level": 2,
    "status": "Legal on request for the first 18 weeks (and up to 22 weeks with approval)",
    "gestationalLimit": "18 weeks"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (expanding to 18 weeks)",
    "gestationalLimit": "12 to 18 weeks"
  },
  {
    "code": "FR",
    "name": "France",
    "level": 3,
    "status": "Constitutional right; legal on request for the first 14 weeks (16 weeks LMP)",
    "gestationalLimit": "14 weeks (16 wks LMP)"
  },
  {
    "code": "ES",
    "name": "Spain",
    "level": 3,
    "status": "Legal on request for the first 14 weeks (and up to 22 weeks for health/fetal risk)",
    "gestationalLimit": "14 weeks"
  },
  {
    "code": "RO",
    "name": "Romania",
    "level": 3,
    "status": "Legal on request for the first 14 weeks",
    "gestationalLimit": "14 weeks"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "level": 3,
    "status": "Legal on request for the first 12 weeks from conception (14 weeks LMP)",
    "gestationalLimit": "12 weeks (14 wks LMP)"
  },
  {
    "code": "DE",
    "name": "Germany",
    "level": 3,
    "status": "Legal on request for the first 12 weeks from conception (14 weeks LMP) with counseling",
    "gestationalLimit": "12 weeks (14 wks LMP)"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "level": 3,
    "status": "Legal on request for the first 12 weeks from conception (14 weeks LMP)",
    "gestationalLimit": "12 weeks (14 wks LMP)"
  },
  {
    "code": "AT",
    "name": "Austria",
    "level": 3,
    "status": "Legal on request during the first 3 months (13 to 16 weeks LMP)",
    "gestationalLimit": "3 months (~13 to 16 wks)"
  },
  {
    "code": "IT",
    "name": "Italy",
    "level": 3,
    "status": "Legal on request during the first 90 days (~13 weeks LMP)",
    "gestationalLimit": "90 days (~13 weeks)"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "NO",
    "name": "Norway",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (expanding to 18 weeks)",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "FI",
    "name": "Finland",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (since 2023 reform) and up to 20 to 24 weeks on social/medical grounds",
    "gestationalLimit": "12 weeks (20-24 wks broad grounds)"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "GR",
    "name": "Greece",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "CZ",
    "name": "Czechia",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "AL",
    "name": "Albania",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "MK",
    "name": "North Macedonia",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "MD",
    "name": "Moldova",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (up to 22 weeks on broad social/medical grounds)",
    "gestationalLimit": "12 weeks (22 wks broad)"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (up to 22 weeks on broad grounds)",
    "gestationalLimit": "12 weeks (22 wks broad)"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (up to 22 weeks on social grounds)",
    "gestationalLimit": "12 weeks (22 wks social)"
  },
  {
    "code": "RU",
    "name": "Russia",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (up to 22 weeks for rape)",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "level": 3,
    "status": "Legal on request for the first 12 weeks (19 weeks for rape)",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "level": 3,
    "status": "Legal on request for the first 12 weeks",
    "gestationalLimit": "12 weeks"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "level": 3,
    "status": "Legal on request for the first 11 weeks (up to 21 weeks for medical/age reasons)",
    "gestationalLimit": "11 weeks"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "level": 3,
    "status": "Legal on request for the first 10 weeks",
    "gestationalLimit": "10 weeks"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "level": 3,
    "status": "Legal on request for the first 10 weeks",
    "gestationalLimit": "10 weeks"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "level": 3,
    "status": "Legal on request for the first 10 weeks from conception",
    "gestationalLimit": "10 weeks"
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "level": 3,
    "status": "Legal on request for the first 10 weeks",
    "gestationalLimit": "10 weeks"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "level": 3,
    "status": "Legal on request for the first 10 weeks",
    "gestationalLimit": "10 weeks"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "level": 3,
    "status": "Legal on request for the first 10 weeks",
    "gestationalLimit": "10 weeks"
  },
  {
    "code": "TR",
    "name": "T\u00fcrkiye",
    "level": 3,
    "status": "Legal on request for the first 10 weeks",
    "gestationalLimit": "10 weeks"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "level": 7,
    "status": "Restricted: Permitted only for risk to life/health, rape, or severe fetal abnormality",
    "gestationalLimit": "Restricted (Specific grounds)"
  },
  {
    "code": "PL",
    "name": "Poland",
    "level": 8,
    "status": "Heavily restricted: Permitted only for risk to life/health or pregnancy from rape/incest",
    "gestationalLimit": "Restricted (Life/Health/Rape)"
  },
  {
    "code": "MT",
    "name": "Malta",
    "level": 10,
    "status": "Illegal except strictly when the woman's life is at immediate risk",
    "gestationalLimit": "Prohibited (Life threat only)"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "level": 10,
    "status": "Illegal under all circumstances",
    "gestationalLimit": "Prohibited (Total ban)"
  }
];
