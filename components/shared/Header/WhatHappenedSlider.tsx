import { FC } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import whatHappenedNews from "mocks/WhatHappened.json";
import assets from "assets";
import style from "styles/components/shared/Header/WhatHappenedSlider.module.css";

const WhatHappenedSlider: FC = () => {
  const { news } = whatHappenedNews;

  return (
    <section className={style.whatHappened}>
      <h2 className={style.title}>Bugün neler oldu?</h2>
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={{
          nextEl: "#whatHappened-nextEl",
        }}
        id="what-happened-slider"
      >
        {news.map((item) => (
          <SwiperSlide className={style.sliderItem} key={item.description}>
            <span className={style.sliderTitle}>#{item.title}</span>
            <span>:</span>
            <span className={style.content}>{item.description}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id="whatHappened-nextEl"
        className={style.nextEl}
      >
        <Image
          src={assets.icons.rightArrow.default.src}
          alt={"right arrow icon "}
          title={"right arrow icon"}
          width={15}
          height={15}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default WhatHappenedSlider;
