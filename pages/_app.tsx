import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import MainLayout from "../layouts/MainLayout";
import "../styles/tailwind.css";
import "../styles/customize/main.scss";

// import swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let Layout;

  switch (router.pathname) {
    case "/":
      Layout = MainLayout;
      break;

    default:
      Layout = MainLayout;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
