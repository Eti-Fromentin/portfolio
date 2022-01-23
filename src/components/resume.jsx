import React from "react";

import styles from "./resume.module.css";

import cv from "../assets/cv_fromentin_etienne.pdf";

function Resume({ lang, chosenLangObj }) {
  return (
    <div className={styles.resume}>
      <p className={styles.resumeText}>
        {chosenLangObj.one}<br />
        {chosenLangObj.two}<br />
        {chosenLangObj.three} <br />
        {chosenLangObj.four} <br />
        {chosenLangObj.five} <br />
        {chosenLangObj.six}
      </p>
      <p>
      {chosenLangObj.seven}<a href={cv} target="blank" rel="noreferrer noopener">
      {chosenLangObj.download}
        </a>
      </p>
    </div>
  );
}

export default Resume;
