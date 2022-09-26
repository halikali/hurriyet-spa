import Image from "next/image";
import { FC } from "react";

import HotAgendNews from "../../../mocks/HotAgenda.json";
import style from "../../../styles/components/pages/Home/HotAgenda.module.css";

const HotAgenda: FC = () => {
  const { news } = HotAgendNews;

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        <a href="https://www.hurriyet.com.tr/gundem/" target={"_blank"} rel="noreferrer">Sıcak Gündem</a>
      </h2>
      <div className={style.wrapper}>
        {news.map((item) => (
          <a href={item.href} key={item.href} target={"_blank"} className={style.imageWrapper} rel="noreferrer">
            <Image
              src={item.imageUrl}
              alt={item.title}
              title={item.title}
              width={800}
              height={550}
              className={style.image}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HotAgenda;
