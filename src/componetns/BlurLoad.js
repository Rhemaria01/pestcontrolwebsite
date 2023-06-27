const BlurLoad = ({children,smallImg}) =>{
return(
    <div className='blur-load' style={{backgroundImage: `url(${smallImg})`}}>
        {children}
    </div>
)
}
export default BlurLoad