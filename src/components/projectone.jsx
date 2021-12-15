import React from "react";
import Tilt from "react-parallax-tilt";

import WildAdvisorLogo from "../assets/Wild-advisor-logo.png";
import styles from "./projectone.module.css";

function ProjectOne({ lang, chosenLangObj }) {
  return (
    <Tilt
      className={styles.cardContainer}
      perspective={1000}
      transitionSpeed={1500}
      scale={1.1}
      tiltReverse={true}
    >
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
    </Tilt>
  );
}

export default ProjectOne;
