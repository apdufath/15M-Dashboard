function Home() {
  return (
    <>
      <h1 className="title">School Dashboard</h1>
      <p className="welcome">Welcome to the School Management System</p>

      <div className="cards">
        <div className="card blue">
          <h3>Students</h3>
          <h2>3</h2>
        </div>
        <div className="card green">
          <h3>Teachers</h3>
          <h2>2</h2>
        </div>
        <div className="card orange">
          <h3>Classes</h3>
          <h2>2</h2>
        </div>
        <div className="card red">
          <h3>Departments</h3>
          <h2>12</h2>
        </div>
      </div> 

      <div className="bottom">
        <div className="box">
          <h2>Attendance</h2>
          <p>Today's student attendance overview.</p>
          <div className="progress">
            <div className="progressBar"></div>
          </div>
          <strong>85% Present</strong>
        </div>

        <div className="box">
          <h2>Upcoming Events</h2>
          <ul>
            <li>Final Exams - June 12</li>
            <li>Sports Competition - June 20</li>
            <li>Graduation Ceremony - July 1</li>
          </ul>
        </div>

        <div className="box">
          <h2>Notifications</h2>
          <ul>
            <li>New student registered</li>
            <li>School meeting tomorrow</li>
            <li>Results uploaded successfully</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
