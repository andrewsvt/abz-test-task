import React, { forwardRef } from 'react';
import { StyledTextField } from '../FormStyledComponents';

import styles from './TextField.module.scss';
interface ITextFieldProps {
  label: string;
  type: string;
  error: boolean;
  helperText?: string | undefined;
}

const TextField: React.FC<ITextFieldProps> = forwardRef((props) => {
  return (
    <div className={styles.container}>
      <StyledTextField required variant="outlined" color="secondary" fullWidth {...props} />
    </div>
  );
});

export default TextField;
