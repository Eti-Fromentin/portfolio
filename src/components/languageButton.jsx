import React from "react";

import styles from "./languageButton.module.css";

function LanguageButton({setLanguage}) {



  return (
    <div className={styles.btnContainer}>
      <select name="languageBtn" className={styles.languageSelect} onChange={(e) => setLanguage(e.target.value)}>
        <option value="english">🇬🇧</option>
        <option value="french">🇫🇷</option>
        <option value="japanese">🇯🇵</option>
      </select>
    </div>
  );
}

export default LanguageButton;
