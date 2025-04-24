import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addMultipleValue = () => {
    /**
     * anytime we have to update useState multiple time continuously 
     * in the bellow case it will create batch(in fiber algorithm) and becuse we are doing same work multiple times it will do it only once
     */
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    /**
     * but if we want to update the state multiple times in a row, we can use the functional form of setState.
     * This way, React will batch the updates and apply them all at once, which is more efficient.
     * The functional form of setState takes a function as an argument, which receives the previous state as an argument.
     * This is useful when you need to update the state based on its previous value.
     *---------------------------------------------------------------------------
     * if we want same work multiple times we can pass a callback function to it and the state useState will update it multiple times like bellow
     * setCount((prevCount) => prevCount + 1)
     */
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }
  const addValue = () => {
    setCount(count + 1)
  }
  const removeValue = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>React Tutorial</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add Value</button> <br/>
      <button onClick={addMultipleValue}>Add 3 Value</button> <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
