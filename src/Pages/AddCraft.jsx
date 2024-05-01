import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddCraft = () => {
   const {user} = useContext(AuthContext);
   console.log(user)
  const handleAddItem=e=>{
    e.preventDefault();

    const userName = user.displayName;
    const email = user.email;
    
    console.log(userName,email)

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
    const newItem = {itemName,image,price,rating,processingTime,category,stockStatus,customization,description,userName,email}
    console.log(newItem);

    fetch('http://localhost:5000/crafts',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newItem)
    }).then(res=>res.json())
    .then(data=>{
      console.log(data);
      Swal.fire({
        title: "Item Added Successfully",
        text: "Your new craft item have added Successfully",
        icon: "success"
      });
      form.reset();
    })
  }
  return (
    <div className="flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1000">
    <form onSubmit={handleAddItem} className="md:w-2/3 px-5 mb-10">
        {/* container  */}
        <h1 className="text-3xl font-bold text-center my-5 text-indigo-400">Add Your New Craft Item</h1>
    <div className="flex flex-col md:flex-row  gap-10">
         {/* left side  */}
      <div className="md:w-1/2 space-y-4">
      <div>
    <label className="block mb-2 text-sm">Item Name</label>
    <input required type="text" name="itemName"  placeholder="Item Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Image</label>
    <input required type="text" name="image"  placeholder="Image Url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Price</label>
    <input required type="text" name="price"  placeholder="Price" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Rating</label>
    <input required type="text" name="rating"  placeholder="Rating" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Processing Time</label>
    <input required type="text" name="processingTime"  placeholder="Processing time" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>




      </div>

         {/* right side  */}
      <div className="md:w-1/2 space-y-5 mt-7">

      <select name="category" className="select select-bordered w-full ">
  <option disabled selected>Category</option>
  <option>Wooden Furniture & Sculptures</option>
  <option> Wooden Home Decor</option>
  <option>Wooden Utensils and Kitchenware</option>
  <option>Jute Home Decor</option>
  <option>Jute Kitchenware & utensils</option>
  <option>Jute and wooden jewellery</option>
      </select>
      <select name="stockStatus" className="select select-bordered w-full">
  <option disabled selected>Stock Status</option>
  <option>In Stock</option>
  <option>Made to order</option>
      </select>
      <select name="customization" className="select select-bordered w-full ">
  <option disabled selected>Customization</option>
  <option>Yes</option>
  <option>No</option>
      </select>
<br />
     <div>
      <label htmlFor=""><h3>Short Description</h3></label>
      <textarea name="description"  rows="6" className="w-full border-2 bg-gray-100 mt-2 rounded-xl placeholder:p-1" placeholder="short description..."></textarea>
     </div>
   
      </div>
     
    </div>
    <div className=" my-5">
    <button className="btn w-full btn-info font-bold">Add Item</button>
    </div>
    </form>
    </div>
  );
};

export default AddCraft;