"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { successPartnerLogos } from "./PartnersData";

const SuccesPartners = () => {
  return (
    <div className="py-[2rem] bg-white flex flex-col justify-center items-center">
      <div>
        <h2 className="text-[#2D3E6A] text-[24px] sm:text-[40px] font-medium">
          Partners Of Success
        </h2>
      </div>
      <div className="py-20 px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          orientation="horizontal"
        >
          <CarouselContent>
            {successPartnerLogos.map((compLogo, index) => (
              <CarouselItem
                className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center items-center"
                key={index}
              >
                <img
                  key={index}
                  src={compLogo.imageUrl}
                  className="w-[130px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>  
    </div>
  );
};

export default SuccesPartners;
