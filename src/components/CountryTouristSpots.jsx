import { useLoaderData } from "react-router-dom";
import CountrySpecificCard from "./CountrySpecificCard";

const CountryTouristSpots = () => {
    const countries = useLoaderData();
    return (
        <div className="grid grid-cols-3 container mx-auto">
            {
                countries.map(country => <CountrySpecificCard key={country.country_name} country = {country}/>)
            }
        </div>
    );
};

export default CountryTouristSpots;