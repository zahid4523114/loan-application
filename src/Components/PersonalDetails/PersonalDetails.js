import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-white w-3/4 mx-auto p-8">
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
