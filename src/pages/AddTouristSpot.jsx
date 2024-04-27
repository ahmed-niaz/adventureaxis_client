import Swal from 'sweetalert2'
const AddTouristSpot = () => {
    const handleAddSpots = e =>{
        e.preventDefault()
        
        const form = e.target;
        const imageURL = form.imageURL.value;
        const spot_name = form.spot_name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const travel_time = form.travel_time.value;
        const visitor_per_year = form.visitor_per_year.value;
        const seasonality = form.seasonality.value;
        const country_name = form.country_name.value;
        const email = form.email.value;
        const user = form.user.value;
        const description = form.description.value;

       const newLandmark = {imageURL,spot_name,location,average_cost,travel_time,visitor_per_year,seasonality,country_name,email,user,description}
       console.log(newLandmark);
       form.reset()

      //  send data to the server
      fetch(`http://localhost:3000/landmarks`,{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(newLandmark)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'User Added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
    }
  return (
    <main>
      <div className=" max-w-[1320px] mx-auto">
        <h2>Add Tourist Spots</h2>
        <p></p>
        <form onSubmit={handleAddSpots}>
          <div className="flex lg:flex-row flex-col justify-center items-center  mx-[112px] gap-4">
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">Image URL</span>
                </div>
                <input
                  type="text"
                  name="imageURL"
                  placeholder="Enter image address"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">
                    Tourist Spot Name
                  </span>
                </div>
                <input
                  type="text"
                  name="spot_name"
                  placeholder="Enter Tourist Spot Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center mx-[112px] gap-4">
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">Location</span>
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter spots location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">Average Cost</span>
                </div>
                <input
                  type="text"
                  name="average_cost"
                  placeholder="Average Cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center mx-[112px] gap-4">
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">Travel Time</span>
                </div>
                <input
                  type="text"
                  name="travel_time"
                  placeholder="Travel Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">Visitor Per Year</span>
                </div>
                <input
                  type="text"
                  name="visitor_per_year"
                  placeholder="Visitor Per Year"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center mx-[112px] gap-4">
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">Seasonality</span>
                </div>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Preferable season"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text  font-bold">Country Name</span>
                </div>
                <input
                  type="text"
                  name="country_name"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center mx-[112px] gap-4">
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">User Email</span>
                </div>
                <input
                  type="text"
                  name="email"
                  placeholder="Preferable season"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">User Name</span>
                </div>
                <input
                  type="text"
                  name="user"
                  placeholder="Fixed time schedule"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" mx-[112px]">
            <div className="w-full">
              <label className="form-control ">
                <div className="label">
                  <span className="label-text font-bold">
                    Short Description
                  </span>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder="Short description about the spot"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <input
              type="submit"
              value="Add Spots"
              className="btn glass bg-[#135D66] w-full text-white text-xl mt-6 mb-20"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddTouristSpot;
