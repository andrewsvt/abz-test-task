import React, { useRef } from 'react';
import { Control, FieldError, FieldValues, Merge } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { FormValues } from '../../../../types/typings';

import styles from './FileInput.module.scss';

interface IFileInputProps {
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  control: Control<FormValues, any>;
}

const FileInput: React.FC<IFileInputProps> = ({ error, control }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Controller
      control={control}
      name="image"
      render={({ field }) => (
        <div className={styles.fileInput__container}>
          <div onClick={handleClick}>
            <input
              type="file"
              accept="image/jpeg, image/jpg"
              className={styles.input}
              ref={inputRef}
              onChange={(e) => {
                field.onChange(e.target.files);
              }}
              // onBlur={field.onBlur}
            />
            <button
              className={`${styles.button} ${error?.message ? styles.error : ''}`}
              type="button">
              Upload
            </button>
            <div className={styles.label}>{'Upload your photo'}</div>
          </div>
          {error?.message ? <p className={styles.errorText}>{error?.message}</p> : ''}
        </div>
      )}
    />
  );
};

export default FileInput;
