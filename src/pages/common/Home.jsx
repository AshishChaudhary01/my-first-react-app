import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <h2>Welcome! This is the Home Page.</h2>
      <ul>
        <li>
          <NavLink to="/contact-us">Click to go to Contact Us page</NavLink>
        </li>
        <li>
          <NavLink to="/admin/dashboard">Click to go to Admin Dashboard page</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Home;