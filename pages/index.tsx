import Head from "next/head";
import { NextPage } from "next";

import HotAgenda from "components/pages/Home/HotAgenda";
import HomeCarousel from "components/pages/Home/HomeCarousel";
import VerticaNewsCard from "components/shared/NewsCard/VerticalNewsCard";
import style from "styles/pages/Home.module.css";
import CurrencyWidget from "components/pages/Home/CurrencyWidget/CurrencyWidget";
import RecentNews from "components/pages/Home/RecentNews/RecentNews";
import Seperator from "components/shared/Seperator/Seperator";
import HorizontalNewsCard from "components/shared/NewsCard/HorizontalNewsCard";
import HorizontalNewsCardWithSpotText from "components/shared/NewsCard/HorizontalNewsCardWithSpotText";
import { getNewsForAppearanceArea } from "Services/NewsService";
import { AreaToEppear } from "enums";

export async function getServerSideProps({ req, res }: any) {
  const hotAgendaNews = await getNewsForAppearanceArea(
    AreaToEppear.HOT_AGENDA
  ).then((item) => item);

  const mainSliderNews = await getNewsForAppearanceArea(
    AreaToEppear.MAIN_SLIDER
  ).then((item) => item);

  const mainAsideNews = await getNewsForAppearanceArea(
    AreaToEppear.MAIN_ASIDE
  ).then((item) => item);

  const highlightBoxNews = await getNewsForAppearanceArea(
    AreaToEppear.HIGHLIGHT_BOX
  ).then((item) => item);

  const doNotOverlookFullSize = await getNewsForAppearanceArea(
    AreaToEppear.DO_NOT_OVERLOOK_FULL_SİZE
  ).then((item) => item);

  const doNotOverlook = await getNewsForAppearanceArea(
    AreaToEppear.DO_NOT_OVERLOOK
  ).then((item) => item);

  const recentNews = await getNewsForAppearanceArea(
    AreaToEppear.RECENT_NEWS
  ).then((item) => item);

  const smallCardNews = await getNewsForAppearanceArea(
    AreaToEppear.SMALL_NEWS_CARDS
  ).then((item) => item);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=599, stale-while-revalidate=599"
  );

  return {
    props: {
      news: {
        hotAgenda: hotAgendaNews.map((item) => item.data).flat() || [],
        mainSlider: mainSliderNews.map((item) => item.data).flat() || [],
        mainAside: mainAsideNews.map((item) => item.data).flat() || [],
        highLight: highlightBoxNews.map((item) => item.data).flat() || [],
        doNotOverlookFullSize:
          doNotOverlookFullSize.map((item) => item.data).flat()[0] || [],
        doNotOverlook: doNotOverlook.map((item) => item.data).flat() || [],
        recentNews: recentNews.map((item) => item.data).flat() || [],
        smallCardNews: smallCardNews.map((item) => item.data).flat() || [],
      },
    },
  };
}

const Home: NextPage = ({ news }: any) => {
  const {
    hotAgenda,
    mainSlider,
    mainAside,
    highLight,
    smallCardNews,
    recentNews,
    doNotOverlook,
    doNotOverlookFullSize,
  } = news;

  return (
    <main className={"main main--home"}>
      <div className={"wrapper"}>
        <Head>
          <title>Hürriyet ana sayfa</title>
        </Head>
        <div className={style.hotAgendaWrapper}>
          <HotAgenda news={hotAgenda} />
        </div>

        <div className={style.landingWrapper}>
          <div className={style.main}>
            <div className={style.homeCarouselWrapper}>
              <HomeCarousel news={mainSlider} />
            </div>
            <CurrencyWidget />
            <div className={style.highlightBox}>
              {[...highLight].map((item) => (
                <VerticaNewsCard newsData={item} key={item.attributes.slug} />
              ))}
            </div>
          </div>
          <aside className={style.aside}>
            {[...mainAside].map((item) => (
              <VerticaNewsCard newsData={item} key={item.attributes.slug} />
            ))}

            <RecentNews news={recentNews} />
          </aside>
        </div>
        <Seperator />

        <div className={style.horizontalCardWrapper}>
          <HorizontalNewsCardWithSpotText
            alt={doNotOverlookFullSize.attributes?.title}
            ancestor={doNotOverlookFullSize.attributes?.ancestor}
            category_name={doNotOverlookFullSize.attributes?.category_name}
            id={doNotOverlookFullSize?.id}
            image={
              doNotOverlookFullSize.attributes?.news_image?.data?.attributes
                ?.url
            }
            news_spot_text={
              doNotOverlookFullSize.attributes?.news_spot_text ||
              "Lorem ipsum dolor sit amet"
            }
            news_title={doNotOverlookFullSize.attributes?.news_title}
            slug={doNotOverlookFullSize.attributes?.slug}
            tags={doNotOverlookFullSize.attributes?.tags}
          />
        </div>

        <div className={style.spotlessHorizontalNewsCardWrapper}>
          {[...doNotOverlook].map((item) => (
            <HorizontalNewsCard newsData={item} key={item.attributes.slug} />
          ))}
        </div>
        <div className={style.contentWrapper}>
          {[...smallCardNews].map((item) => (
            <VerticaNewsCard newsData={item} key={item.attributes.slug} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
