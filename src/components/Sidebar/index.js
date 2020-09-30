import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import {routes} from '../../router/index';
import { routesSubmenu } from "../../router/index";

const { SubMenu } = Menu;

function Sider() {

  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
  const [state, setState] = useState({ theme: 'dark', current: '1', openKeys: ['sub1'], });

  const changeTheme = value => {
    setState({
      ...state,
      theme: value ? 'dark' : 'light'
    });
  }

  const handleClick = e => {
    setState({ ...state, current: e.key });
  }

  const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);

    !!rootSubmenuKeys && (rootSubmenuKeys.indexOf(latestOpenKey) === -1) 
    ?
      setState({ ...state, openKeys })
    :
      setState({
        ...state,
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
  };

  return (
    <>
      <Switch
        checked={state.theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <Menu
        className="h-100vh w-256"
        theme={state.theme}
        onClick={handleClick}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[state.current]}
        mode="inline"
        onOpenChange={onOpenChange}
        openKeys={state.openKeys}
      >
        {routes.map(route => (
              <SubMenu key={route.key} title={route.name}>
                {route.children.map((childrenRoute, key) => (
                  <Menu.Item key={key + 1}>{childrenRoute.name}</Menu.Item>
                ))}
              </SubMenu>
        ))}
        {routesSubmenu.map((route) => (
          <SubMenu key={route.key} title={route.name}>
            {route.submenu.map(submenuRoute => (
              <SubMenu key={submenuRoute.key} title={submenuRoute.name}>
                {submenuRoute.children.map(childrenRoute => (
                  <Menu.Item key={childrenRoute.key}>
                    {childrenRoute.name}
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
}

export default Sider;