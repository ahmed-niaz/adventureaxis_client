import { MdMyLocation } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Cards = ({spot}) => {
    const {
        _id,
        imageURL,
        spot_name,
        location,
        average_cost,
        seasonality,
        country_name,
        description,
      } = spot;
    return (
       <main>
        
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
        description: PropTypes.string.isRequired,
      }).isRequired,
}
export default Cards;