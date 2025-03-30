import { useState } from 'react';
import { Form } from 'react-aria-components';
import { Button, Input, NumericInput, Slider } from './components';

import { InitialFormData } from './interfaces';
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
    console.log('data', data);
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
        <div
          style={{
            display: 'flex',
            gap: '2rem'
          }}
        >
          <div>
            <NumericInput
              defaultValue={0}
              label='Size (GB)'
              name='dataSize'
              size='small'
              onChange={setDataSize}
              value={formData.dataSize}
            />
          </div>
          <div
            style={{
              alignContent: 'end'
            }}
          >  
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
        <div 
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <div
            style={{
              width: '100%'
            }}
          >
            <Button
              color='primary'
              text='Clear'
              type='reset'
              size='medium'
              variant='outlined'
            />

          </div>
          <div
            style={{
              width: '100%'
            }}
          >  
            <Button
              color='primary'
              text='Submit'
              type='submit'
              size='medium'
              variant='contained'
            />
            </div>
        </div>
      </Form>
    </div>
  )
};

export { App as default };

