import { useState, useEffect } from 'react';
import { Form, Input } from 'antd';

// TODO: deprecate component

const HomePrice = () => {
  const [price, setPrice] = useState(0.0);
  const [valid, setValid] = useState(true);

  const getStatus = () => {
    if (!valid) return 'error';
    return undefined;
  };

  const handlePriceChange = (event: any) => {
    const { value } = event.target;

    const validEntry = /^\$?\d+(,\d{3})*\.?[0-9]?[0-9]?$/.test(value);

    if (validEntry) {
      setValid(true);

      const escapedEntry = value.replace(/,/g, '');

      const newPrice = parseFloat(escapedEntry);

      setPrice(newPrice);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    console.log('>> Price Change: ', price);
  }, [price]);

  return (
    <div>
      <p>Price: {price}</p>
      <Form.Item label="Home Price" name="homePrice">
        <Input
          status={getStatus()}
          placeholder="250,000"
          prefix="$"
          onChange={handlePriceChange}
        />
      </Form.Item>
    </div>
  );
};

export default HomePrice;

// import React from 'react';
// import './index.css';
// import { Button, Checkbox, Form, Input } from 'antd';

// const onFinish = (values: any) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };

// const App: React.FC = () => (
//   <Form
//     name="basic"
//     labelCol={{ span: 8 }}
//     wrapperCol={{ span: 16 }}
//     style={{ maxWidth: 600 }}
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[{ required: true, message: 'Please input your username!' }]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
// );

// export default App;
