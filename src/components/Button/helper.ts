import classNames from 'classnames';
import type { ButtonVariant, ColorType, SizeType } from '../../interfaces';

export const generateButtonClasses = (
  color?: ColorType, 
  size?: SizeType,
  variant?: ButtonVariant) => 
  classNames(
    'Button', 
    {
      'Button--Primary--Contained': color === 'primary' && variant === 'contained',
      'Button--Primary--Outlined': color === 'primary' && variant === 'outlined',
      'Button--Secondary--Contained': color === 'secondary' && variant === 'contained',
      'Button--Secondary--Outlined': color === 'secondary' && variant === 'outlined',
      'Button--Small': size === 'small',
      'Button--Medium': size === 'medium',
    }, 
    classNames
  );
