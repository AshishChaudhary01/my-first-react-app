import { Outlet, Route, Routes } from "react-router";
import Dashboard from "../../pages/backend/Dashboard";
import Students from "../../pages/backend/Students";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="students" element={<Students />}></Route>
      </Routes>
    </div>
  );
}

export default Main;