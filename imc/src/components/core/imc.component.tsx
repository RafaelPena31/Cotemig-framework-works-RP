import { Input, InputNumber } from 'antd'
import React from 'react'
import { Gender } from '../../types/global'

type formControl = {
  value: string
  setChangeValue: (value: string) => void
}

interface ImcFormProps {
  name: formControl
  gender: formControl
  age: formControl
  weight: formControl
  height: formControl
}

export default function ImcForm({ name, age, gender, height, weight }: ImcFormProps) {
  return (
    <div className='content-form'>
      <form className='imc-form'>
        <div className='input-form'>
          <label htmlFor='input'>Nome:</label>
          <Input placeholder='Nome' value={name.value} onChange={({ target }) => name.setChangeValue(target.value)} />
        </div>

        <div className='radio'>
          <div>
            <label htmlFor='input'>Masculino</label>
            <input
              type='radio'
              name='sexo'
              value={Gender.MALE}
              checked={gender.value === Gender.MALE}
              onChange={({ target }) => gender.setChangeValue(target.value)}
            />
          </div>

          <div>
            <label htmlFor='input'>Feminino</label>
            <input
              type='radio'
              name='sexo'
              value={Gender.FEMALE}
              checked={gender.value === Gender.FEMALE}
              onChange={({ target }) => gender.setChangeValue(target.value)}
            />
          </div>
        </div>

        <div className='input-form'>
          <label htmlFor='input'>Idade:</label>
          <InputNumber
            placeholder='Idade'
            min={0}
            max={3}
            defaultValue={0}
            value={+age.value}
            onChange={v => age.setChangeValue(v.toString())}
          />
        </div>

        <div className='input-form'>
          <label htmlFor='input'>Peso:</label>
          <InputNumber
            placeholder='Peso'
            min={0}
            max={3}
            defaultValue={0}
            value={+weight.value}
            onChange={v => weight.setChangeValue(v.toString())}
          />
        </div>

        <div className='input-form'>
          <label htmlFor='input'>Altura (Metros):</label>
          <InputNumber
            placeholder='Altura (Metros)'
            min={0}
            max={3}
            defaultValue={0}
            value={+height.value}
            onChange={v => height.setChangeValue(v.toString())}
          />
        </div>
      </form>

      <div className='panel-info'>
        <div className='info'>
          <h2>Nome:</h2>
          <p>{name.value}</p>
        </div>

        <div className='info'>
          <h2>Idade:</h2>
          <p>{age.value}</p>
        </div>

        <div className='info'>
          <h2>Sexo:</h2>
          <p>{gender.value}</p>
        </div>

        <div className='info'>
          <h2>Peso:</h2>
          <p>{weight.value} Kg</p>
        </div>

        <div className='info'>
          <h2>Altura:</h2>
          <p>{height.value} M</p>
        </div>
      </div>
    </div>
  )
}
