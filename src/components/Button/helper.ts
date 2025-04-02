import classNames from 'classnames';
import type { ButtonVariant, ColorType, SizeType } from '../../interfaces';

export const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

export const generateButtonClasses = (
  color?: ColorType, 
  size?: SizeType,
  variant?: ButtonVariant) => 
  classNames(
    'react-aria-Button', 
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

  export const generateButtonImageClasses = (
    color?: ColorType, 
    size?: SizeType) => 
    classNames(
      'Button--Image', 
      {
        'Button--Image--Primary': color === 'primary',
        'Button--Image--Secondary': color === 'secondary',
        'Button--Image--Small': size === 'small',
        'Button--Image--Medium': size === 'medium',
      }, 
      classNames
    );