import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../context/ModalContext'
import "../css/nav.css"
import BlurLoad from './BlurLoad'
import { NavData } from '../data/Nav'

const Navbar = () => {


  const modal = useContext(ModalContext);

  const toggleMenu = (e) => {
    const links = document.getElementById("links"); 
    if (links.style.display === "none") {
      links.style.display = "flex";
    } else {
      links.style.display = "none";
    }
  }

  return (
    <nav  className={`container nav ${modal.modalOpen && "blur"}`} role="navigation"> 
    <button className='menu-toggle' id="menu" onClick={e => toggleMenu(e)}>
    <BlurLoad img={NavData.logo} smallImg={NavData.logoSmall} alt={`logo`} style={`logo`} />
    </button>
    <ul className='links' id="links">    
    {NavData.links.slice(0,2).map((link,index) => {
       return (
        <li key={index}>
        <Link to={link.to} >{link.icon}{link.title}</Link>
        </li>
      )
    })}
    {<BlurLoad img={NavData.logo} smallImg={NavData.logoSmall} alt={`logo`} style={`logo small-hide`} /> }
    {NavData.links.slice(2).map((link,index) => {
       return (
        <li key={index}>
        <Link to={link.to} >{link.icon}{link.title}</Link>
        </li>
      )
    })}
    </ul>
     </nav>
  )
}

export default Navbar