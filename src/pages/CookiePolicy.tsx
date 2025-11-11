import CommonHero from "../components/ui/CommonHero";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CookiePolicy = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div>
      <CommonHero
        title="Cookie Policy"
        titlesuffix=""
        subtitle="This Cookie Policy explains how Baharnani Advertising L.L.C uses cookies and similar tracking technologies on our website. By continuing to browse or use our Website, you consent to the use of cookies as described below."
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
            <strong>Last Updated:</strong> September 16, 2024
          </p>

          {/* Section 1: Introduction */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              1. INTRODUCTION
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              This <strong>Cookie Policy</strong> explains how{" "}
              <strong>Baharnani Advertising L.L.C</strong> ("we", "our", or
              "us") uses cookies and similar tracking technologies on our
              website{" "}
              <a
                href="https://corporategiftsdubaii.ae"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://corporategiftsdubaii.ae
              </a>{" "}
              ("Website").
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              By continuing to browse or use our Website, you consent to the use
              of cookies as described below.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              You can manage or disable cookies anytime through your browser
              settings.
            </p>
          </section>

          {/* Section 2: What Are Cookies */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              2. WHAT ARE COOKIES
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Cookies are small text files stored on your device (computer,
              tablet, or smartphone) when you visit a website.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              They help websites function properly, remember preferences, and
              analyze user activity for performance and improvement.
            </p>
          </section>

          {/* Section 3: Types of Cookies We Use */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              3. TYPES OF COOKIES WE USE
            </h2>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-tanker text-textcolor mb-4">
                a. Essential Cookies
              </h3>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                These cookies are required for the basic operation of our
                Website — such as page navigation, security verification, and
                form submission.
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                Disabling them may cause parts of the site to stop functioning
                correctly.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-tanker text-textcolor mb-4">
                b. Performance & Analytics Cookies
              </h3>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                We use cookies (e.g., Google Analytics) to understand how
                visitors interact with our Website — pages visited, time spent,
                and referral sources.
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                This helps us improve our content and user experience.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-tanker text-textcolor mb-4">
                c. Functional Cookies
              </h3>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                These cookies remember your preferences — such as language
                choice or form inputs — so that your experience is smoother on
                return visits.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-tanker text-textcolor mb-4">
                d. Marketing & Third-Party Cookies
              </h3>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                Occasionally, third-party tools (e.g., embedded maps, social
                media links, or YouTube videos) may set cookies to track
                engagement or view counts.
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
                We do not control these cookies directly.
              </p>
            </div>
          </section>

          {/* Section 4: Managing or Disabling Cookies */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              4. MANAGING OR DISABLING COOKIES
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              You can control cookie behavior through your browser settings:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4 mb-4">
              <li>
                <strong>Google Chrome:</strong> Settings → Privacy & Security →
                Cookies and Other Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy
              </li>
              <li>
                <strong>Microsoft Edge / Firefox:</strong> Settings → Privacy &
                Security
              </li>
            </ul>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              You can choose to block, delete, or restrict cookies.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              Please note that disabling certain cookies may affect the
              Website's performance or functionality.
            </p>
          </section>

          {/* Section 5: Third-Party Tools and Services */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              5. THIRD-PARTY TOOLS AND SERVICES
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We may integrate analytics, advertising, or embedded services that
              use cookies, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4 mb-4">
              <li>
                <strong>Google Analytics</strong> (traffic measurement)
              </li>
              <li>
                <strong>Google Maps</strong> (location display)
              </li>
              <li>
                <strong>Social Media Widgets</strong> (LinkedIn, Instagram,
                Facebook links)
              </li>
            </ul>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Each third-party service follows its own privacy and cookie
              policy.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              We recommend reviewing their individual policies for more details.
            </p>
          </section>

          {/* Section 6: Updates to This Policy */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              6. UPDATES TO THIS POLICY
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We may revise this Cookie Policy periodically to reflect changes
              in technology, legal requirements, or our operations.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Any updates will be posted on this page with a revised "Last
              Updated" date.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              Your continued use of our Website implies acceptance of the
              updated version.
            </p>
          </section>

          {/* Section 7: Contact Us */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              7. CONTACT US
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-6">
              For any questions regarding our Cookie Policy or data practices,
              please reach out to:
            </p>
            <div className="bg-bg border border-textcolor border-dashed rounded-lg p-6 md:p-8">
              <p className="text-lg md:text-xl font-tanker text-textcolor mb-4">
                Baharnani Advertising L.L.C
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor mb-2">
                Al Quoz – Al Quoz 3 – Dubai
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor mb-2">
                Dubai, إمارة دبيّ 49757
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor mb-2">
                United Arab Emirates
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor mb-2">
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+97143805587"
                  className="text-primary hover:underline"
                >
                  (+971)43805587
                </a>
              </p>
              <p className="text-base md:text-lg font-switzer text-textcolor">
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@baharnani.com"
                  className="text-primary hover:underline"
                >
                  info@baharnani.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default CookiePolicy;
