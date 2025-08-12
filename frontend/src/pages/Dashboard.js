import React from "react";
import './Dashboard.css';


function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Karibu <span className="font-semibold text-blue-600">Kimiru</span> !!!!! Ugukinya!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
