import { Link } from "react-router-dom"
import { FooterData } from "../data/Footer"

import "../css/footer.css"
const Footer = () => {
  const impLinks = FooterData.impLinks;
  const contact = FooterData.contact;
  return (
    <footer className="footer">
        <div className="footer-section">
         <div className="footer-links">
            <h3>{impLinks.heading}</h3>
            <ul>
                {impLinks.links.map((link,index) => {
                    return(
                        <li key={index}><Link to={link.to} ><span>{FooterData.impLinks.icon}</span> {link.link}</Link></li>
                    )
                })}
                <li>{impLinks.footer}</li>
            </ul>
            
         </div>
         <div className="footer-contact">
                {
                  Object.values(contact).map((contactType,index)=>{
                    return(
                      <div key={index}>
                        <span>{contactType.icon}</span>
                        <div >
                          <p>{contactType.heading}</p>
                          {contactType.details.map((detail,index) => {
                            return (
                                <p key={index}>{detail}</p>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })
                }
         </div>
        </div>
        <div className="copyright">
          {FooterData.copyright.text}
        </div>
    </footer>
  )
}

export default Footer