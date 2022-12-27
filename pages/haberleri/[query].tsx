import { NextPage } from "next";

import CategoryTitle from "components/shared/CategoryTitle/CategoryTitle";
import { searchNews } from "Services/NewsService";
import style from "styles/pages/CategoryPage.module.css";
import HorizontalNewsCardWithSpotText from "components/shared/NewsCard/HorizontalNewsCardWithSpotText";
import { ISearchPageProps } from "types/pageTypes";
import Head from "next/head";

export async function getServerSideProps(context: any) {
  const searchQuery = context.params.query;
  let res = null;

  try {
    res = (
      await searchNews(searchQuery).then((item) => item.map((a) => a.data))
    ).flat();
  } catch (error: any) {}

  return {
    props: { news: res, query: searchQuery },
  };
}
const Haberleri: NextPage<ISearchPageProps> = ({ news, query }) => {
  const newsQuery = query.replace(/(?:^|\s|[-"'([{])+\S/g, (w) =>
    w.toUpperCase()
  );

  return (
    <main className={"main main--category"}>
      <Head>
        <title>{newsQuery} haberleri - Son Dakika {newsQuery} Hakkında Güncel Haber ve videolar </title>
      </Head>
      <div className={"wrapper"}>
        <CategoryTitle
          title={query}
          description={`${newsQuery} haberleri sayfasında ${newsQuery} hakkında son dakika haberler ve güncel bilgiler bulunmaktadır. Toplam ${
            news.length ?? 0
          } ${newsQuery} haberi, videosu, fotoğrafı ve yazar yazısı yer almaktadır. Geçmişte ve bugün yeni yayımlanan son durum gelişmeleri ile pek çok haber sayfamızdan takip edilebilir.`}
        />
        <div className={style.container}>
          <ul className={style.list}>
            {Array.from(news)
              .slice(1)
              .map((item: any, index) => (
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
                    image={item?.attributes?.news_image?.data?.attributes?.url}
                    alt={
                      item?.attributes.news_image?.data?.attributes
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
  );
};

export default Haberleri;
