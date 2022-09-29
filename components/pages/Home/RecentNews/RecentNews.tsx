import { FC } from "react";
import RecentNewsListItem from "./RecentNewsListItem";

import style from "styles/components/pages/Home/RecentNews.module.css";

const RecentNews: FC = () => {
  return (
    <div className={style.recentNews}>
      <div className={style.header}>
        <h3 className={style.title}>güncel haberler</h3>
        <span>{"->"}</span>
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
