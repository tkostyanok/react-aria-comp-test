import type { SliderProps as RACSliderProps} from 'react-aria-components';

export interface SliderProps extends Omit<RACSliderProps, 'className' | 'style'> {
  /**
   * The label to be displayed inside the Slider component.
   * Required for Label or SliderThumb
   */
  label: string;
  /**
   * Make the label content for the Slider component visible.
   * @default false
   */
  isSliderLabelVisible?: boolean;
  /**
   * Make the output content for the Slider component visible.
   * @default false
   */
  isSliderOutputVisible?: boolean;
}

