import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import style from "styles/components/shared/NewsCard/HorizontalNewsCardWithSpotText.module.css";
import { utf8ToEnglish } from "../../../utils";

interface IPageProps {
  id?: string;
  slug?: string;
  news_title?: string;
  news_spot_text?: string;
  category_name?: string;
  ancestor?: string;
}

const HorizontalNewsCardWithSpotText: FC<IPageProps> = ({
  news_spot_text,
  slug,
  news_title,
  id,
  category_name,
  ancestor,
}) => {
  return (
    <Link href={`/${utf8ToEnglish(category_name)}${ancestor}/${slug}_${id}`}>
      <figure className={style.newsCard}>
        <div className={style.imageWrapper}>
          <Image
            src={
              "https://i4.hurimg.com/i/hurriyet/75/424x282/63359c554e3fe113fc195012.jpg"
            }
            alt={"Tek gerçek kraliçenin kararı oğlunu çok kızdırdı"}
            title={"Tek gerçek kraliçenin kararı oğlunu çok kızdırdı"}
            width={160}
            height={90}
            layout={"responsive"}
            className={style.image}
          />
        </div>
        <figcaption className={style.figcaption}>
          <a
            href="https://www.hurriyet.com.tr/arama/#/?page=1&key=danimarka-kralicesi-margrethe-2&how=Article,Column,NewsPhotoGallery,NewsVideo,Recipe&isDetail=false"
            title="Tek gerçek kraliçe'nin kararı oğlunu çok kızdırdı"
            className={style.title}
          >
            {news_title}
          </a>
          <a
            href="https://www.hurriyet.com.tr/arama/#/?page=1&key=danimarka-kralicesi-margrethe-2&how=Article,Column,NewsPhotoGallery,NewsVideo,Recipe&isDetail=false"
            title="Tek gerçek kraliçe'nin kararı oğlunu çok kızdırdı"
            className={style.spotText}
          >
            {news_spot_text}
          </a>
          <a
            href="https://www.hurriyet.com.tr/arama/#/?page=1&key=danimarka-kralicesi-margrethe-2&how=Article,Column,NewsPhotoGallery,NewsVideo,Recipe&isDetail=false"
            title="#danimarka kraliçesi margrethe 2"
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
