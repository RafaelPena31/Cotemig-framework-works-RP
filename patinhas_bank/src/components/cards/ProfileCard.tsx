import React from 'react'
import styles from '../../styles/components/cards/Profilecard.module.css'

interface CardProps {
  name: string
  desc: string
  company: string
  companySecondary?: string
  profile: string
  isProfile?: boolean
}

export default function ProfileCard({
  name,
  desc,
  company,
  companySecondary,
  profile
}: CardProps): JSX.Element {
  return (
    <div className={styles.cardContent}>
      <div className={profile} />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.textName}>{name}</h1>
          <p className={styles.textDesc}>{desc}</p>
        </div>
        <div className={styles.imgContent}>
          <img src={company} className={styles.companyImg} />
          <img src={companySecondary} className={styles.companyImg2} />
        </div>
      </div>
    </div>
  )
}
