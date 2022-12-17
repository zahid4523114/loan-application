import React from "react";
import { Link } from "react-router-dom";

const Tab = () => {
  return (
    <div className=" w-3/4 mx-auto">
      <div
        style={{ backgroundColor: "#7C56FF" }}
        className="mx-auto p-4 tabs rounded-t-lg flex justify-between text-white "
      >
        <Link
          to="/personalDetails"
          className=" tab tab-lifted text-white hover:text-slate-300 font-extrabold text-xl"
        >
          Personal Details
        </Link>
        <Link
          to="/businessDetails"
          className="tab tab-lifted text-white hover:text-slate-300 font-extrabold text-xl  "
        >
          Business Details
        </Link>
        <Link
          to="/loanDetails"
          className="tab tab-lifted text-white hover:text-slate-300 font-extrabold text-xl"
        >
          Loan Details
        </Link>
      </div>
    </div>
  );
};

export default Tab;
