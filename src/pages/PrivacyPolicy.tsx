import CommonHero from "../components/ui/CommonHero";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PrivacyPolicy = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div>
      <CommonHero
        title="Privacy Policy"
        titlesuffix=""
        subtitle="At Leading Network LLC, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or engage with our services."
        imageUrl="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
        buttonLink="#"
        buttonText="Get in Touch"
      />
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
      >
        <div className="prose prose-lg max-w-none">
          {/* Last Updated */}
          <p className="text-sm md:text-base text-textcolor/70 font-switzer mb-8">
            <strong>Last Updated:</strong>{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Section 1: Introduction */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              1. Introduction
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Welcome to <strong>Leading Network LLC</strong> ("Company", "we",
              "our", or "us").
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We respect your privacy and are committed to protecting your
              personal information.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              This <strong>Privacy Policy</strong> explains how we collect, use,
              disclose, and safeguard your data when you visit our website{" "}
              <a
                href="http://www.leadingnetworkllc.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.leadingnetworkllc.com
              </a>{" "}
              or interact with our services.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              By using our site, submitting inquiries, or engaging with our
              business, you agree to the terms outlined below.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              2. Information We Collect
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-6">
              We may collect the following types of information:
            </p>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-tanker text-textcolor mb-4">
                a. Personal Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
                <li>Full Name</li>
                <li>Company Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Country / Location</li>
                <li>
                  Any details you voluntarily provide via contact or quote forms
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-tanker text-textcolor mb-4">
                b. Non-Personal / Technical Data
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
                <li>Browser type and version</li>
                <li>Device information (desktop, mobile, tablet)</li>
                <li>IP address and geographic region</li>
                <li>Pages visited, time spent, and referral links</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-tanker text-textcolor mb-4">
                c. Business Communications
              </h3>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                Information exchanged via email, WhatsApp, or contact forms
                related to quotations, orders, or supplier discussions.
              </p>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              3. How We Use Your Information
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We process your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>Respond to your inquiries or quotation requests</li>
              <li>Provide product or service updates</li>
              <li>Manage customer relationships and after-sales support</li>
              <li>Improve our website and communication experience</li>
              <li>
                Send promotional materials or updates (only if you've opted in)
              </li>
              <li>Comply with Oman laws and business regulations</li>
            </ul>
          </section>

          {/* Section 4: Data Protection and Security */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              4. Data Protection and Security
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We apply appropriate technical and organizational measures to
              safeguard your information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4 mb-4">
              <li>Secure encrypted communication (HTTPS / SSL)</li>
              <li>Restricted internal access to data</li>
              <li>Safe storage and backup procedures</li>
              <li>Regular review of data handling processes</li>
            </ul>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              However, while we strive for full protection, no online
              transmission or storage system is 100% secure.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              You acknowledge that you use our Website and share information{" "}
              <strong>at your own risk</strong>.
            </p>
          </section>

          {/* Section 5: Cookies and Tracking */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              5. Cookies and Tracking
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Our Website may use cookies or analytics tools (like Google
              Analytics) to improve performance and user experience.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Cookies help us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4 mb-4">
              <li>Understand how visitors use our site</li>
              <li>Optimize loading speed and navigation</li>
              <li>Remember form inputs or preferences</li>
            </ul>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              You can disable cookies through your browser settings, but some
              parts of the Website may not function properly.
            </p>
          </section>

          {/* Section 6: Sharing and Disclosure of Data */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              6. Sharing and Disclosure of Data
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We do <strong>not sell, rent, or trade</strong> your personal
              information.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We may share data only in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>
                With trusted service providers who help us operate our website
                or logistics (under confidentiality agreements)
              </li>
              <li>
                When required by Oman authorities or law enforcement for
                compliance reasons
              </li>
              <li>
                During a merger, acquisition, or business transfer, subject to
                data protection safeguards
              </li>
            </ul>
          </section>

          {/* Section 7: Data Retention */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              7. Data Retention
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We retain your personal data only for as long as necessary to
              fulfill the purpose it was collected for — typically until:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4 mb-4">
              <li>your inquiry or order is completed, or</li>
              <li>you request deletion of your information.</li>
            </ul>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              Archived or backup data may be kept for record-keeping or legal
              compliance.
            </p>
          </section>

          {/* Section 8: Your Rights */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              8. Your Rights
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Depending on your region, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4 mb-4">
              <li>Access a copy of your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing communication</li>
            </ul>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              To exercise these rights, email us at{" "}
              <a
                href="mailto:privacy@leadingnetworkllc.com"
                className="text-primary hover:underline"
              >
                privacy@leadingnetworkllc.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@leadingnetworkoman.com"
                className="text-primary hover:underline"
              >
                info@leadingnetworkoman.com
              </a>
              .
            </p>
          </section>

          {/* Section 9: External Links */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              9. External Links
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Our Website may contain links to third-party sites (e.g.,
              logistics partners, suppliers, or social platforms).
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              We are not responsible for the privacy policies or content of
              those sites. Please review their individual policies before
              sharing any information.
            </p>
          </section>

          {/* Section 10: International Data Transfers */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              10. International Data Transfers
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              As part of our import and export operations, your data may be
              transferred across borders to business partners or logistics
              providers. We ensure that such transfers comply with{" "}
              <strong>Oman data protection laws</strong> and{" "}
              <strong>international standards</strong> for information security.
            </p>
          </section>

          {/* Section 11: Updates to This Policy */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              11. Updates to This Policy
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We may update this Privacy Policy periodically.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              The "Last Updated" date will appear at the top of this page.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              Continued use of our website after changes implies acceptance of
              the updated terms.
            </p>
          </section>

          {/* Section 12: Contact Us */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              12. Contact Us
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-6">
              If you have any questions or concerns regarding this Privacy
              Policy or our data practices, please contact:
            </p>
            <div className="bg-bg border border-textcolor border-dashed rounded-lg p-6 md:p-8">
              <p className="text-lg md:text-xl font-tanker text-textcolor mb-4">
                Leading Network LLC
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor mb-2">
                Muscat, Sultanate of Oman
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor mb-2">
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@leadingnetworkllc.com"
                  className="text-primary hover:underline"
                >
                  info@leadingnetworkllc.com
                </a>
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor">
                📞 <strong>Phone:</strong> +968 XX XXX XXXX
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
