import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const MainLayout = () => {
  return (
<>
<div className="max-w-7xl mx-auto ">
<Navbar></Navbar>

<Outlet></Outlet>

<Footer></Footer>
  
  </div>     
</>
)}

export default MainLayout;