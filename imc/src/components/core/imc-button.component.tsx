import React from 'react'

interface ImcButtonProps {
  onClick: () => void
}

export default function ImcButton({ onClick }: ImcButtonProps) {
  return <button onClick={onClick}>Calcular IMC</button>
}
