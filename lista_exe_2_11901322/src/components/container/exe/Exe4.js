import { useState } from "react";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import { message } from "antd";

export default function Exe4() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");

  const [result, setResult] = useState(null);

  const calcular = () => {
    if (
      numero1.length &&
      Number(numero1) &&
      numero2.length &&
      Number(numero2)
    ) {
      const result = numero1 % numero2 === 0;
      setResult(result);
    } else {
      message.error("Preencha com um valor válido");
    }
  };

  return (
    <div>
      <section>
        <Input
          placeholder="Número 1:"
          type="number"
          value={numero1}
          setValue={setNumero1}
        />
        <Input
          placeholder="Número 2:"
          type="number"
          value={numero2}
          setValue={setNumero2}
        />
      </section>

      <Button type="ghost" text="Calcular" onClick={calcular} />

      <section>
        {result !== null && (
          <h1 className="result">{result ? `divisível` : `não é divisível`}</h1>
        )}
      </section>
    </div>
  );
}
