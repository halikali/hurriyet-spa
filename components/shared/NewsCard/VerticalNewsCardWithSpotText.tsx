import Image from "next/image";
import { FC } from "react";

import style from "styles/components/shared/NewsCard/VerticalNewsCardWithSpotText.module.css";

const VerticalNewsCardWithSpotText: FC = () => {
  return (
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
          {"'Tek gerçek kraliçe'nin kararı oğlunu çok kızdırdı"}
        </a>
        <a
          href="https://www.hurriyet.com.tr/arama/#/?page=1&key=danimarka-kralicesi-margrethe-2&how=Article,Column,NewsPhotoGallery,NewsVideo,Recipe&isDetail=false"
          title="Tek gerçek kraliçe'nin kararı oğlunu çok kızdırdı"
          className={style.spotText}
        >
          {"'Babaanneleri unvanlarını alıp çocuklarıma zarar verdi'"}
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
  );
};

export default VerticalNewsCardWithSpotText;
