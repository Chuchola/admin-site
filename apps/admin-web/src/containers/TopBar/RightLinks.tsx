import React from 'react';
import { Link } from 'react-router-dom';

import { routePathByName } from '../../utils/route.utils';

interface Props {
}

const RightLinks = (_props: Props): React.ReactElement => {
  return (
    <div className='flex gap-3 align-items-center p-menu-list'>
      <Link
        to={routePathByName('SignUpPage')}
        className='flex align-items-center p-button p-button-text p-button-plain no-underline'
      >
        Sign up
      </Link>
      <Link
        to={routePathByName('SignInPage')}
        className='flex align-items-center p-button p-button-text p-button-plain no-underline'
      >
        Sign in
      </Link>
    </div>
  );
};

export default RightLinks;
