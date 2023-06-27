import React,{useContext, Suspense, lazy} from 'react'
import HeroSection from '../componetns/HeroSection'
import "../css/home.css"
import CTA from '../componetns/CTA'
import { ModalContext } from '../context/ModalContext'
import Loader from '../componetns/Loader'
const Service = lazy(() => import('../componetns/Service'))
const AboutUs = lazy(() => import('../componetns/AboutUs'))
const Homepage = () => {
  const modal = useContext(ModalContext)
  return (
    <main className={`home container ${modal.modalOpen && "blur"}`}>
    <HeroSection />
    <CTA/>
    <Suspense fallback={<Loader/>}>
    <AboutUs/>
    </Suspense>
    <Suspense fallback={<Loader/>}>
    <Service />
    </Suspense>
    </main>
  )
}

export default Homepage