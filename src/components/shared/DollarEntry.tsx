import { useState } from 'react';
import { Form, Input } from 'antd';
// allow digits, with 2 decimal places, and commas in the right spots
const FORM_PATTERN = /^\$?\d+(,\d{3})*\.?[0-9]?[0-9]?$/;

// FEATURE LIST
// [ ] - if no decimals, add .00 to the entry

interface Props {
  label: string;
  name: string;
  onUpdate: (val: number) => void;
  placeholder?: string;
}

const DollarEntry = (props: Props) => {
  const { label, name, onUpdate, placeholder } = props;

  const [valid, setValid] = useState(true);

  const getStatus = () => {
    if (!valid) return 'error';
    return undefined;
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    const validEntry = FORM_PATTERN.test(value);

    if (validEntry) {
      setValid(true);
      const escapedEntry = value.replace(/,/g, '');
      const newValue = parseFloat(escapedEntry);
      onUpdate(newValue);
    } else {
      setValid(false);
    }
  };

  return (
    <Form.Item
      label={label}
      name={name}
      style={{
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
      <Input
        prefix="$"
        placeholder={placeholder}
        status={getStatus()}
        onChange={handleChange}
      />
    </Form.Item>
  );
};

export default DollarEntry;
