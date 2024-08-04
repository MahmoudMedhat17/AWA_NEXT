import { ContactUsForm } from "@/components/contactus-form";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";

const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="flex flex-col sm:flex-row-reverse sm:justify-center sm:items-center sm:py-12 sm:w-full"
    >
      {/* Contact us div */}
      <div className="bg-[#2D3E6A] text-white p-4 lg:pt-8 lg:pr-12 lg:pb-40 lg:pl-12 lg:w-[35%] m-0 sm:mx-8 sm:w-[100%] sm:rounded-lg">
        <h3 className="text-[25px] w-fit mx-auto mb-12 border-2 border-t-[#DFA100] border-b-[#DFA100] border-r-0 border-l-0">
          Contact Us
        </h3>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4 gap-5">
            <FiPhone size={25} className="text-orange-400" />
            <p>+201001505067</p>
          </div>
          <div className="flex items-center mb-4 gap-5">
            <IoLogoWhatsapp size={25} className="text-green-400" />
            <p>+201006684663</p>
          </div>
          <div className="flex items-center mb-4 gap-5">
            <GiRotaryPhone size={25} className="text-orange-400" />
            <p>+02-27230990</p>
          </div>
          <div className="flex items-center mb-4 gap-5">
            <CiGlobe size={25} className="text-orange-400" />
            <p>WWW.AWA-EG.COM</p>
          </div>
          <div className="flex items-center gap-5">
            <FaLocationDot size={25} className="text-orange-400" />
            <p>21 (C) Maadi gardens <br /> project, Mokattam, Cairo, Egypt.</p>
          </div>
        </div>
      </div>
      {/* Get in touch div */}
      <div className="m-0 sm:mx-8 p-4 sm:w-[100%] lg:w-[35%]">
        <p className="hidden sm:block sm:mb-8 lg:mb-4 sm:text-[18px] w-fit border-2 border-t-[#DFA100] border-b-[#DFA100] border-r-0 border-l-0">
          Contact Us
        </p>
        <h3 className="text-[#2D3E6A] text-[25px] font-medium mb-2 lg:mb-16">
          Get In Touch
        </h3>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
