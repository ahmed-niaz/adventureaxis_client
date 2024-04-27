import { Link } from "react-router-dom";
import { MdMyLocation } from "react-icons/md";

const TouristSpots = ({ spot }) => {
  const {
    _id,
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
  } = spot;
  return (
    <main>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] w-full" src={imageURL} alt={imageURL} />
        </figure>
        <div className="card-body">
          <div className="flex gap-12 items-center">
            <button className="btn glass font-bold bg-green-50 rounded-full hover:bg-black hover:text-white">
              {seasonality}
            </button>
            <button className="btn glass font-bold bg-green-50 rounded-full hover:bg-black hover:text-white">
              {average_cost} <span className="font-bold text-2xl">৳</span>
            </button>
          </div>
          <h2 className="card-title">{spot_name}</h2>
          <p className="text-gray-500">{description}</p>
          <p className="flex items-center gap-4">
            <div className=" bg-green-50 p-2 rounded-xl">
              <MdMyLocation size="30px" />
            </div>

            <span className="font-bold text-xl">{country_name}</span>
            <small className="font-extrabold">{location}</small>
          </p>
          <div className="card-actions justify-center">
            <Link>
              <button className=" bg-[#135D66] glass btn btn-wide text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TouristSpots;
