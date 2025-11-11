import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Telescope, Target } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const VisionMission = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const supportingRef = useRef<HTMLDivElement>(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-50px",
  });
  const isVisionInView = useInView(visionRef, {
    once: true,
    margin: "-100px",
  });
  const isMissionInView = useInView(missionRef, {
    once: true,
    margin: "-100px",
  });
  const isSupportingInView = useInView(supportingRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 overflow-x-hidden">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto">
        {/* Heading Section */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-textcolor leading-tight">
            Our Purpose and Direction
          </h2>
        </motion.div>

        {/* Vision and Mission Section - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Vision Section - Left */}
          <motion.div
            ref={visionRef}
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={
              isVisionInView
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: -30, y: 20 }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="bg-bg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-textcolor border-dashed hover:shadow-xl transition-all duration-300 h-full"
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={
                  isVisionInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.5, rotate: -180 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center bg-textcolor/10 mb-1 sm:mb-2"
              >
                <Telescope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-textcolor" />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-khand font-bold text-textcolor"
              >
                Our Vision:
              </motion.h3>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-switzer text-textcolor leading-relaxed"
              >
                To be recognized as one of the{" "}
                <strong className="font-semibold text-textcolor">
                  most dependable and diversified trading companies in Oman
                </strong>
                , connecting industries worldwide with sustainable and
                innovative trade solutions.
              </motion.p>
            </div>
          </motion.div>

          {/* Mission Section - Right */}
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={
              isMissionInView
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: 30, y: 20 }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
            className="bg-bg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-textcolor border-dashed hover:shadow-xl transition-all duration-300 h-full"
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                animate={
                  isMissionInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.5, rotate: 180 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center bg-textcolor/10 mb-1 sm:mb-2"
              >
                <Target className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-textcolor" />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-khand font-bold text-textcolor"
              >
                Our Mission:
              </motion.h3>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-switzer text-textcolor leading-relaxed"
              >
                To provide{" "}
                <strong className="font-semibold text-textcolor">
                  high-quality, certified products
                </strong>{" "}
                across multiple industries through efficient sourcing,
                transparent trade practices, and global distribution networks
                that drive value and trust for our clients and partners.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Supporting Paragraph */}
        <motion.div
          ref={supportingRef}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={
            isSupportingInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.95 }
          }
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className="w-full relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 overflow-hidden"
        >
          <div className="max-w-4xl sm:max-w-5xl mx-auto relative px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
            {/* Top Left Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={
                isSupportingInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0, rotate: -45 }
              }
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="absolute top-2 left-2 sm:top-0 sm:left-0 md:top-0 md:left-2 lg:top-0 lg:left-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-textcolor/20"
            >
              <FaQuoteLeft />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isSupportingInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-tanker text-textcolor leading-relaxed text-center pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8"
            >
              We aim to expand our network across emerging markets while
              continuing to uphold ethical trade standards, supply reliability,
              and environmentally responsible business operations.
            </motion.p>

            {/* Bottom Right Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={
                isSupportingInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0, rotate: 45 }
              }
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="absolute bottom-2 right-2 sm:bottom-0 sm:right-0 md:bottom-0 md:right-2 lg:bottom-0 lg:right-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-textcolor/20"
            >
              <FaQuoteRight />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
