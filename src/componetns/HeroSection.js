import React from 'react'
import {Hero} from "../data/Home.js"
import BlurLoad from './BlurLoad'
const HeroSection = () => {

  return (
    <section className='container hero-section'>
    <h1>
    {Hero.title[0]}<br/>
    {Hero.title[1]}<br/>
    {Hero.title[2]}<br/>
    <span  className='hero-text'>{Hero.title1}</span>
    </h1>
    <BlurLoad smallImg={Hero.imageSmall}>
    <img src={Hero.image} alt="hero" className='hero-img' loading='lazy'/>
    </BlurLoad>
    </section>
  )
}

export default HeroSection