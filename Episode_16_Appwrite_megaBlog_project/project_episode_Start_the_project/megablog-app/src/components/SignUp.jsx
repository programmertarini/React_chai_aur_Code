import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./imports.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(login(currentUser));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 max-w-md w-full text-white">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2 text-white">
          Create your account
        </h2>
        <p className="text-sm text-center text-gray-300 mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-300 font-medium hover:underline transition"
          >
            Sign in
          </Link>
        </p>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(create)} className="space-y-5">
          <Input
            label="Full Name"
            placeholder="Your full name"
            className="w-full"
            {...register("name", { required: true })}
          />

          <Input
            label="Email"
            placeholder="you@example.com"
            type="email"
            className="w-full"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be valid",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            className="w-full"
            {...register("password", { required: true })}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-full transition"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
