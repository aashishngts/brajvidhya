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
const services = [
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
    title: "Energy Audit / Inspection",
    shortDesc: "Systematic inspection and analysis of energy flows.",
    points: [
      "Industrial facility audits",
      "Energy flow mapping",
      "Savings roadmap",
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
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />{" "}
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
    title: "Environmental Audit",
    shortDesc:
      "Objective, documented evaluation of an organization's environmental performance and sustainability compliance.",
    points: [
      "Regulatory & legal compliance review",
      "Environmental impact identification",
      "Sustainability performance assessment",
      "Corrective action & risk report",
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
        <path d="M12 22V12M12 12C12 7 7 5 7 5a5 5 0 0 1 10 0c0 0-5 2-5 7z" />{" "}
        <path d="M5 22c0-3 2-5 7-5s7 2 7 5" />{" "}
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
          to="/contact"
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
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: C.gold }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-24 relative z-10">
        <div className="max-w-3xl">
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            What We Offer
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our <span style={{ color: C.gold }}>Services</span>
          </h1>
          <p
            className="text-lg leading-relaxed mb-8"
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
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
