import React, { useState } from 'react'
import './App.css'
import Form from './components/form/Form'
import Ejercicio2 from './components/Ejercicio_2/Ejercicio2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Form/>
        <Ejercicio2/>
      </div>
    </>
  )
}

export default App
