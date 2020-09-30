import React, { useState } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Link } from 'react-router-dom';

const { SubMenu } = Menu;

function Sidebar() {
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  const initState = {
    openKeys: ['sub1'],
  };

  const [state, setState] = useState(initState);

  const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setState({ openKeys });
    } else {
      setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  return (
    <BrowserRouter>

    <Menu
      mode="inline"
      openKeys={state.openKeys}
      onOpenChange={onOpenChange}
      className="menu-sidebar"
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu.Item key="1">
          <Link to="/add-new-product">
            Option 1
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/detail-product">
            Option 2
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/edit-product">
            Option 3
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/delete-product">
            Option 4
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>

    </BrowserRouter>

  );
}

export default Sidebar;