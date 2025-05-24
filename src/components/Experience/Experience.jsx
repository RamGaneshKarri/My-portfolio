import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
  <li className={styles.historyItem}>
    <div className={styles.historyItemDetails}>
      {history.map((historyItem, id) => (
      <div key={id} className={styles.historyCategory}>
      <h3>{`${historyItem.icon} ${historyItem.role}`}</h3>
      <div className={styles.techList}>
        {historyItem.experiences.map((experience, index) => (
          <span key={index} className={styles.techItem}>
           {experience}
          </span>
        ))}
      </div>
    </div>
    
      ))}
    </div>
  </li>
</ul>

      </div>
    </section>
  );
};
