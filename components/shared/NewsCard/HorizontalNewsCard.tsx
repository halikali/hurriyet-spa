import Image from "next/image";
import { FC } from "react";

import style from "styles/components/shared/NewsCard/HorizontalNewsCard.module.css";

const HorizontalNewsCard: FC = () => {
  return (
    <figure className={style.newsCard}>
      <div className={style.imageWrapper}>
        <Image
          src={
            "https://i4.hurimg.com/i/hurriyet/75/348x195/63344dea4e3fe10d2ca89857.jpg"
          }
          alt={"20nci şehir hastanesi...  Beyaz reformun bir sonraki aşaması"}
          title={"20nci şehir hastanesi...  Beyaz reformun bir sonraki aşaması"}
          width={160}
          height={90}
          layout={"responsive"}
          className={style.image}
        />
      </div>
      <figcaption className={style.figcaption}>
        <a
          href="https://www.hurriyet.com.tr/gundem/son-dakika-etlik-sehir-hastanesi-aciliyor-bakan-koca-elimizden-gelenin-en-iyisini-yaptik-42144632"
          title="20nci şehir hastanesi...  Beyaz reformun bir sonraki aşaması"
          className={style.title}
        >
          20nci şehir hastanesi... Beyaz reformun bir sonraki aşaması
        </a>
        <a
          href="https://www.hurriyet.com.tr/haberleri/etlik-sehir-hastanesi"
          title="#etlik şehir hastanesi"
          className={style.tag}
        >
          #etlik şehir hastanesi
        </a>
      </figcaption>
    </figure>
  );
};

export default HorizontalNewsCard;
