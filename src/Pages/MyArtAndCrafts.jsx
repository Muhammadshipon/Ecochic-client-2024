import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyCraftCard from "../Components/MyCraftCard";


const MyArtAndCrafts = () => {
   const {user} = useContext(AuthContext);
   const email = user.email;
   const crafts = useLoaderData();
   const myCrafts = crafts.filter(craft=>craft.email === email);
  //  const [myCrafts,setMyCrafts] = useState(myLoadingCrafts);
   const [displayCrafts,setDisplayCrafts] = useState(myCrafts);

  const handleCustomization = input =>{
    if(input === 'Yes'){
     const customizationCrafts = myCrafts.filter(craft=>craft.customization === 'Yes');
     setDisplayCrafts(customizationCrafts);
    }
   else if(input === 'No'){
    const customizationCrafts = myCrafts.filter(craft=>craft.customization==='No');
    setDisplayCrafts(customizationCrafts);
    }
   
  
  } 


  return (
    <div className=" mb-20">
    <h1 className="text-center text-5xl text-gray-400 mb-10 font-extrabold"> My art and craft </h1>
     
    <div className="w-full mb-10 pr-5 text-right">
    <details className="dropdown ">
  <summary className="m-1 btn bg-gray-400 text-white">Customization</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleCustomization('Yes')}><a>Yes</a></li>
    <li onClick={()=>handleCustomization('No')}><a>No</a></li>
  </ul>
</details>
    </div>
     
     
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
      {
        displayCrafts.map(craft=><MyCraftCard 
          craft={craft}
          displayCrafts={displayCrafts}
          setDisplayCrafts={setDisplayCrafts}
          key={craft._id}></MyCraftCard>)
      }
     </div>
    </div>
  );
};

export default MyArtAndCrafts;