import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";
import Main from "../components/templates/Main";
import Sidebar from "../components/templates/Sidebar";

function Home() {
  return (
    <main>
      <div class="row header-wrapper">
        <Header></Header>
      </div>
      <div class="row main-container">
        <div class="col sidebar-wrapper">
          <Sidebar></Sidebar>
        </div>
        <div class="col main-wrapper">
          <Main></Main>
        </div>
      </div>
      <div class="row footer-wrapper">
        <Footer></Footer>
      </div>
    </main>
  );
}

export default Home;