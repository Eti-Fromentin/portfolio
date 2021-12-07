import React from "react";

import logo from "../assets/logoPiano.png";

import styles from "./projectthree.module.css";

function ProjectThree() {
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
        The result of a 24 hours Hackathon.
        <br />
        An app to play the piano, with kids in mind.
      </p>
      <p className={styles.specs}>
        Made with ReactJs and external librairies.
        <br />
        Features: Piano, record and play.
      </p>
    </div>
  );
}

export default ProjectThree;
