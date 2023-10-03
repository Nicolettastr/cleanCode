import React from 'react'

const Input = ({
    type,
    inputName,
    placeholder,
    required,
    handleUserPassword,
    userPassword
}) => {

    

  return (
    <>
        <label htmlFor="">{inputName}</label>
        <input type={type} name={inputName} placeholder={placeholder} required={required} value={userPassword} onChange={(event) => handleUserPassword(event)}/>
    </>
  )
}

export default Input