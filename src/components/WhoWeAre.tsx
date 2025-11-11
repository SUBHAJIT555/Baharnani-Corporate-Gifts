import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhoWeAre = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-50px",
  });
  const isVideoInView = useInView(videoRef, {
    once: true,
    margin: "-100px",
  });
  const isCardsInView = useInView(cardsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="w-full">
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-textcolor leading-tight">
          Who We Are
        </h2>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        ref={cardsRef}
        initial={{ opacity: 0 }}
        animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16"
      >
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-bg  rounded-lg p-6 sm:p-7 md:p-8 lg:p-10 border border-textcolor border-dashed hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-center font-khand font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Founded in Oman, Leading Network LLC simplifies global supply
              chains across seven key sectors: construction materials,
              foodstuff, building materials, contracting, import & export,
              electronics & IT, and chemicals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-bg  rounded-lg p-6 sm:p-7 md:p-8 lg:p-10 border border-textcolor border-dashed hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-center font-khand font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Our journey began with a clear goal — to deliver quality products
              and services that meet international standards while fostering
              sustainable partnerships between manufacturers and end-users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-bg  rounded-lg p-6 sm:p-7 md:p-8 lg:p-10 border border-textcolor border-dashed hover:shadow-xl transition-shadow duration-300 sm:col-span-1 md:col-span-2 lg:col-span-1"
          >
            <p className="text-center font-khand font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              We operate with integrity and a client-first mindset, ensuring
              each deal reflects trust, transparency, and efficiency — the core
              values that define Leading Network LLC as a reliable name in the
              Oman trading landscape.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        ref={videoRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8 }}
        className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 "
      >
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden rounded-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://www.pexels.com/download/video/34606865/"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
