import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface OverViewProps {
  content: string | React.ReactNode;
  className?: string;
  padding?: string;
  animationDelay?: number;
}

const OverView = ({
  content,
  className = "",
  padding = "p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24",
  animationDelay = 0,
}: OverViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`w-full ${padding} overflow-x-hidden ${className}`}
    >
      <h3 className="text-2xl font-switzer text-textcolor font-medium">
        {content}
      </h3>
    </motion.div>
  );
};

export default OverView;
