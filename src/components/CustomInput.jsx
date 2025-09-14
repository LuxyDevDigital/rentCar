import React from 'react'

const CustomInput = ({ label, type='text', id, name, placeholder, required=true,textarea=false }) => {
  return (
    <div className='form-input'>
        <label className='input-label' htmlFor={id}>{label}{required && <span className='required'>*</span>}</label>
        {textarea ? (
          <textarea className='input-field textarea' id={id} name={name} placeholder={placeholder} required={required}></textarea>
        ) : (
          <input className='input-field' type={type} id={id} name={name} placeholder={placeholder} required={required}/>
        )}
    </div>
  )
}

export default CustomInput