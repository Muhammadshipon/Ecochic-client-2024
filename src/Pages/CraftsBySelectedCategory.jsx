import { useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import CraftItemCard from "../Components/CraftItemCard";
import { Audio } from 'react-loader-spinner'
;

const CraftsBySelectedCategory = () => {
    const [loading,setLoading] = useState(true);
    const craftCategoryManually = useLoaderData();
    const {id} = useParams()
    const selectedCategory = craftCategoryManually.find(craft=>craft._id == id);
    console.log(selectedCategory,id);
    const [allCategory,setAllCategory] =useState([]);
    
    const displayCrafts = allCategory.filter(cat=>cat.category === selectedCategory.category); 

    useEffect(()=>{
       setLoading(true)
      fetch('https://eco-chic-crafts-server.vercel.app/crafts')
      .then(res=>res.json())
      .then(data=>{
        setAllCategory(data);
        setLoading(false);
      })
    },[])

    if(loading){
     return <div className="flex items-center justify-center min-h-screen">
      <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> 
<ScrollRestoration></ScrollRestoration>
     </div> }

    
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-yellow-400">Your Selected Category : <span className="text-gray-400">{selectedCategory.category}</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
     {
      displayCrafts.map(craft=><CraftItemCard key={craft._id} craft={craft}></CraftItemCard>)
     }
    </div>
    <ScrollRestoration></ScrollRestoration>
    
    </div>
  );
};

export default CraftsBySelectedCategory;