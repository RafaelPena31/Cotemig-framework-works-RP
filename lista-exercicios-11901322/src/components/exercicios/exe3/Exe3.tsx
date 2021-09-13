import { Table } from 'antd'
import React, { useState } from 'react'
import DefaultButton from '../../core/DefaultButton'
import DefaultTextInput from '../../core/DefaultTextInput'
import { INumberInfo } from './Exe3Types'

export default function Exe3() {
  const [currentNumber, setCurrentNumber] = useState('')
  const [numbers, setNumbers] = useState<number[]>([])

  const columns = [
    {
      title: 'Soma',
      dataIndex: 'sum',
      key: 'sum'
    },
    {
      title: 'Produto',
      dataIndex: 'multiplication',
      key: 'multiplication'
    },
    {
      title: 'Média',
      dataIndex: 'average',
      key: 'average'
    }
  ]

  const onAddNumber = () => {
    if (currentNumber) {
      setNumbers(state => [...state, +currentNumber])
      setCurrentNumber('')
    }
  }

  const getNumberInfo = (): INumberInfo[] => {
    return [
      {
        key: (numbers.length + 1).toString(),
        sum: numbers.reduce((n, n1) => n + n1),
        average: numbers.reduce((n, n1) => n + n1) / numbers.length,
        multiplication: numbers.reduce((n, n1) => n * n1)
      }
    ]
  }

  return (
    <div className='exe'>
      <header>
        <h1>Exercício 3</h1>
        <h2>Verifique os cálculos dos números adicionados</h2>
      </header>

      <div>
        <DefaultTextInput placeholder='Adicione um número' type='number' value={currentNumber} onChange={setCurrentNumber} />

        <DefaultButton text='Adicionar' onClick={onAddNumber} />
      </div>

      <div className='content'>{numbers.length > 0 && <Table columns={columns} dataSource={getNumberInfo()} />}</div>
    </div>
  )
}
