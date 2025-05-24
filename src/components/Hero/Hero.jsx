import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ram Ganesh</h1>
        <p className={styles.description}>
          I'm a passionate full-stack developer currently pursuing B.Tech in Information Technology. 
          I specialize in building responsive web applications using the MERN stack. 
        </p>
        <a href="mailto:ramganeshkarri7@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/image1.png")}
        alt="Ram Ganesh Profile"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
