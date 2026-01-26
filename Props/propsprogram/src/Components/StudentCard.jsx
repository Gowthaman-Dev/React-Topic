const StudentCard = ({name,age,course}) => {
   
  return (
    <div className="bg-black rounded-3xl text-white text-2xl p-10 text-center">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
};

export default StudentCard;