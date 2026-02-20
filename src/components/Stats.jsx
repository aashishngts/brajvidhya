const statsData = [
  { value: "15+", label: "Years of Experience", desc: "Directors bring 15+ years across diverse industries" },
  { value: "₹6 Cr", label: "Annual Turnover", desc: "Overall average annual turnover" },
  { value: "PAN India", label: "Outreach", desc: "Serving clients across all states of India" },
  { value: "8+", label: "Services Offered", desc: "Food safety, fire, energy & ZED audits" },
  { value: "IB 145", label: "NABCB Certificate", desc: "Accredited under ISO/IEC 17020:2012" },
  { value: "2028", label: "Valid Till", desc: "Certificate valid from March 2025 to March 2028" },
];

const affiliates = [
  {
    name: "Brajvidhya Services Pvt. Ltd.",
    role: "CEO",
    services: ["Hygiene Rating Audit", "FSSAI Third Party Audit", "Fire Safety Inspection", "Energy Audit", "ZED Assessment"],
  },
  {
    name: "Trumentor Consultant India Pvt. Ltd.",
    role: "CEO",
    services: ["EIA (Environment Impact Assessment)", "ZED & LEAN Consultancy", "Food Consultancy", "ISO Consultancy & Implementation", "E-Documentation"],
  },
  {
    name: "Certivex Laboratories Pvt. Ltd.",
    role: "Co Partner",
    services: ["Cement & Construction Material Testing", "Food Testing Services", "Hygiene & Microbiological Testing", "Quality & Compliance Support"],
  },
];

const StatsSection = () => {
  return (
    <section style={{ background: "#ffffff" }}>

      {/* ── STATS — full-width number strip ── */}
      <div style={{ background: "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)" }}
        className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-3">By The Numbers</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#f5f0e8]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Serving PAN India
              </h2>
            </div>
            <p className="text-[#6a8a7a] text-sm max-w-sm leading-relaxed">
              NABCB accredited and recognized by FSSAI, QCI, IFE, BEE and NDIE — delivering trusted inspection services nationwide.
            </p>
          </div>

          {/* Stats — divider-separated row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {statsData.map((s, i) => (
              <div key={i}
                className="flex flex-col py-6 px-5 group"
                style={{
                  borderLeft: i === 0 ? "none" : "1px solid rgba(184,150,46,0.18)",
                  borderTop: i >= 3 ? "1px solid rgba(184,150,46,0.18)" : "none",
                }}>
                <div className="text-4xl md:text-5xl font-black text-[#b8962e] mb-2 leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    transition: "letter-spacing 0.5s ease",
                  }}>
                  {s.value}
                </div>
                <div className="text-[11px] font-bold text-[#f5f0e8] uppercase tracking-widest mb-1.5">
                  {s.label}
                </div>
                <div className="w-6 h-[1.5px] mb-2" style={{ background: "#b8962e", opacity: 0.5 }} />
                <div className="text-[11px] text-[#5a7a6a] leading-snug">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default StatsSection;