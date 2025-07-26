import React from "react";
import { useState } from "react";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./imports";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, UseDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.loginAccount(data);
      if (session) {
        const userData = authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.massage);
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
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-sm text-center text-gray-300 mb-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-300 font-medium hover:underline transition"
          >
            Sign up
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)} className="space-y-5">
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
                  "Email address must be a valid address",
              },
            })}
          />

          <Input
            label="Password"
            placeholder="••••••••"
            type="password"
            className="w-full"
            {...register("password", {
              required: true,
            })}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-full transition"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
