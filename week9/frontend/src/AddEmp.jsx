import { useState } from "react";
function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    salary: "",
  });
  // for controlled input ,Note e.target.value
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // for handling the submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://cautious-meme-5g4gwvgw54pw24vwv-5000.app.github.dev/api/persons",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      if (response.ok) {
        alert("Employee inserted successfully");
        console.log(data);
        // Clear form fields
        setFormData({
          name: "",
          age: "",
          gender: "",
          salary: "",
        });
      } else {
        alert("Failed to insert employee");

        console.error(data);
      }
    } catch (error) {
      alert("Unable to connect to server");

      console.error(error);
    }
  };

  // return the component visual
  return (
    // note on submit calls handleSubmit
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
}
// must export it
export default AddEmployee;
