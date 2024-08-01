import HomeSec from "@/Sections/HomeSec";
import AboutUs from "@/Sections/AboutUs";
import Services from "@/components/services/services";
import WhyChooseUs from "@/Sections/WhyChooseUs";
import OurValues from "@/Sections/OurValues";
import OurVision from "@/Sections/OurVision";
import Partners from "@/Sections/Partners/Partners";
import SuccesPartners from "@/Sections/Partners/SuccesPartners";
// import Projects from "@/Sections/Projects";
import ContactUs from "@/Sections/ContactUs";

export default function Home() {
  return (
    <div>
      <HomeSec />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <OurValues />
      <OurVision />
      <Partners />
      <SuccesPartners />
      <ContactUs />
      {/* <Projects /> */}
    </div>
  );
}
