import { useState } from "react";
import { Link } from "react-router-dom";
import nabcbLogo from "../assets/logos/nabcb.png";
import fssaiLogo from "../assets/logos/fssai.png";
import qciLogo from "../assets/logos/qci.png";
import ifeLogo from "../assets/logos/ife.png";
import startupLogo from "../assets/logos/startupindia.png";
import auditProcessImg from "../assets/audit-process.png";
import owner1 from "../assets/owner1.png";
import owner2 from "../assets/owner2.png";

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

const Label = ({ children }) => (
  <p
    className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
    style={{ color: C.gold }}
  >
    {children}
  </p>
);
const GoldBar = ({ center }) => (
  <div
    className={`w-14 h-[3px] mb-6 ${center ? "mx-auto" : ""}`}
    style={{ background: C.gold }}
  />
);

// ── SVG Icon set ────────────────────────────────────────────
const SvgIcon = ({ d, viewBox = "0 0 24 24", size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {typeof d === "string" ? <path d={d} /> : d}
  </svg>
);

const ValueIcons = {
  integrity: (
    <SvgIcon
      d={
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </>
      }
    />
  ),
  transparency: (
    <SvgIcon
      d={
        <>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <path d="M11 8v6M8 11h6" />
        </>
      }
    />
  ),
  accuracy: (
    <SvgIcon
      d={
        <>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </>
      }
    />
  ),
  impartiality: (
    <SvgIcon
      d={
        <>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </>
      }
    />
  ),
  confidentiality: (
    <SvgIcon
      d={
        <>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </>
      }
    />
  ),
  improvement: (
    <SvgIcon
      d={
        <>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </>
      }
    />
  ),
};

// Timeline SVG icons matching the brochure diagram
const TimelineIcons = [
  // 1. Client Engagement
  <svg
    key={0}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <polyline points="9 11 11 13 15 9" />
  </svg>,
  // 2. Document Review
  <svg
    key={1}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8m-4-4v4" />
    <path d="M7 8h10M7 12h6" />
  </svg>,
  // 3. Audit Scheduling
  <svg
    key={2}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </svg>,
  // 4. On-Site Inspection
  <svg
    key={3}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
  </svg>,
  // 5. Audit Findings
  <svg
    key={4}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>,
  // 6. Report Preparation
  <svg
    key={5}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <path d="M11 8v6M8 11h6" />
  </svg>,
  // 7. Follow-up / Certification
  <svg
    key={6}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
];

// ── stat card ──────────────────────────────────────────────
const Stat = ({ value, label }) => (
  <div
    className="text-center px-6 py-5 rounded-2xl"
    style={{
      background: "rgba(184,150,46,0.08)",
      border: "1px solid rgba(184,150,46,0.2)",
    }}
  >
    <p
      className="text-4xl font-black mb-1"
      style={{
        color: C.gold,
        fontFamily: "'Playfair Display', Georgia, serif",
      }}
    >
      {value}
    </p>
    <p className="text-xs uppercase tracking-widest" style={{ color: C.muted }}>
      {label}
    </p>
  </div>
);

// ── value card with SVG icon ────────────────────────────────
const ValueCard = ({ iconKey, title, desc }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="p-6 rounded-2xl transition-all duration-500"
      style={{
        background: hovered ? C.green : C.white,
        border: "1px solid #e8e0d0",
        boxShadow: hovered
          ? "0 20px 50px rgba(26,61,43,0.2)"
          : "0 4px 20px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500"
        style={{
          background: hovered ? "rgba(184,150,46,0.15)" : "rgba(26,61,43,0.07)",
          color: hovered ? C.gold : C.green,
        }}
      >
        {ValueIcons[iconKey]}
      </div>
      <h4
        className="font-black text-base mb-2 transition-colors duration-500"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: hovered ? C.gold : C.green,
        }}
      >
        {title}
      </h4>
      <p
        className="text-sm leading-relaxed transition-colors duration-500"
        style={{ color: hovered ? "rgba(255,255,255,0.65)" : C.muted }}
      >
        {desc}
      </p>
    </div>
  );
};

// ── accreditation badge ────────────────────────────────────
const AccBadge = ({ logo, detail, body }) => (
  <div className="bg-white rounded-xl p-6 border border-[#e6dfd5] text-center flex flex-col items-center gap-4">
    {/* Logo */}
    <img src={logo} alt="Accreditation Logo" className="h-14 object-contain" />

    {/* Detail */}
    <p className="text-[12px] font-semibold text-[#1a3d2b]">{detail}</p>

    {/* Description */}
    <p className="text-[11px] text-[#6a8a7a] leading-relaxed">{body}</p>
  </div>
);

// ── affiliate card ─────────────────────────────────────────
const AffCard = ({ name, role, services }) => (
  <div
    className="p-6 rounded-2xl"
    style={{
      background: "rgba(26,61,43,0.04)",
      border: "1px solid rgba(26,61,43,0.12)",
    }}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 rounded-full" style={{ background: C.gold }} />
      <span
        className="text-[10px] uppercase tracking-widest font-bold"
        style={{ color: C.gold }}
      >
        {role}
      </span>
    </div>
    <h4
      className="font-black text-base mb-3"
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        color: C.green,
      }}
    >
      {name}
    </h4>
    <ul className="space-y-1">
      {services.map((s, i) => (
        <li
          key={i}
          className="text-xs flex items-center gap-2"
          style={{ color: C.muted }}
        >
          <span style={{ color: C.gold }}>›</span> {s}
        </li>
      ))}
    </ul>
  </div>
);

// ══════════════════════════════════════════════════════════
const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Mission" },
    { id: "vision", label: "Vision" },
    { id: "values", label: "Values" },
  ];

  const tabContent = {
    mission: {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={C.gold}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 mb-4"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill={C.gold} />
        </svg>
      ),
      text: "Our mission is to establish ourselves as a trusted partner and industry leader in management system inspection, acknowledged by both our clients and the wider community. In addition to actively participating in the growth of accredited inspection and other assurance services, Brajvidhya Services also aims to be involved in the digital economy.",
    },
    vision: {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={C.gold}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 mb-4"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      text: "Brajvidhya Services Pvt. Ltd. aims to provide high-quality inspection services carried out with discretion, avoiding any conflicts of interest or impartiality — with the help of a team of experienced inspectors, industry experts and equipment conforming to the ISO/IEC 17020:2012 standard and industry regulations.",
    },
    values: {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={C.gold}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 mb-4"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      text: "Our agency values integrity, transparency, and accuracy to ensure unbiased and reliable audits. We prioritize food safety and confidentiality while supporting clients in continuous improvement. Customer focus drives us to help businesses achieve compliance and excellence.",
    },
  };

  const auditSteps = [
    { label: "Client Engagement & Scope Definition", position: "bottom" },
    { label: "Document Review & Pre-Audit Preparation", position: "top" },
    { label: "Audit Scheduling & Team Allocation", position: "bottom" },
    { label: "On-Site Inspection & Data Collection", position: "top" },
    { label: "Audit Findings Analysis", position: "bottom" },
    { label: "Report Preparation & Submission", position: "top" },
    {
      label: "Follow-up for Corrective Actions & Certification",
      position: "bottom",
    },
  ];

  return (
    <div style={{ background: C.cream, fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.greenDk} 0%, ${C.green} 60%, #1e4d35 100%)`,
          minHeight: "520px",
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 relative z-10">
          <div className="max-w-3xl">
            <Label>Company Profile</Label>
            <h1
              className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              About <span style={{ color: C.gold }}>Brajvidhya</span>
              <br />
              Services Pvt. Ltd.
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              NABCB Accredited Inspection Body · ISO/IEC 17020:2012 · IB 145 ·
              Recognized by FSSAI, QCI, IFE, BEE & NDIE
            </p>
            {/* <div className="flex flex-wrap gap-3">
              {[
                "NABCB · IB 145",
                "FSSAI Recognized",
                "QCI Approved",
                "IFE Certified",
                "Startup India",
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
            </div> */}
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

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-2 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat value="15+" label="Years Experience" />
          <Stat value="₹6Cr" label="Annual Turnover" />
          <Stat value="PAN India" label="Outreach" />
          <Stat value="ISO 17020" label="Accreditation" />
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Label>Who We Are</Label>
            <h2
              className="text-4xl font-black mb-4"
              style={{
                color: C.green,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              India's Trusted Third-Party Inspection Body
            </h2>
            <GoldBar />
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#3d5a46" }}
            >
              Brajvidhya Services Private Limited is an NABCB accredited
              inspection body, recognized by many PSUs, councils and regulatory
              bodies like <strong>FSSAI, IFE, QCI, BEE, NDIE</strong> etc.,
              based in Indore, India — renowned for its expertise in third-party
              inspections.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#3d5a46" }}
            >
              With a robust focus on quality and compliance, the company serves
              various sectors including{" "}
              <strong>
                Food Safety Audit, Fire Safety Audit, Hygiene Rating Audit,
                Energy Audit, Environmental Audit
              </strong>{" "}
              and <strong>ZED-MSME Assessment</strong>.
            </p>
            <div
              className="pl-5 border-l-4 py-2"
              style={{ borderColor: C.gold }}
            >
              <p className="italic text-sm" style={{ color: C.muted }}>
                "Partnering with Brajvidhya Services means choosing a reliable
                and experienced inspection body dedicated to ensuring your
                operations meet the highest standards of quality and safety."
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="rounded-3xl p-8"
              style={{
                background: `linear-gradient(135deg, ${C.green} 0%, ${C.greenDk} 100%)`,
                boxShadow: "0 30px 80px rgba(26,61,43,0.3)",
              }}
            >
              <p
                className="text-[11px] uppercase tracking-[3px] mb-6"
                style={{ color: C.gold }}
              >
                NABCB Accreditation
              </p>
              <div className="space-y-4">
                {[
                  { label: "Certificate No.", value: "IB 145" },
                  { label: "Standard", value: "ISO/IEC 17020:2012" },
                  { label: "Type", value: "Type 'A' Inspection Body" },
                  { label: "Initial Accreditation", value: "March 18, 2025" },
                  { label: "Valid Until", value: "March 17, 2028" },
                  { label: "FSSAI Ref.", value: "FSSAI/TPA/2025-25/07" },
                  { label: "Startup India", value: "DIPP174177" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex justify-between items-center py-2"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {r.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: C.goldLt }}
                    >
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full -z-10"
              style={{ background: `${C.gold}30` }}
            />
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ────────────────────── */}
      <section
        className="py-20 px-6 md:px-12"
        style={{ background: C.greenDk }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Label>Our Foundation</Label>
          <h2
            className="text-4xl font-black text-white mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Mission, Vision & Values
          </h2>
          <div className="flex justify-center gap-2 mb-10">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
                style={{
                  background:
                    activeTab === t.id ? C.gold : "rgba(255,255,255,0.08)",
                  color:
                    activeTab === t.id ? C.greenDk : "rgba(255,255,255,0.6)",
                  border: `1px solid ${activeTab === t.id ? C.gold : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div
            className="rounded-3xl p-8 md:p-12 text-left"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(184,150,46,0.2)",
            }}
          >
            {tabContent[activeTab].icon}
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {tabContent[activeTab].text}
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES ────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>What We Stand For</Label>
            <h2
              className="text-4xl font-black"
              style={{
                color: C.green,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Our Core Principles
            </h2>
            <GoldBar center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              iconKey="integrity"
              title="Integrity"
              desc="We uphold uncompromising integrity in every audit, ensuring unbiased and reliable assessments that our clients can trust completely."
            />
            <ValueCard
              iconKey="transparency"
              title="Transparency"
              desc="Every step of our process is documented and communicated clearly. We believe transparency builds lasting trust with clients and stakeholders."
            />
            <ValueCard
              iconKey="accuracy"
              title="Accuracy"
              desc="Our team of certified professionals delivers precise, evidence-based findings conforming to ISO/IEC 17020:2012 and all applicable regulations."
            />
            <ValueCard
              iconKey="impartiality"
              title="Impartiality"
              desc="As an independent third-party body, we ensure complete freedom from conflicts of interest across all inspections and assessments."
            />
            <ValueCard
              iconKey="confidentiality"
              title="Confidentiality"
              desc="All client information and audit findings are handled with strict confidentiality and shared only with authorized individuals."
            />
            <ValueCard
              iconKey="improvement"
              title="Continuous Improvement"
              desc="We use client feedback constructively to improve our services and maintain excellence in every engagement."
            />
          </div>
        </div>
      </section>

      {/* ── AUDIT PROCESS ───────────────────────── */}
      <section
        className="py-20 px-6 md:px-12"
        style={{ background: C.creamDk }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Label>How We Work</Label>
            <h2
              className="text-4xl font-black"
              style={{
                color: C.green,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Our Audit Process
            </h2>
            <GoldBar center />
            <p className="max-w-xl mx-auto text-sm" style={{ color: C.muted }}>
              The third-party audit involves client onboarding, document review,
              on-site inspection, and report submission. Corrective actions are
              followed up before final certification.
            </p>
          </div>

          {/* Process Image */}
          <div className="flex justify-center">
            <img
              src={auditProcessImg}
              alt="Audit Process Timeline"
              className="w-full max-w-6xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ───────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>Recognition & Credentials</Label>
            <h2
              className="text-4xl font-black"
              style={{
                color: C.green,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Our Accreditations
            </h2>
            <GoldBar center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AccBadge
              logo={nabcbLogo}
              detail="IB 145 · ISO/IEC 17020:2012 · Valid: Mar 2028"
              body="National Accreditation Board for Certification Bodies"
            />

            <AccBadge
              logo={fssaiLogo}
              detail="FSSAI/TPA/2025-25/07 · Food Safety Auditing Regulations 2018"
              body="Food Safety & Standards Authority of India"
            />

            <AccBadge
              logo={qciLogo}
              detail="QCI/ZED/0725/3687 · July 16, 2025"
              body="ZED Assessment & Certification Body"
            />

            <AccBadge
              logo={qciLogo}
              detail="QCI/PADD/HRAA/2025-26/169 · Jun 5, 2025"
              body="Hygiene Rating Audit Agency Recognition"
            />

            <AccBadge
              logo={ifeLogo}
              detail="IFE-AHPI/BSPL/2025-26 · Oct 2025 – Oct 2026"
              body="Institution of Fire Engineers (India)"
            />

            <AccBadge
              logo={startupLogo}
              detail="DIPP174177 · Valid up to 2034"
              body="Government of India — DPIIT"
            />
          </div>
        </div>
      </section>

      {/* ── AFFILIATES ───────────────────────────────────── */}
      <section
        className="py-20 px-6 md:px-12"
        style={{ background: C.creamDk }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>Our Ecosystem</Label>
            <h2
              className="text-4xl font-black mb-4"
              style={{
                color: C.green,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Affiliated Organizations
            </h2>
            <div
              className="w-14 h-[3px] mx-auto"
              style={{ background: C.gold }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "Brajvidhya Services Pvt. Ltd.",
                role: "Core Entity — CEO",
                num: "01",
                services: [
                  "Hygiene Rating Audit",
                  "FSSAI Third Party Audit",
                  "Fire Safety Inspection",
                  "Energy Audit",
                  "ZED Assessment",
                ],
              },
              {
                name: "Trumentor Consultant India Pvt. Ltd.",
                role: "Consulting Arm — CEO",
                num: "02",
                services: [
                  "EIA (Environment Impact Assessment)",
                  "ZED & LEAN Consultancy",
                  "Food Consultancy",
                  "ISO Consultancy & Implementation",
                  "E-Documentation",
                ],
              },
              {
                name: "Certivex Laboratories Pvt. Ltd.",
                role: "Laboratory Partner — Co-Partner",
                num: "03",
                services: [
                  "Cement & Construction Material Testing",
                  "Food Testing Services",
                  "Hygiene & Microbiological Testing",
                  "Quality & Compliance Support",
                ],
              },
            ].map((org) => (
              <div
                key={org.num}
              className="flex flex-col rounded-2xl overflow-hidden h-full"
                style={{
                  boxShadow: "0 8px 32px rgba(26,61,43,0.12)",
                  border: "1px solid #e0d8c8",
                }}
              >
                {/* coloured header strip */}
                <div
                  className="px-6 pt-6 pb-5 flex items-start justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${C.green} 0%, ${C.greenDk} 100%)`,
                  }}
                >
                  <div>
                    <span
                      className="text-[9px] uppercase tracking-[3px] font-bold block mb-2"
                      style={{ color: C.gold }}
                    >
                      {org.role}
                    </span>
                    <h4
                      className="font-black text-base leading-snug text-white"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {org.name}
                    </h4>
                  </div>
                  <span
                    className="text-4xl font-black flex-shrink-0 ml-3 mt-1"
                    style={{
                      color: "rgba(184,150,46,0.25)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      lineHeight: 1,
                    }}
                  >
                    {org.num}
                  </span>
                </div>

                {/* services list */}
                <div className="px-6 py-6 flex-1" style={{ background: C.white }}>
                  <p
                    className="text-[10px] uppercase tracking-[2px] font-bold mb-3"
                    style={{ color: C.gold }}
                  >
                    Services
                  </p>
                  <ul className="space-y-2">
                    {org.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: C.textDk }}
                      >
                        <svg
                          className="flex-shrink-0 mt-0.5"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={C.gold}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <Label>The Team Behind</Label>
          <h2
            className="text-4xl font-black mb-4"
            style={{
              color: C.green,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Our Leadership
          </h2>
          <GoldBar center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {[
              {
                
                name: "Pankaj Suryavanshi",
                role: "Executive Director",
                email: "suryavanshipankaj76@gmail.com",
                img: owner1,
              },
              {
                name: "Hari Singh Kaurav",
                role: "Managing Director",
                email: "Harisingh.kaurav@gmail.com",
                img: owner2,
              },
            ].map((p) => (
              <div
                key={p.name}
                className="text-center group "
              >
                {/* Profile Image */}
                <div className="relative mx-auto mb-6 w-44 h-44">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${C.gold}, ${C.green})`,
                      padding: "4px",
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="text-xl font-black mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: C.green,
                  }}
                >
                  {p.name}
                </h3>

                {/* Role */}
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: C.gold }}
                >
                  {p.role}
                </p>

                {/* Email */}
                <p className="text-sm" style={{ color: C.muted }}>
                  {p.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="py-16 px-6 md:px-12"
        style={{
          background: `linear-gradient(135deg, ${C.gold} 0%, #c9a030 100%)`,
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-black mb-3"
            style={{
              color: C.greenDk,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Ready to Get Certified?
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(13,43,28,0.7)" }}>
            Contact our team today to start your audit journey with India's most
            trusted inspection body.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full text-sm font-black transition-all duration-300"
              style={{ background: C.greenDk, color: C.gold }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.green)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = C.greenDk)
              }
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 rounded-full text-sm font-black border-2 transition-all duration-300"
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
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
