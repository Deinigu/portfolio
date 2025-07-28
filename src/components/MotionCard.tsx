import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionCard({
  children,
  className = "",
  delay = 0,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay,
        },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      whileHover={{
        scale: 1.03,
        rotateX: 0.5,
        rotateY: -0.5,
        transition: {
          duration: 0.3,
          ease: [0.33, 1, 0.68, 1],
        },
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
