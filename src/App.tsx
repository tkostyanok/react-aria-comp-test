import { Button, Input } from './components';


export const App = () => {
  return (
    <div
      style={{
        display: 'inline-flex',
        // flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        width: '100%'
      }}
    >
      {/* <Button
        color='primary'
        size='medium'
        text = 'medium Contained'
        variant='contained'
      /> */}
      <Input size='medium' />
      <Button
        color='primary'
        size='medium'
        text = 'medium Contained'
        variant='contained'
      />
      <Input label='Test' size='medium' />
      <Input label='Test 2' disabled/>
      {/* <Button
        color='primary'
        size='medium'
        text = 'PRIMARY outlined'
        variant='outlined'
      />
      <Button
        color='primary'
        disabled

        size='medium'
        text = 'PRIMARY Contained'
        variant='contained'
      />
      <Button
        color='primary'
        disabled

        size='medium'
        text = 'PRIMARY outlined'
        variant='outlined'
      />
      <Button
        color='secondary'
        disabled

        size='medium'
        text = 'secondary Contained'
        variant='contained'
      />
      <Button
        color='secondary'
        disabled

        size='medium'
        text = 'secondary outlined'
        variant='outlined'
      />
      <Button
        color='secondary'
        size='small'
        text = 'Secondary Contained'
        variant='contained'
      />
      <Button
        color='secondary'
        size='medium'
        text = 'Secondary Contained'
        variant='outlined'
      /> */}
    </div>
  )
};

export { App as default };

