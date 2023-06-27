import { Services } from "../data/Home"
import ServiceCard from "./ServiceCard"
import InputField from "./InputField"
import { useNavigate } from "react-router"
const Service = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/services")
  }
  return (
    <section className="ser-section container">
    <h2 className="about-text text-underline">{Services.title}</h2>
    <ul>
      {Services.services.slice(0,4).map((item,index) =>{
        return <li key={index}><ServiceCard info={item}/></li>
      })}    
    </ul>
    <div>
    <InputField type="button" value="More Services" handleClick={handleClick}/>
    </div>
    </section>
  )
}

export default Service