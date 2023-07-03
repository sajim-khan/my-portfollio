const Navbar = () => {
  return (
    <div className="navbar bg-[#162946] text-white ">
      <div className="navbar-start">
        <div className="dropdown text-white">
          <label tabIndex={0} className=" lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black hover:bg-none"
          >
            <li>
              <a className="hover:text-white" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="hover:text-white" href="#skill">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#project">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a className="ps-10 font-bold normal-case text-xl text-white">
          SH <span className="text-cyan-400">Sajim</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1 hover:text-white hover:bg-none text-white">
          <li>
            <a className="hover:text-white" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="hover:text-white" href="#skill">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#project">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-cyan-500 hover:bg-indigo-500" href="#contact">
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
