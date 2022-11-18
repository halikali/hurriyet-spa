import Image from "next/image";
import { FC } from "react";

import style from "styles/components/shared/NewsCard/VerticalNewsCard.module.css";
import { calculateAncestor, utf8ToEnglish } from "utils";

interface IVerticalNewsCard {
  newsData: any;
}

const VerticalNewsCard: FC<IVerticalNewsCard> = ({ newsData }) => {
  return (
    <figure className={style.newsCard}>
      <a
        className={style.imageWrapper}
        href={`${utf8ToEnglish(
          newsData?.attributes?.category_name
        )}${calculateAncestor(newsData?.attributes?.ancestor)}/${
          newsData?.attributes?.slug
        }_${newsData?.id}`}
        title={newsData?.attributes?.news_title}
        target={"_blank"}
        rel="noreferrer"
      >
        <Image
          src={newsData?.attributes?.news_image.data?.attributes?.url}
          alt={newsData?.attributes?.news_image.data?.attributes?.name}
          title={newsData?.attributes?.news_title}
          width={160}
          height={90}
          layout={"responsive"}
          className={style.image}
        />
      </a>
      <figcaption className={style.figcaption}>
        <p className={style.title}>{newsData?.attributes?.news_title}</p>
        <p className={style.tag}>#etlik şehir hastanesi</p>
      </figcaption>
    </figure>
  );
};

export default VerticalNewsCard;
