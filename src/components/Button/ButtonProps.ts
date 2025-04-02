import type { ReactNode } from 'react';
import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import type { ButtonVariant, ColorType, SizeType } from '../../interfaces';

export interface ButtonProps extends Omit<RACButtonProps, 'className' | 'style'> {
  /**
   * The color of the Button component.
   * @default 'primary'
   */
  color: ColorType;
  /**
   * Icon placed after the Button text.
   */
  endIcon?: ReactNode;
  /**
   * The size of the Button component.
   * @default 'small'
   */
  size?: SizeType;
  /**
   * Icon placed before the Button text.
   */
  startIcon?: ReactNode;
  /**
   * The text to be displayed inside the Button component.
   * If not provided, the Button will not be rendered.
   * @default undefined
   */
  text?: string;
  /**
   * The variant to use.
   * @default 'contained'
   */
  variant: ButtonVariant;
}