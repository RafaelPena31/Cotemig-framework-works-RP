import React, { FormEvent, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import styles from '../../styles/components/cards/Card.module.css'

interface CardProps {
  title: string
  desc: string
  beforeValue: number
  actuallyValue: number
  isProfile?: boolean
}

export default function Card({
  actuallyValue,
  beforeValue,
  title,
  desc
}: CardProps): JSX.Element {
  const [flip, setFlip] = useState(false)

  const onCardClicked = (e: FormEvent) => {
    e.preventDefault()
    setFlip(!flip)
  }

  return (
    <ReactCardFlip
      containerStyle={{
        width: '100%',
        maxWidth: '400px',
        minHeight: '270px',
        margin: '9px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      isFlipped={flip}
    >
      <div className={styles.cardContent} onClick={onCardClicked}>
        <div className={styles.textContent}>
          <h1 className={styles.textName}>{title}</h1>
          <p className={styles.textDesc}>{desc}</p>
        </div>
        <div className={styles.valueContent}>
          <p className={styles.textBeforeValue}>
            {beforeValue.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
          <h1 className={styles.textActuallyValue}>
            {actuallyValue.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </h1>
        </div>
      </div>
      <div className={styles.cardContent} onClick={onCardClicked}>
        <div className={styles.textContent}>
          <h1 className={styles.textName}>{title}</h1>
          <p className={styles.textDesc}>{desc}</p>
        </div>
        <div className={styles.valueContent}>
          <p className={styles.textBeforeValue}>
            {beforeValue.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
          <h1 className={styles.textActuallyValue}>
            {actuallyValue.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </h1>
        </div>
      </div>
    </ReactCardFlip>
  )
}
