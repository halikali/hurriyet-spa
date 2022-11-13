import { NextPage } from "next";
import Image from "next/image";

import Breadcrumb from "components/shared/Breadcrumb/Breadcrumb";
import DetailPageTagList from "components/shared/DetailPageTagList/DetailPageTagList";
import VerticalNewsCard from "components/shared/NewsCard/VerticalNewsCard";
import NewsTitle from "components/shared/NewsTitle/NewsTitle";
import style from "styles/pages/CategoryPage.module.css";
import { getNewsDetail, getSingularNews } from "Services/NewsService";

export async function getStaticPaths() {
  let res;
  try {
    res = await getNewsDetail("dünya").then((item) => item.data.data);
  } catch (error) {
    console.log(error);
  }

  return {
    paths: [...res].map((item: any) => {
      return `/dunya/${item.attributes.slug}_${item.id}`;
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  let res;

  try {
    res = await getSingularNews(params.slug.split("_")[1], "news-details").then(
      (item: any) => item.data.data
    );
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: res ? res[0] : [],
    },
    revalidate: 600,
  };
}

const DunyaDetailPage: NextPage = ({ data }: any) => {
  const {
    category_name,
    createdAt,
    news_content,
    news_image,
    news_title,
    updatedAt,
  } = data.attributes;

  return (
    <div>
      <main className={"main main--category"}>
        <div className={"wrapper"}>
          <Breadcrumb category={category_name} />
          <NewsTitle
            title={news_title}
            updatedDate={`Güncelleme Tarihi: ${updatedAt}`}
          />
          <DetailPageTagList />
          <div className={style.pageContent}>
            <div className={style.newsWrapper}>
              <div>
                <Image
                  src={
                    "https://i4.hurimg.com/i/hurriyet/75/424x282/63359c554e3fe113fc195012.jpg"
                  }
                  alt={"Tek gerçek kraliçenin kararı oğlunu çok kızdırdı"}
                  title={"Tek gerçek kraliçenin kararı oğlunu çok kızdırdı"}
                  width={160}
                  height={90}
                  layout={"responsive"}
                />
                <div className={style.newsInfo}>
                  <span className={style.authorName}>John Doe, JDH</span>
                  <span className={style.createTime}>
                    Oluşturulma Tarihi: {createdAt}
                  </span>
                </div>
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: news_content }}
              />
              <div className={style.newsMore}>
                <p className={style.newsMoreText}>
                  Haberlerle ilgili daha fazlası:
                </p>
                <DetailPageTagList />
              </div>
            </div>
            <aside className={style.aside}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={style.cardWrapper}>
                  <VerticalNewsCard />
                </div>
              ))}
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DunyaDetailPage;
