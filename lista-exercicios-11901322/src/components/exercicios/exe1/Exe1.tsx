import React, { useState } from 'react'
import DefaultButton from '../../core/DefaultButton'
import DefaultTextInput from '../../core/DefaultTextInput'

export default function Exe1() {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [thirdValue, setThirdValue] = useState('')

  const [finishVerify, setFinishVerify] = useState(false)
  const [triangleStatus, setTriangleStatus] = useState(false)

  const onVerifyTriangle = () => {
    if (firstValue && secondValue && thirdValue) {
      const first = +firstValue
      const second = +secondValue
      const third = +thirdValue

      const isTriangleAvailable = first + second <= third || first + third <= second || third + second <= first
      setTriangleStatus(!isTriangleAvailable)
      setFinishVerify(true)
    }
  }

  const getTriangleStatus = () => (triangleStatus ? 'O seu triângulo é verdadeiro' : 'O seu triângulo é falso')

  return (
    <div className='exe'>
      <header>
        <h1>Exercício 1</h1>
        <h2>Verifique se os valores passados são válidos para formar um triângulo</h2>
      </header>

      <DefaultTextInput placeholder='Primeiro valor' type='number' value={firstValue} onChange={setFirstValue} />
      <DefaultTextInput placeholder='Segundo valor' type='number' value={secondValue} onChange={setSecondValue} />
      <DefaultTextInput placeholder='Terceiro valor' type='number' value={thirdValue} onChange={setThirdValue} />

      <DefaultButton text='Verificar' onClick={onVerifyTriangle} />

      {finishVerify && <h1>{getTriangleStatus()}</h1>}
    </div>
  )
}
