import React, { useState } from 'react'
import './Layout.css'
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink }  from 'react-router-dom'
import CardsPage from '../../CardsPage';
import {Routes,Route} from 'react-router-dom';
import Books from '../Books';
import Users from '../Users'
//import MyGalery from '../Galery/Galery'
import MyCarousel from '../Carousel/Carousel';

const { Header, Content, Footer, Sider } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed ]= useState(false)
  
  const handleOnCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed( collapsed );
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={handleOnCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to='/'>
            Git User 
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <NavLink to='/books'>
            Books 
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <NavLink to='/users'>
            Users 
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <NavLink to='/galery'>
            Galery 
          </NavLink>
        </Menu.Item>
        </Menu>
    </Sider>
    <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Routes> 
            <Route path="/" element= {<CardsPage/>} />
            <Route path="/books" element= {<Books/>} />
            <Route path="/users" element= {<Users/>} />
            <Route path="/galery" element= {<MyCarousel/>} />
          </Routes>
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    </Layout>
);
}

export default MyLayout;