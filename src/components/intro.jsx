import React from "react";

import styles from "./intro.module.css";

import avatar from "../assets/avatar.svg";

function Intro({ lang, chosenLangObj }) {
  return (
    <div className={styles.intro}>
      <h1 className={styles.nameJP}>{chosenLangObj.name}</h1>
      <img src={avatar} alt="avatar" className={styles.avatar} />

      <h2 className={styles.title}>{chosenLangObj.title}</h2>
      <p className={styles.introText}>{chosenLangObj.text}</p>
    </div>
  );
}

export default Intro;
