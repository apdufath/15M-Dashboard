
import { useState } from "react";

function RegistrationPage() {

  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [className, setClassName] = useState("");
  const [address, setAddress] = useState("");

  const [students, setStudents] = useState([]);

  // Handle Form Submit
  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name,
      fatherName: fatherName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      phone: phone,
      className: className,
      address: address
    };

    setStudents([...students, newStudent]);

    setName("");
    setFatherName("");
    setGender("");
    setDateOfBirth("");
    setPhone("");
    setClassName("");
    setAddress("");
  }

  return (
    <div className="registration-page">

      <h1>Student Registration</h1>
      <p>Register new students here</p>

      {/* Registration Form */}

      <div className="registration-form">

        <h2>Student Information</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
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
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <select
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            <option value="Class One">Class One</option>
            <option value="Class Two">Class Two</option>
            <option value="Class Three">Class Three</option>
          </select>

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <button type="submit">
            Register Student
          </button>

        </form>

      </div>

      {/* Registered Students */}

      <div className="registered-students">

        <h2>Registered Students</h2>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Class</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => (

              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.fatherName}</td>
                <td>{student.gender}</td>
                <td>{student.phone}</td>
                <td>{student.className}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RegistrationPage;
