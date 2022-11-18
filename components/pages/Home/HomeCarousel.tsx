import Image from "next/image";
import { FC } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { calculateAncestor, utf8ToEnglish } from "utils";

interface IHomeCarousel {
  news: [];
}

const HomeCarousel: FC<IHomeCarousel> = ({ news }) => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="home-carousel"
        loop={true}
      >
        {news?.map((item: any, i) => (
          <SwiperSlide key={item.attributes.slug}>
            <a
              href={`${utf8ToEnglish(
                item.attributes.category_name
              )}${calculateAncestor(item?.attributes?.ancestor)}/${
                item.attributes.slug
              }_${item.id}`}
            >
              <Image
                src={item.attributes.news_image.data.attributes.url}
                alt={item.attributes.news_image.data.attributes.name}
                title={item.attributes.news_title}
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
