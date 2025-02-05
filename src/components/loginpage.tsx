"use client"
import React, { useState } from "react";


const LoginPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLoginClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div id="/loginsignup" className="flex items-center justify-center  bg-gray-100">
      <button
        onClick={handleLoginClick}
        className="px-2 justify-center items-center text-black mt-10 -ml-8"
      >
        Login
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex h-screen items-center justify-end bg-black bg-opacity-50">
          <div className="  bg-white p-6 h-screen w-96 rounded shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &#10005;
            </button>
            <h2 className="text-2xl font-semibold mb-4">SIGN IN</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                Username or email address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
