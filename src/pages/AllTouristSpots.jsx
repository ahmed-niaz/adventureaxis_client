import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const AllTouristSpots = () => {
  const landmarks = useLoaderData();
  return (
    <main>
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {landmarks.map((spot) => (
          <Cards key={spot._id} spot={spot} />
        ))}
      </div>
    </main>
  );
};

export default AllTouristSpots;
