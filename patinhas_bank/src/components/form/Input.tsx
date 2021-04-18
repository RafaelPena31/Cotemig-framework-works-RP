import React from 'react'
import styles from '../../styles/components/forms/Input.module.css'

interface IInputProps {
  placeholder: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
}

function Input({
  placeholder,
  type,
  onChange,
  value
}: IInputProps): JSX.Element {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export { Input }
