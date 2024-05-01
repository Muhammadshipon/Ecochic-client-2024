import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";


const CraftDetails = () => {
  const crafts = useLoaderData()
  const {id} = useParams();
  const craft = crafts.find(craft=>craft._id==id);
  console.log(craft)
  const {itemName,image,price,rating,processingTime,category,stockStatus,customization,description}=craft;
  return (
    <div className="bg-base-200" data-aos="fade-in"  data-aos-duration="2000">
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-24">
    <img src={image} className="w-full md:w-[40%] md:h-[400px] rounded-lg shadow-2xl" />
    <div className="p-5 ">
      <h1 className="text-5xl font-bold mb-8 text-indigo-600">{itemName}</h1>
      <h1 className="text-2xl font-bold mb-10 text-green-600">{category}</h1>
      <div className="flex justify-between text-sm font-bold mb-5">
      <p>#price: ${price}</p>
      <p>#rating: {rating} ***</p>
      <p>#processing time: {processingTime} days</p>
     
    </div>
    <div className="flex justify-between md:w-[400px] text-sm font-bold">
      <p>#customization: {customization}</p>
      <p>#stock-status: {stockStatus}</p>
    </div>
      <p className="py-6">{description}</p>
      <button className="btn bg-indigo-500 text-white font-bold">Shop Now</button>
    </div>
  </div>
</div>

<ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default CraftDetails;