import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { TbTargetArrow } from "react-icons/tb";
// import { FaRegHandshake } from "react-icons/fa";
// import { CiGift } from "react-icons/ci";
// import { SlPlane } from "react-icons/sl";
// import { MdOutlineBusinessCenter } from "react-icons/md";
import companyIcon from "../assets/images/icons/icon.svg";

const aboutImage =
  "/assets/images/Home-page-image/About-image-home.webp";

const HomeAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // const missionRef = useRef<HTMLDivElement>(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-50px",
  });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
  // const isMissionInView = useInView(missionRef, {
  //   once: true,
  //   margin: "-100px",
  // });

  return (
    <section
      ref={containerRef}
      className="w-full pt-6 md:pt-8 lg:pt-8 xl:pt-12"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        {/* Heading Section */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tanker text-textcolor leading-tight">
            About <img src={companyIcon} alt="Baharnani Advertising L.L.C." className="inline-block align-middle w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white border border-textcolor rounded-lg p-1 sm:p-1.5 md:p-2" /> Baharnani Advertising L.L.C.
          </h2>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center lg:items-start">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 xl:w-2/5 shrink-0 "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isImageInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group "
            >
              <div className="absolute -inset-2 sm:-inset-4  duration-300" />
              <div className="relative overflow-hidden rounded-lg">
                <motion.img
                  src={aboutImage}
                  alt="About Leading Network LLC"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-textcolor/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 xl:w-3/5 flex flex-col gap-4 sm:gap-5 md:gap-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-switzer text-textcolor leading-relaxed sm:leading-relaxed md:leading-7"
            >
              Searching for the best gift sets in Dubai for surprising a special person or treating your valuable clients? As one of the best corporate gifts company Dubai, we have been able to design a wide range of high-quality gift sets and perfume gift sets based on birthdays and all preferences. From choosing the perfect gift for her, an exquisite corporate gift set to something fashionably within your budget, you get all those and much more in the collection of gift sets UAE.
            </motion.p>


          </motion.div>
        </div>

        {/* Mission Section - Full Width */}
        {/* <motion.div
          ref={missionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7, delay: 0.2 }}
          className=" w-full"
        >
          <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 ">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-tanker text-textcolor  max-w-5xl group">
              <span className="font-khand font-bold text-textcolor text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl block mb-4 sm:mb-6">
                Our
                <TbTargetArrow className="inline-block align-middle" /> mission
                is simple
              </span>
              to deliver{" "}
              <CiGift className="inline-block align-middle rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              quality-driven products that meet{" "}
              <SlPlane className="inline-block align-middle group-hover:rotate-45 transition-transform duration-300" />{" "}
              international standards while maintaining{" "}
              <FaRegHandshake className="inline-block align-middle -rotate-45 group-hover:rotate-0 transition-transform duration-300" />{" "}
              strong customer relationships through{" "}
              <MdOutlineBusinessCenter className="inline-block align-middle rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              transparent business practices.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HomeAbout;
