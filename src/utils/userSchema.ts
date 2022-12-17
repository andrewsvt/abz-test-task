import * as yup from 'yup';

const fileResolution = (value: File[]): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const url = URL.createObjectURL(value[0]);
      const img = new Image();

      img.onload = () => {
        resolve(img.width > 70 && img.height > 70);
      };

      img.src = url;

      img.onerror = reject;
    } catch (error) {
      resolve(false);
    }
  });
};

export const userSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Must be at least 2 characters')
    .max(60, 'Username should contain 2-60 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([',. -][a-zA-Zа-яА-ЯіІїЇєЄ ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$/,
      'Invalid name format',
    ),
  email: yup
    .string()
    .required('Email is required')
    .min(2, 'Must be at least 2 characters')
    .max(100, 'Email should contain 2-100 characters')
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      'Invalid email format',
    ),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[\+]{0,1}380([0-9]{9})$/, 'Invalid phone format'),
  position_id: yup.string().required('Position is required'),
  photo: yup
    .mixed()
    .test('required', 'Image is required', (value) => value.length)
    .test(
      'fileSize',
      'Image must be less than 5MB',
      (value) => value.length && value[0].size <= 5242880,
    )
    .test(
      'type',
      'Only jpeg images supported',
      (value) => value.length && value[0].type === ('image/jpeg' || 'image/jpg'),
    )
    .defined()
    .test('fileResolution', 'Image must be 70x70 at least', fileResolution),
});
