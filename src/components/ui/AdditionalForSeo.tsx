import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface SeoSection {
  heading: string;
  content: string;
  highlightLine?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "top" | "bottom";
}

interface AdditionalForSeoProps {
  sections: SeoSection | SeoSection[];
}

const AdditionalForSeo = ({ sections }: AdditionalForSeoProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  // Normalize to array
  const sectionsArray = Array.isArray(sections) ? sections : [sections];

  return (
    <section
      ref={sectionRef}
      className="w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 overflow-x-hidden"
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto">
        {sectionsArray.map((section, index) => {
          const imagePosition = section.imagePosition || "right";
          const hasImage = !!section.image;
          const isLast = index === sectionsArray.length - 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-8 sm:mb-10 md:mb-12 lg:mb-16 ${
                isLast ? "" : "mb-12 sm:mb-16 md:mb-20 lg:mb-24"
              }`}
            >
              {/* Image at top if position is top */}
              {hasImage && imagePosition === "top" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                  className="mb-6 sm:mb-8 md:mb-10"
                >
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.heading}
                    className="w-full h-auto rounded-lg object-cover max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
                  />
                </motion.div>
              )}

              <div
                className={`flex flex-col ${
                  hasImage &&
                  (imagePosition === "left" || imagePosition === "right")
                    ? "lg:flex-row lg:items-start lg:gap-8 xl:gap-12"
                    : ""
                }`}
              >
                {/* Image on left */}
                {hasImage && imagePosition === "left" && (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                    className="w-full lg:w-1/2 mb-6 lg:mb-0"
                  >
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.heading}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </motion.div>
                )}

                {/* Content Section */}
                <div
                  className={`flex-1 ${
                    hasImage && imagePosition === "left" ? "lg:pl-0" : ""
                  }`}
                >
                  {/* H2 Heading */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-textcolor leading-tight mb-6 sm:mb-8 md:mb-10">
                    {section.heading}
                  </h2>

                  {/* Content Paragraph */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="mb-6 sm:mb-8 md:mb-10"
                  >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-switzer text-textcolor leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>

                  {/* Highlight Line */}
                  {section.highlightLine && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      className="bg-[#e1e1e1] border-l-4 border-textcolor p-6 sm:p-8 md:p-10 rounded-lg"
                    >
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-tanker text-textcolor italic leading-relaxed">
                        "{section.highlightLine}"
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Image on right */}
                {hasImage && imagePosition === "right" && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                    className="w-full lg:w-1/2 mt-6 lg:mt-0"
                  >
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.heading}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </motion.div>
                )}
              </div>

              {/* Image at bottom if position is bottom */}
              {hasImage && imagePosition === "bottom" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="mt-6 sm:mt-8 md:mt-10"
                >
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.heading}
                    className="w-full h-auto rounded-lg object-cover max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AdditionalForSeo;
