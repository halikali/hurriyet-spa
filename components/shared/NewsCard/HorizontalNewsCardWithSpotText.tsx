import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import style from "styles/components/shared/NewsCard/HorizontalNewsCardWithSpotText.module.css";
import { calculateAncestor, utf8ToEnglish } from "utils";

interface IPageProps {
  id?: string;
  slug?: string;
  news_title?: string;
  news_spot_text?: string;
  category_name?: string;
  ancestor?: string;
  image?: string;
  alt?: string;
}

const HorizontalNewsCardWithSpotText: FC<IPageProps> = ({
  news_spot_text,
  slug,
  news_title,
  id,
  category_name,
  ancestor,
  image,
  alt,
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
            alt={alt || ""}
            title={alt || ""}
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
            #danimarka kraliçesi margrethe 2
          </a>
        </figcaption>
      </figure>
    </Link>
  );
};

export default HorizontalNewsCardWithSpotText;
