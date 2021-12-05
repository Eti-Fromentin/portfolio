import React from "react";

import WildAdvisorLogo from "../assets/Wild-advisor-logo.png";
import styles from "./projectone.module.css";

function ProjectOne() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>Wild Advisor</div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://elisacruzcas.github.io/Wild-advisor/index.html"
      >
        <img
          className={styles.logo}
          src={WildAdvisorLogo}
          alt="Wild Advisor Logo"
        />
      </a>
      <p className={styles.description}>
        First project of my formation.
        <br />
        An app that present a selection of restaurants and bar for students to
        get lunch or drinks.
        <br />
      </p>
      <p className={styles.specs}>
        Made with HTML, CSS and vanilla Javascript.
        <br />
        Features: Dynamic list of shops, Favorites using local storage, search
        engine.
      </p>
    </div>
  );
}

export default ProjectOne;
