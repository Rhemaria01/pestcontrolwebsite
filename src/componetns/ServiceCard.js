import { useState } from "react"
import "../css/serviceCard.css"
import BlurLoad from "./BlurLoad"

const ServiceCard = ({info}) => {
  const [open,setOpen] = useState(false);
  return (
    <>
    {open ? <>
      <div className="service-card-full" onClick={()=>setOpen(!open)}>
        <BlurLoad img={info.image} smallImg={info.smallImg} alt={info.name} style={`service-img`} />
      <div className="service-card-info">
        <h4>{info.name}</h4>
        <h3 >{Object.keys(info)[3]} :</h3>
        {
          Object.entries(info.price).map((obj,index) => 
          {return <p key={index}>
            <span>{obj[0]} : </span>{obj[1]}
          </p>})
        }
      </div>
      </div>
    </>
    :
      <div className="service-card" onClick={()=>setOpen(!open)}>
      <BlurLoad img={info.image} smallImg={info.smallImg} alt={info.name} style={`service-img`} />
      <h4>{info.name}</h4>
    </div>}
    </>
  )
}

export default ServiceCard