import { useState } from "react";
import * as XLSX from "xlsx";
function StudentData() {
  const [data, setData] = useState([]);
  const [branchData, setBranchData] = useState([]);
  const handleFileUpload = (value) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      if (value) setData(parsedData);
      else setBranchData(parsedData);
      console.log(parsedData);
    };
  };

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
    <div className="flex justify-center min-h-[92vh] items-center">
      <div className="w-fit bg-red-400 px-4 sm:px-8 py-8">
        <div className="text-3xl font-bold text-center ">Enter Details </div>
        <div>
          <div>Students Preferrance</div>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={() => {
              handleFileUpload(1);
            }}
          />
        </div>
        <div>
          <div>Branch Details</div>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={() => {
              handleFileUpload(0);
            }}
          />
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
        <button onClick={convertToJsonAndDownload}>Download Excel</button>
      </div>
    </div>
  );
}

export default StudentData;
