import React from "react";

function Home() {
  return (
    <div className="py-3 w-[90vh] mx-auto flex gap-4 flex-col min-h-[60vh] my-auto justify-center items-center sm:w-[70vw] md:w-[50vw]">
      <div className="text-3xl font-bold text-center ">Enter Details </div>
      <div>
        <div className="py-2 font-semibold text-xl">Branch Details</div>
        <input type="file" accept=".xlsx, .xls" />
      </div>
      <div className="py-2 my-2 flex flex-col gap-2">
        <div className="py-2 px-4 rounded-md text-white bg-[#0369a0]">
          Allotcate Seats
        </div>
      </div>
    </div>
  );
}

export default Home;
