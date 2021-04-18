import React from 'react'
import styles from '../../styles/sections/Third.module.css'
import Card from '../cards/Card'

export default function ThirdSection(): JSX.Element {
  return (
    <section className={styles.container} id="2">
      <div className={styles.textContent}>
        <h1 className={styles.title}>Por que investir com o Patinhas?</h1>
        <h2 className={styles.sub}>
          Venha ser o tio patinhas do século 21 com a gente
        </h2>
      </div>

      <article className={styles.cardContainer}>
        <Card
          title="Conta"
          desc="Abertura e manutenção"
          beforeValue={4.79}
          actuallyValue={0}
        />
        <Card
          title="Taxa de investimentos de baixa rentabilidade"
          desc="Tesouro Direto, Renda Fixa e FIIs"
          beforeValue={1.5}
          actuallyValue={0}
        />
        <Card
          title="Mentorias semanais"
          desc="Saiba como investir mesmo tendo pouco"
          beforeValue={179.99}
          actuallyValue={0}
        />
        <Card
          title="Taxa de corretagem"
          desc="Opere sem taxas abusivas"
          beforeValue={16.99}
          actuallyValue={0.89}
        />
        <Card
          title="Taxa de custódia"
          desc="Guarde seus investimentos sem taxação"
          beforeValue={16.9}
          actuallyValue={0}
        />
        <Card
          title="Contratos cheios"
          desc="Opere com contratos cheios tranquilamente"
          beforeValue={1}
          actuallyValue={0}
        />
      </article>
    </section>
  )
}
