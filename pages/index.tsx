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
      <Seperator />

      <div className="lg:w-[70%] columns-2 px-3 xl:p-0 ">
        <HorizontalNewsCard />
        <HorizontalNewsCard />
        <HorizontalNewsCard />
        <HorizontalNewsCard />
      </div>
      <div className="md:columns-3 lg:columns-4">
        <VerticaNewsCard />
        <VerticaNewsCard />
        <VerticaNewsCard />
        <VerticaNewsCard />
        <VerticaNewsCard />
        <VerticaNewsCard />
        <VerticaNewsCard />
        <VerticaNewsCard />
      </div>
    </>
  );
};

export default Home;
