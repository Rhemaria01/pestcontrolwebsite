import about from "../assets/AboutUs.jpg"
import aboutSmall from "../assets/aboutUs-small.jpeg"
import {BsCheckCircleFill} from "react-icons/bs"
import { AboutUS, CallToAction } from "../data/Home"
import loadImage from "../utils/loadImage"
import { useEffect } from "react"
import BlurLoad from "./BlurLoad"

const AboutUs = () => {
    useEffect(()=>{
        loadImage();
    },[])
  return (
    <section className="about-section container">
        <div className="about-left">
        <h2 className="about-text text-underline">{AboutUS.title}</h2>
        <h3 >{AboutUS.heading}</h3>
        <p>{AboutUS.text}</p>
        <ul>
        {AboutUS.checkmarks.map((checkmark,index) => {
          return   <li className="list-items" key={index}>
          <p className="list-text"><span><BsCheckCircleFill /></span> {checkmark}</p>
          </li>
        })}
        </ul>
        </div>
        <div>
        <BlurLoad smallImg={aboutSmall}>
            <img src={about} alt="about-us" className='about-img' loading='lazy'/>
        </BlurLoad>
        <div className="exp-card">
              <h3>{CallToAction.expYears}</h3>
              <p>{CallToAction.expText}</p>
        </div>
        <div>
            
        </div>
        </div>
    </section>
  )
}

export default AboutUs