import UserContext from "./ConText/UserContext"
import NavBar from "./Components/NavBar"
const App = () => {
  const username = [
    {id:1,name:"Gowtham",age:21,course:"Mern Stack Development"},
    {id:2,name:"Monisha",age:23,course:"Java Stack Development"},
    {id:1,name:"Jerlin",age:26,course:"Python Stack Development"},
     
  ]
  return (
    <>
    <UserContext.Provider value={username}>
      <NavBar/>
    </UserContext.Provider> 
    </>
  )
}

export default App