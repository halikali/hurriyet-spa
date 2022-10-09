import { FC } from "react";
import RecentNewsListItem from "./RecentNewsListItem";
import Image from "next/image";

import assets from "assets";
import style from "styles/components/pages/Home/RecentNews.module.css";

const RecentNews: FC = () => {
  return (
    <div className={style.recentNews}>
      <div className={style.header}>
        <h3 className={style.title}>güncel haberler</h3>
        <Image
          src={assets.icons.rightArrow.default.src}
          width={15}
          height={15}
          alt={"right arrow icon"}
          title={"right arrow icon"}
          className={style.arrow}
        />
      </div>

      <ul className={style.list}>
        <RecentNewsListItem />
        <RecentNewsListItem />
        <RecentNewsListItem />
        <RecentNewsListItem />
        <RecentNewsListItem />
        <RecentNewsListItem />
        <RecentNewsListItem />
      </ul>
    </div>
  );
};

export default RecentNews;
