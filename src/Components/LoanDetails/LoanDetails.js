import { data } from "autoprefixer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoanDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [activeButton, setaActiveButton] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const applyingAs = data.applying;
    const loanAmount = data.loanAmount;
    const interestRate = data.interestRate;
    const loanTenure = data.loanTenure;
    const loanReason = data.loanReason;

    const loanInformation = {
      tab: "loanInformation",
      applyingAs,
      loanAmount,
      interestRate,
      loanTenure,
      loanReason,
    };
    //send data to db
    fetch(`https://users-bank-info-server.vercel.app/loanDetail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loanInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Application submitted successfully");
          navigate("/submittedApplication");
        }
      });
  };

  return (
    <div className="bg-white w-3/4 mx-auto p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="font-bold text-xl">Loan Information</p>
        <hr className="mb-6" />
        <p className="font-bold text-xl mb-2">Applying as</p>
        <input
          {...register("applying", { required: true })}
          className="mr-2"
          value="Sole Proprietor"
          id="Sole Proprietor"
          type="radio"
        />
        <label for="Sole Proprietor">Sole Proprietor</label>
        <br />
        <input
          {...register("applying", { required: true })}
          className="mr-2"
          id="Partnership"
          value="Partnership"
          type="radio"
        />
        <label for="Partnership">Partnership</label>
        <br />
        <input
          {...register("applying", { required: true })}
          className="mr-2"
          id="Corporation"
          value="Corporation"
          type="radio"
        />
        <label for="Corporation">Corporation</label>
        <div className="my-4">
          <label className="font-bold" htmlFor="">
            Loan Amount
          </label>
          <input
            {...register("loanAmount", { required: true })}
            type="number"
            placeholder=""
            className="input input-bordered w-full"
          />
        </div>
        {/*  */}
        <div className="my-4">
          <label className="font-bold" htmlFor="">
            Interest Rate
          </label>
          <input
            {...register("interestRate", { required: true })}
            type="number"
            placeholder=""
            className="input input-bordered w-full"
          />
        </div>
        <div className="my-4">
          <label className="font-bold" htmlFor="">
            Loan Tenure
          </label>
          <input
            {...register("loanTenure", { required: true })}
            type="number"
            placeholder=""
            className="input input-bordered w-full"
          />
        </div>
        {/*statement  */}
        <div>
          <label className="font-bold" htmlFor="">
            Does the borrower have an up to date assets and liabilities
            statement?
          </label>
          <br />
          <input
            className="mr-2"
            name="statement"
            id="statement"
            type="radio"
          />
          <label for="statement">Yes</label>
          <br />
          <input
            className="mr-2"
            name="statement"
            id="statement"
            type="radio"
          />
          <label for="statement">No</label>
        </div>
        <div className="my-4">
          <label className="font-bold" htmlFor="">
            Have you previously been financed?
          </label>
          <br />
          <input className="mr-2" name="financed" id="financed" type="radio" />
          <label for="financed">Yes</label>
          <br />
          <input className="mr-2" name="financed" id="financed" type="radio" />
          <label for="financed">No</label>
        </div>
        {/* Loan Reason */}
        <p className="font-bold">Loan Reason</p>
        <input
          type="checkbox"
          {...register("loanReason", { required: true })}
          id=""
          value="Construction"
        />{" "}
        Construction
        <br />
        <input
          type="checkbox"
          {...register("loanReason", { required: true })}
          id=""
          value="Asset Purchase"
        />{" "}
        Asset Purchase
        <br />
        <input
          type="checkbox"
          {...register("loanReason", { required: true })}
          id=""
          value="Refinancing"
        />{" "}
        Refinancing
        <br />
        <input
          type="checkbox"
          {...register("loanReason", { required: true })}
          id=""
          value="Other"
        />{" "}
        Other
        {/*  */}
        <p className="my-5">
          The information provided in this application shall not be shared to
          anyone else and is kept <br /> confidential
        </p>
        <input
          onClick={() => setaActiveButton(true)}
          type="checkbox"
          name=""
          id=""
        />{" "}
        I agree that the information herein are true and correct
        {activeButton && (
          <button ac className="btn btn-primary block rounded-none my-4">
            Submit Application Form
          </button>
        )}
      </form>
    </div>
  );
};

export default LoanDetails;
