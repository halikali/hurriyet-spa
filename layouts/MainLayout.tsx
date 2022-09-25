import { ReactNode, FC } from "react";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <div>
      <header>burası header</header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
