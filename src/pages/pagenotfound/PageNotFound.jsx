import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-[#244d3f]">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-[#244d3f] text-white rounded-lg shadow hover:bg-[#244d3f] transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
