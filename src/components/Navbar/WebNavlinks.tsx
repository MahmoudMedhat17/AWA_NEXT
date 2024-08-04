import { WebNavData } from "./Navdata";
import Link from "next/link";
import React from "react";
import scrollToElement from "@/util/scrollToElement";
import { usePathname } from "next/navigation";

const WebNavlinks = () => {
  const path = usePathname();

  return (
    <div className="hidden lg:flex justify-around text-[#2D3E6A] text-[18px] ">
      <ul className="flex gap-8">
        {WebNavData.map((Navlink) => (
          <li key={Navlink.link} className="list-none cursor-pointer">
            {path === "/projects" ? (
              <Link
                href={Navlink.route}
                onClick={() => scrollToElement(`${Navlink.link}`)}
                style={{
                  color: `${path === "/projects" ? "black" : "#2D3E6A"}`,
                }}
              >
                {Navlink.title}
              </Link>
            ) : (
              <Link
                href={Navlink.link}
                onClick={() => scrollToElement(`${Navlink.link}`)}
                style={{
                  color: `${path === "/projects" ? "black" : "#2D3E6A"}`,
                }}
              >
                {Navlink.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebNavlinks;
