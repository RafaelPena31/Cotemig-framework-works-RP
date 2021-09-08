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
        <div>
          <label htmlFor='input'>Nome:</label>
          <input
            type='text'
            name='nome'
            id='nome'
            placeholder='Nome'
            value={name.value}
            onChange={({ target }) => name.setChangeValue(target.value)}
          />
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

        <div>
          <label htmlFor='input'>Idade:</label>
          <input
            type='number'
            name='idade'
            id='idade'
            placeholder='Idade'
            value={age.value}
            onChange={({ target }) => age.setChangeValue(target.value)}
          />
        </div>

        <div>
          <label htmlFor='input'>Peso:</label>
          <input
            type='number'
            name='peso'
            id='peso'
            placeholder='Peso'
            value={weight.value}
            onChange={({ target }) => weight.setChangeValue(target.value)}
          />
        </div>

        <div>
          <label htmlFor='input'>Altura (Metros):</label>
          <input
            type='number'
            name='altura'
            id='altura'
            placeholder='Altura (Metros)'
            value={height.value}
            onChange={({ target }) => height.setChangeValue(target.value)}
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
