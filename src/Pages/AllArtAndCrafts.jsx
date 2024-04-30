
import { Link, useLoaderData } from "react-router-dom";



const AllArtAndCrafts = () => {
  const allCrafts = useLoaderData();
  


  return (
    <div>
      <h1  className=" text-5xl text-center text-gray-400 font-extrabold my-9"> All Arts and Crafts (<span className="text-green-500 font-bold">{allCrafts.length}</span>)</h1>

      {/* table  */}
      <div className="overflow-x-auto max-w-5xl px-10 mx-auto mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Item Name</th>
              <th>Processing Time</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}



            {
              allCrafts.map(craft=>(

                <tr key={craft._id}>
              
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={craft.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{craft.itemName}</div>
                      <div className="text-sm opacity-50">{craft.category}</div>
                    </div>
                  </div>
                </td>
               
                <td>{craft.processingTime} days</td>

                <td>
                  ${craft.price}
                </td>
                <th>
                <Link to={`/craft-details/${craft._id}`}><button className="btn btn-info btn-xs">details</button></Link>
                </th>
              </tr>
             





              ))
            }
           
           
          </tbody>
         
         

        </table>
      </div>



    </div>
  );
};

export default AllArtAndCrafts;