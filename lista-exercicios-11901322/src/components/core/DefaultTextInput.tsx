import { Input } from 'antd'
import React from 'react'
import { IInputType } from './types/DefaultTypes'

interface DefaultTextInputProps {
  placeholder: string
  value: string | number
  type?: IInputType
  onChange: (e: string) => void
}

export default function DefaultTextInput({ placeholder, value, type = 'text', onChange }: DefaultTextInputProps) {
  return <Input type={type} placeholder={placeholder} value={value} onChange={({ target }) => onChange(target.value)} />
}
