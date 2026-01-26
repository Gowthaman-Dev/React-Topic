import StudentList from "./Components/StudentList";


const App = () => {
  const students = [
    { id: 1, name: "Gowtham", age: 22, course: "React" },
    { id: 2, name: "Arun", age: 21, course: "Angular" },
    { id: 3, name: "Priya", age: 23, course: "Vue" },
  ];

  return (
    <>
    <div className="bg-gray-700 text-white text-2xl p-10 text-center">
      <h1>Student Details</h1>

    
      {/* Passing array of objects as props */}
      <StudentList students={students} />
    </div>
    </>
  );
};

export default App;
