import { useState } from "react";

// ── Contact info from brochure ─────────────────────────────────
const contactDetails = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#b8962e" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="9" r="2.5" stroke="#b8962e" strokeWidth="2" fill="none"/>
      </svg>
    ),
    label: "Office Address",
    lines: ["404, 4th Floor, Shagun Arcade,", "Vijay Nagar, Indore, MP 452010"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" stroke="#b8962e" strokeWidth="2" fill="none"/>
      </svg>
    ),
    label: "Phone Numbers",
    lines: ["92292 65444", "92292 75444"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#b8962e" strokeWidth="2" fill="none"/>
        <path d="M2 8l10 6 10-6" stroke="#b8962e" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email Addresses",
    lines: ["suryavanshipankaj76@gmail.com", "Harisingh.kaurav@gmail.com"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#b8962e" strokeWidth="2" fill="none"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="#b8962e" strokeWidth="2" fill="none"/>
      </svg>
    ),
    label: "Website",
    lines: ["www.brajvidhya.com"],
  },
];

const leadership = [
  { name: "Hari Singh Kaurav", role: "Managing Director", email: "Harisingh.kaurav@gmail.com", phone: "92292 75444" },
  { name: "Pankaj Suryavanshi", role: "Executive Director", email: "suryavanshipankaj76@gmail.com", phone: "92292 65444" },
];

// ── Contact Form ───────────────────────────────────────────────
const ContactForm = () => {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const services = [
    "FSSAI Third Party Audit",
    "Hygiene Rating Audit (HRA)",
    "ZED Assessment",
    "Energy Audit",
    "Fire Safety Inspection",
    "Environmental Audit",
    "Safety Audit",
    "Eat Right Initiative",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: "10px",
    border: focused === name ? "2px solid #b8962e" : "2px solid #e8e0d0",
    background: focused === name ? "#fffdf8" : "#faf8f4",
    color: "#1a2a1a",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.4s ease, background 0.4s ease",
    fontFamily: "inherit",
  });

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: "#b8962e15", border: "2px solid #b8962e" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#b8962e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl font-black text-[#1a3d2b] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Message Sent!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name: "", org: "", email: "", phone: "", service: "", message: "" }); }}
          className="mt-8 px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
          style={{ background: "#1a3d2b", color: "white", transition: "transform 0.4s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4a6a5a] mb-1.5">Full Name *</label>
          <input required placeholder="Your full name" value={form.name}
            style={inputStyle("name")}
            onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
            onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4a6a5a] mb-1.5">Organization</label>
          <input placeholder="Company / Business name" value={form.org}
            style={inputStyle("org")}
            onFocus={() => setFocused("org")} onBlur={() => setFocused("")}
            onChange={e => setForm({ ...form, org: e.target.value })} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4a6a5a] mb-1.5">Email *</label>
          <input required type="email" placeholder="your@email.com" value={form.email}
            style={inputStyle("email")}
            onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
            onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4a6a5a] mb-1.5">Phone</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
            style={inputStyle("phone")}
            onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
            onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4a6a5a] mb-1.5">Service Required</label>
        <select value={form.service}
          style={{ ...inputStyle("service"), cursor: "pointer" }}
          onFocus={() => setFocused("service")} onBlur={() => setFocused("")}
          onChange={e => setForm({ ...form, service: e.target.value })}>
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4a6a5a] mb-1.5">Message *</label>
        <textarea required rows={5} placeholder="Describe your requirement in detail..."
          value={form.message}
          style={{ ...inputStyle("message"), resize: "none" }}
          onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
          onChange={e => setForm({ ...form, message: e.target.value })} />
      </div>

      <button type="submit"
        className="w-full py-4 rounded-xl text-sm font-black uppercase tracking-widest"
        style={{
          background: "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)",
          color: "#f5f0e8",
          transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,61,43,0.35)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
        Send Message →
      </button>
    </form>
  );
};

// ── Main Contact Page ──────────────────────────────────────────
const Contact = () => {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden py-20 px-6 md:px-12"
        style={{ background: "linear-gradient(135deg, #0d2b1c 0%, #1a3d2b 100%)" }}>
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-5"
          style={{ background: "#b8962e" }} />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-5"
          style={{ background: "#b8962e" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ border: "1px solid #b8962e" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl font-black text-[#f5f0e8] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Contact Us
          </h1>
          <div className="w-14 h-[3px] mx-auto mb-6" style={{ background: "#b8962e" }} />
          <p className="text-[#8aaa9a] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Reach out for audit inquiries, inspection scheduling, or any compliance-related consultation. Our team responds within 24 hours.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-5 gap-14">

          {/* LEFT — Contact Info (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Section label */}
            <div>
              <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-3">Our Details</p>
              <h2 className="text-3xl font-black text-[#1a3d2b]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                We're Based in Indore
              </h2>
              <div className="w-10 h-[2px] mt-3" style={{ background: "#b8962e" }} />
            </div>

            {/* Contact items */}
            <div className="space-y-8">
              {contactDetails.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#b8962e12", border: "1.5px solid #b8962e30" }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#b8962e] mb-1">{c.label}</p>
                    {c.lines.map((line, j) => (
                      <p key={j} className="text-sm text-[#2a3a2a] font-medium leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #e8e0d0" }} />

            {/* Leadership contacts */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#b8962e] mb-5">Leadership</p>
              <div className="space-y-5">
                {leadership.map((l) => (
                  <div key={l.name} className="flex items-start gap-4">
                    {/* Avatar initials */}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #1a3d2b, #0d2b1c)" }}>
                      {l.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-black text-[#1a3d2b] text-sm"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{l.name}</p>
                      <p className="text-[10px] text-[#b8962e] font-bold uppercase tracking-wide mb-1">{l.role}</p>
                      <p className="text-xs text-[#5a7a6a]">{l.phone} · {l.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid #e8e0d0", height: "200px" }}>
              <iframe
                title="Brajvidhya Office"
                src="https://maps.google.com/maps?q=Vijay+Nagar+Indore+Madhya+Pradesh&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT — Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-8 md:p-10"
              style={{ background: "#f9f6f0", border: "1.5px solid #e8e0d0" }}>
              <div className="mb-8">
                <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-2">Send a Message</p>
                <h2 className="text-2xl font-black text-[#1a3d2b]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Book an Audit or Enquire
                </h2>
                <p className="text-gray-400 text-sm mt-1">All fields marked * are required.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Contact;