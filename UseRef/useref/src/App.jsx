import React, { useEffect, useRef, useState } from 'react'
import Methodone from './components/methodone'

const App = () => {
  const [count,setCount] = useState(0)
  const previousvalue = useRef(0)

  useEffect(()=>{
    previousvalue.current = count
  },[count])

  console.log(previousvalue);
  

  const handleclick =()=>{
    setCount(prev => prev+1)
  }
  return (
    <>
        <div>Previous Value :{previousvalue.current}</div>
    <div>Count :{count}</div>
    <button onClick={handleclick}>Click</button>
    
    </>
  )
}

export default App