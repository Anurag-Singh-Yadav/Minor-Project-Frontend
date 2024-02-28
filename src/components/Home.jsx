import axios from "axios";
import React, { useState } from "react";
import * as XLSX from "xlsx";
function Home() {
  const [data,setData] = useState([]);
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      console.log(parsedData);
    };
  };

  const AddBranchDetails = async()=>{
    try{
      const response = await axios.post('http://localhost:4000/updates/overwrite-branch-details',{
        branchDetails:data
      });

      console.log(response);
    }catch(e){
      console.log(e);
    }
  }


  const AddCourseDetails = async()=>{
    try{
      const response = await axios.post('http://localhost:4000/updates/overwrite-course-details',{
        courseDetails:data
      });
      console.log(response);
    }catch(e){
      console.log(e);
    }
  }

  const [loading , setLoading] = useState(false);

  const AllotcateElective = async()=>{
    setLoading(true);
    try{
      const response = await axios.post('http://localhost:4000/updates/allocate-electives');
      console.log(response);
      setLoading(false);
    }catch(e){
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <div className="py-3 w-[90vh] mx-auto flex gap-4 flex-col min-h-[60vh] my-auto justify-center items-center sm:w-[70vw] md:w-[50vw]">
      <div className="text-3xl font-bold text-center ">Enter Details </div>
      <div>
        <div className="py-2 font-semibold text-xl">Branch Details</div>
        <input type="file" accept=".xlsx, .xls"
        onChange={handleFileUpload} />
      </div>
      <div onClick={()=>{AddBranchDetails()}}>Add branch details</div>
      <div>
        <div className="py-2 font-semibold text-xl">Course Details</div>
        <input type="file" accept=".xlsx, .xls"
        onChange={handleFileUpload} />
      </div>
      <div onClick={()=>{AddCourseDetails()}}>Add Course details</div>
      <div className="py-2 my-2 flex flex-col gap-2">
        <div className="py-2 px-4 rounded-md text-white bg-[#0369a0]" onClick={()=>AllotcateElective()}>
          Allotcate Seats
          {loading && <p>Loading.....</p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
