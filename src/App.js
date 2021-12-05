import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./app.module.css";
import Background from "./components/background";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import ProjectOne from "./components/projectone";
import ProjectTwo from "./components/projecttwo";
import ProjectThree from "./components/projectthree";
import LanguageButton from "./components/languageButton";

function App() {
  const [language, setLanguage] = useState('english')

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.App}>
      <Background />
      <Navbar lang={language} />
      <LanguageButton setLanguage={setLanguage} />
      <main className={styles.main}>
        <Intro lang={language}/>
        <section className={styles.work}>
          <h2 className={styles.worktitle}>My work so far</h2>
          <div data-aos="flip-right" data-aos-once="false">
            <ProjectOne lang={language}/>
          </div>
          <div data-aos="flip-left" data-aos-once="false">
            <ProjectTwo lang={language}/>
          </div>
          <div data-aos="flip-right" data-aos-once="false">
            <ProjectThree lang={language}/>
          </div>
        </section>
        <section className={styles.resume}>
          <h2 className={styles.resumeTitle}>Who Am I ?</h2>
          <p></p>
        </section>
      </main>
    </div>
  );
}

export default App;
