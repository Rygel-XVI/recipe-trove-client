import React from 'react'

const TextareaInput = ({ label, value, handleChange }) => (
  <div className="input textarea">
  <label className="textarea-input-label">{label}</label>
  <textarea className='input-field' name={label} value={value} onChange={handleChange} />
  <br />
  <br />
  </div>
)
export default TextareaInput
