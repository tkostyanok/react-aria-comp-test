import type { TextFieldProps as RACTextFieldProps} from 'react-aria-components';

import type { SizeType } from '../../interfaces';

export interface InputProps extends Omit<RACTextFieldProps, 'className' | 'style'> {
  /**
   * The label content for the Input component.
   * @default undefined
   */
  label?: string;
  /**
   * The size of the Input component.
   * @default 'small'
   */
  size?: SizeType;
}