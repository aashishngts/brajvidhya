import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import nabcbLogo from "../assets/accreditations/nabcb.png";
import fssaiLogo from "../assets/accreditations/fssai.png";
import qciLogo from "../assets/accreditations/qci.png";
import ifeLogo from "../assets/accreditations/ife.png";
import ndieLogo from "../assets/accreditations/ndie.png";
import beeLogo from "../assets/accreditations/bee.png";
import msmeLogo from "../assets/accreditations/msme.png";
import isoLogo from "../assets/accreditations/iso.png";

// ── Accreditation / Recognition badges ────────────────────────
const badges = [
  {
    name: "NABCB",
    full: "National Accreditation Board for Certification Bodies",
    img: nabcbLogo,
  },
  {
    name: "FSSAI",
    full: "Food Safety & Standards Authority of India",
    img: fssaiLogo,
  },
  {
    name: "QCI",
    full: "Quality Council of India",
    img: qciLogo,
  },
  {
    name: "IFE",
    full: "Institution of Fire Engineers (India)",
    img: ifeLogo,
  },
  {
    name: "NDIE",
    full: "National Dairy Inspection Enterprise",
    img: ndieLogo,
  },
  {
    name: "BEE",
    full: "Bureau of Energy Efficiency",
    img: beeLogo,
  },
  {
    name: "MSME",
    full: "Ministry of Micro, Small & Medium Enterprises",
    img: msmeLogo,
  },
  {
    name: "ISO",
    full: "ISO/IEC 17020:2012 – Type A Inspection Body",
    img: isoLogo,
  },
];

// ── Decorative SVG Background ──────────────────────────────────
const BgPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04]"
    viewBox="0 0 800 500"
    preserveAspectRatio="xMidYMid slice"
  >
    <circle cx="700" cy="80" r="200" fill="#b8962e" />
    <circle cx="100" cy="400" r="150" fill="#b8962e" />
    <rect
      x="300"
      y="100"
      width="4"
      height="300"
      fill="#b8962e"
      transform="rotate(20,302,250)"
    />
    <rect
      x="500"
      y="50"
      width="2"
      height="400"
      fill="#b8962e"
      transform="rotate(-15,501,250)"
    />
    <circle
      cx="400"
      cy="250"
      r="300"
      fill="none"
      stroke="#b8962e"
      strokeWidth="1"
    />
  </svg>
);

// ── Badge Grid (static display below hero) ─────────────────────
const BadgeGrid = () => (
  <div className="py-20 px-6 md:px-12" style={{ background: "#f5f0e8" }}>
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-3">
          Recognized & Accredited By
        </p>
        <div className="w-16 h-[3px] bg-[#b8962e] mx-auto" />
      </div>

      {/* Logos Row */}
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
        {badges.map((b) => (
          <div key={b.name} className="group text-center max-w-[160px]">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={b.img}
                alt={b.name}
                className="h-14 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              />
            </div>

            {/* Short Name */}
            <h3
              className="text-sm font-black mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a3d2b",
              }}
            >
              {b.name}
            </h3>

            {/* Full Form */}
            <p className="text-xs leading-relaxed text-[#6a8a7a]">{b.full}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Main Hero Slide ────────────────────────────────────────────
const HeroCarousel = () => {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section
        className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[88vh]"
        style={{
          background:
            "linear-gradient(135deg, #0d2b1c 0%, #1a3d2b 55%, #1e4535 100%)",
        }}
      >
        <BgPattern />

        {/* Right accent block */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block"
          style={{
            background: "linear-gradient(180deg, #b8962e12 0%, #b8962e06 100%)",
            borderLeft: "1px solid #b8962e25",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-8 items-center py-12 md:py-10">
          {/* ── Left Content ── */}
          <div>
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#b8962e]/40 bg-[#b8962e]/10">
              <span className="w-2 h-2 rounded-full bg-[#b8962e] animate-pulse" />
              <span className="text-[#b8962e] text-[11px] font-bold tracking-[2px] uppercase">
                NABCB Accredited · ISO/IEC 17020:2012
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f5f0e8",
              }}
            >
              Brajvidhya
            </h1>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f5f0e8",
              }}
            >
              Services
            </h1>

            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#b8962e",
              }}
            >
              Pvt. Ltd.
            </h2>

            <div className="w-16 h-[2px] bg-[#b8962e] mb-6" />

            <p className="text-[#c8c0b0] text-base md:text-lg leading-relaxed mb-4 max-w-lg">
              India's trusted third-party inspection body — recognized by FSSAI,
              IFE, QCI, BEE & NDIE. Partnering with us means choosing a reliable
              body dedicated to ensuring your operations meet the highest
              standards of quality and safety.
            </p>

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/services"
                className="px-8 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ background: "#b8962e", color: "#0d2b1c" }}>
                Our Services
              </Link>
              <Link to="/about"
                className="px-8 py-3 rounded text-sm font-bold uppercase tracking-wider border border-[#b8962e]/50 text-[#e8e0d0] hover:border-[#b8962e] hover:bg-[#b8962e]/10 transition-all duration-200">
                Company Profile
              </Link>
              <Link to="/contact"
                className="px-8 py-3 rounded text-sm font-bold uppercase tracking-wider border border-[#e8e0d0]/20 text-[#a09888] hover:text-[#e8e0d0] hover:border-[#e8e0d0]/40 transition-all duration-200">
                Contact Us
              </Link>
            </div> */}

            {/* Stats row */}
            {/* <div className="flex gap-8 pt-6 border-t border-[#b8962e]/20">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "PAN India", label: "Outreach" },
                { value: "IB 145", label: "NABCB Cert No." },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-[#b8962e]" style={{ fontFamily: "Georgia, serif" }}>{s.value}</div>
                  <div className="text-[10px] text-[#706860] uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* ── Right: Logo + Cert card ── */}
          <div className="hidden lg:flex flex-col items-center gap-8">
            {/* Logo circle */}
            <div className="relative">
              <div
                className="w-56 h-56 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  background: "#b8962e",
                  boxShadow:
                    "0 0 0 10px #b8962e25, 0 0 0 22px #b8962e10, 0 20px 60px #00000060",
                }}
              >
                <img
                  src={logo}
                  alt="Brajvidhya"
                  className="w-48 h-48 object-contain rounded-full"
                />
              </div>
              {/* NABCB badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0d2b1c] border-2 border-[#b8962e] rounded-full px-4 py-1 whitespace-nowrap">
                <span className="text-[#b8962e] text-[10px] font-bold tracking-[2px]">
                  NABCB ACCREDITED
                </span>
              </div>
            </div>

            {/* Cert info card */}
            <div className="w-full max-w-sm border border-[#b8962e]/25 rounded-2xl p-6 bg-[#b8962e]/5 backdrop-blur-sm">
              <div className="text-[#b8962e] text-[10px] font-bold tracking-[3px] uppercase mb-3">
                Accreditation Details
              </div>
              <div className="space-y-2">
                {[
                  ["Certificate No.", "IB 145"],
                  ["Standard", "ISO/IEC 17020:2012"],
                  ["Type", "Type A Inspection Body"],
                  ["Valid Until", "March 17, 2028"],
                  ["Location", "Indore, Madhya Pradesh"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs">
                    <span className="text-[#b6a89a]">{k}</span>
                    <span className="text-[#e8e0d0] font-semibold">{v}</span>
                  </div>
                ))}
              </div>

              {/* Recognition badges */}
              {/* <div className="mt-4 pt-4 border-t border-[#b8962e]/20">
                <div className="text-[9px] text-[#706860] uppercase tracking-widest mb-2">
                  Recognized By
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["FSSAI", "QCI", "IFE", "NDIE", "BEE", "MSME"].map((b) => (
                    <span
                      key={b}
                      className="text-[10px] px-2 py-0.5 rounded border border-[#b8962e]/40 text-[#b8962e] bg-[#b8962e]/10 font-bold tracking-wider"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── BADGE GRID ── */}
      <BadgeGrid />
    </>
  );
};

export default HeroCarousel;
