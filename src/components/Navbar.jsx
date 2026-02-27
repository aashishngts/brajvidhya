import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

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
      className={`relative px-3 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-200 font-['Outfit']  whitespace-nowrap group
      ${isActive ? "text-[#b8962e]" : "text-[#e8e0d0] hover:text-[#d4af50]"}`}
    >
      {label}
      <span
        className={`absolute bottom-1 left-3 right-3 h-[1.5px] bg-[#b8962e] transition-transform duration-250 origin-center
        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
      />
    </Link>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b-2 border-[#b8962e]"
      style={{
        background:
          "linear-gradient(135deg, #0d2b1c 0%, #1a3d2b 60%, #1e4535 100%)",
      }}
    >
      {/* ── MOBILE BAR ── */}
      <div className="md:hidden flex items-center justify-between px-4 h-[64px] ">
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
            className="block w-6 h-[2px] bg-[#b8962e] transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "",
            }}
          />
          <span
            className="block w-6 h-[2px] bg-[#b8962e] transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[2px] bg-[#b8962e] transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "",
            }}
          />
        </button>
      </div>

      {/* ── DESKTOP BAR ── */}
      <div className="hidden md:grid max-w-[1280px] mx-auto grid-cols-[1fr_auto_1fr] items-center px-6 h-[76px]">
        <nav className="flex items-center justify-end gap-10 pr-10">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              pathname={pathname}
            />
          ))}
        </nav>

        <Link to="/" className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[70px] w-[70px] rounded-full object-cover border-2 border-yellow-600 bg-white"
          />
        </Link>

        <nav className="flex items-center justify-start gap-10 pl-10">
          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              pathname={pathname}
            />
          ))}
        </nav>
      </div>

      {/* ── MOBILE DROPDOWN (OUTSIDE DESKTOP DIV) ── */}
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

export default Navbar;