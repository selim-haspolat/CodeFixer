import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useAuthContext();

  console.log(auth);
  console.log(user);

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="block border-0 bg-transparent py-1.5 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 sm:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
        <div
          className="!visible hidden flex-grow basis-[100%] items-center sm:!flex sm:basis-auto"
          id="navbarSupportedContent4"
          data-te-collapse-item
        >
          <Link to="/" className="pr-2 text-xl font-semibold text-white">
            Forum
          </Link>
          <ul
            className="list-style-none mr-auto flex flex-col grow items-center justify-center pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li className="p-2" data-te-nav-item-ref>
              <Link
                to="/"
                className="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                data-te-nav-link-ref
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {!user ? (
            <div className="flex justify-between gap-5">
              <Link
                to="/register"
                className="outline outline-1 outline-white px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="outline outline-1 outline-white px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-colors"
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
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    className="rounded-full w-10 h-10"
                    alt='profile img'
                    loading="lazy"
                  />
                )}
              </button>
              <button
                onClick={handleLogOut}
                className="outline outline-1 outline-white px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
