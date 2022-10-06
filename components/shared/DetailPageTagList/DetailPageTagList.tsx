import Link from "next/link";
import { FC } from "react";

import style from "styles/components/shared/DetailPageTagList/DetailPageTagList.module.css"

const DetailPageTagList: FC = () => {
  return (
    <ul className={style.tagList}>
      <li className={style.tagListItem}>
        <Link href={"/"}>
          <a className={style.link}>#mustafa şentop</a>
        </Link>
      </li>
      <li className={style.tagListItem}>
        <Link href={"/"}>
          <a className={style.link}>#Danimarka Kraliçesi Margrethe 2</a>
        </Link>
      </li>
      <li className={style.tagListItem}>
        <Link href={"/"}>
          <a className={style.link}>#Danimarka Kraliçesi Margrethe 2</a>
        </Link>
      </li>
    </ul>
  );
};

export default DetailPageTagList;
