"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ServicesIcon from "./service-icon";
import { useState } from "react";

interface Iprops {
  item: {
    img: string;
    title: string;
    content: {
      img: string;
      title: string;
      des?: string;
      list?: string[];
    }[];
  };
}

const FireDialog = ({ item }: Iprops) => {
  const [activeImg, setActiveImg] = useState(item.content[0]);

  return (
    <Dialog>
      <DialogTrigger>
        <ServicesIcon img={item.img} title={item.title} />
      </DialogTrigger>
      <DialogContent className=" w-fit overflow-auto gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-[40%]">
            <img src={activeImg.img} className="object-contain w-full" />
            <div className="flex flex-wrap w-[70vw]">
              {item.content.map((item) => (
                <img
                  src={item.img}
                  className={`${
                    item.img === activeImg.img ? "hidden" : "flex"
                  } w-20 md:w-16`}
                  onClick={() => {
                    setActiveImg(item);
                  }}
                  key={item.img}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <DialogTitle className="text-[#2D3E6A] text-xl md:text-2xl py-4 uppercase">
              {activeImg.title}
            </DialogTitle>
            <DialogDescription className="text-black lg:text-base pb-4">
              {activeImg.des}
            </DialogDescription>
            <DialogDescription>
              <ul className="pl-4">
                {activeImg.list?.map((list) => (
                  <li className="text-black lg:text-lg list-disc" key={list}>
                    {list}
                  </li>
                ))}
              </ul>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FireDialog;
