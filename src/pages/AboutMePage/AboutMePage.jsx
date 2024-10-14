import React from "react";
import About from "../../components/About/About";

import styles from "./AboutMePage.module.css";
import Experience from "../../components/Experience/Experience";

export const AboutMePage = () => {
  return (
    <section id="aboutmepage">
      <About />
      <Experience />
    </section>
  );
};

export default AboutMePage;
