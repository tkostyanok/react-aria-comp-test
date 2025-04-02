import { Button as RACButton} from 'react-aria-components';

import { generateButtonClasses, generateButtonImageClasses } from './helper';

import type { ButtonProps } from './ButtonProps';

import './ButtonStyles.css';


export const Button = ({
  color = 'primary',
  endIcon,
  size = 'small',
  startIcon,
  text,
  variant = 'contained',
  ...props
}: ButtonProps) => {
  if (!(text || startIcon || endIcon)) { 
    return null;
  }
  const buttonClasses = generateButtonClasses(color, size, variant);
  const buttonImageClasses = generateButtonImageClasses(color, size);

  return (
    <RACButton
      className={buttonClasses}
      {...props}
    >
      {typeof startIcon === 'string'
        ? (
          <div>
            <img
              alt='Button-Start-Image'
              className={buttonImageClasses}
              src={startIcon}
            />
          </div>
          
          ) 
        : null
      }
      {text
        ? (
          <div>
            {text}
          </div>
        )
        : null
      }
      {typeof endIcon === 'string' 
        ? (
          <div>
            <img
              alt='Button-End-Image'
              className={buttonImageClasses}
              src={endIcon}
            />
          </div>
          ) 
        : null
      }
    </RACButton>
  );
};
