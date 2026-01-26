import UserContext from './ConText/UserContext'
import NavBar from './Components/NavBar'

const App = () => {
  const username = 'Rocky'
  return (
    <>
    <UserContext.Provider value={username}>
      <NavBar/>
    </UserContext.Provider>
    </>
  )
}

export default App
