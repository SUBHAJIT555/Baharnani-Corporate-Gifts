import CommonHero from "../components/ui/CommonHero";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TermsAndConditions = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div>
      <CommonHero
        title="Terms and Conditions"
        titlesuffix=""
        subtitle="These Terms and Conditions govern your use of our website and any related services, quotations, or communications provided by Leading Network LLC. Please read these terms carefully before using our services."
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
              These <strong>Terms and Conditions</strong> govern your use of our
              website{" "}
              <a
                href="http://www.leadingnetworkllc.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.leadingnetworkllc.com
              </a>{" "}
              ("Website") and any related services, quotations, or
              communications provided by us.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              By accessing or using our Website, you agree to be bound by these
              Terms.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              If you do not agree, please do not use our site or services.
            </p>
          </section>

          {/* Section 2: Business Scope */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              2. Business Scope
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              Leading Network LLC operates as a{" "}
              <strong>general trading company</strong> based in Oman, engaged in
              the trading, import, export, and supply of products including{" "}
              <strong>
                construction materials, foodstuff, electronics, chemicals, and
                related goods and services.
              </strong>
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              All transactions are subject to Oman laws, commercial regulations,
              and international trade compliance requirements.
            </p>
          </section>

          {/* Section 3: Use of Website */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              3. Use of Website
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>
                You agree to use this Website only for lawful purposes and in
                accordance with these Terms.
              </li>
              <li>
                You must not attempt to gain unauthorized access to the Website,
                its data, or its server.
              </li>
              <li>
                Information and content on this Website are for{" "}
                <strong>general information and business communication</strong>{" "}
                only and may change without prior notice.
              </li>
              <li>
                We reserve the right to modify, suspend, or discontinue any
                section of the site at any time.
              </li>
            </ul>
          </section>

          {/* Section 4: Product Information and Pricing */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              4. Product Information and Pricing
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>
                Product images and descriptions are provided for reference only;
                actual specifications or packaging may vary based on supply
                availability.
              </li>
              <li>
                Prices, quantities, and delivery schedules are subject to
                confirmation through official quotation and purchase order
                acknowledgment.
              </li>
              <li>
                All quotations are <strong>valid for a limited time</strong> and
                may change based on market fluctuations or currency variations.
              </li>
              <li>
                Taxes, customs duties, and import/export fees are the
                responsibility of the buyer unless otherwise stated in writing.
              </li>
            </ul>
          </section>

          {/* Section 5: Orders and Payment */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              5. Orders and Payment
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>
                Orders are confirmed only after receipt of an official{" "}
                <strong>Purchase Order (PO)</strong> and payment confirmation
                where required.
              </li>
              <li>
                Accepted payment methods include{" "}
                <strong>
                  bank transfer, cheque, or other approved instruments
                </strong>{" "}
                stated in the quotation or invoice.
              </li>
              <li>
                Late payments may result in delayed delivery or cancellation.
              </li>
              <li>
                Ownership of goods remains with Leading Network LLC until full
                payment is received.
              </li>
            </ul>
          </section>

          {/* Section 6: Delivery and Shipping */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              6. Delivery and Shipping
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>
                Delivery terms (FOB, CIF, DDP, etc.) shall be clearly stated in
                each quotation or contract.
              </li>
              <li>
                Delivery times are estimates and may vary due to factors beyond
                our control (logistics, customs, or supplier delays).
              </li>
              <li>
                The company is not liable for delays caused by shipping
                carriers, natural events, or regulatory clearance.
              </li>
              <li>
                Risk of loss passes to the buyer once goods are handed over to
                the carrier or designated agent.
              </li>
            </ul>
          </section>

          {/* Section 7: Returns, Replacements, and Claims */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              7. Returns, Replacements, and Claims
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>
                Claims for shortages, damage, or defective goods must be made{" "}
                <strong>within 7 working days</strong> of delivery.
              </li>
              <li>
                Returned goods require prior written authorization and must be
                in original packaging.
              </li>
              <li>
                Non-stock, custom, or special-order items are{" "}
                <strong>non-returnable</strong> unless proven defective.
              </li>
              <li>
                Approved returns may be subject to restocking or handling
                charges.
              </li>
            </ul>
          </section>

          {/* Section 8: Warranties and Liability */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              8. Warranties and Liability
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-switzer text-textcolor leading-relaxed ml-4">
              <li>
                All products are supplied in good faith and according to
                supplier/manufacturer warranties, where applicable.
              </li>
              <li>
                Leading Network LLC does not provide additional warranties
                beyond what is stated by the manufacturer.
              </li>
              <li>
                We are not liable for any{" "}
                <strong>indirect, incidental, or consequential damages</strong>,
                including loss of profits, data, or business opportunities.
              </li>
              <li>
                Our total liability shall not exceed the amount paid for the
                specific goods or services in dispute.
              </li>
            </ul>
          </section>

          {/* Section 9: Intellectual Property */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              9. Intellectual Property
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              All content on this Website, including text, images, graphics, and
              company trademarks, is the{" "}
              <strong>property of Leading Network LLC</strong> or its licensors.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              You may not copy, reproduce, distribute, or modify any content
              without prior written consent.
            </p>
          </section>

          {/* Section 10: Confidentiality */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              10. Confidentiality
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              Any information shared between Leading Network LLC and its clients
              or suppliers — including pricing, product data, and trade
              documents — shall be treated as confidential and not disclosed to
              third parties without authorization.
            </p>
          </section>

          {/* Section 11: Governing Law and Jurisdiction */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              These Terms are governed by and construed under the laws of the{" "}
              <strong>Sultanate of Oman</strong>.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              Any disputes shall be subject to the{" "}
              <strong>exclusive jurisdiction of the courts of Oman</strong>.
            </p>
          </section>

          {/* Section 12: Amendments */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              12. Amendments
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              We may update or modify these Terms at any time without prior
              notice.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-4">
              The latest version will always be available on this page.
            </p>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed">
              Continued use of our Website or services implies acceptance of the
              updated Terms.
            </p>
          </section>

          {/* Section 13: Contact Information */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-tanker text-textcolor mb-4 md:mb-6">
              13. Contact Information
            </h2>
            <p className="text-base md:text-lg font-switzer text-textcolor leading-relaxed mb-6">
              For any questions or clarifications regarding these Terms and
              Conditions, please contact:
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

export default TermsAndConditions;
