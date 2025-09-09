import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100  max-w-6xl mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Home</NavLink></li>
              <li>
                <NavLink to="/listed-books" className={({ isActive }) => isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]"}>Listed Books</NavLink>
              </li>
              <li><NavLink to="/read-to-page" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Pages to Read</NavLink></li>
              <li><NavLink to="/coming-soon" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Up Coming Books</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Contact</NavLink></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-3xl lg:flex "><span className="bg-gradient-to-r bg-300% from-[#23BE0A] to-[#59C6D2] text-transparent bg-clip-text animate-gradient">BookVibe</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Home</NavLink></li>
            <li>
              <NavLink to="/listed-books" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Listed Books</NavLink>
            </li>
            <li><NavLink to="/read-to-page" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Pages to Read</NavLink></li>
            <li><NavLink to="/coming-soon" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Up Coming Books</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? " text-[#23BE0A] border border-[#23BE0A]" : "text-[#131313]")}>Contact</NavLink></li>

          </ul>
        </div>
        <div className="navbar-end ">
          <Link className="btn bg-gradient-to-r from-[#23BE0A] to-[#59C6D2] bg-[length:300%_300%] animate-gradient text-white px-4 py-4 ">Sign In</Link>
        </div>
        <div className=" ml-2">
          <Link className="btn bg-gradient-to-r from-[#59C6D2] to-[#23BE0A] bg-[length:300%_300%] animate-gradient text-white px-4 py-4 ">SignUp</Link>
        </div>
      </div >
    </div >
  );
};

export default NavBar;