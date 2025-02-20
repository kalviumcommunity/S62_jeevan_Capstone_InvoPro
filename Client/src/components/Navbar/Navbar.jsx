import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 py-4">
          <li>
            <NavLink 
              to="/" 
              end
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              end
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/signup" 
              end
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
