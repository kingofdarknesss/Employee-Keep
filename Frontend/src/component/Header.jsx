import React from "react";
import { FaEvernote } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="text-2xl text-white bg-indigo-600 rounded-full p-2">
              <FaEvernote />
            </span>
            <span className="ml-3 text-2xl text-balcl">EmployeeKeeper</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/create"}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Create User
            </Link>
            <Link to={"/"} className="mr-5 hover:text-gray-900  cursor-pointer">
              All User
            </Link>
            {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
