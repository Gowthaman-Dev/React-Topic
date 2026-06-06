import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/image/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert(res.data.msg);
      console.log(res);
      
      setName("");
      setImage(null);

    } catch (error) {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default App;