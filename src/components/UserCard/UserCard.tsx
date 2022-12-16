import React from 'react';

import UserImagePlaceholder from '../../assets/photo-cover.svg';
import { IUserObj } from '../../types/typings';

import styles from './UserCard.module.scss';

const UserCard: React.FC<IUserObj> = ({ name, email, position, phone, photo, id }) => {
  return (
    <div className={styles.usercard}>
      <img
        className={styles.usercard__img}
        src={photo}
        alt="Userimg"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = UserImagePlaceholder;
        }}></img>

      <p>{name}</p>
      <div>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
