import { Input as InputAntd } from "antd";

export default function Input({ placeholder, value, setValue, type = "text" }) {
  return (
    <InputAntd
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={({ target: { value } }) => setValue(value)}
    />
  );
}
