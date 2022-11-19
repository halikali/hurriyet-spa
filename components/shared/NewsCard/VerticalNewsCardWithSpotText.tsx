import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import style from "styles/components/shared/NewsCard/VerticalNewsCardWithSpotText.module.css";
import { calculateAncestor, parseToArray, utf8ToEnglish } from "utils";

interface IPageProps {
  id?: string;
  slug?: string;
  news_title?: string;
  news_spot_text?: string;
  category_name?: string;
  ancestor?: string;
  image?: string;
  alt?: string;
  tags: string;
}

const VerticalNewsCardWithSpotText: FC<IPageProps> = ({
  news_spot_text,
  slug,
  news_title,
  id,
  category_name,
  ancestor,
  image,
  alt,
  tags
}) => {
  return (
    <Link
      href={`/${utf8ToEnglish(category_name)}${calculateAncestor(
        ancestor
      )}/${slug}_${id}`}
    >
      <figure className={style.newsCard}>
        <div className={style.imageWrapper}>
          <Image
            src={image || ""}
            alt={alt}
            title={alt}
            width={160}
            height={90}
            layout={"responsive"}
            className={style.image}
          />
        </div>
        <figcaption className={style.figcaption}>
          <a
            href={`/${utf8ToEnglish(category_name)}${calculateAncestor(
              ancestor
            )}/${slug}_${id}`}
            title={alt || ""}
            className={style.title}
          >
            {news_title}
          </a>
          <a
            href={`/${utf8ToEnglish(category_name)}${calculateAncestor(
              ancestor
            )}/${slug}_${id}`}
            title={alt || ""}
            className={style.spotText}
          >
            {news_spot_text}
          </a>
          <a
            href={`/${utf8ToEnglish(category_name)}${calculateAncestor(
              ancestor
            )}/${slug}_${id}`}
            title={alt || ""}
            className={style.tag}
          >
            #{parseToArray(tags)[0]}
          </a>
        </figcaption>
      </figure>
    </Link>
  );
};

export default VerticalNewsCardWithSpotText;
