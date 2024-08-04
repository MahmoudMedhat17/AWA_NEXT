import React from "react";
import { MobNavData } from "./Navdata";
import Link from "next/link";
import { usePathname } from "next/navigation";
import scrollToElement from "@/util/scrollToElement";

const MobNavlinks = () => {
  const path = usePathname();

  return (
    <div>
      <ul className="flex flex-col items-center rounded-md bg-[#2d3e6a] px-6">
        {MobNavData.map((Navlink) => (
          <li
            key={Navlink.link}
            style={{
              color: `${path === "/projects" ? "black" : "white"}`,
            }}
            className="list-none cursor-pointer p-4"
          >
            {path === "/projects" ? (
              <Link
                href={Navlink.route}
                onClick={() => scrollToElement(Navlink.link)}
              >
                {Navlink.title}
              </Link>
            ) : (
              <Link
                href={Navlink.link}
                onClick={() => scrollToElement(Navlink.link)}
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

export default MobNavlinks;

// absolute w-[200px] top-[70%] right-0.5
