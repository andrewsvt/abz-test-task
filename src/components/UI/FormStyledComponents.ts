import { Radio, TextField, styled } from '@mui/material';
import { withStyles } from '@mui/styles';

export const StyledTextField = withStyles({
  root: {
    '& label, & label.Mui-focused': {
      color: '#7E7E7E',
    },
    '& label.Mui-error': {
      color: '#CB3D40',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
        borderColor: '#D0CFCF',
      },
      '&.Mui-error fieldset, &.Mui-error:hover fieldset': {
        borderColor: '#CB3D40',
      },
    },
  },
})(TextField);

export const StyledRadio = withStyles({
  root: {},
})(Radio);

export const RadioIcon = styled('span')({
  width: 20,
  height: 20,
  border: '1px solid #D0CFCF',
  borderRadius: '50%',
});

export const RadioCheckedIcon = styled(RadioIcon)({
  borderColor: '#00BDD3',

  '&:before': {
    display: 'block',
    margin: '4px',
    borderRadius: '50%',
    backgroundColor: '#00BDD3',
    width: 10,
    height: 10,
    content: '""',
  },
});
