import StudentList from "./Components/StudentList"

const App = () => {
  const doctorDetails = [
    {id:1,name:"Gowtham",age:21,department:"Eyes"},
    {id:2,name:"Monisha",age:24,department:"MBBS"},
    {id:3,name:"Jerlin",age:23,department:"MBBS"}
  ]
  return (
    <>
    <h1 className="bg-black text-4xl text-center text-white p-8 ">Doctor List</h1>
    <StudentList details={doctorDetails}/>
    </>
  )
}

export default App