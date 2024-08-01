import React from "react";
import { MobNavData } from "./Navdata";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobNavlinks = () => {
  const path = usePathname();

  return (
    <div>
      <ul className="flex flex-col items-center absolute w-[200px] top-[70%] right-0.5 rounded-md bg-[#2d3e6a]">
        {MobNavData.map((Navlink) => (
          <li
            key={Navlink.link}
            style={{
              color: `${path === "/projects" ? "black" : "white"}`,
            }}
            className="list-none cursor-pointer  p-4"
          >
            <Link href={Navlink.link}>{Navlink.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobNavlinks;
