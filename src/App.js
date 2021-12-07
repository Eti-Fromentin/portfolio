/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer'
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
import Resume from "./components/resume";
import Contact from "./components/contact";

function App() {
  const [language, setLanguage] = useState("english");
  const introRef = useRef(null);
  const worksRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const [refIntro, inViewIntro] = useInView({
    threshold: 0,
  });
  const [refWorks, inViewWorks] = useInView({
    threshold: 0,
  });
  const [refResume, inViewResume] = useInView({
    threshold: 0,
  });
  const [refContact, inViewContact] = useInView({
    threshold: 0,
  });


  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 90);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.App}>
      <Background />
      <Navbar
        lang={language}
        scroll={scrollToRef}
        references={{ introRef, worksRef, resumeRef, contactRef }}
        inView={{ inViewIntro, inViewWorks, inViewResume, inViewContact }}
      />
      <LanguageButton setLanguage={setLanguage} />
      <main className={styles.main} ref={introRef}>
        <section ref={refIntro}>
        <Intro lang={language} />
        </section>
        <section className={styles.work} >
          <h2 className={styles.worktitle} ref={worksRef}>My work so far</h2>
          <div className={styles.projects} ref={refWorks}>
            <div data-aos="flip-right" data-aos-once="false">
              <ProjectOne lang={language} />
            </div>
            <div data-aos="flip-left" data-aos-once="false">
              <ProjectTwo lang={language} />
            </div>
            <div data-aos="flip-right" data-aos-once="false">
              <ProjectThree lang={language} />
            </div>
          </div>
        </section>
        <section className={styles.resume} ref={resumeRef}>
          <h2 className={styles.resumeTitle} ref={refResume}>Who Am I ?</h2>
          <Resume lang={language} />
        </section>
        <section className={styles.contact} ref={contactRef}>
          <h2 className={styles.resumeTitle} ref={refContact}>Contact</h2>
          <Contact lang={language} scroll={scrollToRef} reference={introRef} />
        </section>
      </main>
    </div>
  );
}

export default App;
