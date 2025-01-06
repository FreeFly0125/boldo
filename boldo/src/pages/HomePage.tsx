/** @format */

import { withMainLayout } from "layouts";
import { HomeContainer } from "containers/Home";
import React from "react";

export const HomePage: React.FC = withMainLayout(() => <HomeContainer />);
