import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Meet Patel", email: "meet@gmail.com" },
    { id: 2, name: "Rahul Sharma", email: "rahul@gmail.com" },
    { id: 3, name: "Priya Shah", email: "priya@gmail.com" },
    { id: 4, name: "Amit Kumar", email: "amit@gmail.com" },
  ]);

  const handleDelete = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <h1>Student Management</h1>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            margin: "auto",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;