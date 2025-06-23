import { Route, Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Dashboard from "../../pages/backend/Dashboard";
import Students from "../../pages/backend/Students";
import Main from "./Main";

const AdminLayout = () => {
  return (
    <main>
      <div className="row header-wrapper">
        <Header />
      </div>
      <div className="row main-container">
        <div className="col sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="col main-wrapper">
          <Main />
        </div>
      </div>
      <div className="row footer-wrapper">
        <Footer />
      </div>
    </main>
  );
}

export default AdminLayout;