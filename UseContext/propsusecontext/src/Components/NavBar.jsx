import { useContext } from "react"
import UserContext from "../ConText/UserContext"

const NavBar = () => {
  const user = useContext(UserContext)
  return (
    <>
    <div>
      <h1>UserName : {user}</h1>
    </div>
    </>
  )
}

export default NavBar
