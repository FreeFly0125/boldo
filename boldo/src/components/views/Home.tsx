/** @format */

import { Hero, Numbers, Story, Team, Values } from "components/common";
import React from "react";

export const HomeView: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Numbers />
      <Story />
      <Team />
      <Values />
    </div>
  );
};
