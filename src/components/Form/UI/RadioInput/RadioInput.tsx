import React from 'react';

import { FormControlLabel, RadioGroup } from '@mui/material';
import { RadioCheckedIcon, RadioIcon, StyledRadio } from '../FormStyledComponents';

import { Control } from 'react-hook-form';
import { FormValues, IPositionsResponse } from '../../../../types/typings';
import { Controller } from 'react-hook-form';

interface IRadioInputProps {
  control: Control<FormValues, any>;
  positions: IPositionsResponse;
}

const RadioInput: React.FC<IRadioInputProps> = ({ control, positions }) => {
  return (
    <Controller
      control={control}
      name="position_id"
      render={({ field }) => (
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={1}
          name="radio-buttons-group"
          onChange={(e) => field.onChange(e)}
          value={field.value}>
          {positions?.positions
            ? positions?.positions.map((position) => (
                <FormControlLabel
                  key={position.id}
                  value={position.id}
                  control={<StyledRadio checkedIcon={<RadioCheckedIcon />} icon={<RadioIcon />} />}
                  label={position.name}
                />
              ))
            : ''}
        </RadioGroup>
      )}
    />
  );
};

export default RadioInput;
