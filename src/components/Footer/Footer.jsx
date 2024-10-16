import React from "react";

import { getImageUrl } from "../../utils";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">diegolopezreduello@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/dlreduello/">
            linkedin.com/in/dlreduello
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a href="https://github.com/Deinigu">github.com/Deinigu</a>
        </li>
      </ul>
    </footer>
  );
};
