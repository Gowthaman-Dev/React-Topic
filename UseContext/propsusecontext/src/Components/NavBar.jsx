import {useContext} from "react" 
import UserContext from "../ConText/UserContext"

const NavBar = () => {
  const user = useContext(UserContext)
  
  return (
    <>
    <div className="bg-black mt-30 text-white p-5 text-3xl text-center">
      {user.map((e)=>(
        <div className="bg-white text-black p-2" key={e.id}>
          name : {e.name}
          age : {e.age}
          course : {e.course}
        </div>
      ))}
      
    </div>
    </>
  )
}

export default NavBar