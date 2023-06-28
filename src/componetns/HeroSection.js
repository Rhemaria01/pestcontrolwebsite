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
    <BlurLoad img={Hero.image} smallImg={Hero.imageSmall} alt={`hero`} style={`hero-img`} />
    </section>
  )
}

export default HeroSection