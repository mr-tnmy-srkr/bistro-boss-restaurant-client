import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly  h-[300px] font-medium text-white">
        <div className="flex-1 bg-[#1F2937] h-full flex flex-col justify-center items-center text-center  py-6">
          <h1 className="text-xl pb-6">CONTACT US</h1>
          <p className=" leading-6">
            123 ABS Street, Uni 21, India
            <br />
            +91 123456789 <br /> Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun:
            10:00 - 23:00
          </p>
        </div>
        <div className="flex-1 bg-[#111827] h-full flex flex-col justify-center items-center text-center  py-6">
          <h1 className="text-xl pb-6">CONTACT US</h1>
          <p className=" leading-6">Join us on social media</p>
          <div className="flex text-xl gap-4 pt-2">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="text-center pt-16 md:pt-4 pb-4 bg-[#151515]">
        <p className="text-white font-medium leading-9 text-base ">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
