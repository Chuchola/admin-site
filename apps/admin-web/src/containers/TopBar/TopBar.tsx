import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

import { routePathByName } from '../../utils/route.utils';

import RightLinks from './RightLinks';

interface Props {
}

const TopBar = (_props: Props): React.ReactElement => {
  const itemRenderer = (item: any) => {
    return (
      <Link
        to={item.data.path}
        className='flex align-items-center p-menuitem-link'
      >
        <span className='mx-2'>{item.label}</span>
      </Link>
    );
  };

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      data: {
        path: routePathByName('HomePage'),
      },
      template: itemRenderer,
    },
  ];

  const end = <RightLinks />;

  return (
    <Menubar
      model={items}
      end={end}
    />
  );
}

export default React.memo(TopBar);
