import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import MainLayout from "../layouts/MainLayout";
import "../styles/tailwind.css";

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
