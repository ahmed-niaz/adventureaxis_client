import { useLoaderData, useNavigation } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { MdEmail, MdOutlineTimeToLeave } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Loader from "../components/Loader";

const Details = () => {
  const landmarks = useLoaderData();
  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loader/>
  const {
    imageURL,
    spot_name,
    location,
    average_cost,
    travel_time,
    visitor_per_year,
    seasonality,
    country_name,
    email,
    user,
    description,
  } = landmarks;
  return (
    <main className="container mx-auto">
      <div
        style={{ backgroundImage: `url(${imageURL})` }}
        className="md:min-h-1.5 lg:min-h-screen bg-cover bg-no-repeat  opacity-80 rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="isolate md:w-[600px] lg:w-[800px] aspect-video rounded-xl bg-white/20 shadow-2xl ring-1 ring-black/5 flex justify-center flex-col space-y-2 px-12">
            <p className="font-extrabold  text-4xl text-black mt-10">
              {spot_name}
            </p>
            <p className=" font-bold w-3/4 text-black">{description}</p>
            <p className="flex text-black">
              <span>
                <IoLocationSharp size="30" />
              </span>{" "}
              <span className="text-xl font-bold text-gray-900">
                {location}
              </span>
            </p>
            <p className="text-2xl font-bold text-black">{country_name}</p>

            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">Travel Time: </h2>
                <div>
                  <p className="flex items-center justify-center gap-2">
                    <span>
                      <MdOutlineTimeToLeave size={30} />{" "}
                    </span>
                    <span className="font-extrabold text-black text-xl">
                      {" "}
                      {travel_time}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">Average Cost: </h2>
                <div>
                  <p className="flex items-center justify-center gap-2">
                    <span>
                      <GiMoneyStack size={30} />{" "}
                    </span>
                    <span className="font-extrabold text-black text-xl">
                      {" "}
                      {average_cost}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">Visitor Per Year: </h2>
                <div>
                  <p className="flex items-center justify-center gap-2">
                    <span>
                      <SlCalender  size={30} />{" "}
                    </span>
                    <span className="font-extrabold text-black text-xl">
                      {" "}
                      {visitor_per_year}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">Seasonality: </h2>
                <div>
                  <p className="flex items-center justify-center  gap-2">
                    <span className="font-extrabold text-black text-xl">
                      {" "}
                      {seasonality}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <h2 className="font-extrabold text-black flex items-center justify-center gap-2 border-2 rounded-lg py-2 px-4">
              <span><FaUserCheck /></span>
                <span>{user}</span>
              </h2>
              <h2 className="font-extrabold text-black flex items-center justify-center gap-2 border-2 rounded-lg py-2 px-4">
              <span><MdEmail /></span>
                <span>{email}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
