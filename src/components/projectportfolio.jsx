import React from "react";
import Tilt from "react-parallax-tilt";

import Logo from "../assets/logoPortfolio.png";

import styles from "./projectportfolio.module.css";

function ProjectPortfolio({ lang, chosenLangObj }) {
  return (
    <Tilt className={styles.cardContainer} 
    perspective={1000}
    transitionSpeed={1500}
    scale={1.1}
    tiltReverse={true}>
      <div className={styles.cardTitle}>Portfolio</div>
      <img className={styles.logo} src={Logo} alt="Portfolio Logo" />
      <p className={styles.description}>{chosenLangObj.description}</p>
      <p className={styles.specs}>
        {chosenLangObj.specs}
        <br />
        {chosenLangObj.specs2}
      </p>
    </Tilt>
  );
}

export default ProjectPortfolio;
