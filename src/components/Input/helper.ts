import classNames from 'classnames';
import type { SizeType } from '../../interfaces';

export const generateInputClasses = (
  size?: SizeType,
) => 
  classNames(
    'react-aria-Input', 
    {
      'Input--Small': size === 'small',
      'Input--Medium': size === 'medium',
    }, 
    classNames
  );

export const generateInputLabelClasses = (
  disabled?: boolean,
) => 
  classNames(
    'Input--Label', 
    {
      'Input--Label--Disabled': disabled,
    }, 
    classNames
  );