import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/navigation/Footer'
import { Header } from '../components/navigation/Header'
import { FirstSection } from '../components/section/FirstSection'
import { FourthSection } from '../components/section/FourthSection'
import ProfileSection from '../components/section/ProfileSection'
import { SecondSection } from '../components/section/SecondSection'
import ThirdSection from '../components/section/ThirdSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patinhas Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ProfileSection />
      <FourthSection />
      <Footer />
    </>
  )
}
