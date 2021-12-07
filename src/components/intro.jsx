import React from "react";

import styles from "./intro.module.css";

import avatar from '../assets/avatar.svg';

function Intro({lang}) {
  return (
    <div className={styles.intro}>
        <h1 className={styles.nameJP}>
          {lang === 'japanese' ? 'エチエンヌ フロマンタン' : 'Etienne Fromentin'}  
        </h1>
        <img src={avatar} alt='avatar' className={styles.avatar} />
   
        <h2 className={styles.title}>Web Developper</h2>
      <p className={styles.introText}>
        After 15 years working for the Japanese gastronomy, I changed my life by learning to code with Javascript, ReactJs, NodeJs and more to come in the future. 
      </p>
       </div>
  );
}

export default Intro;
