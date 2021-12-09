import React from "react";

import WildAdvisorLogo from "../assets/Wild-advisor-logo.png";
import styles from "./projectone.module.css";

function ProjectOne({ lang, chosenLangObj }) {
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
        {chosenLangObj.description1}
        <br />
        {chosenLangObj.description2}
        <br />
      </p>
      <p className={styles.specs}>
        {chosenLangObj.specs}
        <br />
        {chosenLangObj.features}
      </p>
    </div>
  );
}

export default ProjectOne;
