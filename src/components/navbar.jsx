import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      
        <div className={styles.navbarText}>Intro</div>
        <div className={styles.navbarText}>Projects</div>
        <div className={styles.navbarText}>Resume</div>
        <div className={styles.navbarText}> Contact</div>
      
    </nav>
  );
}

export default Navbar;
