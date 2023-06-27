import React,{useState,useContext} from 'react'
import InputField from './InputField'
import { ModalContext } from '../context/ModalContext'
import {CallToAction} from "../data/Home"
const CTA = () => {
    const modal = useContext(ModalContext)
    const [formFields,setFormFields] = useState({tos: "", name:"", phone:"", email:""})
    const fieldChange = (fieldName, value) => {
        setFormFields({
            ...formFields,[fieldName]: value
        })
    }
    CallToAction.fields.map((field,index)=>{
    if(index !== 4) 
    field['value'] = Object.values(formFields)[index];
    else field['value'] = "Get Started";
    return null
    })
    const validateName = () => {
        const element = document.getElementById("Name")
        if(/^[a-zA-Z ]{2,30}$/.test(formFields.name) ){
            element.children[0].classList.remove("error")
            element.children[2].innerHTML = "";
            return true
        }
        else{
            element.children[0].classList.add("error")
            element.children[2].innerHTML = CallToAction.fields[1].error
        }
        }
    const validateNumber = () => {
        const element = document.getElementById("Phone")
        if(/^\d{10}$/.test(formFields.phone)){
            element.children[0].classList.remove("error")
            element.children[2].innerHTML = "";
            return true
        }
        else {
            element.children[0].classList.add("error")
            element.children[2].innerHTML = CallToAction.fields[2].error
        }
        
    }
    const validateEmail = () => {
        const element = document.getElementById("Email")
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formFields.email)){
            element.children[0].classList.remove("error")
            element.children[2].innerHTML = "";
            return true
        }
        else {
            
            element.children[0].classList.add("error");
            element.children[2].innerHTML = CallToAction.fields[3].error
        }
    }
    const formSubmit = (e) => {
        if(validateName() && validateNumber() && validateEmail()){
            modal.setMessage(CallToAction.successMessage);
            modal.setModalOpen(true)
            window.scrollTo(0, 0)
            document.body.style.overflow = "hidden"
        }
    }

  return (
    <article className='cta container'>
        <h2 className='home-text '>{CallToAction.title}</h2>
        <form className='cta-form'>
            {CallToAction.fields.map((field,index) =>{
                return <div key={index}>
                <InputField placeholder={field.placeholder} type={field.type} value={field.value}  handleChange={fieldChange} handleClick={formSubmit}/>
                </div> 
                
            })}
        </form>
    </article>
  )
}

export default CTA