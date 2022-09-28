import Image from "next/image";
import { FC } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import HomeCarouselNews from "mocks/HomeCarousel.json";

const HomeCarousel: FC = () => {
  const { news } = HomeCarouselNews;

  return (
    <div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="home-carousel"
        loop={true}
      >
        {news?.map((item, i) => (
          <SwiperSlide key={i}>
            <a href={item.href} key={`${item.href}${i}`}>
              <Image
                src={item.src}
                alt={item.title}
                title={item.title}
                width={600}
                height={400}
                layout="responsive"
                priority
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
