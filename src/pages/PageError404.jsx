import React from "react";
import { useNavigate } from "react-router-dom";

const PageError404 = () => {
  const navigate = useNavigate();
  return (
    <section className="max-full-screen flex items-center bg-red-400 dark:bg-gray-900">
      <div className="conatiner mx-auto px-6 py-12 lg:flex lg:items-center lg:gap-12 ">
        {/* left */}

        <div className="w-full lg:w-1/2">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
            404 Error
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            page not found
          </h1>

          <p className="mt-4 text-gray-500 dark:text-gray-900">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex items-center mt-4 gap-5">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 transition"
            >
              Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Go Back To Home
            </button>
          </div>
        </div>

        {/* right */}

        <div className="w-full mt-12 lg:w-1/2 lg:mt-0 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
            alt="404 Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PageError404;
