import { NumberField, Label, Group, Input } from 'react-aria-components';

import { Button } from '../Button';

import type { NumericInputProps } from './NumericInputProps';

import './NumericInputStyles.css';

export const NumericInput = ({
  label,
  size = 'small',
  ...props
}: NumericInputProps) => {

  return (
    <NumberField
      defaultValue={1024}
      minValue={0}
      {...props}
    >
      {label
        ? <Label>{label}</Label>
        : null
      }
      <Group>
        <Button
          color='secondary'
          size={size}
          slot='decrement'
          text='-'
          variant='contained'
        />
        
        <Input />
        <Button
          color='secondary'
          size={size}
          slot='increment'
          text='+'
          variant='contained'
        />
      </Group>
    </NumberField>
  );
};