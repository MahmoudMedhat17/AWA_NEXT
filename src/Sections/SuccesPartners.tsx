import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface IpartnerLogos {
  imageUrl: string;
}

const SuccesPartners = () => {
  const partnerLogos: IpartnerLogos[] = [
    {
      imageUrl: "/images/success-partners/aff.jpg",
    },
    {
      imageUrl: "/images/success-partners/als.jpg",
    },
    {
      imageUrl: "/images/success-partners/clinart.jpg",
    },
    {
      imageUrl: "/images/success-partners/cottonil.jpg",
    },
    {
      imageUrl: "/images/success-partners/ezzsteel.jpg",
    },
    {
      imageUrl: "/images/success-partners/gas.jpg",
    },
    {
      imageUrl: "/images/success-partners/gouna.jpg",
    },
    {
      imageUrl: "/images/success-partners/hometown.jpg",
    },
    {
      imageUrl: "/images/success-partners/icity.jpg",
    },
    {
      imageUrl: "/images/success-partners/mountainview.jpg",
    },
    {
      imageUrl: "/images/success-partners/pepsi.jpg",
    },
    {
      imageUrl: "/images/success-partners/unilever.jpg",
    },
    {
      imageUrl: "/images/success-partners/zetco.jpg",
    },
  ];

  return (
    <div className="py-[2rem] bg-white flex flex-col justify-center items-center">
      <div>
        <h2 className="text-[#2D3E6A] text-[24px] sm:text-[40px] font-medium">
          Partners Of Success
        </h2>
      </div>
      <div className="py-20 px-8">
        <Carousel
        // opts={{
        //   align: "start",
        //   loop: true,
        // }}
        // plugins={[
        //   Autoplay({
        //     delay: 3000,
        //   }),
        // ]}
        // orientation="horizontal"
        >
          <CarouselContent>
            {partnerLogos.map((compLogo, index) => (
              <CarouselItem
                className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center items-center"
                key={index}
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

export default SuccesPartners;
