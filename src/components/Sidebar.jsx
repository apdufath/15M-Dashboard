import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>

      <NavLink to="/" className="menu">Home</NavLink>
      <NavLink to="/class" className="menu">Class</NavLink>
      <NavLink to="/students" className="menu">Students</NavLink>
      <NavLink to="/finance" className="menu">Finance</NavLink>
      <NavLink to="/staff" className="menu">Staff</NavLink>
      <NavLink to="/registration" className="menu">Registration</NavLink>
    </aside>
  );
}

export default Sidebar;
