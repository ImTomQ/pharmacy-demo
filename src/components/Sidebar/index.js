import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import {routes} from '../../router/index';

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
          checked={state.theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <Menu
          className='h-100vh w-256'
          theme={state.theme}
          onClick={handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[state.current]}
          mode="inline"
          onOpenChange={onOpenChange}
          openKeys={state.openKeys}
        >
          {routes.map(route => (
            <SubMenu key={route.key} icon={<MailOutlined />} title={route.name}>
              {route.children ? route.children.map((routeChildren, index) => (
                // <Menu.Item key={index}> {routeChildren.name} </Menu.Item>
                <Menu.Item key={index}>
                  <NavLink to={routeChildren.path}>
                    {routeChildren.name}
                  </NavLink>
                </Menu.Item>
              ))
              :
              null
              }
            </SubMenu>
          ))}
          {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Product">
            <Menu.Item key="1">Detail Product</Menu.Item>
            <Menu.Item key="2">Edit Product</Menu.Item>
            <Menu.Item key="3">Add New Product</Menu.Item>
            <Menu.Item key="4">Delete Product</Menu.Item>
          </SubMenu> */}
          <SubMenu key="sub2" icon={<MailOutlined />} title="Supplier">
            <Menu.Item key="5">Detail Supplier</Menu.Item>
            <Menu.Item key="6">Edit Supplier</Menu.Item>
            <Menu.Item key="7">Add New Supplier</Menu.Item>
            <Menu.Item key="8">Delete Supplier</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<MailOutlined />} title="Customer">
            <Menu.Item key="9">Detail Customer</Menu.Item>
            <Menu.Item key="10">Edit Customer</Menu.Item>
            <Menu.Item key="11">Add New Customer</Menu.Item>
            <Menu.Item key="12">Delete Customer</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<MailOutlined />} title="Category">
            <Menu.Item key="13">Detail Category</Menu.Item>
            <Menu.Item key="14">Edit Category</Menu.Item>
            <Menu.Item key="15">Add New Category</Menu.Item>
            <Menu.Item key="16">Delete Category</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<AppstoreOutlined />} title="Invoice">
            <SubMenu key="sub6" title="Export Invoice">
              <Menu.Item key="17">View Export Invoice</Menu.Item>
              <Menu.Item key="18">Detail Export Invoice</Menu.Item>
              <Menu.Item key="19">Export Invoice</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title="Import Invoice">
              <Menu.Item key="20">View Import Invoice</Menu.Item>
              <Menu.Item key="21">Detail Import Invoice</Menu.Item>
              <Menu.Item key="22">Import Product</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
    </>
  )

}

export default Sider;