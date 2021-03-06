import React from 'react'

const TextInput = ({ label, value, handleChange }) => (
  <div className="input text">
  <label className="text-input-label">{label}</label>
  <input className='input-field' type='text' name={label} value={value} onChange={handleChange}/>
  <br />
  <br />
  </div>
)
export default TextInput
