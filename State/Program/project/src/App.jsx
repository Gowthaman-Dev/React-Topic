import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <h1>Student Form - Step 2</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
      >
        <option value="">Select Course</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
      </select>

      <p>
        {formData.name} - {formData.age} - {formData.course}
      </p>
    </>
  );
};

export default App;
