import React from "react";

const CompanyDetails = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded px-8 py-6 mt-4 justify-center">
        <h2 className="text-3xl font-semibold mb-7 ml-16">Company Name</h2>
        <div className="flex items-center mb-4">
          <img
            src="https://placekitten.com/100/100"
            alt="Company Logo"
            className="rounded-full w-[300px] h-[300px] mr-36 ml-7"
          />
          <p className="text-gray-700 ml-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            ullam repellat assumenda ducimus voluptatibus quisquam voluptas,
            exercitationem adipisci fuga enim harum voluptatum illo cumque eum.
          </p>
        </div>

        <div className="justify-between flex mt-12">
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
              Google
            </a>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">URL</h3>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Glassdoor
            </a>
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Since Year: <b>2004</b>
          </h3>
          <h3 className="text-xl font-semibold mb-4">
            Industry: Product based industry
          </h3>
          <h3 className="text-xl font-semibold mb-4">
            Date of Arrival: <b>2024</b>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;

// URL
// year
// industry
// dov:
