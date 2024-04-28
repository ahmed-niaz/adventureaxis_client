import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateInfo = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const [spots, setSpots] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/lists/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
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

    const updateSpots = {
      imageURL,
      spot_name,
      location,
      average_cost,
      travel_time,
      visitor_per_year,
      seasonality,
      country_name,
      email,
      user,
      description,
    };
    console.log(updateSpots);
    fetch(`http://localhost:3000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpots),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Modified Details",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    form.reset();
  };
  return (
    <main>
      <form onSubmit={handleUpdate}>
        <div className="flex lg:flex-row flex-col justify-center items-center  mx-[112px] gap-4">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Image URL</span>
              </div>
              <input
                defaultValue={spots.imageURL}
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
                <span className="label-text font-bold">Tourist Spot Name</span>
              </div>
              <input
                defaultValue={spots.spot_name}
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
                defaultValue={spots.location}
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
                defaultValue={spots.average_cost}
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
                defaultValue={spots.travel_time}
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
                defaultValue={spots.visitor_per_year}
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
                defaultValue={spots.country_name}
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
                defaultValue={user.email}
                type="text"
                name="email"
                placeholder="Preferable season"
                className="input input-bordered w-full"
                readOnly={user.email ? true : false}
              />
            </label>
          </div>
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">User Name</span>
              </div>
              <input
                defaultValue={user.displayName}
                type="text"
                name="user"
                placeholder="Fixed time schedule"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>
        <div className=" mx-[112px]">
          <div className="w-full">
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Short Description</span>
              </div>
              <input
                defaultValue={spots.description}
                type="text"
                name="description"
                placeholder="Short description about the spot"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            type="submit"
            value="Update Details"
            className="btn glass bg-[#135D66] w-full text-white text-xl mt-6 mb-20"
          />
        </div>
      </form>
    </main>
  );
};

export default UpdateInfo;
