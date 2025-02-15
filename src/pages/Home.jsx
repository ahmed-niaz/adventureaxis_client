import { useLoaderData, useNavigation } from "react-router-dom";
import Hero from "../components/Hero";
import TouristSpots from "../components/TouristSpots";

import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import Countries from "../components/Countries";
import Loader from "../components/Loader";

const Home = () => {
  const landmarks = useLoaderData();
  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loader/>
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
