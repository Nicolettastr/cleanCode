import React, { useState }  from 'react'
import Input from '../input/Input'
import Button from '../button/Button'

const Form = () => {

    const [userPassword, setUserPassword] = useState('')
    const [passwordStrength, setPasswordStrength] = useState(0)
    const [validatePassword, setValidatePassword] = useState(false)

    const handleUserPassword = (event) => {
        setUserPassword(event.target.value)
    }

    const handleValidatePassword = (event) => {
        event.preventDefault()
        
        if(passwordStrength > 10) {
            console.log('Muy fuerte')
        } else if(passwordStrength >= 8 && passwordStrength <= 9) {
            console.log('Fuerte')
        } else if(passwordStrength >= 6 && passwordStrength <= 7) {
            console.log('Moderada')
        } else if(passwordStrength >= 3 && passwordStrength <= 5) {
            console.log('debil')
        } else {
            console.log('Muy debil')
        }
    }

  return (
    <form action="">
        <Input 
            type={'password'} 
            placeholder={'Password'} 
            inputName={'Password'} 
            required
            handleUserPassword={handleUserPassword}
            userPassword={userPassword} />
        <Button 
            className={'submitButton'}
            buttonName={'Submit'}
            type={'submit'}
            onClick={(event) => handleValidatePassword(event)}
            />
    </form>
  )
}

export default Form