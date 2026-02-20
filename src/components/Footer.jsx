import { Link } from "react-router-dom";
import nabcbLogo from "../assets/accreditations/nabcb.png";
import fssaiLogo from "../assets/accreditations/fssai.png";
import qciLogo from "../assets/accreditations/qci.png";
import ifeLogo from "../assets/accreditations/ife.png";
import beeLogo from "../assets/accreditations/bee.png";
import msmeLogo from "../assets/accreditations/msme.png";
import logo from "../assets/logo.jpeg";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/goal", label: "Goals" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/services/fssai-audit", label: "FSSAI Third Party Audit" },
  { to: "/services/hra", label: "Hygiene Rating Audit" },
  { to: "/services/zed", label: "ZED Assessment" },
  { to: "/services/energy-audit", label: "Energy Audit" },
  { to: "/services/fire-safety", label: "Fire Safety Inspection" },
  { to: "/services/environmental-audit", label: "Environmental Audit" },
  { to: "/services/eat-right", label: "Eat Right Initiative" },
];

const recognitions = [
  { name: "NABCB", img: nabcbLogo },
  { name: "FSSAI", img: fssaiLogo },
  { name: "QCI", img: qciLogo },
  { name: "IFE", img: ifeLogo },
  { name: "BEE", img: beeLogo },
  { name: "MSME", img: msmeLogo },
];
const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a1f12 0%, #061510 100%)",
      }}
    >
      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-4">
              {/* Logo */}
              <img
                src={logo}
                alt="Brajvidhya Logo"
                className="h-14 w-14 rounded-full object-cover border-2 border-[#b8962e]"
              />

              {/* Company Name */}
              <div>
                <h3
                  className="text-2xl font-black text-[#f5f0e8] leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Brajvidhya
                </h3>
                <h3
                  className="text-xl font-black text-[#b8962e]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Services Pvt. Ltd.
                </h3>
              </div>
            </div>
            <div
              className="w-10 h-[2px] mb-5"
              style={{ background: "#b8962e" }}
            />
            <p className="text-[#6a8a7a] text-sm leading-relaxed mb-6">
              NABCB accredited inspection body recognized by FSSAI, QCI, IFE,
              BEE & NDIE. Ensuring quality, safety and compliance across India.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-[#6a8a7a]">
                <span className="text-[#b8962e] mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                <span>
                  404, 4th Floor, Shagun Arcade, Vijay Nagar, Indore, MP 452010
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-[#6a8a7a]">
                <span className="text-[#b8962e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <span>92292 65444 &nbsp;|&nbsp; 92292 75444</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#6a8a7a]">
                <span className="text-[#b8962e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span>info@brajvidhya.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#6a8a7a]">
                <span className="text-[#b8962e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </span>
                <a
                  href="https://www.brajvidhya.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#b8962e] transition-colors duration-300"
                >
                  www.brajvidhya.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="space-y-2.5 flex flex-col items-start md:items-center text-[#b8962e] mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 flex flex-col items-start md:items-center">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#6a8a7a] text-sm flex items-center justify-start md:justify-center gap-2 text-left md:text-center"
                    style={{ transition: "color 0.4s ease" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#b8962e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6a8a7a")
                    }
                  >
                    {/* <span className="w-1 h-1 rounded-full bg-[#b8962e] opacity-50 group-hover:opacity-100 transition-opacity duration-300" /> */}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="space-y-2.5 flex flex-col items-start md:items-center text-[#b8962e] mb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 flex flex-col items-start md:items-center">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#6a8a7a] text-sm flex items-center justify-center gap-2 text-center"
                    style={{ transition: "color 0.4s ease" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#b8962e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6a8a7a")
                    }
                  >
                    {/* <span className="w-1 h-1 rounded-full bg-[#b8962e] opacity-50" /> */}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Accreditations Strip ── */}
        <div className="mb-10 text-center">
          <h4 className="text-[11px] font-bold tracking-[3px] uppercase text-[#b8962e] mb-6">
            Accreditations
          </h4>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {recognitions.map((r) => (
              <div
                key={r.name}
                className=" flex items-center justify-center p-4 rounded-xl "
                style={{
                  background: "#fff",
                  border: "1px solid rgba(184,150,46,0.25)",
                }}
              >
                <img src={r.img} alt={r.name} className="h-5 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: "1px solid rgba(184,150,46,0.15)" }} />

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4a6a5a] text-xs">
            © 2026 Brajvidhya Services Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-[#4a6a5a] uppercase tracking-widest">
            <span>NABCB</span>
            <span className="text-[#b8962e]">·</span>
            <span>IB 145</span>
            <span className="text-[#b8962e]">·</span>
            <span>ISO/IEC 17020:2012</span>
          </div>
          <div className="flex gap-4">
            <Link
              to="/about"
              className="text-[#4a6a5a] text-xs hover:text-[#b8962e] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-[#4a6a5a] text-xs hover:text-[#b8962e] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
