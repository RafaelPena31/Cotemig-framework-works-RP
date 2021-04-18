import React from 'react'
import tioPatinhas from '../../assets/tiopatinhas.png'
import stylesExchangeCard from '../../styles/components/cards/ExchangeCard.module.css'
import styles from '../../styles/sections/First.module.css'
import { ExchangeCard } from '../cards/ExchangeCard'

function FirstSection(): JSX.Element {
  return (
    <section className={styles.Bodies} id="0">
      <div className={styles.text_and_cards}>
        <div className={styles.text}>
          <h1>Se torne um patinhas e plante uma mudinha</h1>
          <p>
            Aqui no Patinhas Bank, a cada 1000 reais investido, uma árvore é
            plantada
          </p>
        </div>
        <div className={styles.big_cards}>
          <ExchangeCard>
            <div className={stylesExchangeCard.title}>
              <h1>ENEV3</h1>
              <p>$68,00</p>
            </div>
            <div className={stylesExchangeCard.acao}>
              <h1>2.27%</h1>
            </div>
          </ExchangeCard>
          <ExchangeCard>
            <div className={stylesExchangeCard.title}>
              <h1>VVAR3</h1>
              <p>$11,87</p>
            </div>
            <div className={stylesExchangeCard.red}>
              <h1>-6.02%</h1>
            </div>
          </ExchangeCard>
          <ExchangeCard>
            <div className={stylesExchangeCard.title}>
              <h1>MGLU3</h1>
              <p>$24,18</p>
            </div>
            <div className={stylesExchangeCard.acao}>
              <h1>0.50%</h1>
            </div>
          </ExchangeCard>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={tioPatinhas} alt="mascote" className={styles.img} />
      </div>
      <div className={styles.big_ExchangeCardMobile}>
        <ExchangeCard>
          <div className={stylesExchangeCard.title}>
            <h1>ENEV3</h1>
            <p>$68,00</p>
          </div>
          <div className={stylesExchangeCard.acao}>
            <h1>2.27%</h1>
          </div>
        </ExchangeCard>
        <ExchangeCard>
          <div className={stylesExchangeCard.title}>
            <h1>VVAR3</h1>
            <p>$11,87</p>
          </div>
          <div className={stylesExchangeCard.red}>
            <h1>-6.02%</h1>
          </div>
        </ExchangeCard>
        <ExchangeCard>
          <div className={stylesExchangeCard.title}>
            <h1>MGLU3</h1>
            <p>$24,18</p>
          </div>
          <div className={stylesExchangeCard.acao}>
            <h1>0.50%</h1>
          </div>
        </ExchangeCard>
      </div>
    </section>
  )
}

export { FirstSection }
