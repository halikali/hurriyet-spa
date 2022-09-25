import { ReactNode, FC } from "react";

import HurriyetHeader from "../components/shared/Header/HurriyetHeader";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <div>
      <HurriyetHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
