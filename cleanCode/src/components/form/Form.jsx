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

        console.log(userPassword.length)

        if(userPassword.length > 12) {
            setPasswordStrength((prevState) => prevState + 3)
        } else if(userPassword.length >= 9 || userPassword <= 12) {
            setPasswordStrength((prevState) => prevState + 2)
        } else if (userPassword.length >= 7 || userPassword <= 8) {
            setPasswordStrength((prevState) => prevState + 1)
        } else if (passwordStrength <= 6) {
            setPasswordStrength((prevState) => prevState + 0)
        }
    }

    const hasSpecialCharacters = () => {
        const capitalLetters = /[A - Z]/.test(userPassword)
        const lowerCase = /[a - z]/.test(userPassword)
        const characters = /\W/.test(userPassword)
        const numbers = /\d/.test(userPassword)

        if(capitalLetters) {
            setPasswordStrength((prevState) => prevState + 1)
        } else if (capitalLetters && lowerCase) {
            setPasswordStrength((prevState) => prevState + 2)
        } else if (numbers) {
            setPasswordStrength((prevState) => prevState + 1)
        } else if (characters) {
            setPasswordStrength((prevState) => prevState + 2)
        } else if (capitalLetters && lowerCase && numbers && characters) {
            setPasswordStrength((prevState) => prevState + 2)
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
        } else if (passwordStrength <= 2) {
            console.log('Muy debil')
        }
    }

    const handleValidatePassword = (event) => {
        event.preventDefault()

        addPasswordPoints()
        hasSpecialCharacters()
        getTotalPasswordPoints()
        
        console.log(passwordStrength)
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