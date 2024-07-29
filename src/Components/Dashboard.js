import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    
    <Layout style={{ height: '100vh' }} >
     

      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Login',
            },
            {
              key: '2',
              icon: <UserOutlined  />,
              label: 'Sign In',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
        
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          
          <Button
          
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Flottie-animations%2Ffeedback&psig=AOvVaw1iXB-BSf_A6T-csjxqaIPt&ust=1721746912057000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiIyKD1uocDFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Fapply-feedback&psig=AOvVaw1iXB-BSf_A6T-csjxqaIPt&ust=1721746912057000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiIyKD1uocDFQAAAAAdAAAAABAJ'/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;