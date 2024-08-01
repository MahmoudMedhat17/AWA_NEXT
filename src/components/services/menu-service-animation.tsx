"use client";

import { motion } from "framer-motion";

export const MenuServiceAnimation = ({
  i,
  children,
}: {
  i: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      animate={{ rotate: (180 / 6) * i + "deg" }}
      className={`group-hover:origin-[200px]  right-[320px]  invisible group-hover:visible duration-500 absolute w-[50px] h-[50px] rounded-full `}
    >
      {children}
    </motion.div>
  );
};
