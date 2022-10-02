import { FC } from "react";
import Link from "next/link";

import style from "styles/components/shared/Breadcrumb/Breadcrumb.module.css";

const Breadcrumb: FC = () => {
  return (
    <ul className={style.list}>
      <li className={style.listItem}>
        <Link href={"/"}>
          <a className={style.link}>Haberler</a>
        </Link>
      </li>
      <li className={style.listItem}>
        <Link href={"/gundem"}>
          <a className={style.link}>gündem</a>
        </Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
