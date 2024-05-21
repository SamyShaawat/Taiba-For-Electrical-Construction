import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from '/src/images/logo.png';
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleSetActive = (link) => {
    setActive(link);
    setIsOpen(false); // Close the mobile menu when an item is selected
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Taiba Logo" className="h-12 w-auto " />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 relative">
          <Link
            to="/"
            className={`text-gray-700 hover:text-black ${
              active === "/" ? "border-b-2 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/")}
          >
            Home
          </Link>
          <Link
            to="/About-Us"
            className={`text-gray-700 hover:text-black ${
              active === "/About-Us" ? "border-b-2 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/About-Us")}
          >
            About Us
          </Link>
          <Link
            to="/Projects"
            className={`text-gray-700 hover:text-black ${
              active === "/Projects" ? "border-b-2 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/Projects")}
          >
            Projects
          </Link>
          <Link
            to="/Clients"
            className={`text-gray-700 hover:text-black ${
              active === "/Clients" ? "border-b-2 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/Clients")}
          >
            Our Clients
          </Link>
          <Link
            to="/Certificates"
            className={`text-gray-700 hover:text-black ${
              active === "/Certificates" ? "border-b-2 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/Certificates")}
          >
            Certificates
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/Contact-Us"
            className="flex items-center bg-[#242341] text-white px-4 py-2 rounded-2xl hover:bg-[#1e1e2e]"
            onClick={() => handleSetActive("/Contact-Us")}
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
              active === "/" ? "border-l-4 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/")}
          >
            Home
          </Link>
          <Link
            to="/About-Us"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
              active === "/About-Us" ? "border-l-4 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/About-Us")}
          >
            About Us
          </Link>
          <Link
            to="/Projects"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
              active === "/Projects" ? "border-l-4 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/Projects")}
          >
            Projects
          </Link>
          <Link
            to="/Clients"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
              active === "/Clients" ? "border-l-4 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/Clients")}
          >
            Our Clients
          </Link>
          <Link
            to="/Certificates"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
              active === "/Certificates" ? "border-l-4 border-[#242341]" : ""
            }`}
            onClick={() => handleSetActive("/Certificates")}
          >
            Certificates
          </Link>
          <Link
            to="/Contact-Us"
            className="block px-4 py-2 bg-[#242341] text-white hover:bg-[#1e1e2e] flex items-center"
            onClick={() => handleSetActive("/Contact-Us")}
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
