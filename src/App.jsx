import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentData from "./components/StudentData";
import Results from "./components/Results";
import BranchResults from "./components/BranchResults";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Routes>
        <Route path="/test" element={<StudentData />} />
        <Route path="/results" element={<Results />}></Route>
        <Route path="/results/:branch" element={<BranchResults />}></Route>
      </Routes>
    </>
  );
}

export default App;
