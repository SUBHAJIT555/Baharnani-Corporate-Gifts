import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router";
import CustomButton from "./ui/CustomButton";

export interface CTAButton {
  text: string;
  className?: string;
  onClick?: () => void;
  link?: string;
}

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  buttons?: CTAButton[];
}

const CallToAction = ({
  title = "Ready to Elevate Your Corporate Gifting?",
  subtitle = "Partner with Baharnani Advertising, Dubai's premier corporate gift supplier. From premium gift sets to custom branding solutions, we help you make lasting impressions that strengthen business relationships.",
  backgroundImageUrl = "https://images.pexels.com/photos/17485710/pexels-photo-17485710.png",
  buttons = [
    {
      text: "Contact Us",
      className:
        "h-[50px] w-full sm:w-auto px-8 bg-textcolor! text-white! font-tanker!",
    },
    {
      text: "Explore Products",
      className:
        "h-[50px] w-full sm:w-auto px-8 bg-transparent! border! border-textcolor! text-textcolor! font-tanker!",
    },
  ],
}: CallToActionProps) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 overflow-x-hidden">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto">
        <div
          ref={containerRef}
          className="relative border border-textcolor rounded-2xl sm:rounded-3xl overflow-hidden bg-white"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content Container */}
          <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-tanker text-bg leading-tight mb-4 sm:mb-6"
                style={{
                  textShadow:
                    "2px 2px 0px rgba(000, 000, 000, 0.8), 4px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                {title}
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl font-khand font-bold text-bg leading-relaxed mb-8 sm:mb-10 md:mb-12"
                style={{
                  textShadow:
                    "2px 2px 0px rgba(000, 000, 000, 0.8), 4px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                {subtitle}
              </motion.p>

              {/* CTA Buttons */}
              {buttons.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                >
                  {buttons.map((button, index) => (
                    <CustomButton
                      key={index}
                      text={button.text}
                      className={button.className}
                      onClick={
                        button.link
                          ? () => navigate(button.link!)
                          : button.onClick
                      }
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
