const PrivacyPolicy = () => {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      {/* HERO */}
      <div
        className="relative overflow-hidden py-16 md:py-20 px-6 md:px-12"
        style={{
          background: "linear-gradient(135deg, #0d2b1c 0%, #1a3d2b 100%)",
        }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-5"
          style={{ background: "#b8962e" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-5"
          style={{ background: "#b8962e" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p
              className="text-[11px] font-bold tracking-[4px] uppercase mb-3"
              style={{ color: "#b8962e" }}
            >
              Legal Information
            </p>

            <h1
              className="text-4xl md:text-6xl font-black text-[#f5f0e8] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Privacy Policy
            </h1>

            <div
              className="w-16 h-[2px] mb-5"
              style={{ background: "#b8962e" }}
            />

            <p className="text-base md:text-lg text-[#8aaa9a] leading-relaxed">
              Brajvidhya Services Private Limited (BVSPL–ICB) is committed to
              protecting the confidentiality, integrity, and security of
              information obtained during inspection, audit, assessment, and
              certification activities.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-8xl mx-auto px-6 md:px-30 py-16">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: "#f9f6f0",
            border: "1.5px solid #e8e0d0",
          }}
        >
          <div className="space-y-8 text-[#2a3a2a] leading-8">
            <div>
              <h2
                className="text-2xl font-black text-[#1a3d2b] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Confidentiality Commitment
              </h2>

              <p>
                Brajvidhya Services Private Limited (BVSPL–ICB) is committed to
                maintaining the confidentiality, integrity, and security of all
                information obtained or created during the performance of
                Inspection, Audit, Assessment, and Certification activities.
                Information collected through legally enforceable commitments
                such as contracts, agreements, work orders, purchase orders,
                applications, inspections, audits, complaints, appeals, or
                regulatory interactions is managed in a confidential manner in
                accordance with applicable legal, statutory, accreditation, and
                contractual requirements.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-black text-[#1a3d2b] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Public Information & Disclosure
              </h2>

              <p>
                Information available on the official website,
                www.brajvidhya.com, is considered to be in the public domain.
                However, any additional client-related information intended to
                be disclosed publicly shall only be released after informing the
                concerned client unless otherwise required by law.
              </p>

              <p className="mt-4">
                Except for information already made publicly available by the
                client or information agreed to be disclosed for specific
                purposes such as complaint resolution, all information related
                to clients and their operations is treated as proprietary and
                confidential.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-black text-[#1a3d2b] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Protection of Information
              </h2>

              <p>
                Information received from sources other than the client,
                including complainants, regulators, statutory authorities, or
                accreditation bodies, is also maintained as confidential.
              </p>

              <p className="mt-4">
                All employees, auditors, inspectors, technical experts,
                observers, committee members, and associated personnel of BVSPL
                are bound by the organization’s Code of Conduct,
                Confidentiality Agreements, and Impartiality Declarations to
                ensure protection of confidential and proprietary information.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-black text-[#1a3d2b] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Disclosure Required by Law
              </h2>

              <p>
                BVSPL may disclose confidential information only when required
                by law, court order, regulatory authority, accreditation
                requirement, or contractual obligation. In such cases, and
                unless prohibited by law, the concerned client or individual
                shall be informed prior to disclosure.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-black text-[#1a3d2b] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Data Security & Record Management
              </h2>

              <p>
                Information collected during inspections, audits, assessments,
                or certification activities is securely maintained under
                controlled access and can only be retrieved with the approval of
                competent authority.
              </p>

              <p className="mt-4">
                Such information shall not be disclosed to any external agency
                except where required for legal or statutory purposes. BVSPL
                implements appropriate administrative and operational controls
                to safeguard records against unauthorized access, misuse,
                alteration, loss, or disclosure.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-black text-[#1a3d2b] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Commitment to Integrity
              </h2>

              <p>
                Proprietary information made available during the inspection and
                certification process is strictly protected and shall not be
                divulged or disclosed without proper authorization.
              </p>

              <p className="mt-4">
                Through this Privacy Policy, BVSPL demonstrates its commitment
                to maintaining trust, confidentiality, impartiality, and
                professional integrity in all its inspection and certification
                activities.
              </p>
            </div>

            <div
              className="mt-10 p-6 rounded-2xl"
              style={{
                background: "#1a3d2b08",
                border: "1px solid #b8962e30",
              }}
            >
              <p className="text-sm text-[#4a6a5a]">
                <strong>Brajvidhya Services Private Limited (BVSPL–ICB)</strong>
                <br />
                404, 4th Floor, Shagun Arcade, Vijay Nagar, Indore, Madhya
                Pradesh 452010
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;