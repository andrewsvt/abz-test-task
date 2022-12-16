import React from 'react';
import { Button } from '../Button/Button';
import styles from './Header.module.scss';
import Logo from '../../assets/Logo.svg';

interface IHeaderProps {
  scrollToUsers: () => any;
  scrollToForm: () => any;
}

const Header: React.FC<IHeaderProps> = ({ scrollToUsers, scrollToForm }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={Logo} alt="Logo"></img>
        <div className={styles.header__buttons}>
          <Button onClick={scrollToUsers} text={'Users'} isDisabled={false} />
          <Button onClick={scrollToForm} text={'Sign up'} isDisabled={false} />
        </div>
      </div>
    </header>
  );
};

export default Header;
