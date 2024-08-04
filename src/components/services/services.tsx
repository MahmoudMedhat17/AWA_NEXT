"use client";
import FireDialog from "./fire-dialog";
import ServiceDialog from "./service-dialog";
import { modalContent } from "./Data";
import { fireFightingContent } from "./Data";
import MenuServiceDialog from "./menu-service-dialog";
import { MenuServiceAnimation } from "./menu-service-animation";
import { useEffect, useState } from "react";

const Services = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div
      id="services"
      className="bg-[#2D3E6A] p-8 lg:p-20 flex flex-col justify-center items-center group"
    >
      <div className="text-white mb-14">
        <p className="w-fit border-2 border-t-[#DFA100] border-b-[#DFA100] border-r-0 border-l-0 text-[20px] mb-4">
          What We Offer
        </p>
        <h3 className="text-[28px] lg:text-[38px] font-medium mb-2">
          Our Services
        </h3>
        <p className="w-[100%] lg:w-[790px] text-[14px] lg:text-[22px]">
          The Company’s policy is to select only the highest quality equipment
          for any specific requirements
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <FireDialog item={fireFightingContent} />
        {modalContent.slice(0, 3).map((item) => (
          <ServiceDialog item={item} key={item.title} />
        ))}
        {modalContent.slice(3).map((item) => (
          <div className="flex md:hidden" key={item.title}>
            <ServiceDialog item={item} />
          </div>
        ))}

        <div className="p-20 hidden md:block">
          <ServiceDialog item={modalContent[3]} />
          <div className="rotate-[104deg] relative  ">
            {isClient &&
              modalContent.slice(4).map((item, index) => (
                <MenuServiceAnimation i={index} key={index}>
                  <MenuServiceDialog i={index} item={item} />
                </MenuServiceAnimation>
                
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
