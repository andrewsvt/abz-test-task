import * as yup from 'yup';

const fileResolution = (value: File): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const url = URL.createObjectURL(value);
      console.log('url', url);
      const img = new Image();

      img.onload = function () {
        resolve(img.height > 70 && img.width > 70);
      };

      img.src = url;
    } catch (error) {
      resolve(false);
    }
  });
};

export const userSchema = yup.object({
  name: yup
    .string()
    .required('Required field')
    .min(2, 'Must be at least 2 characters')
    .max(60, 'Username should contain 2-60 characters')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Invalid name format'),
  email: yup
    .string()
    .required('Required field')
    .min(2, 'Must be at least 2 characters')
    .max(100, 'Email should contain 2-100 characters')
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      'Invalid email format',
    ),
  phone: yup
    .string()
    .required('Required field')
    .matches(/^[\+]{0,1}380([0-9]{9})$/, 'Invalid phone format'),
  position_id: yup.string().required('Required field'),
  photo: yup
    .mixed()
    .required('Required field')
    .test('fileSize', 'The file is too large', (value) => value[0].size <= 5242880)
    .test('type', 'Only jpeg images supported', (value) => {
      return value[0].type === ('image/jpeg' || 'image/jpg');
    }),
  // .test('fileResolution', 'Image must be 70x70 at least', fileResolution),
});
