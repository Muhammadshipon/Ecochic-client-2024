import { Link } from "react-router-dom";




const CraftItemCard = ({craft}) => {
  const {_id,itemName,image,price,rating,processingTime,category,stockStatus,customization,description} =craft;
  

  return (
    <div>
     <div className=" bg-base-100 shadow-xl rounded-3xl border-2 border-gray-200">
  <figure><img src={image} className="w-full h-[300px] rounded-t-3xl" /></figure>
  <div className="p-6 flex flex-col justify-between ">
  <div className=" h-[200px]">
  <h2 className="card-title text-2xl font-bold text-indigo-500 mb-5">{itemName}</h2>
    <h3 className="mb-3 text-lg font-semibold text-green-500">{category}</h3>
    <div className="flex justify-between text-sm font-bold">
      <p>#price: ${price}</p>
      <p>#processing time: {processingTime} days</p>
     
    </div>
    <div className="flex justify-between text-sm font-bold">
      <p>#customization: {customization}</p>
      <p>#stock-status: {stockStatus}</p>
    </div>
   
  </div>
   
    <div className=" ">
     <Link to={`/craft-details/${_id}`}><button  className="btn bg-yellow-300 text-white font-bold my-6">View Details</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CraftItemCard;