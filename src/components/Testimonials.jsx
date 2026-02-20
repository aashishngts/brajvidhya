import { useState, useEffect, useCallback } from "react";

const testimonialsData = [
  {
    feedback: "Brajvidhya's FSSAI third-party audit was thorough and professional. Their team identified compliance gaps we had overlooked, and we achieved full certification without issues.",
    name: "Mr. Rajesh Kumar",
    org: "M/S Laxmi Caterers, Mumbai",
    rating: 5,
  },
  {
    feedback: "The Hygiene Rating Audit conducted by Brajvidhya was smooth and transparent. We scored 4 smileys and it has really boosted consumer trust in our restaurant.",
    name: "Priya Sharma",
    org: "The Akshaya Patra Foundation, Delhi",
    rating: 5,
  },
  {
    feedback: "Professional, unbiased, and thorough. Their ZED assessment helped our MSME achieve certification under the QCI scheme. Highly recommended for any manufacturer.",
    name: "Suresh Mehta",
    org: "MSME Manufacturing Unit, Indore",
    rating: 5,
  },
  {
    feedback: "The fire safety audit was detailed and followed NBC standards precisely. Their team provided actionable insights that improved our emergency preparedness significantly.",
    name: "Amit Verma",
    org: "Courtyard Marriott, Gurugram",
    rating: 5,
  },
  {
    feedback: "Exceptional energy audit service. They identified 20% energy savings opportunities we hadn't considered. Very systematic and professional approach throughout.",
    name: "Dr. Renu Singh",
    org: "Industrial Facility, Bhopal",
    rating: 5,
  },
  {
    feedback: "BVSPL's environmental audit was comprehensive and aligned with all regulatory requirements. Their report was detailed and helped us avoid non-compliance penalties.",
    name: "Manish Patel",
    org: "Espire Resorts, Rajasthan",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4" fill="#b8962e" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonialsData.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  const getSlide = (offset) => testimonialsData[(current + offset + total) % total];

  return (
    <section className="py-20 px-6 md:px-12" style={{ background: "#f5f0e8" }}>
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#b8962e] mb-3">What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3d2b] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Client Testimonials
          </h2>
          <div className="w-14 h-[3px] mx-auto mb-5" style={{ background: "#b8962e" }} />
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            Trusted by leading organizations, hotels, restaurants and manufacturers across India.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Desktop: 3 visible */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[-1, 0, 1].map((offset) => {
              const item = getSlide(offset);
              const isCenter = offset === 0;
              return <TestimonialCard key={offset} item={item} isCenter={isCenter} />;
            })}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <TestimonialCard item={getSlide(0)} isCenter={true} />
          </div>

          {/* Dots only */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonialsData.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  background: i === current ? "#b8962e" : "#b8962e40",
                }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item, isCenter }) => (
  <div
    className="rounded-2xl p-7 flex flex-col justify-between"
    style={{
      background: isCenter
        ? "linear-gradient(135deg, #1a3d2b 0%, #0d2b1c 100%)"
        : "white",
      border: isCenter ? "1px solid #b8962e40" : "1px solid #e8e0d0",
      boxShadow: isCenter ? "0 20px 50px rgba(26,61,43,0.25)" : "0 4px 16px rgba(0,0,0,0.06)",
      transform: isCenter ? "scale(1.03)" : "scale(0.97)",
      transition: "all 0.6s cubic-bezier(0.23,1,0.32,1)",
      minHeight: "260px",
      opacity: isCenter ? 1 : 0.75,
    }}>

    <div className="text-5xl font-black leading-none mb-3 select-none"
      style={{ color: "#b8962e", fontFamily: "Georgia, serif", opacity: 0.5 }}>
      "
    </div>

    <p className="text-sm leading-relaxed flex-1 mb-6 italic"
      style={{ color: isCenter ? "#c8d8c8" : "#6b7280" }}>
      {item.feedback}
    </p>

    <div className="flex items-center justify-between">
      <div>
        <p className="font-black text-sm"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: isCenter ? "#f5f0e8" : "#1a3d2b",
          }}>
          {item.name}
        </p>
        <p className="text-[10px] uppercase tracking-widest mt-0.5"
          style={{ color: isCenter ? "#7a9a8a" : "#9ca3af" }}>
          {item.org}
        </p>
      </div>
      <StarRating count={item.rating} />
    </div>
  </div>
);

export default Testimonials;