import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormRenderProps } from 'react-final-form';
import { Button } from 'primereact/button';

import { SignUpFormValues } from '../../services/Auth/interfaces/SignUpFormValues';
import { routePathByName } from '../../utils/route.utils';

import TextField from '../../components/Form/TextField/TextField';
import EmailField from '../Form/EmailField/EmailField';

interface Props {
  initialValues: SignUpFormValues;
  onSubmit: (values: SignUpFormValues) => void;
}

const SignUpForm = (props: Props): React.ReactElement => {
  const {
    initialValues,
    onSubmit,
  } = props;

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={(renderProps: FormRenderProps<SignUpFormValues>) => {
        const {
          handleSubmit,
          invalid,
        } = renderProps;

        return (
          <form onSubmit={handleSubmit}>
            <EmailField
              label='Email:'
              name='email'
              placeholder='Email'
              id='email'
              autoFocus
              isRequired
            />

            <TextField
              label='First Name:'
              name='firstName'
              placeholder='First Name'
              id='firstName'
              isRequired
            />

            <TextField
              label='Last Name:'
              name='lastName'
              placeholder='Last Name'
              id='lastName'
              isRequired
            />

            <TextField
              label='Password:'
              name='password'
              placeholder='Password'
              type='password'
              id='password'
              autoComplete='new-password'
              isRequired
            />

            <div className='flex w-full justify-content-between align-items-center'>
              <Link
                to={routePathByName('SignInPage')}
                className='no-underline hover:underline'
              >
                Sign in
              </Link>
              <Button
                label='Submit'
                type='submit'
                disabled={invalid}
              />
            </div>
          </form>
        );
      }}
    />
  );
};

export default SignUpForm;
