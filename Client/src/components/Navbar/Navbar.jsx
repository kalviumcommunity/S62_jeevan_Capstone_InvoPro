import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-white text-2xl font-bold">InvoPro</h1>
          <div className="flex space-x-6">
            <div>
              <NavLink
                to="/"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/login"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                Login
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/signup"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                Signup
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
