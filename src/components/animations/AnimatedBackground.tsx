import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  dotCount?: number;
  dotSize?: number;
  dotColor?: string;
  backgroundColor?: string;
  animationDuration?: number;
  animationScale?: number;
  opacity?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  dotCount = 50,
  dotSize = 6,
  dotColor = "rgba(235, 68, 75, 0.5)", // #eb444b with opacity
  backgroundColor = "bg-gradient-to-b from-red-50 to-white",
  animationDuration = 4,
  animationScale = 1.5,
  opacity = 0.7,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [dots, setDots] = useState<any[]>([]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate random dots with positions
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const newDots = [];
      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100, // percentage position
          y: Math.random() * 100, // percentage position
          delay: Math.random() * 2, // random delay for animation
          size: Math.random() * 0.5 + 0.5, // size multiplier between 0.5 and 1
          color:
            i % 5 === 0
              ? "rgba(235, 68, 75, 0.7)" // #eb444b
              : i % 4 === 0
                ? "rgba(223, 102, 109, 0.7)" // #df666d
                : i % 3 === 0
                  ? "rgba(235, 68, 75, 0.6)" // #eb444b with less opacity
                  : i % 2 === 0
                    ? "rgba(223, 102, 109, 0.6)" // #df666d with less opacity
                    : "rgba(235, 68, 75, 0.5)", // #eb444b with even less opacity
          duration: animationDuration + (Math.random() * 2 - 1), // variation in duration
          floatX: Math.random() * 30 - 15, // random float movement in X direction
          floatY: Math.random() * 30 - 15, // random float movement in Y direction
        });
      }
      setDots(newDots);
    }
  }, [dimensions, dotCount, animationDuration]);

  return (
    <div
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full overflow-hidden ${backgroundColor}`}
      style={{ zIndex: -1 }}
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dotSize * dot.size,
            height: dotSize * dot.size,
            backgroundColor: dot.color || dotColor,
            opacity: opacity * dot.size,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [1, animationScale, 1],
            opacity: [
              opacity * dot.size,
              opacity * dot.size * 0.6,
              opacity * dot.size,
            ],
            x: [0, dot.floatX, 0],
            y: [0, dot.floatY, 0],
            boxShadow: [
              "0 0 0 rgba(235, 68, 75, 0)",
              "0 0 10px rgba(235, 68, 75, 0.3)",
              "0 0 0 rgba(235, 68, 75, 0)",
            ],
          }}
          transition={{
            duration: dot.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}

      {/* Add some larger, slower moving background elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`bg-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-red-300/10 to-pink-300/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 100 + Math.random() * 200,
            height: 100 + Math.random() * 200,
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
