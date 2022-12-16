import React, { MutableRefObject, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './Form.module.scss';
import { CircularProgress, createTheme, Theme, ThemeProvider } from '@mui/material';
import TextField from '../UI/TextField/TextField';
import RadioInput from '../UI/RadioInput/RadioInput';
import FileInput from '../UI/FileInput/FileInput';
import { Button } from '../Button/Button';
import successImage from '../../assets/success-image.svg';

import { userSchema } from '../../utils/userSchema';

import { getToken, getPositions } from '../../utils/api';

import { FormValues, IPositionsResponse } from '../../types/typings';

interface IFormProps {
  formScrollRef: MutableRefObject<HTMLDivElement | null>;
}

const innerTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#00BDD3',
    },
    secondary: {
      main: '#D0CFCF',
    },
    error: {
      main: '#CB3D40',
    },
  },
});

const Form: React.FC<IFormProps> = ({ formScrollRef }) => {
  const {
    register,
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position_id: '1',
      photo: [],
    },
    mode: 'onBlur',
    resolver: yupResolver(userSchema),
  });

  const [positions, setPositions] = useState<IPositionsResponse>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    getPositions().then((json) => setPositions(json));
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const token = await getToken();

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('position_id', data.position_id);
      formData.append('photo', data.photo[0]);

      console.log(data);

      const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        headers: { Token: token.token },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            setIsSuccess(true);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(errors);

  return (
    <ThemeProvider theme={innerTheme}>
      <div ref={formScrollRef} className={styles.formContainer}>
        {isSuccess ? (
          <>
            <h1 className={styles.formContainer__h1}>User successfully registered</h1>
            <img src={successImage} alt="" />
          </>
        ) : (
          <>
            <h1 className={styles.formContainer__h1}>Working with POST request</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.form__textFields}>
                <TextField
                  label="Your name"
                  type="text"
                  error={Boolean(errors.name?.message)}
                  helperText={errors.name?.message}
                  {...register('name')}
                />
                <TextField
                  label="Email"
                  type="email"
                  error={Boolean(errors.email?.message)}
                  helperText={errors.email?.message}
                  {...register('email')}
                />
                <TextField
                  label="Phone"
                  type="text"
                  error={Boolean(errors.phone?.message)}
                  helperText={errors.phone ? errors.phone?.message : '+38 (XXX) XXX - XX - XX'}
                  {...register('phone')}
                />
              </div>
              <div className={styles.form__position}>
                <p>Select your position</p>
                <div className={styles.form__radio}>
                  {positions ? (
                    <RadioInput positions={positions} control={control} />
                  ) : (
                    <CircularProgress />
                  )}
                </div>
              </div>
              <FileInput error={errors.photo} control={control} trigger={trigger} />
              <Button
                type="submit"
                text="Sign up"
                isDisabled={Boolean(errors.email || errors.name || errors.phone || errors.photo)}
              />
            </form>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Form;
