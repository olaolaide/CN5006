import { useState, useEffect } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(
      "https://cautious-meme-5g4gwvgw54pw24vwv-5000.app.github.dev/api/persons",
    )
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>£{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
