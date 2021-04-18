import React from 'react'
import stylesExchangeCard from '../../styles/components/cards/ExchangeCard.module.css'
import styles from '../../styles/sections/Second.module.css'
import { ExchangeCard } from '../cards/ExchangeCard'
import { Graphic } from '../graphic/Graphic'
import { Line } from '../graphic/Line'

const SecondSection: React.FC = () => {
  return (
    <section id={styles.secondSection}>
      <div className={styles.triangulo} id="1"></div>
      <div id={styles.secondSectionTitle}>
        <h1>Por que somos os melhores?</h1>
        <h2>
          Além de sermos a única investidora no mercado que abraça as causas
          ecológicas, possuímos taxas imperdíveis
        </h2>
      </div>
      <div className={styles.contentCards}>
        <ExchangeCard white>
          <div className={stylesExchangeCard.whiteTitle}>
            <h1>SANB11</h1>
            <p>$38,11</p>
          </div>
          <div className={stylesExchangeCard.acao}>
            <h1>3.14%</h1>
          </div>
        </ExchangeCard>
        <ExchangeCard white>
          <div className={stylesExchangeCard.whiteTitle}>
            <h1>VALE3</h1>
            <p>$101,60</p>
          </div>
          <div className={stylesExchangeCard.acao}>
            <h1>-3.07%</h1>
          </div>
        </ExchangeCard>
        <ExchangeCard white>
          <div className={stylesExchangeCard.whiteTitle}>
            <h1>AZUL4</h1>
            <p>$38,79</p>
          </div>
          <div className={stylesExchangeCard.red}>
            <h1>-3.15%</h1>
          </div>
        </ExchangeCard>
      </div>
      <div className={styles.secondSectionMain}>
        <div className={styles.secondSectionMain2}>
          <Line />
          <Graphic />
        </div>
      </div>
    </section>
  )
}

export { SecondSection }
