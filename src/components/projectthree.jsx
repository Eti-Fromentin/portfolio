import React from "react";
import Tilt from "react-parallax-tilt";

import logo from "../assets/logoPiano.png";

import styles from "./projectthree.module.css";

function ProjectThree({ lang, chosenLangObj }) {
  return (
    <Tilt className={styles.cardContainer} 
    perspective={1000}
    transitionSpeed={1500}
    scale={1.1}
    tiltReverse={true}>
      <div className={styles.cardTitle}>Piano Piano</div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://adecisy.github.io/Piano-Piano/"
      >
        <img className={styles.logo} src={logo} alt="Lazy Nights Logo" />
      </a>
      <p className={styles.description}>
      {chosenLangObj.description1}
        <br />
        {chosenLangObj.description2}
      </p>
      <p className={styles.specs}>
      {chosenLangObj.specs1}
        <br />
        {chosenLangObj.specs2}
      </p>
    </Tilt>
  );
}

export default ProjectThree;
