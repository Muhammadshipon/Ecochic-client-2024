import { useLoaderData, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";


const UpdateCrafts = () => {
 
  const navigate = useNavigate();
  const craft = useLoaderData();
  const {_id,itemName,image,price,rating,processingTime,category,stockStatus,customization,description} = craft;


  const handleUpdateCraft=e=>{
    e.preventDefault();

    

    const form = e.target;
    const itemName = form.itemName.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const category = form.category.value;
    const stockStatus = form.stockStatus.value;
    const customization = form.customization.value;
    const description = form.description.value;

    // console.log(itemName,image,price,rating,processingTime,category,stockStatus,customization,description)
    const updatedItem = {itemName,image,price,rating,processingTime,category,stockStatus,customization,description}
   

    fetch(`http://localhost:5000/crafts/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updatedItem)
    }).then(res=>res.json())
    .then(data=>{
      navigate('/');
      console.log(data);
      Swal.fire({
        title: "Item updated Successfully",
        text: "Your craft item have updated Successfully",
        icon: "success"
      });
      
    })
  }
  return (
    <div className="flex justify-center items-center">
    <form onSubmit={handleUpdateCraft} className="md:w-2/3 px-5 mb-10">
        {/* container  */}
        <h1 className="text-3xl font-bold text-center my-5 text-yellow-400">Update Your Craft Item : <span className="text-gray-400">{itemName}</span></h1>
    <div className="flex flex-col md:flex-row  gap-10">
         {/* left side  */}
      <div className="md:w-1/2 space-y-4">
      <div>
    <label className="block mb-2 text-sm">Item Name</label>
    <input defaultValue={itemName} required type="text" name="itemName"  placeholder="Item Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Image</label>
    <input defaultValue={image} required type="text" name="image"  placeholder="Image Url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label  className="block mb-2 text-sm">Price</label>
    <input defaultValue={price} required type="text" name="price"  placeholder="Price" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label  className="block mb-2 text-sm">Rating</label>
    <input defaultValue={rating} required type="text" name="rating"  placeholder="Rating" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Processing Time</label>
    <input defaultValue={processingTime} required type="text" name="processingTime"  placeholder="Processing time" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>




      </div>

         {/* right side  */}
      <div className="md:w-1/2 space-y-5 mt-7">

      <select value={category} name="category" className="select select-bordered w-full ">
  <option disabled selected>Category</option>
  <option>Wooden Furniture & Sculptures</option>
  <option> Wooden Home Decor</option>
  <option>Wooden Utensils and Kitchenware</option>
  <option>Jute Home Decor</option>
  <option>Jute Kitchenware & utensils</option>
  <option>Jute and wooden jewellery</option>
      </select>
      <select value={stockStatus} name="stockStatus" className="select select-bordered w-full">
  <option disabled selected>Stock Status</option>
  <option>In Stock</option>
  <option>Made to order</option>
      </select>
      <select value={customization} name="customization" className="select select-bordered w-full ">
  <option disabled selected>Customization</option>
  <option>Yes</option>
  <option>No</option>
      </select>
<br />
     <div>
      <label htmlFor=""><h3>Short Description</h3></label>
      <textarea value={description} name="description"  rows="6" className="w-full border-2 bg-gray-100 mt-2 rounded-xl placeholder:p-1" placeholder="short description..."></textarea>
     </div>
   
      </div>
     
    </div>
    <div className=" my-5">
    <button className="btn w-full btn-info text-white font-bold ">Update</button>
    </div>
    </form>
    </div>
  );
};

export default UpdateCrafts;