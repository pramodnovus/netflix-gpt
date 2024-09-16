import React, { useRef, useState } from "react";
import Header from "./Header";
import Netflix_Logo_PMS from "../assets/images/Netflix_Logo_PMS.png";
import backg from "../assets/images/backg.jpg";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log(email.current.value);
    console.log(password.current.value);
    checkValidateData(email, password);

    const mesesage = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(mesesage);

  };
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={backg} alt="background" />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 bg-black py-12 px-4 mx-auto right-0 left-0 my-36 bg-opacity-80">
          <p className="text-3xl font-bold text-white text-center mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          <input
          ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 text-white"
            />
          )}
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
          {!isSignInForm && (
            <input
              type="Confirm password"
              placeholder="Confirm Password"
              className="p-4 my-4 w-full bg-gray-700 text-white"
            />
          )}
            <p className="text-red-500 font-bold text-center">{errorMessage}</p>
          <button className="py-4 px-8 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {/* Remember Me and Need Help Section */}
          <div className="flex justify-between items-center text-gray-400 mb-4 pd-4">
            <div className="mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 mb-4 pt-2 mt-4"
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Need help?
            </a>
          </div>
          <p
            className="text-gray-400 mb-4 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up now"
              : "Already Registered Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
