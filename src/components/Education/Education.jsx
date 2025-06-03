import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationGrid}>
        <div className={styles.eduCard}>
          <h3> Vishnu Institute of Technology</h3>
          <p>B.Tech in Information Technology</p>
          <p>Aug 2023 – Jun 2026 | CGPA: <strong>9.36</strong></p>
          <p>Bhimavaram, Andhra Pradesh</p>
        </div>

        <div className={styles.eduCard}>
          <h3>Dr. B.R.A.G.M.R Polytechnic</h3>
          <p>Diploma in Computer Engineering</p>
          <p>Dec 2020 – Mar 2023 | Percentage: <strong>93.6%</strong></p>
          <p>Rajahmundry, Andhra Pradesh</p>
        </div>

        <div className={styles.eduCard}>
          <h3> Bhargavi Vidya Mandir</h3>
          <p>SSC Board</p>
          <p>Jun 2019 – Mar 2020 | Percentage: <strong>98.6%</strong></p>
          <p>Tallapalem, Andhra Pradesh</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
