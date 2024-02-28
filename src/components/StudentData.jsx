import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

function StudentData() {
  const [data, setData] = useState([]);
  const [branchData, setBranchData] = useState([]);
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
      console.log(parsedData);
    };
  };

  const addStudentDetails = async(req,res)=>{
    try{

      const response = await axios.post('http://localhost:4000/updates/add-students',{
        students:data
      });

      
      
    }catch(e){
      console.log(e);
    }
  }

  const handleFileUpload2 = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setBranchData(parsedData);
      console.log(parsedData);
    };
  };

  return (
    <div className="flex justify-center min-h-[92vh] items-center">
      <div className="w-fit bg-red-400 px-4 sm:px-8 py-8">
        <div className="text-3xl font-bold text-center ">Enter Details </div>
        <div className="py-3">
          <div className="py-2">Students Preferrance</div>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload1}
          />
        </div>
        <div className="py-3">
          <div className="py-2">Branch Details</div>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload2}
          />
        </div>

        <div>
          <Link to={'/results'} className="text-center py-2 px-4 cursor-pointer ">
            Allot Subject
          </Link>
        </div>

        <div>
          {data.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default StudentData;
