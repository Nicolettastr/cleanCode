import React from 'react'

const Button = ({
    buttonName,
    className,
    type,
    onClick
}) => {
  return (
    <button onClick={onClick} type={type} className={className}>{buttonName}</button>
  )
}

export default Button