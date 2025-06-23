import { Route, Routes } from "react-router";
import Home from "./common/Home";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default Index;