import React from "react";

import logo from "../assets/logoPiano.png";

import styles from "./projectthree.module.css";

function ProjectThree({ lang, chosenLangObj }) {
  return (
    <div className={styles.cardContainer}>
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
    </div>
  );
}

export default ProjectThree;
