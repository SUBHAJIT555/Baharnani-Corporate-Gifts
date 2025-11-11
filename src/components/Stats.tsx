import { motion, useMotionValue, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Component for animated counting numbers
const AnimatedNumber = ({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration, count]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const stats = containerRef.current.children;

      gsap.fromTo(
        stats,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stats = [
    {
      number: "10+ Years",
      description: "of UAE Market Experience",
    },
    {
      number: "9+ Key Sectors",
      description: "Covered",
    },
    {
      number: "100% Commitment",
      description: "to Quality & Compliance",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full py-8 sm:py-10 md:py-16 px-4 sm:px-4 md:px-0">
      <div
        ref={containerRef}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-2 items-center justify-center px-6 py-5 sm:px-6 sm:py-6 md:px-12 md:py-8 border border-textcolor bg-white! w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] sm:flex-1 max-w-sm sm:max-w-none"
            whileHover={{
              borderRadius: "15px",
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-textcolor font-tanker mb-1 sm:mb-2 text-center leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              {stat.number === "10+ Years" ? (
                <>
                  <AnimatedNumber value={10} suffix="+" duration={2} />
                  <br />
                  YEARS
                </>
              ) : stat.number === "8+ Key Sectors" ? (
                <>
                  <AnimatedNumber value={8} suffix="+" duration={2} /> Key Sectors
                </>
              ) : stat.number === "100% Commitment" ? (
                <>
                  <AnimatedNumber value={100} suffix="%" duration={2} /> Commitment
                </>
              ) : (
                stat.number
              )}
            </motion.div>
            <motion.div
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-textcolor font-khand text-center font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
            >
              {stat.description}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
