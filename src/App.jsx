import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(14)
  // let counter = 15;
const  addValue = () =>{
  console.log("clicked", counter);
  counter = counter +1;
  if(counter<=22){
  setCounter(counter) }
}   
const removeValue =()=>{
  setCounter(counter-1)
}

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>

    </>
  )
}

export default App
