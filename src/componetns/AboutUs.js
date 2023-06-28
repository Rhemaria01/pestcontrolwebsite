import {BsCheckCircleFill} from "react-icons/bs"
import { AboutUS } from "../data/Home"
import BlurLoad from "./BlurLoad"

const AboutUs = () => {
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
        <BlurLoad img={AboutUS.image} smallImg={AboutUS.imageSmall} alt={`about-us`} style={`about-img`} />
        <div className="exp-card">
              <h3>{AboutUS.expYears}</h3>
              <p>{AboutUS.expText}</p>
        </div>
        <div>
            
        </div>
        </div>
    </section>
  )
}

export default AboutUs