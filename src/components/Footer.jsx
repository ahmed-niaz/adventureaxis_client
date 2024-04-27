import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className=" bg-black p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center container mx-auto">
        <div className="">
          <p className="font-jersey text-4xl font-extrabold text-white tracking-wide">
          <Link className=" text-3xl font-jersey text-[#135D66] tracking-wide flex items-start">
            Adventure Axis
          </Link>
         
          </p>
          <small className="text-white">All rights reserved ©️ 2024</small>
        </div>
        <div>
          <p className="text-white font-bold text-xl mb-4">Terms and Policy</p>
          <ul>
            <li className="text-white">Terms of Use</li>
            <li className="text-white">Code Of Conduct</li>
            <li className="text-white">Privacy</li>
            <li className="text-white">Policies</li>
          </ul>
        </div>
        <div className="flex flex-col">
        <p className="text-white font-bold text-xl mb-4">About Us</p>
          <ul>
            <li className="text-white">About</li>
            <li className="text-white">Meeting</li>
            <li className="text-white">Side Map</li>
            <li className="text-white">Advertise with us</li>
            <li className="text-white">Cookie Management</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-bold text-xl mb-4">Contact Us</p>
          <ul className="flex gap-8">
            <li className="text-white">
              <FaFacebookSquare size={30} />
            </li>
            <li className="text-white">
              <TiSocialInstagram size={30} />
            </li>
            <li className="text-white">
              <FaXTwitter size={30} />
            </li>
            <li className="text-white">
              <FaLinkedin size={30} />
            </li>
          </ul>
          <div className="mt-8">
            <p className="text-white font-bold text-xl mb-4">Support</p>
            <ul>
              <li className="text-white">Help 24/7</li>
              <li className="text-white">Advisories</li>
              
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;