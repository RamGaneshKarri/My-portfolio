import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a full-stack developer with a strong foundation in computer
                science, building responsive applications using React, Node.js,
                Express, and MongoDB.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Cloud Learner</h3>
              <p>
                Experienced with AWS services (EC2, S3) and passionate about backend and frontend integration using the MERN stack.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Tech Enthusiast</h3>
              <p>
                I actively participate in hackathons and coding contests, always looking to build practical solutions like BookBridge and JaggeryDelight.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Achievements</h3>
              <p>
                🥇 1st place in Sparktank 2K24 by IIC <br />
                🥇 District-level winner, Polytech Fest 2022 (SBTET)<br />
                🥉 3rd place at Infovit (E-Cell) for BookBridge
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
  🔹 MongoDB Developer Toolkit – GeeksforGeeks <br />
  🔹 SQL (Basic), Java (Basic) – HackerRank <br />
  🔹 IBM – Introduction to Web Development <br />
  🔹 ServiceNow Certified System Administrator <br />
  🔹 Web Development – Bharat Intern
</p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
