import { useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import CraftItemCard from "../Components/CraftItemCard";

const CraftsBySelectedCategory = () => {
    const craftCategoryManually = useLoaderData();
    const {id} = useParams()
    const selectedCategory = craftCategoryManually.find(craft=>craft._id == id);
    console.log(selectedCategory,id);
    const [allCategory,setAllCategory] =useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/crafts')
      .then(res=>res.json())
      .then(data=>{
        setAllCategory(data);
      })
    },[])

    const displayCrafts = allCategory.filter(cat=>cat.category === selectedCategory.category);
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