import { Link } from "react-router-dom";
import { CrossIcon } from "../icons/CrossIcon";
import { Menu } from "../icons/Menu";
import { useState } from "react";
import secondBrainLogo from "../assets/images/BrainIcon.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white rounded-4xl bg-gradient-to-l from-purple-600 to-white-600">
      <div className="flex gap-x-4 items-center">
        <img src={secondBrainLogo} alt="brainLogo" />
        <h1 className="text-purple-600 font-semibold text-2xl">Second Brain</h1>
      </div>

      <nav className="px-4 py-4 md:flex md:justify-end md:gap-x-6 hidden">
        <Link
          className="text-purple-600 text-xl font-semibold px-4 py-2 rounded-4xl bg-white-600 shadow-sm shadow-gray-400"
          to="/signin"
        >
          Sign In
        </Link>
        <Link
          className="text-purple-600 text-xl font-semibold px-4 py-2 rounded-4xl bg-white-600 shadow-sm shadow-gray-400"
          to="/signup"
        >
          Sign Up
        </Link>
      </nav>
      <div
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
        className="md:hidden px-4 py-4 cursor-pointer"
      >
        {isMenuOpen ? <CrossIcon size="lg" /> : <Menu size="lg" />}
      </div>
      {isMenuOpen && (
        <div className="absolute bg-white top-24 w-full flex flex-col gap-y-4">
          <Link
            to="/about"
            className="text-center w-full list-none px-4 py-4 text-purple-600 text-xl font-semibold hover:bg-purple-600 hover:text-white-600 border-b-1 border-white hover:shadow-md"
          >
            About
          </Link>
          <Link
            to="/signin"
            className="text-center w-full list-none px-4 py-4 text-purple-600 text-xl font-semibold hover:bg-purple-600 hover:text-white-600 border-b-1 border-white hover:shadow-md bg-purple-600"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-center w-full list-none px-4 py-4 text-purple-600 text-xl font-semibold hover:bg-purple-600 hover:text-white-600 border-b-1 border-white hover:shadow-md"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};
