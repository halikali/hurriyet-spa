import WhatHappenedSlider from "components/shared/Header/WhatHappenedSlider";
import { ReactNode, FC } from "react";

import style from "styles/layouts/MainLayout.module.css";
import HurriyetHeader from "components/shared/Header/HurriyetHeader";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <div>
      <HurriyetHeader />
      <WhatHappenedSlider />
      <main className={style.main}>
        <div className={style.container}>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
