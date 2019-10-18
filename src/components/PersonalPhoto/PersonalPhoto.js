import React from 'react';
import Photo from '../Photo';
import { M, F } from '../../const';
import styles from './PersonalPhoto.module.css';

const PersonalPhoto = ({ image, mode, onPhotoUpload }) => (
  <div className={styles.photoWrap}>
    <Photo image={image} size="l" />
    {mode !== M.read ? (
      <div className={styles.photoUpdateBlock}>
        <input
          type="file"
          name={F.file}
          id={F.file}
          onChange={onPhotoUpload}
          className={styles.photoUpdateInput}
        />
        <label className={styles.photoUpdateLabel} htmlFor={F.file}>
          Загрузить картинку
        </label>
      </div>
    ) : null}
  </div>
);

export default PersonalPhoto;
