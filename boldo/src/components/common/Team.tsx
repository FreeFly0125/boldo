/** @format */

import React from "react";
import Michael from "assets/images/Michael Scott.png";
import Dwight from "assets/images/Dwight Schrute.png";
import Pam from "assets/images/Pam Beetsley.png";

export const Team: React.FC = () => {
  const team = [
    {
      name: "Michael Scott",
      position: "General Manager",
      image: Michael,
    },
    {
      name: "Dwight Schrute",
      position: "General Manager",
      image: Dwight,
    },
    {
      name: "Pam Beetsley",
      position: "General Manager",
      image: Pam,
    },
  ];

  return (
    <section className="px-[250px] py-[124px] flex justify-center">
      <div className="max-w-[900px] gap-">
        <div className="px-[50px]">
          <div className="mb-16">
            <p className="text-sm text-third mb-4">Our team</p>
            <h2 className="text-bg mb-4">The people behind the work</h2>
            <p className="text-third text-sm">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index}>
              <img
                src={team[0].image}
                alt={team[0].name}
                className="w-[250px] h-[250px] rounded-lg mb-4"
              />
              <h3 className="text-xsm">{team[0].name}</h3>
              <p className="text-third text-sm">{team[0].position}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-[50px]">
          <div className="flex gap-[24px]">
            <img
              src={team[1].image}
              alt={team[1].name}
              className="w-[120px] h-[120px]"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-sm">{team[1].name}</h3>
              <p className="text-third">{team[1].position}</p>
            </div>
          </div>
          <div className="flex gap-[24px]">
            <img
              src={team[2].image}
              alt={team[2].name}
              className="w-[120px] h-[120px]"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-sm">{team[2].name}</h3>
              <p className="text-third">{team[2].position}</p>
            </div>
          </div>
          <div className="flex gap-[24px]">
            <img
              src={team[2].image}
              alt={team[2].name}
              className="w-[120px] h-[120px]"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-sm">{team[2].name}</h3>
              <p className="text-third">{team[2].position}</p>
            </div>
          </div>
          <div className="flex gap-[24px]">
            <img
              src={team[2].image}
              alt={team[2].name}
              className="w-[120px] h-[120px]"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-sm">{team[2].name}</h3>
              <p className="text-third">{team[2].position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
