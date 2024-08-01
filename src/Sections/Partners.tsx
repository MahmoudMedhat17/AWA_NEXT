"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Ipartners {
  imageUrl: string;
}

const Partners = () => {
  const partnerLogos: Ipartners[] = [
    {
      imageUrl: "/images/partners/almatic.jpg",
    },
    {
      imageUrl: "/images/partners/american-dynamics.jpg",
    },
    {
      imageUrl: "/images/partners/ansul.jpg",
    },
    {
      imageUrl: "/images/partners/axis.jpg",
    },
    {
      imageUrl: "/images/partners/chemguard.jpg",
    },
    {
      imageUrl: "/images/partners/clavai.jpg",
    },
    {
      imageUrl: "/images/partners/edwards.jpg",
    },
    {
      imageUrl: "/images/partners/faac.jpg",
    },
    {
      imageUrl: "/images/partners/hochiki.jpg",
    },
    {
      imageUrl: "/images/partners/hygood.jpg",
    },
    {
      imageUrl: "/images/partners/kidde.jpg",
    },
    {
      imageUrl: "/images/partners/mueller.jpg",
    },
    {
      imageUrl: "/images/partners/nmfire.jpg",
    },
    {
      imageUrl: "/images/partners/notifier.jpg",
    },
    {
      imageUrl: "/images/partners/pentair.jpg",
    },
    {
      imageUrl: "/images/partners/toa.jpg",
    },
    {
      imageUrl: "/images/partners/tyco.jpg",
    },
    {
      imageUrl: "/images/partners/vikins.jpg",
    },
  ];

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
                  alt=""
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
