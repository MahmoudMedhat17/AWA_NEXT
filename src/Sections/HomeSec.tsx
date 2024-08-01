"use client";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CustomSlider from "@/components/HeroBanner/customSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface IAwaData {
  id: number;
  imageUrl: string;
}

const HomeSec = () => {
  const AwaData: IAwaData[] = [
    {
      id: 1,
      imageUrl: "/images/BannerImgs/143.png",
    },
    {
      id: 2,
      imageUrl: "/images/BannerImgs/144.png",
    },
    {
      id: 3,
      imageUrl: "/images/BannerImgs/145.png",
    },
    {
      id: 5,
      imageUrl: "/images/BannerImgs/lowcurrentSystem.png",
    },
  ];

  return (
    <div id="home">
      <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      orientation="horizontal"
      >
        <CarouselContent>
          <CarouselItem>
            <CustomSlider />
          </CarouselItem>
          {AwaData.map((value) => (
            <CarouselItem key={value.id}>
              <HeroBanner imgUrl={value.imageUrl} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeSec;
