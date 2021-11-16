import { useState } from "react";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import { message } from "antd";

export default function Exe5() {
  const [numero1, setNumero1] = useState("");

  const [result, setResult] = useState(0);

  const calcular = () => {
    if (numero1.length && Number(numero1)) {
      const result = (5 / 9) * (numero1 - 32);
      setResult(result);
    } else {
      message.error("Preencha com um valor válido");
    }
  };

  return (
    <div>
      <section>
        <Input
          placeholder="Farenheit:"
          type="number"
          value={numero1}
          setValue={setNumero1}
        />
      </section>

      <Button type="ghost" text="Calcular" onClick={calcular} />

      <section>Centígrados: {result}</section>
    </div>
  );
}
