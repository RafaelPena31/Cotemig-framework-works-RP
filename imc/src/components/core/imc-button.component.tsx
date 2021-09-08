import { Button } from 'antd'
import React from 'react'

interface ImcButtonProps {
  onClick: () => void
}

export default function ImcButton({ onClick }: ImcButtonProps) {
  return (
    <Button type='primary' onClick={onClick}>
      Calcular IMC
    </Button>
  )
}
