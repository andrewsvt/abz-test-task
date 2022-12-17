import React, { forwardRef } from 'react';
import { StyledTextField } from '../FormStyledComponents';

import styles from './TextField.module.scss';
interface ITextFieldProps {
  label: string;
  type: string;
  error: boolean;
  helperText?: string | undefined;
  ref?: any;
}

const TextField: React.FC<ITextFieldProps> = forwardRef((props, ref) => {
  return (
    <div className={styles.container}>
      <StyledTextField
        required
        variant="outlined"
        color="secondary"
        fullWidth
        inputRef={ref}
        {...props}
      />
    </div>
  );
});

export default TextField;
