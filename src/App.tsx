import { useState } from 'react';
import { Form } from 'react-aria-components';
import { Button, Input, NumericInput, Slider } from './components';

import type { InitialFormData } from './interfaces';

import DeleteIcon from './assets/DeleteIcon.svg';
import './App.css';

const initialData: InitialFormData = {
  dataSize: 0,
  name: '',
}

export const App = () => {
  const [ formData, setFormData ] = useState<InitialFormData>(initialData);
  
  const setDataSize = (value: number) => {
    if (typeof value === 'number') {
      setFormData((curFormData) => ({
        ...curFormData,
        dataSize: value
      }));
    }
  };
  
  const handleReset = () => {
    setFormData((curFormData) => ({
      ...curFormData,
      ...initialData
    }));
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log('From data: ', data);
  }
  return (
    <div>
      <Form
        onReset={handleReset}
        onSubmit={(event) => handleSubmit(event)}
      >
        <div>
          <Input
            label='Name'
            name='name'
            size='medium'
          />
        </div>
        <div className='Form--Row--1'>
          <div>
            <NumericInput
              defaultValue={0}
              label='Size (GB)'
              name='dataSize'
              onChange={setDataSize}
              size='small'
              value={formData.dataSize}
            />
          </div>
          <div className='Align--Content--End'>  
            <Slider
              defaultValue={formData.dataSize}
              label='dataSize'
              isSliderOutputVisible
              onChange={(value) => {
                if (typeof value === 'number') {
                  setDataSize(value);
                }
              }}
              value={formData.dataSize}
            />
          </div>
        </div>
        <div className='Form--Row--2'>
          <div className='Width--100'>
            <Button
              color='primary'
              size='medium'
              startIcon={DeleteIcon}
              text='Clear'
              type='reset'
              variant='outlined'
            />
          </div>
          <div className='Width--100'>
            <Button
              color='primary'
              size='medium'
              text='Submit'
              type='submit'
              variant='contained'
            />
            </div>
        </div>
      </Form>
    </div>
  )
};

export { App as default };

