import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://adventureaxis-server.vercel.app/countries`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <main className="container mx-auto my-24">
      <h2>You Can Visit These Countries</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        {data &&
          data.map((country) => (
            <CountryCard key={country._id} country={country} />
          ))}
      </div>

      <div className="mt-10 text-center text-sm font-bold hover:text-[#165D66] hover:text-xl transition-all">
        <Link to="/add_country_info">Add Country Information</Link>
      </div>
    </main>
  );
};

export default Countries;
