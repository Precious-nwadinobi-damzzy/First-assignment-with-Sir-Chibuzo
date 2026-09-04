import react from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AppRoute path="/" element={<Home />} />

      <AppRoute path="/Signup" element={<Signup />} />

      {/* <Home/>
  <Signup/> */}
    </>
  );
}

function AppRoute({ path, element }) {
  return (
    <Routes>
      <Route path={path} element={element} />
    </Routes>
  );
}

export default App;


