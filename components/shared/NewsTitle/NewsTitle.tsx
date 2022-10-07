import { FC } from "react";

import style from "styles/components/shared/NewsTitle/NewsTitle.module.css";
import { INewsTitle } from "types/componentTypes";

const NewsTitle: FC<INewsTitle> = ({ title, updatedDate }) => {
  return (
    <div>
      <h1 className={style.h1}>{`${title}`}</h1>
      <span className={style.updateTime}>{updatedDate}</span>
    </div>
  );
};

export default NewsTitle;
