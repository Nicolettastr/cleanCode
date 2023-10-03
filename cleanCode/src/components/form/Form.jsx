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

    const addPasswordPoints = () => {
        if(userPassword.length > 12) {
            setPasswordStrength((prevState) => prevState + 3)
        } else if(userPassword.length >= 9 && userPassword <= 12) {
            setPasswordStrength((prevState) => prevState + 2)
        } else if (userPassword.length >= 7 && userPassword <= 8) {
            setPasswordStrength((prevState) => prevState + 1)
        } else {
            setPasswordStrength((prevState) => prevState + 0)
        }
    }

    const getTotalPasswordPoints = () => {
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

    const handleValidatePassword = (event) => {
        event.preventDefault()

        addPasswordPoints()
        getTotalPasswordPoints()
        
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