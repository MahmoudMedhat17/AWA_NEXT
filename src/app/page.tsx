import HomeSec from "@/Sections/HomeSec";
import AboutUs from "@/Sections/AboutUs";
import Services from "@/components/services/services";
import WhyChooseUs from "@/Sections/WhyChooseUs";
import OurValues from "@/Sections/OurValues";
import OurVision from "@/Sections/OurVision";
import Partners from "@/Sections/Partners/Partners";
import SuccesPartners from "@/Sections/Partners/SuccesPartners";
import ContactUs from "@/Sections/ContactUs";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <HomeSec />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <OurValues />
      <SuccesPartners />
      <OurVision />
      <Partners />
      <ContactUs />
      <a
        href="https://wa.me/201006684663"
        target="_blank"
        className=" bg-green-300 p-1 sm:p-2 rounded-full  cursor-pointer text-[#25D366] fixed right-3 bottom-3 sm:right-[10px] sm:bottom-[25px]"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}
