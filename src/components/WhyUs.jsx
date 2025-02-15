import discount from "../../public/discount.json";
import Lottie from "lottie-react";
import review from '../assets/bg/review.svg'
const WhyUs = () => {
  return (
    <main>
      <div className="container mx-auto my-10">
        <p className="font-extrabold text-4xl text-center text-[#165D66]">
          Why Adventure Axis?
        </p>
        <div className="divider w-9/12 mx-auto"></div>
        <div  style={{
                backgroundImage: `url(${review})`,
                backgroundPosition: 'bottom',
                backgroundRepeat:'no-repeat',
                backgroundSize: "w-full"
                
              }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-24 ">
          <div>
            <div className="flex flex-col items-center justify-center text-[#165D66] font-extrabold">
              <span className="text-3xl"> upTo </span>
              <div className="flex">
                <span className="text-9xl">30 </span>{" "}
                <span>
                  <Lottie animationData={discount} loop={true} />
                </span>
              </div>
              <span className="text-4xl">discount</span>
            </div>
            <div className="w-9/12 mx-auto">
              <p className="text-center text-gray-700 font-bold">
                For over a years offering the best plans at the best price with
                exclusive discounts.
              </p>
            </div>
          </div>
          <div>
            <div
             
              className="flex w-full flex-col items-center justify-center text-[#165D66] font-extrabold"
            >
              <span className="text-3xl">over</span>
              <span className="text-8xl">1 Million</span>
              <span className="text-4xl">Reviews</span>
            </div>

            <div className="w-9/12 mx-auto">
              <p className="text-center text-[#165D66] font-bold">
                Browse and compare the views of users and safe acertarás.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center text-[#165D66] font-extrabold">
              <span className="text-3xl"> pays </span>
              <span className="text-[70px]">the price + </span>
              <span className="text-4xl">Low</span>
            </div>
            <div className="w-9/12 mx-auto">
              <p className="text-center text-gray-700 font-bold">
                All days Escape at the best price in offers.
              </p>
            </div>
          </div>
        </div>
        <div className="divider w-9/12 mx-auto"></div>
      </div>
    </main>
  );
};

export default WhyUs;
