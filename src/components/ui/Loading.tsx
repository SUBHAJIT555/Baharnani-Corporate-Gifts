import { motion } from "framer-motion";
import { cn } from "../../lib/utilts";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
  message?: string;
  className?: string;
}

const Loading = ({ 
  size = "md", 
  fullScreen = false, 
  message,
  className 
}: LoadingProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const spinnerSizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-14 h-14 border-4",
  };

  const LoaderContent = () => (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      {/* Animated Spinner */}
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className={cn(
            "border-t-textcolor border-r-transparent border-b-transparent border-l-transparent rounded-full",
            spinnerSizeClasses[size]
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Inner counter-rotating ring */}
        <motion.div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-b-textcolor border-r-transparent border-t-transparent border-l-transparent rounded-full",
            size === "sm" ? "w-4 h-4 border-2" : size === "md" ? "w-6 h-6 border-2" : "w-8 h-8 border-3"
          )}
          animate={{ rotate: -360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center dot */}
        <motion.div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-textcolor rounded-full",
            size === "sm" ? "w-1.5 h-1.5" : size === "md" ? "w-2 h-2" : "w-3 h-3"
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Optional message */}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base font-switzer text-textcolor/70 text-center"
        >
          {message}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
        <LoaderContent />
      </div>
    );
  }

  return <LoaderContent />;
};

// Alternative Loading Component with Pulse Animation
export const LoadingPulse = ({ 
  size = "md", 
  fullScreen = false, 
  message,
  className 
}: LoadingProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const LoaderContent = () => (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      {/* Pulsing circles */}
      <div className="relative">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-textcolor",
              sizeClasses[size]
            )}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0.8, 0, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base font-switzer text-textcolor/70 text-center"
        >
          {message}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
        <LoaderContent />
      </div>
    );
  }

  return <LoaderContent />;
};

// Skeleton Loading Component
export const LoadingSkeleton = ({ 
  className,
  count = 1 
}: { 
  className?: string; 
  count?: number;
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            "bg-gray-200 rounded-lg animate-pulse",
            className
          )}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </>
  );
};

export default Loading;

