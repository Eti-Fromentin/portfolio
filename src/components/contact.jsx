import React from "react";

import styles from "./contact.module.css";

import gmailLogo from "../assets/gmail-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import upArrow from "../assets/upArrow.png";

function Contact(props) {
  return (
    <div className={styles.contact}>
      <p>
        You can send me a email:
        <br />
        <a href="mailto:fromentin.etienne@gmail.com">
          <img className={styles.logo} src={gmailLogo} alt="Gmail logo" />
        </a>
      </p>
      <p>
        You can find me on LinkedIn:
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
        You can visit my GitHub profile:
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
          props.scroll(props.reference);
        }}>
        <img className={styles.arrow} src={upArrow} alt="Up Arrow" />
      </button>
    </div>
  );
}

export default Contact;
