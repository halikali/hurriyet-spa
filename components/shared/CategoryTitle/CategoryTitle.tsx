import { FC } from "react";

import style from "styles/components/shared/CategoryTitle/CategoryTitle.module.css"

const CategoryTitle: FC = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Gündem</h1>
      <p className={style.description}>Güncel Haberler, Bugün Yaşanan Son Olaylar ve Gelişmeler</p>
    </div>
  );
};

export default CategoryTitle;
