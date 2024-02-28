import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Results() {
  const [branch,setBranchData] = useState(null);
  const getBranches = async()=>{
    try{
      const res = await axios.get('http://localhost:4000/get-results/all-branches');
      setBranchData(res.data.data);
      console.log(res);
    }catch(e){
      console.log(e);
    }
  }

    useEffect(()=>{
      getBranches();
    },[])

  return (
    <div className="px-2">
      <div className="text-center text-xl sm:text-2xl font-medium md:text-3xl py-4">Download the Allocated Seats </div>
      {branch && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-[90vw] md:w-[60vw] mx-auto my-auto min-h-[80vh]">
          {branch.map((item, index) => {
            return (
              <div key={index} className="flex justify-center items-center min-h-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#0369a0] text-white font-semibold py-2">
                <Link to={`/results/${branch[index].branchCode}`}>
                  {item.branchCode}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}


export default Results;
