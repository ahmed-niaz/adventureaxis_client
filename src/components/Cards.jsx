import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ spot }) => {
  const {
    _id,
    imageURL,
    spot_name,
    location,
    average_cost,
    seasonality,
    country_name,
    visitor_per_year,
  } = spot;
  return (
    <main>
      <main>
        <div className="card card-side p-4 mt-2 mb-8 flex flex-col lg:flex-row w-11/12 lg:w-full mx-auto">
          <figure className="basis-0 lg:basis-3/6  rounded-2xl">
            <img className="w-full" src={imageURL} alt={imageURL} />
          </figure>
          <figure className="basis-11/12 lg:basis-0  rounded-2xl">
            <img className="w-full rounded-2xl " src={imageURL} alt={imageURL} />
          </figure>
          <div className="card-body">
           <div className="flex flex-col items-start justify-center h-full gap-4">
           <h2 className="text-xl lg:text-5xl font-bold lg:font-extrabold">
              {spot_name}
            </h2>
            <h2 className="font-bold text-sm text-gray-400 my-0 mt-4">
              {location}
            </h2>
            <h2 className="font-bold text-3xl ">{country_name}</h2>

            <div className="my-4">
            <p className="text-xl text-gray-400">
              Seasonality: <span className="font-extrabold">{seasonality}</span>
            </p>
            <p className="text-xl text-gray-400">
              Average Cost: <span className="font-extrabold">{average_cost}</span>
            </p>
            <p className="text-xl text-gray-400">
              Visitor Per Year: <span className="font-extrabold">{visitor_per_year}</span>
            </p>
            </div>

            <div className="flex gap-6 items-center flex-col lg:flex-row  w-full">
              <Link
                to={`/details/${_id}`}
                className="btn glass bg-[#165d66] text-white border-none rounded-xl w-full lg:w-[150px]"
              >
                View Details
              </Link>
            </div>
           </div>
          </div>
        </div>
      </main>
    </main>
  );
};
Cards.propTypes = {
  spot: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    spot_name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    average_cost: PropTypes.number.isRequired,
    seasonality: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
    visitor_per_year: PropTypes.number.isRequired,
  }).isRequired,
};
export default Cards;
