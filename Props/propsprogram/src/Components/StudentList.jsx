import StudentCard from "../Components/StudentCard"

const StudentList = ({details}) => {
  
  return (
    <>
    {details.map((e)=>(
      <StudentCard
      key = {e.id}
      name = {e.name}
      age = {e.age}
      department = {e.department}
      />
    ))}
    </>
  )
}

export default StudentList