"use client";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CustomSlider from "@/components/HeroBanner/customSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AwaData } from "./Data";

const HomeSec = () => {
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
