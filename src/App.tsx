import { useState } from 'react';
import { Form, Row, Col, Layout, Button } from 'antd';
import './App.css';

// components
import DollarEntry from './components/shared/DollarEntry';
import PercentInput from './components/shared/PercentInput';
import DetermineMortgagePayment from './util/determine-mortgage-payment';

const { Content } = Layout;

DetermineMortgagePayment({
  homePrice: 100000,
  downPayment: 20000,
  interestRate: 0.05,
  months: 120 // 30 YR
});

function App() {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const handleHomePriceChange = (dollarAmount: number) =>
    setHomePrice(dollarAmount);

  const handleDownPaymentChange = (dollarAmount: number) =>
    setDownPayment(dollarAmount);

  const calculate = () => {
    console.log('home price: ', homePrice);
    console.log('down payment: ', downPayment);
  };

  // useState
  return (
    <Content
      className="App"
      style={{
        padding: 30,
        maxWidth: 600
      }}
    >
      <Form>
        <Row gutter={16}>
          <Col span={24}>
            <DollarEntry
              label="Home Price"
              name="homePrice"
              placeholder="250,000"
              onUpdate={handleHomePriceChange}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <PercentInput />
          </Col>
          <Col span={16}>
            <DollarEntry
              label="Down Payment"
              name="downPayment"
              placeholder="50,000"
              onUpdate={handleDownPaymentChange}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button onClick={calculate}>Calculate</Button>
          </Col>
        </Row>
      </Form>
    </Content>
  );
}

export default App;
