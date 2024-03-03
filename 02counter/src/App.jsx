
import { useState } from 'react'
import './App.css'

function App() {
  let[counter,setCounter]=useState(15)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }
  const reduceValue = () => {
    counter = counter - 1
    setCounter(counter)
  }
  //write addValue instead addValue()
  //the second one will executed automatically without clicking hence provide reference only
  return (
    <>
       <h1>chai aur react</h1>
       <h2>counter value: {counter}</h2>
       <button onClick={addValue}>Add {counter}</button><br />
       <button onClick={reduceValue}>Reduce {counter}</button>
       <p>footer:{counter}</p>
    </>
  )
}

export default App
