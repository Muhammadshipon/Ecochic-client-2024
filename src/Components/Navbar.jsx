import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const links = <>
  
    <NavLink to={"/"}><li><a href="">Home</a></li></NavLink>
    <NavLink to={"/add-craft"}><li><a href="">Add Craft Item</a></li></NavLink>
    <NavLink to={"/all-art-and-crafts"}><li><a href="">All Art & Crafts</a></li></NavLink>
    <NavLink to={"/my-art-and-crafts"}><li><a href="">My Art and Crafts</a></li></NavLink>
  
  
                </>
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost font-extrabold text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">EcoChic</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 text-green-500 font-bold">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/log-in'}><a className="btn bg-green-400 text-white font-bold">Login</a></Link>
   <Link to={'/register'}> <a className="ml-2 btn bg-indigo-500 text-white font-bold">Register</a></Link>
  </div>
</div>
  );
};

export default Navbar;