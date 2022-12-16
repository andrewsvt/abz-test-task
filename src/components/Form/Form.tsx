import React, { MutableRefObject, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createTheme, Theme, ThemeProvider } from '@mui/material';
import TextField from './UI/TextField/TextField';
import { Button } from '../Button/Button';
import FileInput from './UI/FileInput/FileInput';

import { userSchema } from '../../utils/userSchema';

import styles from './Form.module.scss';
import RadioInput from './UI/RadioInput/RadioInput';
import { getToken } from '../../utils/api';

import { FormValues } from '../../types/typings';

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
  const [token, setToken] = useState<string>('');

  // useEffect(() => {
  //   getToken().then((json) => setToken(json.token));
  // }, []);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: 'Andrew',
      email: 'uchiha@mail.com',
      phone: '+380958224416',
      position_id: '1',
      image: [],
    },
    mode: 'onBlur',
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('image', data.image[0]);

    console.log('data', formData);
  };

  // const onSubmit = async (data: any) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('name', data.name);
  //     formData.append('email', data.email);
  //     formData.append('phone', data.phone);
  //     // formData.append('image', data.image[0]);

  //     console.log(formData);

  //     // const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
  //     //   method: 'POST',
  //     //   headers: { Token: token },
  //     //   body: formData,
  //     // })
  //     //   .then((res) => res.json())
  //     //   .then((data) => console.log(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  console.log(errors);

  return (
    <ThemeProvider theme={innerTheme}>
      <div ref={formScrollRef} className={styles.formContainer}>
        <h1>Working with POST request</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.form__textFields}>
            <TextField
              label="Your name"
              type="text"
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              // ref={register}
              {...register('name')}
            />
            <TextField
              label="Email"
              type="email"
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              // ref={register}
              {...register('email')}
            />
            <TextField
              label="Phone"
              type="text"
              error={Boolean(errors.phone?.message)}
              helperText={errors.phone ? errors.phone?.message : '+38 (XXX) XXX - XX -XX'}
              // ref={register}
              {...register('phone')}
            />
          </div>
          <div className={styles.form__position}>
            <p>Select your position</p>
            <div className={styles.form__radio}>
              <RadioInput control={control} />
            </div>
          </div>
          <FileInput error={errors.image} control={control} />
          <Button
            type="submit"
            text="Sign up"
            isDisabled={Boolean(errors.email || errors.name || errors.phone)}
          />
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Form;
