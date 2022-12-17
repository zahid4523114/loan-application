import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SubmittedApplication = () => {
  const application = useLoaderData();
  const { firstName, lastName, age, birthDay, email, phone, fax } =
    application.data[0];

  const {
    businessName,
    GstNo,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    country,
  } = application.data[1];

  const { applyingAs, loanAmount, interestRate, loanTenure, loanReason } =
    application.data[2];

  return (
    <div className="bg-white min-h-screen p-5">
      <h1 className="text-center font-bold text-2xl text-primary">
        Submitted Application
      </h1>
      <div>
        <h1 className="mb-3 font-bold text-xl text-primary">
          Personal information
        </h1>
        <hr />
        <p className="my-2 font-bold">
          <span>First Name: {firstName}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Last Name: {lastName}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Age: {age}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Date of birth: {birthDay}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Email: {email}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Phone: {phone}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Fax: {fax}</span>
        </p>
      </div>
      <div>
        <h1 className="my-3 font-bold text-xl text-primary">
          Business information
        </h1>
        <hr />
        <p className="my-2 font-bold">
          <span>Business name: {businessName}</span>
        </p>
        <p className="my-2 font-bold">
          <span>GST no: {GstNo}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Address line-1: {addressLine1}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Address line-2: {addressLine2}</span>
        </p>
        <p className="my-2 font-bold">
          <span>City: {city}</span>
        </p>
        <p className="my-2 font-bold">
          <span>State:{state}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Country: {country}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Zip code: {zipCode}</span>
        </p>
      </div>
      <div>
        <h1 className="my-3 font-bold text-xl text-primary">
          Loan information
        </h1>
        <hr />
        <p className="my-2 font-bold">
          <span>Applying as: {applyingAs}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Loan amount: {loanAmount}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Interest rate: {interestRate}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Loan Tenure: {loanTenure}</span>
        </p>
        <p className="my-2 font-bold">
          <span>Loan reason: {loanReason}</span>
        </p>
      </div>
    </div>
  );
};

export default SubmittedApplication;
