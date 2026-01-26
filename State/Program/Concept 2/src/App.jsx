import { useState } from "react"

const App = () => {
  const [data,setData] = useState('')
  const handlechange = (e)=>{
      const comingdata = e.target.value 
      setData(comingdata)
  }
  return (
    <>
    <div>
      <h1>Student List</h1>
      <div>
        <input type="text" placeholder="Enter Text" value={data} onChange={handlechange} />

      </div>
      <div style={{marginTop:"18px"}}>Show The Data : {data}</div>
    </div>
    </>
  )
}

export default App
