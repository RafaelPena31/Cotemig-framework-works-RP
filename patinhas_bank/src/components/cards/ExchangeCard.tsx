import React from 'react'
import styles from '../../styles/components/cards/ExchangeCard.module.css'

interface ExchangeCardProps {
  white?: boolean
}

export const ExchangeCard: React.FC<ExchangeCardProps> = ({
  children,
  white
}) => {
  return (
    <div className={white ? styles.whiteCard : styles.greenCard}>
      {children}
    </div>
  )
}
