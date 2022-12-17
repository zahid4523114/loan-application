import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const fax = data.fax;
    const birthDay = data.birthDay;
    const age = data.age;
    const phone = data.phone;

    const personalInformation = {
      tab: "personalInformation",
      firstName,
      lastName,
      age,
      birthDay,
      email,
      phone,
      fax,
    };
    //send data to db
    fetch(`https://users-bank-info-server.vercel.app/personalDetail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personalInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Personal details added successfully");
          navigate("/businessDetails");
        }
      });
  };

  return (
    <div className="bg-white w-3/4 mx-auto  p-8">
      <p className="font-bold text-xl">Personal Information</p>
      <hr className="mb-6" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <div className="w-1/2">
            <label htmlFor="firstName" className="font-bold">
              First Name
            </label>
            <br />
            <input
              required
              {...register("firstName", { required: true })}
              name="firstName"
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
          <div className="w-1/2 ml-3">
            <label htmlFor="lastName" className="font-bold">
              Last Name
            </label>
            <br />
            <input
              {...register("lastName", { required: true })}
              type="text"
              placeholder=""
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="age" className="font-bold">
            Age of Applicant
          </label>
          <br />
          <input
            {...register("age", { required: true })}
            type="number"
            placeholder=""
            className="input input-bordered w-full "
          />
        </div>
        <div className="my-4">
          <label htmlFor="age" className="font-bold">
            Date of Birth of Applicant
          </label>
          <br />
          <input
            {...register("birthDay", { required: true })}
            type="date"
            placeholder=""
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <label htmlFor="email" className="font-bold">
            E-mail of Applicant
          </label>
          <br />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder=""
            className="input input-bordered w-full "
          />
        </div>
        {errors.email && <p className="text-red-600">Email is required...!</p>}
        <div className="my-4">
          <label htmlFor="phone" className="font-bold">
            Mobile Phone number of Applicant
          </label>
          <br />
          <input
            {...register("phone", { required: true })}
            type="number"
            placeholder=""
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <label htmlFor="fax" className="font-bold">
            Fax number of Applicant
          </label>
          <br />
          <input
            {...register("fax", { required: true })}
            type="number"
            placeholder=""
            className="input input-bordered w-full "
          />
        </div>

        <button className="btn btn-primary w-1/4 mt-4 rounded-none">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
