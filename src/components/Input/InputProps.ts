import type { SizeType } from '../../interfaces';

export interface InputProps {
  /**
   * If `true`, the Input component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The label content for the Input component.
   */
  label?: string;
  /**
   * The size of the Input component.
   * @default 'small'
   */
  size?: SizeType;
}