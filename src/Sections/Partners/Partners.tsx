"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { partnerLogos } from "./PartnersData";

const Partners = () => {
  return (
    <div className="py-8 bg-white flex flex-col justify-center items-center">
      <div>
        <h2 className="text-[#2D3E6A] text-[24px] sm:text-[40px] font-medium">
          SOME OF OUR PARTNERS
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
            {partnerLogos.map((compLogo, index) => (
              <CarouselItem
                key={index}
                className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center items-center"
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

export default Partners;
