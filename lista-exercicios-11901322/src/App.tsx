import 'antd/dist/antd.css'
import React, { useState } from 'react'
import './App.css'
import Exe1 from './components/exercicios/exe1/Exe1'
import Exe2 from './components/exercicios/exe2/Exe2'
import Exe3 from './components/exercicios/exe3/Exe3'
import Exe4 from './components/exercicios/exe4/Exe4'
import Exe5 from './components/exercicios/exe5/Exe5'

function App() {
  const [exe1, setExe1] = useState(false)
  const [exe2, setExe2] = useState(false)
  const [exe3, setExe3] = useState(false)
  const [exe4, setExe4] = useState(false)
  const [exe5, setExe5] = useState(false)

  const onDisableAllExercise = () => {
    setExe1(false)
    setExe2(false)
    setExe3(false)
    setExe4(false)
    setExe5(false)
  }

  const onSelectExercise = (exe: number) => {
    switch (exe) {
      case 1:
        setExe1(state => !state)
        break
      case 2:
        setExe2(state => !state)
        break
      case 3:
        setExe3(state => !state)
        break
      case 4:
        setExe4(state => !state)
        break
      case 5:
        setExe5(state => !state)
        break
      default:
        break
    }
  }

  return (
    <div className='App'>
      <h1>Rafael Augusto Pena Pereira Mesquita - 11901322</h1>

      <div className='control'>
        <div>
          <button onClick={() => onSelectExercise(1)}>Exercício 1</button>
          {exe1 && <Exe1 />}
        </div>

        <div>
          <button onClick={() => onSelectExercise(2)}>Exercício 2</button>
          {exe2 && <Exe2 />}
        </div>

        <div>
          <button onClick={() => onSelectExercise(3)}>Exercício 3</button>
          {exe3 && <Exe3 />}
        </div>

        <div>
          <button onClick={() => onSelectExercise(4)}>Exercício 4</button>
          {exe4 && <Exe4 />}
        </div>

        <div>
          <button onClick={() => onSelectExercise(5)}>Exercício 5</button>
          {exe5 && <Exe5 />}
        </div>

        <div>
          <button onClick={onDisableAllExercise}>Feche todos</button>
        </div>
      </div>
    </div>
  )
}

export default App
