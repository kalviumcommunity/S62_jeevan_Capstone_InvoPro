import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to HomePage
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-700">
            This is the main content area of the homepage. You can add more
            components and content here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
