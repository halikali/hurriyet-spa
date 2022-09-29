import Head from "next/head";
import { NextPage } from "next";

import HotAgenda from "components/pages/Home/HotAgenda";
import HomeCarousel from "components/pages/Home/HomeCarousel";
import VerticaNewsCard from "components/shared/NewsCard/VerticalNewsCard";
import style from "styles/pages/Home.module.css";
import CurrencyWidget from "components/pages/Home/CurrencyWidget/CurrencyWidget";
import RecentNews from "components/pages/Home/RecentNews/RecentNews";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hürriyet ana sayfa</title>
      </Head>
      <div className={style.hotAgendaWrapper}>
        <HotAgenda />
      </div>

      <div className={style.landingWrapper}>
        <div className={style.main}>
          <div className={style.homeCarouselWrapper}>
            <HomeCarousel />
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
    </>
  );
};

export default Home;
