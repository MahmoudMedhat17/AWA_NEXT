"use client";
import { useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // MAIN DIV
    <div id="aboutus" className="p-0 md:p-12 flex justify-center items-center">
      {/* IMGS DIV */}
      <div className="hidden sm:flex flex-col justify-center items-center m-[2.5rem] w-[30%] sm:max-lg:w-[50%]">
        <img
          src="/images/about-us-1.png"
          className="scale-[1.08] max-w-full h-auto"
          alt=""
        />
        <img
          src="/images/about-us-2.png"
          className="max-w-full h-auto"
          alt=""
        />
      </div>
      {/* Text DIV */}
      <div className="w-full max-sm:w-full max-sm:p-[1.5rem] text-sm sm:text-lg md:text-xl">
        <h2 className="text-[#2D3E6A] text-[40px] max-sm:text-[24px] sm:max-md:text-[28px] font-medium py-5">
          About Us
        </h2>
        <p className="mb-[1rem]">
          AWA is a MEP & Low current contracting and Trading Company . It is a
          group of experts Engineers diversified electromechanical activities
          for more than 15 years around Middle East, we are committed to deliver
          the highest quality and achieve total client satisfaction through
          world-class professional standards and efficiency. We have proudly
          accomplished many achievements in contracting and trading fields and
          look forward to contribute more towards the values of the country and
          its development.
        </p>
        <div>
          {isOpen ? (
            <p className="mb-[1rem]">
              Our work encompasses multitude of simple and complex projects that
              require attention t o specific details, thorough knowledge of the
              requirements, strategic planning, abundant resources a n d
              efficient execution . This has lifted our capability as a
              specialized company to execute all kinds of complex large
              electromechanical projects and maintenance work.
            </p>
          ) : (
            ""
          )}
          <button
            onClick={handleOpen}
            className="py-[0.4rem] px-[0.8rem] font-medium text-[#18582E] border-2 border-[#18582E] rounded-[10px] hover:bg-[#18582E] hover:text-white duration-300 bg-transparent"
          >
            {isOpen ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
