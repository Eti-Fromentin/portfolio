import React from "react";

import styles from "./contact.module.css";

import gmailLogo from "../assets/gmail-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import upArrow from "../assets/upArrow.png";

function Contact({ lang, scroll, reference, chosenLangObj}) {
  return (
    <div className={styles.contact}>
      <p>
        {chosenLangObj.mail}
        <br />
        <a href="mailto:fromentin.etienne@gmail.com">
          <img className={styles.logo} src={gmailLogo} alt="Gmail logo" />
        </a>
      </p>
      <p>
      {chosenLangObj.linkedin}
        <br />
        <a
          href="https://www.linkedin.com/in/eti-fromentin/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.logo2}
            src={linkedinLogo}
            alt="LinkedIn logo"
          />
        </a>
      </p>
      <p>
      {chosenLangObj.github}
        <br />
        <a
          href="https://github.com/Eti-Fromentin"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.logo2} src={githubLogo} alt="GitHub logo" />
        </a>
      </p>

      <button className={styles.arrowBtn} onClick={() => {
          scroll(reference);
        }}>
        <img className={styles.arrow} src={upArrow} alt="Up Arrow" />
      </button>
    </div>
  );
}

export default Contact;
