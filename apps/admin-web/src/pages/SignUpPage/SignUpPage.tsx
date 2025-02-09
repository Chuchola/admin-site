import React from 'react';
import { Card } from 'primereact/card';

import { SignUpFormValues } from '../../services/Auth/interfaces/SignUpFormValues';
import appendServicesHoc from '../../appendServicesHoc';

import SignUpForm from '../../components/SignUpForm/SignUpForm';

interface Props {
}

const SignUpPage = (_props: Props): React.ReactElement => {
  const initialValues: SignUpFormValues = {
    // email: 'yura.chuchola.work@gmail.com',
    // firstName: 'Yura',
    // lastName: 'Chuchola',
    // password: 'Chuchola',
    email: null,
    firstName: null,
    lastName: null,
    password: null,
  };

  const handleSubmitForm = (_values: SignUpFormValues): void => {

  };

  return (
    <div className='flex justify-content-center mt-8'>
      <Card
        className='w-25rem'
        title='Sign Up'
      >
        <SignUpForm
          initialValues={initialValues}
          onSubmit={handleSubmitForm}
        />
      </Card>
    </div>
  );
};

export default appendServicesHoc([
  'authService',
])(SignUpPage);
