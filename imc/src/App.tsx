import React, { useState } from 'react'
import ImcButton from './components/core/imc-button.component'
import ImcResultPanel from './components/core/imc-result-panel.component'
import ImcForm from './components/core/imc.component'
import { Gender, ImcStatus } from './types/global'
function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const [result, setResult] = useState(0)
  const [status, setStatus] = useState('')

  const formControl = {
    name: { value: name, setChangeValue: setName },
    age: { value: age, setChangeValue: setAge },
    gender: { value: gender, setChangeValue: setGender },
    weight: { value: weight, setChangeValue: setWeight },
    height: { value: height, setChangeValue: setHeight }
  }

  const getMaleImc = (imc: number) => {
    if (imc < 20) return ImcStatus.LOW
    if (imc >= 20 && imc <= 24.9) return ImcStatus.NORMAL
    if (imc >= 25 && imc <= 29.9) return ImcStatus.LOW_OBESITY
    if (imc >= 30 && imc <= 39.9) return ImcStatus.MODERATE_OBESITY
    return ImcStatus.MORBID_OBESITY
  }

  const getFemaleImc = (imc: number) => {
    if (imc < 19) return ImcStatus.LOW
    if (imc >= 19 && imc <= 23.9) return ImcStatus.NORMAL
    if (imc >= 24 && imc <= 28.9) return ImcStatus.LOW_OBESITY
    if (imc >= 29 && imc <= 38.9) return ImcStatus.MODERATE_OBESITY
    return ImcStatus.MORBID_OBESITY
  }

  const onClickCalculate = () => {
    if (name && age && gender && weight && height) {
      const result = +weight / Math.pow(+height, 2)

      switch (gender) {
        case Gender.MALE:
          setStatus(getMaleImc(result))
          break
        case Gender.FEMALE:
          setStatus(getFemaleImc(result))
          break
      }

      setResult(result)
    }
  }

  return (
    <div className='App'>
      <h1>IMC</h1>

      <ImcForm
        name={formControl.name}
        age={formControl.age}
        gender={formControl.gender}
        weight={formControl.weight}
        height={formControl.height}
      />

      <ImcButton onClick={onClickCalculate} />

      <ImcResultPanel imc={result} status={status} />
    </div>
  )
}

export default App
