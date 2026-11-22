
import { useState } from "react";

function Finance() {

  // Student Finance Data
  const [finance, setFinance] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      className: "Class One",
      status: "Paid",
      amount: 120
    },
    {
      id: 2,
      name: "Ayan Hassan",
      className: "Class Two",
      status: "Unpaid",
      amount: 100
    },
    {
      id: 3,
      name: "Mohamed Yusuf",
      className: "Class Three",
      status: "Paid",
      amount: 150
    },
    {
      id: 4,
      name: "Hodan Omar",
      className: "Class One",
      status: "Unpaid",
      amount: 120
    }
  ]);

  // Form States
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [status, setStatus] = useState("Paid");
  const [amount, setAmount] = useState("");

  // Add Student Fee
  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name,
      className: className,
      status: status,
      amount: Number(amount)
    };

    setFinance([...finance, newStudent]);

    setName("");
    setClassName("");
    setStatus("Paid");
    setAmount("");
  }

  // Calculate Dashboard Data
  const paidStudents = finance.filter(
    (item) => item.status === "Paid"
  ).length;

  const unpaidStudents = finance.filter(
    (item) => item.status === "Unpaid"
  ).length;

  const totalStudents = finance.length;

  const totalPaid = finance
    .filter((item) => item.status === "Paid")
    .reduce((total, item) => total + item.amount, 0);

  return (
    <div className="finance-page">

      <h1>Finance Section</h1>

      {/* Add Student Fee */}

      <div className="finance-form">

        <h2>Add Student Fee</h2>

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
            placeholder="Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            required
          />

          <button type="submit">Add</button>

        </form>

      </div>

      {/* Dashboard Cards */}

      <div className="finance-cards">

        <div className="finance-card green">
          <h3>Paid Students</h3>
          <h2>{paidStudents}</h2>
        </div>

        <div className="finance-card red">
          <h3>Unpaid Students</h3>
          <h2>{unpaidStudents}</h2>
        </div>

        <div className="finance-card blue">
          <h3>Total Students</h3>
          <h2>{totalStudents}</h2>
        </div>

        <div className="finance-card orange">
          <h3>Student Paid</h3>
          <h2>${totalPaid}</h2>
        </div>

      </div>

      {/* Finance List */}

      <div className="finance-list">

        <h2>Finance List</h2>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>

            {finance.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.className}</td>

                <td className={
                  item.status === "Paid" ? "paid" : "unpaid"
                }>
                  {item.status}
                </td>

                <td>${item.amount}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Finance;
