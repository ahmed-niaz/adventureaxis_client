import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import slide1 from "../assets/banner/banner1.jpg";
import slide2 from "../assets/banner/bangladesh.jpg";
import slide3 from "../assets/banner/malysia.jpg";
import slide4 from "../assets/banner/thailand.jpg";
import slide5 from "../assets/banner/vietnam.jpg";

import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <main className="bg-gray-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="md:h-[500px] h-auto container mx-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center ">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#135D66] mb-3 text-center md:text-left">
                  Most Visited Places
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      " Indonesia Awaits: Dive into a Tapestry of Culture and Natural Beauty",
                    ]}
                  />
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  From Bali Beaches to Java s Volcanoes
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#135D66] btn glass py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#135D66]">
                    Explore Now
                  </button>
                </div>
              </div>

              <div className="w-1/2 p-4">
                <img
                  className="h-full object-cover w-full rounded-lg"
                  src={slide1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-auto  container mx-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center ">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#135D66] mb-3 text-center md:text-left">
                  Most Visited Places
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      "  Unveil Bangladesh: Rich Heritage, Vibrant Culture, and Untouched Beauty",
                    ]}
                  />
                 
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Land of Rivers and Resilience
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#135D66] btn glass py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#135D66]">
                    Explore Now
                  </button>
                </div>
              </div>

              <div className="w-1/2 p-4">
                <img
                  className="h-full object-cover w-full"
                  src={slide2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-auto  container mx-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center ">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#135D66] mb-3 text-center md:text-left">
                  Most Visited Places
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      " Experience Malaysia: Diverse Cultures, Pristine Beaches, and Urban Delights",
                    ]}
                  />
                  
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Where Tradition Meets Modernity?
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#135D66] btn glass py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#135D66]">
                    Explore Now
                  </button>
                </div>
              </div>

              <div className="w-1/2 p-4">
                <img
                  className="h-full object-cover w-full"
                  src={slide3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-auto  container mx-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center ">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#135D66] mb-3 text-center md:text-left">
                  Most Visited Places
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      " Thailand Unwrapped: Golden Temples, Tropical Beaches, and Exotic Cuisine",
                    ]}
                  />
                 
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Land of Smiles and Enchanting Adventures
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#135D66] btn glass py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#135D66]">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-1/2 p-4">
                <img
                  className="h-full object-cover w-full"
                  src={slide4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-auto  container mx-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center ">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#135D66] mb-3 text-center md:text-left">
                  Most Visited Places
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      " Vietnam Revealed: Timeless Charm, Rich History, and Breathtaking Landscapes",
                    ]}
                  />
                  
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  From Bustling Cities to Serene Countryside
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#135D66] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#135D66]">
                    Explore Now
                  </button>
                </div>
              </div>

              <div className="w-1/2 p-4 ">
                <img
                  className="h-full object-cover w-full"
                  src={slide5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Slider;
