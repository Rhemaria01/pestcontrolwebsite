import { Contacts } from "../data/ContactUs"
import "../css/contact.css"

const ContactCard = ({contact}) =>{  
    return(
        <div className="contact-card">
            <iframe 
            src={contact.map} 
            width="320px" 
            height="320px" 
            style={{border:0, borderRadius: "16px"}} 
            allowFullScreen='true' 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={contact.location}>
            </iframe>
            <h3>{contact.location}</h3>
            <h2><span>{Contacts.phoneIcon}</span> {contact.phone}</h2>
            <h2><span>{Contacts.mailIcon}</span> {contact.email}</h2>
        </div>
    )
}

const ContactUs = () => {
  return (
    <main className='contact-section container'>
        <h2 className='text-underline'>Contact Us</h2>
        <div>
        {Contacts.contacts.map((contact,index) =>{
            return <ContactCard key={index} contact={contact} />
        })}
        </div>
    </main>
  )
}

export default ContactUs