
import { useState } from "react";

function StudentsPage() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ahmed Ali", className: "Form 1", gender: "Male", phone: "0631234567" },
    { id: 2, name: "Amina Hassan", className: "Form 2", gender: "Female", phone: "0637654321" },
  ]);

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      className,
      gender,
      phone,
    };

    setStudents([...students, newStudent]);

    setName("");
    setClassName("");
    setGender("");
    setPhone("");
  }

  return (
    <div className="students-page">
      <h1>Students Management</h1>
      <p>Manage and view all registered students.</p>

      <div className="students-cards">
        <div className="students-card">
          <h3>Total Students</h3>
          <h2>{students.length}</h2>
        </div>

        <div className="students-card">
          <h3>Male Students</h3>
          <h2>{students.filter((student) => student.gender === "Male").length}</h2>
        </div>

        <div className="students-card">
          <h3>Female Students</h3>
          <h2>{students.filter((student) => student.gender === "Female").length}</h2>
        </div>
      </div>

      <form className="students-form" onSubmit={handleSubmit}>
        <h2>Add New Student</h2>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Add Student</button>
      </form>

      <div className="students-list">
        <h2>Students List</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>{student.gender}</td>
                <td>{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsPage;
