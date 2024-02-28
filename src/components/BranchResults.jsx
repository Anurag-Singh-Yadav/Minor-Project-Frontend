import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";

function BranchResults() {
  const { branch } = useParams();
  const [data, setData] = useState([]);

    const getData = async(subject) => {
        try{
            const res = await axios.post('http://localhost:4000/getresults/all-courses',{
                branchCode:branch
            });
            setData(res.data.data);
        }catch(e){
            console.log(e);
        }
    }

    const allotedResultSubjectWise = async(courseCode)=>{
      try{
          const res = await axios.post('https://localhost:4000/getresults/course-wise-allotment',{
            courseCode
          })
          convertToJsonAndDownload(res.data.data);
      }catch(e){
        console.log(e);
      }
    }

    const convertToJsonAndDownload = () => {
        const ws = XLSX.utils.json_to_sheet(data);
    
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    
        const blob = new Blob([excelBuffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        });
    
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "excel_data.xlsx";
    
        document.body.appendChild(link);
    
        link.click();
    
        document.body.removeChild(link);
      };
  return (
    <div className="px-2">
      branch details {branch}
      {subOffer && (
        <div className="flex justify-between items-center flex-wrap">
          {subOffer.map((item, index) => {
            return (
              <div key={index} className="text-center py-2" onClick={()=>{
                allotedResultSubjectWise(item.courseCode);
              }}>
                  {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const subOffer = [
  "sub1",
  "sub2",
  "sub3",
  "sub4",
  "sub5",
  "sub6",
  "sub7",
  "sub8",
  "sub9",
  "sub10",
];

export default BranchResults;
