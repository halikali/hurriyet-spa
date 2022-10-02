import Breadcrumb from "components/shared/Breadcrumb/Breadcrumb";
import CategoryTitle from "components/shared/CategoryTitle/CategoryTitle";
import HorizontalNewsCardWithSpotText from "components/shared/NewsCard/HorizontalNewsCardWithSpotText";
import VerticalNewsCardWithSpotText from "components/shared/NewsCard/VerticalNewsCardWithSpotText";
import { NextPage } from "next";

const index: NextPage = () => {
  return (
    <div className="px-4 bg-white">
      <Breadcrumb />
      <CategoryTitle />

      <div className="mt-5 md:w-[70%]">
        <VerticalNewsCardWithSpotText />

        <ul className="list">
          {Array.from({ length: 29 }).map((_, index) => (
            <li key={index} className="listItem">
              <HorizontalNewsCardWithSpotText />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
