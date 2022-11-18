import Image from "next/image";
import { FC } from "react";

import style from "styles/components/shared/NewsCard/HorizontalNewsCard.module.css";
import { calculateAncestor, utf8ToEnglish } from "utils";

interface IHorizontalNewsCard {
  newsData: any;
}

const HorizontalNewsCard: FC<IHorizontalNewsCard> = ({ newsData }) => {
  return (
    <figure className={style.newsCard}>
      <div className={style.imageWrapper}>
        <Image
          src={newsData?.attributes?.news_image.data?.attributes?.url}
          alt={newsData?.attributes?.news_image.data?.attributes?.name}
          title={newsData?.attributes?.news_title}
          width={160}
          height={90}
          layout={"responsive"}
          className={style.image}
        />
      </div>
      <figcaption className={style.figcaption}>
        <a
          href={`${utf8ToEnglish(
            newsData?.attributes?.category_name
          )}${calculateAncestor(newsData?.attributes?.ancestor)}/${
            newsData?.attributes?.slug
          }_${newsData?.id}`}
          title={newsData?.attributes?.news_title}
          className={style.title}
        >
          {newsData?.attributes?.news_title}
        </a>
        <a
          href={`${utf8ToEnglish(
            newsData?.attributes?.category_name
          )}${calculateAncestor(newsData?.attributes?.ancestor)}/${
            newsData?.attributes?.slug
          }_${newsData?.id}`}
          title={newsData?.attributes?.news_title}
          className={style.tag}
        >
          #etlik şehir hastanesi
        </a>
      </figcaption>
    </figure>
  );
};

export default HorizontalNewsCard;
