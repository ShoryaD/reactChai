import React from "react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        <img
          className="w-full lg:w-1/2 object-cover"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="Terms and Conditions"
        />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            These Terms and Conditions govern your use of our website and services. By using our platform, you agree to comply with these terms.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Website Access</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Access to the website is granted temporarily. We reserve the right to withdraw or amend the services without notice.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            Users are responsible for ensuring that their use of the website complies with all applicable laws and regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
