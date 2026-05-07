import React from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "./ServicesPage";

const C = {
  green: "#1a3d2b",
  greenDk: "#0d2b1c",
  gold: "#b8962e",
  goldLt: "#d4aa42",
  cream: "#f5f0e8",
  muted: "#6a8a7a",
  textDk: "#1a2e23",
  white: "#ffffff",
};

const ServiceDetail = () => {
  const { id } = useParams();

  const service = services.find((s) => s.num === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Service Not Found
      </div>
    );
  }

  return (
    <div
      style={{
        background: C.cream,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.greenDk} 0%, ${C.green} 60%, #1e4d35 100%)`,
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: C.gold }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mb-8 text-sm font-bold"
            style={{ color: C.goldLt }}
          >
            ← Back to Services
          </Link>

          <div className="max-w-4xl">
            <p
              className="text-[12px] font-bold tracking-[4px] uppercase mb-4"
              style={{ color: C.gold }}
            >
              Service {service.num}
            </p>

            <h1
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {service.title}
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-3xl"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {service.shortDesc}
            </p>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          style={{ height: 70 }}
        >
          <path
            d="M0,64L80,58.7C160,53,320,43,480,37.3C640,32,800,32,960,42.7C1120,53,1280,75,1360,85.3L1440,96L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
            fill={C.cream}
          />
        </svg>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: C.white,
                border: "1px solid #e9dfcf",
                boxShadow: "0 8px 40px rgba(0,0,0,0.05)",
              }}
            >
              {/* top */}
              <div className="p-8 md:p-10 border-b border-[#eee3d3]">
                <div className="flex items-center gap-5 flex-wrap">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${C.green}10`,
                      color: C.green,
                    }}
                  >
                    {service.icon}
                  </div>

                  <div>
                    <h2
                      className="text-3xl font-black mb-2"
                      style={{
                        color: C.textDk,
                        fontFamily:
                          "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {service.title}
                    </h2>

                    {service.badgeImg && (
                      <img
                        src={service.badgeImg}
                        alt="badge"
                        className="h-10 object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="p-8 md:p-10">
                <h3
                  className="text-2xl font-black mb-5"
                  style={{ color: C.green }}
                >
                  Service Overview
                </h3>

                <p
                  className="text-[15px] leading-[2]"
                  style={{ color: C.muted }}
                >
                  {service.shortDesc}
                </p>

                {/* highlights */}
                <div className="mt-12">
                  <h3
                    className="text-2xl font-black mb-6"
                    style={{ color: C.green }}
                  >
                    Key Highlights
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.points.map((point, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl"
                        style={{
                          background: "#faf6ef",
                          border: "1px solid #eee3d3",
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                            style={{
                              background: `${C.gold}20`,
                            }}
                          >
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={C.gold}
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>

                          <p
                            className="text-sm leading-relaxed font-medium"
                            style={{ color: C.textDk }}
                          >
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div
              className="sticky top-24 rounded-3xl p-8"
              style={{
                background: C.white,
                border: "1px solid #e9dfcf",
                boxShadow: "0 8px 40px rgba(0,0,0,0.05)",
              }}
            >
              <p
                className="text-[11px] font-bold tracking-[3px] uppercase mb-3"
                style={{ color: C.gold }}
              >
                Need Assistance?
              </p>

              <h3
                className="text-3xl font-black mb-4"
                style={{
                  color: C.green,
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Talk to Our Experts
              </h3>

              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: C.muted }}
              >
                Get professional guidance, inspection scheduling and compliance
                support from our certified audit team.
              </p>

              <Link
                to="/contact"
                className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${C.green}, ${C.greenDk})`,
                  color: "white",
                }}
              >
                Enquire Now

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>

              <div
                className="mt-8 pt-8 border-t"
                style={{ borderColor: "#eee3d3" }}
              >
                <div className="space-y-4">
                  {[
                    "NABCB Accredited",
                    "PAN India Service",
                    "Certified Auditors",
                    "Transparent Reporting",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: C.gold }}
                      />

                      <p
                        className="text-sm font-medium"
                        style={{ color: C.textDk }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;