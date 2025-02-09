import React from 'react';

import css from './PageContent.module.scss';

interface Props {
  children: React.ReactNode,
}

const PageContent = (props: Props): React.ReactElement => {
  const {
    children,
  } = props;

  return (
    <div className={css.root}>
      {children}
    </div>
  );
};

export default PageContent;
