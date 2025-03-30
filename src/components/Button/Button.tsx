import { Button as RACButton} from 'react-aria-components';

import { generateButtonClasses } from './helper';

import type { ButtonProps } from './ButtonProps';

import './ButtonStyles.css';

export const Button = ({
  color = 'primary',
  id,
  size = 'small',
  text,
  variant = 'contained',
  ...props
}: ButtonProps) => {
  if (!text) { 
    return null;
  }

  const buttonClasses = generateButtonClasses(color, size, variant);

  return (
    <RACButton
      className={buttonClasses}
      id={id}
      {...props}
    > 
      {text || null}
    </RACButton>
  );
};
