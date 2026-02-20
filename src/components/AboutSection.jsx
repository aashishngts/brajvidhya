import { Link } from "react-router-dom";

// ── Data from brochure ─────────────────────────────────────────
const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "₹6 Cr", label: "Annual Turnover" },
  { value: "PAN India", label: "Outreach" },
  { value: "IB 145", label: "NABCB Cert No." },
];

const highlights = [
  {
    title: "Mission",
    text: "To establish ourselves as a trusted partner and industry leader in management system inspection, acknowledged by both our clients and the wider community.",
    icon: "🎯",
    color: "#b8962e",
  },
  {
    title: "Vision",
    text: "To provide high quality inspection services carried out with discretion, avoiding conflicts of interest, with a team of experienced inspectors conforming to ISO/IEC 17020:2012.",
    icon: "👁️",
    color: "#1a5c8a",
  },
  {
    title: "Values",
    text: "Integrity, transparency, and accuracy to ensure unbiased and reliable audits. We prioritize food safety and confidentiality while supporting clients in continuous improvement.",
    icon: "⚖️",
    color: "#2d7a4f",
  },
];

const recognitions = ["NABCB", "FSSAI", "QCI", "IFE", "BEE", "NDIE", "MSME"];

// ── About Section (for Home page) ─────────────────────────────
const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Top: Two-col layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — Image stack */}
          <div className="relative">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ height: "420px" }}>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Brajvidhya team"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              {/* Dark overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 rounded-b-2xl"
                style={{ background: "linear-gradient(to top, rgba(13,43,28,0.7) 0%, transparent 100%)" }} />
            </div>

            {/* Floating card — NABCB cert */}
            <div className="absolute -bottom-6 -right-6 rounded-xl p-5 shadow-2xl hidden md:block"
              style={{ background: "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)", border: "1px solid #b8962e40", minWidth: "200px" }}>
              <p className="text-[9px] font-bold tracking-[3px] uppercase text-[#b8962e] mb-2">Accreditation</p>
              <p className="text-white font-black text-sm" style={{ fontFamily: "Georgia, serif" }}>NABCB · IB 145</p>
              <p className="text-[#7a9a8a] text-[10px] mt-1">ISO/IEC 17020:2012</p>
              <p className="text-[#7a9a8a] text-[10px]">Valid: Mar 2025 – Mar 2028</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {recognitions.map(r => (
                  <span key={r} className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide"
                    style={{ background: "#b8962e15", color: "#b8962e", border: "1px solid #b8962e30" }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Small floating image — top left */}
            {/* <div className="absolute -top-4 -left-4 w-28 h-28 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=300&q=80"
                alt="Lab inspection"
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Gold accent bar */}
            <div className="absolute top-8 -left-3 w-1.5 h-24 rounded-full hidden md:block"
              style={{ background: "#b8962e" }} />
          </div>

          {/* Right — Content */}
          <div>
            <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a3d2b" }}>
              About
            </h2>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#b8962e" }}>
              Brajvidhya
            </h2>
            <div className="w-14 h-[3px] mb-6" style={{ background: "#b8962e" }} />

            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              <span className="font-bold text-[#1a3d2b]">Brajvidhya Services Private Limited</span> is an NABCB accredited inspection body, recognized by many PSUs, councils and regulatory bodies like FSSAI, IFE, QCI, BEE and NDIE — based in <span className="font-semibold">Indore, Madhya Pradesh</span>.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6 text-sm">
              Renowned for expertise in third-party inspections with a robust focus on quality and compliance. We serve sectors including Food Safety Audit, Fire Safety Audit, Hygiene Rating Audit, Energy Audit, Environment Audit and ZED-MSME Assessment.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pb-8"
              style={{ borderBottom: "1px solid #e8e0d0" }}>
              {stats.map((s) => (
                <div key={s.label} className="text-center p-3 rounded-xl"
                  style={{ background: "#f5f0e8" }}>
                  <div className="text-2xl font-black text-[#b8962e]"
                    style={{ fontFamily: "Georgia, serif" }}>{s.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)",
                  color: "#f5f0e8",
                  transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(26,61,43,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Learn More →
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider border"
                style={{
                  borderColor: "#b8962e60",
                  color: "#1a3d2b",
                  transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#b8962e";
                  e.currentTarget.style.color = "#0d2b1c";
                  e.currentTarget.style.borderColor = "#b8962e";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a3d2b";
                  e.currentTarget.style.borderColor = "#b8962e60";
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom: Mission / Vision / Values cards ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title}
              className="rounded-2xl p-7 group"
              style={{
                background: "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)",
                border: "1px solid #b8962e25",
                transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1), box-shadow 0.6s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 48px rgba(26,61,43,0.3)";
                e.currentTarget.style.borderColor = "#b8962e60";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#b8962e25";
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: h.color + "20", border: `1.5px solid ${h.color}40` }}>
                {h.icon}
              </div>
              <div className="w-8 h-[2px] mb-4" style={{ background: h.color }} />
              <h3 className="text-lg font-black text-[#f5f0e8] mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {h.title}
              </h3>
              <p className="text-[#7a9a8a] text-sm leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;