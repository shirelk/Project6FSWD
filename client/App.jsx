import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import Logged from "./Logged";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logged/*" element={<Logged />} />
      </Routes>
    </>
  );
}

export default App;
