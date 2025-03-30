import classNames from 'classnames';

export const generateNumericInputLabelClasses = (
  disabled?: boolean,
) => 
  classNames(
    'NumberField--Label', 
    {
      'NumberField--Label--Disabled': disabled,
    }, 
    classNames
  );