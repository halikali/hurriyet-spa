import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import style from "styles/components/pages/Home/RecentNews.module.css";

const RecentNewsListItem: FC = () => {
  return (
    <li className={style.listItem}>
      <div className={style.wrapper}>
        <Link href="/">
          <a className={style.newsTitle}>
            Derbi öncesi Vodafone Park önünde olay!
          </a>
        </Link>
        <Link href="/">
          <a className={style.newsTag}>#Beşiktaş - Fenerbahçe</a>
        </Link>
      </div>
      <div className={style.imageWrapper}>
        <Image
          src={
            "https://i4.hurimg.com/i/hurriyet/75/66x66/633543d44e3fe0050caf0fbf.jpg"
          }
          alt={"Düğünde istek parça kavgası karakolda bitti"}
          title={"Düğünde istek parça kavgası karakolda bitti"}
          width={66}
          height={66}
          className={style.image}
        />
      </div>
    </li>
  );
};

export default RecentNewsListItem;
