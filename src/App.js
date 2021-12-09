/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
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

import languageObject from "./components/langObject";

function App() {
  const [language, setLanguage] = useState("english");
  const [chosenLangObj, setChosenLangObj] = useState(languageObject.english);
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

  useEffect(() => {
    if (language === "french") {
      setChosenLangObj(languageObject.french);
    } else if (language === 'japanese') {
      setChosenLangObj(languageObject.japanese);
    } else {setChosenLangObj(languageObject.english)}
  }, [language]);

  return (
    <div className={styles.App}>
      <Background />
      <Navbar
        lang={language}
        scroll={scrollToRef}
        chosenLangObj={chosenLangObj.navbar}
        references={{ introRef, worksRef, resumeRef, contactRef }}
        inView={{ inViewIntro, inViewWorks, inViewResume, inViewContact }}
      />
      <LanguageButton setLanguage={setLanguage} />
      <main className={styles.main} ref={introRef}>
        <section ref={refIntro}>
          <Intro lang={language} chosenLangObj={chosenLangObj.intro}/>
        </section>
        <section className={styles.work}>
          <h2 className={styles.worktitle} ref={worksRef}>
            {chosenLangObj.app.works}
          </h2>
          <div className={styles.projects} ref={refWorks}>
            <div data-aos="flip-right" data-aos-once="false">
              <ProjectOne lang={language} chosenLangObj={chosenLangObj.projectOne}/>
            </div>
            <div data-aos="flip-left" data-aos-once="false">
              <ProjectTwo lang={language} chosenLangObj={chosenLangObj.projectTwo}/>
            </div>
            <div data-aos="flip-right" data-aos-once="false">
              <ProjectThree lang={language} chosenLangObj={chosenLangObj.projectThree}/>
            </div>
          </div>
        </section>
        <section className={styles.resume} ref={resumeRef}>
          <h2 className={styles.resumeTitle} ref={refResume}>
          {chosenLangObj.app.identity} 
          </h2>
          <Resume lang={language} chosenLangObj={chosenLangObj.resume}/>
        </section>
        <section className={styles.contact} ref={contactRef}>
          <h2 className={styles.resumeTitle} ref={refContact}>
          {chosenLangObj.app.contact}
          </h2>
          <Contact lang={language} scroll={scrollToRef} reference={introRef} chosenLangObj={chosenLangObj.contact}/>
        </section>
      </main>
    </div>
  );
}

export default App;
