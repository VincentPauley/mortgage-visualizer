import { Layout, Typography } from 'antd';

import './header.css';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header className="AppHeader">
      <Title>New Header</Title>
    </Header>
  );
};

export default AppHeader;
