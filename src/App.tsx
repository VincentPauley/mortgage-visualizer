import { useState } from 'react';
import { Form, Row, Col, Layout, Button, Typography } from 'antd';

import { increaseAmount } from './features/cart/cartSlice';
import { useDispatch } from 'react-redux';

import { AppHeader } from './components/layout';

// components
import DollarEntry from './components/shared/DollarEntry';
import PercentInput from './components/shared/PercentInput';
import DetermineMortgagePayment from './util/determine-mortgage-payment';
import { useSelector } from 'react-redux';

const { Content, Footer } = Layout;

const { Title } = Typography;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9'
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea'
};

console.log(
  DetermineMortgagePayment({
    homePrice: 400_000,
    downPayment: 80_000,
    interestRate: 0.07,
    months: 360 // 30 YR
  })
);

function App() {
  const dispatch = useDispatch();
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const { amount } = useSelector((state: any) => state.cart);

  const handleHomePriceChange = (dollarAmount: number) =>
    setHomePrice(dollarAmount);

  const handleDownPaymentChange = (dollarAmount: number) =>
    setDownPayment(dollarAmount);

  const calculate = () => {
    dispatch(increaseAmount());
  };

  // Title

  return (
    <Layout>
      <AppHeader />
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );

  // HEADER, CONTENT, FOOTER
  // useState
  // return (
  //   <Content
  //     className="App"
  //     style={{
  //       padding: 30,
  //       maxWidth: 600
  //     }}
  //   >
  //     <p>Amount: {amount}</p>
  //     <Form>
  //       <Row gutter={16}>
  //         <Col span={24}>
  //           <DollarEntry
  //             label="Home Price"
  //             name="homePrice"
  //             placeholder="250,000"
  //             onUpdate={handleHomePriceChange}
  //           />
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col span={8}>
  //           <PercentInput />
  //         </Col>
  //         <Col span={16}>
  //           <DollarEntry
  //             label="Down Payment"
  //             name="downPayment"
  //             placeholder="50,000"
  //             onUpdate={handleDownPaymentChange}
  //           />
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col span={24}>
  //           <Button onClick={calculate}>Calculate</Button>
  //         </Col>
  //       </Row>
  //     </Form>
  //   </Content>
  // );
}

export default App;
