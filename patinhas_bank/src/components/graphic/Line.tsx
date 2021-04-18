import React from 'react'
import style from '../../styles/components/graphic/Line.module.css'

const Line: React.FC = () => {
  return (
    <div className={style.cssChart} id={style.figure}>
      <ul className={style.lineChart}>
        <li className={style.score1}>
          <div className={style.lineSegment} id={style.line0}></div>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line1}></div>
        </li>
        <li className={style.score2}>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line2}></div>
        </li>
        <li className={style.score3}>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line3}></div>
        </li>
        <li className={style.score4}>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line4}></div>
        </li>
        <li className={style.score5}>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line5}></div>
        </li>
        <li className={style.score6}>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line6}></div>
        </li>
        <li className={style.score7}>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line7}></div>
        </li>
        <li className={style.score8}>
          <div className={style.dataPoint}></div>
          <div className={style.lineSegment} id={style.line8}></div>
        </li>
      </ul>
    </div>
  )
}

export { Line }
