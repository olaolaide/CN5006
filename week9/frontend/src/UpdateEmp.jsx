import { useState } from "react";

function UpdateEmployees() {
  const [formData, setFormData] = useState({
    gender: "",
    salary: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://cautious-meme-5g4gwvgw54pw24vwv-5000.app.github.dev/api/update-salary",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(
          `Matched ${data.matchedCount} record(s), Updated 
${data.modifiedCount} record(s)`,
        );

        // Clear fields
        setFormData({
          gender: "",
          salary: "",
        });
      } else {
        setMessage("Update failed");
      }
    } catch (error) {
      console.error(error);

      setMessage("Unable to connect to server");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Employee Salaries</h2>

      <input
        type="text"
        name="gender"
        placeholder="Enter Gender"
        value={formData.gender}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="salary"
        placeholder="Enter New Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <br />
      <br />

      <button type="submit">Update Salaries</button>

      <p>{message}</p>
    </form>
  );
}

export default UpdateEmployees;
