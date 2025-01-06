/** @format */

import React from "react";
import Logo from "assets/logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 text-third">
      <div className="py-[100px]">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-white rounded-xl p-12 text-center">
            <h2 className="text-bg mb-8">
              An enterprise template to ramp
              <br />
              up your company website
            </h2>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-full placeholder-black text-black"
              />
              <button className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-white">
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex ">
        <div className="flex gap-[180px]">
          <div>
            <img src={Logo} className="mb-[40px]" />
            <p className="mb-[64px] max-w-[300px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p>All rights reserved.</p>
          </div>

          <div>
            <h3 className="font-bold mb-[32px] text-black">Landings</h3>
            <ul className="space-y-[50px]">
              <li className="hover:cursor-pointer hover:text-primary">Home</li>
              <li className="hover:cursor-pointer hover:text-primary">
                Products
              </li>
              <li className="hover:cursor-pointer hover:text-primary">
                Services
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-[32px] text-black">Company</h3>
            <ul className="space-y-[50px]">
              <li className="hover:cursor-pointer hover:text-primary">Home</li>
              <div className="flex gap-[10px] items-center">
                <li className="hover:cursor-pointer hover:text-primary">
                  Careers
                </li>
                <div className="bg-secondary w-[72px] h-[30px] rounded-full text-primary font-bold text-tiny flex items-center justify-center hover:cursor-pointer hover:bg-primary hover:text-white">
                  Hiring!
                </div>
              </div>
              <li className="hover:cursor-pointer hover:text-primary">
                Services
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-[32px] text-black">Resources</h3>
            <ul className="space-y-[50px]">
              <li className="hover:cursor-pointer hover:text-primary">Blog</li>
              <li className="hover:cursor-pointer hover:text-primary">
                Products
              </li>
              <li className="hover:cursor-pointer hover:text-primary">
                Services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
