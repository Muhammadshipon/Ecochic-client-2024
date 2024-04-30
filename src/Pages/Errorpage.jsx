import { Link } from "react-router-dom";


const Errorpage = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-black">
    
   <div className="text-white  ">
   <h1 className="text-7xl font-bold text-center">404</h1>
   <p className="text-xl">Page Not Found</p>
  <Link to={"/"}> <button className="bg-blue-600 p-4 my-5 rounded-xl text-white">Back to Home</button></Link>
 </div>
 </div>
  );
};

export default Errorpage;