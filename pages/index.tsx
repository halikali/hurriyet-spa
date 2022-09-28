import Head from "next/head";
import { NextPage } from "next";

import HotAgenda from "components/pages/Home/HotAgenda";
import HomeCarousel from "components/pages/Home/HomeCarousel";
import style from "styles/pages/Home.module.css";

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
        <div className={style.homeCarouselWrapper}>
          <HomeCarousel />
        </div>
        <aside className={style.aside}>haber kartları aside</aside>
      </div>
    </>
  );
};

export default Home;
