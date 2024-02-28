import { Link } from "react-router-dom";
function Results() {
  return (
    <div className="px-2">
      <div className="text-center py-2">Download the Allocated Seats </div>
      {branch && (
        <div className="flex justify-evenly items-center flex-wrap gap-4">
          {branch.map((item, index) => {
            return (
              <div key={index} className="text-center py-2">
                <Link to={`/results/${branch[index]}`} download>
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
const branch = [
  "CSE",
  "ECE",
  "EEE",
  "MECH",
  "CIVIL",
  "IT",
  "CHEM",
  "BIO",
  "MATH",
  "PHY",
  "ENG",
];

export default Results;
