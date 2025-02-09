import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';

import { CurrentUser } from '../../services/User/interfaces/CurrentUser';

interface Props {
  currentUser: CurrentUser;
}

const TopBarAvatar = (props: Props): React.ReactElement => {
  const {
    currentUser,
  } = props;

  const menu = React.useRef(null);
  const items = [
    {
      label: currentUser.username,
      items: [
        {
          label: 'Refresh',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Export',
          icon: 'pi pi-upload'
        }
      ]
    }
  ];

  return (
    <>
      <Avatar
        icon="pi pi-user"
        style={{ backgroundColor: '#2196F3', color: '#ffffff' }}
        shape="circle"
        onClick={(event) => (menu.current as any).toggle(event)}
      />
      <Menu
        model={items}
        popup
        ref={menu}
        id='popup_menu_right'
        popupAlignment='right'
      />
    </>
  );
};

export default TopBarAvatar;
