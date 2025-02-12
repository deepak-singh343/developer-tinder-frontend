import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="navbar bg-base-100 text-black">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl ">DevelopersTinder</a>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}
        {user && (
          <div className="flex justify-center gap-5 items-center">
            <div className="font-medium">Welcome {user.firstName}</div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
