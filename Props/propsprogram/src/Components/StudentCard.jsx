

const StudentCard = (props = []) => {
  const {name,age,department} = props
  return (
    <>
    <div className="bg-gray-400 text-3xl w-150 ml-98 text-black p-9 text-center mt-2">
      <h1>name : {name}</h1>
      <h1>age : {age}</h1>
      <h1>department : {department}</h1>
    </div>
    </>
  )
}

export default StudentCard