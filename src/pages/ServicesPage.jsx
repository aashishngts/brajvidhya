import React, { useState } from "react";
import { Link } from "react-router-dom";
import fssaiLogo from "../assets/accreditations/fssai.png";
import qciLogo from "../assets/accreditations/qci.png";
import zedLogo from "../assets/accreditations/zed.png";
import beeLogo from "../assets/accreditations/bee.png";
import ifeLogo from "../assets/accreditations/ife.png";
import envLogo from "../assets/accreditations/environment.png";
import eatRightLogo from "../assets/accreditations/eri.png";
import safetyLogo from "../assets/accreditations/cpcb.png";
const C = {
  green: "#1a3d2b",
  greenDk: "#0d2b1c",
  greenMd: "#2a5a3e",
  gold: "#b8962e",
  goldLt: "#d4aa42",
  cream: "#f5f0e8",
  creamDk: "#ede6d6",
  white: "#ffffff",
  muted: "#6a8a7a",
  textDk: "#1a2e23",
};

// ── SERVICE DATA ────────────────────────────────────────────
export const services = [
  {
    num: "01",
    badgeImg: fssaiLogo,
    title: "FSSAI Third Party Audit",
    shortDesc:
      "Independent food safety audits ensuring compliance with FSSAI regulations, hygiene standards, and food handling practices across licensed food businesses.",
    points: [
      "HACCP & ISO 22000 compliance checks",
      "Licensed FBO facility auditing",
      "Detailed non-conformance reports",
      "Post-audit corrective action guidance",
    ],
    detailContent: {
      introduction: `
Brajvidhya Services Private Limited is engaged in conducting FSSAI Third Party Audits for Food Business Operators (FBOs) as per the guidelines and requirements of the Food Safety and Standards Authority of India (FSSAI).

Our audit services are designed to assess the implementation and effectiveness of Food Safety Management Systems (FSMS) in food manufacturing, processing, storage, distribution, catering, and retail establishments.
    `,

      complianceRequirements: [
        "Food Safety and Standards Act & Regulations",
        "Schedule 4 requirements of FSSAI",
        "Good Manufacturing Practices (GMP)",
        "Good Hygiene Practices (GHP)",
        "Food Safety Management System requirements"
      ],

      auditCoverage: [
        "Infrastructure and facility hygiene",
        "Personal hygiene practices",
        "Process control and operational management",
        "Cleaning and sanitation systems",
        "Pest control management",
        "Documentation and record maintenance",
        "Traceability and product recall system",
        "Storage, transportation and handling practices"
      ],

      objectives: [
        "Ensure implementation of GMP and GHP.",
        "Evaluate effectiveness of Food Safety Management Systems.",
        "Identify gaps, non-conformities and food safety risks.",
        "Improve hygiene and sanitation conditions.",
        "Promote safe manufacturing, handling, storage and distribution.",
        "Strengthen consumer confidence through safe food practices.",
        "Encourage continuous improvement and regulatory compliance.",
        "Support regulatory authorities in enhancing food safety standards."
      ],

      manufacturingTable: [
        {
          handlers: "0-50",
          lines: "1",
          mandays: "0.5"
        },
        {
          handlers: "51-100",
          lines: "1-2",
          mandays: "1"
        },
        {
          handlers: "101-300",
          lines: "4",
          mandays: "1.5"
        },
        {
          handlers: "301-600",
          lines: "6",
          mandays: "2"
        },
        {
          handlers: "601-1000",
          lines: "8",
          mandays: "2.5"
        },
        {
          handlers: ">1000",
          lines: "10+",
          mandays: "3"
        }
      ],

      cateringTable: [
        {
          handlers: "0-25",
          mandays: "0.5"
        },
        {
          handlers: "26-50",
          mandays: "1"
        },
        {
          handlers: "51-100",
          mandays: "1.5"
        },
        {
          handlers: "101-1000",
          mandays: "2"
        }
      ],

      storageTable: [
        {
          area: "<15000",
          mandays: "0.5"
        },
        {
          area: "15001-50000",
          mandays: "1"
        },
        {
          area: ">50000",
          mandays: "1.5"
        }
      ],

      feeTable: [
        {
          handlers: "0-50",
          mandays: "0.5",
          fee: "₹9,000"
        },
        {
          handlers: "51-100",
          mandays: "1",
          fee: "₹12,000"
        },
        {
          handlers: "101-300",
          mandays: "1.5",
          fee: "₹15,000"
        },
        {
          handlers: "301-600",
          mandays: "2",
          fee: "₹20,000"
        },
        {
          handlers: "601-1000",
          mandays: "2.5",
          fee: "₹25,000"
        },
        {
          handlers: ">1000",
          mandays: "3",
          fee: "₹28,000"
        }
      ]
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {" "}
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />{" "}
        <rect x="9" y="3" width="6" height="4" rx="2" />{" "}
        <path d="m9 12 2 2 4-4" />{" "}
      </svg>
    ),
  },
  {
    num: "02",
    badgeImg: qciLogo,
    title: "Hygiene Rating Audit (HRA)",
    shortDesc:
      "FSSAI's transparent scoring scheme that rates food establishments on a 1–5 smiley scale.",

    detailContent: {
      introduction: `
Brajvidhya Services Private Limited is engaged in conducting Hygiene Rating Audits for Food Business Operators (FBOs) in accordance with the guidelines and requirements prescribed by the Food Safety and Standards Authority of India (FSSAI).

The Hygiene Rating Scheme aims to promote food safety, improve hygiene practices, and create consumer awareness regarding food hygiene standards.

Our organization provides professional, transparent, and impartial audit services through qualified and trained auditors to assess compliance with food safety and hygiene requirements.
  `,

      objectives: [
        "To evaluate the hygiene and sanitary conditions of food establishments.",
        "To ensure compliance with FSSAI Food Safety & Hygiene Regulations.",
        "To enhance consumer confidence in food businesses.",
        "To encourage food establishments to adopt best hygiene practices.",
        "To identify gaps and recommend corrective actions for continual improvement.",
        "To support the Eat Right India initiative of FSSAI."
      ],

      purposes: [
        "Encourage food businesses to maintain high hygiene standards and showcase them to consumers.",
        "Motivate food businesses with lower hygiene standards to improve.",
        "Allow consumers to make informed food choices and cultivate responsible eating habits."
      ],

      businessTypes: [
        "Hotels",
        "Restaurants",
        "Cafeterias",
        "Dhabas",
        "Bakeries",
        "Meat Retail Shops",
        "Sweet Shops (Mithai Shops)"
      ],

      ratingTable: [
        { rating: 5, category: "Excellent", score: "81 - 100%" },
        { rating: 4, category: "Very Good", score: "61 - 80%" },
        { rating: 3, category: "Good", score: "41 - 60%" },
        { rating: 2, category: "Needs Improvement", score: "21 - 40%" },
        { rating: 1, category: "Urgent Improvement", score: "20% or below" },
      ],

      feeTable: [
        {
          handlers: "< 50",
          mandays: "0.5",
          fee: "₹8,000"
        },
        {
          handlers: "< 100",
          mandays: "1",
          fee: "₹12,000"
        },
        {
          handlers: "> 100",
          mandays: "1.5",
          fee: "₹15,000"
        }
      ]
    },

    points: [
      "Hotels, restaurants & dhabas",
      "1–5 smiley hygiene scoring",
      "Schedule 4 compliance verification",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {" "}
        <circle
          cx="12"
          cy="12"
          r="10"
        /> <path d="M8 14s1.5 2 4 2 4-2 4-2" />{" "}
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />{" "}
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />{" "}
      </svg>
    ),
  },
  {
    num: "03",
    badgeImg: zedLogo,
    title: "ZED Assessment",
    shortDesc: "Government of India's MSME Sustainable Certification Scheme.",
    points: [
      "Bronze to Diamond levels",
      "QCI-approved assessment body",
      "On-site evaluation",
    ],
    detailContent: {
      introduction: `
Brajvidhya Services Private Limited provides professional consultancy and assessment support services for MSMEs under the Government of India's Zero Defect Zero Effect (ZED) Certification Scheme.

The ZED Scheme, promoted by the Ministry of MSME, aims to enhance quality, productivity, environmental sustainability, and global competitiveness of Indian MSMEs.

Our organization is committed to supporting industries in adopting world-class manufacturing practices while ensuring minimal environmental impact through structured implementation and continuous improvement approaches.
    `,

      benefits: [
        "Improved product quality",
        "Enhanced operational efficiency",
        "Reduced rejection and wastage",
        "Better environmental sustainability",
        "Increased customer confidence",
        "Competitive advantage in domestic and international markets",
        "Access to government support and incentives"
      ],

      whyChooseUs: [
        "Experienced professionals in quality and compliance systems",
        "Practical industry-oriented implementation approach",
        "Strong understanding of MSME operational challenges",
        "Focus on sustainable and process-driven improvements",
        "Dedicated support throughout the ZED assessment journey",
        "Commitment to transparency, professionalism, and timely execution"
      ],

      processFlow: [
        {
          step: "1",
          title: "ZED Pledge & Registration",
          description:
            "The MSME pledges to uphold quality and environmental standards and registers on the ZED portal using Udyam Registration."
        },
        {
          step: "2",
          title: "Self Assessment",
          description:
            "Online questionnaire submission to evaluate maturity level and desired certification level."
        },
        {
          step: "3",
          title: "Desktop Assessment",
          description:
            "Assessment of uploaded documents and evidence remotely for completeness and conformance."
        },
        {
          step: "4",
          title: "On-Site Assessment",
          description:
            "Certified assessors conduct a physical assessment visit to verify implementation."
        },
        {
          step: "5",
          title: "NC Closure",
          description:
            "Non-conformities are addressed and closed within the specified timeline."
        },
        {
          step: "6",
          title: "Certification & Reporting",
          description:
            "Final certification is issued after successful evaluation and review."
        }
      ]
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {" "}
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />{" "}
      </svg>
    ),
  },
  {
    num: "04",
    badgeImg: beeLogo,
    title: "Energy Audit / Inspection (Non - NABC Accredited)",
    shortDesc:
      "Systematic inspection and analysis of energy flows.",

    points: [
      "Industrial facility audits",
      "Energy flow mapping",
      "Savings roadmap",
    ],

    detailContent: {
      introduction: `
At Brajvidhya Services Private Limited, we provide comprehensive Energy Audit and Inspection services to help industries, commercial establishments, and institutions optimize energy consumption, reduce operational costs, and improve overall efficiency.

Our expert team conducts detailed assessments of electrical systems, equipment performance, power quality, and energy utilization patterns. We identify energy losses, recommend cost-effective energy-saving solutions, and ensure compliance with applicable standards and safety regulations.
    `,

      objectives: [
        "Optimize energy consumption",
        "Reduce operational costs",
        "Improve energy efficiency",
        "Identify energy losses and wastage",
        "Enhance equipment performance",
        "Support sustainable energy management"
      ],

      services: [
        "Electrical Energy Audit",
        "Power Quality Analysis",
        "Load Assessment & Optimization",
        "Energy Efficiency Inspection",
        "Thermal Scanning & Preventive Inspection",
        "Energy Saving Recommendations",
        "Compliance & Safety Evaluation"
      ],

      benefits: [
        "Reduced energy consumption",
        "Lower operating costs",
        "Improved system reliability",
        "Better power quality",
        "Enhanced equipment lifespan",
        "Compliance with energy regulations",
        "Sustainable operational performance"
      ]
    },

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    num: "05",
    badgeImg: ifeLogo,
    title: "Fire Safety Inspection",
    shortDesc: "IFE-approved fire safety audits aligned with NBC standards.",
    points: ["NBC compliance", "Evacuation assessment", "Risk reporting"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {" "}
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />{" "}
      </svg>
    ),
  },
  {
    num: "06",
    badgeImg: envLogo,
    title: "Environmental Audit (Non - NABC Accredited)",
    shortDesc:
      "Objective, documented evaluation of an organization's environmental performance and sustainability compliance.",

    points: [
      "Regulatory & legal compliance review",
      "Environmental impact identification",
      "Sustainability performance assessment",
      "Corrective action & risk report",
    ],

    detailContent: {
      introduction: `
Brajvidhya Services provides professional Environmental Audit services to help organizations assess their environmental performance, ensure regulatory compliance, and promote sustainable practices.

Our audits focus on identifying environmental risks, improving resource efficiency, waste management, pollution control, and compliance with environmental standards and government regulations.

We deliver reliable assessments and practical recommendations that support businesses in achieving environmental responsibility and sustainable growth.
    `,

      objectives: [
        "Assess environmental performance",
        "Ensure regulatory compliance",
        "Promote sustainable business practices",
        "Improve resource efficiency",
        "Reduce environmental risks",
        "Support sustainable growth"
      ],

      services: [
        "Environmental Compliance Audit",
        "Waste Management Assessment",
        "Pollution Control Evaluation",
        "Energy & Resource Efficiency Review",
        "Sustainability Reporting Support",
        "Environmental Risk Assessment"
      ],

      benefits: [
        "Improved environmental compliance",
        "Better waste management practices",
        "Enhanced sustainability performance",
        "Reduced environmental risks",
        "Improved resource utilization",
        "Support for ESG and sustainability goals"
      ]
    },

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 22V12M12 12C12 7 7 5 7 5a5 5 0 0 1 10 0c0 0-5 2-5 7z" />
        <path d="M5 22c0-3 2-5 7-5s7 2 7 5" />
      </svg>
    ),
  },
  {
    num: "07",
    badgeImg: eatRightLogo,
    title: "Eat Right Initiative",
    shortDesc:
      "FSSAI's national movement for safe, healthy and sustainable food certification programs.",
    points: [
      "Eat Right Campus & School certification",
      "Clean Street Food Hub inspections",
      "Place of Worship audits",
      "2-year certification validity",
    ],
    detailContent: {
      introduction: `
Brajvidhya Services Private Limited supports the Eat Right Initiative by promoting safe, healthy, and sustainable food practices in organizations, institutions, workplaces, and food businesses.

The initiative focuses on improving food safety standards, encouraging balanced nutrition, and creating awareness about healthy eating habits for a healthier society.

Our services help institutions and businesses maintain hygiene, food quality, and compliance with food safety guidelines while building a culture of wellness and nutrition awareness.
  `,

      objectives: [
        "Promote safe and hygienic food practices",
        "Encourage healthy and balanced nutrition",
        "Improve food safety standards",
        "Create awareness about healthy eating habits",
        "Support sustainable food practices",
        "Build a culture of wellness and nutrition awareness"
      ],

      services: [
        "Food Safety & Hygiene Assessment",
        "Healthy Canteen & Kitchen Evaluation",
        "Nutrition & Wellness Awareness Programs",
        "Safe Food Handling Practices",
        "Clean Drinking Water & Sanitation Review",
        "Waste Management & Sustainable Food Practices",
        "Staff Training on Food Safety Standards",
        "Compliance Support for Food Safety Guidelines",
        "Health & Nutrition Campaigns",
        "Awareness Workshops for Schools, Offices & Institutions"
      ],

      coverage: [
        "Safe and hygienic food preparation",
        "Balanced and nutritious diet promotion",
        "Reduction of food contamination risks",
        "Healthy workplace and institutional food environments",
        "Sustainable and eco-friendly food practices",
        "Public health and wellness awareness",
        "Improvement of overall food quality standards"
      ],

      feeTable: [
        {
          initiative: "Eat Right Campus",
          fee: "₹15,000"
        },
        {
          initiative: "Eat Right Place of Worship",
          fee: "₹15,000"
        },
        {
          initiative: "Eat Right Station",
          fee: "₹20,000"
        },
        {
          initiative: "Eat Right School",
          fee: "₹20,000"
        },
        {
          initiative: "Eat Right Street Food Hub",
          fee: "₹1,500 per FBO"
        },
        {
          initiative: "Eat Right Fruit & Vegetable",
          fee: "₹1,500 per FBO"
        }
      ]
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {" "}
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />{" "}
        <path d="m9 12 2 2 4-4" />{" "}
      </svg>
    ),
  },
  {
    num: "08",
    badgeImg: safetyLogo,
    title: "Safety Audit / Inspection",
    shortDesc:
      "Comprehensive examination of workplace safety procedures and regulatory compliance.",
    points: [
      "Workplace PPE audit",
      "Legal standards compliance",
      "Safety procedure gap analysis",
      "Corrective action reporting",
    ],
    detailContent: {
      introduction: `
Brajvidhya Services Private Limited provides comprehensive Safety Audit and Inspection Services to help organizations maintain a safe, healthy, and compliant working environment.

Our safety assessments identify workplace hazards, evaluate safety practices, and ensure adherence to industrial safety standards and regulatory requirements.

We focus on minimizing risks, preventing accidents, improving operational safety, and promoting a strong safety culture across industries, institutions, offices, and project sites.
  `,

      objectives: [
        "Identify workplace hazards and unsafe practices",
        "Evaluate safety management systems",
        "Prevent accidents and reduce operational risks",
        "Improve workplace safety performance",
        "Ensure compliance with safety regulations",
        "Promote a strong safety culture"
      ],

      services: [
        "Workplace Safety Assessment",
        "Hazard Identification & Risk Analysis",
        "Fire Safety Inspection",
        "Electrical Safety Audit",
        "Machinery & Equipment Safety Check",
        "PPE Compliance Review",
        "Emergency Preparedness & Evacuation Assessment",
        "Housekeeping & Workplace Hygiene Inspection",
        "Compliance with Safety Rules & Regulations",
        "Safety Documentation & Reporting",
        "Corrective & Preventive Action Recommendations",
        "Employee Safety Awareness & Training Support"
      ],

      coverage: [
        "Identification of unsafe conditions and practices",
        "Evaluation of safety management systems",
        "Inspection of fire protection and emergency systems",
        "Review of workplace health and safety procedures",
        "Risk reduction and accident prevention measures",
        "Monitoring compliance with legal and industrial safety standards",
        "Improvement of workplace safety performance and employee well-being"
      ]
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {" "}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />{" "}
        <polyline points="9 12 11 14 15 10" />{" "}
      </svg>
    ),
  },
  {
    num: "09",
    badgeImg: safetyLogo, // replace with your own logo if available
    title: "Verification & Validation",
    shortDesc:
      "Independent TPIA verification and validation services for systems, processes, and operational compliance.",
    points: [
      "Third Party Inspection Agency (TPIA) services",
      "System & process compliance verification",
      "Operational effectiveness validation",
      "Risk identification & continual improvement",
    ],
    detailContent: {
  introduction: `
Brajvidhya Services Private Limited offers professional Verification & Validation (V&V) Services to ensure that systems, processes, products, and operational practices meet specified requirements, quality standards, and regulatory expectations.

Our services help organizations improve reliability, accuracy, compliance, and overall performance through systematic evaluation and assessment.

Verification focuses on confirming that processes and systems are developed and implemented correctly, while validation ensures that the final outcome fulfills intended objectives and operational needs.
  `,

  objectives: [
    "Ensure compliance with specified requirements and standards",
    "Improve reliability and operational performance",
    "Verify implementation of systems and processes",
    "Validate intended outcomes and effectiveness",
    "Identify risks, gaps, and improvement opportunities",
    "Support continuous improvement and quality assurance"
  ],

  services: [
    "Process Verification & Compliance Review",
    "Documentation Verification",
    "Quality & Performance Assessment",
    "System and Operational Validation",
    "Data Accuracy & Record Validation",
    "Inspection & Functional Evaluation",
    "Regulatory and Standard Compliance Checks",
    "Risk Identification & Gap Analysis",
    "Corrective & Preventive Action Recommendations",
    "Reporting and Technical Review Support"
  ],

  coverage: [
    "Verification of procedures, records, and operational practices",
    "Validation of systems, processes, and performance outcomes",
    "Accuracy and consistency checks of data and documentation",
    "Assessment of compliance with industry standards and regulations",
    "Evaluation of effectiveness, reliability, and quality assurance measures",
    "Identification of gaps, risks, and improvement opportunities"
  ]
},
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

// ── WHY US ──────────────────────────────────────────────────
const whyUs = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "NABCB Accredited Body",
    desc: "ISO/IEC 17020:2012 Type 'A' Inspection Body. Certificate No. IB 145, valid till March 2028.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Multi-Authority Recognized",
    desc: "Approved by FSSAI, QCI, IFE, BEE & MSME. Also a recognized Startup India entity.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Experienced Inspectors",
    desc: "15+ years collective director experience. Certified, trained & empanelled auditors across all states.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "100% Impartial Audits",
    desc: "Fully independent third-party body — zero conflicts of interest, fully transparent findings.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "PAN India Coverage",
    desc: "Serving clients across all states — metros, tier-2 cities and remote industrial facilities alike.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "End-to-End Support",
    desc: "From scoping and on-site inspection to corrective action follow-up and final certification.",
  },
];

// ── CARD COMPONENT ──────────────────────────────────────────
const ServiceCard = ({ s }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
          to={`/services/${s.num}`}
        >
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: C.white,
        border: `1.5px solid ${hovered ? C.gold + "80" : "#e4ddd0"}`,
        boxShadow: hovered
          ? "0 20px 60px rgba(26,61,43,0.14), 0 4px 16px rgba(184,150,46,0.1)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.38s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      {/* animated top bar */}
      <div
        className="h-[3px] w-full transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(90deg, ${C.gold}, ${C.green})`
            : "#ede6d6",
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* icon + tag row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-400"
            style={{
              background: hovered
                ? `linear-gradient(135deg, ${C.green}, ${C.greenDk})`
                : `${C.green}0f`,
              color: hovered ? C.gold : C.green,
              boxShadow: hovered ? "0 6px 20px rgba(26,61,43,0.35)" : "none",
            }}
          >
            {s.icon}
          </div>
          {s.badgeImg && (
            <div
              className="absolute top-4 right-4 p-2 rounded-lg"
              style={{
                background: hovered ? `${C.gold}15` : "#f9f6f0",
                border: `1px solid ${hovered ? C.gold + "50" : "#eee2cf"}`,
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={s.badgeImg}
                alt="accreditation"
                className="h-6 w-auto object-contain"
                style={{
                  filter: hovered ? "none" : "grayscale(100%)",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          )}
        </div>

        {/* number + title */}
        <p
          className="text-[11px] font-black mb-1 tracking-widest transition-colors duration-300"
          style={{ color: hovered ? C.gold + "aa" : "#c8bda0" }}
        >
          {s.num}
        </p>
        <h3
          className="font-black text-[17px] leading-snug mb-3 transition-colors duration-300"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: hovered ? C.green : C.textDk,
          }}
        >
          {s.title}
        </h3>

        {/* desc */}
        <p
          className="text-[13px] leading-relaxed mb-5"
          style={{ color: C.muted }}
        >
          {s.shortDesc}
        </p>

        {/* divider */}
        <div
          className="mb-4 h-px w-full transition-all duration-400"
          style={{ background: hovered ? `${C.gold}40` : "#f0ebe2" }}
        />

        {/* points */}
        <ul className="space-y-2 mb-6 flex-1">
          {s.points.map((pt, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[12px]"
              style={{ color: C.textDk }}
            >
              <span
                className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: hovered ? `${C.gold}20` : `${C.green}12` }}
              >
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={hovered ? C.gold : C.green}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {pt}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={`/services/${s.num}`}
          className="flex items-center gap-1.5 text-[12px] font-black transition-all duration-300 mt-auto w-fit"
          style={{ color: hovered ? C.gold : C.green }}
        >
          Enquire Now
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: hovered ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </div>
    </Link>
  );
};

// ══════════════════════════════════════════════════════════
const ServicesPage = () => (
  <div style={{ background: C.cream, fontFamily: "'DM Sans', sans-serif" }}>
    {/* ── HERO ──────────────────────────────────────── */}
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${C.greenDk} 0%, ${C.green} 60%, #1e4d35 100%)`,
        minHeight: "480px",
      }}
    >
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: C.gold }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
        style={{ background: C.gold, transform: "translate(-30%, 30%)" }}
      />
      {/* <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: C.gold }}
      /> */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-24 relative z-10">
        <div className="max-w-3xl">
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            What We Offer
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our <span style={{ color: C.gold }}>Services</span>
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Accredited inspection, auditing and certification services across
            food safety, energy, fire safety, environmental compliance and MSME
            assessment — delivered with integrity and precision across PAN
            India.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "8 Service Domains",
              "NABCB Accredited",
              "PAN India Coverage",
              "ISO/IEC 17020",
            ].map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(184,150,46,0.2)",
                  border: "1px solid rgba(184,150,46,0.4)",
                  color: C.goldLt,
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: 60 }}
      >
        <path
          d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,20 L1440,60 Z"
          fill={C.cream}
        />
      </svg>
    </section>

    {/* ── SERVICES GRID ─────────────────────────────── */}
    <section className="py-20 px-6 md:px-12" style={{ background: C.cream }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[10px] sm:text-[11px] font-bold tracking-[3px] sm:tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            Our Expertise
          </p>
          <h2
            className="text-4xl font-black mb-3"
            style={{
              color: C.green,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Inspection & Audit Services
          </h2>
          <div
            className="w-14 h-[3px] mx-auto mb-5"
            style={{ background: C.gold }}
          />
          <p className="max-w-xl mx-auto text-sm" style={{ color: C.muted }}>
            Each service is conducted under accredited frameworks by certified
            professionals — delivering transparent, evidence-based and
            actionable results.
          </p>
        </div>

        {/* 4-col desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.num} s={s} />
          ))}
        </div>
      </div>
    </section>

    {/* ── WHY CHOOSE US ─────────────────────────────── */}
    <section className="py-20 px-6 md:px-12" style={{ background: C.greenDk }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            Our Advantage
          </p>
          <h2
            className="text-4xl font-black text-white mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why Choose Brajvidhya?
          </h2>
          <div
            className="w-14 h-[3px] mx-auto"
            style={{ background: C.gold }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(184,150,46,0.18)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${C.gold}20`, color: C.gold }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="font-black text-sm mb-1.5 text-white">
                  {item.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS STEPS ─────────────────────────────── */}
    <section className="py-20 px-6 md:px-12" style={{ background: C.creamDk }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            Simple Process
          </p>
          <h2
            className="text-3xl font-black"
            style={{
              color: C.green,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            How to Get Started
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              step: "01",
              label: "Contact Us",
              desc: "Reach out via phone, email or our website contact form with your requirements.",
            },
            {
              step: "02",
              label: "Scope Discussion",
              desc: "Our team defines the audit scope, schedule and required documentation.",
            },
            {
              step: "03",
              label: "On-Site Inspection",
              desc: "Certified inspectors visit your facility and conduct the full audit.",
            },
            {
              step: "04",
              label: "Report & Certificate",
              desc: "Receive your detailed findings report and accreditation certificate.",
            },
          ].map((st, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl"
              style={{
                background: C.white,
                border: "1px solid #e4ddd0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* connector arrow for desktop */}
              {i < 3 && (
                <div
                  className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full"
                  style={{ background: C.gold }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={C.greenDk}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-5 font-black text-sm"
                style={{
                  background: `linear-gradient(135deg, ${C.gold}, #c9a030)`,
                  color: C.greenDk,
                }}
              >
                {st.step}
              </div>
              <h4
                className="font-black text-sm mb-2"
                style={{ color: C.green }}
              >
                {st.label}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* ── INTRO STRIP ───────────────────────────────── */}
    <section
      className="py-12 px-6 md:px-12 border-b"
      style={{ background: C.white, borderColor: "#e8e0d0" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
        <div className="flex-1">
          <h2
            className="text-2xl font-black mb-2"
            style={{
              color: C.green,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            India's Most Trusted Inspection Body
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            Every audit we conduct is backed by NABCB accreditation and
            delivered by certified professionals — ensuring unbiased, accurate,
            and legally compliant results for your business.
          </p>
        </div>
        <div className="flex gap-8 flex-shrink-0">
          {[
            ["15+", "Years Experience"],
            ["8", "Service Domains"],
            ["₹6Cr", "Annual Turnover"],
          ].map(([val, lbl]) => (
            <div key={lbl} className="text-center">
              <p
                className="text-3xl font-black"
                style={{
                  color: C.gold,
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                {val}
              </p>
              <p
                className="text-[10px] uppercase tracking-widest mt-1"
                style={{ color: C.muted }}
              >
                {lbl}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ───────────────────────────────────────── */}
    <section
      className="py-20 px-6 md:px-12 text-center"
      style={{
        background: `linear-gradient(135deg, ${C.gold} 0%, #c9a030 100%)`,
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl font-black mb-4"
          style={{
            color: C.greenDk,
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Ready to Get Certified?
        </h2>
        <p className="mb-8 text-sm" style={{ color: "rgba(13,43,28,0.7)" }}>
          Contact our team today to begin your audit journey with India's most
          trusted NABCB accredited inspection body.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full font-black text-sm transition-all duration-300"
            style={{ background: C.greenDk, color: C.gold }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.green)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.greenDk)}
          >
            Contact Our Team
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 rounded-full font-black text-sm border-2 transition-all duration-300"
            style={{
              borderColor: C.greenDk,
              color: C.greenDk,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.greenDk;
              e.currentTarget.style.color = C.gold;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = C.greenDk;
            }}
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
