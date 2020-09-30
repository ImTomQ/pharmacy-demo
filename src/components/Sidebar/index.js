import React, { useState } from 'react'
import { Menu, Switch } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { routes } from '../../router/index';
import { routesSubmenu } from "../../router/index";

const { SubMenu } = Menu;

function Sidebar() {
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

  const initState = {
    openKeys: ["sub1"],
    theme: "dark",
    current: "1",
  };

  const [state, setState] = useState(initState);

  const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setState({ ...state, openKeys });
    } else {
      setState({
        ...state,
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  const changeTheme = (value) => {
    setState({
      ...state,
      theme: value ? "dark" : "light",
    });
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setState({
      ...state,
      current: e.key,
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
        mode="inline"
        openKeys={state.openKeys}
        onOpenChange={onOpenChange}
        onClick={handleClick}
        className="menu-sidebar"
        defaultOpenKeys={["sub1"]}
        theme={state.theme}
        selectedKeys={[state.current]}
      >
        {routes.map((route) => (
          <SubMenu
            key={route.key}
            title={
              <span>
                <MailOutlined />
                <span>{route.name}</span>
              </span>
            }
          >
            {route.children.map((childrenRoute) => (
              <Menu.Item key={childrenRoute.key}>
                <Link to={childrenRoute.path}>{childrenRoute.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}

        {routesSubmenu.map((route) => (
          <SubMenu
            key={route.key}
            title={
              <span>
                <MailOutlined />
                <span>{route.name}</span>
              </span>
            }
          >
            {route.submenu.map((submenuRoute) => (
              <SubMenu 
                key={submenuRoute.key} 
                title={
                  <span>
                    <MailOutlined />
                    <span>{submenuRoute.name}</span>
                  </span>
                }
              >
                {submenuRoute.children.map(childrenRoute => (
                  <Menu.Item key={childrenRoute.key}>
                    <Link to={childrenRoute.path}>{childrenRoute.name}</Link>
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

export default Sidebar;