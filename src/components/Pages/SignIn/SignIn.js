import React, { useEffect, useState } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase-init";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [authUser, authLoading, authError] = useAuthState(auth);
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  if (user) {
    navigate(from, { replace: true });
    toast.success("successfully logged in", {
      id: "done_google",
    });
  }
  if (error) {
    return toast.error("error happened", {
      id: "error",
    });
  }

  const handleEmail = (e) => {
    // will do validation later
    if (e.target.value) {
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };
  const handlePassword = (e) => {
    // will do validation later
    if (e.target.value) {
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="mt-6 text-center text-4xl">Please Sign In</h1>
      <div className="mx-auto xl:my-10 sm:my-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={handleForm}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              onInput={handleEmail}
              type="email"
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              onInput={handlePassword}
              type="password"
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <Link
              to={"/forget_password"}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            // onClick={handleEmailSignIn}
          >
            Sign in
          </button>
          <button
            type="submit"
            className="
            mt-5
            w-full
            px-6
            py-2.5
            bg-gray-600
            text-white
            font-medium
            text-xs
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            onClick={handleGoogleSignIn}
          >
            {loading ? (
              <p className="text-3xl">Loading...</p>
            ) : (
              <span className="flex items-center justify-center">
                Continue With
                <FcGoogle className="ml-4 text-2xl" />
              </span>
            )}
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not Link member?{" "}
            <Link
              to={"/sign_up"}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
