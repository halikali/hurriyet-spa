import Head from "next/head";
import { NextPage } from "next";
import HotAgenda from "components/pages/Home/HotAgenda";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hürriyet ana sayfa</title>
      </Head>
      <div>
        <HotAgenda />
      </div>
    </>
  );
};

export default Home;
