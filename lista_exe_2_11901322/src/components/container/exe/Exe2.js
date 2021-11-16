import { useState } from "react";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import { message } from "antd";

export default function Exe2() {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");

  const [result, setResult] = useState([]);

  const calcular = () => {
    if (
      item1.length &&
      Number(item1) &&
      item2.length &&
      Number(item2) &&
      item3.length &&
      Number(item3)
    ) {
      const result = [item1, item2, item3].sort((a, b) => a - b);

      setResult(result);
    } else {
      message.error("Preencha com um valor válido");
    }
  };

  return (
    <div>
      <section>
        <Input
          placeholder="Item 1:"
          type="number"
          value={item1}
          setValue={setItem1}
        />
        <Input
          placeholder="Item 2:"
          type="number"
          value={item2}
          setValue={setItem2}
        />
        <Input
          placeholder="Item 3:"
          type="number"
          value={item3}
          setValue={setItem3}
        />
      </section>

      <Button type="ghost" text="Calcular" onClick={calcular} />

      <section>
        {result.map((i) => (
          <h1 key={i} className="result">
            {i}
          </h1>
        ))}
      </section>
    </div>
  );
}
