import React from 'react';

import UserImagePlaceholder from '../../assets/photo-cover.svg';
import { IUserObj } from '../../types/typings';
import { StyledTooltip } from '../UI/Tooltip/Tooltip';

import styles from './UserCard.module.scss';

const UserCard: React.FC<IUserObj> = ({ name, email, position, phone, photo, id }) => {
  const tooltipHandler = (value: string, maxLength = 39) => {
    if (value.length > maxLength) {
      return (
        <StyledTooltip title={value}>
          <p>{value}</p>
        </StyledTooltip>
      );
    } else return <p>{value}</p>;
  };

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

      {tooltipHandler(name)}

      <div>
        <p>{position}</p>
        {tooltipHandler(email)}
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
