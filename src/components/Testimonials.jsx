import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import person1 from "../assets/icons/perosn1.jpg";
import person2 from "../assets/icons/perosn2.jpg";
import person3 from "../assets/icons/perosn3.jpg";

const Testimonials = () => {
  return (
    <main>
      <div className="bg-gray-50 p-4 mb-10">
        <div className="container mx-auto">
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
                What truly set, apart was the exceptional service provided by
                the staff. They went above and beyond to ensure that my stay was
                enjoyable and memorable, offering personalized recommendations
                for places to visit and dining options to try
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
                  <p className="text-sm">Marketing Analyst</p>
                </div>
              </div>
              <p className="font-bold text-sm text-gray-500">
                What truly set, apart was the exceptional service provided by
                the staff. They went above and beyond to ensure that my stay was
                enjoyable and memorable, offering personalized recommendations
                for places to visit and dining options to try
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
                  What truly set, apart was the exceptional service provided by
                  the staff. They went above and beyond to ensure that my stay
                  was enjoyable and memorable, offering personalized
                  recommendations for places to visit and dining options to try
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

export default Testimonials;
