import { AWSData } from "../data/Home"
import BlurLoad from "./BlurLoad"

const AWSCard = ({area}) => {
    return (
    <div className="aws-card">
        <BlurLoad img={area.image} smallImg={area.imageSmall} alt={area.title} style={`aws-img`} />
        <h4>{area.title}</h4>
    </div>
    )
}
const AWS = () =>{
    return(
    <section className="container aws-section">
        <h1 className="about-text text-underline">{AWSData.title}</h1>
        <ul>
            {AWSData.areas.map((area,index)=>{
             return (
                <li key={index}>
                    <AWSCard area={area} />
                </li>
                )
            })}
        </ul>
    </section>
        )
}
export default AWS