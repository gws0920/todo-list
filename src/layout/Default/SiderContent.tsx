import { HomeOutlined, OrderedListOutlined, PlusOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const items: MenuProps['items'] = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: `待办`,
  },
  {
    key: '/About',
    icon: <OrderedListOutlined />,
    label: `About`,
  },
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultSelectedKeys = [location.pathname];
  const onClick = ({ key }: any) => {
    navigate(key);
  };
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100%',
      }}
    >
      <div className="flex mt-2 text-xl mb-2 px-4px items-center justify-center">
        <Button block type="primary" ghost size="large" icon={<PlusOutlined />}>
          添加待办
        </Button>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        items={items}
        onClick={onClick}
      />
    </Sider>
  );
};

export default App;
