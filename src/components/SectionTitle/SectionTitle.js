import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ children, size }) => (
  <div className={styles.sectionTitleBlock}>
    <span className={`${styles.sectionTitle} ${styles[size]}`}>{children}</span>
  </div>
);

export default SectionTitle;
