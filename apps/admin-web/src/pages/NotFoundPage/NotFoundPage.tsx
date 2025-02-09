import React from 'react';
import { Link } from 'react-router-dom';

import { routePathByName } from '../../utils/route.utils';

interface Props {
}

const NotFoundPage = (_props: Props): React.ReactElement => {
  return (
    <div className="fixed w-full h-full top-0 left-0 opacity-70">
      <div className="flex align-items-center justify-content-center relative">
        <div className="w-full flex justify-content-end align-items-start absolute top-0 left-0 z-1" />
        <div className="h-screen flex justify-content-center align-items-center w-full lg:w-6">
          <div className="z-5 w-6 h-6">
            <span className="text-lg bg-bluegray-500 p-1 px-2 border-round-md text-900">
              404
            </span>
            <h1 className="text-6xl font-light my-4 mx-0">
              Page Not Found
            </h1>
            <div className="w-7rem bg-bluegray-500" style={{ height: '1px' }} />
            <p className="mt-4 text-lg text-900">
              Requested resource is not available right now. Please try again later.
            </p>
            <Link
              className="inline-block mt-5 border-none p-button p-component p-button-secondary no-underline"
              to={routePathByName('HomePage')}
            >
              <span
                className="p-button-label p-c no-underline"
                data-pc-section="label"
              >
                Go To Home Page
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
