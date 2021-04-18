import React, { ReactNode } from 'react'
import styles from '../../styles/components/forms/Button.module.css'

interface IButtonProps {
  children: ReactNode
  disabled: boolean
}

const Button: React.FC<IButtonProps> = ({ children, disabled }) => {
  return (
    <button disabled={disabled} className={styles.button}>
      {children}
    </button>
  )
}

export { Button }
