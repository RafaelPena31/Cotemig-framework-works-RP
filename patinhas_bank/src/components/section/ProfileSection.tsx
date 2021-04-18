import { FaRegArrowAltCircleLeft } from '@react-icons/all-files/fa/FaRegArrowAltCircleLeft'
import { FaRegArrowAltCircleRight } from '@react-icons/all-files/fa/FaRegArrowAltCircleRight'
import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import CotemigIMG from '../../assets/company/cotemig.png'
import FrameIMG from '../../assets/company/logo_system.png'
import PlusdinIMG from '../../assets/company/plusdin.png'
import SyngentaIMG from '../../assets/company/syngenta.png'
import cardStyles from '../../styles/components/cards/Profilecard.module.css'
import styles from '../../styles/sections/Profile.module.css'
import ProfileCard from '../cards/ProfileCard'
export default function ProfileSection(): JSX.Element {
  const [slide, setSlide] = useState(0)

  return (
    <section className={styles.section} id="3">
      <h1 className={styles.title}>
        Quem são os responsáveis pelas riquezas do patinhas
      </h1>
      <div className={styles.relativeCardContainer}>
        <Carousel
          activeSlideIndex={slide}
          onRequestChange={setSlide}
          centerMode
          containerProps={{
            style: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '-12px'
            }
          }}
          forwardBtnProps={{
            children: <FaRegArrowAltCircleRight size={40} color="#049492" />,
            style: {
              width: 30,
              height: 30,
              alignSelf: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              zIndex: 1,
              cursor: 'pointer'
            }
          }}
          backwardBtnProps={{
            children: <FaRegArrowAltCircleLeft size={40} color="#049492" />,
            style: {
              width: 30,
              height: 30,
              marginRight: '9px',
              alignSelf: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              zIndex: 1,
              cursor: 'pointer'
            }
          }}
          speed={400}
          itemsToShow={1}
          itemsToScroll={1}
          responsiveProps={[
            { minWidth: 1200, itemsToShow: 3 },
            { maxWidth: 1199, itemsToShow: 2 },
            { maxWidth: 800, itemsToShow: 1 }
          ]}
        >
          <ProfileCard
            name="Rafael Augusto Pena"
            desc="Mobile Developer"
            profile={cardStyles.rafael}
            company={FrameIMG}
            companySecondary={SyngentaIMG}
          />
          <ProfileCard
            name="Fernando Rodrigues"
            desc="Backend Developer"
            profile={cardStyles.fernando}
            company={PlusdinIMG}
          />
          <ProfileCard
            name="Darhos Gabriel"
            desc="Frontend Developer"
            profile={cardStyles.darhos}
            company={CotemigIMG}
          />
          <ProfileCard
            name="Arthur Santiago"
            desc="Frontend Developer"
            profile={cardStyles.arthur}
            company={CotemigIMG}
          />
          <ProfileCard
            name="Vinicius Benites"
            desc="Frontend Developer"
            profile={cardStyles.vinicius}
            company={CotemigIMG}
          />
          <ProfileCard
            name="Caio Fábio"
            desc="Frontend Developer"
            profile={cardStyles.caio}
            company={CotemigIMG}
          />
          <ProfileCard
            name="Artur Padua"
            desc="Frontend Developer"
            profile={cardStyles.artur}
            company={CotemigIMG}
          />
          <ProfileCard
            name="Vitória de Lourdes"
            desc="Frontend Developer"
            profile={cardStyles.vitoria}
            company={CotemigIMG}
          />
        </Carousel>
      </div>
    </section>
  )
}
