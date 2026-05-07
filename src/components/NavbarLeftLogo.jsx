import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logos/finalLogo.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/goal", label: "Goal" },
  { to: "/contact", label: "Contact" },
];

const NavLink = ({ to, label, pathname }) => {
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-200 font-['Outfit'] group
      ${isActive ? "text-[#b8962e]" : "text-[#e8e0d0] hover:text-[#d4af50]"}`}
    >
      {label}
      <span
        className={`absolute bottom-1 left-3 right-3 h-[1.5px] bg-[#b8962e] transition-transform duration-300 origin-center
        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
      />
    </Link>
  );
};

const NavbarLeftLogo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#b8962e]/30"
      style={{
        background:
          "linear-gradient(135deg, #0d2b1c 0%, #1a3d2b 60%, #1e4535 100%)",
      }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between max-w-[1280px] mx-auto px-8 h-[76px]">

        {/* Left Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-[58px] w-[58px]  object-cover border-2 border-yellow-600 bg-white"
          />
        </Link>

        {/* Right Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              pathname={pathname}
            />
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 h-[64px]">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-[48px] w-[48px] rounded-full object-cover border-2 border-yellow-600 bg-white"
          />
        </Link>

        <button
          className="flex flex-col gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-[#b8962e] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#b8962e] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#b8962e] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ background: "#0d2b1c" }}
      >
        <div className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 text-[13px] font-bold uppercase tracking-widest border-b border-[#b8962e]/15 last:border-none
              ${
                pathname === link.to
                  ? "text-[#b8962e] bg-[#b8962e]/10"
                  : "text-[#e8e0d0] hover:text-[#b8962e]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavbarLeftLogo;