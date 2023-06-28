import { useEffect } from "react"
import loadImage from "../utils/loadImage"
const BlurLoad = ({img,smallImg,alt,style}) =>{
useEffect(() => {
    loadImage()
},[])
    return(
    <div className='blur-load' style={{backgroundImage: `url(${smallImg})`}}>
        <img className={style} src={img} alt={alt} loading="lazy" />
    </div>
)
}
export default BlurLoad