/** @format */

import React from "react";

export const Values: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20 px-[150px]">
      <div className="gap-[80px] flex flex-col">
        <div className="text-center">
          <p className="text-sm">Our Blog</p>
          <h2 className="text-bg font-manrope">
            Value proposition accelerator product
            <br />
            management venture
          </h2>
        </div>
        <div className="border-t border-white my-4"></div>
        <div className="flex flex-col gap-[80px]">
          <div className="flex justify-between gap-12 font-manrope">
            <h3 className="text-bg">
              We are <span className="text-secondary">committed.</span>
            </h3>
            <p className="text-forth max-w-[500px] text-sm">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[80px]">
          <div className="flex justify-between gap-12 font-manrope">
            <h3 className="text-bg">
              We are <span className="text-secondary">responsible.</span>
            </h3>
            <p className="text-forth max-w-[500px] text-sm">
              Mass market iPhone buzz conversion analytics stock iteration
              responsive web design user experience business plan handshake.
              Return on investment seed round MVP backing supply chain.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[80px]">
          <div className="flex justify-between gap-12 font-manrope">
            <h3 className="text-bg">
              We aim for <span className="text-secondary">progress.</span>
            </h3>
            <p className="text-forth max-w-[500px] text-sm">
              Bootstrapping rockstar first mover advantage business model canvas
              alpha deployment launch party beta facebook metrics gamification
              growth hacking customer focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
