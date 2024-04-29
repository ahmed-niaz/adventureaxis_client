import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import TouristSpots from "../components/TouristSpots";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import person1 from '../assets/icons/perosn1.jpg'
import person2 from '../assets/icons/perosn2.jpg'
import person3 from '../assets/icons/perosn3.jpg'


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
      {/* why people choose us */}
      <div className="container mx-auto">
        <p className="font-extrabold text-4xl text-center text-[#165D66]">
          Why Adventure Axis?
        </p>
        <div className="divider w-9/12 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className=" space-y-2 my-8 py-14 bg-gray-50 rounded-2xl">
            <div className="flex flex-col items-center justify-center text-[#165D66] font-extrabold">
              <span className="text-3xl"> upTo </span>
              <span className="text-9xl">30%</span>
              <span className="text-4xl">discount</span>
            </div>
            <div className="w-9/12 mx-auto">
              <p className="text-center text-gray-700 font-bold">
                For over a years offering the best plans at the best price with
                exclusive discounts.
              </p>
            </div>
          </div>
          <div className=" space-y-2 my-8 py-14 bg-gray-50 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center text-[#165D66] font-extrabold">
              <span className="text-3xl"> over </span>
              <span className="text-8xl">1 Million</span>
              <span className="text-4xl">Reviews</span>
            </div>
            <div className="w-9/12 mx-auto">
              <p className="text-center text-gray-700 font-bold">
                Browse and compare the views of users and safe acertarás.
              </p>
            </div>
          </div>
          <div className=" space-y-2 my-8 py-14 bg-gray-50 rounded-2xl">
            <div className="flex flex-col items-center justify-center text-[#165D66] font-extrabold">
              <span className="text-3xl"> pays </span>
              <span className="text-[90px]">the price + </span>
              <span className="text-4xl">Low</span>
            </div>
            <div className="w-9/12 mx-auto">
              <p className="text-center text-gray-700 font-bold">
                All days Escape at the best price in offers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="bg-gray-50">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-4xl text-center text-[#165D66]">
            Travelers Reviews
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg bg-white shadow-xl p-8 space-y-4">
              <div className="flex gap-8 items-center">
                <div>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={person1} />
                    </div>
                  </div>
                </div>
                <div className="font-bold">
                  <p className="text-2xl">Peter Quil</p>
                  <p className="text-sm">Influencer</p>
                </div>
              </div>
              <p className="font-bold text-sm text-gray-500">
             What truly set, apart was the exceptional service provided by the staff. They went above and beyond to ensure that my stay was enjoyable and memorable, offering personalized recommendations for places to visit and dining options to try
             </p>

              <div className="flex gap-4 justify-end">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalfStroke />
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-white shadow-xl p-8 space-y-4">
              <div className="flex gap-8 items-center">
                <div>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={person2} />
                    </div>
                  </div>
                </div>
                <div className="font-bold">
                  <p className="text-2xl">J.F. primo</p>
                  <p className="text-xl">Marketing Analyst</p>
                </div>
              </div>
              <p className="font-bold text-sm text-gray-500">
             What truly set, apart was the exceptional service provided by the staff. They went above and beyond to ensure that my stay was enjoyable and memorable, offering personalized recommendations for places to visit and dining options to try
             </p>

              <div className="flex gap-4 justify-end">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalfStroke />
                </span>
                <span>
                  <FaStarHalfStroke />
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-white shadow-xl p-8 space-y-4">
              <div className="flex gap-8 items-center">
                <div>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={person3} />
                    </div>
                  </div>
                </div>
                <div className="font-bold">
                  <p className="text-2xl">Ana Clift</p>
                  <p className="text-sm">Designer</p>
                </div>
              </div>
              <div>
             <p className="font-bold text-sm text-gray-500">
             What truly set, apart was the exceptional service provided by the staff. They went above and beyond to ensure that my stay was enjoyable and memorable, offering personalized recommendations for places to visit and dining options to try
             </p>
              </div>

              <div className="flex gap-4 justify-end">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalfStroke />
                </span>
                <span>
                  <FaStarHalfStroke />
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
