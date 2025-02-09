import React from 'react';

import css from './Page.module.scss';

interface Props {
  children: React.ReactNode,
}

const Page = (props: Props): React.ReactElement => {
  const {
    children,
  } = props;

  return (
    <div className={css.root}>
      {children}
    </div>
  );
};

export default Page;
