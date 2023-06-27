import { AWSData } from "../data/Home"
import BlurLoad from "./BlurLoad"

const AWSCard = ({area}) => {
    return <div className="aws-card">
        <BlurLoad smallImg={area.imageSmall}>
            <img src={area.image} alt={area.title} className="aws-img" />
        </BlurLoad>
            <h3>{area.title}</h3>
    </div>
}
const AWS = () =>{
    return(
    <section className="container aws-section">
        <h1 className="about-text text-underline">{AWSData.title}</h1>
        <ul>
            {AWSData.areas.map((area,index)=>{
             return <li key={index}>
                    <AWSCard area={area} />
                </li>
            })}
        </ul>
    </section>
        )
}
export default AWS