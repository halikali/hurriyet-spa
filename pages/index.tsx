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

export async function getServerSideProps(context: any) {
  const hotAgendaNews = await getNewsForAppearanceArea(
    AreaToEppear.HOT_AGENDA
  ).then((item) => item);

  const mainSliderNews = await getNewsForAppearanceArea(
    AreaToEppear.MAIN_SLIDER
  ).then((item) => item);

  const mainAsideNews = await getNewsForAppearanceArea(
    AreaToEppear.MAIN_ASIDE
  ).then((item) => item);

  return {
    props: {
      news: {
        hotAgenda: hotAgendaNews.map((item) => item.data).flat() || [],
        mainSlider: mainSliderNews.map((item) => item.data).flat() || [],
        mainAside: mainAsideNews.map((item) => item.data).flat() || [],
      },
    },
  };
}

const Home: NextPage = ({ news }: any) => {
  const { hotAgenda, mainSlider, mainAside } = news;

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
              <VerticaNewsCard />
              <VerticaNewsCard />
              <VerticaNewsCard />
            </div>
          </div>
          <aside className={style.aside}>
            <VerticaNewsCard />
            <VerticaNewsCard />
            <RecentNews />
          </aside>
        </div>
        <Seperator />

        <div className={style.horizontalCardWrapper}>
          <HorizontalNewsCardWithSpotText />
        </div>

        <div className={style.spotlessHorizontalNewsCardWrapper}>
          <HorizontalNewsCard />
          <HorizontalNewsCard />
          <HorizontalNewsCard />
          <HorizontalNewsCard />
        </div>
        <div className={style.contentWrapper}>
          <VerticaNewsCard />
          <VerticaNewsCard />
          <VerticaNewsCard />
          <VerticaNewsCard />
          <VerticaNewsCard />
          <VerticaNewsCard />
          <VerticaNewsCard />
          <VerticaNewsCard />
        </div>
      </div>
    </main>
  );
};

export default Home;
