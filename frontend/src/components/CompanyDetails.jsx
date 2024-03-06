import React from "react";
// import CompanyCard from "./CompanyCard";
// import Companies from "./Companies/Companies";

const CompanyDetails = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-3xl font-semibold mb-4">Company Name</h2>
        <div className="flex items-center mb-4">
          <img
            src="https://placekitten.com/100/100"
            alt="Company Logo"
            className="rounded-full h-12 w-12 mr-4"
          />
          <p className="text-gray-700">Description of the company goes here.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-700">City, Country</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Website</h3>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.example.com
          </a>
        </div>
      </div>
    </div>
    // <div className="">hi</div>
  );
};

export default CompanyDetails;
