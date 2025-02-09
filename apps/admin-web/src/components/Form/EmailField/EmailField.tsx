import React from 'react';
import isEmail from 'validator/es/lib/isEmail';

import { TextFieldProps } from '../interfaces/TextFieldProps';

import TextField from '../TextField/TextField';

const EmailField = (props: TextFieldProps): React.ReactElement => {
  const validate = (value: string): string | undefined => {
    return (!value || (value && isEmail(value))) ? undefined : 'Email is invalid';
  }

  return (
    <TextField
      {...props}
      validate={validate}
    />
  );
};

export default EmailField;
