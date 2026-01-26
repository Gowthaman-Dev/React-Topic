import NavBar from "./Components/NavBar"
import UserContext from "./ConText/UserContext"

const App = () => {
  const userName = {
    name:"Rocky Gowtham",
    age:"21",
    course:"Mern Stack Development"
  }
  return (
    <>
    <UserContext.Provider value={userName}>
      <NavBar/>
    </UserContext.Provider>
    </>
  )
}

export default App