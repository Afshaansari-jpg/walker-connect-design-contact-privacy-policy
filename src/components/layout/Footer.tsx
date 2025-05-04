
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-walker-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Walker Insurance</h3>
            <p className="text-gray-200">
              Professional insurance services you can trust.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Email: info@walkerinsurance.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Insurance Ave, Suite 200</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {currentYear} Walker Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
