import React, { useState } from "react";
import { Link } from "react-router-dom";

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

// ── GOALS DATA (from brochure) ──────────────────────────────
const goals = [
  {
    num: "01",
    title: "Ensure Food Safety",
    desc: "Verify compliance with national and international food safety standards including FSSAI, HACCP and ISO 22000 — protecting consumers and businesses alike.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Impartial Assessment",
    desc: "Provide fully unbiased inspections, independent of producers or buyers — maintaining complete impartiality as mandated under ISO/IEC 17020:2012 Type 'A' standards.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Promote Quality Assurance",
    desc: "Help food businesses and manufacturers maintain consistent product quality through structured audits, gap analyses and actionable improvement recommendations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Support Regulatory Compliance",
    desc: "Assist clients in meeting FSSAI, QCI, BEE and global certification requirements including HACCP, ISO 22000 and ZED — ensuring full statutory compliance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Fire Safety Excellence",
    desc: "Conduct Fire Safety Audits in strict accordance with National Building Code (NBC) standards, identifying hazards and assessing emergency preparedness for buildings and organizations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Digital Economy Participation",
    desc: "Actively participate in India's digital growth by adopting digital audit platforms, real-time reporting systems and transparent online compliance tracking for all clients.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
        <path d="M7 8h10M7 12h6" />
      </svg>
    ),
  },
];

// ── ROADMAP MILESTONES ──────────────────────────────────────
const roadmap = [
  {
    year: "2025",
    title: "Foundation Strengthened",
    items: [
      "NABCB IB 145 Accreditation secured",
      "FSSAI TPA Recognition granted",
      "QCI-HRAA agency recognition",
      "IFE Fire Safety Scheme approval",
    ],
    done: true,
  },
  {
    year: "2025–26",
    title: "Expansion Phase",
    items: [
      "ZED Assessment & Organising Partner roles",
      "Startup India DIPP recognition",
      "PAN India auditor empanelment",
      "Digital audit reporting rollout",
    ],
    done: true,
  },
  {
    year: "2026–27",
    title: "Scale & Impact",
    items: [
      "Expand to 20+ states actively",
      "Increase auditor training capacity",
      "Launch client self-service portal",
      "Strengthen PSU partnerships",
    ],
    done: false,
  },
  {
    year: "2028+",
    title: "Industry Leadership",
    items: [
      "Become top-5 inspection body in India",
      "International recognition & MRA tie-ups",
      "AI-assisted audit documentation",
      "Sustainability certification expansion",
    ],
    done: false,
  },
];

// ── COMMITMENT PILLARS ──────────────────────────────────────
const pillars = [
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
    title: "Capacity Building",
    desc: "Continuously train and certify inspectors to maintain the highest professional standards across all service domains.",
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
    title: "PAN India Reach",
    desc: "Strengthen operational presence in every major state — ensuring accessible, timely and reliable inspection services nationwide.",
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
        <path d="M12 22V12M12 12C12 7 7 5 7 5a5 5 0 0 1 10 0c0 0-5 2-5 7z" />
        <path d="M5 22c0-3 2-5 7-5s7 2 7 5" />
      </svg>
    ),
    title: "Sustainability Leadership",
    desc: "Promote environmentally responsible audits and actively encourage sustainable business practices through ZED and environmental audit services.",
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
    title: "Innovation & Technology",
    desc: "Adopt digital platforms for audit documentation, real-time compliance dashboards and transparent, accessible client reporting.",
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
    title: "Regulatory Integrity",
    desc: "Strengthen accreditation portfolio under national and international frameworks — expanding recognition and elevating audit credibility.",
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
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Client-Centric Excellence",
    desc: "Deliver transparent, efficient and value-driven audit solutions, tailored to each client's unique compliance and operational needs.",
  },
];

// ── GOAL CARD ───────────────────────────────────────────────
const GoalCard = ({ g }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: C.white,
        border: `1.5px solid ${hovered ? C.gold + "70" : "#e4ddd0"}`,
        boxShadow: hovered
          ? "0 20px 60px rgba(26,61,43,0.14)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
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

      <div className="p-7 flex flex-col flex-1">
        {/* num + icon row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-4xl font-black"
            style={{
              color: hovered ? `${C.gold}30` : "#e4ddd0",
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1,
            }}
          >
            {g.num}
          </span>
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-400"
            style={{
              background: hovered
                ? `linear-gradient(135deg, ${C.green}, ${C.greenDk})`
                : `${C.green}0f`,
              color: hovered ? C.gold : C.green,
              boxShadow: hovered ? "0 6px 20px rgba(26,61,43,0.35)" : "none",
            }}
          >
            {g.icon}
          </div>
        </div>

        <h3
          className="font-black text-[17px] leading-snug mb-3 transition-colors duration-300"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: hovered ? C.green : C.textDk,
          }}
        >
          {g.title}
        </h3>

        <p
          className="text-[13px] leading-relaxed flex-1"
          style={{ color: C.muted }}
        >
          {g.desc}
        </p>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════
const GoalPage = () => (
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
            Our Direction
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Goals &<br />
            <span style={{ color: C.gold }}>Future Vision</span>
          </h1>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Brajvidhya Services is committed to becoming India's most trusted
            inspection and certification body — driving quality, safety and
            compliance across every industry we serve.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "6 Strategic Goals",
              "PAN India Expansion",
              "Digital Innovation",
              "Industry Leadership",
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

    {/* ── VISION BANNER ─────────────────────────────── */}
    <section className="py-16 px-6 md:px-12" style={{ background: C.white }}>
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${C.green} 0%, ${C.greenDk} 100%)`,
            boxShadow: "0 30px 80px rgba(26,61,43,0.25)",
          }}
        >
          {/* decorative circle */}
          <div
            className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10"
            style={{ background: C.gold }}
          />
          <div
            className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full opacity-5"
            style={{ background: C.goldLt }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
                style={{ color: C.gold }}
              >
                Long-Term Vision
              </p>
              <h2
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                A Nationally Recognized Leader in Third-Party Inspection
              </h2>
              <div
                className="w-14 h-[3px] mb-5"
                style={{ background: C.gold }}
              />
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Brajvidhya Services Pvt. Ltd. aims to establish itself as the
                most trusted partner and industry leader in management system
                inspection — acknowledged by clients, regulatory bodies and the
                wider business community across India and beyond.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "IB 145", label: "NABCB Certificate" },
                { val: "2028", label: "Accreditation Valid" },
                { val: "6+", label: "Service Domains" },
                { val: "PAN India", label: "Coverage" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(184,150,46,0.2)",
                  }}
                >
                  <p
                    className="text-2xl font-black mb-1"
                    style={{
                      color: C.gold,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {val}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── STRATEGIC GOALS ───────────────────────────── */}
    <section className="py-20 px-6 md:px-12" style={{ background: C.creamDk }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            What We're Working Towards
          </p>
          <h2
            className="text-4xl font-black mb-3"
            style={{
              color: C.green,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Our Strategic Goals
          </h2>
          <div
            className="w-14 h-[3px] mx-auto mb-5"
            style={{ background: C.gold }}
          />
          <p className="max-w-xl mx-auto text-sm" style={{ color: C.muted }}>
            Directly aligned with the national food safety, fire safety, energy
            efficiency and manufacturing quality frameworks — driving measurable
            outcomes for every client.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {goals.map((g, i) => (
            <div
              key={g.num}
              className={`flex items-center gap-10 py-12 border-b ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
              style={{ borderColor: `${C.gold}25` }}
            >
              {/* Big Ghost Number */}
              <div
                className="text-[120px] font-black leading-none select-none shrink-0 w-40 text-center"
                style={{
                  color: `${C.gold}18`,
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                className={`flex-1 ${i % 2 !== 0 ? "text-right" : "text-left"}`}
              >
                <div
                  className="inline-block text-[10px] font-bold tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full"
                  style={{ background: `${C.gold}20`, color: C.gold }}
                >
                  Goal {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-2xl font-black mb-3"
                  style={{
                    color: C.green,
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {g.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm"
                  style={{ color: C.muted }}
                >
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── ROADMAP ───────────────────────────────────── */}
    <section className="py-20 px-6 md:px-12" style={{ background: C.greenDk }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            Our Journey
          </p>
          <h2
            className="text-4xl font-black text-white mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Growth Roadmap
          </h2>
          <div
            className="w-14 h-[3px] mx-auto"
            style={{ background: C.gold }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {roadmap.map((phase, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1.5px solid ${phase.done ? C.gold + "50" : "rgba(255,255,255,0.1)"}`,
              }}
            >
              {/* header */}
              <div
                className="px-6 pt-6 pb-4"
                style={{
                  background: phase.done
                    ? `linear-gradient(135deg, ${C.gold}20, ${C.gold}08)`
                    : "rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-black px-2.5 py-1 rounded-full"
                    style={{
                      background: phase.done ? C.gold : "rgba(255,255,255,0.1)",
                      color: phase.done ? C.greenDk : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {phase.year}
                  </span>
                  {phase.done && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.gold}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <h3
                  className="font-black text-base"
                  style={{
                    color: phase.done ? C.goldLt : "rgba(255,255,255,0.7)",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {phase.title}
                </h3>
              </div>
              {/* items */}
              <div
                className="px-6 pb-6 pt-3"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <ul className="space-y-2.5">
                  {phase.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-xs"
                      style={{
                        color: phase.done
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(255,255,255,0.4)",
                      }}
                    >
                      <span
                        className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                        style={{
                          background: phase.done
                            ? `${C.gold}30`
                            : "rgba(255,255,255,0.06)",
                        }}
                      >
                        <svg
                          width="7"
                          height="7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={phase.done ? C.gold : "rgba(255,255,255,0.3)"}
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── COMMITMENT PILLARS ────────────────────────── */}
    <section className="py-20 px-6 md:px-12" style={{ background: C.cream }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
            style={{ color: C.gold }}
          >
            How We Get There
          </p>
          <h2
            className="text-4xl font-black mb-3"
            style={{
              color: C.green,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Our Commitment to the Future
          </h2>
          <div
            className="w-14 h-[3px] mx-auto mb-5"
            style={{ background: C.gold }}
          />
          <p className="max-w-xl mx-auto text-sm" style={{ color: C.muted }}>
            We are committed to adopting emerging technologies, enhancing
            auditor competencies and strengthening regulatory partnerships to
            set new benchmarks in inspection quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl"
              style={{
                background: C.white,
                border: "1px solid #e4ddd0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${C.gold}15`, color: C.gold }}
              >
                {p.icon}
              </div>
              <div>
                <h4
                  className="font-black text-sm mb-1.5"
                  style={{ color: C.green }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: C.muted }}
                >
                  {p.desc}
                </p>
              </div>
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
          Partner With Us
        </h2>
        <p className="mb-8 text-sm" style={{ color: "rgba(13,43,28,0.7)" }}>
          Join hands with Brajvidhya Services to ensure compliance, quality and
          sustainable growth for your business across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full font-black text-sm transition-all duration-300"
            style={{ background: C.greenDk, color: C.gold }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.green)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.greenDk)}
          >
            Get In Touch
          </Link>
          <Link
            to="/services"
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
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default GoalPage;
