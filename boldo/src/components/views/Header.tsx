/** @format */

import React from "react";
import Logo from "assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <div className="justify-between flex text-primary pt-14 px-28 bg-secondary">
      <div className="flex gap-[20px]">
        <img src={Logo} />
      </div>
      <div className="flex gap-[40px] items-center">
        <div className="font-semibold hover:cursor-pointer hover:text-white">
          Services
        </div>
        <div className="font-semibold hover:cursor-pointer hover:text-white">
          About
        </div>
        <div className="font-semibold hover:cursor-pointer hover:text-white">
          Product
        </div>
        <button className="h-[42px] w-full font-bold border-[2px] border-primary rounded-full px-10 py-2 hover:bg-primary hover:text-white">
          Log In
        </button>
      </div>
    </div>
  );
};
