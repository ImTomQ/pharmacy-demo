import React, { useEffect, useState } from 'react';
import { withRouter, NavLink, Link, Router, BrowserRouter } from 'react-router-dom';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import {routes} from '../../router/index';
import { routesSubmenu } from "../../router/index";

const { SubMenu } = Menu;

function Sidebar() {

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

    if(rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setState({ ...state, openKeys })
    } else {
      setState({
        ...state,
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      })
    }
  };

  return (
    <>
      <BrowserRouter>
      <Switch
        checked={state.theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <Menu
        className="menu-sidebar"
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
            {route.children.map((childrenRoute) => (
              <Menu.Item key={childrenRoute.key}>
                <Link to={childrenRoute.path}>
                  {childrenRoute.name}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
        {routesSubmenu.map((route) => (
          <SubMenu key={route.key} title={route.name}>
            {route.submenu.map(submenuRoute => (
              <SubMenu key={submenuRoute.key} title={submenuRoute.name}>
                {submenuRoute.children.map(childrenRoute => (
                  <Menu.Item key={childrenRoute.key}>
                    <Link to={childrenRoute.path}>
                      {childrenRoute.name}
                    </Link>
                  </Menu.Item>  
                ))}
              </SubMenu>
            ))}
          </SubMenu>
        ))}
      </Menu>
      </BrowserRouter>
    </>
  );
}

export default Sidebar;