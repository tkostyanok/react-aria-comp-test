import { TextField, Label, Input as RACInput } from 'react-aria-components';

import { generateInputClasses, generateInputLabelClasses } from './helper';

import type { InputProps } from './InputProps';

import './InputStyles.css';

export const Input = ({
  label,
  size = 'small',
  ...props
}: InputProps) => {
  const inputClasses = generateInputClasses(size);
  const labelClasses = generateInputLabelClasses(props?.isDisabled);
  
  return (
    <TextField
      {...props}
    >
      {label
        ? <Label className={labelClasses}>{label}</Label>
        : null
      }
      <RACInput
        className={inputClasses}
        placeholder='Enter text'
      />
    </TextField>
  );
}
