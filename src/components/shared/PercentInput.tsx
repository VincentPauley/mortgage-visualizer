import { Form, Select, Space } from 'antd';

interface PercentageOption {
  value: number;
  label: string;
}

const options: PercentageOption[] = [];

for (let i = 5; i < 100; i += 5) {
  options.push({ value: i / 100, label: `${i}%` });
}

const PercentInput = () => {
  const handleChange = (val: any) => {
    console.log('handle change: ', val);
  };

  return (
    <Form.Item label="Percent">
      <Select
        onChange={handleChange}
        defaultValue={options[3]}
        options={options}
      />
    </Form.Item>
  );
};

export default PercentInput;
