import { motion } from "framer-motion";
import { certifications } from "../consts";

import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    rotateX: -10,
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
    },
  },
};

export default function CertificationList() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ctp-text mb-4">
            Certifications
          </h2>
          <p className="text-lg text-ctp-subtext1 max-w-2xl mx-auto">
            Some of the certifications I have earned to validate my skills and
            knowledge in various fields and technologies.
          </p>
        </div>
        <motion.ul
          className={
            "grid gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3"
          }
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.li
              key={cert.title}
              variants={item}
              whileHover={{
                y: -8,
                rotateX: 3,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="flex flex-col items-center text-center bg-ctp-surface0 rounded-xl p-4 shadow-md transition-colors duration-300"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus-visible:ring-2  rounded-full"
              >
                <motion.img
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.3 }}
                  src={cert.imageSrc}
                  alt={cert.title}
                  className="w-26 h-26 rounded-full shadow-md aspect-ratio object-cover"
                  loading="lazy"
                />
              </a>
              <p className="mt-4 text-sm font-medium text-ctp-text">
                {cert.title}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
