import React from "react";
import Tilt from "react-parallax-tilt";

import logo from "../assets/logo.png";

import styles from "./projecttwo.module.css";

function ProjectTwo({ lang, chosenLangObj }) {
  return (
    <Tilt className={styles.cardContainer} 
    perspective={1000}
    transitionSpeed={1500}
    scale={1.1}
    tiltReverse={true}>
      <div className={styles.cardTitle}>Lazy Nights</div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://lazy-nights.vercel.app/"
      >
      <img className={styles.logo} src={logo} alt="Lazy Nights Logo" />
      </a>
      <p className={styles.description}>
      {chosenLangObj.description}
        <br />
      </p>
      <p className={styles.specs}>
      {chosenLangObj.specs}
        <br />
      </p>
    </Tilt>
  );
}

export default ProjectTwo;
