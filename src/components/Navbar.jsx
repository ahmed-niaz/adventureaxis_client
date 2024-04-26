// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../providers/FirebaseProvider";

const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#344e41] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tourist-spots"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#344e41] bg-none text-sm font-bold text-[#344e41]"
              : "text-sm font-bold hover:"
          }
        >
          All Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-tourist-spots"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#344e41] bg-none text-sm font-bold text-[#344e41]"
              : "text-sm font-bold hover:"
          }
        >
          Add Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/lists"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#344e41] bg-none text-sm font-bold text-[#344e41]"
              : "text-sm font-bold hover:"
          }
        >
          My List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 rounded-xl border-[#344e41] bg-none text-sm font-bold text-[#344e41]"
              : "text-sm font-bold hover:"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <main className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow  rounded-box w-52 z"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-3xl font-jersey text-[#344e41] tracking-wide">
            AdventureAxis
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          ></div>
          Login
        </div>
      </div>
    </main>
  );
};

export default Navbar;
