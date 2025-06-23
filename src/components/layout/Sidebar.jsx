import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/admin/students">Students</NavLink></li>
      <li><NavLink to="/">Logout</NavLink></li>
    </ul>
  );
};

export default Sidebar;