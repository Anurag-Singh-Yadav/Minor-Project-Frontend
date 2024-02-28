import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentData from "./components/StudentData";
import Results from "./components/Results";
import BranchResutls from "./components/BranchResutls";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<StudentData />} />
        <Route path="/results" element={<Results />}></Route>
        <Route path="/results/:branch" element={<BranchResutls />}></Route>
      </Routes>
    </>
  );
}

export default App;
