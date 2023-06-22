import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import Logged from "./Logged";
import "./App.css";
import Register from "./Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logged/*" element={<Logged />} />
      </Routes>
    </>
  );
}

export default App;
