import { FC } from "react";

import { ICategoryTitle } from "types/componentTypes";
import style from "styles/components/shared/CategoryTitle/CategoryTitle.module.css";

const CategoryTitle: FC<ICategoryTitle> = ({ title, description }) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default CategoryTitle;
