import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 backdrop-blur-lg text-white py-2 mt-4">
      <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Dummy Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="text-white hover:text-stone-400 transition duration-300 text-sm">
            About Us
          </a>
          <a href="#" className="text-white hover:text-stone-400 transition duration-300 text-sm">
            Contact Us
          </a>
          <a href="#" className="text-white hover:text-stone-400 transition duration-300 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-stone-400 transition duration-300 text-sm">
            Terms of Service
          </a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          {/* Add your social media icons here */}
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-gray-400 mt-2">
        <p className="text-sm">2025 BetSmart, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;