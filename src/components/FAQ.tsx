import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FAQItem[];
  title: React.ReactNode;
  subtitle: string;
  imageUrl?: string;
}

const FAQ = ({
  faqData,
  title,
  subtitle,
  imageUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-50px",
  });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-12 overflow-x-hidden">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Heading Section - Centered */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-textcolor leading-tight mb-4 sm:mb-5 md:mb-6">
            {title}
          </h2>
          <div className="mb-3 sm:mb-4 md:mb-5">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-switzer tracking-widest sm:tracking-[0.2em] md:tracking-[0.3em] text-textcolor font-medium">
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Content Section - Left Image, Right Accordion */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 xl:w-2/5 shrink-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isContentInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={imageUrl}
                    alt="FAQ"
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-textcolor/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 xl:w-3/5 flex flex-col gap-2"
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isContentInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="border border-textcolor bg-[#e1e1e1] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 sm:px-7 md:px-8 py-5 sm:py-6 md:py-7 flex items-center justify-between gap-4 text-left hover:bg-[#d1d1d1] transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-tanker text-textcolor flex-1">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        size={24}
                        className="text-textcolor"
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 md:px-8 pb-5 sm:pb-6 md:pb-7">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-switzer text-textcolor leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
