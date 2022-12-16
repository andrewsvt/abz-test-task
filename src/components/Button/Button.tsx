import React from 'react';
import styles from './Button.module.scss';

interface ButtonInterface {
  text: string;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: React.FC<ButtonInterface> = ({ type, text, isDisabled, onClick }) => {
  return (
    <button onClick={onClick} type={type} disabled={isDisabled} className={styles.button}>
      {text}
    </button>
  );
};

export const WideButton: React.FC<ButtonInterface> = ({ type, text, isDisabled, onClick }) => {
  return (
    <button onClick={onClick} type={type} disabled={isDisabled} className={styles.button__wide}>
      {text}
    </button>
  );
};
