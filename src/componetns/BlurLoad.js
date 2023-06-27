import { useEffect } from "react"
import loadImage from "../utils/loadImage"
const BlurLoad = ({children,smallImg}) =>{
useEffect(() => {
    loadImage()
},[])
    return(
    <div className='blur-load' style={{backgroundImage: `url(${smallImg})`}}>
        {children}
    </div>
)
}
export default BlurLoad