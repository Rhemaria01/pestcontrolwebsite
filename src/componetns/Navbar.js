import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../context/ModalContext'
import Logo from "../assets/logo192.jpeg"
import LogoSmall from "../assets/logo192-small.png"
import "../css/nav.css"
import BlurLoad from './BlurLoad'
import loadImage from '../utils/loadImage'
const Navbar = () => {
  useEffect(()=>{
    loadImage()
  },[])
  const modal = useContext(ModalContext)
  const toggleMenu = (e) => {
    const links = document.getElementById("links"); 
    if (links.style.display === "none") {
      links.style.display = "flex";
    } else {
      links.style.display = "none";
    }
  }
  return (
    <nav className={`container nav ${modal.modalOpen && "blur"}`} role="navigation"> 
    <button className='menu-toggle' id="menu" onClick={e => toggleMenu(e)}>
    <BlurLoad smallImg={LogoSmall}>
    <img src={Logo} alt="logo" className="logo" />
    </BlurLoad>
    </button>
    <div className='links' id="links">    
    <Link to={"/"}  >Home</Link>
    <Link to={"/about-us"} >About Us</Link>
    <BlurLoad smallImg={LogoSmall}>
    <img src={Logo} alt="logo" className="logo small-hide" />
    </BlurLoad>
    <Link to={"/services"} >Services</Link>
    <Link to={"Contact-us"} >Contact Us</Link>
    </div>
     </nav>
  )
}

export default Navbar