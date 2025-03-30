import type { NumberFieldProps as RACNumberFieldProps} from 'react-aria-components';
import type { SizeType } from '../../interfaces';

export interface NumericInputProps extends Omit<RACNumberFieldProps, 'className' | 'style'> {
  /**
   * The label content for the NumericInput component.
   * @default undefined
   */
  label?: string;
  /**
   * The size of the NumericInput component.
   * @default 'small'
   */
  size?: SizeType;
}