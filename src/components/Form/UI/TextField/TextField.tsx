import React, { forwardRef } from 'react';
import { StyledTextField } from '../FormStyledComponents';

interface ITextFieldProps {
  label: string;
  type: string;
  error: boolean;
  helperText?: string | undefined;
  ref?: any;
}

const TextField: React.FC<ITextFieldProps> = forwardRef((props, ref) => {
  return (
    <StyledTextField variant="outlined" color="secondary" fullWidth inputRef={ref} {...props} />
  );
});

export default TextField;
