// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow p-6 bg-gray-50">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        &copy; {new Date().getFullYear()} Kimiru POS. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
