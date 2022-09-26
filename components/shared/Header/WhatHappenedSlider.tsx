import { FC } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import whatHappenedNews from "../../../mocks/WhatHappened.json";
import style from "../../../styles/components/shared/Header/WhatHappenedSlider.module.css";

const WhatHappenedSlider: FC = () => {
  const { news } = whatHappenedNews;
  return (
    <section className={style.whatHappened}>
      <h2 className={style.title}>Bugün neler oldu?</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 4,
          }
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
    </section>
  );
};

export default WhatHappenedSlider;
