import React from "react";

import logo from "../assets/logo.png";

import styles from "./projecttwo.module.css";

function ProjectTwo({ lang, chosenLangObj }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>Lazy Nights</div>
      {/* <a
        target="_blank"
        rel="noreferrer"
        href="https://adecisy.github.io/Piano-Piano/"
      > */}
      <img className={styles.logo} src={logo} alt="Lazy Nights Logo" />
      {/* </a> */}
      <p className={styles.description}>
      {chosenLangObj.description}
        <br />
      </p>
      <p className={styles.specs}>
      {chosenLangObj.specs}
        <br />
        Not yet deployed.
      </p>
    </div>
  );
}

export default ProjectTwo;
