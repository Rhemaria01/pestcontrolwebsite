import React,{useContext,  lazy} from 'react'
import HeroSection from '../componetns/HeroSection'
import "../css/home.css"
import CTA from '../componetns/CTA'
import { ModalContext } from '../context/ModalContext'

const Service = lazy(() => import('../componetns/Service'))
const AboutUs = lazy(() => import('../componetns/AboutUs'))
const AWS = lazy(() => import('../componetns/AWS'))

const Homepage = () => {
  const modal = useContext(ModalContext)
  return (
    <main className={`home container ${modal.modalOpen && "blur"}`}>
      <HeroSection />
      <CTA/>
      <AboutUs/>
      <Service />
      <AWS />
    </main>
  )
}

export default Homepage