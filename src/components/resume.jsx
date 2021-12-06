import React from "react";

import styles from "./resume.module.css";

import cv from "../assets/cv_fromentin.pdf";

function Resume() {
  return (
    <div className={styles.resume}>
      <p className={styles.resumeText}>
        Back in the 2002 I graduated in Japanese Studies, and began to work in a
        japanese restaurant in Paris. This job began my career, from server, to
        manager, to director, in some of the best japanese restaurant in Paris.{" "}
        <br />
        Ask me about sushi 🍣 !<br />
        A few years ago, I got tired of it and got in my head I had to change my
        life. <br />
        And what could be better than an old hobby of mine to do that? So I
        began to think seriously about programming, and even tried to make a few
        applications for mobile using Flutter. <br />
        And now, I am at the Wild Code School in Paris, learning all about
        Javascript, ReactJs, NodeJs, Express, MySql, and more to come; and I am
        very interested to get into React Native and back to Flutter.
        <br />
        This is just the beginning...
      </p>
      <p>
        If you want to see a good old resume on paper, feel free to download it
        <a href={cv} target="blank" rel="noreferrer noopener">
          HERE
        </a>
        .
      </p>
    </div>
  );
}

export default Resume;
