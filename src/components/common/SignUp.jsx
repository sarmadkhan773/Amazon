import React from 'react';

const SignUp = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <img src="https://wallpapercave.com/wp/wp7771146.png" alt="" />
      <div className="bg-white p-6 rounded-md shadow-md w-[360px]">
        <h2 className="text-xl font-medium mb-4">Sign in or create account</h2>
        
        <label className="block mb-1 text-sm font-medium" htmlFor="email">
          Enter mobile number or email
        </label>
        <input
          type="text"
          id="email"
          className="w-full border border-gray-400 rounded-sm px-3 py-2 mb-4 focus:outline-none focus:border-yellow-500"
        />

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md text-sm mb-4">
          Continue
        </button>

        <p className="text-xs text-gray-600">
          By continuing, you agree to Amazon's{" "}
          <a href="#" className="text-blue-600">Conditions of Use</a> and{" "}
          <a href="#" className="text-blue-600">Privacy Notice</a>.
        </p>

        <a href="#" className="text-blue-600 text-sm block mt-4">
          Need help?
        </a>
        <hr className="my-4" /><p className="text-sm font-semibold">Buying for work?</p>
        <a href="#" className="text-blue-600 text-sm">
          Create a free business account
        </a>
      </div>
    </div>
  );
};

export default SignUp;
