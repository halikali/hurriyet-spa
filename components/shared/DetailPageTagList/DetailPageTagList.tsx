import Link from "next/link";
import { FC } from "react";

import style from "styles/components/shared/DetailPageTagList/DetailPageTagList.module.css";
import { parseToArray } from "utils";

interface IDetailPageTagList {
  tags: string;
}

const DetailPageTagList: FC<IDetailPageTagList> = ({ tags }) => {
  return (
    <ul className={style.tagList}>
      {parseToArray(tags).map((item, i) => (
        <li className={style.tagListItem} key={item + i}>
          <Link href={`/haberleri/${item}`}>
            <a className={style.link}>#{item}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DetailPageTagList;
