/** @format */

import React from "react";

export const Numbers: React.FC = () => {
  return (
    <section className="py-20 text-primary px-52">
      <div className="flex flex-col justify-center">
        <div className="text-center mb-16">
          <p className=" mb-4">Our numbers</p>
          <h2 className="text-bg mb-4">
            Handshake infographic mass market
            <br />
            crowdfunding iteration.
          </h2>
        </div>
        <div className="flex justify-between gap-8">
          <div>
            <h3 className="text-xbg mb-2">120m</h3>
            <p className="text-xsm">Cool feature title</p>
          </div>
          <div>
            <h3 className="text-xbg mb-2">10.000</h3>
            <p className="text-xsm">Cool feature title</p>
          </div>
          <div>
            <h3 className="text-xbg mb-2">240</h3>
            <p className="text-xsm">Cool feature title</p>
          </div>
        </div>
      </div>
    </section>
  );
};
