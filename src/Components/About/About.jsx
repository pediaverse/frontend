import React from 'react';
import styles from './About.module.css';

const HybridLearning = () => {
  return (
    <div className={styles["hybrid-learning"]}>
      <div className={styles['center-box']}>
        <img src='./Assets/star.svg' alt='no-star'/>
        <p className={styles["text-wrapper"]}>
      Our mission is to unlock and cultivate the true potential of a child right from the start. We understand the importance of consistent guidance and support in helping children develop their skills and explore their passions.
      </p>
      </div>
    </div>
  );
};

export {HybridLearning};
