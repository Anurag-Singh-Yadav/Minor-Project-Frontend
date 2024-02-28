import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import { FaRegFileExcel } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
function BranchResults() {
  const { branch } = useParams();
  const [data, setData] = useState(null);

  const getData = async (subject) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/get-results/all-courses",
        {
          branchCode: branch,
        }
      );
      setData(res.data.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const allotedResultSubjectWise = async (courseCode) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/get-results/course-wise-allottment",
        {
          courseCode,
        }
      );
      console.log(res);
      downloadJSONToExcel(res.data.data , `Elective_Allottment_${courseCode}`);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData(branch);
  }, []);

  function downloadJSONToExcel(jsonData, filename) {
    // Convert JSON to workbook
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Convert workbook to binary string
    var wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

    // Create a Blob from the binary string
    var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

    // Create a URL from the Blob
    var url = window.URL.createObjectURL(blob);

    // Create a link and click it to initiate the download
    var a = document.createElement('a');
    a.href = url;
    a.download = filename + '.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Free memory
    window.URL.revokeObjectURL(url);
}

function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

  const convertToJsonAndDownload = (data) => {
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
      <div className="text-center text-xl sm:text-2xl font-medium md:text-3xl py-4">
        Download the Alloted Subject-wise Seats{" "}
      </div>

      {data && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-[90vw] md:w-[60vw] mx-auto my-auto min-h-[20vh]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex max-h-[15vh] flex-col gap-3 justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold py-2"
              >
                <span>{item.courseCode}</span>
                <div
                  className="flex justify-center cursor-pointer items-center gap-2"
                  onClick={() => {
                    allotedResultSubjectWise(item.courseCode);
                  }}
                >
                  <FaRegFileExcel color="green" size={30} />
                  <MdOutlineFileDownload size={30} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// const subOffer = [
//   "sub1",
//   "sub2",
//   "sub3",
//   "sub4",
//   "sub5",
//   "sub6",
//   "sub7",
//   "sub8",
//   "sub9",
//   "sub10",
// ];

export default BranchResults;
