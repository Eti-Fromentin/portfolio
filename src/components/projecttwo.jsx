import React from "react";

import logo from "../assets/logo.png";

import styles from "./projecttwo.module.css";

function ProjectTwo() {
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
        An app that give the user a choice of some very caloric recipe, junk
        food, drinks and junk movies for a "Lazy Night"
        <br />
      </p>
      <p className={styles.specs}>
        Made with ReactJs, NodeJs, MySql and external librairies, use of different api
        Favorites and basket feature, barcode scanner.
        <br />
        Not yet deployed.
      </p>
    </div>
  );
}

export default ProjectTwo;
