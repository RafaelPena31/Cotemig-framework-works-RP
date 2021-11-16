import { useState } from "react";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import { message } from "antd";

export default function Exe1() {
  const [nota1, setNota1] = useState("");
  const [peso1, setPeso1] = useState("");
  const [nota2, setNota2] = useState("");
  const [peso2, setPeso2] = useState("");

  const [result, setResult] = useState(0);

  const calcular = () => {
    if (
      nota1.length &&
      Number(nota1) &&
      peso1.length &&
      Number(peso1) &&
      nota2.length &&
      Number(nota2) &&
      peso2.length &&
      Number(peso2)
    ) {
      const result =
        Number(nota1) * Number(peso1) + Number(nota2) * Number(peso2);
      setResult(result);
    } else {
      message.error("Preencha com um valor válido");
    }
  };

  return (
    <div>
      <section>
        <Input
          placeholder="Nota 1:"
          type="number"
          value={nota1}
          setValue={setNota1}
        />
        <Input
          placeholder="Peso:"
          type="number"
          value={peso1}
          setValue={setPeso1}
        />
      </section>

      <section>
        <Input
          placeholder="Nota 2:"
          type="number"
          value={nota2}
          setValue={setNota2}
        />
        <Input
          placeholder="Peso:"
          type="number"
          value={peso2}
          setValue={setPeso2}
        />
      </section>

      <Button type="ghost" text="Calcular" onClick={calcular} />

      <section>
        <h1 className="result">{result}</h1>
      </section>
    </div>
  );
}
