import React,{useEffect} from 'react'
import HeroImg from "../assets/hero.png"
import HeroSmall from "../assets/hero-small.png"
import loadImage from '../utils/loadImage'
import {Hero} from "../data/Home.js"
import BlurLoad from './BlurLoad'
const HeroSection = () => {
  useEffect(()=>{
    loadImage()
  },[])
  return (
    <section className='container hero-section'>
    <h1>
    {Hero.title[0]}<br/>
    {Hero.title[1]}<br/>
    {Hero.title[2]}<br/>
    <span  className='hero-text'>{Hero.title1}</span>
    </h1>
    <BlurLoad smallImg={HeroSmall}>
    <img src={HeroImg} alt="hero" className='hero-img' loading='lazy'/>
    </BlurLoad>
    </section>
  )
}

export default HeroSection