import axios from "axios";
import React, { useState } from "react";
import * as XLSX from "xlsx";
function Home() {
  const [enablebtn, setEnablebtn] = useState([true, false, false]);

  const [loading,setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [data, setData] = useState([]);
  const handleFileUpload1 = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      setEnablebtn([true, true, false]);
      console.log(parsedData);
    };
  };

  const handleFileUpload2 = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      setEnablebtn([true, true, true]);
      console.log(parsedData);
    };
  };

  const AddBranchDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/updates/overwrite-branch-details",
        {
          branchDetails: data,
        }
      );
      setLoading(false);
      console.log(response);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const AddCourseDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/updates/overwrite-course-details",
        {
          courseDetails: data,
        }
      );
      setLoading(false);
      console.log(response);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

 

  const AllotcateElective = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/updates/allocate-electives"
      );
      console.log(response);
      setLoading(false);
      setShowResult(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="py-3 w-[90vh] mx-auto flex gap-4 flex-col min-h-[60vh] my-auto justify-center items-center sm:w-[70vw] md:w-[50vw]">
      <div className="text-3xl font-bold text-center ">Enter Details </div>
      <div>
        <div className="py-2 font-semibold text-xl">Branch Details</div>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload1} />
      </div>
      <div
        onClick={() => {
          AddBranchDetails();
        }}
        className={`px-4 py-2 cursor-pointer ${loading ? 'cursor-wait' : 'cursor-pointer'} text-white bg-[#0369a0] rounded-md`}
      >
        Add branch details
      </div>
      <div>
        <div className="py-2 font-semibold text-xl">Course Details</div>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload2} />
      </div>
      <div
        onClick={() => {
          AddCourseDetails();
        }}
        className={`px-4 py-2 cursor-pointer ${enablebtn[1] ? "cursor-pointer" : "cursor-not-allowed"} text-white bg-[#0369a0] rounded-md`}
      >
        Add Course details
      </div>
      <div className="py-2 my-2 flex flex-col gap-2">
        <div
          className={`py-2 px-4 rounded-md text-white bg-[#0369a0] ${(enablebtn[0] && enablebtn[1]) ? 'cursor-pointer' : 'cursor-not-allowed'} `}
          onClick={() => AllotcateElective()}
        >
          Allotcate Seats
          {loading && <p>Loading.....</p>}
        </div>
        {showResult && (
          <div
            onClick={() => {
              window.location.href = "/results";
            }}
            className="py-2 px-4 rounded-md text-white bg-[#0369a0] cursor-pointer"
          >
            View Results
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
