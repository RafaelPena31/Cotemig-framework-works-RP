import { useState } from "react";
import Button from "../shared/Button";
import Exe1 from "./exe/Exe1";
import Exe2 from "./exe/Exe2";
import Exe3 from "./exe/Exe3";
import Exe4 from "./exe/Exe4";
import Exe5 from "./exe/Exe5";

export default function List() {
  const [exe1, setExe1] = useState(false);
  const [exe2, setExe2] = useState(false);
  const [exe3, setExe3] = useState(false);
  const [exe4, setExe4] = useState(false);
  const [exe5, setExe5] = useState(false);

  return (
    <div className="list">
      <Button text="Exe 1" onClick={() => setExe1((state) => !state)} />
      {exe1 && <Exe1 />}
      <Button text="Exe 2" onClick={() => setExe2((state) => !state)} />
      {exe2 && <Exe2 />}
      <Button text="Exe 3" onClick={() => setExe3((state) => !state)} />
      {exe3 && <Exe3 />}
      <Button text="Exe 4" onClick={() => setExe4((state) => !state)} />
      {exe4 && <Exe4 />}
      <Button text="Exe 5" onClick={() => setExe5((state) => !state)} />
      {exe5 && <Exe5 />}
    </div>
  );
}
