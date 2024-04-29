import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { imageURL, country_name, description } = country;
  return (
    <main>
      <div>
        <div className="card w-full bg-base-100 shadow-xl image-full h-[340px]">
          <figure>
            <img className="w-full" src={imageURL} alt={imageURL} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-extrabold text-4xl">
              {country_name}
            </h2>
            <p className="text-sm font-bold ">{description}</p>
            <div className="card-actions justify-center">
              <Link  className="w-full">
                <button className="btn glass w-full bg-[#165D66] text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryCard;
