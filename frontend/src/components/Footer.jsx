import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------left Section */}
        <div>
        <img onClick={()=>navigate('/')} className="w-44 mb-5 cursor-pointer" src={assets.logo} alt="" />
          <p className="w-full  md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
            nisi beatae excepturi vel provident velit, error iste quas ipsum,
            consequatur quidem deleniti maxime, nostrum eveniet atque
            perspiciatis inventore eius.
          </p>
        </div>
        {/* ---------Center Section */}
        <div>
          <p className="text-xl font-medium mb-5 uppercase">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ---------Right Section */}
        <div>
          <p className="text-xl font-medium mb-5 uppercase">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+8801787769270</li>
            <li>mazbauddin2010@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ----------Copyright Section -------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright © 2025 Mazba Uddin Shawon - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
