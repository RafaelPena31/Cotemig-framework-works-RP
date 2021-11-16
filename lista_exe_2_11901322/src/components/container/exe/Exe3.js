import { useState } from "react";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import { message } from "antd";

export default function Exe3() {
  const [y, setY] = useState("");
  const [z, setZ] = useState("");

  const [result, setResult] = useState(0);

  const calcular = () => {
    if (y.length && Number(y) && z.length && Number(z)) {
      const result = Math.sqrt(y * (Math.pow(y, 22) + Math.pow(z, 33)));
      setResult(result);
    } else {
      message.error("Preencha com um valor válido");
    }
  };

  return (
    <div>
      <section>
        <Input placeholder="Y:" type="number" value={y} setValue={setY} />
        <Input placeholder="Z:" type="number" value={z} setValue={setZ} />
      </section>

      <Button type="ghost" text="Calcular" onClick={calcular} />

      <section>
        <h1 className="result">X: {result}</h1>
      </section>
    </div>
  );
}
