import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyCraftCard from "../Components/MyCraftCard";


const MyArtAndCrafts = () => {
   const {user} = useContext(AuthContext);
   const email = user.email
   const crafts = useLoaderData();
   const myLoadingCrafts = crafts.filter(craft=>craft.email === email);
   const [myCrafts,setMyCrafts] = useState(myLoadingCrafts);

  return (
    <div className=" mb-20">
    <h1 className="text-center text-5xl text-gray-400 mb-10 font-extrabold"> My art and craft </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
      {
        myCrafts.map(craft=><MyCraftCard 
          craft={craft}
          myCrafts={myCrafts}
          setMyCrafts={setMyCrafts}
          key={craft._id}></MyCraftCard>)
      }
     </div>
    </div>
  );
};

export default MyArtAndCrafts;