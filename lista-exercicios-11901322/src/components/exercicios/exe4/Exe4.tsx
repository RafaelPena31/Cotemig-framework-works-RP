import React, { useState } from 'react'
import DefaultTextInput from '../../core/DefaultTextInput'

export default function Exe4() {
  const [phrase, setPhrase] = useState('')
  const [countWord, setCountWord] = useState(0)

  const onCalcCountWord = (e: string) => {
    const cacheCount = e.split(' ')
    const count = cacheCount.filter(word => word).length
    setCountWord(count)
    setPhrase(e)
  }

  return (
    <div className='exe'>
      <header>
        <h1>Exercício 4</h1>
        <h2>Digite a frase para verificar as palavras</h2>
      </header>

      <div>
        <DefaultTextInput placeholder='Digite sua frase' value={phrase} onChange={onCalcCountWord} />
      </div>

      <div className='content'>
        <h1>Quantas de palavras digitadas na frase : {countWord}</h1>
      </div>
    </div>
  )
}
