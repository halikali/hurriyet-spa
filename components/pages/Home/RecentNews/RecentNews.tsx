import { FC } from "react";
import RecentNewsListItem from "./RecentNewsListItem";
import Image from "next/image";

import assets from "assets";
import style from "styles/components/pages/Home/RecentNews.module.css";

interface IRecentNews {
  news: [];
}

const RecentNews: FC<IRecentNews> = ({ news }) => {
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
        {[...news].map((item: any) => (
          <RecentNewsListItem newsData={item} key={item.attributes.slug} />
        ))}
      </ul>
    </div>
  );
};

export default RecentNews;
