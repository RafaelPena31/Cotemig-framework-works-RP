import { Button } from 'antd'
import React from 'react'

interface DefaultButtonProps {
  text: string
  onClick: () => void
}

export default function DefaultButton({ text, onClick }: DefaultButtonProps) {
  return (
    <Button type='primary' onClick={onClick}>
      {text}
    </Button>
  )
}
