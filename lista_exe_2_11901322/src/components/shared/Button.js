import { Button as ButtonAntd } from "antd";

export default function Button({ text, onClick, type = "primary" }) {
  return (
    <ButtonAntd type={type} block onClick={onClick} className="button">
      {text}
    </ButtonAntd>
  );
}
