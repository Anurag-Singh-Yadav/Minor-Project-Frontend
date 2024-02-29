import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
function Results() {
  const [branch, setBranchData] = useState(null);
  const getBranches = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/get-results/all-branches"
      );
      setBranchData(res.data.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBranches();
  }, []);

  const branchWishAllotment = async (branch) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/get-results/branch-wise-allottment",
        {
          branchCode: branch,
        }
      );
      console.log(res);
      downloadJSONToExcel(res.data.data,`Open_Allottment_${branch }`)
    } catch (e) {
      console.log(e);
    }
  };

  
function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}
  function downloadJSONToExcel(jsonData, filename) {
    // Convert JSON to workbook
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Convert workbook to binary string
    var wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

    // Create a Blob from the binary string
    var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

    // Create a URL from the Blob
    var url = window.URL.createObjectURL(blob);

    // Create a link and click it to initiate the download
    var a = document.createElement("a");
    a.href = url;
    a.download = filename + ".xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Free memory
    window.URL.revokeObjectURL(url);
  }
  return (
    <div className="px-2">
      <div className="text-center text-xl sm:text-2xl font-medium md:text-3xl py-4">
        Download the Allocated Seats{" "}
      </div>
      {branch && (
        <div className="flex flex-wrap gap-5 w-[90vw] md:w-[60vw] mx-auto my-auto min-h-[80vh]">
          {branch.map((item, index) => {
            return (
              <div
                key={index}
                className="flex text-center mx-auto gap-2 px-2 flex-col justify-center items-center h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-t-[2px] rounded-md border-[#0369a0] font-semibold py-2"
              >
                <div>{item.branchCode}</div>
                <div className="flex w-full gap-6 text-sm justify-center items-center">
                  <button
                    className="py-2 px-4 rounded-md bg-[#0369a0] text-white hover:bg-[#0369a0]/80"
                    onClick={() => branchWishAllotment(item.branchCode)}
                  >
                    Outgoing
                  </button>{" "}
                  <Link
                    to={`/results/${branch[index].branchCode}`}
                    className="py-2 px-4 rounded-md bg-[#0369a0] text-white hover:bg-[#0369a0]/80"
                  >
                    Incoming
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Results;
