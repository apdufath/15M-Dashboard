
import { useState } from "react";

function StaffPage() {

  const [staff, setStaff] = useState([]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");

  // Handle Form Submit
  function handleSubmit(e) {
    e.preventDefault();

    const newStaff = {
      id: Date.now(),
      name: name,
      position: position,
      gender: gender,
      phone: phone,
      salary: Number(salary)
    };

    setStaff([...staff, newStaff]);

    setName("");
    setPosition("");
    setGender("");
    setPhone("");
    setSalary("");
  }

  // Calculate Total Staff
  const totalStaff = staff.length;

  // Calculate Total Salary
  const totalSalary = staff.reduce(
    (total, item) => total + item.salary,
    0
  );

  return (
    <div className="staff-page">

      <h1>Staff Management</h1>
      <p>Manage your school staff members</p>

      {/* Dashboard Cards */}

      <div className="staff-cards">

        <div className="staff-card">
          <h3>Total Staff</h3>
          <h2>{totalStaff}</h2>
        </div>

        <div className="staff-card">
          <h3>Total Salary</h3>
          <h2>${totalSalary}</h2>
        </div>

      </div>

      {/* Add Staff Form */}

      <div className="staff-form">

        <h2>Add New Staff</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Staff Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
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

          <input
            type="number"
            placeholder="Monthly Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            min="0"
            required
          />

          <button type="submit">
            Add Staff
          </button>

        </form>

      </div>

      {/* Staff List */}

      <div className="staff-list">

        <h2>Staff List</h2>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>

            {staff.map((item, index) => (

              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>${item.salary}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StaffPage;
