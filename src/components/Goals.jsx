import { Link } from "react-router-dom";

// ── SVG Icons matching brochure style ─────────────────────────
const icons = {
  food: (
    <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="26" r="11" stroke="#1a6b52" strokeWidth="3"/>
      <circle cx="32" cy="26" r="4" fill="#1a6b52"/>
      <path d="M21 26c0-6.075 4.925-11 11-11" stroke="#1a6b52" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M26 46c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#1a6b52" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <line x1="32" y1="40" x2="32" y2="37" stroke="#1a6b52" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  people: (
    <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
      <circle cx="22" cy="22" r="7" stroke="#1a6b52" strokeWidth="2.8"/>
      <circle cx="42" cy="22" r="7" stroke="#1a6b52" strokeWidth="2.8"/>
      <path d="M12 46c0-5.523 4.477-10 10-10" stroke="#1a6b52" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M42 36c5.523 0 10 4.477 10 10" stroke="#1a6b52" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M28 46c0-2.209 1.791-4 4-4s4 1.791 4 4" stroke="#1a6b52" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="32" y1="38" x2="32" y2="42" stroke="#1a6b52" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M27 34l5-4 5 4" stroke="#1a6b52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  laptop: (
    <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
      <rect x="12" y="16" width="40" height="26" rx="3" stroke="#1a6b52" strokeWidth="3"/>
      <rect x="18" y="22" width="28" height="14" rx="1.5" stroke="#1a6b52" strokeWidth="2"/>
      <path d="M8 42h48" stroke="#1a6b52" strokeWidth="3" strokeLinecap="round"/>
      <path d="M24 42l-2 6h20l-2-6" stroke="#1a6b52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="29" r="3" fill="#1a6b52"/>
    </svg>
  ),
  building: (
    <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
      <rect x="14" y="14" width="36" height="38" rx="2" stroke="#1a6b52" strokeWidth="3"/>
      <rect x="20" y="20" width="8" height="8" rx="1" stroke="#1a6b52" strokeWidth="2.5"/>
      <rect x="36" y="20" width="8" height="8" rx="1" stroke="#1a6b52" strokeWidth="2.5"/>
      <rect x="20" y="32" width="8" height="8" rx="1" stroke="#1a6b52" strokeWidth="2.5"/>
      <rect x="36" y="32" width="8" height="8" rx="1" stroke="#1a6b52" strokeWidth="2.5"/>
      <path d="M28 52v-8h8v8" stroke="#1a6b52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="14" y1="14" x2="50" y2="14" stroke="#1a6b52" strokeWidth="3"/>
    </svg>
  ),
  fire: (
    <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="30" r="14" stroke="#1a6b52" strokeWidth="3"/>
      <path d="M27 38c0-5 5-7 5-13 3 4 8 8 5 13a5 5 0 01-10 0z" fill="#1a6b52" opacity="0.85"/>
      <path d="M30 38c0-2.5 2-4 2-7 1.5 2 4 4 2.5 7a2.5 2.5 0 01-4.5 0z" fill="white" opacity="0.5"/>
    </svg>
  ),
};

const goalsData = [
  {
    number: "01",
    title: "Ensure Food Safety",
    boldPart: "Ensure Food Safety:",
    desc: "Verify compliance with national and international food safety standards",
    icon: icons.food,
  },
  {
    number: "02",
    title: "Impartial Assessment",
    boldPart: "Impartial Assessment:",
    desc: "Provide unbiased inspections independent of producers or buyers.",
    icon: icons.people,
  },
  {
    number: "03",
    title: "Promote Quality Assurance",
    boldPart: "Promote Quality Assurance:",
    desc: "Help food businesses maintain consistent product quality.",
    icon: icons.laptop,
  },
  {
    number: "04",
    title: "Support Regulatory Compliance",
    boldPart: "Support Regulatory Compliance:",
    desc: "Assist clients in meeting FSSAI and global certification requirements (e.g., HACCP, ISO 22000).",
    icon: icons.building,
  },
  {
    number: "05",
    title: "Fire Safety Compliance",
    boldPart: "Conducting Fire Safety Audits",
    desc: "in accordance with National Building Code (NBC) Standards.",
    icon: icons.fire,
  },
];

// ── Single Card ────────────────────────────────────────────────
const GoalCard = ({ goal }) => (
  <div
    className="relative bg-white flex flex-col items-center text-center pt-10 pb-8 px-5"
    style={{
      border: "2.5px solid #1a6b52",
      borderRadius: "20px",
      boxShadow: "0 4px 18px rgba(26,107,82,0.09)",
      transition: "transform 0.65s cubic-bezier(0.23,1,0.32,1), box-shadow 0.65s ease",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = "0 24px 48px rgba(26,107,82,0.2)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 18px rgba(26,107,82,0.09)";
    }}
  >
    {/* ── Number badge — overlaps top border ── */}
    <div
      className="absolute flex items-center justify-center text-white font-black"
      style={{
        top: "-22px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "#1a6b52",
        fontSize: "17px",
        fontFamily: "Georgia, serif",
        letterSpacing: "0.5px",
        border: "3px solid white",
        boxShadow: "0 4px 14px rgba(26,107,82,0.35)",
        zIndex: 10,
      }}
    >
      {goal.number}
    </div>

    {/* ── Icon circle ── */}
    <div
      className="flex items-center justify-center mb-5"
      style={{
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        background: "#edf7f3",
        border: "2px solid #c0e0d5",
      }}
    >
      {goal.icon}
    </div>

    {/* ── Text ── */}
    <p className="text-sm leading-relaxed" style={{ color: "#2a2a2a" }}>
      <span className="font-black" style={{ color: "#1a2a22" }}>{goal.boldPart} </span>
      {goal.desc}
    </p>
  </div>
);

// ── Goals Section ──────────────────────────────────────────────
const Goals = () => (
  <section className="py-20 px-6 md:px-12" style={{ background: "#ffffff" }}>
    <div className="max-w-7xl mx-auto">

      {/* Title */}
      <div className="text-center mb-20">
        <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-3">Our Purpose</p>
        <h2
          className="text-4xl md:text-5xl font-black text-[#1a3d2b] mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Our Goals
        </h2>
        <div className="w-14 h-[3px] mx-auto mb-5" style={{ background: "#b8962e" }} />
        <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
          A food third-party inspection body ensures safety and quality through independent assessments —
          helping businesses comply with standards and build consumer trust.
        </p>
      </div>

      {/* Top row — 5 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        {goalsData.slice(0, 5).map(goal => (
          <GoalCard key={goal.number} goal={goal} />
        ))}
      </div>

     

      {/* CTA */}
      <div className="text-center mt-14">
        <Link
          to="/goal"
          className="inline-block px-10 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider"
          style={{
            background: "#1a6b52",
            color: "white",
            transition: "transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 14px 32px rgba(26,107,82,0.35)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          View All Goals →
        </Link>
      </div>
    </div>
  </section>
);

export default Goals;