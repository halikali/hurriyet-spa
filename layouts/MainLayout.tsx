import WhatHappenedSlider from "components/shared/Header/WhatHappenedSlider";
import { ReactNode, FC } from "react";

import HurriyetHeader from "components/shared/Header/HurriyetHeader";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <div>
      <HurriyetHeader />
      <WhatHappenedSlider />
      {children}
    </div>
  );
};

export default MainLayout;
