import type { ButtonVariant, ColorType, SizeType } from '../../interfaces';

export interface ButtonProps {
  /**
   * The color of the Button component.
   * @default 'primary'
   */
  color: ColorType;
  /**
   * If `true`, the Button component is disabled.
   * @default false
   */
  disabled?: boolean;
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