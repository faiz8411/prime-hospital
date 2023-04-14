import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-center text-xl">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />
          </div>
          {errors.email && <p className="text-red-700">{errors.email.message}</p>}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "password  is required",
                minLength: {
                  message: "password should be 6 character or more",
                  value: 6,
                },
                maxLength: {
                  message: "password not more than 10 character",
                  value: 10,
                },
              })}
            />
            {errors.password && <p className="text-red-700">{errors.password.message}</p>}
            <p>forget password?</p>
          </div>
          <input className="btn btn-accent w-full mt-4" type="submit" />
          <p>
            New To prime hospital??
            <Link className="text-primary" to="/signup">
              Create Account
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <button className="w-full btn btn-outline">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
