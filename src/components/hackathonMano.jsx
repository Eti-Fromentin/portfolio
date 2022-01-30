import React from "react";
import Tilt from "react-parallax-tilt";

import logo from "../assets/manomanoLogo.jpg";

import styles from "./hackathonMano.module.css";

function HackathonMano({ lang, chosenLangObj }) {
  return (
    <Tilt className={styles.cardContainer} 
    perspective={1000}
    transitionSpeed={1500}
    scale={1.1}
    tiltReverse={true}>
      <div className={styles.cardTitle}>Mano Mano x Wild Code School</div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://youtu.be/VxAnNkD-HeU"
      >
      <img className={styles.logo} src={logo} alt="ManoMano Logo" />
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

export default HackathonMano;
