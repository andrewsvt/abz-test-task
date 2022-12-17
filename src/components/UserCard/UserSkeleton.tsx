import React from 'react';

import styles from './UserCard.module.scss';

const UserSkeleton: React.FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__img}></div>
      <div className={styles.skeleton__heading}></div>
      <div className={styles.skeleton__text}></div>
    </div>
  );
};

export default UserSkeleton;
