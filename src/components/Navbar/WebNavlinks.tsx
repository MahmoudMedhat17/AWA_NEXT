import { WebNavData } from "./Navdata";
import Link from "next/link";
import React from "react";
import scrollToElement from "@/util/scrollToElement";

const WebNavlinks = () => {
  return (
    <div className="hidden lg:flex justify-around text-[#2D3E6A] text-[18px] ">
      <ul className="flex gap-8">
        {WebNavData.map((Navlink) => (
          <li
            key={Navlink.link}
            className="list-none cursor-pointer"
            onClick={() => scrollToElement(`${Navlink.link}`)}
          >
            <Link href={Navlink.link}>{Navlink.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebNavlinks;
