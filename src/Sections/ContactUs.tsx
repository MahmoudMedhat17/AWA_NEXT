import { ContactUsForm } from "@/components/contactus-form";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";

const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="flex flex-col sm:flex-row-reverse sm:justify-center sm:items-center sm:py-[3rem] sm:w-full"
    >
      {/* Contact us div */}
      <div className="bg-[#2D3E6A] text-white p-[1rem] lg:pt-[2rem] lg:pr-[3rem] lg:pb-[10rem] lg:pl-[3rem] lg:w-[35%] m-0 sm:mx-[2rem] sm:w-[100%] sm:rounded-lg">
        <h3 className="text-[25px] w-fit mx-auto mb-[3rem] border-2 border-t-[#DFA100] border-b-[#DFA100] border-r-0 border-l-0">
          Contact Us
        </h3>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-[1rem] gap-5">
            <FiPhone size={25} className="text-orange-400" />
            <p>+201001505067</p>
          </div>
          <div className="flex items-center mb-[1rem] gap-5">
            <IoLogoWhatsapp size={25} className="text-green-400" />
            <p>+201006684663</p>
          </div>
          <div className="flex items-center mb-[1rem] gap-5">
            <GiRotaryPhone size={25} className="text-orange-400" />
            <p>+02-27230990</p>
          </div>
          <div className="flex items-center mb-[1rem] gap-5">
            <CiGlobe size={25} className="text-orange-400" />
            <p>WWW.AWA-EG.COM</p>
          </div>
          <div className="flex items-center mb-[1rem] gap-5">
            <IoLocationOutline
              size={25}
              className="text-orange-400 sm:w-12 sm:h-12"
            />
            <p>21 (C) Maadi gardens project, Mokattam, Cairo, Egypt.</p>
          </div>
        </div>
      </div>
      {/* Get in touch div */}
      <div className="m-0 sm:mx-[2rem] p-[1rem] sm:w-[100%] lg:w-[35%]">
        <p className="hidden sm:block sm:mb-[2rem] lg:mb-[1rem] sm:text-[18px] w-fit border-2 border-t-[#DFA100] border-b-[#DFA100] border-r-0 border-l-0">
          Contact Us
        </p>
        <h3 className="text-[#2D3E6A] text-[25px] font-medium mb-[0.5rem] lg:mb-[4rem]">
          Get In Touch
        </h3>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
