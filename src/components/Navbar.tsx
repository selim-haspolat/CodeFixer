import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const { user, logOut } = useAuthContext();

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-black text-white h-16 flex items-center justify-between px-6">
        <div>
          <button
            onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
            className={`block border-0 bg-transparent py-1.5 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 sm:hidden ${
              showHamburgerMenu && "rotate-180"
            } transition-transform duration-300`}
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <Link to="/" className="hidden sm:block pr-2 text-xl font-semibold">
            CodeFixer
          </Link>
        </div>
        <ul className="sm:flex justify-center items-center hidden ">
          <li className="p-2">
            <Link
              to="/coding-problems"
              className="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            >
              Coding Problems
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/faq"
              className="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            >
              FAQ
            </Link>
          </li>
        </ul>
        {!user ? (
          <div className="flex justify-between gap-5">
            <Link
              to="/register"
              className="outline outline-1 outline-white px-3 py-1 rounded hover:bg-white hover:text-black transition-colors"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="outline outline-1 outline-white px-3 py-1 rounded hover:bg-white hover:text-black transition-colors"
            >
              Login
            </Link>
          </div>
        ) : (
          <div
            className="
        flex gap-5 items-center"
          >
            <span className="text-white">{user.displayName}</span>
            <button
              onClick={() => navigate("/profile")}
              className={`hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none`}
              id="dropdownMenuButton2"
            >
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  className="rounded-full w-10 h-10"
                  alt="profile img"
                  loading="lazy"
                />
              )}
            </button>
            <button
              onClick={handleLogOut}
              className="outline outline-1 outline-white px-3 py-1 rounded hover:bg-white hover:text-black transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
      <ul
        className={`absolute bg-black w-full top-16 flex flex-col gap-3 ${
          showHamburgerMenu ? "h-28 px-6 pb-3" : "h-0"
        } sm:h-0 sm:pb-0 sm:px-0 duration-300 transition-all overflow-hidden z-10`}
      >
        <li>
          <Link
            to="/"
            className={`text-white disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 opacity-0 duration-500 pr-2 text-xl font-semibold ${
              showHamburgerMenu && "!opacity-100"
            }`}
          >
            CodeFixer
          </Link>
        </li>
        <li>
          <Link
            to="/coding-problems"
            className={`text-white disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 opacity-0 duration-500 ${
              showHamburgerMenu && "!opacity-100"
            }`}
          >
            Coding Problems
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            className={`text-white disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 opacity-0 duration-500 ${
              showHamburgerMenu && "!opacity-100"
            }`}
          >
            FAQ
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
