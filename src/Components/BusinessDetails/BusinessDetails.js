import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BusinessDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const businessName = data.business;
    const GstNo = data.GstNo;
    if (GstNo.length < 15) {
      return toast.error("GST no must be 15 characters");
    }
    const addressLine1 = data.addressLine1;
    const addressLine2 = data.addressLine2;
    const city = data.city;
    const state = data.state;
    const country = data.country;
    const zipCode = data.zipCode;

    const businessInformation = {
      tab: "businessInformation",
      businessName,
      GstNo,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      country,
    };
    //send data to db
    fetch(`https://users-bank-info-server.vercel.app/businessDetail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(businessInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Business details added successfully");
          navigate("/loanDetails");
        }
      });
  };

  return (
    <div className="bg-white w-3/4 mx-auto p-8">
      <p className="font-bold text-xl">Business Information</p>
      <hr className="mb-6" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <div className="w-1/2">
            <label htmlFor="business " className="font-bold">
              Business Name
            </label>
            <br />
            <input
              required
              {...register("business", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
          <div className="w-1/2 ml-3">
            <label htmlFor="GstNo" className="font-bold">
              GST No
            </label>
            <br />
            <input
              {...register("GstNo", {
                required: "GST  is required!",
              })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div className="w-1/2">
            <label htmlFor="addressLine1" className="font-bold">
              Address Line 1
            </label>
            <br />
            <input
              required
              {...register("addressLine1", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
          <div className="w-1/2 ml-3">
            <label htmlFor="addressLine2" className="font-bold">
              Address Line 2
            </label>
            <br />
            <input
              {...register("addressLine2", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div className="w-1/2">
            <label htmlFor="City" className="font-bold">
              City
            </label>
            <br />
            <input
              {...register("city", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
          <div className="w-1/2 ml-3">
            <label htmlFor="State" className="font-bold">
              State
            </label>
            <br />
            <input
              {...register("state", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <label htmlFor="zipCode" className="font-bold">
              ZIP Code
            </label>
            <br />
            <input
              required
              {...register("zipCode", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
          <div className="w-1/2 ml-3">
            <label htmlFor="country" className="font-bold">
              Country
            </label>
            <br />
            <input
              {...register("country", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <button className="btn btn-primary w-1/4 mt-4 rounded-none">
          Next
        </button>
      </form>
    </div>
  );
};

export default BusinessDetails;
