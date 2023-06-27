import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../context/ModalContext'
import "../css/nav.css"
import BlurLoad from './BlurLoad'
import loadImage from '../utils/loadImage'
import { NavData } from '../data/Nav'

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
    <BlurLoad smallImg={NavData.logoSmall}>
    <img src={NavData.logo} alt="logo" className="logo" />
    </BlurLoad>
    </button>
    <div className='links' id="links">    
    {NavData.links.map((link,index) => {
       return (
        
        <>
        {
        index === 2 && <BlurLoad smallImg={NavData.logoSmall}>
         <img src={NavData.logo} alt="logo" className="logo small-hide" />
        </BlurLoad>
        }
        <Link to={link.to} key={index}>{link.icon} {link.title}</Link>
        </>
      )
    })}
    </div>
     </nav>
  )
}

export default Navbar