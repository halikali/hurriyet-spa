import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

import MainLayout from "../layouts/MainLayout";
import "styles/tailwind.css";
import "styles/customize/main.scss";

// import swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
