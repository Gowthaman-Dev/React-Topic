import StudentCard from "./StudentCard";

const StudentList = ({students}) => {
   
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
    </div>
  );
};

export default StudentList;
