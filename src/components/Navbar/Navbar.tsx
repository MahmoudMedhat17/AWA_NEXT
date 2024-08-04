"use client";

import { useState, useRef } from "react";
import scrollToElement from "@/util/scrollToElement";
import useScrollHeight from "@/hooks/useScrollOpacity ";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Link from "next/link";
import WebNavlinks from "./WebNavlinks";
import MobNavlinks from "./MobNavlinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  // const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  // const handleMenu = () => {
  //   setDropDownMenu(!dropDownMenu);
  // };
  const scrollHeight = useScrollHeight();

  return (
    <nav
      // style={{ backgroundColor: `rgba(45,62,106,0.2)` }}
      ref={navBarRef}
      className="fixed w-full flex justify-between items-center px-8 z-50 transition-all duration-50 bg-gray-200 text-black"
    >
      <Link href="/" onClick={() => scrollToElement("/")}>
        <img
          src="/images/awa-logo.png"
          className={`${
            !(scrollHeight - 0.2) ? "w-[100px]" : "w-[60px]"
          } duration-300`}
        />
      </Link>
      <WebNavlinks />

      {/* MOB version*/}
      <div className="flex lg:hidden text-black text-[18px]">
        {/* <div className="cursor-pointer"> */}
        {/* {dropDownMenu ? (
            <IoMdClose
              size={30}
              onClick={handleMenu}
              className="text-[#2D3E6A]"
            />
          ) : (
            <IoMdMenu
              size={30}
              onClick={handleMenu}
              className="text-[#2D3E6A]"
            />
          )} */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoMdMenu size={30} className="text-[#2D3E6A]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <MobNavlinks />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* </div> */}
        {/* {dropDownMenu && <MobNavlinks />} */}
      </div>
    </nav>
  );
};

export default Navbar;
