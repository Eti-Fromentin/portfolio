import React from "react";
import styles from "./navbar.module.css";

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <div
        className={styles.navbarText}
        onClick={() => {
          props.scroll(props.references.introRef);
        }}
      >
        Home
      </div>
      <div
        className={styles.navbarText}
        onClick={() => {
          props.scroll(props.references.worksRef); 
        }}
      >
        Works
      </div>
      <div
        className={styles.navbarText}
        onClick={() => {
          props.scroll(props.references.resumeRef);
        }}
      >
        Resume
      </div>
      <div className={styles.navbarText} onClick={() => {
          props.scroll(props.references.contactRef);
        }}> Contact</div>
    </nav>
  );
}

export default Navbar;
