import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const AllTouristSpots = () => {
  const landmarks = useLoaderData();

  return (
    <main>
      <div className="container mx-auto flex items-center mt-10 justify-center font-bold text-4xl">You Can Visit</div>
      <div className="container mx-auto gap-8 mt-10">
        {landmarks
          .sort((a, b) => a.average_cost - b.average_cost)
          .map((spot) => (
            <Cards key={spot._id} spot={spot} />
          ))}
      </div>
    </main>
  );
};

export default AllTouristSpots;
