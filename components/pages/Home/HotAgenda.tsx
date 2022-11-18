import Image from "next/image";
import { FC } from "react";

import style from "styles/components/pages/Home/HotAgenda.module.css";
import { calculateAncestor, utf8ToEnglish } from "utils";

interface IHotAgenda {
  news: [];
}

const HotAgenda: FC<IHotAgenda> = ({ news }) => {

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        <a
          href="https://www.hurriyet.com.tr/gundem/"
          target={"_blank"}
          rel="noreferrer"
        >
          Sıcak Gündem
        </a>
      </h2>
      <div className={style.wrapper}>
        {news.map((item: any) => (
          <a
            href={`${utf8ToEnglish(item.attributes.category_name)}${calculateAncestor(item.attributes.ancestor)}/${item.attributes.slug}_${item.id}`}
            key={item.attributes.slug}
            target={"_blank"}
            className={style.imageWrapper}
            rel="noreferrer"
          >
            <Image
              src={item.attributes.news_image.data.attributes.url}
              alt={item.attributes.news_image.data.attributes.name}
              title={item.attributes.news_title}
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
