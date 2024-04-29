import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import TouristSpots from "../components/TouristSpots";

import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import Countries from "../components/Countries";

const Home = () => {
  const landmarks = useLoaderData();

  return (
    <main>
      <Hero />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {landmarks.slice(0, 6).map((spot) => (
          <TouristSpots key={spot._id} spot={spot} />
        ))}
      </div>
      <Countries />
      {/* why people choose us */}
      <WhyUs />
      {/* testimonials */}
      <Testimonials />
    </main>
  );
};

export default Home;
