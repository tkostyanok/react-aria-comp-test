import classNames from 'classnames';
import type { SizeType } from '../../interfaces';

export const generateInputClasses = (
  size?: SizeType,
) => 
  classNames(
    'Input', 
    {
      'Input--Small': size === 'small',
      'Input--Medium': size === 'medium',
    }, 
    classNames
  );
