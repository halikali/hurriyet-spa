import CategoryTitle from "components/shared/CategoryTitle/CategoryTitle";
import HorizontalNewsCardWithSpotText from "components/shared/NewsCard/HorizontalNewsCardWithSpotText";
import VerticalNewsCardWithSpotText from "components/shared/NewsCard/VerticalNewsCardWithSpotText";
import { NextPage } from "next";
import Head from "next/head";
import style from "styles/pages/CategoryPage.module.css";
import { getGalleryNews, getNewsDetail } from "Services/NewsService";

type attributesType = {
  news_title: string;
  news_content: String;
  category_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  news_spot_text: string;
  news_image: any;
  ancestor: string;
  tags: string;
};

type newsType = {
  id: number;
  attributes: attributesType;
};

interface IPageProps {
  news: newsType[];
}

export async function getServerSideProps({ req, res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=599, stale-while-revalidate=599"
  );

  const galleryNews = getGalleryNews("dünya").then((item) => item.data.data);
  const newsDetail = getNewsDetail("dünya").then((item) => item.data.data);

  return {
    props: { news: [await newsDetail, await galleryNews].flat() },
  };
}

const index: NextPage<IPageProps> = ({ news }) => {
  const mainNews = news[0];

  return (
    <>
      <Head>
        <title>
          {"Dünya'dan Son Dakika Haberleri ve Yurtdışından Gelişmeler"}
        </title>
      </Head>
      <main className={"main main--category"}>
        <div className={"wrapper"}>
          <CategoryTitle
            title="dünya"
            description="Dünya'dan Son Dakika Haberleri ve Yurtdışından Gelişmeler"
          />
          <div className={style.container}>
            <VerticalNewsCardWithSpotText
              id={mainNews.id.toString()}
              news_title={mainNews.attributes.news_title}
              news_spot_text={
                mainNews.attributes.news_spot_text ||
                "loren ipsum dolor sit amet "
              }
              slug={mainNews.attributes.slug}
              category_name={mainNews.attributes.category_name}
              ancestor={mainNews.attributes.ancestor}
              image={mainNews.attributes?.news_image?.data?.attributes?.url}
              alt={
                mainNews.attributes.news_image.data.attributes.alternativeText
              }
              tags={mainNews.attributes.tags}
            />
            <ul className={style.list}>
              {Array.from(news)
                .slice(1)
                .map((item, index) => (
                  <li key={index} className={style.listItem}>
                    <HorizontalNewsCardWithSpotText
                      id={item.id.toString()}
                      key={item.attributes.slug}
                      news_title={item.attributes.news_title}
                      news_spot_text={
                        item.attributes.news_spot_text ||
                        "loren ipsum dolor sit amet "
                      }
                      slug={item.attributes.slug}
                      category_name={item.attributes.category_name}
                      ancestor={item.attributes.ancestor}
                      image={item.attributes?.news_image?.data?.attributes?.url}
                      alt={
                        item.attributes.news_image?.data?.attributes
                          ?.alternativeText
                      }
                      tags={item.attributes.tags}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
