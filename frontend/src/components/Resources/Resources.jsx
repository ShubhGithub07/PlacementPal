// ResourcesPage.js
import React from "react";
import {
  FaUniversity,
  FaBriefcase,
  FaUsers,
  FaFileAlt,
  FaUserFriends,
} from "react-icons/fa";

const Resources = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <section className="mb-10 bg-blue-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          <FaUniversity className="inline mr-2" /> Career Services Centers
        </h2>
        <p>
          Many universities and educational institutions have career services
          centers that provide resources, job listings, and guidance for
          students seeking placement.
        </p>
      </section>

      <section className="mb-10 bg-green-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          <FaBriefcase className="inline mr-2" /> Online Job Portals
        </h2>
        <p>
          Websites like{" "}
          <a
            href="https://www.linkedin.com/"
            className="text-yellow-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://www.indeed.com/"
            className="text-yellow-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indeed
          </a>
          , and{" "}
          <a
            href="https://www.glassdoor.com/"
            className="text-yellow-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glassdoor
          </a>{" "}
          are valuable resources for job seekers. Create a professional profile
          and explore job opportunities.
        </p>
      </section>

      <section className="mb-10 bg-purple-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          <FaUsers className="inline mr-2" /> Networking Events
        </h2>
        <p>
          Attend career fairs, networking events, and industry conferences to
          connect with professionals and potential employers.
        </p>
      </section>

      <section className="mb-10 bg-orange-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          <FaFileAlt className="inline mr-2" /> Resume and Interview Tips
        </h2>
        <p>
          Numerous online platforms provide tips and guidance on creating
          effective resumes and preparing for interviews. Consider platforms
          like{" "}
          <a
            href="https://www.linkedin.com/learning/"
            className="text-yellow-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Learning
          </a>
          ,{" "}
          <a
            href="https://www.udemy.com/"
            className="text-yellow-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Udemy
          </a>
          , or dedicated career advice websites.
        </p>
      </section>

      <section className="bg-indigo-500 text-white p-6 rounded-lg mb-7">
        <h2 className="text-2xl font-semibold mb-4">
          <FaUserFriends className="inline mr-2" /> Professional Associations
        </h2>
        <p>
          Joining professional associations related to your field can provide
          access to valuable resources and networking opportunities.
        </p>
      </section>
    </div>
  );
};

export default Resources;
