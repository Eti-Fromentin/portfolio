import React from "react";

import styles from "./intro.module.css";

import avatar from '../assets/avatar.svg';

function Intro() {
  return (
    <div className={styles.intro}>
        <h1 className={styles.name}>
            Etienne Fomentin
        </h1>
        <img src={avatar} alt='avatar' className={styles.avatar} />
   
        <h2 className={styles.title}>Web Developper</h2>
      <p className={styles.introText}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
       </div>
  );
}

export default Intro;
