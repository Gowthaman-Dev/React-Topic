import { useEffect, useState } from "react"


const App = () => {

  const [data,setData] = useState(0)
  const [count,setCount] = useState(0)

    useEffect(()=>{
    setData(data +1 )
  })

  

  const handleclick= () =>{

    setCount(prev => prev + 2 )
  }


  

  


  return (
    <>
    <div className="bg-black text-white text-4xl text-center p-5 mt-2">

      <h1 className="bg-black text-white text-4xl text-center p-5 mt-2">Timer {data}</h1>

      <div>Show Count : {count}</div>
      <button onClick={handleclick}>Increse</button>


    </div>
    </>
  )
}

export default App