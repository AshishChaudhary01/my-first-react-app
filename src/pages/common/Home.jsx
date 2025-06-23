import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <h2>Welcome! This is the Home Page.</h2>
      <NavLink to="/admin/dashboard">Click to go to Admin Dashboard</NavLink>
    </>
  );
}

export default Home;