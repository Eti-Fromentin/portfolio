/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

import Background from "./components/background";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import ProjectOne from "./components/projectone";
import ProjectTwo from "./components/projecttwo";
import ProjectThree from "./components/projectthree";
import ProjectPortfolio from "./components/projectportfolio";
import HackathonMano from "./components/hackathonMano";
import LanguageButton from "./components/languageButton";
import Resume from "./components/resume";
import Contact from "./components/contact";
import languageObject from "./components/langObject";

import styles from "./app.module.css";

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
        <section data-aos="zoom-in" data-aos-delay="300" data-aos-once="false" data-aos-easing="ease-in-out-cubic" ref={refIntro}>
          <Intro lang={language} chosenLangObj={chosenLangObj.intro}/>
        </section>
        <section className={styles.work}>
          <h2 className={styles.worktitle} ref={worksRef}>
            {chosenLangObj.app.works}
          </h2>
          <div className={styles.projects} ref={refWorks}>
          <div className={styles.project}  data-aos="flip-right" data-aos-once="false">
              <HackathonMano lang={language} chosenLangObj={chosenLangObj.hackathonMano}/>
            </div>
            <div className={styles.project}  data-aos="flip-right" data-aos-once="false">
              <ProjectOne lang={language} chosenLangObj={chosenLangObj.projectOne}/>
            </div>
            <div className={styles.project}  data-aos="flip-left" data-aos-once="false">
              <ProjectTwo lang={language} chosenLangObj={chosenLangObj.projectTwo}/>
            </div>
            <div className={styles.project}  data-aos="flip-right" data-aos-once="false">
              <ProjectThree lang={language} chosenLangObj={chosenLangObj.projectThree}/>
            </div>
            <div className={styles.project}  data-aos="flip-left" data-aos-once="false">
              <ProjectPortfolio lang={language} chosenLangObj={chosenLangObj.projectPortfolio}/>
            </div> 
          </div>
        </section>
        <section className={styles.resume} data-aos="zoom-in" data-aos-delay="50" data-aos-easing="ease-in-out-quart" ref={resumeRef}>
          <h2 className={styles.resumeTitle} ref={refResume}>
          {chosenLangObj.app.identity} 
          </h2>
          <Resume lang={language} chosenLangObj={chosenLangObj.resume}/>
        </section>
        <section className={styles.contact} data-aos="fade-up" data-aos-delay="200" ref={contactRef}>
          <h2 className={styles.resumeTitle} ref={refContact}>
          {chosenLangObj.app.contact}
          </h2>
          <Contact lang={language} scroll={scrollToRef} reference={introRef} chosenLangObj={chosenLangObj.contact}/>
        </section>
        <p className={styles.avatarCopyright}>Avatar made by <a href="https://www.linkedin.com/in/sarah-accolas/" target="_blank"
        rel="noreferrer">Sarah Accolas</a></p>
      </main>
    </div>
  );
}

export default App;
