import React from "react";

import Logo from "../assets/logoPortfolio.png";

import styles from "./projectportfolio.module.css";

function ProjectPortfolio({ lang, chosenLangObj }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>Portfolio</div>
      
        <img className={styles.logo} src={Logo} alt="Portfolio Logo" />
     
      <p className={styles.description}>
      {chosenLangObj.description}
        
        
      </p>
      <p className={styles.specs}>
      {chosenLangObj.specs}
        <br />
        {chosenLangObj.specs2}
      </p>
    </div>
  );
}

export default ProjectPortfolio;
