import Breadcrumb from "components/shared/Breadcrumb/Breadcrumb";
import CategoryTitle from "components/shared/CategoryTitle/CategoryTitle";
import HorizontalNewsCardWithSpotText from "components/shared/NewsCard/HorizontalNewsCardWithSpotText";
import VerticalNewsCardWithSpotText from "components/shared/NewsCard/VerticalNewsCardWithSpotText";
import { NextPage } from "next";
import style from "styles/pages/CategoryPage.module.css";

const index: NextPage = () => {
  return (
    <main className={"main main--category"}>
      <div className={"wrapper"}>
        <Breadcrumb />
        <CategoryTitle
          title="dünya"
          description="Dünya'dan Son Dakika Haberleri ve Yurtdışından Gelişmeler"
        />
        <div className={style.container}>
          <VerticalNewsCardWithSpotText />

          <ul className={style.list}>
            {Array.from({ length: 29 }).map((_, index) => (
              <li key={index} className={style.listItem}>
                <HorizontalNewsCardWithSpotText />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default index;