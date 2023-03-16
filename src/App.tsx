import { useState } from 'react';
import { Form } from 'antd';

import './App.css';

// components
import DollarEntry from './components/shared/DollarEntry';
import PercentInput from './components/shared/PercentInput';

function App() {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const handleHomePriceChange = (dollarAmount: number) =>
    setHomePrice(dollarAmount);

  const handleDownPaymentChange = (dollarAmount: number) =>
    setDownPayment(dollarAmount);

  // useState
  return (
    <div className="App">
      <Form>
        <DollarEntry
          label="Home Price"
          name="homePrice"
          placeholder="250,000"
          onUpdate={handleHomePriceChange}
        />
        <PercentInput />
        <DollarEntry
          label="Down Payment"
          name="downPayment"
          placeholder="50,000"
          onUpdate={handleDownPaymentChange}
        />
      </Form>
    </div>
  );
}

export default App;

// TX +884K
// FL +707K
// NC +260K
// AZ +208K
// GA +201K
// SC +164K
// TN +141K
// UT +109K
// ID +100K
// WA +81K
// NV +73K
// CO +66K
// OK +60K
// VA +52K
// AL +50K
// IN +48K
// MT +39K
// AR +34K
// DE +28K
// SD +23K
// MO +23K
// ME +23K

// NJ -27K
// PA -31K
// MI -43K
// OH -43K
// MA -48K
// LA -68K
// IL -230K
// CA -509K
// NY -524K
