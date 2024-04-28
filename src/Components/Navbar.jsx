import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const {user,setUser,logOutUser} = useContext(AuthContext);

  const [theme,setTheme] = useState('light');

 useEffect(()=>{
  localStorage.setItem('theme',theme);
  const localTheme = localStorage.getItem('theme');
  document.querySelector('html').setAttribute('data-theme',localTheme)
 },[theme])

  const handleLogOut =()=>{
    logOutUser()
    .then(result=>{
      setUser(result.user)
    })
  }

  const handleToggleTheme = e =>{
   if(e.target.checked){
    setTheme('dark')
   }else{setTheme('light')}
  }
  console.log(theme)
  const links = <>
  {user?<>
    <NavLink to={"/"}><li><a href="">Home</a></li></NavLink>
    <NavLink to={"/add-craft"}><li><a href="">Add Craft Item</a></li></NavLink>
    <NavLink to={"/all-art-and-crafts"}><li><a href="">All Art & Crafts</a></li></NavLink>
    <NavLink to={"/my-art-and-crafts"}><li><a href="">My Art and Crafts</a></li></NavLink>
       </>
     :<>
      <NavLink to={"/"}><li><a href="">Home</a></li></NavLink>
      <NavLink to={"/all-art-and-crafts"}><li><a href="">All Art & Crafts</a></li></NavLink>
     </>
  }
    </>
  
    
  
  
               
  return (
<div className="navbar bg-base-100 my-6">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
   <div className="relative right-6 top-2 md:top-0 md:right-0">
   <a  className="btn btn-ghost font-extrabold text-2xl md:text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">EcoChic</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 text-xl text-green-500 font-bold">
      {links}
    </ul>
  </div>
  <div className="navbar-end">

      {/* theme controller  */}
      <label className="cursor-pointer grid place-items-center relative right-1 md:right-6">
  <input type="checkbox" onChange={handleToggleTheme} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    {
      user? <div className="dropdown dropdown-end md:mr-16" >
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar " data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} >
        <div className="w-14 rounded-full " >          
           <img  src={user?.photoURL} /> 
        </div>
      </div>
      <ul tabIndex={0} className="  bg-slate-800 z-[70] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52">
       
        <li> <Link onClick={handleLogOut} to={"/"} className="justify-between btn w-full  hover:text-yellow-500">log Out</Link></li>
      </ul>
    </div>  : <div>
    <Link to={'/log-in'}><a className="btn bg-green-400 text-white font-bold">Login</a></Link>
   <Link to={'/register'}> <a className="ml-2 btn bg-indigo-500 text-white font-bold">Register</a></Link>
    </div>
    }


    
  </div>
  <Tooltip id="my-tooltip" />
</div>
  );
};

export default Navbar;