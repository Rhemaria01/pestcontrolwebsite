import { useState,useEffect } from "react"
import loadImage from "../utils/loadImage"

import "../css/serviceCard.css"
import BlurLoad from "./BlurLoad"
const ServiceCard = ({info}) => {
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    loadImage();
  })

  return (
    <>
    {open ? <>
      <div className="service-card-full" onClick={()=>setOpen(!open)}>
        <img className="service-img-full" src={info.image} alt={info.name}/>
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
      <BlurLoad smallImg={info.imageSmall}>
      <img className="service-img" src={info.image} alt={info.name}/>
      </BlurLoad>
      <h4>{info.name}</h4>
    </div>}
    </>
  )
}

export default ServiceCard