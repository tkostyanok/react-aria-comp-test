import { TextField, Label, Input as RACInput } from 'react-aria-components';

import { generateInputClasses } from './helper';

import type { InputProps } from './InputProps';

import './Input.styles.css';

export const Input = ({
  disabled = false,
  label,
  size = 'small',
}: InputProps) => {


  const inputClasses = generateInputClasses(size);
  const labelClasses = disabled ?
    'Input--Label--Disabled' : 'Input--Label';
  
  return (
    <TextField className='Input--Wrapper' isDisabled={disabled}>
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
