import { motion } from "framer-motion";
import type { Skill } from "../consts";
import { skills } from "../consts";
import { section, type div } from "framer-motion/client";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
    rotateX: -15,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export default function SkillsIsland() {
  const sortedSkills = [...skills].sort(
    (a, b) => b.skills.length - a.skills.length
  );

  return (
    <div className="flex flex-col gap-16 px-4 max-w-8xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
        {sortedSkills.map((section) => (
          <div key={section.category}>
            <h3 className="text-2xl font-bold text-center mb-6 text-ctp-text">
              {section.category}
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {section.skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={item}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col items-center p-4 bg-ctp-surface1 rounded-xl shadow-md 
                   cursor-pointer transition-colors duration-300 hover:bg-ctp-surface"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="relative w-16 h-16 mb-3"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: {
                        duration: 0.1,
                      },
                    }}
                  >
                    <motion.img
                      src={skill.imageSrc}
                      alt={skill.title}
                      className="w-full h-full object-contain"
                      initial={{ filter: "brightness(0.9)" }}
                      whileHover={{ filter: "brightness(1.1)" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.span
                    className="text-sm font-semibold text-ctp-text text-center"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.title}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
