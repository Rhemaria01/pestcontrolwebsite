import React from 'react'

const InputField = ({placeholder="",type,value,handleChange,handleClick}) => {

    
    let name = placeholder === "Type of Service"? "tos": placeholder.toLowerCase()
    return (
        <>
       { type==="button"?
        <input 
        type={type} 
        onClick={e => handleClick(e)}  
        className="input-field input-button" 
        value={value} />
        :
        <div id={placeholder}>
        <input 
        type={type} 
        onChange={e=>handleChange(name,e.target.value)}  
        className="input-field" 
        placeholder={placeholder} 
        value={value} />
        <br/>
        <span className='error-text'></span>
        </div>}
        </>
        )
    }
export default InputField