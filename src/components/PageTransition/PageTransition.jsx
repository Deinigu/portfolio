import React from "react";
import { motion } from "framer-motion";

const defaultVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const projectVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const defaultTransition = {
  type: "tween",
  duration: 0.5,
};

const projectTransition = {
  type: "spring",
  stiffness: 50,
  damping: 20,
};

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={defaultVariants}
      transition={defaultTransition}
    >
      {children}
    </motion.div>
  );
};

export const ProjectPageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={projectVariants}
      transition={projectTransition}
    >
      {children}
    </motion.div>
  );
};
