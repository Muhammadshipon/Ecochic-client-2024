import Banner from "../Components/Banner";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import CraftItemCard from "../Components/CraftItemCard";
import CraftCategoryContainer from "../Components/CraftCategoryContainer";

const Home = () => {
  const crafts = useLoaderData();
  console.log(crafts)
  return (
    <div>
      <Banner></Banner>
      
     {/* Craft items section  */}
   <section className="my-24">
    <h1 className="text-center text-5xl text-gray-400 my-10 font-extrabold">Jute And Wooden Crafts</h1>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
   {
      crafts.slice(0,6).map(craft=><CraftItemCard craft={craft} key={craft._id}></CraftItemCard>)
    }
   </div>
   </section>
   

            {/* craft category  */}
      <section className="my-24">
      <h1 className="mx-auto text-center leading-snug max-w-xl text-5xl text-gray-400 my-10 font-extrabold">Choose Your Craft By Category</h1>
      <CraftCategoryContainer></CraftCategoryContainer>
      </section>


      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Home;