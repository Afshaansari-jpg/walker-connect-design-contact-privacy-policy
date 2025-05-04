
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-walker-primary text-2xl font-bold">Walker Insurance</h1>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-walker-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/privacy-policy" className="text-gray-700 hover:text-walker-primary font-medium transition-colors">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-walker-primary font-medium transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button would go here if implementing a mobile menu */}
          <button className="text-gray-700">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
