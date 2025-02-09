import React from 'react';
import classnames from 'classnames';
import isEmpty from 'validator/es/lib/isEmpty';
import { Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';

import { TextFieldProps } from '../interfaces/TextFieldProps';
import { composeValidators } from '../../../utils/validate.utils';

const TextField = (props: TextFieldProps): React.ReactElement => {
  const {
    id,
    name,
    type = 'text',
    label,
    placeholder,
    inputClassName = '',
    autoFocus = false,
    isRequired = false,
    validate,
    ...rest
  } = props;

  const requireValidate = (value: string): string | undefined => {
    return (value && !isEmpty(value)) ? undefined : 'Field is required';
  }

  const validators = [
    ...(isRequired ? [requireValidate] : []),
    ...(validate ? [validate] : []),
  ];

  const composedValidate = validators.length
    ? composeValidators(validators)
    : undefined
  ;

  return (
    <Field
      name={name}
      type={type}
      validate={composedValidate}
      render={({input, meta}) => {
        const hasError = !!(meta.touched && meta.error);
        const labelClassName = classnames({ 'p-error': hasError });
        const inputTextClassName = classnames('w-full', inputClassName, {
          'p-invalid': hasError,
        });

        return (
          <div className='field'>
            <label
              htmlFor={id}
              className={labelClassName}
            >
              {label}
            </label>
            <InputText
              id={id}
              type={type}
              placeholder={placeholder}
              className={inputTextClassName}
              autoFocus={autoFocus}
              {...rest}
              {...input}
            />
            {hasError && <small className="p-error">{meta.error}</small>}
          </div>
        );
      }}
    />
  );
};

export default TextField;
