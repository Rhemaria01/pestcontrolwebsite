import React,{useContext,  lazy, Suspense} from 'react'

import "../css/home.css"
import { ModalContext } from '../context/ModalContext'
import Loader from "../componetns/Loader"


const HeroSection = lazy(() => import('../componetns/HeroSection'))
const CTA = lazy(() => import("../componetns/CTA"))
const Service = lazy(() => import('../componetns/Service'))
const AboutUs = lazy(() => import('../componetns/AboutUs'))
const AWS = lazy(() => import('../componetns/AWS'))
const Testinomials = lazy(()=>import('../componetns/Testinomials'))
const Homepage = () => {
  const modal = useContext(ModalContext)
  return (
    <main className={`home container ${modal.modalOpen && "blur"}`}>
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>
      <CTA/>
      <Suspense fallback={<Loader />}>
        <AboutUs/>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Service />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AWS />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Testinomials/>
      </Suspense>

    </main>
  )
}

export default Homepage