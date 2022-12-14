import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import Breadcrumb from "components/shared/Breadcrumb/Breadcrumb";
import DetailPageTagList from "components/shared/DetailPageTagList/DetailPageTagList";
import VerticalNewsCard from "components/shared/NewsCard/VerticalNewsCard";
import NewsTitle from "components/shared/NewsTitle/NewsTitle";
import { getNewsDetail, getSingularNews } from "Services/NewsService";
import { INewsDetailPageProps } from "types/pageTypes";
import { convertTimeToHumanReadable } from "utils";
import style from "styles/pages/CategoryPage.module.css";

export async function getStaticPaths() {
  let res;

  try {
    res = await getNewsDetail("gündem").then((data) => data.data.data);
  } catch (error: any) {}

  return {
    paths:
      Array.from(res).map(
        (item: any) => `/gundem/${item.attributes.slug}_${item.id}`
      ) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  let res;

  try {
    res = await getSingularNews(params.slug.split("_")[1], "news-details").then(
      (data) => data.data.data
    );
  } catch (error: any) {}

  return {
    props: {
      data: res ? res[0] : [],
    },
    revalidate: 600,
  };
}

const GundemDetailPage: NextPage<INewsDetailPageProps> = ({ data }) => {
  const {
    category_name,
    updatedAt,
    createdAt,
    news_title,
    news_image,
    news_content,
    tags,
  } = data.attributes;

  return (
    <div>
      <Head>
        <title>{news_title}</title>
      </Head>
      <main className={"main main--category"}>
        <div className={"wrapper"}>
          <Breadcrumb category={category_name} />
          <NewsTitle
            title={news_title}
            updatedDate={`Güncelleme Tarihi: ${convertTimeToHumanReadable(updatedAt)}`}
          />
          <DetailPageTagList tags={tags} />
          <div className={style.pageContent}>
            <div className={style.newsWrapper}>
              <div>
                <Image
                  src={news_image.data.attributes.url}
                  alt={news_image.data.attributes.alternativeText}
                  title={news_image.data.attributes.alternativeText}
                  width={160}
                  height={90}
                  layout={"responsive"}
                />
                <div className={style.newsInfo}>
                  <span className={style.authorName}>John Doe, JDH</span>
                  <span className={style.createTime}>
                    Oluşturulma Tarihi: {convertTimeToHumanReadable(createdAt)}
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
                <DetailPageTagList tags={tags} />
              </div>
            </div>
            <aside className={style.aside}>
              {/* {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={style.cardWrapper}>
                  <VerticalNewsCard />
                </div>
              ))} */}
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GundemDetailPage;
