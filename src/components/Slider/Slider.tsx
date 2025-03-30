import {Label, Slider as RACSlider, SliderOutput, SliderThumb, SliderTrack} from 'react-aria-components';

import type { SliderProps } from './SliderProps';
import './SliderStyles.css';

export const Slider = ({
  label,
  isSliderLabelVisible = false,
  isSliderOutputVisible = false,
  ...props
}: SliderProps) => {

  return (
    <RACSlider {...props}>
      {isSliderLabelVisible
        ? <Label>{label}</Label>
        : null
      }
      {isSliderOutputVisible
        ? <SliderOutput />
        : null
      }
      <SliderTrack>
        <SliderThumb aria-label={label} />
      </SliderTrack>
    </RACSlider>
  );
};
