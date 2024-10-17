import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        <img
          className="w-full lg:w-1/2 object-cover"
          src="https://i.ibb.co/5BCcDYB/Remote2.png"
          alt="Privacy Policy"
        />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Your privacy is critically important to us. This Privacy Policy explains what information we collect, how we use it, and how we safeguard your data.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We collect various types of data to improve your experience on our platform, including personal data and usage data.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Data</h2>
          <p className="text-gray-700 leading-relaxed">
            We use your data to provide a personalized experience, improve our services, and communicate with you.
          </p>
        </div>
      </div>
    </div>
  );
}