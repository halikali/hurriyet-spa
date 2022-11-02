import { FC } from "react";
import Link from "next/link";

import style from "styles/components/shared/Breadcrumb/Breadcrumb.module.css";
import { utf8ToEnglish } from "utils";

interface IPageProps {
  category: string;
}

const Breadcrumb: FC<IPageProps> = ({ category }) => {
  return (
    <ul className={style.list}>
      <li className={style.listItem}>
        <Link href={"/"}>
          <a className={style.link}>Haberler</a>
        </Link>
      </li>
      <li className={style.listItem}>
        <Link href={`/${utf8ToEnglish(category)}`}>
          <a className={style.link}>{category} haberleri</a>
        </Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
