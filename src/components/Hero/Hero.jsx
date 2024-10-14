import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Diego López Reduello</h1>
        <p className={styles.description}>
          I am a Software Engineer skilled in AI, Python, and full-stack web
          development, with a background in building web applications and AI
          solutions. Passionate about problem-solving and innovation.
        </p>
        <a href="#footer">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className={styles.contactBtn}
          >
            Contact Me
          </motion.button>
        </a>
      </div>
      <img
        src={getImageUrl("hero/diegoProfile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
