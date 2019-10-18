import React from 'react';
import styles from './Photo.module.css';

const Photo = ({ image, size }) => (
  <div className={`${styles.photo} ${styles[size]}`}>
    {image ? (
      <img src={image} className={styles.photoImg} alt="profilePhoto" />
    ) : (
      <span className={styles.photoBkg}>?</span>
    )}
  </div>
);

export default Photo;
