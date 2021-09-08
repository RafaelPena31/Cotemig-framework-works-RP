import React from 'react'

interface ImcResultPanelProps {
  imc: number
  status: string
}

export default function ImcResultPanel({ imc, status }: ImcResultPanelProps) {
  return (
    <div className='result-panel'>
      <div className='info'>
        <h2>Seu IMC é:</h2>
        <p>{imc}</p>
      </div>

      <div className='info'>
        <h3>De acordo com nossos cálculos, você se encontra no status:</h3>
        <p>{status}</p>
      </div>
    </div>
  )
}
