import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";
import CustomButton from "./CustomButton";

interface CommonHeroProps {
  title: string;
  titlesuffix: string;
  subtitle: string;
  imageUrl?: string;
  buttonLink?: string;
  buttonText?: string;
}

const CommonHero: React.FC<CommonHeroProps> = ({
  title,
  titlesuffix,
  subtitle,
  imageUrl = "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
  buttonLink,
  buttonText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  console.log("IN ABOUT HERO");

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden border-b-2 border-text"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-10"
        style={{ y }}
      >
        <img
          src={imageUrl}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-7xl space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-tanker  text-white leading-none"
              style={{
                textShadow: `
                2px 2px 4px #000000AA,
                0 4px 18px #1a232c99,
                2px 4px 0px #33333399,
                0px 1px 0px #fff,
                0px 2px 0px #fff
              `,
              }}
            >
              {title} <br />
              <span className="font-tanker font-light tracking-wide  text-2xl md:text-3xl lg:text-4xl">
                {titlesuffix}
              </span>
            </h1>
            <div className="w-24 h-1 bg-highlighttext mx-auto rounded-md" />
          </motion.div>
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-white font-khand font-bold tracking-wide max-w-4xl mx-auto "
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mt-2"
          >
            <Link to={buttonLink || "#our-services"}>
              <CustomButton
                text={buttonText || "Explore our products"}
                className="h-[50px] w-fit bg-textcolor! border! border-white! text-white! font-tanker! tracking-wide"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CommonHero;
