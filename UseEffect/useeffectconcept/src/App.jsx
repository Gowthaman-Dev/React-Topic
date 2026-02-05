import { useEffect, useState } from "react"


const App = () => {

  const [data, setData] = useState(0)

  useEffect(()=>{
    const datachange = ()=>{
      setData(data+1)
      
    }
    datachange()
  },[])

  return (
    <>
      <div className="bg-black text-white text-4xl text-center p-5 mt-2">

        <h1>This IS Data Number :{data} </h1>

      </div>
    </>
  )
}

export default App