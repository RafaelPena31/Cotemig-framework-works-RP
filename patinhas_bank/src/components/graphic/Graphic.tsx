import React from 'react'
import style from '../../styles/components/graphic/Graphic.module.css'

const Graphic = () => {
  return (
    <div id={style.container}>
      <div className={style.graficoBarras}>
        <div className={style.colunas}>
          <div className={style.areaGrafico}>
            <div className={style.areaBarras}>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '10%' }}></div>
              </div>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '20%' }}></div>
              </div>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '30%' }}></div>
              </div>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '40%' }}></div>
              </div>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '60%' }}></div>
              </div>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '70%' }}></div>
              </div>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '80%' }}></div>
              </div>
              <div className={style.divisao}>
                <div className={style.barra} style={{ height: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Graphic }
