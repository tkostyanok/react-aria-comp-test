import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import type { ButtonVariant, ColorType, SizeType } from '../../interfaces';

export interface ButtonProps extends Omit<RACButtonProps, 'className' | 'style'> {
  /**
   * The color of the Button component.
   * @default 'primary'
   */
  color: ColorType;
  id?: string;
  /**
   * The size of the Button component.
   * @default 'small'
   */
  size?: SizeType;
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