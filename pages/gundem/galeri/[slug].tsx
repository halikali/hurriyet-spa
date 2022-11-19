import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import Breadcrumb from "components/shared/Breadcrumb/Breadcrumb";
import DetailPageTagList from "components/shared/DetailPageTagList/DetailPageTagList";
import NewsTitle from "components/shared/NewsTitle/NewsTitle";
import { getGalleryNews, getSingularNews } from "Services/NewsService";
import style from "styles/pages/CategoryPage.module.css";

export async function getStaticPaths() {
  let res;

  try {
    res = await getGalleryNews("gündem").then((data) => data.data.data);
  } catch (error: any) {}

  return {
    paths:
      Array.from(res).map(
        (item: any) => `/gundem/galeri/${item.attributes.slug}_${item.id}`
      ) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  let res;

  try {
    res = await getSingularNews(
      params.slug.split("_")[1],
      "gallery-details"
    ).then((data) => data.data.data);
  } catch (error: any) {}

  return {
    props: {
      data: res ? res[0] : [],
    },
    revalidate: 600,
  };
}

const GundemGalleryDetailPage: NextPage = ({ data }: any) => {
  const {
    category_name,
    updatedAt,
    createdAt,
    gallery_item_contents,
    news_spot_text,
    news_title,
    tags,
  } = data.attributes;
  return (
    <main className={"main main--category"}>
      <Head>
        <title>{news_title}</title>
      </Head>
      <div className={"wrapper"}>
        <Breadcrumb category={category_name} />
        <NewsTitle
          title={news_title}
          updatedDate={"Güncelleme Tarihi: " + updatedAt}
        />
        <DetailPageTagList tags={tags} />
        <div className={style.pageContent}>
          <div className={style.newsWrapper}>
            <div className={style.newsInfo}>
              <span className={style.authorName}>John Doe, JDH</span>
              <span className={style.createTime}>
                Oluşturulma Tarihi: {createdAt}
              </span>
            </div>
            <h2 className={style.h2}>{news_spot_text}</h2>
            <div className="content">
              {Array.from(gallery_item_contents).map((item: any, index) => (
                <div className={style.newsCard} key={index}>
                  <Image
                    key={index}
                    src={
                      "https://i4.hurimg.com/i/hurriyet/75/0x0/62d70f1267b0a9386cdd0908.jpg"
                    }
                    alt={
                      "KYK borcu nasıl ve nereden hesaplanır e- Devlet KYK kredi borcu sorgulama ve öğrenme ekranı 2022"
                    }
                    title={
                      "KYK borcu nasıl ve nereden hesaplanır e- Devlet KYK kredi borcu sorgulama ve öğrenme ekranı 2022"
                    }
                    width={160}
                    height={90}
                    layout={"responsive"}
                  />
                  <span className={style.counter}>
                    {index + 1} / {gallery_item_contents.length}
                  </span>
                  <div
                    className={style.galleryBodyText}
                    dangerouslySetInnerHTML={{
                      __html: item?.gallery_text_content,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className={style.newsMore}>
              <p className={style.newsMoreText}>
                Haberlerle ilgili daha fazlası:
              </p>
              <DetailPageTagList tags={tags} />
            </div>
          </div>
          <aside className={style.aside}></aside>
        </div>
      </div>
    </main>
  );
};

export default GundemGalleryDetailPage;
