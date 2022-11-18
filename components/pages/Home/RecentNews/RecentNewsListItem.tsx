import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import style from "styles/components/pages/Home/RecentNews.module.css";
import { utf8ToEnglish } from "utils";
interface IRecentNewsListItem {
  newsData: any;
}

const RecentNewsListItem: FC<IRecentNewsListItem> = ({ newsData }) => {
  return (
    <li className={style.listItem}>
      <div className={style.wrapper}>
        <Link
          href={`${utf8ToEnglish(newsData?.attributes?.category_name)}${
            newsData?.attributes?.ancestor === "galeri" ? "/galeri" : ""
          }/${newsData?.attributes?.slug}_${newsData?.id}`}
        >
          <a className={style.newsTitle}>{newsData?.attributes?.news_title}</a>
        </Link>
        <Link
          href={`${utf8ToEnglish(newsData?.attributes?.category_name)}${
            newsData?.attributes?.ancestor === "galeri" ? "/galeri" : ""
          }/${newsData?.attributes?.slug}_${newsData?.id}`}
        >
          <a className={style.newsTag}>#Beşiktaş - Fenerbahçe</a>
        </Link>
      </div>
      <div className={style.imageWrapper}>
        <Image
          src={newsData?.attributes?.news_image.data?.attributes?.url}
          alt={newsData?.attributes?.news_image.data?.attributes?.name}
          title={newsData?.attributes?.news_title}
          width={66}
          height={66}
          className={style.image}
        />
      </div>
    </li>
  );
};

export default RecentNewsListItem;
