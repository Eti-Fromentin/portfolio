import React from "react";
import styles from "./navbar.module.css";

function Navbar({ lang, scroll, chosenLangObj, references, inView }) {
  return (
    <nav className={styles.navbar}>
      <div
        className={
          inView.inViewIntro && !inView.inViewWorks
            ? styles.navbarTextActive
            : styles.navbarText
        }
        onClick={() => {
          scroll(references.introRef);
        }}
      >
        {chosenLangObj.home}
      </div>
      <div
        className={
          inView.inViewWorks && !inView.inViewResume
            ? styles.navbarTextActive
            : styles.navbarText
        }
        onClick={() => {
          scroll(references.worksRef);
        }}
      >
        {chosenLangObj.works}
      </div>
      <div
        className={
          inView.inViewResume ? styles.navbarTextActive : styles.navbarText
        }
        onClick={() => {
          scroll(references.resumeRef);
        }}
      >
        {chosenLangObj.resume}
      </div>
      <div
        className={
          inView.inViewContact && !inView.inViewResume
            ? styles.navbarTextActive
            : styles.navbarText
        }
        onClick={() => {
          scroll(references.contactRef);
        }}
      >
        {chosenLangObj.contact}
      </div>
    </nav>
  );
}

export default Navbar;
