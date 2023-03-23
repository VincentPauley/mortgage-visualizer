import { Layout } from 'antd';
import './content.css';

const { Content } = Layout;

interface Props {
  body: JSX.Element;
}

const AppContent = (props: Props) => {
  return <Content className="AppContent">{props.body}</Content>;
};

export default AppContent;
