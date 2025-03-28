import { Button as RACButton} from 'react-aria-components';

import { generateButtonClasses } from './helper';

import type { ButtonProps } from './ButtonProps';

import './Button.styles.css';

export const Button = ({
  color = 'primary',
  disabled = false,
  id,
  size = 'small',
  text,
  variant = 'contained'
}: ButtonProps) => {
  if (!text) { 
    return null;
  }

  const buttonClasses = generateButtonClasses(color, size, variant);

  return (
    <RACButton
      className={buttonClasses}
      isDisabled={disabled}  
      id={id}
    > 
      {text || null}
    </RACButton>
  );
};
