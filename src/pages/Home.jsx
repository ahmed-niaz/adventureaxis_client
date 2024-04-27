import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import TouristSpots from "../components/TouristSpots";

const Home = () => {
    const landmarks = useLoaderData();
    return (
       <main>
        <Hero/>
        <h2>Landmarks {landmarks.length}</h2>
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {
            landmarks.map(spot => <TouristSpots key={spot._id} spot = {spot}/>)
        }
       </div>
       </main>
    );
};

export default Home;