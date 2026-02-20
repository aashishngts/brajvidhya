import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "white",
        boxShadow: hovered ? "0 24px 56px rgba(26,61,43,0.22)" : "0 4px 20px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        border: hovered ? "1px solid #b8962e50" : "1px solid #e8e0d030",
        transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.7s cubic-bezier(0.23,1,0.32,1), border 0.7s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image section ── */}
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.9s cubic-bezier(0.23,1,0.32,1)",
            filter: hovered ? "brightness(0.6)" : "brightness(0.75)",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,43,28,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />

        {/* Badge on image */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: hovered ? "#b8962e" : service.badgeColor,
              color: "white",
              transition: "background 0.6s ease",
            }}>
            {service.badge}
          </span>
        </div>

        {/* Number watermark */}
        <div className="absolute top-3 right-4 text-white font-black select-none"
          style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", opacity: 0.15 }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Content section ── */}
      <div className="p-6"
        style={{
          background: hovered ? "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)" : "white",
          transition: "background 0.7s cubic-bezier(0.23,1,0.32,1)",
        }}>

        {/* Title */}
        <h3 className="font-black text-base leading-snug mb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: hovered ? "#f5f0e8" : "#1a3d2b",
            transition: "color 0.6s ease",
          }}>
          {service.title}
        </h3>

        {/* Short desc — always visible */}
        <p className="text-xs leading-relaxed mb-3"
          style={{
            color: hovered ? "#a0b8a8" : "#6b7280",
            transition: "color 0.6s ease",
          }}>
          {service.shortDesc}
        </p>

        {/* Full desc — expands on hover, slow smooth */}
        <div style={{
          maxHeight: hovered ? "120px" : "0px",
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.8s cubic-bezier(0.23,1,0.32,1), opacity 0.7s ease",
          marginBottom: hovered ? "12px" : "0px",
        }}>
          <p className="text-xs leading-relaxed" style={{ color: "#7a9a8a" }}>
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.tags.slice(0, 3).map((tag) => (
            <span key={tag}
              className="text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider"
              style={{
                background: hovered ? "#b8962e12" : "#f5f0e8",
                color: hovered ? "#b8962e" : "#9ca3af",
                border: `1px solid ${hovered ? "#b8962e35" : "#e8e0d0"}`,
                transition: "all 0.6s ease",
              }}>
              {tag}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <Link to={service.to}
          className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest"
          style={{
            color: hovered ? "#b8962e" : "#1a3d2b",
            transition: "color 0.6s ease",
          }}>
          Learn More
          <span style={{
            display: "inline-block",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}>→</span>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: "#f5f0e8" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a3d2b" }}>
            Our Services
          </h2>
          <div className="w-14 h-[3px] mx-auto mb-5" style={{ background: "#b8962e" }} />
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Comprehensive inspection, audit & certification services across food safety, fire, energy, environment and MSME sectors — all under one NABCB-accredited roof.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)", border: "1px solid #b8962e30" }}>
          <div>
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#b8962e] mb-2">NABCB · IB 145</p>
            <h3 className="text-2xl font-black text-[#f5f0e8]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Need a custom audit or inspection?
            </h3>
            <p className="text-[#7a9a8a] text-sm mt-1">Our team covers all of India. Get in touch for a consultation.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link to="/contact"
              className="px-7 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
              style={{ background: "#b8962e", color: "#0d2b1c", transition: "transform 0.5s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              Contact Us
            </Link>
            <Link to="/about"
              className="px-7 py-3 rounded-lg text-sm font-bold uppercase tracking-wider border border-[#b8962e]/40 text-[#e8e0d0]"
              style={{ transition: "background 0.5s ease" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(184,150,46,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;