import { useContext } from "react"
import UserContext from "../ConText/UserContext"


const NavBar = () => {

    const user = useContext(UserContext) 
    console.log(user);
   
    
   
    
  return (
    <>
    <h1 className="bg-yellow-600 text-4xl text-black p-6 text-center ">Welcome : {user.name}</h1>
    <h1 className="bg-yellow-600 text-4xl text-black p-6 text-center ">Age : {user.age}</h1>
    <h1 className="bg-yellow-600 text-4xl text-black p-6 text-center ">Course : {user.course}</h1>
    </>
  )
}

export default NavBar
