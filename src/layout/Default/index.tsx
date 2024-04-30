import { Layout, theme } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

import SliderContent from './SiderContent';

const { Header, Content, Footer } = Layout;

const DefaultLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider style={{ height: '100%' }}>
      <SliderContent />
      <Content
        style={{
          margin: '24px 16px',
          overflow: 'initial',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="flex flex-col flex-1 h-0"
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
