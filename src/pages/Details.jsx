import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";


const Details = () => {
  const landmarks = useLoaderData();
  // const {id}= useParams()
 
  // const [spots,setSpots] = useState({})
  // useEffect(()=>{
  //   fetch(`http://localhost:3000/lists/${id}`)
  //   .then(res =>res.json())
  //   .then(data => {
  //     setSpots(data)
  //     console.log(data);
  //   })
  // },[id])
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
        className="min-h-screen bg-cover bg-no-repeat  opacity-80"
      >
        <div className="flex flex-col items-end justify-center min-h-screen">
          <div className="isolate w-[800px] aspect-video rounded-xl bg-white/20 shadow-2xl ring-1 ring-black/5">
            <p className="font-extrabold  text-6xl text-black text-center mt-10">
              {spot_name}
            </p>
            <p className="text-center font-bold w-3/4 mx-auto text-black">
              {description}
            </p>
            <p className="flex items-center justify-center text-black">
              <span>
                <IoLocationSharp size="20" />
              </span>{" "}
              {location}
            </p>
            <p>{country_name}</p>
            <div className="flex justify-center gap-12 ">
              <p className="flex items-center justify-center ">
                <span>
                  <GiMoneyStack />{" "}
                </span>
               <span className="font-extrabold text-black text-4xl"> {average_cost}</span>
              </p>
              <p className="flex items-center justify-center">
                <span>
                  <GiMoneyStack />{" "}
                </span>
                <span className="font-extrabold text-black text-4xl"> {travel_time}</span>
              </p>
              <p className="flex items-center justify-center">
                <span>
                  <GiMoneyStack />{" "}
                </span>
                <span className="font-extrabold text-black text-4xl"> {visitor_per_year}</span> 
              </p>
              <p className="flex items-center justify-center">
                <span>
                  <GiMoneyStack />{" "}
                </span>
                <span className="font-extrabold text-black text-4xl"> {seasonality}</span> 
              </p>
            </div>
            <div>
                <h2 className="font-extrabold text-black text-xl text-center">{user}</h2>
                <h2 className="font-extrabold text-black text-xl text-center">{email}</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
